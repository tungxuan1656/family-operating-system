# 06 NFR and Observability Baseline

## Goal

Define minimum non-functional requirements so the system is reliable and
operable beyond feature correctness.

## Performance Baseline (MVP)

- API p95 latency target for normal reads: <= 400 ms
- API p95 latency target for normal writes: <= 700 ms
- Web initial route target on good network: <= 3 seconds

Targets are starting baselines and should be tightened with production data.

## Availability Baseline

- Define SLO target before public rollout.
- For MVP, track uptime and error-rate trends even if formal SLA is not yet
  published.

## Reliability Baseline

- Retries must be bounded and idempotent for retry-safe operations.
- Failures must be explicit and observable, not silently swallowed.
- Timeouts must be configured for outbound dependency calls.

## Observability Baseline

Minimum telemetry signals:

- Structured logs with requestId and actor context when applicable
- API error counters by error code
- Latency metrics by endpoint group
- Deployment marker events for correlation

## Logging Rules

- Log enough context to debug behavior and policy decisions.
- Do not log credentials, tokens, or sensitive personal details.
- Keep log keys stable for querying and dashboards.

## Alerting Baseline

Define alerts for at least:

- Error-rate spikes
- Latency regressions
- Authentication/authorization failure anomalies

Each alert must have an owner and response runbook reference.

## Capacity and Cost Awareness

- Track request volume and storage growth trends.
- Revisit query and index strategy when latency or cost deviates from baseline.

