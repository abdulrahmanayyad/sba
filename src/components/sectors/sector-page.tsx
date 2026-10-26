import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/home/reveal";
import { useLanguage } from "@/i18n/language-context";
import { WHATSAPP_URL } from "@/lib/process-steps";
import { cn } from "@/lib/utils";
import { sectorOrder, sectorFullMenu, sectors, type SectorPageData } from "./sector-data";
import { sectionId } from "./sector-navigation";

export function SectorPage({ sector }: { sector: SectorPageData }) {
  const { language } = useLanguage();
  const ar = language === "AR";
  const sections = sectorFullMenu(sector);
  const name = ar ? sector.nameAr : sector.name;
  const tagline = ar ? sector.taglineAr : sector.tagline;
  const intro = ar ? sector.introAr : sector.intro;

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative text-footer-foreground">
        <img data-clip-reveal src={sector.image} alt="" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-footer/80 md:bg-footer/70" />
        <div className="site-container relative py-16 md:py-32">
          <Reveal>
            {sector.logo ? (
              <span className="inline-flex rounded-full bg-white px-5 py-3 sm:px-6 sm:py-3.5">
                <img src={sector.logo.url} alt={sector.logo.alt} className="h-8 w-auto sm:h-11 md:h-12" />
              </span>
            ) : (
              <p className="eyebrow text-brand-orange">{sector.company}</p>
            )}
            <h1 className="mt-4 max-w-3xl font-head text-[clamp(1.85rem,7vw,4rem)] font-semibold leading-[1.1]">{name}</h1>
            <p className={cn("mt-3 font-head text-base text-footer-muted sm:text-lg", ar && "font-body")}>{tagline}</p>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-footer-foreground/90 sm:text-base sm:leading-7">{intro}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="primary" size="lg" className="w-full sm:w-auto"><Link to="/contact">{ar ? "اطلب عرض سعر" : "Request a Quote"}</Link></Button>
              <Button asChild size="lg" className="glass-dark w-full !text-footer-foreground hover:!bg-footer sm:w-auto"><a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle className="size-4" /> WhatsApp</a></Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section index */}
      <section className="site-container py-8 md:py-14">
        <p className="eyebrow">{ar ? "في هذا القطاع" : "In this sector"}</p>
        <div className="no-scrollbar mt-5 -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
          {sections.map((section) => (
            <a key={section.title} href={`#${slugify(section.title)}`} className="glass-chip shrink-0 whitespace-nowrap px-4 py-2.5 text-sm hover:!border-brand-green">
              {ar ? section.titleAr : section.title}
            </a>
          ))}
        </div>
      </section>

      {/* Sections */}
      {sections.map((section, index) => (
        <section key={section.title} id={slugify(section.title)} className={cn("scroll-mt-24 section-band", index % 2 === 1 && "bg-page-alt")}>
          <div className="site-container">
            <Reveal>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-orange-text">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="section-title mt-3">{ar ? section.titleAr : section.title}</h2>
              <p className="section-intro mt-4 max-w-2xl">{ar ? section.bodyAr : section.body}</p>
              {sector.slug === "garment" && section.title === "Our Products" && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {[
                    { key: "jzra" as const, label: ar ? "B2C" : "B2C" },
                    { key: "tijari" as const, label: ar ? "B2B" : "B2B" },
                  ].map((item) => (
                    <Button key={item.key} asChild variant="outline">
                      <Link to="/products" search={{ line: item.key }}>
                        {item.label}
                        <ArrowRight aria-hidden="true" className="size-4 rtl:rotate-180" />
                      </Link>
                    </Button>
                  ))}
                </div>
              )}
              {sector.slug === "food" && section.title === "Cooperation Opportunities" && (
                <Button asChild variant="primary" className="mt-6"><Link to="/contact">{ar ? "تواصل معنا" : "Contact Us"}</Link></Button>
              )}
            </Reveal>
            {section.items && (
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {section.items.map((item, itemIndex) => (
                  <Reveal key={item.label} delay={itemIndex * 0.05}>
                    <div className="glass-card group flex h-full items-center justify-between p-4 sm:p-5">
                      <span className="font-head font-semibold">{ar ? item.labelAr : item.label}</span>
                      <ArrowRight aria-hidden="true" className="size-4 text-brand-green-text transition-transform group-hover:translate-x-1 rtl:rotate-180" />
                    </div>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}

      {/* Other sectors */}
      <section className="site-container section-band">
        <p className="eyebrow">{ar ? "قطاعات أخرى" : "Other sectors"}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {sectorOrder.filter((slug) => slug !== sector.slug).map((slug, index) => (
            <Link key={slug} to="/sectors/$sector" params={{ sector: slug }} className="glass-card p-5 transition-colors hover:border-brand-green">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-orange-text">0{index + 1}</p>
              <p className="mt-2 font-head font-semibold">{slugName(slug, ar)}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function slugName(slug: string, ar: boolean) {
  const sector = sectors[slug as keyof typeof sectors];
  return ar ? sector?.nameAr ?? slug : sector?.name ?? slug;
}

const slugify = sectionId;
