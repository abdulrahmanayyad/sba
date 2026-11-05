const fs = require('fs');
const path = require('path');

function findXlsx(dir, depth = 0) {
  if (depth > 6) return;
  const skip = ['node_modules', '.git', 'Windows', 'Program Files', 'Program Files (x86)', '$Recycle.Bin', 'AppData'];
  try {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    for (const item of items) {
      if (skip.includes(item.name)) continue;
      const full = path.join(dir, item.name);
      if (item.isDirectory()) {
        findXlsx(full, depth + 1);
      } else if (item.name.toLowerCase().endsWith('.xlsx') || item.name.toLowerCase().endsWith('.xls')) {
        console.log(full);
      }
    }
  } catch (e) {}
}

console.log('--- ALL XLSX on A: ---');
findXlsx('A:\\');
console.log('--- ALL XLSX on C: ---');
findXlsx('C:\\');
console.log('--- Finished ---');

