const fs = require('fs');
const content = fs.readFileSync('src/components/global-markets/global-markets-study-page.tsx', 'utf8');

const lines = content.split('\n');
lines.forEach((l, idx) => {
  if (l.includes('pdf') || l.includes('PDF') || l.includes('openApproved') || l.includes('Download') || l.includes('Button')) {
    console.log(`L${idx+1}: ${l.trim()}`);
  }
});
