const fs = require('fs');

let raw = fs.readFileSync('c:\\Users\\20101\\Downloads\\sba-brand-compass\\all_docx_headers.json', 'utf8');
if (raw.charCodeAt(0) === 0xFEFF) {
  raw = raw.slice(1);
}
const docxList = JSON.parse(raw);

docxList.forEach((d, i) => {
  console.log(`--- [${i + 1}] ${d.Folder} ---`);
  console.log(d.HeaderSnippet.substring(0, 250));
});
