const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');

console.log("=== RUNNING FINAL VERIFICATION REPORT ===");

// 1. Verify Studies Registry
const tsPath = path.join(process.cwd(), 'src', 'lib', 'studies', 'environmental-master-studies.ts');
const tsContent = fs.readFileSync(tsPath, 'utf8');

const eqIdx = tsContent.indexOf('= [');
const startIdx = eqIdx + 2;
const endIdx = tsContent.lastIndexOf('];');
const studies = JSON.parse(tsContent.slice(startIdx, endIdx + 1));

console.log(`1. Total Environmental Studies registered: ${studies.length}`);

// 2. Check each study download files & sheet counts
let validFiles = 0;
let validSheets = 0;
const issues = [];
const countrySummary = [];

studies.forEach((s, idx) => {
  const docxPath = path.join(process.cwd(), 'public', s.downloadDocxUrl.replace(/^\//, ''));
  const xlsxPath = path.join(process.cwd(), 'public', s.downloadXlsxUrl.replace(/^\//, ''));

  const docxExists = fs.existsSync(docxPath);
  const xlsxExists = fs.existsSync(xlsxPath);

  if (!docxExists) issues.push(`Missing DOCX for #${idx+1} ${s.countryNameAr}: ${s.downloadDocxUrl}`);
  if (!xlsxExists) issues.push(`Missing XLSX for #${idx+1} ${s.countryNameAr}: ${s.downloadXlsxUrl}`);

  let sheetCount = 0;
  let sheetNames = [];
  if (xlsxExists) {
    try {
      const wb = xlsx.readFile(xlsxPath);
      sheetCount = wb.SheetNames.length;
      sheetNames = wb.SheetNames;
      if (sheetCount < 7) {
        issues.push(`Sheet count < 7 for #${idx+1} ${s.countryNameAr} (${sheetCount} sheets)`);
      } else {
        validSheets++;
      }
    } catch (e) {
      issues.push(`Error reading XLSX for #${idx+1} ${s.countryNameAr}: ${e.message}`);
    }
  }

  if (docxExists && xlsxExists) validFiles++;

  countrySummary.push({
    num: idx + 1,
    iso: s.countryCode,
    countryAr: s.countryNameAr,
    countryEn: s.countryNameEn,
    score: s.opportunityScore,
    tierAr: s.opportunityTierAr,
    docx: path.basename(s.downloadDocxUrl),
    xlsx: path.basename(s.downloadXlsxUrl),
    sheetCount,
    status: (docxExists && xlsxExists && sheetCount >= 7) ? "VERIFIED" : "ERROR"
  });
});

console.log(`2. File Existence: ${validFiles} / ${studies.length} countries have both DOCX and XLSX.`);
console.log(`3. 7-Sheet Compliance: ${validSheets} / ${studies.length} workbooks have at least 7 worksheets.`);

// 4. Tanween Audit
const filesToCheckTanween = [
  'src/lib/studies/environmental-master-studies.ts',
  'src/lib/global-markets-data.ts',
  'src/components/global-markets/global-markets-sector-page.tsx',
  'src/components/global-markets/global-markets-study-page.tsx'
];

let totalBadTanween = 0;
filesToCheckTanween.forEach(f => {
  const full = path.join(process.cwd(), f);
  if (fs.existsSync(full)) {
    const text = fs.readFileSync(full, 'utf8');
    const bad = text.match(/\u0627\u064B/g);
    const count = bad ? bad.length : 0;
    console.log(`   - ${f}: ${count} bad tanween (\\u0627\\u064B)`);
    totalBadTanween += count;
  }
});

console.log(`4. Total Bad Tanween in modified files: ${totalBadTanween}`);

// 5. Total Published Studies in Registry
const gmdContent = fs.readFileSync('src/lib/global-markets-data.ts', 'utf8');
const includesEnv = gmdContent.includes('...ENVIRONMENTAL_66_MASTER_STUDIES');
console.log(`5. ENVIRONMENTAL_66_MASTER_STUDIES included in PUBLISHED_GLOBAL_STUDIES: ${includesEnv}`);

console.log(`\nIssues detected: ${issues.length}`);
if (issues.length > 0) {
  issues.forEach(iss => console.log(' - ' + iss));
} else {
  console.log("ALL 66 STUDIES PASSED VERIFICATION WITH ZERO ERRORS!");
}

fs.writeFileSync('scripts/final-verification-data.json', JSON.stringify({
  totalStudies: studies.length,
  verifiedFiles: validFiles,
  verifiedWorksheets: validSheets,
  badTanween: totalBadTanween,
  countries: countrySummary
}, null, 2));
