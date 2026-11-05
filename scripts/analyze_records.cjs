const XLSX = require('xlsx');
const path = require('path');

function parseDatesFile(filePath) {
  const wb = XLSX.readFile(filePath);
  const ws = wb.Sheets['2025'] || wb.Sheets[wb.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json(ws, { header: 1 });
  
  // Find header row
  let headerIdx = -1;
  for (let i = 0; i < 10; i++) {
    if (rows[i] && (rows[i].includes('المشتري من') || rows[i].includes('اسم المنتج'))) {
      headerIdx = i;
      break;
    }
  }
  
  const headers = rows[headerIdx];
  console.log('Dates headers:', headers);
  
  const records = [];
  for (let i = headerIdx + 1; i < rows.length; i++) {
    const r = rows[i];
    if (!r || r.length === 0 || !r[0]) continue;
    // id, date, country, product, specs, style/variety, quantity, shippingTerms, destinationPort, paymentTerms, suppliers, contact
    const rec = {
      sourceFile: 'dates_2025',
      originalRow: i + 1,
      idNum: r[0],
      rawDate: r[1],
      country: r[2] ? String(r[2]).trim() : '',
      product: r[3] ? String(r[3]).trim() : '',
      specs: r[4] ? String(r[4]).trim() : '',
      style: r[5] ? String(r[5]).trim() : '',
      quantity: r[6] ? String(r[6]).trim() : '',
      shippingTerms: r[7] ? String(r[7]).trim() : '',
      destinationPort: r[8] ? String(r[8]).trim() : '',
      paymentTerms: r[9] ? String(r[9]).trim() : '',
      suppliers: r[10] ? String(r[10]).trim() : '',
      contactPerson: r[11] ? String(r[11]).trim() : ''
    };
    records.push(rec);
  }
  return records;
}

function parseDiversifiedFile(filePath) {
  const wb = XLSX.readFile(filePath);
  const ws = wb.Sheets['2025'] || wb.Sheets[wb.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json(ws, { header: 1 });
  
  let headerIdx = -1;
  for (let i = 0; i < 10; i++) {
    if (rows[i] && (rows[i].includes('المشتري من') || rows[i].includes('اسم المنتج'))) {
      headerIdx = i;
      break;
    }
  }
  
  const headers = rows[headerIdx];
  console.log('Diversified headers:', headers);
  
  const records = [];
  for (let i = headerIdx + 1; i < rows.length; i++) {
    const r = rows[i];
    if (!r || r.length === 0 || !r[0]) continue;
    // id, date, country, product, buyerDetails, contact
    const rec = {
      sourceFile: 'diversified_2025',
      originalRow: i + 1,
      idNum: r[0],
      rawDate: r[1],
      country: r[2] ? String(r[2]).trim() : '',
      product: r[3] ? String(r[3]).trim() : '',
      buyerDetails: r[4] ? String(r[4]).trim() : '',
      contactPerson: r[5] ? String(r[5]).trim() : ''
    };
    records.push(rec);
  }
  return records;
}

const dateRecs = parseDatesFile('بيان تصدير تمور 2025.xlsx');
const divRecs = parseDiversifiedFile('بيان تصدير منتجات متنوعة 2025.xlsx');

console.log('Date Records Count:', dateRecs.length);
console.log('Diversified Records Count:', divRecs.length);
console.log('Total Records:', dateRecs.length + divRecs.length);

const allCountries = new Set();
dateRecs.forEach(r => r.country && allCountries.add(r.country));
divRecs.forEach(r => r.country && allCountries.add(r.country));

console.log('Unique raw countries count:', allCountries.size);
console.log('Raw countries list:', Array.from(allCountries).sort());

