# 04 Lifecycle and Acceptance

## Lifecycle đóng góp

| Trạng thái     | Điều kiện vào             | Điều kiện ra                        | Điểm       |
| -------------- | ------------------------- | ----------------------------------- | ---------- |
| Draft          | Bắt đầu tạo đóng góp      | Gửi hoặc hủy                        | Chưa cộng  |
| Pending Review | Hồ sơ trẻ em gửi đóng góp | Phê duyệt hoặc từ chối              | Chưa cộng  |
| Approved       | Người có quyền chấp nhận  | Có thể điều chỉnh ngoại lệ có lý do | Cộng điểm  |
| Rejected       | Người có quyền từ chối    | Tạo bản ghi mới                     | Không cộng |

## Lifecycle reward request

| Trạng thái | Điều kiện vào              | Điều kiện ra               | Điểm                             |
| ---------- | -------------------------- | -------------------------- | -------------------------------- |
| Submitted  | Gửi yêu cầu hợp lệ         | Chấp nhận/từ chối/trì hoãn | Chưa trừ                         |
| Delayed    | Người quyết định trì hoãn  | Chấp nhận hoặc từ chối     | Không đổi                        |
| Accepted   | Người quyết định chấp nhận | Fulfilled                  | Trừ điểm tại thời điểm chấp nhận |
| Rejected   | Người quyết định từ chối   | Gửi yêu cầu mới            | Không đổi                        |
| Fulfilled  | Hoàn tất thực thi          | Kết thúc                   | Giữ nguyên                       |

## Adjustment rule

- Adjustment là action trên bản ghi đã approved, không là state riêng.
- Bắt buộc có actor, timestamp, lý do, và delta điểm.

## Acceptance criteria tối thiểu

### Setup

- Tạo được gia đình và thêm được thành viên.
- Phân biệt vai trò người lớn và hồ sơ trẻ em rõ ràng.

### Contribution

- Đóng góp đi đúng lifecycle.
- Không cộng điểm trước khi approved.
- Trẻ em không thể tự chốt điểm.

### Reward request

- Mỗi request có người quyết định rõ ràng.
- Có đủ 3 kết quả: chấp nhận, từ chối, trì hoãn.
- Không có trừ điểm sai thời điểm.

### Visibility and safety

- Trẻ em không thấy chi tiết xung đột người lớn.
- Không có bố cục xếp hạng thắng thua.

## Tham chiếu

- [02 Business Rules and Policy](./02-business-rules-and-policy.md)
- [03 Roles Permissions Visibility](./03-roles-permissions-visibility.md)
- [05 Roadmap KPI Risk](./05-roadmap-kpi-risk.md)

