# Git Workflow

## Branching

- Use small, focused branches.
- Keep unrelated work out of the same branch.
- Prefer one coherent behavior change per branch.

## Commits

- Keep commits reviewable and intentional.
- If behavior changes, include the matching doc update in the same commit or
  branch.
- When using the repo's Lore commit style, explain why the change exists, not
  just what changed.

## Pull Request Expectations

- Summarize the behavior change.
- Call out product, API, or data model impact.
- Mention verification that was run.
- Be explicit about what was not tested.

## No-Drift Rule

- Do not merge code that changes behavior while leaving product or system docs
  stale.
- Do not silently change API contracts or lifecycle rules.
