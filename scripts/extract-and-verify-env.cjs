const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const xlsx = require('xlsx');

const envZipsDir = path.join(process.cwd(), 'public', 'دراسات قطاع البيئة');
const extractedDir = path.join(process.cwd(), 'extracted_env');
const targetPublicDir = path.join(process.cwd(), 'public', 'studies', 'environmental');

if (!fs.existsSync(extractedDir)) fs.mkdirSync(extractedDir, { recursive: true });
if (!fs.existsSync(targetPublicDir)) fs.mkdirSync(targetPublicDir, { recursive: true });

const zips = fs.readdirSync(envZipsDir).filter(f => f.endsWith('.zip'));

console.log(`Extracting ${zips.length} archives into ${extractedDir}...`);

for (const z of zips) {
  const zipPath = path.join(envZipsDir, z);
  try {
    execSync(`tar -xf "${zipPath}" -C "${extractedDir}"`);
    console.log(`  Extracted: ${z}`);
  } catch (err) {
    console.error(`  Error extracting ${z}:`, err.message);
  }
}

// Now list all files in extractedDir
const allExtracted = fs.readdirSync(extractedDir);
console.log(`Total extracted files: ${allExtracted.length}`);

// Group by country or detect docx and xlsx pairs
const docxFiles = allExtracted.filter(f => f.endsWith('.docx'));
const xlsxFiles = allExtracted.filter(f => f.endsWith('.xlsx'));

console.log(`Found ${docxFiles.length} DOCX files and ${xlsxFiles.length} XLSX files.`);

