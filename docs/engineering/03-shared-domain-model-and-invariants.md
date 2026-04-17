# 03 Shared Domain Model and Invariants

## Goal

Translate business concepts into shared engineering invariants for both frontend
and backend teams.

## Core Domain Entities

The canonical business meaning for these entities is defined in
[../business](../business). This document defines implementation-level
invariants.

| Entity              | Description                                              | Authority |
| ------------------- | -------------------------------------------------------- | --------- |
| Household           | Group context for all activity and rules                 | Backend   |
| Member              | Person participating in household workflows              | Backend   |
| Contribution Task   | Work item that can be proposed, completed, and validated | Backend   |
| Approval Record     | Decision artifact for authorize/reject flows             | Backend   |
| Reward              | Redeemable item tied to reward policy                    | Backend   |
| Points Ledger Entry | Immutable accounting event for point changes             | Backend   |

## Shared Invariants

1. Every write operation is scoped to one household.
2. Household membership and role are checked before any action.
3. Points are derived from ledger entries, not overwritten as mutable totals.
4. Lifecycle transitions must follow approved business state rules.
5. Visibility of records must follow business visibility matrix.
6. Destructive operations are soft-delete or status-based unless explicitly
   approved by ADR.

## Lifecycle Mapping Baseline

Business lifecycle definitions come from:

- [../business/13-lifecycle-and-state-matrix.md](../business/13-lifecycle-and-state-matrix.md)

Engineering requirement:

- Backend validates allowed transitions.
- Frontend only offers transition actions that user can perform.
- Invalid transitions always return explicit contract error codes.

## Permission Mapping Baseline

Business permission definitions come from:

- [../business/12-approval-and-permissions-matrix.md](../business/12-approval-and-permissions-matrix.md)
- [../business/16-visibility-matrix.md](../business/16-visibility-matrix.md)

Engineering requirement:

- Frontend uses permissions for conditional rendering.
- Backend enforces final authorization checks.
- API must avoid over-fetching unauthorized fields.

## Data Integrity Requirements

- Created and updated timestamps are mandatory for mutable entities.
- Approval actions must preserve actor and decision timestamps.
- Reward redemptions and point changes must be auditable.
- Cross-entity references must preserve household consistency.

## Conflict Resolution Rule

When this document conflicts with business docs, business docs win. Record
implementation exceptions in [10 Decision Log and ADR](./10-decision-log-and-adr.md).

