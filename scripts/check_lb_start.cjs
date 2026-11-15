const fs = require('fs');
const content = fs.readFileSync('src/lib/studies/apparel-master-studies.ts', 'utf8');
const lines = content.split('\n');
console.log(lines.slice(1275, 1315).join('\n'));
