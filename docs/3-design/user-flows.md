# User Flows

These flows define the minimum user journeys and the UI guardrails attached to
them.

## Onboarding

Flow:

1. Adult signs in.
2. Adult creates a family.
3. Adult adds members and managed child profiles.
4. User lands on the home dashboard.

Guardrails:

- No child standalone login in MVP.
- Family context must be established before core feature usage.

## Contribution Flow

Flow:

1. Member starts a contribution.
2. Member selects point type and point value.
3. System routes the contribution into the correct lifecycle.
4. If approval is required, an adult decides.
5. Approved contribution updates points and timeline.

States:

- Draft
- Pending Review
- Approved
- Rejected

Guardrails:

- Points must not appear before approval.
- Child profiles cannot finalize their own approval.
- Rejected items do not change balances.

## Reward Request Flow

Flow:

1. Member selects a reward.
2. Member submits a reward request.
3. Decision owner accepts, rejects, or delays.
4. If accepted, points are deducted.
5. Request can later be fulfilled.

States:

- Submitted
- Accepted
- Rejected
- Delayed
- Fulfilled

Guardrails:

- Submitted must not deduct points.
- Delay and reject must not deduct points.
- UI must not present actions that violate lifecycle rules.

## Timeline Flow

Flow:

1. Member opens activity history.
2. System shows recent contributions, approvals, reward requests, and decisions.
3. Display varies by role and visibility rules.

Guardrails:

- Child views must not expose adult-sensitive conflict details.
- No leaderboard or winner/loser framing.

## Cross-Flow UX Rules

- Frontend may guide but does not override backend authorization.
- Error handling should key off API error codes, not free-text messages.
- Role-based action visibility should be consistent across dashboard, detail,
  and queue screens.
