import { ChevronDown, Facebook, Globe, Instagram, Linkedin, Menu, X } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";

import { SectorHeader } from "@/components/sectors/sector-header";
import { MotionEnhancer } from "@/components/site/motion-enhancer";
import { PageTransition } from "@/components/site/page-transition";
import { AnimatedPanel } from "@/components/site/animated-panel";
import { useEffect, useRef, useState } from "react";

import hero from "@/assets/group-hero.jpg";
import sbaLogoEn from "@/assets/SBA_logo_EN.svg.asset.json";
import sbaLogoAr from "@/assets/SBA_logo_AR.svg.asset.json";
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
  dropUp = false,
}: {
  language: Language;
  onChange: (language: Language) => void;
  inverse?: boolean;
  className?: string;
  dropUp?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const messages = getMessages(language);

  useEffect(() => {
    if (!open) return;
    const close = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [open]);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <Button
        variant={inverse ? "language" : "outline"}
        size={inverse ? "bare" : "sm"}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={messages.language.label}
        className={cn(inverse && "hover:text-footer-foreground")}
        onClick={() => setOpen((value) => !value)}
      >
        <Globe aria-hidden="true" className="size-4" />
        <ChevronDown aria-hidden="true" className={cn("size-3 transition-transform", open && "rotate-180")} />
      </Button>
      {open && (
        <AnimatedPanel onClose={() => setOpen(false)}
          role="listbox"
          label={messages.language.label}
          className={cn(
            "absolute z-50 w-44 border p-1",
            dropUp ? "bottom-full mb-3" : "top-full mt-3",
            inverse ? "glass-dark border-footer-line" : "glass-menu border-border",
          )}
        >
          {languages.map((item) => (
            <Button variant="ghost" size="bare"
              key={item}
              role="option"
              aria-selected={item === language}
              className={cn(
                "flex w-full items-center justify-between px-3 py-2 text-start text-sm",
                inverse ? "text-footer-foreground hover:bg-footer-line/40" : "text-foreground hover:bg-secondary",
                item === language && (inverse ? "bg-footer-line/60" : "bg-secondary"),
              )}
              onClick={() => {
                onChange(item);
                setOpen(false);
              }}
            >
              {messages.language.names[item]}
              <span className="font-mono text-[10px] uppercase opacity-60">{item}</span>
            </Button>
          ))}
        </AnimatedPanel>
      )}
    </div>
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
      <Link to="/" className={className} onClick={onNavigate}>{isArabic ? "الرئيسية" : "Home"}</Link>
      <NavDropdown label={messages.nav.about} className={className}>
        {(close) => aboutKeys.map((key) => (
          <Link key={key} to="/about" hash={key} className={dropdownLink} onClick={() => { close(); onNavigate?.(); }}>
            {messages.aboutMenu[key]}
          </Link>
        ))}
      </NavDropdown>
      <NavDropdown label={messages.nav.sectors} className={className}>
        {(close) => sectorKeys.map((key) => (
          <Link key={key} to="/sectors/$sector" params={{ sector: key }} className={dropdownLink} onClick={() => { close(); onNavigate?.(); }}>
            {messages.sectorsMenu[key]}
          </Link>
        ))}
      </NavDropdown>
      <NavDropdown label={messages.nav.products} className={className}>
        {(close) => (["jzra", "tijari", "azra"] as const).map((key) => (
          <Link key={key} to="/products" search={{ line: key }} className={dropdownLink} onClick={() => { close(); onNavigate?.(); }}>
            {key.toUpperCase()}
          </Link>
        ))}
      </NavDropdown>
      <Link to="/partners" className={className} onClick={onNavigate}>{messages.nav.partners}</Link>
      <Link to="/news" className={className} onClick={onNavigate}>{messages.nav.news}</Link>
      <Link to="/contact" className={className} onClick={onNavigate}>{messages.nav.joinUs}</Link>
    </>
  );

  return (
    <LanguageProvider value={{ language, setLanguage: selectLanguage }}>
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <PageTransition pathname={pathname} rtl={isArabic} />
      <MotionEnhancer key={`${pathname}-${language}`} rtl={isArabic} />
      {sectorSlug ? (
        <SectorHeader slug={sectorSlug} ar={isArabic} logo={(isArabic ? sbaLogoAr : sbaLogoEn).url} language={<LanguageSwitcher language={language} onChange={selectLanguage} />} />
      ) : (
      <header className={cn("fixed inset-x-0 top-0 z-50 h-[76px] border-b transition-colors duration-300", scrolled ? "border-border bg-background/96 text-foreground backdrop-blur-sm" : "border-border bg-background text-foreground")}>
        <div className="site-container grid h-full grid-cols-[auto_1fr_auto] items-center gap-5">
          <Link to="/" className="relative z-10 inline-flex items-center leading-none" aria-label={messages.accessibility.home}>
            <img src={(isArabic ? sbaLogoAr : sbaLogoEn).url} alt={isArabic ? "سامي عياد" : "SBA"} className="h-9 w-auto" />
          </Link>

          <nav aria-label={messages.accessibility.primaryNavigation} className="hidden items-center justify-center gap-x-5 xl:flex">
            {primaryLinks(navLink)}
          </nav>

          <div className="hidden items-center gap-4 xl:flex">
            <Button asChild variant="primary" size="lg" data-magnetic><Link to="/contact">{messages.nav.contact}</Link></Button>
            <LanguageSwitcher language={language} onChange={selectLanguage} />
            {isFallbackLanguage(language) && <p className="absolute top-full mt-1 w-max text-[10px] text-muted-foreground">{messages.language.comingSoon}</p>}
          </div>

          <Button variant="icon" size="icon" className="justify-self-end xl:hidden" aria-label={messages.accessibility.openMenu} onClick={() => setMenuOpen(true)}>
            <Menu aria-hidden="true" />
          </Button>
        </div>
      </header>
      )}

      {menuOpen && (
        <AnimatedPanel modal onClose={() => setMenuOpen(false)} className="glass-menu fixed inset-0 z-[60] flex min-h-dvh flex-col text-foreground xl:hidden" role="dialog" label={messages.accessibility.primaryNavigation}>
          <div className="site-container flex h-[76px] shrink-0 items-center justify-between border-b border-border">
            <img src={(isArabic ? sbaLogoAr : sbaLogoEn).url} alt="SBA" className="h-9 w-auto" />
            <Button ref={closeButtonRef} variant="icon" size="icon" aria-label={messages.accessibility.closeMenu} onClick={() => setMenuOpen(false)}><X aria-hidden="true" /></Button>
          </div>
          <div className="site-container flex flex-1 flex-col overflow-y-auto py-8">
            <nav className="grid" aria-label={messages.accessibility.primaryNavigation}>
              {primaryLinks("border-b border-border py-3 font-head text-[clamp(1.35rem,5vw,2rem)] font-medium leading-tight", () => setMenuOpen(false))}
            </nav>
            <div className="mt-auto space-y-6 pt-10">
              <LanguageSwitcher language={language} onChange={selectLanguage} dropUp />
              {isFallbackLanguage(language) && <p className="text-xs text-muted-foreground">{messages.language.comingSoon}</p>}
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
              <img src={(isArabic ? sbaLogoAr : sbaLogoEn).url} alt="SBA" className="h-12 w-auto" />
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
              {isFallbackLanguage(language) && <p className="mt-2 text-xs text-footer-muted">{messages.language.comingSoon}</p>}
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
