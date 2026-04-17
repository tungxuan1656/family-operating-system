# 01 Documentation Governance

## Objective

Define how documentation is owned, approved, and changed so engineering work can
start from stable inputs.

## Doc Layers

- Business source of truth: [../business](../business)
- Shared engineering source of truth: this folder
- App-specific implementation docs:
  - Frontend: [../../apps/web/standards](../../apps/web/standards)
  - Backend: [../../apps/worker/docs/standards](../../apps/worker/docs/standards)

## Ownership Model

| Doc Type                | Primary Owner | Required Reviewers          |
| ----------------------- | ------------- | --------------------------- |
| Business docs           | Product lead  | Engineering lead            |
| Shared engineering docs | Tech lead     | Frontend lead, Backend lead |
| Frontend-only docs      | Frontend lead | Tech lead                   |
| Backend-only docs       | Backend lead  | Tech lead                   |

## Change Control Rules

1. Any behavior change in code that affects business rules must update business
   docs first or in the same PR.
2. Any API shape change must update [04 API Contract Baseline](./04-api-contract-baseline.md)
   and impacted app-specific docs in the same PR.
3. Any cross-team architectural decision must be logged in
   [10 Decision Log and ADR](./10-decision-log-and-adr.md).
4. No silent drift: if code and docs conflict, either update docs or add a
   temporary ADR with owner and deadline.

## Definition Of Ready (Engineering)

A feature is ready for implementation only when:

1. Related business acceptance criteria exist in [../business](../business).
2. Required permissions and lifecycle rules are defined.
3. API contract implications are known.
4. Test scope and rollout risk are identified.

## Definition Of Done (Documentation)

A feature is considered fully documented when:

1. Shared docs are updated for all cross-team impacts.
2. App-specific docs are updated for implementation details.
3. Traceability row is added in
   [09 Requirement Traceability Matrix](./09-requirement-traceability-matrix.md).
4. Reviewer approvals are recorded in PR review history.

## Review Cadence

- Weekly: update drift review (30 minutes, FE + BE + Product).
- Sprint end: validate that shipped behavior still matches business docs.
- Monthly: archive outdated assumptions and close stale ADR follow-ups.

