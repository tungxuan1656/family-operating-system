# 09 Requirement Traceability Matrix

## Goal

Ensure every implemented behavior can be traced from business requirement to
API/UI behavior and automated verification.

## Usage Rules

- Add one row per meaningful requirement slice.
- Keep IDs stable so issues, PRs, and tests can reference them.
- Update rows when behavior changes.

## Matrix Template

| Trace ID | Business Source                 | Requirement Summary         | FE Scope         | BE Scope              | API Contract Ref     | Test Coverage             | Status | Owner      |
| -------- | ------------------------------- | --------------------------- | ---------------- | --------------------- | -------------------- | ------------------------- | ------ | ---------- |
| TRC-001  | business/04-lifecycle-and-acceptance | Example requirement summary | Screen/flow refs | Endpoint/service refs | Contract section ref | Unit/Integration/E2E refs | draft  | Unassigned |

## Status Values

- draft
- in-progress
- verified
- released
- deprecated

## Quality Rule

No high-impact feature should be released without at least one traceability row.

