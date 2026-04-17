# Project Overview For Family Operating System MVP

## 1. Purpose

This document is the product and design context overview for the MVP.
It explains what this project is, why it exists, and which rules are non-negotiable in design and implementation.

Use this document first when you need:

- product intent and emotional constraints
- MVP boundaries and non-goals
- role, permission, and visibility rules
- lifecycle and point timing semantics
- global UX constraints for mobile, accessibility, and forms

Companion execution document:

- screen-level specs, flows, and UI states are documented in [screen-specs-flows-states.md](screen-specs-flows-states.md)

## 2. Product Goal And Design Intent

Primary product goal:

- make household contribution visible
- increase recognition between family members
- support fairness conversations without shame

Design intent:

- emotionally safe, supportive, and respectful
- clear, low-friction interaction flows
- family-focused language, not workplace language
- no public ranking or punitive framing

Core principles that must be visible in UI:

1. Fairness without surveillance
2. Recognition before transaction
3. Voluntary social contracts
4. Emotional care counts
5. Playful motivation over rigid administration

## 3. MVP Scope

### 3.1 In Scope

- create family
- invite or add second adult
- create managed child profiles
- record contributions
- review and approve or reject contributions when required
- maintain two point types: Task Points and Love Points
- create rewards
- submit reward requests
- decide requests: Accept, Reject, Delay
- view activity history

### 3.2 Out Of Scope

- complex scoring formulas
- fairness AI recommendations
- social feed and reactions
- allowance or wallet system
- public leaderboards
- child standalone authentication
- broad role hierarchy beyond adult and child

## 4. User Roles And Persona Priorities

### 4.1 Persona Priority For Design Decisions

1. Primary Load Carrier (adoption driver)
2. Less-Structured Contributor (retention driver)
3. Child Contributor (habit and motivation driver)

### 4.2 Role Model

Adult member:

- full household participant
- can review and finalize required actions
- can create rewards and decide reward requests

Child member:

- managed profile under adult control
- can appear as contribution actor and reward requester
- is not an autonomous permission owner in MVP

## 5. Canonical Product Terms

Use these terms consistently in UI and design annotations.

| Term             | Meaning                                                           |
| ---------------- | ----------------------------------------------------------------- |
| Family           | Shared household space for all activity                           |
| Member           | Person inside a family                                            |
| Adult member     | Full decision-making participant                                  |
| Child member     | Managed participant with constrained visibility                   |
| Contribution     | Any action benefiting the household                               |
| Task Points      | Practical contribution currency                                   |
| Love Points      | Recognition-oriented currency                                     |
| Reward           | Redeemable item, privilege, or activity                           |
| Reward request   | Request to redeem a reward                                        |
| Decision owner   | Explicit person who can Accept, Reject, or Delay a reward request |
| Activity history | Shared timeline of actions and outcomes                           |

Copy style rules:

- use supportive and neutral language
- explain outcomes clearly
- avoid terms that imply punishment, shame, or competition

## 6. Business Rules Overview

### 6.1 Lifecycle And Point Timing Logic

Contribution lifecycle:

| State          | Point behavior                      |
| -------------- | ----------------------------------- |
| Draft          | No points                           |
| Pending review | No points yet                       |
| Approved       | Points granted now                  |
| Rejected       | No points granted                   |
| Adjusted       | Balance changes by adjustment delta |

Reward lifecycle:

| State    | Point behavior    |
| -------- | ----------------- |
| Draft    | No point movement |
| Active   | No point movement |
| Inactive | No point movement |

Reward request lifecycle:

| State     | Point behavior                   |
| --------- | -------------------------------- |
| Submitted | Points reserved (held)           |
| Delayed   | Points remain on hold            |
| Accepted  | Held points become spent         |
| Rejected  | Held points released immediately |
| Cancelled | Held points released immediately |
| Fulfilled | No additional point movement     |

### 6.2 Permissions Matrix

| Action                           | Adult                  | Child                |
| -------------------------------- | ---------------------- | -------------------- |
| Create family                    | Yes                    | No                   |
| Invite or add adult              | Yes                    | No                   |
| Add child profile                | Yes                    | No                   |
| Record contribution              | Yes                    | Yes via managed flow |
| Approve or reject contribution   | Yes                    | No                   |
| Create reward                    | Yes                    | No                   |
| Submit reward request            | Eligible member        | Eligible member      |
| Accept, Reject, or Delay request | Decision owner only    | No                   |
| Adjust finalized points          | Yes via exception flow | No                   |

Design requirements from permissions:

- hide unavailable actions when they are never valid
- disable actions with clear explanation when conditionally unavailable
- annotate role-based visibility in handoff notes

### 6.3 Visibility Matrix For Child-Safe UX

| Data artifact             | Adult view                  | Child view                       |
| ------------------------- | --------------------------- | -------------------------------- |
| Own contributions         | Full                        | Full own                         |
| Other adult contributions | Full                        | Hidden detail                    |
| Child contributions       | Full                        | Own only                         |
| Pending review details    | Full                        | Own awaiting-review only         |
| Rejection details         | Full                        | Simplified own-item explanation  |
| Own reward requests       | Full                        | Full own                         |
| Other adults requests     | Full                        | Hidden                           |
| Point balances            | Household-relevant balances | Own only                         |
| Point adjustment reasons  | Full                        | Hidden or simplified own-related |

## 7. Seed Taxonomy For Initial UI

### 7.1 Contribution Categories

Task-oriented categories:

- household chore
- personal responsibility completed
- family support
- planning or organizing effort

Recognition-oriented categories:

- emotional care
- thoughtful gesture
- family initiative

### 7.2 Reward Categories

Child-facing rewards:

- leisure time
- small treat
- special activity
- choice privilege

Family or adult-facing rewards:

- shared activity
- personal break time
- appreciation gesture
- small household favor

## 8. Global UX Constraints

### 8.1 Visual System Requirements

Required constraints:

- semantic color tokens only
- explicit spacing and radius scale usage
- explicit border rules and focus ring behavior
- light and dark variants for priority screens
- no ad-hoc decorative visual language as default

### 8.2 Mobile-First Layout Rules

Baseline:

- primary design width: 360px to 393px
- horizontal page padding: 16px
- minimum tap target: 44px by 44px
- vertical spacing rhythm: 8px, 12px, 16px, 24px

Breakpoint behavior:

- base layout: single column mobile
- medium and above: optional split panel or sidebar
- core workflows must remain fully available on mobile

Interaction rules:

- keep primary actions in thumb-reachable areas
- use progressive disclosure for long forms
- avoid dead-end modal interactions

### 8.3 Accessibility Requirements

- WCAG AA contrast for body text and controls
- visible focus for keyboard users
- text labels for all important controls
- icon-only controls require accessible labels
- error communication must include clear text
- dynamic state changes must be perceivable

### 8.4 Form And Dialog Requirements

Forms must include:

- clear labels and optional descriptions
- inline validation messages
- disabled and loading submit states
- cancel or reset where appropriate

Dialogs and sheets must include:

- clear title and intent description
- visible cancel action
- separated destructive confirmation action

## 9. Open Decisions Before High-Fidelity Freeze

1. default point values per contribution category
2. exact Love Points redemption boundaries
3. child age segmentation rules if needed
4. history pagination depth in MVP
5. reject-reason wording policy for child-safe display
6. notification model scope for MVP

## 10. Source References

- [design-system.md](design-system.md)
- [screen-specs-flows-states.md](screen-specs-flows-states.md)

