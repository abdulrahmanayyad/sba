const fs = require('fs');
const path = require('path');

const dirs = [
  'C:\\Users\\20101\\Downloads\\sba-brand-compass\\public\\دراسات قطاع البيئة',
  'C:\\Users\\20101\\Downloads\\Telegram Desktop',
  'C:\\Users\\20101\\Downloads'
];

const allZips = new Map();

dirs.forEach(d => {
  if (!fs.existsSync(d)) return;
  const files = fs.readdirSync(d);
  files.forEach(f => {
    if (f.endsWith('.zip') && !f.toLowerCase().includes('apparel')) {
      const fullPath = path.join(d, f);
      const stat = fs.statSync(fullPath);
      if (!allZips.has(f)) {
        allZips.set(f, { name: f, path: fullPath, size: stat.size, dir: d });
      }
    }
  });
});

console.log('Total non-apparel zips found:', allZips.size);
Array.from(allZips.values()).forEach((z, i) => {
  console.log(`${i+1}. [${z.dir.split('\\').pop()}] ${z.name} (${(z.size/1024).toFixed(1)} KB)`);
});
