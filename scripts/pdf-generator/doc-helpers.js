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
