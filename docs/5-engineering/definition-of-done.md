# Definition Of Done

A feature or slice is done only when behavior, verification, and docs all line
up.

## Required Checks

- Relevant implementation is complete for both backend and frontend scope.
- Lint passes for changed app areas.
- Relevant typechecks pass.
- Relevant tests pass.
- Docs are updated if product, flow, API, or data behavior changed.

## Rule-Specific Checks

- Authorization is enforced on the backend.
- Lifecycle transitions reject invalid moves.
- Reward request point deduction timing is correct.
- Child-safe visibility is preserved.
- Important decisions leave an audit trail where required.

## Minimum Test Expectations

- Unit tests for business rules or pure logic.
- Integration tests for lifecycle and API behavior.
- UI or component coverage for role-based actions and error states.
- Manual validation for the end-to-end happy path of the changed slice.

## Release-First Checks

- Logging and error handling are good enough to debug failures.
- Deployment impact is understood.
- Known gaps are written down instead of implied away.
