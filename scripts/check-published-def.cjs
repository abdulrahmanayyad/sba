const fs = require('fs');
const content = fs.readFileSync('src/lib/global-markets-data.ts', 'utf8');

const lines = content.split('\n');
const start = lines.findIndex(l => l.includes('export const PUBLISHED_GLOBAL_STUDIES'));
console.log(lines.slice(start - 5, start + 15).join('\n'));
