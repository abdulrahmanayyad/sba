import { Link } from "@tanstack/react-router";
import { ArrowRight, Users } from "lucide-react";

import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/language-context";
import { joinTracks } from "@/components/join/join-data";

export function JoinShowcase() {
  const { language } = useLanguage();
  const ar = language === "AR";
  const track = joinTracks.group;

  return (
    <section id="join" className="site-container section-band scroll-mt-24">
      <Reveal className="max-w-3xl">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
          <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
          <span>{ar ? "انضم إلينا والشراكات" : "Careers & Partnerships"}</span>
        </div>
        <h2 className="section-title">
          {ar ? "شاركنا بناء المستقبل وصناعة القيمة" : "Build What's Next with SAMI BIN AYYAD GROUP"}
        </h2>
        <p className="section-intro mt-4">
          {ar
            ? "نرحب بالمهنيين المتميزين، والشركاء الاستراتيجيين، والمستثمرين، والشركات التي تشاركنا رؤيتنا للنمو المستدام والتميز التشغيلي."
            : "We welcome ambitious professionals, strategic partners, investors, and organizations that share our vision for sustainable growth and operational excellence."}
        </p>
      </Reveal>

      {/* Single Dedicated Group Join Card */}
      <div className="mt-10">
        <div
          className="group relative flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden rounded-3xl border border-white/25 bg-background/80 p-8 sm:p-12 shadow-lg backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:border-brand-orange/50 hover:scale-[1.01]"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-secondary/80 shadow-xs backdrop-blur-md text-brand-orange">
                <Users className="size-6" />
              </div>
              <span className="rounded-full border border-border bg-secondary/60 px-3.5 py-1 text-xs font-bold text-brand-orange">
                {ar ? track.titleAr : track.titleEn}
              </span>
            </div>

            <h3 className="mt-5 font-head text-2xl sm:text-3xl font-extrabold text-foreground leading-snug group-hover:text-brand-orange transition-colors">
              &ldquo;{ar ? track.headlineAr : track.headlineEn}&rdquo;
            </h3>

            <p className="mt-3 text-sm sm:text-base leading-7 text-muted-foreground">
              {ar ? track.descriptionAr : track.descriptionEn}
            </p>

            <div className="mt-5 pt-4 border-t border-border/60">
              <p className="text-xs sm:text-sm font-semibold text-foreground/80">
                <span className="text-brand-orange">{ar ? "المستهدفون: " : "Focus: "}</span>
                {(ar ? track.targetAudienceAr : track.targetAudienceEn).join(" · ")}
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <Button
              asChild
              size="lg"
              className="w-full md:w-auto rounded-full bg-brand-green hover:bg-brand-orange text-white font-head font-bold shadow-md transition-all px-8 py-3.5 hover:scale-105 active:scale-95"
            >
              <Link to="/join/group">
                <span>{ar ? "تقديم الطلب والمستندات" : "Explore & Apply"}</span>
                <ArrowRight className="size-4 ms-2 rtl:rotate-180" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
