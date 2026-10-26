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
      <Button variant="ghost" size="bare"
        type="button"
        aria-expanded={open}
        className={className}
        onClick={(event) => {
          if (event.detail > 0 && window.matchMedia("(hover: hover)").matches) setOpen(true);
          else setOpen((value) => !value);
        }}
      >
        {label}
        <ChevronDown aria-hidden="true" className={cn("size-3 transition-transform", open && "rotate-180")} />
      </Button>
      {open && (
        <div className="absolute top-full z-50 w-64 pt-2">
          <AnimatedPanel className="glass-menu border border-border p-2" onClose={close}>
            {children(close)}
          </AnimatedPanel>
        </div>
      )}
    </div>
  );
}

function LanguageSwitcher({
  language,
  onChange,
  inverse = false,
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
    <Button
      variant={inverse ? "language" : "outline"}
      size={inverse ? "bare" : "sm"}
      type="button"
      aria-label={label}
      title={label}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-xs font-semibold tracking-wider transition-colors",
        inverse ? "text-footer-foreground/80 hover:text-footer-foreground" : "text-foreground hover:bg-secondary",
        className
      )}
      onClick={() => onChange(targetLang)}
    >
      <Globe aria-hidden="true" className="size-4 shrink-0" />
      <span>{targetLang}</span>
    </Button>
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
        document.title = "سامي عياد";
      } else if (pathname === "/about") {
        document.title = "نبذة عنا — سامي عياد";
      } else if (pathname === "/contact") {
        document.title = "تواصل معنا — سامي عياد";
      } else if (pathname === "/news") {
        document.title = "أخبارنا — سامي عياد";
      } else if (pathname === "/partners") {
        document.title = "شركاؤنا — سامي عياد";
      } else if (pathname === "/products") {
        document.title = "منتجاتنا — سامي عياد";
      } else if (pathname === "/sectors") {
        document.title = "قطاعاتنا — سامي عياد";
      } else if (sectorSlug) {
        const sectorNames: Record<string, string> = {
          construction: "قطاع المقاولات",
          environmental: "قطاع البيئة",
          garment: "قطاع الملابس",
          food: "قطاع الأغذية والمنتجات الطبيعية",
          research: "البحث العلمي",
          education: "التعليم",
        };
        document.title = `${sectorNames[sectorSlug] ?? sectorSlug} — سامي عياد`;
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

  const navLink = "nav-link";
  const dropdownLink = "block border-b border-border px-3 py-2.5 text-sm text-foreground last:border-0 hover:bg-secondary";

  const primaryLinks = (className: string, onNavigate?: () => void) => (
    <>
      <Link to="/" className={cn(className, "whitespace-nowrap font-body text-sm font-semibold")} onClick={onNavigate}>{isArabic ? "الرئيسية" : "Home"}</Link>
      <NavDropdown label={messages.nav.about} className={cn(className, "whitespace-nowrap font-body text-sm font-semibold")}>
        {(close) => aboutKeys.map((key) => (
          <Link key={key} to="/about" hash={key} className={dropdownLink} onClick={() => { close(); onNavigate?.(); }}>
            {messages.aboutMenu[key]}
          </Link>
        ))}
      </NavDropdown>
      <NavDropdown label={messages.nav.sectors} className={cn(className, "whitespace-nowrap font-body text-sm font-semibold")}>
        {(close) => sectorKeys.map((key) => (
          <Link key={key} to="/sectors/$sector" params={{ sector: key }} className={dropdownLink} onClick={() => { close(); onNavigate?.(); }}>
            {messages.sectorsMenu[key]}
          </Link>
        ))}
      </NavDropdown>
      <NavDropdown label={messages.nav.products} className={cn(className, "whitespace-nowrap font-body text-sm font-semibold")}>
        {(close) => ([
          { key: "jzra" as const, label: "B2C" },
          { key: "tijari" as const, label: "B2B" },
        ] as const).map((item) => (
          <Link key={item.key} to="/products" search={{ line: item.key }} className={dropdownLink} onClick={() => { close(); onNavigate?.(); }}>
            {item.label}
          </Link>
        ))}
      </NavDropdown>
      <Link to="/partners" className={cn(className, "whitespace-nowrap font-body text-sm font-semibold")} onClick={onNavigate}>{messages.nav.partners}</Link>
      <Link to="/news" className={cn(className, "whitespace-nowrap font-body text-sm font-semibold")} onClick={onNavigate}>{messages.nav.news}</Link>
      <Link to="/contact" className={cn(className, "whitespace-nowrap font-body text-sm font-semibold")} onClick={onNavigate}>{messages.nav.joinUs}</Link>
    </>
  );

  const currentLogo = isArabic ? SBA_LOGO_AR : SBA_LOGO_EN;

  return (
    <LanguageProvider value={{ language, setLanguage: selectLanguage }}>
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <PageTransition pathname={pathname} rtl={isArabic} />
      <MotionEnhancer key={`${pathname}-${language}`} rtl={isArabic} />
      {sectorSlug ? (
        <SectorHeader slug={sectorSlug} ar={isArabic} logo={currentLogo} language={<LanguageSwitcher language={language} onChange={selectLanguage} />} />
      ) : (
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-white/[0.07] bg-background/90 shadow-[0_4px_32px_-8px_rgba(0,0,0,0.3)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="site-container grid h-[76px] grid-cols-[auto_1fr_auto] items-center gap-5">
          {/* Logo */}
          <Link to="/" className="relative z-10 inline-flex items-center leading-none" aria-label={messages.accessibility.home}>
            <img src={currentLogo} alt={isArabic ? "سامي بن عياد" : "SBA"} className="h-10 w-auto transition-opacity duration-200 hover:opacity-80" />
          </Link>

          {/* Centered nav links */}
          <nav aria-label={messages.accessibility.primaryNavigation} className="hidden items-center justify-center gap-x-1 xl:flex">
            {primaryLinks(cn(navLink, "px-3 py-2 rounded-md hover:bg-foreground/5"))}
          </nav>

          {/* Right: CTA + language */}
          <div className="hidden items-center gap-3 xl:flex">
            <LanguageSwitcher language={language} onChange={selectLanguage} />
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-bold text-background transition-all duration-300 hover:bg-brand-orange hover:shadow-lg hover:shadow-brand-orange/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/50"
            >
              <span>{isArabic ? "ابدأ مشروعك" : "Start a Project"}</span>
              <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:rotate-90" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <Button variant="icon" size="icon" className="justify-self-end xl:hidden" aria-label={messages.accessibility.openMenu} onClick={() => setMenuOpen(true)}>
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

      <footer className="relative overflow-hidden bg-footer text-footer-foreground">
        <img src={hero} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 size-full scale-110 object-cover opacity-15 blur-2xl" />
        <div className="absolute inset-0 bg-footer/80" />
        <div className="site-container relative py-14 md:py-20">
          <div className="grid gap-12 border-b border-footer-line pb-14 lg:grid-cols-[1.35fr_2fr] lg:gap-20">
            <div>
              <img src={currentLogo} alt={isArabic ? "سامي بن عياد" : "SBA"} className="h-14 w-auto" />
              <p className="mt-7 max-w-md text-base leading-7 text-footer-muted">{messages.footer.descriptor}</p>
              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-footer-muted">{messages.footer.addressLabel}</p>
              <p className="mt-2 max-w-md text-sm leading-6 text-footer-foreground/90">{messages.footer.address}</p>
            </div>
            <div className="grid gap-10 sm:grid-cols-3">
              <div>
                <h2 className="footer-label">{messages.footer.sectors}</h2>
                <nav aria-label={messages.accessibility.footerNavigation} className="mt-5 grid gap-2.5">
                  {sectorKeys.map((key) => (
                    <Link key={key} to="/sectors/$sector" params={{ sector: key }} className="footer-link">{messages.sectorsMenu[key]}</Link>
                  ))}
                </nav>
              </div>
              <div>
                <h2 className="footer-label">{messages.footer.company}</h2>
                <nav className="mt-5 grid gap-2.5">
                  <Link to="/about" className="footer-link">{messages.nav.about}</Link>
                  <Link to="/models" className="footer-link">{messages.nav.products}</Link>
                  <Link to="/partners" className="footer-link">{messages.nav.partners}</Link>
                  <Link to="/news" className="footer-link">{messages.nav.news}</Link>
                  <Link to="/contact" className="footer-link">{messages.nav.joinUs}</Link>
                </nav>
              </div>
              <div>
                <h2 className="footer-label">{messages.footer.contact}</h2>
                <div className="mt-5 grid gap-2.5 text-sm justify-items-start">
                  <a className="footer-link" href="tel:+201222238072" dir="ltr">+20 12 222 380 72</a>
                  <a className="footer-link" href="tel:+201222238073" dir="ltr">+20 12 222 380 73</a>
                  <a className="footer-link break-all" href="mailto:info@sami-trade.com">info@sami-trade.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-10 pt-10 md:grid-cols-[auto_1fr_auto] md:items-start">
            <div>
              <h2 className="footer-label">{messages.footer.follow}</h2>
              <div className="mt-4 grid gap-3">
                {socialLinks.map(([name, href]) => (
                  <a key={name} className="inline-flex items-center gap-3 text-sm text-footer-muted transition-colors hover:text-footer-foreground" href={href} target="_blank" rel="noreferrer">
                    {name === "Facebook" && <Facebook aria-hidden="true" className="size-4" />}
                    {name === "Instagram" && <Instagram aria-hidden="true" className="size-4" />}
                    {name === "LinkedIn" && <Linkedin aria-hidden="true" className="size-4" />}
                    {name}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-2 md:justify-center">
              <LanguageSwitcher language={language} onChange={selectLanguage} inverse />
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-2 border-t border-footer-line pt-6 text-xs text-footer-muted md:flex-row md:items-center md:justify-between">
            <p>{messages.footer.copyright}</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.12em]">{messages.footer.registration}</p>
          </div>
        </div>
      </footer>
    </div>
    </LanguageProvider>
  );
}
