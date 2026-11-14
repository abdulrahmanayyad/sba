const fs = require('fs');
const content = fs.readFileSync('src/components/global-markets/global-markets-sector-page.tsx', 'utf8');

const lines = content.split('\n');
console.log(lines.slice(620, 670).join('\n'));
