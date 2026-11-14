const fs = require('fs');
const path = require('path');

const srcDir = path.join(process.cwd(), 'extracted_env');
const destDir = path.join(process.cwd(), 'public', 'studies', 'environmental');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const allFiles = fs.readdirSync(srcDir);
const xlsxFiles = allFiles.filter(f => f.endsWith('.xlsx'));
const docxFiles = allFiles.filter(f => f.endsWith('.docx') && !f.toLowerCase().startsWith('readme'));

console.log(`Copying ${docxFiles.length} DOCX and ${xlsxFiles.length} XLSX files to ${destDir}...`);

let copiedCount = 0;

[...docxFiles, ...xlsxFiles].forEach(f => {
  const src = path.join(srcDir, f);
  const dest = path.join(destDir, f);
  fs.copyFileSync(src, dest);
  copiedCount++;
});

console.log(`Successfully copied ${copiedCount} files into ${destDir}.`);

// Verify
const destFiles = fs.readdirSync(destDir);
console.log(`Dest folder now contains ${destFiles.length} files.`);
