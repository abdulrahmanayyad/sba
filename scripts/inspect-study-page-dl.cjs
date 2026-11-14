const fs = require('fs');
const content = fs.readFileSync('src/components/global-markets/global-markets-study-page.tsx', 'utf8');

const lines = content.split('\n');
console.log('Total lines in study-page:', lines.length);

lines.forEach((l, idx) => {
  if (l.includes('downloadDocxUrl') || l.includes('downloadXlsxUrl') || l.includes('downloadZipUrl') || l.includes('تحميل')) {
    console.log(`L${idx+1}: ${l.trim()}`);
  }
});
