const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// Helper to parse dates from Excel (numeric serial or string)
function parseExcelDate(val) {
  if (!val) return '2025';
  if (typeof val === 'number') {
    // Excel date serial
    const date = new Date((val - (25567 + 2)) * 86400 * 1000);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }
  const s = String(val).trim();
  // match dd-mm-yyyy or dd/mm/yyyy or yyyy-mm-dd
  const parts = s.split(/[-/]/);
  if (parts.length === 3) {
    if (parts[0].length === 4) {
      return `${parts[0]}-${parts[1].padStart(2, '0')}-${parts[2].padStart(2, '0')}`;
    }
    const day = parts[0].padStart(2, '0');
    const month = parts[1].padStart(2, '0');
    let year = parts[2];
    if (year.length === 2) year = '20' + year;
    return `${year}-${month}-${day}`;
  }
  return s;
}

// Country code and english name mapping
const countryMap = {
  'ألمانيا': { en: 'Germany', code: 'DE', continent: 'Europe' },
  'إندونيسيا': { en: 'Indonesia', code: 'ID', continent: 'Asia' },
  'استراليا': { en: 'Australia', code: 'AU', continent: 'Oceania' },
  'الإمارات العربية المتحدة': { en: 'United Arab Emirates', code: 'AE', continent: 'Middle East' },
  'البحرين': { en: 'Bahrain', code: 'BH', continent: 'Middle East' },
  'البرازيل': { en: 'Brazil', code: 'BR', continent: 'Americas' },
  'الصين': { en: 'China', code: 'CN', continent: 'Asia' },
  'الغابون': { en: 'Gabon', code: 'GA', continent: 'Africa' },
  'الكويت': { en: 'Kuwait', code: 'KW', continent: 'Middle East' },
  'المكسيك': { en: 'Mexico', code: 'MX', continent: 'Americas' },
  'المملكة العربية السعودية': { en: 'Saudi Arabia', code: 'SA', continent: 'Middle East' },
  'المملكة المتحدة': { en: 'United Kingdom', code: 'GB', continent: 'Europe' },
  'الهند': { en: 'India', code: 'IN', continent: 'Asia' },
  'الولايات المتحدة الأمريكية': { en: 'United States', code: 'US', continent: 'Americas' },
  'اليابان': { en: 'Japan', code: 'JP', continent: 'Asia' },
  'اليونان': { en: 'Greece', code: 'GR', continent: 'Europe' },
  'باكستان': { en: 'Pakistan', code: 'PK', continent: 'Asia' },
  'بلغاريا': { en: 'Bulgaria', code: 'BG', continent: 'Europe' },
  'بنغلاديش': { en: 'Bangladesh', code: 'BD', continent: 'Asia' },
  'بوتسوانا': { en: 'Botswana', code: 'BW', continent: 'Africa' },
  'تايلاند': { en: 'Thailand', code: 'TH', continent: 'Asia' },
  'تايوان': { en: 'Taiwan', code: 'TW', continent: 'Asia' },
  'جامايكا': { en: 'Jamaica', code: 'JM', continent: 'Americas' },
  'جزر المالديف': { en: 'Maldives', code: 'MV', continent: 'Asia' },
  'جمهورية التشيك': { en: 'Czech Republic', code: 'CZ', continent: 'Europe' },
  'جنوب أفريقيا': { en: 'South Africa', code: 'ZA', continent: 'Africa' },
  'زامبيا': { en: 'Zambia', code: 'ZM', continent: 'Africa' },
  'زيمبابوي': { en: 'Zimbabwe', code: 'ZW', continent: 'Africa' },
  'سريلانكا': { en: 'Sri Lanka', code: 'LK', continent: 'Asia' },
  'سنغافورة': { en: 'Singapore', code: 'SG', continent: 'Asia' },
  'سوازيلاند': { en: 'Eswatini (Swaziland)', code: 'SZ', continent: 'Africa' },
  'عُمان': { en: 'Oman', code: 'OM', continent: 'Middle East' },
  'فرنسا': { en: 'France', code: 'FR', continent: 'Europe' },
  'قطر': { en: 'Qatar', code: 'QA', continent: 'Middle East' },
  'كندا': { en: 'Canada', code: 'CA', continent: 'Americas' },
  'كوريا الجنوبية': { en: 'South Korea', code: 'KR', continent: 'Asia' },
  'كينيا': { en: 'Kenya', code: 'KE', continent: 'Africa' },
  'لبنان': { en: 'Lebanon', code: 'LB', continent: 'Middle East' },
  'ليبيريا': { en: 'Liberia', code: 'LR', continent: 'Africa' },
  'ليسوتو': { en: 'Lesotho', code: 'LS', continent: 'Africa' },
  'ماليزيا': { en: 'Malaysia', code: 'MY', continent: 'Asia' },
  'مصر': { en: 'Egypt', code: 'EG', continent: 'Middle East' },
  'موريشيوس': { en: 'Mauritius', code: 'MU', continent: 'Africa' },
  'ميانمار': { en: 'Myanmar', code: 'MM', continent: 'Asia' },
  'نيبال': { en: 'Nepal', code: 'NP', continent: 'Asia' },
  'هولندا': { en: 'Netherlands', code: 'NL', continent: 'Europe' },
  'هونج كونج': { en: 'Hong Kong', code: 'HK', continent: 'Asia' }
};

// Test reading and parsing dates file
const wbDates = XLSX.readFile('بيان تصدير تمور 2025.xlsx');
const wsDates = wbDates.Sheets['2025'];
const rowsDates = XLSX.utils.sheet_to_json(wsDates, { header: 1 });

const dateRecords = [];
for (let i = 3; i < rowsDates.length; i++) {
  const r = rowsDates[i];
  if (!r || !r[0] || typeof r[0] !== 'number' || r[0] > 66) continue;
  const countryAr = r[2] ? String(r[2]).trim() : '';
  const cMeta = countryMap[countryAr] || { en: countryAr, code: 'XX', continent: 'Other' };
  
  dateRecords.push({
    id: `DATES-2025-${String(r[0]).padStart(3, '0')}`,
    originalIndex: r[0],
    sourceFile: 'dates',
    date: parseExcelDate(r[1]),
    countryAr,
    countryEn: cMeta.en,
    countryCode: cMeta.code,
    continent: cMeta.continent,
    productCategory: 'dates',
    productAr: r[3] ? String(r[3]).trim() : 'تمور',
    specs: r[4] ? String(r[4]).trim() : '',
    variety: r[5] ? String(r[5]).trim() : '',
    quantity: r[6] ? String(r[6]).trim() : '',
    shippingTerms: r[7] ? String(r[7]).trim() : '',
    destinationPort: r[8] ? String(r[8]).trim() : '',
    paymentTerms: r[9] ? String(r[9]).trim() : '',
    suppliersScope: r[10] ? String(r[10]).trim() : '',
    contactPerson: r[11] ? String(r[11]).trim() : '',
    status: 'quotation_requested'
  });
}

// Test reading and parsing diversified file
const wbDiv = XLSX.readFile('بيان تصدير منتجات متنوعة 2025.xlsx');
const wsDiv = wbDiv.Sheets['2025'];
const rowsDiv = XLSX.utils.sheet_to_json(wsDiv, { header: 1 });

const divRecords = [];
for (let i = 3; i < rowsDiv.length; i++) {
  const r = rowsDiv[i];
  if (!r || !r[0] || typeof r[0] !== 'number' || r[0] > 113) continue;
  const countryAr = r[2] ? String(r[2]).trim() : '';
  const cMeta = countryMap[countryAr] || { en: countryAr, code: 'XX', continent: 'Other' };
  
  // Categorize product
  const pAr = r[3] ? String(r[3]).trim() : '';
  let cat = 'commodities';
  if (pAr.includes('بصل') || pAr.includes('ثوم') || pAr.includes('بطاط') || pAr.includes('خضار') || pAr.includes('بامية') || pAr.includes('طماطم')) {
    cat = 'vegetables';
  } else if (pAr.includes('فلفل') || pAr.includes('كركم') || pAr.includes('هيل') || pAr.includes('قرنفل') || pAr.includes('زنجبيل') || pAr.includes('توابل') || pAr.includes('كمون') || pAr.includes('كزبرة') || pAr.includes('قرفة')) {
    cat = 'spices';
  } else if (pAr.includes('سمسم') || pAr.includes('بذور') || pAr.includes('قمح') || pAr.includes('أرز') || pAr.includes('عدس') || pAr.includes('صويا') || pAr.includes('فول')) {
    cat = 'seeds_grains';
  } else if (pAr.includes('عشب') || pAr.includes('كركديه') || pAr.includes('مستخلص') || pAr.includes('مسحوق')) {
    cat = 'herbs_powders';
  } else if (pAr.includes('مانجو') || pAr.includes('أفوكادو') || pAr.includes('فواكه') || pAr.includes('ليمون') || pAr.includes('برتقال')) {
    cat = 'fruits';
  } else if (pAr.includes('تمر') || pAr.includes('تمور')) {
    cat = 'dates';
  }

  divRecords.push({
    id: `DIV-2025-${String(r[0]).padStart(3, '0')}`,
    originalIndex: r[0],
    sourceFile: 'diversified',
    date: parseExcelDate(r[1]),
    countryAr,
    countryEn: cMeta.en,
    countryCode: cMeta.code,
    continent: cMeta.continent,
    productCategory: cat,
    productAr: pAr,
    buyerDetails: r[4] ? String(r[4]).trim() : '',
    contactPerson: r[5] ? String(r[5]).trim() : '',
    status: 'inquiry'
  });
}

console.log('Date records parsed:', dateRecords.length);
console.log('Diversified records parsed:', divRecords.length);
console.log('Total verified:', dateRecords.length + divRecords.length);

const cSet = new Set([...dateRecords.map(r => r.countryAr), ...divRecords.map(r => r.countryAr)]);
console.log('Unique verified countries:', cSet.size);

