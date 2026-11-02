---
name: zaki-visual-prompt-master
description: Kỹ năng Kỹ nghệ Prompt Hình ảnh & Thiết kế Poster Nông nghiệp Công nghệ cao cho dự án ZAKi (17. AgrizenLua) trên Ideogram 2.0, Midjourney v6, Flux.1/DALL-E 3, Google Veo 3 và Nano Banana. Bao gồm Bảng màu Thương hiệu Master, Kiến trúc Split-Screen Poster 50/50, Cấu trúc Prompt 5 Lớp tiếng Anh, Bộ Prompt hoàn chỉnh cho 3 sản phẩm (Hữu pH 14, ZAKi Rước Đòng, ZAKi Vô Gạo), Bảng Text tiếng Việt có dấu và Quy tắc bắt buộc dùng ảnh lon thiếc thật 100%.
---

# KỸ NĂNG KỸ NGHỆ PROMPT HÌNH ẢNH & THIẾT KẾ POSTER NÔNG NGHIỆP CÔNG NGHỆ CAO ZAKi (`zaki-visual-prompt-master`)

## 1. Quy Tắc Bất Khả Xâm Phạm Trong Thiết Kế Visual Nông Nghiệp ZAKi

Khi thiết kế Poster quảng cáo, Ảnh bài đăng Fanpage hoặc Video AI cho dự án ZAKi (`17. AgrizenLua`), bắt buộc tuân thủ 3 nguyên tắc sống còn sau:

1. **BẮT BUỘC DÙNG ẢNH THAM CHIẾU BAO BÌ LON THIẾC THẬT 100% (Image-to-Image / Reference / Hybrid Compositing):**
   - **Tuyệt đối nghiêm cấm** để các mô hình AI tự vẽ/tự chế ra vỏ chai nhựa hoặc lon thiếc có chữ nghĩa méo mó, sai lệch nhận diện thương hiệu.
   - Luôn truyền đường dẫn ảnh chụp sản phẩm thật trong kho tài sản (`02-Assets/`) làm **Image Reference (`--iw 2.0` trên Midjourney / Image Reference trên Nano Banana / ghép lớp Layer thật trên Photoshop/Canva)**:
     - **Hữu pH 14:** `g:/My Drive/Soleil&co By UyenNhi/10-19 Dự Án Đang Chạy/17. AgrizenLua/02-Assets/ph14_images/Fertilizer_product_poster_on_wood_202608110955.jpeg` (và `02-Assets/ph14. mk.png`).
     - **ZAKi Rước Đòng Organic 1L:** `g:/My Drive/Soleil&co By UyenNhi/10-19 Dự Án Đang Chạy/17. AgrizenLua/02-Assets/ruoc_dong_lon_mat_truoc.jpeg` (mặt sau: `ruoc_dong_lon_mat_sau.jpeg`, thành phần: `ruoc_dong_lon_chi_tiet_thanh_phan.jpeg`).
     - **ZAKi Vô Gạo Organic 1L:** `g:/My Drive/Soleil&co By UyenNhi/10-19 Dự Án Đang Chạy/17. AgrizenLua/02-Assets/vo_gao_lon_mat_truoc.jpeg` (mặt sau: `vo_gao_lon_mat_sau.jpeg`, thành phần: `vo_gao_lon_chi_tiet_thanh_phan.jpeg`).
2. **MÔ TẢ ĐÚNG ĐẶC ĐIỂM SINH LÝ LÚA NƯỚC ĐỒNG BẰNG SÔNG CỬU LONG (`Indica Paddy Rice`):**
   - Tuyệt đối không dùng từ khóa chung chung khiến AI vẽ ra cây lúa mì (*wheat*), lúa mạch (*barley*) hoặc đồng cỏ khô châu Âu.
   - Bắt buộc dùng đúng từ khóa sinh học lúa nước nhiệt đới theo từng giai đoạn:
     - *Giai đoạn Hạ phèn / Đẻ nhánh (`pH 14`):* `wetland tropical paddy rice field, dark fertile alluvial humus soil, explosive vigorous white fibrous root hairs (rễ tơ trắng phau)`.
     - *Giai đoạn Đón đòng (`ZAKi Rước Đòng`):* `3 thick upright V-shaped emerald green flag leaves like bamboo blades (3 lá đòng dày đứng chữ V như lá tre), plump developing rice panicle embryo (tim đèn mập ú)`.
     - *Giai đoạn Vô gạo (`ZAKi Vô Gạo`):* `heavy drooping crescent-curved golden ripe rice panicles (bông lúa cong trái me), plump golden paddy grains filled tight to the neck base (chắc hạt tới cậy sát cổ bông), milky starch droplet`.
     - *Công nghệ phun xịt:* `modern multi-rotor agricultural spraying drone flying over lush green Mekong Delta rice paddy, ultra-fine mist, zero nozzle clogging`.
3. **CHỐNG LỖI FONT TIẾNG VIỆT (ANTI-GARBLED VIETNAMESE TEXT):**
   - Chỉ render trực tiếp chữ tiếng Việt có dấu trên **Ideogram 2.0** (bật Typography) hoặc **Nano Banana Pro (Gemini 3 Pro Image)**.
   - Nếu dùng **Midjourney v6**, sử dụng quy trình **Hybrid**: Tạo phôi nền 3D Split-Screen và icon sắc nét trên Midjourney ➔ Đưa vào Photoshop/Canva ➔ Ghép ảnh lon thiếc thật tách nền vào cột trái + Dán đúng bộ Text tiếng Việt chuẩn từ Bảng Phụ Lục ở Mục 5 vào cột phải.

---

## 2. Hệ Thống Thiết Kế Master (Master Design System & Color Palette)

Trích xuất chuẩn xác từ tài liệu gốc `00-Docs/2.0. Bo Prompt Master 3 Poster San Pham Agrizen.md`:

### 2.1. Bảng Màu Thương Hiệu Master (HEX Codes)

| Tên Màu Thương Hiệu | Mã HEX Chuẩn | Ý Nghĩa Nông Học & Ứng Dụng Thị Giác |
| :--- | :---: | :--- |
| **Agri-Tech Emerald** *(Xanh Lục Nông Nghiệp Công Nghệ Cao)* | `#0E4D2D` & `#1C7430` | Màu chủ đạo của thương hiệu, nền vòm lá lúa, tiêu đề chính (Main Header), thể hiện sự trù phú, hữu cơ sinh thái và lá đòng xanh bền. |
| **Harvest Gold** *(Vàng Kim Lúa Chín / Premium Accent)* | `#D4AF37` & `#F5A623` | Viền huy hiệu kim loại, Sub-Header, ánh sáng ven (*rim lighting*) và màu hạt lúa chín vàng óng nặng ký. |
| **Bio-Alkaline Cyan** *(Xanh Kiềm Sinh Học — Riêng `pH 14`)* | `#008B8B` & `#00A896` | Hiệu ứng hạt năng lượng vi sinh và biểu tượng giọt kiềm giải độc phèn sắt/nhôm, nâng pH đất. |
| **Pearlescent White** *(Trắng Sứ Ánh Ngọc Trai)* | `#F8FBF8` & `#FFFFFF` | Nền thẻ thông tin cột phải (*Infographic Card*), tạo độ tương phản tối đa giúp nông dân đọc chữ tiếng Việt rõ ràng 100% trên màn hình điện thoại ngoài nắng. |
| **Deep Organic Text** *(Xanh Đậm Sâu & Xám Sắc Nét)* | `#0A2E18` & `#333333` | Màu chữ tiêu đề Icon (`#0A2E18`) và mô tả chi tiết (`#333333` / `#4A4A4A`), giữ chất sang trọng, không dùng đen tuyền thô cứng. |

### 2.2. Kiến Trúc Bố Cục Chia Đôi 50/50 (Split-Screen Poster Layout `1:1`)
- **Tỷ lệ khung hình chuẩn:** `1:1` (Square Format `2048x2048px` hoặc `8K` — hiển thị hoàn hảo trên Facebook Feed, Ads Carousel, Zalo gửi khách và Website).
- **CỘT TRÁI (50% — Visual Hero & Bio-Atmosphere):**
  1. **Khung vòm tự nhiên (`Botanical Arched Portal`):** Vòm lá lúa xanh mướt đọng giọt sương mai lấp lánh (*morning dew drops*) hoặc bông lúa chín vàng uốn cong tạo chiều sâu thị giác.
  2. **Hero Product (Lon thiếc thật 100%):** Đặt trang trọng trên bục gỗ mộc (*polished wooden pedestal*) hoặc nền đất mùn hữu cơ tơi xốp (*dark fertile humus soil*), có ánh sáng ven (*golden-emerald rim lighting*) tôn lên bề mặt kim loại của lon thiếc.
  3. **Bằng chứng sinh học chân đế (`Base Biological Proof`):** Chùm rễ lúa bung trắng phau tua tủa đâm xuyên đất mùn (với `pH 14` & `Rước Đòng`) hoặc hạt lúa vàng óng + giọt sữa gạo trắng ngần (với `Vô Gạo`).
  4. **Brand Badge góc trên trái:** Huy hiệu tròn viền vàng kim (`BIOCHAR MỸ` / `100% ORGANIC USA` / `PK HỮU CƠ SIÊU ĐẬM ĐẶC`).
- **CỘT PHẢI (50% — Infographic & Value Hierarchy Card):**
  1. **Card Background:** Nền trắng ngọc trai (`#F8FBF8`) hoặc kính mờ sáng (*frosted glassmorphism*).
  2. **Header Block:** Tên sản phẩm chữ in hoa cực đậm (`Main Header` màu `#0E4D2D`) + Định vị hoạt chất (`Sub Header` màu `#F5A623`) + Tagline nghiêng (`#1C7430`).
  3. **5 Value Pillars (Thân bài):** Cột dọc gồm **5 Icon tròn viền vàng kim - xanh lục**, xếp thẳng hàng ngang với 5 cụm văn bản (Tiêu đề in đậm + Mô tả công dụng nông học súc tích).
  4. **Footer Trust Badges:** 3 huy hiệu bảo chứng ngang dưới chân (`CÔNG NGHỆ BIOCHAR MỸ` • `NHẬP KHẨU NGUYÊN LON MỸ` • `TIẾT KIỆM 30% NPK`).

---

## 3. Công Thức Cấu Trúc Prompt Ảnh 5 Lớp Tiếng Anh Bắt Buộc

Mọi prompt sinh ảnh mới cho ZAKi phải được lắp ghép đầy đủ theo **Công thức 5 Lớp (5-Layer Prompt Architecture)**:

```text
[LAYER 1: SUBJECT & HERO PRODUCT] + [LAYER 2: ENVIRONMENT & BIOLOGICAL PROOF] + [LAYER 3: LIGHTING & ATMOSPHERIC VFX] + [LAYER 4: TECHNICAL CAMERA & COMPOSITION] + [LAYER 5: STYLE, COLOR PALETTE & TYPOGRAPHY HIERARCHY]
```

| Lớp (Layer) | Thành Phần Bắt Buộc Trong Prompt Tiếng Anh | Từ Khóa Chuẩn Hóa Dự Án ZAKi |
| :--- | :--- | :--- |
| **Layer 1: Subject** | Chủ thể chính, bao bì lon thiếc 1L thật, bề mặt vật liệu kim loại, vị trí đặt trên bục. | `Authentic 1-Liter metallic tin can of [Product Name], brushed aluminum pull-tab lid, resting heroically on a polished rustic wooden pedestal over rich dark organic humus soil` |
| **Layer 2: Environment** | Môi trường ruộng lúa ĐBSCL, khung vòm lá lúa/bông lúa, bộ rễ trắng hoặc hạt gạo chắc cậy. | `Framed by a botanical arch of lush emerald green tropical indica rice flag leaves with sparkling morning dew drops / drooping golden ripe rice panicles, vigorous white fibrous root hairs bursting through soil` |
| **Layer 3: Lighting** | Ánh sáng bình minh trên đồng, ánh sáng ven tách nền lon thiếc, hạt năng lượng sinh học. | `Golden hour sunrise backlighting, volumetric sunbeams (god rays) filtering through translucent water droplets, studio golden-emerald rim lighting on the metal can, subtle glowing bio-nutrient particles` |
| **Layer 4: Camera & Layout** | Tỷ lệ chia đôi 50/50, tiêu cự ống kính, độ sâu trường ảnh, độ phân giải. | `Commercial 1:1 square split-screen poster composition (50% left visual hero, 50% right pearl-white infographic card), shot on 85mm macro lens, f/2.8, razor-sharp focus, 8k resolution` |
| **Layer 5: Style & Colors** | Phong cách thiết kế tạp chí nông nghiệp công nghệ cao, bảng màu HEX, 5 icon tròn viền vàng. | `High-tech eco-agricultural catalog aesthetic, color palette of Agri-Tech Emerald (#0E4D2D), Harvest Gold (#D4AF37), and Pearlescent White (#F8FBF8), vertical stack of 5 metallic gold-rimmed circular vector icons with clean Vietnamese typography` |

---

## 4. Bộ Prompt Mẫu Hoàn Chỉnh Cho 3 Sản Phẩm Chủ Lực

### 4.1. Sản Phẩm 1: HỮU pH 14 (Nâng pH Đất & Dập Phèn Cấp Tốc — Công Nghệ Biochar Mỹ)
- **File Asset Tham Chiếu:** `02-Assets/ph14_images/Fertilizer_product_poster_on_wood_202608110955.jpeg`

#### Prompt Ideogram 2.0 / Nano Banana Pro (Render Full Layout & Tiếng Việt Chuẩn)
```text
A professional commercial Split-Screen advertising poster for agricultural biotechnology product "HỮU pH 14", 1:1 square ratio, clean graphic design, 8k resolution.

LEFT SIDE (50%):
An elegant botanical arch made of lush green foliage and fresh rice leaves with sparkling morning dew drops framing the product. In the center sits the realistic premium metallic tin can of "HỮU pH 14" on a clean dark nutrient-rich humus soil and smooth wooden pedestal. Glistening morning sunbeams filter through translucent water droplets. At the bottom base, vibrant healthy white root fibers burst through the soil with subtle glowing cyan and golden nutrient energy particles. Top-left corner features a luxury circular gold badge with the text "BIOCHAR MỸ".

RIGHT SIDE (50%):
A clean, modern off-white cream infographic layout with flawless typography hierarchy. 
At the top, large bold emerald green typography reads:
"HỮU pH 14"
Directly below in bold golden amber text:
"NÂNG pH ĐẤT & DẬP PHÈN CẤP TỐC"
Sub-headline in dark green cursive:
"Đất Ngọt Tơi Xốp • Rễ Trắng Bung Phau"

Below the title, a vertical stack of 5 polished metallic golden-green circular icons, each paired horizontally with bold clear Vietnamese text:
1. [Circular Icon with pH Meter / Alkaline Droplet]:
   - Bold Title: "NÂNG pH 5.5 - 6.5 CẤP TỐC"
   - Description: "Trung hòa phèn chua, ổn định pH sau 24-48 giờ"
2. [Circular Icon with Biochar Micro-Pore Honeycomb]:
   - Bold Title: "BIOCHAR MỸ GIỮ PHÂN GIỮ NƯỚC"
   - Description: "Than sinh học vi lỗ lưu giữ NPK, chống rửa trôi"
3. [Circular Icon with Healthy White Taproot]:
   - Bold Title: "BUNG RỄ TƠ TRẮNG PHAU"
   - Description: "Fulvic 1.5% kích rễ cám đâm sâu, chống nghẹt rễ"
4. [Circular Icon with Detox Shield & Clean Soil]:
   - Bold Title: "GIẢI ĐỘC RƠM RẠ & KHÓA CADIMI"
   - Description: "Cắt độc hữu cơ, kết tủa ion Fe²⁺, Al³⁺ và độc chất"
5. [Circular Icon with Agricultural Drone & Spray Nozzle]:
   - Bold Title: "HÒA TAN 100% - KHÔNG CHAI ĐẤT"
   - Description: "Thay thế hoàn toàn vôi nung, xịt Drone không nghẹt béc"

At the bottom right footer: Three sleek modern trust badges reading "CÔNG NGHỆ BIOCHAR MỸ", "KIỀM SINH HỌC pH>13", "TIẾT KIỆM 30% NPK".
Color palette: Rich forest emerald green (#0E4D2D), metallic gold (#D4AF37), biological cyan (#008B8B), crisp pure white (#F8FBF8). Ultra-clean graphic design, premium agricultural catalog aesthetic, sharp vector icons, perfectly aligned text.
```

#### Prompt Midjourney v6 (Multi-Image Reference & Photorealistic Lighting)
```text
https://s.mj.run/layout_reference_split.jpg https://s.mj.run/ph14_tin_can_asset.jpg Commercial split-screen agricultural infographic poster for premium fertilizer product "HỮU pH 14", modern eco-tech advertising design, 1:1 aspect ratio. Left side: Arched frame of dew-covered vibrant green leaves, hero metallic tin can "HỮU pH 14" displayed on a polished wooden disc over rich fertile soil, micro roots bursting with vitality, glowing morning dew, volumetric golden god rays, luxury gold brand badge top left. Right side: Bright minimalist cream-white infographic card with bold emerald green typography "HỮU pH 14", golden sub-header "NÂNG pH ĐẤT & DẬP PHÈN CẤP TỐC", vertical row of 5 circular gold-trimmed green icon badges displaying soil pH meter, biochar matrix, white roots, detox shield, and agricultural drone, each with crisp typography bullet points: "NÂNG pH 5.5 - 6.5 CẤP TỐC", "BIOCHAR MỸ GIỮ PHÂN GIỮ NƯỚC", "BUNG RỄ TƠ TRẮNG PHAU", "GIẢI ĐỘC RƠM RẠ & KHÓA CADIMI", "HÒA TAN 100% - KHÔNG CHAI ĐẤT". Studio rim lighting, hyper-realistic textures, clean graphic layout, anti-slop, premium corporate print catalog style --ar 1:1 --style raw --iw 2.0 --v 6.1
```

---

### 4.2. Sản Phẩm 2: ZAKi RƯỚC ĐÒNG ORGANIC 1L (Hữu Cơ 40% & Fulvic 18% Mỹ — Đòng Mập Ú, 16 Gié)
- **File Asset Tham Chiếu:** `02-Assets/ruoc_dong_lon_mat_truoc.jpeg`

#### Prompt Ideogram 2.0 / Nano Banana Pro (Render Full Layout & Tiếng Việt Chuẩn)
```text
A premium commercial Split-Screen advertising poster for organic rice fertilizer "ZAKi RƯỚC ĐÒNG ORGANIC", 1:1 square ratio, clean graphic design, 8k resolution.

LEFT SIDE (50%):
A beautiful organic arched canopy of vibrant green rice leaves with glistening crystal dew drops and young developing rice panicles (tim đèn). In the center stands the authentic 1-Liter metallic tin can of "ZAKi RƯỚC ĐÒNG ORGANIC" (100% imported from USA) resting on a clean rustic wooden platform surrounded by fresh green paddy shoots and healthy white root clusters. Warm golden morning sunlight creates a natural aura and lens flare through water drops. In the top-left corner is a luxury circular gold badge with the text "100% ORGANIC USA".

RIGHT SIDE (50%):
A bright, high-contrast cream-white infographic card with masterful Vietnamese typography hierarchy.
At the top, large bold emerald green typography reads:
"ZAKi RƯỚC ĐÒNG ORGANIC"
Directly below in bold golden amber text:
"HỮU CƠ 40% & FULVIC 18% NHẬP KHẨU MỸ"
Sub-headline in deep green italic:
"Đòng Mập Ú • Tăng Gié Bông • Trổ Đồng Loạt"

Below the title, a vertical stack of 5 polished metallic golden-emerald circular icons, each paired horizontally with bold Vietnamese text:
1. [Circular Icon with Fat Rice Embryo / Tim Đèn Panicle]:
   - Bold Title: "ĐÒNG MẬP Ú - TĂNG 35-40% SỐ GIÉ"
   - Description: "Phân hóa mầm hoa tối đa, khung bông dài nhiều hạt"
2. [Circular Icon with Explosive White Roots / Thick Rice Culm]:
   - Bold Title: "BUNG RỄ TRẮNG - NỞ BỤI TO ĐÙNG"
   - Description: "Fulvic Mỹ 18% dán rễ chặt đất, cọng mập bóp không dẹp"
3. [Circular Icon with Toxic Phèn & Organic Matter Detox]:
   - Bold Title: "HÓA GIẢI PHÈN & ĐỘC RƠM RẠ"
   - Description: "Ngắt ngộ độc hữu cơ tức thì, chống vàng lá thối rễ"
4. [Circular Icon with 3 Upright Green Flag Leaves / SPAD]:
   - Bold Title: "DẦY ĐỨNG 3 LÁ ĐÒNG NHƯ TRE"
   - Description: "Hữu cơ Mỹ 40% kéo dài quang hợp, tăng tích lũy đường"
5. [Circular Icon with Bursting Rice Flower & Drone Spray]:
   - Bold Title: "TRỔ THOÁT NHANH - KHÔNG NGHẸN ĐÒNG"
   - Description: "Mát cây 100%, dung dịch tinh khiết siêu hòa tan cho Drone"

At the bottom right footer: Three sleek modern trust badges reading "NHẬP KHẨU NGUYÊN LON MỸ", "FULVIC ACID 18%", "CHỐNG ĐỔ NGÃ".
Color palette: Rich rice-field emerald green (#0E4D2D), warm amber harvest gold (#D4AF37), fresh plant sap green (#1C7430), clean off-white (#F8FBF8). Professional agricultural master poster design, razor-sharp typography, pixel-perfect alignment.
```

#### Prompt Midjourney v6 (Multi-Image Reference & Photorealistic Lighting)
```text
https://s.mj.run/layout_reference_split.jpg https://s.mj.run/ruoc_dong_tin_can_asset.jpg Commercial split-screen agricultural advertising poster for organic rice fertilizer "ZAKi RƯỚC ĐÒNG ORGANIC", modern editorial graphic design, 1:1 aspect ratio. Left side: Botanical arch of glistening morning dew-dappled rice foliage, authentic 1-Liter metallic tin can "ZAKi RƯỚC ĐÒNG" standing heroically on a weathered wooden slice over fertile soil, bursting white root crowns, golden morning sun flare, luxury gold badge "100% ORGANIC USA" top left. Right side: Pristine light cream infographic card with bold emerald green typography "ZAKi RƯỚC ĐÒNG ORGANIC", vibrant gold subtitle "HỮU CƠ 40% & FULVIC 18% NHẬP KHẨU MỸ", vertical layout of 5 metallic gold-rimmed circular icon badges (rice panicle embryo, root cluster, detox leaf, flag leaf, agricultural drone), with bold clean typography bullets: "ĐÒNG MẬP Ú - TĂNG 35-40% SỐ GIÉ", "BUNG RỄ TRẮNG - NỞ BỤI TO ĐÙNG", "HÓA GIẢI PHÈN & ĐỘC RƠM RẠ", "DẦY ĐỨNG 3 LÁ ĐÒNG NHƯ TRE", "TRỔ THOÁT NHANH - KHÔNG NGHẸN ĐÒNG". Atmospheric studio backlighting, ultra-realistic metal can reflections, perfect alignment, premium agricultural advertising master --ar 1:1 --style raw --iw 2.0 --v 6.1
```

---

### 4.3. Sản Phẩm 3: ZAKi VÔ GẠO ORGANIC 1L (PK Hữu Cơ Sữa 32.5% P₂O₅ - 23.5% K₂O + Bo & Kẽm)
- **File Asset Tham Chiếu:** `02-Assets/vo_gao_lon_mat_truoc.jpeg`

#### Prompt Ideogram 2.0 / Nano Banana Pro (Render Full Layout & Tiếng Việt Chuẩn)
```text
A prestigious commercial Split-Screen advertising poster for advanced rice ripening fertilizer "ZAKi VÔ GẠO ORGANIC", 1:1 square ratio, clean graphic design, 8k resolution.

LEFT SIDE (50%):
An organic arched frame of heavy, golden, drooping ripe rice panicles (bông lúa cong trái me) heavy with plump golden grains, interwoven with fresh green flag leaves with sparkling morning dew drops. In the center sits the authentic 1-Liter metallic tin can of "ZAKi VÔ GẠO ORGANIC" (Green King Kali PK Gel) on a polished teak wooden pedestal surrounded by golden grains and glowing white milk droplets (dịch sữa gạo). Golden harvest morning lighting creates a rich, fertile, prosperous glow with warm bokeh. In the top-left corner is a luxury circular gold badge with the text "PK HỮU CƠ SIÊU ĐẬM ĐẶC".

RIGHT SIDE (50%):
A clean, modern pearl-white infographic card with bold, commanding Vietnamese typography hierarchy.
At the top, large bold emerald green typography reads:
"ZAKi VÔ GẠO ORGANIC"
Directly below in bold golden amber text:
"PK HỮU CƠ SỮA (32.5% P₂O₅ - 23.5% K₂O + BO & KẼM)"
Sub-headline in deep green italic:
"Vào Gạo Thần Tốc • Chắc Tới Cậy • Nặng Ký Dạn Hạt"

Below the title, a vertical stack of 5 polished metallic golden-amber circular icons, each paired horizontally with bold clear Vietnamese text:
1. [Circular Icon with Golden Heavy Rice Grain & Milk Droplet]:
   - Bold Title: "VÀO GẠO THẦN TỐC - CHẮC TỚI CẬY"
   - Description: "Lân 32.5% nạp ATP + Kali 23.5% nén dịch sữa xối xả vào phôi hạt"
2. [Circular Icon with Weight Scale & Plump Rice Grains]:
   - Bold Title: "NẶNG KÝ DẠN HẠT - TĂNG 14% TGW"
   - Description: "Cô đặc tinh bột gạo, tăng 200kg - 250kg lúa tươi / công tầm lớn"
3. [Circular Icon with Pollination Flower & Boron/Zinc Molecules]:
   - Bold Title: "THỤ PHẤN RỘ - CHỐNG LÉP CẬY LỬNG HẠT"
   - Description: "Bo 400ppm + Kẽm 1.500ppm vươn dài ống phấn, thụ phấn 100%"
4. [Circular Icon with 3 Fresh Green Flag Leaves to Harvest]:
   - Bold Title: "GIỮ XANH 3 LÁ ĐÒNG TẬN NGÀY GẶT"
   - Description: "Chống sương muối, chống háp nắng, duy trì dòng nhựa nuôi hạt nốc"
5. [Circular Icon with Liquid Gel Droplet & Drone Nozzle]:
   - Bold Title: "KALI SỮA MÁT CÂY - KHÔNG CHÁY LÁ"
   - Description: "Không chứa muối mặn Clo, siêu hòa tan 100% không nghẹt béc bay"

At the bottom right footer: Three sleek modern trust badges reading "PK HỮU CƠ TINH KHIẾT", "BO & KẼM CHELATE", "TĂNG 25% NĂNG SUẤT".
Color palette: Rich harvest gold (#D4AF37), royal emerald green (#0E4D2D), milky white (#F8FBF8), golden amber (#F5A623). High-end commercial print advertisement, crisp vector graphics, perfectly legible Vietnamese text.
```

#### Prompt Midjourney v6 (Multi-Image Reference & Photorealistic Lighting)
```text
https://s.mj.run/layout_reference_split.jpg https://s.mj.run/vo_gao_tin_can_asset.jpg Commercial split-screen agricultural advertising poster for premium rice grain filling fertilizer "ZAKi VÔ GẠO ORGANIC", luxury corporate graphic design, 1:1 aspect ratio. Left side: Botanical arched frame of drooping golden ripe rice panicles and morning dew-covered green flag leaves, authentic 1-Liter metallic tin can "ZAKi VÔ GẠO" resting on a clean wooden plinth surrounded by glowing golden rice grains, golden hour sunrise lighting, warm organic aura, luxury gold seal top left. Right side: Elegant pearl-white infographic card with bold emerald green typography "ZAKi VÔ GẠO ORGANIC", vibrant gold subtitle "PK HỮU CƠ SỮA (32.5% P₂O₅ - 23.5% K₂O + BO & KẼM)", vertical column of 5 metallic gold circular icon badges (grain filling droplet, weight scale, boron-zinc pollen, green flag leaf, drone sprayer), with crisp typography bullets: "VÀO GẠO THẦN TỐC - CHẮC TỚI CẬY", "NẶNG KÝ DẠN HẠT - TĂNG 14% TGW", "THỤ PHẤN RỘ - CHỐNG LÉP CẬY LỬNG HẠT", "GIỮ XANH 3 LÁ ĐÒNG TẬN NGÀY GẶT", "KALI SỮA MÁT CÂY - KHÔNG CHÁY LÁ". Hyper-realistic metallic can textures, perfect layout balance, studio lighting, anti-slop, elite agricultural catalog standard --ar 1:1 --style raw --iw 2.0 --v 6.1
```

---

## 5. Bảng Phụ Lục Copy-Paste Text Tiếng Việt Chuẩn 100% Có Dấu (Cho Photoshop / Canva)

Khi sử dụng quy trình Hybrid (sinh phôi ảnh trên Midjourney/Flux và đặt chữ trên Canva/Photoshop), copy chính xác từng dòng dưới đây:

| Vị Trí Layer | Poster 1: `HỮU pH 14` | Poster 2: `ZAKi RƯỚC ĐÒNG ORGANIC` | Poster 3: `ZAKi VÔ GẠO ORGANIC` | Font & Mã Màu Chuẩn |
| :--- | :--- | :--- | :--- | :--- |
| **Top Left Badge** | `BIOCHAR MỸ` | `100% ORGANIC USA` | `PK HỮU CƠ SIÊU ĐẬM ĐẶC` | Montserrat Bold 24pt • `#D4AF37` nền `#0E4D2D` |
| **Main Header** | `HỮU pH 14` | `ZAKi RƯỚC ĐÒNG ORGANIC` | `ZAKi VÔ GẠO ORGANIC` | Montserrat Black 68-72pt • `#0E4D2D` |
| **Sub Header** | `NÂNG pH ĐẤT & DẬP PHÈN CẤP TỐC` | `HỮU CƠ 40% & FULVIC 18% NHẬP KHẨU MỸ` | `PK HỮU CƠ SỮA (32.5% P₂O₅ - 23.5% K₂O + BO & KẼM)` | UTM Aptima Bold 24-28pt • `#F5A623` |
| **Tagline** | *Đất Ngọt Tơi Xốp • Rễ Trắng Bung Phau* | *Đòng Mập Ú • Tăng Gié Bông • Trổ Đồng Loạt* | *Vào Gạo Thần Tốc • Chắc Tới Cậy • Nặng Ký Dạn Hạt* | SemiBold Italic 20pt • `#1C7430` |
| **Icon 1** | **NÂNG pH 5.5 - 6.5 CẤP TỐC**<br>Trung hòa phèn chua, ổn định pH sau 24-48 giờ | **ĐÒNG MẬP Ú - TĂNG 35-40% SỐ GIÉ**<br>Phân hóa mầm hoa tối đa, khung bông dài nhiều hạt | **VÀO GẠO THẦN TỐC - CHẮC TỚI CẬY**<br>Lân 32.5% nạp ATP + Kali 23.5% nén dịch sữa xối xả vào hạt | Title: Bold 22pt `#0A2E18`<br>Desc: Regular 16pt `#4A4A4A` |
| **Icon 2** | **BIOCHAR MỸ GIỮ PHÂN GIỮ NƯỚC**<br>Than sinh học vi lỗ lưu giữ NPK, chống rửa trôi | **BUNG RỄ TRẮNG - NỞ BỤI TO ĐÙNG**<br>Fulvic Mỹ 18% dán rễ chặt đất, cọng mập bóp không dẹp | **NẶNG KÝ DẠN HẠT - TĂNG 14% TGW**<br>Cô đặc tinh bột gạo, tăng 200kg - 250kg lúa tươi / công tầm lớn | Title: Bold 22pt `#0A2E18`<br>Desc: Regular 16pt `#4A4A4A` |
| **Icon 3** | **BUNG RỄ TƠ TRẮNG PHAU**<br>Fulvic 1.5% kích rễ cám đâm sâu, chống nghẹt rễ | **HÓA GIẢI PHÈN & ĐỘC RƠM RẠ**<br>Ngắt ngộ độc hữu cơ tức thì, chống vàng lá thối rễ | **THỤ PHẤN RỘ - CHỐNG LÉP CẬY LỬNG HẠT**<br>Bo 400ppm + Kẽm 1.500ppm vươn dài ống phấn, thụ phấn 100% | Title: Bold 22pt `#0A2E18`<br>Desc: Regular 16pt `#4A4A4A` |
| **Icon 4** | **GIẢI ĐỘC RƠM RẠ & KHÓA CADIMI**<br>Cắt độc hữu cơ, kết tủa ion Fe²⁺, Al³⁺ và độc chất | **DẦY ĐỨNG 3 LÁ ĐÒNG NHƯ TRE**<br>Hữu cơ Mỹ 40% kéo dài quang hợp, tăng tích lũy đường | **GIỮ XANH 3 LÁ ĐÒNG TẬN NGÀY GẶT**<br>Chống sương muối, chống háp nắng, duy trì dòng nhựa nuôi hạt | Title: Bold 22pt `#0A2E18`<br>Desc: Regular 16pt `#4A4A4A` |
| **Icon 5** | **HÒA TAN 100% - KHÔNG CHAI ĐẤT**<br>Thay thế hoàn toàn vôi nung, xịt Drone không nghẹt béc | **TRỔ THOÁT NHANH - KHÔNG NGHẸN ĐÒNG**<br>Mát cây 100%, dung dịch tinh khiết siêu hòa tan cho Drone | **KALI SỮA MÁT CÂY - KHÔNG CHÁY LÁ**<br>Không chứa muối mặn Clo, siêu hòa tan 100% không nghẹt béc | Title: Bold 22pt `#0A2E18`<br>Desc: Regular 16pt `#4A4A4A` |
| **Footer Badges** | `CÔNG NGHỆ BIOCHAR MỸ` • `KIỀM SINH HỌC pH>13` • `TIẾT KIỆM 30% NPK` | `NHẬP KHẨU NGUYÊN LON MỸ` • `FULVIC ACID 18%` • `CHỐNG ĐỔ NGÃ` | `PK HỮU CƠ TINH KHIẾT` • `BO & KẼM CHELATE` • `TĂNG 25% NĂNG SUẤT` | Montserrat SemiBold 14pt • `#D4AF37` |

---

## 6. Lệnh Chạy Tự Động Hóa Sơ Đồ Đồ Họa Visual Mindmap Bằng Python

Bên cạnh bộ Poster AI, dự án ZAKi có sẵn script Python `03-Code/generate_mindmap_visual_images.py` sử dụng `matplotlib` độ phân giải cao (`300 DPI`) để tự động vẽ 5 Infographic/Mindmap kỹ thuật nông học chuẩn font tiếng Việt (`Segoe UI`):
1. `02-Assets/mindmaps/mindmap_1_tong_the.png`: Sơ đồ tư duy tổng thể 5 Trụ cột cốt lõi Hệ thống New Lúa.
2. `02-Assets/mindmaps/mindmap_2_san_pham.png`: Sơ đồ đồ họa 5 Dòng sản phẩm lon thiếc cao cấp (`PH14`, `ZAKi Rước Đòng`, `ZAKi Vô Gạo`, `Mix Combi Ba Lan`, `Siêu Loang Trải Luke`).
3. `02-Assets/mindmaps/mindmap_3_sinh_ly_lua.png`: Sơ đồ Timeline 6 Cử sinh lý lúa & đơn thuốc lon thiếc (100 ngày).
4. `02-Assets/mindmaps/mindmap_4_doi_dau_ph14_voi.png`: Sơ đồ đối đầu trực quan: Vôi nung cũ (`CaO`) vs `PH14 Biochar Mỹ`.
5. `02-Assets/mindmaps/mindmap_5_quy_trinh_telesales.png`: Sơ đồ phễu quy trình 5 bước Telesales thực chiến.

**Lệnh chạy xuất toàn bộ 5 ảnh Infographic 300 DPI:**
```powershell
cd "g:\My Drive\Soleil&co By UyenNhi\10-19 Dự Án Đang Chạy\17. AgrizenLua"
.\.venv\Scripts\python.exe 03-Code\generate_mindmap_visual_images.py
```
