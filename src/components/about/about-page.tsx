import { useState } from "react";
import { BadgeCheck, Handshake, Leaf, Settings } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { HomeMotion, HomeReveal as Reveal } from "@/components/home/home-motion";
import { useLanguage } from "@/i18n/language-context";
import { cn } from "@/lib/utils";
import { aboutTabs, approachValues, divisions, founders } from "@/components/group/group-data";

const approachIcons = [BadgeCheck, Settings, Leaf, Handshake];

export function AboutPage() {
  const { language } = useLanguage();
  const ar = language === "AR";
  const [tab, setTab] = useState(0);
  return (
    <HomeMotion key={language} variant="group">
      {/* About */}
      <section id="about" className="site-container section-band scroll-mt-24 grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
        <Reveal><span id="whoWeAre" className="block scroll-mt-24" /><span id="whatWeDo" className="block scroll-mt-24" /><span id="whySba" className="block scroll-mt-24" />
          <p className="eyebrow">{ar ? "عن مجموعة سامي بن عياد" : "About Sami Bin Ayyad Group"}</p>
          <h2 className="section-title">{ar ? "نبني مستقبلًا أقوى معًا" : "Building a Stronger Future Together"}</h2>
          <div className="no-scrollbar mt-8 -mx-5 flex snap-x gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0" role="tablist">
            {aboutTabs.map((item, index) => (
              <button key={item.label} role="tab" aria-selected={tab === index} onClick={() => setTab(index)} className={cn("glass-chip shrink-0 whitespace-nowrap px-4 py-2.5 text-sm transition-colors", tab === index && "!bg-footer !text-footer-foreground")}>{ar ? item.labelAr : item.label}</button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.p key={tab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">{ar ? aboutTabs[tab]?.bodyAr : aboutTabs[tab]?.body}</motion.p>
          </AnimatePresence>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative overflow-hidden">
            <img src={divisions.find((division) => division.slug === "construction")?.image} alt="Group construction project" loading="lazy" width={944} height={704} className="aspect-[4/3] w-full object-cover" />
            <div className="glass-dark absolute bottom-4 start-4 max-w-[78%] p-4 font-head text-base leading-snug sm:bottom-5 sm:start-5 sm:p-5 sm:text-lg">{ar ? "الالتزام" : "Commitment"}<br />{ar ? "المسؤولية" : "Responsibility"}<br />{ar ? "الإبداع" : "Creativity"}<br />{ar ? "علاقات قوية مع العملاء" : "Strong Client Relationships"}</div>
          </div>
        </Reveal>
      </section>
      {/* Company Leadership */}
      <section id="leadership" className="site-container section-band scroll-mt-24 !pt-0">
        <p className="eyebrow">{ar ? "قيادة الشركة" : "Company Leadership"}</p>
        <h2 className="section-title">{ar ? "قيادات تصنع الرؤية" : "The People Behind the Vision"}</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {founders.map((founder, index) => (
            <Reveal key={founder.role} delay={index * 0.08}>
              <div className="glass-card group h-full p-6 transition-transform duration-300 hover:-translate-y-1">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-orange-text">{ar ? founder.roleAr : founder.role}</p>
                <h3 className="mt-3 font-head text-xl font-semibold">{ar ? founder.nameAr : founder.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground transition-all duration-500 can-hover:max-h-0 can-hover:overflow-hidden can-hover:opacity-0 can-hover:group-hover:max-h-44 can-hover:group-hover:opacity-100">{ar ? founder.bioAr : founder.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Our Approach */}
      <section id="ourApproach" className="bg-page-alt section-band scroll-mt-24"><span id="ourValues" className="block scroll-mt-24" />
        <div className="site-container">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">{ar ? "نهجنا" : "Our Approach"}</p>
            <h2 className="section-title">{ar ? "مبني على الخبرة. مدفوع بالالتزام." : "Built on Expertise. Driven by Commitment."}</h2>
            <p className="section-intro mt-4">{ar ? "عبر قطاعات أعمالنا، نؤكد على الانضباط التشغيلي والتنفيذ القائم على الجودة والإدارة المسؤولة للموارد وعلاقات الأعمال طويلة الأمد." : "Across our business sectors, we emphasize operational discipline, quality-focused execution, responsible resource management, and long-term business relationships."}</p>
          </Reveal>
          <div data-stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {approachValues.map((value, index) => {
              const Icon = approachIcons[index] ?? BadgeCheck;
              return (
                <div key={value.title} className="glass-card group h-full p-6 transition-transform duration-300 hover:-translate-y-1">
                  <span className="flex size-11 items-center justify-center rounded-full bg-secondary text-brand-green-text transition-colors duration-300 group-hover:bg-brand-green group-hover:text-footer-foreground"><Icon aria-hidden="true" className="size-5" /></span>
                  <h3 className="mt-5 font-head text-lg font-semibold">{ar ? value.titleAr : value.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{ar ? value.bodyAr : value.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="site-container section-band grid gap-4 sm:grid-cols-2">
        {[["governance", ar ? "حوكمة الشركة" : "Company Governance"], ["policies", ar ? "السياسات" : "Policies"]].map(([id, title]) => (
          <div key={id} id={id} className="glass-card scroll-mt-24 border-dashed p-6">
            <h2 className="font-head text-2xl font-semibold">{title}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{ar ? "[محتوى مؤقت — بانتظار النص المعتمد]" : "[Placeholder — awaiting approved content]"}</p>
          </div>
        ))}
      </section>
    </HomeMotion>
  );
}
