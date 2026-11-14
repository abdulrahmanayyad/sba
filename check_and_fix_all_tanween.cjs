const fs = require('fs');
const path = require('path');

let fixedCount = 0;
let fileCount = 0;

function scanDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (ent.name !== 'node_modules' && ent.name !== '.git' && ent.name !== '.output' && ent.name !== 'dist' && ent.name !== 'temp_extract' && ent.name !== 'extracted_studies') {
        scanDir(full);
      }
    } else if (ent.isFile() && /\.(tsx?|jsx?|json)$/.test(ent.name)) {
      fileCount++;
      const text = fs.readFileSync(full, 'utf8');
      if (/\u0627\u064B/.test(text)) {
        const matches = (text.match(/\u0627\u064B/g) || []).length;
        const fixed = text.replace(/\u0627\u064B/g, '\u064B\u0627');
        fs.writeFileSync(full, fixed, 'utf8');
        fixedCount += matches;
        console.log(`Fixed ${matches} bad tanween in ${full}`);
      }
    }
  }
}

scanDir('src');
console.log(`Scan completed across ${fileCount} files in src. Total fixed: ${fixedCount}`);
