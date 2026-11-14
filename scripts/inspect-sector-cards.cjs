const fs = require('fs');
const content = fs.readFileSync('src/components/global-markets/global-markets-sector-page.tsx', 'utf8');

const lines = content.split('\n');
console.log('Total lines:', lines.length);

// Let's search for how study cards are rendered
lines.forEach((l, idx) => {
  if (l.includes('filteredStudies') || l.includes('downloadDocxUrl') || l.includes('sectorStudies') || l.includes('downloadXlsxUrl')) {
    console.log(`L${idx+1}: ${l.trim()}`);
  }
});
