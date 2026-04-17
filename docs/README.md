# Family Operating System Docs

This `docs/` folder is the only product-and-delivery documentation pack you
need to start building Family Operating System.

## Reading Order

1. [1-product/product-overview.md](./1-product/product-overview.md)
2. [1-product/feature-list.md](./1-product/feature-list.md)
3. [2-planning/roadmap.md](./2-planning/roadmap.md)
4. [2-planning/task-breakdown.md](./2-planning/task-breakdown.md)
5. [3-design/screen-list.md](./3-design/screen-list.md)
6. [3-design/user-flows.md](./3-design/user-flows.md)
7. [4-system/architecture.md](./4-system/architecture.md)
8. [4-system/api-contract.md](./4-system/api-contract.md)
9. [4-system/database.md](./4-system/database.md)
10. [5-engineering/how-to-add-feature.md](./5-engineering/how-to-add-feature.md)
11. [5-engineering/coding-conventions.md](./5-engineering/coding-conventions.md)
12. [5-engineering/git-workflow.md](./5-engineering/git-workflow.md)
13. [5-engineering/definition-of-done.md](./5-engineering/definition-of-done.md)
14. [6-ops/deployment.md](./6-ops/deployment.md)
15. [6-ops/nfr.md](./6-ops/nfr.md)

## Source Of Truth

- Product intent and MVP scope live in `1-product/`.
- What to build next lives in `2-planning/`.
- UI journeys and screens live in `3-design/`.
- Shared FE/BE contracts live in `4-system/`.
- Engineering workflow and completion rules live in `5-engineering/`.
- Release-first operational expectations live in `6-ops/`.

When behavior changes, update the most specific source-of-truth file in the same
change.

## Fast Start

- New contributor: read `product-overview`, `feature-list`, `user-flows`, then
  `architecture`.
- Backend work: read `api-contract`, `database`, `task-breakdown`, then
  `apps/worker/docs/standards/README.md`.
- Frontend work: read `screen-list`, `user-flows`, `api-contract`, then
  `apps/web/docs/standards/README.md`.

## Scope Notes

- This docs pack is optimized for a small personal project.
- Optional sections from the original template such as ADRs, per-feature specs,
  and postmortems are intentionally omitted.
- Old docs are no longer kept in-tree. Use Git history if you need prior
  versions.
