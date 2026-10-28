import { Link } from "@tanstack/react-router";
import { ArrowRight, HardHat, Leaf, Users } from "lucide-react";

import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/language-context";
import { joinTracks, type JoinTrackId } from "@/components/join/join-data";

export function JoinShowcase() {
  const { language } = useLanguage();
  const ar = language === "AR";

  const cards: {
    id: JoinTrackId;
    icon: React.ReactNode;
  }[] = [
    {
      id: "group",
      icon: <Users className="size-6 text-brand-orange" />,
    },
    {
      id: "construction",
      icon: <HardHat className="size-6 text-brand-orange" />,
    },
    {
      id: "sustainability",
      icon: <Leaf className="size-6 text-brand-green" />,
    },
  ];

  return (
    <section id="join-us" className="site-container section-band">
      <Reveal className="max-w-3xl">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
          <span className="size-1.5 rounded-full bg-brand-green animate-pulse" />
          <span>{ar ? "فرص الانضمام والشراكة" : "Join Us & Partner"}</span>
        </div>
        <h2 className="section-title">
          {ar ? "شاركنا بناء المستقبل وصناعة القيمة" : "Build What's Next with SAMI BIN AYYAD GROUP"}
        </h2>
        <p className="section-intro mt-4">
          {ar
            ? "نرحب بالمهنيين المتميزين والشركاء الاستراتيجيين والموردين عبر ثلاثة مسارات تخصصية متكاملة."
            : "Explore dedicated pathways designed for ambitious professionals, engineering teams, sustainability experts, and corporate partners."}
        </p>
      </Reveal>

      {/* 3 Concise Join Us Cards */}
      <div data-stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(({ id, icon }) => {
          const track = joinTracks[id];
          return (
            <div
              key={id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/25 bg-background/80 p-6 sm:p-8 shadow-lg backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:border-brand-green/50 hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-secondary/80 shadow-xs backdrop-blur-md">
                    {icon}
                  </div>
                  <span className="rounded-full border border-border bg-secondary/60 px-3 py-1 font-mono text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                    {ar ? track.titleAr : track.titleEn}
                  </span>
                </div>

                <h3 className="mt-6 font-head text-lg sm:text-xl font-extrabold text-foreground leading-snug group-hover:text-brand-orange transition-colors">
                  &ldquo;{ar ? track.headlineAr : track.headlineEn}&rdquo;
                </h3>

                <p className="mt-3 text-xs sm:text-sm leading-6 text-muted-foreground line-clamp-3">
                  {ar ? track.descriptionAr : track.descriptionEn}
                </p>

                <div className="mt-4 pt-3 border-t border-border/60">
                  <p className="text-[11px] font-semibold text-foreground/80">
                    <span className="text-muted-foreground">{ar ? "المستهدفون: " : "Focus: "}</span>
                    {(ar ? track.targetAudienceAr : track.targetAudienceEn).slice(0, 3).join(" · ")}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border/80">
                <Button
                  asChild
                  size="sm"
                  className="w-full rounded-2xl bg-brand-green hover:bg-brand-orange text-white font-head font-bold shadow-sm transition-all"
                >
                  <Link to={track.url}>
                    <span>{ar ? "تقديم الطلب والمستندات" : "Explore & Apply"}</span>
                    <ArrowRight className="size-3.5 ms-2 rtl:rotate-180" />
                  </Link>
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
