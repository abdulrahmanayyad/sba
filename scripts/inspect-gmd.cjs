const fs = require('fs');
const content = fs.readFileSync('src/lib/global-markets-data.ts', 'utf8');

const regex = /id:\s*["']environmental["']/g;
let match;
while ((match = regex.exec(content)) !== null) {
  console.log(content.slice(match.index - 10, match.index + 800));
}
