const fs = require('fs');

const data = JSON.parse(fs.readFileSync('c:\\Users\\20101\\Downloads\\sba-brand-compass\\extracted_all_meta.json', 'utf8'));

console.log('Total entries:', data.length);

const summary = data.map((item, index) => {
  const f = item.folder;
  // Let's inspect first sheet if available
  let firstSheetRows = [];
  if (item.sheetNames && item.sheetNames.length > 0) {
    firstSheetRows = item.xlsxData[item.sheetNames[0]] || [];
  }

  // Look for country name in sheets or txt
  let countryName = '';
  let arabicName = '';
  let indicator = '';
  let year = '';

  // Look in sheets
  for (const sName of item.sheetNames) {
    const rows = item.xlsxData[sName] || [];
    for (const r of rows) {
      if (r['Country'] || r['الدولة'] || r['Country Name']) {
        countryName = countryName || r['Country'] || r['Country Name'];
        arabicName = arabicName || r['Arabic Name'] || r['الدولة'] || r['اسم الدولة'];
      }
      if (r['HS61+HS62 / Indicator'] || r['Indicator'] || r['Total HS61+62 Imports']) {
        indicator = indicator || r['HS61+HS62 / Indicator'] || r['Indicator'] || r['Total HS61+62 Imports'];
      }
      if (r['Year'] || r['السنة']) {
        year = year || r['Year'] || r['السنة'];
      }
    }
  }

  return {
    index: index + 1,
    folder: f,
    docx: item.docxFile,
    xlsx: item.xlsxFile,
    sheetNames: item.sheetNames,
    firstSheetRowCount: firstSheetRows.length,
    countryName,
    arabicName,
    indicator,
    year,
    sampleKeys: firstSheetRows[0] ? Object.keys(firstSheetRows[0]) : []
  };
});

console.log(JSON.stringify(summary.slice(0, 10), null, 2));

fs.writeFileSync('c:\\Users\\20101\\Downloads\\sba-brand-compass\\countries_overview.json', JSON.stringify(summary, null, 2), 'utf8');
