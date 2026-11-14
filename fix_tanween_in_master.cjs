const fs = require('fs');

let content = fs.readFileSync('src/lib/studies/apparel-master-studies.ts', 'utf8');

// Replace \u0627\u064B (Alef followed by Tanween Fatha) with \u064B\u0627 (Tanween Fatha followed by Alef)
content = content.replace(/\u0627\u064B/g, '\u064B\u0627');

fs.writeFileSync('src/lib/studies/apparel-master-studies.ts', content, 'utf8');

const remaining = (content.match(/\u0627\u064B/g) || []).length;
console.log('Fixed! Remaining bad tanween count:', remaining);
