const fs = require('fs');
const path = require('path');

const tsPath = path.join(process.cwd(), 'src', 'lib', 'studies', 'environmental-master-studies.ts');
const tsContent = fs.readFileSync(tsPath, 'utf8');

// Find the start of the array assignment: "= ["
const eqIdx = tsContent.indexOf('= [');
const startIdx = eqIdx + 2;
const endIdx = tsContent.lastIndexOf('];');
const studies = JSON.parse(tsContent.slice(startIdx, endIdx + 1));

console.log(`Verifying download links for ${studies.length} studies...`);

let missingDocx = 0;
let missingXlsx = 0;

studies.forEach(s => {
  const docxRel = s.downloadDocxUrl.replace(/^\//, '');
  const xlsxRel = s.downloadXlsxUrl.replace(/^\//, '');

  const docxFull = path.join(process.cwd(), 'public', docxRel);
  const xlsxFull = path.join(process.cwd(), 'public', xlsxRel);

  if (!fs.existsSync(docxFull)) {
    console.error(`Missing DOCX for ${s.countryNameAr}: ${docxFull}`);
    missingDocx++;
  }
  if (!fs.existsSync(xlsxFull)) {
    console.error(`Missing XLSX for ${s.countryNameAr}: ${xlsxFull}`);
    missingXlsx++;
  }
});

console.log(`Verification results:`);
console.log(`- Total studies verified: ${studies.length}`);
console.log(`- Missing DOCX: ${missingDocx}`);
console.log(`- Missing XLSX: ${missingXlsx}`);
