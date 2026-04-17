# Screen List

This is the minimum screen map for the MVP.

| ID | Screen | Primary Actor | Goal | Key APIs |
| --- | --- | --- | --- | --- |
| P01 | Sign In | Adult | Enter the product and establish identity. | Auth endpoints |
| P02 | Create Family | Adult | Create the first family container. | `POST /v1/families` |
| P03 | Add Members | Adult | Invite adults and create managed child profiles. | `POST /v1/families/:id/invites`, `POST /v1/families/:id/children` |
| P04 | Home Dashboard | Adult, Child | Show balances, recent activity, and quick actions. | `GET /v1/points/balances`, `GET /v1/activities` |
| P05 | Create Contribution | Adult, Child-managed flow | Record a contribution with point type and value. | `POST /v1/contributions` |
| P06 | Pending Approvals | Adult | Review contributions waiting for a decision. | `GET /v1/contributions`, `POST /v1/contributions/:id/approve`, `POST /v1/contributions/:id/reject` |
| P07 | Contribution Detail | Adult, Child own scope | Show state, metadata, and decision history. | `GET /v1/contributions/:id` |
| P08 | Rewards Catalog | Adult, Child | Browse available rewards and eligibility. | `GET /v1/rewards`, `GET /v1/points/balances` |
| P09 | Create/Edit Reward | Adult | Manage reward catalog items. | `POST /v1/rewards`, `PATCH /v1/rewards/:id` |
| P10 | Submit Reward Request | Adult, Child | Confirm a reward request and explain deduction timing. | `POST /v1/reward-requests` |
| P11 | Request Decision Queue | Decision owner | Accept, reject, or delay reward requests. | `GET /v1/reward-requests`, decision endpoints |
| P12 | Request Detail | Requester, Decision owner | Show request status, history, and fulfill action. | `GET /v1/reward-requests/:id`, `POST /v1/reward-requests/:id/fulfill` |
| P13 | Activity History | Adult, Child safe scope | Review timeline and status changes. | `GET /v1/activities` |
| P14 | Profile And Settings | Adult, Child | Manage profile and lightweight preferences. | `GET /v1/profile`, `PATCH /v1/profile/preferences` |

## Required UI States

Every list or action screen should define:

- Default
- Loading
- Empty when relevant
- Error with retry
- Success with next step
- Disabled with reason when action is unavailable
