import { useState } from "react";
import { Link } from "@tanstack/react-router";

import jzraLogo from "@/assets/jzra-logo-orange.png.asset.json";
import sbaLockup from "@/assets/sba-lockup.png.asset.json";
import textileImage from "@/assets/home-textile.jpg";
import { MediaFrame, SectionHeading } from "@/components/site/section";
import { Button } from "@/components/ui/button";
import copy from "@/i18n/home-en.json";
import { cn } from "@/lib/utils";
import { HomeMotion, HomeReveal as Reveal, MotionSurface, MotionWords, ProcessContent } from "./home-motion";
import { HomePopup } from "./home-popup";

const capabilities = [
  ["Textile Manufacturing", "Fabric development and manufacturing through our own textile production capabilities."],
  ["Garment Manufacturing", "Large-scale production of women’s, men’s and children’s garments."],
  ["Private Label", "End-to-end manufacturing for brands under their own labels."],
  ["Contract Manufacturing", "Structured production programs for established fashion businesses and distributors."],
  ["Product Development", "Technical development from design reference to production-ready garment."],
  ["Export Coordination", "Production documentation, packing and preparation for international delivery."],
] as const;

const textileChain = [
  ["Knitted Fabrics", "Circular and other knitted structures"],
  ["Woven Fabrics", "Textile solutions for garment applications"],
  ["Fabric Dyeing", "In-house color development"],
  ["Custom Development", "Composition, weight and construction"],
  ["B2B Textile Supply", "For manufacturers and brands"],
  ["Garment Manufacturing", "Women’s, men’s and children’s garments"],
  ["Export & Logistics", "Documentation and export preparation"],
] as const;

const modelGroups = {
  Women: [["SBA-WDR-1002", "Wrap Maxi Dress"], ["SBA-WAB-1015", "Classic Abaya"], ["SBA-WST-1012", "Tailored Two-Piece Set"]],
  Men: [["SBA-MSH-1062", "Poplin Classic Shirt"], ["SBA-MHD-1007", "Essential Hoodie"], ["SBA-MPL-1047", "Slim-fit Polo Shirt"]],
  Children: [["SBA-CDR-1020", "Draped Girls Dress"], ["SBA-CST-1049", "Essential Kids Set"], ["SBA-CHD-1121", "Essential Kids Hoodie"]],
} as const;

type ModelGroup = keyof typeof modelGroups;

const processSteps = [
  ["Product Brief", "We review the product concept, technical requirements, target market and commercial specifications."],
  ["Fabric & Materials", "Materials are sourced or developed for composition, weight, construction, color and performance."],
  ["Pattern & Development", "Patterns, measurements and construction details are prepared to the approved requirements."],
  ["Prototype", "The first prototype is developed for evaluation, fitting and technical review."],
  ["Sample Approval", "Adjustments are implemented before final approval and production preparation."],
  ["Pre-Production", "Materials, patterns, specifications and production requirements are finalized."],
  ["Bulk Production", "Approved products enter organized production lines under controlled processes."],
  ["Quality Control", "Quality is monitored throughout production and during final inspection."],
  ["Finishing & Packaging", "Products are finished, labeled, folded, packed and prepared to buyer requirements."],
  ["Export", "Finished orders are prepared for international shipment and export documentation."],
] as const;

const regions = [
  ["5", "AFRICA", "Partners across five major African markets"],
  ["3", "EUROPE", "Relationships across three major European markets"],
  ["GCC", "GULF", "Saudi Arabia, the UAE and wider Gulf opportunities"],
] as const;

const whyItems = [
  ["Integrated Manufacturing", "Textile and garment capabilities within one broader production ecosystem."],
  ["Product Development", "More than 20,000 developed women’s and children’s garment models."],
  ["Scalable Production", "15+ production lines, 250+ machines and 400+ workers."],
  ["International Experience", "Experience with brands and buyers across European, Arab and Turkish markets."],
  ["Flexibility", "Production programs adapted to product requirements, materials and order specifications."],
  ["Long-Term Partnerships", "Sustainable manufacturing relationships rather than one-off transactions."],
] as const;

export function HomePage() {
  const [modelGroup, setModelGroup] = useState<ModelGroup>("Women");
  const [processIndex, setProcessIndex] = useState(0);
  const activeProcess = processSteps[processIndex] ?? processSteps[0];

  return (
    <HomeMotion>
      <section data-home-hero className="home-hero relative isolate overflow-hidden bg-footer text-footer-foreground">
        <img data-hero-image src={textileImage} alt="Sculptural folds of green woven fabric and pale cotton with an orange thread spool" width={1920} height={1088} fetchPriority="high" className="home-hero-image absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="home-hero-overlay absolute inset-0 -z-10" />
        <div className="site-container home-hero-content">
          <div data-hero-reveal className="flex flex-wrap items-center justify-between gap-4 border-b border-footer-line pb-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-footer-foreground">{copy.hero.eyebrow}</p>
            <span className="hidden font-mono text-[10px] uppercase text-footer-muted md:block">Sami Bin Ayyad Group</span>
          </div>
          <div className="home-hero-main">
            <div data-hero-reveal><img src={sbaLockup.url} alt="Sami Bin Ayyad Group" className="home-hero-lockup" /></div>
            <h1 data-hero-reveal className="home-hero-title">Sami Bin Ayyad Group</h1>
            <p className="home-hero-statement font-head"><MotionWords text={copy.hero.title} /></p>
            <p data-hero-reveal className="mt-6 max-w-xl text-base leading-7 text-footer-foreground/85">{copy.hero.body}</p>
            <div data-hero-reveal className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="primary" size="lg"><Link to="/contact">{copy.hero.contact}</Link></Button>
              <Button asChild variant="outline" size="lg" className="border-footer-muted bg-footer/20 text-footer-foreground hover:bg-footer-foreground hover:text-footer"><Link to="/models">{copy.hero.models}</Link></Button>
            </div>
          </div>
          <div data-hero-reveal className="flex items-center justify-between border-t border-footer-line pt-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-footer-muted">Textile · Garment · Export</p>
            <a href="#capabilities" className="font-mono text-[10px] uppercase tracking-[0.12em] text-footer-foreground">{copy.hero.scroll} ↓</a>
          </div>
        </div>
      </section>

      <section id="capabilities" className="section-band bg-background">
        <div className="site-container">
          <SectionHeading eyebrow={copy.scale.eyebrow} title={copy.scale.title} intro={copy.scale.intro} />
          <div className="mt-16 grid gap-12 border-t border-border pt-10 lg:grid-cols-[1.1fr_1.9fr]">
            <Reveal>
              <p className="eyebrow">01 / FACILITY</p>
              <h3 className="mt-5 max-w-md text-3xl leading-tight md:text-4xl">{copy.scale.facility}</h3>
              <p className="mt-5 max-w-md text-muted-foreground">{copy.scale.facilityBody}</p>
            </Reveal>
            <div className="grid sm:grid-cols-2">
              {[["30,000", copy.scale.monthly], ["100", copy.scale.machines]].map(([value, label], index) => (
                <Reveal key={value} delay={index * 0.08} className="border-t border-border py-7 first:border-t-0 sm:border-l sm:border-t-0 sm:px-9 sm:first:border-l-0">
                  <strong data-count={value?.replaceAll(",", "")} className="home-scale-number font-head font-medium leading-none text-brand-green-text">{value}</strong>
                  <p className="mt-5 max-w-[15rem] text-sm text-muted-foreground">{label}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <p className="mt-12 border-t border-border pt-6 text-sm text-muted-foreground">{copy.scale.note}</p>
        </div>
      </section>

      <section className="section-band bg-page-alt">
        <div className="site-container">
          <SectionHeading eyebrow={copy.capabilities.eyebrow} title={copy.capabilities.title} intro={copy.capabilities.intro} />
          <div className="mt-14 grid border-t border-border lg:grid-cols-2">
            {capabilities.map(([title, body], index) => (
              <Reveal key={title} delay={(index % 2) * 0.08} className="home-capability grid grid-cols-[2rem_1fr] gap-4 border-b border-border py-8 lg:odd:pe-12 lg:even:border-s lg:even:ps-12">
                <span className="pt-1 font-mono text-[11px] text-brand-green-text">{String(index + 1).padStart(2, "0")}</span>
                <div><h3 className="text-2xl">{title}</h3><p className="mt-3 max-w-md text-sm text-muted-foreground">{body}</p><HomePopup title={title} description={body} trigger={<Button variant="ghost" className="mt-4 h-auto px-0 text-xs text-brand-green-text" aria-label={`${copy.popup.learnMore}: ${title}`}>{copy.popup.learnMore} ↗</Button>} /></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="facilities" className="section-band bg-footer text-footer-foreground">
        <div className="site-container">
          <SectionHeading eyebrow={copy.textile.eyebrow} title={copy.textile.title} light />
          <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal><MediaFrame dark label="TEXTILE FACILITY · IMAGE PENDING" className="aspect-[4/3]" /></Reveal>
            <Reveal delay={0.08} className="flex flex-col justify-center">
              <p className="text-lg leading-8 text-footer-muted">{copy.textile.p1}</p>
              <p className="mt-7 text-lg leading-8 text-footer-muted">{copy.textile.p2}</p>
            </Reveal>
          </div>
          <div className="mt-20 border-t border-footer-line pt-12">
            <div data-draw-line className="mb-10 h-px w-full bg-brand-green" />
            <p className="eyebrow text-brand-green">{copy.textile.integrated}</p>
            <h3 className="mt-5 text-4xl text-footer-foreground md:text-6xl">{copy.textile.integratedTitle}</h3>
            <div className="mt-12 grid border-l border-t border-footer-line md:grid-cols-2 lg:grid-cols-4">
              {textileChain.map(([title, body], index) => (
                <Reveal key={title} delay={(index % 4) * 0.08} className="border-b border-r border-footer-line p-6">
                  <span className="font-mono text-[10px] text-brand-orange">{String(index + 1).padStart(2, "0")}</span>
                  <h4 className="mt-8 text-lg text-footer-foreground">{title}</h4>
                  <p className="mt-3 text-sm text-footer-muted">{body}</p>
                </Reveal>
              ))}
            </div>
            <p className="mt-10 max-w-3xl text-lg text-footer-muted">{copy.textile.integratedBody}</p>
          </div>
        </div>
      </section>

      <section id="models" className="section-band bg-background">
        <div className="site-container">
          <SectionHeading eyebrow={copy.development.eyebrow} title={copy.development.title} intro={copy.development.body} />
          <div className="mt-14 flex flex-wrap border-b border-border">
            {(Object.keys(modelGroups) as ModelGroup[]).map((group) => (
              <Button key={group} variant="ghost" className={cn("border-b px-6 py-5", modelGroup === group ? "border-foreground text-foreground" : "border-transparent text-muted-foreground")} onClick={() => setModelGroup(group)}>{group}’s Wear</Button>
            ))}
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {modelGroups[modelGroup].map(([code, name], index) => (
              <Reveal key={code} delay={index * 0.08}>
                <MotionSurface className="home-model-item">
                <div className="relative">
                <Link to="/models/$code" params={{ code }} className="group block">
                  <MediaFrame label={`${code} · FRONT`} className="aspect-[4/5]" />
                </Link>
                <HomePopup code={code} title={name} description={copy.popup.modelBody} trigger={<Button variant="outline" className="home-quick-view absolute bottom-4 end-4 bg-background">{copy.popup.quickView}</Button>} />
                </div>
                <Link to="/models/$code" params={{ code }} className="group block">
                  <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-brand-green-text">{code}</p>
                  <h3 className="mt-2 text-xl group-hover:text-brand-green-text">{name}</h3>
                </Link>
                </MotionSurface>
              </Reveal>
            ))}
          </div>
          <div className="mt-14 grid items-end gap-8 border-t border-border pt-8 md:grid-cols-[1fr_auto]">
            <p className="max-w-xl font-head text-3xl leading-tight md:text-4xl">{copy.development.statement}</p>
            <Button asChild variant="outline" size="lg"><Link to="/models">{copy.development.action} →</Link></Button>
          </div>
        </div>
      </section>

      <section id="manufacturing" className="section-band bg-page-alt">
        <div className="site-container">
          <SectionHeading eyebrow={copy.process.eyebrow} title={copy.process.title} />
          <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_2fr]">
            <Reveal className="border-t border-foreground pt-8">
              <ProcessContent step={processIndex}>
              <p className="font-mono text-xs text-brand-green-text">{String(processIndex + 1).padStart(2, "0")} / 10</p>
              <h3 className="mt-7 text-4xl">{activeProcess[0]}</h3>
              <p className="mt-5 text-muted-foreground">{activeProcess[1]}</p>
              <div className="mt-8 grid grid-cols-10 gap-1" aria-hidden="true">{processSteps.map((_, index) => <div key={index} className={cn("h-1 transition-colors duration-300", index <= processIndex ? "bg-brand-green" : "bg-frame")} />)}</div>
              </ProcessContent>
            </Reveal>
            <div className="grid sm:grid-cols-2">
              {processSteps.map(([title], index) => (
                <Button key={title} variant="ghost" className={cn("h-auto justify-start border-b border-border px-4 py-4 text-left", processIndex === index && "bg-foreground text-background hover:bg-foreground hover:text-background")} onClick={() => setProcessIndex(index)}>
                  <span className="font-mono text-[10px] opacity-60">{String(index + 1).padStart(2, "0")}</span>{title}
                </Button>
              ))}
            </div>
          </div>
          <Link to="/how-we-manufacture" className="mt-10 block font-mono text-xs uppercase tracking-[0.12em] text-brand-green-text hover:text-brand-green">{copy.process.action} →</Link>
        </div>
      </section>

      <section id="global-presence" className="section-band bg-footer text-footer-foreground">
        <div className="site-container">
          <SectionHeading eyebrow={copy.global.eyebrow} title={copy.global.title} intro={copy.global.body} light />
          <div className="mt-16 grid gap-14 lg:grid-cols-[1fr_1.4fr]">
            <div className="grid gap-8">
              {regions.map(([value, name, body], index) => (
                <Reveal key={name} delay={index * 0.08} className="grid grid-cols-[5rem_1fr] border-t border-footer-line pt-5">
                  <strong className="font-head text-4xl font-medium text-brand-orange">{value}</strong>
                  <div><p className="font-mono text-[11px] tracking-[0.18em]">{name}</p><p className="mt-2 text-sm text-footer-muted">{body}</p></div>
                </Reveal>
              ))}
            </div>
            <Reveal className="relative min-h-[420px] overflow-hidden border border-footer-line p-7">
              <div className="map-grid absolute inset-0 opacity-30" aria-hidden="true" />
              <div className="absolute left-[57%] top-[53%] size-3 bg-brand-orange" />
              {["PARIS", "MILAN", "ISTANBUL", "RIYADH", "DUBAI"].map((city, index) => <span key={city} className="absolute font-mono text-[9px] text-footer-muted" style={{ left: `${18 + index * 15}%`, top: `${24 + (index % 3) * 14}%` }}>{city}</span>)}
              <p className="absolute bottom-7 left-7 font-mono text-[10px] uppercase tracking-[0.12em] text-footer-muted">{copy.global.coordinates}</p>
            </Reveal>
          </div>
          <p className="mt-10 text-footer-muted"><span className="text-footer-foreground">{copy.global.experience}</span> {copy.global.markets}</p>
        </div>
      </section>

      <section id="brand" className="section-band bg-background">
        <div className="site-container">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <Reveal>
              <p className="eyebrow">{copy.brand.eyebrow} · {copy.brand.category}</p>
              <img data-drift src={jzraLogo.url} alt="JZRA" className="mt-10 w-full max-w-sm" />
              <p className="mt-8 font-mono text-xs uppercase tracking-[0.12em] text-brand-orange-text">{copy.brand.markets}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="section-title">{copy.brand.title}</h2>
              <p className="mt-8 text-lg text-muted-foreground">{copy.brand.p1}</p>
              <p className="mt-6 text-lg text-muted-foreground">{copy.brand.p2}</p>
              <div className="mt-10 grid grid-cols-[auto_1fr] gap-6 border-t border-border pt-7"><strong className="font-head text-6xl font-medium text-brand-orange-text">7</strong><p className="text-muted-foreground">{copy.brand.showrooms}</p></div>
            </Reveal>
          </div>
          <div className="mt-20 grid border-l border-t border-border lg:grid-cols-3">
            <BrandColumn title="Business model" subtitle="JZRA" items={["Design and development of a wide range of models", "Large-volume manufacturing", "Wholesale and retail sales", "E-commerce", "Distribution through online platforms", "Expansion through points of sale", "Egyptian, Turkish and Saudi markets"]} />
            <BrandColumn title="Exhibitions" subtitle="Egypt" items={["Défilé Kids · 2024 · Summer / Autumn / Winter", "Défilé Kids · 2025 · Summer / Autumn / Winter", "Défilé Kids · 2026 · Winter", "Expo Kids · 2024 · Autumn / Winter"]} />
            <BrandColumn title="Sales channels" subtitle="Egypt · Türkiye" items={["Egypt · Noon", "Egypt · Amazon", "Egypt · Al Tawheed Wal Nour", "Egypt · Other sales channels", "Türkiye · Trendyol"]} />
          </div>
        </div>
      </section>

      <section id="about" className="section-band bg-page-alt">
        <div className="site-container">
          <SectionHeading eyebrow={copy.why.eyebrow} title={copy.why.title} intro={copy.why.body} />
          <div className="mt-16 grid border-l border-t border-border md:grid-cols-2 lg:grid-cols-3">
            {whyItems.map(([title, body], index) => (
              <Reveal key={title} delay={(index % 3) * 0.08} className="border-b border-r border-border p-7 md:p-9">
                <span className="font-mono text-[10px] text-brand-green-text">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-8 text-xl uppercase">{title}</h3>
                <p className="mt-4 text-sm text-muted-foreground">{body}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-14 max-w-5xl font-head text-3xl leading-tight text-brand-green-text md:text-5xl"><MotionWords text={copy.why.statement} /></p>
        </div>
      </section>

      <section id="contact" className="section-band bg-brand-green text-footer-foreground">
        <div className="site-container">
          <p className="eyebrow text-footer-foreground">{copy.cta.eyebrow}</p>
          <div className="mt-5 grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div><h2 className="section-title text-footer-foreground">{copy.cta.title}</h2><p className="mt-7 max-w-3xl text-lg text-footer-foreground/80">{copy.cta.body}</p></div>
            <div className="flex flex-wrap gap-3 lg:justify-end"><Button asChild variant="primary" size="lg"><Link to="/contact">{copy.cta.contact}</Link></Button><Button asChild variant="outline" size="lg" className="border-footer-foreground text-footer-foreground hover:bg-footer-foreground hover:text-foreground"><a href="https://wa.me/201222238072" target="_blank" rel="noreferrer">{copy.cta.whatsapp}</a></Button></div>
          </div>
          <div className="mt-14 grid gap-8 border-t border-footer-foreground/25 pt-7 md:grid-cols-2"><div><p className="eyebrow text-footer-foreground/70">{copy.cta.moq}</p><p className="mt-3 text-footer-foreground/80">{copy.cta.moqBody}</p></div><div><p className="eyebrow text-footer-foreground/70">{copy.cta.phone}</p><a href="tel:+201222238072" className="mt-3 block font-head text-3xl" dir="ltr">+20 12 222 380 72</a></div></div>
        </div>
      </section>
    </HomeMotion>
  );
}

function BrandColumn({ title, subtitle, items }: { title: string; subtitle: string; items: string[] }) {
  return <Reveal className="border-b border-r border-border p-7 md:p-9"><p className="eyebrow">{title}</p><h3 className="mt-5 text-3xl">{subtitle}</h3><ul className="mt-7 grid gap-3 text-sm text-muted-foreground">{items.map((item) => <li key={item} className="border-t border-border pt-3">{item}</li>)}</ul></Reveal>;
}

