const fs = require('fs');
const path = require('path');

const baseDir = 'c:\\Users\\20101\\Downloads\\sba-brand-compass\\extracted_studies';
const folders = fs.readdirSync(baseDir);

const countryData = [];

folders.forEach(folder => {
  const fullPath = path.join(baseDir, folder);
  if (!fs.statSync(fullPath).isDirectory()) return;
  
  const files = fs.readdirSync(fullPath);
  const docx = files.find(f => f.endsWith('.docx'));
  const xlsx = files.find(f => f.endsWith('.xlsx'));
  const txt = files.find(f => f.endsWith('.txt'));
  
  let txtContent = '';
  if (txt) {
    try {
      txtContent = fs.readFileSync(path.join(fullPath, txt), 'utf8');
    } catch (e) {
      txtContent = '';
    }
  }
  
  countryData.push({
    folder,
    docx,
    xlsx,
    txt,
    txtContent
  });
});

fs.writeFileSync('c:\\Users\\20101\\Downloads\\sba-brand-compass\\all_readmes.json', JSON.stringify(countryData, null, 2), 'utf8');
console.log('Processed', countryData.length, 'readmes');
