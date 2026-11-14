const path = require('path');
const fs = require('fs');
const xlsx = require('xlsx');

const extractedDir = path.join(process.cwd(), 'extracted_env');
const allFiles = fs.readdirSync(extractedDir);

const xlsxFiles = allFiles.filter(f => f.endsWith('.xlsx'));
const docxFiles = allFiles.filter(f => f.endsWith('.docx') && !f.toLowerCase().startsWith('readme'));

console.log(`Total XLSX: ${xlsxFiles.length}, Total DOCX: ${docxFiles.length}`);

// Let's create an inventory map
const inventory = [];

xlsxFiles.forEach(xf => {
  // Try to find corresponding docx
  let base = xf.replace('_Environmental_Database.xlsx', '')
               .replace('_Environmental_Opportunity_Database.xlsx', '');
  
  // Find docx that matches base
  let matchingDocx = docxFiles.find(df => {
    let dbase = df.replace('_Environmental_Market_Study_AR.docx', '')
                  .replace('_Environmental_Market_Study.docx', '');
    return dbase === base || df.includes(base) || base.includes(dbase);
  });

  const fullXlsx = path.join(extractedDir, xf);
  const wb = xlsx.readFile(fullXlsx);
  
  // Let's read first sheet to inspect country name / data
  const firstSheetName = wb.SheetNames[0];
  const firstSheet = wb.Sheets[firstSheetName];
  const json = xlsx.utils.sheet_to_json(firstSheet, { header: 1 });

  inventory.push({
    base,
    xlsx: xf,
    docx: matchingDocx || null,
    sheetCount: wb.SheetNames.length,
    sheets: wb.SheetNames,
    firstRows: json.slice(0, 5)
  });
});

console.log(`Matched inventory items: ${inventory.length}`);
const unmatchedDocx = docxFiles.filter(df => !inventory.some(inv => inv.docx === df));
const unmatchedXlsx = inventory.filter(inv => !inv.docx);

console.log(`Unmatched DOCX: ${unmatchedDocx.length}`, unmatchedDocx);
console.log(`Unmatched XLSX: ${unmatchedXlsx.length}`, unmatchedXlsx.map(u => u.xlsx));
