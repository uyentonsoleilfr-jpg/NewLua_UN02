---
name: zaki-fanpage-autopost
description: Kỹ năng sáng tạo nội dung hàng loạt, tối ưu SEO Local cụm tỉnh miền Tây (ĐBSCL) và vận hành hệ thống Autopost 19+ Fanpage Vệ Tinh ZAKi từ Google Sheets & Google Drive (03-Code/zaki_fb_autopost/auto_post_fb.py). Bao gồm danh mục Fanpage thực tế, cấu trúc bài đăng chuyển đổi cao không báo giá lẻ, quy chuẩn 6 cột Google Sheet và lệnh thực thi tự động.
---

# KỸ NĂNG SÁNG TẠO NỘI DUNG & VẬN HÀNH HỆ THỐNG AUTOPOST FANPAGE VỆ TINH ZAKi (`zaki-fanpage-autopost`)

## 1. Chiến Lược SEO Local Cụm Fanpage Vệ Tinh ZAKi (Thu Lead Organic 0 Đồng)

Trong bối cảnh chi phí quảng cáo (CPL) ngành phân bón lúa có thể lên tới 400.000đ - 500.000đ/Lead, hệ thống **Fanpage Vệ Tinh ZAKi** đóng vai trò là cỗ máy thu **Organic Lead 0 đồng** thông qua tìm kiếm tự nhiên trên Facebook và đề xuất (Facebook Suggested Feed) tại khu vực Đồng Bằng Sông Cửu Long.

### 1.1. Nguyên Tắc Phủ Từ Khóa Tỉnh Miền Tây (13 Tỉnh ĐBSCL)
Nông dân miền Tây có thói quen tìm kiếm hoặc dừng lại đọc những bài viết gắn liền với **tên tỉnh/huyện, tên vùng đất phèn và giống lúa đặc trưng tại địa phương**. Mỗi bài đăng trên hệ thống Fanpage Vệ Tinh cần lồng ghép tự nhiên bộ từ khóa địa phương sau:

| Cụm Vùng Sinh Thái | Tỉnh Trọng Điểm | Đặc Điểm Thổ Nhưỡng / Nỗi Đau Chính | Từ Khóa SEO Local & Giống Lúa Chủ Lực Cần Cài Vào Bài |
| :--- | :--- | :--- | :--- |
| **Tứ Giác Long Xuyên** | **An Giang, Kiên Giang, Cần Thơ** | Phèn tiềm tàng, phèn sắt/nhôm đầu vụ, đất canh tác 3 vụ liên tục dễ ngộ độc rơm rạ. | *Lúa Đông Xuân / Hè Thu An Giang, Kiên Giang (Tân Hiệp, Hòn Đất, Giồng Riềng, Châu Phú, Thoại Sơn), hạ phèn lúa, Đài Thơm 8, OM18, OM5451, DS1.* |
| **Đồng Tháp Mười** | **Đồng Tháp, Long An, Tiền Giang** | Rốn phèn chua nặng (Tân Hưng, Vĩnh Hưng, Tháp Mười, Tam Nông, Tân Phước), lúa dễ nghẹt rễ đỏ đọt, đạo ôn lá đòng. | *Xử lý phèn đất lúa Đồng Tháp, Long An, Tiền Giang, bung rễ trắng phau, rước đòng mập bắp, vô gạo chắc tới cậy, giống lúa OM18, Đài Thơm 8, Nàng Hoa 9.* |
| **Trung Tâm Phù Sa & Bán Đảo Cà Mau** | **Sóc Trăng, Bạc Liêu, Hậu Giang, Vĩnh Long, Trà Vinh, Cà Mau, Bến Tre** | Đất nhiễm mặn - phèn đan xen, sương muối cuối vụ, mưa dông gây đổ ngã, lúa chất lượng cao ST24, ST25. | *Dưỡng đòng vô gạo Sóc Trăng, Bạc Liêu, Hậu Giang (Vị Thanh, Long Mỹ, Ngã Năm, Kế Sách, Cầu Kè), lúa ST24, ST25, RVT, Đài Thơm 8, chống lép cậy, nặng ký sáng vỏ.* |

### 1.2. Danh Sách Hệ Thống Fanpage ZAKi Trong Cấu Hình Thực Tế (`pages_config.json`)
Hệ thống `03-Code/zaki_fb_autopost/pages_config.json` hiện đang quản lý tập trung mạng lưới Fanpage vệ tinh (từ `PAGE_1` đến `PAGE_24`, bao gồm cụm 19+ trang chủ lực hoạt động liên tục):

| Mã Page (`Key`) | Tên Fanpage Thực Tế Trên Facebook | Page ID | Nhóm Định Vị Nội Dung |
| :--- | :--- | :--- | :--- |
| `PAGE_1` | ZAKI - Phân Bón Organic - Tinh Hoa Dinh Dưỡng Từ HOA KỲ | `1385902531254527` | Thương hiệu Master USA |
| `PAGE_2` | Zaki Công Nghệ Mỹ - Lúa Chắc Nặng Ký, Xanh Lá Đòng | `1349274018260279` | Chuyên đề Vô Gạo & Lá Đòng |
| `PAGE_3` | Lúa Vàng Nặng Ký - Giải Pháp Zaki Tiêu Chuẩn Mỹ - Gọi 0968.853.415 | `1257294537472345` | Chuyển đổi Hotline trực tiếp |
| `PAGE_4` | Zaki Chính Hãng - Giải Pháp Rước Đòng & Vô Gạo - Mập Búp, Chắc Hạt | `1323544190840499` | Combo Rước Đòng + Vô Gạo |
| `PAGE_5` | ZAKI Vô Gạo Mẩy Hạt Nặng Ký - Hàng Nhập Khẩu USA SĐT 0388664401 | `1340680559121147` | Chuyển đổi Vô Gạo & SĐT |
| `PAGE_6` | Zaki Vô Gạo Rước Đòng - Phân Bón BVTV Chính Hãng | `1272061802663544` | Uy tín Cục BVTV & Chính hãng |
| `PAGE_7` | Zaki Siêu Vô Gạo - Phân Bón Lúa 100% Organic | `1212674955270673` | Tuyến Siêu Vô Gạo Organic |
| `PAGE_8` | Phân Bón Hữu Cơ Nhập Khẩu Mỹ - Zaki | `1219562991247762` | Hữu cơ California USA |
| `PAGE_9` | Phân Bón Hữu Cơ Nhập Khẩu Mỹ - 0938276635 | `1303593452833553` | Hữu cơ Mỹ & Hotline |
| `PAGE_10` | ZAKi Organic Rice - Từ Rễ Đến Hạt | `1227532687117742` | Quy trình toàn vụ 4 cữ |
| `PAGE_11` | ZAKI - Phân Thuốc Nhập MỸ - Organic 100% | `1275711645624086` | Hàng nhập khẩu lon thiếc |
| `PAGE_12` | ZAKi Vô Gạo - Chắc Hạt - Bền Đòng | `1266629959867801` | Giữ xanh 3 lá đòng tới gặt |
| `PAGE_13` | Zaki Vô Gạo - Phân Bón Nhập Khẩu Chính Hãng | `1240009679197670` | Chống lép cậy cổ bông |
| `PAGE_14` | Zaki Vô Gạo Tới Cậy 0393987641 | `1244861452044584` | Từ khóa "Vô gạo tới cậy" |
| `PAGE_15` | Nhà máy ZAKI Vô Gạo Cấp Tốc -Hàng nhập khẩu USA | `1284626804729834` | Trợ giá trực tiếp từ Nhà máy |
| `PAGE_16` | Combo Lúa Mỹ - Organic Rice Zaki | `1301601206364921` | Chuyên gói Combo 3 Tặng 1 |
| `PAGE_17` | Organic Rice Nhập Khẩu Mỹ - Rước Đòng & Vô Gạo | `1238945519303962` | Bộ đôi Rước Đòng - Vô Gạo |
| `PAGE_18` | Organic Rice USA - Giải Pháp Rước Đòng & Vô Gạo | `1229368303600257` | Giải pháp kỹ thuật lúa Mỹ |
| `PAGE_19` | Organic Rice Vô Gạo & Rước Đòng Nhập Khẩu Mỹ | `1225970217264692` | Phủ sóng ĐBSCL toàn diện |
| `PAGE_20` - `PAGE_24` | *ZAKI RƯỚC ĐÒNG / ZAKI VÔ GẠO / ZAKI chính hãng / ZAKI USA / Nông Dân Lúa ZAKI* | *(Đã đồng bộ trong JSON)* | Nhóm mở rộng đa góc tiếp cận |

---

## 2. Cấu Trúc Bài Đăng Fanpage Chuyển Đổi Cao Cho Nông Dân (5 Nguyên Tắc Vàng)

Khi viết nội dung nạp vào cột `Nội dung` trên Google Sheet để đăng lên Fanpage, bắt buộc tuân thủ 5 nguyên tắc sau:

1. **TUYỆT ĐỐI KHÔNG BÁO GIÁ LẺ (469k / 525k / 994k) TRÊN BÀI ĐĂNG CÔNG KHAI:**
   - Nông dân chưa hiểu độ đậm đặc mà thấy giá mấy trăm ngàn 1 lon sẽ bị dội ngay lập tức.
   - Thay vì báo giá tiền tổng, hãy nhấn mạnh **ĐỘ BAO PHỦ SIÊU HỜI**: *"Đúng 1 lon thiếc 1 Lít đậm đặc xịt xả giàn cho tới 2 - 3 hecta (20 - 30 công lúa), tính ra chi phí mỗi công chỉ mười mấy ngàn đồng!"*
2. **ĐÁNH TRÚNG BÀI TOÁN TIẾT KIỆM PHÂN GỐC:**
   - Nhấn mạnh khả năng mở màng tế bào rễ, mở khóa Lân/Kali tồn dư dưới đất giúp bà con **cắt giảm 30% - 40% lượng phân NPK rải gốc** và **giảm 50% chi phí thuốc nấm bệnh**.
3. **NÊU RÕ CHƯƠNG TRÌNH TRỢ GIÁ TỪ NHÀ MÁY PHÂN BÓN MIỀN NAM:**
   - Luôn liệt kê đầy đủ các nấc ưu đãi để thu hút cả nông hộ nhỏ lẫn đại điền:
     - **Mua 3 Tặng 1** (Nhận 4 lon/bộ)
     - **Mua 6 Tặng 2** (Nhận 8 lon/bộ + Tặng gói vi lượng Combi Ba Lan + Loang trải Luke)
     - **Mua 9 Tặng 3** (Nhận 12 lon/bộ)
     - **Lấy theo Thùng Nhỏ:** Hỗ trợ tính thẳng về **Giá Đại Lý sỉ tận xưởng** + Miễn phí giao hàng tận nhà.
4. **SẠCH KÝ TỰ MARKDOWN THÔ (`**`, `###`, `---`):**
   - Facebook không hiển thị in đậm bằng dấu sao `**`. Nếu để nguyên `**ZAKi Rước Đòng**` lên bài viết Facebook, nông dân nhìn thấy ký tự rác sẽ mất thiện cảm ngay.
   - Chỉ dùng **CHỮ IN HOA** cho tiêu đề/ý chính, xuống dòng thoáng mắt, và dùng đầu dòng gọn gàng (`•`, `👉`, `✅`, `🌾`).
5. **KÊU GỌI HÀNH ĐỘNG (CTA) ĐƠN GIẢN, TRỰC DIỆN:**
   - Nông dân lớn tuổi ngại thao tác phức tạp. Cuối bài luôn chốt: *"Bà con chỉ cần để lại SỐ ĐIỆN THOẠI bên dưới bình luận hoặc bấm nút GỬI TIN NHẮN, Kỹ sư Nhà máy Phân Bón Miền Nam sẽ gọi lại tư vấn đúng liều theo tuổi lúa và giữ suất ưu đãi Mua 3 Tặng 1 cho mình nghen!"*

---

## 3. Ba Mẫu Bài Đăng Fanpage Thực Chiến (Copy-Paste Sạch Markdown)

### Mẫu 1: Bài Đăng Tuyến ZAKi Rước Đòng Organic 1L (Giai Đoạn Đẻ Nhánh & Tim Đèn 40 Ngày)
```text
🌾 XÉ BẸ LÚA COI TIM ĐÈN MÀ THẤY ĐÒNG NHỎ XÍU ỐM NHÁCH HẢ BÀ CON? XỊT NGAY LON THIẾC ZAKI RƯỚC ĐÒNG HỮU CƠ MỸ NÀY LIỀN CHO EM!

Tới cữ 40 - 45 ngày đón đòng tại An Giang, Đồng Tháp, Kiên Giang, Sóc Trăng mà rễ lúa bị nghẹt phèn đen thui, tim đèn ốm yếu thì bông lúa sau này ngắn ngủn, mất đứt 30% năng suất lúc gặt!

👉 Đưa ngay ZAKi Rước Đòng (Lon thiếc 1 Lít nhập khẩu từ California - Mỹ) vào cứu rễ và nuôi đòng cấp tốc:

✅ CHứa 40% Hữu cơ tự nhiên & 18% Axit Fulvic đậm đặc gấp 3 lần phân thường: Mở toang màng tế bào lá và rễ chỉ sau 4 giờ phun, xịt buổi sáng trưa gặp mưa giông không lo rửa trôi.
✅ Cắt đứt ngộ độc rơm rạ mục & phèn sắt phèn nhôm: Chỉ sau 3 - 5 ngày nhổ bụi lúa lên là rễ tơ bung trắng phau như rễ bắp, bám sâu hút trọn dinh dưỡng, giúp bà con cắt giảm ngay 30% - 40% tiền phân NPK rải gốc!
✅ Thúc phân hóa mầm hoa cực mạnh: Nuôi tim đèn mập ú no sữa, đòng to cổ ngỗng, tăng từ 8 gié lên 14 - 16 gié phụ trên mỗi bông, lúa trổ thoát rộ đồng loạt không sợ nghẹn đòng.
✅ Mát cây 100%, không nóng lá, không cháy chóp lá đòng. Nước phân siêu mịn tan 100%, bay máy bay Drone hay xịt bình điện đều êm ru không nghẹt béc!
✅ SIÊU TIẾT KIỆM: Đúng 1 lon thiếc 1 Lít pha phun xả giàn cho tới 2 - 3 hecta (20 - 30 công lúa), tính ra mỗi công ruộng chỉ tốn mười mấy ngàn đồng!

🎁 CHƯƠNG TRÌNH TRỢ GIÁ MÙA VỤ TỪ NHÀ MÁY PHÂN BÓN MIỀN NAM:
• Mua 3 lon TẶNG 1 lon (Nhận 4 lon)
• Mua 6 lon TẶNG 2 lon (Nhận 8 lon + Quà tặng vi lượng Combi Ba Lan)
• Mua 9 lon TẶNG 3 lon (Nhận 12 lon)
• Đặc biệt: Bà con lấy theo THÙNG NHỎ được hỗ trợ tính thẳng về GIÁ ĐẠI LÝ sỉ tận gốc nhà máy + Miễn phí giao hàng tận nhà!
• Nhận hàng bà con mở thùng kiểm tra đúng lon thiếc Mỹ, quét mã QR Code chính hãng rồi mới thanh toán.

👇 Bà con để lại SỐ ĐIỆN THOẠI ngay bên dưới bình luận hoặc bấm nút GỬI TIN NHẮN để Kỹ sư nhà máy gọi tư vấn đúng liều cho giống lúa nhà mình và giữ suất quà ưu đãi hôm nay nghen!

#ZakiRuocDong #PhanBonHuuCoMy #RuocDongMapBup #LuaTrungMua #AnGiang #DongThap #KienGiang #SocTrang #CanTho #LongAn
```

### Mẫu 2: Bài Đăng Tuyến ZAKi Vô Gạo Organic 1L (Giai Đoạn Trổ Lẹt Xẹt & Cong Trái Me)
```text
🌾 CẮT BÔNG LÚA RA COI THẤY HẠT CẬY BÊN TRONG LỎNG XẺO LÉP NHẸP LÀ HỤT MẤT CẢ BAO LÚA MỖI CÔNG! DẰN NGAY CỮ ZAKI VÔ GẠO CHẮC TỚI CẬY 100%!

Nhiều bà con ở Đồng Tháp, Kiên Giang, Hậu Giang, Bạc Liêu làm lúa nhìn ngoài ngọn thì vàng ươm mà tới ngày gặt đưa lên bàn cân lại nhẹ tênh, hụt ký! Nguyên nhân là do cữ cuối rễ đã già mà bà con xịt trúng Kali muối hóa học làm cháy chóp 3 lá đòng, cây tự ngắt nguồn dồn đường nuôi mấy hạt sát cổ bông!

👉 Đổi ngay sang lon thiếc ZAKi Vô Gạo Organic 1L (Dạng sữa tinh khiết công nghệ Mỹ):

✅ Công thức Lân hữu hiệu lỏng 32.5% kết hợp Kali sữa 23.5%: Tạo năng lượng sinh học đẩy dòng tinh bột xối xả vào tận phôi hạt chỉ sau 2 - 4 giờ phun, trị dứt điểm tật lép cậy, lỏng cậy sát gốc!
✅ Bổ sung Kẽm 1.500 ppm & Bo 400 ppm: Giúp hoa lúa thụ phấn rầm rộ ở cữ trổ lẹt xẹt, tạo lớp áo giáp chống sương muối lạnh đêm và chống ngơ nắng, giữ vỏ hạt chín vàng óng ánh sáng bóng, thương lái nhìn ưng bụng mua cao hơn 150 - 200đ/kg!
✅ Cam kết 100% mát cây: Tuyệt đối không gây cháy chóp lá đòng hay quéo nhụy, giữ nguyên 3 lá đòng xanh bền cứng cáp chống đổ ngã tới tận ngày máy cắt xuống đồng.
✅ Chuyên dụng bay Drone: Dạng sữa mịn hòa tan 100% trong nước, pha chung thuốc đạo ôn, lem lép hạt, thuốc rầy cực êm không bao giờ nghẹt béc bay.
✅ ĐỘ BAO PHỦ SIÊU HỜI: Đúng 1 lon thiếc 1 Lít xịt xả giàn cho tới 2 - 3 hecta (20 - 30 công lúa)!

🎁 ƯU ĐÃI LỚN NHẤT VỤ TỪ NHÀ MÁY PHÂN BÓN MIỀN NAM:
• Áp dụng Mua 3 Tặng 1, Mua 6 Tặng 2, Mua 9 Tặng 3.
• Lấy theo Thùng Nhỏ được tính thẳng về GIÁ ĐẠI LÝ gốc + Bao cước vận chuyển tận nhà toàn miền Tây!
• Cam kết vàng: Khui thùng kiểm tra đúng lon thiếc ZAKi có mã QR mới thanh toán. Xài không hiệu quả công ty hoàn tiền 100%!

👇 Bà con để lại SỐ ĐIỆN THOẠI hoặc bấm GỬI TIN NHẮN ngay bên dưới để Kỹ sư gọi hướng dẫn canh cữ cong trái me - đỏ đuôi chuẩn xác nhất nha!

#ZakiVoGao #SieuVoGaoZaki #VoGaoToiCay #LuaVangNangKy #DongThap #AnGiang #KienGiang #SocTrang #BacLieu #HauGiang
```

### Mẫu 3: Bài Đăng Tuyến Bộ Đôi pH 14 + ZAKi Rước Đòng (Cấp Cứu Phèn Ngập & Mở Màng Tế Bào)
```text
🌾 MƯA DẦM NGẬP ÚNG XONG LÚA RŨ LÁ SẶC PHÈN, RỄ ĐEN THUI? ĐỪNG DẠI RẢI PHÂN GỐC LÚC NÀY KẺO THỐI RỄ NẶNG THÊM BÀ CON ƠI!

Sau những đợt mưa lớn hoặc làm đất cập rập tại Tứ Giác Long Xuyên và Đồng Tháp Mười, đất bị yếm khí rớt pH thê thảm, phèn sắt phèn nhôm xì lên bóp nghẹt đầu rễ. Lúc này màng tế bào rễ đang đóng chặt, bà con rải bao nhiêu phân NPK xuống cũng bị khóa lại và rửa trôi mất nửa bao!

👉 Giải pháp cứu lúa và hồi sinh nền đất chỉ sau 1 cữ phun với BỘ ĐÔI HỮU pH 14 & ZAKI RƯỚC ĐÒNG:

✅ Bước 1 - Mở khóa nền đất với pH 14 (Kiềm sinh học pH > 13 & Than Biochar Mỹ): Dập tan phèn chua, nâng pH đất từ 4.0 lên 6.0 - 6.5 chỉ sau 24 - 48 giờ. Hàng triệu vi lỗ Biochar ngậm chặt phân NPK chống rửa trôi và kết tủa kim loại nặng Cadimi để làm lúa sạch xuất khẩu.
✅ Bước 2 - Bơm dưỡng chất với ZAKi Rước Đòng (18% Axit Fulvic California Mỹ): Khi pH 14 vừa mở toang màng tế bào, Axit Fulvic lập tức đẩy dinh dưỡng chui thẳng vào mạch dẫn sau 4 giờ. Chỉ 3 - 5 ngày sau nhổ bụi lúa lên là rễ tơ bung trắng xóa, đẻ nhánh rộ, nuôi tim đèn mập ú!
✅ Cắt giảm nhẹ nhàng 30% - 40% chi phí phân bón gốc NPK cả vụ.
✅ 1 Bộ đôi pha phun xả giàn cho tới 3 hecta (30 công lúa), pha chung 1 bình hoặc bay Drone 1 lượt cực kỳ nhàn công!

🎁 CHÍNH SÁCH TRỢ GIÁ COMBO TỪ NHÀ MÁY:
• Chương trình Mua 3 bộ TẶNG 1 bộ, Mua 6 bộ TẶNG 2 bộ, Mua 9 bộ TẶNG 3 bộ.
• Hỗ trợ tính thẳng GIÁ ĐẠI LÝ khi lấy theo Thùng Nhỏ + Miễn phí giao hàng tận nhà.

👇 Ruộng bà con đang được mấy ngày tuổi rồi? Để lại SỐ ĐIỆN THOẠI hoặc bấm GỬI TIN NHẮN để Kỹ sư Phân Bón Miền Nam tư vấn phác đồ hạ phèn bung rễ ngay hôm nay!
```

---

## 4. Quy Chuẩn Bảng Google Sheet (`GGS DANGBAI ZAKI`) Khớp 100% Với Code Python

Trong file `03-Code/zaki_fb_autopost/auto_post_fb.py`, hàm `find_column_indexes(header_row)` tự động quét dòng tiêu đề đầu tiên (Hàng 1) của Google Sheet để ánh xạ 6 cột dữ liệu. Khi tạo hoặc cập nhật dữ liệu trên Google Sheet, bắt buộc tuân thủ cấu trúc 6 cột sau:

| Thứ Tự Cột | Tên Cột Chuẩn Trên Hàng 1 | Từ Khóa Nhận Diện Trong `find_column_indexes` | Quy Chuẩn Dữ Liệu Nhập Vào & Cơ Chế Xử Lý Của Tool |
| :---: | :--- | :--- | :--- |
| **Cột A (1)** | `Mã bài` | `mã bài`, `mã`, `post id`, `id` | Mã định danh duy nhất của bài đăng (ví dụ: `ZAKI_001`, `ZAKI_002`, `ZAKI_003`). Tool dùng mã này để tạo thư mục tạm `temp_media/<post_id>/` khi tải ảnh/video. |
| **Cột B (2)** | `Nội dung` | `nội dung`, `caption`, `content`, `bài viết` | Nội dung bài đăng dạng Plain Text sạch (không chứa `**`, `###`). Tool sẽ truyền chuỗi này vào trường `message` (khi đăng feed/album), `caption` (khi đăng 1 ảnh) hoặc `description` (khi đăng video). |
| **Cột C (3)** | `Link ảnh Drive` | `link ảnh`, `ảnh`, `drive`, `photo`, `image` | Hỗ trợ **3 định dạng đầu vào linh hoạt** (hàm `get_and_download_images`):<br>1. **Đường dẫn thư mục/file cục bộ trên máy:** Ví dụ `G:\My Drive\Soleil&co By UyenNhi\10-19 Dự Án Đang Chạy\17. AgrizenLua\02-Assets\Đăng Page\ZAKI_003` (Tool tự quét mọi file `.jpg, .jpeg, .png, .webp, .mp4, .mov` trong thư mục).<br>2. **Link Folder Google Drive:** `https://drive.google.com/drive/folders/<FOLDER_ID>` (Tool tự động tải toàn bộ ảnh/video trong folder).<br>3. **Link File đơn Google Drive:** `https://drive.google.com/file/d/<FILE_ID>/view` (Tool tải 1 file đơn). |
| **Cột D (4)** | `Danh sách Page` | `page`, `fanpage`, `trang` | Chỉ định các Fanpage nhận bài đăng (hàm `resolve_target_pages`):<br>• Nhập `ALL` (hoặc để trống): Tự động đăng đồng loạt lên **tất cả các Fanpage** có trong `pages_config.json`.<br>• Nhập danh sách phân tách bằng dấu phẩy: Ví dụ `PAGE_1, PAGE_2, PAGE_5` hoặc nhập trực tiếp Page ID `1385902531254527`. |
| **Cột E (5)** | `Trạng thái` | `trạng thái`, `status`, `tình trạng` | **Bắt buộc điền `Chờ đăng`** (không phân biệt hoa thường) cho các bài muốn xuất bản.<br>• Sau khi chạy xong, tool tự động cập nhật ô này thành **`Đã đăng`** (nếu thành công 100% các page) hoặc **`Lỗi một phần`** (nếu có page lỗi token/mạng). |
| **Cột F (6)** | `Ghi chú / Lịch sử` | `ghi chú`, `lịch sử`, `note`, `history` | Để trống khi soạn bài. Sau khi đăng xong, tool tự động ghi log thời gian và Post ID trả về từ Facebook Graph API v19.0 theo định dạng: `[HH:MM DD/MM/YYYY] Page A: OK (Post ID: ...); Page B: OK (Video Post ID: ...)`. |

### Cơ Chế Xử Lý Đa Phương Tiện (Media Handling) Của `post_to_facebook`
- **Nếu thư mục/link có file Video (`.mp4`, `.mov`, `.avi`, `.mkv`):** Tool ưu tiên gọi endpoint `https://graph-video.facebook.com/v19.0/{page_id}/videos` để xuất bản Video Reels/Post kèm `description`.
- **Nếu có 1 file Ảnh:** Tool gọi endpoint `/{page_id}/photos` với `published="true"`.
- **Nếu có từ 2 file Ảnh trở lên (Album):** Tool tự động upload từng ảnh ở chế độ ẩn (`published="false"`) để lấy danh sách `media_fbid`, sau đó gọi `/{page_id}/feed` kèm `attached_media` để xuất bản thành Album nhiều ảnh chuyên nghiệp.
- **Cơ chế chống Checkpoint / Spam của Meta:** Giữa mỗi Fanpage, tool tự động nghỉ ngẫu nhiên từ `MIN_DELAY_SECONDS` (5 giây) đến `MAX_DELAY_SECONDS` (15 giây), sau khi hoàn tất bài sẽ tự động dọn sạch thư mục `temp_media/<post_id>`.

---

## 5. Quy Trình Vận Hành & Lệnh Chạy Thực Tế

Toàn bộ công cụ nằm tại thư mục:
`g:\My Drive\Soleil&co By UyenNhi\10-19 Dự Án Đang Chạy\17. AgrizenLua\03-Code\zaki_fb_autopost\`

### Bước 1: Kiểm tra cấu hình `.env` và `credentials.json`
Đảm bảo trong thư mục `03-Code/zaki_fb_autopost/` đã có đủ 3 file:
1. `credentials.json`: File khóa Google Service Account đã được cấp quyền xem/sửa trên Google Sheet và Google Drive.
2. `.env`: Chứa `GOOGLE_SHEET_ID`, `SHEET_TAB_NAME` (mặc định `Sheet1`), `MIN_DELAY_SECONDS=5`, `MAX_DELAY_SECONDS=15`.
3. `pages_config.json`: Chứa danh sách Page ID và Page Access Token của các Fanpage ZAKi.

### Bước 2: Đồng bộ & Cập nhật Token Fanpage mới (Khi có thêm Page hoặc đổi Token)
Khi thêm Fanpage vệ tinh mới vào tài khoản quản trị Meta hoặc cần làm mới Page Access Token, lấy `User Access Token` từ Meta Graph API Explorer và chạy công cụ đồng bộ tự động (quét `/v19.0/me/accounts?limit=100`, tự động cập nhật các `PAGE_1..PAGE_n` cũ và nối thêm `PAGE_n+1` mới):

- **Cách 1 (Chạy bằng file `.bat` giao diện tương tác):**
```powershell
cd "g:\My Drive\Soleil&co By UyenNhi\10-19 Dự Án Đang Chạy\17. AgrizenLua\03-Code\zaki_fb_autopost"
.\dong_bo_fanpage.bat
```
- **Cách 2 (Chạy trực tiếp qua dòng lệnh kèm User Token):**
```powershell
cd "g:\My Drive\Soleil&co By UyenNhi\10-19 Dự Án Đang Chạy\17. AgrizenLua\03-Code\zaki_fb_autopost"
python dong_bo_fanpage.py "EAAxxxx_USER_ACCESS_TOKEN_CUA_BAN"
```

### Bước 3: Kích hoạt tiến trình Tự Động Đăng Bài Hàng Loạt (`auto_post_fb.py`)
Sau khi đã điền các bài viết mới vào Google Sheet ở trạng thái `Chờ đăng`:

- **Cách 1 (Khuyên dùng — Chạy qua `run_auto_post_zaki.bat` tự kiểm tra thư viện):**
```powershell
cd "g:\My Drive\Soleil&co By UyenNhi\10-19 Dự Án Đang Chạy\17. AgrizenLua\03-Code\zaki_fb_autopost"
.\run_auto_post_zaki.bat
```
- **Cách 2 (Chạy trực tiếp bằng Python trong môi trường `.venv` của dự án):**
```powershell
cd "g:\My Drive\Soleil&co By UyenNhi\10-19 Dự Án Đang Chạy\17. AgrizenLua\03-Code\zaki_fb_autopost"
..\..\.venv\Scripts\python.exe auto_post_fb.py
```

### Bước 4: Kiểm tra Log lịch sử đăng bài
Mọi kết quả thực thi đều được ghi chi tiết có dấu thời gian tại:
`g:\My Drive\Soleil&co By UyenNhi\10-19 Dự Án Đang Chạy\17. AgrizenLua\03-Code\zaki_fb_autopost\autopost_history.log`
và cập nhật trực tiếp lên Cột E (`Trạng thái`) + Cột F (`Ghi chú / Lịch sử`) trên Google Sheet.
