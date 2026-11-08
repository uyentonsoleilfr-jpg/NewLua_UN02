---
name: zaki-daily-report
description: Tự động trích xuất và nhập dữ liệu báo cáo hàng ngày (Doanh số CRM, Tác nghiệp/Tin nhắn Pancake, Cuộc gọi VBot) vào 3 file quản lý tập trung của Leader (Báo cáo ngày Leader, Bảng thống kê chi tiết ngày, Hiệu suất ngày) cho dự án ZAKi (Agrizen Lúa).
---

# Kỹ Năng Nhập Báo Cáo Hàng Ngày — Dự Án ZAKi (Agrizen Lúa)

Kỹ năng này tự động kích hoạt khi người dùng yêu cầu: `"nhập báo cáo ngày"`, `"báo cáo doanh số"`, `"báo cáo tác nghiệp"`, `"báo cáo cuộc gọi"` kèm ảnh chụp màn hình CRM/VBot.

---

## 1. NGUYÊN TẮC BẤT DI BẤT DỊCH
1. **Tuyệt đối không can thiệp vào 10 file BCDT cá nhân:** Nhân sự tự chịu trách nhiệm nhập số liệu chi tiết đơn hàng của mình.
2. **Chỉ nhập vào 3 file quản lý tập trung:**
   * **File 1 — Báo Cáo Tổng Hợp:** `BÁO CÁO NGÀY Leader` (`1-ogqHY8b1XZiOrphS9X9U9rZXnSobX_uqHxIag9sYao`) -> Tab `Tháng [MM]` (Điền dòng ngày: Cột D: Contact, Cột E: Đơn chốt, Cột F: Doanh thu).
   * **File 2 — Bảng Thống Kê Chi Tiết:** `LÚA - Bảng Thống Kê Chi Tiết Ngày` (`1Y2um2R0Iu2T6vOK0sV06XNZ3WHLSoNpO4jym2YS0m70`) -> Tab `T[MM]_New_Day` (Điền khối ngày: Cột D: Data/Mess, Cột E: Đơn chốt, Cột F: Doanh thu của 10 nhân sự).
   * **File 3 — Hiệu Suất Cuộc Gọi/Chat:** `HIỆU SUẤT NGÀY` (`1It5ldQsvgBf0loQfvuMVwTLLdHl1UWSeTKsyrl_kxDY`) -> Tab `Tháng [MM]/[YYYY]` (Điền cụm ngày: `TL gọi` phút, `Bắt máy` cuộc, `TN` tác nghiệp, `CHAT` %).

---

## 2. THỨ TỰ 10 NHÂN SỰ CHUẨN
Trong file `LÚA - Bảng Thống Kê Chi Tiết Ngày` (Tab `T[MM]_New_Day`) và `HIỆU SUẤT NGÀY`, 10 nhân sự luôn theo thứ tự:
1. Phạm Minh Nhiều
2. Nguyễn Huỳnh Đoan Trinh
3. Nguyễn Minh Hải
4. Đỗ Thị Kim Ngọc
5. Trần Xuân Quí
6. Võ Thị Tuyết Mai (trên Hiệu Suất Ngày xếp dòng 12, trên Bảng Thống Kê Chi Tiết Ngày xếp dòng 6)
7. Ngô Lê Tân (trên Hiệu Suất Ngày xếp dòng 10, trên Bảng Thống Kê Chi Tiết Ngày xếp dòng 7)
8. Nguyễn Văn Hoàng (trên Hiệu Suất Ngày xếp dòng 11, trên Bảng Thống Kê Chi Tiết Ngày xếp dòng 8)
9. Trần Đinh Khánh Huyền (trên Hiệu Suất Ngày xếp dòng 13, trên Bảng Thống Kê Chi Tiết Ngày xếp dòng 9)
10. Trần Thị Hạ Quyên (trên Hiệu Suất Ngày xếp dòng 14, trên Bảng Thống Kê Chi Tiết Ngày xếp dòng 10)

*(Lưu ý: Tách riêng Lead Nguyễn Nữ Uyên Nhi vì không nằm trong danh sách 10 Telesales).*

---

## 3. PHÂN LOẠI 3 LOẠI ẢNH BÁO CÁO TỪ CRM / VBOT

### Loại 1: Ảnh Báo Cáo Doanh Số Sale (CRM)
* **Dấu hiệu:** Tiêu đề "Báo cáo doanh số Sale", có các cột `Contact`, `Đơn chốt`, `Tỉ lệ chốt`, `Doanh thu`.
* **Thực thi:**
  * Nhập vào **File 1** (Dòng ngày tương ứng: Cột D, E, F theo tổng header CRM).
  * Nhập vào **File 2** (Khối ngày tương ứng: Cột D, E, F cho từng nhân sự).

### Loại 2: Ảnh Báo Cáo Tác Nghiệp (CRM)
* **Dấu hiệu:** Tiêu đề "TỔNG SỐ TÁC NGHIỆP", có cột `Số tác nghiệp`, `Hiệu suất`, `Tỷ lệ đóng góp`.
* **Thực thi:**
  * Nhập vào **File 3** (Cột `TN` của ngày tương ứng).

### Loại 3: Ảnh Báo Cáo Tin Nhắn / Tương Tác (CRM Pancake)
* **Dấu hiệu:** Biểu đồ donut "Tỉ lệ tương tác", có % từng nhân viên.
* **Thực thi:**
  * Nhập vào **File 3** (Cột `CHAT` % của ngày tương ứng).

### Loại 4: Ảnh Báo Cáo Cuộc Gọi (VBot)
* **Dấu hiệu:** Giao diện VBot/Tổng đài, có `Kết nối thành công` và `Thời lượng` (`HH:MM:SS`).
* **Thực thi:**
  * Nhớ cộng gộp các máy nhánh (extension) phụ (VD: Hạ Quyên `869115277`, Khánh Huyền `572393868`).
  * Quy đổi thời lượng sang phút (`TL gọi`), lấy số cuộc kết nối thành công làm `Bắt máy`.
  * Nhập vào **File 3** (Cột `TL gọi` và `Bắt máy` của ngày tương ứng).

---

## 4. TỰ ĐỘNG ĐỐI SOÁT ĐƠN & DOANH THU (CRM VS BÁO CÁO CÁ NHÂN)
* **Nguyên tắc kích hoạt:** Ngay sau khi nhập xong dữ liệu CRM vào 3 file quản lý, AI **bắt buộc tự động chạy script đối soát**:
  ```powershell
  python "G:\My Drive\Soleil&co By UyenNhi\10-19 Dự Án Đang Chạy\17. AgrizenLua\03-Code\check_daily_submission.py" --day [NGÀY]
  ```
* **Mục đích:** Tự động so sánh số liệu giữa CRM thực tế và số liệu 10 bạn Telesales tự điền:
  * 🎯 **Khớp 100%:** Đơn và Doanh thu trùng khớp hoàn toàn.
  * ⚠️ **Lệch số liệu (Cần care đơn):** Phát hiện chênh lệch Đơn chốt hoặc Doanh thu (chỉ rõ tự nhập bao nhiêu, CRM bao nhiêu, lệch bao nhiêu đơn/tiền).
  * ❌ **Chưa nhập:** Báo cáo bạn nào chưa nhập file cá nhân kèm số liệu CRM đang ghi nhận.
* **Đầu ra:** Xuất bảng đối soát trực tiếp trong khung chat và tự động bắn thông báo qua Telegram cho Uyên Nhi để kịp thời care đơn!

---

## 5. TỰ ĐỘNG BÁO CÁO TÌNH HÌNH GIAO HÀNG LÚC 13:00 HÀNG NGÀY
* **Lịch tự động:** 13:00 PM mỗi ngày (Sidecar `ZAKi Delivery & Order Checker (1:00 PM)`).
* **Script thực thi:** `check_delivery_status.py`
* **Mục đích:** Quét sheet `Báo cáo doanh thu T[MM]/[YYYY]` của 10 nhân sự:
  * Tổng đơn & Doanh số lên trong tháng.
  * Đơn & Doanh số giao thành công (`Thành công`).
  * Đơn & Doanh số chưa thành công (`Đang giao` / `Chờ xử lý`).
  * Đơn & Doanh số hủy / hoàn (`Bom/Hoàn` / `Hủy`).
  * Tỷ lệ Thực thu / Lên đơn (%).
  * ⚠️ Cảnh báo nhân sự chưa cập nhật đơn hoặc chưa điền trạng thái để Uyên Nhi đôn đốc.
* **Kênh gửi:** Bắn trực tiếp về Telegram cá nhân của Uyên Nhi.


