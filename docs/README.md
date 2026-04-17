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

Read the documents below in order. Each document depends on the one before it.

1. [Vision & Product Thesis](./business/01-vision-and-product-thesis.md)
2. [Problem Statement & Opportunity Assessment](./business/02-problem-statement-and-opportunity-assessment.md)
3. [Persona Pack](./business/03-persona-pack.md)
4. [User Journey & Key Scenarios](./business/04-user-journey-and-key-scenarios.md)
5. [Business PRD](./business/05-business-prd.md)
6. [Business Rules Catalog](./business/06-business-rules-catalog.md)
7. [Feature Prioritization & Release Roadmap](./business/07-feature-prioritization-and-release-roadmap.md)
8. [KPI & Measurement Framework](./business/08-kpi-and-measurement-framework.md)
9. [Risk, Assumptions & Validation Plan](./business/09-risk-assumptions-and-validation-plan.md)
10. [Glossary & Canonical Terminology](./business/10-glossary-and-canonical-terminology.md)

## Planning-Ready BA Addendum

Read this addendum after the core concept pack and before solution design. These
documents close the domain decisions that engineering should not guess.

11. [MVP Decision Log](./business/11-mvp-decision-log.md)
12. [Approval & Permissions Matrix](./business/12-approval-and-permissions-matrix.md)
13. [Lifecycle & State Matrix](./business/13-lifecycle-and-state-matrix.md)
14. [Onboarding & Membership Model](./business/14-onboarding-and-membership-model.md)
15. [Acceptance Criteria](./business/15-acceptance-criteria.md)
16. [Visibility Matrix](./business/16-visibility-matrix.md)
17. [Reward & Point Policy](./business/17-reward-and-point-policy.md)
18. [MVP Seed Lists](./business/18-mvp-seed-lists.md)

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

- Use the Vision and Problem docs to understand why the product should exist.
- Use the Persona and Journey docs to understand how the product should feel
  and where user tension will appear.
- Use the Business PRD as the central handoff document before writing technical
  design docs.
- Use the Business Rules Catalog and Glossary as mandatory references when
  defining data models, permissions, flows, labels, and UI copy.
- Use the Planning-Ready BA Addendum to lock approval, lifecycle, visibility,
  onboarding, and acceptance decisions before solution planning starts.
- Use the Roadmap, KPI, and Risk docs to avoid hard-coding assumptions that are
  still product decisions rather than settled rules.
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
- The addendum documents are still non-technical; they define business intent
  for state, authority, and visibility, not schema or API shape.
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

