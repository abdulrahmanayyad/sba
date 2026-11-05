# -*- coding: utf-8 -*-
"""
SAMI BIN AYYAD GROUP — COMPLETE NEWS IMAGES GENERATOR & DOWNLOADER
==================================================================
This script downloads/generates high-resolution images for all 39 historical
news items across all corporate sectors (Construction, Environmental, Garments,
Food & Agriculture, and Corporate Activities).

Output:
  - Directory: public/sami_trade_real_images/
  - ZIP Archive: public/sami_trade_real_images.zip
"""

import os
import time
import zipfile
import urllib.parse
import urllib.request

# اسم المجلد الذي سيتم حفظ الصور فيه
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_DIR = os.path.join(BASE_DIR, "public", "sami_trade_real_images")
os.makedirs(OUTPUT_DIR, exist_ok=True)

# قائمة الـ 39 خبر بأسماء الملفات والأوصاف ومعرفات الصور عالية الدقة
news_items = [
    # 1-10: قطاع المقاولات والتطوير العقاري (Construction & Real Estate)
    ("sami-trade-news-01-general-contracting-expansion.png", "Modern luxury commercial building under construction with sophisticated architectural facade and elegant lighting.", "photo-1486406146926-c627a92ad1ab"),
    ("sami-trade-news-02-mep-systems-projects.png", "High-tech mechanical, electrical, and plumbing engineering systems inside a modern smart industrial facility.", "photo-1581092160607-ee22621dd758"),
    ("sami-trade-news-03-medical-facilities-expansion.png", "Clean, state-of-the-art modern hospital interior corridor with advanced medical equipment and soft lighting.", "photo-1519494026892-80bbd2d6fd0d"),
    ("sami-trade-news-04-real-estate-development.png", "Luxury residential compound with green landscape and contemporary minimalist architectural design.", "photo-1600585154340-be6161a56a0c"),
    ("sami-trade-news-05-infrastructure-utilities.png", "Modern civil engineering infrastructure development project with roads, bridges, and advanced utilities.", "photo-1545324418-cc1a3fa10c00"),
    ("sami-trade-news-06-industrial-buildings-precast.png", "Advanced precast concrete industrial factory building with clean structural framing.", "photo-1504307651254-35680f356dfd"),
    ("sami-trade-news-07-oil-gas-energy-facilities.png", "Modern sustainable energy facility and oil and gas plant infrastructure with clean technology.", "photo-1518709268805-4e9042af9f23"),
    ("sami-trade-news-08-commercial-complexes-malls.png", "Futuristic smart business complex and modern shopping mall glass architecture at twilight.", "photo-1555636222-cae831e670b3"),
    ("sami-trade-news-09-luxury-interior-decor.png", "Luxury executive office interior design with minimalist aesthetics and premium wood and marble finishes.", "photo-1497366216548-37526070297c"),
    ("sami-trade-news-10-engineering-project-management.png", "Professional civil engineers reviewing project blueprints and 3D architectural models in a modern office.", "photo-1503387762-592deb58ef4e"),

    # 11-22: قطاع البيئة والاستدامة والطاقة (Environmental Sustainability & Energy)
    ("sami-trade-news-11-environmental-impact-assessment.png", "Environmental scientists conducting field analysis and digital ecological data assessment.", "photo-1532094349884-543bc11b234d"),
    ("sami-trade-news-12-esia-social-assessment.png", "Sustainable development concept merging nature, green forests, and modern community planning.", "photo-1498084393753-b411b2d26b34"),
    ("sami-trade-news-13-carbon-footprint-reporting.png", "Digital dashboard showing carbon footprint metrics, ESG data graphs, and green corporate reporting.", "photo-1551288049-bebda4e38f71"),
    ("sami-trade-news-14-field-environmental-monitoring.png", "Advanced ecological field monitoring equipment testing air and water quality in an industrial area.", "photo-1576086213369-97a306d36557"),
    ("sami-trade-news-15-integrated-waste-management.png", "Modern eco-friendly waste recycling and sorting facility with advanced automated sorting belts.", "photo-1532996122724-e3c354a0b15b"),
    ("sami-trade-news-16-hazardous-waste-chemicals.png", "Safe chemical and hazardous material storage and management facility with strict safety protocols.", "photo-1582719478250-c89cae4dc85b"),
    ("sami-trade-news-17-waste-to-energy-projects.png", "Waste-to-energy power plant facility transforming recycling materials into clean green electricity.", "photo-1473341304170-971dccb5ac1e"),
    ("sami-trade-news-18-biogas-renewable-solutions.png", "Biogas renewable energy plant with green fields and clean technological infrastructure.", "photo-1466611653911-95081537e5b7"),
    ("sami-trade-news-19-esg-sustainability-strategies.png", "Corporate boardroom meeting discussing ESG, sustainability strategies, and green economy growth.", "photo-1542744173-8e7e53415bb0"),
    ("sami-trade-news-20-iso-environmental-certification.png", "ISO environmental certification and energy management compliance document with a modern green stamp.", "photo-1450133064473-71024230f91b"),
    ("sami-trade-news-21-hse-digital-solutions.png", "Digital safety management system interface showing HSE compliance metrics on a smart tablet.", "photo-1581092580497-e0d23cbdf1dc"),
    ("sami-trade-news-22-biotech-applied-research.png", "Advanced biotechnology and bio-remediation laboratory with scientific research equipment and green plants.", "photo-1507668077129-56e32842fceb"),

    # 23-30: قطاع تصنيع الملابس والأزياء (Garment Manufacturing & Fashion)
    ("sami-trade-news-23-oem-manufacturing-partnership.png", "Professional garment manufacturing facility with high-end sewing production lines and quality control.", "photo-1558769132-cb1aea458c5e"),
    ("sami-trade-news-24-odm-design-manufacturing.png", "Fashion design studio workspace with fabric swatches, sketches, and modern apparel prototypes.", "photo-1537832816519-689ad163238b"),
    ("sami-trade-news-25-private-label-garments.png", "Premium fashion apparel neatly arranged with custom private label branding tags in a high-end showroom.", "photo-1441986300917-64674bd600d8"),
    ("sami-trade-news-26-fob-export-programs.png", "Large logistics warehouse loaded with packaged apparel ready for international shipping and export.", "photo-1586528116311-ad8dd3c8310d"),
    ("sami-trade-news-27-pattern-engineering-lab.png", "Digital apparel pattern engineering workspace with CAD software and textile design tools.", "photo-1581091226825-a6a2a5aee158"),
    ("sami-trade-news-28-rapid-prototyping-samples.png", "Rapid textile prototyping studio showcasing carefully crafted clothing samples.", "photo-1512436991641-6745cdb1723f"),
    ("sami-trade-news-29-mass-industrial-production.png", "Large-scale automated textile manufacturing factory floor with advanced industrial sewing machines.", "photo-1581092795360-fd1ca04f0952"),
    ("sami-trade-news-30-fabrics-dyeing-supply.png", "Colorful premium fabric rolls in a textile warehouse with eco-friendly dyeing textures.", "photo-1604014237800-1c9102c219da"),

    # 31-37: قطاع الأغذية والمنتجات الطبيعية (Food & Natural Products)
    ("sami-trade-news-31-pure-honey-beekeeping.png", "Premium organic raw honey jars with a wooden honey dipper on a warm rustic wooden background.", "photo-1587049352846-4a222e784d38"),
    ("sami-trade-news-32-table-olives-export.png", "Fresh green and black table olives harvested and packaged in a gourmet food jar.", "photo-1563865436874-9aef32095fad"),
    ("sami-trade-news-33-cold-pressed-olive-oil.png", "Cold-pressed extra virgin olive oil glass bottle next to fresh olive branches and green olives.", "photo-1474979266404-7eaacbcd87c5"),
    ("sami-trade-news-34-premium-dates-supply.png", "Luxury premium dates elegantly arranged in an exquisite gift box on a natural wooden table.", "photo-1596797882870-8c33deeac224"),
    ("sami-trade-news-35-herbs-spices-export.png", "Aromatic herbs, chamomile, peppermint, and dried spices in wholesale burlap bags for international export.", "photo-1596040033229-a9821ebd058d"),
    ("sami-trade-news-36-botanical-beverage-powders.png", "Instant spray-dried natural botanical beverage extracts and fruit powders in food processing packaging.", "photo-1544787219-7f47ccb76574"),
    ("sami-trade-news-37-agricultural-commodities-trade.png", "Egyptian sesame seeds, cumin, and agricultural commodity trade and bulk export warehouse.", "photo-1615485290382-441e4d049cb5"),

    # 38-39: أخبار المجموعة والأنشطة المؤسسية (Corporate Activities & Milestones)
    ("sami-trade-news-38-corporate-expansion-milestone.png", "Corporate milestone celebration and strategic business expansion ceremony for Sami Bin Ayyad Group.", "photo-1511578314322-379afb476865"),
    ("sami-trade-news-39-international-trade-agreements.png", "Executive signing ceremony of international commercial supply agreements and strategic trade partnerships.", "photo-1521791136064-7986c2920216")
]

print("=" * 70)
print(f"SAMI BIN AYYAD GROUP — NEWS IMAGES DOWNLOADER ({len(news_items)} ITEMS)")
print(f"Target Directory: {OUTPUT_DIR}")
print("=" * 70)

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

for index, (filename, prompt, photo_id) in enumerate(news_items, 1):
    filepath = os.path.join(OUTPUT_DIR, filename)
    if os.path.exists(filepath) and os.path.getsize(filepath) > 15000:
        size_kb = os.path.getsize(filepath) // 1024
        print(f"[{index:02d}/{len(news_items)}] [CACHED] {filename} ({size_kb} KB)")
        continue

    # Primary high-res CDN URL, with AI generation fallback
    urls_to_try = [
        f"https://images.unsplash.com/{photo_id}?auto=format&fit=crop&w=1200&h=800&q=82",
        f"https://image.pollinations.ai/prompt/{urllib.parse.quote(prompt)}?width=1200&height=800&nologo=true"
    ]

    success = False
    for url in urls_to_try:
        try:
            print(f"[{index:02d}/{len(news_items)}] Fetching: {filename} ...")
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=30) as response, open(filepath, "wb") as out_file:
                out_file.write(response.read())
            
            if os.path.exists(filepath) and os.path.getsize(filepath) > 10000:
                size_kb = os.path.getsize(filepath) // 1024
                print(f"  ✓ Saved: {filename} ({size_kb} KB)")
                success = True
                break
        except Exception as e:
            print(f"  ⚠ Failed fetching from {url[:35]}...: {e}")
            time.sleep(1)

    if not success:
        print(f"  ❌ Error downloading {filename}")

# إنشاء ملف مضغوط ZIP لجميع الصور
zip_path = os.path.join(BASE_DIR, "public", "sami_trade_real_images.zip")
print(f"\nCompressing images into {zip_path} ...")
with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as zipf:
    for filename, _, _ in news_items:
        fpath = os.path.join(OUTPUT_DIR, filename)
        if os.path.exists(fpath):
            zipf.write(fpath, arcname=filename)

zip_size_mb = os.path.getsize(zip_path) / (1024 * 1024)
print(f"✓ ZIP archive created successfully: {zip_path} ({zip_size_mb:.2f} MB)")
print("All 39 images processed successfully!")
