import { Link } from "@tanstack/react-router";
import {
  Award,
  BadgeCheck,
  Building2,
  CheckCircle2,
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
  Users2,
  Wheat,
} from "lucide-react";

import { HomeMotion, HomeReveal as Reveal } from "@/components/home/home-motion";
import { useLanguage } from "@/i18n/language-context";
import { cn } from "@/lib/utils";
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
      <section id="whoWeAre" className="site-container section-band scroll-mt-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <Reveal>
            <p className="eyebrow">{ar ? whoWeAreData.eyebrowAr : whoWeAreData.eyebrow}</p>
            <h1 className="section-title mt-2">
              {ar ? whoWeAreData.titleAr : whoWeAreData.title}
            </h1>
            <div className="mt-6 space-y-4 text-base leading-8 text-muted-foreground">
              {whoWeAreData.paragraphs.map((p, idx) => (
                <p key={idx}>{ar ? p.ar : p.en}</p>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
              {whoWeAreData.stats.map((stat) => (
                <div key={stat.value}>
                  <p className="font-head text-2xl font-bold text-brand-orange-text sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
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
      </section>

      {/* 2. What We Do / ماذا نفعل */}
      <section id="whatWeDo" className="bg-page-alt section-band scroll-mt-24 border-y border-border/60">
        <div className="site-container">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">{ar ? whatWeDoData.eyebrowAr : whatWeDoData.eyebrow}</p>
            <h2 className="section-title mt-2">{ar ? whatWeDoData.titleAr : whatWeDoData.title}</h2>
            <p className="section-intro mx-auto mt-4">{ar ? whatWeDoData.leadAr : whatWeDoData.lead}</p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whatWeDoData.sectors.map((sector, index) => {
              const Icon = sectorIcons[index] ?? Layers;
              return (
                <Reveal key={sector.title} delay={index * 0.08}>
                  <div className="glass-card group flex h-full flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-lg">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="flex size-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green-text transition-colors group-hover:bg-brand-green group-hover:text-footer-foreground">
                          <Icon aria-hidden="true" className="size-6" />
                        </span>
                        <span className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                          {ar ? sector.tagAr : sector.tag}
                        </span>
                      </div>
                      <h3 className="mt-5 font-head text-xl font-semibold">
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
      <section id="ourApproach" className="site-container section-band scroll-mt-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">{ar ? ourApproachData.eyebrowAr : ourApproachData.eyebrow}</p>
            <h2 className="section-title mt-2">
              {ar ? ourApproachData.titleAr : ourApproachData.title}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-7 text-muted-foreground">
              {ourApproachData.paragraphs.map((p, idx) => (
                <p key={idx}>{ar ? p.ar : p.en}</p>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {ourApproachData.steps.map((step, idx) => (
              <Reveal key={step.num} delay={idx * 0.08}>
                <div className="glass-card h-full p-6 transition-transform hover:-translate-y-1">
                  <span className="font-mono text-xs font-bold text-brand-orange-text">
                    STEP {step.num}
                  </span>
                  <h3 className="mt-2 font-head text-lg font-semibold">
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
      </section>

      {/* 4. Our Values / قيمنا */}
      <section id="ourValues" className="bg-page-alt section-band scroll-mt-24 border-y border-border/60">
        <div className="site-container">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">{ar ? ourValuesData.eyebrowAr : ourValuesData.eyebrow}</p>
            <h2 className="section-title mt-2">{ar ? ourValuesData.titleAr : ourValuesData.title}</h2>
            <p className="section-intro mx-auto mt-4">{ar ? ourValuesData.leadAr : ourValuesData.lead}</p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ourValuesData.values.map((item, index) => {
              const Icon = valueIcons[index] ?? CheckCircle2;
              return (
                <Reveal key={item.title} delay={index * 0.05}>
                  <div className="glass-card group flex h-full flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/30">
                    <div>
                      <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-brand-green-text transition-colors duration-300 group-hover:bg-brand-green group-hover:text-footer-foreground">
                        <Icon aria-hidden="true" className="size-5" />
                      </span>
                      <h3 className="mt-4 font-head text-lg font-semibold">
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
      <section id="whySba" className="site-container section-band scroll-mt-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">{ar ? whySbaData.eyebrowAr : whySbaData.eyebrow}</p>
          <h2 className="section-title mt-2">{ar ? whySbaData.titleAr : whySbaData.title}</h2>
          <p className="section-intro mx-auto mt-4">{ar ? whySbaData.leadAr : whySbaData.lead}</p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whySbaData.pillars.map((pillar, idx) => (
            <Reveal key={pillar.title} delay={idx * 0.06}>
              <div className="glass-card flex h-full flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/40">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 font-mono text-xs font-bold text-brand-orange-text">
                      0{idx + 1}
                    </span>
                    <h3 className="font-head text-lg font-semibold">
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
            <div className="glass-card flex h-full flex-col justify-center border-brand-green/30 bg-gradient-to-br from-brand-green/10 via-card to-card p-6">
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-brand-green text-footer-foreground">
                <Sparkles className="size-5" />
              </span>
              <p className="mt-4 font-head text-base font-semibold leading-snug text-foreground sm:text-lg">
                {ar ? whySbaData.conclusionAr : whySbaData.conclusion}
              </p>
              <div className="mt-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green-text hover:underline"
                >
                  {ar ? "تواصل معنا لبدء الشراكة ←" : "Connect with Us to Partner →"}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. Company Leadership / قيادة الشركة */}
      <section id="leadership" className="bg-page-alt section-band scroll-mt-24 border-y border-border/60">
        <div className="site-container">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">{ar ? "قيادة الشركة" : "Company Leadership"}</p>
            <h2 className="section-title mt-2">{ar ? "قيادات تصنع الرؤية" : "The People Behind the Vision"}</h2>
            <p className="section-intro mx-auto mt-3">
              {ar
                ? "تقود المجموعة نخبة من المؤسسين والقياديين بخبرات متراكمة في إدارة الاستثمارات والتصنيع والخدمات البيئية والتطوير الأكاديمي."
                : "The group is led by experienced founders bringing decades of leadership across contracting, manufacturing, sustainability, and education."}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {founders.map((founder, index) => (
              <Reveal key={founder.role} delay={index * 0.08}>
                <div className="glass-card group flex h-full flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/30">
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-brand-orange-text">
                      {ar ? founder.roleAr : founder.role}
                    </span>
                    <h3 className="mt-2 font-head text-xl font-semibold">
                      {ar ? founder.nameAr : founder.name}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {ar ? founder.bioAr : founder.bio}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Company Governance / حوكمة الشركة */}
      <section id="governance" className="site-container section-band scroll-mt-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">{ar ? governanceData.eyebrowAr : governanceData.eyebrow}</p>
          <h2 className="section-title mt-2">{ar ? governanceData.titleAr : governanceData.title}</h2>
          <p className="section-intro mx-auto mt-4">{ar ? governanceData.leadAr : governanceData.lead}</p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {governanceData.principles.map((principle, idx) => (
            <Reveal key={principle.title} delay={idx * 0.05}>
              <div className="glass-card flex h-full flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/30">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex size-9 items-center justify-center rounded-lg bg-secondary text-xs font-bold text-brand-green-text">
                      {idx + 1}
                    </span>
                    <Compass className="size-4 text-muted-foreground/60" />
                  </div>
                  <h3 className="mt-4 font-head text-base font-semibold">
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
          <div className="rounded-xl border border-border/80 bg-card/60 p-5 text-center text-sm leading-relaxed text-muted-foreground">
            {ar ? governanceData.conclusionAr : governanceData.conclusion}
          </div>
        </Reveal>
      </section>

      {/* 8. Policies / السياسات */}
      <section id="policies" className="bg-page-alt section-band scroll-mt-24 border-t border-border/60">
        <div className="site-container">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">{ar ? policiesData.eyebrowAr : policiesData.eyebrow}</p>
            <h2 className="section-title mt-2">{ar ? policiesData.titleAr : policiesData.title}</h2>
            <p className="section-intro mx-auto mt-4">{ar ? policiesData.leadAr : policiesData.lead}</p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {policiesData.items.map((policy, idx) => (
              <Reveal key={policy.title} delay={idx * 0.04}>
                <div className="glass-card flex h-full flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/30">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-green/10 text-brand-green-text">
                        <FileCheck2 className="size-4" />
                      </span>
                      <h3 className="font-head text-base font-semibold">
                        {ar ? policy.titleAr : policy.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {ar ? policy.bodyAr : policy.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3} className="mx-auto mt-12 max-w-3xl">
            <div className="rounded-xl border border-dashed border-border p-5 text-center text-xs leading-relaxed text-muted-foreground sm:text-sm">
              {ar ? policiesData.disclaimerAr : policiesData.disclaimer}
            </div>
          </Reveal>
        </div>
      </section>
    </HomeMotion>
  );
}
