# Family Operating System (FOS)

Family Operating System is a gamified platform that helps families track
contributions, recognize emotional care, and exchange rewards in a transparent
and fair way.

## Monorepo Structure

This repository uses a monorepo layout with app packages under `apps/`:

- `apps/web`: React web client.
- `apps/worker`: Cloudflare Worker backend with D1-ready architecture.
- `docs`: product concept and supporting documentation.

## Product Idea

The product is designed around these goals:

- Make household contributions visible and measurable.
- Encourage recognition, not only task completion.
- Keep reward/request interactions voluntary and respectful.
- Create playful motivation for both adults and children.

The full product concept is documented in `docs/README.md`.

## Tech Overview

- Monorepo package manager: `pnpm`.
- Web app: React, TypeScript, Vite, shadcn/ui, Tailwind CSS.
- Worker app: Cloudflare Workers, TypeScript, Wrangler, Vitest, D1-compatible patterns.

## Getting Started

### 1) Install dependencies

```bash
pnpm install
```

### 2) Run apps

```bash
# Web client
pnpm dev:web

# Worker backend
pnpm dev:worker
```

## Common Scripts

```bash
pnpm dev:web
pnpm dev:worker
pnpm build:web
pnpm lint:web
pnpm typecheck:web
pnpm test:worker
pnpm deploy:worker
```

## Notes

- The backend is implemented in `apps/worker` and can be extended with D1 bindings in `wrangler.jsonc`.
- The frontend standards for `apps/web` are maintained in `apps/web/standards`.

