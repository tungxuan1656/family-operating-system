# Roadmap

This roadmap is phase-based to keep the project lightweight. It is meant for a
small solo build, not formal sprint management.

## Phase 1: Foundation

- Confirm product scope and shared rules.
- Stand up local development for web and worker.
- Lock family scope, membership model, and auth assumptions.
- Prepare the initial database shape and API conventions.

## Phase 2: Core Family Setup

- Implement adult sign-in path.
- Create family creation flow.
- Add adult invites or membership creation.
- Add managed child profile creation.

## Phase 3: Contributions And Points

- Build contribution creation flow.
- Implement approval and rejection behavior.
- Record point ledger events on approved contributions.
- Expose balances and ledger history.

## Phase 4: Rewards And Requests

- Build reward catalog management.
- Submit reward requests.
- Implement accept, reject, and delay actions.
- Deduct points on accept only.
- Add fulfill flow for accepted requests.

## Phase 5: Timeline And First Release Hardening

- Build activity timeline with role-safe visibility.
- Add profile and lightweight settings.
- Tighten error handling, validation, audit logs, and quality gates.
- Verify deployment flow and first release checklist.

## Release Exit Criteria

- Family setup works end to end.
- Contribution approval and points behave correctly.
- Reward request lifecycle works with correct point deduction timing.
- Child visibility guardrails are enforced.
- Lint, typecheck, and relevant tests pass.
