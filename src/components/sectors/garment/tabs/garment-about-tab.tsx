import { Link } from "@tanstack/react-router";
import { 
  Building2, 
  CheckCircle2, 
  Factory, 
  Globe2, 
  Layers, 
  Scissors, 
  Sparkles, 
  TrendingUp, 
  Trophy, 
  Users, 
  Workflow, 
  ShieldCheck, 
  Shirt, 
  ArrowRight,
  ExternalLink,
  Cpu,
  Package,
  Wrench,
  CheckCheck
} from "lucide-react";

import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/language-context";
import { 
  garmentAboutData, 
  garmentProductionCapacity, 
  garmentIndustrialCapabilities,
  garmentProductCategories,
  garmentServicesExpanded,
  garmentProcessSteps,
  garmentClassicShirtFacility,
  garmentPortfolioTypes
} from "../garment-data";
import { cn } from "@/lib/utils";
import { SectorContactSection } from "@/components/site/sector-contact-section";
import { highlightBrand } from "@/components/site/brand-text";
import { AnimatedStatistic } from "@/components/site/animated-statistic";

function SectionBadge({ title }: { title: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
      <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
      {title}
    </span>
  );
}

export function GarmentAboutTab() {
  const { language } = useLanguage();
  const ar = language === "AR";
  const { whoWeAre, whyChooseUs, infrastructure, markets } = garmentAboutData;
  const capacity = garmentProductionCapacity;
  const capabilities = garmentIndustrialCapabilities;
  const categories = garmentProductCategories;
  const services = garmentServicesExpanded;
  const shirtFacility = garmentClassicShirtFacility;

  return (
    <div className="space-y-16 py-6">

      {/* 1. ABOUT GARMENT MANUFACTURING & EXECUTIVE OVERVIEW */}
      <section id="about-overview" className="scroll-mt-36">
        <Reveal>
          {/* Centered Executive Intro Box */}
          <div className="group relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/20 bg-background/75 p-8 sm:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur-2xl transition-all duration-300 hover:scale-[1.01] hover:border-brand-green/40 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span>{ar ? "عن قطاع تصنيع الملابس الجاهزة" : "About Ready-Made Garments"}</span>
            </div>
            <h2 className="section-title mt-2 text-center mx-auto">
              {ar ? whoWeAre.headingAr : whoWeAre.heading}
            </h2>
            <div className="section-intro mx-auto mt-6 leading-relaxed max-w-3xl space-y-4 text-start">
              <p className="text-start leading-relaxed">{highlightBrand(ar ? whoWeAre.bodyAr : whoWeAre.body)}</p>
              <p className="text-start leading-relaxed text-xs sm:text-sm text-muted-foreground">
                {ar
                  ? "نعمل كجهة تصنيع ملابس جاهزة وتطوير أزياء وتوريد تجاري دولي للعلامات التجارية والمستوردين وتجار الجملة وسلاسل التجزئة في أوروبا والخليج والشرق الأوسط، مع التزام تام بالمعايير الفنية والجودة العالمية."
                  : "We operate as an integrated ready-made garment manufacturer, fashion development studio, and international B2B supplier for fashion brands, retail chains, and wholesale importers across Europe, the GCC, and worldwide."}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="default" className="rounded-full bg-brand-green text-white hover:bg-brand-orange transition-all duration-300 shadow-md">
                <a href="#industrial-capabilities">
                  <span>{ar ? "استكشف قدراتنا وإمكانياتنا الصناعية" : "Explore Industrial Capabilities"}</span>
                  <ArrowRight className="size-4 ms-2 rtl:rotate-180" />
                </a>
              </Button>

              <Button asChild size="default" className="rounded-full bg-brand-green text-white hover:bg-brand-orange shadow-md transition-all duration-300">
                <Link to="/sectors/$sector" params={{ sector: "garment" }} search={{ tab: "start-project" }}>
                  <span>{ar ? "ابدأ طلب التصنيع والتوريد" : "Start Manufacturing Project"}</span>
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>

        {/* Vision & Mission Cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="group rounded-3xl border border-brand-green/30 bg-card/75 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-[1.01] hover:border-brand-green hover:shadow-xl text-center">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3 py-0.5 text-xs font-bold text-brand-orange">
              <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span>{ar ? whoWeAre.vision.titleAr : whoWeAre.vision.title}</span>
            </div>
            <h3 className="mt-3 text-center font-head text-xl font-bold text-foreground">
              {ar ? whoWeAre.vision.titleAr : whoWeAre.vision.title}
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed text-center">
              {ar ? whoWeAre.vision.descAr : whoWeAre.vision.desc}
            </p>
          </div>

          <div className="group rounded-3xl border border-brand-green/30 bg-card/75 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-[1.01] hover:border-brand-green hover:shadow-xl text-center">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3 py-0.5 text-xs font-bold text-brand-orange">
              <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span>{ar ? whoWeAre.mission.titleAr : whoWeAre.mission.title}</span>
            </div>
            <h3 className="mt-3 text-center font-head text-xl font-bold text-foreground">
              {ar ? whoWeAre.mission.titleAr : whoWeAre.mission.title}
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed text-center">
              {ar ? whoWeAre.mission.descAr : whoWeAre.mission.desc}
            </p>
          </div>
        </div>

        {/* B2B Technical Terms Glossary */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <SectionBadge title={ar ? "دليل المصطلحات الفنية والتجارية" : "B2B Technical Glossary"} />
              <h2 className="section-title mt-3 text-center mx-auto">
                {ar ? "دليل المصطلحات الفنية" : "Technical Glossary"}
              </h2>
              <p className="section-intro mt-3 text-center mx-auto">
                {ar
                  ? "شرح مبسط وموثق لأهم المصطلحات التعاقدية والمعايير الفنية المستخدمة في صناعة وتصدير الملابس الجاهزة."
                  : "A concise reference guide to key commercial frameworks, quality standards, and technical abbreviations used in our manufacturing."}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  term: "FOB (Free On Board)",
                  badge: ar ? "شحن تعاقدي شامل" : "Trade Term",
                  descAr: "التسليم على ظهر السفينة: يشمل تصنيع المنتج بالكامل وتجهيزه وإنهاء التخليص الجمركي وشحنه في الميناء المصري دون أعباء تشغيلية على المشتري.",
                  descEn: "Free On Board: Supplier covers fabric, full manufacturing, packaging, and export customs clearance up to loading on the vessel in Egypt.",
                },
                {
                  term: "OEM (Original Equipment Manufacturer)",
                  badge: ar ? "تصنيع تعاقدي" : "Production Model",
                  descAr: "التصنيع كشريك للمعدات الأصلية: نقوم بتصنيع الموديلات بالكامل وفق التصميمات والمواصفات المعتمدة من العميل وتغليفها تحت علامته التجارية.",
                  descEn: "Original Equipment Manufacturer: Full production precisely mapped to client-provided design sheets, tech packs, and brand specifications.",
                },
                {
                  term: "ODM (Original Design Manufacturer)",
                  badge: ar ? "تصميم وتصنيع" : "Design & Make",
                  descAr: "التصميم والتصنيع المشترك: نقوم بتطوير أفكار التصميم والباترونات والخامات لتقديم مجموعات أزياء جاهزة متكاملة يعتمدها العميل مباشرة.",
                  descEn: "Original Design Manufacturer: Turnkey model where SBA develops designs, patterns, and fabric swatches for client brand selection.",
                },
                {
                  term: "Private Label",
                  badge: ar ? "العلامات الخاصة" : "Branding",
                  descAr: "التصنيع للعلامات التجارية الخاصة: إنتاج حصري يحمل ملصقات العميل وهوية علامته التجارية (Labels, Hangtags, Barcodes, Custom Polybags).",
                  descEn: "Custom production branded with client-specific woven labels, care tags, barcodes, and custom export packaging.",
                },
                {
                  term: "Tech Pack (Technical Package)",
                  badge: ar ? "الملف الفني" : "Engineering",
                  descAr: "الملف الفني الشامل للموديل: الوثيقة الهندسية التي تحدد جداول المقاسات الدقيقة (Grading)، ونوع الغرز، والمواد، وتفاصيل الخياطة.",
                  descEn: "The master technical blueprint specifying exact measurement grading tables, stitching details, tolerances, and fabric construction.",
                },
                {
                  term: "PP Sample (Pre-Production)",
                  badge: ar ? "عينة الاعتماد" : "Sampling",
                  descAr: "عينة ما قبل الإنتاج: القطعة النموذجية المصنوعة من القماش والإكسسوارات الفعلية للحصول على الاعتماد النهائي قبل تشغيل خطوط الإنتاج الكمي.",
                  descEn: "Pre-Production Sample crafted from production-grade fabric and trims, submitted for final client sign-off before cutting bulk fabric.",
                },
                {
                  term: "AQL 2.5 (Acceptable Quality Limit)",
                  badge: ar ? "معيار فحص الجودة" : "Quality Standard",
                  descAr: "مستوى الجودة المقبول 2.5: المعيار الإحصائي الدولي الصارم المعتمد لفحص العينات العشوائية أثناء مراحل التشغيل وقبل الشحن لضمان خلو الطلبيات من العيوب.",
                  descEn: "Acceptable Quality Limit: Strict statistical sampling standard (Level II, Major 2.5) governing inline inspections and pre-shipment audits.",
                },
                {
                  term: "Lab Dips (Color Matching)",
                  badge: ar ? "معايرة الألوان" : "Dyeing Lab",
                  descAr: "عينات مطابقة الألوان معمليًا: اختبارات صباغة معملية دقيقة على عينات قماش صغيرة لمطابقة كود لون بانتون المعتمد قبل صباغة بالات الأقمشة الكبرى.",
                  descEn: "Controlled lab-scale fabric dye test swatches formulated to match client-specified Pantone references under standard illuminants.",
                },
                {
                  term: "GSM (Grams per Square Meter)",
                  badge: ar ? "وزن وكثافة القماش" : "Fabric Weight",
                  descAr: "وزن القماش بالجرام لكل متر مربع: المعيار العلمي لتحديد سماكة وخفة النسيج وملاءمته للاستخدام الموسمي (مثال: 160-220 GSM للتيشيرت).",
                  descEn: "Grams per Square Meter: Quantitative fabric density metric determining seasonal weight, drape, and structural performance.",
                },
                {
                  term: "RFID (Radio-Frequency Identification)",
                  badge: ar ? "التتبع الذكي" : "Smart Logistics",
                  descAr: "شرائح التعريف بالترددات اللاسلكية: تقنية ذكية مدمجة في ليبل الملابس لتنظيم الجرد السريع وسلاسل الإمداد بالمتاجر والمنصات اللوجستية الكبرى.",
                  descEn: "Embedded radio-frequency tags in care labels or hangtags enabling automated inventory tracking and supply-chain reconciliation.",
                },
                {
                  term: "EUR-1 Movement Certificate",
                  badge: ar ? "شهادة تفضيلية" : "Trade Certificate",
                  descAr: "شهادة المنشأ التفضيلية EUR-1: وثيقة رسمية تمنح الصادرات المصرية إعفاءً جمركيًا كاملًا (0% جمارك) عند دخول أسواق دول الاتحاد الأوروبي.",
                  descEn: "Preferential origin certificate granting Egyptian garment exports 0% customs duty access across all European Union member states.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-border/80 bg-card/60 p-5 shadow-xs backdrop-blur-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-mono text-xs font-bold text-brand-green bg-brand-green/10 px-2.5 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    </div>
                    <h4 className="font-head text-sm font-bold text-foreground">
                      {item.term}
                    </h4>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                      {ar ? item.descAr : item.descEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. PRODUCTION CAPACITY (DESIGN VS ACTUAL VS AVAILABLE) */}
      <section id="production-capacity" className="scroll-mt-36">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <SectionBadge title={ar ? "الطاقة والقدرة الإنتاجية" : "Production Capacity"} />
            <h2 className="section-title mt-3 text-center mx-auto">{ar ? capacity.headingAr : capacity.headingEn}</h2>
            <p className="section-intro mt-3 text-center mx-auto">{ar ? capacity.subtitleAr : capacity.subtitleEn}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {capacity.capacities.map((cap) => (
              <div
                key={cap.type}
                className="rounded-3xl border border-white/50 bg-white/95 text-foreground shadow-sm dark:bg-card/90 p-8 backdrop-blur-xl flex flex-col justify-between transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-secondary text-foreground">
                      {ar ? cap.labelAr : cap.labelEn}
                    </span>
                  </div>

                  <div className="font-head text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500 drop-shadow-sm">
                    {ar ? cap.numberAr : cap.numberEn}
                  </div>
                  <div className="text-xs font-bold text-brand-green mt-1">
                    {ar ? cap.unitAr : cap.unitEn}
                  </div>

                  <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
                    {ar ? cap.descAr : cap.descEn}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/50">
                  <span className="text-[11px] font-semibold text-foreground/80 block">
                    {cap.type === "available" ? (ar ? "جاهزة للتعاقد الفوري للعلامات التجارية" : "Open for Immediate B2B Allocation") : (ar ? "تشغيل صناعي منتظم" : "Dedicated Industrial Operation")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 3. FULL INTEGRATED INDUSTRIAL CAPABILITIES (10 DISCIPLINES) */}
      <section id="industrial-capabilities" className="scroll-mt-36">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal>
            <div className="max-w-3xl mb-10">
              <SectionBadge title={ar ? "القدرات الصناعية المتكاملة" : "10 Industrial Capabilities"} />
              <h2 className="section-title mt-3">
                {ar ? "منظومة تصنيع متطورة من الخيط وحتى التعبئة للتصدير" : "End-to-End Industrial Capabilities"}
              </h2>
              <p className="section-intro mt-4">
                {ar
                  ? "تغطي منشآتنا الصناعية كافة مفاصل دورة التصنيع بماكينات أوتوماتيكية متطورة لضمان الدقة والسرعة والجودة."
                  : "Comprehensive industrial infrastructure covering pattern making, automated cutting, high-speed sewing, and export packing."}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {capabilities.map((cap) => (
                <div
                  key={cap.id}
                  className="group overflow-hidden rounded-3xl border border-border bg-card/60 backdrop-blur-md shadow-sm transition hover:border-brand-green/60 hover:shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                      <img
                        src={cap.image}
                        alt={ar ? cap.titleAr : cap.titleEn}
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <span className="absolute top-3 start-3 bg-black/70 text-white font-mono text-xs font-bold px-2.5 py-1 rounded-lg backdrop-blur-md">
                        {cap.number}
                      </span>
                    </div>

                    <div className="p-6 space-y-3">
                      <h3 className="font-head text-lg sm:text-xl font-bold text-foreground group-hover:text-brand-green transition-colors">
                        {ar ? cap.titleAr : cap.titleEn}
                      </h3>
                      <p className="text-xs sm:text-sm text-brand-orange-text font-medium">
                        {ar ? cap.leadAr : cap.leadEn}
                      </p>

                      <div className="pt-3 border-t border-border/50">
                        <span className="text-xs font-bold uppercase tracking-wider text-foreground block mb-2">
                          {ar ? "المواصفات والقدرات الفنية:" : "Technical Specifications & Scopes:"}
                        </span>
                        <ul className="space-y-1.5">
                          {(ar ? cap.specsAr : cap.specsEn).map((sp, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <CheckCircle2 className="size-3.5 text-brand-green shrink-0 mt-0.5" />
                              <span>{sp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. MANUFACTURING SERVICES (8 B2B SERVICES) */}
      <section id="manufacturing-services" className="scroll-mt-36">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <SectionBadge title={ar ? "خدمات التصنيع التعاقدي" : "Manufacturing Services"} />
                <h2 className="section-title mt-3">
                  {ar ? "برامج تصنيع وتوريد مرنة تناسب كبرى العلامات التجارية" : "8 Turnkey B2B Manufacturing Services"}
                </h2>
              </div>
              <Button asChild size="default" className="rounded-full bg-brand-green text-white hover:bg-brand-orange shrink-0">
                <Link to="/sectors/$sector" params={{ sector: "garment" }} search={{ tab: "services" }}>
                  <span>{ar ? "عرض كافة الخدمات (8 خدمات)" : "View All 8 Services"}</span>
                  <ArrowRight className="size-4 ms-2 rtl:rotate-180" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.slice(0, 4).map((srv) => (
                <div key={srv.id} className="group rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-md flex flex-col justify-between hover:border-brand-green transition">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs font-bold text-brand-green-text">{srv.number}</span>
                      <span className="text-[11px] font-bold text-brand-orange">{srv.id.toUpperCase()}</span>
                    </div>
                    <h4 className="text-center font-head text-base font-bold text-foreground group-hover:text-brand-green transition-colors">
                      {ar ? srv.titleAr : srv.titleEn}
                    </h4>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-3">
                      {ar ? srv.leadAr : srv.leadEn}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/50">
                    <Link
                      to="/sectors/$sector"
                      params={{ sector: "garment" }}
                      search={{ tab: "services" }}
                      className="text-xs font-bold text-brand-orange hover:underline inline-flex items-center gap-1"
                    >
                      <span>{ar ? "تفاصيل الخدمة" : "Learn More"}</span>
                      <ArrowRight className="size-3 rtl:rotate-180" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. PRODUCT CATEGORIES (11 CATEGORIES) */}
      <section id="product-categories" className="scroll-mt-36">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <SectionBadge title={ar ? "التصنيفات والمنتجات" : "Product Categories"} />
            <h2 className="section-title mt-3 text-center mx-auto">
              {ar ? "تنوع صناعي شامل" : "Comprehensive Apparel Diversity"}
            </h2>
            <p className="section-intro mt-3 text-center mx-auto">
              {ar ? "تخصص دقيق وقدرات إنتاجية لتلبية مختلف طلبات بيوت الأزياء وسلاسل التجزئة." : "Specialized production lines for diverse fashion genres from knit basics to tailored formalwear."}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat) => (
              <div key={cat.id} className="group rounded-2xl border border-white/20 bg-background/80 overflow-hidden shadow-sm backdrop-blur-xl transition hover:border-brand-orange hover:shadow-lg flex flex-col justify-between">
                <div>
                  {cat.image && (
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary">
                      <img
                        src={encodeURI(cat.image)}
                        alt={ar ? cat.nameAr : cat.nameEn}
                        loading="lazy"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                        }}
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <h4 className="text-center font-head text-sm font-bold text-foreground group-hover:text-brand-orange transition-colors">
                      {ar ? cat.nameAr : cat.nameEn}
                    </h4>
                    <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {ar ? cat.descriptionAr : cat.descriptionEn}
                    </p>
                    <div className="mt-3 pt-2.5 border-t border-border/40 flex flex-wrap gap-1">
                      {(ar ? cat.itemsAr : cat.itemsEn).slice(0, 2).map((item, idx) => (
                        <span key={idx} className="bg-secondary/60 text-[10px] font-medium px-2 py-0.5 rounded-md text-foreground">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button asChild size="default" className="rounded-full bg-brand-green text-white hover:bg-brand-orange shadow-md">
              <Link to="/models">
                <span>{ar ? "استعراض كتالوج الموديلات" : "Browse Models Catalogue"}</span>
                <ExternalLink className="size-4 ms-2" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>

      {/* 6. OUR MANUFACTURING PROCESS (10-STAGE LEAN PROTOCOL) */}
      <section id="manufacturing-process" className="scroll-mt-36">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <SectionBadge title={ar ? "منهجية ودورة التصنيع" : "Our Manufacturing Process"} />
              <h2 className="section-title mt-3">
                {ar ? "مسار تصنيع منضبط يضمن دقة التنفيذ وثبات الجودة" : "Disciplined Multi-Stage Manufacturing Protocol"}
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {garmentProcessSteps.map((step) => (
                <div key={step.step} className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-md shadow-sm">
                  <span className="font-mono text-xl font-black text-brand-orange">{step.step}</span>
                  <h4 className="mt-2 font-head text-sm font-bold text-foreground">{ar ? step.titleAr : step.titleEn}</h4>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{ar ? step.descAr : step.descEn}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. OUR FACTORY & SPECIALIZED CLASSIC SHIRT LINE */}
      <section id="our-factory" className="scroll-mt-36">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <SectionBadge title={ar ? "مصانعنا ومرافقنا" : "Our Factory & Dedicated Lines"} />
              <h2 className="section-title mt-3 text-center mx-auto">{ar ? shirtFacility.headingAr : shirtFacility.headingEn}</h2>
              <p className="section-intro mt-3 text-center mx-auto">{ar ? shirtFacility.subtitleAr : shirtFacility.subtitleEn}</p>
            </div>

            <div className="rounded-3xl border border-border bg-secondary/30 p-6 sm:p-8 backdrop-blur-md shadow-sm transition hover:border-brand-green/60 mb-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-border/50 pb-4 mb-6">
                <div>
                  <h3 className="font-head text-lg font-bold text-foreground">
                    {ar ? "خط إنتاج القمصان الكلاسيكية المستقل" : "Dedicated Classic Shirt Line"}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{ar ? shirtFacility.noteAr : shirtFacility.noteEn}</p>
                </div>
                <div className="inline-flex items-center justify-center rounded-full bg-brand-green px-4 py-2 font-head text-sm sm:text-base font-bold text-white shadow-sm transition hover:bg-brand-orange shrink-0">
                  <span>{ar ? shirtFacility.monthlyCapacityAr : shirtFacility.monthlyCapacityEn}</span>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {shirtFacility.specializedMachinery.map((mach, idx) => (
                  <div key={idx} className="rounded-2xl border border-border bg-secondary/40 p-4 backdrop-blur-md flex flex-col justify-between hover:border-brand-green transition-colors">
                    <span className="font-head text-xs font-bold text-foreground block">{ar ? mach.nameAr : mach.nameEn}</span>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{ar ? mach.descAr : mach.descEn}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. OUR PROJECTS & PORTFOLIO BREAKDOWN */}
      <section id="our-projects" className="scroll-mt-36">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <SectionBadge title={ar ? "سابقة الأعمال والتصنيع" : "Our Projects"} />
              <h2 className="section-title mt-3">
                {ar ? "تصنيف أعمالنا ونماذج الإنتاج المعتمدة" : "Categorized Manufacturing Portfolio"}
              </h2>
            </div>
            <Button asChild size="default" className="rounded-full bg-brand-green text-white hover:bg-brand-orange">
              <Link to="/sectors/$sector" params={{ sector: "garment" }} search={{ tab: "projects" }}>
                <span>{ar ? "استعراض معرض الموديلات" : "Explore Style Portfolio"}</span>
                <ArrowRight className="size-4 ms-2 rtl:rotate-180" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {garmentPortfolioTypes.map((pt) => (
              <div key={pt.id} className="rounded-2xl border border-white/20 bg-background/80 p-6 shadow-sm backdrop-blur-xl flex flex-col justify-between hover:border-brand-green transition">
                <div>
                  <span className="size-2 rounded-full bg-brand-green inline-block mb-3" />
                  <h4 className="font-head text-base font-bold text-foreground">{ar ? pt.titleAr : pt.titleEn}</h4>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{ar ? pt.descAr : pt.descEn}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/40">
                  <span className="text-[11px] font-semibold text-brand-orange">
                    {ar ? "موثق بسجل الإنتاج" : "Verified Production Spec"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 10. START YOUR MANUFACTURING PROJECT CTA */}
      <section id="start-project-cta" className="scroll-mt-36">
        <div className="overflow-hidden rounded-3xl border border-brand-green/30 bg-gradient-to-br from-brand-green/10 via-background to-brand-orange/5 p-8 sm:p-14 text-center shadow-xl backdrop-blur-2xl">
          <Reveal>
            <div className="max-w-3xl mx-auto">
              <div className="mb-3">
                <SectionBadge title={ar ? "تصنيع تعاقدي وتصدير دولي" : "Contract Manufacturing & Export Orders"} />
              </div>
              <h2 className="section-title mt-3 text-center mx-auto">
                {ar ? "جاهزون للبدء بأعلى معايير الجودة" : "Ready to Manufacture with the Highest Quality Standards"}
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed text-center mx-auto">
                {ar
                  ? "قدّم مواصفات طلبية التصنيع عبر النموذج متعدد المراحل، وسيقوم فريق المكتب الفني بدراسة متطلبات الأقمشة والكميات وتقديم عرض سعر تفصيلي خلال 48 ساعة عمل."
                  : "Submit your manufacturing brief through our multi-stage B2B proposal builder and our engineering team will provide a comprehensive costing within 48 business hours."}
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button asChild size="lg" className="rounded-full bg-brand-green text-white hover:bg-brand-orange shadow-lg px-8">
                  <Link to="/sectors/$sector" params={{ sector: "garment" }} search={{ tab: "start-project" }}>
                    <span>{ar ? "بدء طلب تصنيع جديد" : "Start Manufacturing Brief"}</span>
                    <ArrowRight className="size-4 ms-2 rtl:rotate-180" />
                  </Link>
                </Button>

                <Button asChild size="lg" className="rounded-full bg-brand-green text-white hover:bg-brand-orange shadow-md transition-all duration-300">
                  <Link to="/models">
                    <span>{ar ? "تصفح كتالوج الموديلات" : "Browse Model Catalogue"}</span>
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact Section */}
      <SectorContactSection ar={ar} sector="garment" />
    </div>
  );
}
