# Feature Prioritization & Release Roadmap

## Document Purpose

This document explains which capabilities belong in MVP, which should follow
later, and what business logic drives that sequencing.

## Prioritization Logic

Features belong in MVP only if they do at least one of the following:

- prove the core value proposition;
- reduce the biggest user pain;
- create a complete family loop from contribution to reward;
- improve trust and retention in the first few weeks.

Features should be deferred if they:

- add complexity without proving demand;
- rely on unresolved business assumptions;
- increase emotional risk before trust is established;
- create large implementation overhead for limited learning value.

## Release 0: Foundation MVP

### Goal

Prove that families will use a shared system for contribution visibility,
recognition, and reward exchange.

### Included Capabilities

- family creation and member setup;
- adult and child role distinction;
- contribution logging;
- simple point granting and display;
- reward creation;
- request/redemption with accept, reject, delay;
- activity timeline/history;
- lightweight fairness visibility.

### Why These Features Are In

- They are required to test the complete core loop.
- They support both parent-parent and parent-child use cases.
- They let the team observe whether the product helps family coordination at all.

## Release 1: Post-MVP Stabilization

### Goal

Improve clarity, repeat usage, and trust after the core loop is proven.

### Candidate Capabilities

- better recurring-task support;
- improved household rule templates;
- clearer reward management;
- history filtering and summary views;
- richer onboarding guidance.

### Why These Features Come Next

- They improve usability and retention after the product concept is validated.
- They should be shaped by real user behavior rather than guessed upfront.

## Release 2: Gamification Phase

### Goal

Increase repeat motivation once the base household loop is stable.

### Candidate Capabilities

- levels;
- achievements;
- streaks;
- richer child-progress visuals;
- household milestones.

### Why This Is Deferred

- Gamification can amplify good or bad mechanics.
- It should be layered on only after the point system and fairness model feel
  safe and coherent.

## Release 3: Social Phase

### Goal

Increase emotional reinforcement and household engagement.

### Candidate Capabilities

- reactions;
- comments;
- celebration moments;
- richer timeline interaction.

### Why This Is Deferred

- Social features add engagement value, but they are not required to validate
  the core problem/solution fit.
- They can create emotional risk if introduced before trust and norms exist.

## Release 4: Fairness Intelligence Phase

### Goal

Help households reflect on patterns and improve balance over time.

### Candidate Capabilities

- contribution summaries;
- trend insights;
- balance prompts;
- fairness recommendations;
- family health indicators.

### Why This Is Deferred

- Intelligence features depend on sufficient household history and strong trust.
- Premature fairness analytics may feel intrusive or overconfident.

## Product Dependencies By Phase

### MVP Dependencies

- clear business vocabulary;
- explainable point logic;
- safe reward/request framing;
- low-friction onboarding.

### Post-MVP Dependencies

- evidence of retention and repeat contribution behavior;
- observed friction in real household flows.

### Later-Phase Dependencies

- confidence that households interpret the product positively;
- enough behavioral data to justify smarter features.

## Priority Guardrails

When a feature request appears, prioritize it lower if:

- it solves edge behavior before the main household loop works;
- it adds scoring complexity without clearer fairness value;
- it improves novelty more than retention;
- it locks the product into one family culture too early.

Prioritize it higher if:

- it reduces friction for the primary load carrier;
- it increases trust for the second adult;
- it makes child participation clearer and more consistent;
- it strengthens the contribution-to-recognition-to-reward loop.
