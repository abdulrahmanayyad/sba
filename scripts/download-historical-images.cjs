const fs = require('fs');
const path = require('path');
const https = require('https');

const dir = path.join(__dirname, '..', 'public', 'historical');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const images = [
  { file: 'sba-historical-01-infrastructure-investment.jpg', id: 'photo-1545324418-cc1a3fa10c00' },
  { file: 'sba-historical-02-environmental-waste-management.jpg', id: 'photo-1532996122724-e3c354a0b15b' },
  { file: 'sba-historical-03-gold-jewelry-supply-chain.jpg', id: 'photo-1515562141207-7a88fb7ce338' },
  { file: 'sba-historical-04-construction-infrastructure-impact.jpg', id: 'photo-1504307651254-35680f356dfd' },
  { file: 'sba-historical-05-urban-development-communities.jpg', id: 'photo-1486406146926-c627a92ad1ab' },
  { file: 'sba-historical-06-food-processing-manufacturing.jpg', id: 'photo-1542838132-92c53300491e' },
  { file: 'sba-historical-07-industrial-development-supply-chains.jpg', id: 'photo-1586528116311-ad8dd3c8310d' },
  { file: 'sba-historical-08-local-manufacturing-competitiveness.jpg', id: 'photo-1581092795360-fd1ca04f0952' },
  { file: 'sba-historical-09-environmental-sustainability-resources.jpg', id: 'photo-1498084393753-b411b2d26b34' },
  { file: 'sba-historical-10-manufacturing-international-trade.jpg', id: 'photo-1578575437130-527eed3abbec' },
  { file: 'sba-historical-11-supply-chain-resilience-continuity.jpg', id: 'photo-1519003722824-194d4455a60c' },
];

function download(img) {
  return new Promise((resolve, reject) => {
    const dest = path.join(dir, img.file);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 20000) {
      console.log('Exists:', img.file);
      return resolve();
    }
    const url = `https://images.unsplash.com/${img.id}?auto=format&fit=crop&w=1200&h=800&q=82`;
    const f = fs.createWriteStream(dest);
    https.get(url, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, r2 => {
          r2.pipe(f);
          f.on('finish', () => { f.close(); resolve(); });
        }).on('error', reject);
      } else if (res.statusCode === 200) {
        res.pipe(f);
        f.on('finish', () => { f.close(); resolve(); });
      } else {
        reject(new Error('Status ' + res.statusCode));
      }
    }).on('error', reject);
  });
}

async function main() {
  for (const img of images) {
    try {
      await download(img);
      console.log('Downloaded:', img.file);
    } catch (e) {
      console.error('Error on', img.file, e.message);
    }
  }
}
main();

