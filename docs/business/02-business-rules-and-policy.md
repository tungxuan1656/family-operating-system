# 02 Business Rules and Policy

## Đối tượng nghiệp vụ chính

- Family: không gian dùng chung của thành viên.
- Member: thành viên người lớn và hồ sơ trẻ em được quản lý.
- Contribution: hành động đóng góp cho gia đình.
- Points: Task Points và Love Points.
- Reward: phần thưởng có người quyết định.
- Reward Request: yêu cầu đổi thưởng.

## Quy tắc đóng góp

- Mỗi đóng góp phải có actor, nội dung, loại điểm, điểm số, thời điểm.
- Đóng góp chỉ cộng điểm khi đã phê duyệt.
- Người lớn mặc định tự duyệt đóng góp của mình trong MVP.
- Hồ sơ trẻ em được quản lý luôn cần người lớn chốt cuối.

## Quy tắc điểm

- MVP chỉ dùng 2 loại điểm: Task Points và Love Points.
- Task Points ưu tiên cho đóng góp trách nhiệm thực tế.
- Love Points ưu tiên cho hành động quan tâm và ghi nhận.
- Love Points có giá trị sử dụng, nhưng không biến thành giao dịch vật chất mặc định.

## Quy tắc phần thưởng và yêu cầu đổi thưởng

- Mỗi phần thưởng phải có tên, giá điểm, loại điểm, người quyết định.
- Yêu cầu hợp lệ có 3 kết quả: chấp nhận, từ chối, trì hoãn.
- Điểm bị trừ tại thời điểm yêu cầu được chấp nhận.
- Trì hoãn hoặc từ chối không trừ điểm trong MVP.

## Quy tắc an toàn và ranh giới

- Không cho phép phần thưởng mang tính ép buộc, tổn thương, vi phạm ranh giới cá nhân.
- Không sử dụng dữ liệu để xếp hạng thắng thua giữa thành viên.
- Mọi điều chỉnh điểm ngoại lệ phải có lý do và dấu vết truy vết.

## Tham chiếu

- [03 Roles Permissions Visibility](./03-roles-permissions-visibility.md)
- [04 Lifecycle and Acceptance](./04-lifecycle-and-acceptance.md)
- [06 Glossary and Seeds](./06-glossary-and-seeds.md)
