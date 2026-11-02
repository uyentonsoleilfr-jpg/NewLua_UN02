# Skill 13: Image Brief — Ảnh Đơn & Split-Screen Poster ZAKi (`13_image-brief`)
> **Vị trí:** Giai đoạn 4 — Brief Visual | **Trigger:** "brief thiết kế ảnh", "split-screen poster", "prompt ảnh"

## 1. Nguyên Tắc Thiết Kế Hình Ảnh Ngành Lúa ĐBSCL (ZAKi Visual Standard)
Nông dân miền Tây lướt Facebook ngoài trời nắng thường để độ sáng màn hình cao, mắt nhìn lướt rất nhanh. Vì vậy, ảnh quảng cáo và ảnh bài đăng ZAKi phải đạt **Độ tương phản thị giác cực đại (High-Contrast Agricultural Visual)** và **Tuyệt đối trung thực với bao bì lon thiếc thật**:

1. **Bắt buộc ghép ảnh chụp Lon Thiếc Thật 100% (`01-Assets/`):**
   - Tuyệt đối CẤM để AI tự vẽ hình chai/lon thuốc bị méo chữ tiếng Việt hoặc biến lon thiếc thành chai nhựa.
   - Quy trình bắt buộc: Dùng AI tạo phông nền đồng ruộng / so sánh rễ và bông lúa (chừa khoảng trống tiền cảnh), sau đó dùng Python (`Pillow`) hoặc Photoshop ghép đè file PNG tách nền chuẩn của **Chai/Lon pH 14 (500ml)**, **Lon thiếc 1L ZAKi Rước Đòng** và **Lon thiếc 1L ZAKi Vô Gạo**.
2. **Bảng màu nhận diện theo từng dòng sản phẩm:**
   - **ZAKi pH 14:** Xanh Cổ Vịt Đậm / Cyan Sinh Học (`#00695C`) + Vàng Kim (`#FFD700`).
   - **ZAKi Rước Đòng Organic:** Cam Đỏ Năng Lượng (`#E65100`) + Xanh Lá Đòng (`#2E7D32`).
   - **ZAKi Vô Gạo Organic:** Vàng Hổ Phách Lúa Chín (`#F57F17`) + Đỏ Đô Uy Tín (`#B71C1C`).
   - **Combo Toàn Vụ:** Xanh Dương Đậm Quốc Tế (`#0D47A1`) + Vàng Lúa Chín (`#FBC02D`).

---

## 2. Cấu Trúc "Split-Screen Poster 50/50" Bất Bại Của ZAKi

Bố cục chuyển đổi cao nhất cho bài đăng Fanpage chính, 19 Fanpage vệ tinh và bài chạy Ads là **Bố cục Chia Đôi 50/50 kết hợp Vòm Lá Lúa & 5 Icon Lợi Ích** (tỷ lệ 1:1 `1080x1080px` hoặc 4:5 `1080x1350px`):

- **Phần Đỉnh (Top Header — 15% diện tích):**
  - Khung vòm lá lúa xanh mướt uốn cong hai bên hoặc thanh Banner trên cùng mang logo **Công ty Cổ phần Phân Bón Miền Nam** + Huy hiệu **"Hàng Nhập Khẩu California - USA"**.
  - Tiêu đề chính (Headline) chữ in hoa dày (Font Montserrat Black / SVN-Gotham Ultra), có viền nổi 3D dễ đọc trong 1 giây.
- **Phần Trung Tâm Chia Đôi 50/50 (Middle Split-Screen — 55% diện tích):**
  - **Nửa Trái (50% — Nỗi Đau / Đối Chứng Trước Khi Xài):** Tông màu hơi tối/xám vàng. Hình ảnh cận cảnh rễ lúa đen thui bết phèn, đất đóng váng vôi bột, đòng ốm que tăm, lá cháy chóp hoặc hạt cậy lép xẹp. Gắn nhãn đỏ: `❌ ĐẤT PHÈN KHÓA PHÂN / RỄ ĐEN` hoặc `❌ KALI MUỐI GÂY CHÁY LÁ / LÉP CẬY`.
  - **Nửa Phải (50% — Giải Pháp ZAKi / Sau 3–5 Ngày):** Tông màu rực rỡ nắng sớm. Hình ảnh chùm rễ tơ trắng phau dài cả tấc, đòng cổ ngỗng 16 gié phụ, lá đòng đứng thẳng hình chữ V, hoặc bông lúa vàng óng chắc tới cậy. Gắn nhãn xanh lá: `✅ XỊT ZAKi: RỄ TRẮNG PHAU / CHẮC CẬY 100%`.
- **Phần Tiền Cảnh Giữa Dưới (Center-Bottom Hero Product & 5 Icons — 30% diện tích):**
  - Chính giữa: Đặt **Lon thiếc thật ZAKi** kích thước lớn, sắc nét, có hiệu ứng giọt sương mát lạnh hoặc tia sáng sinh học quanh đáy lon.
  - Xung quanh hoặc xếp hàng ngang bên dưới là **5 Icon Lợi Ích Tròn (5 Benefit Badges)**:
    1. 🎯 **Độ phủ siêu hời:** `1 Lon Xịt 2 - 3 Hecta (20 - 30 Công)`
    2. 💰 **Tiết kiệm chi phí:** `Giảm 30% - 50% Phân NPK Gốc`
    3. 🛡️ **Kháng bệnh tự nhiên:** `Lá Đứng Chữ V - Giảm 50% Nấm Khuẩn`
    4. 🚁 **Tối ưu công nghệ:** `Tan 100% - Không Nghẹt Béc Drone`
    5. 🎁 **Trợ giá Nhà máy:** `Mua 3 Tặng 1 - Kiểm Hàng Mới Trả Tiền`

---

## 3. Công Thức Prompt AI 5 Lớp Tiếng Anh (Dành Cho Nền Đồng Ruộng Thực Địa)

Khi tạo phông nền bằng Midjourney / Flux / Imagen 3 (trước khi ghép lon thiếc thật), bắt buộc dùng cấu trúc **Prompt 5 Lớp**:
1. **[Layer 1 - Shot Type & Composition]:** Split-screen comparison photography or macro agricultural close-up, leaving clean space in lower center foreground for product placement.
2. **[Layer 2 - Subject Details]:** Realistic Mekong Delta Vietnam paddy field; left side showing stunted yellow rice plant with black rotten roots in rusty acidic water; right side showing vigorous green rice plant held by a tanned Vietnamese farmer's hand revealing a massive bundle of bright white fibrous roots (`rễ tơ trắng phau`), erect V-shaped flag leaves.
3. **[Layer 3 - Environment & Lighting]:** Golden morning sunlight over lush Vietnamese rice fields, natural water droplets on rice blades, authentic muddy field texture.
4. **[Layer 4 - Camera & Lens]:** Shot on Canon EOS R5, 50mm f/2.8 macro lens, crisp focus on rice roots and panicles, hyper-realistic documentary photography.
5. **[Layer 5 - Negative Constraints]:** `--no fake plastic bottles, no gibberish text, no cartoon illustration, no western farmer, no wheat (must be Asian Oryza sativa paddy rice)`.
