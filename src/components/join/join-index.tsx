import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building,
  CheckCircle2,
  HardHat,
  Leaf,
  Sparkles,
  Users,
} from "lucide-react";

import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/language-context";
import { cn } from "@/lib/utils";
import { joinTracks, type JoinTrackId } from "./join-data";

export function JoinIndexPage() {
  const { language } = useLanguage();
  const ar = language === "AR";

  const trackIds: JoinTrackId[] = ["group", "construction", "sustainability"];

  const icons: Record<JoinTrackId, React.ReactNode> = {
    group: <Users className="size-6 text-brand-orange" />,
    construction: <HardHat className="size-6 text-brand-orange" />,
    sustainability: <Leaf className="size-6 text-brand-green" />,
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden text-footer-foreground min-h-[45vh] flex items-center bg-footer">
        <div className="absolute inset-0 bg-gradient-to-t from-footer via-footer/90 to-footer/75" />
        <div className="site-container relative w-full py-16 sm:py-24 z-10 text-center max-w-4xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-1.5 text-xs font-bold tracking-wide text-white backdrop-blur-md mb-4">
              <span className="size-2 rounded-full bg-brand-green animate-pulse" />
              <span>{ar ? "بوابات التوظيف والشراكات الاستراتيجية" : "Careers & Strategic Partnerships"}</span>
            </div>

            <h1 className="font-head text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[1.1] text-white drop-shadow-md">
              {ar ? "انضم إلى منظومة سامي بن عياد" : "Join SAMI BIN AYYAD GROUP"}
            </h1>

            <p className="mt-4 text-base sm:text-lg font-medium leading-relaxed text-footer-foreground/90 max-w-2xl mx-auto">
              {ar
                ? "ثلاثة مسارات تخصصية متكاملة تتيح للمهنيين، والمهندسين، والخبراء، والشركات، والموردين الانضمام إلى مسيرة التميز وبناء المستقبل عبر قطاعاتنا الحيوية."
                : "Three dedicated pathways welcoming professionals, engineers, environmental specialists, corporate partners, and suppliers across our strategic divisions."}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3 Dedicated Pathways Cards */}
      <section className="site-container py-16 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-3">
          {trackIds.map((id, idx) => {
            const track = joinTracks[id];
            return (
              <Reveal key={id} delay={idx * 0.08}>
                <div className="group flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/25 bg-background/80 shadow-lg backdrop-blur-2xl transition-all duration-300 hover:shadow-2xl hover:border-brand-green/50 hover:-translate-y-1.5">
                  <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                    <img
                      src={track.heroImage}
                      alt={ar ? track.titleAr : track.titleEn}
                      className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

                    <div className="absolute top-4 start-4 flex size-12 items-center justify-center rounded-2xl bg-background/85 shadow-md backdrop-blur-md">
                      {icons[id]}
                    </div>

                    <div className="absolute bottom-4 start-4 end-4">
                      <span className="text-[11px] font-bold text-white/80 uppercase tracking-wider block">
                        {ar ? track.eyebrowAr : track.eyebrowEn}
                      </span>
                      <h3 className="mt-1 font-head text-lg sm:text-xl font-extrabold text-white leading-snug">
                        {ar ? track.headlineAr : track.headlineEn}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-head text-base sm:text-lg font-bold text-foreground">
                        {ar ? track.titleAr : track.titleEn}
                      </h4>

                      <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {ar ? track.descriptionAr : track.descriptionEn}
                      </p>

                      <div className="mt-6 border-t border-border pt-4">
                        <span className="text-xs font-bold text-foreground block mb-2">
                          {ar ? "الفئات والشركاء المستهدفون:" : "Target Roles & Partners:"}
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {(ar ? track.targetAudienceAr : track.targetAudienceEn).slice(0, 4).map((item, tIdx) => (
                            <span
                              key={tIdx}
                              className="rounded-lg border border-border bg-secondary/50 px-2.5 py-1 text-[11px] font-medium text-foreground/80"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-border">
                      <Button
                        asChild
                        size="lg"
                        className="w-full rounded-2xl bg-brand-green hover:bg-brand-orange text-white font-head font-bold shadow-md transition-all group-hover:shadow-brand-green/30"
                      >
                        <Link to={track.url}>
                          <span>{ar ? "الدخول وبدء التقديم" : "Explore & Apply"}</span>
                          <ArrowRight className="size-4 ms-2 rtl:rotate-180" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
