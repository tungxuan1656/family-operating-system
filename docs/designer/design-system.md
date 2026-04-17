# Design System: Nova

## 1. Overview

Hệ thống thiết kế tập trung vào sự tối giản, mật độ thông tin cao và thẩm mỹ hiện đại dành cho các công cụ lập trình và quản lý tài chính.

- **Triết lý**: Ưu tiên không gian làm việc, giảm thiểu sự xao nhãng bằng cách sử dụng các bảng màu trầm và các thành phần UI thanh mảnh.

## 2. Colors

Hệ màu được trích xuất từ giao diện thực tế, lấy màu hồng đậm (Crimson) làm điểm nhấn trên nền tối sâu.

| Loại           | Tên        | Mã Hex    | Ứng dụng                                       |
| :------------- | :--------- | :-------- | :--------------------------------------------- |
| **Primary**    | Crimson    | `#BE185D` | CTA chính, trạng thái Active, Icon quan trọng. |
| **Background** | Deep Black | `#09090B` | Nền toàn trang.                                |
| **Surface**    | Dark Grey  | `#18181B` | Card, Sidebar, Modal.                          |
| **Border**     | Subtle     | `#27272A` | Đường kẻ phân tách, viền Input/Card.           |
| **Text**       | On-Surface | `#FAFAFA` | Văn bản chính, tiêu đề.                        |
| **Muted**      | Zinc       | `#A1A1AA` | Văn bản phụ, mô tả, Placeholder.               |

## 3. Typography

- **Font Family**: `Manrope`, Sans-serif.
- **Cấu trúc**:
  - **Headlines**: Semi-bold (600), Letter-spacing: -0.02em.
  - **Body**: Regular (400), Line-height: 1.6.
  - **Labels**: Medium (500), font-size: 12px, Uppercase cho section headers.

## 4. Components

Các thành phần được tinh chỉnh để tạo cảm giác nhẹ nhàng và chuyên nghiệp.

### Buttons (Nút bấm)

- **Kiểu dáng**: Thấp (Height: 32px - 36px) và Thon (Padding ngang rộng hơn).
- **Border**: 1px solid, bo góc (Radius) 6px.
- **Primary**: Nền `#BE185D`, chữ trắng.
- **Secondary**: Nền trong suốt, viền `#27272A`, chữ `#FAFAFA`.

### Inputs (Ô nhập liệu)

- **Độ dày viền**: 0.5px - 1px cực mảnh.
- **Màu nền**: `#09090B` (Darker than surface).
- **Trạng thái Focus**: Viền chuyển sang màu trắng mờ hoặc hồng nhạt.

### Cards (Thẻ)

- **Giao diện**: Phẳng hoàn toàn, không đổ bóng (No elevation).
- **Viền**: 1px solid `#27272A`.
- **Khoảng cách**: Padding tối thiểu 16px để đảm bảo thông tin không bị dày đặc quá mức.

## 5. Do's and Don'ts

### Do (Nên)

- [x] Sử dụng màu **Primary** duy nhất cho một hành động chính trên mỗi khung hình.
- [x] Đảm bảo khoảng cách (White space) đồng nhất theo hệ số 4 (4px, 8px, 12px...).
- [x] Sử dụng Icon mảnh (Stroke 1.5px) để hợp với phong cách "Thon & Nhỏ".

### Don't (Không nên)

- [ ] Không sử dụng Shadow (đổ bóng) lớn hoặc loang lổ.
- [ ] Không sử dụng các đường viền dày (> 1px) làm nặng giao diện.
- [ ] Không dùng màu Primary cho các thành phần điều hướng phụ hoặc văn bản không quan trọng.

