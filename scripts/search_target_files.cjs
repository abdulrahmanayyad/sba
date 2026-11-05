const fs = require('fs');
const path = require('path');

function searchAll(dir, maxDepth = 6) {
  function walk(current, depth) {
    if (depth > maxDepth) return;
    try {
      const items = fs.readdirSync(current, { withFileTypes: true });
      for (const item of items) {
        const full = path.join(current, item.name);
        if (item.isDirectory()) {
          walk(full, depth + 1);
        } else {
          const n = item.name;
          if (
            n.includes('تصدير') ||
            n.includes('تمور') ||
            n.includes('متنوعة') ||
            n.includes('inquiries') ||
            n.includes('trade') ||
            (n.includes('2025') && (n.endsWith('.xlsx') || n.endsWith('.csv') || n.endsWith('.json')))
          ) {
            console.log(full);
          }
        }
      }
    } catch (e) {}
  }
  walk(dir, 0);
}

console.log('Searching A:\\SBA ...');
searchAll('A:\\SBA');
console.log('Searching C:\\Users\\20101\\Downloads ...');
searchAll('C:\\Users\\20101\\Downloads');
console.log('Searching C:\\Users\\20101\\Desktop ...');
searchAll('C:\\Users\\20101\\Desktop');
console.log('Searching C:\\Users\\20101\\Documents ...');
searchAll('C:\\Users\\20101\\Documents');
console.log('Done search.');

