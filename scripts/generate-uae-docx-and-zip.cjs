const { Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell, WidthType, BorderStyle, AlignmentType } = require('docx');
const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

// Ensure correct Tanween before Alef: \u064B\u0627 (ـًا)
function fixTanween(str) {
  if (typeof str !== 'string') return str;
  return str.replace(/\u0627\u064B/g, '\u064B\u0627');
}

async function generateDocx() {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            text: fixTanween("مجموعة سامي بن عياد | SAMI BIN AYYAD GROUP"),
            alignment: AlignmentType.CENTER,
            heading: HeadingLevel.HEADING_2,
          }),
          new Paragraph({
            text: fixTanween("الأسواق العالمية — قطاع الملابس والمنسوجات"),
            alignment: AlignmentType.CENTER,
            heading: HeadingLevel.HEADING_3,
          }),
          new Paragraph({
            text: fixTanween("دراسة السوق الإماراتي لقطاع الملابس والمنسوجات والفرص التجارية والاستثمارية"),
            alignment: AlignmentType.CENTER,
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: fixTanween("كود التقرير: SBA-GM-APP-UAE-001 | الإصدار: 2.0 | تاريخ البحث: نوفمبر 2026"),
            alignment: AlignmentType.CENTER,
          }),
          new Paragraph({
            text: fixTanween("الدرجة الاستراتيجية: 88 / 100 (المستوى الأول – Tier 1) | الترتيب الإقليمي: #1 خليجيًا"),
            alignment: AlignmentType.CENTER,
          }),
          new Paragraph({ text: "" }),
          new Paragraph({
            text: fixTanween("1. الملخص التنفيذي"),
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: fixTanween("تُعد دولة الإمارات العربية المتحدة المركز التجاري واللوجستي وإعادة التصدير الأبرز في منطقة الشرق الأوسط وشمال أفريقيا، وسوقًا استهلاكيًا ضخمًا مدعومًا بأعلى متوسطات الدخل الفردي عالميًا (نحو 48,311 دولارًا) ونمو سكاني وسياحي غير مسبوق (11.35 مليون نسمة، وأكثر من 17 مليون سائح دولي لدبي وحدها).\n\nأظهرت البيانات الجمركية الدولية الموثقة لعام 2023 وصول إجمالي واردات الملابس الجاهزة (HS 61 وHS 62) إلى 6,606.71 مليون دولار (نحو 6.61 مليار دولار)، محققة نموًا بنسبة 6.4% عن عام 2022 ومسجلة تعافيًا استثنائيًا بنسبة +87.8% مقارنة بمستويات جائحة 2020 ($3.52B). شكلت الملابس المحبوكة (HS 61) نسبة 52.39% ($3.46B) بينما مثلت الملابس المنسوجة (HS 62) نسبة 47.61% ($3.15B).\n\nأما على صعيد التجزئة، فقد رصد تقرير يورومونيتور الدولي الصادر في فبراير 2026 بلوغ مبيعات التجزئة لقطاع الملابس والأحذية في الإمارات نحو 66.8 مليار درهم إماراتي في 2025 (نحو 18.19 مليار دولار) مع نمو سنوي 5% وتوقعات نمو مركب بنسبة 6.0% لتصل إلى 88.2 مليار درهم بحلول 2030. كما بلغت تجارة الأزياء الإلكترونية 11.4 مليار درهم محققة نسبة اختراق 15.7% من إجمالي مبيعات التجارة الإلكترونية البالغة 42.2 مليار درهم."),
          }),
          new Paragraph({ text: "" }),
          new Paragraph({
            text: fixTanween("2. تعريف السوق ونطاقه"),
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: fixTanween("يشمل نطاق سوق الملابس في دولة الإمارات العربية المتحدة كافة المنتجات الجمركية المصنفة تحت الفصلين 61 (ألبسة وتوابع ألبسة من مصنّرات أو كروشيه / المحبوكة) والفصل 62 (ألبسة وتوابع ألبسة من غير المصنّرات أو الكروشيه / المنسوجة).\n\nيتميز السوق الإماراتي بكونه سوقًا مزدوج الطبيعة: فهو من جهة سوق استهلاكي محلي فائق التطور وعالي القوة الشرائية، ومن جهة أخرى أكبر مركز لإعادة التصدير والخدمات اللوجستية وتوزيع البضائع في الشرق الأوسط وأفريقيا وجنوب آسيا، حيث يعاد تصدير ما بين 30% إلى 45% من إجمالي واردات الملابس الجاهزة إلى أسواق مجلس التعاون الخليجي، وشرق أفريقيا، ودول الكومنولث المستقلة عبر ميناء جبل علي والمنطقة الحرة بمطار دبي."),
          }),
          new Paragraph({ text: "" }),
          new Paragraph({
            text: fixTanween("3. حجم السوق ومؤشرات النمو"),
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: fixTanween("وفقًا لبيانات يورومونيتور إنترناشيونال المنشورة في فبراير 2026، بلغت القيمة السوقية لمبيعات التجزئة للملابس والأحذية في الإمارات 66.8 مليار درهم إماراتي (حوالي 18.19 مليار دولار) في عام 2025، مقارنة بـ 63.6 مليار درهم في 2024 بمعدل نمو سنوي 5.0%. وتشير التوقعات الاقتصادية المعتمدة إلى مواصلة السوق نموه بمعدل نمو سنوي مركب (CAGR) قدره 6.0% خلال الفترة 2025–2030 ليصل إلى 88.2 مليار درهم إماراتي (نحو 24.01 مليار دولار) بحلول عام 2030. كما بلغت تجارة الأزياء الإلكترونية 11.4 مليار درهم (3.10 مليار دولار) في 2025 ضمن إجمالي تجارة إلكترونية وطنية بـ 42.2 مليار درهم."),
          }),
          new Paragraph({ text: "" }),
          new Paragraph({
            text: fixTanween("4. حجم الطلب الفعلي وخصائص المستهلكين"),
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: fixTanween("يتشكل الطلب الفعلي من 11.35 مليون نسمة (88%+ مقيمين أجانب من أكثر من 200 جنسية) وأكثر من 17.1 مليون سائح دولي لدبي وحدها. وتتوزع محركات الطلب بين: (أ) قطاع التجزئة السريع والبيسك اليومي، (ب) قطاع الأزياء المحتشمة والراقية، و(ج) قطاع الزي المؤسسي والموحد لقطاعات الطيران والضيافة الفندقية والمستشفيات والمدارس."),
          }),
          new Paragraph({ text: "" }),
          new Paragraph({
            text: fixTanween("5. تحليل الواردات والصادرات وحصص الموردين"),
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: fixTanween("بلغ إجمالي واردات الملابس الجاهزة (HS 61+62) لعام 2023 نحو 6,606.71 مليون دولار، منها 3,461.01 مليون دولار محبوك (52.39%) و3,145.70 مليون دولار منسوج (47.61%). وتصدرت الصين الموردين بحصة 28.33% ($1,871.68M) تلتها الهند (15.00% / $991.01M) وإيطاليا (11.43% / $755.15M) وبنغلاديش (9.76% / $644.81M) وفيتنام (5.84% / $385.83M).\n\nأما تجارة مصر مع الإمارات فقد سجلت في بيانات GOEIC المصرية صادرات بـ 175.82 مليون دولار لـ HS61 و9.54 مليون دولار لـ HS62 بإجمالي 185.36 مليون دولار تقريبًا؛ بينما سجلت جمارك الإمارات واردات مباشرة لـ HS62 من مصر بـ 9.95 مليون دولار. ويعود الفارق إلى دخول معظم الشحنات لمنطقة جبل علي الحرة (JAFZA) لتخزينها كبضائع مناطق حرة مخصصة لإعادة التصدير الإقليمي إلى الخليج وأفريقيا دون قيدها كواردات استهلاك محلي."),
          }),
          new Paragraph({ text: "" }),
          new Paragraph({
            text: fixTanween("6. المنتجات الأكثر طلباً وتفصيل بنود HS-6"),
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: fixTanween("تركزت الواردات في 9 بنود ستية رئيسية: التيشيرتات والبولو القطنية (HS 6109.10)، السويترات والبلوفرات التريكو (HS 6110.20)، بدل الرياضة والترينجات (HS 6112.12)، ملابس الرضع المحبوكة (HS 6111.20)، بناطيل الرجال المنسوجة (HS 6203.42)، بناطيل النساء المنسوجة (HS 6204.62)، قمصان الرجال المنسوجة (HS 6205.20)، بلوزات النساء المنسوجة (HS 6206.30)، وملابس الرضع المنسوجة (HS 6209.20)."),
          }),
          new Paragraph({ text: "" }),
          new Paragraph({
            text: fixTanween("7. حجم الإنتاج المحلي والعرض الوطني"),
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: fixTanween("الإنتاج المحلي محدود للغاية ويغطي أقل من 5% من حاجة السوق، ويقتصر على تفصيل العباءات والزي التقليدي والزي الموحد البسيط. وتعتمد الدولة بنسبة 95%+ على الاستيراد دون وجود أي صناعة محلية تطالب بفرض رسوم حمائية."),
          }),
          new Paragraph({ text: "" }),
          new Paragraph({
            text: fixTanween("8. تحليل المنافسة وهيكل السوق والتشبع"),
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: fixTanween("تقود مجموعة لاندمارك قطاع التجزئة المتخصص بنسبة تقارب 13%، تليها أباريل جروب بنحو 6% ومجموعة أزاديا بنحو 4%. ولا تنصح الدراسة بالدخول في منافسة سعرية رخيصة مع بنغلاديش، بل التركيز على الجودة المتوسطة والممتازة للقطن المصري، وميزة الإعفاء الجمركي 0% بموجب GAFTA مقابل 5% على المنافسين الآسيويين، وسرعة الشحن البحري (6–8 أيام)."),
          }),
          new Paragraph({ text: "" }),
          new Paragraph({
            text: fixTanween("9. العملاء والمشترون المحتملون (حسابات مستهدفة)"),
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: fixTanween("تضم قائمة الحسابات المستهدفة: مجموعة لاند مارك (Max, Splash, Babyshop)، أباريل جروب (LC Waikiki, Tommy Hilfiger, Beverly Hills Polo Club)، مجموعة أزاديا (Zara, Massimo Dutti)، مجموعة الشايع (Mothercare, H&M)، مجموعة الطاير (منصة Ounass.com)، ماجد الفطيم (كارفور)، مجموعة الفطيم (Marks & Spencer)، مجموعة شلهوب، لوزان للأزياء، وتجار الجملة في ديرة وسوق نايف."),
          }),
          new Paragraph({ text: "" }),
          new Paragraph({
            text: fixTanween("10. قنوات البيع وشبكات التوزيع"),
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: fixTanween("تتوزع القنوات بين مراكز التسوق الكبرى (تستحوذ على أكثر من 55% من المبيعات)، منصات التجارة الإلكترونية (11.4 مليار درهم)، أسواق الجملة وإعادة التصدير في ديرة، وعقود التوريد المؤسسي للزي الموحد."),
          }),
          new Paragraph({ text: "" }),
          new Paragraph({
            text: fixTanween("11. استراتيجية الدخول واختراق السوق"),
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: fixTanween("تقوم استراتيجية الدخول على ثلاثة مسارات متوازية: التوريد المباشر لكبرى سلاسل التجزئة لبرامج الـ Private Label، الشراكة مع منصات التجارة الإلكترونية وتجار الجملة في ديرة، والمشاركة في المناقصات المؤسسية للزي الموحد لقطاعات الطيران والضيافة."),
          }),
          new Paragraph({ text: "" }),
          new Paragraph({
            text: fixTanween("12. المواصفات الفنية والاشتراطات التنظيمية والجمارك"),
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: fixTanween("تخضع الواردات لرقابة وزارة الصناعة والتكنولوجيا المتقدمة (MoIAT) وقرار مجلس الوزراء رقم 54 لسنة 2019 ونظام تقويم المطابقة (ECAS). يشترط خلو الأنسجة من صبغات الآزو المسرطنة، ووضع بطاقة بيان ثنائية باللغتين العربية والإنجليزية توضح نسبة الألياف وبلد المنشأ (صنع في مصر)، وإرفاق شهادة منشأ عربية معتمدة (GAFTA) تثبت تحقيق 40% قيمة مضافة محلية للإعفاء من تعريفة الـ 5%."),
          }),
          new Paragraph({ text: "" }),
          new Paragraph({
            text: fixTanween("13. تحليل الأسعار وهيكل التكاليف وهوامش الربح"),
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: fixTanween("يمثل سعر CIF نحو 20% إلى 28% من سعر الرف في سلاسل التجزئة، وتتراوح هوامش المتاجر بين 55% و70%. الأسعار المستهدفة بصيغة FOB: تيشيرتات قطن مصري ($3.20–$4.50)، بولو ($5.50–$7.50)، بيجامات قطنية ($6.00–$9.50)، وبناطيل كاجوال منسوجة ($6.50–$9.00). كما تتراوح أجور التشغيل فقط (CM) بين 1.10 و1.60 دولار للقطعة المحبوكة."),
          }),
          new Paragraph({ text: "" }),
          new Paragraph({
            text: fixTanween("14. سلاسل الإمداد والبنية اللوجستية والشحن"),
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: fixTanween("يمثل ميناء جبل علي (15.5 مليون حاوية TEU في 2024) المركز اللوجستي الأبرز في المنطقة. يستغرق الشحن البحري المباشر من الموانئ المصرية (العين السخنة / بورسعيد / الإسكندرية) إلى جبل علي ما بين 6 إلى 8 أيام فقط مقابل 18 إلى 24 يومًا من شرق آسيا. كما يستغرق الشحن الجوي نحو 3.5 ساعات فقط، ما يتيح تسليم العينات والطلبيات العاجلة خلال 24 ساعة."),
          }),
          new Paragraph({ text: "" }),
          new Paragraph({
            text: fixTanween("15. المخاطر والتحديات التجارية وطرق التحوط"),
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: fixTanween("أبرز المخاطر تشمل: فترات الائتمان الطويلة (60–90 يوماً) ويتم التحوط منها بالاعتمادات المستندية غير القابلة للإلغاء المعززة (LC)؛ والمنافسة السعرية الآسيوية ويتم تجاوزها بالتركيز على القطن المصري الفاخر وتوظيف وفر الـ 5% الجمركي؛ وصرامة معايير الجودة ومطابقة شهادات المنشأ العربية (GAFTA)."),
          }),
          new Paragraph({ text: "" }),
          new Paragraph({
            text: fixTanween("16. الفرص التجارية والاستثمارية النوعية لمجموعة سامي بن عياد"),
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: fixTanween("تشمل 6 فرص رئيسية: عقود تصنيع Private Label لسلاسل Max وSplash وأباريل؛ تأسيس مركز توزيع وبضائع حاضرة في المنطقة الحرة بجبل علي (JAFZA)؛ عقود مجموعات حصرية لمنصات التجارة الفاخرة مثل أوناس؛ توريد حاويات كاملة لتجار الجملة في ديرة لإعادة التصدير؛ عقود الزي المؤسسي لقطاعي الطيران والضيافة؛ وتوريد الأقمشة لدور الأزياء المحتشمة والعباءات."),
          }),
          new Paragraph({ text: "" }),
          new Paragraph({
            text: fixTanween("17. تقدير الطاقة الإنتاجية والجدوى المالية وسيناريوهات التشغيل"),
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: fixTanween("وضعت الدراسة 4 سيناريوهات تشغيلية تصاعدية:\n- السيناريو التجريبي (10,000 قطعة/شهر): إيراد سنوي $540,000 بهامش تشغيلي 18%–22%.\n- سيناريو التوريد التعاقدي المتوسط (25,000 قطعة/شهر): إيراد سنوي $1,560,000 بهامش 16%–20%.\n- سيناريو الشراكة الاستراتيجية (50,000 قطعة/شهر): إيراد سنوي $2,880,000 بهامش 15%–18%.\n- سيناريو المورد الإقليمي المعتمد (100,000 قطعة/شهر): إيراد سنوي $5,280,000 بهامش 12%–15%.\n- خيار أجور التشغيل فقط (CM - 50,000 قطعة/شهر): إيراد سنوي $810,000 بهامش 24%–28%."),
          }),
          new Paragraph({ text: "" }),
          new Paragraph({
            text: fixTanween("18. التوصيات الاستراتيجية وخطة العمل التنفيذية (12 شهرًا)"),
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: fixTanween("تتضمن خطة العمل 4 مراحل تنفيذية:\n- المرحلة 1 (الأشهر 1–3): التحضير الفني واستيفاء اعتمادات ECAS وGAFTA وتجهيز كبسولات عينات القطن المصري الفاخر.\n- المرحلة 2 (الأشهر 4–6): زيارات ميدانية لدبي للقاء مديري المشتريات في لاندمارك وأباريل وتجار ديرة.\n- المرحلة 3 (الأشهر 7–9): تنفيذ طلبيات تجريبية بحجم 10,000 إلى 25,000 قطعة باعتمادات مستندية وشحن سريع لجبل علي.\n- المرحلة 4 (الأشهر 10–12): إبرام عقود توريد سنوية مبرمجة (50,000 إلى 100,000 قطعة/شهر) وتأسيس وجود لوجستي في JAFZA."),
          }),
        ],
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  const docxPath = path.join(__dirname, '..', 'public', 'studies', 'apparel', 'SBA_UAE_Apparel_Market_Study.docx');
  fs.writeFileSync(docxPath, buffer);
  console.log(`Successfully generated DOCX at ${docxPath}`);
}

async function generateZip() {
  const zipPath = path.join(__dirname, '..', 'public', 'studies', 'apparel', 'SBA_UAE_Apparel_Study_Package.zip');
  const output = fs.createWriteStream(zipPath);
  const archive = archiver('zip', { zlib: { level: 9 } });

  return new Promise((resolve, reject) => {
    output.on('close', () => {
      console.log(`Successfully generated ZIP package at ${zipPath} (${archive.pointer()} bytes)`);
      resolve();
    });

    archive.on('error', (err) => reject(err));

    archive.pipe(output);

    const docxPath = path.join(__dirname, '..', 'public', 'studies', 'apparel', 'SBA_UAE_Apparel_Market_Study.docx');
    const xlsxPath = path.join(__dirname, '..', 'public', 'studies', 'apparel', 'SBA_UAE_Apparel_Trade_and_Buyer_Data.xlsx');

    archive.file(docxPath, { name: 'SBA_UAE_Apparel_Market_Study.docx' });
    archive.file(xlsxPath, { name: 'SBA_UAE_Apparel_Trade_and_Buyer_Data.xlsx' });

    const readmeContent = fixTanween(`SAMI BIN AYYAD GROUP — GLOBAL MARKETS INTELLIGENCE
UNITED ARAB EMIRATES — APPAREL & TEXTILES MARKET STUDY PACKAGE (VERSION 2.0)
Report Code: SBA-GM-APP-UAE-001
Status: Approved & Complete

Contents of this Package:
1. SBA_UAE_Apparel_Market_Study.docx — Comprehensive 18-Section Research Study Report in Arabic.
2. SBA_UAE_Apparel_Trade_and_Buyer_Data.xlsx — 9-Worksheet Comprehensive Trade, Product & Buyer Database.

Key Findings:
- Total Documented Imports (2023): $6.61 Billion USD (HS61 Knit: $3.46B + HS62 Woven: $3.15B).
- Retail Apparel & Footwear Sales (2025): AED 66.8 Billion ($18.19B USD) -> AED 88.2B by 2030 (6.0% CAGR).
- Fashion E-Commerce (2025): AED 11.4 Billion (15.7% digital share).
- Strategic Opportunity Score: 88 / 100 (Tier 1 – Rank #1 in GCC).
- Trade Advantage: 0% Preferential Duty under GAFTA (vs. 5% on Asian rivals) + 6-8 days ocean transit time.
`);

    archive.append(readmeContent, { name: 'README_UAE_Apparel_Package.txt' });
    archive.finalize();
  });
}

async function main() {
  await generateDocx();
  await generateZip();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
