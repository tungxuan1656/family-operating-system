# 📱 Family Operating System (FOS)

## Tài liệu ý tưởng sản phẩm

---

# 1. 🎯 Tổng quan

## 1.1 Mục tiêu

Xây dựng một ứng dụng giúp:

* Ghi nhận sự đóng góp của các thành viên trong gia đình
* Tạo sự công bằng trong việc chia sẻ trách nhiệm
* Tăng cường sự ghi nhận và kết nối cảm xúc
* Game hóa các hoạt động gia đình để tạo động lực

---

## 1.2 Vấn đề cần giải quyết

Trong hầu hết các gia đình:

* Công việc nhà thường không được ghi nhận rõ ràng
* Một người có thể cảm thấy "mình làm nhiều hơn"
* Việc yêu cầu nhau làm điều gì đó đôi khi khó nói trực tiếp
* Trẻ em thiếu động lực làm việc nhà

👉 Ứng dụng giải quyết bằng cách:

* Minh bạch hóa đóng góp
* Quy đổi đóng góp thành điểm
* Cho phép sử dụng điểm để yêu cầu hoặc nhận phần thưởng

---

# 2. 👥 Đối tượng người dùng

## 2.1 Người lớn (vợ/chồng)

Nhu cầu:

* Công bằng trong gia đình
* Được ghi nhận
* Có quyền yêu cầu hợp lý

Pain points:

* Cảm giác không được trân trọng
* Ngại yêu cầu đối phương

---

## 2.2 Trẻ em

Nhu cầu:

* Được thưởng
* Có động lực làm việc

Pain points:

* Không thấy giá trị của việc giúp đỡ
* Thiếu sự ghi nhận rõ ràng

---

# 3. 🧠 Triết lý sản phẩm

Ứng dụng được xây dựng dựa trên 4 nguyên tắc:

### 3.1 Công bằng (Fairness)

* Mọi đóng góp đều được ghi nhận

### 3.2 Ghi nhận (Recognition)

* Không coi việc tốt là "đương nhiên"

### 3.3 Tự nguyện (Voluntary)

* Không ép buộc người dùng thực hiện yêu cầu

### 3.4 Vui vẻ (Fun)

* Trải nghiệm giống game hơn là quản lý

---

# 4. ⚙️ Khái niệm cốt lõi

## 4.1 Điểm (Points)

### Task Points (Điểm trách nhiệm)

* Nhận từ việc nhà hoặc nghĩa vụ
* Có thể dùng để đổi reward

### Love Points (Điểm cảm xúc)

* Nhận từ hành động quan tâm, bất ngờ
* Không dùng để đổi vật chất (hoặc hạn chế)

---

## 4.2 Đóng góp (Contribution)

Các loại đóng góp:

* Việc nhà: rửa bát, lau nhà
* Hỗ trợ gia đình
* Hành động tình cảm
* Hành vi tiêu cực (trừ điểm)

---

## 4.3 Phần thưởng / Yêu cầu (Reward)

* Là những thứ người dùng có thể "mua" bằng điểm
* Có thể do người dùng tự tạo

Ví dụ:

* Massage
* Đi chơi
* Mua đồ
* Thời gian chơi game

---

## 4.4 Yêu cầu (Request)

* Khi người dùng muốn đổi reward
* Người nhận có quyền:

  * Chấp nhận
  * Từ chối
  * Trì hoãn

---

# 5. 🔄 Use Cases chi tiết

## 5.1 Use Case: Ghi nhận việc nhà

**Actor:** Vợ/Chồng

**Flow:**

1. Người dùng tạo hành động (ví dụ: rửa bát)
2. Nhập số điểm
3. Gửi xác nhận cho người còn lại
4. Người còn lại approve
5. Điểm được cộng

---

## 5.2 Use Case: Ghi nhận hành động tình cảm

**Actor:** Vợ/Chồng

**Flow:**

1. Người dùng ghi nhận hành động (ví dụ: tặng quà)
2. Cộng Love Points
3. Hiển thị trên timeline

---

## 5.3 Use Case: Tạo reward

**Actor:** Tất cả

**Flow:**

1. Người dùng tạo reward
2. Đặt giá điểm
3. Chọn loại điểm
4. Lưu vào hệ thống

---

## 5.4 Use Case: Đổi reward

**Actor:** Người dùng

**Flow:**

1. Chọn reward
2. Gửi request
3. Người nhận:

   * Accept → thực hiện
   * Reject → từ chối
   * Delay → thực hiện sau

---

## 5.5 Use Case: Con cái nhận thưởng

**Actor:** Con

**Flow:**

1. Con hoàn thành nhiệm vụ
2. Bố mẹ ghi nhận
3. Cộng điểm cho con
4. Con dùng điểm để đổi reward

---

## 5.6 Use Case: Theo dõi hoạt động

**Actor:** Tất cả

**Flow:**

1. Mở timeline
2. Xem lịch sử đóng góp
3. Xem ai đang làm nhiều hơn

---

# 6. 📋 Danh sách tính năng

## 6.1 Core Features (MVP)

* Tạo gia đình
* Thêm thành viên
* Ghi nhận đóng góp
* Cộng/trừ điểm
* Tạo reward
* Đổi reward
* Lịch sử hoạt động

---

## 6.2 Gamification Features

* Level hệ thống
* Achievement (thành tựu)
* Streak (chuỗi ngày)
* Avatar người dùng

---

## 6.3 Social Features

* Reaction (like, tim, cười)
* Comment
* Timeline gia đình

---

## 6.4 Fairness Features

* Thống kê đóng góp
* So sánh giữa các thành viên
* Gợi ý cân bằng

---

## 6.5 Control & Safety

* Giới hạn điểm mỗi ngày
* Quyền approve
* Quyền từ chối request

---

# 7. 🧱 Quy tắc hệ thống

## 7.1 Quy tắc điểm

* Không tự cộng điểm cho bản thân (trừ trường hợp đặc biệt)
* Điểm phải được xác nhận (đối với người lớn)

---

## 7.2 Quy tắc reward

* Không bắt buộc thực hiện
* Có thể từ chối

---

## 7.3 Quy tắc với trẻ em

* Không được tự tạo điểm
* Phải có bố mẹ xác nhận

---

# 8. ⚠️ Rủi ro & giải pháp

## Rủi ro 1: Tính toán quá mức

Giải pháp:

* Giữ một số hành động không cần điểm

---

## Rủi ro 2: Mất cảm xúc

Giải pháp:

* Phân biệt Love Points và Task Points

---

## Rủi ro 3: Tranh cãi

Giải pháp:

* Có quyền admin

---

# 9. 🚀 Tầm nhìn dài hạn

Ứng dụng có thể phát triển thành:

* Nền tảng quản lý gia đình
* Công cụ giáo dục trẻ em
* Mạng xã hội gia đình

---

# 10. ✅ Kết luận

Đây không chỉ là ứng dụng quản lý việc nhà.

👉 Đây là một hệ thống giúp:

* Cân bằng trách nhiệm
* Tăng ghi nhận
* Tạo niềm vui trong gia đình

Nếu được thiết kế đúng, sản phẩm có thể tạo ra thay đổi tích cực trong cách các gia đình tương tác với nhau.
