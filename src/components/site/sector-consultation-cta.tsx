// Sector-Specific Free Consultation Call-to-Action
// SAMI BIN AYYAD GROUP — Specialized Multi-Sector Consultation Integration

import React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MessageSquare, ShieldCheck, Sparkles } from "lucide-react";
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
    headingAr: "لنحوّل مجموعتك القادمة إلى واقع تصنيعي.",
    headingEn: "Let’s Bring Your Next Collection to Life.",
    supportingAr:
      "تبحث عن شريك تصنيع موثوق، أو إنتاج بعلامتك الخاصة (Private Label)، أو حل متكامل لتطوير الأزياء؟ شاركنا مواصفات مجموعتك مع خبرائنا واحصل على توجيه مهني مخصص لعلامتك التجارية.",
    supportingEn:
      "Looking for a reliable manufacturing partner, private-label production, or a complete apparel development solution? Share your collection requirements with our specialists and receive professional guidance tailored to your brand.",
    buttonAr: "ناقش متطلبات التصنيع الخاصة بك",
    buttonEn: "Discuss Your Manufacturing Needs",
    secondaryAr: "من تطوير العينات الفنية حتى نماذج CM و CMT و FOB و OEM و ODM والتصنيع الخاص، نحن جاهزون لمناقشة فرصتك الإنتاجية القادمة.",
    secondaryEn:
      "From product development and sampling to CM, CMT, FOB, OEM, ODM, and private-label manufacturing, we’re ready to discuss your next production opportunity.",
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
        <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-800/90 p-8 sm:p-12 text-white shadow-2xl backdrop-blur-2xl">
          <div className="absolute top-0 right-0 size-80 rounded-full bg-brand-green/15 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 size-72 rounded-full bg-brand-orange/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-3.5">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-green/30 bg-black/60 px-3.5 py-1 text-xs font-bold tracking-wide text-brand-green backdrop-blur-md shadow-md">
                <Sparkles className="size-3.5 animate-pulse" />
                <span>{ar ? config.badgeAr : config.badgeEn}</span>
                <span className="text-[10px] text-white/70 ms-1 bg-white/10 px-2 py-0.2 rounded-full">
                  {ar ? "استشارة مجانية 100%" : "100% Free Consultation"}
                </span>
              </div>

              <h3 className="font-head text-2xl sm:text-3xl font-extrabold leading-snug tracking-tight text-white drop-shadow-md">
                {ar ? config.headingAr : config.headingEn}
              </h3>

              <p className="text-sm sm:text-base leading-relaxed text-slate-200 max-w-2xl">
                {ar ? config.supportingAr : config.supportingEn}
              </p>

              <p className="text-xs text-brand-orange font-medium leading-relaxed max-w-2xl">
                {ar ? config.secondaryAr : config.secondaryEn}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-brand-green shrink-0" />
                  <span className="font-semibold">{ar ? "مجانية بالكامل – دون أي رسوم" : "100% Free – No Fees"}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="size-4 text-sky-400 shrink-0" />
                  <span>{ar ? "رد وتنسيق مباشر من المتخصصين" : "Direct Specialist Follow-up"}</span>
                </div>
              </div>
            </div>

            {/* Right Action */}
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center gap-2.5">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto rounded-full !bg-brand-green !text-white px-8 py-4 font-head text-sm font-bold shadow-xl shadow-brand-green/20 transition-all duration-300 hover:!bg-brand-orange hover:shadow-brand-orange/30 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Link to="/request-consultation" search={{ sector }}>
                  <span>{ar ? config.buttonAr : config.buttonEn}</span>
                  <ArrowRight className="size-4 rtl:rotate-180 ms-2" />
                </Link>
              </Button>
              <span className="text-[11px] text-slate-400 text-center lg:text-end w-full sm:w-auto">
                {ar ? "يتم توجيه الطلب فورًا إلى إدارة القطاع" : "Directly routed to the sector directorship"}
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

