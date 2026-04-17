# Lifecycle & State Matrix

## Document Purpose

This document defines the minimum business lifecycle for the key MVP objects so
tech planning can reason about transitions without inventing domain behavior.

## Contribution Lifecycle

| State | Meaning | Entry trigger | Exit trigger | Point behavior |
| --- | --- | --- | --- | --- |
| Draft | Contribution data is being prepared but not yet submitted. | User starts recording a contribution. | Submit or discard | No points |
| Pending review | Contribution exists but needs adult finalization. | Child contribution submitted, or adult contribution marked review-required. | Approve or reject | No points yet |
| Approved | Contribution is accepted as valid household effort. | Required reviewer approves, or contribution auto-approves by rule. | Adjusted only through exception flow | Points are granted now |
| Rejected | Contribution is not accepted for final scoring. | Reviewer rejects pending contribution. | Optional replacement/new submission, not silent conversion | No points granted |
| Adjusted | A finalized contribution had its point outcome corrected. | Adult exception flow with reason. | End state for MVP history purposes | Balance changes reflect adjustment delta |

## Reward Lifecycle

| State | Meaning | Entry trigger | Exit trigger | Point behavior |
| --- | --- | --- | --- | --- |
| Draft | Reward is being defined. | User starts creating reward. | Publish or discard | No point movement |
| Active | Reward is available for request/redemption. | Reward is created and published. | Archived or made unavailable | No point movement |
| Inactive | Reward is no longer available for new requests. | Adult hides, archives, or retires reward. | Optional reactivation later | No point movement |

## Reward Request Lifecycle

| State | Meaning | Entry trigger | Exit trigger | Point behavior |
| --- | --- | --- | --- | --- |
| Submitted | A valid request has been created and is awaiting a decision. | Eligible requester submits request against an active reward. | Accept, reject, cancel, or delay | Required points are reserved/held at submission |
| Delayed | Decision owner has not accepted or rejected yet. | Decision owner chooses delay. | Accept, reject, or cancel | Points remain on hold |
| Accepted | Request is approved for fulfillment. | Decision owner accepts. | Fulfilled or closed | Points convert from held to spent on acceptance |
| Rejected | Request is declined. | Decision owner rejects. | End state | Held points are released back immediately |
| Cancelled | Request is withdrawn before decision or fulfillment. | Requester cancels where allowed, or responsible adult cancels child request | End state | Held points are released back immediately |
| Fulfilled | Accepted reward has been completed. | Reward is marked complete after acceptance. | End state | No additional point movement in MVP |

## Default Lifecycle Rules

- Points are never final before required approval is complete.
- Reward points are held at request submission to avoid double-spending.
- Accepted reward requests consume held points at acceptance, not at eventual
  fulfillment.
- Rejected or cancelled reward requests release held points immediately.
- Delay is a valid visible state, not an invisible timeout.

## Retroactive Adjustment Boundary

- MVP allows retroactive point adjustment only for adult exception handling.
- Every adjustment must carry a visible reason in business history.
- Adjustment is correction behavior, not normal household play.

## Planning Guardrails

- Do not add extra lifecycle branches unless a business artifact in this pack
  requires them.
- If a proposed technical design needs more states, it should first prove that
  the added state represents a distinct business meaning.
