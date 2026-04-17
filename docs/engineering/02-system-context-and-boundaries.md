# 02 System Context and Boundaries

## Goal

Provide a shared system map and clear boundaries so teams can implement without
redefining responsibilities.

## Context Overview

Family Operating System currently has two primary runtime apps:

- Web client: [../../apps/web](../../apps/web)
- Backend worker: [../../apps/worker](../../apps/worker)

External dependencies used by the current stack:

- Firebase Authentication (email/password)
- Cloudflare Workers runtime
- Cloudflare D1 database

## High-Level Interaction

1. User interacts with web UI.
2. Web authenticates user with Firebase Auth.
3. Web calls worker APIs with authenticated context.
4. Worker validates request, enforces authorization, and applies business rules.
5. Worker persists and reads data from D1.
6. Worker returns contract-compliant response to web.

## Responsibilities By Layer

### Web App Responsibilities

- Render UX and user journeys.
- Handle client-side form validation and field-level UX constraints.
- Manage session state and API calls.
- Never enforce final business authority decisions on the client.

### Worker Responsibilities

- Enforce server-side business rules.
- Enforce authorization, lifecycle transitions, and visibility rules.
- Validate payloads and sanitize outputs.
- Persist canonical domain state.

## Integration Boundary Rules

1. Business rule enforcement source of truth is backend.
2. Client-side validation improves UX but does not replace backend validation.
3. API responses must not leak fields outside visibility/permission policy.
4. Date and time values exchanged through API use ISO 8601 UTC.
5. Identifiers are opaque; clients must not derive semantics from ID format.

## Cross-Cutting Conventions

- Language for code and API fields: English.
- User-facing labels: localized via frontend i18n.
- Currency and reward-point policies follow business docs first, then shared
  engineering docs.
- Error handling follows explicit error codes, not free-text matching.

## Open Boundaries To Lock In ADR

Document new decisions in [10 Decision Log and ADR](./10-decision-log-and-adr.md)
when introducing:

- New external service integrations.
- New identity providers.
- New data stores or event pipelines.
- Significant changes in trust boundaries.

