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
      {/* Sector Hero — Only displayed on About Us tab, matching Construction */}
      {(activeTab === "about" || activeTab === "clients" || activeTab === "partners") && (
        <section className="relative w-full overflow-hidden text-footer-foreground min-h-[380px] md:min-h-[460px] lg:min-h-[480px] flex items-center">
          <img
            data-clip-reveal
            src={garmentHeroData.image}
            alt={ar ? garmentHeroData.titleAr : garmentHeroData.title}
            className="absolute inset-0 size-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-footer via-footer/80 to-footer/65" />
          <div className="site-container relative w-full py-16 md:py-24">
            <Reveal>
              <h1 className="mt-4 max-w-4xl font-head text-[clamp(1.85rem,6vw,3.75rem)] font-bold leading-[1.15] text-white">
                {ar ? garmentHeroData.titleAr : garmentHeroData.title}
              </h1>

              <p className={cn("mt-4 max-w-3xl font-head text-base text-footer-muted sm:text-xl", ar && "font-body")}>
                {ar ? garmentHeroData.subtitleAr : garmentHeroData.subtitle}
              </p>
            </Reveal>
          </div>
        </section>
      )}


      {/* Main Content */}

      <main className="site-container min-h-[50vh] space-y-12">
        {(activeTab === "about" || activeTab === "clients" || activeTab === "partners") && (
          <div className="space-y-16">
            <GarmentAboutTab />
            <div className="border-t border-border/60 pt-12">
              <GarmentClientsTab />
            </div>
            <div className="border-t border-border/60 pt-12">
              <GarmentPartnersTab />
            </div>
          </div>
        )}
        {activeTab === "services" && <GarmentServicesTab />}
        {activeTab === "projects" && <GarmentProjectsTab />}
        {activeTab === "capabilities" && <GarmentCapabilitiesTab />}
        {activeTab === "join" && <GarmentJoinTab />}
      </main>
    </div>
  );
}
