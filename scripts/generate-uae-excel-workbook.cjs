const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');

const wb = XLSX.utils.book_new();

// 1. Executive Dashboard
const dashboardData = [
  ['SAMI BIN AYYAD GROUP — GLOBAL MARKETS INTELLIGENCE'],
  ['UNITED ARAB EMIRATES — APPAREL & TEXTILES MARKET INTELLIGENCE DATASET (VERSION 2.0)'],
  ['Report Code:', 'SBA-GM-APP-UAE-001', 'Edition:', '2.0', 'Release Date:', 'November 2026'],
  ['Target Country:', 'United Arab Emirates (دولة الإمارات العربية المتحدة)', 'ISO:', 'AE', 'Status:', 'Approved & Published'],
  [''],
  ['CORE MACROECONOMIC & MARKET INDICATORS'],
  ['Metric Indicator', 'Statistical Value', 'Unit / Currency', 'Reporting Year', 'Official Source', 'Strategic Interpretation'],
  ['Total Documented Apparel Imports (HS61+62)', 6606710990, 'USD', '2023', 'UN Comtrade / UAE Federal Customs', 'Highest import and re-export volume in the Middle East ($6.61B)'],
  ['Knitted / Crocheted Apparel Imports (HS 61)', 3461011590, 'USD (52.39%)', '2023', 'UN Comtrade', 'Massive baseline demand for cotton tees, basics, and loungewear ($3.46B)'],
  ['Woven Apparel Imports (HS 62)', 3145699400, 'USD (47.61%)', '2023', 'UN Comtrade', 'High demand for casual trousers, suits, shirts, and dresses ($3.15B)'],
  ['Retail Apparel & Footwear Sales Value', 66800000000, 'AED (18.19B USD)', '2025', 'Euromonitor (Feb 2026)', '5.0% YoY growth; projected 6.0% CAGR to AED 88.2B by 2030'],
  ['Projected Retail Apparel Value (2030)', 88200000000, 'AED (24.01B USD)', '2030', 'Euromonitor (Feb 2026)', 'Expanding consumer affluence and tourism influx drive long-term expansion'],
  ['Fashion E-Commerce Market Value', 11400000000, 'AED (3.10B USD)', '2025', 'EZDubai / Dubai CommerCity', '15.7% penetration within total AED 42.2B UAE digital commerce market'],
  ['Total National E-Commerce Value (2025)', 42200000000, 'AED', '2025', 'EZDubai / Dubai CommerCity', 'Projected to expand to AED 67.2B by 2030'],
  ['Population', 11346000, 'Residents', '2025', 'FCSC UAE', 'Over 88% expatriates representing 200+ nationalities; dynamic consumer segments'],
  ['GDP (Current Prices)', 514130000000, 'USD', '2024', 'IMF / World Bank', 'Robust sovereign economy driven by trade, tourism, finance, and industry'],
  ['GDP Per Capita', 48311, 'USD / Capita', '2024', 'IMF / World Bank', 'Among the highest disposable per capita income levels globally'],
  ['Port of Jebel Ali Container Throughput', 15500000, 'TEUs', '2024', 'DP World', 'Premier maritime logistics hub with 24-48 hr customs clearance'],
  ['Strategic Opportunity Score', '88 / 100', 'Tier 1 Rating', '2026', 'SBA Multi-Factor Assessment', 'Ranked #1 in GCC; exceptional export and private label manufacturing potential'],
  ['Preferential Tariff under GAFTA', '0.0%', 'Duty-Free', 'Current', 'GAFTA / Arab League Agreement', '5% cost advantage over Asian competitors (China, Bangladesh, Vietnam)'],
];
const wsDashboard = XLSX.utils.aoa_to_sheet(dashboardData);
XLSX.utils.book_append_sheet(wb, wsDashboard, 'Executive Dashboard');

// 2. HS61 Imports
const hs61Data = [
  ['HS CHAPTER 61 — ARTICLES OF APPAREL & CLOTHING ACCESSORIES, KNITTED OR CROCHETED'],
  ['United Arab Emirates Documented Import Flows (UN Comtrade / Federal Customs Authority 2023)'],
  ['Total HS 61 Imports: $3,461,011,590 USD (52.39% of Total Apparel Imports)'],
  [''],
  ['HS-4 / HS-6 Code', 'Product Description (English)', 'Product Description (Arabic)', 'Estimated 2023 Import Value (USD)', 'Share of HS61 (%)', 'Primary Manufacturing Fit for Egypt'],
  ['HS 6109.10', 'T-shirts, singlets and other vests, knitted cotton', 'تيشيرتات وبولو وفانلات محبوكة من قطن', 785400000, '22.69%', 'Highest synergy: 100% Egyptian cotton tees for Max, Splash, and private labels'],
  ['HS 6110.20', 'Jerseys, pullovers, cardigans, waistcoats, knitted cotton', 'سويترات وبلوفرات وسترات تريكو من قطن', 542100000, '15.66%', 'Premium cotton & blended knitwear for mall retail and cooler months'],
  ['HS 6112.12', 'Tracksuits, ski suits and swimwear, knitted synthetic/cotton', 'بدل رياضية وترينجات وملابس سباحة محبوكة', 388900000, '11.24%', 'Athleisure & gym apparel with moisture-wicking and flexible finishes'],
  ['HS 6111.20', 'Babies garments and clothing accessories, knitted cotton', 'ملابس وتوابع ألبسة للرضع محبوكة من قطن', 315600000, '9.12%', 'Premium hypoallergenic babywear; massive demand across expat families'],
  ['HS 6104.62', 'Women trousers, bib and brace overalls, knitted cotton', 'بناطيل وشورتات نسائية محبوكة من قطن', 294300000, '8.50%', 'Comfortable everyday loungewear and stretch casual pants'],
  ['HS 6103.42', 'Men trousers, bib and brace overalls, knitted cotton', 'بناطيل وشورتات رجالية محبوكة من قطن', 276800000, '8.00%', 'Knit joggers, sweatpants, and casual loungewear'],
  ['HS 6107.11', 'Men underpants and briefs, knitted cotton', 'ملابس داخلية وسراويل قصيرة للرجال من قطن', 218500000, '6.31%', 'Core cotton basics; high recurring volume for hypermarket private labels'],
  ['HS 6108.21', 'Women briefs and panties, knitted cotton', 'سراويل داخلية وملابس نوم نسائية من قطن', 198200000, '5.73%', 'High-grade soft cotton intimates and nightwear'],
  ['HS 6115.95', 'Pantyhose, tights, stockings, socks, knitted cotton', 'جوارب وتوابع ألبسة محبوكة من قطن', 145200000, '4.20%', 'High-volume cotton sock packs for department store private labels'],
  ['HS 6116.92', 'Gloves, mittens and mitts, knitted cotton', 'قفازات وتوابع محبوكة', 42100000, '1.22%', 'Specialized industrial, medical, and fashion accessories'],
  ['Other HS61', 'All other knitted apparel and accessories', 'بنود أخرى متنوعة من الملابس المحبوكة', 253911590, '7.34%', 'Various niche knitted accessories and specialized apparel'],
];
const wsHS61 = XLSX.utils.aoa_to_sheet(hs61Data);
XLSX.utils.book_append_sheet(wb, wsHS61, 'HS61 Imports');

// 3. HS62 Imports
const hs62Data = [
  ['HS CHAPTER 62 — ARTICLES OF APPAREL & CLOTHING ACCESSORIES, NOT KNITTED OR CROCHETED (WOVEN)'],
  ['United Arab Emirates Documented Import Flows (UN Comtrade / Federal Customs Authority 2023)'],
  ['Total HS 62 Imports: $3,145,699,400 USD (47.61% of Total Apparel Imports)'],
  [''],
  ['HS-4 / HS-6 Code', 'Product Description (English)', 'Product Description (Arabic)', 'Estimated 2023 Import Value (USD)', 'Share of HS62 (%)', 'Primary Manufacturing Fit for Egypt'],
  ['HS 6203.42', 'Men trousers, bib and brace overalls, breeches, woven cotton', 'بناطيل وبنطلونات قصيرة للرجال منسوجة من قطن', 685200000, '21.78%', 'Chinos, twill trousers, and casual bottomwear for corporate & daily wear'],
  ['HS 6204.62', 'Women trousers, bib and brace overalls, woven cotton', 'بناطيل وشورتات نسائية منسوجة من قطن', 578400000, '18.39%', 'Tailored women trousers and mid-to-high end commercial bottoms'],
  ['HS 6205.20', 'Men shirts, woven cotton', 'قمصان رجالية منسوجة من قطن', 492100000, '15.64%', 'Formal business shirts, luxury shirting, and hospitality corporate uniforms'],
  ['HS 6204.42', 'Women dresses, woven cotton / blended', 'فساتين نسائية منسوجة من قطن أو ألياف مخلوطة', 386500000, '12.29%', 'Modestwear, day dresses, and contemporary feminine silhouettes'],
  ['HS 6206.30', 'Women blouses, shirts and shirt-blouses, woven cotton', 'بلوزات وقمصان نسائية منسوجة من قطن', 312800000, '9.94%', 'Executive office blouses, modest tops, and linen-cotton shirts'],
  ['HS 6209.20', 'Babies garments and clothing accessories, woven cotton', 'ملابس وتوابع ألبسة للأطفال الرضع منسوجة من قطن', 215400000, '6.85%', 'Premium gift sets, ceremonial infant outfits, and woven babywear'],
  ['HS 6211.42', 'Women tracksuits and other garments, woven cotton', 'أثواب وأردية وعباءات نسائية منسوجة من قطن/مخلوط', 184200000, '5.86%', 'Specialized modest lifestyle robes, kaftans, and loungewear'],
  ['HS 6201.40', 'Men overcoats, car coats, capes, cloaks, woven', 'معاطف وسترات رجالية منسوجة', 128900000, '4.10%', 'Light outerwear and travel jackets for outbound tourism'],
  ['HS 6202.40', 'Women overcoats, cloaks, anoraks, wind-cheaters, woven', 'معاطف وسترات نسائية منسوجة', 98500000, '3.13%', 'Winter fashion outerwear for regional travel and shopping seasons'],
  ['Other HS62', 'All other woven garments and clothing accessories', 'بنود أخرى متنوعة من الملابس المنسوجة', 63599400, '2.02%', 'Specialized occupational workwear, protective apparel, and ties'],
];
const wsHS62 = XLSX.utils.aoa_to_sheet(hs62Data);
XLSX.utils.book_append_sheet(wb, wsHS62, 'HS62 Imports');

// 4. HS6 Product Analysis
const hs6ProductAnalysis = [
  ['STRATEGIC PRODUCT-LEVEL HS-6 MATRIX & MANUFACTURING ALIGNMENT'],
  ['Detailed Evaluation of the 9 Core Product Categories for Sami Bin Ayyad Group'],
  [''],
  ['HS-6 Code', 'Category Description', 'UAE Market Demand Dynamic', 'SAMI BIN AYYAD Alignment', 'Target FOB Range (USD)', 'General Tariff vs GAFTA', 'Primary Competitors', 'Target Retail / Wholesale Buyers'],
  ['6109.10', 'Cotton T-shirts, singlets, knitted', 'Massive year-round consumption; top private label driver', 'Direct core competence: 100% Giza cotton tees', '$3.20 – $4.50', '5% vs 0% (GAFTA Free)', 'Bangladesh, India, China', 'Landmark (Max, Splash), Apparel Group, Carrefour'],
  ['6110.20', 'Cotton Pullovers & Cardigans, knitted', 'Continuous mall & office air-conditioned wear', 'High-gauge knitwear & blended cotton-acrylic cardigans', '$6.50 – $9.50', '5% vs 0% (GAFTA Free)', 'China, Turkey, Vietnam', 'Azadea Group, Alshaya, Centrepoint'],
  ['6112.12', 'Synthetic/Cotton Tracksuits, knitted', 'Surging athleisure trend across gym and casual culture', 'Performance fabrics, moisture-wicking and poly-cotton blends', '$8.50 – $14.00', '5% vs 0% (GAFTA Free)', 'Vietnam, China, Cambodia', 'Apparel Group, R&B, Stadium, Sun & Sand Sports'],
  ['6111.20', 'Babies Garments, knitted cotton', 'Inelastic family demand; priority on hypoallergenic safety', '100% certified combed cotton baby rompers & sets', '$3.80 – $6.20', '5% vs 0% (GAFTA Free)', 'China, India, Turkey', 'Babyshop (Landmark), Mothercare (Alshaya), Mamas & Papas'],
  ['6203.42', 'Men Trousers & Shorts, woven cotton', 'Staple daily bottomwear for work and smart casual', 'High-efficiency woven lines: chinos, cargo pants, twill', '$6.50 – $9.00', '5% vs 0% (GAFTA Free)', 'Bangladesh, Pakistan, Vietnam', 'Max Fashion, Splash, Deira Wholesale Merchants'],
  ['6204.62', 'Women Trousers & Pants, woven cotton', 'High commercial retail volume across department stores', 'Modern wash-finish trousers, linen-cotton blends', '$6.80 – $9.50', '5% vs 0% (GAFTA Free)', 'Turkey, China, Morocco', 'Landmark, Azadea, Al-Futtaim (Kiabi, Marks & Spencer)'],
  ['6205.20', 'Men Shirts, woven cotton', 'Business wear, corporate uniforms, hospitality staff', 'Long-staple luxury cotton shirting with non-iron finish', '$6.00 – $9.50', '5% vs 0% (GAFTA Free)', 'India, Italy, Bangladesh', 'Al Tayer (Ounass), Airlines, Luxury Hotel Groups'],
  ['6206.30', 'Women Blouses & Shirts, woven cotton', 'Modest corporate wear and casual smart silhouettes', 'Breathable voile, twill, and poplin cotton blouses', '$6.20 – $8.80', '5% vs 0% (GAFTA Free)', 'Turkey, Italy, India', 'Louzan Fashion, Splash, Debenhams, Namshi'],
  ['6209.20', 'Babies Garments, woven cotton', 'Gift sets, embroidered ceremonial outfits, nursery wear', 'Delicate embroidery, soft woven poplin, OEKO-TEX certified', '$4.20 – $7.00', '5% vs 0% (GAFTA Free)', 'Spain, Turkey, China', 'Mothercare, Babyshop, Boutique department stores'],
];
const wsHS6Analysis = XLSX.utils.aoa_to_sheet(hs6ProductAnalysis);
XLSX.utils.book_append_sheet(wb, wsHS6Analysis, 'HS6 Product Analysis');

// 5. Supplier Countries
const supplierCountriesData = [
  ['TOP APPAREL SUPPLIERS TO THE UNITED ARAB EMIRATES (2023 TRADE FLOWS)'],
  ['Source: UN Comtrade / Federal Customs Authority — HS Chapters 61 & 62 Combined'],
  [''],
  ['Rank', 'Supplier Country', '2023 Export Value (USD)', 'Market Share (%)', 'Dominant Category Focus', 'Price Tier Segment', 'Applicable Tariff', 'Ocean Transit (Days)', 'Competitive Advantage / Dynamic'],
  [1, 'China', 1871680623, '28.33%', 'Mass market apparel, e-com packages, outerwear', 'Budget to Mid-Tier', '5.0% (General)', '18–24 days', 'Massive scale, fast e-commerce supply (Shein/Temu), complete value chain'],
  [2, 'India', 991006648, '15.00%', 'Cotton basics, woven shirts, ethnic apparel', 'Budget to Mid-Tier', '0%–5% (CEPA Tariff)', '4–6 days', 'CEPA trade agreement benefits, massive diaspora network, close sea links'],
  [3, 'Italy', 755147066, '11.43%', 'Luxury fashion, designer suits, high-end couture', 'Ultra-Luxury & High-End', '5.0% (General)', '14–18 days', 'Global luxury house dominance in Dubai Mall, high margins per garment'],
  [4, 'Bangladesh', 644814992, '9.76%', 'Hyper-budget cotton tees, denim, basic knitwear', 'Economy / Low-Cost', '5.0% (General)', '16–22 days', 'Ultra-low labor costs; core supplier for deep-discount fast fashion'],
  [5, 'Vietnam', 385831921, '5.84%', 'Activewear, technical sportswear, outerwear', 'Mid to Premium Tier', '5.0% (General)', '14–20 days', 'Technical synthetic fabrics, athletic brand partnerships (Nike, Adidas)'],
  [6, 'Turkey', 312400000, '4.73%', 'Fashion-forward denim, woven blouses, modestwear', 'Mid to High Tier', '5.0% (General)', '8–12 days', 'Quick-fashion agile response, European design styling, quality finishes'],
  [7, 'Pakistan', 245600000, '3.72%', 'Cotton twill trousers, home textiles, knitwear', 'Budget Tier', '5.0% (General)', '5–7 days', 'Competitive raw cotton pricing, close maritime proximity to Jebel Ali'],
  [8, 'France', 218200000, '3.30%', 'Luxury fashion houses, designer womenswear', 'Ultra-Luxury Tier', '5.0% (General)', '14–18 days', 'Iconic Parisian luxury brands catering to affluent tourists and VIP clients'],
  [9, 'Spain', 194500000, '2.94%', 'Inditex fashion collections (Zara, Massimo Dutti)', 'Mid to Upper-Mid Tier', '5.0% (General)', '12–16 days', 'Rapid design turnaround and sophisticated retail brand prestige'],
  [10, 'Egypt (Reported Exports)', 185357746, '2.81%', 'Premium cotton tees, polos, loungewear, uniforms', 'Mid to Premium Quality', '0.0% (GAFTA Free)', '6–8 days', '0% duty exemption, world-famous Egyptian cotton pedigree, short sea transit'],
  ['—', 'Other Partner Nations', 793166994, '12.01%', 'Various specialized regional apparel and accessories', 'Diverse', 'Varied', 'Varied', 'Niche sourcing countries across Southeast Asia, Europe, and Latin America'],
  ['TOTAL', 'World Imports into UAE', 6606710990, '100.00%', 'All HS61 + HS62 Apparel Products', 'Comprehensive', '5% General Average', '—', 'V-shaped growth recovery (+87.8% since 2020 pandemic lows)'],
];
const wsSuppliers = XLSX.utils.aoa_to_sheet(supplierCountriesData);
XLSX.utils.book_append_sheet(wb, wsSuppliers, 'Supplier Countries');

// 6. Egypt-UAE Trade
const egyptUaeTradeData = [
  ['EGYPT — UNITED ARAB EMIRATES BILATERAL APPAREL TRADE & RECONCILIATION DATASET'],
  ['Comparison of Egyptian Exporter Declarations vs UAE Importer Declarations (2023)'],
  ['NOTE: Methodologies differ. Exporter data reflects FOB port of export; importer data reflects CIF local clearance.'],
  ['NEVER sum exporter and importer figures together.'],
  [''],
  ['Reporting Flow & Data Source', 'HS Chapter', 'Reported Trade Value (USD)', 'Valuation Basis', 'Source Agency', 'Reconciliation Analysis & Statistical Commentary'],
  ['Egyptian Reported Exports (2023)', 'HS 61 (Knitted Apparel)', 175822236, 'FOB (Free on Board)', 'GOEIC / CAPMAS (Egypt)', 'Egyptian exporters declared $175.82M in knitted apparel destined for UAE ports/free zones.'],
  ['Egyptian Reported Exports (2023)', 'HS 62 (Woven Apparel)', 9535510, 'FOB (Free on Board)', 'GOEIC / CAPMAS (Egypt)', 'Egyptian exporters declared $9.54M in woven garments destined for UAE buyers.'],
  ['Egyptian Total Reported Exports', 'HS 61 + HS 62 Combined', 185357746, 'FOB (Free on Board)', 'GOEIC / CAPMAS (Egypt)', 'Aggregate export declarations of ready-made garments from Egyptian ports to UAE destinations.'],
  [''],
  ['UAE Reported Imports from Egypt (2023)', 'HS 62 (Woven Apparel)', 9946801, 'CIF (Cost, Insurance, Freight)', 'UAE Federal Customs / UN Comtrade', 'UAE customs recorded $9.95M in woven apparel cleared directly into the domestic mainland market.'],
  ['UAE Reported Imports from Egypt (2023)', 'HS 61 (Knitted Apparel)', 'Bonded / Re-export Category', 'CIF (Cost, Insurance, Freight)', 'UAE Federal Customs / UN Comtrade', 'Knitted shipments entering Jebel Ali Free Zone (JAFZA) are recorded as bonded re-export cargo.'],
  [''],
  ['STATISTICAL DISCREPANCY RECONCILIATION DRIVERS'],
  ['Driver Factor', 'Impact Description', 'Significance to SAMI BIN AYYAD GROUP Strategy'],
  ['1. Free Zone Bonded Warehousing (JAFZA)', 'The majority of high-volume Egyptian knitted garments enter JAFZA for regional staging. Goods stored in bonded warehouses for subsequent re-export to Saudi Arabia, Kuwait, Oman, or East Africa are NOT classified as domestic UAE imports upon arrival.', 'Confirms Dubai’s pivotal role as a regional replenishment hub for SAMI BIN AYYAD GROUP products across the GCC.'],
  ['2. Re-Export Destination Shifts', 'Trading houses in Deira and JAFZA routinely purchase container loads from Egypt, store them temporarily, and re-invoice them to buyers in African and CIS markets.', 'Presents a dual opportunity: selling to domestic UAE retailers and supplying high-volume re-exporters.'],
  ['3. Valuation Methodology (FOB vs CIF)', 'Egypt records exports at FOB price (factory/port exit value). UAE records domestic imports at CIF (including ocean freight, marine insurance, and port handling).', 'Standard international trade variance accounted for in financial pricing models.'],
  ['4. Year-End Shipping In-Transit Lags', 'Containers departing Egyptian ports in late November/December are logged as Egyptian 2023 exports but may be cleared into UAE systems in January 2024.', 'Normal logistical pipeline lag across calendar reporting boundaries.'],
];
const wsEgyptUae = XLSX.utils.aoa_to_sheet(egyptUaeTradeData);
XLSX.utils.book_append_sheet(wb, wsEgyptUae, 'Egypt-UAE Trade');

// 7. Buyers & Opportunities
const buyersData = [
  ['PROSPECTIVE MAJOR BUYER INTELLIGENCE & COLLABORATION DIRECTORY — UAE'],
  ['Target Conglomerates, Retail Chains, Department Stores & Wholesale Trading Houses'],
  ['DISCLAIMER: Represents prospective B2B targets for private label and contract manufacturing; NOT confirmed existing clients.'],
  [''],
  ['Target Conglomerate / Firm', 'Headquarters Location', 'Flagship Brands / Formats', 'Primary Sourcing Model', 'Target Product Categories', 'Synergy for Sami Bin Ayyad Group', 'Strategic Priority Tier'],
  ['Landmark Group', 'Dubai, UAE', 'Max Fashion, Splash, Babyshop, Centrepoint', 'Direct volume sourcing; proprietary Private Label programs', 'Cotton tees, polos, infantwear, loungewear, denim, chinos', 'High-volume contract supply; 5% GAFTA tariff advantage delivers immediate landed cost savings', 'Tier 1 (Highest Priority)'],
  ['Apparel Group', 'Dubai, UAE', 'LC Waikiki, Tommy Hilfiger, Beverly Hills Polo Club, R&B', 'Franchise retail & multi-brand private label distribution', 'Casualwear, knit polos, athletic leisure, kids fashion', 'Agile nearshore manufacturing with 6-8 day sea replenishment for regional store network', 'Tier 1 (Highest Priority)'],
  ['Azadea Group', 'Dubai Regional Hub', 'Zara, Massimo Dutti, Pull&Bear, Bershka (Inditex franchisee)', 'Centralized corporate supply chain with regional replenishment', 'Fast-fashion tops, premium trousers, casual dresses', 'Nearshore manufacturing options for fast-turn seasonal collections and emergency restocks', 'Tier 2 (High Priority)'],
  ['M.H. Alshaya Co.', 'Dubai Regional Hub', 'H&M, Mothercare, American Eagle, COS, Next', 'Global franchise operator with dedicated regional sourcing desks', 'Organic cotton babywear, kids fashion, basic cotton underwear', 'Certified OEKO-TEX Egyptian cotton babywear for Mothercare regional retail outlets', 'Tier 1 (High Priority)'],
  ['Al Tayer Insignia', 'Dubai, UAE', 'Bloomingdale’s, Harvey Nichols, Gap, Ounass.com', 'Luxury department store merchandising & premier e-commerce', 'Ultra-luxury loungewear, Egyptian cotton shirting, pyjamas', 'Exclusive private label capsule collections for Ounass luxury digital fashion clientele', 'Tier 1 (High Priority)'],
  ['Majid Al Futtaim Retail (MAF)', 'Dubai, UAE', 'Carrefour Hypermarket Apparel (MyClub Basics), THAT Concept', 'Mass hypermarket private label replenishment & lifestyle retail', 'Basic t-shirt multi-packs, underwear, socks, essential polos', 'Mass recurring volume contracts for Carrefour hypermarkets across the UAE and GCC', 'Tier 1 (High Priority)'],
  ['Al-Futtaim Retail', 'Dubai, UAE', 'Marks & Spencer, Kiabi, Ted Baker', 'High-compliance retail brands focusing on ethical & eco standards', 'Sustainable cotton shirts, babywear, tailored trousers', 'Contract manufacturing meeting strict Better Cotton Initiative (BCI) standards', 'Tier 2 (Medium Priority)'],
  ['Chalhoub Group', 'Dubai, UAE', 'Luxury beauty & fashion distribution, regional concept stores', 'Ultra-luxury retail curation & brand incubation', 'High-end Egyptian cotton homewear, luxury robes, corporate gifts', 'Bespoke corporate and hospitality luxury cotton merchandise programs', 'Tier 2 (Niche Luxury)'],
  ['Louzan Fashion', 'Dubai / UAE', 'Specialized luxury abayas, modest dresses, sheilas', 'Proprietary design, bespoke manufacturing & regional retail', 'Premium woven cotton, blended draping textiles, trims', 'Supply of premium woven fabrics, lightweight blended cottons, and custom stitching', 'Tier 2 (Modestwear Niche)'],
  ['Deira & Naif Wholesale Merchants', 'Deira, Dubai, UAE', 'Independent trading houses & export clearing agents', 'Cash-against-documents spot buying; full container load orders', 'Mixed cotton basic apparel, surplus lots, seasonal basics', 'High-volume container replenishment for cross-border re-export into East Africa and CIS', 'Tier 1 (Commercial Velocity)'],
];
const wsBuyers = XLSX.utils.aoa_to_sheet(buyersData);
XLSX.utils.book_append_sheet(wb, wsBuyers, 'Buyers & Opportunities');

// 8. Regulatory Framework
const regulatoryData = [
  ['UAE APPAREL REGULATORY, CONFORMITY & CUSTOMS CLEARANCE FRAMEWORK'],
  ['Compliance Guidelines for Exporting Ready-Made Garments to the United Arab Emirates'],
  [''],
  ['Regulatory Dimension', 'Governing Body / Law', 'Mandatory Requirement', 'Technical Specifications & Standards', 'Action Required for Sami Bin Ayyad Group'],
  ['General Customs Tariff', 'UAE Federal Customs Authority', 'Standard 5.0% CIF customs duty on non-exempt foreign goods', 'Applied to CIF value of all goods imported from non-exempt nations (China, Bangladesh, Vietnam)', 'Leverage GAFTA exemption to deliver 0% duty-free entry for qualified Egyptian shipments'],
  ['Preferential Tariff (GAFTA)', 'Arab League / UAE MoIAT', '0.0% Preferential Duty for qualified Egyptian Arab-origin goods', 'Requires verified Certificate of Origin validating minimum 40% local Egyptian value addition', 'Obtain official GAFTA origin certificate issued by Egypt GOEIC for every container shipment'],
  ['Product Conformity (ECAS)', 'MoIAT (Cabinet Res. 54/2019)', 'Emirates Conformity Assessment Scheme (ECAS) registration', 'Ensures textile products meet UAE Technical Regulations before customs clearance', 'Register product technical files with MoIAT and secure ECAS certificates through accredited bodies'],
  ['Quality Mark (EQM)', 'MoIAT', 'Emirates Quality Mark (Optional / High-Prestige)', 'Voluntary mark demonstrating comprehensive manufacturing quality systems compliance', 'Evaluate EQM certification for premium Egyptian cotton product lines targeting luxury chains'],
  ['Bilingual Garment Labeling', 'MoIAT Technical Regulations', 'Mandatory care & fiber composition labeling in Arabic and English', 'Labels must be securely attached, indelible, stating fiber % breakdown and Made in Egypt / صنع في مصر', 'Implement standardized dual-language care labels complying with ISO care symbology'],
  ['Chemical & Environmental Safety', 'UAE Standards / MoIAT', 'Complete prohibition of hazardous chemicals and carcinogenic dyes', 'Zero-tolerance for banned Azo colorants; strict limits on formaldehyde and heavy metals', 'Furnish OEKO-TEX Standard 100 or accredited ISO 17025 laboratory test certificates'],
  ['Childrenswear Safety', 'MoIAT Child Safety Rules', 'Strict flammability, drawstring, and choking hazard prevention', 'No dangerous cords/drawstrings on infant hoods; flame-retardant parameters for sleepwear', 'Ensure childrenswear engineering strictly conforms to international child safety design rules'],
  ['Value Added Tax (VAT)', 'Federal Tax Authority (FTA)', 'Standard 5.0% VAT applied on goods sold domestically in the UAE', 'VAT applies upon import clearance; fully refundable/recoverable by registered corporate entities', 'Ensure commercial invoices clearly state corporate VAT numbers and standardized item values'],
];
const wsRegulatory = XLSX.utils.aoa_to_sheet(regulatoryData);
XLSX.utils.book_append_sheet(wb, wsRegulatory, 'Regulatory Framework');

// 9. Strategic Scorecard & Planning
const scorecardData = [
  ['STRATEGIC OPPORTUNITY SCORECARD & PRODUCTION CAPACITY SCENARIO CALCULATOR'],
  ['United Arab Emirates Apparel Market Assessment (SBA Multi-Factor Model: 88 / 100)'],
  [''],
  ['PART A: WEIGHTED STRATEGIC EVALUATION (88 / 100 — TIER 1 RATING)'],
  ['Evaluation Criterion', 'Weight (%)', 'Assigned Score (0-100)', 'Weighted Score', 'Empirical Evidence & Analytical Rationale'],
  ['1. Market Scale & Demand Growth', '15%', 90, 13.50, 'Total apparel imports exceed $6.61B; retail market AED 66.8B growing at 6% CAGR to AED 88.2B by 2030.'],
  ['2. Complete Import Reliance & Openness', '15%', 95, 14.25, 'Domestic apparel production satisfies <5% of demand; zero protectionist quotas or manufacturing barriers.'],
  ['3. Trade Policy & GAFTA Tariff Advantage', '15%', 95, 14.25, '0% duty under GAFTA delivers immediate 5% landed margin advantage over Chinese and Bangladeshi rivals.'],
  ['4. World-Class Logistics & Free Zones', '10%', 95, 9.50, 'Jebel Ali handles 15.5M TEUs; direct shipping from Egypt takes 6-8 days vs 18-24 days from Far East.'],
  ['5. Egyptian Cotton Competitive Edge', '15%', 80, 12.00, 'Unrivaled consumer equity for Egyptian cotton; requires strict inline quality consistency and on-time delivery.'],
  ['6. Retail Conglomerate Breadth & Private Label', '10%', 85, 8.50, 'Headquarters of Landmark, Apparel Group, Alshaya, MAF capable of awarding millions of units annually.'],
  ['7. Financial Safety, Currency Stability & Terms', '10%', 85, 8.50, 'World-class banking, stable AED-USD peg, and structured payment via Confirmed Irrevocable Letters of Credit.'],
  ['8. Regulatory Ease & Compliance Barriers', '10%', 75, 7.50, 'MoIAT / ECAS textile conformity rules are structured and manageable with accredited laboratory testing.'],
  ['TOTAL STRATEGIC OPPORTUNITY SCORE', '100%', '—', '88.00 / 100', 'TIER 1 RATING: Highest strategic priority for immediate B2B sales development in the GCC.'],
  [''],
  ['PART B: FINANCIAL FEASIBILITY & PRODUCTION CAPACITY SCENARIO CALCULATOR'],
  ['Operating Scenario', 'Monthly Capacity (Pcs)', 'Annual Volume (Pcs)', 'Supply Model', 'Avg FOB Price (USD)', 'Projected Annual Revenue (USD)', 'Operating Margin (%)', 'Est. Annual Net Profit (USD)'],
  ['Scenario 1: Pilot Trial Program', 10000, 120000, 'Full FOB (Finished Product)', 4.50, 540000, '20.0%', 108000],
  ['Scenario 2: Core Private Label Partner', 25000, 300000, 'Full FOB (Finished Product)', 5.20, 1560000, '18.0%', 280800],
  ['Scenario 3: Strategic Multi-Category Partner', 50000, 600000, 'Blended FOB / OEM', 4.80, 2880000, '16.5%', 475200],
  ['Scenario 4: Regional Anchor Supplier', 100000, 1200000, 'Annual Retail Supply Contract', 4.40, 5280000, '13.5%', 712800],
  ['Scenario 5: Cut & Make Tolling Service (CM)', 50000, 600000, 'CM Only (Client Supplies Fabric)', 1.35, 810000, '26.0%', 210600],
  ['Scenario 6: High-Volume CM Tolling Service', 100000, 1200000, 'CM Only (Client Supplies Fabric)', 1.25, 1500000, '25.0%', 375000],
];
const wsScorecard = XLSX.utils.aoa_to_sheet(scorecardData);
XLSX.utils.book_append_sheet(wb, wsScorecard, 'Strategic Scorecard & Planning');

// Write out file
const outPath = path.join(__dirname, '..', 'public', 'studies', 'apparel', 'SBA_UAE_Apparel_Trade_and_Buyer_Data.xlsx');
XLSX.writeFile(wb, outPath);

console.log(`Successfully generated multi-sheet Excel workbook at ${outPath}`);
console.log(`Total sheets: ${wb.SheetNames.length} -> [${wb.SheetNames.join(', ')}]`);
