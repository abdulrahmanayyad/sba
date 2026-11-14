const fs = require('fs');
const content = fs.readFileSync('src/components/global-markets/global-markets-study-page.tsx', 'utf8');

const lines = content.split('\n');
console.log(lines.slice(165, 195).join('\n'));
