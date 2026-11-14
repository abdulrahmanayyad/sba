const fs = require('fs');
const list = JSON.parse(fs.readFileSync('c:\\Users\\20101\\Downloads\\sba-brand-compass\\ranked_countries.json', 'utf8'));

const subregions = ['gcc', 'other_arab', 'europe', 'africa', 'north_america', 'south_central_america'];
subregions.forEach(sub => {
  const items = list.filter(x => x.subregion === sub);
  console.log(`\n=== Subregion: ${sub.toUpperCase()} (${items.length} countries) ===`);
  items.forEach(c => {
    console.log(`Rank #${c.regionalRank} | [${c.code}] Score: ${c.score} | ${c.tier} | Trade: ${c.tradeDisplay}`);
  });
});
