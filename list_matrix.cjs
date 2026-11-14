const XLSX = require('xlsx');
const wb = XLSX.readFile('C:\\Users\\20101\\Downloads\\sba-brand-compass\\temp_extract\\SBA_Global_Apparel_41_Country_Data_Matrix.xlsx');
const ws = wb.Sheets['41-Country Matrix'];
const data = XLSX.utils.sheet_to_json(ws);
console.log('Total countries in 41-Matrix:', data.length);
data.forEach((r, i) => {
  console.log(`${i+1}. [${r.Region}] ${r.Country} (${r['Arabic Name']})`);
});
