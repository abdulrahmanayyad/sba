import { ArrowUpRight, ChevronDown, Facebook, Globe, Instagram, Linkedin, Menu, X } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";

import { SectorHeader } from "@/components/sectors/sector-header";
import { MotionEnhancer } from "@/components/site/motion-enhancer";
import { PageTransition } from "@/components/site/page-transition";
import { AnimatedPanel } from "@/components/site/animated-panel";
import { useEffect, useRef, useState } from "react";

import hero from "@/assets/hero-sustainable.png";
import sbaLogoEn from "@/assets/SBA_logo_EN.svg.asset.json";
import sbaLogoAr from "@/assets/SBA_logo_AR.svg.asset.json";

const SBA_LOGO_AR = "/brand/SBA%20logo%20AR.svg";
const SBA_LOGO_EN = "/brand/SBA%20logo%20EN.svg";
import { Button } from "@/components/ui/button";
import { getMessages, isFallbackLanguage, languages, type Language } from "@/i18n";
import { LanguageProvider } from "@/i18n/language-context";
import { cn } from "@/lib/utils";

const socialLinks = [
  ["Facebook", "https://www.facebook.com/samibinayyad"],
  ["Instagram", "https://www.instagram.com/samibinayyad"],
  ["LinkedIn", "https://www.linkedin.com/company/samibinayyad"],
] as const;

const sectorKeys = ["construction", "environmental", "garment", "food"] as const;
const aboutKeys = ["whoWeAre", "whatWeDo", "ourApproach", "ourValues", "whySba", "leadership", "governance", "policies"] as const;

function NavDropdown({
  label,
  children,
  className,
  onNavigate,
}: {
  label: React.ReactNode;
  children: (close: () => void) => React.ReactNode;
  className?: string;
  onNavigate?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onKeyDown={(event) => { if (event.key === "Escape") close(); }}
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) close(); }}
    >
      <Button
        variant="ghost"
        size="bare"
        type="button"
        aria-expanded={open}
        className={cn(
          className,
          "flex items-center gap-1",
          open && "bg-white/40 text-brand-orange shadow-sm backdrop-blur-md"
        )}
        onClick={(event) => {
          if (event.detail > 0 && window.matchMedia("(hover: hover)").matches) setOpen(true);
          else setOpen((value) => !value);
        }}
      >
        <span>{label}</span>
        <ChevronDown aria-hidden="true" className={cn("size-3 transition-transform duration-200", open && "rotate-180")} />
      </Button>
      {open && (
        <div className="absolute top-full z-50 min-w-64 pt-2.5 start-0">
          <div
            style={{ borderRadius: "24px" }}
            className="overflow-hidden rounded-[24px] border border-white/35 bg-background/75 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.18),0_4px_16px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-white/20 dark:border-white/15 dark:bg-background/70 animate-in fade-in-0 zoom-in-95 duration-200"
          >
            {children(close)}
          </div>
        </div>
      )}
    </div>
  );
}

function LanguageSwitcher({
  language,
  onChange,
  className,
}: {
  language: Language;
  onChange: (language: Language) => void;
  inverse?: boolean;
  className?: string;
  dropUp?: boolean;
}) {
  const isArabic = language === "AR";
  const targetLang = isArabic ? "EN" : "AR";
  const label = isArabic ? "Switch to English" : "التبديل إلى العربية";

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className={cn(
        "group relative flex size-9 items-center justify-center rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/50",
        className
      )}
      onClick={() => onChange(targetLang)}
    >
      <Globe aria-hidden="true" className="size-5 text-foreground/80 transition-all duration-200 group-hover:text-brand-orange group-hover:scale-110" />
    </button>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("EN");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const messages = getMessages(language);
  const isArabic = language === "AR";
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const sectorSlug = pathname.match(/^\/sectors\/([^/]+)/)?.[1];
  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    document.documentElement.lang = isArabic ? "ar" : language.toLowerCase();
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    if (isArabic) {
      if (pathname === "/") {
        document.title = "Sami Bin Ayyad";
      } else if (pathname === "/about") {
        document.title = "نبذة عنا — Sami Bin Ayyad";
      } else if (pathname === "/contact") {
        document.title = "تواصل معنا — Sami Bin Ayyad";
      } else if (pathname === "/news") {
        document.title = "أخبارنا — Sami Bin Ayyad";
      } else if (pathname === "/partners") {
        document.title = "شركاؤنا — Sami Bin Ayyad";
      } else if (pathname === "/products") {
        document.title = "منتجاتنا — Sami Bin Ayyad";
      } else if (pathname === "/sectors") {
        document.title = "قطاعاتنا — Sami Bin Ayyad";
      } else if (sectorSlug) {
        const sectorNames: Record<string, string> = {
          construction: "قطاع المقاولات",
          environmental: "قطاع البيئة",
          garment: "قطاع الملابس",
          food: "قطاع الأغذية والمنتجات الطبيعية",
          research: "البحث العلمي",
          education: "التعليم",
        };
        document.title = `${sectorNames[sectorSlug] ?? sectorSlug} — Sami Bin Ayyad`;
      }
    }
  }, [isArabic, language, pathname, sectorSlug]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const selectLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    setMenuOpen(false);
  };

  const navPill =
    "group relative inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-bold tracking-wide text-foreground transition-all duration-300 hover:bg-white/40 hover:text-brand-orange hover:shadow-sm hover:backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0";
  const dropdownLink =
    "block rounded-[16px] px-4 py-2.5 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-brand-orange/15 hover:text-brand-orange hover:translate-x-1 rtl:hover:-translate-x-1";

  const primaryLinks = (className: string, onNavigate?: () => void) => (
    <>
      <Link to="/" className={cn(className, "whitespace-nowrap")} onClick={onNavigate}>{isArabic ? "الرئيسية" : "Home"}</Link>
      <NavDropdown label={messages.nav.about} className={cn(className, "whitespace-nowrap")}>
        {(close) => aboutKeys.map((key) => (
          <Link key={key} to="/about" hash={key} className={dropdownLink} onClick={() => { close(); onNavigate?.(); }}>
            {messages.aboutMenu[key]}
          </Link>
        ))}
      </NavDropdown>
      <NavDropdown label={messages.nav.sectors} className={cn(className, "whitespace-nowrap")}>
        {(close) => sectorKeys.map((key) => (
          <Link key={key} to="/sectors/$sector" params={{ sector: key }} className={dropdownLink} onClick={() => { close(); onNavigate?.(); }}>
            {messages.sectorsMenu[key]}
          </Link>
        ))}
      </NavDropdown>
      <NavDropdown label={messages.nav.products} className={cn(className, "whitespace-nowrap")}>
        {(close) => ([
          { key: "b2c" as const, label: "B2C" },
          { key: "b2b" as const, label: "B2B" },
        ] as const).map((item) => (
          <Link key={item.key} to="/products" search={{ line: item.key }} className={dropdownLink} onClick={() => { close(); onNavigate?.(); }}>
            {item.label}
          </Link>
        ))}
      </NavDropdown>
      <Link to="/partners" className={cn(className, "whitespace-nowrap")} onClick={onNavigate}>{messages.nav.partners}</Link>
      <Link to="/news" className={cn(className, "whitespace-nowrap")} onClick={onNavigate}>{messages.nav.news}</Link>
      <Link to="/contact" className={cn(className, "whitespace-nowrap")} onClick={onNavigate}>{messages.nav.joinUs}</Link>
    </>
  );

  const currentLogo = isArabic ? SBA_LOGO_AR : SBA_LOGO_EN;

  return (
    <LanguageProvider value={{ language, setLanguage: selectLanguage }}>
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <PageTransition pathname={pathname} rtl={isArabic} />
      <MotionEnhancer key={`${pathname}-${language}`} rtl={isArabic} />
      
      {sectorSlug ? (
        <SectorHeader
          slug={sectorSlug}
          ar={isArabic}
          logo={currentLogo}
          language={<LanguageSwitcher language={language} onChange={selectLanguage} />}
        />
      ) : (
        <header className="fixed inset-x-0 top-3 z-50 pointer-events-none px-4 flex justify-center transition-all duration-300">
          <div
            className={cn(
              "pointer-events-auto mx-auto flex h-[62px] w-full max-w-6xl items-center justify-between gap-4 rounded-full px-5 transition-all duration-300",
              scrolled
                ? "border border-white/25 bg-background/85 shadow-[0_16px_40px_rgba(0,0,0,0.18)] backdrop-blur-2xl ring-1 ring-white/10"
                : "border border-white/15 bg-background/70 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl"
            )}
          >
            {/* Logo */}
            <Link to="/" className="relative z-10 shrink-0 inline-flex items-center leading-none" aria-label={messages.accessibility.home}>
              <img src={currentLogo} alt={isArabic ? "سامي بن عياد" : "SBA"} className="h-9 w-auto transition-transform duration-300 hover:scale-105" />
            </Link>

            {/* Centered nav links */}
            <nav aria-label={messages.accessibility.primaryNavigation} className="hidden items-center justify-center gap-x-1 xl:flex">
              {primaryLinks(navPill)}
            </nav>

            {/* Right: CTA + language */}
            <div className="hidden items-center gap-3 xl:flex shrink-0">
              <LanguageSwitcher language={language} onChange={selectLanguage} />
              <Link
                to="/contact"
                className="group/cta inline-flex items-center gap-2 rounded-full bg-brand-green px-5 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:bg-brand-orange hover:shadow-lg hover:shadow-brand-orange/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/50 active:scale-95"
              >
                <span>{isArabic ? "تواصل معنا" : "Contact Us"}</span>
                <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1 rtl:rotate-90 rtl:group-hover/cta:-translate-x-1 rtl:group-hover/cta:-translate-y-1" />
              </Link>
            </div>

            {/* Mobile hamburger */}
            <Button variant="icon" size="icon" className="shrink-0 justify-self-end xl:hidden" aria-label={messages.accessibility.openMenu} onClick={() => setMenuOpen(true)}>
              <Menu aria-hidden="true" />
            </Button>
          </div>
        </header>
      )}

      {menuOpen && (
        <AnimatedPanel modal onClose={() => setMenuOpen(false)} className="glass-menu fixed inset-0 z-[60] flex min-h-dvh flex-col text-foreground xl:hidden" role="dialog" label={messages.accessibility.primaryNavigation}>
          <div className="site-container flex h-[76px] shrink-0 items-center justify-between border-b border-border">
            <img src={currentLogo} alt={isArabic ? "سامي بن عياد" : "SBA"} className="h-10 w-auto" />
            <Button ref={closeButtonRef} variant="icon" size="icon" aria-label={messages.accessibility.closeMenu} onClick={() => setMenuOpen(false)}><X aria-hidden="true" /></Button>
          </div>
          <div className="site-container flex flex-1 flex-col overflow-y-auto py-8">
            <nav className="grid" aria-label={messages.accessibility.primaryNavigation}>
              {primaryLinks("border-b border-border py-3 font-head text-[clamp(1.35rem,5vw,2rem)] font-medium leading-tight", () => setMenuOpen(false))}
            </nav>
            <div className="mt-auto space-y-6 pt-10">
              <LanguageSwitcher language={language} onChange={selectLanguage} dropUp />
              <Button asChild variant="primary" size="lg" className="w-full"><Link to="/contact" onClick={() => setMenuOpen(false)}>{messages.nav.contact}</Link></Button>
            </div>
          </div>
        </AnimatedPanel>
      )}

      <main id="top" className="flex min-h-[52vh] flex-1 pt-[76px]">{children}</main>

      {/* Glassmorphic Floating Island Footer */}
      <footer className="relative px-4 pb-6 pt-4 text-footer-foreground">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/20 bg-background/70 shadow-[0_8px_40px_rgba(0,0,0,0.18)] backdrop-blur-2xl">
          {/* Subtle background image */}
          <img src={hero} alt="" aria-hidden="true" loading="lazy" className="pointer-events-none absolute inset-0 size-full scale-110 object-cover opacity-8 blur-2xl" />
          <div className="relative px-6 py-10 md:px-10 md:py-12">
            {/* Main grid */}
            <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr] lg:gap-16">
              {/* Brand column */}
              <div>
                <img src={currentLogo} alt={isArabic ? "سامي بن عياد" : "SBA"} className="h-11 w-auto" />
                <p className="mt-5 max-w-sm text-sm font-semibold leading-6 text-foreground">{messages.footer.descriptor}</p>
                <p className={cn("mt-4 font-bold text-brand-orange", isArabic ? "font-sans text-xs tracking-normal" : "font-mono text-[10px] uppercase tracking-[0.18em]")}>{messages.footer.addressLabel}</p>
                <p className="mt-1.5 max-w-sm text-xs font-semibold leading-5 text-foreground/90">{messages.footer.address}</p>

                {/* In Arabic: show reg/tax/copyright under address in brand column */}
                {isArabic && (
                  <div className="mt-5 flex flex-col gap-1 border-t border-white/10 pt-4">
                    <p className="font-sans text-xs font-semibold text-foreground/90 text-right" dir="rtl">
                      {messages.footer.registration}
                    </p>
                    <p className="font-sans text-xs font-semibold text-foreground/90 text-right" dir="rtl">
                      {messages.footer.taxNumber}
                    </p>
                    <p className="mt-1 font-sans text-xs font-medium text-foreground/80 text-right" dir="rtl">
                      {messages.footer.copyright}
                    </p>
                  </div>
                )}
              </div>

              {/* Links grid */}
              <div className="grid gap-8 sm:grid-cols-3">
                <div>
                  <h2 className="font-head text-sm font-bold uppercase tracking-wider text-brand-orange">{messages.footer.sectors}</h2>
                  <nav aria-label={messages.accessibility.footerNavigation} className="mt-4 grid gap-2.5">
                    {sectorKeys.map((key) => (
                      <Link key={key} to="/sectors/$sector" params={{ sector: key }} className="text-xs font-bold text-foreground transition-colors hover:text-brand-orange">{messages.sectorsMenu[key]}</Link>
                    ))}
                  </nav>
                </div>
                <div>
                  <h2 className="font-head text-sm font-bold uppercase tracking-wider text-brand-orange">{messages.footer.company}</h2>
                  <nav aria-label={messages.accessibility.footerNavigation} className="mt-4 grid gap-2.5">
                    <Link to="/about" className="text-xs font-bold text-foreground transition-colors hover:text-brand-orange">{messages.nav.about}</Link>
                    <Link to="/models" className="text-xs font-bold text-foreground transition-colors hover:text-brand-orange">{messages.nav.products}</Link>
                    <Link to="/partners" className="text-xs font-bold text-foreground transition-colors hover:text-brand-orange">{messages.nav.partners}</Link>
                    <Link to="/news" className="text-xs font-bold text-foreground transition-colors hover:text-brand-orange">{messages.nav.news}</Link>
                    <Link to="/contact" className="text-xs font-bold text-foreground transition-colors hover:text-brand-orange">{messages.nav.joinUs}</Link>
                  </nav>
                </div>
                <div>
                  <h2 className="font-head text-sm font-bold uppercase tracking-wider text-brand-orange">{messages.footer.contact}</h2>
                  <div className="mt-4 grid gap-2.5 justify-items-start">
                    <a className="text-xs font-bold text-foreground transition-colors hover:text-brand-orange" href="tel:+201222238072" dir="ltr">+20 12 222 380 72</a>
                    <a className="text-xs font-bold text-foreground transition-colors hover:text-brand-orange" href="tel:+201222238073" dir="ltr">+20 12 222 380 73</a>
                    <a className="break-all text-xs font-bold text-foreground transition-colors hover:text-brand-orange" href="mailto:info@sami-trade.com">info@sami-trade.com</a>
                    {/* Social icons below email */}
                    <div className="mt-3 flex gap-3">
                      {socialLinks.map(([name, href]) => (
                        <a key={name} href={href} target="_blank" rel="noreferrer" aria-label={name}
                          className="inline-flex items-center justify-center rounded-full bg-foreground/10 p-1.5 text-foreground transition-all duration-200 hover:bg-brand-orange hover:text-white hover:scale-110">
                          {name === "Facebook" && <Facebook aria-hidden="true" className="size-4" />}
                          {name === "Instagram" && <Instagram aria-hidden="true" className="size-4" />}
                          {name === "LinkedIn" && <Linkedin aria-hidden="true" className="size-4" />}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom bar — English only (Arabic shows these under address in brand column) */}
            {!isArabic && (
              <div className="mt-8 border-t border-white/10 pt-6">
                <div className="flex flex-col gap-1 items-start">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.05em] text-foreground/90 text-left" dir="ltr">
                    {messages.footer.registration}
                  </p>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.05em] text-foreground/90 text-left" dir="ltr">
                    {messages.footer.taxNumber}
                  </p>
                  <p className="mt-1 text-xs font-medium text-foreground/80 text-left" dir="ltr">
                    {messages.footer.copyright}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </footer>
    </div>
    </LanguageProvider>
  );
}
