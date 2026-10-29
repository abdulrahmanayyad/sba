import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Award,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ChevronDown,
  Compass,
  FileCheck2,
  Handshake,
  HeartHandshake,
  Layers,
  Leaf,
  Lightbulb,
  Scale,
  Settings,
  ShieldCheck,
  Shirt,
  Sparkles,
  TrendingUp,
  User,
  Users2,
  Wheat,
} from "lucide-react";

import { HomeMotion, HomeReveal as Reveal } from "@/components/home/home-motion";
import { AnimatedStatistic } from "@/components/site/animated-statistic";
import { useLanguage } from "@/i18n/language-context";
import { cn } from "@/lib/utils";
import { highlightBrand } from "@/components/site/brand-text";
import { divisions, founders } from "@/components/group/group-data";
import {
  governanceData,
  ourApproachData,
  ourValuesData,
  policiesData,
  whatWeDoData,
  whoWeAreData,
  whySbaData,
} from "./about-data";

function SectionBadge({ title }: { title: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
      <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
      {title}
    </span>
  );
}

export function AboutPage() {
  const { language } = useLanguage();
  const ar = language === "AR";

  const sectorIcons = [Building2, Leaf, Shirt, Wheat];
  const valueIcons = [
    BadgeCheck,
    ShieldCheck,
    Scale,
    Award,
    Lightbulb,
    Handshake,
    Leaf,
    TrendingUp,
  ];

  return (
    <HomeMotion key={language} variant="group">
      {/* 1. Who We Are / من نحن */}
      <section id="whoWeAre" className="site-container py-12 scroll-mt-24">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-8 sm:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <Reveal>
              <SectionBadge title={ar ? "من نحن" : "About Us"} />
              <h1 className="section-title mt-3 text-xl sm:text-2xl lg:text-3xl">
                {ar ? whoWeAreData.titleAr : whoWeAreData.title}
              </h1>
              <div className="mt-6 space-y-4 text-base leading-8 text-muted-foreground">
                {whoWeAreData.paragraphs.map((p, idx) => (
                  <p key={idx}>{highlightBrand(ar ? p.ar : p.en)}</p>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
                {whoWeAreData.stats.map((stat) => (
                  <div key={stat.value} className={ar ? "text-right" : "text-left"}>
                    <p className={cn(
                      "font-head text-2xl sm:text-3xl font-black text-brand-orange drop-shadow-sm tracking-tight",
                      ar ? "text-right" : "text-left"
                    )}>
                      <AnimatedStatistic value={stat.value} />
                    </p>
                    <p className="mt-1 text-xs font-semibold text-muted-foreground sm:text-sm">
                      {ar ? stat.labelAr : stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card/40 shadow-sm">
                <img
                  src={divisions.find((d) => d.slug === "construction")?.image}
                  alt="SAMI BIN AYYAD GROUP Corporate"
                  loading="lazy"
                  width={944}
                  height={704}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="glass-dark absolute inset-x-4 bottom-4 rounded-xl p-5 sm:bottom-6 sm:start-6 sm:inset-x-auto sm:max-w-md">
                  <p className="font-mono text-xs uppercase tracking-wider text-brand-orange">
                    {ar ? "رؤيتنا وقيمنا" : "Our Vision & Values"}
                  </p>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-sm font-medium text-footer-foreground sm:text-base">
                    <span>{ar ? "• الالتزام والمسؤولية" : "• Commitment & Responsibility"}</span>
                    <span>{ar ? "• الجودة والابتكار" : "• Quality & Innovation"}</span>
                    <span>{ar ? "• الشراكات طويلة الأمد" : "• Long-term Partnerships"}</span>
                    <span>{ar ? "• الاستدامة والأثر" : "• Sustainable Impact"}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. What We Do / ماذا نفعل */}
      <section id="whatWeDo" className="site-container py-12 scroll-mt-24">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-8 sm:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionBadge title={ar ? "ماذا نفعل" : "What We Do"} />
            <h2 className="section-title mt-3">{ar ? whatWeDoData.titleAr : whatWeDoData.title}</h2>
            <p className="section-intro mx-auto mt-4">{highlightBrand(ar ? whatWeDoData.leadAr : whatWeDoData.lead)}</p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whatWeDoData.sectors.map((sector, index) => {
              const Icon = sectorIcons[index] ?? Layers;
              return (
                <Reveal key={sector.title} delay={index * 0.08}>
                  <div className="flex h-full flex-col justify-between rounded-2xl border border-white/20 bg-background/60 p-6 backdrop-blur-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-lg">
                    <div>
                      <div className="flex items-center justify-center text-center">
                        <span className="rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold text-muted-foreground">
                          {ar ? sector.tagAr : sector.tag}
                        </span>
                      </div>
                      <h3 className="mt-3 font-head text-xl font-bold">
                        {ar ? sector.titleAr : sector.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        {ar ? sector.bodyAr : sector.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Our Approach / نهجنا */}
      <section id="ourApproach" className="site-container py-12 scroll-mt-24">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-8 sm:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <Reveal className="lg:col-span-5">
              <SectionBadge title={ar ? "نهجنا" : "Our Approach"} />
              <h2 className="section-title mt-3 text-lg sm:text-xl lg:text-2xl">
                {ar ? ourApproachData.titleAr : ourApproachData.title}
              </h2>
              <div className="mt-6 space-y-4 text-base leading-7 text-muted-foreground">
                {ourApproachData.paragraphs.map((p, idx) => (
                  <p key={idx}>{highlightBrand(ar ? p.ar : p.en)}</p>
                ))}
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {ourApproachData.steps.map((step, idx) => (
                <Reveal key={step.num} delay={idx * 0.08}>
                  <div className="h-full rounded-2xl border border-white/20 bg-background/60 p-6 backdrop-blur-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/40 hover:shadow-md">
                    <span className="font-mono text-xs font-bold text-brand-orange">
                      {ar ? step.num : `STEP ${step.num}`}
                    </span>
                    <h3 className="mt-2 font-head text-lg font-bold">
                      {ar ? step.titleAr : step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {ar ? step.bodyAr : step.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Values / قيمنا */}
      <section id="ourValues" className="site-container py-12 scroll-mt-24">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-8 sm:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionBadge title={ar ? "قيمنا" : "Our Values"} />
            <h2 className="section-title mt-3">{ar ? ourValuesData.titleAr : ourValuesData.title}</h2>
            <p className="section-intro mx-auto mt-4">{highlightBrand(ar ? ourValuesData.leadAr : ourValuesData.lead)}</p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ourValuesData.values.map((item, index) => {
              const Icon = valueIcons[index] ?? CheckCircle2;
              return (
                <Reveal key={item.title} delay={index * 0.05}>
                  <div className="group flex h-full flex-col justify-between rounded-2xl border border-white/20 bg-background/60 p-6 backdrop-blur-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-md">
                    <div>
                      <h3 className="font-head text-lg font-bold">
                        {ar ? item.titleAr : item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {ar ? item.bodyAr : item.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Why Sami Bin Ayyad / لماذا سامي بن عياد */}
      <section id="whySba" className="site-container py-12 scroll-mt-24">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-8 sm:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionBadge title={ar ? "لماذا سامي بن عياد" : "Why Sami Bin Ayyad"} />
            <h2 className="section-title mt-3">{ar ? whySbaData.titleAr : whySbaData.title}</h2>
            <p className="section-intro mx-auto mt-4">{highlightBrand(ar ? whySbaData.leadAr : whySbaData.lead)}</p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whySbaData.pillars.map((pillar, idx) => (
              <Reveal key={pillar.title} delay={idx * 0.06}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-white/20 bg-background/60 p-6 backdrop-blur-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/40 hover:shadow-md">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 font-mono text-xs font-bold text-brand-orange">
                        0{idx + 1}
                      </span>
                      <h3 className="font-head text-lg font-bold">
                        {ar ? pillar.titleAr : pillar.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {ar ? pillar.bodyAr : pillar.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}

            {/* Conclusion card */}
            <Reveal delay={0.45} className="sm:col-span-2 lg:col-span-1">
              <div className="flex h-full flex-col justify-center items-center text-center rounded-2xl border border-brand-green/30 bg-gradient-to-br from-brand-green/10 via-background/60 to-background/80 p-6 backdrop-blur-xl shadow-sm transition-all duration-300 hover:scale-[1.01] hover:border-brand-orange/40 hover:shadow-lg">
                <h3 className="font-head text-lg sm:text-xl font-extrabold text-foreground">
                  {ar ? "تواصل معنا لبدء الشراكة" : "Connect with Us to Partner"}
                </h3>
                <div className="mt-5 w-full">
                  <Button asChild size="default" className="rounded-full bg-brand-green hover:bg-brand-orange text-white font-head font-bold shadow-md transition-all px-6 py-2.5">
                    <Link to="/contact">
                      {ar ? "تواصل معنا" : "Contact Us"}
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. Company Leadership / قيادة الشركة */}
      <section id="leadership" className="site-container py-12 scroll-mt-24">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-8 sm:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionBadge title={ar ? "قيادة الشركة" : "Company Leadership"} />
            <h2 className="section-title mt-3">{ar ? "قيادات تصنع الرؤية" : "The People Behind the Vision"}</h2>
            <p className="section-intro mx-auto mt-3">
              {ar
                ? "تقود المجموعة نخبة من المؤسسين والقياديين بخبرات متراكمة في إدارة الاستثمارات والتصنيع والخدمات البيئية والتطوير الأكاديمي."
                : "The group is led by experienced founders bringing decades of leadership across contracting, manufacturing, sustainability, and education."}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

            {founders.map((founder, index) => (
              <Reveal key={founder.role} delay={index * 0.08}>
                <LeaderCard founder={founder} ar={ar} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Company Governance / حوكمة الشركة */}
      <section id="governance" className="site-container py-12 scroll-mt-24">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-8 sm:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionBadge title={ar ? "حوكمة الشركة" : "Company Governance"} />
            <h2 className="section-title mt-3">{ar ? governanceData.titleAr : governanceData.title}</h2>
            <p className="section-intro mx-auto mt-4">{highlightBrand(ar ? governanceData.leadAr : governanceData.lead)}</p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {governanceData.principles.map((principle, idx) => (
              <Reveal key={principle.title} delay={idx * 0.05}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-white/20 bg-background/60 p-6 backdrop-blur-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-md">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex size-9 items-center justify-center rounded-lg bg-secondary text-xs font-bold text-brand-green">
                        {idx + 1}
                      </span>
                      <Compass className="size-4 text-muted-foreground/60" />
                    </div>
                    <h3 className="mt-4 font-head text-base font-bold">
                      {ar ? principle.titleAr : principle.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {ar ? principle.bodyAr : principle.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4} className="mx-auto mt-10 max-w-3xl">
            <div className="rounded-2xl border border-white/20 bg-background/60 p-5 text-center text-sm font-medium leading-relaxed text-muted-foreground backdrop-blur-md">
              {ar ? governanceData.conclusionAr : governanceData.conclusion}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. Policies / السياسات */}
      <section id="policies" className="site-container py-12 scroll-mt-24">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-8 sm:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionBadge title={ar ? "سياسات المجموعة" : "Group Policies"} />
            <h2 className="section-title mt-3">{ar ? policiesData.titleAr : policiesData.title}</h2>
            <p className="section-intro mx-auto mt-4">{highlightBrand(ar ? policiesData.leadAr : policiesData.lead)}</p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {policiesData.items.map((policy, idx) => (
              <Reveal key={policy.title} delay={idx * 0.04}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-white/20 bg-background/60 p-6 backdrop-blur-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-md">
                  <div>
                    <h3 className="font-head text-base font-bold">
                      {ar ? policy.titleAr : policy.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {ar ? policy.bodyAr : policy.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3} className="mx-auto mt-12 max-w-3xl">
            <div className="rounded-2xl border border-dashed border-border/80 bg-background/40 p-5 text-center text-xs font-medium leading-relaxed text-muted-foreground sm:text-sm backdrop-blur-md">
              {ar ? policiesData.disclaimerAr : policiesData.disclaimer}
            </div>
          </Reveal>
        </div>
      </section>
    </HomeMotion>
  );
}

function LeaderCard({
  founder,
  ar,
}: {
  founder: (typeof founders)[number];
  ar: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const bio = ar ? founder.bioAr : founder.bio;
  const isLong = bio.length > 100;
  const shortBio = isLong ? bio.slice(0, 100) + "..." : bio;

  return (
    <div className="glass-card group flex h-full flex-col justify-between rounded-3xl border border-white/20 bg-background/80 p-6 md:p-7 shadow-lg backdrop-blur-xl transition-all duration-300 hover:shadow-xl hover:border-brand-green/40">
      <div>
        {/* Photo — uniform square, full-width, centered crop */}
        <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl border border-brand-green/20 bg-gradient-to-br from-brand-green/10 via-background to-brand-orange/10 shadow-inner mb-5">
          {"image" in founder && founder.image ? (
            <img
              src={founder.image as string}
              alt={ar ? founder.nameAr : founder.name}
              className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-brand-green">
              <User className="size-16 opacity-40" />
            </div>
          )}
        </div>

        {/* Leader Info */}
        <div className="text-center mb-4">
          <span className={cn(
            "font-bold text-brand-orange block",
            ar ? "font-sans text-xs md:text-sm font-black tracking-normal" : "font-mono text-[11px] uppercase tracking-wider"
          )}>
            {ar ? founder.roleAr : founder.role}
          </span>
          <h3 className="mt-1 font-head text-lg md:text-xl font-bold text-foreground leading-snug">
            {ar ? founder.nameAr : founder.name}
          </h3>
        </div>

        {/* Bio area with See More toggle */}
        <div className="border-t border-border/50 pt-3">
          <p className="text-sm leading-relaxed text-muted-foreground transition-all duration-300">
            {expanded ? bio : shortBio}
          </p>
          {isLong && (
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="mt-3 text-xs font-semibold text-brand-orange hover:text-brand-orange/80 inline-flex items-center gap-1 focus-visible:outline-none transition-colors"
            >
              <span>{expanded ? (ar ? "عرض أقل" : "See Less") : (ar ? "اقرأ المزيد" : "See More")}</span>
              <ChevronDown className={cn("size-3.5 transition-transform duration-200", expanded && "rotate-180")} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}


