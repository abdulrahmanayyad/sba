const fs = require('fs');

let raw = fs.readFileSync('c:\\Users\\20101\\Downloads\\sba-brand-compass\\all_docx_headers.json', 'utf8');
if (raw.charCodeAt(0) === 0xFEFF) raw = raw.slice(1);
const docxList = JSON.parse(raw);

docxList.forEach(d => {
  // Let's see if HeaderSnippet contains buyers or brands
  const m = d.HeaderSnippet.match(/(المشترون|المستوردون|سلاسل التجزئة|الماركات|Buyers|Brands)[^.؛\n]{10,200}/gi);
  if (m) {
    console.log(`[${d.Folder}] ->`, m.slice(0, 2));
  }
});
