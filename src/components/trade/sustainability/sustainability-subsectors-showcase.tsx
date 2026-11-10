import React from "react";
import { 
  Sun, 
  Recycle, 
  Droplets, 
  Factory, 
  TrendingUp, 
  CheckCircle2, 
  Building2,
  Cpu,
  Layers
} from "lucide-react";
import { SUSTAINABILITY_STATS } from "@/lib/sustainability-trade-data";

interface SustainabilitySubsectorsShowcaseProps {
  ar?: boolean;
}

export function SustainabilitySubsectorsShowcase({ ar = true }: SustainabilitySubsectorsShowcaseProps) {
  const subsectors = [
    {
      id: "renewable",
      sectionNumber: ar ? "القسم السادس" : "Section 6",
      titleAr: "فرص الطاقة المتجددة وكفاءة الطاقة",
      titleEn: "Renewable Energy & Energy Efficiency",
      taglineAr: "محطات الطاقة الشمسية للقطاع التجاري والصناعي، أنظمة التخزين، وترشيد استهلاك الكهرباء",
      taglineEn: "Commercial & Industrial Solar PV, BESS storage, and industrial energy efficiency",
      icon: Sun,
      color: "text-amber-500",
      accentBg: "bg-amber-500/10 border-amber-500/30",
      statCount: SUSTAINABILITY_STATS.renewableCount,
      statLabelAr: "فرص موثقة بالدراسة",
      statLabelEn: "Verified Opportunities",
      pointsAr: [
        "محطات الطاقة الشمسية على أسطح المنشآت الصناعية والمستودعات بنظام صافي القياس",
        "حلول التوليد الهجين لتقليل استهلاك الديزل في المشاريع الزراعية والمناطق النائية",
        "التدقيق الطاقي واستبدال المحركات الصناعية عالية الفاقد وفق كودات كفاءة الطاقة",
        "أنظمة استرداد الحرارة العادمة من الأفران والمولدات لخفض تكاليف الوقود"
      ],
      pointsEn: [
        "Commercial rooftop solar PV for factories and logistics parks under Net Metering",
        "Hybrid solar-diesel-battery architectures for isolated agricultural and remote sites",
        "Level 2/3 industrial energy audits and IE3/IE4 electric motor retrofits",
        "Waste heat recovery from industrial exhaust flues for process steam and preheating"
      ]
    },
    {
      id: "waste",
      sectionNumber: ar ? "القسم السابع" : "Section 7",
      titleAr: "فرص إدارة المخلفات والاقتصاد الدائري",
      titleEn: "Waste Management & Circular Economy",
      taglineAr: "إدارة المخلفات الصناعية والزراعية، استرداد المواد، وإنتاج بدائل الوقود والمخصبات",
      taglineEn: "Industrial & agri-waste management, materials recovery, and waste-to-resource valorization",
      icon: Recycle,
      color: "text-brand-green",
      accentBg: "bg-brand-green/10 border-brand-green/30",
      statCount: SUSTAINABILITY_STATS.wasteCircularCount,
      statLabelAr: "فرص ومشاريع معلنة",
      statLabelEn: "Announced Opportunities",
      pointsAr: [
        "عقود إدارة المخلفات الصناعية غير الخطرة للمصانع وسلاسل التوريد الكبرى",
        "مراكز الفرز واسترداد المواد (MRF) للبلاستيك والكرتون والمعادن لإعادة التدوير",
        "تثمين مخلفات النخيل والزيتون والمحاصيل لإنتاج الكمبوست المعقم والوقود الحيوي",
        "إنتاج بدائل الوقود RDF لمصانع الأسمنت من المرفوضات غير القابلة للتدوير"
      ],
      pointsEn: [
        "Comprehensive non-hazardous industrial waste management contracts for manufacturers",
        "Materials Recovery Facilities (MRF) sorting PET/HDPE polymers and corrugated cardboard",
        "Agricultural residue valorization (date palm and olive biomass) into bio-fertilizers",
        "Refuse-Derived Fuel (RDF) production for heavy industry and cement kilns"
      ]
    },
    {
      id: "water",
      sectionNumber: ar ? "القسم الثامن" : "Section 8",
      titleAr: "فرص المياه وإدارة الموارد المائية",
      titleEn: "Water & Resource Management",
      taglineAr: "معالجة مياه الصرف الصناعي، أنظمة الدوائر المغلقة، وترشيد الاستهلاك الزراعي",
      taglineEn: "Industrial effluent treatment, closed-loop water reuse, and precision irrigation",
      icon: Droplets,
      color: "text-sky-500",
      accentBg: "bg-sky-500/10 border-sky-500/30",
      statCount: SUSTAINABILITY_STATS.waterResourcesCount,
      statLabelAr: "مشاريع بنية تحتية ومياه",
      statLabelEn: "Water Utility Programs",
      pointsAr: [
        "محطات معالجة الصرف الصناعي (ETP) الكيميائية والبيولوجية للمصانع",
        "أنظمة إعادة تدوير المياه والتصريف السائل الصفري (ZLD) لإعادة استخدام 95% من المياه",
        "أنظمة الري بالتنقيط الذكي والمحكوم بالحساسات لمزارع النخيل والزيتون",
        "شبكات توزيع المياه المعالجة للمجمعات الصناعية والمساحات الخضراء"
      ],
      pointsEn: [
        "Physical-chemical and biological industrial Effluent Treatment Plants (ETP)",
        "Zero Liquid Discharge (ZLD) and advanced membrane reverse osmosis recycling",
        "Sensor-guided precision drip irrigation telemetry for commercial plantations",
        "Industrial treated sewage effluent (TSE) distribution loops for manufacturing"
      ]
    },
    {
      id: "industrial",
      sectionNumber: ar ? "القسم الخامس والتاسع" : "Sections 5 & 9",
      titleAr: "فرص المشروعات الصناعية والتجارية والاستثمارية",
      titleEn: "Industrial, Commercial & Investment Opportunities",
      taglineAr: "برامج خفض الانبعاثات، الاستدامة للمصدرين، والتحالفات الاستثمارية المشتركة",
      taglineEn: "Supply chain decarbonization, EU CBAM compliance, and PPP co-investments",
      icon: Factory,
      color: "text-indigo-500",
      accentBg: "bg-indigo-500/10 border-indigo-500/30",
      statCount: SUSTAINABILITY_STATS.partnershipsCount,
      statLabelAr: "تحالفات استثمارية مطروحة",
      statLabelEn: "Strategic Alliances",
      pointsAr: [
        "تأهيل المصانع لمتطلبات ضريبة الكربون الأوروبية الحدودية (CBAM)",
        "تطبيق بروتوكولات Higg FEM ومبادرة ZDHC لسلاسل إمداد الملابس الجاهزة",
        "هيكلة التحالفات الاستثمارية لمشاريع الشراكة بين القطاعين العام والخاص (PPP / BOT)",
        "عقود التشغيل والصيانة (O&M) طويلة الأجل للمرافق البيئية ومحطات المياه"
      ],
      pointsEn: [
        "EU Carbon Border Adjustment Mechanism (CBAM) advisory for industrial exporters",
        "Higg FEM and ZDHC environmental compliance for export garment manufacturers",
        "Structuring consortiums for municipal and utility PPP / BOT concessions",
        "Performance-based Operations & Maintenance (O&M) for environmental facilities"
      ]
    }
  ];

  return (
    <div id="subsectors-showcase" className="interactive-card glass-box-interactive w-full rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl backdrop-blur-2xl transition-all duration-300">
      {/* Header */}
      <div>
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
          <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
          <span>{ar ? "الأقسام 5–9: الفرص القطاعية المتخصصة والاستثمار" : "Sections 5–9: Subsectors & Investment Opportunities"}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5 leading-snug">
          {ar ? "الفرص القطاعية المتخصصة ومجالات الاستثمار البيئي" : "Specialized Subsectors & Green Investment Fields"}
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed max-w-4xl">
          {ar
            ? "استعراض معمق لمجالات الطاقة المتجددة، إدارة المخلفات، الموارد المائية، والاستدامة الصناعية، موجه للمستثمرين والشركاء الصناعيين والجهات الحكومية."
            : "Deep-dive analysis across renewable energy, circular waste, water resources, and industrial decarbonization for investors and technical partners."}
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {subsectors.map((sec) => {
          const Icon = sec.icon;

          return (
            <div
              key={sec.id}
              className="rounded-3xl border border-white/15 bg-background/70 p-6 backdrop-blur-xl shadow-lg space-y-4 hover:border-brand-green/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-2xl border ${sec.accentBg}`}>
                      <Icon className={`size-6 ${sec.color}`} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block">
                        {sec.sectionNumber}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug">
                        {ar ? sec.titleAr : sec.titleEn}
                      </h3>
                    </div>
                  </div>

                  <div className="text-end shrink-0">
                    <span className="font-mono text-xl font-black text-foreground block">
                      {sec.statCount}
                    </span>
                    <span className="text-[10px] text-muted-foreground block">
                      {ar ? sec.statLabelAr : sec.statLabelEn}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed pt-3">
                  {ar ? sec.taglineAr : sec.taglineEn}
                </p>
              </div>

              {/* Points List */}
              <div className="rounded-2xl border border-white/10 bg-secondary/40 p-4 space-y-2">
                <span className="text-[11px] font-bold text-foreground block">
                  {ar ? "أبرز محاور وفرص القطاع:" : "Core Strategic Pillars:"}
                </span>
                <ul className="space-y-1.5 text-xs text-foreground/80">
                  {(ar ? sec.pointsAr : sec.pointsEn).map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="size-3.5 text-brand-green shrink-0 mt-0.5" />
                      <span className="leading-snug">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

