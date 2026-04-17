import { createRemoteJWKSet, type JWTPayload, jwtVerify } from 'jose'

import { unauthenticated } from '../lib/errors'
import type { AppConfig } from '../lib/types'

const jwksCache = new Map<string, ReturnType<typeof createRemoteJWKSet>>()

const getJwks = (url: string): ReturnType<typeof createRemoteJWKSet> => {
  const cached = jwksCache.get(url)

  if (cached) {
    return cached
  }

  const jwks = createRemoteJWKSet(new URL(url))
  jwksCache.set(url, jwks)

  return jwks
}

const parseUnsafeTestToken = (
  idToken: string,
): {
  sub: string
  email: string | null
  emailVerified: boolean
  name: string | null
  picture: string | null
} | null => {
  if (!idToken.startsWith('test:')) {
    return null
  }

  const [, sub, email] = idToken.split(':')

  if (!sub || sub.length === 0) {
    return null
  }

  return {
    sub,
    email: email ?? null,
    emailVerified: true,
    name: null,
    picture: null,
  }
}

const normalizeFirebasePayload = (payload: JWTPayload) => {
  if (typeof payload.sub !== 'string' || payload.sub.length === 0) {
    throw unauthenticated('Firebase token is missing subject.')
  }

  return {
    sub: payload.sub,
    email: typeof payload.email === 'string' ? payload.email : null,
    emailVerified: payload.email_verified === true,
    name: typeof payload.name === 'string' ? payload.name : null,
    picture: typeof payload.picture === 'string' ? payload.picture : null,
  }
}

export const verifyFirebaseIdToken = async (
  idToken: string,
  config: AppConfig,
) => {
  if (
    config.allowInsecureTestTokens ||
    config.firebaseProjectId === 'fos-local'
  ) {
    const parsed = parseUnsafeTestToken(idToken)

    if (parsed) {
      return parsed
    }
  }

  const issuer = `https://securetoken.google.com/${config.firebaseProjectId}`

  let verificationResult

  try {
    verificationResult = await jwtVerify(
      idToken,
      getJwks(config.firebaseJwksUrl),
      {
        issuer,
        audience: config.firebaseProjectId,
        algorithms: ['RS256'],
      },
    )
  } catch {
    throw unauthenticated('Invalid Firebase identity token.')
  }

  return normalizeFirebasePayload(verificationResult.payload)
}
