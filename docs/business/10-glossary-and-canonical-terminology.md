# Glossary & Canonical Terminology

## Document Purpose

This glossary defines the shared language for product, design, frontend, and
backend. All later documentation should prefer the canonical terms below.

## Canonical Terms

| Vietnamese term | English term | Definition | Usage note |
| --- | --- | --- | --- |
| Gia đình | Family | The primary shared participation space in the product. | Use as the top-level business object. |
| Thành viên | Member | A person inside a family space. | Neutral umbrella term for adults and children. |
| Thành viên người lớn | Adult member | An adult participant in the family space. | Prefer this over vague terms like owner when referring to business roles. |
| Thành viên trẻ em | Child member | A child participant in the family space. | Use when rules differ from adult behavior. |
| Hồ sơ trẻ em được quản lý | Managed child profile | A child profile created and controlled by an adult member for MVP participation. | Use this instead of implying that every child has a standalone account. |
| Đóng góp | Contribution | Any action that benefits the household and is recognized by the system. | Canonical umbrella term for chores, support, planning, and emotional care. |
| Điểm trách nhiệm | Task Points | Points linked to practical work or responsibility. | Primary exchange-oriented point type in MVP. |
| Điểm ghi nhận | Love Points | Points linked to appreciation or emotional care. | Prefer this Vietnamese phrasing over wording that sounds overly romantic or awkward in broad family contexts. |
| Phần thưởng | Reward | A redeemable item, activity, privilege, or favor. | Use when something can be requested in exchange for points. |
| Yêu cầu đổi thưởng | Reward request | The act of redeeming or asking for a reward. | Use when a request creates a decision for another member. |
| Người quyết định | Decision owner | The explicit member responsible for accepting, rejecting, or delaying a reward request. | Prefer this over vague phrases like approver when the action concerns reward authority. |
| Chấp nhận | Accept | A positive decision outcome for a request. | Canonical decision verb. |
| Từ chối | Reject | A negative decision outcome for a request. | Must not imply punishment. |
| Trì hoãn | Delay | A deferred decision outcome for a request. | First-class business state, not an afterthought. |
| Lịch sử hoạt động | Activity history | The visible record of household actions and outcomes. | Preferred user-facing term for the shared log. |
| Công bằng | Fairness | The household perception that contribution is visible and reasonably balanced. | Treat as a subjective outcome, not a mathematically exact state. |
| Ghi nhận | Recognition | Explicit acknowledgment of effort or care. | Central product promise; do not reduce it to points only. |

## Preferred Product Language

Use wording that feels:

- supportive;
- respectful;
- family-friendly;
- emotionally warm but not childish for adults;
- easy to translate later if the product expands internationally.

## Terms To Avoid Or Use Carefully

| Avoid or limit | Why |
| --- | --- |
| Chấm điểm người thân | Sounds like judging family members rather than recognizing contribution. |
| Quản lý nhân sự gia đình | Feels corporate and emotionally wrong for the home context. |
| KPI gia đình | Can be useful internally, but should rarely appear in user-facing language. |
| Phạt điểm | Overly punitive framing for MVP. |
| Leaderboard | Encourages unhealthy comparison in family settings. |
| Owner | Too technical or product-centric for household role meaning. |

## Naming Rules For Future Docs

- Prefer "contribution" over "task" when the action may include emotional or
  invisible labor.
- Prefer "reward request" over "purchase" or "buy" when the flow involves
  another person's voluntary participation.
- Prefer "activity history" or "timeline" over "audit log" in product language.
- Prefer "adult member" and "child member" over engineering shorthand in
  cross-functional documents.

## Translation Guidance

- Use Vietnamese as the primary business-language baseline for local-market
  clarity.
- Keep English equivalents stable for technical handoff and future expansion.
- If a Vietnamese term feels too formal, prefer a softer but still precise term.
- If a term risks making family relationships sound transactional, revise it.

## Glossary Governance

- Update this glossary before introducing new business-language terms in PRDs,
  wireframes, or technical specs.
- If product and engineering need a new term, define it here first.
- If a term conflicts with emotional tone, choose tone safety over technical
  cleverness.
