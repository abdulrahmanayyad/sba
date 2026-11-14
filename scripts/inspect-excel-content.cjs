const path = require('path');
const fs = require('fs');
const xlsx = require('xlsx');

const extractedDir = path.join(process.cwd(), 'extracted_env');

const filesToInspect = [
  'SBA_Saudi_Environmental_Opportunity_Database.xlsx',
  'SBA_UAE_Environmental_Opportunity_Database.xlsx',
  'SBA_Egypt_Environmental_Opportunity_Database.xlsx',
  'SBA_Morocco_Environmental_Opportunity_Database.xlsx',
  'SBA_Kenya_Environmental_Opportunity_Database.xlsx',
  '37_CD_Environmental_Database.xlsx',
  '63_LB_Environmental_Database.xlsx'
];

filesToInspect.forEach(f => {
  console.log(`\n================== ${f} ==================`);
  const wb = xlsx.readFile(path.join(extractedDir, f));
  console.log('Sheets:', wb.SheetNames);
  wb.SheetNames.forEach(sn => {
    const s = wb.Sheets[sn];
    const rows = xlsx.utils.sheet_to_json(s, { header: 1 });
    console.log(`\n--- Sheet: [${sn}] (${rows.length} rows) ---`);
    rows.slice(0, 4).forEach((r, idx) => console.log(`  row ${idx}:`, JSON.stringify(r)));
  });
});
