const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const envDir = path.join(process.cwd(), 'public', 'دراسات قطاع البيئة');
const zips = fs.readdirSync(envDir).filter(f => f.endsWith('.zip'));

zips.forEach(z => {
  const p = path.join(envDir, z);
  try {
    const list = execSync(`tar -tf "${p}"`, { encoding: 'utf8' }).trim().split('\n');
    const readmes = list.filter(l => l.toLowerCase().includes('readme'));
    readmes.forEach(r => {
      const content = execSync(`tar -xOf "${p}" "${r}"`, { encoding: 'utf8' });
      const firstLines = content.split('\n').slice(0, 5).join(' | ');
      console.log(`${z} -> ${r}: ${firstLines}`);
    });
  } catch (e) {
    // ignore
  }
});
