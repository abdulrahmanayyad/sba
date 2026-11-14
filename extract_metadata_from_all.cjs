const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

const baseDir = 'c:\\Users\\20101\\Downloads\\sba-brand-compass\\extracted_studies';
const folders = fs.readdirSync(baseDir);

const allCountries = [];

folders.forEach(folder => {
  const fullPath = path.join(baseDir, folder);
  if (!fs.statSync(fullPath).isDirectory()) return;

  const files = fs.readdirSync(fullPath);
  const docxFile = files.find(f => f.endsWith('.docx'));
  const xlsxFile = files.find(f => f.endsWith('.xlsx'));
  const txtFile = files.find(f => f.endsWith('.txt'));

  let txtContent = '';
  if (txtFile) {
    try {
      txtContent = fs.readFileSync(path.join(fullPath, txtFile), 'utf8');
    } catch (e) {}
  }

  let xlsxData = {};
  if (xlsxFile) {
    try {
      const wb = XLSX.readFile(path.join(fullPath, xlsxFile));
      wb.SheetNames.forEach(name => {
        xlsxData[name] = XLSX.utils.sheet_to_json(wb.Sheets[name]);
      });
    } catch (e) {}
  }

  allCountries.push({
    folder,
    docxFile,
    xlsxFile,
    txtFile,
    txtContent,
    sheetNames: Object.keys(xlsxData),
    xlsxData
  });
});

console.log('Processed all 54 folders.');
fs.writeFileSync('c:\\Users\\20101\\Downloads\\sba-brand-compass\\extracted_all_meta.json', JSON.stringify(allCountries, null, 2), 'utf8');
console.log('Saved to extracted_all_meta.json');
