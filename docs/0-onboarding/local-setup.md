# Local Setup

This repo is a `pnpm` monorepo with two apps under `apps/`.

## Workspace Shape

- `apps/web`: React + Vite frontend.
- `apps/worker`: Cloudflare Worker backend.

## Prerequisites

- Node.js version compatible with the repo toolchain.
- `pnpm` `10.12.1` or compatible.
- Cloudflare access if you want to run deploy commands.
- Firebase project credentials when authentication wiring is enabled.

## Install

```bash
pnpm install
```

## Run Locally

From the repo root:

```bash
pnpm dev:web
pnpm dev:worker
```

Useful root scripts:

```bash
pnpm build:web
pnpm lint
pnpm typecheck
pnpm test:worker
pnpm deploy:worker
```

App-level commands:

```bash
pnpm --filter web dev
pnpm --filter web build
pnpm --filter web lint
pnpm --filter web typecheck

pnpm --filter worker dev
pnpm --filter worker lint
pnpm --filter worker typecheck
pnpm --filter worker test
pnpm --filter worker cf-typegen
pnpm --filter worker deploy
```

## Minimum Environment Expectations

- Frontend needs the API base URL and auth-related configuration.
- Backend needs Cloudflare Worker configuration and D1 bindings when database
  work starts.
- Secrets must stay out of source control.

Document any new environment variable in the app that consumes it.

## Standards

- Frontend implementation standards:
  `apps/web/docs/standards/README.md`
- Backend implementation standards:
  `apps/worker/docs/standards/README.md`

## First-Day Reading

1. `docs/1-product/product-overview.md`
2. `docs/1-product/feature-list.md`
3. `docs/3-design/user-flows.md`
4. `docs/4-system/architecture.md`
