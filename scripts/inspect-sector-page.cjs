const fs = require('fs');
const content = fs.readFileSync('src/components/global-markets/global-markets-sector-page.tsx', 'utf8');

console.log('File size:', content.length);
// Check occurrences of sector
const matches = content.match(/sector(Id)?/g);
console.log('sector occurrences:', matches ? matches.length : 0);

// Let's print sections dealing with studies list or filtering
const lines = content.split('\n');
lines.forEach((line, i) => {
  if (line.includes('environmental') || line.includes('studies') || line.includes('PUBLISHED_GLOBAL_STUDIES')) {
    console.log(`Line ${i+1}: ${line.trim()}`);
  }
});
