const fs = require('fs');
const path = require('path');

function search(dir, maxDepth) {
  function walk(current, depth) {
    if (depth > maxDepth) return;
    try {
      const items = fs.readdirSync(current, { withFileTypes: true });
      for (const item of items) {
        const full = path.join(current, item.name);
        if (item.isDirectory()) {
          walk(full, depth + 1);
        } else {
          if (item.name.includes('تصدير') || item.name.includes('تمور') || item.name.includes('متنوعة')) {
            console.log(full);
          }
        }
      }
    } catch (e) {}
  }
  walk(dir, 0);
}

console.log('--- Scanning C:\\Users\\20101 ---');
search('C:\\Users\\20101', 5);
console.log('--- Scanning A:\\ ---');
search('A:\\', 4);
console.log('--- Done ---');

