const fs = require('fs');
const path = require('path');

const targetDir = 'c:\\Users\\20101\\Downloads\\sba-brand-compass\\public\\studies\\apparel';
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const baseDir = 'c:\\Users\\20101\\Downloads\\sba-brand-compass\\extracted_studies';
const zipsDir = 'c:\\Users\\20101\\Downloads\\Telegram Desktop';
const folders = fs.readdirSync(baseDir);

const filesMap = {};

folders.forEach(folder => {
  const folderPath = path.join(baseDir, folder);
  if (!fs.statSync(folderPath).isDirectory()) return;

  const files = fs.readdirSync(folderPath);
  const docx = files.find(f => f.endsWith('.docx'));
  const xlsx = files.find(f => f.endsWith('.xlsx'));
  const zipName = folder + '.zip';
  const zipPath = path.join(zipsDir, zipName);

  let docxTarget = '';
  let xlsxTarget = '';
  let zipTarget = '';

  if (docx) {
    fs.copyFileSync(path.join(folderPath, docx), path.join(targetDir, docx));
    docxTarget = `/studies/apparel/${encodeURIComponent(docx)}`;
  }
  if (xlsx) {
    fs.copyFileSync(path.join(folderPath, xlsx), path.join(targetDir, xlsx));
    xlsxTarget = `/studies/apparel/${encodeURIComponent(xlsx)}`;
  }
  if (fs.existsSync(zipPath)) {
    fs.copyFileSync(zipPath, path.join(targetDir, zipName));
    zipTarget = `/studies/apparel/${encodeURIComponent(zipName)}`;
  }

  filesMap[folder] = {
    docx,
    xlsx,
    zipName,
    docxUrl: docxTarget,
    xlsxUrl: xlsxTarget,
    zipUrl: zipTarget
  };
});

fs.writeFileSync('c:\\Users\\20101\\Downloads\\sba-brand-compass\\public_files_map.json', JSON.stringify(filesMap, null, 2), 'utf8');
console.log('Copied files to public/studies/apparel for', Object.keys(filesMap).length, 'folders');
