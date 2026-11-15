const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } = require('docx');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

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
            text: fixTanween("دراسة السوق الكويتي لقطاع الملابس والمنسوجات والفرص التجارية والاستثمارية"),
            alignment: AlignmentType.CENTER,
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: fixTanween("كود التقرير: SBA-GM-APP-KWT-001 (المعرف الداخلي: SBA-GM-APP-KW-001) | الإصدار: 2.0 | تاريخ البحث: نوفمبر 2026"),
            alignment: AlignmentType.CENTER,
          }),
          new Paragraph({
            text: fixTanween("الدرجة الاستراتيجية: 84 / 100 (المستوى الأول – Tier 1) | الترتيب الإقليمي: #3 خليجيًا"),
            alignment: AlignmentType.CENTER,
          }),
          new Paragraph({ text: "" }),
          new Paragraph({
            text: fixTanween("1. الملخص التنفيذي"),
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: fixTanween("تُعد دولة الكويت واحدة من أكثر أسواق التجزئة والأزياء ربحية وجاذبية في منطقة الخليج العربي، مدفوعة بأعلى متوسطات الدخل الفردي عالميًا (نحو 32,312 دولارًا للناتج المحلي الإجمالي للفرد)، وقاعدة سكانية استهلاكية قوامها 4.87 مليون نسمة (وفق تقديرات البنك الدولي 2025؛ ونحو 5.03 مليون نسمة وفق تقديرات الأمم المتحدة 2025)، يشكل المقيمون الأجانب نحو 69% منها، ما يولد تنوعًا استثنائيًا في شرائح الطلب بين الفخامة والقطع الاستهلاكية اليومية.\n\nأظهرت البيانات الجمركية الدولية الموثقة لعام 2023 الصادرة عن الأمم المتحدة (UN Comtrade) وقاعدة بيانات البنك الدولي (WITS) وصول إجمالي واردات الملابس الجاهزة (HS 61 وHS 62) إلى 1,446,736,440 دولارًا (نحو 1.45 مليار دولار)، توزعت بين 844,679,300 دولار للملابس المحبوكة والتريكو (HS 61 بنسبة 58.39%)، و602,057,140 دولار للملابس المنسوجة (HS 62 بنسبة 41.61%). ويجب التمييز بدقة بين واردات الملابس الجاهزة هذه وبين الرقم الأوسع للواردات النسيجية العامة (HS 50–63) الذي بلغ 1,834,775,440 دولارًا ويشمل الألياف والغزول والأقمشة والمفروشات المنزلية."),
          }),
          new Paragraph({ text: "" }),
          new Paragraph({
            text: fixTanween("2. تعريف السوق ونطاقه"),
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: fixTanween("يحدد نطاق سوق الملابس في دولة الكويت بكافة بنود الملابس الجاهزة المصنفة جمركيًا تحت الفصلين 61 (ألبسة وتوابع ألبسة من مصنّرات أو كروشيه / المحبوكة) والفصل 62 (ألبسة وتوابع ألبسة من غير المصنّرات أو الكروشيه / المنسوجة). ومن الضروري منهجيًا الفصل التام بين واردات الملابس الجاهزة النهائية البالغة 1.45 مليار دولار، وبين النطاق الأوسع للتجارة النسيجية المصنفة تحت الفصول (HS 50 إلى HS 63) والتي بلغت وارداتها 1.835 مليار دولار في 2023؛ حيث تشمل الأخيرة الألياف القطنية والخيوط والأقمشة الخام والمفروشات المنزلية وأغطية الأسرة والأكياس والشباك الصناعية."),
          }),
          new Paragraph({ text: "" }),
          new Paragraph({
            text: fixTanween("3. حجم السوق ومؤشرات النمو"),
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: fixTanween("يُقدر الحجم الإجمالي لسوق تجزئة الملابس والأحذية في الكويت بما يتراوح بين 2.8 إلى 3.2 مليار دولار سنويًا (نحو 860 إلى 980 مليون دينار كويتي)، مدفوعًا بمعدل إنفاق سنوي للفرد يُعد من بين الأعلى عالميًا. كما تشهد التجارة الإلكترونية لقطاع الأزياء نموًا متسارعًا، حيث يتجاوز حجم المبيعات الرقمية للملابس 450 مليون دولار سنويًا (حوالي 138 مليون دينار كويتي) بفضل انتشار الهواتف الذكية بنسبة تقارب 100%، وتوسع منصات التسوق الرائدة مثل بوتيكات (Boutiqaat) ونمشي."),
          }),
          new Paragraph({ text: "" }),
          new Paragraph({
            text: fixTanween("4. حجم الطلب الفعلي وخصائص المستهلكين"),
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: fixTanween("يبلغ عدد السكان 4,865,298 نسمة وفق البنك الدولي 2025 (ونحو 5.026 مليون نسمة وفق تقرير الأمم المتحدة). ويمثل المقيمون الأجانب نحو 69% من السكان، بينما يشكل المواطنون الكويتيون نحو 31%. يولد هذا الانقسام شريحتين استهلاكيتين متمايزتين: شريحة المواطنين ذات الدخول الفائقة الباحثة عن الفخامة والقطن الطبيعي الخالص والأزياء الراقية، وشريحة المقيمين المتنوعة التي تدعم استهلاك الملابس الاقتصادية واليومية. وتتوزع دورات الشراء بين موسم رمضان وعيدي الفطر والأضحى (30%–40% من المبيعات)، والعودة للمدارس، والشتاء، والسفر الصيفي."),
          }),
          new Paragraph({ text: "" }),
          new Paragraph({
            text: fixTanween("5. تحليل الواردات والصادرات وحصص الموردين"),
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: fixTanween("بلغ إجمالي واردات الملابس الجاهزة (HS 61+62) لعام 2023 نحو 1,446,736,440 دولارًا (المحبوك: 58.39%، المنسوج: 41.61%). وتصدرت الصين كبار الموردين بحصة 32.08% ($464.12M) تليها الهند (10.83% / $156.73M)، وإيطاليا (10.50% / $151.84M)، وتركيا (7.64% / $110.55M)، وبنغلاديش (7.52% / $108.73M).\n\nأما واردات الكويت المسجلة لبند البلوفرات القطنية المحبوكة (HS 611020) من مصر وحدها فقد بلغت 304,960 دولارًا في عام 2023، وتؤكد الدراسة على عدم اعتبار هذا الرقم إجمالي صادرات الملابس المصرية للكويت؛ حيث تشير بيانات GOEIC إلى أن إجمالي الصادرات المصرية لأسواق الكويت يتراوح بين 18 إلى 24 مليون دولار سنوياً عبر مختلف بنود الملابس والزي الموحد، مع مرور جزء منها عبر مراكز ترانزيت إقليمية كجبل علي."),
          }),
          new Paragraph({ text: "" }),
          new Paragraph({
            text: fixTanween("6. المنتجات الأكثر طلباً وتفصيل بنود HS-6"),
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: fixTanween("تركزت الواردات في بنود محددة بدقة: التيشيرتات القطنية (HS 6109.10) بقيمة 137,944,000 دولار (21,225,000 قطعة)، البلوفرات القطنية (HS 6110.20) بـ 50,342,000 دولار (3,820,750 قطعة)، الفساتين القطنية (HS 6204.42) بـ 23,296,000 دولار (1,183,270 قطعة)، بلوفرات الألياف الصناعية (HS 6110.30) بـ 17,729,000 دولار (1,658,800 قطعة)، ألبسة نسائية خاصة (HS 6210.50) بـ 5,931,000 دولار (455,240 كجم)، أطقم نسائية قطنية (HS 6204.12) بـ 5,552,000 دولار (356,701 قطعة)، وأرواب وملابس نوم منزلية (HS 6208.91) بـ 2,245,000 دولار (220,464 كجم)."),
          }),
          new Paragraph({ text: "" }),
          new Paragraph({
            text: fixTanween("7. حجم الإنتاج المحلي والعرض الوطني"),
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: fixTanween("الإنتاج المحلي شبه منعدم على المستوى الصناعي الواسع ويغطي أقل من 2% من حاجة السوق، وينحصر في ورش تفصيل الدشداشة والزي الوطني ومشاغل العباءات والزي الموحد البسيط في الشويخ وصبحان. وتعتمد الدولة بنسبة 98%+ على الاستيراد، ما يضمن غياب أي رسوم حمائية أو قيود استيرادية محلية."),
          }),
          new Paragraph({ text: "" }),
          new Paragraph({
            text: fixTanween("8. تحليل المنافسة وهيكل السوق والتشبع"),
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: fixTanween("تتوزع المنافسة بين الصين (32.1%)، الهند (10.8%)، إيطاليا (10.5%)، تركيا (7.6%)، وبنغلاديش (7.5%). وتعد تركيا المنافس الأبرز لمصر في قطاعي الفساتين النسائية والأزياء المحتشمة. وترتكز الميزة التنافسية لمصر على سمعة القطن المصري الفاخر، والإعفاء الجمركي 0% بموجب GAFTA مقابل 5% تعريفة عامة، وقصر زمن الشحن لميناء الشويخ (10–14 يوماً)."),
          }),
          new Paragraph({ text: "" }),
          new Paragraph({
            text: fixTanween("9. العملاء والمشترون المحتملون (حسابات مستهدفة)"),
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: fixTanween("تضم قائمة الحسابات المستهدفة: شركة سوق خان الخليلي (SKKCO) ومصنع بيرلس التابع لها وعلامات بيبي بالاس (Baby's Palace)، وميستي (Misty)، وماري لو (Mary Loo)؛ بالإضافة إلى المقر العالمي لمجموعة الشايع (Mothercare, H&M)، تحالف أزاديا/الغانم (شبكة Inditex)، شركة اليوسفي للأزياء (Max Mara, DKNY)، مجموعة لاند مارك الكويت (Max, Splash)، الفطيم، أباريل جروب، مجموعة بسايد، وتجار الجملة في الشويخ وسوق المباركية."),
          }),
          new Paragraph({ text: "" }),
          new Paragraph({
            text: fixTanween("10. قنوات البيع وشبكات التوزيع"),
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: fixTanween("تستحوذ مجمعات التسوق الكبرى (الأفنيوز، 360، الكوت) على أكثر من 60% من مبيعات التجزئة للملابس. وتشكل الشويخ والمباركية المركز اللوجستي لتجارة الجملة والتوزيع، في حين تتجاوز مبيعات تجارة الأزياء الإلكترونية 450 مليون دولار بقيادة منصة بوتيكات."),
          }),
          new Paragraph({ text: "" }),
          new Paragraph({
            text: fixTanween("11. استراتيجية الدخول واختراق السوق"),
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: fixTanween("تقوم استراتيجية الدخول على ثلاثة مسارات: الشراكة الاستراتيجية والتوزيع مع شركة سوق خان الخليلي (SKKCO)، عقود التصنيع للغير (Private Label OEM) لسلاسل التجزئة الكبرى (الشايع، لاندمارك)، والتوريد المباشر بالحاويات لتجار الجملة في الشويخ والتعاون مع منصة بوتيكات."),
          }),
          new Paragraph({ text: "" }),
          new Paragraph({
            text: fixTanween("12. المواصفات الفنية والاشتراطات التنظيمية والجمارك"),
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: fixTanween("تطبق الكويت التعريفة الجمركية العامة الموحدة لدول الخليج (5%)، مع إعفاء كامل (0%) لمصر بموجب اتفاقية GAFTA شريطة استيفاء قواعد المنشأ وقاعدة القيمة المضافة 40%. كما تخضع الشحنات لاشتراطات الهيئة العامة للصناعة في الكويت (PAI) وإلزامية إصدار شهادة التفتيش الفني (TIR) عبر جهات فحص معتمدة، والالتزام ببطاقة بيان ثنائية باللغتين العربية والإنجليزية وخلو الأقمشة من صبغات الآزو المسرطنة."),
          }),
          new Paragraph({ text: "" }),
          new Paragraph({
            text: fixTanween("13. تحليل الأسعار وهيكل التكاليف وهوامش الربح"),
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: fixTanween("يمثل سعر CIF نحو 22% إلى 28% من سعر الرف في مجمعات التسوق الكبرى، وتتراوح هوامش المتاجر بين 55% و70%. الأسعار المستهدفة بصيغة FOB: تيشيرتات قطن ($3.20–$4.60)، بولو ($5.20–$7.50)، فساتين كاجوال ($8.00–$14.50)، بيجامات قطنية ($6.50–$10.00). وتتراوح أجور التشغيل فقط (CM) بين 1.20 إلى 1.75 دولار للقطعة المحبوكة."),
          }),
          new Paragraph({ text: "" }),
          new Paragraph({
            text: fixTanween("14. سلاسل الإمداد والبنية اللوجستية والشحن"),
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: fixTanween("يمثل ميناء الشويخ المنفذ التجاري الرئيسي للملابس الجاهزة في الكويت ويسانده ميناء الشعيبة. يستغرق الشحن البحري بالحاويات من موانئ مصر ما بين 10 إلى 14 يومًا فقط مقابل 18 إلى 24 يومًا من شرق آسيا. كما يتيح الشحن الجوي عبر مطار الكويت تسليم العينات والطلبيات العاجلة خلال أقل من 48 ساعة."),
          }),
          new Paragraph({ text: "" }),
          new Paragraph({
            text: fixTanween("15. المخاطر والتحديات التجارية وطرق التحوط"),
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: fixTanween("تشمل المخاطر الرئيسية: فترات الائتمان الطويلة (60–90 يوماً) ويتم التحوط منها بالاعتمادات المستندية غير القابلة للإلغاء المعززة (LC)؛ اشتراطات الهيئة العامة للصناعة (PAI) وشهادات TIR وتتم معالجتها بالفحص المخبري قبل الشحن؛ والمنافسة السعرية الآسيوية ويتم تجاوزها بالتركيز على القطن المصري الفاخر وتوظيف وفر الـ 5% الجمركي."),
          }),
          new Paragraph({ text: "" }),
          new Paragraph({
            text: fixTanween("16. الفرص التجارية والاستثمارية النوعية لمجموعة سامي بن عياد"),
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: fixTanween("تشمل 6 فرص رئيسية: عقود Private Label لمجموعتي الشايع ولاندمارك في القطنيات وملابس الأطفال؛ شراكة توزيع استراتيجية مع شركة سوق خان الخليلي وعلاماتها (بيبي بالاس، ميستي، ماري لو)؛ تصنيع كبسولات قطن مصري حصرية لمنصة بوتيكات ومتاجر الأفنيوز الفاخرة؛ توريد حاويات كاملة لتجار الجملة في الشويخ؛ عقود الزي الموحد لقطاعات الطيران والضيافة والمدارس؛ وتطوير خطوط فساتين قطنية وأزياء محتشمة للمناخ الحار."),
          }),
          new Paragraph({ text: "" }),
          new Paragraph({
            text: fixTanween("17. تقدير الطاقة الإنتاجية والجدوى المالية وسيناريوهات التشغيل"),
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: fixTanween("وضعت الدراسة 4 سيناريوهات إنتاجية تصاعدية:\n- السيناريو التجريبي (10,000 قطعة/شهر): إيراد سنوي $528,000 بهامش تشغيلي 18%–22%.\n- سيناريو التوريد التعاقدي المتوسط (25,000 قطعة/شهر): إيراد سنوي $1,440,000 بهامش 16%–20%.\n- سيناريو الشراكة الاستراتيجية (50,000 قطعة/شهر): إيراد سنوي $2,700,000 بهامش 15%–18%.\n- سيناريو المورد الإقليمي المعتمد (100,000 قطعة/شهر): إيراد سنوي $5,040,000 بهامش 13%–16%.\n- خيار أجور التشغيل فقط (CM - 50,000 قطعة/شهر): إيراد سنوي $840,000 بهامش 25%–28%."),
          }),
          new Paragraph({ text: "" }),
          new Paragraph({
            text: fixTanween("18. التوصيات الاستراتيجية وخطة العمل التنفيذية (12 شهرًا)"),
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: fixTanween("تتضمن خطة العمل 4 مراحل تنفيذية:\n- المرحلة 1 (الأشهر 1–3): التحضير الفني واستيفاء اعتمادات PAI ونظام TIR وتجهيز كبسولات عينات القطن المصري الفاخر واستخراج شهادات GAFTA.\n- المرحلة 2 (الأشهر 4–6): زيارة ميدانية لمدينة الكويت للقاء قيادات شركة سوق خان الخليلي وإدارات الشايع ولاندمارك وتجار الشويخ.\n- المرحلة 3 (الأشهر 7–9): تنفيذ طلبيات تجريبية بحجم 10,000 إلى 25,000 قطعة باعتمادات مستندية وشحن بحري لميناء الشويخ.\n- المرحلة 4 (الأشهر 10–12): إبرام عقود توريد سنوية مبرمجة (50,000 إلى 100,000 قطعة/شهر) وتأسيس شراكة توزيع دائمة."),
          }),
        ],
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  const outDir = path.join(__dirname, '..', 'public', 'studies', 'apparel');
  const docxPathV1 = path.join(outDir, 'SBA_Kuwait_Apparel_Market_Study_v1.docx');
  const docxPathStandard = path.join(outDir, 'SBA_Kuwait_Apparel_Market_Study.docx');

  fs.writeFileSync(docxPathV1, buffer);
  fs.writeFileSync(docxPathStandard, buffer);
  console.log(`Successfully generated DOCX at:\n1. ${docxPathV1}\n2. ${docxPathStandard}`);
}

async function main() {
  await generateDocx();

  // Generate ZIP package using PowerShell Compress-Archive for reliable compression
  const zipPathV1 = 'public/studies/apparel/SBA_Kuwait_Apparel_Study_Package_v1.zip';
  const zipPathStandard = 'public/studies/apparel/SBA_Kuwait_Apparel_Study_Package.zip';

  const cmd1 = `powershell -Command "Compress-Archive -Path 'public\\studies\\apparel\\SBA_Kuwait_Apparel_Market_Study_v1.docx','public\\studies\\apparel\\SBA_Kuwait_Apparel_Trade_Buyers_Compliance_v1.xlsx' -DestinationPath '${zipPathV1}' -Force"`;
  const cmd2 = `powershell -Command "Compress-Archive -Path 'public\\studies\\apparel\\SBA_Kuwait_Apparel_Market_Study.docx','public\\studies\\apparel\\SBA_Kuwait_Apparel_Trade_Buyers_Compliance.xlsx' -DestinationPath '${zipPathStandard}' -Force"`;

  execSync(cmd1);
  execSync(cmd2);

  console.log(`Successfully generated ZIP packages at:\n1. ${zipPathV1}\n2. ${zipPathStandard}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
