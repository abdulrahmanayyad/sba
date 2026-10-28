import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  // Extract search params for tab highlighting
  const searchTab = useRouterState({
    select: (state) => (state.location.search as Record<string, string>)["tab"],
  });

  useEffect(() => {
    setMenuOpen(false);
    setOthersOpen(false);
    setAboutOpen(false);
  }, [slug, ar, searchTab]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  if (!sector) return null;
  const name = ar ? sector.nameAr : sector.name;
  const back = ar ? "العودة إلى المجموعة" : "Back to SBA Group";
  const home = ar ? "الرئيسية" : "Home";
  const navigation = getSectorNavigation(sector.slug, ar);
  const aboutLinks = navigation?.about ?? [];
  const primaryLinks = navigation?.links ?? [];
  const closeAbout = () => setAboutOpen(false);

  // Other sectors with exact homepage names
  const others = visibleSectors
    .filter((key) => key !== slug)
    .map((key) => {
      const item = sectors[key as keyof typeof sectors];
      return (
        <Link
          key={key}
          to="/sectors/$sector"
          params={{ sector: key }}
          search={{}}
          className="block border-b border-border px-3 py-2.5 text-sm last:border-0 hover:bg-secondary"
          onClick={() => {
            setOthersOpen(false);
            setMenuOpen(false);
          }}
        >
          {ar ? item?.nameAr : item?.name}
        </Link>
      );
    });

  const isConstruction = slug === "construction";
  const isGarment = slug === "garment";
  const activeTab = searchTab || "about";

  const navPill =
    "group relative inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-bold tracking-wide text-foreground transition-all duration-300 hover:bg-white/40 hover:text-brand-orange hover:shadow-sm hover:backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap";
  const navLinkStyle = navPill;
  const mobileLinkStyle =
    "rounded-2xl px-3.5 py-2 font-head text-sm font-bold text-foreground transition-all duration-200 hover:bg-white/40 hover:text-brand-orange hover:translate-x-1 rtl:hover:-translate-x-1 block";

  return (
    <>
      <header className="fixed inset-x-0 top-3 z-50 pointer-events-none flex justify-center px-4 transition-all duration-500">
        <div
          className={cn(
            "pointer-events-auto mx-auto flex h-[62px] w-full max-w-6xl items-center justify-between gap-4 rounded-full px-5 transition-all duration-500",
            scrolled
              ? "border border-white/25 bg-background/85 shadow-[0_16px_40px_rgba(0,0,0,0.18)] backdrop-blur-2xl ring-1 ring-white/10"
              : "border border-white/15 bg-background/70 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl"
          )}
        >
          <Link to="/" aria-label={back} className="relative z-10 inline-flex shrink-0 items-center">
            <img src={logo} alt="SBA" className="h-9 w-auto transition-transform duration-200 hover:scale-105" />
          </Link>

          <p className={cn("min-w-0 truncate font-head text-sm font-bold sm:text-base", "xl:hidden")}>
            {name}
          </p>

          <nav aria-label={name} className="mx-auto hidden items-center justify-center gap-x-1 xl:flex">
            {/* Home Link - Exact matching font and size */}
            <Link to="/" className={navPill}>
              {home}
            </Link>

            {/* Custom Construction Navigation */}
            {isConstruction ? (
              <>
                <Link
                  to="/sectors/$sector"
                  params={{ sector: "construction" }}
                  search={{}}
                  className={cn(navPill, activeTab === "about" && "!text-brand-green bg-white/40 shadow-sm")}
                >
                  {ar ? "نبذة عنا" : "About Us"}
                </Link>

                <Link
                  to="/sectors/$sector"
                  params={{ sector: "construction" }}
                  search={{ tab: "sectors" }}
                  className={cn(navPill, activeTab === "sectors" && "!text-brand-green bg-white/40 shadow-sm")}
                >
                  {ar ? "قطاعاتنا" : "Our Sectors"}
                </Link>

                <Link
                  to="/sectors/$sector"
                  params={{ sector: "construction" }}
                  search={{ tab: "services" }}
                  className={cn(navPill, activeTab === "services" && "!text-brand-green bg-white/40 shadow-sm")}
                >
                  {ar ? "خدماتنا" : "Our Services"}
                </Link>

                <Link
                  to="/sectors/$sector"
                  params={{ sector: "construction" }}
                  search={{ tab: "projects" }}
                  className={cn(navPill, activeTab === "projects" && "!text-brand-green bg-white/40 shadow-sm")}
                >
                  {ar ? "مشاريعنا" : "Our Projects"}
                </Link>

                <Link
                  to="/contact"
                  className={navPill}
                >
                  {ar ? "انضم إلينا" : "Join Us"}
                </Link>
              </>
            ) : isGarment ? (
              /* Custom Garment Navigation without Clients & Partners */
              <>
                <Link
                  to="/sectors/$sector"
                  params={{ sector: "garment" }}
                  search={{}}
                  className={cn(navPill, activeTab === "about" && "!text-brand-orange bg-white/40 shadow-sm")}
                >
                  {ar ? "من نحن" : "About Us"}
                </Link>

                <Link
                  to="/sectors/$sector"
                  params={{ sector: "garment" }}
                  search={{ tab: "services" }}
                  className={cn(navPill, activeTab === "services" && "!text-brand-orange bg-white/40 shadow-sm")}
                >
                  {ar ? "خدماتنا" : "Our Services"}
                </Link>

                <Link
                  to="/sectors/$sector"
                  params={{ sector: "garment" }}
                  search={{ tab: "projects" }}
                  className={cn(navPill, activeTab === "projects" && "!text-brand-orange bg-white/40 shadow-sm")}
                >
                  {ar ? "مشاريعنا" : "Our Projects"}
                </Link>

                <Link
                  to="/sectors/$sector"
                  params={{ sector: "garment" }}
                  search={{ tab: "capabilities" }}
                  className={cn(navPill, activeTab === "capabilities" && "!text-brand-orange bg-white/40 shadow-sm")}
                >
                  {ar ? "قدراتنا" : "Our Capabilities"}
                </Link>

                <Link
                  to="/sectors/$sector"
                  params={{ sector: "garment" }}
                  search={{ tab: "join" }}
                  className={cn(navPill, activeTab === "join" && "!text-brand-orange bg-white/40 shadow-sm")}
                >
                  {ar ? "انضم إلينا" : "Join Us"}
                </Link>
              </>
            ) : (
              /* Other Sectors Navigation */
              <>
                {navigation ? (
                  <>
                    <div
                      className="relative"
                      onMouseEnter={() => setAboutOpen(true)}
                      onMouseLeave={closeAbout}
                      onBlur={(event) => {
                        if (!event.currentTarget.contains(event.relatedTarget)) closeAbout();
                      }}
                      onKeyDown={(event) => {
                        if (event.key === "Escape") closeAbout();
                      }}
                    >
                      <Button
                        variant="ghost"
                        size="bare"
                        type="button"
                        aria-expanded={aboutOpen}
                        className={navLinkStyle}
                        onClick={(event) => {
                          if (event.detail > 0 && window.matchMedia("(hover: hover)").matches) setAboutOpen(true);
                          else setAboutOpen((value) => !value);
                        }}
                      >
                        {navigation.label}
                        <ChevronDown aria-hidden="true" className={cn("size-3 transition-transform", aboutOpen && "rotate-180")} />
                      </Button>
                      {aboutOpen && (
                        <div className="absolute start-0 top-full z-50 w-60 pt-2.5">
                          <AnimatedPanel
                            onClose={closeAbout}
                            className="overflow-hidden rounded-[24px] border border-white/35 bg-background/75 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.18)] backdrop-blur-2xl ring-1 ring-white/20 dark:border-white/15 dark:bg-background/70"
                          >
                            {aboutLinks.map((item) => (
                              <a
                                key={item.title}
                                href={`#${sectionId(item.title)}`}
                                onClick={closeAbout}
                                className="block rounded-[16px] px-3.5 py-2 text-sm font-medium text-foreground transition-all duration-200 hover:bg-brand-orange/15 hover:text-brand-orange hover:translate-x-1 rtl:hover:-translate-x-1"
                              >
                                {item.label}
                              </a>
                            ))}
                          </AnimatedPanel>
                        </div>
                      )}
                    </div>
                    {primaryLinks.map((item) => (
                      <a key={item.title} href={`#${sectionId(item.title)}`} className={navLinkStyle}>
                        {item.label}
                      </a>
                    ))}
                  </>
                ) : (
                  sectorFullMenu(sector).slice(0, 5).map((sec) => (
                    <a key={sec.title} href={`#${sectionId(sec.title)}`} className={navLinkStyle}>
                      {ar ? sec.titleAr : sec.title}
                    </a>
                  ))
                )}
                <Link to="/contact" className={navLinkStyle}>
                  {ar ? "انضم إلينا" : "Join Us"}
                </Link>
              </>
            )}

            {/* Other Sectors Dropdown with exact homepage names */}
            <div
              className="relative"
              onMouseEnter={() => setOthersOpen(true)}
              onMouseLeave={() => setOthersOpen(false)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setOthersOpen(false);
              }}
              onKeyDown={(event) => {
                if (event.key === "Escape") setOthersOpen(false);
              }}
            >
              <Button
                variant="ghost"
                size="bare"
                type="button"
                aria-expanded={othersOpen}
                className={navLinkStyle}
                onClick={(event) => {
                  if (event.detail > 0 && window.matchMedia("(hover: hover)").matches) setOthersOpen(true);
                  else setOthersOpen((v) => !v);
                }}
              >
                {ar ? "قطاعات أخرى" : "Other sectors"}
                <ChevronDown aria-hidden="true" className={cn("size-3 transition-transform", othersOpen && "rotate-180")} />
              </Button>
              {othersOpen && (
                <div className="absolute end-0 top-full z-50 w-64 pt-2.5">
                  <AnimatedPanel
                    onClose={() => setOthersOpen(false)}
                    className="overflow-hidden rounded-[24px] border border-white/35 bg-background/75 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.18)] backdrop-blur-2xl ring-1 ring-white/20 dark:border-white/15 dark:bg-background/70"
                  >
                    {visibleSectors
                      .filter((key) => key !== slug)
                      .map((key) => {
                        const item = sectors[key as keyof typeof sectors];
                        return (
                          <Link
                            key={key}
                            to="/sectors/$sector"
                            params={{ sector: key }}
                            search={{}}
                            className="block rounded-[16px] px-3.5 py-2.5 text-sm font-medium text-foreground transition-all duration-200 hover:bg-brand-orange/15 hover:text-brand-orange hover:translate-x-1 rtl:hover:-translate-x-1"
                            onClick={() => {
                              setOthersOpen(false);
                              setMenuOpen(false);
                            }}
                          >
                            {ar ? item?.nameAr : item?.name}
                          </Link>
                        );
                      })}
                  </AnimatedPanel>
                </div>
              )}
            </div>
          </nav>

          <div className="hidden items-center gap-3 xl:flex shrink-0">
            {language}
            <Link
              to={isGarment ? "/sectors/garment?tab=join" : "/contact"}
              className="group/cta inline-flex items-center gap-2 rounded-full bg-brand-green px-5 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:bg-brand-orange hover:shadow-lg hover:shadow-brand-orange/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/50 active:scale-95"
            >
              <span>{ar ? "تواصل معنا" : "Contact Us"}</span>
              <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1 rtl:rotate-90 rtl:group-hover/cta:-translate-x-1 rtl:group-hover/cta:-translate-y-1" />
            </Link>
          </div>

          <Button
            variant="icon"
            size="icon"
            className="justify-self-end xl:hidden"
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </header>

      {/* Mobile Menu — Floating curved glass dropdown */}
      {menuOpen && (
        <>
          {/* Subtle backdrop overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-xs xl:hidden"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />

          <AnimatedPanel
            modal
            onClose={() => setMenuOpen(false)}
            className="fixed inset-x-4 top-[74px] z-50 mx-auto max-w-sm overflow-hidden rounded-3xl border border-white/40 bg-background/50 p-5 shadow-[0_24px_60px_rgba(0,0,0,0.16)] backdrop-blur-3xl ring-1 ring-white/20 dark:border-white/15 dark:bg-background/40 xl:hidden max-h-[calc(100vh-90px)] overflow-y-auto"
            role="dialog"
            label={name}
          >
            <div className="flex flex-col space-y-3">
              <nav className="flex flex-col gap-1">
                <Link to="/" onClick={() => setMenuOpen(false)} className={mobileLinkStyle}>
                  {home}
                </Link>

                {isConstruction ? (
                  <>
                    <Link
                      to="/sectors/$sector"
                      params={{ sector: "construction" }}
                      search={{}}
                      onClick={() => setMenuOpen(false)}
                      className={cn(mobileLinkStyle, activeTab === "about" && "!text-brand-green bg-white/40")}
                    >
                      {ar ? "نبذة عنا" : "About Us"}
                    </Link>
                    <Link
                      to="/sectors/$sector"
                      params={{ sector: "construction" }}
                      search={{ tab: "sectors" }}
                      onClick={() => setMenuOpen(false)}
                      className={cn(mobileLinkStyle, activeTab === "sectors" && "!text-brand-green bg-white/40")}
                    >
                      {ar ? "قطاعاتنا" : "Our Sectors"}
                    </Link>
                    <Link
                      to="/sectors/$sector"
                      params={{ sector: "construction" }}
                      search={{ tab: "services" }}
                      onClick={() => setMenuOpen(false)}
                      className={cn(mobileLinkStyle, activeTab === "services" && "!text-brand-green bg-white/40")}
                    >
                      {ar ? "خدماتنا" : "Our Services"}
                    </Link>
                    <Link
                      to="/sectors/$sector"
                      params={{ sector: "construction" }}
                      search={{ tab: "projects" }}
                      onClick={() => setMenuOpen(false)}
                      className={cn(mobileLinkStyle, activeTab === "projects" && "!text-brand-green bg-white/40")}
                    >
                      {ar ? "مشاريعنا" : "Our Projects"}
                    </Link>
                    <Link
                      to="/contact"
                      onClick={() => setMenuOpen(false)}
                      className={mobileLinkStyle}
                    >
                      {ar ? "انضم إلينا" : "Join Us"}
                    </Link>
                  </>
                ) : isGarment ? (
                  <>
                    <Link
                      to="/sectors/$sector"
                      params={{ sector: "garment" }}
                      search={{}}
                      onClick={() => setMenuOpen(false)}
                      className={cn(mobileLinkStyle, activeTab === "about" && "!text-brand-orange bg-white/40")}
                    >
                      {ar ? "من نحن" : "About Us"}
                    </Link>
                    <Link
                      to="/sectors/$sector"
                      params={{ sector: "garment" }}
                      search={{ tab: "services" }}
                      onClick={() => setMenuOpen(false)}
                      className={cn(mobileLinkStyle, activeTab === "services" && "!text-brand-orange bg-white/40")}
                    >
                      {ar ? "خدماتنا" : "Our Services"}
                    </Link>
                    <Link
                      to="/sectors/$sector"
                      params={{ sector: "garment" }}
                      search={{ tab: "projects" }}
                      onClick={() => setMenuOpen(false)}
                      className={cn(mobileLinkStyle, activeTab === "projects" && "!text-brand-orange bg-white/40")}
                    >
                      {ar ? "مشاريعنا" : "Our Projects"}
                    </Link>
                    <Link
                      to="/sectors/$sector"
                      params={{ sector: "garment" }}
                      search={{ tab: "capabilities" }}
                      onClick={() => setMenuOpen(false)}
                      className={cn(mobileLinkStyle, activeTab === "capabilities" && "!text-brand-orange bg-white/40")}
                    >
                      {ar ? "قدراتنا" : "Our Capabilities"}
                    </Link>
                    <Link
                      to="/sectors/$sector"
                      params={{ sector: "garment" }}
                      search={{ tab: "join" }}
                      onClick={() => setMenuOpen(false)}
                      className={cn(mobileLinkStyle, activeTab === "join" && "!text-brand-orange bg-white/40")}
                    >
                      {ar ? "انضم إلينا" : "Join Us"}
                    </Link>
                  </>
                ) : (
                  <>
                    {navigation ? (
                      <>
                        <Button
                          variant="ghost"
                          size="bare"
                          aria-expanded={aboutOpen}
                          className="justify-between rounded-2xl px-3.5 py-2 font-head text-sm font-bold text-foreground w-full hover:bg-white/40"
                          onClick={() => setAboutOpen((value) => !value)}
                        >
                          {navigation.label}
                          <ChevronDown aria-hidden="true" className={cn("size-4 transition-transform", aboutOpen && "rotate-180")} />
                        </Button>
                        {aboutOpen && (
                          <div className="border-s-2 border-brand-orange/40 ps-3 my-1 flex flex-col gap-1">
                            {aboutLinks.map((item) => (
                              <a
                                key={item.title}
                                href={`#${sectionId(item.title)}`}
                                onClick={() => setMenuOpen(false)}
                                className="block rounded-xl px-3 py-1.5 text-xs font-medium text-foreground hover:bg-white/30 hover:text-brand-orange"
                              >
                                {item.label}
                              </a>
                            ))}
                          </div>
                        )}
                        {primaryLinks.map((item) => (
                          <a
                            key={item.title}
                            href={`#${sectionId(item.title)}`}
                            onClick={() => setMenuOpen(false)}
                            className={mobileLinkStyle}
                          >
                            {item.label}
                          </a>
                        ))}
                      </>
                    ) : (
                      sectorFullMenu(sector).slice(0, 5).map((sec) => (
                        <a
                          key={sec.title}
                          href={`#${sectionId(sec.title)}`}
                          onClick={() => setMenuOpen(false)}
                          className={mobileLinkStyle}
                        >
                          {ar ? sec.titleAr : sec.title}
                        </a>
                      ))
                    )}
                    <Link to="/contact" onClick={() => setMenuOpen(false)} className={mobileLinkStyle}>
                      {ar ? "انضم إلينا" : "Join Us"}
                    </Link>
                  </>
                )}
              </nav>

              {/* Other sectors */}
              <div className="pt-2 border-t border-border/60">
                <Button
                  variant="ghost"
                  size="bare"
                  aria-expanded={othersOpen}
                  className="flex items-center justify-between w-full px-2 py-1 text-xs font-bold text-muted-foreground uppercase tracking-wider hover:text-brand-orange"
                  onClick={() => setOthersOpen((v) => !v)}
                >
                  <span>{ar ? "قطاعات أخرى" : "Other sectors"}</span>
                  <ChevronDown className={cn("size-3.5 transition-transform", othersOpen && "rotate-180")} />
                </Button>
                {othersOpen && (
                  <div className="mt-2 space-y-1">
                    {others}
                  </div>
                )}
              </div>

              {/* Bottom Actions: Language button without label + Contact button */}
              <div className="pt-3 border-t border-white/20 flex flex-col gap-2.5">
                <div className="flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-white/30 border border-white/30 hover:bg-white/50 text-foreground shrink-0 shadow-sm">
                    {language}
                  </div>
                  <Link
                    to={isGarment ? "/sectors/garment?tab=join" : "/contact"}
                    onClick={() => setMenuOpen(false)}
                    className="group/cta flex-1 flex items-center justify-center gap-2 rounded-2xl bg-brand-green px-5 py-3 text-xs font-bold text-white transition-all duration-300 hover:bg-brand-orange shadow-md active:scale-95"
                  >
                    <span>{ar ? "تواصل معنا" : "Contact Us"}</span>
                    <ArrowUpRight className="size-3.5 rtl:rotate-90" />
                  </Link>
                </div>
                <Link to="/" onClick={() => setMenuOpen(false)} className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-brand-green-text hover:underline pt-1">
                  <ArrowLeft aria-hidden="true" className="size-3.5 rtl:rotate-180" /> {back}
                </Link>
              </div>
            </div>
          </AnimatedPanel>
        </>
      )}
    </>
  );
}
