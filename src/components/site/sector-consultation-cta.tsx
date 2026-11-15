// Sector-Specific Free Consultation Call-to-Action
// SAMI BIN AYYAD GROUP — Specialized Multi-Sector Consultation Integration

import React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/home/reveal";

export type ConsultationSectorTarget = "construction" | "garment" | "environmental" | "food";

interface SectorConsultationCtaProps {
  sector: ConsultationSectorTarget;
  ar: boolean;
}

const SECTOR_CTA_CONFIG: Record<
  ConsultationSectorTarget,
  {
    headingAr: string;
    headingEn: string;
    supportingAr: string;
    supportingEn: string;
    buttonAr: string;
    buttonEn: string;
    secondaryAr: string;
    secondaryEn: string;
    badgeAr: string;
    badgeEn: string;
  }
> = {
  construction: {
    headingAr: "بناء رؤيتك القادمة يبدأ هنا.",
    headingEn: "Building Your Next Vision Starts Here.",
    supportingAr:
      "هل تخطط لمشروع إنشائي، أو تستكشف فرص التطوير العقاري، أو تبحث عن شريك موثوق لإدارة الأصول والتنفيذ؟ ناقش متطلباتك مع فريقنا الهندسي والاستشاري المتخصص لاستكشاف الحلول الأنسب لمشروعك.",
    supportingEn:
      "Planning a construction project, exploring real estate opportunities, or seeking a reliable development partner? Discuss your requirements with our specialized team and explore the right solutions for your project.",
    buttonAr: "ناقش مشروعك – استشارة مجانية",
    buttonEn: "Discuss Your Project – Free Consultation",
    secondaryAr: "من دراسة وتخطيط المشروعات حتى التنفيذ والتطوير المتكامل، لنستكشف الآفاق معًا.",
    secondaryEn: "From project planning to execution and development, let’s explore the possibilities together.",
    badgeAr: "استشارات المقاولات والتطوير العقاري",
    badgeEn: "Contracting & Real Estate Advisory"
  },
  garment: {
    headingAr: "ناقشنا باستشارة مجانية",
    headingEn: "Discuss with Us via Free Consultation",
    supportingAr:
      "تبحث عن شريك تصنيع موثوق، أو إنتاج بعلامتك الخاصة، أو حل متكامل لتطوير الأزياء. شاركنا مع خبرائنا واحصل على توجيه مهني مخصص",
    supportingEn:
      "Looking for a reliable manufacturing partner, private-label production, or complete apparel development? Connect with our specialists for tailored guidance.",
    buttonAr: "ناقش متطلبات التصنيع الخاصة بك",
    buttonEn: "Discuss Your Manufacturing Needs",
    secondaryAr: "",
    secondaryEn: "",
    badgeAr: "استشارات تصنيع وتطوير الملابس",
    badgeEn: "Apparel & Manufacturing Advisory"
  },
  environmental: {
    headingAr: "حوّل التحديات البيئية إلى فرص مستدامة.",
    headingEn: "Turn Environmental Challenges into Sustainable Opportunities.",
    supportingAr:
      "هل تستكشف حلول الطاقة المتجددة، إدارة وتدوير المخلفات، أو برامج الامتثال والاستدامة الصناعية؟ تواصل مع خبرائنا الفنيين لمناقشة متطلبات منشأتك وتحديد المسار الأنسب.",
    supportingEn:
      "Exploring renewable energy, waste management, recycling, or industrial sustainability solutions? Connect with our technical specialists to discuss your project requirements and identify suitable approaches.",
    buttonAr: "استكشف الحلول المستدامة",
    buttonEn: "Explore Sustainable Solutions",
    secondaryAr: "لنناقش كيف يمكن للحلول البيئية العملية دعم أهدافك التشغيلية والاستثمارية وخفض تكاليفك.",
    secondaryEn: "Let’s discuss how practical environmental solutions can support your operational and sustainability objectives.",
    badgeAr: "استشارات البيئة والطاقة المستدامة",
    badgeEn: "Sustainability & Clean Energy Advisory"
  },
  food: {
    headingAr: "لنبنِ شراكة توريد غذائي موثوقة.",
    headingEn: "Let’s Build Your Next Food Supply Partnership.",
    supportingAr:
      "تبحث عن منتجات طبيعية معتمدة، سلع زراعية وتمور مصرية ممتازة، أو فرص توريد وتصدير دولية موثوقة؟ شاركنا مواصفات منتجاتك واحتياجات سوقك المستهدف.",
    supportingEn:
      "Looking for reliable natural products, agricultural commodities, food sourcing, or international supply opportunities? Share your product specifications and market requirements with our team.",
    buttonAr: "ناقش متطلبات أعمالك الغذائية",
    buttonEn: "Discuss Your Food Business Needs",
    secondaryAr: "سواء كنت مهتمًا بالتوريد، الاستيراد، التصدير، التوزيع، أو الشراكات الاستراتيجية، فلنستكشف الفرصة معًا.",
    secondaryEn: "Whether you’re interested in sourcing, importing, exporting, distribution, or strategic partnerships, let’s explore the opportunity together.",
    badgeAr: "استشارات التوريد والتصدير الغذائي",
    badgeEn: "Agri-Food & Supply Chain Advisory"
  }
};

export const SectorConsultationCta: React.FC<SectorConsultationCtaProps> = ({ sector, ar }) => {
  const config = SECTOR_CTA_CONFIG[sector];

  return (
    <div className="py-8 scroll-mt-24">
      <Reveal>
        <div className="glass-box-interactive rounded-3xl p-8 sm:p-12 cursor-pointer">
          <div className="relative z-10">
            {/* Header portion */}
            <div className="max-w-3xl text-start">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
                <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                <span>{ar ? config.badgeAr : config.badgeEn}</span>
              </div>
              <h2 className="font-head text-xl sm:text-2xl lg:text-3xl font-extrabold text-foreground leading-snug">
                {ar ? config.headingAr : config.headingEn}
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                {ar ? config.supportingAr : config.supportingEn}
              </p>
            </div>

            {/* Bottom track details and CTA portion */}
            <div className="mt-8 pt-8 border-t border-border/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-2xl space-y-3 text-start">
                {Boolean((ar ? config.secondaryAr : config.secondaryEn)?.trim()) && (
                  <p className="text-xs sm:text-sm text-brand-orange font-medium leading-relaxed">
                    {ar ? config.secondaryAr : config.secondaryEn}
                  </p>
                )}
                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-4 text-brand-green shrink-0" />
                    <span className="font-semibold text-foreground/90">{ar ? "مجانية بالكامل – دون أي رسوم" : "100% Free – No Fees"}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="size-4 text-sky-500 shrink-0" />
                    <span>{ar ? "رد وتنسيق مباشر من المتخصصين" : "Direct Specialist Follow-up"}</span>
                  </div>
                </div>
              </div>

              <div className="shrink-0 w-full md:w-auto">
                <Button
                  asChild
                  size="lg"
                  className="w-full md:w-auto rounded-full bg-brand-green hover:bg-brand-orange text-white font-head font-bold shadow-md transition-all px-8 py-3.5 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <Link to="/request-consultation" search={{ sector }}>
                    <span>{ar ? config.buttonAr : config.buttonEn}</span>
                    <ArrowRight className="size-4 ms-2 rtl:rotate-180" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
