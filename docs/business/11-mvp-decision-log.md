# MVP Decision Log

## Document Purpose

This document records the business decisions that are now locked for MVP so
engineering does not have to infer them during solution planning.

## Locked Decisions

| Decision area | MVP decision | Why it is locked now | Do not assume otherwise |
| --- | --- | --- | --- |
| Primary wedge | Parent-child contribution and reward loop is the primary wedge. | This gives MVP a clearer adoption story and reduces ambiguity in onboarding, approval, and reward logic. | Do not design MVP as an equal dual wedge by default. |
| Adult fairness | Adult-to-adult fairness is secondary but still present. | It remains part of the value proposition, but it must not destabilize the child loop. | Do not prioritize adult comparison features over child-loop clarity. |
| Child access model | Child members are managed profiles, not direct login accounts. | This matches early-family trust patterns and avoids overcomplicating auth and onboarding in MVP. | Do not require child sign-in, child email, or child-owned sessions in MVP. |
| Household rule model | MVP uses fixed defaults first with minimal explanation, not broad configurability. | Over-configurable rules would create planning and UX bloat before demand is validated. | Do not build generalized rule engines for MVP. |
| Point units | MVP uses exactly two point units: Task Points and Love Points. | A third recognition unit would create semantic drift and planning confusion. | Do not invent another points or badge currency for MVP. |
| Reward fulfillment | Reward requests remain voluntary even when structured. | This preserves emotional safety and aligns with the product thesis. | Do not model reward fulfillment as automatic obligation. |
| Fairness visibility | Fairness visibility is reflective, not judgmental. | The product must support discussion without surveillance or shame. | Do not add ranking or winner/loser framing in MVP. |

## Intentionally Deferred Decisions

These decisions remain intentionally open beyond MVP:

- whether children may ever get direct accounts after MVP;
- whether households may configure more rule variants after MVP;
- whether Love Points can ever unlock more material rewards after MVP;
- whether adult fairness needs deeper analytics after MVP.

## Planning Guardrails

- When a flow has to choose between adult fairness nuance and child-loop clarity,
  prefer child-loop clarity for MVP.
- When a design choice increases household configurability but does not improve
  first-week adoption, defer it.
- When a proposed feature introduces a new state, role, or point meaning, first
  check whether it breaks any locked decision above.
