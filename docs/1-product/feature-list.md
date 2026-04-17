# Feature List

This list tracks the MVP feature set at a practical planning level. Status is
for delivery planning, not for code completeness.

## MVP Feature Inventory

| ID | Feature | Priority | Status | Depends On | Notes |
| --- | --- | --- | --- | --- | --- |
| F01 | Adult sign-in | P0 | Planned | None | Child standalone login is out of scope. |
| F02 | Create family | P0 | Planned | F01 | Family becomes the primary scope boundary. |
| F03 | Manage members | P0 | Planned | F02 | Invite adults and create managed child profiles. |
| F04 | Record contribution | P0 | Planned | F03 | Supports both Task Points and Love Points. |
| F05 | Contribution approval | P0 | Planned | F04 | Required for child contributions and any policy-gated cases. |
| F06 | Points ledger and balances | P0 | Planned | F05 | Ledger-first, balances derived from ledger events. |
| F07 | Reward catalog | P0 | Planned | F03 | Rewards have point cost, type, and decision owner. |
| F08 | Submit reward request | P0 | Planned | F06, F07 | Submitted does not deduct points. |
| F09 | Decide reward request | P0 | Planned | F08 | Accept, reject, or delay. |
| F10 | Fulfill accepted reward | P1 | Planned | F09 | Marks completion of the agreed exchange. |
| F11 | Activity history | P1 | Planned | F05, F09 | Must respect child-safe visibility. |
| F12 | Profile and preferences | P2 | Planned | F03 | Lightweight settings only. |

## Release-First Notes

- P0 items are required before the first usable MVP release.
- P1 items close the loop and improve day-to-day usability.
- P2 items can follow once the core flows are stable.

## Feature Rules That Must Not Drift

- No leaderboard-style comparison between members.
- No point deduction before reward request acceptance.
- Child-facing views must not expose adult-sensitive conflict details.
- Backend is the final authority for permissions and lifecycle checks.
