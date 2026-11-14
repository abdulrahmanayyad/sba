const XLSX = require('xlsx');

const wb = XLSX.readFile('C:\\Users\\20101\\Downloads\\sba-brand-compass\\temp_extract\\SBA_Global_Apparel_41_Country_Data_Matrix.xlsx');
console.log('Sheets:', wb.SheetNames);

wb.SheetNames.forEach(sheetName => {
  const ws = wb.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(ws);
  console.log(`Sheet "${sheetName}": ${data.length} rows`);
  if (data.length > 0) {
    console.log('Columns:', Object.keys(data[0]));
    console.log('First 2 rows:', JSON.stringify(data.slice(0, 2), null, 2));
  }
});
