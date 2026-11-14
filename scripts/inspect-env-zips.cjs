const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const envDir = path.join(process.cwd(), 'public', 'دراسات قطاع البيئة');
const zips = fs.readdirSync(envDir).filter(f => f.endsWith('.zip'));

console.log('Total zip files:', zips.length);

const summary = [];

zips.forEach(z => {
  const zipPath = path.join(envDir, z);
  try {
    const list = execSync(`tar -tf "${zipPath}"`, { encoding: 'utf8' });
    const lines = list.trim().split(/\r?\n/).filter(Boolean);
    summary.push({
      zip: z,
      count: lines.length,
      sample: lines.slice(0, 15)
    });
  } catch (err) {
    summary.push({
      zip: z,
      error: err.message
    });
  }
});

console.log(JSON.stringify(summary, null, 2));
