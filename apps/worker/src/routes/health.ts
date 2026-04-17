import { Hono } from 'hono'

import { success } from '../lib/response'
import type { AppBindings } from '../lib/types'

export const healthRoutes = new Hono<AppBindings>()

healthRoutes.get('/health', (ctx) =>
  success(ctx, {
    service: 'fos-worker',
    ok: true,
    timestamp: new Date().toISOString(),
  }),
)
