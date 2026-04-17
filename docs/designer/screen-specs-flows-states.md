# Screen Specs, Flows, And States For Family Operating System MVP

## 1. Purpose

This document is the execution spec for UX and UI delivery.
It defines screen inventory, per-screen requirements, state behavior, and cross-screen flow.

Use this document when designing wireframes and high-fidelity screens.

Companion context document:

- product goals, business rules, and design constraints are in [project-overview.md](project-overview.md)

## 2. Primary Navigation (Mobile-First)

Recommended bottom navigation:

1. Home
2. Contributions
3. Rewards
4. History
5. Settings

## 3. Screen Inventory

| ID  | Screen                 | Goal                                            | Primary actor                              |
| --- | ---------------------- | ----------------------------------------------- | ------------------------------------------ |
| S01 | Authentication         | Enter product securely                          | Adult                                      |
| S02 | Create Family          | Create a household space                        | Adult                                      |
| S03 | Add Members            | Invite adult and create child profiles          | Adult                                      |
| S04 | Home Dashboard         | Show current points and key actions             | Adult and child                            |
| S05 | Create Contribution    | Log a new contribution                          | Adult and child managed flow               |
| S06 | Pending Approvals      | Approve or reject review-required contributions | Adult                                      |
| S07 | Contribution Detail    | Show contribution metadata and state            | Adult and child own scope                  |
| S08 | Rewards Catalog        | Browse available rewards                        | Adult and child with eligibility filtering |
| S09 | Create Or Edit Reward  | Define reward policy and owner                  | Adult                                      |
| S10 | Submit Reward Request  | Submit request with point reservation           | Adult and child                            |
| S11 | Request Decision Queue | Accept, Reject, or Delay incoming requests      | Decision owner                             |
| S12 | Request Detail         | Show request timeline and decision context      | Requester and decision owner               |
| S13 | Activity History       | Browse household timeline                       | Adult and child own-safe view              |
| S14 | Profile And Settings   | Manage profile and app settings                 | Adult and child                            |

## 4. Screen-Level Requirements

Each screen must include visual specs for default, loading, empty, error, and success states when applicable.

### 4.1 S01 Authentication

Required content:

- adult sign-in form
- primary continue action
- recover access path

Required states:

- default
- invalid credentials
- submitting
- success transition to S02 or S04

Rules:

- no child standalone authentication in MVP

### 4.2 S02 Create Family

Required content:

- family name input
- creator name input
- create action

Required states:

- default
- form validation errors
- submitting
- success transition to S03

Rule:

- family becomes usable immediately after creation

### 4.3 S03 Add Members

Required content:

- adult invitation section
- child profile creation section
- current member list
- continue action

Required states:

- no members yet
- invite sent
- child created
- field-level errors

Rule:

- child is always a managed profile in MVP

### 4.4 S04 Home Dashboard

Required content:

- personal point balance summary
- quick actions
- recent activity list
- pending work indicators

Required states:

- first-use empty
- populated
- loading
- sync error

Rule:

- no ranking visualizations

### 4.5 S05 Create Contribution

Required fields:

- actor
- contribution category
- short description
- point type and value
- submit action

Required states:

- draft
- invalid fields
- submitting
- submitted pending review
- submitted approved
- rejected with explanation

Rules:

- child contribution requires adult finalization
- points cannot affect final balance before approval

### 4.6 S06 Pending Approvals

Required content:

- pending contribution cards
- approve action
- reject action
- optional reject reason

Required states:

- no pending items
- approving
- rejecting
- action success

Rule:

- no self-finalization for review-required items

### 4.7 S07 Contribution Detail

Required content:

- contribution metadata
- lifecycle state badge
- actor and reviewer context
- decision note or reject reason when applicable

Required states:

- loading
- visible detail
- not found or inaccessible

Rules:

- child view only shows permitted detail for own scope

### 4.8 S08 Rewards Catalog

Required content:

- reward cards with point type and cost
- decision owner visibility
- eligibility indicators
- request action

Required states:

- empty catalog
- loading
- ineligible due to insufficient points
- filtered eligible list

Rule:

- child view must only include child-eligible rewards

### 4.9 S09 Create Or Edit Reward

Required fields:

- reward title
- reward description
- point type
- point cost
- decision owner
- active or inactive status

Required states:

- default
- validation errors
- saving
- save success

Rule:

- every reward must have exactly one explicit decision owner

### 4.10 S10 Submit Reward Request

Required content:

- selected reward summary
- current balance
- reservation explanation
- confirm request action

Required states:

- default
- insufficient points
- submitting
- submitted

Rule:

- points are reserved at request submission

### 4.11 S11 Request Decision Queue

Required content:

- request list
- actions: Accept, Reject, Delay
- optional decision note

Required states:

- empty queue
- decision in progress
- decision success

Rules:

- Accept converts held points to spent
- Reject or Cancel releases held points immediately
- Delay must be a visible state

### 4.12 S12 Request Detail

Required content:

- request timeline
- requester and decision owner context
- point hold and release/spend status
- decision note history

Required states:

- loading
- visible detail
- not found or inaccessible

Rules:

- action controls appear only for current decision owner

### 4.13 S13 Activity History

Required content:

- timeline list
- event type
- state badge
- actor
- timestamp
- point delta where applicable

Required states:

- empty
- loading
- pagination append
- fetch error

Rules:

- rejected contributions remain visible in history
- child view excludes adult-sensitive conflict details

### 4.14 S14 Profile And Settings

Required content:

- profile summary
- role and visibility explanation
- settings list and toggles
- sign-out action

Required states:

- loading
- default
- save preference success
- save preference error

Rules:

- child settings remain within managed profile boundaries

## 5. Global UI State Matrix

| State type | Required visual behavior                              |
| ---------- | ----------------------------------------------------- |
| Default    | Clear baseline content and actions                    |
| Loading    | Non-blocking indicator and disabled duplicate actions |
| Empty      | Helpful starting message and next-step action         |
| Error      | Context-specific recovery message and retry path      |
| Success    | Clear confirmation and next-step guidance             |
| Disabled   | Explain why action is unavailable                     |

## 6. Flow Map Across Screens

### 6.1 Core onboarding flow

S01 Authentication -> S02 Create Family -> S03 Add Members -> S04 Home Dashboard

### 6.2 Contribution flow

S04 Home Dashboard -> S05 Create Contribution -> S07 Contribution Detail

When review is required:
S05 Create Contribution -> S06 Pending Approvals -> S07 Contribution Detail -> S04 Home Dashboard

### 6.3 Reward flow

S04 Home Dashboard -> S08 Rewards Catalog -> S10 Submit Reward Request -> S12 Request Detail

Decision owner path:
S04 Home Dashboard -> S11 Request Decision Queue -> S12 Request Detail -> S04 Home Dashboard

### 6.4 History and settings access

S04 Home Dashboard -> S13 Activity History
S04 Home Dashboard -> S14 Profile And Settings

## 7. Designer Handoff Acceptance Checklist

Coverage:

- all screens S01 through S14 are designed
- all required states are provided for each applicable screen
- adult and child role variants are provided where behavior differs

Rules compliance:

- no child standalone login
- lifecycle and point timing are represented accurately
- reward decision owner is explicit in UI
- child-safe visibility constraints are respected

Visual compliance:

- spacing, radius, border, and token usage are documented in annotations
- both light and dark variants are provided for priority screens
- typography hierarchy and component states are complete

Ready-for-dev package:

- annotated user flow map
- screen-level interaction notes
- component inventory with state variants
- empty, loading, error, and success references

## 8. Source References

- [project-overview.md](project-overview.md)
- [mobile-first-designer-handoff.md](mobile-first-designer-handoff.md)

