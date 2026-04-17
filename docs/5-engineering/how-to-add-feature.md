# How To Add A Feature

Use this workflow for any feature that changes behavior.

## 1. Confirm The Change

- Update `docs/1-product/` if scope or user-visible behavior changes.
- Update `docs/4-system/` if API, lifecycle, or data rules change.
- Update `docs/3-design/` if the user journey or screen map changes.

## 2. Implement In Vertical Slice Order

1. Backend contract and rule enforcement
2. Backend persistence and tests
3. Frontend integration and UI states
4. End-to-end verification of the slice

## 3. Verify Before Declaring Done

- Run lint and relevant typechecks.
- Run backend tests for rule-heavy changes.
- Add or update tests for regressions and lifecycle rules.
- Manually verify the happy path and the key forbidden path.

## 4. Update Docs In The Same Change

- Do not leave docs drift for later.
- If the behavior changed, the matching doc must change with it.
- Keep each rule in one primary location rather than duplicating it.

## 5. Keep It Small

- Prefer extending an existing flow over inventing a new layer.
- Prefer deletion or consolidation over adding parallel documentation.
- Avoid new dependencies unless clearly justified.
