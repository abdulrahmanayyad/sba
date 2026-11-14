const fs = require('fs');

const content = fs.readFileSync('src/lib/studies/apparel-41-countries.ts', 'utf8');
const countryMatches = content.match(/countryNameEn:\s*"([^"]+)"/g) || [];
console.log('Total countryNameEn matches:', countryMatches.length);
countryMatches.forEach((m, i) => {
  console.log(`${i+1}. ${m}`);
});
