# Acceptance Criteria

## Document Purpose

This document defines pass/fail business acceptance criteria for the core MVP
flows. It is intended to remove hidden assumptions before FE/BE begin solution
planning.

## Family Setup

Pass when:

- an adult can create a family space;
- the family space can add another adult member and a child profile;
- role distinction between adult member and child member is clear;
- the household can begin recording contributions after setup.

Fail when:

- the family cannot start using the product until every invite is accepted;
- child participation requires a standalone login;
- household role meaning is ambiguous.

## Record Contribution

Pass when:

- every contribution has a clear actor;
- every contribution has a simple business category or intent;
- every contribution has a visible approval state;
- approved contributions update points clearly;
- rejected contributions remain understandable in activity history.

Fail when:

- the household cannot tell whether a contribution is pending, approved, or
  rejected;
- points appear before the required approval step;
- rejected actions disappear without trace.

## Approval Flow

Pass when:

- the system can distinguish auto-approved and review-required actions;
- child contribution requires adult finalization;
- review-required items cannot be self-finalized by the same member;
- approve and reject both result in a visible, understandable end state.

Fail when:

- review authority is ambiguous;
- pending items can silently finalize themselves;
- users cannot tell why an item was rejected or who should act next.

## Reward Request Flow

Pass when:

- every reward has a clear decision owner;
- request outcomes `accept`, `reject`, and `delay` each have distinct meaning;
- points are held, spent, or released according to the reward request state;
- requester and decision owner can both understand the current request state.

Fail when:

- the decider is not explicit;
- delay behaves like an invisible limbo state;
- rejected or cancelled requests leave points in an unclear condition.

## Fairness Visibility

Pass when:

- the household can see enough shared history to discuss contribution patterns;
- the product avoids public ranking or shame framing;
- fairness visibility supports reflection rather than accusation;
- child visibility remains emotionally safe and age-appropriate.

Fail when:

- the product implies one member is objectively best or worst;
- visibility exposes too much adult-sensitive detail to children;
- history is too sparse to support any meaningful discussion.
