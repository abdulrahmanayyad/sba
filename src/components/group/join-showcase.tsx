import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/language-context";
import { joinTracks } from "@/components/join/join-data";

export function JoinShowcase() {
  const { language } = useLanguage();
  const ar = language === "AR";
  const track = joinTracks.group;

  return (
    <section id="join" className="site-container pt-4 pb-16 scroll-mt-24">
      <Reveal>
        <div className="glass-box-interactive rounded-3xl p-8 sm:p-12 cursor-pointer">
          <div className="relative z-10">
            {/* Header portion */}
            <div className="max-w-3xl text-start">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
                <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                <span>{ar ? "انضم إلينا" : "Careers & Partnerships"}</span>
              </div>
              <h2 className="font-head text-xl sm:text-2xl lg:text-3xl font-extrabold text-foreground leading-snug">
                {ar ? "شاركنا بناء المستقبل وصناعة القيمة" : "Build What's Next with SAMI BIN AYYAD GROUP"}
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                {ar
                  ? "نرحب بالمهنيين المتميزين، والشركاء الاستراتيجيين، والمستثمرين، والشركات التي تشاركنا رؤيتنا للنمو المستدام والتميز التشغيلي."
                  : "We welcome ambitious professionals, strategic partners, investors, and organizations that share our vision for sustainable growth and operational excellence."}
              </p>
            </div>

            {/* Bottom track details and CTA portion */}
            <div className="mt-8 pt-8 border-t border-border/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-2xl space-y-3 text-start">
                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                  {ar ? track.descriptionAr : track.descriptionEn}
                </p>
                <div className="pt-2">
                  <p className="text-xs sm:text-sm font-semibold text-foreground/80">
                    <span className="text-brand-orange font-bold">{ar ? "المستهدفون: " : "Focus: "}</span>
                    {(ar ? track.targetAudienceAr : track.targetAudienceEn).join(" · ")}
                  </p>
                </div>
              </div>

              <div className="shrink-0 w-full md:w-auto">
                <Button
                  asChild
                  size="lg"
                  className="w-full md:w-auto rounded-full bg-brand-green hover:bg-brand-orange text-white font-head font-bold shadow-md transition-all px-8 py-3.5 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <Link to="/join/group">
                    <span>{ar ? "تقديم الطلب والمستندات" : "Explore & Apply"}</span>
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
}
