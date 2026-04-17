# 03 Roles Permissions Visibility

## Vai trò trong MVP

- Adult Member: có quyền tạo, duyệt, quyết định theo quy tắc.
- Managed Child Profile: tham gia qua người lớn, quyền giới hạn.

## Ma trận quyền hành động chính

| Hành động                  | Actor khởi tạo         | Người chốt cuối  | Ghi chú                          |
| -------------------------- | ---------------------- | ---------------- | -------------------------------- |
| Tạo gia đình               | Người lớn              | Người khởi tạo   | Hoàn tất ngay                    |
| Mời người lớn              | Người lớn              | Người được mời   | Cần xác nhận tham gia            |
| Thêm hồ sơ trẻ em          | Người lớn              | Người khởi tạo   | Hoàn tất ngay                    |
| Ghi đóng góp người lớn     | Người lớn              | Người khởi tạo   | Tự duyệt mặc định MVP            |
| Ghi đóng góp trẻ em        | Người lớn/luồng trẻ em | Người lớn        | Luôn cần phê duyệt người lớn     |
| Tạo phần thưởng            | Người lớn              | Người tạo        | Phải có người quyết định         |
| Đề xuất phần thưởng trẻ em | Hồ sơ trẻ em           | Người lớn        | Người lớn tạo bản ghi chính thức |
| Gửi yêu cầu đổi thưởng     | Thành viên hợp lệ      | Người quyết định | Cần đủ điểm theo policy          |
| Chấp nhận/từ chối/trì hoãn | Người quyết định       | Người quyết định | Luôn giữ tính tự nguyện          |

## Ma trận hiển thị mặc định

| Thông tin               | Người lớn          | Hồ sơ trẻ em                     |
| ----------------------- | ------------------ | -------------------------------- |
| Đóng góp bản thân       | Đầy đủ             | Đầy đủ trong phạm vi của mình    |
| Đóng góp người lớn khác | Đầy đủ             | Không xem chi tiết               |
| Đóng góp trẻ em khác    | Đầy đủ             | Không xem chéo                   |
| Lý do từ chối           | Đầy đủ             | Bản giải thích đơn giản, an toàn |
| Số dư điểm người khác   | Theo rule gia đình | Không xem chi tiết               |

## Guardrails bắt buộc

- Không leaderboard cá nhân trong MVP.
- Không hiển thị thông điệp mang tính phán xét.
- Nội dung cho trẻ em phải phù hợp độ tuổi và tránh lộ xung đột người lớn.

## Tham chiếu

- [02 Business Rules and Policy](./02-business-rules-and-policy.md)
- [04 Lifecycle and Acceptance](./04-lifecycle-and-acceptance.md)

