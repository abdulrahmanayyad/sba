const path = require('path');
const fs = require('fs');
const xlsx = require('xlsx');

const extractedDir = path.join(process.cwd(), 'extracted_env');
const allFiles = fs.readdirSync(extractedDir);

const xlsxFiles = allFiles.filter(f => f.endsWith('.xlsx'));
const docxFiles = allFiles.filter(f => f.endsWith('.docx') && !f.toLowerCase().startsWith('readme'));

console.log(`Analyzing ${xlsxFiles.length} XLSX files and ${docxFiles.length} DOCX files...`);

const report = [];

xlsxFiles.forEach(xf => {
  const fullPath = path.join(extractedDir, xf);
  try {
    const wb = xlsx.readFile(fullPath);
    const sheetNames = wb.SheetNames;
    report.push({
      file: xf,
      sheetsCount: sheetNames.length,
      sheets: sheetNames
    });
  } catch (e) {
    report.push({
      file: xf,
      error: e.message
    });
  }
});

console.log('Sample of sheets inspection:');
report.slice(0, 10).forEach(r => {
  console.log(`- ${r.file}: ${r.sheetsCount} sheets -> [${(r.sheets || []).join(', ')}]`);
});

const non7Sheets = report.filter(r => r.sheetsCount !== 7);
console.log(`\nFiles with sheet count != 7: ${non7Sheets.length}`);
if (non7Sheets.length > 0) {
  non7Sheets.forEach(r => console.log(`  ${r.file}: ${r.sheetsCount} sheets`));
}
