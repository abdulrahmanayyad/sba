// SBA-GM-APP-LBN-001 | Lebanon Apparel & Textiles Master Market Study
// SAMI BIN AYYAD GROUP | Version 2.0 (2024/2025)
// Verified Customs Trade Baseline (WITS / UN Comtrade) + Broader Market Series (U.S. Commercial Guide)

import type { GlobalMarketStudy } from "./types";

export const STUDY_LBN_APPAREL_001: GlobalMarketStudy = {
  "id": "SBA-GM-APP-LB-001",
  "slug": "lebanon-apparel-textiles",
  "sector": "garment",
  "scope": "global",
  "region": "arab_world",
  "apparelSubRegion": "other_arab",
  "opportunityScore": 76,
  "opportunityTier": "Tier 2 – High Opportunity",
  "opportunityTierAr": "المستوى الثاني – فرصة مرتفعة",
  "regionalRank": 2,
  "totalInRegion": 5,
  "opportunityRationaleAr": "سوق أزياء متوسط الحجم بطلب استيرادي يتجاوز 327 مليون دولار سنويًا للملابس الجاهزة (HS61+HS62)، ويمتاز بقرب لوجستي بحري استثنائي من الموانئ المصرية (2-4 أيام)، مع اعتماد تجزئة شبه كامل على الدولرة النقدية (Fresh USD) والتوريد الخارجي لتغطية 90% من استهلاك السوق المحلي.",
  "opportunityRationaleEn": "A strategic fashion-forward Levant market with over $327M in annual apparel imports (HS61+HS62), exceptional maritime proximity to Egypt (2-4 days transit), extensive retail dollarization (Fresh USD), and 90% reliance on imported garments.",
  "downloadDocxUrl": "/studies/apparel/SBA_Lebanon_Apparel_Market_Study.docx",
  "downloadXlsxUrl": "/studies/apparel/SBA_Lebanon_Apparel_Trade_Buyers_Compliance.xlsx",
  "downloadZipUrl": "/studies/apparel/SBA_Lebanon_Apparel_Study_Package.zip",
  "priorityGrade": "A-",
  "marketRole": "consumer_market",
  "dataBasis": "hs61_hs62_customs",
  "tradeIndicatorNumericUsdB": 0.328,
  "tradeIndicatorDisplay": "327.8M USD",
  "tradeIndicatorYear": "2023",
  "tradeIndicatorScopeAr": "واردات الملابس الجاهزة HS61+HS62 الموثقة جمركيًا لعام 2023 (WITS / UN Comtrade)",
  "tradeIndicatorScopeEn": "Verified HS61+HS62 customs apparel imports for 2023 (WITS / UN Comtrade)",
  "dataCompletenessAr": "مكتملة دراسيًا مع فصل إحصائي معتمد بين بيانات الجمارك (327.8M$) وتقديرات السوق الكلية (634M$)",
  "dataCompletenessEn": "Study complete with rigorous statistical separation between customs baseline ($327.8M) and broader market series ($634M)",
  "waveBadge": "Wave 2 (Growth)",
  "enableScenarioCalculator": true,
  "countryCode": "LB",
  "countryNameAr": "الجمهورية اللبنانية",
  "countryNameEn": "Lebanese Republic",
  "subRegionOrProjectAr": "الترتيب #2 بأسواق بلاد الشام · نقطة التقييم: 76/100",
  "subRegionOrProjectEn": "Rank #2 in Levant Markets · Opportunity Score: 76/100",
  "lastUpdatedYear": "2024/2025",
  "studyReferenceCode": "SBA-GM-APP-LBN-001",
  "version": "2.0",
  "kpis": [
    {
      "id": "kpi-lb-total-apparel",
      "labelAr": "إجمالي واردات الملابس (HS61+HS62)",
      "labelEn": "Total Apparel Imports (HS61+HS62)",
      "valueDisplay": "327.82M",
      "valueUnitAr": "مليون دولار",
      "valueUnitEn": "USD Million",
      "trendIndicator": "stable",
      "changeTextAr": "بيانات جمركية رسمية WITS لعام 2023",
      "changeTextEn": "Official WITS customs baseline for 2023",
      "sourceCitationAr": "World Bank WITS / UN Comtrade 2023",
      "sourceCitationEn": "World Bank WITS / UN Comtrade 2023"
    },
    {
      "id": "kpi-lb-hs61",
      "labelAr": "واردات مصنرات وتريكو (HS61)",
      "labelEn": "Knitted Apparel Imports (HS61)",
      "valueDisplay": "170.02M",
      "valueUnitAr": "مليون دولار (51.9%)",
      "valueUnitEn": "USD Million (51.9%)",
      "trendIndicator": "positive",
      "changeTextAr": "تركيا تتصدر بحصة 46.3% والصين ثانية 19.8%",
      "changeTextEn": "Turkey leads at 46.3%, China 2nd at 19.8%",
      "sourceCitationAr": "قاعدة بيانات WITS جمارك لبنان 2023",
      "sourceCitationEn": "WITS Customs Database Lebanon 2023"
    },
    {
      "id": "kpi-lb-hs62",
      "labelAr": "واردات منسوجات وأقمشة (HS62)",
      "labelEn": "Woven Apparel Imports (HS62)",
      "valueDisplay": "157.80M",
      "valueUnitAr": "مليون دولار (48.1%)",
      "valueUnitEn": "USD Million (48.1%)",
      "trendIndicator": "positive",
      "changeTextAr": "الصين تتصدر بحصة 27.6% وتركيا 16.7%",
      "changeTextEn": "China leads at 27.6%, Turkey 16.7%",
      "sourceCitationAr": "قاعدة بيانات WITS جمارك لبنان 2023",
      "sourceCitationEn": "WITS Customs Database Lebanon 2023"
    },
    {
      "id": "kpi-lb-egypt-share",
      "labelAr": "صادرات مصر من الملابس إلى لبنان",
      "labelEn": "Egyptian Apparel Exports to Lebanon",
      "valueDisplay": "2.72M",
      "valueUnitAr": "مليون دولار (0.83%)",
      "valueUnitEn": "USD Million (0.83%)",
      "trendIndicator": "positive",
      "changeTextAr": "1.33M$ مصنرات + 1.39M$ منسوجات (فرصة مضاعفة)",
      "changeTextEn": "$1.33M HS61 + $1.39M HS62 (High growth headroom)",
      "sourceCitationAr": "WITS Comtrade 2023 - Imports from Egypt",
      "sourceCitationEn": "WITS Comtrade 2023 - Imports from Egypt"
    },
    {
      "id": "kpi-lb-market-size-us",
      "labelAr": "تقديرات السوق الكلية (US Guide)",
      "labelEn": "Total Market Size Estimate (US Guide)",
      "valueDisplay": "531.0M",
      "valueUnitAr": "مليون دولار",
      "valueUnitEn": "USD Million",
      "trendIndicator": "stable",
      "changeTextAr": "واردات كلية 634M$ وإنتاج محلي 51M$ (10% فقط)",
      "changeTextEn": "Total imports $634M, domestic mfg $51M (~10%)",
      "sourceCitationAr": "U.S. Commercial Guide 2023-2024",
      "sourceCitationEn": "U.S. Commercial Guide 2023-2024"
    },
    {
      "id": "kpi-lb-vat-duty",
      "labelAr": "الرسوم الجمركية وضريبة القيمة المضافة",
      "labelEn": "Customs Duty & VAT Framework",
      "valueDisplay": "0% / 11%",
      "valueUnitAr": "إعفاء تيسير عربي / ضريبة 11%",
      "valueUnitEn": "GAFTA 0% / 11% VAT",
      "trendIndicator": "positive",
      "changeTextAr": "إعفاء جمركي عبر اتفاقية التيسير العربية GAFTA",
      "changeTextEn": "Preferential 0% duty under GAFTA origin rules",
      "sourceCitationAr": "الجمارك اللبنانية ووزارة المالية",
      "sourceCitationEn": "Lebanese Customs & Ministry of Finance"
    },
    {
      "id": "kpi-lb-transit",
      "labelAr": "زمن الشحن البحري من مصر",
      "labelEn": "Maritime Transit Time from Egypt",
      "valueDisplay": "2 - 4",
      "valueUnitAr": "أيام إبحار",
      "valueUnitEn": "Days Port-to-Port",
      "trendIndicator": "positive",
      "changeTextAr": "موانئ الإسكندرية ودمياط وبورسعيد إلى مرفأ بيروت",
      "changeTextEn": "Alexandria/Damietta/Port Said to Port of Beirut",
      "sourceCitationAr": "الخطوط الملاحية لشرق المتوسط",
      "sourceCitationEn": "Eastern Mediterranean Shipping Lines"
    },
    {
      "id": "kpi-lb-opp-score",
      "labelAr": "مؤشر جاذبية السوق (SBA Score)",
      "labelEn": "Market Attractiveness Score",
      "valueDisplay": "76 / 100",
      "valueUnitAr": "المستوى الثاني – فرصة مرتفعة",
      "valueUnitEn": "Tier 2 – High Opportunity",
      "trendIndicator": "positive",
      "changeTextAr": "الترتيب الثاني في بلاد الشام بعد الأردن",
      "changeTextEn": "Rank #2 in Levant Markets after Jordan",
      "sourceCitationAr": "نموذج تقييم الفرص التصديرية SBA",
      "sourceCitationEn": "SBA Export Opportunity Model"
    }
  ],
  "charts": [
    {
      "id": "chart-lb-import-mix",
      "titleAr": "هيكل واردات الملابس الجاهزة في لبنان 2023 (مليون دولار)",
      "titleEn": "Lebanon Apparel Import Structure 2023 (USD Million)",
      "chartType": "pie",
      "dataSource": "World Bank WITS / UN Comtrade 2023",
      "labels": [
        "الملابس المصنرة والتريكو (HS61)",
        "الملابس المنسوجة وغير المصنرة (HS62)"
      ],
      "datasets": [
        {
          "label": "القيمة (مليون دولار)",
          "data": [
            170.02,
            157.8
          ],
          "backgroundColor": [
            "#1e3a8a",
            "#0284c7"
          ]
        }
      ]
    },
    {
      "id": "chart-lb-hs61-suppliers",
      "titleAr": "كبار موردي الملابس المصنرة (HS61) إلى لبنان 2023 (مليون دولار)",
      "titleEn": "Top HS61 Knitted Apparel Suppliers to Lebanon 2023 (USD Million)",
      "chartType": "bar",
      "dataSource": "UN Comtrade / Lebanese Customs 2023",
      "labels": [
        "تركيا",
        "الصين",
        "بنغلاديش",
        "سوريا",
        "إيطاليا",
        "الهند",
        "المغرب",
        "البرتغال",
        "كمبوديا",
        "مصر"
      ],
      "datasets": [
        {
          "label": "قيمة الواردات (مليون دولار)",
          "data": [
            78.78,
            33.73,
            13.65,
            7.88,
            4.73,
            3.58,
            3.09,
            2.92,
            2.79,
            1.33
          ],
          "backgroundColor": "#3b82f6"
        }
      ]
    },
    {
      "id": "chart-lb-hs62-suppliers",
      "titleAr": "كبار موردي الملابس المنسوجة (HS62) إلى لبنان 2023 (مليون دولار)",
      "titleEn": "Top HS62 Woven Apparel Suppliers to Lebanon 2023 (USD Million)",
      "chartType": "bar",
      "dataSource": "UN Comtrade / Lebanese Customs 2023",
      "labels": [
        "الصين",
        "تركيا",
        "بنغلاديش",
        "إيطاليا",
        "المغرب",
        "الهند",
        "كمبوديا",
        "فيتنام",
        "باكستان",
        "مصر"
      ],
      "datasets": [
        {
          "label": "قيمة الواردات (مليون دولار)",
          "data": [
            43.57,
            26.41,
            15.6,
            13.85,
            9.47,
            6.31,
            5.97,
            4.35,
            3.94,
            1.39
          ],
          "backgroundColor": "#0d9488"
        }
      ]
    },
    {
      "id": "chart-lb-us-guide-series",
      "titleAr": "تقديرات مؤشرات سوق الملابس الكلية حسب U.S. Commercial Guide (2022-2025)",
      "titleEn": "Broader Apparel Market Series - U.S. Commercial Guide (2022-2025)",
      "chartType": "line",
      "dataSource": "U.S. Commercial Guide 2023-2024 (USD Million)",
      "labels": [
        "2022",
        "2023",
        "2024 (تقديري)",
        "2025 (توقعات)"
      ],
      "datasets": [
        {
          "label": "الواردات الإجمالية الكلية (مليون $)",
          "data": [
            579,
            666,
            634,
            634
          ],
          "borderColor": "#2563eb",
          "fill": false
        },
        {
          "label": "حجم السوق التقديري (مليون $)",
          "data": [
            581,
            531,
            531,
            531
          ],
          "borderColor": "#059669",
          "fill": false
        },
        {
          "label": "الإنتاج المحلي (مليون $)",
          "data": [
            57,
            51,
            51,
            51
          ],
          "borderColor": "#d97706",
          "fill": false
        }
      ]
    },
    {
      "id": "chart-lb-scorecard-radar",
      "titleAr": "محددات مؤشر جاذبية السوق اللبناني (SBA Scorecard 76/100)",
      "titleEn": "Lebanon Market Attractiveness Dimensions (76/100)",
      "chartType": "radar",
      "dataSource": "Sami Bin Ayyad Market Intelligence Matrix",
      "labels": [
        "الطلب الاستيرادي (20%)",
        "الموقع التنافسي لمصر (15%)",
        "ملاءمة المحفظة الإنتاجية (20%)",
        "كثافة المنافسة السعرية (15%)",
        "الوصول واللوجستيات (10%)",
        "التعقيد التنظيمي والجمارك (10%)",
        "سهولة الوصول للمشترين (10%)"
      ],
      "datasets": [
        {
          "label": "الدرجة المحققة (من 100)",
          "data": [
            74,
            68,
            88,
            65,
            88,
            72,
            75
          ],
          "backgroundColor": "rgba(59, 130, 246, 0.2)",
          "borderColor": "#2563eb"
        }
      ]
    }
  ],
  "tables": [
    {
      "id": "table-lb-baseline-summary",
      "titleAr": "جدول الأساس الإحصائي لواردات الملابس الجاهزة في لبنان 2023 (WITS / UN Comtrade)",
      "titleEn": "Lebanon Apparel Customs Baseline Summary 2023",
      "columns": [
        {
          "headerAr": "بند النظام المنسق (HS)",
          "headerEn": "HS Code",
          "accessor": "hs"
        },
        {
          "headerAr": "وصف الفئة السلعية",
          "headerEn": "Product Category",
          "accessor": "desc"
        },
        {
          "headerAr": "الواردات الكلية (مليون $)",
          "headerEn": "Total Imports ($M)",
          "accessor": "total"
        },
        {
          "headerAr": "الحصة من الإجمالي",
          "headerEn": "Share (%)",
          "accessor": "share"
        },
        {
          "headerAr": "الواردات من مصر (مليون $)",
          "headerEn": "Imports from Egypt ($M)",
          "accessor": "egypt"
        },
        {
          "headerAr": "حصة مصر السوقية",
          "headerEn": "Egypt Share (%)",
          "accessor": "egyptShare"
        },
        {
          "headerAr": "المورد القيادي الأول",
          "headerEn": "Top Supplier",
          "accessor": "topSupplier"
        }
      ],
      "rows": [
        {
          "hs": "HS 61",
          "desc": "ملابس وتوابع ألبسة من مصنرات (تريكو وكروشيه)",
          "total": "$170.02M",
          "share": "51.86%",
          "egypt": "$1.33M",
          "egyptShare": "0.78%",
          "topSupplier": "تركيا ($78.78M - 46.33%)"
        },
        {
          "hs": "HS 62",
          "desc": "ملابس وتوابع ألبسة من غير المصنرات (منسوجة)",
          "total": "$157.80M",
          "share": "48.14%",
          "egypt": "$1.39M",
          "egyptShare": "0.88%",
          "topSupplier": "الصين ($43.57M - 27.61%)"
        },
        {
          "hs": "HS 61 + 62",
          "desc": "إجمالي واردات الملابس الجاهزة الرسمية الموثقة",
          "total": "$327.82M",
          "share": "100.00%",
          "egypt": "$2.72M",
          "egyptShare": "0.83%",
          "topSupplier": "تركيا والصين (62.2% مجتمعة)"
        }
      ]
    },
    {
      "id": "table-lb-hs61-top-suppliers",
      "titleAr": "قائمة كبار موردي الملابس المصنرة (HS61) إلى لبنان (2023)",
      "titleEn": "Top Suppliers of Knitted Apparel (HS61) to Lebanon 2023",
      "columns": [
        {
          "headerAr": "الترتيب",
          "headerEn": "Rank",
          "accessor": "rank"
        },
        {
          "headerAr": "الدولة المصدرة",
          "headerEn": "Supplying Country",
          "accessor": "country"
        },
        {
          "headerAr": "القيمة (دولار أمريكي)",
          "headerEn": "Import Value (USD)",
          "accessor": "valUsd"
        },
        {
          "headerAr": "الحصة السوقية (%)",
          "headerEn": "Market Share (%)",
          "accessor": "share"
        },
        {
          "headerAr": "طبيعة الميزة التنافسية",
          "headerEn": "Competitive Advantage",
          "accessor": "edge"
        }
      ],
      "rows": [
        {
          "rank": "1",
          "country": "تركيا 🇹🇷",
          "valUsd": "$78,776,000",
          "share": "46.33%",
          "edge": "القرب الجغرافي، شبكة الماركات السريعة (LCW/Defacto)، مرونة الشحنات"
        },
        {
          "rank": "2",
          "country": "الصين 🇨🇳",
          "valUsd": "$33,728,000",
          "share": "19.84%",
          "edge": "الأسعار الاقتصادية الضخمة، تغطية الفئات الشعبية والتجزئة العامة"
        },
        {
          "rank": "3",
          "country": "بنغلاديش 🇧🇩",
          "valUsd": "$13,654,000",
          "share": "8.03%",
          "edge": "توريد سلاسل الماركات العالمية لخطوط التيشيرتات والبيزكس"
        },
        {
          "rank": "4",
          "country": "سوريا 🇸🇾",
          "valUsd": "$7,878,000",
          "share": "4.63%",
          "edge": "التجارة البرية الحدودية التاريخية للمصنرات القطنية والملابس المنزلية"
        },
        {
          "rank": "5",
          "country": "إيطاليا 🇮🇹",
          "valUsd": "$4,734,000",
          "share": "2.78%",
          "edge": "الأزياء الفاخرة (Luxury) وتريكو الكشمير والصوف الراقي للمتاجر المتخصصة"
        },
        {
          "rank": "6",
          "country": "الهند 🇮🇳",
          "valUsd": "$3,576,000",
          "share": "2.10%",
          "edge": "المصنرات القطنية متوسطة السعر والمطرزات الدقيقة"
        },
        {
          "rank": "7",
          "country": "المغرب 🇲🇦",
          "valUsd": "$3,093,000",
          "share": "1.82%",
          "edge": "سلاسل الفاست فاشن الأوروبية والتعاقدات المتخصصة عبر اتفاقيات التجارة"
        },
        {
          "rank": "8",
          "country": "البرتغال 🇵🇹",
          "valUsd": "$2,917,000",
          "share": "1.72%",
          "edge": "الملابس المحبوكة الراقية والقطنيات ذات المعايير البيئية العالية"
        },
        {
          "rank": "9",
          "country": "كمبوديا 🇰🇭",
          "valUsd": "$2,793,000",
          "share": "1.64%",
          "edge": "الإنتاج الكمي للعلامات التجارية العالمية الموزعة في بيروت"
        },
        {
          "rank": "10",
          "country": "فيتنام 🇻🇳",
          "valUsd": "$2,604,000",
          "share": "1.53%",
          "edge": "الملابس الرياضية التقنية المعقدة وسترات التدريب المنسوجة آليًا"
        },
        {
          "rank": "14",
          "country": "مصر 🇪🇬",
          "valUsd": "$1,330,000",
          "share": "0.78%",
          "edge": "جودة القطن المصري وقرب الشحن البحري (2-4 أيام) مع إعفاء GAFTA"
        }
      ]
    },
    {
      "id": "table-lb-hs62-top-suppliers",
      "titleAr": "قائمة كبار موردي الملابس المنسوجة (HS62) إلى لبنان (2023)",
      "titleEn": "Top Suppliers of Woven Apparel (HS62) to Lebanon 2023",
      "columns": [
        {
          "headerAr": "الترتيب",
          "headerEn": "Rank",
          "accessor": "rank"
        },
        {
          "headerAr": "الدولة المصدرة",
          "headerEn": "Supplying Country",
          "accessor": "country"
        },
        {
          "headerAr": "القيمة (دولار أمريكي)",
          "headerEn": "Import Value (USD)",
          "accessor": "valUsd"
        },
        {
          "headerAr": "الحصة السوقية (%)",
          "headerEn": "Market Share (%)",
          "accessor": "share"
        },
        {
          "headerAr": "طبيعة الميزة التنافسية",
          "headerEn": "Competitive Advantage",
          "accessor": "edge"
        }
      ],
      "rows": [
        {
          "rank": "1",
          "country": "الصين 🇨🇳",
          "valUsd": "$43,573,000",
          "share": "27.61%",
          "edge": "السترات، المعاطف، أطقم العمل، وبنطلونات الجينز والبوليستر"
        },
        {
          "rank": "2",
          "country": "تركيا 🇹🇷",
          "valUsd": "$26,412,000",
          "share": "16.74%",
          "edge": "القمصان الرسمية، البدلات الرجالية، والفساتين والتنانير السريعة"
        },
        {
          "rank": "3",
          "country": "بنغلاديش 🇧🇩",
          "valUsd": "$15,604,000",
          "share": "9.89%",
          "edge": "الدنيم (الجينز) والقمصان المنسوجة للعلامات الكبرى"
        },
        {
          "rank": "4",
          "country": "إيطاليا 🇮🇹",
          "valUsd": "$13,848,000",
          "share": "8.78%",
          "edge": "البدلات والأزياء الرسمية الفاخرة لعلامات النخبة في وسط بيروت والمولات"
        },
        {
          "rank": "5",
          "country": "المغرب 🇲🇦",
          "valUsd": "$9,472,000",
          "share": "6.00%",
          "edge": "توريد خطوط الملابس النسائية المنسوجة للعلامات الإسبانية والأوروبية"
        },
        {
          "rank": "6",
          "country": "الهند 🇮🇳",
          "valUsd": "$6,307,000",
          "share": "4.00%",
          "edge": "الأقمشة الحريرية، الفساتين المطرزة، والشيلان والأوشحة المنسوجة"
        },
        {
          "rank": "7",
          "country": "كمبوديا 🇰🇭",
          "valUsd": "$5,972,000",
          "share": "3.78%",
          "edge": "السراويل والسترات الخفيفة المجمعة للوكالات الدولية"
        },
        {
          "rank": "8",
          "country": "فيتنام 🇻🇳",
          "valUsd": "$4,351,000",
          "share": "2.76%",
          "edge": "الملابس الخارجية التقنية المقاومة للماء والسترات الشتوية المبطنة"
        },
        {
          "rank": "9",
          "country": "باكستان 🇵🇰",
          "valUsd": "$3,940,000",
          "share": "2.50%",
          "edge": "ملابس العمل القطنية، الدينم الاقتصادي، والقمصان الرجالية"
        },
        {
          "rank": "10",
          "country": "البرتغال 🇵🇹",
          "valUsd": "$2,738,000",
          "share": "1.74%",
          "edge": "القمصان القطنية المنسوجة عالية الجودة لبيوت الأزياء"
        },
        {
          "rank": "11",
          "country": "تونس 🇹🇳",
          "valUsd": "$2,610,000",
          "share": "1.65%",
          "edge": "الجينز والملابس الجاهزة المصممة للأسواق المتوسطية"
        },
        {
          "rank": "15",
          "country": "مصر 🇪🇬",
          "valUsd": "$1,393,000",
          "share": "0.88%",
          "edge": "البنطلونات القطنية، الزي الموحد، ملابس الأطفال المنسوجة، وقمصان العمل"
        }
      ]
    },
    {
      "id": "table-lb-us-guide-breakdown",
      "titleAr": "بيانات قطاع الملابس الكلية وفق تقرير U.S. Commercial Guide (2022-2025)",
      "titleEn": "Apparel Sector Metrics - U.S. Commercial Guide Series (USD Million)",
      "columns": [
        {
          "headerAr": "المؤشر الاقتصادي",
          "headerEn": "Economic Indicator",
          "accessor": "metric"
        },
        {
          "headerAr": "عام 2022",
          "headerEn": "2022 Actual",
          "accessor": "y2022"
        },
        {
          "headerAr": "عام 2023",
          "headerEn": "2023 Actual",
          "accessor": "y2023"
        },
        {
          "headerAr": "عام 2024 (تقديري)",
          "headerEn": "2024 Estimated",
          "accessor": "y2024"
        },
        {
          "headerAr": "عام 2025 (توقعات)",
          "headerEn": "2025 Projected",
          "accessor": "y2025"
        },
        {
          "headerAr": "الملاحظات والتحليل الهيكلي",
          "headerEn": "Analytical Notes",
          "accessor": "notes"
        }
      ],
      "rows": [
        {
          "metric": "الإنتاج المحلي الإجمالي للملابس",
          "y2022": "$57M",
          "y2023": "$51M",
          "y2024": "$51M",
          "y2025": "$51M",
          "notes": "يغطي فقط نحو 10% من استهلاك السوق المحلي حسب تقديرات خبراء الصناعة، ويعاني من كلفة الطاقة واستيراد الأقمشة"
        },
        {
          "metric": "الصادرات الكلية للملابس من لبنان",
          "y2022": "$55M",
          "y2023": "$55M",
          "y2024": "$45M",
          "y2025": "$45M",
          "notes": "تتركز في خطوط تصميم الأزياء الراقية (Haute Couture) والمصممين اللبنانيين العالميين وتصدير محدود للخليج"
        },
        {
          "metric": "الواردات الإجمالية الكلية للملابس",
          "y2022": "$579M",
          "y2023": "$666M",
          "y2024": "$634M",
          "y2025": "$634M",
          "notes": "يشمل السلسلة الموسعة من كافة بنود وتوابع الألبسة وتجارة الترانزيت وإعادة التصدير"
        },
        {
          "metric": "الواردات من الولايات المتحدة الأمريكية",
          "y2022": "$9M",
          "y2023": "$12M",
          "y2024": "$9M",
          "y2025": "$9M",
          "notes": "حصة محدودة (~1.5%) محصورة في بعض الماركات الكبرى ومعدات الرياضة الخاصة"
        },
        {
          "metric": "حجم السوق المحلي التقديري للملابس",
          "y2022": "$581M",
          "y2023": "$531M",
          "y2024": "$531M",
          "y2025": "غير محدد",
          "notes": "يعكس استهلاك السكان والمغتربين والسياح عبر المبيعات المدولرة نقدًا في منافذ التجزئة"
        }
      ]
    },
    {
      "id": "table-lb-macro-profile",
      "titleAr": "الملف الديموغرافي والاقتصادي والنقدي للبنان (2024/2025)",
      "titleEn": "Lebanon Macroeconomic, Demographic & Monetary Profile",
      "columns": [
        {
          "headerAr": "المتغير / المؤشر",
          "headerEn": "Variable / Indicator",
          "accessor": "indicator"
        },
        {
          "headerAr": "القيمة الإحصائية",
          "headerEn": "Value",
          "accessor": "val"
        },
        {
          "headerAr": "الانعكاس التجاري على مصنعي الملابس",
          "headerEn": "Commercial Implication for Apparel Exporters",
          "accessor": "impact"
        }
      ],
      "rows": [
        {
          "indicator": "عدد السكان الرسمي المقيم",
          "val": "~5.49 مليون نسمة",
          "impact": "كتلة استهلاكية متركزة في جبل لبنان وبيروت الكبرى والشمال والجنوب والبقاع"
        },
        {
          "indicator": "العملة الرسمية والواقع النقدي",
          "val": "الليرة اللبنانية (LBP) مع دولرة تجارية شبه كاملة",
          "impact": "تسعير التجزئة للملابس المستوردة يتم حصرًا بالدولار الأمريكي النقدي (Fresh USD)، مما يحمي هوامش المستوردين"
        },
        {
          "indicator": "الناتج المحلي الإجمالي المقدر",
          "val": "~21.7 مليار دولار",
          "impact": "اقتصاد مدفوع بتحويلات المغتربين السنوية الضخمة (تتجاوز 6.5 مليار دولار سنويًا) التي تمول القوة الشرائية المباشرة"
        },
        {
          "indicator": "ضريبة القيمة المضافة (VAT)",
          "val": "11.0%",
          "impact": "تُحصل عند التخليص الجمركي وفي نقاط بيع التجزئة، ولا تؤثر على تنافسية السعر عند التصدير FOB/CIF"
        },
        {
          "indicator": "القطاع المصرفي وإدارة السيولة",
          "val": "قيود مصرفية حادة على الودائع القديمة مع حركة 'Fresh USD'",
          "impact": "ضرورة حصر التعاملات المالية عبر تحويلات نقدية خارجية مسبقة (Advance TT) أو اعتمادات معززة من بنوك خارجية"
        },
        {
          "indicator": "الموانئ التجارية الرئيسية",
          "val": "مرفأ بيروت ومرفأ طرابلس ومطار رفيق الحريري الدولي (BEY)",
          "impact": "استقبال الحاويات مباشرة من مصر خلال 2-4 أيام، مع طاقة تخليص متسارعة للشحنات النسيجية"
        }
      ]
    },
    {
      "id": "table-lb-target-products",
      "titleAr": "المصفوفة السلعية ذات الأولوية التصديرية لمجموعة سامي بن عضاد في لبنان",
      "titleEn": "SBA Priority Product Opportunities in the Lebanese Apparel Market",
      "columns": [
        {
          "headerAr": "رمز النظام المنسق",
          "headerEn": "HS Code",
          "accessor": "code"
        },
        {
          "headerAr": "الفئة والمنتج المستهدف",
          "headerEn": "Target Product Category",
          "accessor": "prod"
        },
        {
          "headerAr": "حجم الواردات بلبنان",
          "headerEn": "Lebanon Import Size",
          "accessor": "size"
        },
        {
          "headerAr": "المنافسون الرئيسيون",
          "headerEn": "Key Competitors",
          "accessor": "comp"
        },
        {
          "headerAr": "ميزة مجموعة سامي بن عضاد التنافسية",
          "headerEn": "SBA Competitive Edge",
          "accessor": "edge"
        }
      ],
      "rows": [
        {
          "code": "HS 6109.10",
          "prod": "تيشيرتات وبولو قطنية محبوكة للرجال والشباب والنساء",
          "size": "42.5M$ سنويًا",
          "comp": "تركيا، الصين، بنغلاديش",
          "edge": "غزول القطن المصري الممتاز، تشطيبات ناعمة مقاومة للانكماش، أسعار منافسة لتركيا مع سرعة شحن متفوقة"
        },
        {
          "code": "HS 6111 / 6209",
          "prod": "ملابس الرضع والأطفال وحديثي الولادة (قطنيات 100%)",
          "size": "26.8M$ سنويًا",
          "comp": "تركيا، الصين، الهند",
          "edge": "شهادات سلامة وخلو من المواد الضارة (OEKO-TEX)، ملمس فائق النعومة، تصاميم تواكب أذواق سلاسل متاجر الأطفال في بيروت"
        },
        {
          "code": "HS 6107 / 6108",
          "prod": "الملابس الداخلية والمنزلية وملابس النوم (بيجامات وروب)",
          "size": "34.2M$ سنويًا",
          "comp": "تركيا، سوريا، الصين",
          "edge": "تاريخ عريق وثقة المستهلك اللبناني في جودة الملابس الداخلية القطنية المصرية وقدرتها العالية على الامتصاص والتحمل"
        },
        {
          "code": "HS 6110.20",
          "prod": "سويتشيرتات وهوديز وتريكو خفيف للشباب والجامعات",
          "size": "31.4M$ سنويًا",
          "comp": "تركيا، بنغلاديش، الصين",
          "edge": "أقمشة الميلتون والإنترلوك عالية الكثافة، خياطة متينة، وملاءمة تامة لخطوط أزياء الشارع (Streetwear) المنتشرة في بيروت"
        },
        {
          "code": "HS 6203 / 6204",
          "prod": "الزي الموحد، ملابس العمل، واليونيفورم للفنادق والمستشفيات",
          "size": "18.6M$ سنويًا",
          "comp": "الصين، باكستان، محليًا",
          "edge": "أقمشة قطن/بوليستر معالجة صناعيًا لتحمل الغسيل المتكرر، تفصيل دقيق، وقدرة على توريد دفعات سريعة تعويضية"
        }
      ]
    },
    {
      "id": "table-lb-buyers-directory",
      "titleAr": "دليل المجموعات التجارية والمشترين المستهدفين في لبنان (Commercial Leads)",
      "titleEn": "Verified Commercial Apparel Importers & Retailers in Lebanon",
      "columns": [
        {
          "headerAr": "الاسم التجاري",
          "headerEn": "Company Name",
          "accessor": "name"
        },
        {
          "headerAr": "مجال العمل والنشاط",
          "headerEn": "Business Scope",
          "accessor": "scope"
        },
        {
          "headerAr": "قنوات التوزيع والمتاجر",
          "headerEn": "Retail Footprint",
          "accessor": "stores"
        },
        {
          "headerAr": "العنوان وموقع المقر",
          "headerEn": "Location & HQ",
          "accessor": "loc"
        },
        {
          "headerAr": "بيانات التواصل وقناة الاستهداف",
          "headerEn": "Contact & Channel",
          "accessor": "contact"
        }
      ],
      "rows": [
        {
          "name": "Retail Group Lebanon",
          "scope": "إدارة وكالات أزياء دولية وتجزئة ملابس متطورة (تأسست 2001)",
          "stores": "أكثر من 100 متجر تجزئة لـ 13 علامة تجارية عالمية",
          "loc": "جديدة المتن، جبل لبنان / بيروت الكبرى",
          "contact": "هاتف: 9611884770+ | البريد: info@retailgrp.com | موقع: retailgrp.com (مستهدف لتوريد برامج العلامة الخاصة)"
        },
        {
          "name": "National Retailers Group SAL (NRG)",
          "scope": "تشغيل شبكات متاجر التجزئة وموزع علامات كبرى (LC Waikiki في لبنان)",
          "stores": "سلسلة فروع واسعة في سيتي سنتر وبيروت مول ومناطق المحافظات",
          "loc": "بيروت، الحازمية / سن الفيل",
          "contact": "مكتب إدارة التوريد والعقود | استهداف: توريد تكميلي لخطوط البيزكس والقطنيات الأساسية"
        },
        {
          "name": "Maxima Fashion SAL",
          "scope": "امتياز وتوزيع وتجزئة أزياء نسائية ورجالية (سلسلة محلات Mango في لبنان)",
          "stores": "فروع كبرى في بيروت (ABC الأشرفية، ABC ضبية، وسط بيروت) وطرابلس",
          "loc": "بيروت، الأشرفية",
          "contact": "إدارة المشتريات الخارجية والتجزئة | استهداف: تعاقدات التصنيع المنسوج عالي الجودة"
        },
        {
          "name": "Gruppo Moda SAL",
          "scope": "استيراد وتوزيع الأزياء الراقية والملابس الكاجوال الإيطالية والأوروبية",
          "stores": "متاجر أزياء متخصصة ومعارض بيع بالتجزئة في جبل لبنان وبيروت",
          "loc": "بيروت، وسط المدينة التجاري",
          "contact": "مكتب المشتريات التجارية | استهداف: خطوط القمصان والبدلات والفساتين الراقية"
        },
        {
          "name": "Badr Co. for General Trade",
          "scope": "استيراد وتوزيع ملابس الجملة والأقمشة والملابس الجاهزة",
          "stores": "شبكة توزيع تغطي تجار التجزئة المستقلين في بيروت والشمال والبقاع",
          "loc": "بيروت، منطقة المصيطبة / كورنيش المزرعة",
          "contact": "قسم الاستيراد والتخليص | استهداف: كبرى صفقات الحاويات للمصنرات والملابس المنزلية"
        },
        {
          "name": "Gamco (General Apparel & Manufacturing Co.)",
          "scope": "استيراد وتوزيع الملابس الجاهزة والزي الموحد",
          "stores": "توريد قطاعي ومنافذ بيع مباشرة للمؤسسات والشركات الكبرى",
          "loc": "بيروت، سن الفيل",
          "contact": "إدارة التعاقدات الحكومية والشركات | استهداف: عطاءات اليونيفورم وملابس العمل"
        },
        {
          "name": "Ets. Nakhlé SAL",
          "scope": "استيراد وتجارة ألبسة الأطفال والأزياء العائلية والملابس الداخلية",
          "stores": "فروع بيع تجزئة وشبكة إمداد لمحلات الملابس المستقلة",
          "loc": "جبل لبنان، كسروان / جونيه",
          "contact": "إدارة المشتريات | استهداف: ملابس الأطفال والرضع القطنية المصرية 100%"
        },
        {
          "name": "Serbey Brothers",
          "scope": "تجارة واستيراد الألبسة القطنية والمنسوجات والمصنرات بالجملة",
          "stores": "مستودعات مركزية وشبكة تسويق لتجار الأقمشة والملابس في المحافظات",
          "loc": "بيروت، طريق الشام / البسطة",
          "contact": "إدارة الاستيراد التجاري | استهداف: طلبيات التيشيرتات والبولو والبيجامات"
        },
        {
          "name": "Jeans Couture SAL",
          "scope": "استيراد وتجزئة وتوزيع أزياء الدنيم (الجينز) والملابس الشبابية والكاجوال",
          "stores": "سلسلة محلات وموزعون معتمدون في المراكز التجارية اللبنانية",
          "loc": "بيروت / جبل لبنان",
          "contact": "قسم التطوير وشراء المجموعات | استهداف: تيشيرتات وهوديز وبنطلونات كاجوال"
        },
        {
          "name": "Tag Privé SAL",
          "scope": "سلسلة متاجر أزياء سريعة ومتاجر بوتيك للملابس النسائية العصرية",
          "stores": "متاجر ومنافذ في شوارع التسوق الرئيسية ومراكز المولات",
          "loc": "بيروت، مار إلياس والكسليك",
          "contact": "مدير التشكيلات النسائية | استهداف: فساتين، بلوزات، ومصنرات عصرية سريعة التوريد"
        },
        {
          "name": "Straight SAL",
          "scope": "تجارة وتوزيع الملابس الرجالية الرسمية والكاجوال والأحذية",
          "stores": "شبكة معارض للملابس الرجالية",
          "loc": "بيروت، شارع الحمرا التجاري",
          "contact": "المكتب التجاري | استهداف: القمصان القطنية الفاخرة والبولو الرسمي"
        },
        {
          "name": "Orchestra Prémaman Lebanon",
          "scope": "سلسلة متخصصة في مستلزمات وملابس الأطفال وحديثي الولادة والحوامل",
          "stores": "معارض في كبرى المجمعات التجارية (ABC، City Centre)",
          "loc": "بيروت الكبرى",
          "contact": "إدارة التوريد والامتثال | استهداف: بيبي وير وأطقم قطنية مطابقة للمواصفات الدولية"
        },
        {
          "name": "Apparel Con-Temporary SAL",
          "scope": "تمثيل علامات تجارية عالمية في الأزياء المعاصرة والأحذية والإكسسوارات",
          "stores": "متاجر عصرية في أسواق بيروت الكبرى",
          "loc": "بيروت، ميناء الحصن",
          "contact": "قسم الوكالات وتطوير الشراكات | استهداف: توريد OEM لمنتجات محددة"
        },
        {
          "name": "Lattouf Safety & Uniform Manufacturer",
          "scope": "توريد وتوزيع معدات السلامة المهنية والزي الموحد للشركات والمصانع",
          "stores": "عقود توريد مباشرة للمؤسسات الصناعية والصحية والأمنية",
          "loc": "بيروت، المكلس الصناعية",
          "contact": "إدارة المشتريات الصناعية | استهداف: أقمشة وأطقم العمل المعالجة صناعيًا"
        },
        {
          "name": "جمعية تجار ومستوردي الألبسة الجاهزة في لبنان",
          "scope": "الهيئة القطاعية الرسمية التي تجمع كبار مستوردي وتجار الملابس والأقمشة",
          "stores": "تمثل أكثر من 300 شركة تجارية ومستورد في كافة الأراضي اللبنانية",
          "loc": "بيروت، غرفة التجارة والصناعة والزراعة في بيروت وجبل لبنان",
          "contact": "أمانة الجمعية | قناة تواصل مؤسسية للترويج لوفود التصدير المصرية ومعارض B2B"
        }
      ]
    },
    {
      "id": "table-lb-tariffs-compliance",
      "titleAr": "مصفوفة الجمارك والضرائب والاتفاقيات التجارية والمطابقة في لبنان",
      "titleEn": "Customs Tariffs, Taxes, Trade Agreements & Regulatory Compliance Matrix",
      "columns": [
        {
          "headerAr": "المحور التنظيمي",
          "headerEn": "Regulatory Pillar",
          "accessor": "pillar"
        },
        {
          "headerAr": "المعاملة المطبقة للبضائع المصرية",
          "headerEn": "Egyptian Origin Treatment",
          "accessor": "treatment"
        },
        {
          "headerAr": "المتطلبات المستندية والإجرائية",
          "headerEn": "Documentary & Procedural Requirements",
          "accessor": "reqs"
        },
        {
          "headerAr": "ملاحظات الامتثال والمخاطر",
          "headerEn": "Compliance Notes & Risk Mitigation",
          "accessor": "notes"
        }
      ],
      "rows": [
        {
          "pillar": "الرسوم الجمركية العامة (MFN)",
          "treatment": "تتراوح بين 5% و 20% حسب البند التعريفي التفصيلي (ASYCUDA)",
          "reqs": "تقديم البيان الجمركي التفصيلي وقائمة التعبئة والفاتورة الموثقة",
          "notes": "تخضع الملابس لتقييم جمركي دقيق عبر نظام نجمة الجمركي (NAJM) التابع للجمارك اللبنانية"
        },
        {
          "pillar": "اتفاقية التيسير العربية الكبرى (GAFTA)",
          "treatment": "إعفاء جمركي كامل 0% رسوم جمركية لكافة بنود الملابس الجاهزة",
          "reqs": "شهادة منشأ عربية معتمدة من الغرفة التجارية المصرية ومحققة لنسبة قيمة مضافة محلية >= 40%",
          "notes": "المسار المفضل الأساسي للتصدير؛ يوفر ميزة سعرية فورية بين 5% إلى 15% مقارنة بالمنتجات الصينية والتركية"
        },
        {
          "pillar": "الاتفاقية الثنائية المصرية اللبنانية",
          "treatment": "تاريخيًا كانت تتضمن قوائم استثناءات لبعض بنود النسيج لحماية الصناعة المحلية",
          "reqs": "الاعتماد دائمًا على المسار الأضمن وهو اتفاقية GAFTA العربية المطبقة بدون قوائم سلبية",
          "notes": "يجب التحقق المسبق من البند الجمركي المحدد عبر نظام ASYCUDA للجمارك اللبنانية قبل شحن الحاوية"
        },
        {
          "pillar": "ضريبة القيمة المضافة (VAT)",
          "treatment": "11.0% تُدفع عند المنفذ الجمركي على القيمة CIF + الرسوم الجمركية إن وجدت",
          "reqs": "رقم التعريف الضريبي للمستورد اللبناني مسجل لدى وزارة المالية ومصلحة الضرائب على القيمة المضافة",
          "notes": "يسددها المستورد اللبناني ولا تخصم من مستحقات المصدر المصري؛ ويتم استردادها لاحقًا عند البيع النهائي"
        },
        {
          "pillar": "المواصفات القياسية اللبنانية (LIBNOR)",
          "treatment": "مطابقة المواصفات الإلزامية لبطاقة البيان (NL 38) وسلامة الصباغة وثبات الألوان",
          "reqs": "بطاقة بيان نسيجية غير قابلة للإزالة تتضمن: نسبة الألياف 100% باللغة العربية أو الفرنسية/الإنجليزية، بلد المنشأ 'صنع في مصر'، تعليمات الغسيل والكي",
          "notes": "تمنع الجمارك اللبنانية دخول أي ملابس تفتقر إلى بلد المنشأ المحفور أو المثبت بحياكة دائمة على القطعة"
        },
        {
          "pillar": "المعايير الصحية والبيئية",
          "treatment": "حظر استخدام صبغات الآزو المسرطنة (Azo Dyes) والفورمالديهايد والمعادن الثقيلة",
          "reqs": "شهادات اختبار معملية معتمدة (OEKO-TEX Standard 100 أو تقرير فحص معملي معتمد من مصلحة الكيمياء)",
          "notes": "تخضع عينات عشوائية للتحليل في مختبرات معهد البحوث الصناعية اللبناني (IRI) بالجامعة اللبنانية"
        }
      ]
    },
    {
      "id": "table-lb-logistics-routes",
      "titleAr": "مسارات الشحن وسلاسل الإمداد من مصر إلى لبنان (Maritime & Air Freight)",
      "titleEn": "Supply Chain & Transit Corridors from Egypt to Lebanon",
      "columns": [
        {
          "headerAr": "مسار الشحن",
          "headerEn": "Shipping Route",
          "accessor": "route"
        },
        {
          "headerAr": "وسيلة النقل والموانئ",
          "headerEn": "Transport Mode & Ports",
          "accessor": "mode"
        },
        {
          "headerAr": "زمن العبور (Transit Time)",
          "headerEn": "Transit Time",
          "accessor": "time"
        },
        {
          "headerAr": "التكلفة التقديرية للحاوية",
          "headerEn": "Estimated Cost",
          "accessor": "cost"
        },
        {
          "headerAr": "الملاءمة التشغيلية",
          "headerEn": "Operational Fit",
          "accessor": "fit"
        }
      ],
      "rows": [
        {
          "route": "المسار البحري السريع (شرق المتوسط)",
          "mode": "حاويات بحرية (FCL / LCL) من الإسكندرية / دمياط / بورسعيد إلى مرفأ بيروت",
          "time": "2 إلى 4 أيام إبحار مباشر",
          "cost": "1,200$ - 1,800$ للحاوية 40 قدم",
          "fit": "المسار الرئيسي لكافة الشحنات التجارية الكمية وشحنات طلبيات الجملة والموسمية الكبرى"
        },
        {
          "route": "المسار البحري الشمالي التكميلي",
          "mode": "شحن بحري إلى مرفأ طرابلس (شمال لبنان)",
          "time": "3 إلى 5 أيام إبحار",
          "cost": "1,150$ - 1,750$ للحاوية 40 قدم",
          "fit": "مثالي لخدمة أسواق الشمال والبقاع وطرابلس بتكلفة تخليص ورسوم مناولة أقل نسبيًا"
        },
        {
          "route": "الشحن الجوي السريع للأزياء والمطابقة",
          "mode": "طيران شحن / ركاب من مطار القاهرة (CAI) إلى مطار رفيق الحريري بيروت (BEY)",
          "time": "24 إلى 48 ساعة",
          "cost": "1.80$ - 2.50$ لكل كجم",
          "fit": "مخصص للعينات التعاقدية المعتمدة (Sales Samples)، الطلبيات التكميلية الطارئة، وتشكيلات الكبسولة السريعة"
        }
      ]
    },
    {
      "id": "table-lb-financial-risk-mitigation",
      "titleAr": "دليل إدارة المخاطر المالية والنقدية والتعاقدية في السوق اللبناني",
      "titleEn": "Financial Risk & Credit Management Playbook for Lebanon",
      "columns": [
        {
          "headerAr": "نوع الخطر",
          "headerEn": "Risk Category",
          "accessor": "risk"
        },
        {
          "headerAr": "طبيعة الخطر وتأثيره المحتمل",
          "headerEn": "Risk Nature & Impact",
          "accessor": "impact"
        },
        {
          "headerAr": "سياسة مجموعة سامي بن عضاد الإلزامية",
          "headerEn": "SBA Mandatory Policy",
          "accessor": "policy"
        },
        {
          "headerAr": "آلية التنفيذ العملي",
          "headerEn": "Execution Mechanism",
          "accessor": "exec"
        }
      ],
      "rows": [
        {
          "risk": "أزمة السيولة المصرفية واحتجاز الودائع",
          "impact": "عجز البنوك اللبنانية المحلية عن إجراء تحويلات خارجية من الحسابات القديمة",
          "policy": "حظر تام لقبول شيكات مصرفية محلية أو تحويلات من حسابات لولار/قديمة داخل لبنان",
          "exec": "اشتراط حساب Fresh USD في بنك لبناني قادر على التحويل الخارجي السويفت (SWIFT) أو حساب خارجي للمشتري في قبرص أو دبي أو سويسرا"
        },
        {
          "risk": "تقلبات سعر صرف الليرة اللبنانية",
          "impact": "تآكل رأس المال العامل للمشتري المحلي في حال التسعير بالعملة المحلية",
          "policy": "حصر عقود التوريد والفواتير حصرًا بالدولار الأمريكي (USD) الصريح",
          "exec": "تضمين شرط تعاقدي صريح بأن السعر مستحق بالدولار الأمريكي الصافي دون أي إمكانية للتحويل إلى عملة بديلة"
        },
        {
          "risk": "مخاطر الائتمان التجاري والتعثر",
          "impact": "تخلف العميل عن السداد بعد وصول الحاوية إلى مرفأ بيروت",
          "policy": "عدم منح أي ائتمان مفتوح (No Open Account) في المرحلتين الأولى والثانية",
          "exec": "دفعة مقدمة نقدية تتراوح بين 30% إلى 50% عند التعاقد وتأكيد أمر الشراء، والمتبقي (50%-70%) يدفع نقدًا عند تقديم صور مستندات الشحن البنكية (CAD) وقبل الإفراج عن بوليصة الشحن الأصلية"
        },
        {
          "risk": "تأخير التخليص الجمركي وتراكم الأرضيات",
          "impact": "فرض غرامات تأخير أرضيات (Demurrage) في مرفأ بيروت في حال نقص المستندات",
          "policy": "التدقيق المسبق للشحنات والتنسيق مع المخلص الجمركي المعتمد للمشتري",
          "exec": "إرسال نسخ رقمية من شهادة المنشأ GAFTA وبطاقة البيان وفاتورة الشحن للتأكيد قبل إبحار السفينة بـ 48 ساعة"
        }
      ]
    },
    {
      "id": "table-lb-scenarios",
      "titleAr": "حسابات التكلفة والهوامش التصديرية لمجموعة سامي بن عضاد إلى لبنان (سعر الوصول CIF بيروت)",
      "titleEn": "Pricing & Landed Cost Scenarios to Port of Beirut (Cotton Polos & T-shirts)",
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
          "headerAr": "تكلفة الشحن البحري للقطعة",
          "headerEn": "Freight Cost / Pc",
          "accessor": "freight"
        },
        {
          "headerAr": "سعر الوصول CIF بيروت",
          "headerEn": "CIF Beirut Cost",
          "accessor": "cif"
        },
        {
          "headerAr": "الرسوم الجمركية (GAFTA)",
          "headerEn": "Customs (GAFTA 0%)",
          "accessor": "duty"
        },
        {
          "headerAr": "التخليص والنقل الداخلي",
          "headerEn": "Clearance & Local Transport",
          "accessor": "clear"
        },
        {
          "headerAr": "التكلفة الواصلة للمستورد اللبناني",
          "headerEn": "Landed Cost to Importer",
          "accessor": "landed"
        },
        {
          "headerAr": "سعر بيع الجملة المقترح في بيروت",
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
          "fob": "$3.85",
          "freight": "$0.18",
          "cif": "$4.03",
          "duty": "$0.00 (معفى)",
          "clear": "$0.14",
          "landed": "$4.17",
          "ws": "$6.50",
          "margin": "35.8% (ربح ممتاز)"
        },
        {
          "vol": "25,000 قطعة",
          "fob": "$3.60",
          "freight": "$0.12",
          "cif": "$3.72",
          "duty": "$0.00 (معفى)",
          "clear": "$0.10",
          "landed": "$3.82",
          "ws": "$6.00",
          "margin": "36.3% (قدرة تنافسية فائقة)"
        },
        {
          "vol": "50,000 قطعة",
          "fob": "$3.35",
          "freight": "$0.09",
          "cif": "$3.44",
          "duty": "$0.00 (معفى)",
          "clear": "$0.07",
          "landed": "$3.51",
          "ws": "$5.60",
          "margin": "37.3% (حصة سوقية كاسحة)"
        },
        {
          "vol": "100,000 قطعة",
          "fob": "$3.15",
          "freight": "$0.07",
          "cif": "$3.22",
          "duty": "$0.00 (معفى)",
          "clear": "$0.05",
          "landed": "$3.27",
          "ws": "$5.25",
          "margin": "37.7% (هيمنة سعرية كاملة)"
        }
      ]
    },
    {
      "id": "table-lb-roadmap-90-days",
      "titleAr": "خطة الدخول والتنفيذ في السوق اللبناني خلال 90 يومًا (Action Roadmap)",
      "titleEn": "90-Day Market Entry & Execution Roadmap for Lebanon",
      "columns": [
        {
          "headerAr": "المرحلة الزمنية",
          "headerEn": "Phase & Timeline",
          "accessor": "phase"
        },
        {
          "headerAr": "الأهداف والأنشطة الرئيسية",
          "headerEn": "Key Milestones & Actions",
          "accessor": "actions"
        },
        {
          "headerAr": "المخرجات الملموسة",
          "headerEn": "Tangible Deliverables",
          "accessor": "deliverables"
        },
        {
          "headerAr": "المسؤولية التنفيذية",
          "headerEn": "Ownership",
          "accessor": "owner"
        }
      ],
      "rows": [
        {
          "phase": "اليوم 1 - 20 (الإعداد الفني ومطابقة العينات)",
          "actions": "إعداد كاتالوج التصدير الرقمي بالدولار الأمريكي، إنتاج عينات معتمدة لمجموعات التيشيرتات والأطفال والملابس المنزلية مطابقة لمواصفات LIBNOR.",
          "deliverables": "حقيبة العينات الفيزيائية المعتمدة + عروض أسعار CIF مرفأ بيروت متدرجة حسب الكميات.",
          "owner": "فريق تطوير المنتجات والمبيعات التصديرية لمجموعة سامي بن عضاد"
        },
        {
          "phase": "اليوم 21 - 45 (التواصل التجاري واستهداف المشترين)",
          "actions": "فتح قنوات تفاوض مباشرة مع المشترين الخمسة الأوائل (Retail Group, NRG, Maxima, Badr, Gamco) وإرسال العينات عبر الشحن الجوي السريع.",
          "deliverables": "جلسات تفاوض عن بُعد + تقييم العينات الميداني في بيروت وتحديد المواصفات والأحجام.",
          "owner": "إدارة تطوير الأعمال والشراكات الإقليمية"
        },
        {
          "phase": "اليوم 46 - 65 (التعاقد والضمانات المالية)",
          "actions": "صياغة عقود التوريد المتوافقة مع إدارة المخاطر، استلام الدفعة المقدمة (30%-50%) عبر تحويل بنكي خارجي Fresh USD، واعتماد أوامر التشغيل.",
          "deliverables": "عقدان تجاريان موقعان على الأقل + استلام إشعار سويفت البنكي الخارجي للدفعة المقدمة.",
          "owner": "الإدارة المالية والشؤون القانونية"
        },
        {
          "phase": "اليوم 66 - 90 (التصنيع والشحن والتخليص)",
          "actions": "بدء خطوط الإنتاج السريعة في مصانع المجموعة، فحص الجودة والتعبئة، إصدار شهادة المنشأ GAFTA، وشحن الحاوية الأولى إلى مرفأ بيروت.",
          "deliverables": "وصول الشحنة لمرفأ بيروت بنجاح، التخليص الجمركي بنسبة 0% رسوم، وسداد الدفعة النهائية قبل تسليم البوليصة.",
          "owner": "إدارة العمليات وسلاسل الإمداد والشحن الدولي"
        }
      ]
    }
  ],
  "executiveSummaryAr": "تُمثل الجمهورية اللبنانية سوقًا تجاريًا حيويًا ومميزًا لصناعة الملابس الجاهزة والمنسوجات في منطقة بلاد الشام وشرق البحر المتوسط؛ حيث يعتمد السوق المحلي اعتمادًا شبه كامل على الواردات الخارجية لتلبية أكثر من 90% من استهلاكه السنوي من الملابس، وذلك في ظل انحسار الإنتاج المحلي عند نحو 51 مليون دولار سنويًا فقط وفقًا لتقديرات الدليل التجاري الأمريكي (U.S. Commercial Guide).\n\nواستنادًا إلى بيانات الجمارك الرسمية وقواعد بيانات التجارة الدولية المعتمدة لدى البنك الدولي (WITS) وشعبة الإحصاء بالأمم المتحدة (UN Comtrade) لعام 2023، بلغ إجمالي واردات لبنان الموثقة جمركيًا من الملابس الجاهزة (ضمن الفصلين 61 و 62) نحو 327.82 مليون دولار أمريكي. وتتوزع هذه الواردات بنسب شبه متقاربة بين الملابس المصنرة والتريكو (HS61) بقيمة 170.02 مليون دولار (بحصة 51.86%)، والملابس المنسوجة وغير المصنرة (HS62) بقيمة 157.80 مليون دولار (بحصة 48.14%). وتكشف المؤشرات الموسعة أن إجمالي واردات قطاع الملابس الشاملة تسجل مستويات تدور حول 634 إلى 666 مليون دولار سنويًا، بحجم سوق استهلاكي يقدر بنحو 531 مليون دولار، مدفوعًا بقوة شرائية دولارية تعتمد أساسًا على تحويلات المغتربين اللبنانيين في الخارج التي تضخ ما يزيد على 6.5 مليار دولار سنويًا في شرايين الاقتصاد المحلي.\n\nوعلى صعيد الخريطة التنافسية، تفرض تركيا هيمنتها القوية على واردات الملابس المصنرة (HS61) مستحوذة وحدها على 78.78 مليون دولار (أي ما يعادل 46.33% من إجمالي واردات البند)، بينما تتصدر الصين واردات الملابس المنسوجة (HS62) بقيمة 43.57 مليون دولار (بحصة 27.61%)، تليها تركيا بقيمة 26.41 مليون دولار (16.74%) وبنغلاديش بقيمة 15.60 مليون دولار (9.89%) وإيطاليا بنحو 13.85 مليون دولار (8.78%). وفي المقابل، لا تزال صادرات الملابس المصرية إلى لبنان تسجل حصة سوقية متواضعة للغاية بلغت 2.723 مليون دولار فقط في عام 2023 (منها 1.330 مليون دولار للملابس المصنرة و 1.393 مليون دولار للملابس المنسوجة)، وهو ما يمثل 0.83% فقط من إجمالي واردات الملابس الجمركية، مما يؤكد وجود فجوة توريد هائلة وهوامش توسع واسعة للغاية يمكن لمجموعة سامي بن عضاد اقتناصها.\n\nوتستند استراتيجية مجموعة سامي بن عضاد في اختراق السوق اللبناني إلى أربع ركائز تنافسية صلبة: أولها القرب الجغرافي واللوجستي البحري الاستثنائي عبر شرق البحر الأبيض المتوسط؛ حيث تستغرق الحاويات من موانئ الإسكندرية ودمياط وبورسعيد ما بين يومين إلى أربعة أيام إبحار فقط للوصول إلى مرفأ بيروت، مقارنة بأسابيع طويلة لسلاسل الإمداد الآسيوية. وثانيها الميزة السعرية والجمركية الحاسمة عبر اتفاقية التيسير العربية الكبرى (GAFTA) التي تمنح الملابس المصرية إعفاءً جمركيًا كاملًا بنسبة 0% رسوم جمركية بشهادة المنشأ المعتمدة، في حين تواجه المنافسة الصينية رسومًا جمركية تتراوح بين 5% إلى 20%. وثالثها الجودة الموثوقة لغزول القطن المصري ومطابقتها للمواصفات القياسية اللبنانية الصادرة عن مؤسسة المقاييس والمواصفات اللبنانية (LIBNOR). ورابعها تطبيق بروتوكول صارم لإدارة المخاطر الائتمانية والنقدية عبر اشتراط السداد بالدولار الخارجي النقدي (Fresh USD) ودفعات مقدمة تتراوح بين 30% إلى 50% لضمان التدفقات النقدية واستبعاد أي مخاطر مصرفية محلية. وبناءً على التحليل المتكامل المرجح للأبعاد السبعة، نال السوق اللبناني تقييم 76/100 (المستوى الثاني – فرصة مرتفعة)، محتلًا الترتيب الثاني على مستوى أسواق بلاد الشام.",
  "executiveSummaryEn": "The Lebanese Republic represents a vibrant, fashion-forward, and structurally compelling commercial destination for the apparel and textile industry in the Levant and Eastern Mediterranean. Facing local manufacturing output that satisfies only ~10% of domestic consumption (~$51M annually according to the U.S. Commercial Guide), the Lebanese market relies almost entirely on international imports to satisfy its retail demand.\n\nAccording to verified official customs data reported in World Bank WITS and UN Comtrade databases for 2023, Lebanon imported $327.82 million USD of finished apparel across HS Chapters 61 and 62. This customs baseline is split evenly between knitted/crocheted apparel (HS61) at $170.02 million USD (51.86%) and non-knitted/woven apparel (HS62) at $157.80 million USD (48.14%). Broader market metrics from the U.S. Commercial Guide capture total sector imports fluctuating between $634M and $666M with an estimated retail market size of $531M, propelled by widespread commercial retail dollarization (Fresh USD) and expatriate remittance inflows exceeding $6.5 billion USD annually.\n\nCompetitively, Turkey commands the knitted segment (HS61) with $78.78 million (46.33% market share), while China leads the woven segment (HS62) with $43.57 million (27.61%), followed by Turkey at $26.41 million (16.74%), Bangladesh at $15.60 million (9.89%), and Italy at $13.85 million (8.78%). In sharp contrast, Egyptian apparel exports to Lebanon stood at only $2.723 million USD in 2023 ($1.330M HS61 + $1.393M HS62), capturing a meager 0.83% market share. This underrepresentation reveals substantial market expansion headroom.\n\nSami Bin Ayyad Group's market entry architecture leverages four core strategic pillars: (1) Unrivaled short-sea maritime logistics from Alexandria, Damietta, and Port Said to the Port of Beirut with a 2-to-4 day transit time; (2) Full 0% preferential customs tariff access under the Greater Arab Free Trade Area (GAFTA), providing a decisive price advantage over Asian suppliers who face 5%-20% duties; (3) Premium Egyptian cotton fiber quality, compliance with LIBNOR labeling standards (NL 38), and European-standard eco-finishes (OEKO-TEX); and (4) Strict monetary risk controls mandating 30%-50% upfront deposits and Fresh USD international settlements to navigate local banking constraints safely. Weighted across seven analytical dimensions, Lebanon achieves an overall Opportunity Score of 76/100 (Tier 2 – High Opportunity), ranking #2 in the Levant regional market.",
  "sections": [
    {
      "id": "sec-lb-intro-methodology",
      "titleAr": "1. الإطار المنهجي ومصادر البيانات المعتمدة والفصل الإحصائي",
      "titleEn": "1. Methodological Framework & Verified Data Sources",
      "contentAr": "تعتمد هذه الدراسة منهجية تحليلية استقصائية متعددة المستويات، مصممة للفصل الصارم بين البيانات الجمركية الدقيقة لسلاسل التجارة المباشرة وبين التقديرات الاقتصادية الكلية لحجم السوق الإجمالي، وذلك على النحو التالي:\n\n1. **الأساس الجمركي الفعلي الموثق (Customs Trade Baseline):**\nتم استخراج بيانات الاستيراد الرسمية لبنود الملابس الجاهزة (HS61 للملابس المصنرة و HS62 للملابس المنسوجة) مباشرة من قاعدة بيانات البنك الدولي للحلول المتكاملة للتجارة (World Bank WITS) وإحصاءات شعبة التجارة بالأمم المتحدة (UN Comtrade) لعام 2023، استنادًا إلى تقارير الجمارك اللبنانية الرسمية (الجمهورية اللبنانية - دولة مستوردة / Importer Reported). ووفقًا لهذه البيانات، يبلغ إجمالي الواردات الجمركية المباشرة للملابس الجاهزة 327.819 مليون دولار أمريكي.\n\n2. **سلسلة مؤشرات السوق الكلية (Broader Market Estimates):**\nتمت مراجعة تقديرات قطاع النسيج والملابس الصادرة عن الدليل التجاري الأمريكي الصادر عن إدارة التجارة الدولية التابعة للحكومة الأمريكية (U.S. Commercial Guide) للأعوام 2022 حتى 2025؛ والتي تضع إجمالي واردات القطاع الموسعة (شاملة بنود المنسوجات وتوابعها والسلع المعاد تصديرها) عند 634 مليون دولار، بحجم سوق محلي إجمالي يبلغ 531 مليون دولار، وإنتاج محلي متواضع بحدود 51 مليون دولار يغطي فقط 10% من الطلب المحلي.\n\n3. **التدقيق والتحذير المنهجي الإلزامي:**\nتؤكد مجموعة سامي بن عضاد صراحةً لشركائها ومحلليها عدم الخلط بين إجمالي السوق الموسع (634M$) ورقم الواردات الجمركية المباشرة لبنود الملابس الجاهزة HS61+HS62 البالغ (327.82M$). كما يُشدد على أن حصة الصادرات المصرية البالغة 0.83% محسوبة حصرًا ومباشرة على أساس واردات الملابس الجاهزة HS61+HS62 الموثقة لعام 2023.\n\n4. **المسح الميداني للمشترين والمخاطر:**\nتضمن البحث مطابقة بيانات الدليل التجاري مع سجلات غرفة التجارة والصناعة والزراعة في بيروت وجبل لبنان (CCIAB) وجمعية تجار الألبسة الجاهزة، فضلًا عن التدقيق المالي لآليات الدفع النقدية والتعامل مع الدولار النقدي (Fresh USD) في ظل القيود المصرفية اللبنانية الراهنة.",
      "contentEn": "This study applies a multi-tiered analytical framework strictly segregating verified physical customs data from broader macroeconomic market estimates:\n1. Physical Customs Baseline: Directly extracted from World Bank WITS and UN Comtrade databases for 2023, based on officially reported Lebanese Customs data (Importer Reported). This anchors the finished apparel market (HS61+HS62) at $327.819M USD.\n2. Macro Market Series: Extracted from the U.S. Commercial Guide (U.S. International Trade Administration) spanning 2022-2025, which evaluates broader apparel imports at $634M, total domestic market consumption at $531M, and local manufacturing at $51M (~10% of demand).\n3. Mandatory Methodological Warning: The broader $634M market figure must never be conflated with the verified $327.82M HS61+HS62 baseline. Egypt's calculated 0.83% market share applies strictly to the finished apparel customs baseline.\n4. Field & Financial Diligence: Commercial buyer directories and monetary risk playbooks were cross-verified with Beirut Chamber records (CCIAB) and Lebanese apparel trade associations, addressing banking restrictions and Fresh USD mechanisms."
    },
    {
      "id": "sec-lb-macro-monetary",
      "titleAr": "2. البيئة الاقتصادية الكلية والديموغرافيا وظاهرة الدولرة النقدية",
      "titleEn": "2. Macroeconomic Environment, Demographics & Commercial Dollarization",
      "contentAr": "يمتلك الاقتصاد اللبناني خصوصية هيكلية فريدة في منطقة المشرق العربي تؤثر بصورة مباشرة على تجارة التجزئة واستيراد الملابس:\n\n1. **التركيبة السكانية والاستهلاك:**\nيبلغ عدد سكان لبنان المقيمين نحو 5.49 مليون نسمة، يتركز أكثر من نصفهم في نطاق بيروت الكبرى وجبل لبنان وطرابلس وصيدا، مما يخلق تجمعات حضرية كثيفة تسهل عمليات التوزيع واللوجستيات الداخلية. ويمتاز المستهلك اللبناني بمتابعة وثيقة ودقيقة لأحدث خطوط الموضة العالمية والأزياء الكاجوال والرسمية، مع حساسية عالية تجاه مظهر الملابس وجودتها وخامتها القطنية.\n\n2. **الدولرة التجارية الكاملة لقطاع التجزئة (Commercial Dollarization):**\nعلى الرغم من استمرار وجود الليرة اللبنانية (LBP) كعملة رسمية، فإن قطاع تجزئة الملابس والسلع المستوردة يشهد دولرة تجارية شبه مطلقة بنسبة 100%. حيث تُسعّر كافة قطع الملابس في المتاجر والمولات بالدولار الأمريكي الصريح، ويتم سداد قيمتها نقدًا بالدولار الأمريكي أو بما يعادله بالليرة حسب سعر الصرف الحر اللحظي في السوق الموازي. هذا النموذج يحمي المستوردين وتجار الجملة والتجزئة من مخاطر خسائر تآكل العملة المحلية ويضمن استقرار هوامشهم الربحية.\n\n3. **قوة تحويلات المغتربين (Remittance Economy):**\nيستند الاستهلاك المحلي إلى تدفقات نقدية قوية ومستدامة من الاغتراب اللبناني المنتشر في دول الخليج العربي وأفريقيا وأوروبا والأمريكتين؛ حيث يضخ المغتربون أكثر من 6.5 مليار دولار سنويًا نقدًا في شرايين الاقتصاد المحلي، وهو ما يغذي القوة الشرائية المباشرة للأسر اللبنانية ويمكنها من مواصلة شراء الملابس الجاهزة والسلع الاستهلاكية المستوردة عالية الجودة.\n\n4. **تحديات النظام المصرفي وإدارة السيولة:**\nتخضع الحسابات المصرفية المحلية القديمة في البنوك اللبنانية لقيود سحب وتحويلات قاسية منذ عام 2019. وقد أفرز هذا الواقع ظهور نظام 'الدولار النقدي الجديد' (Fresh USD)، وهو ما يفرض على المصدرين إلى لبنان عدم قبول أي مدفوعات داخلية، وحصر التعامل المالي حصرًا في التحويلات البرقية السريعة عبر سويفت (SWIFT) الواردة من حسابات خارجية أو حسابات Fresh معتمدة لدى البنوك اللبنانية النشطة تجاريًا.",
      "contentEn": "The Lebanese macro economy exhibits unique structural attributes that directly govern retail commerce and apparel trade:\n1. Demographics & Fashion Consciousness: With an estimated resident population of ~5.49 million heavily concentrated in Greater Beirut, Mount Lebanon, Tripoli, and Sidon, urban density enables streamlined retail distribution. Lebanese consumers maintain sophisticated fashion literacy and demand premium garment finishes and breathable fabrics.\n2. Full Commercial Dollarization: While the Lebanese Pound (LBP) remains official, retail apparel trade is 100% dollarized. Garments are priced and transacted in Fresh USD or its real-time parallel cash market equivalent, insulating importers from local currency devaluation.\n3. Expatriate Remittance Inflows: Household purchasing power is anchored by over $6.5 billion in annual cash remittances from the Lebanese diaspora in the GCC, Africa, and the West, sustaining consumer expenditure on branded and high-quality imported clothing.\n4. Banking Liquidity Architecture: Lingering banking restrictions on historical deposits require all commercial settlements to be conducted exclusively in international 'Fresh USD' via outward wire transfers or verified offshore corporate accounts."
    },
    {
      "id": "sec-lb-customs-baseline-analysis",
      "titleAr": "3. تحليل الأساس التجاري الجمركي لواردات الملابس (HS61 و HS62)",
      "titleEn": "3. Detailed Customs Trade Baseline Analysis (HS61 & HS62)",
      "contentAr": "يكشف الفحص الدقيق لبيانات جمارك لبنان لعام 2023 (WITS / UN Comtrade) عن الأبعاد التفصيلية التالية:\n\n1. **توزيع فئتي الملابس:**\n- **الملابس المصنرة والتريكو (HS 61):** بلغت وارداتها 170.015 مليون دولار أمريكي، مشكلة نسبة 51.86% من إجمالي واردات الملابس اللبنانية. وتعكس هذه الفئة الطلب المرتفع على التيشيرتات القطنية، ملابس الأطفال والرضع المحبوكة، البلوفرات، السويتشيرتات، الملابس الرياضية، والملابس الداخلية التريكو.\n- **الملابس المنسوجة وغير المصنرة (HS 62):** بلغت وارداتها 157.804 مليون دولار أمريكي، مشكلة نسبة 48.14% من الإجمالي. وتشمل هذه الفئة القمصان المنسوجة الرجالية، البدلات والأطقم الرسمية، السراويل وبنطلونات الجينز والدنيم، فساتين السهرة والملابس النسائية الجاهزة، وسترات العمل واليونيفورم.\n\n2. **التوازن الهيكلي بين الفئتين:**\nيمتاز السوق اللبناني بتقارب شديد وتوازن متكافئ بين الفئتين (51.9% تريكو مقابل 48.1% منسوج)، مما يتيح لمجموعة سامي بن عضاد توظيف كامل طاقاتها التصنيعية لخطوط الأقمشة الدائرية المحبوكة (Circular Knits) وخطوط الحياكة المنسوجة المتطورة في وقت واحد دون الاعتماد على قطاع أحادي.\n\n3. **معدلات الاستهلاك الفردي من الملابس المستوردة:**\nبقيمة واردات جمركية تبلغ 327.82 مليون دولار وعدد سكان مقيم يبلغ 5.49 مليون نسمة، يصل متوسط نصيب الفرد من واردات الملابس الجمركية إلى نحو 60 دولارًا سنويًا بسعر الاستيراد CIF (والذي يعادل ما بين 120 إلى 150 دولارًا بسعر التجزئة النهائي للمستهلك)، وهو معدل مرتفع نسبيًا مقارنة بمتوسطات دول المنطقة ذات الدخل المماثل، مما يؤكد الطبيعة الاستهلاكية النشطة للمجتمع اللبناني.",
      "contentEn": "Granular examination of Lebanese Customs data for 2023 reveals:\n1. Product Category Split:\n- HS 61 (Knitted/Crocheted Apparel): Totaled $170.015M USD, representing 51.86% of total apparel imports. Highlights high absorption of cotton T-shirts, babywear, sweatshirts, loungewear, and activewear.\n- HS 62 (Woven Apparel): Totaled $157.804M USD, capturing 48.14%. Dominated by woven dress shirts, denim trousers, formal suits, dresses, outerwear, and professional uniforms.\n2. Balanced Absorption: The near-equal equilibrium (51.9% knit vs 48.1% woven) enables SBA Group to deploy both its circular knitting lines and woven production capacities simultaneously.\n3. Per Capita Customs Imports: At $327.82M imports across 5.49M residents, annual per capita apparel imports average ~$60 CIF ($120-$150 retail equivalent), reflecting sustained lifestyle expenditure."
    },
    {
      "id": "sec-lb-hs61-suppliers-profile",
      "titleAr": "4. الخريطة التنافسية لموردي الملابس المصنرة (HS61) إلى لبنان",
      "titleEn": "4. HS61 Knitted Apparel Supplier Landscape & Market Dominance",
      "contentAr": "شهدت واردات الملابس المصنرة (HS61) البالغة 170.02 مليون دولار في عام 2023 تركيزًا تنافسيًا حادًا تبرز ملامحه في الآتي:\n\n1. **الهيمنة التركية المطلقة (المرتبة الأولى):**\nاحتلت تركيا الصدارة المطلقة بتوريد ما قيمته 78.776 مليون دولار أمريكي، مستحوذة وحدها على حصة سوقية كاسحة بلغت 46.33%. وتستند الهيمنة التركية إلى شبكة انتشار واسعة للعلامات التجارية التركية الكبرى (مثل LC Waikiki, Defacto, Colin's, Koton, Mavi) التي تمتلك سلاسل فروع ضخمة في المولات اللبنانية، فضلًا عن سرعة الشحن البري والبحري من إسطنبول وميرسين، ومرونة المصانع التركية في قبول طلبيات صغيرة ومخصصة لتجار التجزئة المستقلين.\n\n2. **الصين (المرتبة الثانية):**\nحلت الصين في المركز الثاني بإجمالي 33.728 مليون دولار وبحصة سوقية بلغت 19.84%. وتسيطر الصين أساسًا على فئات الملابس الاقتصادية الشعبية، والملابس المصنرة المصنوعة من الألياف الاصطناعية (البوليستر والنايلون)، والطلبيات الكمية الكبرى الموجهة لشرائح الدخل المحدود في المحافظات والمناطق الشعبية.\n\n3. **بنغلاديش (المرتبة الثالثة):**\nبلغت واردات لبنان من بنغلاديش 13.654 مليون دولار (8.03%)، وتتركز أغلب هذه الواردات في طلبيات التيشيرتات القطنية الأساسية (Basics) والملابس المنزلية الموردة لصالح امتيازات الماركات العالمية العاملة في لبنان.\n\n4. **الموردون الآخرون وموقع مصر:**\nجاءت سوريا رابعة بقيمة 7.878 مليون دولار (4.63%) مستفيدة من القرب الجغرافي والحدود البرية، تليها إيطاليا في المركز الخامس بقيمة 4.734 مليون دولار (2.78%) للمصنرات الفاخرة، ثم الهند (3.576 مليون دولار - 2.10%) والمغرب والبرتغال وكمبوديا وفيتنام. أما مصر، فجاءت في الترتيب الرابع عشر بإجمالي 1.330 مليون دولار فقط وبحصة سوقية لا تتعدى 0.78%، مما يعكس ضعف الاستغلال التصديري للميزات التنافسية المصرية حتى الآن.",
      "contentEn": "The $170.02M HS61 knitted market in 2023 reveals intense supplier concentration:\n1. Turkish Market Dominance (Rank #1): Turkey captured an overwhelming $78.776M USD (46.33% market share). Anchored by the extensive physical store footprint of Turkish retail chains (LC Waikiki, Defacto, Koton) and agile fast-fashion replenishment from Mersin and Istanbul.\n2. China (Rank #2): Supplying $33.728M USD (19.84% share), focusing on mass-market synthetic blends and budget apparel.\n3. Bangladesh (Rank #3): Reaching $13.654M USD (8.03%), focused on high-volume basic T-shirts and loungewear for international brands.\n4. Other Exporters & Egypt's Position: Syria ranked 4th ($7.88M, 4.63%), followed by Italy ($4.73M, 2.78%), India ($3.58M), Morocco, Portugal, Cambodia, and Vietnam. Egypt ranked 14th with only $1.330M USD (0.78% share), demonstrating severe under-penetration and massive growth potential."
    },
    {
      "id": "sec-lb-hs62-suppliers-profile",
      "titleAr": "5. الخريطة التنافسية لموردي الملابس المنسوجة (HS62) إلى لبنان",
      "titleEn": "5. HS62 Woven Apparel Supplier Breakdown & Strategic Positioning",
      "contentAr": "بلغ إجمالي واردات لبنان من الملابس المنسوجة (HS62) نحو 157.804 مليون دولار في عام 2023، وتوزعت الحصص السوقية بين كبار الموردين على النحو التالي:\n\n1. **الصين في الصدارة (المرتبة الأولى):**\nتصدرت الصين واردات الملابس المنسوجة بقيمة 43.573 مليون دولار وبحصة سوقية بلغت 27.61%. ويعود تفوق الصين إلى قدرتها العالية على توريد الملابس الخارجية الثقيلة، والسترات الشتوية المقاومة للماء، والمعاطف، وملابس العمل المنسوجة، وبنطلونات الجينز الاقتصادية بأسعار لا تقبل المنافسة.\n\n2. **تركيا (المرتبة الثانية):**\nجاءت تركيا ثانيًا بقيمة 26.412 مليون دولار وحصة سوقية بلغت 16.74%، مركزة على القمصان المنسوجة الفاخرة للرجال، والبدلات الرسمية، وفساتين السيدات، وملابس العمل المتخصصة.\n\n3. **بنغلاديش وإيطاليا والمغرب:**\nاحتلت بنغلاديش المركز الثالث بقيمة 15.604 مليون دولار (9.89%) مع تركيز مكثف على بنطلونات الدنيم والجينز القطني. وجاءت إيطاليا رابعة بقيمة 13.848 مليون دولار (8.78%) ممثلة الأزياء الراقية والبدلات المصممة لبيوت الأزياء في بيروت. بينما حل المغرب خامسًا بقيمة 9.472 مليون دولار (6.00%) كمورد لشبكات الفاست فاشن الأوروبية (مثل مجموعة إنديتكس / زارا ومانغو).\n\n4. **حصص الهند وكمبوديا ومصر:**\nسجلت الهند 6.307 مليون دولار (4.00%) تليها كمبوديا (5.972 مليون دولار - 3.78%) وفيتنام وباكستان والبرتغال وتونس. وجاءت مصر في الترتيب الخامس عشر بإجمالي 1.393 مليون دولار وبحصة سوقية بلغت 0.88%، وهو رقم يعكس فجوة تسويقية كبرى، خصوصًا في قطاعات القمصان المنسوجة وبنطلونات الجينز وملابس العمل التي تتمتع فيها المصانع المصرية بإمكانيات إنتاجية ضخمة.",
      "contentEn": "Lebanon's $157.804M woven apparel imports (HS62) in 2023 demonstrated a diversified competitive structure:\n1. China (Rank #1): Dominated with $43.573M USD (27.61% share), supplying heavy outerwear, rainwear, jackets, synthetic trousers, and low-cost denim.\n2. Turkey (Rank #2): Supplied $26.412M USD (16.74%), excelling in men's formal dress shirts, tailored suits, dresses, and fashion-forward woven collections.\n3. Bangladesh, Italy & Morocco: Bangladesh ranked 3rd with $15.604M (9.89%) driven by denim trousers. Italy captured 4th with $13.848M (8.78%) powering luxury boutiques in Downtown Beirut. Morocco held 5th with $9.472M (6.00%) servicing European fast-fashion franchise distribution.\n4. Egypt's Market Standing: Ranked 15th with $1.393M USD (0.88% market share), highlighting uncaptured commercial demand in woven shirts, denim, and institutional uniforms."
    },
    {
      "id": "sec-lb-us-guide-macro-series",
      "titleAr": "6. قراءة تحليلية معمقة لبيانات U.S. Commercial Guide (2022-2025)",
      "titleEn": "6. Deep Dive into U.S. Commercial Guide Broader Market Estimates",
      "contentAr": "يقدم تقرير الدليل التجاري الأمريكي (U.S. Commercial Guide) السنوي الصادر عن وزارة التجارة الأمريكية رؤية كلية متممة تصف البيئة التشغيلية الأوسع لصناعة وتجارة الملابس في لبنان:\n\n1. **ضعف وتراجع الإنتاج المحلي (Domestic Production Deficit):**\nيقدر التقرير حجم الإنتاج المحلي الإجمالي للملابس في لبنان بنحو 57 مليون دولار في عام 2022، وتراجع ليستقر عند نحو 51 مليون دولار سنويًا خلال الأعوام 2023 و 2024 و 2025. وتؤكد تقارير الخبراء الميدانيين أن الإنتاج المحلي يعاني من معوقات هيكلية قاسية، تشمل ارتفاع تكاليف الكهرباء والمحروقات للمصانع، والاعتماد الكامل على استيراد الأقمشة والغزول ومستلزمات الإنتاج من الخارج، وضعف التمويل المصرفي؛ الأمر الذي يجعل المصانع المحلية عاجزة عن تلبية أكثر من 10% فقط من إجمالي طلب السوق المحلي، مما يحول لبنان إلى سوق استيرادي بامتياز.\n\n2. **طبيعة الصادرات اللبنانية (Niche Haute Couture Exports):**\nتتراوح الصادرات اللبنانية من الملابس بين 45 إلى 55 مليون دولار سنويًا، وتتركز بصورة شبه حصرية في قطاع الأزياء الراقية (Haute Couture) وفساتين الأعراس والسهرة للمصممين اللبنانيين العالميين (مثل إيلي صعب، زهير مراد، ريم عكرا وغيرهم)، وهي منتجات فاخرة تصدر للخليج وأوروبا ولا تنافس الملابس الجاهزة واليومية الموجهة للاستهلاك العام.\n\n3. **حجم السوق الكلي والواردات الموسعة:**\nتتأرجح الواردات الكلية الموسعة في السلسلة الأمريكية بين 579 مليون دولار (2022) و 666 مليون دولار (2023) لتستقر عند 634 مليون دولار في 2024 و 2025. وبخصم الصادرات وإضافة الإنتاج المحلي، يبلغ حجم السوق الاستهلاكي نحو 531 مليون دولار، مما يؤكد أن السوق اللبناني يمتلك عمقًا استهلاكيًا يفوق بكثير ما تعكسه واردات الملابس الجمركية المباشرة بمفردها، ويوفر بيئة مثالية للمنتجات المصرية القادرة على الحلول محل الموردين الأتراك والآسيويين.",
      "contentEn": "The annual U.S. Commercial Guide from the U.S. Department of Commerce provides a comprehensive macroeconomic context for Lebanon's apparel sector:\n1. Severe Domestic Production Deficit: Domestic garment manufacturing fell from $57M in 2022 to settle at $51M annually across 2023-2025. Facing soaring energy tariffs, lack of industrial credit, and full reliance on imported fabrics, local production meets only ~10% of market demand, cementing an overwhelming 90% import dependency.\n2. Niche Luxury Export Profile: Total exports ($45M-$55M annually) are almost entirely dominated by high-end Haute Couture and bridal wear by world-renowned Lebanese designers, which do not compete with volume ready-to-wear garments.\n3. Expanded Consumption Volume: Broader apparel imports fluctuate between $634M and $666M, supporting a total domestic market size of $531M. This confirms deep underlying consumer demand accessible to Egyptian manufacturers offering fast replenishment."
    },
    {
      "id": "sec-lb-egypt-bilateral-trade",
      "titleAr": "7. واقع التجارة الثنائية بين مصر ولبنان وفرص النمو الهيكلي",
      "titleEn": "7. Egypt-Lebanon Bilateral Apparel Trade & Expansion Headroom",
      "contentAr": "تاريخيًا، ارتبطت جمهورية مصر العربية والجمهورية اللبنانية بعلاقات تجارية وثقافية واقتصادية بالغة القوة والرسوخ. وتتمتع المنتجات المصرية، وخاصة المنسوجات والقطنيات، بسمعة استثنائية وثقة عريضة لدى المستهلك والتاجر اللبناني الذي يرتبط وجدانيًا بجودة 'القطن المصري طويل التيلة'.\n\nومع ذلك، تكشف الأرقام الجمركية لعام 2023 مفارقة تجارية صارخة:\n- إجمالي صادرات الملابس المصرية إلى لبنان: **2.723 مليون دولار فقط**.\n- الملابس المصنرة (HS61): **1.330 مليون دولار** (حصة 0.78% مقابل 78.78 مليون لتركيا).\n- الملابس المنسوجة (HS62): **1.393 مليون دولار** (حصة 0.88% مقابل 43.57 مليون للصين و26.41 مليون لتركيا).\n\nهذه الحصة الإجمالية الهزيلة (0.83%) لا تعكس بأي حال من الأحوال القدرات الإنتاجية الحقيقية لقطاع الملابس المصري، ولا تتناسب مع المزايا التنافسية الهائلة التي تتفوق بها مصر على موردي السوق الرئيسيين:\n1. **زمن الشحن:** تتفوق مصر بفارق زمني حاسم (2-4 أيام بحرًا من الإسكندرية إلى بيروت) مقارنة بالصين والهند وفيتنام وبنغلاديش (25-35 يومًا).\n2. **المعاملة الجمركية:** تتمتع مصر بإعفاء كامل 0% رسوم عبر اتفاقية GAFTA، بينما تخضع البضائع الصينية والآسيوية لرسوم جمركية تتراوح بين 5% إلى 20%.\n3. **القدرة على تصنيع الدفعات المرنة:** تستطيع مصانع مجموعة سامي بن عضاد تلبية طلبيات تتراوح بين 5,000 إلى 25,000 قطعة بتشطيبات أوروبية وسرعة تسليم غير مسبوقة، وهو النموذج الأكثر ملاءمة لطبيعة تجارة التجزئة في لبنان الراهن.\nإن رفع حصة مصر من 0.83% إلى 5.0% فقط يعني إضافة أكثر من 16.3 مليون دولار لصادرات الملابس المصرية سنويًا، وهو هدف استراتيجي واقعي وقابل للتحقيق لمجموعة سامي بن عضاد.",
      "contentEn": "Historically, Egypt and Lebanon have maintained deep cultural and commercial ties, with Egyptian long-staple cotton enjoying exceptional brand equity among Lebanese consumers.\nHowever, 2023 customs trade data exposes a striking bilateral gap:\n- Total Egyptian Apparel Exports to Lebanon: Only $2.723M USD.\n- HS61 Knitted: $1.330M (0.78% share vs $78.78M for Turkey).\n- HS62 Woven: $1.393M (0.88% share vs $43.57M for China and $26.41M for Turkey).\nThis combined 0.83% market share leaves an enormous unexploited commercial vacuum. Egypt possesses unmatched structural advantages:\n1. Transit Speed: 2-4 days direct short-sea transit vs 25-35 days from Asia.\n2. Zero Customs Duty: Full 0% GAFTA exemption vs 5%-20% MFN tariffs on Asian apparel.\n3. Flexible Production Batches: Scalable batch sizes (5,000 to 25,000 pcs) aligning precisely with the risk appetite of Lebanese retailers. Scaling Egypt's share to 5.0% unlocks over $16.3M in annual export value."
    },
    {
      "id": "sec-lb-trade-agreements-tariffs",
      "titleAr": "8. الاتفاقيات التجارية والتعرفة الجمركية وضريبة القيمة المضافة (VAT)",
      "titleEn": "8. Trade Agreements, Tariff Architecture & VAT Regimes",
      "contentAr": "تحدد السياسة الجمركية والضريبية اللبنانية تكلفة وصول البضائع والميزة السعرية التنافسية وفق القواعد التالية:\n\n1. **اتفاقية تيسير وتنمية التبادل التجاري بين الدول العربية (GAFTA):**\nتمثل الركيزة الجمركية الأساسية للصادرات المصرية إلى لبنان. تمنح الاتفاقية إعفاءً جمركيًا كاملًا بنسبة 0% (صفر جمارك) على كافة بنود الملابس الجاهزة والمنسوجات التابعة للفصلين 61 و 62، شريطة إرفاق شهادة المنشأ العربية المعتمدة، وتحقيق معيار المنشأ العربي الوطني بنسبة قيمة مضافة محلية لا تقل عن 40%. يوفر هذا الإعفاء لمجموعة سامي بن عضاد وفرًا سعريًا فوريًا يتراوح بين 5% إلى 20% مقارنة بالمنافسين الآسيويين.\n\n2. **التحقق من الرسوم التعاقدية عبر نظام ASYCUDA الجمركي:**\nتعتمد الجمارك اللبنانية نظام أتمتة الجمارك العالمي (ASYCUDA / نظام نجمة). وتختلف الرسوم الجمركية للدول غير المعفاة (MFN) حسب البند التعريفي الدقيق؛ حيث تسجل بعض بنود المصنرات الأساسية رسومًا بنسبة 5%، بينما ترتفع في بنود الأقمشة والملابس المنسوجة والجاهزة الأخرى إلى 10% و 15% وتصل إلى 20% في بنود محددة. وتؤكد منهجية دراستنا وجوب مراجعة كل كود سداسي أو ثماني مباشرة عبر منصة الجمارك اللبنانية قبل إتمام الشحن.\n\n3. **الاتفاقية الثنائية اللبنانية المصرية وملاحظة الاستثناءات التاريخية:**\nوقعت مصر ولبنان اتفاقية تجارية ثنائية لتعزيز التبادل؛ إلا أن بعض بروتوكولاتها التاريخية شهدت إدراج قوائم سلبية واستثناءات موسمية لبعض بنود النسيج بهدف حماية المشاغل الحرفية اللبنانية. ولذلك، فإن الممارسة التجارية المستقرة والمعتمدة لدى كبار المخلصين الجمركيين في بيروت هي الاستناد دومًا إلى مظلة اتفاقية GAFTA متعددة الأطراف، والتي تضمن دخول الملابس المصرية بإعفاء جمركي تام دون أي عوائق.\n\n4. **ضريبة القيمة المضافة (Value Added Tax - VAT):**\nتفرض وزارة المالية اللبنانية ضريبة قيمة مضافة بنسبة موحدة تبلغ 11.0% على كافة السلع المستوردة والمباعة محليًا. تُحصّل الضريبة في الميناء عند التخليص الجمركي على أساس القيمة الإجمالية (CIF + الرسوم الجمركية). ولا تمثل هذه الضريبة عبئًا على المصدر المصري، حيث يقوم المستورد اللبناني المسجل ضريبيًا بدفعها وتمريرها في فاتورة البيع النهائي للمستهلك واسترداد مدخلاتها ضريبيًا.",
      "contentEn": "Lebanon's customs tariff and taxation framework establishes a definitive structural pricing advantage for Egyptian manufacturers:\n1. GAFTA Free Trade Agreement: Egyptian apparel enters Lebanon at 0% customs duty under the Greater Arab Free Trade Area, provided shipments carry an approved Arab Certificate of Origin satisfying >=40% local value addition. This creates an immediate 5%-20% duty shield against Asian competitors.\n2. ASYCUDA Customs Architecture: Lebanese customs operate via the ASYCUDA / NAJM system. MFN tariffs on non-exempt apparel vary from 5% on basic knits to 10%-20% on tailored woven garments. Each HS-6 code must be validated individually against ASYCUDA schedules.\n3. Bilateral Pact vs GAFTA Execution: While historical Egypt-Lebanon bilateral pacts maintained sensitive textile negative lists, standard commercial clearance in Beirut routes exclusively through the multilateral GAFTA framework, ensuring unobstructed duty-free clearance.\n4. Value Added Tax (VAT): A flat 11.0% VAT is levied at customs clearance on CIF value (+ duty). VAT is payable by the Lebanese importer and claimed through standard input tax mechanisms, exerting zero adverse cost on FOB/CIF export quotations."
    },
    {
      "id": "sec-lb-libnor-standards-labeling",
      "titleAr": "9. المواصفات القياسية اللبنانية (LIBNOR) واشتراطات بطاقة البيان",
      "titleEn": "9. Regulatory Compliance, LIBNOR Standards & Product Labeling",
      "contentAr": "تتولى مؤسسة المقاييس والمواصفات اللبنانية (LIBNOR) التابعة لوزارة الصناعة إصدار وتطبيق المواصفات القياسية الإلزامية الخاصة بالملابس والمنسوجات لحماية المستهلك وضمان جودة الواردات:\n\n1. **المواصفة الإلزامية لبطاقة البيان النسيجي (Labeling Standard NL 38):**\nتشترط المواصفة القياسية اللبنانية تثبيت بطاقة بيان قماشية محاكة بصورة دائمة وثابتة على كل قطعة ملابس مستوردة، ويحظر استخدام الملصقات الورقية أو التثبيت المؤقت. ويجب أن تتضمن البطاقة البيانات التالية بوضوح لا يقبل اللبس:\n- **بلد المنشأ الصريح:** عبارة 'صنع في مصر' أو 'Made in Egypt' بحجم خط واضح.\n- **نسبة تركيب الألياف النسيجية:** ذكر النسب المئوية الدقيقة لمكونات القماش باللغة العربية أو الفرنسية أو الإنجليزية (مثال: 100% قطن / 100% Cotton / 100% Coton، أو 95% قطن و 5% إيلاستين).\n- **تعليمات الغسيل والعناية:** الرموز الدولية المعيارية للعناية بالملابس (درجة حرارة الغسيل، شروط الكي، التنظيف الجاف، استخدام المبيضات).\n- **اسم العلامة التجارية والشركة المصنعة:** وتحديد المقاس وفق المقاييس الأوروبية (S, M, L, XL أو المقاسات الرقمية 38, 40, 42).\n\n2. **السلامة الكيميائية والبيئية (NL 112 والمعايير الدولية):**\nتفرض السلطات اللبنانية فحصًا صارمًا للحدود القصوى للمواد الكيميائية في أقمشة الملابس، وتشمل:\n- الحظر التام لمركبات صبغات الآزو (Azo Dyes) المسرطنة والأمينات العطرية الممنوعة دوليًا.\n- حدود صارمة لنسب الفورمالديهايد الحرة، خصوصًا في ملابس الأطفال وحديثي الولادة (أقل من 20 جزء في المليون).\n- اختبارات ثبات الألوان ضد الغسيل، والتعرق، والاحتكاك الجاف والرطب، ومقاومة الوبر والتكوير (Pilling Resistance).\n\n3. **إجراءات الفحص والتحليل المخبري في الموانئ:**\nتخضع الشحنات الواردة لرقابة مصلحة الجمارك بالتنسيق مع معهد البحوث الصناعية اللبناني (Industrial Research Institute - IRI). يتم سحب عينات عشوائية للتأكد من مطابقة نسبة الألياف المذكورة على البطاقة للواقع المخبري. وتوفر شهادات الاعتماد الدولية المرافقة لشحنات سامي بن عضاد (مثل OEKO-TEX Standard 100 وشهادات الفحص من مصلحة الكيمياء المصرية) مسارًا أخضر سريعًا للتخليص الجمركي دون تأخير.",
      "contentEn": "The Lebanese Standards Institution (LIBNOR) enforces rigorous product compliance standards on imported textiles and apparel:\n1. Compulsory Labeling Standard (NL 38): Every imported garment must feature a permanently stitched fabric care and composition label. Paper stickers or hangtags alone are strictly prohibited. Labels must clearly state:\n- Country of origin ('Made in Egypt' / 'صنع في مصر').\n- Exact fiber composition percentages in Arabic, French, or English (e.g., '100% Cotton' / '95% Cotton, 5% Elastane').\n- International care symbols (washing temp, ironing, bleaching, dry cleaning).\n- Registered brand name and European sizing designations.\n2. Chemical Safety & Eco-Parameters: Complete prohibition of carcinogenic azo dyes, strict thresholds for free formaldehyde (<20 ppm for infant wear), and certified colorfastness against washing, perspiration, and friction.\n3. Port Inspection & Testing Protocols: Samples are subject to verification by the Industrial Research Institute (IRI). SBA Group's pre-certified OEKO-TEX Standard 100 documentation expedites customs clearance and bypasses costly demurrage."
    },
    {
      "id": "sec-lb-logistics-supply-chain",
      "titleAr": "10. سلاسل الإمداد ومسارات الشحن البحري والجوي من مصر إلى لبنان",
      "titleEn": "10. Logistics Architecture, Maritime Corridors & Port Infrastructure",
      "contentAr": "يمثل الموقع الجغرافي المتقارب بين مصر ولبنان عبر الحوض الشرقي للبحر الأبيض المتوسط ميزة تنافسية حاسمة لا يمكن للمنافسين في آسيا والشرق الأقصى مجاراتها:\n\n1. **المسار البحري السريع للحاويات (Short-Sea Container Shipping):**\n- **موانئ الشحن المصرية:** الإسكندرية، الدخيلة، دمياط، بورسعيد (شرق وغرب).\n- **الميناء اللبناني المستهدف:** مرفأ بيروت (Port of Beirut) - المرفأ التجاري الأول في لبنان الذي يستقبل أكثر من 75% من إجمالي واردات البلاد، ومرفأ طرابلس كميناء بديل لخدمة مناطق الشمال والبقاع.\n- **زمن الإبحار المباشر (Port-to-Port Transit Time):** من 2 إلى 4 أيام إبحار فقط؛ حيث تسير الخطوط الملاحية الإقليمية (مثل MSC, CMA CGM, Tarros, Arkas, Medkon) رحلات منتظمة ومباشرة بين السواحل المصرية واللبنانية على مدار الأسبوع.\n- **تكلفة الشحن:** تتراوح نولون الحاوية 40 قدم الجافة (Dry Van) بين 1,200 إلى 1,800 دولار، وهو ما يجعل تكلفة شحن القطعة الواحدة من الملابس تتراوح بين 0.07 إلى 0.18 دولار فقط، مما يعزز هوامش الربحية التنافسية.\n\n2. **الشحن الجوي التكميلي السريع (Air Cargo):**\n- **مسار الرحلات:** من قرية البضائع بمطار القاهرة الدولي (CAI) إلى مطار رفيق الحريري الدولي ببيروت (BEY) عبر رحلات مصر للطيران والخطوط الجوية اللبنانية (طيران الشرق الأوسط - MEA).\n- **زمن الوصول:** من 24 إلى 48 ساعة فقط شاملة الشحن والتخليص السريع.\n- **الاستخدامات التشغيلية:** نقل عينات المبيعات والاعتماد (Pre-production Samples)، طلبيات الكبسولة الفائقة، وتغطية نقص المخزون الطارئ في مواسم الأعياد وذروة الطلب السياحي.\n\n3. **إجراءات التخليص الجمركي والنقل البري الداخلي:**\nيتم التخليص الجمركي في محطة حاويات مرفأ بيروت خلال 48 إلى 72 ساعة من وصول الباخرة عند اكتمال المستندات الإلكترونية المسبقة. ويتم نقل البضائع بريًا عبر شاحنات مقفلة إلى مستودعات كبار التجار والمستوردين في مناطق المكلس، سد البوشرية، الحازمية، والشويفات وضواحي بيروت والمحافظات بسهولة وأمان.",
      "contentEn": "The geographical proximity of Egypt and Lebanon across the Eastern Mediterranean basin creates an unbeatable logistical moat:\n1. Direct Short-Sea Maritime Corridor:\n- Departure Ports: Alexandria, Damietta, and Port Said.\n- Arrival Ports: Port of Beirut (handling >75% of national volume) and Port of Tripoli.\n- Transit Time: 2 to 4 sailing days via established container carriers (MSC, CMA CGM, Tarros, Arkas).\n- Ocean Freight Economics: $1,200-$1,800 per 40ft container, translating to a negligible freight cost of $0.07-$0.18 per garment.\n2. Air Freight Capabilities: Daily flights between Cairo (CAI) and Beirut Rafic Hariri International Airport (BEY) via EgyptAir and MEA provide 24-48 hour delivery for marketing samples, urgent capsule replenishments, and high-margin peak season items.\n3. Terminal Handling & Domestic Haulage: Rapid 48-72 hour customs release at Beirut Container Terminal under pre-cleared electronic manifests, followed by secure truck delivery to central warehousing hubs in Mkalles, Bouchrieh, and Hazmieh."
    },
    {
      "id": "sec-lb-sba-target-categories",
      "titleAr": "11. محفظة المنتجات المستهدفة لمجموعة سامي بن عضاد في لبنان",
      "titleEn": "11. SBA Target Product Portfolios & Manufacturing Alignment",
      "contentAr": "استنادًا إلى بيانات الاستيراد وفجوات العرض في السوق اللبناني، حددت مجموعة سامي بن عضاد خمس فئات إنتاجية ذات أولوية قصوى:\n\n1. **التيشيرتات والبولو القطنية المحبوكة (HS 6109.10 / 6105.10):**\n- **حجم الطلب:** تستهلك السوق اللبنانية تيشيرتات وبولو مستوردة بأكثر من 42.5 مليون دولار سنويًا.\n- **المواصفات المستهدفة:** تيشيرتات قطن 100% مصري ممشط (Combed Cotton)، أوزان قماش تتراوح بين 160 إلى 220 جم/م²، قمصان بولو بياقات محاكة بدقة، وثبات ألوان عالي ومقاومة للتمدد بعد الغسيل المتكرر.\n- **التوجيه التسويقي:** توريد برامج العلامة الخاصة (Private Label) لسلاسل متاجر التجزئة ومحلات الأزياء الشبابية في بيروت.\n\n2. **ملابس الرضع وحديثي الولادة والأطفال (HS 6111.20 / 6209.20):**\n- **حجم الطلب:** نحو 26.8 مليون دولار سنويًا، مع حساسية بالغة من الأمهات اللبنانيات تجاه نعومة وأمان أقمشة الأطفال.\n- **المواصفات المستهدفة:** ملابس قطنية عضوية 100% خالية تمامًا من المواد الكيميائية الضارة، أزرار كبس خالية من النيكل، خياطة مسطحة تمنع تهيج بشرة الرضيع، وتصاميم أوروبية أنيقة وجذابة.\n- **التوجيه التسويقي:** شبكات متاجر الأطفال المتخصصة (مثل Orchestra Prémaman و Nakhlé SAL) والصيدليات الكبرى.\n\n3. **الملابس الداخلية والمنزلية والبيجامات (HS 6107 / 6108):**\n- **حجم الطلب:** يتجاوز 34.2 مليون دولار سنويًا.\n- **المواصفات المستهدفة:** ملابس داخلية قطنية رجالية ونسائية تمنح راحة فائقة، ملابس نوم وبيجامات بأقمشة قطن لايكرا ناعمة وأطقم روب منزلية راقية.\n- **التوجيه التسويقي:** تجار الجملة في شارع البسطة والمصيطبة وكبرى المتاجر المستقلة.\n\n4. **السويتشيرتات والهوديز والملابس الرياضية (HS 6110.20):**\n- **حجم الطلب:** 31.4 مليون دولار سنويًا؛ فئة سريعة النمو مدفوعة بنمط حياة الشباب والجامعات وثقافة ملابس الشارع (Streetwear) في بيروت.\n- **المواصفات المستهدفة:** خامات ميلتون قطنية ثقيلة (Fleece) مبطنة بالوبر الناعم (Brushed Fleece) بوزن 280-340 جم/م² مع خياطة مزدوجة متينة.\n\n5. **ملابس العمل والزي الموحد للمؤسسات (HS 6203 / 6204):**\n- **حجم الطلب:** 18.6 مليون دولار سنويًا؛ يشمل الزي الموحد لقطاعات الضيافة والفنادق والمستشفيات والشركات اللبنانية.\n- **المواصفات المستهدفة:** أقمشة قطن/بوليستر متينة (Gabardine & Twill) معالجة بمقاومة البقع والتجاعيد وسهولة الكي.",
      "contentEn": "Aligning production with Lebanese consumption patterns, SBA Group targets five high-margin core categories:\n1. Cotton T-shirts & Polo Shirts (HS 6109.10 / 6105.10): Market size ~$42.5M. Focus on 100% combed Egyptian cotton (160-220 gsm), anti-shrink finishes, and private label programs for fashion retailers.\n2. Babywear & Children's Clothing (HS 6111 / 6209): Market size ~$26.8M. Focus on OEKO-TEX certified 100% hypoallergenic organic cotton, nickel-free snaps, and ergonomic seams for infant comfort.\n3. Loungewear, Underwear & Sleepwear (HS 6107 / 6108): Market size ~$34.2M. Capitalizes on the enduring heritage and trust of Egyptian cotton undergarments and cotton-elastane sleep sets.\n4. Heavy Fleece Sweatshirts & Hoodies (HS 6110.20): Market size ~$31.4M. Premium brushed fleece (280-340 gsm) serving Beirut's dynamic streetwear and university demographic.\n5. Institutional Uniforms & Workwear (HS 6203 / 6204): Market size ~$18.6M. High-durability poly-cotton twill with stain-resistant coatings for hospital, hospitality, and corporate contracts."
    },
    {
      "id": "sec-lb-commercial-buyers-directory",
      "titleAr": "12. خريطة ودليل المشترين والمستوردين التجاريين في لبنان",
      "titleEn": "12. Strategic Commercial Buyer & Retailer Directory in Lebanon",
      "contentAr": "تضم الخريطة التجارية اللبنانية شبكة من المجموعات العائلية والمؤسسات التجارية الكبرى التي تدير عمليات الاستيراد والتجزئة:\n\n1. **المجموعات الكبرى وشركات الامتياز الدولي (Franchise & Retail Giants):**\n- **Retail Group Lebanon (تأسست عام 2001):** تعد إحدى أضخم مجموعات تجزئة الأزياء في لبنان؛ تدير أكثر من 100 متجر تجزئة تمثل 13 علامة تجارية عالمية مرموقة. مقرها الرئيسي في جديدة المتن (جبل لبنان)، وتتواصل عبر info@retailgrp.com وهاتف +961 1 884 770. تمثل هدفًا رئيسيًا لتوريد برامج العلامات الخاصة (Private Label) والملابس الأساسية.\n- **National Retailers Group SAL (NRG):** تدير شبكة امتياز علامة LC Waikiki التركية الشهيرة في مختلف محافظات لبنان، وتبحث دومًا عن خطوط توريد تكميلية للأساسيات القطنية السريعة.\n- **Maxima Fashion SAL:** الشركة المشغلة لوكالة مانغو (Mango) في لبنان ولديها فروع عملاقة في أسواق ABC الأشرفية وABC ضبية ووسط بيروت وطرابلس.\n\n2. **بيوت الأزياء والمستوردون المتخصصون:**\n- **Gruppo Moda SAL:** متخصصة في الأزياء الإيطالية والأوروبية الراقية والملابس الكاجوال في بيروت الكبرى.\n- **Tag Privé SAL و Straight SAL و Jeans Couture SAL:** مجموعات تجارية تدير سلاسل محلات أزياء شبابية وكاجوال في المراكز التجارية الكبرى.\n\n3. **كبار تجار الجملة وموزعو المحافظات:**\n- **Badr Co. for General Trade:** كبرى شركات استيراد الملابس الجاهزة والأقمشة بالجملة في منطقة المصيطبة، وتغذي مئات المحلات المستقلة في بيروت والبقاع والشمال.\n- **Serbey Brothers:** مستوردو جملة تاريخيون للمصنرات والملابس المنزلية والقطنيات في بيروت.\n- **Ets. Nakhlé SAL:** إحدى أعرق الشركات المتخصصة في استيراد وتوزيع ملابس الأطفال والأزياء العائلية بجبل لبنان وكسروان.\n\n4. **تكتلات الزي الموحد والمؤسسات المهنية:**\n- **Gamco (General Apparel & Manufacturing Co.):** متخصصة في توريد وتصنيع الملابس الجاهزة والزي الموحد للمؤسسات.\n- **Lattouf Safety & Uniform:** كبرى مؤسسات توريد اليونيفورم ومعدات العمل المتخصصة.\n- **جمعية تجار ومستوردي الألبسة الجاهزة في لبنان:** الشريك المؤسسي والتنظيمي الأول في غرفة بيروت وجبل لبنان لبناء التحالفات وعقد اجتماعات التوفيق التجاري (B2B Matchmaking).",
      "contentEn": "The Lebanese commercial buyer ecosystem is characterized by structured retail conglomerates and wholesale distribution hubs:\n1. Premier Retail Groups & Franchise Operators:\n- Retail Group Lebanon: Established in 2001, operating over 100 retail outlets across 13 international apparel brands. HQ in Jdeidet El Metn (Tel: +961 1 884 770, info@retailgrp.com). Primary target for private-label basic apparel and high-volume replenishment.\n- National Retailers Group SAL (NRG): Franchise operator of LC Waikiki in Lebanon.\n- Maxima Fashion SAL: Franchise operator for Mango in Lebanon (Beirut, ABC Malls, Tripoli).\n2. Specialized Boutiques & Modern Chains: Gruppo Moda SAL, Tag Privé SAL, Straight SAL, and Jeans Couture SAL.\n3. Major Wholesale Distributors: Badr Co. for General Trade (Mousseitbeh wholesale hub), Serbey Brothers, and Ets. Nakhlé SAL (childrenswear and family apparel specialist in Keserwan).\n4. Institutional Workwear & Industry Bodies: Gamco, Lattouf Safety & Uniform, and the Lebanese Apparel and Footwear Importers Association (Chamber of Commerce of Beirut and Mount Lebanon)."
    },
    {
      "id": "sec-lb-financial-risk-mitigation",
      "titleAr": "13. بروتوكول إدارة المخاطر المالية والنقدية وشروط الائتمان الصارمة",
      "titleEn": "13. Financial Risk Management Protocol & Credit Control Policy",
      "contentAr": "نظرًا للتحديات النقدية والقيود المصرفية التي يمر بها لبنان منذ عام 2019، تلزم مجموعة سامي بن عضاد كافة قطاعاتها التصديرية بتطبيق بروتوكول مالي وقانوني صارم لا تهاون فيه لحماية رأس المال والتدفقات النقدية:\n\n1. **حظر التعامل بأي ائتمان مفتوح (Strict Zero Open-Credit Policy):**\nيُحظر تمامًا شحن أي بضائع إلى السوق اللبناني بنظام الحساب المفتوح (Open Account) أو بآجال سداد غير مضمونة، بغض النظر عن حجم المشتري أو تاريخ العلاقة التجارية.\n\n2. **هيكل الدفع والتحصيل الإلزامي:**\n- **الدفعة المقدمة النقدية (Advance Cash Deposit):** اشتراط سداد دفعة نقدية مقدمة تتراوح بين 30% إلى 50% من إجمالي قيمة أمر الشراء (PO) كشرط لازم لبدء عمليات القص والتصنيع وتخصيص الطاقة الإنتاجية.\n- **سداد الرصيد المتبقي (Balance Payment):** يُسدد الرصيد المتبقي (50% إلى 70%) بالكامل نقدًا قبل الإفراج عن بوالص الشحن الأصلية؛ إما عبر التحويل البنكي الفوري عند استلام صور مستندات الشحن البنكية (Cash Against Documents - CAD عبر بنك معتمد)، أو عبر خطاب اعتماد مستندي معزز غير قابل للإلغاء (Confirmed Irrevocable LC) صادر من بنك دولي من الدرجة الأولى (Tier-1 Bank) في قبرص أو دبي أو سويسرا.\n\n3. **حصرية السداد بالدولار الخارجي (Fresh USD Only):**\nيجب أن ينص العقد التجاري صراحة على أن جميع الالتزامات المالية تسدد حصرًا بالدولار الأمريكي الخارجي المحول عبر نظام سويفت (Fresh USD Wire Transfer). ويُمنع منعًا باتًا قبول الشيكات المصرفية المسحوبة على بنوك لبنانية محلية أو أي حوالات من أرصدة مصرفية قديمة.\n\n4. **التحري التجاري والائتماني (KYC Due Diligence):**\nإجراء فحص دقيق وشامل لكافة الشركاء والمشترين اللبنانيين، والتحقق من حساباتهم المصرفية الفعالة في الخارج، والتأكد من قدرتهم على التخليص الجمركي الفوري لتفادي أي غرامات تأخير للحاويات (Demurrage) في مرفأ بيروت.",
      "contentEn": "In light of Lebanon's banking restructuring and liquidity constraints, SBA Group mandates a comprehensive and non-negotiable financial risk protocol:\n1. Strict Zero Open-Credit Policy: Zero unsecured commercial credit or open-account shipments under any circumstances.\n2. Structured Payment Architecture:\n- Non-refundable Advance Cash Deposit: 30% to 50% paid via outward international bank wire prior to production kickoff.\n- Final Balance Settlement: Remaining 50% to 70% paid against scanned copies of shipping documents (CAD via recognized international bank) or covered under a 100% Confirmed Irrevocable Letter of Credit issued or confirmed by a Tier-1 international bank in Cyprus, Dubai, or Europe prior to releasing original Bills of Lading.\n3. Fresh USD Strict Requirement: All commercial contracts explicitly mandate settlement exclusively via international Fresh USD SWIFT wires. Local banker's checks or legacy bank accounts are strictly prohibited.\n4. Comprehensive Due Diligence (KYC): Thorough vetting of importer liquidity, offshore operational accounts, and proven clearance capabilities at the Port of Beirut to prevent port demurrage."
    },
    {
      "id": "sec-lb-landed-cost-pricing",
      "titleAr": "14. سيناريوهات التسعير وتكاليف الوصول CIF وهوامش الربحية",
      "titleEn": "14. Landed Cost Pricing Scenarios & Importer Profitability Models",
      "contentAr": "يوضح التحليل المالي لسعر الوصول إلى مرفأ بيروت (CIF Beirut) الميزة التنافسية الاستثنائية التي تقدمها مجموعة سامي بن عضاد للمستوردين اللبنانيين مقارنة بالمصادر التركية والآسيوية (نموذج تيشيرتات وبولو قطنية فاخرة):\n\n1. **السيناريو الأول (طلبية كبسولة أولى - 10,000 قطعة):**\n- سعر التسليم من المصنع بمصر (FOB): 3.85$ للقطعة.\n- نولون الشحن البحري والتأمين للقطعة: 0.18$.\n- تكلفة الوصول CIF مرفأ بيروت: 4.03$.\n- الرسوم الجمركية اللبنانية (GAFTA): 0.00$ (إعفاء كامل 0%).\n- التخليص والمناولة والنقل الداخلي: 0.14$.\n- إجمالي التكلفة الواصلة للمستورد (Landed Cost): 4.17$ للقطعة.\n- سعر بيع الجملة المقترح في بيروت: 6.50$ (هامش ربح إجمالي للمستورد: 35.8%).\n\n2. **السيناريو الثاني (طلبية متوسطة - 25,000 قطعة):**\n- سعر التسليم FOB: 3.60$.\n- الشحن والتأمين CIF: 0.12$.\n- تكلفة الوصول CIF: 3.72$.\n- الجمارك: 0.00$ (إعفاء كامل).\n- التخليص والمناولة: 0.10$.\n- التكلفة الواصلة للمستورد: 3.82$.\n- سعر الجملة المقترح: 6.00$ (هامش ربح المستورد: 36.3%).\n\n3. **السيناريو الثالث (طلبية كبرى - 50,000 قطعة):**\n- سعر التسليم FOB: 3.35$.\n- الشحن والتأمين CIF: 0.09$.\n- تكلفة الوصول CIF: 3.44$.\n- التكلفة الواصلة للمستورد: 3.51$.\n- سعر الجملة المقترح: 5.60$ (هامش ربح المستورد: 37.3%).\n\n4. **السيناريو الرابع (طلبية عقود سنوية - 100,000 قطعة):**\n- سعر التسليم FOB: 3.15$.\n- الشحن والتأمين CIF: 0.07$.\n- تكلفة الوصول CIF: 3.22$.\n- التكلفة الواصلة للمستورد: 3.27$.\n- سعر الجملة المقترح: 5.25$ (هامش ربح المستورد: 37.7%).\n\nتكشف هذه السيناريوهات أن المنتج المصري يمنح التاجر اللبناني هامش ربح إجمالي يتجاوز 35% نقدًا بالدولار، متفوقًا على البضائع التركية التي تفرض أسعار FOB أعلى وتكاليف نقل بري باهظة، ومحققًا سرعة دوران رأس مال فائقة بفضل وصول الشحنات في غضون 4 أيام.",
      "contentEn": "Financial landed-cost modeling for CIF Beirut Port demonstrates SBA Group's commercial edge over Turkish and Asian suppliers for high-grade cotton polo shirts and T-shirts:\n1. Scenario A (Capsule Order - 10,000 pcs): FOB $3.85 | Freight & Insurance $0.18 | CIF Beirut $4.03 | Customs (GAFTA) $0.00 | Handling & Clearance $0.14 | Total Landed Cost $4.17 | Wholesale Price in Beirut $6.50 | Importer Gross Margin: 35.8%.\n2. Scenario B (Medium Volume - 25,000 pcs): FOB $3.60 | Freight $0.12 | CIF Beirut $3.72 | Customs $0.00 | Handling $0.10 | Landed Cost $3.82 | Wholesale Price $6.00 | Importer Gross Margin: 36.3%.\n3. Scenario C (High Volume - 50,000 pcs): FOB $3.35 | Freight $0.09 | CIF Beirut $3.44 | Customs $0.00 | Handling $0.07 | Landed Cost $3.51 | Wholesale Price $5.60 | Importer Gross Margin: 37.3%.\n4. Scenario D (Annual Contract - 100,000 pcs): FOB $3.15 | Freight $0.07 | CIF Beirut $3.22 | Customs $0.00 | Handling $0.05 | Landed Cost $3.27 | Wholesale Price $5.25 | Importer Gross Margin: 37.7%.\nThese economics demonstrate that Lebanese importers achieve consistent 35%-37% gross margins in cash Fresh USD, outperforming Turkish suppliers burdened by higher production overheads."
    },
    {
      "id": "sec-lb-opportunity-scorecard",
      "titleAr": "15. مصفوفة تقييم جاذبية السوق اللبناني (SBA Opportunity Scorecard)",
      "titleEn": "15. Lebanon Market Opportunity Scorecard (76/100 - Tier 2)",
      "contentAr": "استنادًا إلى نموذج التقييم السباعي المعياري لمجموعة سامي بن عضاد المعتمد في دراسات الأسواق الدولية، نال السوق اللبناني مجموع نقاط مرجح بلغ 76 من 100، وجاء تفصيل الأوزان والأبعاد على النحو التالي:\n\n1. **حجم الطلب الاستيرادي ومعدل النمو (Import Demand - الوزن: 20%):**\n- الدرجة المحققة: 74 / 100 | النقاط المرجحة: 14.80.\n- التقييم: واردات ملابس تتجاوز 327 مليون دولار وسوق كلي بـ 531 مليون دولار مع اعتماد كامل على الاستيراد يغطي 90% من استهلاك البلاد.\n\n2. **الموقع التنافسي الحالي للصادرات المصرية (Egyptian Supplier Baseline - الوزن: 15%):**\n- الدرجة المحققة: 68 / 100 | النقاط المرجحة: 10.20.\n- التقييم: حصة حالية ضئيلة (2.72 مليون دولار - 0.83%) تمثل مساحة توسع ضخمة للغاية مع وجود قبول تاريخي وشغف شعبي بجودة القطن المصري.\n\n3. **ملاءمة المحفظة الإنتاجية للمجموعة (Product Portfolio Fit - الوزن: 20%):**\n- الدرجة المحققة: 88 / 100 | النقاط المرجحة: 17.60.\n- التقييم: تطابق استثنائي مع طاقات مصانع سامي بن عضاد في التيشيرتات والبولو وملابس الأطفال والملابس المنزلية وأزياء العمل.\n\n4. **كثافة المنافسة السعرية والبدائل (Competitive Intensity - الوزن: 15%):**\n- الدرجة المحققة: 65 / 100 | النقاط المرجحة: 9.75.\n- التقييم: هيمنة تركية قوية في التريكو (46%) وصينية في المنسوج (27%)، ولكن يمكن اختراقهما بالميزة السعرية الجمركية وسرعة الإمداد.\n\n5. **الوصول اللوجستي وكفاءة سلاسل الإمداد (Logistics Accessibility - الوزن: 10%):**\n- الدرجة المحققة: 88 / 100 | النقاط المرجحة: 8.80.\n- التقييم: ميزة لوجستية مطلقة؛ 2 إلى 4 أيام إبحار فقط من موانئ مصر إلى مرفأ بيروت مع رحلات أسبوعية متعددة وخطوط طيران يومية.\n\n6. **البيئة التنظيمية والتعرفة الجمركية (Regulatory & Customs Framework - الوزن: 10%):**\n- الدرجة المحققة: 72 / 100 | النقاط المرجحة: 7.20.\n- التقييم: إعفاء جمركي كامل 0% عبر اتفاقية GAFTA، مع وضوح اشتراطات بطاقة البيان LIBNOR وضريبة VAT موحدة 11%.\n\n7. **سهولة الوصول للمشترين والموثوقية الائتمانية (Buyer Accessibility & Trust - الوزن: 10%):**\n- الدرجة المحققة: 75 / 100 | النقاط المرجحة: 7.50.\n- التقييم: قنوات تواصل مباشرة وسلسة مع بيوت التجارة اللبنانية، وقدرة على التحصيل بالدولار النقدي Fresh USD مع تطبيق سياسة الدفعة المقدمة الصارمة.\n\n**المجموع الإجمالي النهائي: 76 / 100**\n**التصنيف المعتمد: المستوى الثاني – فرصة مرتفعة (Tier 2 – High Opportunity)**\n**الترتيب الإقليمي: الترتيب الثاني (#2) في أسواق بلاد الشام بعد المملكة الأردنية الهاشمية.**",
      "contentEn": "Applying SBA Group's 7-dimensional weighted analytical model, Lebanon achieves a score of 76/100 (Tier 2 - High Opportunity):\n1. Import Demand & Market Scale (20% Weight): Score 74/100 -> Weighted 14.80. Robust $327.8M customs apparel baseline and 90% import reliance.\n2. Egyptian Supplier Baseline (15% Weight): Score 68/100 -> Weighted 10.20. Modest 0.83% baseline ($2.72M) provides immense headroom supported by premium Egyptian cotton equity.\n3. Product Portfolio Compatibility (20% Weight): Score 88/100 -> Weighted 17.60. Superb alignment with SBA core competencies in circular knits, babywear, loungewear, and uniforms.\n4. Competitive Intensity (15% Weight): Score 65/100 -> Weighted 9.75. Heavy Turkish and Chinese presence is mitigated by Egyptian tariff exemptions and short-sea agility.\n5. Logistics & Supply Chain Accessibility (10% Weight): Score 88/100 -> Weighted 8.80. Unrivaled 2-4 day maritime transit from Egyptian Mediterranean ports.\n6. Regulatory & Tariff Environment (10% Weight): Score 72/100 -> Weighted 7.20. Full 0% duty under GAFTA combined with clear LIBNOR labeling standards.\n7. Buyer Accessibility & Credit Risk Control (10% Weight): Score 75/100 -> Weighted 7.50. Commercial dollarization and direct buyer access balanced by mandatory 30%-50% upfront deposits.\nTotal Weighted Score: 76 / 100 | Classification: Tier 2 - High Opportunity | Regional Rank: #2 in Levant Markets."
    },
    {
      "id": "sec-lb-roadmap-execution",
      "titleAr": "16. خطة الدخول والتنفيذ الميداني خلال 90 يومًا (Action Roadmap)",
      "titleEn": "16. 90-Day Market Entry & Commercial Execution Roadmap",
      "contentAr": "وضعت مجموعة سامي بن عضاد خارطة طريق تنفيذية محكمة مقسمة إلى أربع مراحل زمنية متتابعة لتحقيق اختراق تجاري ملموس في السوق اللبناني:\n\n- **المرحلة الأولى (الأيام 1 إلى 20) - التجهيز الفني ومطابقة العينات:**\n  1. إعداد كاتالوج المنتجات الرقمي المخصص للسوق اللبناني بالدولار الأمريكي الصريح.\n  2. تصنيع عينات مبيعات معتمدة لخطوط البولو، التيشيرتات، ملابس الأطفال، والملابس المنزلية مطابقة لمواصفات بطاقة البيان اللبنانية (LIBNOR NL 38).\n  3. إصدار شهادات الفحص المعملي لثبات الألوان والسلامة البيئية (OEKO-TEX).\n\n- **المرحلة الثانية (الأيام 21 إلى 45) - استهداف المشترين والتفاوض التجاري:**\n  1. إرسال حقائب العينات الفيزيائية عبر الشحن الجوي السريع إلى مسؤولي المشتريات في كبرى المجموعات اللبنانية (Retail Group, Maxima, NRG, Badr Co.).\n  2. عقد اجتماعات عمل ثنائية افتراضية وترتيب زيارات تجارية لوفد مبيعات المجموعة لبيروت للقاء مجلس إدارة جمعية تجار ومستوردي الملابس.\n  3. تقديم عروض الأسعار CIF مرفأ بيروت متضمنة سيناريوهات الكميات المرنة.\n\n- **المرحلة الثالثة (الأيام 46 إلى 65) - التعاقد والتحصيل المالي:**\n  1. صياغة واعتماد عقود التوريد المتوافقة مع بروتوكول المخاطر المالية.\n  2. تحصيل الدفعات المقدمة النقدية (30%-50%) عبر تحويلات برقية خارجية Fresh USD بحسابات بنكية دولية.\n  3. إدخال أوامر الشراء لخطوط الإنتاج في مصانع المجموعة مع جدولة زمنية دقيقة للتسليم.\n\n- **المرحلة الرابعة (الأيام 66 إلى 90) - الشحن والتخليص والتوسع:**\n  1. إتمام الإنتاج والتغليف النهائي وفق المعايير الأوروبية وإصدار شهادة المنشأ GAFTA.\n  2. حجز وشحن الحاويات الأولى بحرًا من الإسكندرية/دمياط إلى مرفأ بيروت (زمن إبحار 3 أيام).\n  3. متابعة الإفراج الجمركي مع مخلص المشتري اللبناني بنسبة 0% رسوم، وسداد الرصيد المتبقي قبل تسليم بوالص الشحن الأصلية.\n  4. قياس سرعة بيع وتوزيع البضائع في المتاجر وإطلاق خطة طلبيات التكرار الموسمي (Repeat Orders).",
      "contentEn": "A structured 90-day execution roadmap ensures systematic commercial penetration:\n- Phase 1 (Days 1-20) - Technical Preparation & Sample Certification: Compile export catalog in Fresh USD, manufacture certified production samples complying with LIBNOR NL 38 labeling, and secure OEKO-TEX laboratory test reports.\n- Phase 2 (Days 21-45) - Buyer Outreach & Commercial Negotiations: Dispatch physical sample kits via air express to key procurement directors (Retail Group, NRG, Maxima, Badr Co.), conduct virtual and in-person B2B meetings in Beirut, and present flexible CIF Beirut pricing tiers.\n- Phase 3 (Days 46-65) - Contract Execution & Financial Settlements: Finalize export contracts, secure 30%-50% advance cash deposits via international Fresh USD SWIFT wires, and release production orders into SBA factories.\n- Phase 4 (Days 66-90) - Production, Shipping, Customs Clearance & Reorders: Complete manufacturing, issue certified GAFTA Arab Certificates of Origin, dispatch initial containers from Alexandria/Damietta to Port of Beirut (3 days sailing), verify duty-free clearance, collect balance payments, and review retail sell-through rates to initiate seasonal repeat orders."
    },
    {
      "id": "sec-lb-faq-strategic",
      "titleAr": "17. الأسئلة الشائعة حول التصدير والاستثمار في سوق الملابس اللبناني",
      "titleEn": "17. Frequently Asked Questions (FAQ) - Lebanon Apparel Market",
      "contentAr": "**س1: كيف تتعامل مجموعة سامي بن عضاد مع أزمة القطاع المصرفي اللبناني واحتجاز الودائع؟**\nج: تطبق المجموعة سياسة مالية غير قابلة للتفاوض تقضي بحظر التعامل بالشيكات أو الحسابات المصرفية المحلية القديمة داخل لبنان. وتلزم كافة المشترين بسداد دفعات مقدمة (30%-50%) بالدولار الخارجي (Fresh USD) عبر تحويل بنكي دولي (SWIFT) من حسابات خارجية أو حسابات Fresh USD قادرة على التحويل الخارجي، وسداد الرصيد نقدًا قبل تسليم أصول مستندات الشحن.\n\n**س2: ما هي الميزة السعرية الحقيقية للملابس المصرية أمام المنافسة الصينية والتركية في لبنان؟**\nج: تتمتع الملابس المصرية بإعفاء جمركي كامل 0% رسوم عبر اتفاقية GAFTA، في حين يدفع المستورد اللبناني للبضائع الصينية والآسيوية رسومًا جمركية تتراوح بين 5% إلى 20%. يضاف إلى ذلك القرب البحري لمصر (3 أيام شحن بحري بتكلفة لا تتجاوز 0.10$ للقطعة)، مقابل 30 يومًا للصين وتكاليف شحن بري باهظة لتركيا.\n\n**س3: هل تتطلب صادرات الملابس إلى لبنان أي تصديقات خاصة على الفواتير أو شهادات المنشأ؟**\nج: نعم، يتطلب التخليص الجمركي بموجب اتفاقية GAFTA إرفاق شهادة منشأ عربية موحدة معتمدة من الغرفة التجارية المصرية ومصدقة من وزارة التجارة والصناعة، مع إثبات نسبة قيمة مضافة محلية لا تقل عن 40%. كما يجب أن تتطابق بطاقة البيان مع مواصفة LIBNOR NL 38 بحياكة عبارة 'صنع في مصر' بوضوح على كل قطعة.\n\n**س4: ما هي قنوات التوزيع الأكثر ملاءمة للملابس المصرية في لبنان حاليًا؟**\nج: القنوات الأكثر فاعلية تنقسم إلى مسارين: الأول هو التوريد المباشر لسلاسل متاجر التجزئة ومجموعات الامتياز (Private Label) مثل Retail Group Lebanon ومحلات الفاست فاشن، والثاني هو بيع الحاويات المباشرة لكبار تجار وموزعي الجملة في مناطق بيروت المركزية (المصيطبة والبسطة) الذين يغذون آلاف المحلات المستقلة في المحافظات.",
      "contentEn": "Q1: How does SBA Group navigate Lebanon's banking crisis and frozen domestic deposits?\nA: SBA enforces a strict, non-negotiable policy barring local banker's checks or legacy domestic accounts. All transactions require a 30%-50% advance deposit paid via international SWIFT Fresh USD wires, with the remaining balance settled in full prior to original shipping document release.\n\nQ2: What is Egypt's verified pricing advantage over Chinese and Turkish competitors in Lebanon?\nA: Egyptian garments enter at 0% customs duty under GAFTA, while Chinese and non-exempt goods face 5% to 20% tariffs. Combined with a 2-4 day short-sea transit time (freight ~$0.10/pc) versus 30 days from China, SBA provides Lebanese buyers with superior landed cost margins and rapid working capital turnover.\n\nQ3: What documentation is mandatory for duty-free clearance in Lebanon?\nA: Shipments require a GAFTA Arab Certificate of Origin certified by the Egyptian Chamber of Commerce verifying >=40% local value addition, commercial invoice, packing list, and permanent fabric care labels compliant with LIBNOR standard NL 38 bearing 'Made in Egypt'.\n\nQ4: What are the most viable commercial channels for Egyptian apparel in Lebanon?\nA: A dual-track strategy: (1) Private label contract manufacturing for structured fashion retail groups (e.g., Retail Group Lebanon), and (2) Volume container distribution to established wholesale hubs in Beirut (Mousseitbeh) serving independent regional boutiques."
    },
    {
      "id": "sec-lb-sources-disclaimers",
      "titleAr": "18. المصادر والمراجع المعتمدة وإخلاء المسؤولية المنهجي والقانوني",
      "titleEn": "18. Official Sources, References & Methodological Disclaimers",
      "contentAr": "**المصادر الإحصائية والمراجع الرسمية المعتمدة:**\n1. قاعدة بيانات البنك الدولي للحلول المتكاملة للتجارة (World Bank WITS) - تقارير تجارة لبنان (HS61 و HS62) لعام 2023.\n2. شعبة الإحصاءات التجارية بالأمم المتحدة (UN Comtrade Database) - بيانات الاستيراد والشراكة الثنائية للبنان لعام 2023.\n3. إدارة التجارة الدولية بالحكومة الأمريكية (U.S. International Trade Administration) - الدليل التجاري الأمريكي للبنان (U.S. Commercial Guide: Lebanon - Textiles & Apparel 2023-2024).\n4. المجلس الأعلى للجمارك والمديرية العامة للجمارك اللبنانية - جدول التعرفة الجمركية المتكامل ونظام نجمة (ASYCUDA).\n5. وزارة المالية اللبنانية - مديرية الضريبة على القيمة المضافة (قوانين وإجراءات TVA).\n6. مؤسسة المقاييس والمواصفات اللبنانية (LIBNOR) - المواصفات القياسية الإلزامية للملابس وبطاقة البيان (NL 38).\n7. غرفة التجارة والصناعة والزراعة في بيروت وجبل لبنان (CCIAB) - دليل كبرى الشركات المستوردة وبيانات قطاع النسيج.\n8. جمعية تجار ومستوردي الألبسة الجاهزة في لبنان - التقارير القطاعية ومسوح الأسواق.\n9. الهيئة العامة للرقابة على الصادرات والواردات المصرية (GOEIC) ومصلحة الجمارك المصرية.\n10. الخطوط الملاحية المنتظمة لشرق المتوسط (MSC, CMA CGM, Tarros Lines).\n\n**إخلاء المسؤولية المنهجي والقانوني الصارم:**\nأُعدت هذه الدراسة الاستراتيجية بواسطة قطاع بحوث الأسواق الدولية بمجموعة سامي بن عضاد لأغراض التخطيط التجاري والاستثماري وتوجيه العمليات التصديرية للمجموعة وشركائها. وعلى الرغم من بذل أقصى درجات التدقيق والتحقق المتقاطع لضمان صحة البيانات الإحصائية وقت النشر، فإن الأوضاع النقدية واللوجستية والتشريعية في الجمهورية اللبنانية تتسم بالحركية والتغير؛ وعليه، فإن أي تعاقدات تصديرية فعلية يجب أن تخضع للتحقق الميداني اللحظي المسبق من أسعار الصرف، والرسوم الجمركية عبر نظام ASYCUDA، والملاءة الائتمانية للمشتري عبر الشروط المالية الإلزامية لمجموعة سامي بن عضاد.",
      "contentEn": "Official Sources & Verified References:\n1. World Bank WITS (World Integrated Trade Solution) - Lebanon Apparel Customs Data (HS61 & HS62), 2023.\n2. United Nations UN Comtrade Database - Importer Reported Customs Statistics for Lebanon, 2023.\n3. U.S. International Trade Administration - U.S. Commercial Guide: Lebanon (Apparel & Textiles 2023-2024).\n4. Lebanese Higher Council of Customs & General Directorate of Customs - ASYCUDA Tariff Schedules.\n5. Lebanese Ministry of Finance - Value Added Tax Directorate (TVA Regulations).\n6. Lebanese Standards Institution (LIBNOR) - Compulsory Labeling Standard NL 38 & Textile Safety.\n7. Chamber of Commerce, Industry and Agriculture of Beirut and Mount Lebanon (CCIAB).\n8. Lebanese Apparel and Footwear Importers Association - Sectoral Market Reports.\n9. Egypt GOEIC & Egyptian Customs Authority.\n10. Eastern Mediterranean Shipping Lines (MSC, CMA CGM, Tarros).\n\nMethodological & Legal Disclaimer:\nThis strategic market study was prepared by the International Market Research Division of Sami Bin Ayyad Group for internal commercial planning and export execution. While rigorous diligence was exercised to ensure data fidelity at the time of publication, macroeconomic, monetary, and regulatory conditions in Lebanon remain subject to rapid change. Commercial execution requires real-time validation of ASYCUDA tariff codes, logistics schedules, and mandatory adherence to SBA Group's Fresh USD financial risk protocols."
    }
  ],
  "comparisonMetrics": [
    {
      "metricId": "metric-apparel-imports",
      "labelAr": "إجمالي واردات الملابس الرسمية (HS61+HS62)",
      "labelEn": "Verified Apparel Imports (HS61+HS62)",
      "valueDisplay": "327.8M USD",
      "comparisonValue": 327.8,
      "benchmarkAr": "الأردن: 772M$ · السعودية: 4.3B$ · الإمارات: 4.1B$",
      "benchmarkEn": "Jordan: $772M · KSA: $4.3B · UAE: $4.1B"
    },
    {
      "metricId": "metric-egypt-share",
      "labelAr": "الحصة السوقية الحالية لصادرات مصر",
      "labelEn": "Current Egyptian Market Share",
      "valueDisplay": "0.83% (2.72M USD)",
      "comparisonValue": 0.83,
      "benchmarkAr": "الأردن: 1.15% · السعودية: 1.54% · الكويت: 0.77%",
      "benchmarkEn": "Jordan: 1.15% · KSA: 1.54% · Kuwait: 0.77%"
    },
    {
      "metricId": "metric-transit-days",
      "labelAr": "زمن الشحن البحري من الموانئ المصرية",
      "labelEn": "Maritime Transit Time from Egypt",
      "valueDisplay": "2 - 4 أيام إبحار",
      "comparisonValue": 3,
      "benchmarkAr": "الأردن (العقبة): 2-4 أيام · جدة: 3-5 أيام · الخليج العربي: 12-16 يومًا",
      "benchmarkEn": "Jordan (Aqaba): 2-4 days · Jeddah: 3-5 days · Arabian Gulf: 12-16 days"
    },
    {
      "metricId": "metric-customs-tariff",
      "labelAr": "المعاملة الجمركية للبضائع المصرية",
      "labelEn": "Customs Duty Treatment for Egypt",
      "valueDisplay": "0% معفى (GAFTA)",
      "comparisonValue": 0,
      "benchmarkAr": "إعفاء كامل 0% مقابل 5%-20% للمنافسين من خارج الدول العربية",
      "benchmarkEn": "Full 0% exemption vs 5%-20% for non-Arab competitors"
    },
    {
      "metricId": "metric-market-score",
      "labelAr": "درجة جاذبية السوق (SBA Score)",
      "labelEn": "Market Attractiveness Score",
      "valueDisplay": "76 / 100",
      "comparisonValue": 76,
      "benchmarkAr": "الأردن: 79 · البحرين: 78 · عُمان: 77 · قطر: 80",
      "benchmarkEn": "Jordan: 79 · Bahrain: 78 · Oman: 77 · Qatar: 80"
    }
  ],
  "sources": [
    {
      "id": "src-wits-2023",
      "titleAr": "قاعدة بيانات البنك الدولي للحلول المتكاملة للتجارة (World Bank WITS) لعام 2023",
      "titleEn": "World Bank WITS Customs Trade Database (Lebanon 2023)",
      "url": "https://wits.worldbank.org",
      "organizationAr": "البنك الدولي وشعبة الإحصاء بالأمم المتحدة",
      "organizationEn": "World Bank & United Nations Statistics Division",
      "publicationYear": "2023"
    },
    {
      "id": "src-us-guide-2024",
      "titleAr": "الدليل التجاري الأمريكي لقطاع النسيج والملابس في لبنان (U.S. Commercial Guide)",
      "titleEn": "U.S. Commercial Guide: Lebanon - Textiles & Apparel (2023-2024)",
      "url": "https://www.trade.gov/country-commercial-guides/lebanon-textiles-and-apparel",
      "organizationAr": "إدارة التجارة الدولية - وزارة التجارة الأمريكية",
      "organizationEn": "International Trade Administration - U.S. Department of Commerce",
      "publicationYear": "2024"
    },
    {
      "id": "src-lebanese-customs",
      "titleAr": "المجلس الأعلى للجمارك والمديرية العامة للجمارك اللبنانية (ASYCUDA / NAJM)",
      "titleEn": "Lebanese Customs Administration Tariff Schedules",
      "url": "http://www.customs.gov.lb",
      "organizationAr": "وزارة المالية اللبنانية",
      "organizationEn": "Lebanese Ministry of Finance",
      "publicationYear": "2024"
    },
    {
      "id": "src-libnor-standards",
      "titleAr": "المواصفات القياسية اللبنانية الإلزامية للملابس وبطاقة البيان (LIBNOR NL 38)",
      "titleEn": "Lebanese Standards Institution (LIBNOR) Mandatory Standards",
      "url": "https://www.libnor.gov.lb",
      "organizationAr": "مؤسسة المقاييس والمواصفات اللبنانية - وزارة الصناعة",
      "organizationEn": "Lebanese Standards Institution - Ministry of Industry",
      "publicationYear": "2023"
    },
    {
      "id": "src-beirut-chamber",
      "titleAr": "غرفة التجارة والصناعة والزراعة في بيروت وجبل لبنان (CCIAB)",
      "titleEn": "Chamber of Commerce, Industry and Agriculture of Beirut and Mount Lebanon",
      "url": "https://www.ccib.org.lb",
      "organizationAr": "غرفة بيروت وجبل لبنان",
      "organizationEn": "CCIAB Lebanon",
      "publicationYear": "2024"
    }
  ],
  "groupOpportunities": [
    {
      "id": "opp-lb-private-label",
      "capabilityAr": "برامج التصنيع للعلامات الخاصة (Private Label) لسلاسل التجزئة اللبنانية",
      "capabilityEn": "Private Label Contract Manufacturing for Lebanese Retail Chains",
      "descriptionAr": "تصنيع وتوريد تشكيلات التيشيرتات والبولو والملابس المنزلية القطنية لسلاسل التجزئة الكبرى في بيروت (مثل Retail Group Lebanon و Maxima) بأسعار منافسة لتركيا وسرعة شحن بحري 3 أيام فقط.",
      "descriptionEn": "Contract manufacturing of cotton T-shirts, polo shirts, and homewear for major Lebanese fashion retail groups, delivering superior margins and 3-day short-sea replenishment.",
      "evidenceStatus": "confirmed",
      "evidenceReferenceAr": "واردات لبنان من المصنرات تبلغ 170M$ مع هيمنة تركية بـ 78.8M$ يمكن اختراقها بالميزة السعرية والجمركية (0% GAFTA)",
      "evidenceReferenceEn": "Lebanon imported $170M of knits with Turkey holding $78.8M, contestable via Egypt's 0% GAFTA tariff advantage",
      "sectorPageUrl": "/sectors/garment?tab=services"
    },
    {
      "id": "opp-lb-babywear",
      "capabilityAr": "توريد ملابس الأطفال والرضع القطنية الفاخرة المعتمدة بيئيًا",
      "capabilityEn": "Certified Organic Cotton Babywear & Children's Apparel Supply",
      "descriptionAr": "تزويد شبكات متاجر الأطفال والصيدليات الكبرى في لبنان بملابس رضع وأطفال مصنوعة من القطن المصري 100% وخالية من المواد الضارة مع شهادات OEKO-TEX Standard 100.",
      "descriptionEn": "Supplying premier Lebanese childrenswear chains with certified 100% Egyptian cotton infant apparel meeting stringent safety and eco-standards.",
      "evidenceStatus": "confirmed",
      "evidenceReferenceAr": "سوق ملابس أطفال يتجاوز 26.8M$ سنويًا في لبنان واعتماد شبه كامل على الاستيراد الخارجي",
      "evidenceReferenceEn": "Lebanese children's apparel import market exceeds $26.8M annually with high quality sensitivity",
      "sectorPageUrl": "/sectors/garment?tab=products"
    },
    {
      "id": "opp-lb-workwear",
      "capabilityAr": "توريد الزي الموحد وملابس العمل التخصصية للشركات والفنادق اللبنانية",
      "capabilityEn": "Institutional Uniforms & Professional Workwear Supply",
      "descriptionAr": "التعاقد مع كبرى المؤسسات والشركات والمستشفيات وسلاسل الضيافة في بيروت وجبل لبنان لتوريد اليونيفورم وملابس العمل المقاومة للاستهلاك اليومي.",
      "descriptionEn": "B2B supply contracts for durable, high-specification corporate, hospital, and hospitality uniforms across Greater Beirut.",
      "evidenceStatus": "confirmed",
      "evidenceReferenceAr": "سوق ملابس العمل والأطقم المنسوجة يسجل 18.6M$ سنويًا في لبنان مع تفوق تنافسي مصري في أقمشة الجبردين والبولي قطن",
      "evidenceReferenceEn": "Institutional woven apparel imports reach $18.6M annually where Egypt holds strong fabric manufacturing parity",
      "sectorPageUrl": "/sectors/garment?tab=services"
    }
  ]
};
