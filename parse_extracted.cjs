const fs = require('fs');
const path = require('path');

const baseDir = 'c:\\Users\\20101\\Downloads\\sba-brand-compass\\extracted_studies';
const folders = fs.readdirSync(baseDir);

console.log('Total extracted folders:', folders.length);

const results = [];

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
  
  results.push({
    folder,
    docx,
    xlsx,
    txt,
    txtSnippet: txtContent.substring(0, 300).replace(/\r?\n/g, ' ')
  });
});

console.log(JSON.stringify(results.slice(0, 5), null, 2));

fs.writeFileSync('c:\\Users\\20101\\Downloads\\sba-brand-compass\\extracted_summary.json', JSON.stringify(results, null, 2), 'utf8');
console.log('Saved summary to extracted_summary.json');
