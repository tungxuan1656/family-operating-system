import { createRefreshSession } from '../../db/repositories/session-repository'
import { upsertUserByFirebaseIdentity } from '../../db/repositories/user-repository'
import { readConfig } from '../../lib/env'
import type { AppBindings } from '../../lib/types'
import { verifyFirebaseIdToken } from '../../utils/firebase'
import { newId } from '../../utils/id'
import { issueAccessToken, issueRefreshToken } from '../../utils/jwt'
import { hashRefreshToken } from '../../utils/security'

export interface ExchangeProviderTokenInput {
  provider: 'firebase'
  idToken: string
  userAgent: string | null
  ipAddress: string | null
}

export interface ExchangeProviderTokenOutput {
  tokenType: 'Bearer'
  accessToken: string
  accessTokenExpiresIn: number
  refreshToken: string
  refreshTokenExpiresIn: number
  user: {
    id: string
    email: string | null
    displayName: string | null
    avatarUrl: string | null
    provider: 'firebase'
  }
}

export const exchangeProviderToken = async (
  env: AppBindings['Bindings'],
  input: ExchangeProviderTokenInput,
): Promise<ExchangeProviderTokenOutput> => {
  const config = readConfig(env)
  const firebaseIdentity = await verifyFirebaseIdToken(input.idToken, config)

  const user = await upsertUserByFirebaseIdentity(env.DB, {
    subject: firebaseIdentity.sub,
    email: firebaseIdentity.email,
    name: firebaseIdentity.name,
    picture: firebaseIdentity.picture,
  })

  const sessionId = newId()
  const accessToken = await issueAccessToken(config, user.id, sessionId)
  const refreshToken = await issueRefreshToken(config, user.id, sessionId)
  const tokenHash = await hashRefreshToken(
    refreshToken,
    config.refreshTokenPepper,
  )

  await createRefreshSession(env.DB, {
    sessionId,
    userId: user.id,
    tokenHash,
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
    user: {
      id: user.id,
      email: user.primaryEmail,
      displayName: user.displayName,
      avatarUrl: user.avatarUrl,
      provider: 'firebase',
    },
  }
}
