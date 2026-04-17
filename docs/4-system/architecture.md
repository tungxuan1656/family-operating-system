# Architecture

## System Overview

Family Operating System currently has two main runtime surfaces:

- `apps/web`: React + Vite frontend.
- `apps/worker`: Cloudflare Worker backend.

The backend is the final authority for business rules, authorization, and
visibility.

## High-Level Flow

1. User interacts with the web app.
2. Web app authenticates the user through Firebase Auth.
3. Web app calls backend APIs with authenticated context.
4. Worker validates input, membership, permissions, and lifecycle rules.
5. Worker reads and writes family-scoped data in D1.
6. Worker returns contract-compliant JSON responses.

## Boundary Rules

### Web

- Owns rendering, local interaction flow, and client-side UX validation.
- Should not be the source of truth for business authority decisions.
- Must handle backend error codes explicitly.

### Worker

- Owns business rule enforcement.
- Owns authorization, visibility filtering, and lifecycle transitions.
- Owns canonical persistence and audit behavior.

## Shared System Conventions

- API versioning uses path-based versioning such as `/v1`.
- Time values use ISO 8601 UTC.
- IDs are opaque strings.
- Business actions are family-scoped.
- Child-safe visibility is enforced at the backend boundary.

## Core Runtime Dependencies

- Firebase Authentication for adult identity.
- Cloudflare Workers runtime for the backend.
- Cloudflare D1 for the primary database.

## Architecture Constraints For MVP

- No standalone child identity flow.
- No client-trusted balance mutations.
- No API fields returned outside the caller's visibility scope.
- No alternate data stores or async pipelines unless a later need justifies
  them.
