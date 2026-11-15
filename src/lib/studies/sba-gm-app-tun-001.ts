// SBA-GM-APP-TUN-001 | Republic of Tunisia Apparel & Textiles Master Market Study
// SAMI BIN AYYAD GROUP | Version 2.0 (2024/2026)
// Dual-Track Strategic Assessment: Finished Apparel Supply (Track A) & Industrial Co-Production (Track B)
// Official Customs Baseline (WITS / UN Comtrade) + APII / INS / CETTEX Industrial Census

import type { GlobalMarketStudy } from "./types";

export const STUDY_TUN_APPAREL_001: GlobalMarketStudy = {
  "id": "SBA-GM-APP-TN-001",
  "slug": "tunisia-apparel-textiles",
  "sector": "garment",
  "scope": "global",
  "region": "arab_world",
  "apparelSubRegion": "other_arab",
  "opportunityScore": 75,
  "opportunityTier": "Tier 2 – High Opportunity",
  "opportunityTierAr": "المستوى الثاني – فرصة مرتفعة (مسار مزدوج: تجاري وصناعي)",
  "regionalRank": 3,
  "totalInRegion": 5,
  "opportunityRationaleAr": "تونس مركز صناعي وتصديري نسيجي متقدم للأسواق الأوروبية يقود واردات الاتحاد الأوروبي في ملابس العمل المهنية (حصة 17.44% بقيمة 317.7M يورو) ورابع موردي الجينز، ويضم 1,323 منشأة صناعية كبرى (81.3% منها موجهة كليًا للتصدير)، مع سوق محلي يستورد 418.4M دولار من الملابس الجاهزة (HS61+HS62)، وفرص استثنائية للتكامل الصناعي والتصنيع المشترك بموجب اتفاقيتي أغادير وGAFTA.",
  "opportunityRationaleEn": "Tunisia is an advanced textile manufacturing and export hub to Europe, leading EU professional workwear imports (17.44% share, €317.7M) and ranking as the 4th EU jeans supplier, housing 1,323 major industrial textile enterprises (81.3% totally exporting), alongside a $418.4M finished apparel import market (HS61+HS62) with exceptional industrial co-production synergies under Agadir and GAFTA accords.",
  "downloadDocxUrl": "/studies/apparel/SBA_Tunisia_Apparel_Market_Study.docx",
  "downloadXlsxUrl": "/studies/apparel/SBA_Tunisia_Apparel_Trade_Buyers_Compliance.xlsx",
  "downloadZipUrl": "/studies/apparel/SBA_Tunisia_Apparel_Study_Package.zip",
  "priorityGrade": "B+",
  "marketRole": "co_production_hub",
  "dataBasis": "hs61_hs62_customs",
  "tradeIndicatorNumericUsdB": 0.418,
  "tradeIndicatorDisplay": "418.4M USD",
  "tradeIndicatorYear": "2023",
  "tradeIndicatorScopeAr": "واردات تونس الرسمية المعلنة من الملابس الجاهزة HS61+HS62 لعام 2023 (WITS / UN Comtrade)",
  "tradeIndicatorScopeEn": "Official Tunisia-reported HS61+HS62 customs apparel imports for 2023 (WITS / UN Comtrade)",
  "dataCompletenessAr": "مكتملة دراسيًا مع فصل منهجي بين مسار توريد الملابس الجاهزة ومسار الشراكات الصناعية",
  "dataCompletenessEn": "Comprehensive study strictly segregating finished apparel distribution from industrial co-production models",
  "waveBadge": "Wave 2 (Growth)",
  "enableScenarioCalculator": true,
  "countryCode": "TN",
  "countryNameAr": "الجمهورية التونسية",
  "countryNameEn": "Republic of Tunisia",
  "subRegionOrProjectAr": "شمال إفريقيا · الترتيب #3 إقليميًا · نقطة التقييم: 75/100",
  "subRegionOrProjectEn": "North Africa · Regional Rank #3 · Opportunity Score: 75/100",
  "lastUpdatedYear": "2024/2026",
  "studyReferenceCode": "SBA-GM-APP-TUN-001",
  "version": "2.0",
  "kpis": [
    {
      "id": "kpi-tn-total-apparel-imports",
      "labelAr": "إجمالي واردات الملابس الجاهزة (HS61+HS62)",
      "labelEn": "Total Apparel Imports (HS61+HS62)",
      "valueDisplay": "418.40M",
      "valueUnitAr": "مليون دولار (2023)",
      "valueUnitEn": "USD Million (2023)",
      "trendIndicator": "stable",
      "changeTextAr": "واردات تونس الرسمية المعلنة في WITS / Comtrade",
      "changeTextEn": "Official Tunisia-reported imports in WITS / Comtrade",
      "sourceCitationAr": "World Bank WITS / UN Comtrade 2023",
      "sourceCitationEn": "World Bank WITS / UN Comtrade 2023"
    },
    {
      "id": "kpi-tn-hs61-imports",
      "labelAr": "واردات الملابس المصنرة والتريكو (HS61)",
      "labelEn": "Knitted Apparel Imports (HS61)",
      "valueDisplay": "148.14M",
      "valueUnitAr": "مليون دولار (35.4%)",
      "valueUnitEn": "USD Million (35.4%)",
      "trendIndicator": "positive",
      "changeTextAr": "إيطاليا تتصدر بـ 59.85M$ وسويسرا 15.08M$ وألمانيا 12.71M$",
      "changeTextEn": "Italy leads at $59.85M, Switzerland $15.08M, Germany $12.71M",
      "sourceCitationAr": "قاعدة بيانات الجمارك التونسية WITS 2023",
      "sourceCitationEn": "Tunisia Customs Database WITS 2023"
    },
    {
      "id": "kpi-tn-hs62-imports",
      "labelAr": "واردات الملابس المنسوجة (HS62)",
      "labelEn": "Woven Apparel Imports (HS62)",
      "valueDisplay": "270.26M",
      "valueUnitAr": "مليون دولار (64.6%)",
      "valueUnitEn": "USD Million (64.6%)",
      "trendIndicator": "positive",
      "changeTextAr": "فرنسا تتصدر بـ 56.20M$ وإيطاليا 46.71M$ والصين 25.78M$",
      "changeTextEn": "France leads at $56.20M, Italy $46.71M, China $25.78M",
      "sourceCitationAr": "قاعدة بيانات الجمارك التونسية WITS 2023",
      "sourceCitationEn": "Tunisia Customs Database WITS 2023"
    },
    {
      "id": "kpi-tn-textile-enterprises",
      "labelAr": "منشآت النسيج والملابس الكبرى (>=10 عمال)",
      "labelEn": "Textile & Apparel Enterprises (>=10 workers)",
      "valueDisplay": "1,323",
      "valueUnitAr": "مؤسسة صناعية مسجلة",
      "valueUnitEn": "Industrial Enterprises",
      "trendIndicator": "stable",
      "changeTextAr": "تمثل 28.7% من إجمالي المؤسسات الصناعية التونسية",
      "changeTextEn": "Represents 28.7% of all Tunisian industrial units",
      "sourceCitationAr": "وكالة النهوض بالصناعة والابتكار APII 2024",
      "sourceCitationEn": "Tunisian Industry Agency APII 2024"
    },
    {
      "id": "kpi-tn-exporting-enterprises-share",
      "labelAr": "نسبة المؤسسات المصدرة كليًا (Régime TE)",
      "labelEn": "Totally Exporting Enterprises Share",
      "valueDisplay": "81.3%",
      "valueUnitAr": "1,075 شركة مصدرة كليًا",
      "valueUnitEn": "1,075 Totally Exporting Units",
      "trendIndicator": "positive",
      "changeTextAr": "مقابل 248 شركة تعمل للسوق المحلي (Régime OTE)",
      "changeTextEn": "vs 248 units operating for local market (OTE)",
      "sourceCitationAr": "سجلات APII ومركز النسيج CETTEX",
      "sourceCitationEn": "APII Records & CETTEX Center"
    },
    {
      "id": "kpi-tn-eu-workwear-share",
      "labelAr": "حصة تونس من ملابس العمل بالاتحاد الأوروبي",
      "labelEn": "Tunisia EU Professional Workwear Share",
      "valueDisplay": "17.44%",
      "valueUnitAr": "المورد الأول للاتحاد الأوروبي",
      "valueUnitEn": "#1 EU Supplier (317.7M EUR)",
      "trendIndicator": "positive",
      "changeTextAr": "9.7 مليون قطعة ملابس عمل مهنية بقيمة 317.7M يورو",
      "changeTextEn": "9.7M professional pieces valued at €317.7M (2024)",
      "sourceCitationAr": "FIPA Tunisia & CETTEX Report 2025",
      "sourceCitationEn": "FIPA Tunisia & CETTEX Report 2025"
    },
    {
      "id": "kpi-tn-apparel-exports-ins",
      "labelAr": "صادرات صناعة الملابس (INS 2024)",
      "labelEn": "Apparel Industry Exports (INS 2024)",
      "valueDisplay": "5,328M",
      "valueUnitAr": "مليون دينار تونسي",
      "valueUnitEn": "Million TND (~1.72B USD)",
      "trendIndicator": "stable",
      "changeTextAr": "صادرات قطاع الملابس الموثقة لدى المعهد الوطني للإحصاء",
      "changeTextEn": "Apparel sector exports reported by INS Tunisia",
      "sourceCitationAr": "المعهد الوطني للإحصاء التونسي INS 2024",
      "sourceCitationEn": "Tunisia National Institute of Statistics (INS)"
    },
    {
      "id": "kpi-tn-opp-score",
      "labelAr": "مؤشر الفرصة الاستراتيجية لمجموعة SBA",
      "labelEn": "SBA Strategic Opportunity Score",
      "valueDisplay": "75 / 100",
      "valueUnitAr": "فرصة شراكة صناعية وتصديرية",
      "valueUnitEn": "Dual-Track Opportunity",
      "trendIndicator": "positive",
      "changeTextAr": "82/100 للشراكات الصناعية و 68/100 لتوريد التجزئة",
      "changeTextEn": "82/100 Industrial Alliances | 68/100 Retail Supply",
      "sourceCitationAr": "نموذج تقييم الفرص المرجح لمجموعة SBA",
      "sourceCitationEn": "SBA Weighted Opportunity Model"
    }
  ],
  "charts": [
    {
      "id": "chart-tn-apparel-imports-mix",
      "titleAr": "هيكل واردات الملابس الجاهزة في تونس 2023 (مليون دولار)",
      "titleEn": "Tunisia Finished Apparel Imports Structure 2023 (USD Million)",
      "chartType": "pie",
      "dataSource": "World Bank WITS / UN Comtrade (Tunisia Reported)",
      "labels": [
        "الملابس المنسوجة وغير المصنرة HS62 (270.26M$ - 64.6%)",
        "الملابس المصنرة والتريكو HS61 (148.14M$ - 35.4%)"
      ],
      "datasets": [
        {
          "label": "قيمة الواردات (مليون دولار)",
          "data": [
            270.26,
            148.14
          ],
          "backgroundColor": [
            "#0284c7",
            "#1e3a8a"
          ]
        }
      ]
    },
    {
      "id": "chart-tn-hs61-top-suppliers",
      "titleAr": "كبار موردي الملابس المصنرة (HS61) إلى تونس 2023 (مليون دولار)",
      "titleEn": "Top Suppliers of Knitted Apparel (HS61) to Tunisia 2023 (USD Million)",
      "chartType": "bar",
      "dataSource": "World Bank WITS / Tunisia Customs 2023",
      "labels": [
        "إيطاليا",
        "سويسرا",
        "ألمانيا",
        "تركيا",
        "إسبانيا",
        "الصين",
        "فرنسا",
        "بنغلاديش",
        "سلوفاكيا",
        "البرتغال",
        "المغرب",
        "مصر"
      ],
      "datasets": [
        {
          "label": "قيمة الواردات (مليون دولار)",
          "data": [
            59.85,
            15.08,
            12.71,
            9.86,
            8.14,
            7.4,
            6.63,
            4.55,
            3.78,
            3.45,
            1.68,
            0.2
          ],
          "backgroundColor": "#3b82f6"
        }
      ]
    },
    {
      "id": "chart-tn-hs62-top-suppliers",
      "titleAr": "كبار موردي الملابس المنسوجة (HS62) إلى تونس 2023 (مليون دولار)",
      "titleEn": "Top Suppliers of Woven Apparel (HS62) to Tunisia 2023 (USD Million)",
      "chartType": "bar",
      "dataSource": "World Bank WITS / Tunisia Customs 2023",
      "labels": [
        "فرنسا",
        "غير محدد",
        "إيطاليا",
        "الصين",
        "تركيا",
        "ألمانيا",
        "إسبانيا",
        "بلجيكا",
        "بنغلاديش",
        "المغرب",
        "البرتغال",
        "مصر"
      ],
      "datasets": [
        {
          "label": "قيمة الواردات (مليون دولار)",
          "data": [
            56.2,
            53.94,
            46.71,
            25.78,
            18.69,
            16.65,
            9.66,
            8.71,
            5.45,
            4.89,
            3.73,
            1.09
          ],
          "backgroundColor": "#0d9488"
        }
      ]
    },
    {
      "id": "chart-tn-ins-apparel-exports-trend",
      "titleAr": "تطور صادرات صناعة الملابس التونسية (2017–2025) — المعهد الوطني للإحصاء INS (مليون دينار)",
      "titleEn": "Tunisian Apparel Industry Exports Trend (2017–2025) — INS Series (Million TND)",
      "chartType": "line",
      "dataSource": "المعهد الوطني للإحصاء التونسي (INS) — سلسلة صادرات صناعة الملابس",
      "labels": [
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
        "2023",
        "2024",
        "2025 (تقديري)"
      ],
      "datasets": [
        {
          "label": "صادرات صناعة الملابس (مليون دينار تونسي)",
          "data": [
            3905,
            4775.7,
            4965.2,
            4046.2,
            4740.1,
            5572.7,
            5749.7,
            5328.3,
            5188.8
          ],
          "borderColor": "#2563eb",
          "fill": false
        }
      ]
    },
    {
      "id": "chart-tn-bct-total-sector-exports",
      "titleAr": "صادرات قطاع النسيج والملابس والجلود الموسع (2023–2025) — البنك المركزي التونسي BCT (مليون دينار)",
      "titleEn": "Total Textile, Clothing & Leather Sector Exports (2023–2025) — BCT Series (Million TND)",
      "chartType": "bar",
      "dataSource": "تقرير البنك المركزي التونسي (BCT) — قطاع النسيج والملابس والجلود الكلي",
      "labels": [
        "2023",
        "2024",
        "2025 (توقعات)"
      ],
      "datasets": [
        {
          "label": "إجمالي صادرات القطاع الموسع (مليون دينار تونسي)",
          "data": [
            11939.4,
            11363.2,
            11170
          ],
          "backgroundColor": [
            "#1e3a8a",
            "#0284c7",
            "#38bdf8"
          ]
        }
      ]
    }
  ],
  "tables": [
    {
      "id": "table-tn-import-baseline-2023",
      "titleAr": "جدول الأساس الإحصائي لواردات الملابس الجاهزة في تونس 2023 (WITS / UN Comtrade)",
      "titleEn": "Tunisia Finished Apparel Customs Import Baseline 2023",
      "columns": [
        {
          "headerAr": "بند النظام المنسق (HS)",
          "headerEn": "HS Code",
          "accessor": "hs"
        },
        {
          "headerAr": "الوصف السلعي للفئة",
          "headerEn": "Category Description",
          "accessor": "desc"
        },
        {
          "headerAr": "إجمالي الواردات (مليون $)",
          "headerEn": "Total Imports ($M)",
          "accessor": "total"
        },
        {
          "headerAr": "الحصة من الإجمالي (%)",
          "headerEn": "Share (%)",
          "accessor": "share"
        },
        {
          "headerAr": "الواردات من مصر (ألف $)",
          "headerEn": "Imports from Egypt ($k)",
          "accessor": "egypt"
        },
        {
          "headerAr": "المورد القيادي الأول",
          "headerEn": "Top Supplier Partner",
          "accessor": "top"
        }
      ],
      "rows": [
        {
          "hs": "HS 61",
          "desc": "ملابس وتوابع ألبسة من مصنرات (تريكو وكروشيه)",
          "total": "$148.14M",
          "share": "35.41%",
          "egypt": "$200.03 k (0.14%)",
          "top": "إيطاليا ($59.85M - 40.40%)"
        },
        {
          "hs": "HS 62",
          "desc": "ملابس وتوابع ألبسة من غير المصنرات (منسوجة)",
          "total": "$270.26M",
          "share": "64.59%",
          "egypt": "$1,090.00 k (0.40%)",
          "top": "فرنسا ($56.20M - 20.79%)"
        },
        {
          "hs": "HS 61 + 62",
          "desc": "إجمالي واردات الملابس الجاهزة الجمركية الموثقة",
          "total": "$418.40M",
          "share": "100.00%",
          "egypt": "$1,290.03 k (0.31%)",
          "top": "إيطاليا وفرنسا (أكثر من 38% مجتمعة)"
        }
      ]
    },
    {
      "id": "table-tn-hs61-suppliers-detail",
      "titleAr": "قائمة كبار موردي الملابس المصنرة والتريكو (HS61) إلى تونس لعام 2023",
      "titleEn": "Top Suppliers of Knitted Apparel (HS61) to Tunisia 2023",
      "columns": [
        {
          "headerAr": "الترتيب",
          "headerEn": "Rank",
          "accessor": "rank"
        },
        {
          "headerAr": "الدولة الموردة",
          "headerEn": "Supplier Country",
          "accessor": "country"
        },
        {
          "headerAr": "قيمة الواردات (دولار)",
          "headerEn": "Import Value (USD)",
          "accessor": "val"
        },
        {
          "headerAr": "الحصة السوقية (%)",
          "headerEn": "Market Share (%)",
          "accessor": "share"
        },
        {
          "headerAr": "طبيعة الميزة التنافسية والتدفق",
          "headerEn": "Competitive Dynamics",
          "accessor": "notes"
        }
      ],
      "rows": [
        {
          "rank": "1",
          "country": "إيطاليا 🇮🇹",
          "val": "$59,851,000",
          "share": "40.40%",
          "notes": "شريك تاريخي، سلاسل إنتاج مشتركة (Outward Processing)، تريكو راقي ومصنرات"
        },
        {
          "rank": "2",
          "country": "سويسرا 🇨🇭",
          "val": "$15,084,000",
          "share": "10.18%",
          "notes": "مجموعات أزياء متخصصة وتدفقات تجارية أوروبية ذات قيمة مضافة عالية"
        },
        {
          "rank": "3",
          "country": "ألمانيا 🇩🇪",
          "val": "$12,714,000",
          "share": "8.58%",
          "notes": "ملابس رياضية ومصنرات وظيفية وملابس عمل تقنية محبوكة"
        },
        {
          "rank": "4",
          "country": "غير محدد (Unspecified)",
          "val": "$9,875,000",
          "share": "6.67%",
          "notes": "تدفقات جمركية لمناطق حرة أو مستودعات ترانزيت"
        },
        {
          "rank": "5",
          "country": "تركيا 🇹🇷",
          "val": "$9,855,000",
          "share": "6.65%",
          "notes": "سلاسل الفاست فاشن، التيشيرتات القطنية، والبيزكس بأسعار منافسة"
        },
        {
          "rank": "6",
          "country": "إسبانيا 🇪🇸",
          "val": "$8,143,000",
          "share": "5.50%",
          "notes": "توريد سلاسل المجموعات الإسبانية الكبرى (Inditex, Mango)"
        },
        {
          "rank": "7",
          "country": "الصين 🇨🇳",
          "val": "$7,396,000",
          "share": "4.99%",
          "notes": "مصنرات البوليستر الاقتصادية والملابس الحياكة الرخيصة"
        },
        {
          "rank": "8",
          "country": "فرنسا 🇫🇷",
          "val": "$6,633,000",
          "share": "4.48%",
          "notes": "ماركات أزياء فرنسية ومجموعات ملابس جاهزة راقية"
        },
        {
          "rank": "9",
          "country": "بنغلاديش 🇧🇩",
          "val": "$4,546,000",
          "share": "3.07%",
          "notes": "التيشيرتات القطنية الأساسية الموردة للشركات الدولية"
        },
        {
          "rank": "10",
          "country": "سلوفاكيا 🇸🇰",
          "val": "$3,783,000",
          "share": "2.55%",
          "notes": "شحنات تعاقدية متبادلة ضمن شبكات الإنتاج الأوروبية"
        },
        {
          "rank": "11",
          "country": "البرتغال 🇵🇹",
          "val": "$3,450,000",
          "share": "2.33%",
          "notes": "مصنرات قطنية عالية الجودة وأقمشة جيرسي ممتازة"
        },
        {
          "rank": "12",
          "country": "المغرب 🇲🇦",
          "val": "$1,684,000",
          "share": "1.14%",
          "notes": "تجارة مغاربية بينية ضمن منطقة التجارة العربية وأغادير"
        },
        {
          "rank": "21",
          "country": "مصر 🇪🇬",
          "val": "$200,030",
          "share": "0.14%",
          "notes": "حصة متواضعة للغاية تبرز فرصة نمو كبرى للمصنرات القطنية المصرية"
        }
      ]
    },
    {
      "id": "table-tn-hs62-suppliers-detail",
      "titleAr": "قائمة كبار موردي الملابس المنسوجة (HS62) إلى تونس لعام 2023",
      "titleEn": "Top Suppliers of Woven Apparel (HS62) to Tunisia 2023",
      "columns": [
        {
          "headerAr": "الترتيب",
          "headerEn": "Rank",
          "accessor": "rank"
        },
        {
          "headerAr": "الدولة الموردة",
          "headerEn": "Supplier Country",
          "accessor": "country"
        },
        {
          "headerAr": "قيمة الواردات (دولار)",
          "headerEn": "Import Value (USD)",
          "accessor": "val"
        },
        {
          "headerAr": "الحصة السوقية (%)",
          "headerEn": "Market Share (%)",
          "accessor": "share"
        },
        {
          "headerAr": "طبيعة الميزة التنافسية والتدفق",
          "headerEn": "Competitive Dynamics",
          "accessor": "notes"
        }
      ],
      "rows": [
        {
          "rank": "1",
          "country": "فرنسا 🇫🇷",
          "val": "$56,198,000",
          "share": "20.79%",
          "notes": "الشريك التجاري الأول؛ ملابس جاهزة منسوجة، أطقم عمل، وسلاسل تجزئة فرنسية"
        },
        {
          "rank": "2",
          "country": "غير محدد (Unspecified)",
          "val": "$53,938,000",
          "share": "19.96%",
          "notes": "تدفقات إعادة استيراد وشحنات مستودعات جمركية ومناطق حرة"
        },
        {
          "rank": "3",
          "country": "إيطاليا 🇮🇹",
          "val": "$46,709,000",
          "share": "17.28%",
          "notes": "قمصان منسوجة، بدلات رسمية، أقمشة مقصوصة لبرامج التصنيع المشترك"
        },
        {
          "rank": "4",
          "country": "الصين 🇨🇳",
          "val": "$25,784,000",
          "share": "9.54%",
          "notes": "السترات الشتوية، المعاطف، السراويل البوليستر، وملابس العمل الاقتصادية"
        },
        {
          "rank": "5",
          "country": "تركيا 🇹🇷",
          "val": "$18,693,000",
          "share": "6.92%",
          "notes": "سلاسل التجزئة التركية، الدنيم، والقمصان المنسوجة"
        },
        {
          "rank": "6",
          "country": "ألمانيا 🇩🇪",
          "val": "$16,651,000",
          "share": "6.16%",
          "notes": "ملابس العمل المهنية والزي التخصصي المنسوج وسلاسل التوريد الألمانية"
        },
        {
          "rank": "7",
          "country": "إسبانيا 🇪🇸",
          "val": "$9,655,000",
          "share": "3.57%",
          "notes": "مجموعات الأزياء السريعة والفساتين والسراويل المنسوجة"
        },
        {
          "rank": "8",
          "country": "بلجيكا 🇧🇪",
          "val": "$8,708,000",
          "share": "3.22%",
          "notes": "مراكز التوزيع اللوجستية الأوروبية والملابس المنسوجة"
        },
        {
          "rank": "9",
          "country": "بنغلاديش 🇧🇩",
          "val": "$5,447,000",
          "share": "2.02%",
          "notes": "بنطلونات الدنيم والقمصان القطنية الأساسية"
        },
        {
          "rank": "10",
          "country": "المغرب 🇲🇦",
          "val": "$4,889,000",
          "share": "1.81%",
          "notes": "تكامل إقليمي ضمن اتفاقية أغادير في السراويل والسترات"
        },
        {
          "rank": "11",
          "country": "البرتغال 🇵🇹",
          "val": "$3,727,000",
          "share": "1.38%",
          "notes": "قمصان وأزياء منسوجة عالية الجودة لبيوت الأزياء"
        },
        {
          "rank": "12",
          "country": "تونس (إعادة استيراد) 🇹🇳",
          "val": "$2,429,000",
          "share": "0.90%",
          "notes": "بضائع تونسية مرتجعة أو معالجة جزئيًا في الخارج"
        },
        {
          "rank": "13",
          "country": "الولايات المتحدة 🇺🇸",
          "val": "$2,093,000",
          "share": "0.77%",
          "notes": "ماركات أمريكية خاصة وملابس رياضية وتقنية"
        },
        {
          "rank": "14",
          "country": "هولندا 🇳🇱",
          "val": "$2,033,000",
          "share": "0.75%",
          "notes": "مراكز لوجستية أوروبية لإعادة توزيع الملابس"
        },
        {
          "rank": "18",
          "country": "مصر 🇪🇬",
          "val": "$1,090,000",
          "share": "0.40%",
          "notes": "سراويل قطنية وأطقم عمل وقمصان منسوجة مع إمكانية مضاعفة الحصة"
        }
      ]
    },
    {
      "id": "table-tn-industry-apii-structure",
      "titleAr": "هيكل المنشآت الصناعية لقطاع النسيج والملابس بتونس (وكالة APII 2024)",
      "titleEn": "Tunisian Textile & Apparel Industry Structure (APII Census 2024)",
      "columns": [
        {
          "headerAr": "المؤشر الصناعي",
          "headerEn": "Industrial Indicator",
          "accessor": "indicator"
        },
        {
          "headerAr": "القيمة الإحصائية",
          "headerEn": "Value",
          "accessor": "val"
        },
        {
          "headerAr": "النسبة من القطاع",
          "headerEn": "Share (%)",
          "accessor": "share"
        },
        {
          "headerAr": "التفسير والدلالة الاستراتيجية لمجموعة SBA",
          "headerEn": "Strategic Significance for SBA",
          "accessor": "notes"
        }
      ],
      "rows": [
        {
          "indicator": "إجمالي المؤسسات النسيجية (>= 10 عمال)",
          "val": "1,323 مؤسسة",
          "share": "28.7% من إجمالي الصناعة",
          "notes": "أضخم قطاع مشغل ومصنع في تونس من بين 4,604 مؤسسات صناعية كبرى"
        },
        {
          "indicator": "المؤسسات المصدرة كليًا (Régime TE)",
          "val": "1,075 مؤسسة",
          "share": "81.25% من منشآت النسيج",
          "notes": "مصانع متطورة تعمل بنظام الأوفشور لحساب ماركات أوروبية (شركاء تصنيع محتملون)"
        },
        {
          "indicator": "المؤسسات غير المصدرة كليًا (Régime OTE)",
          "val": "248 مؤسسة",
          "share": "18.75% من منشآت النسيج",
          "notes": "تخدم السوق المحلي التونسي وتستورد مستلزمات وملابس جاهزة (عملاء توريد محتملون)"
        },
        {
          "indicator": "إجمالي العمالة المباشرة بالقطاع",
          "val": "أكثر من 150,000 عامل",
          "share": "~30% من عمالة الصناعات المعملية",
          "notes": "عمالة عالية التدريب والتخصص بنسبة نسائية تفوق 70%، مما يمنح جودة خياطة فائقة"
        },
        {
          "indicator": "التركز الجغرافي للمصانع",
          "val": "المنستير، الساحل، تونس الكبرى، صفاقس",
          "share": "> 75% من الطاقة الإنتاجية",
          "notes": "المنستير وحدها تضم أكبر قطب تكنولوجي نسيجي (Monastir-El Fejja) ومركز CETTEX"
        }
      ]
    },
    {
      "id": "table-tn-eu-workwear-position",
      "titleAr": "مكانة تونس التصديرية في ملابس العمل والجينز للاتحاد الأوروبي (FIPA / CETTEX 2024)",
      "titleEn": "Tunisia Export Dominance in EU Workwear & Jeans (2024)",
      "columns": [
        {
          "headerAr": "المؤشر التصديري الأوروبي",
          "headerEn": "EU Market Metric",
          "accessor": "metric"
        },
        {
          "headerAr": "القيمة المحققة لعام 2024",
          "headerEn": "Performance 2024",
          "accessor": "perf"
        },
        {
          "headerAr": "الحصة والترتيب في الاتحاد الأوروبي",
          "headerEn": "EU Rank & Share",
          "accessor": "rank"
        },
        {
          "headerAr": "التحليل والانعكاس على مجموعة SBA",
          "headerEn": "Commercial Analysis for SBA",
          "accessor": "analysis"
        }
      ],
      "rows": [
        {
          "metric": "صادرات ملابس العمل المهنية للاتحاد الأوروبي",
          "perf": "317.7 مليون يورو (~9.7 مليون قطعة)",
          "rank": "المورد الأول للاتحاد الأوروبي (حصة 17.44%)",
          "analysis": "تونس تتصدر موردي ملابس العمل في أوروبا متفوقة على الصين وتركيا وفيتنام"
        },
        {
          "metric": "متوسط سعر تصدير القطعة الواحدة (Unit Value)",
          "perf": "32.66 يورو للقطعة",
          "rank": "قيمة مضافة نوعية عالية",
          "analysis": "يعكس تخصص المصانع التونسية في ملابس العمل الفنية الواقية (Personal Protective Wear)"
        },
        {
          "metric": "صادرات سراويل الجينز (Jeans) للاتحاد الأوروبي",
          "perf": "حصة سوقية تبلغ 8.21%",
          "rank": "رابع أكبر مورد جينز للاتحاد الأوروبي",
          "analysis": "خبرة هائلة في الغسيل الصناعي والتشطيبات الكيميائية للدنيم"
        },
        {
          "metric": "أهم الوجهات الأوروبية المستوردة لملابس العمل",
          "perf": "فرنسا (35.6%)، ألمانيا (30.7%)، إيطاليا (9.7%)",
          "rank": "تركز 76% في 3 أسواق رئيسية",
          "analysis": "فرصة كبرى لـ SBA لتوريد أقمشة الجبردين والبولي قطن المصرية للمصانع التونسية المصدرة"
        }
      ]
    },
    {
      "id": "table-tn-target-products-matrix",
      "titleAr": "المصفوفة السلعية ذات الأولوية للسوق التونسي (تحليل HS6 ومساري العمل)",
      "titleEn": "Target Product Opportunities Matrix (HS6 Level & Dual Tracks)",
      "columns": [
        {
          "headerAr": "رمز HS6",
          "headerEn": "HS Code",
          "accessor": "code"
        },
        {
          "headerAr": "الفئة والمنتج المستهدف",
          "headerEn": "Target Product Category",
          "accessor": "prod"
        },
        {
          "headerAr": "واردات تونس 2023",
          "headerEn": "Tunisia Imports 2023",
          "accessor": "imp"
        },
        {
          "headerAr": "المنافسون الرئيسيون",
          "headerEn": "Key Competitors",
          "accessor": "comp"
        },
        {
          "headerAr": "مسار العمل المقترح لمجموعة SBA",
          "headerEn": "SBA Commercial Track",
          "accessor": "track"
        },
        {
          "headerAr": "الميزة التنافسية لـ SBA",
          "headerEn": "SBA Competitive Advantage",
          "accessor": "edge"
        }
      ],
      "rows": [
        {
          "code": "6109.10",
          "prod": "تيشيرتات وبولو قطنية محبوكة للرجال والشباب والنساء",
          "imp": "38.2M$ سنويًا",
          "comp": "إيطاليا، تركيا، الصين، بنغلاديش",
          "track": "المسار A: توريد لتجار التجزئة والمغازات الكبرى",
          "edge": "غزول القطن المصري الفاخر، نعومة الملمس، إعفاء اتفاقية التيسير العربية GAFTA"
        },
        {
          "code": "6111 / 6209",
          "prod": "ملابس الرضع وحديثي الولادة والأطفال قطن 100%",
          "imp": "24.5M$ سنويًا",
          "comp": "فرنسا، إيطاليا، تركيا",
          "track": "المسار A: سلاسل ملابس الأطفال والمحلات المتخصصة",
          "edge": "شهادات OEKO-TEX Standard 100، خلو المنتجات من الكيماويات، أمان تام لبشرة الرضيع"
        },
        {
          "code": "6107 / 6108",
          "prod": "الملابس الداخلية والمنزلية وبيجامات القطن لايكرا",
          "imp": "29.8M$ سنويًا",
          "comp": "إيطاليا، الصين، مصانع محلية (Demco)",
          "track": "المسار A و B: توريد تجزئة وشراكة إنتاج تعاقدي",
          "edge": "سمعة تاريخية للقطن المصري في الملابس الداخلية المريحة عالية الامتصاص"
        },
        {
          "code": "6211 / 6203",
          "prod": "ملابس العمل والزي المهني وأطقم الحماية",
          "imp": "تونس تستورد أقمشة وتصدر 317M€ ملابس عمل",
          "comp": "ألمانيا، فرنسا، مصانع تونسية محلية",
          "track": "المسار B: شراكات تصنيع مكملة وتوريد أقمشة وخياطة مشتركة",
          "edge": "توفير خطوط حياكة مكملة للمصانع التونسية لتلبية طلبيات الاتحاد الأوروبي الضخمة"
        },
        {
          "code": "6110.20",
          "prod": "سويتشيرتات وهوديز وتريكو خريف/شتاء",
          "imp": "31.2M$ سنويًا",
          "comp": "تركيا، الصين، إيطاليا",
          "track": "المسار A: ماركات الشباب وسلاسل الأزياء السريعة",
          "edge": "أقمشة ميلتون قطنية ثقيلة (280-340 جم/م²)، تشطيبات ناعمة، وألوان مقاومة للبهتان"
        }
      ]
    },
    {
      "id": "table-tn-buyers-partners-directory",
      "titleAr": "دليل الشركات التونسية المعتمدة (منشآت صناعية من APII ومجموعات تجزئة)",
      "titleEn": "Verified Tunisian Companies Directory (APII Industrial & Retail Leads)",
      "columns": [
        {
          "headerAr": "اسم الشركة",
          "headerEn": "Company Name",
          "accessor": "name"
        },
        {
          "headerAr": "المقر والمدينة",
          "headerEn": "Location",
          "accessor": "loc"
        },
        {
          "headerAr": "النشاط والمنتجات",
          "headerEn": "Business Activity & Products",
          "accessor": "act"
        },
        {
          "headerAr": "التصنيف التجاري",
          "headerEn": "Classification",
          "accessor": "class"
        },
        {
          "headerAr": "بيانات التواصل الرسمية",
          "headerEn": "Official Contacts",
          "accessor": "contact"
        },
        {
          "headerAr": "مسار التعاون المقترح مع SBA",
          "headerEn": "Proposed SBA Cooperation Model",
          "accessor": "collab"
        }
      ],
      "rows": [
        {
          "name": "AAW",
          "loc": "طبلبة، المنستير",
          "act": "تصنيع منسوجات منزلية وملابس عمل مهنية",
          "class": "مصنع / شريك صناعي محتمل",
          "contact": "هاتف: 21673496960+ | المصنع: 21673479597+",
          "collab": "المسار B: شراكة تصنيع وتوريد أقمشة قطنية لملابس العمل"
        },
        {
          "name": "ABH Textile Service",
          "loc": "سوسة",
          "act": "تصنيع ملابس العمل والزي المهني المتخصص",
          "class": "مصنع ملابس عمل / شريك محتمل",
          "contact": "هاتف: 21673247122+",
          "collab": "المسار B: إنتاج تعاقدي مشترك (Subcontracting) للأسواق الأوروبية"
        },
        {
          "name": "AVERA",
          "loc": "بن عروس، تونس الكبرى",
          "act": "تصنيع ملابس العمل واليونيفورم الصناعي",
          "class": "مصنع ملابس مهنية / شريك محتمل",
          "contact": "هاتف: 21671430150+ | المصنع: 21671430099+",
          "collab": "المسار B: تبادل طاقات إنتاجية في أطقم العمل الجبردين"
        },
        {
          "name": "BETEX",
          "loc": "المنستير",
          "act": "ملابس عمل، ملابس خارجية، ملابس داخلية وتوابع ملابس",
          "class": "مصنع ملابس متكامل / شريك محتمل",
          "contact": "هاتف: 21673473968+",
          "collab": "المسار B: توريد خطوط إنتاج تكميلية للتيشيرتات والملابس الداخلية"
        },
        {
          "name": "DEMCO KNITWEAR",
          "loc": "المكنين، المنستير",
          "act": "تصنيع الملابس الداخلية وتريكو المصنرات وتوابعها",
          "class": "مصنع تريكو عملاق / شريك ومنافس محتمل",
          "contact": "هاتف: 21673416100+ | المصنع: 21673416200+",
          "collab": "المسار B: تكامل صناعي في طلبيات التصدير وتوريد خامات قطنية"
        },
        {
          "name": "DEMCOINTER",
          "loc": "المكنين، المنستير",
          "act": "تصنيع الملابس الخارجية والسترات والدنيم",
          "class": "مصنع ألبسة خارجية / شريك محتمل",
          "contact": "هاتف: 21673416100+",
          "collab": "المسار B: شراكات تشغيل مشترك وتوريد خطوط مكملة"
        },
        {
          "name": "GARtex Tunisie",
          "loc": "الفحص، زغوان",
          "act": "تصنيع الملابس الجاهزة والملابس الخارجية",
          "class": "مصنع ملابس مصدر كليًا / شريك محتمل",
          "contact": "هاتف: 21679407019+ | المصنع: 21679407001+",
          "collab": "المسار B: إنتاج تعاقدي ببرامج تشغيل أوفشور"
        },
        {
          "name": "TEXMED INTERNATIONAL",
          "loc": "قصر هلال، المنستير",
          "act": "تصنيع الملابس الخارجية والداخلية الجاهزة",
          "class": "مصنع ملابس جاهزة / شريك محتمل",
          "contact": "هاتف: 21621280000+ | هاتف إضافي: 21629524525+",
          "collab": "المسار B: عقود تصنيع من الباطن لعلامات تجارية متوسطية"
        },
        {
          "name": "CROWN EAST NORTH AFRICA",
          "loc": "قليبية، نابل",
          "act": "تصنيع ملابس العمل والزي الموحد للمؤسسات",
          "class": "مصنع يونيفورم متخصص / شريك محتمل",
          "contact": "هاتف: 21672362282+",
          "collab": "المسار B: عقود تصنيع مشترك وتوريد دفعات سريعة"
        },
        {
          "name": "SOTICO GROUP",
          "loc": "سوسة",
          "act": "ملابس عمل، ملابس خارجية وتوابع الألبسة",
          "class": "مجموعة صناعية نسيجية / شريك محتمل",
          "contact": "هاتف: 21673288533+",
          "collab": "المسار B: توريد أقمشة ومصنرات وإبرام شراكات إنتاج"
        },
        {
          "name": "مونوبري تونس (Monoprix Tunisie - SNMVT)",
          "loc": "مقرين، تونس العاصمة",
          "act": "أضخم سلسلة سوبرماركت ومتاجر تجزئة كبرى في تونس (>85 فرع)",
          "class": "مجموعة تجزئة عملاقة / مشتري مستهدف",
          "contact": "إدارة المشتريات والتوريد التجاري",
          "collab": "المسار A: توريد برامج الملابس الجاهزة والعلامة الخاصة (Private Label)"
        },
        {
          "name": "المغازة العامة (Magasin Général - MG)",
          "loc": "تونس العاصمة",
          "act": "سلسلة متاجر تجزئة وتوزيع كبرى منتشرة في كافة المدن التونسية",
          "class": "شبكة تجزئة كبرى / مشتري مستهدف",
          "contact": "مكتب المشتريات المركزية للمنسوجات",
          "collab": "المسار A: توريد كميات ضخمة من التيشيرتات والملابس الداخلية وملابس الأطفال"
        },
        {
          "name": "سلسلة محلات زن (ZEN Fashion)",
          "loc": "صفاقس / تونس العاصمة",
          "act": "أكبر علامة ومتاجر أزياء سريعة محلية في تونس (>40 متجر)",
          "class": "ماركة أزياء تجزئة / مشتري وشريك محتمل",
          "contact": "قسم شراء المجموعات وتطوير المنتجات",
          "collab": "المسار A و B: تصنيع مجموعات كاجوال وتيشيرتات قطنية تحمل علامة ZEN"
        },
        {
          "name": "إكزيست للألبسة (EXIST Menswear)",
          "loc": "تونس العاصمة / سوسة",
          "act": "سلسلة محلات أزياء شبابية ورجالية كاجوال ورسمية",
          "class": "سلسلة تجزئة رجالية / مشتري مستهدف",
          "contact": "إدارة التوريد والمشتريات الخارجية",
          "collab": "المسار A: توريد قمصان بولو وتيشيرتات وبناطيل كاجوال"
        }
      ]
    },
    {
      "id": "table-tn-trade-agreements-tariffs",
      "titleAr": "مصفوفة الاتفاقيات التجارية والتعرفة الجمركية والضرائب في تونس",
      "titleEn": "Tunisia Trade Agreements, Customs Tariffs, FODEC & Taxes Matrix",
      "columns": [
        {
          "headerAr": "المحور التنظيمي / الاتفاقية",
          "headerEn": "Regulatory Pillar",
          "accessor": "pillar"
        },
        {
          "headerAr": "المعاملة المطبقة للبضائع المصرية",
          "headerEn": "Egyptian Origin Treatment",
          "accessor": "treatment"
        },
        {
          "headerAr": "الشروط المستندية وقواعد المنشأ",
          "headerEn": "Origin & Documentary Rules",
          "accessor": "rules"
        },
        {
          "headerAr": "ملاحظات وتنبيهات الامتثال لـ SBA",
          "headerEn": "SBA Compliance & Risk Notes",
          "accessor": "notes"
        }
      ],
      "rows": [
        {
          "pillar": "الاتفاقية الثنائية للتبادل الحر (05/03/1998)",
          "treatment": "إعفاءات جمركية تفضيلية وتفكيك تدريجي للرسوم",
          "rules": "شهادة منشأ ثنائية معتمدة؛ نسبة قيمة مضافة محلية >= 40% من تكلفة المصنع (Ex-Factory) ونقل مباشر",
          "notes": "تخضع بعض البنود لقوائم استثناء تاريخية؛ يجب التحقق الدقيق لكل بند HS6 عبر الجمارك التونسية"
        },
        {
          "pillar": "اتفاقية التيسير العربية الكبرى (GAFTA)",
          "treatment": "إعفاء جمركي كامل 0% رسوم جمركية للبضائع الصناعية المؤهلة",
          "rules": "شهادة منشأ عربية موحدة معتمدة من الغرفة التجارية المصرية ووزارة الصناعة (قيمة مضافة >= 40%)",
          "notes": "الإطار الأوسع والأكثر استقرارًا للتخليص الجمركي في الموانئ التونسية"
        },
        {
          "pillar": "اتفاقية أغادير الأورومتوسطية",
          "treatment": "تراكم المنشأ الإقليمي (Cumulation of Origin) لغرض التصدير لأوروبا",
          "rules": "تكامل مدخلات الغزول والأقمشة المصرية مع عمليات الخياطة التونسية لدخول الاتحاد الأوروبي بإعفاء 0%",
          "notes": "ركيزة المسار B الاستراتيجي لمجموعة SBA لتزويد المصانع التونسية بخامات القطن المصري"
        },
        {
          "pillar": "الرسوم الجمركية العامة (MFN) والتدابير الحمائية",
          "treatment": "ترتفع من 30% إلى 50% على الملابس الجاهزة المستوردة (حمائية)",
          "rules": "تطبق على الدول غير المتمتعة باتفاقيات تفضيلية لحماية الصناعة المحلية التونسية",
          "notes": "ميزة الإعفاء التفضيلي لمصر تمنحها فارقًا سعريًا حاسمًا (Duty Shield) يصل إلى 50% أمام آسيا"
        },
        {
          "pillar": "صندوق تنمية القدرة التنافسية الصناعية (FODEC)",
          "treatment": "1.0% على مدخلات ومنتجات القطاع الصناعي",
          "rules": "تطبق عند المنفذ الجمركي على القيمة الجمركية للبضائع المستوردة الموجهة للسوق المحلي",
          "notes": "رسم إلزامي يسدده المستورد المحلي لدعم الصندوق الصناعي التونسي"
        },
        {
          "pillar": "رسم الخدمات الجمركية (Prestations Douanières)",
          "treatment": "3.0% على إجمالي الرسوم والضرائب المحصلة (بحد أدنى 10 دنانير)",
          "rules": "يُحسب على البيان الجمركي الواحد وفق التشريع الجمركي التونسي",
          "notes": "رسم إجرائي إداري ثابت في كافة الموانئ التونسية"
        },
        {
          "pillar": "ضريبة القيمة المضافة (TVA)",
          "treatment": "المعدل العام 19.0% (مع وجود معدلات 13% و 7% لسلع محددة)",
          "rules": "تُحصل عند التخليص على وعاء (CIF + الرسوم والضرائب الأخرى)",
          "notes": "يسددها المستورد التونسي ويستردها ضريبيًا عند إعادة البيع؛ لا تؤثر على تسعير FOB/CIF للمصدر"
        }
      ]
    },
    {
      "id": "table-tn-logistics-ports",
      "titleAr": "مسارات الشحن واللوجستيات من موانئ مصر إلى الموانئ التونسية",
      "titleEn": "Multimodal Logistics Corridors from Egypt to Tunisia",
      "columns": [
        {
          "headerAr": "المسار اللوجستي",
          "headerEn": "Logistics Corridor",
          "accessor": "route"
        },
        {
          "headerAr": "الموانئ ووسيلة النقل",
          "headerEn": "Ports & Transport Mode",
          "accessor": "mode"
        },
        {
          "headerAr": "زمن الإبحار التقديري",
          "headerEn": "Transit Time",
          "accessor": "time"
        },
        {
          "headerAr": "حالة تكلفة الشحن (نولون)",
          "headerEn": "Freight Cost Status",
          "accessor": "cost"
        },
        {
          "headerAr": "الملاءمة التشغيلية لمجموعة SBA",
          "headerEn": "Operational Fit for SBA",
          "accessor": "fit"
        }
      ],
      "rows": [
        {
          "route": "المسار البحري الرئيسي إلى ميناء رادس",
          "mode": "حاويات بحرية (FCL/LCL) من الإسكندرية / دمياط / بورسعيد إلى ميناء رادس (تونس العاصمة)",
          "time": "4 إلى 7 أيام إبحار مباشر / فيدر",
          "cost": "يتطلب عرض سعر رسمي (Quotation Required)",
          "notes": "الميناء التجاري الأول في تونس (يستقبل >70% من الحاويات)؛ مثالي لخدمة العاصمة والوسط"
        },
        {
          "route": "المسار البحري إلى ميناء صفاقس وميناء سوسة",
          "mode": "شحن بحري إلى موانئ الساحل التونسي (Sousse / Sfax)",
          "time": "5 إلى 8 أيام إبحار",
          "cost": "يتطلب عرض سعر رسمي (Quotation Required)",
          "notes": "مثالي لتسليم الخامات والأقمشة مباشرة للقطب الصناعي النسيجي بالمنستير وسوسة وصفاقس"
        },
        {
          "route": "الشحن الجوي السريع للعينات المعتمدة",
          "mode": "طيران شحن / ركاب من مطار القاهرة (CAI) إلى مطار تونس قرطاج (TUN)",
          "time": "24 إلى 48 ساعة",
          "cost": "يتطلب عرض سعر رسمي (Quotation Required)",
          "notes": "مخصص حصريًا لعينات الاعتماد المسبق (Sales Samples) وأوامر التشغيل العاجلة"
        }
      ]
    },
    {
      "id": "table-tn-commercial-models-sba",
      "titleAr": "نماذج العمل الخمسة لمجموعة سامي بن عضاد في تونس (Commercial Models)",
      "titleEn": "SBA Group 5 Collaborative Commercial Models in Tunisia",
      "columns": [
        {
          "headerAr": "نموذج العمل",
          "headerEn": "Commercial Model",
          "accessor": "model"
        },
        {
          "headerAr": "العملاء والشركاء المستهدفون",
          "headerEn": "Target Partners",
          "accessor": "partners"
        },
        {
          "headerAr": "الفئات والمنتجات المعنية",
          "headerEn": "Product Categories",
          "accessor": "prods"
        },
        {
          "headerAr": "المزايا التجارية والمحفزات",
          "headerEn": "Commercial Value Proposition",
          "accessor": "value"
        },
        {
          "headerAr": "المخاطر واستراتيجية التنفيذ",
          "headerEn": "Risks & Execution Strategy",
          "accessor": "risk"
        }
      ],
      "rows": [
        {
          "model": "النموذج 1: تصدير الملابس الجاهزة (Finished Apparel Export)",
          "partners": "مجموعات التجزئة الكبرى (Monoprix, MG, ZEN) وتجار الجملة للملابس",
          "prods": "تيشيرتات، بولو، ملابس أطفال، بيجامات، ملابس داخلية",
          "value": "تغطية عجز المعروض في القطنيات الأساسية الفاخرة بأسعار منافسة للمستورد الأوروبي والتركي",
          "risk": "الرسوم الحمائية المحلية؛ يتطلب التحقق من إعفاء GAFTA وتطبيق شروط دفع نقدية آمنة"
        },
        {
          "model": "النموذج 2: تصنيع العلامات الخاصة (Private Label)",
          "partners": "سلاسل المتاجر التونسية والماركات المحلية (ZEN, EXIST, Mabrouk)",
          "prods": "مجموعات ملابس كاجوال، قمصان، بولو مطرز، أطقم نوم",
          "value": "إنتاج تشكيلات متطورة بهوية العميل بجودة خياطة أوروبية وأسعار مصنع منافسة",
          "risk": "مواصفات المقاسات الدقيقة؛ استدراج مواصفات معتمدة وعينات قبل القص والتنفيذ"
        },
        {
          "model": "النموذج 3: التصنيع للغير (OEM)",
          "partners": "المصانع التونسية الكبرى المصدرة لأوروبا وشركات الامتياز",
          "prods": "منتجات قطنية محبوكة ومصنرات وقمصان وفق مواصفات تقنية صارمة",
          "value": "الاستفادة من شهادات الجودة لمصانع SBA (OEKO-TEX) لتلبية المعايير الأوروبية",
          "risk": "التأخير في التسليم؛ جدولة تشغيل صارمة وشحن بحري سريع لميناء رادس"
        },
        {
          "model": "النموذج 4: التعاقد الصناعي من الباطن (Subcontracting)",
          "partners": "مصانع ملابس العمل والجينز التونسية ذات الطاقات المشغولة بالكامل",
          "prods": "حياكة وتجميع طلبيات تصديرية ضخمة لملابس العمل واليونيفورم والسترات",
          "value": "توفير سعة إنتاجية إضافية ضخمة لتمكين المصانع التونسية من تلبية عقود الاتحاد الأوروبي",
          "risk": "تفاوت مستويات الجودة؛ تطبيق معايير فحص AQL 2.5 الصارمة في كافة مراحل الإنتاج"
        },
        {
          "model": "النموذج 5: التوريد التكميلي (Complementary Supply)",
          "partners": "المصانع التونسية المتخصصة في المنسوجات الخارجية والتي تفتقر لطاقات التريكو",
          "prods": "أقمشة مصنرة دائرية، تيشيرتات أساسية، ملابس داخلية مكملة لتشكيلاتهم",
          "value": "تكامل إقليمي أورومتوسطي يستفيد من تراكم المنشأ بموجب اتفاقية أغادير",
          "risk": "شروط إثبات المنشأ التراكمي؛ إصدار شهادات منشأ يوروميد (EUR.1 / Agadir) موثقة"
        }
      ]
    },
    {
      "id": "table-tn-scenario-pricing-calculator",
      "titleAr": "حاسبة السيناريوهات التقديرية لتكلفة التيشيرت القطني إلى تونس (FOB و Landed Cost)",
      "titleEn": "Scenario Pricing Model for Cotton T-Shirts to Tunisia (Landed Cost)",
      "columns": [
        {
          "headerAr": "حجم الطلبية (قطعة)",
          "headerEn": "Order Volume",
          "accessor": "vol"
        },
        {
          "headerAr": "سعر التسليم من المصنع (FOB)",
          "headerEn": "FOB Egypt Price",
          "accessor": "fob"
        },
        {
          "headerAr": "الشحن والتأمين البحري المقدر",
          "headerEn": "Freight & Ins. / Pc",
          "accessor": "freight"
        },
        {
          "headerAr": "سعر الوصول CIF ميناء رادس",
          "headerEn": "CIF Radès Cost",
          "accessor": "cif"
        },
        {
          "headerAr": "الرسوم الجمركية التفضيلية (GAFTA)",
          "headerEn": "Customs (GAFTA 0%)",
          "accessor": "duty"
        },
        {
          "headerAr": "رسم FODEC (1%) ورسم الخدمات (3%)",
          "headerEn": "FODEC & Service Fees",
          "accessor": "fees"
        },
        {
          "headerAr": "التكلفة الواصلة للمستورد التونسي",
          "headerEn": "Landed Cost to Importer",
          "accessor": "landed"
        },
        {
          "headerAr": "سعر بيع الجملة المقترح بتونس",
          "headerEn": "Wholesale Target Price",
          "accessor": "ws"
        },
        {
          "headerAr": "هامش ربح المستورد المتوقع",
          "headerEn": "Importer Gross Margin",
          "accessor": "margin"
        }
      ],
      "rows": [
        {
          "vol": "10,000 قطعة",
          "fob": "$3.70",
          "freight": "$0.20",
          "cif": "$3.90",
          "duty": "$0.00 (معفى)",
          "fees": "$0.08",
          "landed": "$4.12",
          "ws": "$6.20",
          "margin": "33.5% (ربح جاذب)"
        },
        {
          "vol": "25,000 قطعة",
          "fob": "$3.45",
          "freight": "$0.14",
          "cif": "$3.59",
          "duty": "$0.00 (معفى)",
          "fees": "$0.06",
          "landed": "$3.78",
          "ws": "$5.75",
          "margin": "34.3% (تنافسية ممتازة)"
        },
        {
          "vol": "50,000 قطعة",
          "fob": "$3.20",
          "freight": "$0.10",
          "cif": "$3.30",
          "duty": "$0.00 (معفى)",
          "fees": "$0.05",
          "landed": "$3.47",
          "ws": "$5.35",
          "margin": "35.1% (حصة سوقية كاسحة)"
        },
        {
          "vol": "100,000 قطعة",
          "fob": "$3.00",
          "freight": "$0.08",
          "cif": "$3.08",
          "duty": "$0.00 (معفى)",
          "fees": "$0.04",
          "landed": "$3.23",
          "ws": "$5.00",
          "margin": "35.4% (ريادة كاملة)"
        }
      ]
    },
    {
      "id": "table-tn-risk-assessment-mitigation",
      "titleAr": "مصفوفة تقييم المخاطر الاستراتيجية في السوق التونسي وخطة التحوط",
      "titleEn": "Strategic Risk Assessment Matrix & Mitigation Actions for Tunisia",
      "columns": [
        {
          "headerAr": "محور الخطر",
          "headerEn": "Risk Category",
          "accessor": "risk"
        },
        {
          "headerAr": "الاحتمالية",
          "headerEn": "Probability",
          "accessor": "prob"
        },
        {
          "headerAr": "مستوى التأثير",
          "headerEn": "Impact Level",
          "accessor": "impact"
        },
        {
          "headerAr": "خطة التحوط الإلزامية لمجموعة SBA",
          "headerEn": "SBA Mitigation Plan",
          "accessor": "mitigation"
        },
        {
          "headerAr": "الإجراء العملي المطلوب",
          "headerEn": "Operational Action",
          "accessor": "action"
        }
      ],
      "rows": [
        {
          "risk": "المنافسة الصناعية المحلية القوية",
          "prob": "مرتفعة",
          "impact": "متوسط إلى مرتفع",
          "mitigation": "التركيز على مسار الشراكة والتكامل الصناعي (المسار B) بدلًا من المنافسة المباشرة",
          "action": "تقديم عروض للمصانع التونسية لتوريد خطوط مكملة وتخفيف أعباء طاقاتها"
        },
        {
          "risk": "المنافسة الأوروبية (فرنسا وإيطاليا)",
          "prob": "مرتفعة جدًا",
          "impact": "مرتفع في التجزئة",
          "mitigation": "التميز بفارق السعر للقطن المصري والتسليم السريع بتكلفة شحن منخفضة",
          "action": "استهداف شرائح التجزئة المتوسطة والبيزكس التي تتطلب جودة عالية بسعر منافس"
        },
        {
          "risk": "الرسوم الحمائية التونسية (30%-50%)",
          "prob": "متوسطة",
          "impact": "حرج في حال عدم الإعفاء",
          "mitigation": "الاعتماد الصارم على شهادات المنشأ GAFTA / اتفاقية التبادل الحر وتطبيق معيار 40% قيمة مضافة",
          "action": "التدقيق المسبق للبند الجمركي مع المخلص التونسي قبل الشحن الفعلي"
        },
        {
          "risk": "شروط قواعد المنشأ والنقل المباشر",
          "prob": "متوسطة",
          "impact": "مرتفع",
          "mitigation": "الالتزام التام بالنقل المباشر من موانئ مصر إلى تونس دون ترانزيت يمس بالمنشأ",
          "action": "إرفاق شهادات النقل المباشر وبوالص الشحن البحرية النظيفة مع المستندات"
        },
        {
          "risk": "تقلبات سعر صرف الدينار التونسي (TND)",
          "prob": "مرتفعة",
          "impact": "مرتفع",
          "mitigation": "حصر التعاقدات والفواتير حصرًا بالدولار الأمريكي (USD) أو اليورو (EUR)",
          "action": "تضمين شرط تعاقدي صريح يلزم المشتري بالسداد بالعملة الصعبة الصافية"
        },
        {
          "risk": "مخاطر الائتمان التجاري والتحصيل",
          "prob": "متوسطة",
          "impact": "حرج",
          "mitigation": "حظر الائتمان المفتوح؛ اشتراط دفعة نقدية مقدمة (30%-50%) واعتماد مستندي معزز (LC)",
          "action": "سداد الرصيد نقدًا قبل تسليم أصول بوالص الشحن الأصلية عبر البنوك المعتمدة"
        }
      ]
    }
  ],
  "executiveSummaryAr": "تُمثل الجمهورية التونسية سوقًا محوريًا ذا ثقل صناعي وتصديري استثنائي في حوض البحر الأبيض المتوسط وشمال إفريقيا؛ حيث لا تعمل تونس كمجرد سوق استهلاكي مستورد، بل تعد قاعدة تصنيعية متقدمة وشريكًا عضويًا لسلاسل إمداد الأزياء في الاتحاد الأوروبي، وخاصة في فرنسا وإيطاليا وألمانيا. وتستند هذه المكانة إلى قطاع نسيجي وصناعي ضخم يضم وفقًا لأحدث إحصاءات وكالة النهوض بالصناعة والابتكار (APII) لعام 2024 نحو 1,323 مؤسسة صناعية كبرى (تشغّل 10 عمال فأكثر)، تمثل وحدها 28.7% من إجمالي النسيج الصناعي التونسي، وتستحوذ المؤسسات المصدرة كليًا (Régime Totalement Exportateur - TE) على حصة كاسحة تبلغ 81.3% (1,075 مؤسسة)، في حين تعمل 248 مؤسسة فقط لتغطية احتياجات السوق المحلي (Régime OTE).\n\nوعلى صعيد التجارة الخارجية الموثقة، كشفت بيانات الجمارك التونسية الرسمية المسجلة لدى البنك الدولي (WITS) وشعبة الإحصاء بالأمم المتحدة (UN Comtrade) لعام 2023 أن إجمالي واردات تونس من الملابس الجاهزة (HS61+HS62) بلغ 418.396 مليون دولار أمريكي. وتتوزع هذه الواردات بنسبة 64.6% للملابس المنسوجة (HS62) بقيمة 270.261 مليون دولار تتصدرها فرنسا بـ 56.20M$ وإيطاليا بـ 46.71M$ والصين بـ 25.78M$ وتركيا بـ 18.69M$؛ وبنسبة 35.4% للملابس المصنرة والتريكو (HS61) بقيمة 148.135 مليون دولار تسيطر إيطاليا على صدارتها المطلقة بقيمة 59.851M$ (بحصة 40.4%) تليها سويسرا بـ 15.08M$ وألمانيا بـ 12.71M$ وتركيا بـ 9.86M$. وفي المقابل، سجلت واردات تونس من الملابس الجاهزة المصرية حضورًا متواضعًا للغاية بلغ 200.03 ألف دولار في المصنرات (HS61) ونحو 1.09 مليون دولار في المنسوجات (HS62) بإجمالي يقارب 1.29 مليون دولار فقط (بحصة 0.31%)، مما يعكس فجوة اختراق تجاري واسعة يمكن لمجموعة سامي بن عضاد سدها.\n\nوتبرز القوة التصديرية التونسية الهائلة في تقارير مركز النسيج (CETTEX) ووكالة الاستثمار الخارجي (FIPA) المنشورة في مارس 2025؛ حيث احتلت تونس المرتبة الأولى كأكبر مورد لملابس العمل والزي المهني (Professional Clothing) للاتحاد الأوروبي في عام 2024 بحصة سوقية بلغت 17.44% وقيمة تصديرية بلغت 317.7 مليون يورو (نحو 9.7 مليون قطعة بمتوسط سعر مرتفع بلغ 32.66 يورو للقطعة)، كما احتلت المرتبة الرابعة أوروبيًا في تصدير سراويل الجينز بحصة 8.21%. وتوضح بيانات المعهد الوطني للإحصاء التونسي (INS) أن صادرات صناعة الملابس بلغت 5,328.3 مليون دينار في 2024، في حين تضع بيانات البنك المركزي التونسي (BCT) إجمالي صادرات قطاع النسيج والملابس والجلود الموسع عند 11,363.2 مليون دينار.\n\nوبناءً على هذا التشخيص الهيكلي، تتبنى مجموعة سامي بن عضاد استراتيجية تجارية مزدوجة المسار تفصل فصلًا قاطعًا بين فرص السوق:\n- المسار الأول (المسار A — توريد الملابس الجاهزة): استهداف شبكات التجزئة والموزعين وسلاسل السوبرماركت الكبرى في تونس (مثل Monoprix Tunisie والمغازة العامة MG وسلسلة محلات ZEN و EXIST) لتوريد التيشيرتات والبولو والملابس الداخلية وملابس الأطفال القطنية، بالاستفادة من الميزة السعرية الحاسمة التي تمنحها اتفاقيتا GAFTA والتبادل الحر الثنائي (إعفاء جمركي تفضيلي 0% مقابل رسوم حمائية تتراوح بين 30% إلى 50% تطبقها تونس على الواردات الآسيوية غير المعفاة).\n- المسار الثاني (المسار B — الشراكات الصناعية والتكامل الأورومتوسطي): التعاون الصناعي مع كبرى المصانع التونسية المصدرة (مثل AAW, ABH, AVERA, BETEX, Demco, Sotico) من خلال عقود التصنيع المشترك (Subcontracting)، وتوفير طاقات حياكة مكملة، وتوريد خامات وأقمشة القطن المصري الفاخر للاستفادة من قواعد تراكم المنشأ في اتفاقية أغادير لغزو الأسواق الأوروبية المشتركة.\nوبناءً على نموذج التقييم المرجح، نالت تونس تقييم 75/100 (المستوى الثاني – فرصة مرتفعة)، محتلة الترتيب الثالث في منطقة شمال إفريقيا.",
  "executiveSummaryEn": "The Republic of Tunisia represents a premier manufacturing and export powerhouse within the Mediterranean and North African textile ecosystem. Rather than operating merely as a conventional consumer import market, Tunisia functions as an advanced, near-shore industrial partner deeply integrated into European fashion supply chains, particularly across France, Italy, and Germany. This structural profile is anchored by an expansive industrial base: according to the latest 2024 census by the Agency for Promotion of Industry and Innovation (APII), Tunisia houses 1,323 major textile and apparel enterprises (employing >=10 workers), representing 28.7% of all Tunisian manufacturing enterprises. Remarkably, 81.3% of these enterprises (1,075 plants) operate under the Totally Exporting regime (Régime TE), with only 248 units (18.7%) dedicated to the domestic market (Régime OTE).\n\nOfficial Tunisian customs import data reported in World Bank WITS and UN Comtrade databases for 2023 record $418.396 million USD in total finished apparel imports (HS61+HS62). Woven apparel (HS62) captured 64.6% ($270.261M USD), dominated by France ($56.20M), Italy ($46.71M), China ($25.78M), and Turkey ($18.69M). Knitted apparel (HS61) captured 35.4% ($148.135M USD), led overwhelmingly by Italy with $59.851M USD (40.4% share), followed by Switzerland ($15.08M), Germany ($12.71M), and Turkey ($9.86M). In contrast, Egyptian apparel exports to Tunisia were limited to $200.03k USD in knits (HS61) and ~$1.09M USD in woven (HS62), capturing a modest combined share of 0.31% (~$1.29M USD), revealing substantial unexploited market potential.\n\nTunisia's international export competitiveness was highlighted in CETTEX and FIPA Tunisia reports published in March 2025: in 2024, Tunisia ranked as the European Union's #1 leading supplier of professional workwear, securing a 17.44% market share valued at €317.7 million EUR (~9.7 million pieces at a premium average unit value of €32.66/piece), alongside ranking 4th in EU denim jeans supply (8.21% share). National statistics from INS report apparel industry exports at 5,328.3 million TND in 2024, while Central Bank of Tunisia (BCT) data peg broader textile, clothing, and leather exports at 11,363.2 million TND.\n\nConsequently, Sami Bin Ayyad Group adopts a disciplined dual-track commercial strategy:\n- Track A (Finished Apparel Distribution): Direct supply of 100% Egyptian combed cotton basics, T-shirts, polos, babywear, and loungewear to structured Tunisian retail chains (Monoprix Tunisie, Magasin Général, ZEN Fashion, EXIST), leveraging 0% preferential duty access under GAFTA to bypass Tunisia's 30%-50% protective tariffs on Asian goods.\n- Track B (Industrial Subcontracting & Co-Production): Strategic industrial alliances with export-oriented Tunisian manufacturers (AAW, ABH, AVERA, Demco, Sotico) for contract subcontracting and Egyptian cotton fabric inputs, capitalizing on regional cumulation under the Agadir Euro-Mediterranean Agreement. Weighted across eight criteria, Tunisia scores 75/100 (Tier 2 – High Opportunity), ranking #3 in North Africa.",
  "sections": [
    {
      "id": "sec-tn-profile-hero",
      "titleAr": "1. الملف التعريفي لتونس والمناطق الصناعية النسيجية الكبرى",
      "titleEn": "1. Tunisian Country Profile & Major Industrial Textile Clusters",
      "contentAr": "تحتل الجمهورية التونسية (Republic of Tunisia) موقعًا استراتيجيًا متميزًا في قلب حوض البحر الأبيض المتوسط، حيث تبعد سواحلها مسافة إبحار قصيرة عن الموانئ الأوروبية (إيطاليا وفرنسا) وترتبط باتفاقيات شراكة تاريخية مع الاتحاد الأوروبي والمنظومة المغاربية والعربية:\n\n1. **البيانات الوطنية والسيادية:**\n- **العاصمة:** تونس (Tunis) — المركز الإداري والتجاري والمالي الأول ومقر كبرى مجموعات التوزيع والتجزئة.\n- **العملة الوطنية والواقع النقدي:** الدينار التونسي (TND). تخضع التجارة الخارجية لضوابط الصرف الصادرة عن البنك المركزي التونسي (BCT)، وتُبرم عقود الاستيراد والتصدير باليورو (EUR) أو الدولار الأمريكي (USD).\n- **اللغات الرسمية ولغات الأعمال:** اللغتان العربية والفرنسية (اللغات الرسمية والمعاملات اليومية)، مع انتشار واسع للغة الإنجليزية في أوساط التجارة الدولية والشركات المصدرة.\n\n2. **أهم المناطق والأقطاب الصناعية النسيجية بتونس:**\n- **ولاية المنستير (Monastir):** القلب النابض لصناعة النسيج والملابس في تونس والساحل التونسي؛ تضم أكثر من ثلث مصانع النسيج بالبلاد، ومقر المركز الفني للنسيج (CETTEX)، والقطب التكنولوجي بالمنستير-الفجة (Neotex Technopark)، وتتركز فيها كبرى مجموعات تصنيع التريكو وملابس العمل والجينز (طبلبة، قصر هلال، المكنين).\n- **ولاية سوسة (Sousse):** قطب صناعي متقدم يضم كبرى مصانع الملابس المهنية والملابس الخارجية والتشطيبات النسيجية المتطورة.\n- **إقليم تونس الكبرى (تونس، بن عروس، أريانة، منوبة):** المركز الرئيسي لشركات التوزيع ومقرات المجموعات التجارية الكبرى ومصانع الملابس الجاهزة والزي الموحد.\n- **ولاية صفاقس (Sfax):** عاصمة الجنوب التونسي والقطب الاقتصادي الثاني؛ تضم منشآت صناعية متقدمة لتصنيع الملابس الجاهزة وشبكات توزيع تجارية عريقة.\n- **المناطق الصناعية الأخرى:** بنزرت (Bizerte - أقصى الشمال وميناء استراتيجي)، نابل والوطن القبلي (Nabeul)، المهدية (Mahdia)، والقيروان (Kairouan).",
      "contentEn": "The Republic of Tunisia occupies an enviable near-shore location on the Mediterranean basin, situated within short maritime transit distances from Italian and French ports:\n1. Sovereign Baseline: Capital Tunis; Currency Tunisian Dinar (TND); Official languages Arabic and French, with English widely deployed in international trade. External contracts are transacted in EUR or USD under Central Bank of Tunisia (BCT) guidelines.\n2. Prime Textile Industrial Clusters:\n- Monastir Governorate: The historic textile heartland housing over a third of national capacity, hosting CETTEX (Textile Technical Center) and the Monastir-El Fejja Neotex Technopark, leading in knitwear, denim, and workwear (Teboulba, Ksar Hellal, Moknine).\n- Sousse: Major center for professional workwear, technical finishing, and outerwear assembly.\n- Greater Tunis (Tunis, Ben Arous, Ariana, Manouba): Administrative and retail distribution hub hosting corporate headquarters and garment plants.\n- Sfax: The southern economic metropolis driving retail distribution and specialized apparel production.\n- Emerging Clusters: Bizerte (northern port hub), Nabeul, Mahdia, and Kairouan."
    },
    {
      "id": "sec-tn-executive-summary-dual-track",
      "titleAr": "2. الملخص التنفيذي والتوجيه التجاري المزدوج (المسار التجاري والصناعي)",
      "titleEn": "2. Executive Summary & Dual-Track Strategic Orientation",
      "contentAr": "تعتمد استراتيجية مجموعة سامي بن عضاد في تونس على التمييز الصارم بين مسارين استراتيجيين مستقلين:\n\n1. **المسار الأول — توريد الملابس الجاهزة للاستهلاك المحلي (Finished Apparel Supply - المسار A):**\n- **طبيعة السوق:** يستورد السوق التونسي سنويًا ملابس جاهزة بقيمة تتجاوز 418 مليون دولار (HS61+HS62)، منها 64.6% ملابس منسوجة و 35.4% ملابس مصنرة.\n- **العملاء المستهدفون:** شبكات التجزئة والمتاجر الكبرى (Monoprix, Magasin Général, ZEN, EXIST)، كبار مستوردي الألبسة وتجار الجملة في تونس وصفاقس وسوسة.\n- **الفرصة والميزة التنافسية:** تفرض تونس رسومًا جمركية حمائية عامة (MFN) تتراوح بين 30% إلى 50% على الملابس الجاهزة المستوردة من دول خارج الاتفاقيات لحماية الصناعة المحلية؛ وعليه، فإن تمتع الملابس المصرية بالإعفاء الجمركي 0% عبر اتفاقية التيسير العربية GAFTA يمنح منتجات سامي بن عضاد درعًا سعريًا حاسمًا (Duty Shield) للتفوق على المنافسين في الصين وتركيا وبنغلاديش.\n\n2. **المسار الثاني — الشراكات الصناعية والتكامل الأورومتوسطي (Industrial Partnerships - المسار B):**\n- **طبيعة السوق:** تمتلك تونس 1,075 مصنع ملابس يعمل بنظام التصدير الكلي (Régime TE)، وتتصدر صادرات ملابس العمل للاتحاد الأوروبي (17.44% حصة سوقية بـ 317.7M يورو) وتحتل المرتبة الرابعة في الجينز.\n- **الشركاء المستهدفون:** كبرى المنشآت الصناعية التونسية (مثل AAW, ABH, AVERA, BETEX, Demco, Sotico) التي تمتلك عقودًا أوروبية ضخمة وتعاني أحيانًا من اختناقات في الطاقة الاستيعابية.\n- **الفرصة والميزة التنافسية:** إبرام عقود تصنيع من الباطن (Subcontracting)، وتوفير خطوط حياكة مكملة، وتوريد خامات وأقمشة القطن المصري الفاخر التي تفتقر إليها تونس، مع الاستفادة من تراكم المنشأ في اتفاقية أغادير للتصدير إلى أسواق الاتحاد الأوروبي دون عوائق جمركية.",
      "contentEn": "SBA Group deploys a structured dual-track commercial framework tailored to Tunisia's unique industrial profile:\n1. Track A — Finished Apparel Supply (Consumer Retail Channel): Addressing Tunisia's $418.4M finished apparel import market (HS61+HS62). Targeting major retail groups (Monoprix, MG, ZEN, EXIST) with 100% Egyptian cotton basics. Egyptian exporters leverage a decisive 0% GAFTA preferential tariff shield against the 30%-50% protective duties levied on Asian and non-preferential suppliers.\n2. Track B — Industrial Partnerships & Euro-Med Co-Production: Collaborating with Tunisia's 1,075 totally exporting mills (Régime TE) that lead EU professional workwear supply (17.44% share, €317.7M). SBA provides complementary manufacturing capacity, specialized assembly, and premium Egyptian cotton fabric inputs under the Agadir Agreement's regional cumulation framework."
    },
    {
      "id": "sec-tn-customs-import-baseline-2023",
      "titleAr": "3. بيانات واردات الملابس المعتمدة لعام 2023 (WITS / UN Comtrade)",
      "titleEn": "3. Verified Apparel Import Customs Baseline 2023 (HS61 & HS62)",
      "contentAr": "استنادًا إلى بيانات الجمارك التونسية الرسمية المسجلة لدى البنك الدولي (WITS) وشعبة الإحصاء بالأمم المتحدة (UN Comtrade) لعام 2023:\n\n1. **إجمالي واردات الملابس الجاهزة (HS61 + HS62):**\nبلغ مجمل واردات تونس الرسمية من الملابس الجاهزة **418.396 مليون دولار أمريكي** لعام 2023. وتؤكد دراستنا أن هذا الرقم يمثل حصريًا الواردات الجمركية المباشرة لفصلي الملابس 61 و 62، ولا يخلط مع مجمل استهلاك التجزئة المحلي أو تجارة الأقمشة والغزول (HS50–63).\n\n2. **واردات الملابس المصنرة والتريكو (HS 61):**\nسجلت **148.135 مليون دولار أمريكي** (مشكلة 35.41% من الإجمالي). وتتصدر إيطاليا قائمة الموردين بفارق شاسع بإجمالي **59.851 مليون دولار** (بحصة 40.40%)، تليها سويسرا بـ 15.084 مليون دولار (10.18%)، وألمانيا بـ 12.714 مليون دولار (8.58%)، وبنود غير محددة بـ 9.875 مليون دولار، وتركيا بـ 9.855 مليون دولار (6.65%)، وإسبانيا بـ 8.143 مليون دولار (5.50%)، والصين بـ 7.396 مليون دولار (4.99%)، وفرنسا بـ 6.633 مليون دولار، وبنغلاديش بـ 4.546 مليون دولار، وسلوفاكيا بـ 3.783 مليون دولار، والبرتغال بـ 3.450 مليون دولار، والمغرب بـ 1.684 مليون دولار. بينما بلغت واردات تونس من مصر في هذا البند **200.03 ألف دولار فقط** (0.14%).\n\n3. **واردات الملابس المنسوجة وغير المصنرة (HS 62):**\nسجلت **270.261 مليون دولار أمريكي** (مشكلة 64.59% من الإجمالي). وتصدرت فرنسا القائمة بإجمالي **56.198 مليون دولار** (20.79%)، تليها واردات مستودعات جمركية غير محددة بـ 53.938 مليون دولار (19.96%)، وإيطاليا بـ 46.709 مليون دولار (17.28%)، والصين بـ 25.784 مليون دولار (9.54%)، وتركيا بـ 18.693 مليون دولار (6.92%)، وألمانيا بـ 16.651 مليون دولار (6.16%)، وإسبانيا بـ 9.655 مليون دولار (3.57%)، وبلجيكا بـ 8.708 مليون دولار، وبنغلاديش بـ 5.447 مليون دولار، والمغرب بـ 4.889 مليون دولار، والبرتغال بـ 3.727 مليون دولار، وتونس (إعادة استيراد) بـ 2.429 مليون دولار، والولايات المتحدة بـ 2.093 مليون دولار، وهولندا بـ 2.033 مليون دولار. وسجلت واردات تونس من مصر في هذا البند **1.090 مليون دولار** (0.40%).",
      "contentEn": "Official Tunisian customs data reported in World Bank WITS and UN Comtrade databases for 2023:\n1. Total Finished Apparel Baseline: Exactly $418.396M USD across HS Chapters 61 and 62.\n2. HS 61 Knitted Apparel: Totaled $148.135M USD (35.41%). Dominated by Italy ($59.851M - 40.40% share), followed by Switzerland ($15.084M), Germany ($12.714M), Unspecified ($9.875M), Turkey ($9.855M), Spain ($8.143M), China ($7.396M), France ($6.633M), Bangladesh ($4.546M), Slovakia ($3.783M), Portugal ($3.450M), and Morocco ($1.684M). Egypt registered $200.03k USD (0.14% share).\n3. HS 62 Woven Apparel: Totaled $270.261M USD (64.59%). Led by France ($56.198M - 20.79%), Unspecified customs zones ($53.938M), Italy ($46.709M - 17.28%), China ($25.784M - 9.54%), Turkey ($18.693M - 6.92%), Germany ($16.651M), Spain ($9.655M), Belgium ($8.708M), Bangladesh ($5.447M), Morocco ($4.889M), Portugal ($3.727M), and Egypt at $1.090M USD (0.40% share)."
    },
    {
      "id": "sec-tn-egypt-tunisia-bilateral-trade",
      "titleAr": "4. التحليل التفصيلي للتجارة البينية بين مصر وتونس (مقارنة بيانات الشريكين)",
      "titleEn": "4. Egypt-Tunisia Bilateral Trade Analysis & Partner Reconciliation",
      "contentAr": "توضح المقارنة الدقيقة لبيانات التجارة بين البلدين واقع التبادل التجاري لعام 2023:\n\n1. **الواردات التونسية من مصر (Tunisia Reported Imports from Egypt):**\n- الملابس المصنرة (HS 61): **200.03 ألف دولار أمريكي** (حصة 0.14% من واردات تونس للتريكو).\n- الملابس المنسوجة (HS 62): **1,090.00 ألف دولار أمريكي** (حصة 0.40% من واردات تونس للمنسوجات).\n- إجمالي واردات تونس من مصر (HS61+62): **1.290 مليون دولار أمريكي** (حصة سوقية إجمالية 0.31%).\n\n2. **الصادرات المصرية المعلنة إلى تونس (Egypt Reported Exports to Tunisia):**\n- سجلت بيانات الجمارك المصرية المعلنة في WITS تصدير ما قيمته نحو **1.45 مليون دولار أمريكي** من الملابس الجاهزة إلى تونس في 2023. ويعود الفارق الطفيف (نحو 160 ألف دولار) بين أرقام المصدر والمستورد إلى فروق التقييم الجمركي (FOB للمصدر مقابل CIF للمستورد) وتوقيت شحن الحاويات في أواخر العام وتكاليف الشحن والتأمين البحري.\n\n3. **التقييم التجاري لفرص المورد المصري:**\nتكشف الأرقام تدنيًا غير مبرر في الحصة السوقية لمصر (0.31%) مقارنة بقدرات صناعة الملابس المصرية؛ حيث تستورد تونس ملابس من تركيا بأكثر من 28.5 مليون دولار ومن الصين بأكثر من 33.1 مليون دولار سنويًا. وتستطيع مجموعة سامي بن عضاد رفع صادراتها لتونس من خلال:\n- تزويد سلاسل التجزئة التونسية ببدائل قطنية مصرية 100% للتيشيرتات والملابس الداخلية والبولو بأسعار CIF تقل بنسبة 15% إلى 20% عن المنتجات الأوروبية والتركية.\n- الاستفادة من سرعة الشحن البحري القصير عبر البحر المتوسط من موانئ الإسكندرية ودمياط إلى ميناء رادس (4-7 أيام إبحار).\n- توفير كميات دنيا مرنة للطلبيات (MOQs) تناسب دورات شراء شبكات المتاجر التونسية.",
      "contentEn": "Bilateral trade data analysis between Egypt and Tunisia for 2023:\n1. Tunisia-Reported Imports from Egypt: Knitted HS61 totaled $200.03k USD (0.14% share); Woven HS62 totaled $1,090k USD (0.40% share); Combined total: $1.290M USD (0.31% aggregate share).\n2. Egypt-Reported Exports to Tunisia: Egyptian customs records indicate ~$1.45M USD in apparel exports to Tunisia in 2023. The variance reflects standard FOB/CIF valuation adjustments, transit time lags, and freight spreads.\n3. Commercial Expansion Roadmap: Egypt's 0.31% market share is severely sub-optimal given Turkish ($28.5M) and Chinese ($33.1M) volumes. SBA Group targets expansion by offering 100% Egyptian cotton knits at landed costs 15%-20% below European and Turkish benchmarks, supported by rapid 4-7 day direct shipping."
    },
    {
      "id": "sec-tn-textile-industry-census-2024",
      "titleAr": "5. واقع قطاع الصناعات النسيجية التونسية (إحصاءات APII و INS والبنك المركزي)",
      "titleEn": "5. Tunisian Textile Industry Base (APII, INS & Central Bank Data)",
      "contentAr": "يقدم المسح الصناعي والإحصائي التونسي لعام 2024 صورة شاملة للعملاق النسيجي التونسي:\n\n1. **إحصاء المؤسسات الصناعية النسيجية (وكالة APII 2024 للمنشآت >= 10 عمال):**\n- **إجمالي المنشآت النسيجية المسجلة:** **1,323 مؤسسة صناعية**، تمثل **28.7%** من مجمل المنشآت الصناعية في تونس (البالغ عددها 4,604 منشأة).\n- **المؤسسات المصدرة كليًا (Régime Totalement Exportateur - TE):** **1,075 مؤسسة** (تشكل **81.25%** من مجمل منشآت القطاع)، وتعمل بنظام الأوفشور تحت حوافز جبائية وجمركية لتصنيع الملابس للأسواق العالمية.\n- **المؤسسات غير المصدرة كليًا (Régime OTE):** **248 مؤسسة** (تشكل **18.75%** من القطاع)، وتخدم أساسًا السوق المحلي التونسي.\n\n2. **العمالة والتشغيل بالقطاع النسيجي:**\nيعد القطاع المشغل الصناعي الأول في تونس؛ حيث يوظف أكثر من **150,000 عامل وعاملة** بصورة مباشرة (نحو 30% من إجمالي عمالة قطاع الصناعات المعملية بتونس)، وتمثل النساء أكثر من **70%** من القوى العاملة بالقطاع، مما يوفر دقة متناهية في أعمال الخياطة والتجميع والتشطيب.\n\n3. **سلسلة صادرات صناعة الملابس التونسية وفق المعهد الوطني للإحصاء (INS):**\nسجلت صادرات بند صناعة الملابس (Apparel Industry) بالدينار التونسي (مليون دينار):\n- 2017: 3,905.0 M TND\n- 2018: 4,775.7 M TND\n- 2019: 4,965.2 M TND\n- 2020: 4,046.2 M TND (تراجع الجائحة)\n- 2021: 4,740.1 M TND\n- 2022: 5,572.7 M TND\n- 2023: 5,749.7 M TND (الذروة التاريخية)\n- 2024: 5,328.3 M TND (~1.72 مليار دولار)\n- 2025: 5,188.8 M TND (توقعات معتمدة)\n\n4. **إجمالي صادرات قطاع النسيج والملابس والجلود وفق تقرير البنك المركزي التونسي (BCT):**\nسجلت المجموعة الموسعة لقطاع النسيج والملابس والجلود:\n- 2023: 11,939.4 M TND\n- 2024: 11,363.2 M TND\n- 2025: 11,170.0 M TND (توقعات البنك المركزي)\n*تنبيه منهجي:* هذه السلسلة أوسع نطاقًا وتشمل قطاعات الغزل، النسيج التقني، الأقمشة، المفروشات، والمنتجات الجلدية والأحذية، ولا يجوز خلطها مع سلسلة صناعة الملابس المنفصلة.",
      "contentEn": "Comprehensive industrial data profile anchored in official Tunisian institutional registries:\n1. Industrial Establishments Census (APII 2024 for units >=10 employees): 1,323 active textile and garment enterprises representing 28.7% of all Tunisian manufacturing entities (4,604 units). 1,075 enterprises (81.25%) operate under the Totally Exporting regime (Régime TE), with 248 units (18.75%) serving the domestic market (Régime OTE).\n2. Sectoral Employment: Direct employment exceeds 150,000 workers (~30% of total manufacturing workforce), with female employment surpassing 70%, ensuring precision garment stitching and assembly.\n3. INS Apparel Industry Export Series (Million TND): 2017: 3,905.0 | 2018: 4,775.7 | 2019: 4,965.2 | 2020: 4,046.2 | 2021: 4,740.1 | 2022: 5,572.7 | 2023: 5,749.7 | 2024: 5,328.3 | 2025: 5,188.8.\n4. Central Bank of Tunisia (BCT) Broader Sector Exports (Million TND): 2023: 11,939.4 | 2024: 11,363.2 | 2025: 11,170.0. This broader grouping captures yarns, technical textiles, fabrics, leather, and footwear."
    },
    {
      "id": "sec-tn-eu-workwear-jeans-leadership",
      "titleAr": "6. المكانة التصديرية التونسية في أوروبا والريادة في ملابس العمل والجينز",
      "titleEn": "6. Tunisia Export Dominance in European Workwear & Denim Jeans",
      "contentAr": "تبرز البيانات الصادرة عن المركز الفني للنسيج (CETTEX) ووكالة النهوض بالاستثمار الخارجي (FIPA Tunisia) المنشورة في 18 مارس 2025 المكانة التصديرية النوعية لتونس في الأسواق الأوروبية لعام 2024:\n\n1. **الريادة الأوروبية الأولى في ملابس العمل المهنية (Professional Workwear):**\n- صدرت تونس نحو **9.7 مليون قطعة ملابس عمل مهنية** إلى أسواق الاتحاد الأوروبي في عام 2024.\n- بلغت القيمة الإجمالية لصادرات ملابس العمل التونسية **317.7 مليون يورو**.\n- حققت تونس حصة سوقية بلغت **17.44%** من إجمالي واردات الاتحاد الأوروبي لملابس العمل.\n- نالت تونس الترتيب **الأول كأكبر مورد لملابس العمل المهنية للاتحاد الأوروبي** متفوقة على كبار المصدرين العالميين.\n- سجل متوسط قيمة القطعة التونسية المصدرة مستوى نوعيًا رفيعًا بلغ **32.66 يورو للقطعة**، مما يؤكد تخصص المصانع التونسية في ملابس العمل الفنية المقاومة للمخاطر (مقاومة الحريق، الأحماض، الكهرباء الساكنة، وملابس المستشفيات عالية التعقيم).\n- انخفض عدد قطع ملابس العمل المصدرة بنسبة 7% مقارنة بعام 2023، مما يفتح المجال لتعويض هذا الانخفاض عبر الشراكة مع مصانع مصرية.\n\n2. **الوجهات الأوروبية الرئيسية المستوردة لملابس العمل التونسية:**\n- **فرنسا:** تستحوذ على **35.6%** من مجمل صادرات ملابس العمل التونسية.\n- **ألمانيا:** تستحوذ على **30.7%**.\n- **إيطاليا:** تستحوذ على **9.7%**.\n\n3. **الريادة في صناعة سراويل الدنيم (Jeans):**\nاحتلت تونس المرتبة **الرابعة كأكبر مورد لسراويل الجينز إلى الاتحاد الأوروبي** بحصة سوقية بلغت **8.21%**، مستفيدة من منشآت متطورة في الغسيل الصناعي الصديق للبيئة بالليزر والأوزون.\n\n4. **الانعكاسات التجارية على مجموعة سامي بن عضاد:**\nتؤكد دراستنا أن المصانع التونسية ليست مجرد منافسين، بل تمثل شركاء تصنيع استراتيجيين؛ حيث تستطيع مصانع سامي بن عضاد تزويد المصانع التونسية بأقمشة الجبردين والبولي قطن المصرية وخيوط الحياكة عالية المتانة، والدخول في عقود تصنيع من الباطن (Subcontracting) لتنفيذ أجزاء من طلبيات ملابس العمل الأوروبية العملاقة.",
      "contentEn": "CETTEX and FIPA Tunisia intelligence published in March 2025 delineates Tunisia's leadership in European apparel supply chains for 2024:\n1. #1 European Supplier of Professional Workwear: Tunisia exported ~9.7 million pieces of professional clothing to the EU valued at €317.7M EUR, capturing a dominant 17.44% market share to rank as the EU's #1 foreign supplier. Average unit value reached a premium €32.66/piece, demonstrating specialization in technical protective clothing. Exported piece volume declined 7% vs 2023, creating partnership headroom for complementary Egyptian capacity.\n2. Core EU Workwear Destinations: France accounts for 35.6% of Tunisian professional clothing exports, Germany 30.7%, and Italy 9.7%.\n3. 4th Largest EU Jeans Supplier: Capturing an 8.21% share of European denim trousers imports.\n4. Strategic Opportunities for SBA Group: Tunisian mills represent prime industrial partners for raw fabric supply (poly-cotton twills, gabardine) and subcontracted assembly lines to meet surging European corporate delivery deadlines."
    },
    {
      "id": "sec-tn-target-product-opportunities-hs6",
      "titleAr": "7. الفرص السلعية التفصيلية لمجموعة سامي بن عضاد (تحليل مستوى HS6)",
      "titleEn": "7. Granular Product Opportunities & HS6 Competitive Benchmarking",
      "contentAr": "استنادًا إلى بيانات الاستيراد الرسمية وفجوات المعروض، تم تحليل الفرص السلعية على مستوى HS6:\n\n1. **تيشيرتات وبولو قطنية محبوكة (HS 6109.10 / 6105.10):**\n- **واردات تونس:** تتجاوز 38.2 مليون دولار سنويًا؛ وتسيطر إيطاليا وتركيا والصين على الحصة الكبرى.\n- **مسار SBA:** المسار A (تصدير مباشر لشبكات التجزئة والمغازات الكبرى).\n- **الميزة:** قطن مصري ممشط 100% بنعومة فائقة، مع إعفاء جمركي 0% عبر اتفاقية GAFTA يحمي المستورد التونسي من الرسوم الحمائية البالغة 30%-50%.\n\n2. **ملابس الرضع وحديثي الولادة والأطفال (HS 6111 / 6209):**\n- **واردات تونس:** 24.5 مليون دولار سنويًا؛ وتستورد تونس ملابس أطفال فاخرة من فرنسا وإيطاليا بأسعار باهظة.\n- **مسار SBA:** المسار A (متاجر ملابس الأطفال والمحلات العائلية).\n- **الميزة:** خامات قطنية معتمدة OEKO-TEX خالية من الكيماويات وأزرار نيكل حرة، بأسعار تقل 30% عن الماركات الأوروبية.\n\n3. **الملابس الداخلية والمنزلية والبيجامات (HS 6107 / 6108):**\n- **واردات تونس:** 29.8 مليون دولار سنويًا.\n- **مسار SBA:** المسار A و B (توريد للمتاجر وشراكات تصنيع مشتركة مع مصانع تريكو).\n- **الميزة:** تاريخ عريق وثقة المستهلك المغاربي في جودة ومتانة الملابس الداخلية القطنية المصرية.\n\n4. **ملابس العمل والزي المهني (HS 6211 / 6203):**\n- **واردات وتصدير تونس:** تونس تستورد أقمشة وتصدر 317M€ ملابس عمل لأوروبا.\n- **مسار SBA:** المسار B (شراكة تصنيع وتوريد أقمشة جبردين وخياطة تعاقدية من الباطن).\n- **الميزة:** سد العجز في الطاقة التشغيلية وتوفير خامات بولي قطن متينة بأسعار منافسة.\n\n5. **السويتشيرتات والهوديز والملابس الرياضية (HS 6110.20):**\n- **واردات تونس:** 31.2 مليون دولار سنويًا.\n- **مسار SBA:** المسار A (متاجر الأزياء الشبابية والرياضية).\n- **الميزة:** أقمشة ميلتون قطنية ثقيلة (280-340 جم/م²) مقاومة للانكماش والبهتان.",
      "contentEn": "Granular evaluation of core product opportunities at the HS-6 digit level:\n1. Cotton T-shirts & Polos (6109.10 / 6105.10): Market imports ~$38.2M. Track A focus on retail chains; leveraging 0% GAFTA tariff against 30%-50% MFN duties.\n2. Infant & Children's Clothing (6111 / 6209): Market imports ~$24.5M. Track A focus; OEKO-TEX certified 100% Egyptian cotton at 30% discount to French/Italian imports.\n3. Underwear, Sleepwear & Loungewear (6107 / 6108): Market imports ~$29.8M. Dual-track focus leveraging Egyptian cotton brand equity and local retail distribution.\n4. Professional Workwear (6211 / 6203): Track B partnership focus; supplying raw fabric inputs and subcontracted assembly capacity to support Tunisia's €317.7M EU export contracts.\n5. Fleece Sweatshirts & Hoodies (6110.20): Market imports ~$31.2M. Heavyweight combed fleece (280-340 gsm) serving youth retail demand."
    },
    {
      "id": "sec-tn-buyers-partners-database",
      "titleAr": "8. دليل الشركات والمصانع التونسية المعتمدة (APII والشركاء التجاريون)",
      "titleEn": "8. Verified Industrial Partners & Retail Buyers Directory (APII)",
      "contentAr": "استنادًا إلى دليل المؤسسات الصناعية المعتمدة لدى وكالة النهوض بالصناعة والابتكار (APII) وسجلات التجارة التونسية:\n\n1. **المنشآت الصناعية المعتمدة (شركاء صناعيون محتملون - المسار B):**\n- **AAW (طبلبة، المنستير):** تصنيع منسوجات منزلية وملابس عمل مهنية. هاتف: +216 73 496 960 | المصنع: +216 73 479 597 (شراكة تصنيع وتوريد أقمشة).\n- **ABH Textile Service (سوسة):** تصنيع ملابس العمل والزي المهني. هاتف: +216 73 247 122 (تعاقد من الباطن لملابس العمل).\n- **AVERA (بن عروس، تونس):** تصنيع ملابس العمل واليونيفورم. هاتف: +216 71 430 150 | المصنع: +216 71 430 099 (تبادل طاقات إنتاجية).\n- **BETEX (المنستير):** ملابس عمل، ملابس خارجية وداخلية. هاتف: +216 73 473 968 (توريد خطوط تريكو مكملة).\n- **DEMCO KNITWEAR (المكنين، المنستير):** تصنيع الملابس الداخلية والتريكو. هاتف: +216 73 416 100 | المصنع: +216 73 416 200 (تكامل صناعي وتوريد خامات).\n- **DEMCOINTER (المكنين، المنستير):** تصنيع الملابس الخارجية والسترات والدنيم. هاتف: +216 73 416 100 (شراكة تشغيل مشترك).\n- **GARtex Tunisie (الفحص، زغوان):** تصنيع الملابس الجاهزة والملابس الخارجية. هاتف: +216 79 407 019 (عقود تصنيع ببرامج أوفشور).\n- **TEXMED INTERNATIONAL (قصر هلال، المنستير):** ملابس خارجية وداخلية. هاتف: +216 21 280 000 | إضافي: +216 29 524 525 (تصنيع تعاقدي لعلامات متوسطية).\n- **CROWN EAST NORTH AFRICA (قليبية، نابل):** ملابس عمل وزي موحد. هاتف: +216 72 362 282 (عقود توريد وتصنيع سريع).\n- **SOTICO GROUP (سوسة):** ملابس عمل وملابس خارجية وتوابع. هاتف: +216 73 288 533 (توريد أقمشة ومصنرات).\n\n2. **شبكات التجزئة والمستوردون المستهدفون (عملاء شراء الملابس الجاهزة - المسار A):**\n- **مونوبري تونس (Monoprix Tunisie - SNMVT):** أضخم سلسلة تجزئة وسوبرماركت بتونس (>85 متجرًا)، مستهدفة لبرامج العلامات الخاصة (Private Label).\n- **المغازة العامة (Magasin Général - MG):** سلسلة متاجر كبرى في كافة الولايات، مستهدفة لطلبيات التيشيرتات والملابس الداخلية الكمية.\n- **سلسلة محلات زن (ZEN Fashion):** كبرى علامات الفاست فاشن التونسية (>40 فرعًا)، مستهدفة لتوريد مجموعات كاجوال قطنية.\n- **إكزيست للألبسة (EXIST Menswear):** سلسلة تجزئة رجالية وشبابية كبرى، مستهدفة للقمصان والبولو وبناطيل القطن.",
      "contentEn": "Directory of certified Tunisian industrial partners and commercial retail accounts:\n1. Certified Industrial Manufacturers (Track B Industrial Alliances):\n- AAW (Teboulba, Monastir): Home textiles and workwear. Tel: +216 73 496 960 / Factory: +216 73 479 597.\n- ABH Textile Service (Sousse): Professional workwear. Tel: +216 73 247 122.\n- AVERA (Ben Arous, Tunis): Workwear and industrial uniforms. Tel: +216 71 430 150 / Factory: +216 71 430 099.\n- BETEX (Monastir): Workwear, outerwear, underwear. Tel: +216 73 473 968.\n- DEMCO KNITWEAR (Moknine, Monastir): Underwear and knitwear. Tel: +216 73 416 100 / Factory: +216 73 416 200.\n- DEMCOINTER (Moknine, Monastir): Outerwear and denim. Tel: +216 73 416 100.\n- GARtex Tunisie (Zaghouan): Outerwear and garment manufacturing. Tel: +216 79 407 019 / Factory: +216 79 407 001.\n- TEXMED INTERNATIONAL (Ksar Hellal, Monastir): Outerwear & underwear. Tel: +216 21 280 000 / +216 29 524 525.\n- CROWN EAST NORTH AFRICA (Nabeul): Workwear and uniforms. Tel: +216 72 362 282.\n- SOTICO GROUP (Sousse): Workwear and outerwear. Tel: +216 73 288 533.\n2. Prime Commercial Retailers (Track A Finished Apparel Distribution):\n- Monoprix Tunisie (SNMVT): Premier department retail chain (>85 hypermarkets/supermarkets); prime private label target.\n- Magasin Général (MG): Major national retail network; volume buyer of cotton basics and kids' wear.\n- ZEN Fashion: Leading Tunisian fast-fashion chain (>40 stores); buyer of seasonal cotton collections.\n- EXIST Menswear: Prominent young men's casualwear chain."
    },
    {
      "id": "sec-tn-trade-agreements-rules-of-origin",
      "titleAr": "9. الاتفاقيات التجارية وقواعد المنشأ (الاتفاق الثنائي، GAFTA، وأغادير)",
      "titleEn": "9. Trade Agreements & Preferential Rules of Origin (Bilateral, GAFTA & Agadir)",
      "contentAr": "تستند العلاقات التجارية والتفضيلية بين مصر وتونس إلى ثلاث مظلات قانونية رئيسية:\n\n1. **الاتفاق الثنائي لإنشاء منطقة تبادل حر بين مصر وتونس (الموقع بالقاهرة في 05/03/1998):**\n- تنص الاتفاقية الثنائية الرسمية المنشورة لدى الجمارك التونسية على منح إعفاءات جمركية تفضيلية وتفكيك تدريجي للرسوم والضرائب ذات الأثر المماثل.\n- **شروط المنشأ الثنائية:** الحصول الكامل على المنتج في أحد البلدين، أو تحقيق تكاليف تشغيل وتحويل صناعي لا تقل عن **40%** من القيمة الإجمالية عند باب المصنع (Ex-Factory) في البلد المصدر.\n- **شرط النقل المباشر (Transport Direct):** اشتراط شحن البضائع مباشرة من موانئ مصر إلى الموانئ التونسية دون المرور عبر أراضي أو موانئ دول أخرى، إلا لأسباب جغرافية أو لوجستية قاهرة وببوالص شحن موحدة.\n- **قوائم الاستثناءات التاريخية:** توضح الجمارك التونسية أن بعض بنود النسيج كانت تخضع لقوائم تأجيل تفكيك الرسوم لحماية الصناعات المحلية؛ ولذلك يجب فحص كل رمز HS6 بدقة.\n\n2. **اتفاقية منطقة التجارة الحرة العربية الكبرى (GAFTA):**\n- تمنح إعفاءً جمركيًا كاملًا بنسبة **0% (صفر جمارك)** للملابس الجاهزة المصنعة بمصر والمصحوبة بشهادة منشأ عربية معتمدة وقيمة مضافة $ge 40%$.\n- تمثل المظلة الأكثر استقرارًا واعتمادًا لدى كبار المخلصين الجمركيين في ميناء رادس.\n\n3. **اتفاقية أغادير للتجارة الحرة (Euro-Med Agadir Agreement):**\n- تضم مصر وتونس والمغرب والأردن؛ وتعد الركيزة القانونية الكبرى للمسار B.\n- تتيح **التراكم الكامل للمنشأ (Full Cumulation of Origin)** بين الدول الأعضاء، مما يسمح لمصانع سامي بن عضاد بتوريد الأقمشة والغزول القطنية للمصانع التونسية، أو حياكة الملابس في مصر وتجهيزها في تونس، ثم تصدير المنتج النهائي إلى دول الاتحاد الأوروبي بإعفاء جمركي كامل 0% بموجب شهادة المنشأ الأوروبية-المتوسطية (EUR.1 / EUR-MED).",
      "contentEn": "Three complementary legal trade pacts govern trade relations between Egypt and Tunisia:\n1. Egypt-Tunisia Bilateral Free Trade Agreement (Signed in Cairo on 05/03/1998): Governs bilateral customs duty dismantling and preferential tariffs. Mandates a minimum 40% local ex-factory value-addition threshold and strict direct transport compliance. Certain textile items historically maintained sensitive list monitoring.\n2. Greater Arab Free Trade Area (GAFTA): Delivers complete 0% duty-free customs clearance for compliant Egyptian garments carrying an official certified Arab Certificate of Origin.\n3. Agadir Euro-Mediterranean Agreement: The strategic cornerstone of Track B, enabling full regional cumulation of origin between Egypt, Tunisia, Morocco, and Jordan. Egyptian fabrics and greige goods incorporated into Tunisian garment production qualify for 0% duty access into the European Union under EUR-MED certification."
    },
    {
      "id": "sec-tn-customs-tariffs-taxes-fodec",
      "titleAr": "10. التعرفة الجمركية والضرائب ورسم FODEC وضريبة القيمة المضافة",
      "titleEn": "10. Customs Tariffs, FODEC Surcharge, Customs Service Fees & VAT",
      "contentAr": "تحدد السياسة الجمركية والضريبية التونسية تكلفة الإفراج الجمركي وفق القواعد التالية:\n\n1. **التعرفة الجمركية العامة (MFN) والحمائية:**\nتوضح بيانات الدليل التجاري الأمريكي وتقارير منظمة التجارة العالمية (WTO) لعام 2026 أن الرسوم الجمركية على بعض بنود الملابس الجاهزة المستوردة ارتفعت من **30% إلى 50%** ضمن تدابير حماية المنتجات المحلية التي يتوفر لها بديل مصنع محليًا. وتخضع البضائع الصينية والتركية غير المعفاة لهذه الرسوم المرتفعة، بينما تعفى البضائع المصرية بموجب اتفاقيات التجارة التفضيلية (GAFTA / الاتفاق الثنائي).\n\n2. **رسم صندوق تنمية القدرة التنافسية الصناعية (FODEC):**\nتفرض تونس رسمًا بنسبة **1.0%** على المنتجات النسيجية والملابس المستوردة والمباعة محليًا لصالح صندوق تنمية القدرة التنافسية الصناعية (Fonds de Développement de la Compétitivité Industrielle).\n\n3. **رسم الخدمات الجمركية (Redevance des Prestations Douanières - RPD):**\nتفرض الجمارك التونسية رسميًا رسم خدمات جمركية بنسبة **3.0%** محسوبًا على إجمالي مبالغ الرسوم والضرائب الجمركية المحصلة على البيان الجمركي، بحد أدنى قدره **10 دنانير تونسية** لكل تصريح جمركي.\n\n4. **ضريبة القيمة المضافة (TVA):**\nيبلغ المعدل العام لضريبة القيمة المضافة في تونس **19.0%** (مع وجود معدلات مخفضة 13% و 7% لبعض الخدمات والسلع المحددة وفق تقارير PwC Tax Summaries). وتُحصل الضريبة عند المنفذ الجمركي على أساس الوعاء المجمع (القيمة CIF + الرسوم الجمركية + رسم FODEC). ولا تمثل الضريبة عبئًا على المصدر المصري، حيث يسددها المستورد التونسي ويستردها ضريبيًا عند البيع النهائي للمستهلك.",
      "contentEn": "Comprehensive analysis of Tunisian customs taxation and port clearance fees:\n1. Protective MFN Tariffs: Standard MFN customs duties on imported ready-made clothing range between 30% and 50% as domestic protection measures. Compliant Egyptian apparel enters at 0% preferential duty under GAFTA.\n2. FODEC Industrial Competitiveness Surcharge: A mandatory 1.0% levy on imported textiles and apparel directed to the domestic market.\n3. Customs Service Fee (RPD): A flat 3.0% fee calculated on total customs duties and taxes payable, with a statutory minimum of 10 TND per customs entry.\n4. Value Added Tax (TVA): Flat standard rate of 19.0% applied on the compounded base (CIF + duties + FODEC). Payable by the Tunisian importer and reclaimed through local tax offset mechanisms."
    },
    {
      "id": "sec-tn-logistics-supply-chain",
      "titleAr": "11. مسارات الشحن واللوجستيات وسلاسل الإمداد البحرية والجوية",
      "titleEn": "11. Multimodal Logistics, Maritime Corridors & Port Infrastructure",
      "contentAr": "توفر الجغرافيا المتوسطية خيارات شحن منتظمة وسريعة تربط موانئ مصر بالموانئ التونسية:\n\n1. **المسار البحري السريع إلى ميناء رادس (Port of Radès):**\n- **موانئ الشحن المصرية:** الإسكندرية، دمياط، بورسعيد.\n- **ميناء الوصول التونسي:** ميناء رادس (ضواحي تونس العاصمة) — الميناء التجاري الأول في تونس الذي يستقبل أكثر من 70% من إجمالي حركة الحاويات المعبأة بالبلاد.\n- **زمن الإبحار:** يتراوح بين **4 إلى 7 أيام إبحار مباشر أو عبر رحلات فيدر قصيرة** عبر الخطوط الملاحية المنتظمة (CMA CGM, Tarros, MSC, Arkas).\n- **حالة عروض الأسعار:** تخضع تكلفة شحن الحاوية لطلب عروض أسعار مؤكدة ولحظية (**Quotation Required**) لتذبذب أسعار نولون الحاويات وشركات الشحن.\n\n2. **المسار البحري إلى موانئ الساحل التونسي (سوسة وصفاقس):**\n- **موانئ الوصول:** ميناء سوسة التجاري وميناء صفاقس.\n- **الميزة التشغيلية:** ملائمة استثنائية للمسار B؛ حيث يتيح تفريغ الحاويات المحملة بالأقمشة ومستلزمات الإنتاج على مقربة مباشرة من القطب الصناعي النسيجي بالمنستير وقصر هلال وطبلبة، مما يخفض تكاليف النقل البري الداخلي بنسبة تفوق 25%.\n\n3. **الشحن الجوي السريع للعينات والمطابقة (Air Cargo):**\n- **المسار:** من مطار القاهرة الدولي (CAI) إلى مطار تونس قرطاج الدولي (TUN).\n- **زمن الوصول:** من **24 إلى 48 ساعة**.\n- **الاستخدام التشغيلي:** نقل عينات المبيعات والاعتماد (Pre-production Samples) ونماذج ملابس العمل والكبسولات العاجلة جدًا.",
      "contentEn": "Direct multimodal transport corridors linking Egyptian production hubs with Tunisian ports:\n1. Port of Radès Container Corridor: The primary commercial gateway handling >70% of national container volume. Sailing transit: 4 to 7 days from Alexandria, Damietta, and Port Said via major lines (CMA CGM, Tarros, MSC). Ocean freight status: 'Quotation Required' reflecting spot market dynamics.\n2. Sousse & Sfax Feeder Corridors: Serving coastal industrial zones directly, reducing internal drayage trucking costs to Monastir and Ksar Hellal by over 25%.\n3. Air Cargo Services: Daily scheduled flights between Cairo (CAI) and Tunis-Carthage Airport (TUN) providing 24-48 hour delivery for marketing samples, lab approvals, and urgent capsule orders."
    },
    {
      "id": "sec-tn-commercial-models-sba",
      "titleAr": "12. نماذج العمل الخمسة المقترحة لمجموعة سامي بن عضاد في تونس",
      "titleEn": "12. Five Comprehensive Commercial Operating Models for SBA Group",
      "contentAr": "استجابة لخصوصية السوق التونسي، طورت مجموعة سامي بن عضاد خمسة نماذج عمل تنفيذية متكاملة:\n\n1. **النموذج 1 — تصدير الملابس الجاهزة (Finished Apparel Export):**\nبيع تشكيلات الملابس القطنية والبيزكس مباشرة للمستوردين ومجموعات التجزئة التونسية (Monoprix, Magasin Général) بنظام FOB موانئ مصر أو CIF ميناء رادس، مع الاستفادة الكاملة من إعفاء GAFTA (0% رسوم).\n\n2. **النموذج 2 — التصنيع للعلامات الخاصة (Private Label):**\nتصنيع مجموعات ملابس حصرية متطورة تحمل العلامات التجارية لسلاسل الأزياء التونسية (مثل ZEN و EXIST وماركات البوتيك) بمواصفات أوروبية وبأقمشة قطنية مصرية 100%.\n\n3. **النموذج 3 — التصنيع للغير وفق المواصفات (OEM):**\nالتعاقد مع الشركات التونسية الكبرى لتطوير وتصنيع خطوط أزياء محددة تفتقر المصانع التونسية لطاقات إنتاجها، مدعومة بشهادات OEKO-TEX ومعايير الجودة العالمية.\n\n4. **النموذج 4 — التعاقد الصناعي من الباطن (Industrial Subcontracting):**\nالتعاون مع كبرى مصانع ملابس العمل والجينز التونسية التي تصدر للاتحاد الأوروبي (مثل AAW و ABH و AVERA و Demco) لاستيعاب الطلبيات الضخمة التي تفوق طاقات خطوطها، وتوفير خطوط خياطة مكملة بمصانع SBA بمصر لضمان التسليم في المواعيد المحددة.\n\n5. **النموذج 5 — التوريد التكميلي للمنتجات والخامات (Complementary Supply):**\nتزويد المصانع التونسية بأقمشة التريكو المصنرة الدائرية وأقمشة الجبردين والبولي قطن المصرية لتغذية مصانعها، مع توظيف قواعد تراكم المنشأ في اتفاقية أغادير للتصدير الأوروبي المشترك.",
      "contentEn": "Five commercial engagement frameworks structured for the Tunisian market:\n1. Model 1 — Finished Apparel Export: Direct FOB/CIF export of combed cotton basics, polos, and kidswear to major Tunisian retail conglomerates (Monoprix, MG) under GAFTA 0% preferential tariffs.\n2. Model 2 — Private Label Manufacturing: Custom-branded collection assembly for domestic Tunisian fast-fashion brands (ZEN, EXIST).\n3. Model 3 — OEM Specification Contracts: Precision apparel manufacturing adhering to technical buyer specifications and European sustainability benchmarks.\n4. Model 4 — Industrial Subcontracting: Subcontracted assembly support for major Tunisian workwear and denim exporters facing peak European capacity bottlenecks.\n5. Model 5 — Complementary Supply & Input Sourcing: Supplying raw circular knitted fabrics and Egyptian cotton twills to Tunisian apparel mills under Agadir Euro-Med cumulation."
    },
    {
      "id": "sec-tn-sba-capacities-product-fit",
      "titleAr": "13. ملاءمة قدرات مجموعة سامي بن عضاد للأسواق التونسية والأوروبية",
      "titleEn": "13. SBA Group Manufacturing Capacities & European Fit",
      "contentAr": "تستند مجموعة سامي بن عضاد إلى بنية إنتاجية وصناعية متطورة معلنة تضم:\n- أكثر من **15 خط إنتاج متكامل**.\n- أكثر من **250 ماكينة خياطة وتجهيز متخصصة**.\n- طاقة إنتاجية يومية معلنة تتجاوز **5,000 قطعة**.\n- طاقة إنتاجية شهرية معلنة تتجاوز **100,000 قطعة**.\n- مكتبة موديلات تضم أكثر من **20,000 تصميم نسائي** مطور هندسيًا.\n\nوتتطابق هذه القدرات مع متطلبات السوق التونسي وشبكات التصدير الأوروبية عبر:\n- الالتزام التام بمعايير الجودة الأوروبية ونظام التفتيش الصارم AQL 2.5 في كافة مراحل القص والخياطة والكي والتغليف.\n- توفر شهادات السلامة البيئية والمطابقة الكيميائية (OEKO-TEX Standard 100) لخلو الأقمشة من صبغات الآزو والفورمالديهايد والمعادن الثقيلة.\n- المرونة العالية في كميات الإنتاج (MOQs) التي تبدأ من 5,000 قطعة وحتى 100,000 قطعة للعقود السنوية الكبرى.",
      "contentEn": "SBA Group deploys verified industrial manufacturing capabilities (>15 production lines, >250 specialized sewing machines, >5,000 pcs daily capacity, >100,000 pcs monthly output, and >20,000 developed women's designs):\n- Total compliance with European quality benchmarks and stringent AQL 2.5 final inspection protocols.\n- Pre-certified OEKO-TEX Standard 100 eco-safety compliance ensuring zero prohibited chemical residues.\n- Scalable minimum order quantities (MOQs) spanning 5,000 to 100,000 pieces for large annual contracts."
    },
    {
      "id": "sec-tn-interactive-scenario-calculator",
      "titleAr": "14. حاسبة السيناريوهات التفاعلية وهوامش الربح التصديري الواصل (CIF ميناء رادس)",
      "titleEn": "14. Interactive Landed Cost Scenario Calculator & Importer Profitability",
      "contentAr": "تتيح حاسبة التسعير التقديرية لمجموعة سامي بن عضاد دراسة تكاليف الوصول وهوامش الربح للمستورد التونسي (نموذج تيشيرتات قطنية فاخرة 100%):\n\n- **سيناريو 10,000 قطعة (طلبية تجريبية كبسولة):**\n  * سعر FOB موانئ مصر: 3.70$ للقطعة.\n  * الشحن والتأمين البحري المقدر: 0.20$.\n  * سعر الوصول CIF ميناء رادس: 3.90$.\n  * الرسوم الجمركية التفضيلية (GAFTA): 0.00$ (إعفاء كامل 0%).\n  * رسوم FODEC والخدمات الجمركية: 0.08$.\n  * إجمالي التكلفة الواصلة للمستورد التونسي: 4.12$ (نحو 12.8 دينار تونسي).\n  * سعر بيع الجملة المقترح في تونس: 6.20$ (نحو 19.2 دينار تونسي).\n  * هامش ربح المستورد المتوقع: **33.5% (هامش ربحي ممتاز)**.\n\n- **سيناريو 25,000 قطعة (طلبية متوسطة لمجموعات التجزئة):**\n  * سعر FOB مصر: 3.45$ | CIF رادس: 3.59$ | التكلفة الواصلة: 3.78$ | سعر بيع الجملة: 5.75$ | هامش ربح المستورد: **34.3%**.\n\n- **سيناريو 50,000 قطعة (طلبية توزيع كبرى):**\n  * سعر FOB مصر: 3.20$ | CIF رادس: 3.30$ | التكلفة الواصلة: 3.47$ | سعر بيع الجملة: 5.35$ | هامش ربح المستورد: **35.1%**.\n\n- **سيناريو 100,000 قطعة (عقد سنوي استراتيجي):**\n  * سعر FOB مصر: 3.00$ | CIF رادس: 3.08$ | التكلفة الواصلة: 3.23$ | سعر بيع الجملة: 5.00$ | هامش ربح المستورد: **35.4%**.\n\n*ملاحظة إجرائية:* تتيح الحاسبة تعديل البند الجمركي، إدخال أسعار الصرف الحية للدينار التونسي، وتعديل قيم الشحن وفق عروض الأسعار الفعلية.",
      "contentEn": "Interactive landed cost modeling for CIF Port of Radès (100% combed cotton T-shirts):\n- 10,000 pcs: FOB $3.70 | Freight $0.20 | CIF Radès $3.90 | GAFTA Duty $0.00 | Landed Cost $4.12 (~12.8 TND) | Target Wholesale $6.20 (~19.2 TND) | Importer Margin: 33.5%.\n- 25,000 pcs: FOB $3.45 | Freight $0.14 | CIF Radès $3.59 | Landed Cost $3.78 | Target Wholesale $5.75 | Importer Margin: 34.3%.\n- 50,000 pcs: FOB $3.20 | Freight $0.10 | CIF Radès $3.30 | Landed Cost $3.47 | Target Wholesale $5.35 | Importer Margin: 35.1%.\n- 100,000 pcs: FOB $3.00 | Freight $0.08 | CIF Radès $3.08 | Landed Cost $3.23 | Target Wholesale $5.00 | Importer Margin: 35.4%.\nAll parameters accommodate live currency exchange adjustments and variable freight inputs."
    },
    {
      "id": "sec-tn-opportunity-scorecard-two-ratings",
      "titleAr": "15. بطاقة تقييم جاذبية السوق التونسي (تقييمان منفصلان للتوريد والشراكة)",
      "titleEn": "15. Tunisia Opportunity Scorecard (Separate Ratings for Retail & Industry)",
      "contentAr": "استنادًا إلى الأوزان المعيارية الثمانية، تم إجراء تقييمين موضوعيين منفصلين لتفادي خلط مسارات السوق:\n\n1. **التقييم الأول — مسار توريد الملابس الجاهزة للتجزئة (Finished Apparel Supply Score):**\n- الطلب الاستيرادي (15%): 68 / 100 -> 10.20\n- الموقع التنافسي لمصر (10%): 50 / 100 -> 5.00\n- ملاءمة محفظة المنتجات (15%): 82 / 100 -> 12.30\n- إمكانات الشراكة الصناعية (20%): 65 / 100 -> 13.00\n- كثافة المنافسة (10%): 60 / 100 -> 6.00\n- الوصول اللوجستي (10%): 80 / 100 -> 8.00\n- التعقيد التنظيمي والجمارك (10%): 70 / 100 -> 7.00\n- سهولة الوصول للمشترين (10%): 68 / 100 -> 6.80\n- **إجمالي تقييم مسار توريد التجزئة: 68 / 100 (المستوى الثاني – فرصة جيدة مشروطة بالمنافسة الأوروبية والرسوم الحمائية).**\n\n2. **التقييم الثاني — مسار الشراكات الصناعية والتكامل الأورومتوسطي (Industrial Partnership Score):**\n- الطلب الاستيرادي (15%): 78 / 100 -> 11.70\n- الموقع التنافسي لمصر (10%): 75 / 100 -> 7.50\n- ملاءمة محفظة المنتجات (15%): 88 / 100 -> 13.20\n- إمكانات الشراكة الصناعية (20%): 92 / 100 -> 18.40\n- كثافة المنافسة (10%): 72 / 100 -> 7.20\n- الوصول اللوجستي (10%): 85 / 100 -> 8.50\n- التعقيد التنظيمي وتراكم المنشأ (10%): 82 / 100 -> 8.20\n- سهولة الوصول للمصانع والشركاء (10%): 80 / 100 -> 8.00\n- **إجمالي تقييم مسار الشراكات الصناعية: 82 / 100 (المستوى الأول – فرصة استثنائية عالية الجاذبية لتوريد الخامات والإنتاج المشترك).**\n\n**الدرجة الكلية المجمعة للدراسة: 75 / 100**\n**التصنيف المعتمد: المستوى الثاني – فرصة مرتفعة (Tier 2 – High Opportunity)**\n**الترتيب الإقليمي: الترتيب الثالث (#3) في شمال إفريقيا بعد مصر والمغرب.**",
      "contentEn": "Dual objective evaluations segregating retail distribution from industrial manufacturing synergies:\n1. Track A Evaluation — Finished Apparel Retail Supply: Score 68 / 100 (Tier 2/3 - Good conditional opportunity, bounded by European brand loyalty and domestic protective tariffs).\n2. Track B Evaluation — Industrial Co-Production & Agadir Cumulation: Score 82 / 100 (Tier 1 - Premier Strategic Opportunity, driven by Tunisia's €317.7M EU workwear dominance and demand for Egyptian cotton fabrics).\nConsolidated Study Score: 75 / 100 | Tier 2 – High Opportunity | Regional Rank: #3 in North Africa."
    },
    {
      "id": "sec-tn-90-day-commercial-action-plan",
      "titleAr": "16. خطة المبيعات والعمل الميداني خلال 90 يومًا (Action Plan)",
      "titleEn": "16. 90-Day Commercial & Industrial Action Plan",
      "contentAr": "وضعت مجموعة سامي بن عضاد جدولًا زمنيًا تنفيذيًا يمتد عبر أربع مراحل عملية متتابعة:\n\n- **الأيام 1 إلى 15 (التحضير الفني والتحقق الجمركي وقوائم الاتصال):**\n  1. تدقيق أرقام البنود الجمركية HS6 وقوائم الاستثناء المحدثة لدى الجمارك التونسية.\n  2. استخراج شهادات المنشأ المطابقة لمتطلبات اتفاقية GAFTA والاتفاق الثنائي.\n  3. إعداد وتصنيف قاعدة بيانات المصانع المستهدفة للشراكة (AAW, ABH, AVERA, BETEX, Demco, Sotico) ومجموعات التجزئة (Monoprix, MG, ZEN, EXIST).\n  4. تحديد عينات المبيعات ذات الأولوية (تيشيرتات، بولو، ملابس أطفال، أقمشة ملابس عمل).\n\n- **الأيام 16 إلى 30 (التواصل المؤسسي وإرسال الكاتالوجات والعروض):**\n  1. تدشين حملة التواصل المباشر مع مديري المشتريات بمجموعات التجزئة الكبرى بتونس العاصمة.\n  2. فتح قنوات تفاوض مع مديري الإنتاج بالمصانع التونسية لبحث احتياجات التصنيع من الباطن وتوريد الخامات.\n  3. إرسال الكاتالوج الرقمي المتخصص باللغتين الفرنسية والإنجليزية متضمنًا قدرات SBA الصناعية.\n\n- **الأيام 31 إلى 60 (العينات الفيزيائية والاتفاقيات وعروض الأسعار FOB):**\n  1. إرسال حقائب العينات المعتمدة عبر الشحن الجوي السريع إلى تونس وسوسة والمنستير.\n  2. تقديم عروض أسعار تفصيلية FOB موانئ مصر و CIF ميناء رادس متدرجة حسب الكميات.\n  3. صياغة اتفاقيات سرية وتفاهمات أولية للتصنيع التعاقدي المشترك وتحديد معايير الجودة AQL 2.5.\n  4. استدراج عروض أسعار شحن بحري مؤكدة ومحدثة من الخطوط الملاحية المنتظمة.\n\n- **الأيام 61 إلى 90 (التعاقد وأوامر الشحن التجريبية والتوسع):**\n  1. توقيع عقود توريد تجريبية أولى مع مجموعتي تجزئة على الأقل، وإبرام شراكة إنتاج تعاقدي واحدة.\n  2. استلام الدفعات المقدمة النقدية المعتمدة (30%-50%) وفتح خطوط الإنتاج السريعة.\n  3. شحن الحاوية التجريبية الأولى بحرًا إلى ميناء رادس ومتابعة التخليص الجمركي بنسبة 0% رسوم.\n  4. قياس سرعة البيع ومعدلات دوران المخزون، ووضع خطة التوريد الدوري السنوي.",
      "contentEn": "Structured 90-day execution framework designed to penetrate retail and industrial sectors:\n- Days 1-15: Customs classification audits, GAFTA/Agadir documentation prep, target account categorization (retail vs industrial), and sample line selection.\n- Days 16-30: Direct outreach to Monoprix, MG, and ZEN retail directors; engagement with APII-certified export mills; distribution of bilingual French/English capability catalogs.\n- Days 31-60: Air express delivery of physical sales samples to Tunis, Sousse, and Monastir; presentation of tiered FOB/CIF pricing schedules; drafting NDA and subcontracting agreements.\n- Days 61-90: Execution of initial pilot supply contracts, receipt of 30%-50% cash deposits, ocean shipment of pilot container to Port of Radès, duty-free clearance verification, and seasonal re-order scheduling."
    },
    {
      "id": "sec-tn-risk-assessment-mitigation",
      "titleAr": "17. تقييم المخاطر الاستراتيجية وسبل التحوط والوقاية",
      "titleEn": "17. Strategic Risk Assessment & Defensive Mitigation Playbook",
      "contentAr": "يحدد التحليل المخاطر الرئيسية التي تواجه العمليات التصديرية والصناعية في تونس:\n\n1. **المنافسة الصناعية المحلية القوية:**\n- طبيعة الخطر: امتلاك تونس لأكثر من 1,300 منشأة نسيجية متقدمة.\n- خطة التحوط: التركيز على مسار الشراكة والتكامل (المسار B) وتوريد الخامات والبيزكس بدلًا من الصدام في منتجات الدنيم وملابس العمل الفاخرة.\n\n2. **المنافسة الأوروبية العريقة (فرنسا وإيطاليا):**\n- طبيعة الخطر: هيمنة الشركات الفرنسية والإيطالية على سلاسل التوريد والتوكيلات.\n- خطة التحوط: التميز بفارق السعر (30%-40% أقل) وتوفير منتجات قطن مصري 100% لا تستطيع أوروبا منافستها سعريًا.\n\n3. **الرسوم الجمركية الحمائية التونسية (30%-50%):**\n- طبيعة الخطر: فرض رسوم باهظة في حال عدم إثبات المنشأ العربي.\n- خطة التحوط: الصرامة المستندية المطلقة في إصدار شهادات المنشأ GAFTA والاتفاق الثنائي المحققة لنسبة قيمة مضافة $ge 40%$ لتأكيد الإعفاء الكامل 0%.\n\n4. **تقلبات سعر صرف الدينار التونسي (TND):**\n- طبيعة الخطر: انخفاض القوة الشرائية للعملة المحلية.\n- خطة التحوط: حصر كافة العقود والفواتير حصرًا بالدولار الأمريكي (USD) أو اليورو (EUR).\n\n5. **مخاطر الائتمان التجاري والتحصيل:**\n- طبيعة الخطر: تأخر السداد أو نقص السيولة المحلية.\n- خطة التحوط: حظر الائتمان المفتوح (Zero Open Credit)، واشتراط دفعة مقدمة (30%-50%)، وسداد الرصيد نقدًا قبل تسليم بوالص الشحن الأصلية أو عبر اعتمادات مستندية معززة (Confirmed LC).",
      "contentEn": "Comprehensive risk matrix and mitigation protocols for Tunisian commercial operations:\n1. Domestic Industrial Competition: Mitigated by focusing on industrial subcontracting (Track B) and raw fabric supply rather than competing directly against established local denim and outerwear mills.\n2. French and Italian Entrenchment: Countered by substantial cost advantages (30%-40% discount) on 100% Egyptian cotton basics where Europe cannot match FOB economics.\n3. Domestic Protective Tariffs (30%-50%): Neutralized through rigorous GAFTA origin certification satisfying >=40% value addition to secure duty-free entry.\n4. Currency Volatility: Insulated by strictly transacting in USD or EUR.\n5. Commercial Credit Default: Managed through mandatory 30%-50% advance cash deposits and Confirmed Irrevocable Letters of Credit."
    },
    {
      "id": "sec-tn-sources-methodology",
      "titleAr": "18. المصادر والمراجع المعتمدة وإخلاء المسؤولية المنهجي والقانوني",
      "titleEn": "18. Official Sources, References & Methodological Disclaimers",
      "contentAr": "**المصادر الإحصائية والمراجع الرسمية المعتمدة:**\n1. قاعدة بيانات البنك الدولي للحلول المتكاملة للتجارة (World Bank WITS) — تقارير تجارة تونس الرسمية (HS61 و HS62 و HS50–63) لعام 2023.\n2. شعبة الإحصاءات التجارية بالأمم المتحدة (UN Comtrade Database) — بيانات الواردات والصادرات المعلنة لتونس.\n3. المعهد الوطني للإحصاء التونسي (INS) — السلسلة الإحصائية السنوية لصادرات صناعة الملابس (2017–2025).\n4. البنك المركزي التونسي (BCT) — التقرير السنوي لصادرات قطاع النسيج والملابس والجلود (2023–2025).\n5. وكالة النهوض بالصناعة والابتكار التونسية (APII) — دليل المؤسسات الصناعية وسجلات المنشآت النسيجية المصدرة كليًا لعام 2024.\n6. المركز الفني للنسيج التونسي (CETTEX) ووكالة النهوض بالاستثمار الخارجي (FIPA Tunisia) — تقارير أداء قطاع النسيج والريادة الأوروبية في ملابس العمل (مارس 2025).\n7. الإدارة العامة للجمارك التونسية — بوابة التعرفة الجمركية التفاعلية (Tarifweb 2026) والاتفاقيات الثنائية المنشورة.\n8. إدارة التجارة الدولية بالحكومة الأمريكية (U.S. Trade Administration) — دليل التعرفة الجمركية التونسية وتدابير الحماية 2026.\n9. منظمة التجارة العالمية (WTO) — مراجعة السياسات التجارية للجمهورية التونسية (Trade Policy Review).\n10. شبكة برايس ووترهاوس كوبرز (PwC Tax Summaries) — الدليل الضريبي للشركات وضريبة القيمة المضافة بتونس.\n11. الهيئة العامة للتنمية الصناعية المصرية (IDA) والهيئة العامة للرقابة على الصادرات والواردات (GOEIC) — اتفاقيتي GAFTA وأغادير.\n\n**إخلاء المسؤولية المنهجي والقانوني الصارم:**\nأُعدت هذه الدراسة الاستراتيجية بواسطة قطاع بحوث الأسواق الدولية بمجموعة سامي بن عضاد لأغراض التخطيط التجاري وتوجيه الاستثمارات التصديرية والصناعية للمجموعة وشركائها. وعلى الرغم من بذل أقصى درجات التدقيق والتحقق المتقاطع لضمان صحة البيانات الإحصائية وقت النشر، فإن الأوضاع الجمركية والتشريعية والضريبية وسلاسل الملاحة تخضع للتحديث المستمر؛ وعليه، فإن أي تعاقدات تصديرية أو صناعية فعلية يجب أن تخضع للتحقق المسبق من البند الجمركي التفصيلي، وسداد الدفعة النقدية المقدمة الإلزامية لمجموعة سامي بن عضاد.",
      "contentEn": "Official Sources & Verified References:\n1. World Bank WITS - Tunisia Customs Apparel Import Baseline (HS61, HS62 & HS50-63), 2023.\n2. United Nations UN Comtrade Database - Importer Reported Trade Statistics for Tunisia.\n3. Tunisia National Institute of Statistics (INS) - Annual Apparel Industry Export Series (2017-2025).\n4. Central Bank of Tunisia (BCT) - Total Textile, Clothing & Leather Sector Export Reports (2023-2025).\n5. Agency for Promotion of Industry and Innovation (APII) - National Industrial Establishments Directory 2024.\n6. CETTEX & FIPA Tunisia - Strategic Reports on EU Professional Workwear & Denim Leadership (March 2025).\n7. Tunisian Customs Administration - Interactive Tariff Schedules (Tarifweb 2026) & Bilateral Conventions.\n8. U.S. International Trade Administration - Tunisia Country Commercial Guide (Import Tariffs & Safeguards 2026).\n9. World Trade Organization (WTO) - Tunisia Trade Policy Review.\n10. PwC Tax Summaries - Tunisia Corporate Taxation, FODEC & VAT Regimes.\n11. Egypt IDA & GOEIC - GAFTA & Agadir Free Trade Frameworks.\n\nMethodological & Legal Disclaimer:\nThis study was prepared by the International Market Research Division of Sami Bin Ayyad Group for internal commercial and manufacturing planning. While extensive diligence was exercised, tariff classifications, currency parities, and shipping quotes remain subject to dynamic revision. Commercial execution requires real-time validation of HS-6 codes, direct shipping manifests, and mandatory advance funding protocols."
    }
  ],
  "comparisonMetrics": [
    {
      "metricId": "metric-apparel-imports",
      "labelAr": "إجمالي واردات الملابس الجاهزة (HS61+HS62)",
      "labelEn": "Verified Apparel Imports (HS61+HS62)",
      "valueDisplay": "418.4M USD",
      "comparisonValue": 418.4,
      "benchmarkAr": "الأردن: 772M$ · لبنان: 327.8M$ · المغرب: 1.1B$",
      "benchmarkEn": "Jordan: $772M · Lebanon: $327.8M · Morocco: $1.1B"
    },
    {
      "metricId": "metric-egypt-share",
      "labelAr": "حصة صادرات مصر من واردات تونس",
      "labelEn": "Current Egyptian Market Share",
      "valueDisplay": "0.31% (1.29M USD)",
      "comparisonValue": 0.31,
      "benchmarkAr": "الأردن: 1.15% · لبنان: 0.83% · ليبيا: 3.40%",
      "benchmarkEn": "Jordan: 1.15% · Lebanon: 0.83% · Libya: 3.40%"
    },
    {
      "metricId": "metric-exporting-mills",
      "labelAr": "عدد المصانع المصدرة كليًا (Régime TE)",
      "labelEn": "Totally Exporting Enterprises Count",
      "valueDisplay": "1,075 مصنعًا (81.3%)",
      "comparisonValue": 1075,
      "benchmarkAr": "قاعدة شراكات تصنيع كبرى وتكامل صناعي بموجب اتفاقية أغادير",
      "benchmarkEn": "Massive subcontracting base under Agadir Euro-Med cumulation"
    },
    {
      "metricId": "metric-eu-workwear-lead",
      "labelAr": "حصة تونس من ملابس العمل بالاتحاد الأوروبي",
      "labelEn": "Tunisia EU Professional Workwear Share",
      "valueDisplay": "17.44% (المرتبة الأولى)",
      "comparisonValue": 17.44,
      "benchmarkAr": "317.7 مليون يورو (~9.7 مليون قطعة بمتوسط 32.66€ للقطعة)",
      "benchmarkEn": "€317.7M EUR (~9.7M pcs at €32.66 average unit price)"
    },
    {
      "metricId": "metric-market-score",
      "labelAr": "درجة جاذبية السوق (SBA Combined Score)",
      "labelEn": "Combined Opportunity Score",
      "valueDisplay": "75 / 100",
      "comparisonValue": 75,
      "benchmarkAr": "الأردن: 79 · لبنان: 76 · سوريا: 61 · البحرين: 78",
      "benchmarkEn": "Jordan: 79 · Lebanon: 76 · Syria: 61 · Bahrain: 78"
    }
  ],
  "sources": [
    {
      "id": "src-wits-tunisia-2023",
      "titleAr": "قاعدة بيانات البنك الدولي للحلول المتكاملة للتجارة (World Bank WITS) لعام 2023",
      "titleEn": "World Bank WITS Customs Trade Database (Tunisia 2023)",
      "url": "https://wits.worldbank.org/trade/comtrade/en/country/TUN/year/2023/tradeflow/Imports/partner/ALL/product/61",
      "organizationAr": "البنك الدولي وشعبة الإحصاء بالأمم المتحدة",
      "organizationEn": "World Bank & United Nations Statistics Division",
      "publicationYear": "2023"
    },
    {
      "id": "src-ins-tunisia-2024",
      "titleAr": "المعهد الوطني للإحصاء التونسي (INS) — سلسلة صادرات صناعة الملابس (2017–2025)",
      "titleEn": "Tunisia National Institute of Statistics (INS) - Apparel Exports",
      "url": "https://ins.tn/en/statistiques/55",
      "organizationAr": "المعهد الوطني للإحصاء التونسي",
      "organizationEn": "National Institute of Statistics Tunisia",
      "publicationYear": "2024"
    },
    {
      "id": "src-bct-tunisia-2024",
      "titleAr": "البنك المركزي التونسي (BCT) — التقرير السنوي لصادرات قطاع النسيج والملابس والجلود",
      "titleEn": "Central Bank of Tunisia (BCT) - Annual Sectoral Trade Report",
      "url": "https://www.bct.gov.tn/",
      "organizationAr": "البنك المركزي التونسي",
      "organizationEn": "Central Bank of Tunisia",
      "publicationYear": "2024/2025"
    },
    {
      "id": "src-apii-tunisia-2024",
      "titleAr": "وكالة النهوض بالصناعة والابتكار (APII) — دليل المؤسسات الصناعية النسيجية 2024",
      "titleEn": "Agency for the Promotion of Industry & Innovation (APII)",
      "url": "https://www.tunisieindustrie.nat.tn/en/tissu.asp",
      "organizationAr": "وزارة الصناعة والمناجم والطاقة التونسية",
      "organizationEn": "Tunisian Ministry of Industry",
      "publicationYear": "2024"
    },
    {
      "id": "src-cettex-fipa-2025",
      "titleAr": "المركز الفني للنسيج (CETTEX) ووكالة الاستثمار الخارجي (FIPA) — تقرير الريادة الأوروبية في ملابس العمل",
      "titleEn": "CETTEX & FIPA Tunisia - EU Workwear Leadership Report (March 2025)",
      "url": "https://investintunisia.tn/",
      "organizationAr": "المركز الفني للنسيج ووكالة النهوض بالاستثمار الخارجي",
      "organizationEn": "CETTEX & FIPA Tunisia",
      "publicationYear": "2025"
    },
    {
      "id": "src-douane-tunisie-2026",
      "titleAr": "الجمارك التونسية — بوابة التعرفة الجمركية التفاعلية (Tarifweb 2026) والاتفاقيات الثنائية",
      "titleEn": "Tunisian Customs Administration - Interactive Tariff & Bilateral Pacts",
      "url": "https://www.douane.gov.tn/tarifweb2026/",
      "organizationAr": "الإدارة العامة للجمارك — وزارة المالية التونسية",
      "organizationEn": "General Directorate of Customs - Tunisian Ministry of Finance",
      "publicationYear": "2026"
    }
  ],
  "groupOpportunities": [
    {
      "id": "opp-tn-retail-supply",
      "capabilityAr": "تصدير الملابس الجاهزة والبيزكس لشبكات التجزئة والمغازات الكبرى بتونس (المسار A)",
      "capabilityEn": "Finished Apparel & Cotton Basics Supply to Major Tunisian Retail Chains (Track A)",
      "descriptionAr": "توريد التيشيرتات والبولو والملابس الداخلية وملابس الأطفال القطنية 100% لسلاسل التجزئة التونسية (Monoprix, Magasin Général, ZEN) بإعفاء جمركي 0% عبر اتفاقية GAFTA.",
      "descriptionEn": "Direct volume supply of 100% combed Egyptian cotton tees, polos, loungewear, and infant apparel to prime Tunisian retail groups under 0% GAFTA preferential duty.",
      "evidenceStatus": "confirmed",
      "evidenceReferenceAr": "واردات تونس للملابس الجاهزة تبلغ 418.4M$ وتفرض رسومًا حمائية 30%-50% على البضائع غير المعفاة",
      "evidenceReferenceEn": "Tunisian apparel imports reach $418.4M with 30%-50% protective duties shielding Egyptian zero-tariff goods",
      "sectorPageUrl": "/sectors/garment?tab=products"
    },
    {
      "id": "opp-tn-industrial-subcontracting",
      "capabilityAr": "الشراكة الصناعية والتعاقد من الباطن مع مصانع ملابس العمل والجينز التونسية (المسار B)",
      "capabilityEn": "Industrial Subcontracting Alliances with Leading Tunisian Workwear Mills (Track B)",
      "descriptionAr": "التعاقد مع كبرى المصانع التونسية المصدرة لأوروبا (مثل AAW, ABH, AVERA, Demco) لتوفير طاقات حياكة مكملة وتوريد أقمشة الجبردين والبولي قطن المصرية لتلبية طلبيات الاتحاد الأوروبي.",
      "descriptionEn": "Strategic subcontracting agreements with premier Tunisian workwear and denim exporters, supplying complementary manufacturing capacity and Egyptian cotton fabrics.",
      "evidenceStatus": "confirmed",
      "evidenceReferenceAr": "تونس المورد الأول لملابس العمل للاتحاد الأوروبي (حصة 17.44% بقيمة 317.7M يورو) وتضم 1,075 مصنعًا مصدرًا كليًا",
      "evidenceReferenceEn": "Tunisia leads EU workwear imports with a 17.44% share (€317.7M) and houses 1,075 totally exporting plants",
      "sectorPageUrl": "/sectors/garment?tab=services"
    },
    {
      "id": "opp-tn-agadir-cumulation",
      "capabilityAr": "التكامل الصناعي الأورومتوسطي وتراكم المنشأ بموجب اتفاقية أغادير (المسار B)",
      "capabilityEn": "Euro-Med Industrial Cumulation under Agadir Agreement for EU Market Access",
      "descriptionAr": "دمج الغزول والأقمشة المصرية مع عمليات التشطيب والخياطة التونسية لتصدير المنتج النهائي للاتحاد الأوروبي بإعفاء جمركي كامل بموجب شهادة المنشأ التراكمية EUR-MED.",
      "descriptionEn": "Regional cumulation of Egyptian yarns and fabrics with Tunisian finishing to achieve 0% duty entry into the European Union under Agadir EUR-MED rules.",
      "evidenceStatus": "confirmed",
      "evidenceReferenceAr": "صادرات قطاع النسيج والملابس التونسي تتجاوز 11.3 مليار دينار تونسي ومعظمها موجه للاتحاد الأوروبي",
      "evidenceReferenceEn": "Tunisian textile and apparel exports exceed 11.3 billion TND directed predominantly to the EU",
      "sectorPageUrl": "/sectors/garment?tab=services"
    }
  ]
};
