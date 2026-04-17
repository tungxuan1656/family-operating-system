# Deployment

This project only needs lightweight operational guidance for the first release.

## Environments

- Local: developer machine
- Staging: preferred for pre-release validation if available
- Production: live environment

If staging is unavailable, document what manual checks replace it before
releasing.

## Configuration Rules

- Configuration must be environment-driven.
- Secrets stay in platform secret storage, not source control.
- New environment variables should be documented in the app that consumes them.

## Deployment Focus

### Web

- Build the web app before release verification.
- Confirm API base URL and auth configuration are correct for the target
  environment.

### Worker

- Deploy with `pnpm deploy:worker` or `pnpm --filter worker deploy`.
- Re-run type generation when worker bindings change with
  `pnpm --filter worker cf-typegen`.
- Confirm D1 bindings and runtime configuration are correct before release.

## Release Checklist

- Product-critical flows were manually exercised.
- Lint, typecheck, and relevant tests are green.
- API contract changes were communicated and documented.
- Rollback path is known for the backend deployment.
- Logs or monitoring are sufficient to detect first-release regressions.
