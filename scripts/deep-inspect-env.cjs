const path = require('path');
const fs = require('fs');
const xlsx = require('xlsx');

const extractedDir = path.join(process.cwd(), 'extracted_env');
const allFiles = fs.readdirSync(extractedDir);

const xlsxFiles = allFiles.filter(f => f.endsWith('.xlsx'));
const docxFiles = allFiles.filter(f => f.endsWith('.docx') && !f.toLowerCase().startsWith('readme'));

const countries = [];

for (const xf of xlsxFiles) {
  let base = xf.replace('_Environmental_Database.xlsx', '')
               .replace('_Environmental_Opportunity_Database.xlsx', '');
  
  let matchingDocx = docxFiles.find(df => {
    let dbase = df.replace('_Environmental_Market_Study_AR.docx', '')
                  .replace('_Environmental_Market_Study.docx', '');
    return dbase === base || df.includes(base) || base.includes(dbase);
  });

  const fullXlsx = path.join(extractedDir, xf);
  const wb = xlsx.readFile(fullXlsx);
  
  const sheetNames = wb.SheetNames;
  // Inspect sheets data
  const data = {};
  sheetNames.forEach(sn => {
    const s = wb.Sheets[sn];
    const rows = xlsx.utils.sheet_to_json(s, { header: 1 });
    data[sn] = rows.slice(0, 15);
  });

  countries.push({
    base,
    xlsx: xf,
    docx: matchingDocx,
    sheets: sheetNames,
    data
  });
}

console.log(`Analyzed ${countries.length} countries.`);

// Print summary of each country base
countries.forEach((c, i) => {
  console.log(`${i+1}. [${c.base}] -> docx: ${c.docx}, sheets: ${c.sheets.length}`);
});

fs.writeFileSync('scripts/env-summary.json', JSON.stringify(countries.map(c => ({
  base: c.base,
  xlsx: c.xlsx,
  docx: c.docx,
  sheets: c.sheets,
  sampleRows: c.data[c.sheets[0]]?.slice(0, 5)
})), null, 2));
