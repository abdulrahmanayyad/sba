import { ArrowRight, Building2, Globe2, Handshake, Mail, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/language-context";
import { PartnersSlider } from "@/components/group/partners-slider";
import { strategicPartners } from "@/components/group/group-data";
import { WHATSAPP_URL } from "@/lib/process-steps";
import { cn } from "@/lib/utils";

export function PartnersPage() {
  const { language } = useLanguage();
  const ar = language === "AR";

  const partnerCountryFlags: Record<string, string> = {
    China: "🇨🇳",
    Switzerland: "🇨🇭",
    "Regional / GCC": "🌐",
  };

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="site-container pt-16 pb-10 scroll-mt-24">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md mb-4">
            <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
            <span>{ar ? "شركاؤنا والتحالفات الاستراتيجية" : "Our Partners & Strategic Alliances"}</span>
          </div>
          <h1 className="section-title mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
            {ar ? "شركاء يبنون معنا المستقبل" : "Partners Building the Future With Us"}
          </h1>
          <p className="section-intro mt-4 max-w-3xl leading-relaxed text-muted-foreground sm:text-lg">
            {ar
              ? "تعتمد مجموعة سامي بن عياد نهجًا مؤسسيًا يرتكز على بناء شراكات استراتيجية طويلة الأمد مع كبرى الشركات والمؤسسات التقنية والصناعية الرائدة عالميًا وإقليميًا."
              : "SAMI BIN AYYAD GROUP operates on a disciplined corporate strategy centered on building enduring, high-trust strategic alliances with tier-one global technology and industrial leaders."}
          </p>
        </Reveal>
      </section>

      {/* 2. Four Strategic International Partners */}
      <section className="site-container pb-14">
        <Reveal>
          <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-head text-foreground">
                {ar ? "التحالفات والشركاء الاستراتيجيون" : "Key Strategic Alliances"}
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                {ar ? "شراكات تقنية وصناعية معتمدة تدعم التوسع والابتكار" : "Verified technological & industrial alliances driving innovation and international scale"}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {strategicPartners.map((partner, idx) => (
            <Reveal key={partner.id} delay={idx * 0.06}>
              <div className="glass-card group flex h-full flex-col justify-between rounded-3xl border border-white/30 bg-background/85 p-6 sm:p-8 shadow-md backdrop-blur-xl transition-all duration-300 hover:scale-[1.01] hover:border-brand-green/60 hover:shadow-2xl active:scale-[0.99] cursor-pointer">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-green/30 bg-brand-green/10 px-3 py-1 text-xs font-bold text-brand-green">
                      <span>{partnerCountryFlags[partner.country] || "🌐"}</span>
                      <span>{ar ? partner.countryAr : partner.country}</span>
                    </span>
                    <span className="text-xs font-bold text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/20">
                      {ar ? partner.tagAr : partner.tag}
                    </span>
                  </div>

                  <h3 className="font-head text-lg sm:text-xl font-bold text-foreground group-hover:text-brand-orange transition-colors duration-200">
                    {ar ? partner.nameAr : partner.name}
                  </h3>

                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground/95">
                    {ar ? partner.descriptionAr : partner.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider font-mono">
                    {ar ? "شريك استراتيجي معتمد" : "Verified Strategic Alliance"}
                  </span>
                  <span className="size-2 rounded-full bg-brand-green animate-pulse" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 3. Interactive Multi-Sector Partnerships Slider */}
      <section className="site-container py-12 scroll-mt-24 border-t border-border/60">
        <Reveal>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
            <span>{ar ? "شبكة الشركاء عبر القطاعات" : "Cross-Sector Partner Network"}</span>
          </div>
          <h2 className="section-title text-2xl sm:text-3xl">
            {ar ? "شراكات إنتاجية وتشغيلية واسعة النطاق" : "Broad-Scale Production & Operational Partnerships"}
          </h2>
          <p className="section-intro mt-3 max-w-3xl">
            {ar
              ? "نعمل جنبًا إلى جنب مع كبرى العلامات التجارية، والمطورين، والشركاء الصناعيين عبر قطاعات المقاولات وتصنيع الملابس والحلول البيئية والمنتجات الطبيعية."
              : "Working alongside premier brands, infrastructure developers, and industrial partners across construction, apparel, environment, and natural products."}
          </p>
        </Reveal>

        <div className="mt-8">
          <PartnersSlider ar={ar} />
        </div>
      </section>

      {/* 4. Discuss a Partnership CTA Box */}
      <section className="site-container py-12">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/20 bg-background/80 p-8 sm:p-12 shadow-[0_8px_40px_rgba(0,0,0,0.18)] backdrop-blur-2xl grid gap-8 lg:grid-cols-[1.3fr_1fr] items-center transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:border-brand-green/40">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span>{ar ? "بدء شراكة" : "Start a Partnership"}</span>
            </div>
            <h2 className="section-title mt-2 text-foreground text-2xl sm:text-3xl font-bold">
              {ar ? "هل ترغب في بناء شراكة معنا؟" : "Looking to Build a Strategic Partnership?"}
            </h2>
            <p className="section-intro mt-4 text-muted-foreground text-sm sm:text-base">
              {ar
                ? "نرحب بفرص التعاون مع الشركات والمؤسسات الدولية والمحلية لتوسيع آفاق الأعمال المشتركة في التصنيع والإنشاءات والتقنيات البيئية والتجارة الدولية."
                : "We welcome collaborative opportunities with international and domestic enterprises to expand business frontiers across manufacturing, contracting, environmental tech, and global trade."}
            </p>
          </div>

          <div className="flex flex-col gap-3.5">
            <Button asChild variant="ghost" className="group relative h-auto w-full justify-start gap-4 overflow-hidden rounded-2xl border border-[#0066CC]/30 bg-[#0066CC]/5 p-4 text-start whitespace-normal hover:border-[#0066CC] hover:bg-[#0066CC]/15 hover:shadow-lg sm:p-5 backdrop-blur-md transition-all duration-300 hover:scale-[1.01] active:scale-[0.98]">
              <a href="mailto:info@sami-trade.com">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#0066CC]/15 text-[#0066CC]">
                  <Mail aria-hidden="true" className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-head text-xs font-bold text-foreground/80">{ar ? "البريد الإلكتروني المباشر" : "Direct Official Email"}</span>
                  <span dir="ltr" className="mt-0.5 block break-all font-head text-sm sm:text-base font-bold text-foreground">info@sami-trade.com</span>
                </span>
                <span className="shrink-0 text-[#0066CC]"><ArrowRight aria-hidden="true" className="size-4 rtl:rotate-180" /></span>
              </a>
            </Button>

            <Button asChild variant="ghost" className="group relative h-auto w-full justify-start gap-4 overflow-hidden rounded-2xl border border-[#25D366]/30 bg-[#25D366]/5 p-4 text-start whitespace-normal hover:border-[#25D366] hover:bg-[#25D366]/15 hover:shadow-lg sm:p-5 backdrop-blur-md transition-all duration-300 hover:scale-[1.01] active:scale-[0.98]">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366]">
                  <MessageCircle aria-hidden="true" className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-head text-xs font-bold text-foreground/80">WhatsApp Direct</span>
                  <span dir="ltr" className="mt-0.5 block font-head text-sm sm:text-base font-bold text-foreground">+20 12 222 380 72</span>
                </span>
                <span className="shrink-0 text-[#25D366]"><ArrowRight aria-hidden="true" className="size-4 rtl:rotate-180" /></span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
