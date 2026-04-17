# Business PRD

## Document Purpose

This is the central product handoff document for Family Operating System. Senior
frontend and backend engineers should use this document as the primary business
reference before writing technical design materials.

## Product Goal

Create a family product that helps households make contribution visible, reward
positive participation, and improve fairness without turning the home into a
strict management system.

## Primary MVP Wedge

The primary wedge for MVP is the parent-child contribution and reward loop.

Adult-to-adult fairness visibility remains an important secondary value, but the
MVP should resolve ambiguity in favor of making parent-managed child
participation, recognition, and reward redemption coherent first.

## Business Objectives

- Validate demand for a family contribution and recognition system in Vietnam.
- Prove that transparent contribution tracking can increase perceived fairness.
- Increase family participation in chores and support behaviors.
- Create a repeatable product habit around contribution, recognition, and reward
  exchange.
- Establish a strong enough value proposition to justify deeper product
  investment after MVP.

## MVP Definition

MVP is the smallest coherent version of FOS that can prove whether families are
willing to adopt a shared contribution and recognition system.

MVP must support:

- creating a family space;
- adding family members;
- recording contributions;
- granting or adjusting points;
- creating rewards;
- redeeming or requesting rewards;
- basic approval decisions on relevant actions;
- viewing family activity history.

## In Scope For MVP

### Household Setup

- Create family
- Add members
- Use managed child profiles rather than child login accounts
- Basic role distinction between adults and children
- Use fixed default household rules in MVP, not broad household configurability

### Contribution Tracking

- Record contribution
- Categorize contribution at a simple business level
- Attribute points
- Handle approval when needed
- Show activity history

### Point Economy

- Support Task Points
- Support Love Points at a basic level
- Display current balances clearly

### Reward And Request Flow

- Create reward
- Define reward cost
- Choose point type for reward
- Submit a request/redemption
- Accept, reject, or delay

### Household Visibility

- Shared activity timeline
- Basic contribution visibility by member
- Lightweight fairness awareness as a secondary, non-ranking view

## Out Of Scope For MVP

- Complex automated scoring formulas
- Advanced AI fairness recommendations
- Deep social features such as comments or reactions
- Full achievement system
- Detailed streak engines
- Public family rankings
- Financial wallet or allowance management
- External household integrations
- Broad support for every family structure and cultural variation

## Primary User Roles

### Adult Household Member

- Can create or participate in household contribution flows
- Can review or approve actions that require adult confirmation
- Can create rewards and respond to requests

### Child Household Member

- Can complete contribution tasks
- Can receive points and redeem eligible rewards
- Operates as a managed child profile under parent-defined household rules

## Core Functional Capabilities

### Capability 1: Family Setup

The product must let a household establish a shared participation context.

### Capability 2: Contribution Capture

The product must let members record meaningful household contributions in a way
that is easy to understand and socially acceptable.

### Capability 3: Recognition And Pointing

The product must let the household recognize completed effort with transparent,
simple point logic.

### Capability 4: Reward Exchange

The product must let members convert points into requests or rewards through a
respectful approval flow.

### Capability 5: Activity Visibility

The product must provide shared history and enough visibility to support fairness
discussion.

## High-Level Business Rules

- Not every contribution needs identical handling.
- Adult review is required for actions where fairness is disputed or where a
  child contribution needs confirmation.
- Love Points are recognition-oriented and should not be treated exactly like
  Task Points.
- MVP uses only two point units: Task Points and Love Points.
- Reward fulfillment remains voluntary; the system structures the request but
  does not force compliance.
- Family trust is more important than perfect numerical precision.

## Success Metrics For MVP

MVP should be judged by whether households:

- complete onboarding and invite more than one member;
- record repeated contributions over time;
- use at least one reward/request flow;
- continue engaging beyond the first novelty period;
- report the system as clearer and fairer than ad hoc household tracking.

## Product Risks

- The app feels emotionally cold or judgmental.
- Adults disagree on rules and abandon the system.
- Children optimize for points without understanding contribution values.
- Reward flows feel too transactional.
- Initial setup burden lands on the already overloaded adult.

## Dependencies

- A clear shared vocabulary for contribution, points, rewards, and requests
- Simple enough household rules to explain in onboarding
- Trustworthy history and approval states
- A parent-managed membership model for child participation
- UX that prevents the app from feeling accusatory

## Assumptions

- Families are willing to experiment with a shared system if setup is simple.
- Adults will tolerate lightweight review/approval if the value is clear.
- Parents see value in linking contribution to rewards for children.
- The market will respond better to fairness-plus-recognition framing than to
  pure task tracking.

## MVP Versus Later-Phase Decisions

Decisions intentionally kept small in MVP:

- membership and access model;
- recognition model;
- point model;
- reward flow;
- household comparison views.

Decisions intentionally deferred:

- advanced gamification;
- social interaction layer;
- fairness intelligence and recommendations;
- monetization model;
- broader localization strategy.

## Handoff Notes For Technical Design

Frontend should preserve emotional safety and clarity.

Backend should preserve business meaning and approval intent.

Neither team should hard-code unresolved product assumptions as irreversible
technical constraints without an explicit product decision.

Teams should use the Planning-Ready BA Addendum documents as mandatory references
before finalizing any solution design.
