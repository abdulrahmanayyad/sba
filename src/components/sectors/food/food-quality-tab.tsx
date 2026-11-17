import { Link } from "@tanstack/react-router";
import {
  Award,
  CheckCircle2,
  FileCheck,
  FileText,
  Globe,
  Layers,
  Leaf,
  MapPin,
  Package,
  RotateCcw,
  Scale,
  Search,
  ShieldCheck,
  Sparkles,
  Truck,
  Droplets,
  AlertCircle,
  ClipboardCheck,
  Calendar,
  Building2,
  Wheat,
  Thermometer,
  Boxes,
  ScrollText,
  BadgeAlert,
  ArrowRight,
  ArrowUpRight,
  Info,
} from "lucide-react";
import { useState } from "react";

import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function SectionBadge({ title }: { title: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
      <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
      {title}
    </span>
  );
}

interface FoodQualityTabProps {
  ar: boolean;
}

export function FoodQualityTab({ ar }: FoodQualityTabProps) {
  // State for Section 05: Product Handling Category Switcher
  const [activeHandlingCategory, setActiveHandlingCategory] = useState<number>(0);

  // SECTION 02: 6 Quality Pillars
  const pillars = [
    {
      id: "source-selection",
      icon: MapPin,
      titleAr: "اختيار المصادر",
      titleEn: "Source Selection",
      descAr:
        "الاهتمام بمصدر المنتج ومعلومات المنشأ والمورد، ومراجعة مدى توافقه مع المواصفات المطلوبة قبل اعتماده ضمن سلسلة التوريد.",
      descEn:
        "Prioritizing product origin, provenance, and supplier background, auditing compliance against required specifications prior to approval in our supply chain.",
    },
    {
      id: "product-specifications",
      icon: Scale,
      titleAr: "مواصفات المنتجات",
      titleEn: "Product Specifications",
      descAr:
        "تحديد المواصفات الفنية والتجارية لكل منتج، بما يشمل النوع والجودة والخصائص الفيزيائية ومتطلبات العميل والسوق المستهدف.",
      descEn:
        "Formulating rigorous technical and commercial benchmarks per product, encompassing grade, variety, physical properties, customer criteria, and target market requirements.",
    },
    {
      id: "quality-inspection",
      icon: ClipboardCheck,
      titleAr: "فحص الجودة",
      titleEn: "Quality Inspection",
      descAr:
        "تطبيق إجراءات الفحص والتحقق المناسبة لطبيعة المنتج، وفق المواصفات المتفق عليها ومتطلبات التعاقد واللوائح ذات الصلة.",
      descEn:
        "Applying tailored inspection and verification protocols aligned with product nature, agreed contractual terms, and applicable statutory regulations.",
    },
    {
      id: "food-safety",
      icon: ShieldCheck,
      titleAr: "سلامة الغذاء",
      titleEn: "Food Safety",
      descAr:
        "مراعاة متطلبات سلامة الغذاء والنظافة والتداول الآمن، وتطبيق الضوابط المناسبة لطبيعة المنتجات والأنشطة التي تتم فعليًا.",
      descEn:
        "Upholding stringent hygiene, food safety, and sanitary handling standards, instituting operational controls suitable for handled categories and active commercial operations.",
    },
    {
      id: "packaging-storage",
      icon: Package,
      titleAr: "التعبئة والتخزين",
      titleEn: "Packaging & Storage",
      descAr:
        "الاهتمام بسلامة العبوات وملاءمتها للمنتج، وظروف التخزين والتداول التي تساعد على الحفاظ على الجودة خلال سلسلة الإمداد.",
      descEn:
        "Ensuring packaging integrity and suitability, maintaining calibrated storage and handling conditions to preserve product purity throughout transit.",
    },
    {
      id: "traceability",
      icon: Layers,
      titleAr: "التتبع والتوثيق",
      titleEn: "Traceability",
      descAr:
        "العمل على توفير معلومات واضحة عن مصدر المنتجات وبيانات التشغيل والتوريد والمستندات المرتبطة بها، وفق مستوى التتبع المتاح لكل منتج ومورد.",
      descEn:
        "Providing transparent documentation of product origin, lot/batch identification, supply pathways, and associated certifications within applicable traceability scopes.",
    },
  ];

  // SECTION 03: 6 Quality Control Stages
  const stages = [
    {
      step: 1,
      icon: Search,
      titleAr: "تقييم المورد",
      titleEn: "Supplier Assessment",
      descAr:
        "مراجعة السجل التجاري والتراخيص وبيانات المنشأ والمصداقية التشغيلية للمورد قبل بدء التعامل.",
      descEn:
        "Auditing commercial licenses, origin data, and operational credibility of prospective suppliers prior to commercial engagement.",
    },
    {
      step: 2,
      icon: MapPin,
      titleAr: "التحقق من المصدر",
      titleEn: "Source Verification",
      descAr:
        "التأكد من المنشأ الجغرافي الفعلي للمنتج وظروف الإنتاج والحصاد والبيئة المحيطة بسلسلة التوريد.",
      descEn:
        "Validating the authentic geographical origin, harvest parameters, and environmental integrity of the primary supply base.",
    },
    {
      step: 3,
      icon: Scale,
      titleAr: "مراجعة المواصفات",
      titleEn: "Specification Review",
      descAr:
        "مطابقة الخصائص الفيزيائية والكيميائية مع جداول المواصفات الفنية المعتمدة ومتطلبات التعاقد.",
      descEn:
        "Cross-referencing physical and chemical profiles against approved technical schedules and specific buyer contract covenants.",
    },
    {
      step: 4,
      icon: CheckCircle2,
      titleAr: "فحص المنتج",
      titleEn: "Product Inspection",
      descAr:
        "فحص العينات الظاهرية والتأكد من نقاء المنتج وخلوه من الشوائب ومطابقته للرتبة المتفق عليها.",
      descEn:
        "Conducting visual, physical, and sensory inspection of sample batches to verify purity, grade conformity, and cleanliness.",
    },
    {
      step: 5,
      icon: Boxes,
      titleAr: "مراجعة التعبئة والتخزين",
      titleEn: "Packaging & Storage Review",
      descAr:
        "التحقق من سلامة الأغلفة وملاءمتها للنقل التصديري وظروف الرطوبة والحرارة أثناء التخزين.",
      descEn:
        "Evaluating container barrier integrity, export shipping resilience, and calibrated storage ambient metrics.",
    },
    {
      step: 6,
      icon: FileCheck,
      titleAr: "مراجعة المستندات والتسليم",
      titleEn: "Documentation & Delivery",
      descAr:
        "تدقيق كامل حزمة المستندات الرسمية (المنشأ، الصحة، التحليل) وإتمام إجراءات الشحن والتسليم.",
      descEn:
        "Auditing the complete statutory export docket (Origin, Health, COA) and executing coordinated handover logistics.",
    },
  ];

  // SECTION 04: Food Safety 8 Topics
  const safetyTopics = [
    {
      icon: Sparkles,
      titleAr: "النظافة والتداول الصحي",
      titleEn: "Hygiene & Sanitary Handling",
      descAr:
        "اتباع بروتوكولات النظافة الصارمة وممارسات التداول النظيف لمنع أي تلوث عرضي للمنتجات الغذائية.",
      descEn:
        "Enforcing strict sanitation and hygienic handling protocols to prevent accidental contamination across food handling interfaces.",
    },
    {
      icon: Thermometer,
      titleAr: "ملاءمة ظروف التخزين",
      titleEn: "Optimal Storage & Climate Control",
      descAr:
        "مراعاة متطلبات التهوية ودرجات الحرارة ونسب الرطوبة الملائمة للحفاظ على جودة المنتجات دون تدهور.",
      descEn:
        "Calibrating ambient humidity, temperature, and ventilation thresholds to protect biological and chemical product stability.",
    },
    {
      icon: ShieldCheck,
      titleAr: "حماية المنتجات من التلوث",
      titleEn: "Contamination Prevention",
      descAr:
        "الفصل الفيزيائي للمنتجات والتحقق من نظافة الحاويات ومستودعات التخزين ومواد التغليف.",
      descEn:
        "Maintaining physical segregation, clean warehousing, sanitized conveyance containers, and inert packaging materials.",
    },
    {
      icon: Calendar,
      titleAr: "متابعة تواريخ الإنتاج والصلاحية",
      titleEn: "Shelf-Life & Expiry Monitoring",
      descAr:
        "متابعة دورية ودقيقة لبيانات الحصاد، وتواريخ الإنتاج، وفترات الصلاحية المقررة نظاماً.",
      descEn:
        "Rigorous verification of harvest dates, processing timetables, and statutory expiration windows on all batches.",
    },
    {
      icon: FileText,
      titleAr: "مراجعة بيانات العبوات والبطاقات",
      titleEn: "Labeling & Regulatory Data Verification",
      descAr:
        "التأكد من اكتمال ودقة البيانات التعريفية والقيم الغذائية واللغات المطلوبة بحسب كل سوق.",
      descEn:
        "Verifying clarity, compliance, nutritional declarations, and required languages on product labeling per market regulations.",
    },
    {
      icon: FileCheck,
      titleAr: "مراجعة المستندات والشهادات الصحية",
      titleEn: "Health & Sanitary Certificates Audit",
      descAr:
        "التحقق من صحة المستندات والشهادات الصادرة من الهيئات الرسمية المعنية قبل تنفيذ الشحن.",
      descEn:
        "Auditing health certificates, phytosanitary papers, and statutory inspection reports prior to dispatch.",
    },
    {
      icon: Globe,
      titleAr: "مراعاة الاشتراطات للدولة المستوردة",
      titleEn: "Destination Country Regulatory Compliance",
      descAr:
        "مراجعة معايير الهيئات الغذائية والدوائية في الدولة المستوردة لتفادي أي عوائق تنظيمية.",
      descEn:
        "Harmonizing product parameters with the food and drug authority regulations of the recipient nation.",
    },
    {
      icon: Building2,
      titleAr: "التعامل مع الموردين بضوابط السلامة",
      titleEn: "Supplier Safety Alignment",
      descAr:
        "اشتراط التزام الموردين بالقواعد والمعايير الصحية المعتمدة ومراجعة أدائهم التشغيلي باستمرار.",
      descEn:
        "Requiring suppliers to adhere strictly to recognized hygiene standards and reviewing operational execution continuously.",
    },
  ];

  // SECTION 05: Product Handling 4 Categories
  const handlingCategories = [
    {
      code: "A",
      icon: Wheat,
      nameAr: "المنتجات الزراعية",
      nameEn: "Agricultural Products",
      subtitleAr: "التمور، الأعشاب، المحاصيل والمواد النباتية المجففة",
      subtitleEn: "Dates, Herbs, Grains & Dried Botanical Produce",
      pointsAr: [
        "مراعاة طبيعة المحصول وموسم الحصاد.",
        "مراجعة حالة المنتج وفحص العينات عند الاستلام.",
        "الاهتمام بظروف التخزين والتهوية الطبيعية.",
        "مراعاة مستويات الرطوبة والحرارة المناسبة حسب صنف المنتج.",
        "مراجعة متطلبات التعبئة والتصدير وحماية الحبوب والثمار.",
      ],
      pointsEn: [
        "Factoring crop characteristics and seasonal harvest cycles.",
        "Inspecting intake condition and sample batches upon arrival.",
        "Maintaining calibrated ambient ventilation and dry storage.",
        "Regulating moisture thresholds and climate indicators per crop.",
        "Auditing export packaging and protective barriers against pests.",
      ],
    },
    {
      code: "B",
      icon: Leaf,
      nameAr: "المواد الخام الطبيعية",
      nameEn: "Natural Raw Materials",
      subtitleAr: "البذور، المستخلصات الخام، والمكونات الغذائية الأولية",
      subtitleEn: "Aromatic Seeds, Raw Botanicals & Primary Ingredients",
      pointsAr: [
        "التحقق من المصدر والمنشأ الجغرافي الفعلي.",
        "مراجعة النقاء والمواصفات وخلو الشحنة من الشوائب.",
        "التأكد من ملاءمة التعبئة المخصصة للمواد السائبة.",
        "مراجعة المستندات الفنية والتجارية المصاحبة للشحنة.",
      ],
      pointsEn: [
        "Verifying source provenance and authentic regional origin.",
        "Auditing physical purity, grading, and absence of foreign matter.",
        "Validating multi-ply bulk packaging resilience during freight.",
        "Reviewing technical specifications and commercial dockets.",
      ],
    },
    {
      code: "C",
      icon: Package,
      nameAr: "المنتجات الغذائية المصنعة",
      nameEn: "Processed Food Products",
      subtitleAr: "المعلبات، الخلطات المجهزة، والعسل المعبأ تجارياً",
      subtitleEn: "Canned Foods, Packaged Ingredients & Bottled Honey",
      pointsAr: [
        "مراجعة قائمة المكونات والتركيب ومطابقة المواصفات.",
        "متابعة تواريخ الإنتاج وفترات الصلاحية الرسمية.",
        "مراجعة دقة بيانات البطاقة الغذائية والتصنيعية.",
        "التحقق من متطلبات الحفظ والتخزين والتعامل مع الأغذية المعبأة.",
      ],
      pointsEn: [
        "Reviewing ingredient lists, formulations, and recipe compliance.",
        "Tracking precise production lot dates and expiration schedules.",
        "Verifying regulatory accuracy on commercial nutrition labels.",
        "Ensuring compliance with packaged storage and palletization rules.",
      ],
    },
    {
      code: "D",
      icon: Droplets,
      nameAr: "الزيوت والمستخلصات الطبيعية",
      nameEn: "Oils & Natural Extracts",
      subtitleAr: "زيت الزيتون البكر الممتاز والزيوت النباتية المعصورة",
      subtitleEn: "Extra Virgin Olive Oil & Cold-Pressed Botanical Oils",
      pointsAr: [
        "مراجعة نوع الزيت ودرجة الحموضة والخصائص الحسية.",
        "التحقق من العبوات المناسبة وحمايتها من الضوء والأكسدة.",
        "مراجعة بيانات المنتج ومصدر العصر والتشغيلة.",
        "مراعاة ظروف التخزين المظلم والحماية من العوامل المؤثرة على الجودة.",
      ],
      pointsEn: [
        "Auditing acidity levels, sensory profiles, and oil classification.",
        "Verifying dark/inert containers shielding against UV and oxidation.",
        "Validating mill origin, harvest batch, and press documentation.",
        "Maintaining temperature-controlled and shaded warehouse storage.",
      ],
    },
  ];

  // SECTION 06: Standards & Certifications
  const standards = [
    {
      code: "HACCP",
      nameAr: "نظام تحليل المخاطر ونقاط التحكم الحرجة",
      nameEn: "Hazard Analysis Critical Control Point",
      descAr:
        "نظام دولي معتمد يساعد على تحديد مخاطر سلامة الغذاء ومراقبتها والسيطرة عليها طوال مراحل الإنتاج والتداول.",
      descEn:
        "International systematic approach to food safety identification, risk evaluation, and critical control point monitoring.",
      scopeAr: "سلامة العمليات والإنتاج",
      scopeEn: "Processing & Handling Safety",
    },
    {
      code: "ISO 22000",
      nameAr: "نظام إدارة سلامة الغذاء",
      nameEn: "Food Safety Management System",
      descAr:
        "معيار دولي متكامل لإدارة سلامة الغذاء للمنشآت والمؤسسات العاملة ضمن مختلف مراحل السلسلة الغذائية.",
      descEn:
        "Global standard defining organizational requirements for food safety management across the entire food chain.",
      scopeAr: "سلاسل الإمداد الغذائي",
      scopeEn: "Global Food Supply Chains",
    },
    {
      code: "FSSC 22000",
      nameAr: "شهادة نظام سلامة الأغذية",
      nameEn: "Food Safety System Certification",
      descAr:
        "نظام اعتماد دولي رفيع لسلامة الغذاء مبني على مواصفة ISO 22000 والمتطلبات الفنية للبرامج التحضيرية (PRPs).",
      descEn:
        "Robust GFSI-recognized food safety certification scheme combining ISO 22000 and sector-specific PRPs.",
      scopeAr: "التصنيع والتعبئة الغذائية",
      scopeEn: "Packaging & Manufacturing",
    },
    {
      code: "ISO 9001",
      nameAr: "نظام إدارة الجودة الشاملة",
      nameEn: "Quality Management System",
      descAr:
        "الأساس الدولي المعتمد لضمان جودة العمليات الإدارية، وتوحيد الإجراءات، والتطوير المستمر لأداء المنظومة.",
      descEn:
        "The globally benchmarked framework for quality management, systematic process rigor, and operational consistency.",
      scopeAr: "الإدارة والعمليات المؤسسية",
      scopeEn: "Management & Operations",
    },
    {
      code: "GMP",
      nameAr: "ممارسات التصنيع الجيد",
      nameEn: "Good Manufacturing Practices",
      descAr:
        "مجموعة إرشادات وممارسات ملزمة تضمن إنتاج وتداول السلع الغذائية وفق معايير النظافة والجودة المعتمدة.",
      descEn:
        "Authoritative practices ensuring food commodities are consistently produced and controlled to verified quality standards.",
      scopeAr: "بيئة الإنتاج والتشغيل",
      scopeEn: "Manufacturing Environment",
    },
    {
      code: "Halal",
      nameAr: "شهادات الحلال الدولية",
      nameEn: "Halal Certification",
      descAr:
        "شهادة تثبت توافق المنتج ومكوناته وعمليات إنتاجه مع أحكام الشريعة الإسلامية ومتطلبات جهة الاعتماد في السوق المستهدف.",
      descEn:
        "Formal certification verifying that product formulations and processing comply fully with Islamic dietary and Halal laws.",
      scopeAr: "الأسواق الإسلامية والدولية",
      scopeEn: "Islamic & Global Markets",
    },
    {
      code: "Phytosanitary",
      nameAr: "شهادة الصحة النباتية",
      nameEn: "Phytosanitary Certificate",
      descAr:
        "شهادة رسمية تصدرها الجهات الزراعية والحجرية الحكومية تثبت خلو المنتجات النباتية والزراعية من الآفات والأمراض الحجرية.",
      descEn:
        "Official government document attesting that agricultural shipments are inspected and free from quarantine pests and diseases.",
      scopeAr: "المنتجات الزراعية والنباتية",
      scopeEn: "Agricultural Export Consignments",
    },
    {
      code: "COA",
      nameAr: "شهادة التحليل المخبري (COA)",
      nameEn: "Certificate of Analysis",
      descAr:
        "وثيقة فنية صادرة من مختبرات معتمدة توضح نتائج الاختبارات الفيزيائية والكيميائية والميكروبيولوجية لدفعة المنتج المحددة.",
      descEn:
        "Accredited laboratory report detailing exact physical, chemical, and microbiological test parameters for a specific production batch.",
      scopeAr: "اختبارات الدفعات والمطابقة",
      scopeEn: "Batch Testing & Compliance",
    },
  ];

  // SECTION 07: Traceability & Documentation
  const documents = [
    {
      icon: ScrollText,
      nameAr: "شهادة المنشأ",
      nameEn: "Certificate of Origin",
      descAr: "تثبت بلد المنشأ الحقيقي للمنتج وتصدر عن الغرف التجارية الرسمية.",
      descEn: "Attests to the verified origin nation of the consignment, issued by official Chambers.",
    },
    {
      icon: FileText,
      nameAr: "الفاتورة التجارية",
      nameEn: "Commercial Invoice",
      descAr: "بيان مالي وتجاري رسمي بالكميات والأسعار والمواصفات وشروط التعاقد (Incoterms).",
      descEn: "Legal commercial invoice enumerating descriptions, quantities, unit values, and Incoterms.",
    },
    {
      icon: Boxes,
      nameAr: "قائمة التعبئة التفصيلية",
      nameEn: "Packing List",
      descAr: "توضح عدد الطرود، والوزن الإجمالي والصافي، وأبعاد الحاويات وتوزيع الشحنة.",
      descEn: "Details package counts, gross/net weights, container cubic metrics, and pallet distribution.",
    },
    {
      icon: Leaf,
      nameAr: "شهادة الصحة النباتية",
      nameEn: "Phytosanitary Certificate",
      descAr: "إلزامية للمنتجات الزراعية والنباتية، تصدر عن الحجر الزراعي الحكومي المعتمد.",
      descEn: "Mandatory for agricultural exports, issued by accredited national quarantine agencies.",
    },
    {
      icon: ShieldCheck,
      nameAr: "الشهادة الصحية البيطرية/الغذائية",
      nameEn: "Health & Food Safety Certificate",
      descAr: "تثبت سلامة السلعة وصلاحيتها للاستهلاك البشري وفق اللوائح الصحية الرسمية.",
      descEn: "Confirms consignment fitness for human consumption in accordance with public health laws.",
    },
    {
      icon: FileCheck,
      nameAr: "شهادة التحليل الفني (COA)",
      nameEn: "Certificate of Analysis (COA)",
      descAr: "توضح تركيبة المنتج ونسبة الحموضة أو الرطوبة وخلوه من الملوثات بحسب الطلب.",
      descEn: "Specifies exact physicochemical assays, moisture, acidity, and absence of contaminants.",
    },
    {
      icon: Scale,
      nameAr: "ورقة مواصفات المنتج (TDS)",
      nameEn: "Product Technical Data Sheet",
      descAr: "المواصفة الفنية الشاملة المعتمدة بين المورد والعميل متضمنة معايير الرتبة.",
      descEn: "Comprehensive product technical specifications defining grade parameters agreed with buyers.",
    },
    {
      icon: Layers,
      nameAr: "بيانات التشغيلة والدفعة (Batch)",
      nameEn: "Batch / Lot Identification",
      descAr: "رقم تتبع موحد يربط المنتج بتاريخ الإنتاج وسجل التوريد لتسهيل التتبع العكسي.",
      descEn: "Unified batch code linking goods directly to processing records for complete reverse traceability.",
    },
    {
      icon: Truck,
      nameAr: "مستندات الشحن والـ B/L",
      nameEn: "Shipping Documents & Bill of Lading",
      descAr: "بوليصة الشحن البحري أو الجوي وسندات التخليص الجمركي وإشعارات الوصول.",
      descEn: "Ocean Bill of Lading / Airway Bill, customs manifests, and cargo arrival declarations.",
    },
  ];

  // SECTION 08: Supplier Evaluation Framework
  const evaluationSteps = [
    {
      num: "01",
      titleAr: "مراجعة بيانات المورد ونشاطه",
      titleEn: "Commercial & Legal Review",
      descAr: "التدقيق في السجل التجاري، التراخيص الحكومية، وسوابق الأعمال للمورد.",
      descEn: "Auditing commercial registration, statutory licenses, and business record of the supplier.",
    },
    {
      num: "02",
      titleAr: "التحقق من مصدر المنتج والمنشأ",
      titleEn: "Origin & Provenance Verification",
      descAr: "التأكد من المنشأ الجغرافي الحقيقي، وظروف الزراعة والإنتاج الميداني.",
      descEn: "Confirming authentic regional origin, harvest regions, and cultivation practices.",
    },
    {
      num: "03",
      titleAr: "طلب المواصفات الفنية وجداول المعايير",
      titleEn: "Technical Specification Benchmarking",
      descAr: "استلام ومراجعة جداول المواصفات الفنية والمخبرية المعتمدة لكل صنف.",
      descEn: "Receiving and auditing detailed technical and laboratory specification sheets.",
    },
    {
      num: "04",
      titleAr: "مراجعة وفحص العينات المسبقة",
      titleEn: "Physical Sample Evaluation",
      descAr: "فحص العينات المبدئية والتأكد من مطابقتها قبل اعتماد أمر التوريد التجاري.",
      descEn: "Evaluating pre-shipment representative samples against contractual grade thresholds.",
    },
    {
      num: "05",
      titleAr: "مراجعة الشهادات والمستندات",
      titleEn: "Certification & Regulatory Audit",
      descAr: "التأكد من سريان وموثوقية الشهادات والمستندات الصحية المعمول بها.",
      descEn: "Validating authenticity and active validity of health and safety certifications.",
    },
    {
      num: "06",
      titleAr: "تقييم الالتزام بالكميات والمواعيد",
      titleEn: "Capacity & Timeline Assessment",
      descAr: "قياس القدرة اللوجستية للمورد على تلبية جداول الشحن والكميات المتفق عليها.",
      descEn: "Assessing supplier logistical capacity to honor contracted volumes and dispatch schedules.",
    },
    {
      num: "07",
      titleAr: "متابعة جودة التوريدات المتكررة",
      titleEn: "Batch Consistency Monitoring",
      descAr: "المراقبة المستمرة للتوريدات الدورية لضمان الحفاظ على نفس مستوى الجودة.",
      descEn: "Continuously monitoring recurring dispatches to ensure unwavering quality consistency.",
    },
    {
      num: "08",
      titleAr: "توثيق الملاحظات وحالات عدم المطابقة",
      titleEn: "Non-Conformity Logging & Action",
      descAr: "تسجيل أي ملاحظات فنية وتطبيق الإجراءات التصحيحية الفورية لحماية العميل.",
      descEn: "Formally recording technical notes and instituting corrective measures to safeguard buyers.",
    },
  ];

  // SECTION 09: International Compliance
  const complianceFacets = [
    {
      icon: FileText,
      titleAr: "متطلبات الملصقات والبيانات الغذائية",
      titleEn: "Labeling & Nutritional Facts",
      descAr: "الالتزام بلغات العبوات الرسمية، وجداول القيم الغذائية، وتوضيح مسببات الحساسية بحسب لوائح الدولة المستوردة.",
      descEn: "Adhering to official destination packaging languages, nutritional declaration tables, and allergen callouts.",
    },
    {
      icon: MapPin,
      titleAr: "قواعد وبلد المنشأ",
      titleEn: "Origin Rules & Preferential Status",
      descAr: "مراعاة قواعد المنشأ والاتفاقيات التجارية الثنائية والإقليمية للاستفادة من الإعفاءات الجمركية المقررة.",
      descEn: "Navigating regional trade treaties and rules of origin to verify tariff and preferential qualification.",
    },
    {
      icon: ShieldCheck,
      titleAr: "الاشتراطات الصحية والحجر الزراعي",
      titleEn: "Sanitary & Phytosanitary Protocols",
      descAr: "تلبية معايير الحجر الزراعي والبيطري والهيئات الصحية الحكومية في مختلف الدول المستوردة.",
      descEn: "Satisfying agricultural quarantine inspections, fumigation protocols, and statutory food hygiene codes.",
    },
    {
      icon: Package,
      titleAr: "متطلبات التعبئة والتغليف",
      titleEn: "Export Packaging Standards",
      descAr: "استخدام مواد تغليف آمنة وصديقة للبيئة مخصصة للأغذية مع مراعاة مقاومتها لظروف الشحن والرطوبة.",
      descEn: "Utilizing food-grade, resilient, and eco-compliant export packaging designed for international transit.",
    },
    {
      icon: BadgeAlert,
      titleAr: "القيود الخاصة بالمنتجات",
      titleEn: "Commodity Restrictions & Quotas",
      descAr: "متابعة أي قيود استيرادية أو نسب مسموح بها للمبيدات أو الإضافات أو كوتات التوريد المعتمدة.",
      descEn: "Monitoring regulatory quotas, permissible MRLs (Maximum Residue Limits), and additive restrictions.",
    },
    {
      icon: FileCheck,
      titleAr: "متطلبات الفحص المخبري المسبق",
      titleEn: "Mandatory Pre-Shipment Testing",
      descAr: "التنسيق لإجراء الفحوصات في مختبرات معتمدة إذا كانت تشترطها الجمارك أو جهات الرقابة لدى المستورد.",
      descEn: "Coordinating testing via accredited laboratories whenever mandated by destination border controls.",
    },
    {
      icon: Scale,
      titleAr: "اللوائح الجمركية والتعريفات",
      titleEn: "Customs Protocols & Tariffs",
      descAr: "التحقق من البنود الجمركية (HS Codes) المناسبة لتفادي أي تأخير أو غرامات أثناء التخليص الجمركي.",
      descEn: "Cross-checking Harmonized System (HS) codes to facilitate swift border clearance and correct tariffing.",
    },
    {
      icon: Truck,
      titleAr: "المستندات اللازمة للإفراج والتخليص",
      titleEn: "Release & Clearance Documentation",
      descAr: "تجهيز حزم المستندات المصدقة رسمياً بما يضمن انسيابية الإفراج الفوري عن الشحنات الغذائية في الموانئ.",
      descEn: "Preparing attested documentation sets to ensure prompt cargo release at destination entry ports.",
    },
  ];

  return (
    <div className="w-full">
      {/* =========================================================================
          SECTION 01 — QUALITY PHILOSOPHY (فلسفة الجودة)
      ========================================================================= */}
      <section className="relative w-full overflow-hidden text-footer-foreground min-h-[85vh] flex items-center pt-28 sm:pt-36 pb-20">
        <img
          src="/BG/Natural & Agri-Food Products/Natural & Agri-Food Products Home Page.jpg"
          alt={ar ? "جودة المنتجات الطبيعية والغذائية" : "Natural Products Quality Management"}
          className="absolute inset-0 size-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-footer via-footer/90 to-footer/70 backdrop-blur-[2px]" />

        <div className="site-container relative w-full z-10">
          <Reveal>
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium mb-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/85 px-4 py-1.5 text-xs font-bold tracking-wide text-white backdrop-blur-md shadow-md">
                <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                <span>
                  {ar
                    ? "منظومة الجودة والامتثال · قطاع الأغذية والمنتجات الطبيعية"
                    : "Quality & Regulatory Compliance · Natural & Agri-Food Division"}
                </span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-950/70 px-3 py-1 text-xs font-medium text-emerald-300 backdrop-blur-md">
                <ShieldCheck className="size-3.5 text-emerald-400" />
                <span>{ar ? "معايير التجارة والتوريد الدولي" : "International Trade & Quality Standards"}</span>
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-head text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 max-w-4xl leading-tight">
              {ar ? "الجودة تبدأ من المصدر" : "Quality Begins at the Source"}
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-3xl border border-white/25 bg-background/85 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl max-w-4xl text-foreground">
              <p className="text-base sm:text-lg leading-relaxed mb-4 text-foreground/95 font-medium">
                {ar
                  ? "في SAMI BIN AYYAD GROUP نؤمن بأن جودة المنتجات الطبيعية والغذائية لا تقتصر على المنتج النهائي، بل تبدأ من اختيار مصادر التوريد المناسبة، وتمر بمراحل الفحص والتداول والتخزين والتعبئة، وصولًا إلى تقديم منتجات تلبي متطلبات الأسواق والعملاء."
                  : "At SAMI BIN AYYAD GROUP, we believe that the quality of natural and agri-food products is not merely defined by the final packaged good; it originates at the selection of verified supply sources and progresses through rigorous inspection, safe handling, controlled storage, and protective packaging, culminating in offerings that satisfy international market standards and client demands."}
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground border-t border-border/50 pt-4">
                {ar
                  ? "نعتمد منهجية قائمة على الاهتمام بالمواصفات، ووضوح المعلومات، والتحقق من متطلبات كل سوق، والعمل مع الموردين والشركاء وفق معايير الجودة والسلامة المناسبة لطبيعة المنتجات."
                  : "We deploy a structured methodology anchored in stringent adherence to specifications, data transparency, verified destination compliance, and close collaboration with vetted suppliers and commercial partners aligned with recognized quality and food safety standards."}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 mt-6 border-t border-border/40 text-center">
                <div className="p-3 rounded-2xl bg-secondary/50 border border-border/40">
                  <span className="block font-head text-xl sm:text-2xl font-bold text-brand-orange">
                    100%
                  </span>
                  <span className="text-xs text-muted-foreground font-medium">
                    {ar ? "تدقيق مصادر المنشأ" : "Origin Verification"}
                  </span>
                </div>
                <div className="p-3 rounded-2xl bg-secondary/50 border border-border/40">
                  <span className="block font-head text-xl sm:text-2xl font-bold text-brand-green-text">
                    6 {ar ? "مراحل" : "Stages"}
                  </span>
                  <span className="text-xs text-muted-foreground font-medium">
                    {ar ? "منظومة الضبط والتحقق" : "Quality Control Protocol"}
                  </span>
                </div>
                <div className="col-span-2 sm:col-span-1 p-3 rounded-2xl bg-secondary/50 border border-border/40">
                  <span className="block font-head text-xl sm:text-2xl font-bold text-foreground">
                    B2B
                  </span>
                  <span className="text-xs text-muted-foreground font-medium">
                    {ar ? "مطابقة اشتراطات التصدير" : "Export Specification Focus"}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02 — QUALITY PILLARS (ركائز الجودة)
      ========================================================================= */}
      <section className="site-container py-20 border-b border-border/40">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionBadge title={ar ? "ركائز الجودة" : "Quality Pillars"} />
            <h2 className="font-head text-3xl sm:text-5xl font-bold tracking-tight text-foreground mt-3 mb-4">
              {ar ? "ركائز منظومة الجودة الست" : "The Six Pillars of Our Quality Framework"}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              {ar
                ? "مبادئ متكاملة تحكم عمليات التوريد والتداول لحماية سلامة المنتجات ومطابقتها للمواصفات."
                : "Integrated foundational tenets governing sourcing, inspection, and handling across our supply chains."}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <Reveal key={pillar.id} delay={idx * 0.05}>
                <div className="group h-full rounded-3xl border border-white/20 bg-background/80 p-7 shadow-lg backdrop-blur-2xl transition-all duration-300 hover:border-brand-green hover:shadow-2xl hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-5">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-green/15 text-brand-green-text transition-transform duration-300 group-hover:scale-110">
                      <IconComp className="size-6" />
                    </span>
                    <span className="text-xs font-bold text-muted-foreground/60 tracking-wider">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-head text-xl font-bold text-foreground mb-3 transition-colors group-hover:text-brand-orange">
                    {ar ? pillar.titleAr : pillar.titleEn}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {ar ? pillar.descAr : pillar.descEn}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          SECTION 03 — QUALITY CONTROL PROCESS (مراحل ضبط الجودة)
      ========================================================================= */}
      <section className="site-container py-20 border-b border-border/40">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionBadge title={ar ? "مراحل ضبط الجودة" : "Quality Control Process"} />
            <h2 className="font-head text-3xl sm:text-5xl font-bold tracking-tight text-foreground mt-3 mb-4">
              {ar ? "رحلة التحقق والرقابة عبر 6 مراحل متتابعة" : "The 6-Stage Quality Assurance Journey"}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              {ar
                ? "مسار منهجي متكامل يبدأ من اعتماد المورد وحتى تسليم الشحنة الموثقة."
                : "A systematic operational pipeline spanning supplier onboarding to verified documentary handover."}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stages.map((st, idx) => {
            const IconComp = st.icon;
            return (
              <Reveal key={st.step} delay={idx * 0.05}>
                <div className="relative rounded-3xl border border-white/20 bg-background/80 p-7 shadow-lg backdrop-blur-2xl transition-all duration-300 hover:border-brand-orange hover:shadow-2xl h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center justify-center size-8 rounded-full bg-brand-orange text-white font-head font-bold text-xs shadow-md">
                        {st.step}
                      </span>
                      <span className="flex size-10 items-center justify-center rounded-2xl bg-secondary text-brand-orange">
                        <IconComp className="size-5" />
                      </span>
                    </div>

                    <h3 className="font-head text-lg font-bold text-foreground mb-2">
                      {ar ? st.titleAr : st.titleEn}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {ar ? st.descAr : st.descEn}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="font-semibold text-brand-green-text">
                      {ar ? `المرحلة ${st.step} من 6` : `Stage ${st.step} of 6`}
                    </span>
                    <CheckCircle2 className="size-4 text-brand-green" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Operational Notice Box */}
        <Reveal delay={0.2}>
          <div className="mt-10 rounded-2xl border border-amber-500/20 bg-amber-500/10 p-5 backdrop-blur-md flex items-start gap-3.5 text-xs sm:text-sm text-foreground/90">
            <Info className="size-5 text-amber-500 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="font-bold text-amber-600 dark:text-amber-400">
                {ar ? "ملاحظة تشغيلية وتوضيحية: " : "Operational Scope Notice: "}
              </strong>
              {ar
                ? "تُعرض هذه المراحل باعتبارها منهجية العمل المستهدفة وإجراءات التحقق المعتمدة بحسب التطبيق الفعلي وطبيعة كل صفقة وشحنة، وفقاً للاتفاقيات المبرمة مع الموردين والعملاء، وليست ادعاءً بتطبيق كافة المراحل المخبرية المتقدمة ذاتياً على جميع المنتجات."
                : "These stages represent our target operational methodology and verified verification protocols applied based on actual commercial deployment and specific contractual scopes, rather than claiming in-house execution of all technical assays across all products."}
            </p>
          </div>
        </Reveal>
      </section>

      {/* =========================================================================
          SECTION 04 — FOOD SAFETY (سلامة الغذاء)
      ========================================================================= */}
      <section className="site-container py-20 border-b border-border/40">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionBadge title={ar ? "سلامة الغذاء" : "Food Safety"} />
            <h2 className="font-head text-3xl sm:text-5xl font-bold tracking-tight text-foreground mt-3 mb-4">
              {ar ? "سلامة الغذاء أولوية في سلسلة التوريد" : "Food Safety Across the Value Chain"}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              {ar
                ? "الالتزام بضوابط الصحة والتداول الآمن والتوافق مع الاشتراطات التنظيمية لحماية المستهلك النهائي."
                : "Upholding hygiene, safe handling, and regulatory conformity to protect the integrity of human consumption."}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {safetyTopics.map((topic, idx) => {
            const IconComp = topic.icon;
            return (
              <Reveal key={idx} delay={idx * 0.04}>
                <div className="h-full rounded-3xl border border-white/20 bg-background/80 p-6 shadow-md backdrop-blur-2xl transition-all duration-300 hover:border-brand-green hover:shadow-xl">
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-4">
                    <IconComp className="size-5" />
                  </div>
                  <h3 className="font-head text-base font-bold text-foreground mb-2">
                    {ar ? topic.titleAr : topic.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {ar ? topic.descAr : topic.descEn}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Factual Integrity Alert Box */}
        <Reveal delay={0.15}>
          <div className="mt-10 rounded-2xl border border-brand-green/30 bg-brand-green/10 p-5 backdrop-blur-md flex items-start gap-3.5 text-xs sm:text-sm text-foreground/90">
            <ShieldCheck className="size-5 text-brand-green shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="font-bold text-brand-green-text">
                {ar ? "معايير النزاهة المؤسسية: " : "Institutional Integrity Standards: "}
              </strong>
              {ar
                ? "تعتمد SAMI BIN AYYAD GROUP في ممارسات سلامة الغذاء على التدقيق الميداني، ومراجعة الفحوصات والشهادات الصادرة من الجهات الرسمية والمعامل المعتمدة دولياً، ولا تدعي امتلاك معامل اختبار ذاتية أو شهادات غير موثقة رسمياً."
                : "SAMI BIN AYYAD GROUP bases food safety practices on rigorous provenance audits and verification of certificates issued by accredited third-party laboratories and regulatory authorities, without asserting unverified ownership of proprietary testing laboratories."}
            </p>
          </div>
        </Reveal>
      </section>

      {/* =========================================================================
          SECTION 05 — PRODUCT HANDLING (تداول المنتجات وحفظ الجودة)
      ========================================================================= */}
      <section className="site-container py-20 border-b border-border/40">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionBadge title={ar ? "تداول المنتجات وحفظ الجودة" : "Product Handling"} />
            <h2 className="font-head text-3xl sm:text-5xl font-bold tracking-tight text-foreground mt-3 mb-4">
              {ar ? "اختلاف متطلبات التعامل بحسب طبيعة المنتج" : "Tailored Handling by Product Classification"}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              {ar
                ? "لكل فئة سلعية اشتراطات دقيقة في التهوية والتخزين والتعبئة للحفاظ على خصائصها الفيزيائية والكيميائية."
                : "Distinct physical, ambient, and packaging criteria formulated to preserve the native properties of each product class."}
            </p>
          </div>
        </Reveal>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {handlingCategories.map((cat, idx) => {
            const IconComp = cat.icon;
            const isSelected = activeHandlingCategory === idx;
            return (
              <button
                key={cat.code}
                onClick={() => setActiveHandlingCategory(idx)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer",
                  isSelected
                    ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/25 scale-105"
                    : "bg-secondary/70 text-foreground border border-border/60 hover:bg-secondary hover:text-brand-orange"
                )}
              >
                <IconComp className="size-4" />
                <span>{cat.code}. {ar ? cat.nameAr : cat.nameEn}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Details Card */}
        {(() => {
          const current = handlingCategories[activeHandlingCategory];
          const CurrentIcon = current.icon;
          return (
            <Reveal key={current.code} delay={0.05}>
              <div className="rounded-3xl border border-white/20 bg-background/80 p-8 sm:p-12 shadow-xl backdrop-blur-2xl">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-border/40 mb-8">
                  <div className="flex items-center gap-4">
                    <span className="flex size-14 items-center justify-center rounded-2xl bg-brand-green/15 text-brand-green-text shrink-0">
                      <CurrentIcon className="size-7" />
                    </span>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                        {ar ? `المجموعة ${current.code}` : `Category ${current.code}`}
                      </span>
                      <h3 className="font-head text-2xl sm:text-3xl font-bold text-foreground">
                        {ar ? current.nameAr : current.nameEn}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                        {ar ? current.subtitleAr : current.subtitleEn}
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-2 rounded-full bg-secondary/80 px-4 py-2 text-xs font-semibold text-foreground border border-border/50 self-start lg:self-center">
                    <CheckCircle2 className="size-4 text-brand-green" />
                    <span>{ar ? "معايير مناولة مخصصة" : "Calibrated Handling Protocol"}</span>
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {(ar ? current.pointsAr : current.pointsEn).map((pt, pIdx) => (
                    <div
                      key={pIdx}
                      className="flex items-start gap-3 rounded-2xl bg-secondary/50 p-4 border border-border/40 transition-colors hover:border-brand-green/50"
                    >
                      <span className="flex size-6 items-center justify-center rounded-full bg-brand-green/20 text-brand-green-text shrink-0 text-xs font-bold mt-0.5">
                        {pIdx + 1}
                      </span>
                      <span className="text-sm font-medium text-foreground leading-relaxed">
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-border/40 text-xs text-muted-foreground">
                  <p>
                    * {ar
                      ? "تنويه: تُعرض هذه المجموعات باعتبارها تصنيفات لمتطلبات تداول المنتجات ومعايير الحفظ والاشتراطات اللوجستية، وليست عروض بيع حصرية."
                      : "Notice: These groups represent handling protocols, preservation criteria, and logistical standards, not exclusive product listings."}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })()}
      </section>

      {/* =========================================================================
          SECTION 06 — STANDARDS & CERTIFICATIONS (المعايير والشهادات)
      ========================================================================= */}
      <section className="site-container py-20 border-b border-border/40">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionBadge title={ar ? "المعايير والشهادات" : "Standards & Certifications"} />
            <h2 className="font-head text-3xl sm:text-5xl font-bold tracking-tight text-foreground mt-3 mb-4">
              {ar ? "الأنظمة والمعايير الدولية المرجعية" : "International Standards & Reference Systems"}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              {ar
                ? "دليل الأنظمة والمعايير العالمية المعتمدة في تجارة وتداول الأغذية والمنتجات الطبيعية."
                : "An authoritative guide to globally recognized quality and safety standards governing natural and food trade."}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {standards.map((std, idx) => (
            <Reveal key={std.code} delay={idx * 0.04}>
              <div className="h-full rounded-3xl border border-white/20 bg-background/80 p-6 shadow-md backdrop-blur-2xl transition-all duration-300 hover:border-brand-orange hover:shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-head text-lg font-black text-brand-orange tracking-tight">
                      {std.code}
                    </span>
                    <span className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-semibold text-muted-foreground border border-border/50">
                      {ar ? std.scopeAr : std.scopeEn}
                    </span>
                  </div>

                  <h3 className="font-head text-base font-bold text-foreground mb-2">
                    {ar ? std.nameAr : std.nameEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {ar ? std.descAr : std.descEn}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-border/40 flex items-center justify-between text-xs text-brand-green-text font-semibold">
                  <span>{ar ? "معيار مرجعي قطاعي" : "Industry Reference Standard"}</span>
                  <Award className="size-4 text-brand-green" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Mandatory Disclosure Alert Box */}
        <Reveal delay={0.2}>
          <div className="mt-10 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5 backdrop-blur-md flex items-start gap-3.5 text-xs sm:text-sm text-foreground/90">
            <AlertCircle className="size-5 text-blue-500 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="block font-bold text-blue-600 dark:text-blue-400">
                {ar ? "تنبيه مؤسسي وتوضيح مرجعي ملزم: " : "Mandatory Institutional Notice: "}
              </strong>
              <p className="leading-relaxed text-muted-foreground">
                {ar
                  ? "هذه قائمة بالمعايير والأنظمة الدولية المرجعية ذات الصلة بقطاع الأغذية والمنتجات الطبيعية والتجارة الدولية. لا تمثل هذه القائمة ادعاءً بحصول المجموعة المباشر على جميع هذه الشهادات، بل توضح المعايير والشهادات المعتمدة التي نتحقق من توفرها لدى شركائنا ومصادر توريدنا وفقاً للاشتراطات الفنية والقانونية لكل شحنة وسوق مستهدف."
                  : "This roster details internationally recognized standards and reference systems pertinent to the agri-food and natural commodity sectors. It serves as an informative benchmark of frameworks audited across our vetted suppliers and trade partners, rather than an assertion of direct institutional certification ownership by SAMI BIN AYYAD GROUP."}
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =========================================================================
          SECTION 07 — TRACEABILITY & DOCUMENTATION (التتبع والتوثيق)
      ========================================================================= */}
      <section className="site-container py-20 border-b border-border/40">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionBadge title={ar ? "التتبع والتوثيق" : "Traceability & Documentation"} />
            <h2 className="font-head text-3xl sm:text-5xl font-bold tracking-tight text-foreground mt-3 mb-4">
              {ar ? "حزمة المستندات الرسمية في التجارة الدولية" : "Statutory International Trade Documentation"}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              {ar
                ? "التوثيق القانوني والرسمي ركيزة أساسية لضمان انسيابية الإفراج الجمركي وموثوقية المنشأ."
                : "Rigorous statutory documentation anchoring customs clearance speed, origin integrity, and trade safety."}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {documents.map((doc, idx) => {
            const IconComp = doc.icon;
            return (
              <Reveal key={idx} delay={idx * 0.04}>
                <div className="rounded-3xl border border-white/20 bg-background/80 p-6 shadow-md backdrop-blur-2xl transition-all duration-300 hover:border-brand-green hover:shadow-xl h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="flex size-10 items-center justify-center rounded-xl bg-brand-green/15 text-brand-green-text shrink-0">
                        <IconComp className="size-5" />
                      </span>
                      <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">
                        DOC 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-head text-base font-bold text-foreground mb-2">
                      {ar ? doc.nameAr : doc.nameEn}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {ar ? doc.descAr : doc.descEn}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-border/40 flex items-center gap-1.5 text-xs text-brand-green-text font-medium">
                    <CheckCircle2 className="size-3.5 text-brand-green" />
                    <span>{ar ? "مستند تجاري معتمد" : "Verified Trade Instrument"}</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-8 text-center text-xs text-muted-foreground">
            {ar
              ? "تختلف حزمة المستندات المطلوبة بحسب طبيعة المنتج، والاتفاقيات التجارية الثنائية، والاشتراطات الجمركية لكل دولة مستوردة."
              : "Required document sets vary depending on commodity nature, bilateral agreements, and destination customs regulations."}
          </div>
        </Reveal>
      </section>

      {/* =========================================================================
          SECTION 08 — SUPPLIER & PARTNER QUALITY (جودة الموردين والشركاء)
      ========================================================================= */}
      <section className="site-container py-20 border-b border-border/40">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionBadge title={ar ? "جودة الموردين والشركاء" : "Supplier & Partner Quality"} />
            <h2 className="font-head text-3xl sm:text-5xl font-bold tracking-tight text-foreground mt-3 mb-4">
              {ar ? "إطار تقييم واعتماد الموردين" : "Supplier Evaluation & Onboarding Framework"}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              {ar
                ? "منهجية من 8 خطوات لاختيار ومراقبة أداء الموردين والشركاء التجاريين في مختلف الأسواق."
                : "An 8-step structured framework for screening, vetting, and managing agricultural and food supply partners."}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {evaluationSteps.map((step, idx) => (
            <Reveal key={step.num} delay={idx * 0.04}>
              <div className="rounded-3xl border border-white/20 bg-background/80 p-6 shadow-md backdrop-blur-2xl transition-all duration-300 hover:border-brand-orange hover:shadow-xl h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-head text-xl font-black text-brand-orange">
                      {step.num}
                    </span>
                    <span className="size-2 rounded-full bg-brand-green" />
                  </div>

                  <h3 className="font-head text-base font-bold text-foreground mb-2">
                    {ar ? step.titleAr : step.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {ar ? step.descAr : step.descEn}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-border/40 text-[11px] font-semibold text-muted-foreground/80">
                  {ar ? "معيار تدقيق معتمد" : "Audited Criterion"}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 09 — INTERNATIONAL COMPLIANCE (الامتثال لمتطلبات الأسواق)
      ========================================================================= */}
      <section className="site-container py-20 border-b border-border/40">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionBadge title={ar ? "الامتثال لمتطلبات الأسواق" : "International Compliance"} />
            <h2 className="font-head text-3xl sm:text-5xl font-bold tracking-tight text-foreground mt-3 mb-4">
              {ar ? "التوافق مع الاشتراطات التنظيمية العالمية" : "Compliance with Global Regulatory Regimes"}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              {ar
                ? "تختلف متطلبات استيراد المنتجات الطبيعية والغذائية باختلاف الدولة ونوع السلعة."
                : "Import regulatory covenants fluctuate based on destination jurisdiction, commodity type, and trade agreements."}
            </p>
          </div>
        </Reveal>

        {/* Featured Policy Statement Banner */}
        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-brand-green/30 bg-gradient-to-r from-brand-green/15 via-background/90 to-brand-orange/15 p-8 sm:p-10 shadow-xl backdrop-blur-2xl text-center max-w-4xl mx-auto mb-14">
            <Globe className="size-10 text-brand-green mx-auto mb-4" />
            <blockquote className="font-head text-lg sm:text-xl font-bold text-foreground leading-relaxed mb-3">
              {ar
                ? "«نراعي اختلاف المتطلبات التنظيمية من سوق إلى آخر، ونعمل على مراجعة المواصفات والمستندات المطلوبة لكل منتج وفق طبيعة السوق المستهدف.»"
                : "“We account for differing regulatory mandates across international markets, systematically reviewing required specifications and dockets per product to align with target destination protocols.”"}
            </blockquote>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {ar
                ? "سياسة الامتثال التنظيمي في مجموعة سامي بن عياد"
                : "SAMI BIN AYYAD GROUP Regulatory Compliance Policy"}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {complianceFacets.map((facet, idx) => {
            const IconComp = facet.icon;
            return (
              <Reveal key={idx} delay={idx * 0.04}>
                <div className="rounded-3xl border border-white/20 bg-background/80 p-6 shadow-md backdrop-blur-2xl transition-all duration-300 hover:border-brand-green hover:shadow-xl h-full">
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-brand-green/15 text-brand-green-text mb-4">
                    <IconComp className="size-5" />
                  </div>
                  <h3 className="font-head text-base font-bold text-foreground mb-2">
                    {ar ? facet.titleAr : facet.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {ar ? facet.descAr : facet.descEn}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          SECTION 10 — QUALITY COMMITMENT (التزامنا بالجودة)
      ========================================================================= */}
      <section className="site-container py-24">
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden border border-white/25 bg-background/85 p-8 sm:p-16 shadow-2xl backdrop-blur-2xl text-center max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/5 via-transparent to-brand-green/10 pointer-events-none" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-4 py-1.5 text-xs font-bold text-brand-orange backdrop-blur-md mb-6">
                <ShieldCheck className="size-4" />
                <span>{ar ? "التزامنا بالجودة" : "Our Quality Commitment"}</span>
              </span>

              <h2 className="font-head text-3xl sm:text-5xl font-black text-foreground mb-6 leading-tight">
                {ar ? "الجودة مسؤولية في كل مرحلة" : "Quality as an Enduring Responsibility at Every Stage"}
              </h2>

              <p className="text-base sm:text-lg text-foreground/90 leading-relaxed max-w-2xl mx-auto mb-10 font-medium">
                {ar
                  ? "نحرص في SAMI BIN AYYAD GROUP على بناء علاقات تجارية قائمة على الثقة والوضوح والالتزام بالمواصفات. ونسعى إلى تطوير منظومة توريد تضع جودة المنتجات وسلامتها وموثوقية مصادرها في مقدمة الأولويات، مع مراعاة احتياجات العملاء ومتطلبات الأسواق المحلية والدولية."
                  : "At SAMI BIN AYYAD GROUP, we are committed to forging commercial relationships grounded in trust, transparency, and specification adherence. We strive to advance a supply ecosystem prioritizing product quality, food safety, and source integrity, tailored to the exact requirements of local and international buyers."}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="/sectors/food#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand-green px-8 py-4 text-sm font-bold text-white shadow-xl shadow-brand-green/30 transition-all duration-300 hover:bg-brand-orange hover:shadow-brand-orange/30 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>{ar ? "طلب معلومات الجودة" : "Request Quality Information"}</span>
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 rtl:rotate-90 rtl:group-hover:-translate-x-1 rtl:group-hover:-translate-y-1" />
                </a>

                <Link
                  to="/sectors/$sector"
                  params={{ sector: "food" }}
                  search={{ tab: "order-product" }}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-7 py-4 text-sm font-bold text-foreground backdrop-blur-md transition-all duration-300 hover:bg-secondary hover:scale-105"
                >
                  <Package className="size-4 text-brand-orange" />
                  <span>{ar ? "طلب عرض توريد تجاري" : "Request Commercial Quotation"}</span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
