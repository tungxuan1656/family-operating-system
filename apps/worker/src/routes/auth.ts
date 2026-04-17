import { Hono } from 'hono'
import { z } from 'zod'

import { exchangeProviderToken } from '@/handlers/auth/exchange-provider-token'
import { refreshSession } from '@/handlers/auth/refresh-session'
import { invalidInput } from '@/lib/errors'
import { success } from '@/lib/response'
import type { AppBindings } from '@/lib/types'

const exchangeSchema = z
  .object({
    provider: z.literal('firebase'),
    idToken: z.string().min(1),
  })
  .strict()

const refreshSchema = z
  .object({
    refreshToken: z.string().min(1),
  })
  .strict()

const readJsonBody = async <T>(
  request: Request,
  schema: z.ZodSchema<T>,
): Promise<T> => {
  let rawBody: unknown

  try {
    rawBody = await request.json()
  } catch {
    throw invalidInput('Request body must be valid JSON.')
  }

  const parsed = schema.safeParse(rawBody)

  if (!parsed.success) {
    throw invalidInput(
      'Request body failed validation.',
      parsed.error.flatten(),
    )
  }

  return parsed.data
}

export const authRoutes = new Hono<AppBindings>()

authRoutes.post('/auth/provider/exchange', async (ctx) => {
  const body = await readJsonBody(ctx.req.raw, exchangeSchema)
  const result = await exchangeProviderToken(ctx.env, {
    provider: body.provider,
    idToken: body.idToken,
    userAgent: ctx.req.header('user-agent') ?? null,
    ipAddress: ctx.req.header('cf-connecting-ip') ?? null,
  })

  return success(ctx, result)
})

authRoutes.post('/auth/refresh', async (ctx) => {
  const body = await readJsonBody(ctx.req.raw, refreshSchema)
  const result = await refreshSession(ctx.env, {
    refreshToken: body.refreshToken,
    userAgent: ctx.req.header('user-agent') ?? null,
    ipAddress: ctx.req.header('cf-connecting-ip') ?? null,
  })

  return success(ctx, result)
})
