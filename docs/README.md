# Family Operating System Documentation Hub

Family Operating System (FOS) is a startup-stage product concept for families in Vietnam. The product aims to make household contributions visible, encourage
recognition, and create a fairer and more playful way to exchange support,
responsibility, and rewards inside the family.

This `docs/` area is the business-facing source of truth for the project before
technical design begins, and now also includes shared engineering baselines for
cross-team implementation. It remains anchored on product intent, customer
context, and business rules, then extends into implementation-ready documents
for architecture boundaries, API baseline, quality gates, and release controls.

## Who This Is For

- Founders and product stakeholders who need a shared product narrative.
- Senior frontend engineers who need clear journeys, priorities, and edge cases.
- Senior backend engineers who need clear business entities, approval flows, and
  rule boundaries before defining technical contracts.

## Current Product Stage

- Product maturity: concept plus skeleton implementation.
- Initial market assumption: Vietnam consumer app.
- Initial audience assumption: families with parents and children.
- Scope of these docs:
  - Business source of truth in `docs/business/`.
  - Shared engineering source of truth in `docs/engineering/`.

## Business Reading Order

Read the concise set below in order. For a small project, these six documents
are the canonical source of truth.

1. [Product Brief MVP](./business/01-product-brief-mvp.md)
2. [Business Rules and Policy](./business/02-business-rules-and-policy.md)
3. [Roles Permissions Visibility](./business/03-roles-permissions-visibility.md)
4. [Lifecycle and Acceptance](./business/04-lifecycle-and-acceptance.md)
5. [Roadmap KPI Risk](./business/05-roadmap-kpi-risk.md)
6. [Glossary and Seeds](./business/06-glossary-and-seeds.md)

Legacy 18-document versions remain in [business/archive](./business/archive/)
for historical reference.

## Shared Engineering Reading Order (Cross-Team)

Read this track after the business pack and before detailed app-specific
implementation work.

1. [Engineering Docs Hub](./engineering/README.md)
2. [Documentation Governance](./engineering/01-documentation-governance.md)
3. [System Context and Boundaries](./engineering/02-system-context-and-boundaries.md)
4. [Shared Domain Model and Invariants](./engineering/03-shared-domain-model-and-invariants.md)
5. [API Contract Baseline](./engineering/04-api-contract-baseline.md)
6. [Security and Privacy Baseline](./engineering/05-security-and-privacy-baseline.md)
7. [NFR and Observability Baseline](./engineering/06-nfr-and-observability-baseline.md)
8. [Test Strategy and Quality Gates](./engineering/07-test-strategy-and-quality-gates.md)
9. [Environment and Release Playbook](./engineering/08-environment-and-release-playbook.md)
10. [Requirement Traceability Matrix](./engineering/09-requirement-traceability-matrix.md)
11. [Decision Log and ADR](./engineering/10-decision-log-and-adr.md)

## How To Use This Hub

- Start with Product Brief to align goals, scope, and principles.
- Use Business Rules and Lifecycle docs to lock state transitions and business
  behavior before technical design.
- Use Roles/Permissions/Visibility to align frontend rendering and backend
  authorization.
- Use Roadmap/KPI/Risk to prioritize implementation and validation loops.
- Use Glossary/Seeds to keep terminology and onboarding defaults consistent.
- Use `docs/engineering/` to align frontend and backend on shared technical
  boundaries before implementation detail splits into app-specific docs.
- Use app-specific implementation standards for details:
  - Frontend: `apps/web/standards/`
  - Backend: `apps/worker/docs/standards/`

## Source-Of-Truth Notes

- These documents define product intent and business meaning.
- Shared engineering docs define cross-team technical constraints and change
  control.
- The current app code is not yet a reliable source of business truth.
- Technical design documents should align to this pack, then capture any
  technical tradeoffs separately.
- The concise business set is non-technical; it defines business intent for
  state, authority, and visibility, not schema or API shape.
- Archived business docs are historical context, not current canon.
- If a future implementation conflicts with these docs, update the docs or write
  an explicit decision record instead of silently drifting.

## Non-Goals Of This Documentation Set

- It does not replace detailed app-level implementation standards.
- It does not define every endpoint-level API detail or full physical DB schema.
- It does not lock monetization, pricing, or growth strategy as final decisions.
- It does not assume all family cultures or household models behave the same.
- It does not treat emotional care as a cold accounting system.

## Expected Outcome

After reading this documentation pack:

- frontend should understand primary user flows, emotional sensitivities, and
  feature priority;
- backend should understand core business entities, approval logic, and rule
  boundaries;
- tech leads should be able to move into solution planning and cross-team
  implementation without inventing approval, lifecycle, visibility, onboarding,
  contract, quality, and release rules from scratch;
- product/design should have a clear list of assumptions, risks, and validation
  questions to test before scaling scope.

