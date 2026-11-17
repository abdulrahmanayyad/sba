function esc(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function sectionHeader(badge, title, desc = '') {
  return `
    <div class="section-header">
      ${badge ? `<div class="section-badge"><span class="pulse-dot"></span><span>${esc(badge)}</span></div>` : ''}
      <h2 class="section-title">${esc(title)}</h2>
      ${desc ? `<p class="section-desc">${esc(desc)}</p>` : ''}
    </div>
  `;
}

export function glassCard({
  title = '',
  badge = '',
  badgeColor = 'green', // 'green' | 'orange'
  lead = '',
  paragraphs = [],
  bullets = [],
  accent = false,
  dark = false,
  extraStyle = '',
}) {
  const cls = ['glass-card', accent ? 'accent-card' : '', dark ? 'dark-card' : ''].filter(Boolean).join(' ');
  const parasHtml = (paragraphs || []).map((p) => `<p>${esc(p)}</p>`).join('');
  const bulletsHtml =
    bullets && bullets.length > 0
      ? `<ul class="bullet-list">${bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>`
      : '';

  return `
    <div class="${cls}"${extraStyle ? ` style="${extraStyle}"` : ''}>
      ${
        title || badge
          ? `<div class="card-header-row">
              ${title ? `<h3 class="card-title">${esc(title)}</h3>` : '<div></div>'}
              ${badge ? `<span class="card-badge ${badgeColor === 'orange' ? 'orange' : ''}">${esc(badge)}</span>` : ''}
            </div>`
          : ''
      }
      ${lead ? `<div class="card-lead">${esc(lead)}</div>` : ''}
      ${parasHtml ? `<div class="card-body">${parasHtml}</div>` : ''}
      ${bulletsHtml}
    </div>
  `;
}

export function kpiGrid(items = [], cols = 4) {
  return `
    <div class="kpi-grid ${cols === 3 ? 'cols-3' : ''}">
      ${items
        .map(
          (item, i) => `
        <div class="kpi-card">
          <div class="kpi-value ${i % 2 === 1 ? 'green' : ''}" dir="ltr">${esc(item.value)}</div>
          <div class="kpi-label">${esc(item.label)}</div>
          ${item.sub ? `<div class="kpi-sub">${esc(item.sub)}</div>` : ''}
        </div>
      `
        )
        .join('')}
    </div>
  `;
}

export function glassTable(headers = [], rows = [], colWidths = []) {
  return `
    <div class="glass-table-wrap">
      <table class="glass-table">
        <thead>
          <tr>
            ${headers
              .map((h, i) => `<th${colWidths[i] ? ` style="width:${colWidths[i]}"` : ''}>${esc(h)}</th>`)
              .join('')}
          </tr>
        </thead>
        <tbody>
          ${rows
            .map(
              (r) => `
            <tr>
              ${r
                .map((cell, ci) => `<td class="${ci === 0 ? 'td-strong' : ''}">${esc(cell)}</td>`)
                .join('')}
            </tr>
          `
            )
            .join('')}
        </tbody>
      </table>
    </div>
  `;
}

export function policyBanner(label, text) {
  return `
    <div class="policy-banner">
      <span class="pulse-dot" style="margin-top:6px;"></span>
      <div><strong>${esc(label)}:</strong> ${esc(text)}</div>
    </div>
  `;
}

export function contactConsultationCard(isAr) {
  if (isAr) {
    return `
      <div class="glass-card dark-card">
        <div class="card-header-row">
          <h3 class="card-title">التواصل الرسمي وطلب الاستشارات المجانية</h3>
          <span class="card-badge">مجانية بالكامل 100%</span>
        </div>
        <div class="card-lead">جميع الاستشارات المقدمة من مجموعة سامي بن عياد مجانية بالكامل دون أي رسوم.</div>
        <div class="card-body">
          <p>يسعد فريقنا باستقبال طلبات الأعمال، المناقصات، الشراكات الاستراتيجية، والاستشارات الفنية عبر البوابة المركزية للاستشارات: <strong dir="ltr" style="white-space:nowrap;">www.sami-trade.com/request-consultation</strong></p>
        </div>
        <ul class="bullet-list">
          <li>البريد الإلكتروني الرسمي: <span dir="ltr" style="white-space:nowrap;">info@sami-trade.com</span> · الهاتف والواتساب التجاري: <span dir="ltr" style="white-space:nowrap;">+20 12 222 380 72</span> / <span dir="ltr" style="white-space:nowrap;">+20 12 222 380 73</span></li>
          <li>المقر الرئيسي: جمهورية مصر العربية · سجل تجاري رقم: <span dir="ltr">209627</span> · البطاقة الضريبية: <span dir="ltr">753702878</span></li>
        </ul>
      </div>
    `;
  }
  return `
    <div class="glass-card dark-card">
      <div class="card-header-row">
        <h3 class="card-title">Official Corporate Desk & Free Consultations</h3>
        <span class="card-badge">100% Free Consultation</span>
      </div>
      <div class="card-lead">All consultations provided by SAMI BIN AYYAD GROUP are completely free of charge.</div>
      <div class="card-body">
        <p>Our relevant sector specialists review business inquiries, tenders, OEM/FOB programs, and investment proposals via our centralized consultation portal: <strong style="white-space:nowrap;">www.sami-trade.com/request-consultation</strong></p>
      </div>
      <ul class="bullet-list">
        <li>Official Email: info@sami-trade.com · Direct Business Line & WhatsApp: +20 12 222 380 72 / +20 12 222 380 73</li>
        <li>Corporate Registry No.: 209627 · Tax Registration No.: 753702878 · Headquarters: Cairo, Egypt</li>
      </ul>
    </div>
  `;
}

export function modelCardHtml({
  code = '',
  badge = '',
  badgeColor = 'green',
  title = '',
  tagline = '',
  image = '',
  fabrics = '',
  gsm = '',
  sizes = '',
  moq = '',
  isAr = true,
}) {
  const encImg = image.split('/').map((s, i) => (i === 0 ? s : encodeURIComponent(s))).join('/');
  return `
    <div style="border-radius:16px; overflow:hidden; background:rgba(255,255,255,0.88); border:1px solid rgba(255,255,255,0.95); box-shadow:0 6px 18px -4px rgba(20,46,40,0.08); display:flex; gap:12px; padding:10px; align-items:stretch;">
      <div style="width:115px; height:120px; border-radius:12px; overflow:hidden; flex-shrink:0; background:#f1f5f9; position:relative; border:1px solid rgba(20,46,40,0.08);">
        <img src="${encImg}" alt="${esc(title)}" style="width:100%; height:100%; object-fit:cover; display:block;" />
      </div>
      <div style="flex:1; display:flex; flex-direction:column; justify-content:space-between; min-width:0;">
        <div>
          <div style="display:flex; align-items:center; justify-content:space-between; gap:6px; margin-bottom:3px;">
            <span style="font-family:monospace; font-size:7.5pt; font-weight:700; color:var(--brand-orange); background:rgba(232,93,4,0.08); padding:2px 8px; border-radius:999px;">${esc(code)}</span>
            <span style="font-size:7pt; font-weight:700; color:${badgeColor === 'orange' ? 'var(--brand-orange)' : 'var(--brand-green-text)'}; background:${badgeColor === 'orange' ? 'rgba(232,93,4,0.1)' : 'rgba(22,135,108,0.1)'}; padding:2px 8px; border-radius:999px;">${esc(badge)}</span>
          </div>
          <h4 style="font-size:10pt; font-weight:800; color:var(--foreground); margin:0 0 3px 0; line-height:1.2;">${esc(title)}</h4>
          <p style="font-size:7.5pt; color:var(--muted-foreground); margin:0 0 5px 0; line-height:1.35;">${esc(tagline)}</p>
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:4px; font-size:7pt; background:rgba(22,135,108,0.04); padding:6px 8px; border-radius:8px; border:1px solid rgba(22,135,108,0.12);">
          <div><strong style="color:var(--brand-green-text);">${isAr ? 'الخامات:' : 'Fabrics:'}</strong> ${esc(fabrics)}</div>
          <div><strong style="color:var(--brand-green-text);">${isAr ? 'الوزن:' : 'GSM:'}</strong> ${esc(gsm)}</div>
          <div><strong style="color:var(--brand-green-text);">${isAr ? 'المقاسات:' : 'Sizes:'}</strong> ${esc(sizes)}</div>
          <div><strong style="color:var(--brand-orange);">${isAr ? 'الحد الأدنى MOQ:' : 'MOQ:'}</strong> ${esc(moq)}</div>
        </div>
      </div>
    </div>
  `;
}
