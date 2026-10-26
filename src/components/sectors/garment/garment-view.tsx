import { Link } from "@tanstack/react-router";
import { 
  Building2, 
  ChevronRight, 
  Layers, 
  MessageCircle, 
  Sparkles, 
  Users, 
  Briefcase, 
  Handshake, 
  Wrench, 
  Send 
} from "lucide-react";

import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/language-context";
import { WHATSAPP_URL } from "@/lib/process-steps";
import { cn } from "@/lib/utils";
import { garmentHeroData } from "./garment-data";

import { GarmentAboutTab } from "./tabs/garment-about-tab";
import { GarmentServicesTab } from "./tabs/garment-services-tab";
import { GarmentClientsTab } from "./tabs/garment-clients-tab";
import { GarmentProjectsTab } from "./tabs/garment-projects-tab";
import { GarmentPartnersTab } from "./tabs/garment-partners-tab";
import { GarmentCapabilitiesTab } from "./tabs/garment-capabilities-tab";
import { GarmentJoinTab } from "./tabs/garment-join-tab";

export type GarmentTab = 
  | "about" 
  | "services" 
  | "clients" 
  | "projects" 
  | "partners" 
  | "capabilities" 
  | "join";

interface GarmentViewProps {
  tab?: GarmentTab;
}

export function GarmentSectorView({ tab = "about" }: GarmentViewProps) {
  const { language } = useLanguage();
  const ar = language === "AR";

  const validTabs: GarmentTab[] = ["about", "services", "clients", "projects", "partners", "capabilities", "join"];
  const activeTab: GarmentTab = validTabs.includes(tab) ? tab : "about";

  const tabLabels: Record<GarmentTab, { en: string; ar: string; descEn: string; descAr: string }> = {
    about: {
      en: "About Us",
      ar: "من نحن",
      descEn: "Who we are, what we offer, why us, facilities & production volume",
      descAr: "من نحن، ماذا نقدم، لماذا تختارنا، إمكانياتنا، وحجم الإنتاج",
    },
    services: {
      en: "Our Services",
      ar: "خدماتنا",
      descEn: "Ready-made garments, Private Label, FOB & textile solutions",
      descAr: "تصنيع الملابس، Private Label، برامج FOB وتوريد الأقمشة",
    },
    clients: {
      en: "Our Clients",
      ar: "عملاؤنا",
      descEn: "Leading global and regional fashion brands and retailers",
      descAr: "كبرى العلامات التجارية وسلاسل التجزئة المحلية والدولية",
    },
    projects: {
      en: "Our Projects",
      ar: "مشاريعنا",
      descEn: "Over 550 documented styles across women, men, kids & matching sets",
      descAr: "أكثر من 550 تصميماً موثقاً عبر الحريمي والرجالي والأطفال والكابلز",
    },
    partners: {
      en: "Our Partners",
      ar: "شركاؤنا",
      descEn: "139 brand partners across casual, classic, kids, loungewear & soirée",
      descAr: "139 شريكاً تجارياً عبر الكاجوال والكلاسيك والأطفال والسواريه",
    },
    capabilities: {
      en: "Our Capabilities",
      ar: "قدراتنا",
      descEn: "15+ lines, 250+ machines, dedicated classic shirt facility & QC",
      descAr: "15+ خط إنتاج، 250+ ماكينة، مصنع القمصان المتخصص ومراقبة الجودة",
    },
    join: {
      en: "Join Us",
      ar: "انضم إلينا",
      descEn: "Request a quotation, RFQ submission and direct contact",
      descAr: "طلب عرض سعر، تقديم متطلبات التشغيل والتواصل المباشر",
    },
  };

  return (
    <div className="w-full">
      {/* Sector Hero */}
      <section className="relative text-footer-foreground">
        <img
          data-clip-reveal
          src={garmentHeroData.image}
          alt={ar ? garmentHeroData.titleAr : garmentHeroData.title}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-footer via-footer/85 to-footer/70" />
        <div className="site-container relative py-16 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-brand-orange">
              <span>{ar ? garmentHeroData.companyAr : garmentHeroData.company}</span>
              <ChevronRight className="size-3.5 rtl:rotate-180" />
              <span className="text-white/80">{ar ? tabLabels[activeTab].ar : tabLabels[activeTab].en}</span>
            </div>

            <h1 className="mt-4 max-w-4xl font-head text-[clamp(1.85rem,6vw,3.75rem)] font-bold leading-[1.15] text-white">
              {ar ? garmentHeroData.titleAr : garmentHeroData.title}
            </h1>

            <p className={cn("mt-4 max-w-3xl font-head text-base text-footer-muted sm:text-xl", ar && "font-body")}>
              {ar ? garmentHeroData.subtitleAr : garmentHeroData.subtitle}
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-footer-foreground/90 sm:text-base">
              {ar ? garmentHeroData.introAr : garmentHeroData.intro}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="primary" size="lg" className="w-full sm:w-auto">
                <Link to="/sectors/$sector" params={{ sector: "garment" }} search={{ tab: "join" }}>
                  {ar ? "اطلب عرض سعر" : "Request a Quotation"}
                </Link>
              </Button>
              <Button asChild size="lg" className="glass-dark w-full !text-footer-foreground hover:!bg-footer sm:w-auto">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4 me-1.5" /> WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link to="/sectors/$sector" params={{ sector: "garment" }} search={{ tab: "capabilities" }}>
                  <Sparkles className="size-4 me-1.5" /> {ar ? "استكشف قدراتنا" : "Explore Capabilities"}
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Tabs Bar */}
      <section className="sticky top-[76px] z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="site-container">
          <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar">
            {(
              [
                "about",
                "services",
                "clients",
                "projects",
                "partners",
                "capabilities",
                "join",
              ] as GarmentTab[]
            ).map((key) => {
              const active = activeTab === key;
              return (
                <Link
                  key={key}
                  to="/sectors/$sector"
                  params={{ sector: "garment" }}
                  search={key === "about" ? {} : { tab: key }}
                  className={cn(
                    "flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition cursor-pointer",
                    active
                      ? "bg-brand-orange text-white shadow-sm"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  )}
                >
                  <span>{ar ? tabLabels[key].ar : tabLabels[key].en}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Tab Content */}
      <main className="site-container min-h-[50vh]">
        {activeTab === "about" && <GarmentAboutTab />}
        {activeTab === "services" && <GarmentServicesTab />}
        {activeTab === "clients" && <GarmentClientsTab />}
        {activeTab === "projects" && <GarmentProjectsTab />}
        {activeTab === "partners" && <GarmentPartnersTab />}
        {activeTab === "capabilities" && <GarmentCapabilitiesTab />}
        {activeTab === "join" && <GarmentJoinTab />}
      </main>
    </div>
  );
}
