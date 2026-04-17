# Task Breakdown

Build by vertical slice so frontend and backend stay aligned.

## Slice 1: Family And Membership

### Backend

- Add family creation endpoint and persistence.
- Add membership model and family scoping.
- Add adult invite or membership join path.
- Add managed child profile creation.

### Frontend

- Build sign-in entry flow.
- Build create family screen.
- Build add members flow for adults and child profiles.

### Verification

- Adult can create a family.
- Family members are scoped to the correct family.
- Child profile creation works without standalone login.

## Slice 2: Contributions And Approval

### Backend

- Add contribution creation and retrieval endpoints.
- Encode lifecycle rules for draft, pending review, approved, rejected.
- Add approval and rejection actions.
- Emit audit events for important transitions.

### Frontend

- Build create contribution flow.
- Build pending approvals view for adults.
- Build contribution detail state rendering.

### Verification

- Child contribution cannot self-approve.
- Points are not added before approval.
- Invalid lifecycle transitions return explicit errors.

## Slice 3: Points Ledger And Balances

### Backend

- Add immutable points ledger entries.
- Add balance read model or derived balance query.
- Expose balances and ledger endpoints.

### Frontend

- Show balance summaries on dashboard and reward-related views.
- Render point type clearly: Task Points vs Love Points.

### Verification

- Balance changes only from ledger-backed events.
- Approved contributions create correct point deltas.

## Slice 4: Rewards And Reward Requests

### Backend

- Add reward create, list, and status update endpoints.
- Add reward request submission endpoint.
- Add accept, reject, delay, and fulfill actions.
- Deduct points only when a request is accepted.

### Frontend

- Build rewards catalog.
- Build reward creation and editing flow for adults.
- Build request submission flow.
- Build decision queue and request detail screens.

### Verification

- Submitted requests do not deduct points.
- Accepted requests deduct points exactly once.
- Delayed and rejected requests do not change balances.

## Slice 5: Timeline And Profile

### Backend

- Add activity feed endpoint.
- Add profile and preferences endpoints.
- Filter timeline content by visibility rules.

### Frontend

- Build activity history screen.
- Build profile and settings screen.
- Reflect role-safe content for adult and child contexts.

### Verification

- Child view hides adult-sensitive conflict details.
- Timeline reflects contribution and reward transitions correctly.

## Completion Rule

Each slice is done only when backend behavior, frontend flow, and tests for the
main rule set are all in place.
