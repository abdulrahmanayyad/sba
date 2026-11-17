import { Link } from "@tanstack/react-router";
import {
  Apple,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  ClipboardCheck,
  Clock,
  Copy,
  Download,
  Droplets,
  FileCheck,
  FileSpreadsheet,
  FileText,
  Filter,
  Flower,
  Globe,
  Handshake,
  HelpCircle,
  Info,
  Layers,
  Leaf,
  MapPin,
  MessageCircle,
  Package,
  RotateCcw,
  Scale,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Sun,
  Truck,
  Users,
  Wheat,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";

import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/language-context";
import { WHATSAPP_URL } from "@/lib/process-steps";
import { cn } from "@/lib/utils";
import { highlightBrand } from "@/components/site/brand-text";
import { SectorContactSection } from "@/components/site/sector-contact-section";
import { AnimatedStatistic } from "@/components/site/animated-statistic";
import { submitCentralForm } from "@/lib/central-form-dispatch";
import { JoinPage } from "@/components/join/join-page";
import { SectorConsultationCta } from "@/components/site/sector-consultation-cta";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  foodAboutData,
  foodHeroData,
  foodMarketsData,
  foodProductsCategories,
  foodSectorsData,
  foodSupplyCapabilities,
  foodSourcingAndProcurement,
  foodProcessingAndPackaging,
  foodQualityAndCompliance,
  foodSupplyModelsExpanded,
  foodSupplierNetwork,
  detailedExportMarkets,
  detailedFoodProductsCatalog,
  type DetailedFoodProduct,
  type MarketProfile,
  type SupplyModelExpanded,
  type SupplierNetworkHub,
  type FoodProductCategory,
  type FoodProductDetail,
  type FoodSectorItem,
} from "./food-data";
import { FoodQualityTab } from "./food-quality-tab";

export type FoodTab = "about" | "sectors" | "quality" | "products" | "markets" | "order-product" | "request-supply" | "join";

interface FoodViewProps {
  tab?: FoodTab;
}

function SectionBadge({ title }: { title: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
      <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
      {title}
    </span>
  );
}

const sectorIcons: Record<string, typeof Flower> = {
  honey: Flower,
  olives: CircleDot,
  "olive-oil": Droplets,
  dates: Sun,
  herbs: Leaf,
  spices: Sparkles,
  "powdered-juices": Apple,
  "beverage-powders": Apple,
  "other-agri": Wheat,
};

function formatShortMoq(moq: string): string {
  if (!moq) return "";
  const primary = moq.split(/\s+(?:أو|or)\s+/i)[0].trim();
  return primary.replace(/\s*\([^)]*\)/g, "").trim();
}

export function FoodSectorView({ tab = "about" }: FoodViewProps) {
  const { language } = useLanguage();
  const ar = language === "AR";
  const activeTab: FoodTab = [
    "about",
    "sectors",
    "quality",
    "products",
    "markets",
    "order-product",
    "request-supply",
    "join",
  ].includes(tab)
    ? tab
    : "about";

  // State for Product Dossier Dialog
  const [selectedProduct, setSelectedProduct] = useState<DetailedFoodProduct | null>(null);
  // Pre-fill state when clicking "Request Quotation" from product dialog
  const [prefilledProduct, setPrefilledProduct] = useState<string | null>(null);

  const handleRequestQuotationForProduct = (product: DetailedFoodProduct) => {
    setSelectedProduct(null);
    setPrefilledProduct(ar ? product.nameAr : product.nameEn);
    window.location.hash = "";
  };

  return (
    <div className="w-full">
      {/* Sector Hero — Displayed on About tab */}
      {activeTab === "about" && (
        <section className="relative w-full overflow-hidden text-footer-foreground min-h-screen flex items-center">
          <img
            data-clip-reveal
            src={foodHeroData.heroImage}
            alt={ar ? foodHeroData.titleAr : foodHeroData.titleEn}
            className="absolute inset-0 size-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-footer via-footer/85 to-footer/65" />
          <div className="site-container relative w-full py-20 sm:py-28 z-10">
            <Reveal>
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium mb-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/85 px-4 py-1.5 text-xs font-bold tracking-wide text-white backdrop-blur-md shadow-md">
                  <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                  <span>
                    {ar
                      ? "مجموعة سامي بن عياد · قطاع المنتجات الطبيعية والأغذية"
                      : "SAMI BIN AYYAD · Natural & Agri-Food Products"}
                  </span>
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="font-head text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-4 max-w-4xl leading-tight">
                {ar ? foodHeroData.titleAr : foodHeroData.titleEn}
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-sm sm:text-base text-white/90 max-w-3xl leading-relaxed mb-8">
                {ar ? foodHeroData.subtitleAr : foodHeroData.subtitleEn}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/sectors/$sector"
                  params={{ sector: "food" }}
                  search={{ tab: "markets" }}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-8 py-3.5 text-sm font-bold text-white shadow-xl shadow-brand-orange/30 transition-all hover:bg-brand-green hover:scale-105 active:scale-95"
                >
                  <Globe className="size-4" />
                  <span>{ar ? "استكشاف أسواقنا" : "Explore Our Markets"}</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Render Sub Tabs */}
      {activeTab === "about" && (
        <FoodAboutTab
          ar={ar}
          onOpenProductDossier={(prod) => setSelectedProduct(prod)}
        />
      )}
      {activeTab === "sectors" && <FoodSectorsTab ar={ar} />}
      {activeTab === "quality" && <FoodQualityTab ar={ar} />}
      {activeTab === "products" && (
        <FoodProductsTab
          ar={ar}
          onOpenProductDossier={(prod) => setSelectedProduct(prod)}
        />
      )}
      {activeTab === "markets" && <FoodMarketsTab ar={ar} />}
      {(activeTab === "order-product" || activeTab === "request-supply") && (
        <FoodSupplyRequestTab
          ar={ar}
          prefilledProduct={prefilledProduct}
        />
      )}
      {activeTab === "join" && (
        <div className="pt-24 sm:pt-28">
          <JoinPage trackId="food" />
        </div>
      )}

      {/* Dedicated Sector Free Consultation CTA */}
      {activeTab !== "order-product" && activeTab !== "request-supply" && activeTab !== "join" && (
        <div className="site-container my-12">
          <SectorConsultationCta sector="food" ar={ar} />
        </div>
      )}

      {/* Product Technical Dossier Modal Dialog */}
      <ProductDossierDialog
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onRequestQuotation={handleRequestQuotationForProduct}
        ar={ar}
      />
    </div>
  );
}

// ============================================================================
// 1. ABOUT US TAB (10 COMPREHENSIVE HOMEPAGE SECTIONS)
// ============================================================================
function FoodAboutTab({
  ar,
  onOpenProductDossier,
}: {
  ar: boolean;
  onOpenProductDossier: (prod: DetailedFoodProduct) => void;
}) {
  const { whoWeAre, vision, mission, approach, values } = foodAboutData;

  return (
    <div className="w-full">
      {/* SECTION 1: Sector Overview */}
      <section className="site-container py-12 sm:py-20 lg:py-24">
        <Reveal>
          <div className="mx-auto max-w-4xl rounded-3xl border border-white/20 bg-background/80 p-6 sm:p-10 shadow-xl backdrop-blur-2xl mb-12 text-center transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:border-brand-green/40">
            <SectionBadge title={ar ? "نظرة عامة على القطاع" : "Sector Overview"} />
            <h2 className="font-head text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-foreground mt-4 mb-6 text-center">
              {ar ? "أصالة المصادر وجودة التصدير الدولي" : "Authentic Origins & Global Supply Excellence"}
            </h2>

            <div className="mx-auto space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl text-center">
              {(ar ? whoWeAre.paragraphsAr : whoWeAre.paragraphsEn).map((p, idx) => (
                <p key={idx}>{highlightBrand(p)}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4 pt-4 border-t border-border/60">
              <Link
                to="/sectors/$sector"
                params={{ sector: "food" }}
                search={{ tab: "products" }}
                className="inline-flex items-center gap-2 rounded-full bg-brand-green px-7 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-brand-orange hover:scale-105 active:scale-95"
              >
                <span>{ar ? "استعراض كتالوج المنتجات" : "Explore Product Catalog"}</span>
                <ArrowRight className="size-4 rtl:rotate-180" />
              </Link>
              <Link
                to="/sectors/$sector"
                params={{ sector: "food" }}
                search={{ tab: "order-product" }}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-7 py-3 text-sm font-bold text-foreground hover:bg-secondary transition-all"
              >
                <Send className="size-4 rtl:rotate-180" />
                <span>{ar ? "طلب عرض سعر" : "Request RFQ"}</span>
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Vision & Mission */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 mb-10 sm:mb-12">
          <Reveal>
            <div className="group h-full rounded-3xl border border-white/20 bg-background/80 p-6 sm:p-8 lg:p-10 shadow-lg backdrop-blur-2xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl hover:border-brand-green hover:bg-card/95 cursor-pointer">
              <div className="mb-4">
                <SectionBadge title={ar ? "رؤيتنا" : "Our Vision"} />
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                {highlightBrand(ar ? vision.descAr : vision.descEn)}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="group h-full rounded-3xl border border-white/20 bg-background/80 p-6 sm:p-8 lg:p-10 shadow-lg backdrop-blur-2xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl hover:border-brand-green hover:bg-card/95 cursor-pointer">
              <div className="mb-4">
                <SectionBadge title={ar ? "رسالتنا" : "Our Mission"} />
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                {highlightBrand(ar ? mission.descAr : mission.descEn)}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Approach */}
        <Reveal>
          <div className="group rounded-3xl border border-white/20 bg-background/80 p-6 sm:p-8 lg:p-10 shadow-lg backdrop-blur-2xl mb-12 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-2xl">
            <div className="mb-4">
              <SectionBadge title={ar ? "نهجنا" : "Our Approach"} />
            </div>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-4xl">
              {highlightBrand(ar ? approach.descAr : approach.descEn)}
            </p>
          </div>
        </Reveal>

        {/* Values */}
        <div className="mb-16">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, idx) => (
              <Reveal key={idx} delay={idx * 0.04}>
                <div className="group h-full rounded-3xl border border-white/20 bg-background/80 p-5 sm:p-6 shadow-sm backdrop-blur-2xl transition-all duration-300 hover:scale-[1.02] hover:border-brand-green hover:shadow-xl">
                  <div className="flex items-center justify-between mb-3">
                    <span className="flex size-8 items-center justify-center rounded-xl bg-brand-orange/15 text-brand-orange font-bold text-xs">
                      0{idx + 1}
                    </span>
                    <CheckCircle2 className="size-4 text-brand-green-text" />
                  </div>
                  <h4 className="text-center font-head text-base font-bold text-foreground mb-1 group-hover:text-brand-orange transition-colors">
                    {ar ? v.titleAr : v.titleEn}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed text-center">
                    {ar ? v.descAr : v.descEn}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Product Categories */}
      <section className="bg-secondary/40 py-16 sm:py-24 border-y border-border/60">
        <div className="site-container">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <SectionBadge title={ar ? "تصنيف المنتجات" : "Product Categories"} />
              <h2 className="font-head text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-foreground mt-3 mb-4 text-center">
                {ar ? "محفظة المنتجات الطبيعية والغذائية للتصدير" : "Agri-Food Portfolio for Global Markets"}
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                {ar
                  ? "تغطية شاملة لـ 7 فئات تصديرية أساسية تجمع بين أصالة المحاصيل المصرية ومصادر التوريد المعتمدة."
                  : "Comprehensive coverage across 7 core export categories bridging authentic Egyptian origins and verified supply channels."}
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {foodSectorsData.map((sec, idx) => {
              const IconComp = sectorIcons[sec.id] || Flower;
              return (
                <Reveal key={sec.id} delay={idx * 0.05}>
                  <div className="group rounded-3xl border border-white/30 bg-background/90 p-6 shadow-md backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-brand-green flex flex-col justify-between">
                    <div>
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl mb-5 bg-secondary">
                        <img
                          src={sec.image}
                          alt={ar ? sec.nameAr : sec.nameEn}
                          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-3 start-3 end-3 flex items-center justify-between text-white">
                          <span className="flex size-9 items-center justify-center rounded-xl bg-black/50 backdrop-blur-md">
                            <IconComp className="size-5 text-brand-orange" />
                          </span>
                          <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-brand-green/80 backdrop-blur-md">
                            {ar ? "تصدير B2B" : "B2B Export"}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-center font-head text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-brand-orange transition-colors">
                        {ar ? sec.nameAr : sec.nameEn}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4 text-center">
                        {ar ? sec.descAr : sec.descEn}
                      </p>

                      <ul className="space-y-1.5 mb-6 text-xs text-foreground/80">
                        {(ar ? sec.highlightsAr : sec.highlightsEn).slice(0, 3).map((hl, hli) => (
                          <li key={hli} className="flex items-center gap-2">
                            <CheckCircle2 className="size-3.5 text-brand-green shrink-0" />
                            <span className="line-clamp-1">{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      to="/sectors/$sector"
                      params={{ sector: "food" }}
                      search={{ tab: "products" }}
                      className="inline-flex items-center justify-between rounded-2xl bg-brand-green px-4 py-2.5 text-xs font-bold text-white hover:bg-brand-orange transition-all duration-300"
                    >
                      <span>{ar ? "استعراض الأصناف والمواصفات" : "View Items & Specs"}</span>
                      <ChevronRight className="size-4 rtl:rotate-180" />
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: Our Supply Capabilities */}
      <section className="site-container py-16 sm:py-24">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionBadge title={ar ? "قدراتنا التوريدية" : "Our Supply Capabilities"} />
            <h2 className="font-head text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-foreground mt-3 mb-4 text-center">
              {ar ? "بنية لوجستية وضمانات توريد صناعية" : "Industrial Logistics & Sourcing Infrastructure"}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              {ar
                ? "طاقات تصديرية ضخمة ومستودعات مبردة وشبكة مزارع تعاقدية تضمن ثبات الإمداد وجودة التوريد على مدار العام."
                : "High-volume export capacities, temperature-controlled warehousing, and contracted farmlands guaranteeing supply continuity."}
            </p>
          </div>
        </Reveal>

        {/* Metrics Bar */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-14">
          {foodSupplyCapabilities.metrics.map((m, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <div className="rounded-3xl border border-white/20 bg-background/80 p-6 shadow-md backdrop-blur-xl text-center hover:border-brand-orange hover:shadow-xl transition-all">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {ar ? m.titleAr : m.titleEn}
                </span>
                <div className="my-2 flex items-baseline justify-center gap-1.5">
                  <span className="font-head text-3xl sm:text-4xl font-extrabold text-foreground">
                    {m.value}
                  </span>
                </div>
                <span className="inline-block rounded-full bg-brand-green/10 px-3 py-1 text-[11px] font-bold text-brand-green-text mb-2">
                  {ar ? m.unitAr : m.unitEn}
                </span>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {ar ? m.descriptionAr : m.descriptionEn}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Domains Breakdown */}
        <div className="grid gap-6 md:grid-cols-3">
          {foodSupplyCapabilities.domains.map((dom, idx) => {
            const IconC = dom.icon === "Truck" ? Truck : dom.icon === "Package" ? Package : ShieldCheck;
            return (
              <Reveal key={dom.id} delay={idx * 0.08}>
                <div className="rounded-3xl border border-white/20 bg-secondary/40 p-6 sm:p-8 backdrop-blur-xl h-full flex flex-col justify-between hover:border-brand-green hover:bg-background transition-all">
                  <div>
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-brand-green/15 text-brand-green-text mb-5">
                      <IconC className="size-6" />
                    </div>
                    <h3 className="font-head text-lg sm:text-xl font-bold text-foreground mb-3">
                      {ar ? dom.titleAr : dom.titleEn}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                      {ar ? dom.summaryAr : dom.summaryEn}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {(ar ? dom.pointsAr : dom.pointsEn).map((pt, pti) => (
                        <li key={pti} className="flex items-start gap-2.5 text-xs text-foreground/85">
                          <Check className="size-4 text-brand-orange shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-border/50 text-[11px] font-semibold text-brand-green-text flex items-center gap-1">
                    <CheckCircle2 className="size-3.5" />
                    <span>{ar ? "معايير تصدير معتمدة" : "Export Grade Certified"}</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* SECTION 4: Sourcing & Procurement */}
      <section className="bg-secondary/30 py-16 sm:py-24 border-y border-border/60">
        <div className="site-container">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <SectionBadge title={ar ? "التوريد والمصادر الزراعية" : "Sourcing & Procurement"} />
              <h2 className="font-head text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-foreground mt-3 mb-4 text-center">
                {ar ? "منظومة اختيار المصادر والزراعة التعاقدية" : "Contract Farming & Origin Selection"}
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                {ar ? foodSourcingAndProcurement.subtitleAr : foodSourcingAndProcurement.subtitleEn}
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {foodSourcingAndProcurement.steps.map((st, idx) => (
              <Reveal key={idx} delay={idx * 0.06}>
                <div className="group rounded-3xl border border-white/20 bg-background/90 p-6 shadow-md backdrop-blur-xl h-full flex flex-col justify-between hover:border-brand-green hover:shadow-xl transition-all">
                  <div>
                    <span className="font-head text-3xl font-extrabold text-brand-orange/40 group-hover:text-brand-orange transition-colors">
                      {st.step}
                    </span>
                    <h3 className="font-head text-base sm:text-lg font-bold text-foreground mt-2 mb-3">
                      {ar ? st.titleAr : st.titleEn}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {ar ? st.descAr : st.descEn}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/40 text-[11px] text-muted-foreground font-medium">
                    {ar ? "مراقبة ميدانية معتمدة" : "Verified Field Oversight"}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Processing & Packaging */}
      <section className="site-container py-16 sm:py-24">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionBadge title={ar ? "التجهيز والتعبئة" : "Processing & Packaging"} />
            <h2 className="font-head text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-foreground mt-3 mb-4 text-center">
              {ar ? "تكنولوجيا الفرز الآلي والتعبئة المعقمة" : "Automated Sorting & Sterile Packaging"}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              {ar ? foodProcessingAndPackaging.subtitleAr : foodProcessingAndPackaging.subtitleEn}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {foodProcessingAndPackaging.pillars.map((pil, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <div className="rounded-3xl border border-white/20 bg-background/80 p-6 sm:p-8 shadow-sm backdrop-blur-xl hover:border-brand-orange hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex size-10 items-center justify-center rounded-2xl bg-brand-orange/15 text-brand-orange font-bold text-sm">
                    0{idx + 1}
                  </div>
                  <h3 className="font-head text-base sm:text-lg font-bold text-foreground">
                    {ar ? pil.titleAr : pil.titleEn}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {ar ? pil.descAr : pil.descEn}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 6: Quality Assurance & Compliance */}
      <section className="bg-secondary/40 py-16 sm:py-24 border-y border-border/60">
        <div className="site-container">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <SectionBadge title={ar ? "ضمان الجودة والشهادات" : "Quality Assurance & Compliance"} />
              <h2 className="font-head text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-foreground mt-3 mb-4 text-center">
                {ar ? "مستندات وشهادات تصدير رسمية معتمدة" : "Official Export Documentation & Certified Standards"}
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                {ar ? foodQualityAndCompliance.subtitleAr : foodQualityAndCompliance.subtitleEn}
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {foodQualityAndCompliance.documents.map((doc, idx) => (
              <Reveal key={doc.code} delay={idx * 0.05}>
                <div className="rounded-3xl border border-white/20 bg-background/90 p-6 shadow-sm backdrop-blur-xl h-full flex flex-col justify-between hover:border-brand-green hover:shadow-lg transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="rounded-md bg-brand-green/15 px-2.5 py-1 text-xs font-bold text-brand-green-text">
                        {doc.code}
                      </span>
                      <ShieldCheck className="size-4 text-brand-green-text" />
                    </div>
                    <h4 className="font-head text-base font-bold text-foreground mb-1">
                      {ar ? doc.nameAr : doc.nameEn}
                    </h4>
                    <p className="text-xs font-semibold text-brand-orange mb-3">
                      {ar ? doc.issuerAr : doc.issuerEn}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {ar ? doc.detailsAr : doc.detailsEn}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/40 text-[11px] font-semibold text-foreground/80 flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-brand-green" />
                    <span>{ar ? "يصدر مع كل تشغيلة تصدير" : "Issued Per Export Consignment"}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-brand-orange/30 bg-brand-orange/5 p-4 text-center max-w-2xl mx-auto">
            <p className="text-xs text-muted-foreground">
              {ar
                ? "تنويه مهني: تصدر جميع الشهادات الصحية وشهادات المنشأ والتحاليل المعملية رسميًا لكل شحنة من الهيئات الحكومية المعتمدة (الهيئة القومية لسلامة الغذاء، الحجر الزراعي، ومعامل ISO 17025)."
                : "Professional Disclosure: All health certificates, certificates of origin, and lab assays are officially issued per shipment by accredited regulatory authorities (NFSA, Plant Quarantine, and ISO 17025 labs)."}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: Export Markets Preview */}
      <section className="site-container py-16 sm:py-24">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionBadge title={ar ? "الأسواق والتصدير" : "Export Markets"} />
            <h2 className="font-head text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-foreground mt-3 mb-4 text-center">
              {ar ? "حضور ممتد في الأسواق العربية والأوروبية" : "Expanding Presence Across Arab & European Destinations"}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              {ar
                ? "نفصل بين الأسواق التي يتم التوريد إليها فعليًا والأسواق المستهدفة للتوسع، بالاستناد إلى مؤشرات التجارة لعام 2024."
                : "Clear separation between active operating export markets and expansion target destinations backed by 2024 trade indicators."}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          {/* Active Markets Card */}
          <Reveal>
            <div className="rounded-3xl border border-white/30 bg-background/70 p-6 sm:p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-[0_12px_28px_-6px_rgba(22,135,108,0.22)]">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
                <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                <h3 className="font-head text-sm font-bold text-foreground">
                  {ar ? "الأسواق الحالية (يتم التوريد إليها بالفعل)" : "Active Export Markets (Current)"}
                </h3>
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                {ar
                  ? "شحنات تجارية دورية وتعاقدات توريد مباشرة مع كبرى سلاسل التوزيع والمستوردين."
                  : "Scheduled commercial container shipments and supply contracts with leading importers."}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {detailedExportMarkets
                  .filter((m) => m.type === "active")
                  .map((m) => (
                    <span
                      key={m.countryEn}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-semibold text-foreground"
                    >
                      <span>{m.flag}</span>
                      <span>{ar ? m.countryAr : m.countryEn}</span>
                    </span>
                  ))}
              </div>
              <Link
                to="/sectors/$sector"
                params={{ sector: "food" }}
                search={{ tab: "markets" }}
                className="text-xs font-bold text-brand-green-text hover:underline inline-flex items-center gap-1"
              >
                <span>{ar ? "عرض تفاصيل الأسواق الحالية ومؤشرات 2024" : "View active markets & 2024 trade indicators"}</span>
                <ArrowRight className="size-3.5 rtl:rotate-180" />
              </Link>
            </div>
          </Reveal>

          {/* Target Expansion Markets Card */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-white/30 bg-background/70 p-6 sm:p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-[0_12px_28px_-6px_rgba(22,135,108,0.22)]">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
                <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                <h3 className="font-head text-sm font-bold text-foreground">
                  {ar ? "الأسواق المستهدفة (برامج التوسع الدولي)" : "Target Expansion Markets"}
                </h3>
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                {ar
                  ? "مفاوضات وشراكات لتوسيع منافذ التوزيع لتجارة التمور وزيت الزيتون والأعشاب العضوية."
                  : "Partnership pipelines expanding distribution footprint across major retail and botanical processing hubs."}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {detailedExportMarkets
                  .filter((m) => m.type === "target")
                  .map((m) => (
                    <span
                      key={m.countryEn}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-semibold text-foreground"
                    >
                      <span>{m.flag}</span>
                      <span>{ar ? m.countryAr : m.countryEn}</span>
                    </span>
                  ))}
              </div>
              <Link
                to="/sectors/$sector"
                params={{ sector: "food" }}
                search={{ tab: "markets" }}
                className="text-xs font-bold text-brand-orange hover:text-brand-green inline-flex items-center gap-1"
              >
                <span>{ar ? "استكشف خطط التوسع في الأسواق الدولية" : "Explore international expansion roadmap"}</span>
                <ArrowRight className="size-3.5 rtl:rotate-180" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 8: Supply Models */}
      <section className="bg-secondary/40 py-16 sm:py-24 border-y border-border/60">
        <div className="site-container">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <SectionBadge title={ar ? "نماذج التوريد والتعاقد" : "Supply Models"} />
              <h2 className="font-head text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-foreground mt-3 mb-4 text-center">
                {ar ? "نماذج توريد مرنة تناسب كافة أحجام الأعمال" : "Versatile B2B Commercial Supply Models"}
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                {ar
                  ? "حلول مخصصة للمصانع، الموزعين، سلاسل الهايبرماركت، وقطاع الضيافة والفنادق."
                  : "Engineered programs serving industrial food manufacturers, distributors, hypermarket chains, and hospitality operators."}
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {foodSupplyModelsExpanded.map((sm, idx) => (
              <Reveal key={sm.id} delay={idx * 0.05}>
                <div className="rounded-3xl border border-white/20 bg-background/90 p-6 shadow-sm backdrop-blur-xl h-full flex flex-col justify-between hover:border-brand-orange hover:shadow-xl transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="rounded-full bg-brand-orange/15 px-3 py-1 text-xs font-bold text-brand-orange">
                        {ar ? sm.badgeAr : sm.badgeEn}
                      </span>
                      <Package className="size-4 text-brand-green-text" />
                    </div>
                    <h3 className="font-head text-base sm:text-lg font-bold text-foreground mb-2">
                      {ar ? sm.titleAr : sm.titleEn}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                      {ar ? sm.summaryAr : sm.summaryEn}
                    </p>
                    <ul className="space-y-1.5 mb-6 text-xs text-foreground/80">
                      {(ar ? sm.featuresAr : sm.featuresEn).map((feat, fi) => (
                        <li key={fi} className="flex items-start gap-2">
                          <Check className="size-3.5 text-brand-green shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/sectors/$sector"
                    params={{ sector: "food" }}
                    search={{ tab: "order-product" }}
                    className="inline-flex items-center justify-between rounded-2xl bg-secondary/80 px-4 py-2.5 text-xs font-bold text-foreground hover:bg-brand-green hover:text-white transition-all"
                  >
                    <span>{ar ? "طلب تسعير لهذا النموذج" : "Request Quote for Model"}</span>
                    <ArrowRight className="size-3.5 rtl:rotate-180" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: Supplier & Farm Network */}
      <section className="site-container py-16 sm:py-24">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionBadge title={ar ? "شبكة المزارع والموردين" : "Supplier & Farm Network"} />
            <h2 className="font-head text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-foreground mt-3 mb-4 text-center">
              {ar ? "المزارع التعاقدية ومحطات الفرز والتجهيز المرخصة" : "Contracted Farms & Licensed Packing Hubs"}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              {ar
                ? "وضوح وشفافية كاملة في توضيح طبيعة العلاقة الفعلية بكل مورد وموقع زراعي."
                : "Full transparency on our contractual and supervisory relationship across every farm and packing facility."}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {foodSupplierNetwork.map((hub, idx) => (
            <Reveal key={hub.id} delay={idx * 0.06}>
              <div className="rounded-3xl border border-white/20 bg-background/85 p-6 sm:p-8 shadow-md backdrop-blur-xl hover:border-brand-green hover:shadow-xl transition-all">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-head text-base sm:text-lg font-bold text-foreground">
                      {ar ? hub.nameAr : hub.nameEn}
                    </h3>
                    <p className="text-xs text-brand-orange font-semibold flex items-center gap-1 mt-1">
                      <MapPin className="size-3.5" />
                      <span>{ar ? hub.regionAr : hub.regionEn}</span>
                    </p>
                  </div>
                  <span className="rounded-full bg-brand-green/10 px-3 py-1 text-[11px] font-bold text-brand-green-text shrink-0">
                    {ar ? hub.capacityAr : hub.capacityEn}
                  </span>
                </div>

                <div className="rounded-2xl bg-secondary/50 p-3.5 mb-4 border border-border/50">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                    {ar ? "طبيعة العلاقة التعاقدية:" : "Contractual Relationship:"}
                  </span>
                  <p className="text-xs text-foreground font-medium">
                    {ar ? hub.relationshipAr : hub.relationshipEn}
                  </p>
                </div>

                <div className="mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block mb-1.5">
                    {ar ? "المحاصيل والمنتجات:" : "Crops & Commodities:"}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {(ar ? hub.cropsAr : hub.cropsEn).map((c, ci) => (
                      <span
                        key={ci}
                        className="rounded-lg bg-background px-2.5 py-1 text-xs text-foreground/90 border border-border/60"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed pt-3 border-t border-border/40">
                  <span className="font-semibold text-foreground/90">{ar ? "الإشراف النوعي: " : "Quality Audit: "}</span>
                  {ar ? hub.qualitySupervisionAr : hub.qualitySupervisionEn}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 10: Our Featured Products Showcase */}
      <section className="bg-secondary/30 py-16 sm:py-24 border-t border-border/60">
        <div className="site-container">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <SectionBadge title={ar ? "منتجاتنا والمواصفات الفنية" : "Our Products & Technical Dossiers"} />
                <h2 className="font-head text-2xl sm:text-4xl font-bold tracking-tight text-foreground mt-3">
                  {ar ? "ملفات المواصفات الفنية المعتمدة للمنتجات" : "Certified Product Technical Dossiers"}
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-2xl">
                  {ar
                    ? "انقر على أي منتج لعرض الملف الفني الشامل: درجات الجودة، التحاليل المخبرية، خيارات التعبئة، والحد الأدنى للطلب."
                    : "Click any product to inspect its complete 12-point technical dossier: grades, lab specs, packing options, and MOQ."}
                </p>
              </div>

              <Link
                to="/sectors/$sector"
                params={{ sector: "food" }}
                search={{ tab: "products" }}
                className="inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-2.5 text-xs font-bold text-white shadow-md hover:bg-brand-orange transition-all shrink-0"
              >
                <span>{ar ? "عرض الكتالوج الكامل (جميع الأصناف)" : "View Complete Catalog"}</span>
                <ArrowRight className="size-3.5 rtl:rotate-180" />
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {detailedFoodProductsCatalog.slice(0, 8).map((prod, idx) => (
              <Reveal key={prod.id} delay={idx * 0.05}>
                <div
                  onClick={() => onOpenProductDossier(prod)}
                  className="group rounded-3xl border border-white/30 bg-background/90 p-5 shadow-sm backdrop-blur-xl h-full flex flex-col justify-between hover:border-brand-green hover:shadow-[0_14px_32px_-8px_rgba(22,135,108,0.22)] hover:-translate-y-1 transition-all cursor-pointer"
                >
                  <div>
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl mb-4 bg-secondary">
                      <img
                        src={prod.image}
                        alt={ar ? prod.nameAr : prod.nameEn}
                        className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute bottom-2.5 start-2.5 end-2.5 flex items-center justify-between text-white text-[11px]">
                        <span className="rounded-full bg-black/60 px-2.5 py-0.5 backdrop-blur-md">
                          {ar ? prod.countryOfOriginAr : prod.countryOfOriginEn}
                        </span>
                        <span className="font-bold text-brand-orange bg-black/60 px-2 py-0.5 rounded-full whitespace-nowrap">
                          MOQ: {formatShortMoq(ar ? prod.minOrderQuantityAr : prod.minOrderQuantityEn)}
                        </span>
                      </div>
                    </div>

                    <h4 className="text-center font-head text-base font-bold text-foreground mb-1 group-hover:text-brand-orange transition-colors">
                      {ar ? prod.nameAr : prod.nameEn}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-3 text-center">
                      {ar ? prod.productOverviewAr : prod.productOverviewEn}
                    </p>

                    <div className="space-y-1 mb-4 text-[11px] text-foreground/80">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="size-3 text-brand-green shrink-0" />
                        <span className="line-clamp-1">{ar ? prod.availableGradesAr[0] : prod.availableGradesEn[0]}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Package className="size-3 text-brand-orange shrink-0" />
                        <span className="line-clamp-1">{ar ? prod.packagingOptionsAr[0] : prod.packagingOptionsEn[0]}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-border/50 flex items-center justify-between text-xs font-bold text-brand-green group-hover:text-brand-orange transition-colors">
                    <span>{ar ? "عرض البطاقة الفنية" : "View Technical Dossier"}</span>
                    <ArrowUpRight className="size-4 rtl:rotate-90" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Contact Section */}
      <div className="site-container pb-20">
        <SectorContactSection ar={ar} sector="food" />
      </div>
    </div>
  );
}

// ============================================================================
// 2. OUR SECTORS TAB (THE 7 CATEGORIES IN DETAIL)
// ============================================================================
function FoodSectorsTab({ ar }: { ar: boolean }) {
  return (
    <section className="site-container pt-28 sm:pt-36 pb-20">
      <Reveal>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionBadge title={ar ? "قطاعاتنا التخصصية" : "Our Specialized Sectors"} />
          <h2 className="font-head text-3xl sm:text-5xl font-bold tracking-tight text-foreground mt-3 mb-4">
            {ar ? "قطاعات التوريد الطبيعي والزراعي المتكاملة" : "Integrated Natural & Agri-Food Sectors"}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            {ar
              ? "7 قطاعات إنتاجية مستقلة ومتكاملة تلبي معايير التصدير والتصنيع الدولية."
              : "7 dedicated production sectors engineered to satisfy international processing and export benchmarks."}
          </p>
        </div>
      </Reveal>

      <div className="space-y-16">
        {foodSectorsData.map((sec, idx) => {
          const IconComp = sectorIcons[sec.id] || Flower;
          const isEven = idx % 2 === 0;

          return (
            <Reveal key={sec.id} delay={0.05}>
              <div className="rounded-3xl border border-white/20 bg-background/80 p-6 sm:p-10 shadow-lg backdrop-blur-2xl transition-all duration-300 hover:border-brand-green hover:shadow-2xl">
                <div
                  className={cn(
                    "grid gap-8 items-center lg:grid-cols-12",
                    isEven ? "" : "lg:[&>*:first-child]:order-2"
                  )}
                >
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex size-10 items-center justify-center rounded-2xl bg-brand-green/15 text-brand-green-text">
                        <IconComp className="size-5" />
                      </span>
                      <SectionBadge title={ar ? `قطاع رقم ${idx + 1}` : `Sector 0${idx + 1}`} />
                    </div>

                    <h3 className="font-head text-2xl sm:text-3xl font-bold text-foreground mb-4">
                      {ar ? sec.nameAr : sec.nameEn}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                      {ar ? sec.descAr : sec.descEn}
                    </p>

                    <div className="space-y-2.5 mb-8">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                        {ar ? "أبرز مميزات ومواصفات القطاع:" : "Sector Highlights & Production Scope:"}
                      </h4>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {(ar ? sec.highlightsAr : sec.highlightsEn).map((hl, hli) => (
                          <div
                            key={hli}
                            className="flex items-center gap-2 rounded-xl bg-secondary/60 px-3.5 py-2 text-xs font-medium text-foreground border border-border/50"
                          >
                            <CheckCircle2 className="size-3.5 text-brand-green shrink-0" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Link
                        to="/sectors/$sector"
                        params={{ sector: "food" }}
                        search={{ tab: "products" }}
                        className="inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-2.5 text-xs font-bold text-white hover:bg-brand-orange transition-all"
                      >
                        <span>{ar ? "تصفح منتجات هذا القطاع" : "Browse Category Products"}</span>
                        <ArrowRight className="size-3.5 rtl:rotate-180" />
                      </Link>
                      <Link
                        to="/sectors/$sector"
                        params={{ sector: "food" }}
                        search={{ tab: "order-product" }}
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-5 py-2.5 text-xs font-bold text-foreground hover:bg-secondary/70 transition-all"
                      >
                        <Send className="size-3.5 rtl:rotate-180" />
                        <span>{ar ? "طلب توريد" : "Request RFQ"}</span>
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-lg border border-white/30 bg-secondary">
                      <img
                        src={sec.image}
                        alt={ar ? sec.nameAr : sec.nameEn}
                        className="size-full object-cover transition-transform duration-700 hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-16">
        <SectorContactSection ar={ar} sector="food" />
      </div>
    </section>
  );
}

// ============================================================================
// 3. PRODUCTS TAB (FULL CATALOG + INTERACTIVE 12-FIELD DOSSIER MODAL)
// ============================================================================
function FoodProductsTab({
  ar,
  onOpenProductDossier,
}: {
  ar: boolean;
  onOpenProductDossier: (prod: DetailedFoodProduct) => void;
}) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", nameEn: "All Products", nameAr: "جميع المنتجات" },
    { id: "honey", nameEn: "Honey & Bee Products", nameAr: "العسل ومنتجات النحل" },
    { id: "olives", nameEn: "Table Olives", nameAr: "الزيتون المصري" },
    { id: "olive-oil", nameEn: "Olive Oil Grades", nameAr: "زيت الزيتون" },
    { id: "dates", nameEn: "Dates & Palm Derivatives", nameAr: "التمور ومنتجات النخيل" },
    { id: "herbs", nameEn: "Aromatic Herbs", nameAr: "الأعشاب والنباتات الطبية" },
    { id: "beverage-powders", nameEn: "Powdered Juices & Ingredients", nameAr: "العصائر والمكونات المجففة" },
    { id: "spices", nameEn: "Single Spices & Blends", nameAr: "التوابل والبهارات" },
    { id: "soups-broths", nameEn: "Soups & Stocks", nameAr: "الشوربات والمرقات" },
    { id: "traditional-foods", nameEn: "Traditional Foods", nameAr: "الأكلات التراثية" },
    { id: "rice-blends", nameEn: "Rice Seasoning Blends", nameAr: "خلطات الأرز" },
    { id: "essential-spices", nameEn: "Essential Spices & Seasonings", nameAr: "التوابل الأساسية" },
    { id: "asian-spices", nameEn: "Asian Spices & Blends", nameAr: "التوابل والخلطات الآسيوية" },
    { id: "meat-poultry-seasonings", nameEn: "Meat & Poultry Seasonings", nameAr: "تتبيلات اللحوم والدجاج" },
    { id: "specialty-blends", nameEn: "Specialty Blends & Other Products", nameAr: "المتفرقات والخلطات المتخصصة" },
    { id: "other-agri", nameEn: "Other Agricultural Crops", nameAr: "محاصيل وحاصلات زراعية أخرى" },
  ];

  // Combine products
  const filteredProducts = useMemo(() => {
    return detailedFoodProductsCatalog.filter((p) => {
      const matchCat = activeFilter === "all" || p.category === activeFilter;
      const matchQuery =
        !searchQuery.trim() ||
        (ar ? p.nameAr || "" : p.nameEn || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
        (ar ? p.productOverviewAr || "" : p.productOverviewEn || "").toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [activeFilter, searchQuery, ar]);

  return (
    <section className="site-container pt-28 sm:pt-36 pb-20">
      {/* Header */}
      <Reveal>
        <div className="text-center max-w-3xl mx-auto mb-10">
          <SectionBadge title={ar ? "كتالوج التصدير والمواصفات" : "Export Catalog & Specs"} />
          <h2 className="font-head text-3xl sm:text-5xl font-bold tracking-tight text-foreground mt-3 mb-4">
            {ar ? "كتالوج المنتجات الطبيعية والغذائية الكامل" : "Comprehensive Natural Products Portfolio"}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            {ar
              ? "مواصفات قياسية للتوريد والتصدير الدولي. انقر على أي منتج للاطلاع على بطاقة المواصفات الفنية المعتمدة وتحميل البيانات."
              : "Standardized international export specifications. Click any product to review its accredited technical dossier and request a quotation."}
          </p>
        </div>
      </Reveal>

      {/* Filter and Search Bar */}
      <div className="mb-10 space-y-4">
        {/* Search Input */}
        <div className="max-w-md mx-auto relative">
          <Search className="size-4 text-muted-foreground absolute start-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder={ar ? "ابحث باسم المنتج أو الصنف..." : "Search product by name or keyword..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border border-border bg-background/90 ps-11 pe-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-orange shadow-sm backdrop-blur-md"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute end-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="size-4" />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveFilter(c.id)}
              className={cn(
                "rounded-full px-4 py-2 text-xs font-bold transition-all duration-300",
                activeFilter === c.id
                  ? "bg-brand-orange text-white shadow-md shadow-brand-orange/20 scale-105"
                  : "bg-secondary/70 text-muted-foreground hover:bg-secondary hover:text-foreground border border-border/50"
              )}
            >
              {ar ? c.nameAr : c.nameEn}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-16">
        {filteredProducts.map((prod, idx) => (
          <Reveal key={prod.id} delay={idx * 0.04}>
            <div
              onClick={() => onOpenProductDossier(prod)}
              className="group rounded-3xl border border-white/20 bg-background/90 p-5 shadow-sm backdrop-blur-xl h-full flex flex-col justify-between hover:border-brand-green hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer"
            >
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl mb-4 bg-secondary">
                  <img
                    src={prod.image}
                    alt={ar ? prod.nameAr : prod.nameEn}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-2.5 end-2.5">
                    <span className="rounded-full bg-black/60 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-bold text-white border border-white/20">
                      {ar ? prod.countryOfOriginAr : prod.countryOfOriginEn}
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 start-2.5 end-2.5 flex items-center justify-between text-white text-[11px]">
                    <span className="font-bold text-brand-orange bg-black/60 px-2 py-0.5 rounded-full backdrop-blur-md whitespace-nowrap">
                      MOQ: {formatShortMoq(ar ? prod.minOrderQuantityAr : prod.minOrderQuantityEn)}
                    </span>
                  </div>
                </div>

                <h3 className="font-head text-base font-bold text-foreground mb-1 group-hover:text-brand-orange transition-colors">
                  {ar ? prod.nameAr : prod.nameEn}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-3">
                  {ar ? prod.productOverviewAr : prod.productOverviewEn}
                </p>

                {/* Specs Snippet */}
                <div className="space-y-1 mb-4 text-[11px] text-foreground/80 bg-secondary/40 p-2.5 rounded-xl border border-border/40">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3 text-brand-green shrink-0" />
                    <span className="line-clamp-1">{ar ? prod.productSpecificationsAr[0] : prod.productSpecificationsEn[0]}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Package className="size-3 text-brand-orange shrink-0" />
                    <span className="line-clamp-1">{ar ? prod.packagingOptionsAr[0] : prod.packagingOptionsEn[0]}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-border/50 flex items-center justify-between text-xs font-bold text-brand-green group-hover:text-brand-orange transition-colors">
                <span>{ar ? "عرض البطاقة الفنية وطلب عرض" : "Technical Dossier & Quote"}</span>
                <ArrowUpRight className="size-4 rtl:rotate-90" />
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20 rounded-3xl border border-border bg-secondary/30">
          <p className="text-muted-foreground text-base mb-2">
            {ar ? "لم يتم العثور على منتجات تطابق بحثك." : "No products found matching your filter criteria."}
          </p>
          <button
            onClick={() => {
              setActiveFilter("all");
              setSearchQuery("");
            }}
            className="text-xs font-bold text-brand-orange hover:underline"
          >
            {ar ? "إعادة ضبط التصفية" : "Reset Filter"}
          </button>
        </div>
      )}

      {/* Global Sector Contact Section */}
      <div className="mt-16">
        <SectorContactSection ar={ar} sector="food" />
      </div>
    </section>
  );
}

// ============================================================================
// 4. OUR MARKETS TAB (ACTIVE VS TARGET EXPANSION MARKETS)
// ============================================================================
function FoodMarketsTab({ ar }: { ar: boolean }) {
  const { introAr, introEn, stats2024, egyptianExports } = foodMarketsData;
  const [marketFilter, setMarketFilter] = useState<"all" | "active" | "target">("all");

  const filteredMarkets = useMemo(() => {
    if (marketFilter === "all") return detailedExportMarkets;
    return detailedExportMarkets.filter((m) => m.type === marketFilter);
  }, [marketFilter]);

  return (
    <section className="site-container pt-28 sm:pt-36 pb-20">
      {/* Intro Reach Card */}
      <Reveal>
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/20 bg-background/80 p-8 sm:p-10 shadow-xl backdrop-blur-2xl mb-12 text-center">
          <SectionBadge title={ar ? "أسواقنا والتصدير الدولي" : "Our Global Export Markets"} />
          <h2 className="font-head text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-foreground mt-3 mb-4 text-center">
            {ar ? "حضور ممتد وتوسع مدروس في الأسواق العربية والدولية" : "Expanding Presence Across Arab & European Gateways"}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed text-center">
            {ar ? introAr : introEn}
          </p>
        </div>
      </Reveal>

      {/* Active vs Target Toggle */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex rounded-full border border-border bg-secondary/80 p-1 backdrop-blur-md">
          <button
            onClick={() => setMarketFilter("all")}
            className={cn(
              "rounded-full px-5 py-2 text-xs font-bold transition-all",
              marketFilter === "all" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {ar ? "جميع الأسواق (12)" : "All Markets (12)"}
          </button>
          <button
            onClick={() => setMarketFilter("active")}
            className={cn(
              "rounded-full px-5 py-2 text-xs font-bold transition-all flex items-center gap-1.5",
              marketFilter === "active" ? "bg-emerald-600 text-white shadow-sm" : "text-muted-foreground hover:text-foreground"
            )}
          >
            <span className="size-2 rounded-full bg-emerald-400" />
            <span>{ar ? "الأسواق الحالية (8)" : "Active Markets (8)"}</span>
          </button>
          <button
            onClick={() => setMarketFilter("target")}
            className={cn(
              "rounded-full px-5 py-2 text-xs font-bold transition-all flex items-center gap-1.5",
              marketFilter === "target" ? "bg-brand-orange text-white shadow-sm" : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Globe className="size-3" />
            <span>{ar ? "الأسواق المستهدفة (4)" : "Target Markets (4)"}</span>
          </button>
        </div>
      </div>

      {/* Markets Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
        {filteredMarkets.map((m, idx) => (
          <Reveal key={m.countryEn} delay={idx * 0.05}>
            <div className="rounded-3xl border border-white/20 bg-background/90 p-6 shadow-sm backdrop-blur-xl h-full flex flex-col justify-between hover:border-brand-green hover:shadow-xl transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{m.flag}</span>
                    <h3 className="font-head text-base sm:text-lg font-bold text-foreground">
                      {ar ? m.countryAr : m.countryEn}
                    </h3>
                  </div>
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-0.5 text-[10px] font-bold",
                      m.type === "active"
                        ? "bg-emerald-500/15 text-emerald-500 border border-emerald-500/30"
                        : "bg-brand-orange/15 text-brand-orange border border-brand-orange/30"
                    )}
                  >
                    {m.type === "active" ? (ar ? "سوق حالي" : "Active Market") : (ar ? "سوق مستهدف" : "Target Expansion")}
                  </span>
                </div>

                <div className="mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                    {ar ? "المنتجات المصدرة / المستهدفة:" : "Exported / Target Products:"}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {(ar ? m.productsAr : m.productsEn).map((p, pi) => (
                      <span
                        key={pi}
                        className="rounded-md bg-secondary/80 px-2 py-0.5 text-[11px] text-foreground font-medium border border-border/50"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-secondary/40 p-3 mb-4 border border-border/40">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-orange block mb-1">
                    {ar ? "مؤشرات حجم التجارة:" : "Trade Volume Indicator:"}
                  </span>
                  <p className="text-xs text-foreground/90 font-medium leading-relaxed">
                    {ar ? m.statsAr : m.statsEn}
                  </p>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  <span className="font-semibold text-foreground/90">{ar ? "قنوات التوزيع: " : "Channels: "}</span>
                  {ar ? m.channelsAr : m.channelsEn}
                </p>
              </div>

              <div className="pt-3 border-t border-border/40 flex items-center justify-between text-[10px] text-muted-foreground">
                <span className="line-clamp-1">{m.source}</span>
                <span className="shrink-0 font-semibold">{m.date}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* 2024 Market Size Indicators */}
      <Reveal>
        <div className="rounded-3xl border border-white/30 bg-background/80 p-8 sm:p-10 shadow-lg backdrop-blur-2xl mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/60 pb-6 mb-8">
            <div>
              <SectionBadge title={ar ? "مؤشرات حجم الأسواق الدولية لعام 2024" : "2024 Global Import Indicators"} />
              <h3 className="font-head text-xl sm:text-3xl font-bold text-foreground mt-2">
                {ar ? "حجم الواردات السنوية في الأسواق الرئيسية" : "Annual Import Benchmarks Across Destination Markets"}
              </h3>
            </div>
            <div className="text-xs text-muted-foreground flex items-center gap-1.5">
              <Info className="size-4 text-brand-orange shrink-0" />
              <span>{ar ? "المصدر: بيانات التجارة الدولية والأمم المتحدة UN Comtrade 2024" : "Source: UN Comtrade & National Customs 2024"}</span>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats2024.map((stat, idx) => (
              <div key={idx} className="rounded-2xl border border-border/70 bg-secondary/50 p-5 backdrop-blur-md">
                <h4 className="font-head text-base font-bold text-foreground border-b border-border/60 pb-2 mb-3">
                  {ar ? stat.productAr : stat.productEn}
                </h4>
                <div className="space-y-2.5">
                  {stat.data.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">{ar ? item.countryAr : item.countryEn}</span>
                      <span className="font-bold text-foreground font-mono">{item.volume}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Egyptian Export Leadership */}
      <Reveal>
        <div className="rounded-3xl border border-white/20 bg-background/80 p-8 sm:p-12 shadow-xl backdrop-blur-2xl mb-12">
          <SectionBadge title={ar ? "الريادة التصديرية للمنتجات المصرية" : "Egyptian Export Competitiveness"} />
          <h3 className="font-head text-2xl sm:text-3xl font-bold text-foreground mt-3 mb-3">
            {ar ? egyptianExports.titleAr : egyptianExports.titleEn}
          </h3>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8 max-w-4xl">
            {ar ? egyptianExports.descAr : egyptianExports.descEn}
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {egyptianExports.destinations.map((dest, di) => (
              <div
                key={di}
                className="rounded-2xl border border-border/70 bg-secondary/50 p-5 backdrop-blur-md transition-all hover:scale-[1.01] hover:border-brand-green"
              >
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="size-4 text-brand-green-text" />
                  <h4 className="font-head text-sm sm:text-base font-bold text-foreground">
                    {ar ? dest.productAr : dest.productEn}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground/90">
                    {ar ? "أبرز الوجهات الدولية: " : "Key Global Destinations: "}
                  </span>
                  {ar ? dest.countriesAr : dest.countriesEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

// ============================================================================
// 5. REQUEST SUPPLY TAB — FOOD & NATURAL PRODUCTS
// Dedicated B2B action tab for structured supply and sourcing requests.
// Matches the visual treatment of Environmental Request Consultation.
// ============================================================================
export function FoodSupplyRequestTab({
  ar,
  prefilledProduct,
}: {
  ar: boolean;
  prefilledProduct?: string | null;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [quotationCode, setQuotationCode] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    // Company Info
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    country: "",
    website: "",

    // Product Requirements
    category: "agricultural",
    productName: prefilledProduct || "",
    productDescription: "",
    specifications: "",
    quantityValue: "",
    quantityUnit: "tonnes",
    packagingType: "drums",
    preferredOrigin: "",

    // Commercial & Logistics
    destinationCountry: "",
    destinationPort: "",
    deliverySchedule: "immediate",
    supplyFrequency: "one-time",
    incoterms: "FOB",
    targetPrice: "",

    // Additional Info
    additionalNotes: "",
    supportingDocs: "",
  });

  const categories = useMemo(() => [
    {
      id: "agricultural",
      titleAr: "الحاصلات الزراعية",
      titleEn: "Agricultural Products",
      descAr: "الحاصلات الزراعية والسلع الحقلية والتعاقدات الزراعية المباشرة.",
      descEn: "Fresh and dried agricultural commodities, field crops, and direct crop contracts.",
      icon: Wheat,
    },
    {
      id: "food",
      titleAr: "المنتجات الغذائية",
      titleEn: "Food Products",
      descAr: "الأغذية التراثية، خلطات التوابل، الشوربات والمرقات، والسلع الغذائية المعلبة.",
      descEn: "Traditional foods, culinary seasonings, packaged foods, and staple food lines.",
      icon: Apple,
    },
    {
      id: "natural",
      titleAr: "المنتجات الطبيعية",
      titleEn: "Natural Products",
      descAr: "العسل الطبيعي، التمور الفاخرة، زيتون المائدة، والأعشاب الطبية والعطرية.",
      descEn: "Raw natural honey, premium table olives, Saharan dates, and botanical herbs.",
      icon: Flower,
    },
    {
      id: "oils-extracts",
      titleAr: "الزيوت والمستخلصات",
      titleEn: "Oils & Extracts",
      descAr: "زيت الزيتون البكر الممتاز، الزيوت النباتية المضغوطة، والمستخلصات الطبيعية.",
      descEn: "Extra virgin olive oil, cold-pressed seed oils, and botanical liquid extracts.",
      icon: Droplets,
    },
    {
      id: "raw-materials",
      titleAr: "المواد الخام",
      titleEn: "Raw Materials",
      descAr: "المدخلات الغذائية السائبة، الخامات الوسيطة لمصانع الأغذية، والمساحيق الطبيعية.",
      descEn: "Bulk food processing ingredients, intermediate food inputs, and raw powders.",
      icon: Layers,
    },
    {
      id: "processed",
      titleAr: "المنتجات الغذائية المصنعة",
      titleEn: "Processed Food Products",
      descAr: "الأغذية المعالجة والمحفوظة، المركزات، المخللات، والمنتجات المصنعة.",
      descEn: "Processed & preserved foods, concentrates, brined products, and packaged goods.",
      icon: Package,
    },
    {
      id: "other",
      titleAr: "منتجات أخرى",
      titleEn: "Other Products",
      descAr: "أي طلبات توريد لمنتجات أو أصناف نوعية أخرى يتم فحصها ومراجعتها.",
      descEn: "Custom or specialty food & natural product inquiries assessed on request.",
      icon: Sparkles,
    },
  ], []);

  const supplyRequirementsList = useMemo(() => [
    {
      titleAr: "اسم المنتج ووصفه التفصيلي",
      titleEn: "Product Name & Description",
      descAr: "تحديد الصنف بدقة وتدرجه والاستخدام المستهدف.",
      descEn: "Precise commercial identity, variety, and intended application.",
      icon: FileText,
    },
    {
      titleAr: "المواصفات الفنية ودرجة الجودة",
      titleEn: "Specifications & Quality Grade",
      descAr: "معايير الحموضة، الرطوبة، النقاوة، والتحاليل المطلوبة.",
      descEn: "Acidity, moisture %, purity, calibration, and lab parameters.",
      icon: ClipboardCheck,
    },
    {
      titleAr: "الكمية المطلوبة ووحدة القياس",
      titleEn: "Quantity & Unit of Measurement",
      descAr: "الحجم المستهدف بالطن، الحاويات، أو الطبالي والكراتين.",
      descEn: "Target volume by tonnes, containers (FCL), or pallets.",
      icon: Scale,
    },
    {
      titleAr: "نوع وحجم التعبئة والتغليف",
      titleEn: "Packaging Type & Format",
      descAr: "براميل سائبة، برطمانات زجاجية، دويباك، أو تعبئة خاصة.",
      descEn: "Bulk drums, retail glass, vacuum pouches, or Private Label.",
      icon: Package,
    },
    {
      titleAr: "بلد المنشأ المفضل",
      titleEn: "Preferred Country of Origin",
      descAr: "مصر، أو تفضيلات جغرافية أخرى إن وجدت.",
      descEn: "Egypt, or alternative geographical origin preferences.",
      icon: Globe,
    },
    {
      titleAr: "دولة وميناء الوصول المستهدف",
      titleEn: "Destination & Discharge Port",
      descAr: "الدولة المستوردة، والميناء البحري أو الجوي للتسليم.",
      descEn: "Importing nation, seaport, airport, or inland logistics hub.",
      icon: MapPin,
    },
    {
      titleAr: "جدول ومواعيد الشحن والتسليم",
      titleEn: "Required Delivery Schedule",
      descAr: "شحنة فورية، أو جدول توريد شهري، أو عقد موسمي.",
      descEn: "One-off immediate delivery, monthly rolling, or seasonal.",
      icon: Clock,
    },
    {
      titleAr: "اشتراطات المناولة والتخزين الخاصة",
      titleEn: "Special Handling & Storage",
      descAr: "حاويات مبردة (Reefer)، ضبط الرطوبة، أو شروط حساسة.",
      descEn: "Reefer temperature control, moisture barriers, or handling.",
      icon: Truck,
    },
  ], []);

  const cooperationModels = useMemo(() => [
    {
      titleAr: "طلبات التوريد الكبرى (Bulk Supply)",
      titleEn: "Bulk Supply Requests",
      descAr: "شحن حاويات كاملة (FCL) وكميات ضخمة للمصانع والمنشآت التحويلية الكبرى.",
      descEn: "Full container loads (FCL) and high-volume industrial raw inputs for major processors.",
      badge: "B2B Bulk",
    },
    {
      titleAr: "طلبات الشراء لتجار الجملة (Wholesale)",
      titleEn: "Wholesale Purchasing Inquiries",
      descAr: "تلبية احتياجات أسواق الجملة الإقليمية وشبكات الموزعين المعتمدين.",
      descEn: "Supplying regional wholesale produce markets and accredited distribution hubs.",
      badge: "Wholesale",
    },
    {
      titleAr: "فرص الاستيراد والتصدير الدولي",
      titleEn: "Import & Export Opportunities",
      descAr: "شراكات التبادل التجاري عبر اتفاقيات التجارة الحرة والشهادات الجمركية الرسمية.",
      descEn: "Cross-border trade partnerships leveraging free-trade pacts and certified export clearance.",
      badge: "Trade Desk",
    },
    {
      titleAr: "شراكات وعقود التوزيع والوكالات",
      titleEn: "Distribution Partnerships",
      descAr: "منح حقوق توزيع إقليمية للعلامات التجارية والمنتجات المعتمدة للمجموعة.",
      descEn: "Regional territorial distribution rights and commercial agency partnerships.",
      badge: "Partnership",
    },
    {
      titleAr: "اتفاقيات التوريد الدورية وطويلة الأجل",
      titleEn: "Long-Term Supply Arrangements",
      descAr: "عقود سنوية وموسمية مجدولة تضمن استقرار التدفق السلعي والأسعار التعاقدية.",
      descEn: "Annual scheduled contracts securing guaranteed supply continuity and hedged pricing.",
      badge: "Contracts",
    },
    {
      titleAr: "الشراء والتعبئة الخاصة (Private Label)",
      titleEn: "Private Commercial Sourcing",
      descAr: "خدمات الشراء والتعاقد لحساب الغير وتجهيز مواصفات التعبئة بعلامة العميل التجارية.",
      descEn: "Tailored procurement on behalf of clients with custom Private Label packaging.",
      badge: "OEM / PL",
    },
  ], []);

  const steps = useMemo(() => [
    {
      num: 1,
      titleAr: "إرسال الطلب",
      titleEn: "Submit Your Request",
      descAr: "يقوم المشتري بتقديم متطلبات المنتج والمواصفات الفنية والشروط التجارية عبر النموذج أدناه.",
      descEn: "The buyer provides comprehensive product specifications, quantity targets, and commercial requirements.",
    },
    {
      num: 2,
      titleAr: "المراجعة الأولية",
      titleEn: "Initial Review",
      descAr: "يقوم فريق التوريد بمراجعة المنتجات المطلوبة والكميات وبلد الوجهة ونطاق التجارة.",
      descEn: "The export and sourcing desk evaluates the requested items, volumes, destination market, and feasibility.",
    },
    {
      num: 3,
      titleAr: "دراسة المتطلبات",
      titleEn: "Requirements Assessment",
      descAr: "دراسة تفصيلية للمواصفات الفنية، شروط التعبئة، شهادات الفحص المخبري، والترتيبات اللوجستية.",
      descEn: "Detailed assessment of product specifications, packaging parameters, certifications, and logistics routing.",
    },
    {
      num: 4,
      titleAr: "المناقشة التجارية",
      titleEn: "Commercial Discussion",
      descAr: "في حال إمكانية التلبية، يتواصل الفريق لمناقشة التفاصيل التجارية، شروط الدفع، وعروض الأسعار.",
      descEn: "If feasible, our commercial specialists initiate structured discussions on pricing, terms, and delivery schedules.",
    },
    {
      num: 5,
      titleAr: "تأكيد التوريد",
      titleEn: "Confirmation",
      descAr: "يتم تأكيد أي ترتيبات توريد بعد الاتفاق التام على المواصفات والتوفر والأسعار والشروط التعاقدية.",
      descEn: "Any supply arrangement is confirmed only after formal agreement on specifications, availability, pricing, and contract terms.",
    },
  ], []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const refCode = `SPLY-2026-${Math.floor(1000 + Math.random() * 9000)}`;

    try {
      await submitCentralForm({
        formType: "food_rfq",
        name: formData.contactPerson,
        company: formData.companyName || undefined,
        email: formData.email,
        phone: formData.phone,
        country: formData.country || formData.destinationCountry,
        sector: "food",
        serviceOrProduct: formData.productName || formData.category,
        message: `[Food & Natural Products Supply Request]\n\nReference: ${refCode}\nCompany: ${formData.companyName}\nContact: ${formData.contactPerson}\nEmail: ${formData.email}\nPhone/WhatsApp: ${formData.phone}\nCountry: ${formData.country}\nWebsite: ${formData.website || "N/A"}\n\nProduct Category: ${formData.category}\nProduct Name: ${formData.productName}\nProduct Description: ${formData.productDescription}\nSpecifications: ${formData.specifications}\nQuantity: ${formData.quantityValue} ${formData.quantityUnit}\nPackaging: ${formData.packagingType}\nPreferred Origin: ${formData.preferredOrigin || "N/A"}\n\nDestination Country: ${formData.destinationCountry}\nDestination Port: ${formData.destinationPort || "N/A"}\nDelivery Schedule: ${formData.deliverySchedule}\nFrequency of Supply: ${formData.supplyFrequency}\nTrade Incoterms: ${formData.incoterms}\nTarget Price / Budget: ${formData.targetPrice || "N/A"}\n\nAdditional Notes:\n${formData.additionalNotes || "None"}\n\nSupporting Docs / Specs Link:\n${formData.supportingDocs || "None"}`,
        metadata: {
          referenceCode: refCode,
          category: formData.category,
          productName: formData.productName,
          quantity: `${formData.quantityValue} ${formData.quantityUnit}`,
          packagingType: formData.packagingType,
          destinationCountry: formData.destinationCountry,
          destinationPort: formData.destinationPort,
          deliverySchedule: formData.deliverySchedule,
          supplyFrequency: formData.supplyFrequency,
          incoterms: formData.incoterms,
          targetPrice: formData.targetPrice,
          website: formData.website,
        },
      });
    } catch (err) {
      console.error("Central form submission error:", err);
    } finally {
      setIsSubmitting(false);
      setQuotationCode(refCode);
      setSubmitted(true);
    }
  };

  const copyCode = () => {
    if (!quotationCode) return;
    navigator.clipboard.writeText(quotationCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (submitted) {
    return (
      <section className="site-container pt-32 sm:pt-40 pb-24">
        <div className="max-w-3xl mx-auto rounded-3xl border border-brand-green/30 bg-background/95 p-8 sm:p-14 shadow-2xl backdrop-blur-2xl text-center">
          <div className="flex size-16 items-center justify-center rounded-3xl bg-brand-green/20 text-brand-green-text mx-auto mb-6">
            <CheckCircle2 className="size-9 text-brand-green" />
          </div>

          <h2 className="font-head text-2xl sm:text-3xl font-extrabold text-foreground mb-4">
            {ar ? "تم استلام طلب التوريد بنجاح!" : "Supply Request Submitted Successfully!"}
          </h2>

          <div className="rounded-2xl border border-brand-green/30 bg-brand-green/10 p-5 mb-6 max-w-xl mx-auto">
            <p className="text-xs sm:text-sm text-foreground font-semibold leading-relaxed">
              {ar
                ? "شكرًا لاهتمامكم بالتعاون مع SAMI BIN AYYAD GROUP. تم استلام طلب التوريد بنجاح، وسيتم مراجعته من قبل الفريق المختص."
                : "Thank you for your interest in working with SAMI BIN AYYAD GROUP. Your supply request has been submitted successfully and will be reviewed by the relevant team."}
            </p>
          </div>

          {/* Reference Code Box */}
          <div className="rounded-2xl border border-brand-orange/40 bg-brand-orange/10 p-5 mb-8 max-w-md mx-auto">
            <span className="text-[11px] font-bold uppercase tracking-wider text-brand-orange block mb-1">
              {ar ? "الرقم المرجعي الرسمي لطلب التوريد" : "Official Supply Request Reference"}
            </span>
            <div className="flex items-center justify-center gap-3">
              <span className="font-mono text-2xl sm:text-3xl font-extrabold text-foreground tracking-wider">
                {quotationCode}
              </span>
              <button
                type="button"
                onClick={copyCode}
                className="flex size-8 items-center justify-center rounded-xl bg-background border border-border text-foreground hover:bg-brand-orange hover:text-white transition-all cursor-pointer"
                title={ar ? "نسخ الرقم المرجعي" : "Copy reference code"}
              >
                {copied ? <Check className="size-4 text-emerald-500" /> : <Copy className="size-4" />}
              </button>
            </div>
            <p className="text-[11px] text-muted-foreground mt-2">
              {ar ? "يرجى الاحتفاظ بهذا الرمز لمتابعة تفاصيل الطلب مع المكتب التجاري." : "Please retain this code for all follow-up communications with our commercial desk."}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`${WHATSAPP_URL}&text=${encodeURIComponent(
                ar
                  ? `مرحبًا، أود متابعة طلب التوريد رقم: ${quotationCode} لمنتج ${formData.productName || formData.category}`
                  : `Hello, I would like to follow up on Supply Request Ref: ${quotationCode} for ${formData.productName || formData.category}`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition-all hover:bg-emerald-700 hover:scale-105 active:scale-95"
            >
              <MessageCircle className="size-4" />
              <span>{ar ? "متابعة الطلب عبر واتساب التجاري" : "Follow Up on WhatsApp Desk"}</span>
            </a>

            <a
              href={`mailto:info@sami-trade.com?subject=Supply Request [${quotationCode}] - ${encodeURIComponent(formData.companyName)}&body=Reference Code: ${quotationCode}%0ACompany: ${encodeURIComponent(formData.companyName)}%0AProduct: ${encodeURIComponent(formData.productName || formData.category)}%0AContact: ${encodeURIComponent(formData.contactPerson)} (${encodeURIComponent(formData.phone)})`}
              className="inline-flex items-center gap-2 rounded-full bg-brand-green px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-green/30 transition-all hover:bg-brand-orange hover:scale-105 active:scale-95"
            >
              <Send className="size-4 rtl:rotate-180" />
              <span>{ar ? "مراسلة الإدارة بالبريد الرسمي" : "Email Commercial Desk"}</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setQuotationCode("");
              }}
              className="rounded-full border border-border bg-secondary px-7 py-3.5 text-sm font-bold text-foreground hover:bg-secondary/80 transition-all cursor-pointer"
            >
              {ar ? "إرسال طلب توريد آخر" : "Submit Another Supply Request"}
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="w-full">
      {/* 1. Header & Intro */}
      <section className="site-container pt-28 sm:pt-36 pb-12">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center">
            <SectionBadge title={ar ? "قطاع المنتجات الطبيعية والغذائية · طلب توريد معتمد" : "Food & Natural Products · Certified Supply Request"} />
            <h1 className="font-head text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mt-4 mb-4 tracking-tight leading-tight text-center">
              {ar ? "طلب توريد المنتجات الطبيعية والغذائية" : "Food & Natural Products Supply Request"}
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto whitespace-pre-line">
              {ar
                ? "نرحب بطلبات التوريد والتعاون التجاري من الشركات والمستوردين والموزعين وتجار الجملة والأسواق التجارية.\n\nمن خلال هذه الصفحة، يمكنكم إرسال تفاصيل المنتجات الغذائية والطبيعية المطلوبة، والكميات المستهدفة، ومواصفات التعبئة والتغليف، ووجهة التوريد، لدراسة الطلب وتقييم إمكانية تلبية احتياجاتكم وفقًا لطبيعة المنتج ومتطلبات السوق."
                : "We welcome supply inquiries and commercial cooperation requests from companies, importers, distributors, wholesalers, and retail businesses.\n\nUse this page to share your required food and natural products, target quantities, packaging specifications, and destination market. Our team will review your inquiry and assess the potential supply options based on product requirements and market conditions."}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#supply-form"
                className="inline-flex items-center gap-2 rounded-full bg-brand-green px-7 py-3 text-sm font-bold text-white shadow-lg shadow-brand-green/20 hover:bg-brand-orange transition-all duration-300 hover:scale-105"
              >
                <Send className="size-4 rtl:rotate-180" />
                <span>{ar ? "الانتقال المباشر لنموذج الطلب" : "Go Directly to Request Form"}</span>
              </a>
              <a
                href="#supply-process"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-6 py-3 text-sm font-bold text-foreground hover:bg-secondary transition-all"
              >
                <ClipboardCheck className="size-4 text-brand-orange" />
                <span>{ar ? "آلية دراسة طلب التوريد" : "Supply Assessment Process"}</span>
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 2. Section A: Products of Interest | المنتجات محل الاهتمام */}
      <section className="site-container py-12">
        <Reveal>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block mb-1">
                  {ar ? "الفئات الاستطلاعية والاستعلامية" : "Inquiry Categories"}
                </span>
                <h2 className="font-head text-2xl sm:text-3xl font-bold text-foreground">
                  {ar ? "المنتجات محل الاهتمام" : "Products of Interest"}
                </h2>
              </div>
              <p className="text-xs text-muted-foreground max-w-md">
                {ar
                  ? "يمكنكم اختيار أي فئة لتحديدها تلقائيًا داخل نموذج التوريد."
                  : "Select any category below to auto-select it in the supply inquiry form."}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((cat) => {
                const CatIcon = cat.icon;
                const isSelected = formData.category === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setFormData((p) => ({ ...p, category: cat.id }));
                      const el = document.getElementById("supply-form");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={cn(
                      "p-6 rounded-2xl border text-start transition-all duration-300 flex flex-col justify-between cursor-pointer group hover:-translate-y-1 shadow-xs",
                      isSelected
                        ? "border-brand-green bg-brand-green/10 ring-2 ring-brand-green/30 shadow-md"
                        : "border-border/70 bg-card/70 hover:border-brand-orange/60 hover:bg-card"
                    )}
                  >
                    <div>
                      <div className={cn(
                        "size-12 rounded-2xl flex items-center justify-center mb-4 transition-colors",
                        isSelected ? "bg-brand-green text-white" : "bg-secondary text-brand-orange group-hover:bg-brand-orange group-hover:text-white"
                      )}>
                        <CatIcon className="size-6" />
                      </div>
                      <h3 className="font-head text-base font-bold text-foreground mb-2 group-hover:text-brand-orange transition-colors">
                        {ar ? cat.titleAr : cat.titleEn}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {ar ? cat.descAr : cat.descEn}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between text-[11px] font-bold text-brand-green">
                      <span>{ar ? "تحديد هذه الفئة" : "Select Category"}</span>
                      <ArrowRight className="size-3 rtl:rotate-180 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Disclaimer Alert */}
            <div className="mt-6 rounded-2xl border border-border/70 bg-secondary/40 p-4 sm:p-5 flex items-start gap-3">
              <Info className="size-5 text-brand-orange shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground leading-relaxed">
                {ar
                  ? "تنويه مهني: تُدرج هذه الفئات لأغراض استطلاع متطلبات التوريد وتلقي الاستفسارات التجارية. لا يُقصد من هذا الإدراج أن جميع الأصناف متوفرة فورياً للشحن في كل الأوقات؛ حيث تخضع إمكانية التوريد الفعلي لدراسة المواصفات الفنية، والكميات المطلوبة، والظروف الموسمية الزراعية، وتأكيد الفريق التجاري."
                  : "Professional Notice: These categories are provided to receive and assess structured commercial supply inquiries. Listing does not imply that every single item is held in immediate ready-stock at all times; actual supply feasibility is determined through technical specification review, volume assessment, agricultural crop seasonality, and formal agreement."}
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 3. Section B: Supply Requirements | متطلبات التوريد */}
      <section className="site-container py-12">
        <Reveal>
          <div className="max-w-6xl mx-auto rounded-3xl border border-border/70 bg-secondary/30 p-8 sm:p-12">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block mb-1">
                {ar ? "البيانات والمعايير المستهدفة" : "Inquiry Parameters"}
              </span>
              <h2 className="font-head text-2xl sm:text-3xl font-bold text-foreground">
                {ar ? "متطلبات التوريد والمعايير الفنية" : "Supply Requirements & Specifications"}
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                {ar
                  ? "لضمان سرعة دراسة طلب التوريد بدقة، يُفضل تضمين العناصر الأساسية التالية عند تقديم الطلب:"
                  : "To ensure an accurate and swift feasibility assessment, buyers are encouraged to provide clear details on the following parameters:"}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {supplyRequirementsList.map((req, idx) => {
                const ReqIcon = req.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl border border-border/70 bg-card/80 backdrop-blur-md shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="size-10 rounded-xl bg-brand-green/10 text-brand-green-text flex items-center justify-center mb-3">
                        <ReqIcon className="size-5" />
                      </div>
                      <h3 className="font-head text-sm font-bold text-foreground mb-1">
                        {ar ? req.titleAr : req.titleEn}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {ar ? req.descAr : req.descEn}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </section>

      {/* 4. Section C: Commercial Cooperation | التعاون التجاري */}
      <section className="site-container py-12">
        <Reveal>
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block mb-1">
                {ar ? "أطر الشراكة التجارية" : "Partnership Frameworks"}
              </span>
              <h2 className="font-head text-xl sm:text-2xl lg:text-3xl font-bold text-foreground text-center">
                {ar ? "نماذج التعاون التجاري المحتملة" : "Commercial Cooperation Models"}
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                {ar
                  ? "نرحب ببحث فرص التعاون مع الشركاء التجاريين عبر نماذج مرنة تخضع للدراسة والاتفاق المسبق:"
                  : "We welcome commercial cooperation with global partners through flexible, structured models subject to mutual agreement:"}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {cooperationModels.map((model, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl border border-border/70 bg-card/85 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex rounded-full bg-brand-orange/15 px-3 py-1 font-mono text-[11px] font-bold text-brand-orange">
                        {model.badge}
                      </span>
                      <Handshake className="size-5 text-muted-foreground/70" />
                    </div>
                    <h3 className="font-head text-base font-bold text-foreground mb-2">
                      {ar ? model.titleAr : model.titleEn}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {ar ? model.descAr : model.descEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-xs text-muted-foreground mt-6 italic">
              {ar
                ? "* تُطرح هذه النماذج كأطر تعاون محتملة تخضع للدراسة والتقييم المشترك والاتفاق المسبق، ولا تشكل التزامًا تعاقديًا إلا بعد توقيع الاتفاقيات الرسمية."
                : "* These models represent potential cooperation frameworks subject to review, mutual evaluation, and prior agreement, with no binding commitment until definitive contracts are executed."}
            </p>
          </div>
        </Reveal>
      </section>

      {/* 5. Section D: Supply Process | آلية دراسة طلب التوريد */}
      <section id="supply-process" className="site-container py-12">
        <Reveal>
          <div className="max-w-6xl mx-auto rounded-3xl border border-border/70 bg-secondary/40 p-8 sm:p-12">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block mb-1">
                {ar ? "منظومة الانضباط التجاري" : "Structured Protocol"}
              </span>
              <h2 className="font-head text-xl sm:text-2xl lg:text-3xl font-bold text-foreground text-center">
                {ar ? "آلية دراسة طلب التوريد" : "Supply Request Assessment Process"}
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                {ar
                  ? "تسير دراسة طلبات التوريد وفق آلية عمل متسلسلة لضمان الشفافية والمطابقة الفنية:"
                  : "All inquiries are evaluated through a rigorous 5-stage workflow ensuring transparency and quality assurance:"}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {steps.map((st) => (
                <div
                  key={st.num}
                  className="p-5 rounded-2xl border border-border/70 bg-card/90 backdrop-blur-md shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex size-9 items-center justify-center rounded-xl bg-brand-green text-white font-mono font-bold text-sm mb-3">
                      {st.num}
                    </div>
                    <h3 className="font-head text-sm font-bold text-foreground mb-2">
                      {ar ? st.titleAr : st.titleEn}
                    </h3>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      {ar ? st.descAr : st.descEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-border/60 bg-background/60 p-4 text-center">
              <p className="text-xs text-muted-foreground">
                {ar
                  ? "ملاحظة هامة: تخضع كافة الطلبات للتقييم الفني والمراجعة التجارية، ولا تشكل دراسة الطلب موافقة تلقائية أو التزامًا فوريًا بالتوفر أو أوقات تسليم محددة مسبقًا."
                  : "Important Note: All requests undergo technical and commercial review. Inquiry evaluation does not constitute automatic acceptance, guaranteed availability, or fixed delivery schedules."}
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 6. Section 5: The Supply Request Form | نموذج طلب التوريد */}
      <section id="supply-form" className="site-container py-12 pb-24">
        <Reveal>
          <div className="w-full max-w-6xl mx-auto rounded-3xl border border-white/20 bg-background/90 p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-2xl">
            <div className="text-center mb-10">
              <SectionBadge title={ar ? "النموذج الرسمي المعتمد" : "Official B2B Inquiry Form"} />
              <h2 className="font-head text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mt-3 mb-2 text-center">
                {ar ? "نموذج طلب توريد المنتجات الطبيعية والغذائية" : "Natural & Food Products Supply Request Form"}
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto">
                {ar
                  ? "يرجى استكمال الحقول المطلوبة بالدقة الممكنة ليتمكن الفريق التجاري من مراجعة الطلب وتقييم إمكانات التوريد."
                  : "Please complete all required fields accurately to enable our commercial team to evaluate product availability and feasibility."}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Group 1: Company Information */}
              <div className="rounded-2xl border border-border/70 bg-secondary/30 p-5 sm:p-6 space-y-4">
                <div className="flex items-center gap-2 border-b border-border/60 pb-3">
                  <span className="flex size-7 items-center justify-center rounded-xl bg-brand-orange text-white font-bold text-xs">
                    1
                  </span>
                  <h3 className="font-head text-sm sm:text-base font-bold text-foreground">
                    {ar ? "بيانات الشركة والمشتري التجاري" : "Company & Commercial Buyer Information"}
                  </h3>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                      {ar ? "اسم الشركة / المؤسسة *" : "Company / Organization Name *"}
                    </label>
                    <input
                      required
                      type="text"
                      placeholder={ar ? "اسم شركتك أو جهة الاستيراد" : "Company or Trading Name"}
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                      {ar ? "اسم المسؤول للتواصل *" : "Contact Person *"}
                    </label>
                    <input
                      required
                      type="text"
                      placeholder={ar ? "الاسم الكريم" : "Full Name"}
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                      {ar ? "البريد الإلكتروني الرسمي *" : "Business Email *"}
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="procurement@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                      {ar ? "الهاتف / واتساب مع رمز الدولة *" : "Phone / WhatsApp *"}
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+966 5... / +49 17..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                      {ar ? "الدولة المستوردة *" : "Country *"}
                    </label>
                    <input
                      required
                      type="text"
                      placeholder={ar ? "دولة تسجيل الشركة" : "Country of Operation"}
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                    {ar ? "الموقع الإلكتروني للشركة (اختياري)" : "Company Website (Optional)"}
                  </label>
                  <input
                    type="text"
                    placeholder="https://company.com"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  />
                </div>
              </div>

              {/* Group 2: Product Requirements */}
              <div className="rounded-2xl border border-border/70 bg-secondary/30 p-5 sm:p-6 space-y-4">
                <div className="flex items-center gap-2 border-b border-border/60 pb-3">
                  <span className="flex size-7 items-center justify-center rounded-xl bg-brand-orange text-white font-bold text-xs">
                    2
                  </span>
                  <h3 className="font-head text-sm sm:text-base font-bold text-foreground">
                    {ar ? "متطلبات المنتج والمواصفات الفنية" : "Product Requirements & Specifications"}
                  </h3>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                      {ar ? "فئة المنتج المطلوب *" : "Product Category *"}
                    </label>
                    <select
                      required
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    >
                      {categories.map((c) => (
                        <option key={c.id} value={c.id}>
                          {ar ? c.titleAr : c.titleEn}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                      {ar ? "اسم المنتج المطلوب *" : "Product Name *"}
                    </label>
                    <input
                      required
                      type="text"
                      placeholder={ar ? "مثال: تمر مجدول جامبو، زيت زيتون بكر ممتاز، كركديه..." : "e.g. Jumbo Medjool Dates, EVOO, Hibiscus TBC..."}
                      value={formData.productName}
                      onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                      className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                    {ar ? "وصف المنتج واحتياجات الاستخدام *" : "Product Description & Intended Use *"}
                  </label>
                  <textarea
                    required
                    rows={2}
                    placeholder={ar ? "يرجى توضيح الصنف وطبيعة الاستخدام (تجزئة، تصنيع غذائي، تعبئة خاصة، توريد جملة)..." : "Specify the product type, application (retail, industrial processing, private label, wholesale)..."}
                    value={formData.productDescription}
                    onChange={(e) => setFormData({ ...formData, productDescription: e.target.value })}
                    className="w-full rounded-2xl border border-border bg-background p-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                    {ar ? "المواصفات الفنية ودرجة الجودة المطلوبة *" : "Required Specifications & Quality Grade *"}
                  </label>
                  <textarea
                    required
                    rows={2}
                    placeholder={ar ? "معايير الحموضة، الرطوبة، النقاوة، درجة الفرز، العيار (Caliber)، التحاليل المخبرية المطلوبة..." : "Acidity parameters, moisture %, purity %, grading caliber, certifications, or specific lab thresholds..."}
                    value={formData.specifications}
                    onChange={(e) => setFormData({ ...formData, specifications: e.target.value })}
                    className="w-full rounded-2xl border border-border bg-background p-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                      {ar ? "الكمية المطلوبة *" : "Required Quantity *"}
                    </label>
                    <input
                      required
                      type="number"
                      min="1"
                      placeholder={ar ? "الكمية بالأرقام..." : "Numeric volume..."}
                      value={formData.quantityValue}
                      onChange={(e) => setFormData({ ...formData, quantityValue: e.target.value })}
                      className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                      {ar ? "وحدة القياس *" : "Unit of Measurement *"}
                    </label>
                    <select
                      value={formData.quantityUnit}
                      onChange={(e) => setFormData({ ...formData, quantityUnit: e.target.value })}
                      className="w-full rounded-2xl border border-border bg-background px-3 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    >
                      <option value="tonnes">{ar ? "طن متري (Metric Tonnes)" : "Metric Tonnes (MT)"}</option>
                      <option value="containers-20ft">{ar ? "حاوية 20 قدم (20ft FCL)" : "20ft FCL Container"}</option>
                      <option value="containers-40ft">{ar ? "حاوية 40 قدم (40ft FCL)" : "40ft FCL Container"}</option>
                      <option value="pallets">{ar ? "طبالي تخزينية (Pallets)" : "Storage Pallets"}</option>
                      <option value="cartons">{ar ? "كراتين تصدير (Cartons)" : "Export Cartons"}</option>
                      <option value="kg">{ar ? "كيلوجرام (KG)" : "Kilograms (KG)"}</option>
                      <option value="liters">{ar ? "لتر (Liters)" : "Liters"}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                      {ar ? "مواصفات التعبئة والتغليف *" : "Packaging Format *"}
                    </label>
                    <select
                      required
                      value={formData.packagingType}
                      onChange={(e) => setFormData({ ...formData, packagingType: e.target.value })}
                      className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    >
                      <option value="drums">{ar ? "براميل غذائية صناعية (Bulk Drums)" : "Industrial Bulk Drums"}</option>
                      <option value="retail-jars">{ar ? "عبوات وبرطمانات زجاجية (Glass Jars)" : "Retail Glass Jars"}</option>
                      <option value="pouches">{ar ? "أكياس دويباك مفرغة (Vacuum Pouches)" : "Vacuum Doypack Pouches"}</option>
                      <option value="cartons">{ar ? "كراتين تصدير مقواة (Export Cartons)" : "Export Cartons"}</option>
                      <option value="ibc">{ar ? "خزانات وسوائل IBC سعة 1,000 لتر" : "1,000L Bulk IBC Totes"}</option>
                      <option value="private-label">{ar ? "تعبئة مخصصة بعلامة خاصة (Private Label)" : "Custom Private Label"}</option>
                      <option value="other">{ar ? "تعبئة أخرى حسب الطلب" : "Other Customized Packaging"}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                    {ar ? "بلد المنشأ المفضل (اختياري)" : "Preferred Country of Origin (Optional)"}
                  </label>
                  <input
                    type="text"
                    placeholder={ar ? "مصر، أو تفضيلات جغرافية أخرى..." : "e.g. Egypt, or other origin preferences..."}
                    value={formData.preferredOrigin}
                    onChange={(e) => setFormData({ ...formData, preferredOrigin: e.target.value })}
                    className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  />
                </div>
              </div>

              {/* Group 3: Commercial & Logistics */}
              <div className="rounded-2xl border border-border/70 bg-secondary/30 p-5 sm:p-6 space-y-4">
                <div className="flex items-center gap-2 border-b border-border/60 pb-3">
                  <span className="flex size-7 items-center justify-center rounded-xl bg-brand-orange text-white font-bold text-xs">
                    3
                  </span>
                  <h3 className="font-head text-sm sm:text-base font-bold text-foreground">
                    {ar ? "البيانات التجارية واللوجستية ووجهة التوريد" : "Commercial & Logistics Destination"}
                  </h3>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                      {ar ? "دولة الوجهة والتفريغ *" : "Destination Country *"}
                    </label>
                    <input
                      required
                      type="text"
                      placeholder={ar ? "مثال: السعودية، الإمارات، ألمانيا، فرنسا..." : "e.g. Saudi Arabia, UAE, Germany, France..."}
                      value={formData.destinationCountry}
                      onChange={(e) => setFormData({ ...formData, destinationCountry: e.target.value })}
                      className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                      {ar ? "ميناء الوصول أو موقع التسليم (اختياري)" : "Destination Port / Discharge Location (Optional)"}
                    </label>
                    <input
                      type="text"
                      placeholder={ar ? "مثال: ميناء جدة الإسلامي، ميناء جبل علي، ميناء هامبورغ..." : "e.g. Jeddah Islamic Port, Jebel Ali, Hamburg..."}
                      value={formData.destinationPort}
                      onChange={(e) => setFormData({ ...formData, destinationPort: e.target.value })}
                      className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                      {ar ? "جدول التسليم المتوقع *" : "Expected Delivery Schedule *"}
                    </label>
                    <select
                      value={formData.deliverySchedule}
                      onChange={(e) => setFormData({ ...formData, deliverySchedule: e.target.value })}
                      className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    >
                      <option value="immediate">{ar ? "شحنة فورية لمرة واحدة (Immediate One-Time)" : "Immediate One-Time Shipment"}</option>
                      <option value="monthly">{ar ? "شحنات شهرية منتظمة مجدولة (Monthly Scheduled)" : "Regular Monthly Scheduled Shipments"}</option>
                      <option value="quarterly">{ar ? "شحنات ربع سنوية (Quarterly Shipments)" : "Quarterly Scheduled Shipments"}</option>
                      <option value="seasonal">{ar ? "عقد توريد موسمي سنوي (Annual Seasonal Contract)" : "Annual Seasonal Supply Contract"}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                      {ar ? "دورية التوريد المستهدفة *" : "Frequency of Supply *"}
                    </label>
                    <select
                      value={formData.supplyFrequency}
                      onChange={(e) => setFormData({ ...formData, supplyFrequency: e.target.value })}
                      className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    >
                      <option value="one-time">{ar ? "شحنة لمرة واحدة (One-Time)" : "One-Time"}</option>
                      <option value="monthly">{ar ? "شهري (Monthly)" : "Monthly"}</option>
                      <option value="quarterly">{ar ? "ربع سنوي (Quarterly)" : "Quarterly"}</option>
                      <option value="long-term">{ar ? "طويل الأجل / سنوي (Long-Term)" : "Long-Term / Multi-Year"}</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                      {ar ? "شروط التجارة المفضلة (Incoterms) (اختياري)" : "Preferred Trade Terms (Incoterms) (Optional)"}
                    </label>
                    <select
                      value={formData.incoterms}
                      onChange={(e) => setFormData({ ...formData, incoterms: e.target.value })}
                      className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    >
                      <option value="FOB">FOB (Free on Board - Egyptian Ports)</option>
                      <option value="CIF">CIF (Cost, Insurance & Freight to destination port)</option>
                      <option value="CFR">CFR (Cost & Freight)</option>
                      <option value="EXW">EXW (Ex-Works Factory / Warehouse)</option>
                      <option value="DDP">DDP (Delivered Duty Paid - Select Destinations)</option>
                      <option value="Other">{ar ? "شروط تجارية أخرى" : "Other Trade Terms"}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                      {ar ? "السعر المستهدف أو الميزانية التقديرية (اختياري)" : "Target Price or Budget (Optional)"}
                    </label>
                    <input
                      type="text"
                      placeholder={ar ? "مثال: USD/MT أو الميزانية الإجمالية التقديرية..." : "e.g. USD / Metric Tonne or target budget..."}
                      value={formData.targetPrice}
                      onChange={(e) => setFormData({ ...formData, targetPrice: e.target.value })}
                      className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    />
                  </div>
                </div>
              </div>

              {/* Group 4: Additional Information & Specs */}
              <div className="rounded-2xl border border-border/70 bg-secondary/30 p-5 sm:p-6 space-y-4">
                <div className="flex items-center gap-2 border-b border-border/60 pb-3">
                  <span className="flex size-7 items-center justify-center rounded-xl bg-brand-orange text-white font-bold text-xs">
                    4
                  </span>
                  <h3 className="font-head text-sm sm:text-base font-bold text-foreground">
                    {ar ? "معلومات ومستندات واشتراطات إضافية" : "Additional Information & Specifications"}
                  </h3>
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                    {ar ? "ملاحظات أو اشتراطات إضافية (اختياري)" : "Additional Requirements / Notes (Optional)"}
                  </label>
                  <textarea
                    rows={2}
                    placeholder={ar ? "أي شروط أو متطلبات فحص، فترات صلاحية، اشتراطات جمركية بالوجهة..." : "Any specific inspection requirements, shelf-life thresholds, custom documents..."}
                    value={formData.additionalNotes}
                    onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                    className="w-full rounded-2xl border border-border bg-background p-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                    {ar ? "رابط أو بيانات المواصفات والمستندات الداعمة (اختياري)" : "Supporting Documents / Specs Link (Optional)"}
                  </label>
                  <input
                    type="text"
                    placeholder={ar ? "رابط Google Drive / Dropbox أو ملخص المواصفات الداعمة..." : "Google Drive, Dropbox, or link to technical specs..."}
                    value={formData.supportingDocs}
                    onChange={(e) => setFormData({ ...formData, supportingDocs: e.target.value })}
                    className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-brand-green py-4 text-base font-bold text-white shadow-xl shadow-brand-green/30 hover:bg-brand-orange transition-all duration-300 hover:scale-[1.01] active:scale-95 cursor-pointer disabled:opacity-50"
              >
                <Send className="size-4 me-2 rtl:rotate-180" />
                <span>
                  {isSubmitting
                    ? (ar ? "جاري إرسال الطلب..." : "Submitting Request...")
                    : (ar ? "إرسال طلب التوريد" : "Submit Supply Request")}
                </span>
              </Button>
            </form>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

// Keep alias for backwards compatibility
export const FoodOrderProductTab = FoodSupplyRequestTab;

// ============================================================================
// 6. PRODUCT DOSSIER MODAL DIALOG (12 COMPLETE REQUIRED FIELDS)
// ============================================================================
function ProductDossierDialog({
  product,
  onClose,
  onRequestQuotation,
  ar,
}: {
  product: DetailedFoodProduct | null;
  onClose: () => void;
  onRequestQuotation: (product: DetailedFoodProduct) => void;
  ar: boolean;
}) {
  if (!product) return null;

  return (
    <Dialog open={!!product} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl p-6 sm:p-8 border border-white/20 bg-background/95 backdrop-blur-2xl shadow-2xl">
        <DialogHeader className="border-b border-border/60 pb-4 mb-4">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="rounded-full bg-brand-green/15 px-3 py-1 text-xs font-bold text-brand-green-text">
              {ar ? product.countryOfOriginAr : product.countryOfOriginEn}
            </span>
            <span className="rounded-full bg-brand-orange/15 px-3 py-1 text-xs font-bold text-brand-orange">
              MOQ: {ar ? product.minOrderQuantityAr : product.minOrderQuantityEn}
            </span>
          </div>
          <DialogTitle className="font-head text-xl sm:text-2xl font-bold text-foreground">
            {ar ? product.nameAr : product.nameEn}
          </DialogTitle>
          <DialogDescription className="text-xs sm:text-sm text-muted-foreground mt-1">
            {ar ? product.productOverviewAr : product.productOverviewEn}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Image and Highlights Banner */}
          <div className="relative aspect-[16/8] w-full overflow-hidden rounded-2xl bg-secondary">
            <img
              src={product.image}
              alt={ar ? product.nameAr : product.nameEn}
              className="size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-3 start-3 end-3 flex items-center justify-between text-white text-xs">
              <span className="font-semibold">{ar ? "المنشأ: " : "Origin: "}{ar ? product.countryOfOriginAr : product.countryOfOriginEn}</span>
              <span className="font-bold text-brand-orange">{ar ? "الصلاحية: " : "Shelf Life: "}{ar ? product.shelfLifeAr : product.shelfLifeEn}</span>
            </div>
          </div>

          {/* 1. Specifications & Grades */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border/70 bg-secondary/40 p-4">
              <h4 className="font-head text-xs font-bold uppercase tracking-wider text-brand-orange mb-2 flex items-center gap-1.5">
                <FileText className="size-3.5" />
                <span>{ar ? "المواصفات الفنية والمخبرية:" : "Technical & Chemical Specs:"}</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-foreground/90">
                {(ar ? product.productSpecificationsAr : product.productSpecificationsEn).map((sp, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-brand-green shrink-0 mt-0.5" />
                    <span>{sp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border/70 bg-secondary/40 p-4">
              <h4 className="font-head text-xs font-bold uppercase tracking-wider text-brand-green-text mb-2 flex items-center gap-1.5">
                <Layers className="size-3.5" />
                <span>{ar ? "درجات الجودة والرتب المتاحة:" : "Available Grades & Calibers:"}</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-foreground/90">
                {(ar ? product.availableGradesAr : product.availableGradesEn).map((gr, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="size-3.5 text-brand-orange shrink-0 mt-0.5" />
                    <span>{gr}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 2. Packaging Options */}
          <div className="rounded-2xl border border-border/70 bg-secondary/40 p-4">
            <h4 className="font-head text-xs font-bold uppercase tracking-wider text-foreground mb-2 flex items-center gap-1.5">
              <Package className="size-3.5 text-brand-orange" />
              <span>{ar ? "خيارات التعبئة وأحجام العبوات المتاحة للتصدير:" : "Available Packaging & Export Formats:"}</span>
            </h4>
            <div className="grid gap-2 sm:grid-cols-2">
              {(ar ? product.packagingOptionsAr : product.packagingOptionsEn).map((pkg, idx) => (
                <div key={idx} className="flex items-center gap-2 rounded-xl bg-background/80 p-2.5 text-xs text-foreground border border-border/50">
                  <CheckCircle2 className="size-3 text-brand-green shrink-0" />
                  <span className="line-clamp-1">{pkg}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Storage, Quantities & Shelf Life */}
          <div className="grid gap-3 sm:grid-cols-3 text-xs">
            <div className="rounded-2xl bg-secondary/50 p-3.5 border border-border/50">
              <span className="font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                {ar ? "شروط التخزين:" : "Storage Conditions:"}
              </span>
              <p className="text-foreground leading-relaxed">
                {ar ? product.storageConditionsAr : product.storageConditionsEn}
              </p>
            </div>
            <div className="rounded-2xl bg-secondary/50 p-3.5 border border-border/50">
              <span className="font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                {ar ? "الطاقة التوريدية المتاحة:" : "Available Supply Capacity:"}
              </span>
              <p className="text-foreground font-semibold">
                {ar ? product.availableQuantitiesAr : product.availableQuantitiesEn}
              </p>
            </div>
            <div className="rounded-2xl bg-secondary/50 p-3.5 border border-border/50">
              <span className="font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                {ar ? "الحد الأدنى للطلب (MOQ):" : "Minimum Order (MOQ):"}
              </span>
              <p className="text-brand-orange font-bold">
                {ar ? product.minOrderQuantityAr : product.minOrderQuantityEn}
              </p>
            </div>
          </div>

          {/* 4. Quality Certificates & Export Documentation */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/10 p-4">
              <h4 className="font-head text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5">
                <ShieldCheck className="size-3.5" />
                <span>{ar ? "شهادات الجودة المعتمدة:" : "Accredited Quality Standards:"}</span>
              </h4>
              <ul className="space-y-1 text-xs text-foreground/85">
                {(ar ? product.qualityCertificatesAr : product.qualityCertificatesEn).map((cert, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <Check className="size-3 text-emerald-400" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border/70 bg-secondary/40 p-4">
              <h4 className="font-head text-xs font-bold uppercase tracking-wider text-foreground mb-2 flex items-center gap-1.5">
                <FileCheck className="size-3.5 text-brand-orange" />
                <span>{ar ? "مستندات الشحنة التصديرية الرسمية:" : "Official Consignment Docs:"}</span>
              </h4>
              <ul className="space-y-1 text-xs text-foreground/85">
                {(ar ? product.exportDocumentationAr : product.exportDocumentationEn).map((doc, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <Check className="size-3 text-brand-orange" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border/60">
            <div className="text-xs text-muted-foreground">
              {ar ? "فحص واعتماد مخبري لكل تشغيلة قبل الشحن." : "Lab assayed and verified per batch prior to dispatch."}
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-border bg-secondary px-5 py-2.5 text-xs font-bold text-foreground hover:bg-secondary/70 transition-all"
              >
                {ar ? "إغلاق" : "Close"}
              </button>
              <Button
                onClick={() => onRequestQuotation(product)}
                className="rounded-full bg-brand-green px-6 py-2.5 text-xs font-bold text-white shadow-lg shadow-brand-green/30 hover:bg-brand-orange transition-all"
              >
                <Send className="size-3.5 me-1.5 rtl:rotate-180" />
                <span>{ar ? "طلب عرض سعر لهذا المنتج" : "Request Quotation for Product"}</span>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
