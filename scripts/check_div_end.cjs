const XLSX = require('xlsx');

const wb = XLSX.readFile('بيان تصدير منتجات متنوعة 2025.xlsx');
const ws = wb.Sheets['2025'];
const rows = XLSX.utils.sheet_to_json(ws, { header: 1 });

console.log('Total rows in Diversified:', rows.length);
rows.forEach((r, idx) => {
  if (r && r[0] && typeof r[0] === 'number') {
    if (r[0] > 110) {
      console.log(`Row ${idx + 1} (ID ${r[0]}): [${r.slice(0, 4).join(' | ')}]`);
    }
  }
});

