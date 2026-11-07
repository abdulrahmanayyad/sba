import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/process-steps";

interface SectorContactSectionProps {
  ar: boolean;
  sector?: "construction" | "environmental" | "garment" | "food" | string;
}

export function SectorContactSection({ ar, sector }: SectorContactSectionProps) {
  const customCopy = {
    construction: {
      titleAr: "ابدأ مشروعك الإنشائي القادم مع خبراء التنفيذ",
      titleEn: "Build Your Next Project with Execution Experts",
      introAr: "تواصل مباشرة مع إدارة قطاع المقاولات لمناقشة دراسات الجدوى، مقايسات الأعمال، وجداول التنفيذ والتسليم المعتمدة.",
      introEn: "Connect directly with our Contracting division to discuss feasibility, BOQ reviews, and certified turnkey engineering execution.",
    },
    garment: {
      titleAr: "طوّر خط إنتاج أزياء علامتك التجارية",
      titleEn: "Scale Your Apparel Brand Manufacturing",
      introAr: "تواصل مع فريق تصنيع الملابس لمناقشة برامج FOB المتكاملة، التصنيع للعلامات الخاصة (Private Label)، واعتماد العينات.",
      introEn: "Connect with our Apparel desk to discuss turnkey FOB programs, Private Label contracts, and rapid production sampling.",
    },
    environmental: {
      titleAr: "حلول بيئية واستدامة متقدمة لمنشأتك الصناعية",
      titleEn: "Advanced Environmental Solutions for Your Enterprise",
      introAr: "تواصل مع مستشارينا المعتمدين لتقييم دراسات الأثر البيئي (EIA)، تكنولوجيا الغاز الحيوي، حساب البصمة الكربونية وتأهيل الأيزو.",
      introEn: "Consult with our accredited specialists on EIA studies, dry fermentation biogas plants, carbon verification, and ISO qualification.",
    },
    food: {
      titleAr: "شراكات توريد المنتجات الطبيعية والغذائية للتصدير",
      titleEn: "Agri-Food Sourcing & Global Export Partnerships",
      introAr: "تواصل مع مكتب التصدير التجاري لتلقي عينات موثقة، شهادات التحليل المعملية، وعروض أسعار توريد الحاويات والشحنات الفورية.",
      introEn: "Contact our Agri-Food Export Desk for certified origin samples, lab certificates, and custom wholesale export pricing.",
    },
  }[sector || ""];

  const title = customCopy ? (ar ? customCopy.titleAr : customCopy.titleEn) : (ar ? "لنبن ما هو قادم" : "Let's Build What's Next");
  const intro = customCopy ? (ar ? customCopy.introAr : customCopy.introEn) : (ar
    ? "استكشف فرص التعاون مع مجموعة سامي بن عياد في التصنيع والإنشاءات والحلول البيئية والمنتجات الطبيعية."
    : "Explore opportunities to collaborate with SAMI BIN AYYAD GROUP across manufacturing, construction, environmental solutions, and natural products.");

  return (
    <section id="contact" className="site-container scroll-mt-24 pt-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/20 bg-background/75 p-5 sm:p-8 lg:p-12 shadow-[0_8px_40px_rgba(0,0,0,0.18)] backdrop-blur-2xl grid gap-6 sm:gap-8 lg:grid-cols-[1.2fr_1fr] items-center transition-all duration-500 hover:-translate-y-0.5 hover:border-white/80 hover:shadow-[0_20px_48px_-12px_rgba(0,0,0,0.1)]">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
            <span>{ar ? "تواصل معنا" : "Contact Us"}</span>
          </div>
          <h2 className="font-head text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-foreground mt-2">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-3 leading-relaxed">
            {intro}
          </p>
        </div>
        <div className="min-w-0 flex flex-col gap-3 sm:gap-4">
          <Button asChild variant="ghost" className="group relative h-auto w-full justify-start gap-3 sm:gap-4 overflow-hidden rounded-2xl border border-[#0066CC]/30 bg-[#0066CC]/5 p-4 sm:p-5 text-start whitespace-normal hover:border-[#0066CC] hover:bg-[#0066CC]/15 hover:shadow-lg backdrop-blur-md transition-all duration-300 active:scale-[0.98]">
            <a data-email-contact href="mailto:info@sami-trade.com">
              <span data-email-icon className="flex size-10 sm:size-12 shrink-0 items-center justify-center rounded-full bg-[#0066CC]/15 text-[#0066CC]"><Mail aria-hidden="true" className="size-4 sm:size-5" /></span>
              <span data-email-copy className="min-w-0 flex-1 overflow-hidden">
                <span className="block font-head text-xs sm:text-sm font-bold text-foreground/80">{ar ? "البريد الإلكتروني الرسمي: " : "Official Email: "}</span>
                <span dir="ltr" className="mt-1 block break-all font-head text-sm sm:text-base font-bold text-foreground">info@sami-trade.com</span>
              </span>
              <span data-email-arrow className="shrink-0 text-[#0066CC]"><ArrowRight aria-hidden="true" className="size-4 sm:size-5 rtl:rotate-180" /></span>
            </a>
          </Button>

          <Button asChild variant="ghost" className="group relative h-auto w-full justify-start gap-3 sm:gap-4 overflow-hidden rounded-2xl border border-[#25D366]/30 bg-[#25D366]/5 p-4 sm:p-5 text-start whitespace-normal hover:border-[#25D366] hover:bg-[#25D366]/15 hover:shadow-lg backdrop-blur-md transition-all duration-300 active:scale-[0.98]">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              <span className="flex size-10 sm:size-12 shrink-0 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366]"><MessageCircle aria-hidden="true" className="size-4 sm:size-5" /></span>
              <span className="min-w-0 flex-1">
                <span className="block font-head text-xs sm:text-sm font-bold text-foreground/80">WhatsApp Direct: </span>
                <span dir="ltr" className="mt-1 block font-head text-sm sm:text-base font-bold text-foreground">+20 12 222 380 72</span>
              </span>
              <span className="shrink-0 text-[#25D366]"><ArrowRight aria-hidden="true" className="size-4 sm:size-5 rtl:rotate-180" /></span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
