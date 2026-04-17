# Engineering Documentation (Shared)

This folder contains project-wide engineering documents that apply to both
frontend and backend teams.

Use these documents after reading the business pack in [../business](../business).

## Purpose

- Convert business intent into implementation-ready constraints.
- Keep frontend and backend aligned on contracts and operating rules.
- Prevent requirement drift between docs and code.

## Scope

In scope for this folder:

- Cross-team architecture and integration boundaries.
- Shared domain definitions and implementation invariants.
- API contract baseline and change policy.
- Security, privacy, quality, release, and traceability baselines.

Out of scope for this folder:

- UI component details, styling rules, and frontend-only patterns.
- Worker-internal module structure and backend-only implementation details.

## Reading Order

1. [01 Documentation Governance](./01-documentation-governance.md)
2. [02 System Context and Boundaries](./02-system-context-and-boundaries.md)
3. [03 Shared Domain Model and Invariants](./03-shared-domain-model-and-invariants.md)
4. [04 API Contract Baseline](./04-api-contract-baseline.md)
5. [05 Security and Privacy Baseline](./05-security-and-privacy-baseline.md)
6. [06 NFR and Observability Baseline](./06-nfr-and-observability-baseline.md)
7. [07 Test Strategy and Quality Gates](./07-test-strategy-and-quality-gates.md)
8. [08 Environment and Release Playbook](./08-environment-and-release-playbook.md)
9. [09 Requirement Traceability Matrix](./09-requirement-traceability-matrix.md)
10. [10 Decision Log and ADR](./10-decision-log-and-adr.md)

## Relationship With App-Specific Docs

Frontend-specific implementation standards live in:

- [../../apps/web/standards/README.md](../../apps/web/standards/README.md)

Backend-specific implementation standards live in:

- [../../apps/worker/docs/standards/README.md](../../apps/worker/docs/standards/README.md)

Rule of thumb:

- If both frontend and backend must follow it, document here.
- If only one app team uses it to implement internals, document in that app.

## Minimum Metadata For New Shared Docs

Each new shared doc should include:

- Owner
- Status (`draft` or `approved`)
- Last updated date
- Related business docs

