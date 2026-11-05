const XLSX = require('xlsx');

function checkRows(filePath, sheetName) {
  const wb = XLSX.readFile(filePath);
  const ws = wb.Sheets[sheetName];
  const rows = XLSX.utils.sheet_to_json(ws, { header: 1 });
  console.log(`=== ${filePath} ===`);
  rows.forEach((r, idx) => {
    if (idx > 60 && idx < 80) {
      console.log(`Row ${idx + 1}: [${r.join(' | ')}]`);
    }
  });
}

checkRows('بيان تصدير تمور 2025.xlsx', '2025');
checkRows('بيان تصدير منتجات متنوعة 2025.xlsx', '2025');

