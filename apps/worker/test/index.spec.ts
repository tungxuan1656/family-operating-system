import {
  env,
  createExecutionContext,
  waitOnExecutionContext,
  SELF,
} from 'cloudflare:test'
import { beforeEach, describe, expect, it } from 'vitest'

import { applyMigrations } from './helpers/apply-migrations'
import worker from '@/index'

const IncomingRequest = Request

const clearTableStatements = [
  'DELETE FROM reward_request_events',
  'DELETE FROM reward_requests',
  'DELETE FROM rewards',
  'DELETE FROM contribution_events',
  'DELETE FROM contributions',
  'DELETE FROM point_balances',
  'DELETE FROM points_ledger',
  'DELETE FROM user_preferences',
  'DELETE FROM child_profiles',
  'DELETE FROM family_members',
  'DELETE FROM families',
  'DELETE FROM refresh_sessions',
  'DELETE FROM auth_identities',
  'DELETE FROM users',
]

type ApiEnvelope<T> = {
  data: T
  meta: {
    requestId: string
  }
}

const parseJson = async <T>(response: Response): Promise<T> =>
  response.json() as Promise<T>

beforeEach(async () => {
  await applyMigrations(env.DB)

  for (const statement of clearTableStatements) {
    await env.DB.exec(statement)
  }
})

describe('Worker foundation', () => {
  it('responds with health payload', async () => {
    const request = new IncomingRequest('http://example.com/api/v1/health')
    const ctx = createExecutionContext()
    const response = await worker.fetch(request, env, ctx)

    await waitOnExecutionContext(ctx)
    const payload = await parseJson<ApiEnvelope<{ ok: boolean }>>(response)

    expect(response.status).toBe(200)
    expect(payload.data.ok).toBe(true)
    expect(payload.meta.requestId.length).toBeGreaterThan(0)
  })

  it('returns invalid input when auth exchange payload is malformed', async () => {
    const response = await SELF.fetch(
      'https://example.com/api/v1/auth/provider/exchange',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ provider: 'firebase' }),
      },
    )

    const payload = await parseJson<{ error: { code: string } }>(response)

    expect(response.status).toBe(400)
    expect(payload.error.code).toBe('INVALID_INPUT')
  })

  it('exchanges firebase token and accesses protected route', async () => {
    const exchangeResponse = await SELF.fetch(
      'https://example.com/api/v1/auth/provider/exchange',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          provider: 'firebase',
          idToken: 'test:firebase-user-1:user1@example.com',
        }),
      },
    )

    const exchangePayload = await parseJson<
      ApiEnvelope<{
        accessToken: string
        refreshToken: string
        user: {
          id: string
          email: string | null
        }
      }>
    >(exchangeResponse)

    expect(exchangeResponse.status).toBe(200)
    expect(exchangePayload.data.user.email).toBe('user1@example.com')

    const protectedResponse = await SELF.fetch(
      'https://example.com/api/v1/protected/ping',
      {
        headers: {
          authorization: `Bearer ${exchangePayload.data.accessToken}`,
        },
      },
    )

    const protectedPayload = await parseJson<
      ApiEnvelope<{
        ok: boolean
        user: {
          id: string
          email: string | null
        }
      }>
    >(protectedResponse)

    expect(protectedResponse.status).toBe(200)
    expect(protectedPayload.data.ok).toBe(true)
    expect(protectedPayload.data.user.id).toBe(exchangePayload.data.user.id)
  })

  it('rotates refresh token and invalidates old refresh token', async () => {
    const exchangeResponse = await SELF.fetch(
      'https://example.com/api/v1/auth/provider/exchange',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          provider: 'firebase',
          idToken: 'test:firebase-user-2:user2@example.com',
        }),
      },
    )

    const exchangePayload = await parseJson<
      ApiEnvelope<{
        accessToken: string
        refreshToken: string
      }>
    >(exchangeResponse)

    const refreshResponse = await SELF.fetch(
      'https://example.com/api/v1/auth/refresh',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          refreshToken: exchangePayload.data.refreshToken,
        }),
      },
    )

    const refreshPayload = await parseJson<
      ApiEnvelope<{
        accessToken: string
        refreshToken: string
      }>
    >(refreshResponse)

    expect(refreshResponse.status).toBe(200)
    expect(refreshPayload.data.accessToken).not.toBe(
      exchangePayload.data.accessToken,
    )
    expect(refreshPayload.data.refreshToken).not.toBe(
      exchangePayload.data.refreshToken,
    )

    const oldRefreshReplayResponse = await SELF.fetch(
      'https://example.com/api/v1/auth/refresh',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          refreshToken: exchangePayload.data.refreshToken,
        }),
      },
    )

    const oldRefreshReplayPayload = await parseJson<{
      error: { code: string }
    }>(oldRefreshReplayResponse)

    expect(oldRefreshReplayResponse.status).toBe(401)
    expect(oldRefreshReplayPayload.error.code).toBe('UNAUTHENTICATED')
  })
})
