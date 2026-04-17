# Backend Execution Backlog - Family Operating System

## 1) Mục tiêu

Quản lý toàn bộ task backend từ MVP đến production deploy theo sprint, có dependency rõ ràng, đo được tiến độ và quality gate.

## 2) Quy ước trạng thái

- `TODO`: Chưa bắt đầu
- `IN_PROGRESS`: Đang làm
- `REVIEW`: Đang review code/QA
- `DONE`: Hoàn tất
- `BLOCKED`: Bị chặn

## 3) Thông tin vận hành

- Start date: 2026-04-17
- Sprint length: 2 tuần
- Team backend: 2 dev
- Quality gate: Unit + Integration + Contract test pass, không có bug blocker/critical mở

## 4) Master Backlog (Backend)

| ID     | Epic           | Task                                                     | Priority | Sprint | Status | Assignee   |  SP | Dependency     | Deliverable        |
| ------ | -------------- | -------------------------------------------------------- | -------- | ------ | ------ | ---------- | --: | -------------- | ------------------ |
| BE-001 | Governance     | Khóa scope MVP theo roadmap + decision log               | P0       | S0     | TODO   | Unassigned |   3 | None           | MVP In/Out scope   |
| BE-002 | Governance     | Traceability matrix requirement -> API -> test -> metric | P0       | S0     | TODO   | Unassigned |   5 | BE-001         | Matrix v1          |
| BE-003 | Domain         | Chuẩn hóa domain model + invariants                      | P0       | S0     | TODO   | Unassigned |   8 | BE-001         | Domain spec        |
| BE-004 | Domain         | Thiết kế state machine theo lifecycle matrix             | P0       | S1     | TODO   | Unassigned |   8 | BE-003         | Transition map     |
| BE-005 | Data           | Thiết kế schema + constraint + index + migration v1      | P0       | S1     | TODO   | Unassigned |   8 | BE-003         | DB migration       |
| BE-006 | Security       | AuthN/AuthZ nền tảng                                     | P0       | S1     | TODO   | Unassigned |   8 | BE-005         | Auth baseline      |
| BE-007 | Security       | Policy permission + visibility cho API read/write        | P0       | S2     | TODO   | Unassigned |   8 | BE-006         | Policy layer       |
| BE-008 | API            | Implement API MVP theo contract baseline                 | P0       | S2     | TODO   | Unassigned |  13 | BE-004, BE-005 | Endpoint MVP       |
| BE-009 | API            | Chuẩn hóa validation + error model toàn hệ thống         | P0       | S2     | TODO   | Unassigned |   5 | BE-008         | Error standard     |
| BE-010 | Business Rules | Mã hóa rules catalog vào service layer                   | P0       | S3     | TODO   | Unassigned |  13 | BE-008         | Rule executor      |
| BE-011 | Membership     | Onboarding + membership workflow                         | P0       | S3     | TODO   | Unassigned |   8 | BE-007, BE-008 | Workflow hoạt động |
| BE-012 | Reward         | Reward/point policy + ledger giao dịch                   | P0       | S4     | TODO   | Unassigned |  13 | BE-010         | Point ledger       |
| BE-013 | Reliability    | Idempotency + concurrency guard cho flow critical        | P0       | S4     | TODO   | Unassigned |   8 | BE-010         | Không double-write |
| BE-014 | Observability  | Logging + metrics + tracing baseline                     | P0       | S5     | TODO   | Unassigned |   8 | BE-008         | Dashboard vận hành |
| BE-015 | Quality        | Unit + Integration + Contract test cho MVP               | P0       | S5     | TODO   | Unassigned |  21 | BE-008..013    | Test gate pass     |
| BE-016 | Release        | Staging hardening + deploy/rollback runbook              | P0       | S5     | TODO   | Unassigned |  13 | BE-014, BE-015 | Go-live checklist  |
| BE-101 | Performance    | Tối ưu query và endpoint nóng theo NFR                   | P1       | S6     | TODO   | Unassigned |   8 | BE-016         | p95 cải thiện      |
| BE-102 | Reliability    | Retry policy + dead-letter cho job async                 | P1       | S6     | TODO   | Unassigned |   8 | BE-016         | Không mất message  |
| BE-103 | Security       | Security hardening + audit review                        | P1       | S6     | TODO   | Unassigned |   8 | BE-016         | Audit report       |
| BE-104 | Data           | Data retention + privacy masking nâng cao                | P1       | S6     | TODO   | Unassigned |   5 | BE-016         | Retention policy   |
| BE-201 | Scalability    | Caching strategy cho read-heavy endpoints                | P2       | S7     | TODO   | Unassigned |   8 | BE-101         | Giảm tải DB        |
| BE-202 | Architecture   | Event-driven cho luồng mở rộng                           | P2       | S7     | TODO   | Unassigned |  13 | BE-102         | Giảm coupling      |
| BE-203 | Analytics      | Business event pipeline cho KPI                          | P2       | S7     | TODO   | Unassigned |   8 | BE-014         | KPI real-time      |

## 5) Sprint Planning Board

## Sprint 0 (Alignment)

- [ ] BE-001 Scope MVP
- [ ] BE-002 Traceability matrix v1
- [ ] BE-003 Domain model + invariants

## Sprint 1 (Foundation)

- [ ] BE-004 State machine
- [ ] BE-005 DB schema + migration
- [ ] BE-006 AuthN/AuthZ baseline

## Sprint 2 (API Core)

- [ ] BE-007 Permission/visibility policy
- [ ] BE-008 API MVP contract-first
- [ ] BE-009 Validation + error model

## Sprint 3 (Business Flow)

- [ ] BE-010 Rules catalog implementation
- [ ] BE-011 Onboarding + membership

## Sprint 4 (Critical Reliability)

- [ ] BE-012 Reward/point ledger
- [ ] BE-013 Idempotency + concurrency guard

## Sprint 5 (Quality & Release)

- [ ] BE-014 Observability baseline
- [ ] BE-015 Test strategy execution
- [ ] BE-016 Deploy + rollback runbook

## 6) Daily Tracking

| Date       | Task ID | Update              | Status | Blocker | Next Action   |
| ---------- | ------- | ------------------- | ------ | ------- | ------------- |
| 2026-04-17 | -       | Backlog initialized | DONE   | None    | Assign owners |

## 7) Blockers Log

| Date | Task ID | Blocker | Owner | ETA Resolve | Status |
| ---- | ------- | ------- | ----- | ----------- | ------ |
| -    | -       | -       | -     | -           | -      |

## 8) Decision Log (Backend)

| Date | Decision ID | Decision | Impacted Tasks | Owner |
| ---- | ----------- | -------- | -------------- | ----- |
| -    | -           | -        | -              | -     |

## 9) Definition of Done (Per Task)

- [ ] Acceptance criteria rõ ràng và được test pass trên CI
- [ ] Có log/metric cho luồng chính
- [ ] Không vi phạm API contract đã chốt
- [ ] Cập nhật traceability matrix
- [ ] Có ghi chú vận hành nếu ảnh hưởng production

## 10) Release Gate (P0)

- [ ] 100% P0 hoàn thành
- [ ] Không còn blocker/critical bug mở
- [ ] Smoke test staging pass
- [ ] Rollback rehearsal pass
- [ ] Dashboard + alert chạy ổn định

