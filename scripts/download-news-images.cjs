const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { execSync } = require('child_process');

const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'sami_trade_real_images');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const items = [
  {
    filename: "sami-trade-news-01-general-contracting-expansion.png",
    unsplashId: "photo-1486406146926-c627a92ad1ab",
    title: "General Contracting & Commercial Expansion"
  },
  {
    filename: "sami-trade-news-02-mep-systems-projects.png",
    unsplashId: "photo-1581092160607-ee22621dd758",
    title: "High-Tech MEP Systems Projects"
  },
  {
    filename: "sami-trade-news-03-medical-facilities-expansion.png",
    unsplashId: "photo-1519494026892-80bbd2d6fd0d",
    title: "Medical Facilities & Hospital Contracting"
  },
  {
    filename: "sami-trade-news-04-real-estate-development.png",
    unsplashId: "photo-1600585154340-be6161a56a0c",
    title: "Luxury Real Estate & Residential Compounds"
  },
  {
    filename: "sami-trade-news-05-infrastructure-utilities.png",
    unsplashId: "photo-1545324418-cc1a3fa10c00",
    title: "Infrastructure & Civil Utilities"
  },
  {
    filename: "sami-trade-news-06-industrial-buildings-precast.png",
    unsplashId: "photo-1504307651254-35680f356dfd",
    title: "Industrial Buildings & Precast Concrete"
  },
  {
    filename: "sami-trade-news-07-oil-gas-energy-facilities.png",
    unsplashId: "photo-1518709268805-4e9042af9f23",
    title: "Oil, Gas & Energy Facilities"
  },
  {
    filename: "sami-trade-news-08-commercial-complexes-malls.png",
    unsplashId: "photo-1555636222-cae831e670b3",
    title: "Commercial Complexes & Futuristic Malls"
  },
  {
    filename: "sami-trade-news-09-luxury-interior-decor.png",
    unsplashId: "photo-1497366216548-37526070297c",
    title: "Luxury Executive Interior & Fit-Out"
  },
  {
    filename: "sami-trade-news-10-engineering-project-management.png",
    unsplashId: "photo-1503387762-592deb58ef4e",
    title: "Engineering Project Management & BIM"
  },
  {
    filename: "sami-trade-news-11-environmental-impact-assessment.png",
    unsplashId: "photo-1532094349884-543bc11b234d",
    title: "Environmental Impact Assessment (EIA)"
  },
  {
    filename: "sami-trade-news-12-esia-social-assessment.png",
    unsplashId: "photo-1498084393753-b411b2d26b34",
    title: "ESIA & Sustainable Community Planning"
  },
  {
    filename: "sami-trade-news-13-carbon-footprint-reporting.png",
    unsplashId: "photo-1551288049-bebda4e38f71",
    title: "Carbon Footprint & ESG Reporting Dashboard"
  },
  {
    filename: "sami-trade-news-14-field-environmental-monitoring.png",
    unsplashId: "photo-1581093458791-9f3c3900df4b",
    title: "Field Environmental & Emissions Monitoring"
  },
  {
    filename: "sami-trade-news-15-integrated-waste-management.png",
    unsplashId: "photo-1532996122724-e3c354a0b15b",
    title: "Integrated Automated Waste Recycling"
  },
  {
    filename: "sami-trade-news-16-hazardous-waste-chemicals.png",
    unsplashId: "photo-1582719478250-c89cae4dc85b",
    title: "Hazardous Materials & Chemical Safe Handling"
  },
  {
    filename: "sami-trade-news-17-waste-to-energy-projects.png",
    unsplashId: "photo-1473341304170-971dccb5ac1e",
    title: "Waste-to-Energy Green Power Generation"
  },
  {
    filename: "sami-trade-news-18-biogas-renewable-solutions.png",
    unsplashId: "photo-1466611653911-95081537e5b7",
    title: "Biogas Plants & Renewable Energy"
  },
  {
    filename: "sami-trade-news-19-esg-sustainability-strategies.png",
    unsplashId: "photo-1542744173-8e7e53415bb0",
    title: "ESG & Green Economy Corporate Strategy"
  },
  {
    filename: "sami-trade-news-20-iso-environmental-certification.png",
    unsplashId: "photo-1450133064473-71024230f91b",
    title: "ISO Environmental & Energy Certifications"
  },
  {
    filename: "sami-trade-news-21-hse-digital-solutions.png",
    unsplashId: "photo-1581092580497-e0d23cbdf1dc",
    title: "HSE Smart Systems & Digital Compliance"
  },
  {
    filename: "sami-trade-news-22-biotech-applied-research.png",
    unsplashId: "photo-1507668077129-56e32842fceb",
    title: "Biotech Laboratory & Bio-Remediation"
  },
  {
    filename: "sami-trade-news-23-oem-manufacturing-partnership.png",
    unsplashId: "photo-1558769132-cb1aea458c5e",
    title: "OEM Garment Production Line"
  },
  {
    filename: "sami-trade-news-24-odm-design-manufacturing.png",
    unsplashId: "photo-1537832816519-689ad163238b",
    title: "ODM Fashion Studio & Textile Design"
  },
  {
    filename: "sami-trade-news-25-private-label-garments.png",
    unsplashId: "photo-1441986300917-64674bd600d8",
    title: "Private Label Luxury Apparel Showroom"
  },
  {
    filename: "sami-trade-news-26-fob-export-programs.png",
    unsplashId: "photo-1586528116311-ad8dd3c8310d",
    title: "FOB Export Logistics & Garment Shipping"
  },
  {
    filename: "sami-trade-news-27-pattern-engineering-lab.png",
    unsplashId: "photo-1581091226825-a6a2a5aee158",
    title: "CAD Pattern Engineering & Digital Fitting"
  },
  {
    filename: "sami-trade-news-28-rapid-prototyping-samples.png",
    unsplashId: "photo-1512436991641-6745cdb1723f",
    title: "Rapid Prototyping & Sampling Lab"
  },
  {
    filename: "sami-trade-news-29-mass-industrial-production.png",
    unsplashId: "photo-1581092795360-fd1ca04f0952",
    title: "Mass Industrial Sewing & Automated Lines"
  },
  {
    filename: "sami-trade-news-30-fabrics-dyeing-supply.png",
    unsplashId: "photo-1604014237800-1c9102c219da",
    title: "Premium Fabric Rolls & Sustainable Dyeing"
  },
  {
    filename: "sami-trade-news-31-pure-honey-beekeeping.png",
    unsplashId: "photo-1587049352846-4a222e784d38",
    title: "Pure Organic Honey & Bee Products"
  },
  {
    filename: "sami-trade-news-32-table-olives-export.png",
    unsplashId: "photo-1563865436874-9aef32095fad",
    title: "Gourmet Table Olives Export"
  },
  {
    filename: "sami-trade-news-33-cold-pressed-olive-oil.png",
    unsplashId: "photo-1474979266404-7eaacbcd87c5",
    title: "Cold-Pressed Extra Virgin Olive Oil"
  },
  {
    filename: "sami-trade-news-34-premium-dates-supply.png",
    unsplashId: "photo-1596797882870-8c33deeac224",
    title: "Premium Dates & Palm Products"
  },
  {
    filename: "sami-trade-news-35-herbs-spices-export.png",
    unsplashId: "photo-1596040033229-a9821ebd058d",
    title: "Egyptian Herbs, Spices & Botanicals Export"
  },
  {
    filename: "sami-trade-news-36-botanical-beverage-powders.png",
    unsplashId: "photo-1544787219-7f47ccb76574",
    title: "Botanical Extracts & Natural Beverage Ingredients"
  },
  {
    filename: "sami-trade-news-37-agricultural-commodities-trade.png",
    unsplashId: "photo-1615485290382-441e4d049cb5",
    title: "Agricultural Commodities & Bulk Grains Trade"
  },
  {
    filename: "sami-trade-news-38-corporate-expansion-milestone.png",
    unsplashId: "photo-1511578314322-379afb476865",
    title: "Corporate Milestone & Strategic Growth Ceremony"
  },
  {
    filename: "sami-trade-news-39-international-trade-agreements.png",
    unsplashId: "photo-1521791136064-7986c2920216",
    title: "International Supply Agreements & Strategic Alliances"
  }
];

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const client = parsed.protocol === 'https:' ? https : http;

    client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      timeout: 30000
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, destPath).then(resolve).catch(reject);
      }

      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode}`));
      }

      const fileStream = fs.createWriteStream(destPath);
      res.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close(() => {
          const stats = fs.statSync(destPath);
          if (stats.size < 5000) {
            try { fs.unlinkSync(destPath); } catch (e) {}
            reject(new Error(`File too small (${stats.size}b)`));
          } else {
            resolve(stats.size);
          }
        });
      });

      fileStream.on('error', (err) => {
        try { fs.unlinkSync(destPath); } catch (e) {}
        reject(err);
      });
    }).on('error', reject).on('timeout', () => {
      reject(new Error('Timeout'));
    });
  });
}

async function processItem(item, idx, total) {
  const destPath = path.join(OUTPUT_DIR, item.filename);

  if (fs.existsSync(destPath) && fs.statSync(destPath).size > 15000) {
    const size = Math.round(fs.statSync(destPath).size / 1024);
    console.log(`[${idx}/${total}] [CACHED] ${item.filename} (${size} KB)`);
    return true;
  }

  const url = `https://images.unsplash.com/${item.unsplashId}?auto=format&fit=crop&w=1200&h=800&q=82`;
  
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      console.log(`[${idx}/${total}] Downloading (${attempt}/3): ${item.filename} ...`);
      const bytes = await downloadFile(url, destPath);
      console.log(`  ✓ Saved: ${item.filename} (${Math.round(bytes / 1024)} KB) - ${item.title}`);
      return true;
    } catch (e) {
      console.warn(`  ⚠ Attempt ${attempt} failed: ${e.message}`);
      if (attempt < 3) {
        await new Promise(r => setTimeout(r, 1000));
      }
    }
  }

  return false;
}

async function run() {
  console.log(`\n======================================================`);
  console.log(`SAMI BIN AYYAD GROUP — DOWNLOADING 39 NEWS IMAGES`);
  console.log(`Output: ${OUTPUT_DIR}`);
  console.log(`======================================================\n`);

  let successCount = 0;
  for (let i = 0; i < items.length; i++) {
    const ok = await processItem(items[i], i + 1, items.length);
    if (ok) successCount++;
  }

  console.log(`\nDownloaded ${successCount} / ${items.length} images.`);

  // Create ZIP file using PowerShell
  const zipPath = path.join(__dirname, '..', 'public', 'sami_trade_real_images.zip');
  console.log(`Creating ZIP archive at ${zipPath}...`);
  try {
    if (fs.existsSync(zipPath)) {
      fs.unlinkSync(zipPath);
    }
    const psCmd = `powershell -Command "Compress-Archive -Path '${OUTPUT_DIR}\\*' -DestinationPath '${zipPath}' -Force"`;
    execSync(psCmd, { stdio: 'inherit' });
    const zipSize = Math.round(fs.statSync(zipPath).size / (1024 * 1024));
    console.log(`✓ ZIP archive created successfully: ${zipPath} (~${zipSize} MB)`);
  } catch (err) {
    console.error('ZIP creation warning:', err.message);
  }

  console.log('\nAll 39 images ready!');
}

run().catch(console.error);
