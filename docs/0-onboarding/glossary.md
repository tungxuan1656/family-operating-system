# Glossary

## Business Terms

| Term | Meaning |
| --- | --- |
| Family | Shared household context where all members, points, rewards, and activity live. |
| Member | A participant in a family. In MVP this is either an adult member or a managed child profile. |
| Adult Member | A full actor who can create, approve, and decide within policy. |
| Managed Child Profile | A child profile controlled by adults. No standalone child login in MVP. |
| Contribution | A useful action recorded for the family. |
| Task Points | Points used for responsibility-driven contributions. |
| Love Points | Points used for recognition and emotional care. |
| Reward | A redeemable item with a point cost and a decision owner. |
| Reward Request | A request to redeem a reward. |
| Decision Owner | The member who accepts, rejects, or delays a reward request. |
| Timeline | The activity history shown to family members with role-safe visibility. |

## Technical Terms

| Term | Meaning |
| --- | --- |
| Web App | The frontend in `apps/web`. |
| Worker | The backend service in `apps/worker`. |
| D1 | Cloudflare's SQLite-based database used by the backend. |
| Firebase Auth | Authentication provider expected for adult sign-in. |
| Ledger | Immutable point accounting entries from which balances are derived. |
| Balance | Read-optimized current point total for a member and point type. |
| Family Scope | Rule that every business action and record belongs to exactly one family. |
| Visibility Rule | Backend-enforced rule for which fields a role may see. |
| Lifecycle | Allowed state transitions for contributions and reward requests. |
