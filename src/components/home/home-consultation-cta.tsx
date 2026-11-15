// Homepage Consultation Call-to-Action Section
// SAMI BIN AYYAD GROUP — Corporate Free Consultation Integration

import React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MessageSquare, ShieldCheck } from "lucide-react";
import { Reveal } from "./reveal";
import { Button } from "@/components/ui/button";

interface HomeConsultationCtaProps {
  ar: boolean;
}

export const HomeConsultationCta: React.FC<HomeConsultationCtaProps> = ({ ar }) => {
  return (
    <section className="site-container py-8 sm:py-12 scroll-mt-24">
      <Reveal>
        <div className="group relative overflow-hidden rounded-3xl border border-white/25 bg-slate-900/40 hover:bg-slate-900/55 p-8 sm:p-12 lg:p-14 text-white shadow-[0_16px_50px_rgba(0,0,0,0.25)] backdrop-blur-2xl transition-all duration-300 hover:border-brand-green/50 hover:shadow-brand-green/15 hover:-translate-y-0.5 interactive-card">
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute top-0 right-0 size-96 rounded-full bg-brand-green/20 blur-3xl pointer-events-none transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute bottom-0 left-0 size-80 rounded-full bg-brand-orange/15 blur-3xl pointer-events-none transition-transform duration-500 group-hover:scale-110" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-12 items-center">
            {/* Left/Content Column */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3.5 py-1 text-xs font-bold tracking-wide text-white backdrop-blur-md shadow-md">
                <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                <span>{ar ? "استشارة أعمال مجانية لكافة القطاعات" : "100% Free Consultation Across All Sectors"}</span>
              </div>

              <h2 className="font-head text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-snug tracking-tight text-white drop-shadow-md">
                {ar ? "لنناقش فرصتك التجارية القادمة" : "Let’s Discuss Your Next Opportunity."}
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-slate-200 max-w-2xl">
                {ar
                  ? "كل شراكة ناجحة تبدأ بحوار استراتيجي واثق. شاركنا أهدافك التجارية، متطلبات مشروعك، أو رؤيتك التطويرية، واحصل على استشارة مهنية أولية مجانية بالكامل من المختصين في مجموعة سامي بن عياد."
                  : "Every successful partnership begins with the right conversation. Share your business objectives, project requirements, or ideas with our team, and receive a complimentary consultation from the relevant specialists at SAMI BIN AYYAD GROUP."}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-brand-green shrink-0" />
                  <span className="font-semibold">{ar ? "مجانية بالكامل 100% – دون أي رسوم" : "100% Free – No Consultation Fees."}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="size-4 text-sky-400 shrink-0" />
                  <span>{ar ? "توجيه مهني من مديري القطاعات" : "Direct Guidance from Sector Specialists"}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MessageSquare className="size-4 text-amber-400 shrink-0" />
                  <span>{ar ? "سرية تامة للبيانات (NDA)" : "Full Corporate Confidentiality"}</span>
                </div>
              </div>
            </div>

            {/* Right/CTA Button Column */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <div className="flex flex-col items-center text-center w-full sm:w-auto">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto rounded-full !bg-brand-green !text-white px-8 py-4 font-head text-sm sm:text-base font-bold shadow-xl shadow-brand-green/20 transition-all duration-300 hover:!bg-brand-orange hover:shadow-brand-orange/30 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <Link to="/request-consultation">
                    <span>{ar ? "احجز استشارتك المجانية" : "Request Your Free Consultation"}</span>
                    <ArrowRight className="size-4 rtl:rotate-180 ms-2" />
                  </Link>
                </Button>
                <span className="mt-2.5 text-[11px] text-slate-300 text-center font-medium">
                  {ar ? "خدمة مخصصة للشركات والمستثمرين والمصانع" : "Dedicated desk for corporations, funds & developers"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

