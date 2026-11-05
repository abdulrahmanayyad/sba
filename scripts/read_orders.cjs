const XLSX = require('xlsx');
const path = 'C:\\Users\\20101\\Documents\\Copy of بيان_طلبيات(1).xlsx';
try {
  const wb = XLSX.readFile(path);
  console.log('Sheets:', wb.SheetNames);
  for (const name of wb.SheetNames) {
    const ws = wb.Sheets[name];
    const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
    console.log(`Sheet "${name}" rows:`, data.length);
    if (data.length > 0) {
      console.log('First 3 rows:', data.slice(0, 3));
    }
  }
} catch (e) {
  console.error(e.message);
}

