# Database

## Core Data Model

The MVP database should be small, explicit, and traceable by family scope.

## Tables

| Table | Purpose | Minimum Fields |
| --- | --- | --- |
| `families` | Shared household container | `id`, `name`, `createdBy`, `createdAt` |
| `familyMembers` | Adult membership and role | `id`, `familyId`, `userId`, `role`, `state`, `createdAt` |
| `childProfiles` | Managed child records | `id`, `familyId`, `displayName`, `managedByMemberId`, `createdAt` |
| `contributions` | Contribution aggregate | `id`, `familyId`, `actorMemberId`, `pointType`, `pointValue`, `state`, `description`, `createdAt` |
| `contributionEvents` | Contribution audit trail | `id`, `contributionId`, `eventType`, `actorMemberId`, `note`, `createdAt` |
| `rewards` | Reward catalog items | `id`, `familyId`, `title`, `pointType`, `pointCost`, `decisionOwnerMemberId`, `status` |
| `rewardRequests` | Reward request aggregate | `id`, `familyId`, `rewardId`, `requesterMemberId`, `state`, `createdAt` |
| `rewardRequestEvents` | Reward request audit trail | `id`, `rewardRequestId`, `eventType`, `actorMemberId`, `note`, `createdAt` |
| `pointsLedger` | Immutable accounting entries | `id`, `familyId`, `memberId`, `pointType`, `delta`, `sourceType`, `sourceId`, `createdAt` |
| `pointBalances` | Read-optimized balances | `familyId`, `memberId`, `pointType`, `balance`, `updatedAt` |
| `userPreferences` | Profile settings | `memberId`, `preferences`, `updatedAt` |

## Invariants

- Every business record must be scoped by `familyId`.
- Membership and ownership checks happen before cross-table actions.
- Balances are derived from ledger behavior, not hand-edited business state.
- Important state transitions create event rows.
- Cross-entity references must stay inside the same family scope.

## Point Rules

- Only two point types exist in MVP: `task` and `love`.
- Approved contributions may create positive ledger entries.
- Accepted reward requests may create negative ledger entries.
- Rejected or delayed reward requests must not affect balances.

## Data Design Guidance

- Prefer append-only event rows for auditable decisions.
- Avoid destructive deletes for core business history.
- Keep schema minimal until a clear use case demands more abstraction.
