/**

 * AGRIZEN LÚA - LOGIC HIỂN THỊ ĐA TRANG (SẢN PHẨM, KỊCH BẢN VG/PH14 & LỊCH PHUN VỤ LÚA)

 * Tiêu chuẩn: 100% Anti-Slop, Loại bỏ toàn bộ từ 'sổ tay', 'nông học'

 */

document.addEventListener('DOMContentLoaded', () => {

  // Elements

  const menuToggleBtn = document.getElementById('menu-toggle-btn');

  const appSidebar = document.getElementById('app-sidebar');

  const mobileOverlay = document.getElementById('mobile-overlay');

  const pageMainTitle = document.getElementById('page-main-title');

  const pageMainDesc = document.getElementById('page-main-desc');

  const pageProducts = document.getElementById('page-products');

  const pageScriptVG = document.getElementById('page-script-vg');

  const pageScriptPH = document.getElementById('page-script-ph');

  const pageScriptUpsell = document.getElementById('page-script-upsell');
  
  const pageScheduleRice = document.getElementById('page-schedule-rice');

  const pageAlkalineDeep = document.getElementById('page-alkaline-deep');

  const pageRiceDict = document.getElementById('page-rice-dict');

  const pageCropDict = document.getElementById('page-crop-dict');

  const pageRiceVarieties = document.getElementById('page-rice-varieties');

  const pageCropTypes = document.getElementById('page-crop-types');

  const pageVoucherGenerator = document.getElementById('page-voucher-generator');

  const productTabBar = document.getElementById('product-tab-bar');

  const productCardContainer = document.getElementById('product-card-container');

  let activeProductId = AGRIZEN_DATA.products[0].id;

  let currentPage = 'products';

  // Page titles dictionary

  const pageTitles = {

    'products': {

      title: '1. THÔNG TIN SẢN PHẨM CHI TIẾT & KỸ THUẬT',

      desc: 'Dữ liệu trích xuất chuẩn xác từ Hồ sơ Kỹ thuật Cục BVTV & Bảng Giá Mới Nhất'

    },

    'script-vg': {

      title: '2. KỊCH BẢN TƯ VẤN 5 BƯỚC - ZAKi (RƯỚC ĐÒNG & VÔ GẠO)',

      desc: 'Hướng dẫn gọi điện theo 6 cử sinh lý lúa, xử lý tình huống và chính sách Combo Mua 3 Tặng 1'

    },

    'script-ph': {

      title: '3. Kịch bản Bộ 3 (PH14)',

      desc: 'Quy trình tư vấn 5 bước phối hợp PH14 + Rước Đòng + Vô Gạo phun chung 1 bình theo các cử sinh lý lúa'

    },

    'script-upsell': {
      title: '4. CẨM NANG UPSELL SÂU + BỆNH (NETTO PLUS 10EW & BỘ ĐÔI UNIC 75)',
      desc: 'Quy trình tư vấn 4 cữ phun trọn gói bảo vệ lúa toàn diện, xử lý tình huống và chính sách Combo Mua 3 Tặng 1 giá 1tr5'
    },

    'schedule-rice': {

      title: '5. MÙA VỤ LÚA',

      desc: 'Lịch mùa vụ 3 miền, 5 giai đoạn sinh trưởng kèm ảnh thực tế và quy trình bón phân chuẩn'

    },

    'alkaline-deep': {

      title: '6. KIỀM SINH HỌC BIOCHAR',

      desc: 'Bản chất khoa học kiềm sinh học pH > 13, công nghệ Biochar hoạt hóa Mỹ và quy chuẩn lịch tưới 4 nhóm cây trồng'

    },

    'rice-dict': {

      title: '7. TỪ ĐIỂN LÚA & SÂU BỆNH HẠI',

      desc: 'Cẩm nang tra cứu thuật ngữ đồng ruộng 3 miền, các giai đoạn sinh trưởng cây lúa và phác đồ đặc trị 24 sâu bệnh hại thực địa'

    },

    'crop-dict': {

      title: '8. TỪ ĐIỂN CÂY TRỒNG (BỆNH ĐẤT & SO SÁNH CÁCH LÀM)',

      desc: 'Giải thích các hiện tượng thổ nhưỡng, bệnh rễ, ngộ độc đất và bảng so sánh cách làm cũ vs Biochar Mỹ'

    },

    'rice-varieties': {

      title: '9. GIỐNG LÚA',

      desc: 'Tra cứu thông số thời gian sinh trưởng, giá bán, năng suất và lịch phun chuẩn theo từng ngày tuổi cho các giống lúa chủ lực'

    },

    'crop-types': {

      title: '10. MỞ RỘNG',

      desc: 'Cẩm nang tra cứu vấn đề thổ nhưỡng, độ pH đất lý tưởng, liều tưới pH 14 và lịch chăm sóc cho các nhóm cây trồng chủ lực'

    },

    'voucher-generator': {

      title: '11. CÔNG CỤ TẠO PHIẾU CAM KẾT & BẢO HÀNH ĐIỆN TỬ',

      desc: 'Nhập tên khách hàng và xuất ngay phiếu cam kết ZAKI chính hãng gửi Zalo trong 5 giây'

    }

  };

  // Switch Page View

  const switchPage = (pageId) => {

    currentPage = pageId;

    // Update active nav button

    document.querySelectorAll('.nav-item-btn').forEach(btn => {

      if (btn.getAttribute('data-page') === pageId) {

        btn.classList.add('active');

      } else {

        btn.classList.remove('active');

      }

    });

    // Update Header

    if (pageTitles[pageId]) {

      pageMainTitle.textContent = pageTitles[pageId].title;

      pageMainDesc.textContent = pageTitles[pageId].desc;

    }

    // Toggle Page Visibility

    pageProducts.style.display = pageId === 'products' ? 'block' : 'none';

    pageScriptVG.style.display = pageId === 'script-vg' ? 'block' : 'none';

    pageScriptPH.style.display = pageId === 'script-ph' ? 'block' : 'none';

    if (pageId === 'script-ph') {

      renderScriptPH();

    }

    if (pageScriptUpsell) {
      pageScriptUpsell.style.display = pageId === 'script-upsell' ? 'block' : 'none';
      if (pageId === 'script-upsell') {
        renderScriptUpsell();
      }
    }

    if (pageScheduleRice) pageScheduleRice.style.display = pageId === 'schedule-rice' ? 'block' : 'none';

    if (pageAlkalineDeep) pageAlkalineDeep.style.display = pageId === 'alkaline-deep' ? 'block' : 'none';

    if (pageRiceDict) pageRiceDict.style.display = pageId === 'rice-dict' ? 'block' : 'none';

    if (pageCropDict) pageCropDict.style.display = pageId === 'crop-dict' ? 'block' : 'none';

    if (pageRiceVarieties) pageRiceVarieties.style.display = pageId === 'rice-varieties' ? 'block' : 'none';

    if (pageCropTypes) pageCropTypes.style.display = pageId === 'crop-types' ? 'block' : 'none';

    if (pageVoucherGenerator) {

      pageVoucherGenerator.style.display = pageId === 'voucher-generator' ? 'block' : 'none';

      if (pageId === 'voucher-generator') {

        renderVoucherGenerator();

      }

    }

    // Close Mobile Drawer if open

    if (appSidebar.classList.contains('open')) {

      toggleMobileMenu();

    }

    // Scroll to top

    window.scrollTo({ top: 0, behavior: 'smooth' });

  };

  // Render Page 1: Product Tabs

  const renderProductTabs = () => {

    productTabBar.innerHTML = AGRIZEN_DATA.products.map(p => `

      <button class="tab-pill ${p.id === activeProductId ? 'active ' + p.theme : ''}" data-id="${p.id}">

        <span>${p.badgeIcon}</span>

        <span>${p.tabName}</span>

      </button>

    `).join('');

    document.querySelectorAll('.tab-pill').forEach(btn => {

      btn.addEventListener('click', (e) => {

        const id = e.currentTarget.getAttribute('data-id');

        activeProductId = id;

        renderProductTabs();

        renderProductDetail(id);

      });

    });

  };

  // Render Page 1: Product Detail Card (Balanced Layout - Price Under Image, Separated Cards)
  const renderProductDetail = (productId) => {
    const product = AGRIZEN_DATA.products.find(p => p.id === productId);
    if (!product) return;

    // 1. Specs Grid (2 Cột x 3 Hàng Chuẩn Đẹp)
    const specsHtml = product.specs.map(s => `
      <div class="spec-card-item">
        <span class="spec-card-name">${s.name}</span>
        <span class="spec-card-val">${s.value}</span>
      </div>
    `).join('');

    // 2. Mechanisms Grid
    const mechanismsHtml = product.mechanisms.map(m => `
      <div class="mech-item">
        <h4>${m.title}</h4>
        <p>${m.desc}</p>
      </div>
    `).join('');

    // 3. Dilution Banner
    let dilutionRatesHtml = '';
    if (product.dosage.dilutionRates && product.dosage.dilutionRates.length > 0) {
      dilutionRatesHtml = `
        <div class="dilution-rates-box">
          <div class="dilution-title">💧 Định Mức Pha Nước & Phun Xịt Chuẩn:</div>
          <ul class="dilution-list">
            ${product.dosage.dilutionRates.map(r => `<li>• ${r}</li>`).join('')}
          </ul>
        </div>
      `;
    }

    // 4. Crops Cards Grid
    let cropsHtml = '';
    if (product.dosage.crops && product.dosage.crops.length > 0) {
      cropsHtml = `
        <div class="crops-grid">
          ${product.dosage.crops.map(c => `
            <div class="crop-card">
              <div class="crop-title">
                <span>🌿</span>
                <span>${c.name}</span>
              </div>
              <div class="crop-rate-badge"><strong>Liều lượng:</strong> ${c.rate}</div>
              ${c.stages && c.stages.length > 0 ? `
                <ul class="crop-stage-list">
                  ${c.stages.map(st => `<li>${st}</li>`).join('')}
                </ul>
              ` : ''}
            </div>
          `).join('')}
        </div>
      `;
    }

    // 5. Pricing Box (Cột Trái Cân Đối: Giá, Quy cách, Ưu đãi, Cam kết)
    let pricingHtml = '';
    const priceThemeClass = product.id === 'netto-plus' ? 'price-purple' : (product.id === 'unic-tim' ? 'price-unic-tim' : (product.id === 'unic-xanh' ? 'price-unic-xanh' : (product.id === 'vo-gao' ? 'price-gold' : (product.id === 'mix-combi' ? 'price-combi' : (product.id === 'sieu-loang-trai' ? 'price-luke' : '')))));
    const titleColorClass = product.id === 'vo-gao' ? 'gold-title' : (product.id === 'netto-plus' ? 'purple-title' : (product.id === 'unic-tim' ? 'unic-tim-title' : (product.id === 'unic-xanh' ? 'unic-xanh-title' : (product.id === 'mix-combi' ? 'blue-title' : (product.id === 'sieu-loang-trai' ? 'teal-title' : '')))));
    const tagThemeClass = product.id === 'vo-gao' ? 'tag-gold' : (product.id === 'netto-plus' ? 'tag-purple' : (product.id === 'unic-tim' ? 'tag-unic-tim' : (product.id === 'unic-xanh' ? 'tag-unic-xanh' : (product.id === 'mix-combi' ? 'tag-blue' : (product.id === 'sieu-loang-trai' ? 'tag-teal' : 'tag-primary')))));

    if (product.pricing) {
      pricingHtml = `
        <div class="prod-price-card ${priceThemeClass}">
          <div class="price-card-header">
            <div class="price-val-group">
              <div class="price-card-label">${product.pricing.discount === 'Giá cố định' ? 'GIÁ BÁN NIÊM YẾT:' : 'GIÁ BÁN ƯU ĐÃI:'}</div>
              <div class="price-val-row">
                <span class="price-card-sale">${product.pricing.sale}</span>
                ${product.pricing.discount ? `<span class="price-card-discount">${product.pricing.discount}</span>` : ''}
              </div>
              ${product.pricing.listed && product.pricing.listed !== product.pricing.sale ? `
                <div class="price-card-listed">Giá gốc: <del>${product.pricing.listed}</del></div>
              ` : `
                <div class="price-card-listed">Chính sách: <strong>${product.pricing.discount === 'Giá cố định' ? 'Giá cố định không giảm' : 'Giá chuẩn chính hãng'}</strong></div>
              `}
            </div>
          </div>

          <div class="price-card-unit">Quy cách: <strong>${product.pricing.unit || product.packaging}</strong></div>

          ${product.pricing.offer ? `
            <div class="price-card-offer">
              <div class="offer-badge-title">🎁 Chính Sách Khuyến Mãi:</div>
              <div class="offer-badge-desc">${product.pricing.offer}</div>
            </div>
          ` : ''}

          <div class="price-guarantee-footer">
            <div class="guarantee-item"><span>✓</span> ${product.id === 'unic-xanh' ? 'Freeship khi mua từ 3 chai' : 'Freeship toàn quốc'}</div>
            <div class="guarantee-item"><span>✓</span> Khui thùng kiểm tra trước khi nhận</div>
            <div class="guarantee-item"><span>✓</span> Đổi trả 1-1 nếu móp méo / rách niêm phong</div>
            <div class="guarantee-item"><span>✓</span> Kỹ sư Nông nghiệp tư vấn 24/7 (039.899.2419)</div>
          </div>
        </div>
      `;
    }

    productCardContainer.innerHTML = `
      <div class="product-cards-container ${product.theme}">
        <!-- CARD 1: HERO & 6 THÔNG SỐ (PHẦN GIỚI THIỆU + ĐỊNH MỨC NGOÀI RUỘNG) -->
        <article class="product-card prod-hero-card ${product.theme}">
          <div class="prod-hero-split">
            <!-- Cột Trái: Ảnh Sản Phẩm & Bảng Giá Cân Đối -->
            <div class="prod-visual-col">
              <div class="prod-image-frame">
                ${product.image ? `
                  <img src="${product.image}" alt="${product.fullName}" class="prod-real-img" loading="lazy">
                ` : `
                  <div class="prod-no-img">
                    <span class="prod-fallback-icon">${product.badgeIcon}</span>
                    <span class="prod-fallback-label">${product.tabName}</span>
                  </div>
                `}
              </div>

              ${pricingHtml}
            </div>

            <!-- Cột Phải: Thông Tin Chi Tiết, 6 Chỉ Tiêu & ĐƯA ĐỊNH MỨC/CHÍNH SÁCH VÀO KHOẢNG TRẮNG CÂN ĐỐI -->
            <div class="prod-info-col">
              <div class="prod-meta-tags">
                <span class="tag-badge ${tagThemeClass}">${product.badgeIcon} ${product.tag}</span>
                <span class="tag-badge tag-secondary">Mã: ${product.code}</span>
                <span class="tag-badge tag-secondary">Quy cách: ${product.packaging}</span>
                <span class="tag-badge tag-gold">Hồ sơ Cục BVTV: ${product.registeredName}</span>
              </div>

              <h2 class="prod-title">${product.fullName}</h2>
              <p class="prod-desc">${product.shortDesc}</p>
              
              <div class="prod-origin-bar">
                <div><strong>Nguồn gốc:</strong> ${product.origin}</div>
                <div><strong>Phân phối:</strong> ${product.distributor}</div>
              </div>

              <!-- 6 Chỉ Tiêu & Thành Phần Hoạt Chất (2 Cột x 3 Hàng Chuẩn Đẹp) -->
              <div class="specs-full-section">
                <h3 class="block-title ${titleColorClass}">
                  <span>🔬</span>
                  <span>Chỉ Tiêu & Thành Phần Hoạt Chất</span>
                </h3>
                <div class="specs-grid">
                  ${specsHtml}
                </div>
              </div>

              <!-- ĐƯA THÔNG TIN ĐỊNH MỨC VÀ CHÍNH SÁCH VÀO KHOẢNG TRẮNG CỘT PHẢI ĐỂ GỌN VÀ CÂN ĐỐI -->
              <div class="specs-usage-policy-row ${priceThemeClass}">
                ${product.pricing && product.pricing.usageRate ? `
                  <div class="info-usage-item">
                    <span class="info-icon">🚜</span>
                    <span><strong>Định mức:</strong> ${product.pricing.usageRate}</span>
                  </div>
                ` : ''}
                ${product.pricing && product.pricing.policyNote ? `
                  <div class="info-policy-item">
                    <span class="info-icon">💡</span>
                    <span>${product.pricing.policyNote}</span>
                  </div>
                ` : ''}
              </div>
            </div>
          </div>
        </article>

        <!-- CARD 2: CƠ CHẾ TÁC ĐỘNG NGOÀI RUỘNG (Card Riêng Biệt Như Ban Đầu) -->
        <article class="product-card mechanisms-full-section ${product.theme}">
          <h3 class="block-title ${titleColorClass}">
            <span>🌱</span>
            <span>2. Cơ Chế Tác Động Ngoài Ruộng</span>
          </h3>
          <div class="mechanisms-grid">
            ${mechanismsHtml}
          </div>
        </article>

        <!-- CARD 3: LIỀU LƯỢNG & LỊCH PHUN CHUẨN (Card Riêng Biệt Như Ban Đầu) -->
        <article class="product-card dosage-card ${product.theme}">
          <h3 class="block-title ${titleColorClass}">
            <span>🧪</span>
            <span>3. Hướng Dẫn & Liều Lượng Sử Dụng Chuẩn</span>
          </h3>
          ${dilutionRatesHtml}
          ${cropsHtml}
          
          <div class="mixing-protocol-box ${product.id === 'netto-plus' ? 'mixing-danger-alert' : ''}">
            <strong>⚠️ Nguyên tắc phối trộn & Phun Drone:</strong> ${product.dosage.mixingRule}
          </div>
        </article>

        <!-- CARD 4: SO SÁNH ĐỐI THỦ (Card Riêng Biệt Như Ban Đầu) -->
        <article class="product-card battlecard-box ${product.theme}">
          <h3 class="block-title ${titleColorClass}">
            <span>⚖️</span>
            <span>4. So Sánh Vượt Trội Với Sản Phẩm Cùng Loại</span>
          </h3>
          <div class="battlecard-grid">
            <div class="battle-col battle-competitor">
              <div class="battle-badge">⚠️ Đối thủ phổ thông: ${product.battlecard.competitor}</div>
              <p>${product.battlecard.weakness}</p>
            </div>
            <div class="battle-col battle-ours">
              <div class="battle-badge">⭐ Ưu thế vượt trội của ${product.tabName}:</div>
              <p>${product.battlecard.ourEdge}</p>
            </div>
          </div>
        </article>
      </div>
    `;
  };

  // Render Table with Dynamic Rowspan Merging (Pages 2, 3 & 4)
  const renderScriptTable = (container, scriptData, icon) => {
    if (!container || !scriptData) return;
    const notesHtml = scriptData.notes.map(n => `<li>${n}</li>`).join('');

    // Pre-calculate Rowspan for consecutive identical Step rows
    const processedRows = [];
    let i = 0;
    while (i < scriptData.rows.length) {
      const currentStep = scriptData.rows[i].step;
      let count = 1;
      while (i + count < scriptData.rows.length && scriptData.rows[i + count].step === currentStep) {
        count++;
      }
      for (let j = 0; j < count; j++) {
        processedRows.push({
          ...scriptData.rows[i + j],
          isFirstOfGroup: j === 0,
          rowSpan: count
        });
      }
      i += count;
    }

    const rowsHtml = processedRows.map(r => `
      <tr>
        ${r.isFirstOfGroup ? `
          <td class="col-step" rowspan="${r.rowSpan}">
            <div class="script-step-badge">${r.step.replace(/\n/g, "<br>")}</div>
          </td>
        ` : ''}
        <td class="col-stage">
          <div class="cell-content-block" style="font-weight: 700;">${r.stage.replace(/\n/g, '<br>')}</div>
        </td>
        <td class="col-guidance">
          <div class="cell-content-block">${r.guidance.replace(/\n/g, '<br>')}</div>
        </td>
        <td class="col-handling">
          <div class="cell-content-block">${r.handling.replace(/\n/g, '<br>')}</div>
        </td>
      </tr>
    `).join('');

    container.innerHTML = `
      <div class="script-container">
        <h2 class="script-header-title">
          <span>${icon}</span>
          <span>${scriptData.title}</span>
        </h2>

        <div class="script-notice-banner">
          <div class="notice-heading">
            <span>📌</span>
            <span>3 Lưu Ý Bắt Buộc Dành Cho Tư Vấn Viên:</span>
          </div>
          <ul class="notice-list">
            ${notesHtml}
          </ul>
        </div>

        <div class="script-table-wrapper">
          <table class="script-master-table">
            <thead>
              <tr>
                <th style="width: 110px; text-align: center;">Bước Kịch Bản</th>
                <th style="width: 230px;">Tên Giai Đoạn & Tình Huống Ruộng</th>
                <th style="width: 500px;">Chỉ Dẫn Tư Vấn</th>
                <th style="width: 440px;">Hướng Dẫn Xử Lý Tình Huống</th>
              </tr>
            </thead>
            <tbody>
              ${rowsHtml}
            </tbody>
          </table>
        </div>
      </div>
    `;
  };

  // Render Page 2: Script VG

  const renderScriptVG = () => {

    renderScriptTable(pageScriptVG, AGRIZEN_DATA.scriptVG, '🌾');

  };

  // Render Page 3: Script PH

  const renderScriptPH = () => {

    renderScriptTable(pageScriptPH, AGRIZEN_DATA.scriptPH, '🧪');

  };

  // Render Page 4: Script Netto Plus (Master Table format exactly like Tab 2 & Tab 3)

  const renderScriptUpsell = () => {
    if (!pageScriptUpsell || !AGRIZEN_DATA.scriptUpsell) return;
    renderScriptTable(pageScriptUpsell, AGRIZEN_DATA.scriptUpsell, '🛡️');
  };

  // Render Page 4: Interactive Seasons & Growth Stages

  let activeRegionFilter = 'all';

  let activeStageId = 'stage-1';

  const renderScheduleRice = () => {
    if (!pageScheduleRice || !AGRIZEN_DATA.seasonsAndStages) return;
    const data = AGRIZEN_DATA.seasonsAndStages;

    // 1. Render Active Stage Detail (ĐƯA LÊN ĐẦU TRANG THEO YÊU CẦU)
    const activeStage = data.stagesSection.stages.find(st => st.id === activeStageId) || data.stagesSection.stages[0];
    const stepperNavHtml = data.stagesSection.stages.map(st => `
      <button class="step-btn ${st.id === activeStageId ? 'active' : ''}" data-stage="${st.id}">
        <div class="step-btn-num">${st.stepNum}</div>
        <div class="step-btn-title">${st.tabName}</div>
        <div class="step-btn-age">${st.ageTag}</div>
      </button>
    `).join('');

    const stageDetailHtml = `
      <div class="stage-detail-grid">
        <!-- Left: Nutrition & Prescription -->
        <div class="stage-info-column">
          <div>
            <span class="stage-age-pill">⏱️ Tuổi lúa: ${activeStage.ageTag}</span>
            <h3 class="stage-main-title">${activeStage.title}</h3>
          </div>

          <div class="stage-block-box">
            <div class="stage-block-label">
              <span>🎯</span>
              <span>Mục Tiêu Năng Suất Thu Hoạch:</span>
            </div>
            <div class="stage-block-text">${activeStage.yieldGoal}</div>
          </div>

          <div class="stage-block-box">
            <div class="stage-block-label">
              <span>🌾</span>
              <span>Nhu Cầu Dinh Dưỡng Cần Thiết:</span>
            </div>
            <div class="stage-block-text">${activeStage.nutrientNeed}</div>
          </div>

          <div class="stage-block-box box-prescription">
            <div class="stage-block-label" style="color: var(--brand-900);">
              <span>🧰</span>
              <span>Liều Phun:</span>
            </div>
            <div class="stage-block-text" style="font-weight: 600;">${activeStage.prescription}</div>
          </div>

          <div class="stage-block-box box-pests" style="background: rgba(239, 68, 68, 0.05); border-left: 4px solid #ef4444;">
            <div class="stage-block-label" style="color: #b91c1c;">
              <span>🐛</span>
              <span>Các Dịch Bệnh & Sâu Hại Hay Gặp Ở Giai Đoạn Này:</span>
            </div>
            <div class="stage-block-text" style="color: #7f1d1d; font-weight: 600;">${activeStage.pestsDiseases ? activeStage.pestsDiseases.replace(/\n/g, '<br>') : ''}</div>
          </div>
        </div>

        <!-- Right: Photographic Image Asset -->
        <div class="stage-image-column">
          <img src="${activeStage.image}" alt="${activeStage.title}" loading="lazy" />
          <div class="stage-image-caption">🌱 Minh Họa: ${activeStage.title} - Ruộng Lúa Chuẩn Năng Suất</div>
        </div>
      </div>
    `;

    // 2. Render Region Cards based on active filter (KÈM SÂU BỆNH THEO MÙA VỤ)
    const filteredRegions = activeRegionFilter === 'all'
      ? data.seasonsSection.regions
      : data.seasonsSection.regions.filter(r => r.id === activeRegionFilter);

    const regionsHtml = filteredRegions.map(reg => `
      <div class="region-card">
        <div class="region-header">
          <div class="region-name">
            <span>${reg.icon}</span>
            <span>${reg.name}</span>
          </div>
          <span class="region-badge">${reg.badge}</span>
        </div>
        <div class="season-list">
          ${reg.seasons.map(s => `
            <div class="season-item">
              <div class="season-title-row">
                <span class="season-pill">${s.name}</span>
                <span style="font-size: 12px; color: var(--text-muted); font-weight: 600;">${s.tag}</span>
              </div>
              <div class="season-climate"><strong>Thời tiết:</strong> ${s.climate}</div>
              <div class="season-nutrient"><strong>🌾 Trọng tâm Dinh dưỡng:</strong> ${s.nutrientNeed}</div>
              ${s.pests ? `
                <div class="season-pests" style="margin-top: 7px; font-size: 13px; line-height: 1.45; color: #991b1b; background: rgba(239, 68, 68, 0.05); padding: 7px 10px; border-radius: 6px; border: 1px dashed rgba(239, 68, 68, 0.25);">
                  <strong>🐛 Sâu bệnh & Dịch hại hay gặp:</strong> ${s.pests}
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');

    // 3. Render Nutrition Classification & Feeding Steps
    const nutriCardsHtml = data.nutritionSection.classifications.map(c => `
      <div class="nutri-box">
        <div class="nutri-box-icon">${c.icon}</div>
        <div class="nutri-box-title">${c.title}</div>
        <div class="nutri-box-desc">${c.desc}</div>
      </div>
    `).join('');

    const feedingStepsHtml = data.nutritionSection.feedingSteps.map(f => `
      <div class="feeding-step-row">
        <div class="step-tag-dark">${f.step}</div>
        <div class="step-info-text">
          <strong>${f.title}</strong>
          <p>${f.desc}</p>
        </div>
      </div>
    `).join('');

    pageScheduleRice.innerHTML = `
      <div class="page4-container">
        <!-- SECTION 1 (LÊN ĐẦU TRANG): 5 GIAI ĐOẠN SINH TRƯỞNG & QUY TRÌNH DINH DƯỠNG -->
        <section class="stages-stepper-container">
          <div class="section-hero-header">
            <h2>${data.stagesSection.title}</h2>
            <p>${data.stagesSection.subtitle}</p>
          </div>

          <!-- Stepper Navigation -->
          <div class="stepper-nav">
            ${stepperNavHtml}
          </div>

          <!-- Stage Detail View -->
          <div id="stage-detail-container">
            ${stageDetailHtml}
          </div>
        </section>

        <!-- SECTION 2: LỊCH VỤ MÙA LÚA 3 MIỀN TRONG NĂM -->
        <section class="stages-stepper-container">
          <div class="section-hero-header">
            <h2>${data.seasonsSection.title}</h2>
            <p>${data.seasonsSection.subtitle}</p>
          </div>

          <div class="region-filter-bar">
            <button class="filter-btn ${activeRegionFilter === 'all' ? 'active' : ''}" data-region="all">Tất Cả Các Miền</button>
            <button class="filter-btn ${activeRegionFilter === 'bac' ? 'active' : ''}" data-region="bac">Miền Bắc</button>
            <button class="filter-btn ${activeRegionFilter === 'trung' ? 'active' : ''}" data-region="trung">Miền Trung</button>
            <button class="filter-btn ${activeRegionFilter === 'nam' ? 'active' : ''}" data-region="nam">Miền Nam</button>
          </div>

          <div class="regions-grid">
            ${regionsHtml}
          </div>
        </section>

        <!-- SECTION 3: QUY TRÌNH DINH DƯỠNG & 5 ĐỢT BÓN PHÂN -->
        <section class="nutrition-grid-wrapper">
          <div class="nutrition-card-panel">
            <h3 class="panel-header-title">Phân Loại Dinh Dưỡng Lúa</h3>
            <div class="nutrition-class-cards">
              ${nutriCardsHtml}
            </div>
          </div>
          <div class="nutrition-card-panel">
            <h3 class="panel-header-title">5 Đợt Bón Phân & Dưỡng Lúa Chuẩn</h3>
            <div class="feeding-steps-list">
              ${feedingStepsHtml}
            </div>
          </div>
        </section>
      </div>
    `;

    // Bind Region Filter Buttons
    pageScheduleRice.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const region = e.currentTarget.getAttribute('data-region');
        if (region) {
          activeRegionFilter = region;
          renderScheduleRice();
        }
      });
    });

    // Bind Stepper Buttons
    pageScheduleRice.querySelectorAll('.step-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const stId = e.currentTarget.getAttribute('data-stage');
        if (stId) {
          activeStageId = stId;
          renderScheduleRice();
        }
      });
    });
  };

  // Render Page 5: Alkaline Deep Dive & 4 Crops Dosage Schedule
// Render Page 5: Alkaline Deep Dive & 4 Crops Dosage Schedule

  let activeAlkalineSubTab = 'all';

  const renderAlkalineDeep = () => {
    if (!pageAlkalineDeep || !AGRIZEN_DATA.alkalineDeep) return;

    const data = AGRIZEN_DATA.alkalineDeep;

    // 0. Part II: 6 Cơ Chế Hoạt Động
    const p2 = data.part2_mechanisms;
    const p2MechanismsHtml = p2.mechanisms.map(m => `
      <div class="mech-item">
        <h4>${m.title}</h4>
        <p>${m.desc}</p>
      </div>
    `).join('');

    // 1. Part III: Các Điểm Mạnh Vượt Trội
    const p3 = data.part3_strengths;
    const p3RowsHtml = p3.rows.map(r => `
      <tr>
        <td class="col-indicator">${r.indicator}</td>
        <td class="col-content">${r.content}</td>
        <td class="col-action">${r.action}</td>
      </tr>
    `).join('');

    // 2. Part IV: Giải Thích Chuyên Sâu Bản Chất Kiềm Sinh Học
    const p4 = data.part4_deep_dive;
    const p4RowsHtml = p4.rows.map(r => `
      <tr>
        <td class="col-indicator">${r.concept}</td>
        <td class="col-content">${r.content}</td>
        <td class="col-action">${r.action}</td>
      </tr>
    `).join('');

    // 3. Part V: Bảng So Sánh Cách Làm Cũ Dùng Vôi Đá Với Cách Làm Mới Biochar Mỹ (Hữu Cơ pH 14)
    const p5 = data.part5_comparisons;
    const comparisonsRowsHtml = (p5 && p5.rows ? p5.rows : []).map(c => `
      <tr>
        <td class="col-crop-group" style="vertical-align: top; padding: 14px 16px;">
          <div style="font-weight: 800; font-size: 15px; color: var(--brand-950); margin-bottom: 6px;">${c.group}</div>
          <div style="font-size: 12.5px; color: var(--text-muted); line-height: 1.5;">${c.detail.replace(/\n/g, '<br>')}</div>
        </td>
        <td class="col-old-way" style="vertical-align: top; padding: 14px 16px; background-color: #fffaf0;">
          <div style="font-size: 13.5px; color: #78350f; font-weight: 600; line-height: 1.55; margin-bottom: 8px;">${c.oldWay.replace(/\n/g, '<br>')}</div>
          <div style="background: #fee2e2; border-left: 3px solid #dc2626; padding: 8px 12px; border-radius: 4px; font-size: 12.5px; color: #991b1b; line-height: 1.5;">
            <strong>⚠️ Hệ lụy thực tế:</strong><br>${c.oldHarm.replace(/\n/g, '<br>')}
          </div>
        </td>
        <td class="col-new-way" style="vertical-align: top; padding: 14px 16px; background-color: #f0fdf4;">
          <div style="font-size: 13.5px; color: #14532d; font-weight: 600; line-height: 1.55; margin-bottom: 8px;">${c.newWay.replace(/\n/g, '<br>')}</div>
          <div style="background: #dcfce7; border-left: 3px solid #16a34a; padding: 8px 12px; border-radius: 4px; font-size: 12.5px; color: #166534; line-height: 1.5;">
            <strong>🌾 Kết quả thu về:</strong><br>${c.newResult.replace(/\n/g, '<br>')}
          </div>
        </td>
      </tr>
    `).join('');

    pageAlkalineDeep.innerHTML = `
      <div class="deep-dive-container">
        <!-- SUB-TABS NAVIGATION BAR -->
        <div class="region-filter-bar" style="margin-bottom: 8px;">
          <button class="filter-btn ${activeAlkalineSubTab === 'all' ? 'active' : ''}" data-subtab="all">Tất Cả Các Mục</button>
          <button class="filter-btn ${activeAlkalineSubTab === 'mechanisms' ? 'active' : ''}" data-subtab="mechanisms">⚡ Cơ Chế Hoạt Động</button>
          <button class="filter-btn ${activeAlkalineSubTab === 'strengths' ? 'active' : ''}" data-subtab="strengths">🔬 Điểm Mạnh & Biochar Mỹ</button>
          <button class="filter-btn ${activeAlkalineSubTab === 'deepdive' ? 'active' : ''}" data-subtab="deepdive">🧪 Bản Chất Kiềm Sinh Học</button>
          <button class="filter-btn ${activeAlkalineSubTab === 'comparisons' ? 'active' : ''}" data-subtab="comparisons">⚖️ So Sánh Vôi Đá vs Biochar Mỹ</button>
        </div>

        <!-- BLOCK 0: II. CƠ CHẾ HOẠT ĐỘNG CỦA KIỀM SINH HỌC BIOCHAR -->
        <section class="deep-panel" id="sec-mechanisms" style="display: ${activeAlkalineSubTab === 'all' || activeAlkalineSubTab === 'mechanisms' ? 'block' : 'none'};">
          <div class="panel-header">
            <h3 class="panel-title">${p2.title}</h3>
            <p style="font-size: 13.5px; color: var(--text-muted); margin-top: 4px;">${p2.desc}</p>
          </div>
          <div class="mechanisms-grid">
            ${p2MechanismsHtml}
          </div>
        </section>

        <!-- BLOCK 1: III. CÁC ĐIỂM MẠNH VƯỢT TRỘI -->
        <section class="deep-panel" id="sec-strengths" style="display: ${activeAlkalineSubTab === 'all' || activeAlkalineSubTab === 'strengths' ? 'block' : 'none'};">
          <div class="panel-header">
            <h3 class="panel-title">${p3.title}</h3>
          </div>
          <div class="deep-table-wrapper">
            <table class="deep-master-table" style="min-width: 800px;">
              <thead>
                <tr>
                  <th style="width: 240px;">Tiêu Chí & Chỉ Số</th>
                  <th style="width: 210px;">Nội Dung Kỹ Thuật Đã Kiểm Chứng</th>
                  <th>Hành Động Khuyên Dùng</th>
                </tr>
              </thead>
              <tbody>
                ${p3RowsHtml}
              </tbody>
            </table>
          </div>
        </section>

        <!-- BLOCK 2: IV. GIẢI THÍCH CHUYÊN SÂU BẢN CHẤT KIỀM SINH HỌC -->
        <section class="deep-panel" id="sec-deepdive" style="display: ${activeAlkalineSubTab === 'all' || activeAlkalineSubTab === 'deepdive' ? 'block' : 'none'};">
          <div class="panel-header">
            <h3 class="panel-title">${p4.title}</h3>
          </div>
          <div class="deep-table-wrapper">
            <table class="deep-master-table" style="min-width: 820px;">
              <thead>
                <tr>
                  <th style="width: 220px;">Khái Niệm Khoa Học</th>
                  <th style="width: 270px;">Giải Thích Thực Địa</th>
                  <th>Khuyến Cáo Nông Nghiệp</th>
                </tr>
              </thead>
              <tbody>
                ${p4RowsHtml}
              </tbody>
            </table>
          </div>
        </section>

        <!-- BLOCK 3: V. BẢNG SO SÁNH CÁCH LÀM CŨ DÙNG VÔI ĐÁ VỚI CÁCH LÀM MỚI BIOCHAR MỸ -->
        ${p5 ? `
          <section class="deep-panel" id="sec-comparisons" style="display: ${activeAlkalineSubTab === 'all' || activeAlkalineSubTab === 'comparisons' ? 'block' : 'none'};">
            <div class="panel-header">
              <h3 class="panel-title">${p5.title}</h3>
              <p style="font-size: 13.5px; color: var(--text-muted); margin-top: 4px;">${p5.subtitle}</p>
            </div>
            <div class="deep-table-wrapper" style="overflow-x: auto;">
              <table class="deep-master-table" style="min-width: 900px;">
                <thead>
                  <tr>
                    <th style="width: 250px;">Nhóm Cây Trồng & Đặc Thù Vùng Đất</th>
                    <th style="width: 440px;">Cách Làm Cũ (Vái Rải Vôi Nung) & Tác Hại</th>
                    <th style="width: 480px;">Cách Làm Mới (Kiềm Biochar Mỹ pH 14) & Hiệu Quả</th>
                  </tr>
                </thead>
                <tbody>
                  ${comparisonsRowsHtml}
                </tbody>
              </table>
            </div>
          </section>
        ` : ''}
      </div>
    `;

    // Bind SubTab Filter Buttons
    pageAlkalineDeep.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const sub = e.currentTarget.getAttribute('data-subtab');
        if (sub) {
          activeAlkalineSubTab = sub;
          renderAlkalineDeep();
        }
      });
    });
  };

  // Render Page 6: Rice Dictionary & Pest Library (Khám Phá Sâu Bệnh & Nấm Khuẩn)
  let activeRiceDictTab = 'terms'; // 'terms' | 'stages' | 'pests'
  let activeRiceDictRegion = 'all';
  let riceDictSearchQuery = '';

  // Modal open/close handlers
  window.openPestModal = function(pestId) {
    openDetailModal('pest', pestId);
  };

  openDetailModal = function(type, id) {
    const modalOverlay = document.getElementById('pest-modal-overlay');
    const modalBody = document.getElementById('pest-modal-body');
    if (!modalOverlay || !modalBody) return;

    let title = '';
    let subtitle = '';
    let badgeText = '';
    let image = 'assets/images/stage1.jpg';
    let box1Title = '';
    let box1Content = '';
    let box2Title = '';
    let box2Content = '';
    let box3Title = '';
    let box3Content = '';

    // ==========================================
    // TYPE 1: PESTS (SÂU BỆNH HẠI LÚA & CÂY TRỒNG)
    // ==========================================
    if (type === 'pest') {
      let pest = null;
      if (AGRIZEN_DATA.pestsData) {
        pest = AGRIZEN_DATA.pestsData.find(p => p.id === id);
      }
      if (!pest && AGRIZEN_DATA.cropDictionary && AGRIZEN_DATA.cropDictionary.cropPests) {
        pest = AGRIZEN_DATA.cropDictionary.cropPests.find(p => p.id === id);
      }
      if (!pest) return;

      const symptomsBullets = Array.isArray(pest.symptoms) ? pest.symptoms.map(s => `
        <li>
          <i class="fa-solid fa-circle-minus"></i>
          <div>${s}</div>
        </li>
      `).join('') : `<li><i class="fa-solid fa-circle-minus"></i><div>${pest.symptoms}</div></li>`;

      const solutionText = pest.activeIngredients || pest.solution || '';
      const stageOrCropText = pest.targetCrops ? 
        `<div class="modal-alias" style="margin-bottom: 4px;"><i class="fa-solid fa-tree"></i> Cây hại: <strong>${pest.targetCrops}</strong></div><div class="modal-alias"><i class="fa-solid fa-clock"></i> Giai đoạn: ${pest.harmStage || ''}</div>` : 
        `<div class="modal-alias"><i class="fa-solid fa-clock"></i> Gây hại: ${pest.stageTarget || ''}</div>`;

      modalBody.innerHTML = `
        <div class="modal-grid">
          <div class="modal-info-side">
            <h2>${pest.name}</h2>
            ${pest.scientificName ? `<div style="font-style: italic; color: #64748b; font-size: 0.95rem; margin-top: -6px; margin-bottom: 10px;">${pest.scientificName}</div>` : ''}
            ${stageOrCropText}
            
            <div class="modal-desc-box">
              <h4 style="color: #ef4444;"><i class="fa-solid fa-circle-exclamation"></i> Triệu Chứng Điển Hình:</h4>
              <ul class="modal-symptoms-list">${symptomsBullets}</ul>
            </div>
            
            <div class="modal-desc-box">
              <h4 style="color: #70ad47;"><i class="fa-solid fa-shield-halved"></i> Biện Pháp Phòng Ngừa Kỹ Thuật:</h4>
              <p style="font-size: 0.95rem; line-height: 1.6; color: #374151; margin: 0;">${pest.prevention}</p>
            </div>
          </div>

          <div class="modal-visual-side">
            <div class="modal-visual-container">
              <img class="modal-packshot" src="${pest.image}" alt="${pest.name}" onerror="this.src='assets/images/stage1.jpg';">
            </div>
            
            <div class="modal-desc-box" style="width: 100%; border-top: 1px solid rgba(0,0,0,0.08); padding-top: 1.2rem; margin-top: 0.5rem;">
              <h4 style="color: #16a34a;"><i class="fa-solid fa-kit-medical"></i> Giải Pháp Hoạt Chất Đặc Trị Khoa Học:</h4>
              <div class="modal-solution-box" style="background: #f0fdf4; border-left: 3px solid #16a34a; padding: 12px 14px; border-radius: 6px;">
                <p style="margin: 0; line-height: 1.6; font-size: 0.92rem; color: #14532d;"><strong>${solutionText}</strong></p>
              </div>
              <button type="button" class="pest-card-btn" style="margin-top: 15px; width: 100%;" onclick="closePestModal()">
                <i class="fa-solid fa-check"></i> Đã Hiểu Phác Đồ Kỹ Thuật
              </button>
            </div>
          </div>
        </div>
      `;

      modalOverlay.style.display = 'flex';
      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      return;
    }

    // ==========================================
    // TYPE 2: TERMS (THUẬT NGỮ ĐỒNG RUỘNG 3 MIỀN)
    // ==========================================
    if (type === 'term') {
      const t = (AGRIZEN_DATA.riceDictionary.terms || []).find(item => item.id == id);
      if (!t) return;
      title = `📖 ${t.id}. ${t.term}`;
      subtitle = `Thuật ngữ đồng ruộng vùng: ${t.region}`;
      badgeText = `<i class="fa-solid fa-location-dot"></i> Vùng: ${t.region}`;
      image = t.image || (t.id % 6 === 1 ? 'assets/images/stage1.jpg' : t.id % 6 === 2 ? 'assets/images/stage2.jpg' : t.id % 6 === 3 ? 'assets/images/stage3.jpg' : t.id % 6 === 4 ? 'assets/images/stage4.jpg' : t.id % 6 === 5 ? 'assets/images/stage5.jpg' : 'assets/images/stage6.jpg');

      box1Title = 'Ý Nghĩa Khoa Học & Cơ Chế Sinh Lý:';
      box1Content = `<p style="margin: 0; line-height: 1.6; font-size: 0.95rem; color: #1e293b;">${t.meaning}</p>`;

      box2Title = 'Dấu Hiệu Nhận Biết Ngoài Ruộng Thực Địa:';
      box2Content = `<p style="margin: 0; line-height: 1.6; font-size: 0.95rem; color: #92400e;">${t.sign}</p>`;

      box3Title = 'Mẫu Câu Kỹ Sư / Telesales Tư Vấn Chuẩn Nhà Nông:';
      box3Content = `<div style="background: #fefce8; border-left: 3px solid #ca8a04; padding: 12px 14px; border-radius: 6px; font-style: italic; color: #713f12; line-height: 1.6;">"${t.sampleCall}"</div>`;
    }

    // ==========================================
    // TYPE 3: STAGES (6 GIAI ĐOẠN LÚA)
    // ==========================================
    else if (type === 'stage') {
      const st = (AGRIZEN_DATA.riceGrowthStages || []).find(item => item.id === id);
      if (!st) return;
      title = `🌾 ${st.name}`;
      subtitle = `Tên gọi dân gian ĐBSCL: ${st.folkNames}`;
      badgeText = `<i class="fa-solid fa-clock"></i> Thời gian: ${st.days}`;
      image = st.image || 'assets/images/stage1.jpg';

      box1Title = 'Dấu Hiệu Thực Địa Ngoài Ruộng:';
      box1Content = `<p style="margin: 0; line-height: 1.6; font-size: 0.95rem; color: #1e293b;">${st.signs}</p>`;

      box2Title = 'Trọng Tâm Dinh Dưỡng:';
      box2Content = `<div style="background: #eff6ff; border-left: 3px solid #2563eb; padding: 12px 14px; border-radius: 6px; font-size: 0.92rem; color: #1e40af; line-height: 1.6;"><strong>${st.nutrient}</strong></div>`;

      box3Title = 'Mẫu Câu Kỹ Sư Tư Vấn Ngoài Ruộng:';
      box3Content = `<div style="background: #fcf8e3; border-left: 3px solid #ca8a04; padding: 12px 14px; border-radius: 6px; font-style: italic; color: #533f03; line-height: 1.6;">"${st.adviceCall}"</div>`;
    }

    // ==========================================
    // TYPE 4: SOIL (BỆNH THỔ NHƯỠNG & RỄ CÂY TRỒNG)
    // ==========================================
    else if (type === 'soil') {
      const t = (AGRIZEN_DATA.cropDictionary.soilDisorders || []).find(item => item.id === id);
      if (!t) return;
      title = `⚠️ ${t.stt}. ${t.name}`;
      subtitle = `Ảnh hưởng trên cây: ${t.crops}`;
      badgeText = `<i class="fa-solid fa-tree"></i> Cây hại: ${t.crops}`;
      image = t.image || 'assets/images/stage1.jpg';

      box1Title = 'Nguyên Nhân Sinh Lý:';
      box1Content = `<p style="margin: 0; line-height: 1.6; font-size: 0.95rem; color: #1e293b;">${t.cause}</p>`;

      box2Title = 'Triệu Chứng Thực Tế:';
      box2Content = `<p style="margin: 0; line-height: 1.6; font-size: 0.95rem; color: #9a3412;">${t.symptoms}</p>`;

      box3Title = 'Giải Pháp Kỹ Thuật (HỮU CƠ pH 14 & Vi Sinh):';
      box3Content = `<div style="background: #f0fdf4; border-left: 3px solid #16a34a; padding: 12px 14px; border-radius: 6px; line-height: 1.6; font-size: 0.92rem; color: #14532d;"><strong>${t.solution}</strong></div>`;
    }

    // ==========================================
    // TYPE 5: NUTRIENT (THIẾU HỤT DINH DƯỠNG)
    // ==========================================
    else if (type === 'nutrient') {
      const n = (AGRIZEN_DATA.cropDictionary.nutrientDeficiencies || []).find(item => item.id === id);
      if (!n) return;
      title = `🧪 ${n.stt}. Thiếu Hụt ${n.name} (${n.symbol})`;
      subtitle = `Vai trò sinh lý: ${n.role}`;
      badgeText = `<i class="fa-solid fa-flask"></i> Nguyên tố: ${n.symbol}`;
      image = n.image || 'assets/images/stage2.jpg';

      box1Title = 'Vai Trò Sinh Lý Trong Cây:';
      box1Content = `<p style="margin: 0; line-height: 1.6; font-size: 0.95rem; color: #1e293b;">${n.role}</p>`;

      box2Title = 'Triệu Chứng Thiếu Hụt Điển Hình:';
      box2Content = `<p style="margin: 0; line-height: 1.6; font-size: 0.95rem; color: #9a3412;">${n.symptoms}</p>`;

      box3Title = 'Giải Pháp Kỹ Thuật Bổ Sung (Mix Combi / ZAKi):';
      box3Content = `<div style="background: #f0fdf4; border-left: 3px solid #16a34a; padding: 12px 14px; border-radius: 6px; line-height: 1.6; font-size: 0.92rem; color: #14532d;"><strong>${n.solution}</strong></div>`;
    }

    // ==========================================
    // TYPE 6: VARIETY (GIỐNG LÚA)
    // ==========================================
    else if (type === 'variety') {
      const v = (AGRIZEN_DATA.riceVarieties.varieties || []).find(item => item.id === id);
      if (!v) return;
      title = `🌾 Giống Lúa ${v.name}`;
      subtitle = `Phân nhóm: ${v.badge} | Khu vực: ${v.region}`;
      badgeText = `<i class="fa-solid fa-clock"></i> Tổng ngày: ${v.duration}`;
      image = 'assets/images/stage4.jpg';

      box1Title = 'Thông Số Kinh Tế & Năng Suất:';
      box1Content = `
        <div class="dict-specs-grid" style="margin: 0;">
          <div class="dict-spec-item"><strong>⏱️ Tổng ngày:</strong> ${v.duration}</div>
          <div class="dict-spec-item"><strong>💰 Giá lúa tươi:</strong> ${v.price}</div>
          <div class="dict-spec-item"><strong>🌾 Năng suất:</strong> ${v.yield}</div>
          <div class="dict-spec-item"><strong>💵 Doanh thu:</strong> ${v.revenue}</div>
        </div>
      `;

      box2Title = 'Chi Tiết 4 Giai Đoạn Sinh Trưởng:';
      box2Content = `
        <ul class="dict-stages-list" style="margin: 0; padding-left: 0; list-style: none; display: flex; flex-direction: column; gap: 5px; font-size: 0.92rem; color: #334155;">
          <li>• <strong>Đẻ nhánh:</strong> ${v.stages.tillering}</li>
          <li>• <strong>Làm đòng:</strong> ${v.stages.panicle}</li>
          <li>• <strong>Trổ - Cong me:</strong> ${v.stages.heading}</li>
          <li>• <strong>Chín - Gặt:</strong> ${v.stages.ripening}</li>
        </ul>
      `;

      const pestsList = (v.pestsAndDiseases || []).map(p => `<li style="display: flex; gap: 6px;"><span style="color: #ea580c;">●</span><span>${p}</span></li>`).join('');
      box3Title = 'Sâu Bệnh Đặc Trưng & Phác Đồ ZAKi Khuyến Nghị:';
      box3Content = `
        <div style="background: #fff7ed; border-left: 3px solid #ea580c; padding: 10px 12px; border-radius: 6px; font-size: 0.92rem; color: #7c2d12; margin-bottom: 8px;">
          <strong style="display: block; margin-bottom: 4px;">Điểm yếu cần phòng ngừa:</strong>
          <ul style="margin: 0; padding-left: 0; list-style: none; display: flex; flex-direction: column; gap: 4px;">${pestsList}</ul>
        </div>
        <div style="background: #f0fdf4; border-left: 3px solid #16a34a; padding: 10px 12px; border-radius: 6px; font-size: 0.92rem; color: #14532d;">
          <strong>Phác đồ ZAKi:</strong> Cữ làm đòng phun ZAKi Rước Đòng + Mix Combi; Cữ cong trái me phun Siêu Vô Gạo ZAKi + Luke để hạt sáng mẩy, nặng ký, chắc tới cậy.
        </div>
      `;
    }

    // Modal HTML layout
    modalBody.innerHTML = `
      <div class="modal-grid">
        <div class="modal-info-side">
          <h2>${title}</h2>
          <div style="font-size: 0.92rem; color: #64748b; margin-top: -6px; margin-bottom: 10px;">${subtitle}</div>
          <div class="modal-alias" style="margin-bottom: 12px;">${badgeText}</div>

          <div class="modal-desc-box">
            <h4 style="color: var(--brand-800);"><i class="fa-solid fa-circle-info"></i> ${box1Title}</h4>
            ${box1Content}
          </div>

          <div class="modal-desc-box">
            <h4 style="color: #ea580c;"><i class="fa-solid fa-triangle-exclamation"></i> ${box2Title}</h4>
            ${box2Content}
          </div>
        </div>

        <div class="modal-visual-side">
          <div class="modal-visual-container">
            <img class="modal-packshot" src="${image}" alt="${title}" onerror="this.src='assets/images/stage1.jpg';">
          </div>

          <div class="modal-desc-box" style="width: 100%; border-top: 1px solid rgba(0,0,0,0.08); padding-top: 1.2rem; margin-top: 0.5rem;">
            <h4 style="color: #16a34a;"><i class="fa-solid fa-kit-medical"></i> ${box3Title}</h4>
            ${box3Content}
            <button type="button" class="pest-card-btn" style="margin-top: 15px; width: 100%;" onclick="closePestModal()">
              <i class="fa-solid fa-check"></i> Đã Hiểu Thông Tin Kỹ Thuật
            </button>
          </div>
        </div>
      </div>
    `;

    modalOverlay.style.display = 'flex';
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closePestModal = function() {
    const modalOverlay = document.getElementById('pest-modal-overlay');
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      modalOverlay.style.display = 'none';
      document.body.style.overflow = '';
    }
  };
  window.closePestModal = closePestModal;

  // Bind modal closing listeners
  const modalOverlayElem = document.getElementById('pest-modal-overlay');
  const btnCloseModalElem = document.getElementById('btn-close-pest-modal');
  if (modalOverlayElem) {
    modalOverlayElem.addEventListener('click', (e) => {
      if (e.target === modalOverlayElem) closePestModal();
    });
  }
  if (btnCloseModalElem) {
    btnCloseModalElem.addEventListener('click', closePestModal);
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePestModal();
  });

  const renderRiceDict = () => {
    if (!pageRiceDict || !AGRIZEN_DATA.riceDictionary) return;

    const data = AGRIZEN_DATA.riceDictionary;
    const stagesList = AGRIZEN_DATA.riceGrowthStages || [];
    const pestsList = AGRIZEN_DATA.pestsData || [];
    const q = riceDictSearchQuery.toLowerCase().trim();

    // Top 3 Main Sub-Tabs Navigation
    const topTabsHtml = `
      <div class="dict-main-tabs">
        <button type="button" class="dict-main-tab-btn ${activeRiceDictTab === 'terms' ? 'active' : ''}" data-dict-tab="terms">
          📖 Thuật Ngữ 3 Miền (${data.terms.length})
        </button>
        <button type="button" class="dict-main-tab-btn ${activeRiceDictTab === 'stages' ? 'active' : ''}" data-dict-tab="stages">
          🌾 6 Giai Đoạn Lúa (${stagesList.length})
        </button>
        <button type="button" class="dict-main-tab-btn ${activeRiceDictTab === 'pests' ? 'active' : ''}" data-dict-tab="pests">
          🔬 24 Sâu Bệnh Hại (${pestsList.length})
        </button>
      </div>
    `;

    let subControlsHtml = '';
    let mainContentHtml = '';

    // ==========================================
    // TAB 1: THUẬT NGỮ ĐỒNG RUỘNG 3 MIỀN
    // ==========================================
    if (activeRiceDictTab === 'terms') {
      const categoryBtnsHtml = data.categories.map(cat => `
        <button class="filter-btn ${cat.id === activeRiceDictRegion ? 'active' : ''}" data-rice-region="${cat.id}">
          ${cat.name}
        </button>
      `).join('');

      subControlsHtml = `
        <div class="dict-controls-bar">
          <div class="search-input-box">
            <span class="search-icon">🔍</span>
            <input type="text" id="rice-dict-search-input" placeholder="Tìm nhanh thuật ngữ, tiếng lóng, đơn vị đo 3 miền..." value="${riceDictSearchQuery}" />
          </div>
          <div class="region-filter-bar" style="margin-bottom: 0; justify-content: flex-start;">
            ${categoryBtnsHtml}
          </div>
        </div>
      `;

      const filteredTerms = data.terms.filter(t => {
        const matchRegion = activeRiceDictRegion === 'all' ||
          (t.category && t.category === activeRiceDictRegion) ||
          (activeRiceDictRegion === 'nam' && t.region.includes('Nam')) ||
          (activeRiceDictRegion === 'bac' && t.region.includes('Bắc')) ||
          (activeRiceDictRegion === 'trung' && t.region.includes('Trung'));

        const matchQuery = !q ||
          t.term.toLowerCase().includes(q) ||
          t.meaning.toLowerCase().includes(q) ||
          t.sign.toLowerCase().includes(q) ||
          t.sampleCall.toLowerCase().includes(q) ||
          t.region.toLowerCase().includes(q);

        return matchRegion && matchQuery;
      });

      if (filteredTerms.length > 0) {
        mainContentHtml = `
          <div class="pests-grid">
            ${filteredTerms.map(t => {
              return `
                <div class="pest-card" style="display: flex; flex-direction: column;">
                  <div class="pest-header">
                    <span class="pest-icon-tag">📖</span>
                    <div style="flex: 1;">
                      <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;">
                        <h3 style="margin: 0; font-size: 16px; font-weight: 800; color: var(--brand-950);">${t.id}. ${t.term}</h3>
                        <span class="dict-badge" style="background-color: #f0fdf4; color: #166534; border: 1px solid #bbf7d0; font-size: 11px; white-space: nowrap; padding: 2px 7px;">${t.region}</span>
                      </div>
                      <span class="pest-badge-target" style="margin-top: 4px;"><i class="fa-solid fa-location-dot"></i> Thuật ngữ thực địa</span>
                    </div>
                  </div>
                  <div class="pest-body">
                    <div class="pest-symptoms">
                      <strong>Ý nghĩa & Nhận dạng:</strong>
                      <ul class="pest-symptoms-list">
                        <li>
                          <i class="fa-solid fa-circle-minus"></i>
                          <div><strong>Ý nghĩa:</strong> ${t.meaning.length > 95 ? t.meaning.substring(0, 90) + '...' : t.meaning}</div>
                        </li>
                        <li>
                          <i class="fa-solid fa-circle-minus"></i>
                          <div><strong>Dấu hiệu:</strong> ${t.sign.length > 95 ? t.sign.substring(0, 90) + '...' : t.sign}</div>
                        </li>
                      </ul>
                    </div>
                    <div class="pest-card-bottom">
                      <div class="pest-solution-badge">
                        <i class="fa-solid fa-phone"></i>
                        <div>Tư vấn: <strong>${t.sampleCall.substring(0, 45)}...</strong></div>
                      </div>
                      <button type="button" class="pest-card-btn" onclick="openDetailModal('term', ${t.id})">
                        <i class="fa-solid fa-magnifying-glass"></i> Khám Phá Chi Tiết
                      </button>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        `;
      } else {
        mainContentHtml = `
          <div style="text-align: center; padding: 40px; background: #ffffff; border-radius: var(--radius-md); color: var(--text-muted);">
            Không tìm thấy thuật ngữ phù hợp với từ khóa "${riceDictSearchQuery}".
          </div>
        `;
      }

    // ==========================================
    // TAB 2: 6 GIAI ĐOẠN SINH TRƯỞNG CỦA CÂY LÚA
    // ==========================================
    } else if (activeRiceDictTab === 'stages') {
      subControlsHtml = `
        <div class="dict-controls-bar">
          <div class="search-input-box">
            <span class="search-icon">🔍</span>
            <input type="text" id="rice-dict-search-input" placeholder="Tìm kiếm giai đoạn lúa (Mạ, Đẻ nhánh, Tim đèn, Trổ bông, Vô gạo, Chín vàng)..." value="${riceDictSearchQuery}" />
          </div>
        </div>
      `;

      const filteredStages = stagesList.filter(st => {
        if (!q) return true;
        return st.name.toLowerCase().includes(q) ||
          st.folkNames.toLowerCase().includes(q) ||
          st.days.toLowerCase().includes(q) ||
          st.signs.toLowerCase().includes(q) ||
          st.nutrient.toLowerCase().includes(q) ||
          st.adviceCall.toLowerCase().includes(q);
      });

      if (filteredStages.length > 0) {
        mainContentHtml = `
          <div class="pests-grid">
            ${filteredStages.map(st => `
              <div class="pest-card">
                <div class="pest-image-container">
                  <img src="${st.image}" alt="${st.name}" class="pest-card-img" onerror="this.src='assets/images/stage1.jpg';">
                </div>
                <div class="pest-header">
                  <span class="pest-icon-tag">🌾</span>
                  <div>
                    <h3>${st.name}</h3>
                    <span class="pest-badge-target"><i class="fa-solid fa-clock"></i> Thời gian: ${st.days}</span>
                  </div>
                </div>
                <div class="pest-body">
                  <div class="pest-symptoms">
                    <strong>Đặc điểm sinh lý & Dân gian:</strong>
                    <ul class="pest-symptoms-list">
                      <li>
                        <i class="fa-solid fa-circle-minus"></i>
                        <div><strong>Dân gian:</strong> ${st.folkNames}</div>
                      </li>
                      <li>
                        <i class="fa-solid fa-circle-minus"></i>
                        <div><strong>Dấu hiệu:</strong> ${st.signs.length > 95 ? st.signs.substring(0, 90) + '...' : st.signs}</div>
                      </li>
                    </ul>
                  </div>
                  <div class="pest-card-bottom">
                    <div class="pest-solution-badge">
                      <i class="fa-solid fa-flask"></i>
                      <div>Dinh dưỡng: <strong>${st.nutrient.substring(0, 45)}...</strong></div>
                    </div>
                    <button type="button" class="pest-card-btn" onclick="openDetailModal('stage', '${st.id}')">
                      <i class="fa-solid fa-magnifying-glass"></i> Khám Phá Chi Tiết
                    </button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        `;
      } else {
        mainContentHtml = `
          <div style="text-align: center; padding: 40px; background: #ffffff; border-radius: var(--radius-md); color: var(--text-muted);">
            Không tìm thấy giai đoạn lúa phù hợp với từ khóa "${riceDictSearchQuery}".
          </div>
        `;
      }

    // ==========================================
    // TAB 3: 24 SÂU BỆNH HẠI & RỐI LOẠN SINH LÝ
    // ==========================================
    } else if (activeRiceDictTab === 'pests') {
      subControlsHtml = `
        <div class="dict-controls-bar">
          <div class="search-input-box">
            <span class="search-icon">🔍</span>
            <input type="text" id="rice-dict-search-input" placeholder="Tìm kiếm sâu bệnh hại lúa (Sâu cuốn lá, Đạo ôn, Rầy nâu, Lem lép hạt...)" value="${riceDictSearchQuery}" />
          </div>
        </div>
      `;

      const filteredPests = pestsList.filter(p => {
        if (!q) return true;
        return p.name.toLowerCase().includes(q) ||
          p.scientificName.toLowerCase().includes(q) ||
          p.stageTarget.toLowerCase().includes(q) ||
          p.symptoms.some(s => s.toLowerCase().includes(q)) ||
          p.prevention.toLowerCase().includes(q) ||
          p.activeGroupShort.toLowerCase().includes(q);
      });

      if (filteredPests.length > 0) {
        mainContentHtml = `
          <div class="pests-grid">
            ${filteredPests.map(p => `
              <div class="pest-card">
                <div class="pest-image-container">
                  <img src="${p.image}" alt="${p.name}" class="pest-card-img" onerror="this.src='assets/images/stage1.jpg';">
                </div>
                <div class="pest-header">
                  <span class="pest-icon-tag">${p.icon}</span>
                  <div>
                    <h3>${p.stt}. ${p.name}</h3>
                    <span class="pest-badge-target"><i class="fa-solid fa-clock"></i> Gây hại: ${p.stageTarget}</span>
                  </div>
                </div>
                <div class="pest-body">
                  <div class="pest-symptoms">
                    <strong>Triệu chứng nhận dạng:</strong>
                    <ul class="pest-symptoms-list">
                      ${p.symptoms.map(s => `
                        <li>
                          <i class="fa-solid fa-circle-minus"></i>
                          <div>${s}</div>
                        </li>
                      `).join('')}
                    </ul>
                  </div>
                  <div class="pest-card-bottom">
                    <div class="pest-solution-badge">
                      <i class="fa-solid fa-prescription-bottle-medical"></i>
                      <div>Nhóm hoạt chất: <strong>${p.activeGroupShort}</strong></div>
                    </div>
                    <button type="button" class="pest-card-btn" onclick="openDetailModal('pest', '${p.id}')">
                      <i class="fa-solid fa-magnifying-glass"></i> Khám Phá Chi Tiết
                    </button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        `;
      } else {
        mainContentHtml = `
          <div style="text-align: center; padding: 40px; background: #ffffff; border-radius: var(--radius-md); color: var(--text-muted);">
            Không tìm thấy sâu bệnh hại phù hợp với từ khóa "${riceDictSearchQuery}".
          </div>
        `;
      }
    }

    pageRiceDict.innerHTML = `
      <div class="dict-container">
        ${topTabsHtml}
        ${subControlsHtml}
        ${mainContentHtml}
      </div>
    `;

    // Bind Main Sub-Tabs
    pageRiceDict.querySelectorAll('[data-dict-tab]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tab = e.currentTarget.getAttribute('data-dict-tab');
        if (tab && tab !== activeRiceDictTab) {
          activeRiceDictTab = tab;
          renderRiceDict();
        }
      });
    });

    // Bind Region Filters (Tab Terms)
    pageRiceDict.querySelectorAll('[data-rice-region]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const reg = e.currentTarget.getAttribute('data-rice-region');
        if (reg) {
          activeRiceDictRegion = reg;
          renderRiceDict();
        }
      });
    });

    // Bind Search Input
    const searchInput = document.getElementById('rice-dict-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        riceDictSearchQuery = e.target.value;
        renderRiceDict();
        const reInput = document.getElementById('rice-dict-search-input');
        if (reInput) {
          reInput.focus();
          reInput.setSelectionRange(reInput.value.length, reInput.value.length);
        }
      });
    }
  };

  // ==========================================
  // RENDER PAGE 8: TỪ ĐIỂN CÂY TRỒNG
  // ==========================================
  let activeCropDictSubTab = 'soil';
  let cropDictSearchQuery = '';

  const renderCropDict = () => {
    if (!pageCropDict || !AGRIZEN_DATA.cropDictionary) return;

    const data = AGRIZEN_DATA.cropDictionary;
    const q = cropDictSearchQuery.toLowerCase().trim();

    // 1. Sub-tabs bar HTML
    const subtabs = data.subtabs || [
      { id: 'soil', name: '🌿 1. Bệnh Thổ Nhưỡng & Rễ' },
      { id: 'nutrients', name: '🧪 2. Chẩn Đoán Thiếu Dinh Dưỡng' },
      { id: 'pests', name: '🐛 3. Thư Viện Sâu Bệnh Cây Trồng' }
    ];

    const subTabsHtml = subtabs.map(st => `
      <button class="filter-btn ${st.id === activeCropDictSubTab ? 'active' : ''}" data-crop-subtab="${st.id}">
        ${st.name}
      </button>
    `).join('');

    let cardsHtml = '';
    let sectionTitle = '';
    let resultCount = 0;

    // SECTION 1: SOIL DISORDERS (8 Mục)
    if (activeCropDictSubTab === 'soil') {
      const items = (data.soilDisorders || []).filter(t => {
        if (!q) return true;
        return t.name.toLowerCase().includes(q) ||
          t.crops.toLowerCase().includes(q) ||
          t.symptoms.toLowerCase().includes(q) ||
          t.cause.toLowerCase().includes(q) ||
          t.solution.toLowerCase().includes(q);
      });
      resultCount = items.length;
      sectionTitle = `⚠️ 8 Bệnh Lý Thổ Nhưỡng & Sức Khỏe Rễ (${resultCount} kết quả)`;

      cardsHtml = items.map(t => `
        <div class="pest-card">
          <div class="pest-image-container">
            <img src="${t.image}" alt="${t.name}" class="pest-card-img" onerror="this.src='assets/images/stage1.jpg';">
          </div>
          <div class="pest-header">
            <span class="pest-icon-tag">⚠️</span>
            <div>
              <h3>${t.stt}. ${t.name}</h3>
              <span class="pest-badge-target"><i class="fa-solid fa-tree"></i> Cây hại: ${t.crops}</span>
            </div>
          </div>
          <div class="pest-body">
            <div class="pest-symptoms">
              <strong>Triệu chứng & Nguyên nhân:</strong>
              <ul class="pest-symptoms-list">
                <li>
                  <i class="fa-solid fa-circle-minus"></i>
                  <div><strong>Nguyên nhân:</strong> ${t.cause.length > 90 ? t.cause.substring(0, 85) + '...' : t.cause}</div>
                </li>
                <li>
                  <i class="fa-solid fa-circle-minus"></i>
                  <div><strong>Triệu chứng:</strong> ${t.symptoms.length > 95 ? t.symptoms.substring(0, 90) + '...' : t.symptoms}</div>
                </li>
              </ul>
            </div>
            <div class="pest-card-bottom">
              <div class="pest-solution-badge">
                <i class="fa-solid fa-prescription-bottle-medical"></i>
                <div>Giải pháp: <strong>${t.solution.substring(0, 45)}...</strong></div>
              </div>
              <button type="button" class="pest-card-btn" onclick="openDetailModal('soil', '${t.id}')">
                <i class="fa-solid fa-magnifying-glass"></i> Khám Phá Chi Tiết
              </button>
            </div>
          </div>
        </div>
      `).join('');
    }

    // SECTION 2: NUTRIENT DEFICIENCIES (10 Mục)
    else if (activeCropDictSubTab === 'nutrients') {
      const items = (data.nutrientDeficiencies || []).filter(n => {
        if (!q) return true;
        return n.name.toLowerCase().includes(q) ||
          n.symbol.toLowerCase().includes(q) ||
          n.role.toLowerCase().includes(q) ||
          n.symptoms.toLowerCase().includes(q) ||
          n.solution.toLowerCase().includes(q);
      });
      resultCount = items.length;
      sectionTitle = `🧪 10 Hội Chứng Thiếu Hụt Dinh Dưỡng & Trung Vi Lượng (${resultCount} kết quả)`;

      cardsHtml = items.map(n => `
        <div class="pest-card">
          <div class="pest-image-container" style="position: relative;">
            <img src="${n.image}" alt="${n.name}" class="pest-card-img" onerror="this.src='assets/images/stage2.jpg';">
            <span style="position: absolute; top: 10px; left: 10px; background: rgba(14, 165, 233, 0.95); color: #ffffff; font-weight: 800; font-size: 13px; padding: 3px 8px; border-radius: 6px; box-shadow: 0 2px 5px rgba(0,0,0,0.2);">${n.symbol}</span>
          </div>
          <div class="pest-header">
            <span class="pest-icon-tag">🧪</span>
            <div>
              <h3>${n.stt}. Thiếu ${n.name}</h3>
              <span class="pest-badge-target"><i class="fa-solid fa-flask"></i> Ký hiệu: ${n.symbol}</span>
            </div>
          </div>
          <div class="pest-body">
            <div class="pest-symptoms">
              <strong>Vai trò & Triệu chứng thiếu:</strong>
              <ul class="pest-symptoms-list">
                <li>
                  <i class="fa-solid fa-circle-minus"></i>
                  <div><strong>Vai trò:</strong> ${n.role.length > 90 ? n.role.substring(0, 85) + '...' : n.role}</div>
                </li>
                <li>
                  <i class="fa-solid fa-circle-minus"></i>
                  <div><strong>Triệu chứng:</strong> ${n.symptoms.length > 95 ? n.symptoms.substring(0, 90) + '...' : n.symptoms}</div>
                </li>
              </ul>
            </div>
            <div class="pest-card-bottom">
              <div class="pest-solution-badge">
                <i class="fa-solid fa-prescription-bottle-medical"></i>
                <div>Bổ sung: <strong>${n.solution.substring(0, 45)}...</strong></div>
              </div>
              <button type="button" class="pest-card-btn" onclick="openDetailModal('nutrient', '${n.id}')">
                <i class="fa-solid fa-magnifying-glass"></i> Khám Phá Chi Tiết
              </button>
            </div>
          </div>
        </div>
      `).join('');
    }

    // SECTION 3: CROP PESTS (12 Mục)
    else if (activeCropDictSubTab === 'pests') {
      const items = (data.cropPests || []).filter(p => {
        if (!q) return true;
        return p.name.toLowerCase().includes(q) ||
          p.scientificName.toLowerCase().includes(q) ||
          p.targetCrops.toLowerCase().includes(q) ||
          p.harmStage.toLowerCase().includes(q) ||
          p.symptoms.some(s => s.toLowerCase().includes(q)) ||
          p.prevention.toLowerCase().includes(q) ||
          p.activeIngredients.toLowerCase().includes(q);
      });
      resultCount = items.length;
      sectionTitle = `🐛 12 Sâu Bệnh Hại Cây Trồng Phổ Biến (${resultCount} kết quả)`;

      cardsHtml = items.map(p => `
        <div class="pest-card">
          <div class="pest-image-container">
            <img src="${p.image}" alt="${p.name}" class="pest-card-img" onerror="this.src='assets/images/stage1.jpg';">
          </div>
          <div class="pest-header">
            <span class="pest-icon-tag">${p.icon}</span>
            <div>
              <h3>${p.stt}. ${p.name}</h3>
              <span class="pest-badge-target"><i class="fa-solid fa-tree"></i> ${p.targetCrops}</span>
            </div>
          </div>
          <div class="pest-body">
            <div class="pest-symptoms">
              <strong>Triệu chứng nhận dạng:</strong>
              <ul class="pest-symptoms-list">
                ${p.symptoms.map(s => `
                  <li>
                    <i class="fa-solid fa-circle-minus"></i>
                    <div>${s}</div>
                  </li>
                `).join('')}
              </ul>
            </div>
            <div class="pest-card-bottom">
              <div class="pest-solution-badge">
                <i class="fa-solid fa-prescription-bottle-medical"></i>
                <div>Nhóm hoạt chất: <strong>${p.activeIngredients.substring(0, 45)}...</strong></div>
              </div>
              <button type="button" class="pest-card-btn" onclick="openDetailModal('pest', '${p.id}')">
                <i class="fa-solid fa-magnifying-glass"></i> Khám Phá Chi Tiết
              </button>
            </div>
          </div>
        </div>
      `).join('');
    }

    // 2. Render Page DOM
    pageCropDict.innerHTML = `
      <div class="dict-container">
        <!-- HEADER CONTROL BAR: TÌM KIẾM & CHUYỂN SUBTABS -->
        <div class="dict-controls-bar">
          <div class="search-input-box">
            <span class="search-icon">🔍</span>
            <input type="text" id="crop-dict-search-input" placeholder="Tìm nhanh cây trồng, bệnh rễ, thiếu dinh dưỡng hoặc sâu hại..." value="${cropDictSearchQuery}" />
          </div>
          <div class="region-filter-bar" style="margin-bottom: 0; justify-content: flex-start;">
            ${subTabsHtml}
          </div>
        </div>

        <!-- TIÊU ĐỀ PHÂN MỤC -->
        <div style="margin: 4px 0 16px 0; font-size: 14px; font-weight: 700; color: var(--brand-950);">
          ${sectionTitle}
        </div>

        <!-- CARDS GRID THEO ĐỊNH DẠNG SÂU BỆNH -->
        <div class="pests-grid">
          ${cardsHtml || '<div style="text-align: center; padding: 40px; background: #ffffff; border-radius: 12px; color: var(--text-muted); grid-column: 1 / -1;">Không tìm thấy nội dung phù hợp với từ khóa tìm kiếm.</div>'}
        </div>
      </div>
    `;

    // 3. Bind subtabs click
    pageCropDict.querySelectorAll('[data-crop-subtab]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const sub = e.currentTarget.getAttribute('data-crop-subtab');
        if (sub && sub !== activeCropDictSubTab) {
          activeCropDictSubTab = sub;
          renderCropDict();
        }
      });
    });

    // 4. Bind search input
    const searchInput = document.getElementById('crop-dict-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        cropDictSearchQuery = e.target.value;
        renderCropDict();
        const reInput = document.getElementById('crop-dict-search-input');
        if (reInput) {
          reInput.focus();
          reInput.setSelectionRange(reInput.value.length, reInput.value.length);
        }
      });
    }
  };

  // ==========================================
  // RENDER PAGE 9: GIỐNG LÚA
  // ==========================================
  let activeRiceVarietyCategory = 'all';
  let riceVarietySearchQuery = '';

  const renderRiceVarieties = () => {
    if (!pageRiceVarieties || !AGRIZEN_DATA.riceVarieties) return;
    const data = AGRIZEN_DATA.riceVarieties;

    const filteredVarieties = data.varieties.filter(v => {
      const matchCat = activeRiceVarietyCategory === 'all' || v.category === activeRiceVarietyCategory;
      const query = riceVarietySearchQuery.toLowerCase().trim();
      const matchQuery = !query ||
        v.name.toLowerCase().includes(query) ||
        v.region.toLowerCase().includes(query) ||
        v.badge.toLowerCase().includes(query);
      return matchCat && matchQuery;
    });

    const categoryBtnsHtml = data.categories.map(cat => `
      <button class="filter-btn ${cat.id === activeRiceVarietyCategory ? 'active' : ''}" data-variety-cat="${cat.id}">
        ${cat.name}
      </button>
    `).join('');

    const cardsHtml = filteredVarieties.map((v, idx) => {
      const pestNote = (v.pestsAndDiseases && v.pestsAndDiseases[0]) ? v.pestsAndDiseases[0] : 'Cần chú ý đạo ôn và rầy nâu';

      return `
        <div class="pest-card" style="display: flex; flex-direction: column;">
          <div class="pest-header">
            <span class="pest-icon-tag">🌾</span>
            <div style="flex: 1;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;">
                <h3 style="margin: 0; font-size: 16.5px; font-weight: 800; color: var(--brand-950);">${v.name}</h3>
                <span class="dict-badge" style="background-color: #f0fdf4; color: #166534; border: 1px solid #bbf7d0; font-size: 11px; white-space: nowrap; padding: 2px 7px;">${v.badge}</span>
              </div>
              <span class="pest-badge-target" style="margin-top: 4px;"><i class="fa-solid fa-clock"></i> ${v.duration} | 📍 ${v.region}</span>
            </div>
          </div>
          <div class="pest-body">
            <div class="pest-symptoms">
              <strong>Kinh tế & Điểm yếu của giống:</strong>
              <ul class="pest-symptoms-list">
                <li>
                  <i class="fa-solid fa-circle-minus"></i>
                  <div><strong>Giá & Năng suất:</strong> ${v.price} | ${v.yield}</div>
                </li>
                <li>
                  <i class="fa-solid fa-circle-minus"></i>
                  <div><strong>Doanh thu:</strong> ${v.revenue}</div>
                </li>
                <li>
                  <i class="fa-solid fa-circle-minus"></i>
                  <div><strong>Sâu bệnh:</strong> ${pestNote.length > 85 ? pestNote.substring(0, 80) + '...' : pestNote}</div>
                </li>
              </ul>
            </div>
            <div class="pest-card-bottom">
              <div class="pest-solution-badge">
                <i class="fa-solid fa-shield-halved"></i>
                <div>Phòng trị: <strong>ZAKi Rước Đòng + Vô Gạo</strong></div>
              </div>
              <button type="button" class="pest-card-btn" onclick="openDetailModal('variety', '${v.id}')">
                <i class="fa-solid fa-magnifying-glass"></i> Khám Phá Chi Tiết
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    pageRiceVarieties.innerHTML = `
      <div class="dict-container">
        <div class="dict-controls-bar">
          <div class="search-input-box">
            <span class="search-icon">🔍</span>
            <input type="text" id="variety-search-input" placeholder="Tìm nhanh tên giống lúa (OM18, ST25, Đài Thơm 8...), khu vực canh tác..." value="${riceVarietySearchQuery}" />
          </div>
          <div class="region-filter-bar" style="margin-bottom: 0; justify-content: flex-start;">
            ${categoryBtnsHtml}
          </div>
        </div>

        <div class="pests-grid">
          ${cardsHtml}
        </div>
      </div>
    `;

    // Bind category buttons
    pageRiceVarieties.querySelectorAll('[data-variety-cat]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const cat = e.currentTarget.getAttribute('data-variety-cat');
        if (cat) {
          activeRiceVarietyCategory = cat;
          renderRiceVarieties();
        }
      });
    });

    // Bind search input
    const searchInput = document.getElementById('variety-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        riceVarietySearchQuery = e.target.value;
        renderRiceVarieties();
        const reInput = document.getElementById('variety-search-input');
        if (reInput) {
          reInput.focus();
          reInput.setSelectionRange(reInput.value.length, reInput.value.length);
        }
      });
    }
  };

  let activeExpandedProdTab = 'all';
  let expandedSearchQuery = '';

  const renderCropTypes = () => {
    if (!pageCropTypes) return;
    const items = AGRIZEN_DATA.expandedProducts || [];
    const q = expandedSearchQuery.toLowerCase().trim();

    const filtered = items.filter(p => {
      const matchTab = activeExpandedProdTab === 'all' || p.id === activeExpandedProdTab;
      const matchQ = !q ||
        p.name.toLowerCase().includes(q) ||
        p.crops.toLowerCase().includes(q) ||
        p.compounds.toLowerCase().includes(q) ||
        p.effects.some(e => e.toLowerCase().includes(q));
      return matchTab && matchQ;
    });

    const tabsNavHtml = [
      { id: 'all', name: 'Toàn Bộ (8 Sản Phẩm & Bảng Phối Trộn)' },
      { id: 'huu_co_ph14', name: '🌿 1. Hữu Cơ pH 14' },
      { id: 'zaki_ruoc_dong', name: '🌱 2. ZAKi Rước Đòng' },
      { id: 'sieu_vo_gao_zaki', name: '🌾 3. Siêu Vô Gạo ZAKi' },
      { id: 'netto_plus_10ew', name: '🛡️ 4. Netto Plus 10EW' },
      { id: 'mix_combi', name: '⚡ 5. Mix Combi' },
      { id: 'sieu_loang_trai_luke', name: '💧 6. Siêu Loang Trải Luke' },
      { id: 'unic_75_tim', name: '🍇 7. UniC 75 Tím' },
      { id: 'unic_75_xanh', name: '🍃 8. UniC 75 Xanh' },
      { id: 'matrix', name: '📊 9. Bảng Tương Thích Phối Trộn' }
    ].map(t => `
      <button class="filter-btn ${t.id === activeExpandedProdTab ? 'active' : ''}" data-exp-tab="${t.id}">
        ${t.name}
      </button>
    `).join('');

    // RENDER PRODUCTS CARDS (IF NOT IN PURE MATRIX TAB)
    let cardsHtml = '';
    if (activeExpandedProdTab !== 'matrix') {
      cardsHtml = filtered.map(p => `
        <div class="exp-horizontal-card">
          <!-- CỘT 1: THÔNG TIN SẢN PHẨM & CÂY TRỒNG -->
          <div class="exp-col exp-col-brand">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;">
              <div>
                <h3 style="margin: 0; font-size: 17.5px; font-weight: 800; color: var(--brand-950); line-height: 1.3;">${p.name}</h3>
                <div style="font-size: 12.5px; color: var(--text-muted); margin-top: 3px;">${p.subTitle}</div>
              </div>
              <span class="dict-badge" style="background-color: #f0fdf4; color: #166534; border: 1px solid #bbf7d0; white-space: nowrap; font-size: 11px; padding: 2px 7px;">Mở Rộng</span>
            </div>

            <!-- HỢP CHẤT -->
            <div style="background: #f8fafc; border-left: 3px solid #64748b; padding: 8px 11px; border-radius: 6px; font-size: 12.5px; color: #334155; line-height: 1.5; margin-top: 4px;">
              <strong style="color: #1e293b;"><i class="fa-solid fa-flask"></i> Hợp chất:</strong> ${p.compounds}
            </div>

            <!-- CÂY TRỒNG -->
            <div style="background: #f0fdfa; border: 1px solid #ccfbf1; padding: 8px 11px; border-radius: 6px; font-size: 12.5px; color: #0f766e; line-height: 1.45; margin-top: auto;">
              <strong style="color: #0f766e;"><i class="fa-solid fa-tree"></i> Cây trồng phù hợp:</strong>
              <div style="font-weight: 700; color: #115e59; margin-top: 2px;">${p.crops}</div>
            </div>
          </div>

          <!-- CỘT 2: KỸ THUẬT, LIỀU LƯỢNG & TÁC DỤNG THỰC TẾ -->
          <div class="exp-col exp-col-usage">
            <!-- GIAI ĐOẠN -->
            <div style="background: #fdfbf7; border: 1px solid #fde68a; padding: 9px 12px; border-radius: 6px;">
              <div style="color: #92400e; font-size: 12.5px; font-weight: 800; margin-bottom: 5px;"><i class="fa-solid fa-calendar-check"></i> Giai đoạn sử dụng ngoài vườn:</div>
              <ul style="margin: 0; padding-left: 0; list-style: none; display: flex; flex-direction: column; gap: 4px; font-size: 12.5px; color: #451a03; line-height: 1.45;">
                ${p.stages.map(st => `<li style="display: flex; gap: 6px;"><span style="color: #d97706; font-size: 10px; margin-top: 2px;">●</span><span>${st}</span></li>`).join('')}
              </ul>
            </div>

            <!-- LIỀU LƯỢNG -->
            <div style="background: #eff6ff; border-left: 3px solid #2563eb; padding: 9px 12px; border-radius: 6px; font-size: 12.5px; color: #1e40af; line-height: 1.5;">
              <strong style="display: block; margin-bottom: 3px;"><i class="fa-solid fa-droplet"></i> Liều lượng & Định mức tưới / phun:</strong>
              <div style="white-space: pre-line;">${p.dosage}</div>
            </div>

            <!-- TÁC DỤNG THỰC TẾ -->
            <div style="background: #f0fdf4; border-left: 3px solid #16a34a; padding: 9px 12px; border-radius: 6px; font-size: 12.5px; color: #166534; line-height: 1.45;">
              <strong style="color: #14532d; display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-check"></i> Tác dụng thực tế ngoài đất và cây:</strong>
              <ul style="margin: 0; padding-left: 0; list-style: none; display: flex; flex-direction: column; gap: 3px;">
                ${p.effects.map(e => `<li style="display: flex; gap: 6px;"><span style="font-weight: 700;">✓</span><span>${e}</span></li>`).join('')}
              </ul>
            </div>
          </div>

          <!-- CỘT 3: AN TOÀN & QUY TẮC PHỐI TRỘN THUỐC -->
          <div class="exp-col exp-col-safety">
            <!-- CHỐNG CHỈ ĐỊNH -->
            <div style="background: #fff7ed; border-left: 3px solid #ea580c; padding: 9px 12px; border-radius: 6px; font-size: 12.5px; color: #9a3412; line-height: 1.45;">
              <strong style="display: block; margin-bottom: 2px;"><i class="fa-solid fa-triangle-exclamation"></i> Chống chỉ định (Sai là hư cây):</strong>
              ${p.warning}
            </div>

            <!-- QUY TẮC PHỐI TRỘN -->
            <div style="background: #faf5ff; border: 1px solid #e9d5ff; padding: 10px 12px; border-radius: 6px; font-size: 12.5px; color: #581c87; line-height: 1.5; margin-top: auto;">
              <div style="font-weight: 800; color: #6b21a8; margin-bottom: 5px;"><i class="fa-solid fa-shuffle"></i> Quy tắc phối trộn thuốc:</div>
              <div style="color: #b91c1c; margin-bottom: 4px;"><strong>🚫 Cấm pha:</strong> ${p.mixing.prohibited}</div>
              <div style="color: #15803d; margin-bottom: 4px;"><strong>✅ Pha được:</strong> ${p.mixing.allowed}</div>
              <div style="color: #4c1d95;"><strong>💧 Thứ tự pha:</strong> ${p.mixing.order}</div>
            </div>
          </div>
        </div>
      `).join('');
    }

    // RENDER SECTION 7: MATRIX COMPATIBILITY TABLE
    let matrixHtml = '';
    const matrix = AGRIZEN_DATA.mixingMatrix;
    if (matrix && (activeExpandedProdTab === 'all' || activeExpandedProdTab === 'matrix')) {
      const items = matrix.items;
      const pairSet = new Set(matrix.allowedPairs.map(p => p[0] + '_' + p[1]));
      matrix.allowedPairs.forEach(p => pairSet.add(p[1] + '_' + p[0]));

      const theadCols = items.map(it => `
        <th title="${it.name} (${it.category})" style="cursor: help;">
          <div style="font-size: 10px; color: #94a3b8;">${it.code}</div>
          <div style="font-weight: 700; font-size: 11px;">${it.short.replace(/^\d+\.\s*/, '')}</div>
        </th>
      `).join('');

      const tbodyRows = items.map((rowItem, rIdx) => {
        const cells = items.map((colItem, cIdx) => {
          if (rIdx === cIdx) {
            return '<td class="compat-self" title="Cùng loại">—</td>';
          }
          const isAllowed = pairSet.has(rIdx + '_' + cIdx);
          if (isAllowed) {
            return '<td class="compat-check" title="' + rowItem.name + ' + ' + colItem.name + ': PHỐI TRỘN ĐƯỢC AN TOÀN">✓</td>';
          } else {
            return '<td class="compat-empty" title="' + rowItem.name + ' + ' + colItem.name + ': KHÔNG NÊN TRỘN (ĐỂ TRỐNG)"></td>';
          }
        }).join('');

        return `
          <tr>
            <th class="row-header" title="${rowItem.category}">
              <span style="display: inline-block; width: 18px; color: var(--brand-700); font-weight: 800;">${rowItem.code}.</span>
              <span>${rowItem.name.replace(/^\d+\.\s*/, '')}</span>
            </th>
            ${cells}
          </tr>
        `;
      }).join('');

      const rulesHtml = matrix.rulesNotes.map(r => `
        <div style="background: #f8fafc; border-left: 3px solid #0f766e; padding: 8px 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.5;">
          <strong style="color: #0f766e;">${r.title}</strong> <span style="color: #334155;">${r.text}</span>
        </div>
      `).join('');

      matrixHtml = `
        <div class="matrix-container" id="section-mixing-matrix">
          <div class="matrix-header-box">
            <div>
              <h3 style="margin: 0; font-size: 17.5px; font-weight: 800; color: var(--brand-950);">
                ${matrix.title || '📊 9. BẢNG TƯƠNG THÍCH PHỐI TRỘN THUỐC BVTV & PHÂN BÓN LÚA (BAO GỒM BỘ ĐÔI UNIC 75 TÍM & XANH, NETTO PLUS VÀ BỘ 3 ZAKI)'}
              </h3>
              <p style="margin: 4px 0 0 0; font-size: 12.8px; color: var(--text-muted);">
                Quy tắc đối chiếu cột ngang x hàng dọc: Dấu tích [<span style="color: #15803d; font-weight: 900;"> ✓ </span>] là <strong>PHỐI TRỘN ĐƯỢC</strong>; <strong>Ô TRỐNG</strong> là <strong>KHÔNG TRỘN ĐƯỢC</strong> (tránh kết tủa, cháy đọt, mất hiệu lực thuốc).
              </p>
            </div>
            <div style="display: flex; gap: 10px; align-items: center; font-size: 12.5px;">
              <span style="display: inline-flex; align-items: center; gap: 5px; background: #f0fdf4; border: 1px solid #bbf7d0; padding: 4px 10px; border-radius: 6px; color: #166534; font-weight: 700;">
                <span style="font-size: 15px;">✓</span> Phối Trộn Được
              </span>
              <span style="display: inline-flex; align-items: center; gap: 5px; background: #ffffff; border: 1px solid #cbd5e1; padding: 4px 10px; border-radius: 6px; color: #64748b; font-weight: 700;">
                [ Ô Trống ] Không Trộn Được
              </span>
            </div>
          </div>

          <!-- TRA NHANH 2 LOẠI -->
          <div class="matrix-checker-bar" style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; display: flex; flex-wrap: wrap; align-items: center; gap: 12px;">
            <div style="font-weight: 800; color: #1e293b; font-size: 13px;"><i class="fa-solid fa-bolt" style="color: #f59e0b;"></i> Tra nhanh 2 loại:</div>
            <select id="matrix-select-1" style="padding: 6px 10px; border-radius: 6px; border: 1px solid #cbd5e1; font-size: 12.5px; font-weight: 600; color: #1e293b; max-width: 220px;">
              ${items.map((it, idx) => `<option value="${idx}">${it.name}</option>`).join('')}
            </select>
            <span style="font-weight: 800; color: #64748b;">+</span>
            <select id="matrix-select-2" style="padding: 6px 10px; border-radius: 6px; border: 1px solid #cbd5e1; font-size: 12.5px; font-weight: 600; color: #1e293b; max-width: 220px;">
              ${items.map((it, idx) => `<option value="${idx}" ${idx === 3 ? 'selected' : ''}>${it.name}</option>`).join('')}
            </select>
            <div id="matrix-check-result" style="font-size: 13px; font-weight: 800; margin-left: auto;"></div>
          </div>

          <!-- BẢNG CUỘN 2 CHIỀU -->
          <div class="matrix-scroll-wrapper">
            <table class="compat-table">
              <thead>
                <tr>
                  <th class="sticky-corner">
                    Hàng dọc x Cột ngang (14 loại)
                  </th>
                  ${theadCols}
                </tr>
              </thead>
              <tbody>
                ${tbodyRows}
              </tbody>
            </table>
          </div>

          <!-- NGUYÊN TẮC VÀNG PHỐI TRỘN -->
          <div style="margin-top: 6px; display: flex; flex-direction: column; gap: 8px;">
            <div style="font-weight: 800; color: var(--brand-950); font-size: 13px;"><i class="fa-solid fa-circle-info" style="color: #0f766e;"></i> Lưu ý kỹ thuật & Thứ tự pha chuẩn khi xịt lúa:</div>
            ${rulesHtml}
          </div>
        </div>
      `;
    }

    pageCropTypes.innerHTML = `
      <div class="dict-container">
        <!-- HEADER CONTROL BAR (TÌM KIẾM & BỘ LỌC) -->
        <div class="dict-controls-bar">
          <div class="search-input-box">
            <span class="search-icon">🔍</span>
            <input type="text" id="expanded-search-input" placeholder="Tìm nhanh cây trồng (sầu riêng, cam, cà phê...), giai đoạn hoặc cách pha..." value="${expandedSearchQuery}" />
          </div>
          <div class="region-filter-bar" style="margin-bottom: 0; justify-content: flex-start; gap: 8px;">
            ${tabsNavHtml}
          </div>
        </div>

        <!-- DANH SÁCH SẢN PHẨM DÁNG NGANG FULL WIDTH -->
        <div class="expanded-horizontal-list">
          ${cardsHtml}
        </div>

        <!-- PHẦN 7: BẢNG TƯƠNG THÍCH PHỐI TRỘN -->
        ${matrixHtml}
      </div>
    `;

    // Bind Tabs
    pageCropTypes.querySelectorAll('[data-exp-tab]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tab = e.currentTarget.getAttribute('data-exp-tab');
        if (tab) {
          activeExpandedProdTab = tab;
          renderCropTypes();
        }
      });
    });

    // Bind Search Input
    const searchInput = document.getElementById('expanded-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        expandedSearchQuery = e.target.value;
        renderCropTypes();
        const reInput = document.getElementById('expanded-search-input');
        if (reInput) {
          reInput.focus();
          reInput.setSelectionRange(reInput.value.length, reInput.value.length);
        }
      });
    }

    // Bind Quick Matrix Checker Tool
    const sel1 = document.getElementById('matrix-select-1');
    const sel2 = document.getElementById('matrix-select-2');
    const resBox = document.getElementById('matrix-check-result');

    const updateCheckResult = () => {
      if (!sel1 || !sel2 || !resBox || !matrix) return;
      const idx1 = parseInt(sel1.value, 10);
      const idx2 = parseInt(sel2.value, 10);
      const item1 = matrix.items[idx1];
      const item2 = matrix.items[idx2];

      if (idx1 === idx2) {
        resBox.innerHTML = '<span style="color: #64748b; background: #f1f5f9; padding: 4px 10px; border-radius: 6px;">Cùng một loại sản phẩm</span>';
        return;
      }

      const pairSet = new Set(matrix.allowedPairs.map(p => p[0] + '_' + p[1]));
      matrix.allowedPairs.forEach(p => pairSet.add(p[1] + '_' + p[0]));
      const isOk = pairSet.has(idx1 + '_' + idx2);

      if (isOk) {
        resBox.innerHTML = '<span style="color: #15803d; background: #dcfce7; padding: 4px 10px; border-radius: 6px; border: 1px solid #86efac;">✅ PHỐI TRỘN ĐƯỢC AN TOÀN</span>';
      } else {
        resBox.innerHTML = '<span style="color: #b91c1c; background: #fee2e2; padding: 4px 10px; border-radius: 6px; border: 1px solid #fca5a5;">🚫 KHÔNG NÊN TRỘN (ĐỂ TRỐNG TRÊN BẢNG)</span>';
      }
    };

    if (sel1 && sel2) {
      sel1.addEventListener('change', updateCheckResult);
      sel2.addEventListener('change', updateCheckResult);
      updateCheckResult();
    }
  };

  // PAGE 10: VOUCHER GENERATOR (TẠO PHIẾU CAM KẾT & BẢO HÀNH ĐIỆN TỬ)

  // =========================================================================

  let voucherCurrentTab = 'back';

  let vImgFront = new Image();

  let vImgBack = new Image();

  let vImagesLoaded = 0;

  const renderVoucherGenerator = () => {

    if (!pageVoucherGenerator) return;

    pageVoucherGenerator.innerHTML = `

      <style>

        .voucher-tool-container {

          display: grid;

          grid-template-columns: 380px 1fr;

          gap: 20px;

          align-items: start;

        }

        @media (max-width: 950px) {

          .voucher-tool-container {

            grid-template-columns: 1fr;

          }

        }

        .voucher-form-card, .voucher-preview-card {

          background: #ffffff;

          border: 1px solid #ccd9c7;

          border-radius: 14px;

          padding: 20px;

          box-shadow: 0 4px 16px rgba(15, 56, 30, 0.06);

        }

        .voucher-card-header {

          display: flex;

          justify-content: space-between;

          align-items: center;

          border-bottom: 2px solid #d8f1e1;

          padding-bottom: 12px;

          margin-bottom: 16px;

        }

        .voucher-card-header h3 {

          font-size: 15px;

          font-weight: 800;

          color: #0f381e;

          margin: 0;

        }

        .voucher-badge {

          background: #fef08a;

          color: #713f12;

          font-size: 11px;

          font-weight: 800;

          padding: 3px 8px;

          border-radius: 6px;

          text-transform: uppercase;

        }

        .v-form-group {

          margin-bottom: 14px;

        }

        .v-form-group label {

          display: block;

          font-size: 12px;

          font-weight: 700;

          color: #2d4232;

          margin-bottom: 6px;

        }

        .v-form-group input[type="text"] {

          width: 100%;

          padding: 10px 12px;

          border: 1.5px solid #ccd9c7;

          border-radius: 8px;

          font-size: 14px;

          font-weight: 600;

          color: #0a180d;

          background: #ffffff;

          outline: none;

          transition: all 0.2s;

        }

        .v-form-group input[type="text"]:focus {

          border-color: #2e9451;

          box-shadow: 0 0 0 3px #d8f1e1;

        }

        .v-quick-chips {

          display: flex;

          flex-wrap: wrap;

          gap: 6px;

          margin-top: 6px;

        }

        .v-chip {

          background: #edf8f1;

          border: 1px solid #bde4ca;

          color: #1b5e32;

          font-size: 11px;

          font-weight: 700;

          padding: 4px 8px;

          border-radius: 6px;

          cursor: pointer;

          transition: all 0.15s;

          user-select: none;

        }

        .v-chip:hover {

          background: #d8f1e1;

          border-color: #3db365;

          transform: translateY(-1px);

        }

        .voucher-tab-bar {

          display: flex;

          align-items: center;

          gap: 8px;

          flex-wrap: wrap;

          margin-bottom: 14px;

        }

        .v-tab-btn {

          padding: 8px 14px;

          font-size: 13px;

          font-weight: 700;

          border: 1px solid #ccd9c7;

          background: #edf3e9;

          color: #2d4232;

          border-radius: 8px;

          cursor: pointer;

          transition: all 0.2s;

        }

        .v-tab-btn.active {

          background: #237841;

          color: #ffffff;

          border-color: #1b5e32;

          box-shadow: 0 2px 8px rgba(27, 94, 50, 0.2);

        }

        .v-ratio-label {

          margin-left: auto;

          font-size: 12px;

          font-weight: 700;

          color: #4a6350;

        }

        .v-canvas-wrapper {

          background: #142318;

          padding: 16px;

          border-radius: 12px;

          display: flex;

          justify-content: center;

          align-items: center;

          min-height: 280px;

          overflow: hidden;

          box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.3);

        }

        .v-canvas-wrapper canvas {

          max-width: 100% !important;

          height: auto !important;

          border-radius: 6px;

          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);

          display: block;

        }

        .v-action-grid {

          display: grid;

          grid-template-columns: 1fr 1fr;

          gap: 10px;

          margin-top: 14px;

        }

        @media (max-width: 600px) {

          .v-action-grid {

            grid-template-columns: 1fr;

          }

        }

        .v-btn {

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 6px;

          padding: 12px 16px;

          font-size: 13px;

          font-weight: 700;

          border-radius: 8px;

          border: none;

          cursor: pointer;

          transition: all 0.2s;

          user-select: none;

        }

        .v-btn-reset {

          width: 100%;

          background: #ffffff;

          color: #2d4232;

          border: 1.5px solid #b3c5ad;

          margin-top: 6px;

        }

        .v-btn-reset:hover {

          background: #e1ecdc;

        }

        .v-btn-copy {

          background: #0284c7;

          color: #ffffff;

          box-shadow: 0 3px 10px rgba(2, 132, 199, 0.25);

        }

        .v-btn-copy:hover {

          background: #0369a1;

          transform: translateY(-1px);

        }

        .v-btn-download {

          background: #237841;

          color: #ffffff;

          box-shadow: 0 3px 10px rgba(27, 94, 50, 0.25);

        }

        .v-btn-download:hover {

          background: #1b5e32;

          transform: translateY(-1px);

        }

        .v-btn-combined {

          grid-column: 1 / -1;

          background: linear-gradient(135deg, #d97706 0%, #b45309 100%);

          color: #ffffff;

          box-shadow: 0 4px 12px rgba(180, 83, 9, 0.25);

        }

        .v-btn-combined:hover {

          transform: translateY(-1px);

        }

        .v-toast {

          position: fixed;

          bottom: 24px;

          right: 24px;

          background: #0f2918;

          color: #ffffff;

          padding: 14px 20px;

          border-radius: 10px;

          font-size: 13px;

          font-weight: 600;

          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);

          border-left: 4px solid #3db365;

          transform: translateY(120px);

          opacity: 0;

          transition: all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);

          z-index: 1000;

        }

        .v-toast.show {

          transform: translateY(0);

          opacity: 1;

        }

      </style>

      <div class="voucher-tool-container">

        <!-- FORM BÊN TRÁI -->

        <div class="voucher-form-card">

          <div class="voucher-card-header">

            <h3>📝 NHẬP THÔNG TIN ĐƠN HÀNG</h3>

            <span class="voucher-badge">Xuất phiếu 5s</span>

          </div>

          <div class="v-form-group">

            <label>1. Tên Khách Hàng / Địa Chỉ</label>

            <input type="text" id="vCustName" value="Chú Năm (Vĩnh Thuận, Kiên Giang)" placeholder="VD: Chú Bảy - An Giang">

            <div class="v-quick-chips">

              <span class="v-chip" data-val="Chú Ba (Thoại Sơn, An Giang)">Chú Ba (An Giang)</span>

              <span class="v-chip" data-val="Anh Tư (Tân Hồng, Đồng Tháp)">Anh Tư (Đồng Tháp)</span>

              <span class="v-chip" data-val="Chú Bảy (Hòn Đất, Kiên Giang)">Chú Bảy (Kiên Giang)</span>

            </div>

          </div>

          <div class="v-form-group">

            <label>2. Số Điện Thoại Khách</label>

            <input type="text" id="vCustPhone" value="0918.765.432" placeholder="VD: 0912.345.678">

          </div>

          <div class="v-form-group">

            <label>3. Sản Phẩm Khách Mua</label>

            <input type="text" id="vCustProduct" value="Combo 3 Lon Rước Đòng + 1 Vô Gạo (Mỹ)" placeholder="VD: 2 Lon ZAKI Rước Đòng 1L">

            <div class="v-quick-chips">

              <span class="v-chip" data-prod="Combo 3 Rước Đòng + 1 Vô Gạo (Mỹ)">Combo 3+1</span>

              <span class="v-chip" data-prod="Combo 2 Lon ZAKI Rước Đòng 1L (Mỹ)">2 Lon Rước Đòng</span>

              <span class="v-chip" data-prod="Bộ 3 Lon ZAKI: pH14 + Rước Đòng + Vô Gạo">Bộ 3 Lon ZAKI</span>

              <span class="v-chip" data-prod="Thùng 8 Lon ZAKI Rước Đòng 1L (Mỹ)">1 Thùng 8 Lon</span>

            </div>

          </div>

          <div class="v-form-group">

            <label>4. Ngày Xuất Phiếu / Sử Dụng</label>

            <input type="text" id="vCustDate" value="04/09/2026">

          </div>

          <div class="v-form-group">

            <label>5. Số Mã Bảo Hành (Serial)</label>

            <input type="text" id="vCustSerial" value="ZK-2026-889" placeholder="ZK-2026-...">

          </div>

          <button class="v-btn v-btn-reset" id="vBtnReset">

            🔄 Làm Mới / Đơn Kế Tiếp (Tạo Mã Mới)

          </button>

        </div>

        <!-- KHU VỰC XEM TRƯỚC VÀ NÚT XUẤT ẢNH -->

        <div class="voucher-preview-card">

          <div class="voucher-tab-bar">

            <button class="v-tab-btn active" id="vTabBack">📄 Mặt Sau (Có Tên)</button>

            <button class="v-tab-btn" id="vTabFront">🌿 Mặt Trước (Cam Kết)</button>

            <button class="v-tab-btn" id="vTabBoth">✨ Ghép Cả 2 Mặt</button>

            <span class="v-ratio-label">Chuẩn In 15cm x 5.8cm (300 DPI)</span>

          </div>

          <div class="v-canvas-wrapper">

            <canvas id="vCanvas"></canvas>

          </div>

          <div class="v-action-grid">

            <button class="v-btn v-btn-copy" id="vBtnCopy">

              📋 Sao Chép Ảnh (Dán Vào Zalo)

            </button>

            <button class="v-btn v-btn-download" id="vBtnDownload">

              💾 Tải Ảnh Này Về Máy (PNG)

            </button>

            <button class="v-btn v-btn-combined" id="vBtnDownloadCombined">

              🖼️ Tải Ảnh Ghép 2 Mặt Gửi Khách (Nét Nhất)

            </button>

          </div>

        </div>

      </div>

      <div id="vToast" class="v-toast">

        ✅ Đã sao chép ảnh vào bộ nhớ tạm! Bạn chỉ cần nhấn <b>Ctrl + V</b> trong Zalo để gửi cho khách.

      </div>

    `;

    // Canvas Logic

    const canvas = document.getElementById('vCanvas');

    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    const checkReadyAndDraw = () => {

      if (vImagesLoaded >= 2) {

        drawVoucher();

      }

    };

    vImgFront.onload = () => { vImagesLoaded++; checkReadyAndDraw(); };

    vImgBack.onload = () => { vImagesLoaded++; checkReadyAndDraw(); };

    vImgFront.src = 'assets/voucher_front.png';

    vImgBack.src = 'assets/voucher_back.png';

    const drawVoucher = () => {

      if (vImagesLoaded < 2) return;

      const name = document.getElementById('vCustName')?.value || '...........................................';

      const phone = document.getElementById('vCustPhone')?.value || '...........................................';

      const prod = document.getElementById('vCustProduct')?.value || '...........................................';

      const date = document.getElementById('vCustDate')?.value || '.../.../2026';

      const serial = document.getElementById('vCustSerial')?.value ? `(Mã: ${document.getElementById('vCustSerial').value})` : '';

      const W = vImgBack.width;  // 1701

      const H = vImgBack.height; // 657

      if (voucherCurrentTab === 'front') {

        canvas.width = W;

        canvas.height = H;

        ctx.drawImage(vImgFront, 0, 0);

      } else if (voucherCurrentTab === 'back') {

        canvas.width = W;

        canvas.height = H;

        ctx.drawImage(vImgBack, 0, 0);

        drawTextOnCanvas(ctx, name, phone, prod, date, serial);

      } else if (voucherCurrentTab === 'both') {

        canvas.width = W;

        canvas.height = H * 2 + 30;

        ctx.fillStyle = '#E0E8E1';

        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Front

        ctx.drawImage(vImgFront, 0, 0);

        // Back

        ctx.drawImage(vImgBack, 0, H + 30);

        ctx.save();

        ctx.translate(0, H + 30);

        drawTextOnCanvas(ctx, name, phone, prod, date, serial);

        ctx.restore();

      }

    };

    const drawTextOnCanvas = (c, name, phone, prod, date, serial) => {

      c.fillStyle = '#004D40'; // Deep emerald green

      c.font = 'bold 30px "Be Vietnam Pro", "Segoe UI", sans-serif';

      c.textBaseline = 'alphabetic';

      // Line 1: Khách hàng (baseline y=446, start x=340)

      c.fillText(name, 340, 446);

      // Line 2: SĐT (baseline y=500)

      c.fillText(phone, 340, 500);

      // Line 3: Sản phẩm (baseline y=554)

      c.font = '600 28px "Be Vietnam Pro", "Segoe UI", sans-serif';

      c.fillText(prod, 340, 554);

      // Line 4: Ngày sử dụng (baseline y=608)

      c.fillText(`${date}  ${serial}`, 340, 608);

    };

    // Event Listeners for Live inputs

    ['vCustName', 'vCustPhone', 'vCustProduct', 'vCustDate', 'vCustSerial'].forEach(id => {

      const el = document.getElementById(id);

      if (el) el.addEventListener('input', drawVoucher);

    });

    // Quick chips

    pageVoucherGenerator.querySelectorAll('.v-chip[data-val]').forEach(ch => {

      ch.addEventListener('click', (e) => {

        const val = e.currentTarget.getAttribute('data-val');

        const inp = document.getElementById('vCustName');

        if (inp) { inp.value = val; drawVoucher(); }

      });

    });

    pageVoucherGenerator.querySelectorAll('.v-chip[data-prod]').forEach(ch => {

      ch.addEventListener('click', (e) => {

        const val = e.currentTarget.getAttribute('data-prod');

        const inp = document.getElementById('vCustProduct');

        if (inp) { inp.value = val; drawVoucher(); }

      });

    });

    // Tab Switchers

    const setVoucherTab = (tab) => {

      voucherCurrentTab = tab;

      pageVoucherGenerator.querySelectorAll('.v-tab-btn').forEach(b => b.classList.remove('active'));

      if (tab === 'back') document.getElementById('vTabBack')?.classList.add('active');

      if (tab === 'front') document.getElementById('vTabFront')?.classList.add('active');

      if (tab === 'both') document.getElementById('vTabBoth')?.classList.add('active');

      drawVoucher();

    };

    document.getElementById('vTabBack')?.addEventListener('click', () => setVoucherTab('back'));

    document.getElementById('vTabFront')?.addEventListener('click', () => setVoucherTab('front'));

    document.getElementById('vTabBoth')?.addEventListener('click', () => setVoucherTab('both'));

    // Reset next order

    document.getElementById('vBtnReset')?.addEventListener('click', () => {

      const nameInp = document.getElementById('vCustName');

      const phoneInp = document.getElementById('vCustPhone');

      const prodInp = document.getElementById('vCustProduct');

      const dateInp = document.getElementById('vCustDate');

      const serialInp = document.getElementById('vCustSerial');

      if (nameInp) nameInp.value = '';

      if (phoneInp) phoneInp.value = '';

      if (prodInp) prodInp.value = 'Combo 3 Lon Rước Đòng + 1 Vô Gạo (Mỹ)';

      const now = new Date();

      const d = String(now.getDate()).padStart(2, '0');

      const m = String(now.getMonth() + 1).padStart(2, '0');

      const y = now.getFullYear();

      if (dateInp) dateInp.value = `${d}/${m}/${y}`;

      const rand = Math.floor(100 + Math.random() * 900);

      if (serialInp) serialInp.value = `ZK-2026-${rand}`;

      if (nameInp) nameInp.focus();

      drawVoucher();

      showVoucherToast('Đã làm mới form và tạo Mã bảo hành mới!');

    });

    // Download Single View

    document.getElementById('vBtnDownload')?.addEventListener('click', () => {

      const name = document.getElementById('vCustName')?.value || 'ZAKI';

      const cleanName = name.replace(/[^a-zA-Z0-9\s]/g, '').trim().replace(/\s+/g, '_');

      const link = document.createElement('a');

      link.download = `Phieu_Cam_Ket_ZAKI_${cleanName}_${voucherCurrentTab}.png`;

      link.href = canvas.toDataURL('image/png', 1.0);

      link.click();

      showVoucherToast('Đang tải ảnh xuống máy...');

    });

    // Download Combined 2 Sides

    document.getElementById('vBtnDownloadCombined')?.addEventListener('click', () => {

      const prevTab = voucherCurrentTab;

      voucherCurrentTab = 'both';

      drawVoucher();

      const name = document.getElementById('vCustName')?.value || 'ZAKI';

      const cleanName = name.replace(/[^a-zA-Z0-9\s]/g, '').trim().replace(/\s+/g, '_');

      const link = document.createElement('a');

      link.download = `Phieu_Bao_Hanh_ZAKI_2Mat_${cleanName}.png`;

      link.href = canvas.toDataURL('image/png', 1.0);

      link.click();

      voucherCurrentTab = prevTab;

      drawVoucher();

      showVoucherToast('Đã tải ảnh ghép 2 mặt gửi khách!');

    });

    // Copy to Clipboard

    document.getElementById('vBtnCopy')?.addEventListener('click', async () => {

      try {

        canvas.toBlob(async (blob) => {

          await navigator.clipboard.write([

            new ClipboardItem({ 'image/png': blob })

          ]);

          showVoucherToast('✅ Đã sao chép ảnh! Nhấn Ctrl + V vào Zalo để gửi cho khách.');

        });

      } catch (err) {

        document.getElementById('vBtnDownload')?.click();

      }

    });

    const showVoucherToast = (msg) => {

      const t = document.getElementById('vToast');

      if (!t) return;

      t.innerHTML = msg;

      t.classList.add('show');

      setTimeout(() => { t.classList.remove('show'); }, 3500);

    };

    // Initial check & draw

    checkReadyAndDraw();

  };

  // Sidebar Nav Button Listeners

  document.querySelectorAll('.nav-item-btn[data-page]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const page = e.currentTarget.getAttribute('data-page');
      if (page) {
        switchPage(page);
        if (appSidebar && appSidebar.classList.contains('open')) {
          toggleMobileMenu();
        }
      }
    });
  });

  // Mobile Drawer Toggle

  const toggleMobileMenu = () => {

    appSidebar.classList.toggle('open');

    mobileOverlay.classList.toggle('active');

  };

  if (menuToggleBtn) menuToggleBtn.addEventListener('click', toggleMobileMenu);

  if (mobileOverlay) mobileOverlay.addEventListener('click', toggleMobileMenu);

  // Initial Boot

  renderProductTabs();

  renderProductDetail(activeProductId);

  renderScriptVG();
  renderScriptPH();
  renderScriptUpsell();
  renderScheduleRice();

  renderAlkalineDeep();

  renderRiceDict();

  renderCropDict();

  renderRiceVarieties();

  renderCropTypes();

  renderVoucherGenerator();

});
