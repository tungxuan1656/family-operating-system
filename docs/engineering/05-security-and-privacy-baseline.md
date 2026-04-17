# 05 Security and Privacy Baseline

## Goal

Set minimum shared security and privacy requirements for all project components.

## Authentication Baseline

- User authentication source: Firebase Authentication.
- Backend must validate identity context for each protected request.
- Authenticated identity must be mapped to household membership and role.

## Authorization Baseline

- Authorization is enforced server-side for every state-changing endpoint.
- Permission checks must map to business approval and visibility docs.
- Frontend conditional rendering is advisory only, never authoritative.

## Input and Output Security

- Validate all external inputs on backend.
- Use schema validation for request payloads.
- Return only fields required by the caller's role and visibility scope.
- Never return internal diagnostics or stack traces in production responses.

## Data Protection Baseline

- No secrets in source control.
- Environment-specific secrets are managed through platform secret storage.
- Sensitive identifiers and personal data are minimized in logs.
- Access to production data follows least privilege.

## Privacy Requirements Baseline

Given family and child-related context:

- Collect only data necessary for product use cases.
- Define retention policy for activity and audit data.
- Define account deletion or data removal flow before production scale.
- Ensure visibility constraints are enforced for child and guardian contexts.

## Security Logging and Audit

Must capture auditable events for:

- Approval decisions
- Reward redemption
- Permission-sensitive changes
- Membership and role changes

Logs must include actor, action type, target, and timestamp.

## Vulnerability and Incident Handling

- Security bugs are treated as high priority defects.
- Patch timeline and ownership must be recorded in ADR or incident notes.
- Post-incident action items must include tests to prevent recurrence.

