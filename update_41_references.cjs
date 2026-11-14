const fs = require('fs');

function replaceInFile(filePath, replacements) {
  let content = fs.readFileSync(filePath, 'utf8');
  for (const [from, to] of replacements) {
    content = content.split(from).join(to);
  }
  // Sanitize Tanween
  content = content.replace(/\u0627\u064B/g, '\u064B\u0627');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${filePath}`);
}

// 1. apparel-comparative-page.tsx
replaceInFile('src/components/global-markets/apparel-comparative-page.tsx', [
  ['قطاع الملابس والمنسوجات (41 دولة)', 'قطاع الملابس والمنسوجات (الدراسات المعتمدة)'],
  ['Comparative Dashboard (41 Countries)', 'Comparative Dashboard (Verified Markets)'],
  ['المقارنة الشاملة (41 دولة)', 'المقارنة الشاملة للأسواق الدولية'],
  ['مقارنة منضبطة منهجيًا للدول الـ41', 'مقارنة منضبطة منهجياً للأسواق الدولية المعتمدة'],
  ['across all 41 markets', 'across all verified international markets'],
  ['Master 41-Country Matrix Table', 'Master International Markets Matrix Table'],
]);

// 2. global-markets-home.tsx
replaceInFile('src/components/global-markets/global-markets-home.tsx', [
  ['لوحة مقارنة الملابس (41 دولة)', 'لوحة مقارنة الأسواق الدولية'],
  ['Apparel Compare Dashboard (41 Countries)', 'Apparel Compare Dashboard (Verified Markets)'],
]);

// 3. global-markets-sector-page.tsx
replaceInFile('src/components/global-markets/global-markets-sector-page.tsx', [
  ['لوحة المقارنة الشاملة (41 دولة)', 'لوحة المقارنة الشاملة للأسواق الدولية'],
  ['Global 41-Country Comparative Dashboard', 'Global Comparative Dashboard (Verified Markets)'],
]);

// 4. global-markets-study-page.tsx
replaceInFile('src/components/global-markets/global-markets-study-page.tsx', [
  ['لوحة المقارنة الشاملة (41 دولة)', 'لوحة المقارنة الشاملة للأسواق الدولية'],
  ['Global 41-Country Dashboard', 'Global Comparative Dashboard'],
]);
