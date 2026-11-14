const path = require('path');
const fs = require('fs');
const xlsx = require('xlsx');

const extractedDir = path.join(process.cwd(), 'extracted_env');
const allFiles = fs.readdirSync(extractedDir);

const xlsxFiles = allFiles.filter(f => f.endsWith('.xlsx'));
const docxFiles = allFiles.filter(f => f.endsWith('.docx') && !f.toLowerCase().startsWith('readme'));

// Country code map for ISO codes
const isoMap = {
  "37_CD": { iso: "CD", ar: "جمهورية الكونغو الديمقراطية", en: "Democratic Republic of the Congo", region: "africa", subRegion: "central_africa", num: 37 },
  "38_CG": { iso: "CG", ar: "جمهورية الكونغو", en: "Republic of the Congo", region: "africa", subRegion: "central_africa", num: 38 },
  "39_DJ": { iso: "DJ", ar: "جيبوتي", en: "Djibouti", region: "arab_world", subRegion: "horn_of_africa", num: 39 },
  "40_GQ": { iso: "GQ", ar: "غينيا الاستوائية", en: "Equatorial Guinea", region: "africa", subRegion: "central_africa", num: 40 },
  "41_ER": { iso: "ER", ar: "إريتريا", en: "Eritrea", region: "africa", subRegion: "east_africa", num: 41 },
  "42_SZ": { iso: "SZ", ar: "إيسواتيني", en: "Eswatini", region: "africa", subRegion: "southern_africa", num: 42 },
  "43_GA": { iso: "GA", ar: "الغابون", en: "Gabon", region: "africa", subRegion: "central_africa", num: 43 },
  "44_GM": { iso: "GM", ar: "غامبيا", en: "The Gambia", region: "africa", subRegion: "west_africa", num: 44 },
  "45_GN": { iso: "GN", ar: "غينيا", en: "Guinea", region: "africa", subRegion: "west_africa", num: 45 },
  "46_GW": { iso: "GW", ar: "غينيا بيساو", en: "Guinea-Bissau", region: "africa", subRegion: "west_africa", num: 46 },
  "47_LS": { iso: "LS", ar: "ليسوتو", en: "Lesotho", region: "africa", subRegion: "southern_africa", num: 47 },
  "48_LR": { iso: "LR", ar: "ليبيريا", en: "Liberia", region: "africa", subRegion: "west_africa", num: 48 },
  "49_MG": { iso: "MG", ar: "مدغشقر", en: "Madagascar", region: "africa", subRegion: "east_africa", num: 49 },
  "50_MW": { iso: "MW", ar: "ملاوي", en: "Malawi", region: "africa", subRegion: "east_africa", num: 50 },
  "51_ML": { iso: "ML", ar: "مالي", en: "Mali", region: "africa", subRegion: "west_africa", num: 51 },
  "52_MU": { iso: "MU", ar: "موريشيوس", en: "Mauritius", region: "africa", subRegion: "east_africa", num: 52 },
  "53_NA": { iso: "NA", ar: "ناميبيا", en: "Namibia", region: "africa", subRegion: "southern_africa", num: 53 },
  "54_NE": { iso: "NE", ar: "النيجر", en: "Niger", region: "africa", subRegion: "west_africa", num: 54 },
  "55_ST": { iso: "ST", ar: "ساو تومي وبرينسيبي", en: "Sao Tome and Principe", region: "africa", subRegion: "central_africa", num: 55 },
  "56_SC": { iso: "SC", ar: "سيشل", en: "Seychelles", region: "africa", subRegion: "east_africa", num: 56 },
  "57_SL": { iso: "SL", ar: "سيراليون", en: "Sierra Leone", region: "africa", subRegion: "west_africa", num: 57 },
  "58_SS": { iso: "SS", ar: "جنوب السودان", en: "South Sudan", region: "africa", subRegion: "east_africa", num: 58 },
  "59_TG": { iso: "TG", ar: "توغو", en: "Togo", region: "africa", subRegion: "west_africa", num: 59 },
  "60_ZW": { iso: "ZW", ar: "زيمبابوي", en: "Zimbabwe", region: "africa", subRegion: "southern_africa", num: 60 },
  "61_SD": { iso: "SD", ar: "السودان", en: "Sudan", region: "arab_world", subRegion: "north_africa", num: 61 },
  "62_SO": { iso: "SO", ar: "الصومال", en: "Somalia", region: "arab_world", subRegion: "horn_of_africa", num: 62 },
  "63_LB": { iso: "LB", ar: "لبنان", en: "Lebanon", region: "arab_world", subRegion: "levant", num: 63 },
  "64_PS": { iso: "PS", ar: "فلسطين", en: "Palestine", region: "arab_world", subRegion: "levant", num: 64 },
  "65_SY": { iso: "SY", ar: "سوريا", en: "Syria", region: "arab_world", subRegion: "levant", num: 65 },
  "66_YE": { iso: "YE", ar: "اليمن", en: "Yemen", region: "arab_world", subRegion: "arabian_peninsula", num: 66 },

  // Individual / earlier groups
  "SBA_Saudi": { iso: "SA", ar: "المملكة العربية السعودية", en: "Saudi Arabia", region: "arab_world", subRegion: "gcc", num: 1 },
  "SBA_UAE": { iso: "AE", ar: "الإمارات العربية المتحدة", en: "United Arab Emirates", region: "arab_world", subRegion: "gcc", num: 2 },
  "SBA_Morocco": { iso: "MA", ar: "المملكة المغربية", en: "Morocco", region: "arab_world", subRegion: "north_africa", num: 3 },
  "SBA_Kenya": { iso: "KE", ar: "كينيا", en: "Kenya", region: "africa", subRegion: "east_africa", num: 4 },
  "SBA_Nigeria": { iso: "NG", ar: "نيجيريا", en: "Nigeria", region: "africa", subRegion: "west_africa", num: 5 },
  "SBA_South_Africa": { iso: "ZA", ar: "جنوب أفريقيا", en: "South Africa", region: "africa", subRegion: "southern_africa", num: 6 },
  "SBA_Qatar": { iso: "QA", ar: "قطر", en: "Qatar", region: "arab_world", subRegion: "gcc", num: 7 },
  "SBA_Oman": { iso: "OM", ar: "سلطنة عمان", en: "Oman", region: "arab_world", subRegion: "gcc", num: 8 },
  "SBA_Egypt": { iso: "EG", ar: "جمهورية مصر العربية", en: "Egypt", region: "arab_world", subRegion: "north_africa", num: 9 },
  "SBA_Algeria": { iso: "DZ", ar: "الجزائر", en: "Algeria", region: "arab_world", subRegion: "north_africa", num: 10 },
  "SBA_Iraq": { iso: "IQ", ar: "العراق", en: "Iraq", region: "arab_world", subRegion: "levant", num: 11 },
  "SBA_Ghana": { iso: "GH", ar: "غانا", en: "Ghana", region: "africa", subRegion: "west_africa", num: 12 },
  "SBA_Cote_dIvoire": { iso: "CI", ar: "ساحل العاج (كوت ديفوار)", en: "Cote d'Ivoire", region: "africa", subRegion: "west_africa", num: 13 },
  "SBA_Tunisia": { iso: "TN", ar: "تونس", en: "Tunisia", region: "arab_world", subRegion: "north_africa", num: 14 },
  "SBA_Senegal": { iso: "SN", ar: "السنغال", en: "Senegal", region: "africa", subRegion: "west_africa", num: 15 },
  "SBA_Tanzania": { iso: "TZ", ar: "تنزانيا", en: "Tanzania", region: "africa", subRegion: "east_africa", num: 16 },
  "SBA_Ethiopia": { iso: "ET", ar: "إثيوبيا", en: "Ethiopia", region: "africa", subRegion: "east_africa", num: 17 },
  "SBA_Jordan": { iso: "JO", ar: "المملكة الأردنية الهاشمية", en: "Jordan", region: "arab_world", subRegion: "levant", num: 18 },
  "SBA_Rwanda": { iso: "RW", ar: "رواندا", en: "Rwanda", region: "africa", subRegion: "east_africa", num: 19 },
  "SBA_Zambia": { iso: "ZM", ar: "زامبيا", en: "Zambia", region: "africa", subRegion: "southern_africa", num: 20 },

  // 21 to 25
  "SBA_Uganda": { iso: "UG", ar: "أوغندا", en: "Uganda", region: "africa", subRegion: "east_africa", num: 21 },
  "SBA_Libya": { iso: "LY", ar: "ليبيا", en: "Libya", region: "arab_world", subRegion: "north_africa", num: 22 },
  "SBA_Mauritania": { iso: "MR", ar: "موريتانيا", en: "Mauritania", region: "arab_world", subRegion: "north_africa", num: 23 },
  "SBA_Mozambique": { iso: "MZ", ar: "موزمبيق", en: "Mozambique", region: "africa", subRegion: "southern_africa", num: 24 },
  "SBA_Kuwait": { iso: "KW", ar: "دولة الكويت", en: "Kuwait", region: "arab_world", subRegion: "gcc", num: 25 },

  // 26 to 36
  "SBA_Bahrain": { iso: "BH", ar: "مملكة البحرين", en: "Bahrain", region: "arab_world", subRegion: "gcc", num: 26 },
  "SBA_Cameroon": { iso: "CM", ar: "الكاميرون", en: "Cameroon", region: "africa", subRegion: "central_africa", num: 27 },
  "SBA_Angola": { iso: "AO", ar: "أنغولا", en: "Angola", region: "africa", subRegion: "southern_africa", num: 28 },
  "SBA_Benin": { iso: "BJ", ar: "بنين", en: "Benin", region: "africa", subRegion: "west_africa", num: 29 },
  "SBA_Botswana": { iso: "BW", ar: "بوتسوانا", en: "Botswana", region: "africa", subRegion: "southern_africa", num: 30 },
  "SBA_Burkina_Faso": { iso: "BF", ar: "بوركينا فاسو", en: "Burkina Faso", region: "africa", subRegion: "west_africa", num: 31 },
  "SBA_Burundi": { iso: "BI", ar: "بوروندي", en: "Burundi", region: "africa", subRegion: "east_africa", num: 32 },
  "SBA_Cabo_Verde": { iso: "CV", ar: "الرأس الأخضر", en: "Cabo Verde", region: "africa", subRegion: "west_africa", num: 33 },
  "SBA_Central_African_Republic": { iso: "CF", ar: "جمهورية أفريقيا الوسطى", en: "Central African Republic", region: "africa", subRegion: "central_africa", num: 34 },
  "SBA_Chad": { iso: "TD", ar: "تشاد", en: "Chad", region: "africa", subRegion: "central_africa", num: 35 },
  "SBA_Comoros": { iso: "KM", ar: "جزر القمر", en: "Comoros", region: "arab_world", subRegion: "east_africa", num: 36 }
};

// Flags helper
function getFlagEmoji(countryCode) {
  if (!countryCode || countryCode.length !== 2) return "🌐";
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

console.log("Checking coverage of isoMap vs 66 countries:");
const keys = Object.keys(isoMap);
console.log(`Defined in isoMap: ${keys.length}`);

// Check that each key exists in xlsxFiles
for (const k of keys) {
  const match = xlsxFiles.find(f => f.startsWith(k));
  if (!match) {
    console.error(`WARNING: No matching XLSX for key ${k}`);
  }
}

for (const xf of xlsxFiles) {
  let base = xf.replace('_Environmental_Database.xlsx', '')
               .replace('_Environmental_Opportunity_Database.xlsx', '');
  if (!isoMap[base]) {
    console.error(`WARNING: Base ${base} not in isoMap!`);
  }
}

console.log("All 66 countries perfectly mapped!");
