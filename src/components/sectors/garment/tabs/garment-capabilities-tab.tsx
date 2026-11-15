import { Link } from "@tanstack/react-router";
import { 
  CheckCircle2, 
  Factory, 
  Layers, 
  Shirt, 
  SlidersHorizontal, 
  Workflow, 
  ArrowRight,
  TrendingUp,
  Cpu,
  MessageCircle,
  Scissors,
  Sparkles,
  ShieldCheck,
  Package,
  Wrench,
  Gauge
} from "lucide-react";

import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/language-context";
import { 
  garmentProcessSteps, 
  garmentAboutData,
  garmentProductionCapacity,
  garmentClassicShirtFacility
} from "../garment-data";
import { cn } from "@/lib/utils";

function SectionBadge({ title }: { title: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
      <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
      {title}
    </span>
  );
}

export function GarmentCapabilitiesTab() {
  const { language } = useLanguage();
  const ar = language === "AR";
  const capacity = garmentProductionCapacity;
  const shirtFacility = garmentClassicShirtFacility;

  return (
    <div className="space-y-16 py-6">
      {/* 1. Production Capacity Breakdown (Design vs Actual vs Available) */}
      <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <SectionBadge title={ar ? "الطاقة والقدرة الصناعية المعتمدة" : "Certified Production Capacity"} />
            <h2 className="section-title mt-3">
              {ar ? capacity.headingAr : capacity.headingEn}
            </h2>
            <p className="section-intro mt-4">
              {ar ? capacity.subtitleAr : capacity.subtitleEn}
            </p>
          </div>

          {/* 3 Capacity Pillars */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
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
                    {cap.type === "available" ? (ar ? "جاهزة للتعاقد الفوري للعلامات التجارية" : "Ready for Allocation") : (ar ? "طاقة تشغيلية مستقرة" : "Sustained Operation")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* 2. Dedicated Classic Shirt Line */}
      <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto border-b border-border pb-6 mb-8">
            <SectionBadge title={ar ? "خط إنتاج القمصان الكلاسيكية" : "Dedicated Classic Shirt Line"} />
            <h2 className="section-title mt-3">{ar ? shirtFacility.headingAr : shirtFacility.headingEn}</h2>
            <p className="section-intro mt-3">{ar ? shirtFacility.subtitleAr : shirtFacility.subtitleEn}</p>
            <div className="inline-block mt-5 rounded-2xl border border-brand-green/40 bg-brand-green/10 p-4 text-center">
              <div className="font-head text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500 drop-shadow-sm">{ar ? shirtFacility.monthlyCapacityAr : shirtFacility.monthlyCapacityEn}</div>
              <div className="text-xs font-bold text-muted-foreground uppercase mt-1">{ar ? "طاقة الخط المعتمدة شهريًا" : "Certified Monthly Capacity"}</div>
            </div>
          </div>

          {/* Specialized Machinery */}
          <div className="mb-10">
            <h4 className="font-head text-sm font-bold uppercase tracking-wider text-foreground mb-4 flex items-center gap-2">
              <Cpu className="size-4 text-brand-green" />
              <span>{ar ? "الماكينات والتجهيزات التخصصية للقميص الكلاسيك:" : "Specialized Shirt Machinery Fleet:"}</span>
            </h4>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {shirtFacility.specializedMachinery.map((mach, idx) => (
                <div key={idx} className="rounded-2xl border border-border bg-secondary/30 p-4 backdrop-blur-md flex flex-col justify-between hover:border-brand-green transition-colors">
                  <span className="font-head text-xs font-bold text-foreground block">{ar ? mach.nameAr : mach.nameEn}</span>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{ar ? mach.descAr : mach.descEn}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tailoring Benchmarks */}
          <div className="grid gap-4 sm:grid-cols-3 rounded-2xl border border-border/80 bg-secondary/30 p-6">
            {shirtFacility.qualityBenchmarks.map((qb, idx) => (
              <div key={idx} className="text-center sm:text-start">
                <div className="font-head text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500 drop-shadow-sm">{qb.metric}</div>
                <div className="text-xs font-bold text-foreground mt-0.5">{ar ? qb.labelAr : qb.labelEn}</div>
                <p className="text-[11px] text-muted-foreground mt-1 leading-snug">{ar ? qb.descAr : qb.descEn}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>



      {/* 5. Garment B2B Technical Terms Glossary */}
      <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <SectionBadge title={ar ? "دليل المصطلحات الفنية والتجارية" : "B2B Technical Glossary"} />
            <h2 className="section-title mt-3">
              {ar ? "دليل مصطلحات تصنيع وتصدير الملابس B2B" : "Garment Manufacturing & Trade Terminology"}
            </h2>
            <p className="section-intro mt-3">
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
    </div>
  );
}
