# Non-Functional Requirements

These are practical release-first baselines, not long-term scale targets.

## Performance

- Web initial route should feel responsive on a normal connection.
- Normal API reads should stay comfortably below one second.
- Normal API writes should stay comfortably below one second.

## Reliability

- Failures must be explicit, not silently swallowed.
- Retry behavior must be bounded and safe for retryable operations.
- State-changing endpoints should avoid double-write behavior.

## Observability

- Backend logs should include enough context to debug request failures.
- Sensitive values such as tokens and secrets must not be logged.
- Important actions such as approvals and reward decisions should be auditable.

## Security And Privacy

- Backend validates all write input.
- Backend enforces authorization on every protected action.
- Child-facing views must enforce visibility restrictions.
- Secrets are never committed to the repo.

## Quality Gates Before First Release

- Lint passes.
- Relevant typechecks pass.
- Relevant tests pass.
- Critical user journeys are manually exercised.
- No known blocker around points, permissions, or lifecycle rules remains open.
