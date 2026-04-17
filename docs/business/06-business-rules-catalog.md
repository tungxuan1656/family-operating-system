# Business Rules Catalog

## Document Purpose

This document defines the business meaning and decision rules that later
technical design should honor. It exists to prevent different teams from
interpreting the same product concept in conflicting ways.

For planning-ready decisions on approval authority, lifecycle, visibility,
membership, and reward policy, read this document together with:

- [MVP Decision Log](./11-mvp-decision-log.md)
- [Approval & Permissions Matrix](./12-approval-and-permissions-matrix.md)
- [Lifecycle & State Matrix](./13-lifecycle-and-state-matrix.md)
- [Visibility Matrix](./16-visibility-matrix.md)
- [Reward & Point Policy](./17-reward-and-point-policy.md)

## Canonical Business Objects

### Family

A family is the primary shared participation space. It contains members,
contributions, points, rewards, requests, and shared history.

### Member

A member is a person inside a family space. Members are grouped at minimum into
adult members and child members for MVP.

### Contribution

A contribution is any recognized action that benefits the household, including
chores, support tasks, planning effort, or emotional care.

### Points

Points are the household's recognition and exchange units. MVP uses two point
types:

- Task Points: linked to chores, responsibilities, or operational help
- Love Points: linked to appreciation, emotional care, or thoughtful actions

### Reward

A reward is an item, privilege, activity, or favor that a member can make
available in exchange for points.

### Request

A request is the act of redeeming or asking for a reward. A request creates a
structured decision point for another member or the household.

## Point-Type Rules

### Task Points

- represent practical contribution;
- can be exchanged for eligible rewards;
- should be easy to explain;
- should not require complex formulas in MVP.

### Love Points

- represent emotional recognition;
- should support appreciation visibility;
- should be more constrained than Task Points when tied to material exchange;
- should not reduce emotional care to a purely commercial mechanic.

## Contribution Rules

- A contribution must be attributable to a specific member.
- A contribution may be pre-valued, manually valued, or reviewed by an adult.
- A contribution should belong to a business-understandable category even if
  categories stay lightweight in MVP.
- A contribution can remain pending until required review is complete.
- A rejected contribution should remain understandable in history instead of
  disappearing silently.

## Point Award Rules

- Points are granted only after the action reaches the required decision state.
- If approval is required, points should not finalize before approval.
- Point deduction must be rare, explainable, and behaviorally safe.
- Negative scoring should not become the default family management pattern.

## Reward Rules

- Rewards can be created by adults and, where appropriate, by children under
  household rules.
- A reward must declare which point type it uses.
- A reward should be framed as a household agreement, not a legal obligation.
- Rewards that feel inappropriate or emotionally manipulative should remain out
  of scope for MVP policy.

## Request Decision Rules

- A request can result in accept, reject, or delay.
- Delay is a first-class outcome because timing matters in family life.
- Reject must be allowed without breaking the product's relational framing.
- The product should preserve the voluntary nature of reward fulfillment.

## Adult Versus Child Rules

### Adults

- can record contributions;
- can approve relevant actions;
- can create and respond to rewards/requests;
- help define household norms.

### Children

- can contribute and accumulate points under household rules;
- usually rely on adult confirmation for point-awarding events;
- should not be exposed to punitive or confusing comparison patterns.

## Fairness Rules

- The system should increase fairness visibility, not claim perfect fairness.
- Fairness data should support reflection rather than accusation.
- The product should avoid simplified judgments such as "best" or "worst"
  household member in MVP.
- Emotional care should be recognized, but not over-quantified.

## Anti-Abuse Rules

- Members should not be able to self-award final approval in contexts where a
  review is expected.
- The system should discourage point inflation through overly frequent or
  trivial contribution logging.
- Child rewards should not be gamed through inconsistent adult review.
- Repeated rejection or delay patterns may become product insight later, but
  MVP should first preserve transparency and trust.

## Rules That Are Intentionally Unsettled

These items should stay open for later product and technical discussion:

- the exact catalog of contribution categories;
- the default point values for typical household actions;
- whether Love Points can ever partially unlock material rewards;
- how many household roles beyond adult/child are needed after MVP;
- what audit/history detail is appropriate for family trust without overdoing
  surveillance.

## Follow-Up Questions For PM And Engineering

- What minimum safeguards prevent points from feeling arbitrary?
- Which later-phase safeguards should exist if household rules become more
  configurable?
- How should the current MVP guardrails evolve if adult-fairness features become
  primary later?
