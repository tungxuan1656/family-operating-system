# 04 API Contract Baseline

## Goal

Define shared API contract rules so frontend and backend can evolve safely.

## Contract Authority

- Contract owner: Backend lead
- Consumer owner: Frontend lead
- Final approver: Tech lead

Any breaking change requires explicit review from both FE and BE leads.

## API Style Baseline

- Transport: JSON over HTTPS
- Versioning: path-based (example: /v1)
- Time format: ISO 8601 UTC
- ID fields: opaque strings
- Field naming: lowerCamelCase

## Request Rules

- Validate all request payloads server-side.
- Reject unknown fields for write operations unless endpoint explicitly supports
  pass-through metadata.
- Require authenticated context for non-public resources.

## Response Envelope Baseline

Successful response:

```json
{
  "data": {},
  "meta": {}
}
```

Error response:

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

## Error Code Baseline

| Code            | Meaning                                |
| --------------- | -------------------------------------- |
| INVALID_INPUT   | Payload validation failed              |
| UNAUTHENTICATED | Missing or invalid authentication      |
| FORBIDDEN       | Authenticated but not authorized       |
| NOT_FOUND       | Resource does not exist or not visible |
| CONFLICT        | State/version conflict                 |
| RATE_LIMITED    | Too many requests                      |
| INTERNAL_ERROR  | Unexpected server error                |

## List Endpoint Baseline

- Use cursor-based pagination when list size may grow.
- Include pagination metadata in response meta.
- Define default sort order explicitly.
- Keep filtering fields documented and stable.

## Idempotency Baseline

- Required for create/redeem actions that can be retried by client.
- Use idempotency key header for relevant endpoints.
- Duplicate request with same key returns same logical result.

## Contract Change Policy

1. Non-breaking changes may be shipped with changelog entry.
2. Breaking changes require:
   - new version path or explicit migration window;
   - update to this document;
   - update to frontend integration docs;
   - updated tests for both producer and consumer.

## Contract Test Requirement

- Backend must provide contract tests for API schema and error codes.
- Frontend must validate integration against documented response shapes.
- CI should fail if contract tests fail.

