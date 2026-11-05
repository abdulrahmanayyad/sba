const XLSX = require('xlsx');
const path = require('path');

const files = [
  'بيان تصدير تمور 2025.xlsx',
  'بيان تصدير منتجات متنوعة 2025.xlsx'
];

for (const file of files) {
  console.log('====================================');
  console.log('FILE:', file);
  try {
    const filePath = path.resolve(file);
    const wb = XLSX.readFile(filePath);
    console.log('Sheets:', wb.SheetNames);
    for (const sheetName of wb.SheetNames) {
      const ws = wb.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
      console.log(`Sheet "${sheetName}" row count:`, data.length);
      console.log('First 5 rows:');
      console.log(JSON.stringify(data.slice(0, 5), null, 2));
    }
  } catch (err) {
    console.error('Error reading file:', err.message);
  }
}

