# Web App (apps/web)

This package is the web client for Family Operating System.

## Responsibilities

- Render product UX for family contributions, rewards, and activity history.
- Handle client-side validation and form workflows.
- Manage authenticated user sessions via Firebase Authentication (email/password).
- Integrate with backend APIs exposed by `apps/worker`.

## Technology Stack

- React 19 + TypeScript + Vite.
- shadcn/ui + Tailwind CSS.
- date-fns for date handling.
- i18next for localization.
- Firebase Authentication (email/password only).
- Zod + react-hook-form for schema-based forms.
- Zustand for client state.
- React Query for server state.

## Standards

All web implementation and reviews must follow the standards in `standards/`:

- `standards/README.md`
- `standards/project-folder-structure.md`
- `standards/component-structure-pattern.md`
- `standards/naming-and-conventions-pattern.md`
- `standards/type-naming-pattern.md`
- `standards/api-react-query-pattern.md`
- `standards/zustand-store-pattern.md`
- `standards/form-pattern.md`
- `standards/dialog-and-form-pattern.md`
- `standards/i18n-label-pattern.md`
- `standards/color-guide.md`
- `standards/code-review-guide.md`

## Development

Run from repository root:

```bash
pnpm --filter web dev
```

Or run inside this folder:

```bash
pnpm dev
```

## Build and Quality

```bash
pnpm --filter web build
pnpm --filter web lint
pnpm --filter web typecheck
pnpm --filter web format
```
