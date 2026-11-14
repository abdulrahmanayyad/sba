const fs = require('fs');

const data = JSON.parse(fs.readFileSync('c:\\Users\\20101\\Downloads\\sba-brand-compass\\extracted_all_meta.json', 'utf8'));

data.forEach((item, idx) => {
  let buyers = [];
  let products = [];
  for (const sName of item.sheetNames) {
    const rows = item.xlsxData[sName] || [];
    for (const r of rows) {
      Object.keys(r).forEach(k => {
        const val = String(r[k] || '');
        if (k.toLowerCase().includes('buyer') || k.toLowerCase().includes('brand') || k.toLowerCase().includes('prospect') || k.toLowerCase().includes('lead') || k.includes('مشتر') || k.includes('عميل')) {
          if (val.length > 3 && val.length < 80 && !val.includes('http') && !val.includes('Formula') && !buyers.includes(val)) {
            buyers.push(val);
          }
        }
        if (k.toLowerCase().includes('product') || k.toLowerCase().includes('item') || k.includes('منتج')) {
          if (val.length > 3 && val.length < 60 && !products.includes(val)) {
            products.push(val);
          }
        }
      });
    }
  }
  console.log(`[${idx+1}] ${item.folder} -> Buyers found: ${buyers.length} (${buyers.slice(0, 3).join(', ')}) | Products: ${products.length}`);
});
