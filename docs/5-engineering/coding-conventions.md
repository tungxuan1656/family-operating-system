# Coding Conventions

This file records repo-level expectations. App-specific standards remain the
real implementation source of truth.

## Repo-Level Rules

- Keep changes scoped to the user request.
- Prefer simple, direct solutions over speculative abstractions.
- Use backend validation for all trusted business decisions.
- Keep comments brief and only where they clarify non-obvious logic.
- Update docs when behavior, contracts, or flows change.

## Frontend Standards

Read and follow:

- `apps/web/docs/standards/README.md`

Use those standards for component structure, naming, API state, form handling,
and UI conventions.

## Backend Standards

Read and follow:

- `apps/worker/docs/standards/README.md`

Use those standards for boundaries, validation, database patterns, security, and
testing.

## Documentation Style

- Keep docs short and implementation-oriented.
- Avoid duplicating the same rule across multiple files.
- Put product intent in product docs, contracts in system docs, and workflow in
  engineering docs.
