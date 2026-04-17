# Visibility Matrix

## Document Purpose

This matrix defines what each role should be able to see at a business level in
MVP. It exists to protect emotional safety while keeping household activity
transparent enough to support fairness.

## Default Visibility Principles

- Adults have broad household visibility because they hold decision authority.
- Children should see enough to understand their own participation and rewards,
  but not enough to expose adult-sensitive conflict detail.
- Visibility should support trust, not surveillance.

## Visibility Matrix

| Artifact or information | Adult member visibility | Child member visibility | Default MVP rule |
| --- | --- | --- | --- |
| Own contributions | Full | Full for own child-facing activity | Visible |
| Other adult contributions | Full | Not shown in detail | Adult-only detail |
| Child contributions | Full | Child can see own contribution outcomes | Child sees own only |
| Pending contribution needing adult review | Full for adults | Child may see "awaiting review" for own items only | Child does not see adult reviewer context |
| Rejection reason for child contribution | Full | Simplified child-safe explanation for own item | No adult conflict detail for children |
| Reward catalog visible to requester | Full for eligible rewards | Full for child-eligible rewards | Filter by eligibility/context |
| Own reward requests | Full | Full for own child-facing requests | Visible |
| Other adults' reward requests | Full | Hidden | Adult-only |
| Adult-to-adult request outcome details | Full | Hidden | Adult-only |
| Child reward request status | Full | Visible to the child for their own request | Child sees own status only |
| Point balances | Adults can see household-relevant balances | Child sees own balance only | No full-household child ledger |
| Adjustment reasons | Full | Hidden or simplified for own related item only | Preserve trust without exposing adult disputes |

## Child-Safe Visibility Guardrails

- Children should not see adult-to-adult rejection narratives.
- Children should not see full household comparison summaries.
- Children may see their own progress, earned points, and reward request status.
- Children may see simplified explanations such as `awaiting parent review` or
  `not approved this time`.

## Planning Guardrails

- If a technical design exposes more information than this matrix, it should be
  treated as a product decision change, not an implementation default.
- If a UI summary risks shame or surveillance, prefer summary reduction over
  additional exposure in MVP.
