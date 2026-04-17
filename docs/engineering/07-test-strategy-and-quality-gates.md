# 07 Test Strategy and Quality Gates

## Goal

Define shared testing responsibilities and release gates across frontend and
backend.

## Testing Layers

### Frontend

- Unit tests for pure logic and utility functions.
- Component tests for UI behavior and state transitions.
- Integration tests for API state handling and error rendering.

### Backend

- Unit tests for business-rule logic.
- Integration tests for endpoint behavior and persistence interactions.
- Contract tests for response shape and error code guarantees.

### Cross-Team

- End-to-end smoke scenarios for critical user journeys.
- Requirement-to-test traceability in
  [09 Requirement Traceability Matrix](./09-requirement-traceability-matrix.md).

## Minimum Quality Gates

Before merge:

1. Lint passes.
2. Type checks pass.
3. Relevant tests pass.
4. Contract changes are documented if API behavior changed.

Before release:

1. Critical path E2E smoke checks pass.
2. No unresolved high-severity defects.
3. Known risks are documented with owner and mitigation.

## Bug Fix Rule

For every production bug fix:

1. Add or update a test that reproduces the bug.
2. Implement fix.
3. Verify test now passes.
4. Add traceability note for future audit.

## Ownership

- Frontend lead owns frontend test standards.
- Backend lead owns backend test standards.
- Tech lead ensures cross-team scenario coverage exists.

