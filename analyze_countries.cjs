const fs = require('fs');

const readmes = JSON.parse(fs.readFileSync('c:\\Users\\20101\\Downloads\\sba-brand-compass\\all_readmes.json', 'utf8'));

readmes.forEach((item, index) => {
  const lines = item.txtContent.split('\n').map(l => l.trim()).filter(Boolean);
  const titleLine = lines[0] || item.folder;
  const codeLine = lines.find(l => l.toLowerCase().includes('report code') || l.toLowerCase().includes('sba-gm-app-')) || '';
  console.log(`${index + 1}. [${item.folder}] -> Title: "${titleLine.substring(0, 60)}" | Code: "${codeLine}"`);
});
