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
    <section className="site-container pt-4 pb-16 scroll-mt-24">
      <Reveal>
        <div className="glass-box-interactive rounded-3xl p-8 sm:p-12 cursor-pointer">
          <div className="relative z-10">
            {/* Header portion */}
            <div className="max-w-3xl text-start">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
                <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                <span>{ar ? "استشارة أعمال مجانية لكافة القطاعات" : "100% Free Consultation Across All Sectors"}</span>
              </div>
              <h2 className="font-head text-xl sm:text-2xl lg:text-3xl font-extrabold text-foreground leading-snug">
                {ar ? "لنناقش فرصتك التجارية القادمة" : "Let’s Discuss Your Next Opportunity"}
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                {ar
                  ? "كل شراكة ناجحة تبدأ بحوار استراتيجي واثق. شاركنا أهدافك التجارية، متطلبات مشروعك، أو رؤيتك التطويرية، واحصل على استشارة مهنية أولية مجانية بالكامل من المختصين في مجموعة سامي بن عياد."
                  : "Every successful partnership begins with the right conversation. Share your business objectives, project requirements, or ideas with our team, and receive a complimentary consultation from the relevant specialists at SAMI BIN AYYAD GROUP."}
              </p>
            </div>

            {/* Bottom track details and CTA portion */}
            <div className="mt-8 pt-8 border-t border-border/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-2xl space-y-3 text-start">
                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-4 text-brand-green shrink-0" />
                    <span className="font-semibold text-foreground/90">{ar ? "مجانية بالكامل 100% – دون أي رسوم" : "100% Free – No Consultation Fees."}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="size-4 text-sky-500 shrink-0" />
                    <span>{ar ? "توجيه مهني من مديري القطاعات" : "Direct Guidance from Sector Specialists"}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MessageSquare className="size-4 text-amber-500 shrink-0" />
                    <span>{ar ? "سرية تامة للبيانات (NDA)" : "Full Corporate Confidentiality"}</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground font-medium pt-1">
                  {ar ? "خدمة مخصصة للشركات والمستثمرين والمصانع" : "Dedicated desk for corporations, funds & developers"}
                </p>
              </div>

              <div className="shrink-0 w-full md:w-auto">
                <Button
                  asChild
                  size="lg"
                  className="w-full md:w-auto rounded-full bg-brand-green hover:bg-brand-orange text-white font-head font-bold shadow-md transition-all px-8 py-3.5 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <Link to="/request-consultation">
                    <span>{ar ? "احجز استشارتك المجانية" : "Request Your Free Consultation"}</span>
                    <ArrowRight className="size-4 ms-2 rtl:rotate-180" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};
