import { Link } from "@tanstack/react-router";
import { ArrowLeft, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { AnimatedPanel } from "@/components/site/animated-panel";
import { getSectorNavigation, sectionId } from "./sector-navigation";
import { cn } from "@/lib/utils";
import { sectorFullMenu, sectors, type SectorPageData } from "./sector-data";


const visibleSectors = ["construction", "environmental", "garment", "food"] as const;

/** Replaces the group navigation while a visitor is inside one sector. */
export function SectorHeader({
  slug,
  ar,
  logo,
  language,
}: {
  slug: string;
  ar: boolean;
  logo: string;
  language: React.ReactNode;
}) {
  const sector = sectors[slug as keyof typeof sectors] as SectorPageData | undefined;
  const [menuOpen, setMenuOpen] = useState(false);
  const [othersOpen, setOthersOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  useEffect(() => { setMenuOpen(false); setOthersOpen(false); setAboutOpen(false); }, [slug, ar]);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);
  if (!sector) return null;
  const sections = sectorFullMenu(sector).slice(0, 5);
  const name = ar ? sector.nameAr : sector.name;
  const back = ar ? "العودة إلى المجموعة" : "Back to SBA Group";
  const home = ar ? "الرئيسية" : "Home";
  const navigation = getSectorNavigation(sector.slug, ar);
  const aboutLinks = navigation?.about ?? [];
  const primaryLinks = navigation?.links ?? [];
  const closeAbout = () => setAboutOpen(false);

  const others = visibleSectors.filter((key) => key !== slug).map((key) => {
    const item = sectors[key as keyof typeof sectors];
    return (
      <Link key={key} to="/sectors/$sector" params={{ sector: key }} className="block border-b border-border px-3 py-2.5 text-sm last:border-0 hover:bg-secondary">
        {ar ? item?.nameAr : item?.name}
      </Link>
    );
  });

  return (
    <>
      <header className="glass-menu fixed inset-x-0 top-0 z-50 h-[76px] border-b border-border text-foreground">
        <div className="site-container flex h-full items-center gap-5">
          <Link to="/" aria-label={back} className="inline-flex shrink-0 items-center">
            <img src={logo} alt="SBA" className="h-10 w-auto" />
          </Link>
          <p className={cn("min-w-0 truncate font-head text-sm font-semibold sm:text-base", navigation && "xl:hidden")}>{name}</p>
          <nav aria-label={name} className="mx-auto hidden items-center gap-5 xl:flex">
            <Link to="/" className="nav-link whitespace-nowrap">{home}</Link>
            {navigation ? <>
              <div className="relative" onMouseEnter={() => setAboutOpen(true)} onMouseLeave={closeAbout} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) closeAbout(); }} onKeyDown={(event) => { if (event.key === "Escape") closeAbout(); }}>
                <Button variant="ghost" size="bare" type="button" aria-expanded={aboutOpen} className="nav-link" onClick={(event) => { if (event.detail > 0 && window.matchMedia("(hover: hover)").matches) setAboutOpen(true); else setAboutOpen((value) => !value); }}>
                  {navigation.label}<ChevronDown aria-hidden="true" className={cn("size-3 transition-transform", aboutOpen && "rotate-180")} />
                </Button>
                {aboutOpen && <div className="absolute start-0 top-full z-50 w-60 pt-2"><AnimatedPanel onClose={closeAbout} className="glass-menu border border-border p-2">
                  {aboutLinks.map((item) => <a key={item.title} href={`#${sectionId(item.title)}`} onClick={closeAbout} className="block border-b border-border px-3 py-2.5 text-sm last:border-0 hover:bg-secondary">{item.label}</a>)}
                </AnimatedPanel></div>}
              </div>
              {primaryLinks.map((item) => <a key={item.title} href={`#${sectionId(item.title)}`} className="nav-link whitespace-nowrap">{item.label}</a>)}
            </> : sections.map((section) => (
              <a key={section.title} href={`#${sectionId(section.title)}`} className="nav-link">{ar ? section.titleAr : section.title}</a>
            ))}
            {navigation?.joinUs && <Link to="/contact" className="nav-link whitespace-nowrap">{navigation.joinUs}</Link>}
            <div className="relative" onMouseEnter={() => setOthersOpen(true)} onMouseLeave={() => setOthersOpen(false)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOthersOpen(false); }} onKeyDown={(event) => { if (event.key === "Escape") setOthersOpen(false); }}>
              <Button variant="ghost" size="bare" type="button" aria-expanded={othersOpen} className="nav-link" onClick={(event) => { if (event.detail > 0 && window.matchMedia("(hover: hover)").matches) setOthersOpen(true); else setOthersOpen((v) => !v); }}>
                {ar ? "قطاعات أخرى" : "Other sectors"}
                <ChevronDown aria-hidden="true" className={cn("size-3 transition-transform", othersOpen && "rotate-180")} />
              </Button>
              {othersOpen && <div className="absolute end-0 top-full z-50 w-60 pt-2"><AnimatedPanel onClose={() => setOthersOpen(false)} className="glass-menu border border-border p-2">{others}</AnimatedPanel></div>}
            </div>
          </nav>
          <div className="hidden items-center gap-3 xl:flex">
            <Button asChild variant="primary" size="lg" data-magnetic><Link to="/contact">{ar ? "اطلب عرض سعر" : "Request a Quote"}</Link></Button>
            {language}
          </div>
          <Button variant="icon" size="icon" className="ms-auto xl:hidden" aria-label="Menu" onClick={() => setMenuOpen(true)}><Menu aria-hidden="true" /></Button>
        </div>
      </header>

      {menuOpen && (
        <AnimatedPanel modal onClose={() => setMenuOpen(false)} className="glass-menu fixed inset-0 z-[60] flex min-h-dvh flex-col text-foreground xl:hidden" role="dialog" label={name}>
          <div className="site-container flex h-[76px] shrink-0 items-center justify-between border-b border-border">
            <p className="min-w-0 pe-3 font-head text-sm font-semibold leading-snug">{name}</p>
            <Button variant="icon" size="icon" className="shrink-0" aria-label="Close" onClick={() => setMenuOpen(false)}><X aria-hidden="true" /></Button>
          </div>
          <div className="site-container flex flex-1 flex-col overflow-y-auto py-8">
            <nav className="grid">
              <Link to="/" onClick={() => setMenuOpen(false)} className="border-b border-border py-3 font-head text-xl">{home}</Link>
              {navigation ? <>
                <Button variant="ghost" size="bare" aria-expanded={aboutOpen} className="justify-between border-b border-border py-3 font-head text-xl" onClick={() => setAboutOpen((value) => !value)}>{navigation.label}<ChevronDown aria-hidden="true" className={cn("size-4 transition-transform", aboutOpen && "rotate-180")} /></Button>
                {aboutOpen && <AnimatedPanel onClose={closeAbout} className="border-s border-border ps-4">{aboutLinks.map((item) => <a key={item.title} href={`#${sectionId(item.title)}`} onClick={() => setMenuOpen(false)} className="block py-3 text-base">{item.label}</a>)}</AnimatedPanel>}
                {primaryLinks.map((item) => <a key={item.title} href={`#${sectionId(item.title)}`} onClick={() => setMenuOpen(false)} className="border-b border-border py-3 font-head text-xl">{item.label}</a>)}
              </> : sections.map((section) => (
                <a key={section.title} href={`#${sectionId(section.title)}`} onClick={() => setMenuOpen(false)} className="border-b border-border py-3 font-head text-[clamp(1.35rem,5vw,2rem)] font-medium leading-tight">
                  {ar ? section.titleAr : section.title}
                </a>
              ))}
              {navigation?.joinUs && <Link to="/contact" onClick={() => setMenuOpen(false)} className="border-b border-border py-3 font-head text-xl">{navigation.joinUs}</Link>}
            </nav>
            <p className="eyebrow mt-8">{ar ? "قطاعات أخرى" : "Other sectors"}</p>
            <div className="mt-2">{others}</div>
            <div className="mt-auto space-y-4 pt-10">
              {language}
              <Button asChild variant="primary" size="lg" className="w-full"><Link to="/contact">{ar ? "اطلب عرض سعر" : "Request a Quote"}</Link></Button>
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green-text">
                <ArrowLeft aria-hidden="true" className="size-4 rtl:rotate-180" /> {back}
              </Link>
            </div>
          </div>
        </AnimatedPanel>
      )}
    </>
  );
}
