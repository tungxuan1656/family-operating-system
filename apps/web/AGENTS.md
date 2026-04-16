# AGENTS.md (apps/web)

## System Context

`apps/web` is the frontend client for Family Operating System.

Primary goals:

- Present family contribution and reward flows clearly.
- Keep UX consistent with the design and naming standards.
- Validate user input on the client before API requests.
- Integrate with backend APIs from `apps/worker`.

## Required Technology Stack

- React + TypeScript + Vite
- shadcn/ui
- Tailwind CSS
- date-fns
- i18next
- Firebase Authentication (email/password only)
- zod
- react-hook-form
- zustand
- react-query

## Implementation Rules

- Follow existing folder boundaries in `src/`.
- Prefer semantic Tailwind tokens from `src/index.css`.
- Keep business logic out of presentational UI components.
- Use schema-first validation with zod for form data.
- Keep API state in react-query and app-local state in zustand.
- All comments and user-facing copy keys must be in English.

## Standards References

Use these standards as the source of truth for implementation and review:

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
