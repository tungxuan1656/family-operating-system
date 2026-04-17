# KPI & Measurement Framework

## Document Purpose

This document defines how FOS should judge product progress at the business
level. Metrics here are intended to guide product learning and prioritization,
not to create premature operational dashboards.

## Measurement Principles

- Metrics should reflect family value, not only feature usage.
- Early-stage metrics should favor learning signals over vanity growth.
- The product must measure both engagement and relational risk.
- Metrics should be interpretable by product, design, and engineering.

## North Star Candidate

### Candidate Metric

Weekly active families completing at least one full contribution-to-recognition
or contribution-to-reward loop.

### Why This Fits

- It measures household-level value, not just individual clicks.
- It captures repeated usage.
- It reflects the product's core promise more directly than raw sign-ups.

## Activation Metrics

Use activation to determine whether a household reaches first value quickly.

- Family creation rate
- Multi-member join rate
- Percentage of families logging first contribution within the first session
- Percentage of families creating at least one reward within the first week
- Time from signup to first visible household event

## Engagement Metrics

Use engagement to understand whether families are building a habit.

- Weekly active families
- Contributions logged per active family per week
- Rewards created per active family
- Requests submitted per active family
- Timeline views per active family
- Percentage of active families with participation from more than one member
- Percentage of two-adult households with both adults participating

## Retention Metrics

Use retention to understand whether the concept survives beyond novelty.

- Week 1 family retention
- Week 4 family retention
- Returning-family rate after first reward redemption
- Repeat contribution rate by family
- Adult re-engagement rate after first setup

## Family Health And Fairness Proxy Metrics

Because fairness is subjective, FOS should rely on proxy indicators.

- Share of households with contributions from more than one member
- Share of households with recurring contribution activity across weeks
- Balance spread between members over time
- Ratio of recognized emotional-care actions to purely operational chores
- Self-reported fairness improvement from research or beta feedback

## Reward Economy Metrics

- Rewards created per family
- Reward redemption/request rate
- Accept/reject/delay distribution
- Time between request and outcome
- Percentage of rewards using Task Points versus Love Points

## Risk Metrics

These help detect whether the product is creating the wrong behavior.

- Single-user households that never activate others
- Drop-off after setup
- High pending/rejection rates
- Large point inflation without repeat reward use
- Households with activity concentrated in one overloaded adult
- Qualitative feedback mentioning judgment, pressure, or unfairness

## Metrics To Delay Until Later

These are useful later, but should not distract the MVP team yet:

- LTV/CAC style commercial efficiency metrics
- detailed cohort monetization metrics
- advanced contribution-category benchmarking
- AI recommendation acceptance rates

## Measurement Guidance For Early Product Reviews

When reviewing early product progress:

- start with family-level activation and repeat usage;
- compare adult participation breadth, not just raw event count;
- review qualitative feedback alongside metrics;
- treat fairness outcomes as directional signals, not definitive truth.
