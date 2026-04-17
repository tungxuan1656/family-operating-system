# API Contract

## Baseline

- Transport: JSON over HTTPS
- Versioning: path-based, starting with `/v1`
- Time format: ISO 8601 UTC
- IDs: opaque strings
- Field naming: lowerCamelCase

## Response Shape

Success:

```json
{
  "data": {},
  "meta": {}
}
```

Error:

```json
{
  "error": {
    "code": "FORBIDDEN",
    "message": "Human-readable message",
    "details": []
  },
  "meta": {
    "requestId": "..."
  }
}
```

## Error Codes

- `INVALID_INPUT`
- `UNAUTHENTICATED`
- `FORBIDDEN`
- `NOT_FOUND`
- `CONFLICT`
- `RATE_LIMITED`
- `INTERNAL_ERROR`

## Request Rules

- Validate every write payload server-side.
- Reject unknown fields on write endpoints.
- Treat authenticated context as required for protected resources.
- Enforce role and family membership before every state-changing action.

## Key MVP Endpoints

### Family And Membership

- `POST /v1/families`
- `GET /v1/families/:id`
- `POST /v1/families/:id/invites`
- `POST /v1/families/:id/children`

### Contributions

- `POST /v1/contributions`
- `GET /v1/contributions`
- `GET /v1/contributions/:id`
- `POST /v1/contributions/:id/approve`
- `POST /v1/contributions/:id/reject`

### Points

- `GET /v1/points/balances`
- `GET /v1/points/ledger`

### Rewards

- `POST /v1/rewards`
- `PATCH /v1/rewards/:id`
- `GET /v1/rewards`

### Reward Requests

- `POST /v1/reward-requests`
- `GET /v1/reward-requests/:id`
- `GET /v1/reward-requests`
- `POST /v1/reward-requests/:id/accept`
- `POST /v1/reward-requests/:id/reject`
- `POST /v1/reward-requests/:id/delay`
- `POST /v1/reward-requests/:id/fulfill`

### Profile And Activity

- `GET /v1/activities`
- `GET /v1/profile`
- `PATCH /v1/profile/preferences`

## Lifecycle Rules

### Contributions

- Draft -> Pending Review -> Approved or Rejected
- Only `Approved` contributions may create ledger entries

### Reward Requests

- Submitted -> Accepted, Rejected, or Delayed
- Accepted -> Fulfilled
- Only `Accepted` reward requests deduct points

## Visibility Rules

- Backend must filter fields based on role and relationship to the record.
- Child-facing responses must not include adult-sensitive conflict details.
- Frontend should not assume permission from cached client state alone.

## Contract Testing Expectation

- Backend should verify response shape and error codes.
- Frontend should integrate only against documented fields and states.
