import {
  createRefreshSession,
  findSessionByIdAndHash,
  isSessionActive,
  revokeSession,
} from '@/db/repositories/session-repository'
import { readConfig } from '@/lib/env'
import { unauthenticated } from '@/lib/errors'
import type { AppBindings } from '@/lib/types'
import { newId } from '@/utils/id'
import {
  issueAccessToken,
  issueRefreshToken,
  verifyRefreshToken,
} from '@/utils/jwt'
import { hashRefreshToken } from '@/utils/security'

export interface RefreshSessionInput {
  refreshToken: string
  userAgent: string | null
  ipAddress: string | null
}

export interface RefreshSessionOutput {
  tokenType: 'Bearer'
  accessToken: string
  accessTokenExpiresIn: number
  refreshToken: string
  refreshTokenExpiresIn: number
}

export const refreshSession = async (
  env: AppBindings['Bindings'],
  input: RefreshSessionInput,
): Promise<RefreshSessionOutput> => {
  const config = readConfig(env)
  const refreshPayload = await verifyRefreshToken(input.refreshToken, config)
  const tokenHash = await hashRefreshToken(
    input.refreshToken,
    config.refreshTokenPepper,
  )

  const existingSession = await findSessionByIdAndHash(
    env.DB,
    refreshPayload.sid,
    tokenHash,
  )

  if (
    !existingSession ||
    !isSessionActive(existingSession) ||
    existingSession.userId !== refreshPayload.sub
  ) {
    throw unauthenticated('Refresh token is invalid, expired, or revoked.')
  }

  await revokeSession(env.DB, existingSession.id)

  const rotatedSessionId = newId()
  const accessToken = await issueAccessToken(
    config,
    existingSession.userId,
    rotatedSessionId,
  )
  const refreshToken = await issueRefreshToken(
    config,
    existingSession.userId,
    rotatedSessionId,
  )
  const rotatedHash = await hashRefreshToken(
    refreshToken,
    config.refreshTokenPepper,
  )

  await createRefreshSession(env.DB, {
    sessionId: rotatedSessionId,
    userId: existingSession.userId,
    tokenHash: rotatedHash,
    expiresAt: new Date(
      Date.now() + config.refreshTokenTtlSeconds * 1000,
    ).toISOString(),
    userAgent: input.userAgent,
    ipAddress: input.ipAddress,
  })

  return {
    tokenType: 'Bearer',
    accessToken,
    accessTokenExpiresIn: config.accessTokenTtlSeconds,
    refreshToken,
    refreshTokenExpiresIn: config.refreshTokenTtlSeconds,
  }
}
