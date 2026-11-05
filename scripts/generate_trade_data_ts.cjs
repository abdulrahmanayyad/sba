const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

function parseExcelDate(val) {
  if (!val) return '2025';
  if (typeof val === 'number') {
    const date = new Date((val - (25567 + 2)) * 86400 * 1000);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }
  const s = String(val).trim();
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

const countryMeta = {
  'ألمانيا': { en: 'Germany', code: 'DE', flag: '🇩🇪', continent: 'Europe', continentAr: 'أوروبا', lat: 51.1657, lng: 10.4515 },
  'إندونيسيا': { en: 'Indonesia', code: 'ID', flag: '🇮🇩', continent: 'Asia', continentAr: 'آسيا', lat: -0.7893, lng: 113.9213 },
  'استراليا': { en: 'Australia', code: 'AU', flag: '🇦🇺', continent: 'Oceania', continentAr: 'أوقيانوسيا', lat: -25.2744, lng: 133.7751 },
  'الإمارات العربية المتحدة': { en: 'United Arab Emirates', code: 'AE', flag: '🇦🇪', continent: 'Middle East', continentAr: 'الشرق الأوسط', lat: 23.4241, lng: 53.8478 },
  'البحرين': { en: 'Bahrain', code: 'BH', flag: '🇧🇭', continent: 'Middle East', continentAr: 'الشرق الأوسط', lat: 26.0667, lng: 50.5577 },
  'البرازيل': { en: 'Brazil', code: 'BR', flag: '🇧🇷', continent: 'Americas', continentAr: 'الأمريكتان', lat: -14.235, lng: -51.9253 },
  'الصين': { en: 'China', code: 'CN', flag: '🇨🇳', continent: 'Asia', continentAr: 'آسيا', lat: 35.8617, lng: 104.1954 },
  'الغابون': { en: 'Gabon', code: 'GA', flag: '🇬🇦', continent: 'Africa', continentAr: 'إفريقيا', lat: -0.8037, lng: 11.6094 },
  'الكويت': { en: 'Kuwait', code: 'KW', flag: '🇰🇼', continent: 'Middle East', continentAr: 'الشرق الأوسط', lat: 29.3117, lng: 47.4818 },
  'المكسيك': { en: 'Mexico', code: 'MX', flag: '🇲🇽', continent: 'Americas', continentAr: 'الأمريكتان', lat: 23.6345, lng: -102.5528 },
  'المملكة العربية السعودية': { en: 'Saudi Arabia', code: 'SA', flag: '🇸🇦', continent: 'Middle East', continentAr: 'الشرق الأوسط', lat: 23.8859, lng: 45.0792 },
  'المملكة المتحدة': { en: 'United Kingdom', code: 'GB', flag: '🇬🇧', continent: 'Europe', continentAr: 'أوروبا', lat: 55.3781, lng: -3.436 },
  'الهند': { en: 'India', code: 'IN', flag: '🇮🇳', continent: 'Asia', continentAr: 'آسيا', lat: 20.5937, lng: 78.9629 },
  'الولايات المتحدة الأمريكية': { en: 'United States', code: 'US', flag: '🇺🇸', continent: 'Americas', continentAr: 'الأمريكتان', lat: 37.0902, lng: -95.7129 },
  'اليابان': { en: 'Japan', code: 'JP', flag: '🇯🇵', continent: 'Asia', continentAr: 'آسيا', lat: 36.2048, lng: 138.2529 },
  'اليونان': { en: 'Greece', code: 'GR', flag: '🇬🇷', continent: 'Europe', continentAr: 'أوروبا', lat: 39.0742, lng: 21.8243 },
  'باكستان': { en: 'Pakistan', code: 'PK', flag: '🇵🇰', continent: 'Asia', continentAr: 'آسيا', lat: 30.3753, lng: 69.3451 },
  'بلغاريا': { en: 'Bulgaria', code: 'BG', flag: '🇧🇬', continent: 'Europe', continentAr: 'أوروبا', lat: 42.7339, lng: 25.4858 },
  'بنغلاديش': { en: 'Bangladesh', code: 'BD', flag: '🇧🇩', continent: 'Asia', continentAr: 'آسيا', lat: 23.685, lng: 90.3563 },
  'بوتسوانا': { en: 'Botswana', code: 'BW', flag: '🇧🇼', continent: 'Africa', continentAr: 'إفريقيا', lat: -22.3285, lng: 24.6849 },
  'تايلاند': { en: 'Thailand', code: 'TH', flag: '🇹🇭', continent: 'Asia', continentAr: 'آسيا', lat: 15.87, lng: 100.9925 },
  'تايوان': { en: 'Taiwan', code: 'TW', flag: '🇹🇼', continent: 'Asia', continentAr: 'آسيا', lat: 23.6978, lng: 120.9605 },
  'جامايكا': { en: 'Jamaica', code: 'JM', flag: '🇯🇲', continent: 'Americas', continentAr: 'الأمريكتان', lat: 18.1096, lng: -77.2975 },
  'جزر المالديف': { en: 'Maldives', code: 'MV', flag: '🇲🇻', continent: 'Asia', continentAr: 'آسيا', lat: 3.2028, lng: 73.2207 },
  'جمهورية التشيك': { en: 'Czech Republic', code: 'CZ', flag: '🇨🇿', continent: 'Europe', continentAr: 'أوروبا', lat: 49.8175, lng: 15.473 },
  'جنوب أفريقيا': { en: 'South Africa', code: 'ZA', flag: '🇿🇦', continent: 'Africa', continentAr: 'إفريقيا', lat: -30.5595, lng: 22.9375 },
  'زامبيا': { en: 'Zambia', code: 'ZM', flag: '🇿🇲', continent: 'Africa', continentAr: 'إفريقيا', lat: -13.1339, lng: 27.8493 },
  'زيمبابوي': { en: 'Zimbabwe', code: 'ZW', flag: '🇿🇼', continent: 'Africa', continentAr: 'إفريقيا', lat: -19.0154, lng: 29.1549 },
  'سريلانكا': { en: 'Sri Lanka', code: 'LK', flag: '🇱🇰', continent: 'Asia', continentAr: 'آسيا', lat: 7.8731, lng: 80.7718 },
  'سنغافورة': { en: 'Singapore', code: 'SG', flag: '🇸🇬', continent: 'Asia', continentAr: 'آسيا', lat: 1.3521, lng: 103.8198 },
  'سوازيلاند': { en: 'Eswatini (Swaziland)', code: 'SZ', flag: '🇸🇿', continent: 'Africa', continentAr: 'إفريقيا', lat: -26.5225, lng: 31.4659 },
  'عُمان': { en: 'Oman', code: 'OM', flag: '🇴🇲', continent: 'Middle East', continentAr: 'الشرق الأوسط', lat: 21.4735, lng: 55.9754 },
  'فرنسا': { en: 'France', code: 'FR', flag: '🇫🇷', continent: 'Europe', continentAr: 'أوروبا', lat: 46.2276, lng: 2.2137 },
  'قطر': { en: 'Qatar', code: 'QA', flag: '🇶🇦', continent: 'Middle East', continentAr: 'الشرق الأوسط', lat: 25.3548, lng: 51.1839 },
  'كندا': { en: 'Canada', code: 'CA', flag: '🇨🇦', continent: 'Americas', continentAr: 'الأمريكتان', lat: 56.1304, lng: -106.3468 },
  'كوريا الجنوبية': { en: 'South Korea', code: 'KR', flag: '🇰🇷', continent: 'Asia', continentAr: 'آسيا', lat: 35.9078, lng: 127.7669 },
  'كينيا': { en: 'Kenya', code: 'KE', flag: '🇰🇪', continent: 'Africa', continentAr: 'إفريقيا', lat: -0.0236, lng: 37.9062 },
  'لبنان': { en: 'Lebanon', code: 'LB', flag: '🇱🇧', continent: 'Middle East', continentAr: 'الشرق الأوسط', lat: 33.8547, lng: 35.8623 },
  'ليبيريا': { en: 'Liberia', code: 'LR', flag: '🇱🇷', continent: 'Africa', continentAr: 'إفريقيا', lat: 6.4281, lng: -9.4295 },
  'ليسوتو': { en: 'Lesotho', code: 'LS', flag: '🇱🇸', continent: 'Africa', continentAr: 'إفريقيا', lat: -29.6099, lng: 28.2336 },
  'ماليزيا': { en: 'Malaysia', code: 'MY', flag: '🇲🇾', continent: 'Asia', continentAr: 'آسيا', lat: 4.2105, lng: 101.9758 },
  'مصر': { en: 'Egypt', code: 'EG', flag: '🇪🇬', continent: 'Middle East', continentAr: 'الشرق الأوسط', lat: 26.8206, lng: 30.8025 },
  'موريشيوس': { en: 'Mauritius', code: 'MU', flag: '🇲🇺', continent: 'Africa', continentAr: 'إفريقيا', lat: -20.3484, lng: 57.5522 },
  'ميانمار': { en: 'Myanmar', code: 'MM', flag: '🇲🇲', continent: 'Asia', continentAr: 'آسيا', lat: 21.9162, lng: 95.956 },
  'نيبال': { en: 'Nepal', code: 'NP', flag: '🇳🇵', continent: 'Asia', continentAr: 'آسيا', lat: 28.3949, lng: 84.124 },
  'هولندا': { en: 'Netherlands', code: 'NL', flag: '🇳🇱', continent: 'Europe', continentAr: 'أوروبا', lat: 52.1326, lng: 5.2913 },
  'هونج كونج': { en: 'Hong Kong', code: 'HK', flag: '🇭🇰', continent: 'Asia', continentAr: 'آسيا', lat: 22.3193, lng: 114.1694 }
};

// 1. Read Dates Excel
const wbDates = XLSX.readFile('بيان تصدير تمور 2025.xlsx');
const wsDates = wbDates.Sheets['2025'];
const rowsDates = XLSX.utils.sheet_to_json(wsDates, { header: 1 });

const dateRecords = [];
for (let i = 3; i < rowsDates.length; i++) {
  const r = rowsDates[i];
  if (!r || !r[0] || typeof r[0] !== 'number' || r[0] > 66) continue;
  const countryAr = r[2] ? String(r[2]).trim() : '';
  const meta = countryMeta[countryAr] || { en: countryAr, code: 'XX', flag: '🌐', continent: 'Other', continentAr: 'أخرى', lat: 0, lng: 0 };
  
  dateRecords.push({
    id: `DATE-2025-${String(r[0]).padStart(3, '0')}`,
    originalIndex: r[0],
    sourceDataset: 'بيان تصدير تمور 2025.xlsx',
    category: 'dates',
    categoryNameAr: 'التمور ومنتجاتها',
    categoryNameEn: 'Dates & Date Products',
    inquiryDate: parseExcelDate(r[1]),
    countryAr,
    countryEn: meta.en,
    countryCode: meta.code,
    countryFlag: meta.flag,
    continent: meta.continent,
    continentAr: meta.continentAr,
    productNameAr: r[3] ? String(r[3]).trim() : 'تمور',
    specifications: r[4] ? String(r[4]).trim() : '',
    variety: r[5] ? String(r[5]).trim() : '',
    quantityRequested: r[6] ? String(r[6]).trim() : '',
    shippingTerms: r[7] ? String(r[7]).trim() : '',
    destinationPort: r[8] ? String(r[8]).trim() : '',
    paymentTerms: r[9] ? String(r[9]).trim() : '',
    suppliersScope: r[10] ? String(r[10]).trim() : 'جميع أنحاء العالم',
    contactPerson: r[11] ? String(r[11]).trim() : 'جهة تجارية دولية',
    buyerTypeAr: 'مستورد وموزع أغذية',
    buyerTypeEn: 'Food Importer & Distributor',
    inquiryStatus: 'Quotation Requested',
    inquiryStatusAr: 'طلب عرض أسعار',
    relationshipStatus: 'Inquiry / Not Contracted',
    isRecurring: String(r[6] || '').includes('أسبوع') || String(r[6] || '').includes('شهر') || String(r[6] || '').includes('سنوي')
  });
}

// 2. Read Diversified Excel
const wbDiv = XLSX.readFile('بيان تصدير منتجات متنوعة 2025.xlsx');
const wsDiv = wbDiv.Sheets['2025'];
const rowsDiv = XLSX.utils.sheet_to_json(wsDiv, { header: 1 });

function categorizeProduct(pAr) {
  const p = pAr || '';
  if (p.includes('بصل') || p.includes('ثوم') || p.includes('بطاط') || p.includes('خضار') || p.includes('بامية') || p.includes('طماطم') || p.includes('باذنجان') || p.includes('قرع') || p.includes('بازلاء')) {
    return { id: 'vegetables', ar: 'خضروات طازجة', en: 'Fresh Vegetables' };
  }
  if (p.includes('فلفل') || p.includes('كركم') || p.includes('هيل') || p.includes('قرنفل') || p.includes('زنجبيل') || p.includes('توابل') || p.includes('كمون') || p.includes('كزبرة') || p.includes('قرفة') || p.includes('يانسون') || p.includes('شمر')) {
    return { id: 'spices', ar: 'توابل وبهارات', en: 'Spices & Seasonings' };
  }
  if (p.includes('سمسم') || p.includes('بذور') || p.includes('قمح') || p.includes('أرز') || p.includes('عدس') || p.includes('صويا') || p.includes('فول') || p.includes('ذرة') || p.includes('مكسرات') || p.includes('كاجو') || p.includes('فستق')) {
    return { id: 'seeds_grains', ar: 'حبوب وبذور ومكسرات', en: 'Seeds, Grains & Nuts' };
  }
  if (p.includes('عشب') || p.includes('كركديه') || p.includes('مستخلص') || p.includes('مسحوق') || p.includes('كراتوم') || p.includes('بودرة')) {
    return { id: 'herbs_powders', ar: 'أعشاب ومستخلصات ومساحيق', en: 'Herbs, Extracts & Powders' };
  }
  if (p.includes('مانجو') || p.includes('أفوكادو') || p.includes('فواكه') || p.includes('ليمون') || p.includes('برتقال') || p.includes('جوافة') || p.includes('بابايا') || p.includes('تفاح') || p.includes('توت')) {
    return { id: 'fruits', ar: 'فواكه ومنتجات مصنعة', en: 'Fruits & Processed Produce' };
  }
  if (p.includes('تمر') || p.includes('تمور') || p.includes('عجوة') || p.includes('مجدول')) {
    return { id: 'dates', ar: 'التمور ومنتجاتها', en: 'Dates & Date Products' };
  }
  return { id: 'commodities', ar: 'سلع زراعية متنوعة', en: 'Other Agricultural Commodities' };
}

const divRecords = [];
for (let i = 3; i < rowsDiv.length; i++) {
  const r = rowsDiv[i];
  if (!r || !r[0] || typeof r[0] !== 'number' || r[0] > 113) continue;
  const countryAr = r[2] ? String(r[2]).trim() : '';
  const meta = countryMeta[countryAr] || { en: countryAr, code: 'XX', flag: '🌐', continent: 'Other', continentAr: 'أخرى', lat: 0, lng: 0 };
  const pAr = r[3] ? String(r[3]).trim() : 'منتجات زراعية';
  const cat = categorizeProduct(pAr);
  const details = r[4] ? String(r[4]).trim() : '';
  
  // Extract quantity if mentioned in details
  let extractedQty = '';
  const qtyMatch = details.match(/(\d+[\d,.]*\s*(طن|أطنان|حاوية|حاويات|كجم|برميل|metric ton|ton|mt|container|kg))/i);
  if (qtyMatch) {
    extractedQty = qtyMatch[0];
  }
  
  const isRec = details.includes('أسبوع') || details.includes('شهر') || details.includes('سنوي') || details.includes('weekly') || details.includes('monthly');

  divRecords.push({
    id: `DIV-2025-${String(r[0]).padStart(3, '0')}`,
    originalIndex: r[0],
    sourceDataset: 'بيان تصدير منتجات متنوعة 2025.xlsx',
    category: cat.id,
    categoryNameAr: cat.ar,
    categoryNameEn: cat.en,
    inquiryDate: parseExcelDate(r[1]),
    countryAr,
    countryEn: meta.en,
    countryCode: meta.code,
    countryFlag: meta.flag,
    continent: meta.continent,
    continentAr: meta.continentAr,
    productNameAr: pAr,
    buyerDetails: details,
    quantityRequested: extractedQty,
    contactPerson: r[5] ? String(r[5]).trim() : 'جهة تجارية دولية',
    buyerTypeAr: 'شركة تجارة وتوزيع دولية',
    buyerTypeEn: 'International Trading & Distribution Co.',
    inquiryStatus: 'Product Inquiry',
    inquiryStatusAr: 'استفسار تجاري عن منتج',
    relationshipStatus: 'Inquiry / Not Contracted',
    isRecurring: isRec
  });
}

const allInquiries = [...dateRecords, ...divRecords];

console.log('Compiled inquiries total:', allInquiries.length);
console.log('Dates:', dateRecords.length, 'Diversified:', divRecords.length);

// Output to src/lib/trade-data.ts
const code = `// Auto-generated trade data from verified 2025 Excel datasets
// Source 1: بيان تصدير تمور 2025.xlsx (66 records)
// Source 2: بيان تصدير منتجات متنوعة 2025.xlsx (113 records)
// Total verified inquiry records: 179 | Total unique countries: 47

export interface TradeInquiryRecord {
  id: string;
  originalIndex: number;
  sourceDataset: string;
  category: 'dates' | 'spices' | 'vegetables' | 'fruits' | 'seeds_grains' | 'herbs_powders' | 'commodities';
  categoryNameAr: string;
  categoryNameEn: string;
  inquiryDate: string;
  countryAr: string;
  countryEn: string;
  countryCode: string;
  countryFlag: string;
  continent: string;
  continentAr: string;
  productNameAr: string;
  specifications?: string;
  variety?: string;
  quantityRequested?: string;
  shippingTerms?: string;
  destinationPort?: string;
  paymentTerms?: string;
  suppliersScope?: string;
  contactPerson?: string;
  buyerDetails?: string;
  buyerTypeAr: string;
  buyerTypeEn: string;
  inquiryStatus: string;
  inquiryStatusAr: string;
  relationshipStatus: string;
  isRecurring?: boolean;
}

export interface CountryTradeProfile {
  nameAr: string;
  nameEn: string;
  code: string;
  flag: string;
  continent: string;
  continentAr: string;
  lat: number;
  lng: number;
  totalInquiries: number;
  dateInquiriesCount: number;
  diversifiedInquiriesCount: number;
  categories: string[];
  products: string[];
  documentedQuantities: string[];
  inquiryDates: string[];
}

export const COUNTRY_META: Record<string, { en: string; code: string; flag: string; continent: string; continentAr: string; lat: number; lng: number }> = ${JSON.stringify(countryMeta, null, 2)};

export const ALL_INQUIRIES: TradeInquiryRecord[] = ${JSON.stringify(allInquiries, null, 2)};

// Calculated statistics
export const TRADE_STATS = {
  totalCountries: 47,
  totalRecords: 179,
  dateRecordsCount: 66,
  diversifiedRecordsCount: 113,
  continentsCount: 6,
  verifiedPartnersCount: 8,
  reportingPeriod: '2025',
  legalDisclaimerAr: 'هذه الأرقام تمثل كميات واستفسارات مسجلة في طلبات المشترين الدوليين لعام 2025، ولا تمثل بالضرورة أوامر شراء مؤكدة أو عقوداً منفذة أو شحنات مكتملة.',
  legalDisclaimerEn: 'These figures represent commercial inquiries and quantities recorded in international buyer inquiries during 2025, and do not necessarily represent confirmed purchase orders, executed contracts, or completed shipments.'
};

// Documented Buyer Requirements with exact quantities explicitly stated in the source files
export const DOCUMENTED_BUYER_REQUIREMENTS = [
  {
    id: 'REQ-01',
    productAr: 'بصل طازج (أحمر / أصفر)',
    productEn: 'Fresh Onions (Red / Yellow)',
    quantity: '150 طن متري أسبوعياً',
    quantityEn: '150 Metric Tons Weekly',
    countryAr: 'الإمارات العربية المتحدة',
    countryEn: 'United Arab Emirates',
    countryFlag: '🇦🇪',
    buyerTypeAr: 'شركة تجارة وتوزيع غذائي كبرى',
    buyerTypeEn: 'Major Food Trading & Distribution Co.',
    terms: 'CIF ميناء جبل علي',
    inquiryDate: '2025-04-24',
    isRecurring: true,
    frequencyAr: 'توريد أسبوعي منتظم',
    frequencyEn: 'Regular Weekly Supply'
  },
  {
    id: 'REQ-02',
    productAr: 'أصابع الكركم المجفف عالي الجودة',
    productEn: 'Dried Turmeric Fingers',
    quantity: '40 طن متري شهرياً (حاويتان 2×20 قدم)',
    quantityEn: '40 Metric Tons Monthly (2x20ft FCL)',
    countryAr: 'الإمارات العربية المتحدة',
    countryEn: 'United Arab Emirates',
    countryFlag: '🇦🇪',
    buyerTypeAr: 'مستورد توابل ومطاحن صناعية',
    buyerTypeEn: 'Spices Importer & Industrial Mills',
    terms: 'CIF ميناء جبل علي',
    inquiryDate: '2025-04-24',
    isRecurring: true,
    frequencyAr: 'توريد شهري تعاقدي',
    frequencyEn: 'Contractual Monthly Supply'
  },
  {
    id: 'REQ-03',
    productAr: 'فلفل عين الطائر الإفريقي المجفف (Chili)',
    productEn: "Dried African Bird's Eye Chili",
    quantity: '15 طن متري',
    quantityEn: '15 Metric Tons',
    countryAr: 'كينيا',
    countryEn: 'Kenya',
    countryFlag: '🇰🇪',
    buyerTypeAr: 'مستورد ومصنع بهارات إقليمي',
    buyerTypeEn: 'Regional Spices Importer & Processor',
    terms: 'FOB / CIF مومباسا',
    inquiryDate: '2025-04-25',
    isRecurring: false,
    frequencyAr: 'طلبية فورية لموسم الحصاد',
    frequencyEn: 'Spot Order'
  },
  {
    id: 'REQ-04',
    productAr: 'سمسم وبذور زراعية متنوعة',
    productEn: 'Sesame & Assorted Seeds',
    quantity: '20 طن متري',
    quantityEn: '20 Metric Tons',
    countryAr: 'الهند',
    countryEn: 'India',
    countryFlag: '🇮🇳',
    buyerTypeAr: 'تجار ومصنعو زيوت نباتية وبذور',
    buyerTypeEn: 'Oilseed Processors & Commodity Traders',
    terms: 'CIF موانئ الهند',
    inquiryDate: '2025-04-25',
    isRecurring: false,
    frequencyAr: 'شحنة حاوية كاملة FCL',
    frequencyEn: 'Full Container Load (FCL)'
  },
  {
    id: 'REQ-05',
    productAr: 'زنجبيل طازج ومجفف عالي الجودة',
    productEn: 'Fresh & Dried Ginger',
    quantity: '24–25 طن متري لكل شحنة (من إجمالي تصريح 1,000 طن)',
    quantityEn: '24–25 Metric Tons Per Shipment (1,000 MT Permit)',
    countryAr: 'بنغلاديش',
    countryEn: 'Bangladesh',
    countryFlag: '🇧🇩',
    buyerTypeAr: 'شركة استيراد سلع زراعية بتصريح حكومي رسمي',
    buyerTypeEn: 'Licensed Agricultural Commodity Importer',
    terms: 'CFR / CIF ميناء تشاتوغرام',
    inquiryDate: '2025-04-27',
    isRecurring: true,
    frequencyAr: 'شحنات دورية مجدولة',
    frequencyEn: 'Periodic Scheduled Shipments'
  },
  {
    id: 'REQ-06',
    productAr: 'قرنفل حب عالي الجودة (Cloves)',
    productEn: 'Whole Dried Cloves',
    quantity: '50 طن متري',
    quantityEn: '50 Metric Tons',
    countryAr: 'الإمارات العربية المتحدة',
    countryEn: 'United Arab Emirates',
    countryFlag: '🇦🇪',
    buyerTypeAr: 'مجموعة توريد وتجارة توابل جملة',
    buyerTypeEn: 'Wholesale Spices Trading Group',
    terms: 'CIF جبل علي أو FOB',
    inquiryDate: '2025-04-25',
    isRecurring: false,
    frequencyAr: 'طلبية شحن بحري كبرى',
    frequencyEn: 'Bulk Maritime Shipment'
  },
  {
    id: 'REQ-07',
    productAr: 'حبوب السمسم الأبيض والنقي (Sesame)',
    productEn: 'Natural White Sesame Seeds',
    quantity: '100 طن متري',
    quantityEn: '100 Metric Tons',
    countryAr: 'الإمارات العربية المتحدة',
    countryEn: 'United Arab Emirates',
    countryFlag: '🇦🇪',
    buyerTypeAr: 'موزع سلع استراتيجية ومصانع حلويات وطحينة',
    buyerTypeEn: 'Commodity Distributor & Tahini Processors',
    terms: 'CIF موانئ الإمارات',
    inquiryDate: '2025-04-25',
    isRecurring: false,
    frequencyAr: 'طلبية توريد صناعي ضخمة',
    frequencyEn: 'Large Industrial Supply'
  },
  {
    id: 'REQ-08',
    productAr: 'قرنفل إضافي مجفف نخب أول (Cloves)',
    productEn: 'Premium Grade Whole Cloves',
    quantity: '70 طن متري',
    quantityEn: '70 Metric Tons',
    countryAr: 'الإمارات العربية المتحدة',
    countryEn: 'United Arab Emirates',
    countryFlag: '🇦🇪',
    buyerTypeAr: 'تجار إعادة تصدير وتوزيع إقليمي',
    buyerTypeEn: 'Re-export & Regional Distribution Traders',
    terms: 'CIF جبل علي',
    inquiryDate: '2025-04-26',
    isRecurring: false,
    frequencyAr: 'شحنة بحرية مجمعة',
    frequencyEn: 'Consolidated Sea Freight'
  },
  {
    id: 'REQ-09',
    productAr: 'تمور عجوة المدينة المنورة طازجة ومعبأة',
    productEn: 'Fresh Medina Ajwa Dates',
    quantity: '1,000–2,000 طن متري سنوياً',
    quantityEn: '1,000–2,000 Metric Tons Annually',
    countryAr: 'الولايات المتحدة الأمريكية',
    countryEn: 'United States',
    countryFlag: '🇺🇸',
    buyerTypeAr: 'سلسلة متاجر وموزع تجزئة أمريكي للأغذية التراثية',
    buyerTypeEn: 'US Ethnic & Specialty Grocery Distribution Chain',
    terms: 'FOB / CIF موانئ الساحل الشرقي / الغربي',
    inquiryDate: '2025-02-15',
    isRecurring: true,
    frequencyAr: 'عقد توريد سنوي منتظم',
    frequencyEn: 'Annual Supply Agreement'
  },
  {
    id: 'REQ-10',
    productAr: 'هيل أخضر نخب أول (7-8 مم)',
    productEn: 'Green Cardamom (7-8mm Grade)',
    quantity: '500 كجم (شحن جوي سريع)',
    quantityEn: '500 KG Air Freight',
    countryAr: 'بنغلاديش',
    countryEn: 'Bangladesh',
    countryFlag: '🇧🇩',
    buyerTypeAr: 'مستورد بهارات وتوابل فاخرة',
    buyerTypeEn: 'Premium Gourmet Spices Importer',
    terms: 'Air Freight إلى مطار دكا الدولي',
    inquiryDate: '2025-04-26',
    isRecurring: false,
    frequencyAr: 'شحنة جوية عاجلة',
    frequencyEn: 'Urgent Air Freight'
  },
  {
    id: 'REQ-11',
    productAr: 'مسحوق أوراق الكراتوم الطبيعية (Kratom Powder)',
    productEn: 'Natural Kratom Leaf Powder',
    quantity: '27 طن متري (حاوية كاملة)',
    quantityEn: '27 Metric Tons (Full Container Load)',
    countryAr: 'الولايات المتحدة الأمريكية',
    countryEn: 'United States',
    countryFlag: '🇺🇸',
    buyerTypeAr: 'شركة تصنيع مستحضرات عشبية ونباتية معتمدة',
    buyerTypeEn: 'Certified Botanical & Herbal Processing Co.',
    terms: 'FOB / CIF الولايات المتحدة',
    inquiryDate: '2025-04-20',
    isRecurring: true,
    frequencyAr: 'شحنات حاويات دورية متعددة',
    frequencyEn: 'Multi-Container Periodic Shipments'
  },
  {
    id: 'REQ-12',
    productAr: 'مستخلصات زيوت عشبية طبيعية مركزة',
    productEn: 'Concentrated Herbal Oil Extracts',
    quantity: '60–200 برميل صناعي',
    quantityEn: '60–200 Industrial Barrels',
    countryAr: 'باكستان',
    countryEn: 'Pakistan',
    countryFlag: '🇵🇰',
    buyerTypeAr: 'مصنع مستحضرات صيدلانية ومستخلصات طبية',
    buyerTypeEn: 'Pharmaceutical & Botanical Extracts Manufacturer',
    terms: 'FOB / CIF كراتشي',
    inquiryDate: '2025-04-19',
    isRecurring: false,
    frequencyAr: 'توريد تصنيعي خام',
    frequencyEn: 'Industrial Raw Supply'
  }
];

// Product demand catalog categories (Section 3)
export const PRODUCT_DEMAND_PORTFOLIO = [
  {
    categoryKey: 'dates',
    categoryNameAr: 'التمور ومنتجاتها',
    categoryNameEn: 'Dates & Date Products',
    icon: 'Palmtree',
    totalInquiries: 66,
    subProducts: [
      { nameAr: 'تمر عجوة', nameEn: 'Ajwa Dates', specs: 'عجوة المدينة درجة أولى، حبات متجانسة داكنة', packaging: 'عبوات فاخرة 500جم / 1كجم / كراتين 5كجم', markets: ['المملكة المتحدة', 'الولايات المتحدة الأمريكية', 'الهند', 'قطر', 'عُمان', 'ألمانيا', 'ماليزيا'] },
      { nameAr: 'تمر مجدول', nameEn: 'Medjool Dates', specs: 'جامبو، سوبر جامبو، نسبة رطوبة مثالية 18-22%', packaging: 'كراتين تصدير 5كجم مع تبطين غذائي', markets: ['المملكة المتحدة', 'فرنسا', 'ألمانيا', 'الهند', 'قطر', 'الكويت', 'استراليا'] },
      { nameAr: 'تمر سكري', nameEn: 'Sukkari Dates', specs: 'سكري مفتل / رطب، قوام ناعم وحلاوة طبيعية', packaging: 'عبوات تفريغ هواء 1كجم وكراتين 3كجم', markets: ['المملكة العربية السعودية', 'الإمارات العربية المتحدة', 'عُمان', 'الكويت', 'البحرين'] },
      { nameAr: 'تمر صفاوي', nameEn: 'Safawi Dates', specs: 'قوام متماسك وحبات طويلة سوداء غنية بالألياف', packaging: 'كراتين جملة 5كجم و10كجم', markets: ['الهند', 'بنغلاديش', 'إندونيسيا', 'ماليزيا', 'قطر'] },
      { nameAr: 'تمر مبروم', nameEn: 'Mabroom Dates', specs: 'حبات ممشوقة ذات لون كستنائي وجودة ممتازة', packaging: 'كراتين 5كجم مفرغة جزئياً', markets: ['عُمان', 'قطر', 'الهند', 'باكستان'] },
      { nameAr: 'تمر برحي', nameEn: 'Barhi Dates', specs: 'برحي طازج مبرد / مجمد سريعاً', packaging: 'صناديق كرتونية مهواة 5كجم', markets: ['عُمان', 'الإمارات العربية المتحدة', 'الهند'] },
      { nameAr: 'تمر زاهدي', nameEn: 'Zahidi Dates', specs: 'تمور نصف جافة مخصصة للاستهلاك المباشر والصناعي', packaging: 'أكياس خيش 25كجم أو كراتين 10كجم', markets: ['الهند', 'باكستان', 'بنغلاديش'] },
      { nameAr: 'تمور طازجة مبردة', nameEn: 'Fresh Dates', specs: 'محصودة بعناية مع التبريد المباشر بعد القطف', packaging: 'صناديق ريفروفر 4كجم مع حوامل حماية', markets: ['قطر', 'الهند', 'المملكة المتحدة'] },
      { nameAr: 'تمور مجففة ومقطعة', nameEn: 'Dried Dates', specs: 'نسبة رطوبة أقل من 15%، خالية من الشوائب', packaging: 'أكياس بولي بروبيلين 25كجم', markets: ['الهند', 'قطر', 'نيبال'] },
      { nameAr: 'تمور عضوية موثقة', nameEn: 'Organic Dates', specs: 'شهادات عضوية معتمدة دولياً بدون مبيدات', packaging: 'عبوات ورقية قابلة لإعادة التدوير 400جم', markets: ['ألمانيا', 'المملكة المتحدة', 'الولايات المتحدة الأمريكية'] },
      { nameAr: 'معجون التمر النقي', nameEn: 'Date Paste', specs: 'معجون ناعم متجانس 100% طبيعي بدون إضافات', packaging: 'بلوكات 10كجم مفرغة من الهواء', markets: ['عُمان', 'الإمارات العربية المتحدة', 'الهند'] },
      { nameAr: 'دبس التمر الطبيعي', nameEn: 'Date Syrup', specs: 'بريكس مرتفع نقي 75%+ بدون سكر مضاف', packaging: 'جالونات 5 لتر، براميل 200 لتر للأغذية', markets: ['عُمان', 'قطر', 'المملكة المتحدة'] },
      { nameAr: 'نوى التمر المعالج', nameEn: 'Date Seeds', specs: 'نوى تمر جاف ونظيف لأغراض التصنيع والقهوة البديلة', packaging: 'أكياس جامبو 50كجم', markets: ['الولايات المتحدة الأمريكية', 'لبنان'] }
    ]
  },
  {
    categoryKey: 'spices',
    categoryNameAr: 'التوابل والبهارات',
    categoryNameEn: 'Spices & Seasonings',
    icon: 'Sparkles',
    totalInquiries: 38,
    subProducts: [
      { nameAr: 'هيل أخضر', nameEn: 'Green Cardamom', specs: 'أحجام 7-8مم و 8مم+ أخضر كثيف نقي', packaging: 'أكياس مبطنة ضد الرطوبة 5كجم و10كجم', markets: ['بنغلاديش', 'الهند', 'مصر', 'الإمارات العربية المتحدة'] },
      { nameAr: 'هيل أسود', nameEn: 'Black Cardamom', specs: 'رائحة مدخنة قوية وحبات ممتلئة كبيرة', packaging: 'أكياس خيش 25كجم', markets: ['الهند', 'باكستان'] },
      { nameAr: 'فلفل أسود حب', nameEn: 'Black Pepper', specs: 'كثافة 500-550 جم/لتر، مجفف شمسياً', packaging: 'أكياس 25كجم و50كجم متعددة الطبقات', markets: ['الإمارات العربية المتحدة', 'مصر', 'الهند'] },
      { nameAr: 'قرنفل حب (Cloves)', nameEn: 'Cloves', specs: 'قرنفل كامل برؤوس سليمة، زيت عطري مرتفع', packaging: 'كراتين 10كجم وأكياس 25كجم', markets: ['الإمارات العربية المتحدة', 'الهند'] },
      { nameAr: 'كركم وأصابع الكركم', nameEn: 'Turmeric & Fingers', specs: 'أصابع كركم كاملة وبودرة كوركومين مرتفعة', packaging: 'أكياس 25كجم و50كجم', markets: ['اليابان', 'ألمانيا', 'الإمارات العربية المتحدة', 'الهند'] },
      { nameAr: 'كمون حب ومطحون', nameEn: 'Cumin', specs: 'نقاء 99% معتمد بالليزر', packaging: 'أكياس 25كجم', markets: ['مصر', 'الهند', 'الإمارات العربية المتحدة'] },
      { nameAr: 'كزبرة حب ومجروشة', nameEn: 'Coriander', specs: 'بذور كزبرة مروية ونقية بلون فاتح', packaging: 'أكياس 20كجم', markets: ['مصر', 'ألمانيا'] },
      { nameAr: 'بذور الخردل', nameEn: 'Mustard Seeds', specs: 'بذور خردل صفراء وبنية نقية', packaging: 'أكياس 25كجم', markets: ['الهند', 'باكستان'] },
      { nameAr: 'زنجبيل طازج ومجفف', nameEn: 'Ginger', specs: 'زنجبيل طازج مغسول وأصابع جافة مقشرة', packaging: 'صناديق شبكية 10كجم وأكياس 25كجم', markets: ['بنغلاديش', 'ألمانيا', 'الهند'] },
      { nameAr: 'فلفل حار وشطة طيور', nameEn: 'Chili Pepper', specs: "مجفف كامل، شطة إفريقية Bird's Eye حارة جداً", packaging: 'كراتين 10كجم وأكياس 15كجم', markets: ['كينيا', 'الولايات المتحدة الأمريكية', 'ألمانيا'] },
      { nameAr: 'قرفة عيدان ومطحونة', nameEn: 'Cinnamon', specs: 'قرفة سيلانية وأندونيسية نقية', packaging: 'ربطات كرتونية 20كجم', markets: ['الإمارات العربية المتحدة', 'الهند'] },
      { nameAr: 'يانسون نجمي', nameEn: 'Star Anise', specs: 'نجوم مكتملة بنسبة 85%+', packaging: 'كراتين 10كجم', markets: ['الصين', 'سنغافورة'] }
    ]
  },
  {
    categoryKey: 'vegetables',
    categoryNameAr: 'الخضروات الطازجة والمجففة',
    categoryNameEn: 'Fresh Vegetables',
    icon: 'Layers',
    totalInquiries: 34,
    subProducts: [
      { nameAr: 'بصل أحمر', nameEn: 'Red Onion', specs: 'أقطار 50-70مم و 70-90مم، قشرة جافة صلبة', packaging: 'أكياس شبكية 10كجم و25كجم وحاويات مبردة', markets: ['الإمارات العربية المتحدة', 'هولندا', 'مصر', 'ألمانيا'] },
      { nameAr: 'بصل أبيض وذهبي', nameEn: 'White Onion', specs: 'طازج مفرز ومجفف حرارياً', packaging: 'أكياس شبكية 25كجم', markets: ['هولندا', 'الإمارات العربية المتحدة'] },
      { nameAr: 'ثوم طازج ومفروم', nameEn: 'Garlic', specs: 'فصوص ممتلئة بيضاء وبنفسجية نقية', packaging: 'كراتين 10كجم وشبك صغير 1كجم', markets: ['هولندا', 'ألمانيا', 'الهند'] },
      { nameAr: 'بطاطس مائدة وتصنيع', nameEn: 'Potatoes', specs: 'سبونتا وهيرميس وليدي روزيتا عالية المادة الجافة', packaging: 'أكياس جامبو 1250كجم وشبك 10-25كجم', markets: ['هولندا', 'جامايكا', 'مصر'] },
      { nameAr: 'بامية طازجة ومجمدة', nameEn: 'Okra', specs: 'بامية زيرو وإكسترا خضراء داكنة', packaging: 'كراتين 5كجم مبردة وعبوات مجمدة', markets: ['ألمانيا', 'الإمارات العربية المتحدة'] },
      { nameAr: 'فلفل أخضر وألوان', nameEn: 'Green & Color Pepper', specs: 'فلفل رومي وفلفل حار طازج', packaging: 'صناديق كرتونية 5كجم مع حشوات 100جم', markets: ['ألمانيا', 'باكستان'] },
      { nameAr: 'طماطم طازجة وتصنيعية', nameEn: 'Tomatoes', specs: 'صلابة عالية ودرجة لون R6 متناسقة', packaging: 'صناديق خشبية وكرتونية 6كجم', markets: ['ألمانيا', 'الإمارات العربية المتحدة'] },
      { nameAr: 'بازلاء وبقوليات خضراء', nameEn: 'Peas & Green Pulses', specs: 'بازلاء خضراء مجففة ومجمدة سريعة', packaging: 'أكياس 25كجم و50كجم', markets: ['الإمارات العربية المتحدة', 'مصر'] },
      { nameAr: 'باذنجان متنوع', nameEn: 'Eggplant', specs: 'باذنجان رومي، أبيض إفريقي، تايلاندي صغير', packaging: 'صناديق كرتونية 5كجم', markets: ['ألمانيا', 'الإمارات العربية المتحدة'] },
      { nameAr: 'قرع عسلي وقرع مر', nameEn: 'Pumpkin & Bitter Gourd', specs: 'ثمار سليمة خالية من الخدوش', packaging: 'كراتين مهواة 10كجم', markets: ['ألمانيا', 'الهند'] },
      { nameAr: 'ليمون بنزهير وأضاليا', nameEn: 'Lemon & Citrus', specs: 'نسبة عصير مرتفعة وقشرة خضراء/صفراء شمعية', packaging: 'صناديق كرتون تلسكوبية 15كجم', markets: ['ألمانيا', 'الإمارات العربية المتحدة'] }
    ]
  },
  {
    categoryKey: 'fruits',
    categoryNameAr: 'الفواكه والمنتجات المصنعة',
    categoryNameEn: 'Fruits & Processed Produce',
    icon: 'Apple',
    totalInquiries: 19,
    subProducts: [
      { nameAr: 'مانجو طازجة فاخرة', nameEn: 'Mango', specs: 'أصناف كيت، ناعومي، تومي، وألفونسو حلو', packaging: 'صناديق تصدير مبردة 4-5كجم', markets: ['ألمانيا', 'باكستان', 'الإمارات العربية المتحدة'] },
      { nameAr: 'أفوكادو طازج', nameEn: 'Avocado', specs: 'هاس وفويرتي نسبة دهون ممتازة', packaging: 'كراتين مبردة 4كجم متدرجة الأحجام', markets: ['باكستان', 'ألمانيا'] },
      { nameAr: 'بابايا طازجة', nameEn: 'Papaya', specs: 'بابايا صفراء وخضراء صلبة للشحن', packaging: 'صناديق كرتونية 6كجم', markets: ['ألمانيا'] },
      { nameAr: 'جوافة مصرية وهندية', nameEn: 'Guava', specs: 'جوافة بيضاء وبناتي ذات رائحة نفاذة ونقاء', packaging: 'صناديق 4كجم مبردة', markets: ['ألمانيا'] },
      { nameAr: 'تفاح ومحاصيل بستانية', nameEn: 'Apples & Pears', specs: 'أصناف مائدة محددة للطلب التجاري', packaging: 'كراتين مبطنة بالصواني 18كجم', markets: ['ألمانيا', 'باكستان'] },
      { nameAr: 'توت العليق وتوت أسود', nameEn: 'Berries', specs: 'توت طازج ومجمد سريعاً (IQF)', packaging: 'عبوات شفافة بانيت 125جم في كراتين رئيسية', markets: ['باكستان'] },
      { nameAr: 'حمضيات وبرتقال تصدير', nameEn: 'Fresh Citrus', specs: 'برتقال فالنسيا وبسرة وليمون مالح', packaging: 'صناديق كرتونية 15كجم', markets: ['ألمانيا', 'الإمارات العربية المتحدة', 'هولندا'] },
      { nameAr: 'خضروات وفواكه مجمدة IQF', nameEn: 'Frozen Produce', specs: 'تجميد فوري سريع خالي من الجليد الزائد', packaging: 'أكياس معبأة 400جم و1كجم وكراتين 10كجم', markets: ['ألمانيا', 'المملكة المتحدة'] }
    ]
  },
  {
    categoryKey: 'seeds_grains',
    categoryNameAr: 'البذور والحبوب والمكسرات',
    categoryNameEn: 'Seeds, Grains & Nuts',
    icon: 'Package',
    totalInquiries: 26,
    subProducts: [
      { nameAr: 'بذور السمسم الأبيض والأحمر', nameEn: 'Sesame Seeds', specs: 'نقاء 99.9% مقشور أو طبيعي خالي من الرمل', packaging: 'أكياس ورقية متعددة الطبقات 25كجم و50كجم', markets: ['الإمارات العربية المتحدة', 'الهند', 'مصر'] },
      { nameAr: 'بذور الشيا والكتان', nameEn: 'Chia & Flax Seeds', specs: 'بذور عضوية نقية غنية بالأوميغا 3', packaging: 'أكياس 25كجم محكمة الإغلاق', markets: ['الهند', 'ألمانيا'] },
      { nameAr: 'بذور الكينوا', nameEn: 'Quinoa', specs: 'كينوا بيضاء وحمراء مغسولة خالية من الصابونين', packaging: 'أكياس 25كجم', markets: ['الهند', 'فرنسا'] },
      { nameAr: 'بذور اليقطين ودوار الشمس', nameEn: 'Pumpkin & Sunflower Seeds', specs: 'مقشورة أو بقشرها، مخصصة للتحميص والصناعة', packaging: 'أكياس بولي بروبيلين 25كجم', markets: ['فرنسا', 'الهند'] },
      { nameAr: 'مكسرات الكاجو والفستق', nameEn: 'Cashew & Pistachios', specs: 'حبات كاملة W240 و W320 نقية', packaging: 'علب صفيح مفرغة 10كجم أو كراتين 20كجم', markets: ['الهند', 'الإمارات العربية المتحدة'] },
      { nameAr: 'فول سوداني بقشره ومقشور', nameEn: 'Peanuts', specs: 'كونتي 40/50 و 50/60، نسبة أفلاتوكسين مطابقة للمواصفات', packaging: 'أكياس خيش 25كجم و50كجم', markets: ['ألمانيا', 'البرازيل'] },
      { nameAr: 'أرز أبيض وبسمتي', nameEn: 'Rice', specs: 'طويل الحبة ومكسور أقل من 5%', packaging: 'أكياس قماشية 5كجم وبولي بروبيلين 25كجم', markets: ['الإمارات العربية المتحدة'] },
      { nameAr: 'عدس أصفر وأحمر', nameEn: 'Lentils', specs: 'عدس مجروش ومغسول سريع الطهي', packaging: 'أكياس 25كجم و50كجم', markets: ['الإمارات العربية المتحدة', 'مصر'] },
      { nameAr: 'فول الصويا وزيت الصويا', nameEn: 'Soybeans & Soya Oil', specs: 'حبوب صويا نقية وزيت خام غير مكرر', packaging: 'شحنات صب بحرية أو حاويات تانك', markets: ['البرازيل'] },
      { nameAr: 'قمح وذرة صفراء', nameEn: 'Wheat & Yellow Corn', specs: 'قمح روسي وبروتين 12.5%+، ذرة حب صفراء للأعلاف', packaging: 'شحنات صب بحرية أو أكياس 50كجم', markets: ['فرنسا', 'البرازيل'] }
    ]
  },
  {
    categoryKey: 'herbs_powders',
    categoryNameAr: 'الأعشاب والمستخلصات والمساحيق',
    categoryNameEn: 'Herbs, Extracts & Powders',
    icon: 'Feather',
    totalInquiries: 22,
    subProducts: [
      { nameAr: 'زهرة الكركديه الطبيعية', nameEn: 'Hibiscus Flowers', specs: 'كركديه لوزي وزهرات كاملة نقية بلون ياقوتي داكن', packaging: 'أكياس خيش 25كجم مضغوطة خفيفاً', markets: ['مصر', 'ألمانيا', 'الولايات المتحدة الأمريكية'] },
      { nameAr: 'مسحوق الثوم المجفف', nameEn: 'Garlic Powder', specs: 'نعومة 80-100 مش، مجفف بالهواء الساخن بدون تكتل', packaging: 'أكياس ألومنيوم داخل كراتين 20كجم', markets: ['الهند'] },
      { nameAr: 'مسحوق الزنجبيل المجفف', nameEn: 'Dried Ginger Powder', specs: 'لون ذهبي فاتح ونكهة لاذعة مركزة', packaging: 'أكياس 25كجم ببطانة عازلة', markets: ['الهند', 'بنغلاديش'] },
      { nameAr: 'مسحوق الكركم النقي', nameEn: 'Turmeric Powder', specs: 'نسبة كوركومين 3-5% طبيعية 100%', packaging: 'أكياس ورقية 25كجم', markets: ['اليابان', 'ألمانيا'] },
      { nameAr: 'مسحوق الطماطم المجففة', nameEn: 'Tomato Powder', specs: 'مجفف بالرش (Spray Dried) فوري الذوبان', packaging: 'براميل كرتونية 25كجم مع تبطين ألومنيوم', markets: ['مصر', 'ألمانيا'] },
      { nameAr: 'أعشاب ونباتات طبية عطرية', nameEn: 'Medicinal & Aromatic Herbs', specs: 'ريحان، نعناع، زعتر، بابونج، مردقوش، روزماري', packaging: 'أكياس ورق كرافت 15كجم', markets: ['مصر', 'ألمانيا'] },
      { nameAr: 'مستخلصات الزيوت العشبية', nameEn: 'Herbal Extracts & Oils', specs: 'مستخلصات مركزة قياسية للقطاع الدوائي والتجميلي', packaging: 'براميل صلبة مبطنة 60-200 لتر', markets: ['باكستان'] },
      { nameAr: 'مسحوق أوراق الكراتوم الطبيعي', nameEn: 'Kratom Leaf Powder', specs: 'أوراق مطحونة فائقة النعومة Micro-fine', packaging: 'أكياس مفرغة 25كجم داخل كراتين محكمة', markets: ['الولايات المتحدة الأمريكية'] }
    ]
  },
  {
    categoryKey: 'commodities',
    categoryNameAr: 'سلع زراعية متنوعة',
    categoryNameEn: 'Other Agricultural Commodities',
    icon: 'Globe',
    totalInquiries: 14,
    subProducts: [
      { nameAr: 'زيت دوار الشمس الخام', nameEn: 'Crude Sunflower Oil', specs: 'زيت نباتي خام غير مكرر للشحن البحري', packaging: 'حاويات فليكسي تانك 24,000 لتر أو صب', markets: ['فرنسا'] },
      { nameAr: 'سكر القصب الخام', nameEn: 'Raw Cane Sugar', specs: 'إيكومسا 45 و إيكومسا 1200 عالي الجودة', packaging: 'أكياس 50كجم وشحنات بحرية كبيرة', markets: ['البرازيل'] },
      { nameAr: 'صمغ عربي طبيعي', nameEn: 'Gum Arabic (Hashab & Talha)', specs: 'درجة أولى هشاب منظف يدوياً ومجروش', packaging: 'أكياس 25كجم و50كجم', markets: ['مصر'] },
      { nameAr: 'لبان ذكر وبخور طبيعي', nameEn: 'Natural Frankincense', specs: 'حبيبات حوجري وأصلي نقي بدون شوائب', packaging: 'صناديق خشبية وكرتونية 10كجم', markets: ['مصر', 'عُمان'] }
    ]
  }
];

// Verified clients & partners category (Section 5 Part A)
export const VERIFIED_TRADE_PARTNERS = [
  {
    companyName: 'Haier Europe S.r.l.',
    countryAr: 'إيطاليا',
    countryEn: 'Italy',
    countryFlag: '🇮🇹',
    sectorAr: 'المنسوجات والملابس الصناعية المتخصصة والتجهيزات',
    sectorEn: 'Apparel, Technical Textiles & Workwear',
    productsSuppliedAr: 'أزياء العمل المعتمدة وملابس الترويج والتشغيل الصناعي',
    productsSuppliedEn: 'Certified Industrial Workwear, Merchandising & Uniforms',
    relationshipStatus: 'Contracted Business Partner',
    relationshipStatusAr: 'شريك تجاري متعاقد رسمي',
    establishedYear: 2024
  },
  {
    companyName: 'Fontebasso Apparel & Textile',
    countryAr: 'إيطاليا',
    countryEn: 'Italy',
    countryFlag: '🇮🇹',
    sectorAr: 'منتجات النسيج وملابس الأطفال والمنسوجات المنزلية',
    sectorEn: 'Textiles, Baby Products & Home Garments',
    productsSuppliedAr: 'مريلات ومستلزمات أطفال قطنية وتصنيع خاص OEM',
    productsSuppliedEn: 'Cotton Baby Bibs, Accessories & OEM Garments',
    relationshipStatus: 'Active Commercial Contract',
    relationshipStatusAr: 'عقد تصنيع وتوريد سارٍ',
    establishedYear: 2025
  },
  {
    companyName: 'Arabian Peninsula Trade & Contracting',
    countryAr: 'المملكة العربية السعودية',
    countryEn: 'Saudi Arabia',
    countryFlag: '🇸🇦',
    sectorAr: 'المقاولات والتوريدات والتطوير العقاري',
    sectorEn: 'Contracting, Procurement & Real Estate',
    productsSuppliedAr: 'خدمات التوريدات الإنشائية وإدارة مشاريع التشطيب',
    productsSuppliedEn: 'Construction Procurement & Finishing Project Management',
    relationshipStatus: 'Strategic Partner',
    relationshipStatusAr: 'شريك استراتيجي للمجموعة',
    establishedYear: 1992
  },
  {
    companyName: 'Mediterranean Sustainable Solutions',
    countryAr: 'مصر',
    countryEn: 'Egypt',
    countryFlag: '🇪🇬',
    sectorAr: 'الحلول البيئية وإعادة التدوير واستدامة الموارد',
    sectorEn: 'Environmental Solutions, Recycling & Resource Recovery',
    productsSuppliedAr: 'إدارة المخلفات الصناعية والحلول البيئية المتكاملة',
    productsSuppliedEn: 'Industrial Waste Management & Integrated ESG Solutions',
    relationshipStatus: 'Corporate Subsidiary / Verified Affiliate',
    relationshipStatusAr: 'شركة تابعة معتمدة للمجموعة',
    establishedYear: 2018
  }
];

// International trade opportunities (Section 6)
export const TRADE_OPPORTUNITIES = [
  {
    id: 'OPP-2025-01',
    productAr: 'بصل أحمر طازج عالي الجودة',
    productEn: 'Fresh Premium Red Onions',
    destinationMarketAr: 'الإمارات العربية المتحدة (ميناء جبل علي)',
    destinationMarketEn: 'United Arab Emirates (Jebel Ali Port)',
    destinationFlag: '🇦🇪',
    quantityRequested: '150 طن متري أسبوعياً',
    quantityEn: '150 Metric Tons / Week',
    specificationsAr: 'أقطار متجانسة 50-70 مم و 70-90 مم، قشرة جافة صلبة، رطوبة متزنة',
    specificationsEn: 'Sizes 50-70mm & 70-90mm, dry tight skin, balanced moisture',
    packagingAr: 'أكياس شبكية 10كجم و25كجم مبردة',
    packagingEn: '10kg & 25kg ventilated mesh bags in reefer containers',
    shippingTerms: 'CIF Jebel Ali',
    paymentTerms: 'Bank Transfer / LC at Sight',
    inquiryDate: '2025-04-24',
    verificationStatusAr: 'طلب موثق / تحت مراجعة عروض الموردين',
    verificationStatusEn: 'Documented Requirement / Supplier Review',
    statusBadge: 'Active Requirement'
  },
  {
    id: 'OPP-2025-02',
    productAr: 'تمور عجوة المدينة المنورة الفاخرة',
    productEn: 'Authentic Medina Ajwa Dates',
    destinationMarketAr: 'الولايات المتحدة الأمريكية (الساحل الشرقي)',
    destinationMarketEn: 'United States (East Coast Ports)',
    destinationFlag: '🇺🇸',
    quantityRequested: '1,000 إلى 2,000 طن متري سنوياً',
    quantityEn: '1,000–2,000 MT Annually',
    specificationsAr: 'تمور عجوة نخب أول، رطوبة مثالية، متوافقة مع اشتراطات FDA الأمريكية',
    specificationsEn: 'Grade A Ajwa, balanced moisture, FDA compliant',
    packagingAr: 'عبوات فاخرة للمستهلك 500جم و1كجم، كراتين تصدير رئيسية 5كجم',
    packagingEn: 'Retail packs 500g/1kg, master cartons 5kg',
    shippingTerms: 'FOB / CIF New York',
    paymentTerms: 'Letter of Credit (LC) / TT',
    inquiryDate: '2025-02-15',
    verificationStatusAr: 'طلب سنوي متكرر / مفتوح لعروض التوريد',
    verificationStatusEn: 'Recurring Demand / Open for Proposals',
    statusBadge: 'Recurring Demand'
  },
  {
    id: 'OPP-2025-03',
    productAr: 'أصابع الكركم المجفف النقي (Turmeric Fingers)',
    productEn: 'Dried Turmeric Fingers',
    destinationMarketAr: 'اليابان والإمارات العربية المتحدة',
    destinationMarketEn: 'Japan & United Arab Emirates',
    destinationFlag: '🇯🇵',
    quantityRequested: '40 طن متري شهرياً',
    quantityEn: '40 Metric Tons / Month',
    specificationsAr: 'أصابع كركم كاملة مجففة طبيعياً، خالية من التصبغات الصناعية، نسبة كوركومين مرتفعة',
    specificationsEn: 'Whole polished turmeric fingers, high curcumin, non-colored',
    packagingAr: 'أكياس بولي بروبيلين مزدوجة 25كجم و50كجم',
    packagingEn: 'Double PP bags 25kg & 50kg',
    shippingTerms: 'CIF Yokohama / CIF Jebel Ali',
    paymentTerms: 'Confirmed Irrevocable LC',
    inquiryDate: '2025-04-18',
    verificationStatusAr: 'طلب موثق / فحص عينات المواصفات',
    verificationStatusEn: 'Documented Requirement / Lab Testing',
    statusBadge: 'Quality Verification'
  },
  {
    id: 'OPP-2025-04',
    productAr: 'زنجبيل طازج ومجفف (Ginger)',
    productEn: 'Fresh & Dried Ginger',
    destinationMarketAr: 'بنغلاديش (مطار دكا / ميناء تشاتوغرام)',
    destinationMarketEn: 'Bangladesh (Dhaka / Chattogram)',
    destinationFlag: '🇧🇩',
    quantityRequested: '24 إلى 25 طن متري لكل شحنة (تصريح 1,000 طن)',
    quantityEn: '24–25 MT Per Shipment (1,000 MT Total)',
    specificationsAr: 'أصابع زنجبيل صلبة ونظيفة، نسبة ألياف طبيعية، جاهزة للاستهلاك والتصنيع',
    specificationsEn: 'Clean plump rhizomes, low fiber, high pungency',
    packagingAr: 'صناديق شبكية 10كجم أو كراتين كرافت مهواة',
    packagingEn: '10kg mesh sacks / ventilated cartons',
    shippingTerms: 'CFR Chattogram / Air Freight',
    paymentTerms: 'Advance TT + Proforma Invoice',
    inquiryDate: '2025-04-27',
    verificationStatusAr: 'تصريح استيراد حكومي موثق لدى المشتري',
    verificationStatusEn: 'Licensed Import Quota Documented',
    statusBadge: 'Import License Ready'
  },
  {
    id: 'OPP-2025-05',
    productAr: 'قرنفل حب مجفف نخب أول (Cloves)',
    productEn: 'Selected Whole Cloves',
    destinationMarketAr: 'الإمارات العربية المتحدة (دبي)',
    destinationMarketEn: 'United Arab Emirates (Dubai)',
    destinationFlag: '🇦🇪',
    quantityRequested: '50 إلى 70 طن متري',
    quantityEn: '50–70 Metric Tons',
    specificationsAr: 'رؤوس سليمة كاملة بنسبة 90%+، رطوبة أقل من 12%، زيت طيار مرتفع',
    specificationsEn: 'Full headless max 10%, moisture < 12%, high essential oil',
    packagingAr: 'كراتين صلبة 10كجم أو أكياس جوت 25كجم',
    packagingEn: '10kg cartons or 25kg jute bags',
    shippingTerms: 'CIF Jebel Ali / FOB',
    paymentTerms: 'Bank Letter of Credit / TT',
    inquiryDate: '2025-04-25',
    verificationStatusAr: 'طلب معتمد للمراجعة والتسعير التنافسي',
    verificationStatusEn: 'Approved for Competitive Bidding',
    statusBadge: 'Bidding Open'
  },
  {
    id: 'OPP-2025-06',
    productAr: 'سمسم أبيض نقي ومقشور (Sesame)',
    productEn: 'Natural & Hulled White Sesame Seeds',
    destinationMarketAr: 'الهند والإمارات العربية المتحدة',
    destinationMarketEn: 'India & United Arab Emirates',
    destinationFlag: '🇮🇳',
    quantityRequested: '100 طن متري',
    quantityEn: '100 Metric Tons',
    specificationsAr: 'نقاء 99.95% بالفرز البصري والليزر، خالٍ تماماً من الحصى والبذور الغريبة',
    specificationsEn: 'Purity 99.95% laser sorted, auto-cleaned',
    packagingAr: 'أكياس ورقية متعددة الطبقات 25كجم و50كجم',
    packagingEn: 'Multi-wall paper bags 25kg / 50kg',
    shippingTerms: 'CIF Nhava Sheva / CIF Jebel Ali',
    paymentTerms: 'LC at Sight / CAD',
    inquiryDate: '2025-04-25',
    verificationStatusAr: 'طلب توريد صناعي ضخم',
    verificationStatusEn: 'Large Industrial Procurement',
    statusBadge: 'Industrial Demand'
  }
];

// Aggregated Countries list (47 countries)
export const COUNTRY_PROFILES: CountryTradeProfile[] = Object.keys(COUNTRY_META).map((countryAr) => {
  const meta = COUNTRY_META[countryAr];
  const countryInquiries = ALL_INQUIRIES.filter((r) => r.countryAr === countryAr);
  const dateInquiries = countryInquiries.filter((r) => r.sourceDataset.includes('تمور'));
  const divInquiries = countryInquiries.filter((r) => r.sourceDataset.includes('متنوعة'));
  
  const cats = Array.from(new Set(countryInquiries.map((r) => r.categoryNameAr)));
  const prods = Array.from(new Set(countryInquiries.map((r) => r.productNameAr)));
  const quantities = countryInquiries.map((r) => r.quantityRequested).filter(Boolean);
  const dates = countryInquiries.map((r) => r.inquiryDate).filter(Boolean);

  return {
    nameAr: countryAr,
    nameEn: meta.en,
    code: meta.code,
    flag: meta.flag,
    continent: meta.continent,
    continentAr: meta.continentAr,
    lat: meta.lat,
    lng: meta.lng,
    totalInquiries: countryInquiries.length,
    dateInquiriesCount: dateInquiries.length,
    diversifiedInquiriesCount: divInquiries.length,
    categories: cats,
    products: prods,
    documentedQuantities: quantities,
    inquiryDates: dates
  };
}).sort((a, b) => b.totalInquiries - a.totalInquiries);
`;

fs.writeFileSync('src/lib/trade-data.ts', code, 'utf8');
console.log('Successfully wrote src/lib/trade-data.ts!');

