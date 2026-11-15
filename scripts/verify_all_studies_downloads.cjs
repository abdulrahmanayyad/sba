const fs = require('fs');
const path = require('path');

// Let's parse all study files in src/lib/studies/
const studiesDir = path.join(__dirname, '..', 'src', 'lib', 'studies');
const publicDir = path.join(__dirname, '..', 'public');

console.log('--- AUDITING ALL STUDY DOWNLOAD URLs ---');

// Find all ts files in studiesDir
const files = fs.readdirSync(studiesDir).filter(f => f.endsWith('.ts'));

let totalStudiesFound = 0;
let missingFiles = [];
let validFiles = [];
let studiesWithoutDownloads = [];

files.forEach(file => {
  const filePath = path.join(studiesDir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  // Find slugs and URLs
  // Slugs: slug:\s*"([^"]+)"
  // downloadDocxUrl:\s*"([^"]+)"
  // downloadXlsxUrl:\s*"([^"]+)"
  // downloadZipUrl:\s*"([^"]+)"
  // pdfUrl:\s*"([^"]+)"

  const urlRegex = /(downloadDocxUrl|downloadXlsxUrl|downloadZipUrl|pdfUrl):\s*["']([^"']+)["']/g;
  let match;
  while ((match = urlRegex.exec(content)) !== null) {
    const prop = match[1];
    const url = match[2];
    // Resolve URL to public dir
    // E.g. /studies/apparel/xyz.docx -> public/studies/apparel/xyz.docx
    const localPath = path.join(publicDir, url.replace(/^\//, ''));
    if (!fs.existsSync(localPath)) {
      missingFiles.push({ file, prop, url, localPath });
    } else {
      validFiles.push({ file, prop, url, localPath });
    }
  }
});

console.log('Total valid download URL references found:', validFiles.length);
console.log('Total MISSING / BROKEN download URL references found:', missingFiles.length);

if (missingFiles.length > 0) {
  console.log('\n=== BROKEN / MISSING FILES REFERENCED IN CODE ===');
  missingFiles.forEach(m => {
    console.log(`[${m.file}] ${m.prop}: ${m.url}`);
    console.log(`   -> Looked for on disk: ${m.localPath}`);
  });
} else {
  console.log('All referenced URLs exist on disk!');
}
