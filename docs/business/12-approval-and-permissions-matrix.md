# Approval & Permissions Matrix

## Document Purpose

This matrix defines who can initiate, review, and finalize key MVP actions. It
captures business authority only; later technical specs can translate this into
permissions and access controls.

## Default Role Model

- Adult member: full household participant for MVP
- Child member: managed profile operating through parent-defined rules

## Action Matrix

| Action | Who can initiate | Review required | Who can finalize | Default MVP rule |
| --- | --- | --- | --- | --- |
| Create family | Adult member | No | Initiating adult | Auto-approved |
| Invite/add adult member | Adult member | No | Invited adult accepts join; initiating adult finalizes add flow | Household join requires invite/accept flow |
| Add child member profile | Adult member | No | Initiating adult | Auto-approved |
| Record adult contribution for self | Adult member | Sometimes | Another adult when review is required | Auto-approved by default unless marked as review-needed by rule or dispute context |
| Record adult contribution for another member | Adult member | Sometimes | Another adult or responsible adult | Review-required if attribution/value is not obvious |
| Record child contribution | Adult member or child via managed flow | Yes | Adult member | Always requires adult finalization |
| Approve or reject pending contribution | Adult member | N/A | Adult member other than the contributor where applicable | Self-finalization is not allowed when the item is in review-required state |
| Create reward owned by an adult | Adult member | No | Creating adult | Auto-approved |
| Create reward owned by a child | Adult member on behalf of child | No | Responsible adult | Auto-approved under adult control |
| Submit reward request | Any eligible member | No | System records request creation only | Request is created immediately |
| Accept/reject/delay reward request | Decision owner for that reward | No additional review | Decision owner | Decision owner must be explicit |
| Adjust finalized points | Adult member | Yes | Another adult or designated responsible adult | Allowed only as exception with visible reason |

## Default Approval Rules

- Child contribution always needs adult finalization.
- Adult self-logged contribution auto-approves unless the contribution type or
  context requires review.
- No one can both submit and finalize the same item once it enters a
  review-required state.
- Reward request decisions belong to the reward decision owner, not to the
  requester.

## Decision Owner Rule For Rewards

- If a reward is created by one adult for themselves to fulfill, that adult is
  the decision owner.
- If a reward is a child reward managed by a parent, the responsible adult is
  the decision owner.
- If a reward is framed as household-shared, MVP still requires one explicit
  adult decision owner rather than ambiguous family consensus.

## Non-Goals

- No dual-approval flow in MVP.
- No household owner super-role is required at business level for MVP.
- No open-ended delegation tree for permissions in MVP.
