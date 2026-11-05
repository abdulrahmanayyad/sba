import { useState, useMemo, useEffect } from "react";
import { Link, useSearch } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Box,
  Briefcase,
  Building2,
  Calendar,
  Check,
  CheckCircle2,
  ChevronRight,
  Copy,
  Download,
  ExternalLink,
  Factory,
  FileCheck,
  FileText,
  Filter,
  Globe2,
  Layers,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  Package,
  RotateCcw,
  Search,
  Send,
  ShieldCheck,
  Shirt,
  Sparkles,
  Tool,
  Truck,
  Utensils,
  Wrench,
  X,
  ZoomIn,
} from "lucide-react";

import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useLanguage } from "@/i18n/language-context";
import { WHATSAPP_URL, CONTACT_EMAIL } from "@/lib/process-steps";
import { cn } from "@/lib/utils";

import {
  physicalProducts,
  productCategoriesConfig,
  type PhysicalProduct,
  type ProductDivision,
} from "./products-data";

import {
  professionalServices,
  executedConstructionProjects,
  serviceDivisionsConfig,
  type ProfessionalService,
  type ExecutedProject,
  type ServiceSector,
} from "./services-data";

export function ProductsCataloguePage() {
  const { language } = useLanguage();
  const ar = language === "AR";
  const searchParams = useSearch({ strict: false }) as Record<string, unknown>;

  // Top-Level Mode: "products" vs "services"
  const [activeMode, setActiveMode] = useState<"products" | "services">("products");

  // Sync with search params if provided (e.g. ?mode=services or ?view=services)
  useEffect(() => {
    if (searchParams?.mode === "services" || searchParams?.view === "services") {
      setActiveMode("services");
    } else if (searchParams?.mode === "products" || searchParams?.view === "products") {
      setActiveMode("products");
    }
  }, [searchParams]);

  // ==========================================
  // PRODUCTS STATE
  // ==========================================
  const [selectedProductDivision, setSelectedProductDivision] = useState<ProductDivision>("apparel");
  const [selectedProductCategory, setSelectedProductCategory] = useState<string>("all");
  const [productSearchQuery, setProductSearchQuery] = useState("");
  const [activeProductDetail, setActiveProductDetail] = useState<PhysicalProduct | null>(null);
  const [rfqTargetProduct, setRfqTargetProduct] = useState<PhysicalProduct | null>(null);

  // ==========================================
  // SERVICES STATE
  // ==========================================
  const [selectedServiceSector, setSelectedServiceSector] = useState<ServiceSector>("construction");
  const [selectedServiceCategory, setSelectedServiceCategory] = useState<string>("all");
  const [serviceSearchQuery, setServiceSearchQuery] = useState("");
  const [constructionTab, setConstructionTab] = useState<"services" | "projects">("services");
  const [activeServiceDetail, setActiveServiceDetail] = useState<ProfessionalService | null>(null);
  const [consultationTargetService, setConsultationTargetService] = useState<ProfessionalService | null>(null);

  // ==========================================
  // COMMON FORMS STATE
  // ==========================================
  const [rfqForm, setRfqForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    quantity: "",
    country: "",
    notes: "",
  });
  const [isRfqSubmitted, setIsRfqSubmitted] = useState(false);
  const [generatedRfqCode, setGeneratedRfqCode] = useState("");

  const [consultForm, setConsultForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "",
    location: "",
    timeline: "",
    message: "",
  });
  const [isConsultSubmitted, setIsConsultSubmitted] = useState(false);
  const [generatedConsultCode, setGeneratedConsultCode] = useState("");

  // Handle Level-1 Navigation Smooth Scroll
  const switchToMode = (mode: "products" | "services") => {
    setActiveMode(mode);
    const targetElement = document.getElementById("explorer-workspace");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Filter Products
  const filteredProducts = useMemo(() => {
    return physicalProducts.filter((p) => {
      // Division filter
      if (p.sector !== selectedProductDivision) return false;

      // Category filter
      if (selectedProductCategory !== "all" && p.categoryKey !== selectedProductCategory) {
        return false;
      }

      // Search Query
      if (productSearchQuery.trim()) {
        const q = productSearchQuery.toLowerCase().trim();
        const inName = (p.nameAr + " " + p.nameEn).toLowerCase().includes(q);
        const inCode = p.code.toLowerCase().includes(q);
        const inDesc = (p.descriptionAr + " " + p.descriptionEn).toLowerCase().includes(q);
        const inOrigin = (p.originAr + " " + p.originEn).toLowerCase().includes(q);
        const inCat = (p.categoryAr + " " + p.categoryEn).toLowerCase().includes(q);
        if (!inName && !inCode && !inDesc && !inOrigin && !inCat) return false;
      }

      return true;
    });
  }, [selectedProductDivision, selectedProductCategory, productSearchQuery]);

  // Current Product Division Config
  const currentProductDivisionConfig = useMemo(() => {
    return productCategoriesConfig.find((c) => c.division === selectedProductDivision);
  }, [selectedProductDivision]);

  // Filter Services
  const filteredServices = useMemo(() => {
    return professionalServices.filter((s) => {
      // Sector filter
      if (s.sector !== selectedServiceSector) return false;

      // Category filter
      if (selectedServiceCategory !== "all" && s.categoryKey !== selectedServiceCategory) {
        return false;
      }

      // Search Query
      if (serviceSearchQuery.trim()) {
        const q = serviceSearchQuery.toLowerCase().trim();
        const inName = (s.nameAr + " " + s.nameEn).toLowerCase().includes(q);
        const inCode = s.code.toLowerCase().includes(q);
        const inDesc = (s.descriptionAr + " " + s.descriptionEn).toLowerCase().includes(q);
        const inCat = (s.categoryAr + " " + s.categoryEn).toLowerCase().includes(q);
        const inScope = (s.scopeOfWorkAr.join(" ") + " " + s.scopeOfWorkEn.join(" ")).toLowerCase().includes(q);
        if (!inName && !inCode && !inDesc && !inCat && !inScope) return false;
      }

      return true;
    });
  }, [selectedServiceSector, selectedServiceCategory, serviceSearchQuery]);

  // Current Service Division Config
  const currentServiceDivisionConfig = useMemo(() => {
    return serviceDivisionsConfig.find((c) => c.division === selectedServiceSector);
  }, [selectedServiceSector]);

  // Counts
  const totalProductsCount = physicalProducts.length;
  const totalServicesCount = professionalServices.length;

  return (
    <div className="w-full">
      {/* =========================================================================
          HERO & LEVEL 1: DUAL MASTER NAVIGATION (PRODUCTS VS. SERVICES)
         ========================================================================= */}
      <section className="site-container pt-20 sm:pt-28 pb-8 scroll-mt-24">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-4 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md mb-4">
              <span className="size-2 rounded-full bg-brand-orange animate-pulse" />
              <span>{ar ? "مجموعة سامي بن عياد" : "SAMI BIN AYYAD GROUP"}</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-brand-orange font-bold font-mono">
                {ar ? "بوابة المنتجات والحلول الهندسية" : "Products & Engineering Solutions"}
              </span>
            </div>

            <h1 className="font-head text-3xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight">
              {ar ? (
                <>
                  محفظة <span className="text-brand-orange">المنتجات المادية</span> والحلول{" "}
                  <span className="text-brand-green">الهندسية المتكاملة</span>
                </>
              ) : (
                <>
                  Physical <span className="text-brand-orange">Products Portfolio</span> & Integrated{" "}
                  <span className="text-brand-green">Engineering Services</span>
                </>
              )}
            </h1>

            <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed">
              {ar
                ? "تعتمد مجموعة سامي بن عياد مبدأ الفصل الكامل والشفاف بين السلع والمنتجات المادية الجاهزة للتوريد، وبين الخدمات الهندسية والحلول التعاقدية المتكاملة. اختر مسار التصفح المناسب لاحتياجات أعمالك."
                : "Sami Bin Ayyad Group establishes a clear, transparent distinction between tangible physical products available for direct supply and turnkey engineering services and solutions. Choose your preferred business path below."}
            </p>
          </div>

          {/* Level 1 Dual Master Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* CARD 1: PRODUCTS */}
            <div
              onClick={() => switchToMode("products")}
              className={cn(
                "group relative cursor-pointer overflow-hidden rounded-3xl border p-8 transition-all duration-300 backdrop-blur-xl shadow-lg flex flex-col justify-between",
                activeMode === "products"
                  ? "border-brand-orange bg-gradient-to-br from-brand-orange/10 via-background/90 to-background shadow-2xl scale-[1.02] ring-2 ring-brand-orange/40"
                  : "border-border/80 bg-background/80 hover:border-brand-orange/50 hover:bg-secondary/40 hover:scale-[1.01]"
              )}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3.5 rounded-2xl bg-brand-orange/15 text-brand-orange">
                    <Package className="size-8" />
                  </div>
                  <span className="rounded-full bg-brand-orange/15 px-3 py-1 text-xs font-mono font-bold text-brand-orange">
                    {ar ? `${totalProductsCount} منتج مادي معتمد` : `${totalProductsCount} Verified Products`}
                  </span>
                </div>

                <div className="text-xs font-bold text-brand-orange uppercase tracking-wider mb-1 text-center">
                  {ar ? "القسم الأول: السلع والمنتجات التصديرية" : "SECTION 01: PHYSICAL GOODS & EXPORT PRODUCTS"}
                </div>
                <h2 className="text-center font-head text-2xl sm:text-3xl font-black text-foreground group-hover:text-brand-orange transition-colors">
                  {ar ? "PRODUCTS | المنتجات" : "PRODUCTS"}
                </h2>

                <p className="mt-3 text-sm text-muted-foreground leading-relaxed text-center">
                  "Explore our verified product portfolios across export-grade apparel, textiles, and natural food products."
                </p>

                <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs">
                  <span className="rounded-lg bg-secondary px-2.5 py-1 text-foreground/80 font-medium">
                    {ar ? "الملابس والمنسوجات" : "Apparel & Textiles"}
                  </span>
                  <span className="rounded-lg bg-secondary px-2.5 py-1 text-foreground/80 font-medium">
                    {ar ? "الأغذية والمنتجات الطبيعية" : "Natural & Food Products"}
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border/60 flex items-center justify-between">
                <Button
                  type="button"
                  className="rounded-full font-bold text-xs shadow-md transition-all duration-300 bg-brand-green text-white hover:bg-brand-orange"
                >
                  <span>{ar ? "استكشف المنتجات" : "Explore Products"}</span>
                  <ArrowRight className="size-3.5 ms-2 rtl:rotate-180" />
                </Button>

                <span className="text-xs font-semibold text-muted-foreground">
                  {ar ? "كتالوجات وتوريد بضائع" : "Catalogues & Physical Supply"}
                </span>
              </div>
            </div>

            {/* CARD 2: SERVICES & SOLUTIONS */}
            <div
              onClick={() => switchToMode("services")}
              className={cn(
                "group relative cursor-pointer overflow-hidden rounded-3xl border p-8 transition-all duration-300 backdrop-blur-xl shadow-lg flex flex-col justify-between",
                activeMode === "services"
                  ? "border-brand-green bg-gradient-to-br from-brand-green/10 via-background/90 to-background shadow-2xl scale-[1.02] ring-2 ring-brand-green/40"
                  : "border-border/80 bg-background/80 hover:border-brand-green/50 hover:bg-secondary/40 hover:scale-[1.01]"
              )}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3.5 rounded-2xl bg-brand-green/15 text-brand-green">
                    <Wrench className="size-8" />
                  </div>
                  <span className="rounded-full bg-brand-green/15 px-3 py-1 text-xs font-mono font-bold text-brand-green-text">
                    {ar ? `${totalServicesCount} خدمة وحل هندسي` : `${totalServicesCount} Engineering Solutions`}
                  </span>
                </div>

                <div className="text-xs font-bold text-brand-green uppercase tracking-wider mb-1 text-center">
                  {ar ? "القسم الثاني: الأعمال والتعاقدات" : "SECTION 02: ENGINEERING & EPC"}
                </div>
                <h2 className="text-center font-head text-2xl sm:text-3xl font-black text-foreground group-hover:text-brand-green transition-colors">
                  {ar ? "SERVICES & SOLUTIONS | الخدمات والحلول" : "SERVICES & SOLUTIONS"}
                </h2>

                <p className="mt-3 text-sm text-muted-foreground leading-relaxed text-center">
                  "Discover our engineering, manufacturing, environmental, and technical capabilities."
                </p>

                <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs">
                  <span className="rounded-lg bg-secondary px-2.5 py-1 text-foreground/80 font-medium">
                    {ar ? "المقاولات والإنشاءات (12 تخصص)" : "Construction Contracting (12)"}
                  </span>
                  <span className="rounded-lg bg-secondary px-2.5 py-1 text-foreground/80 font-medium">
                    {ar ? "الحلول البيئية والاستدامة (19 خدمة)" : "Environmental Systems (19)"}
                  </span>
                  <span className="rounded-lg bg-secondary px-2.5 py-1 text-foreground/80 font-medium">
                    {ar ? "تصنيع الملابس (8 برامج OEM/FOB)" : "Garment Manufacturing (8)"}
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border/60 flex items-center justify-between">
                <Button
                  type="button"
                  className="rounded-full font-bold text-xs shadow-md transition-all duration-300 bg-brand-green text-white hover:bg-brand-orange"
                >
                  <span>{ar ? "استكشف الخدمات والحلول" : "Explore Services"}</span>
                  <ArrowRight className="size-3.5 ms-2 rtl:rotate-180" />
                </Button>

                <span className="text-xs font-semibold text-muted-foreground">
                  {ar ? "تنفيذ مشاريع واستشارات" : "Turnkey Execution & EPC"}
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =========================================================================
          WORKSPACE ANCHOR (PRODUCTS VIEW VS. SERVICES VIEW)
         ========================================================================= */}
      <div id="explorer-workspace" className="scroll-mt-20">
        {/* Sticky Control Bar to switch between Products & Services */}
        <div className="site-container pt-4 pb-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-3 rounded-2xl border border-border/80 bg-background/90 shadow-md backdrop-blur-xl">
            {/* Pill Switch */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-secondary/80 border border-border w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setActiveMode("products")}
                className={cn(
                  "flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2 text-xs font-bold transition-all cursor-pointer",
                  activeMode === "products"
                    ? "bg-brand-orange text-white shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Package className="size-4" />
                <span>{ar ? "المنتجات المادية (Products)" : "Products"}</span>
                <span className="text-[10px] bg-white/20 px-1.5 py-0.2 rounded-full font-mono">
                  {totalProductsCount}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveMode("services")}
                className={cn(
                  "flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2 text-xs font-bold transition-all cursor-pointer",
                  activeMode === "services"
                    ? "!bg-brand-green !text-white shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Wrench className="size-4" />
                <span>{ar ? "الخدمات والحلول (Services & Solutions)" : "Services & Solutions"}</span>
                <span className="text-[10px] bg-white/20 px-1.5 py-0.2 rounded-full font-mono">
                  {totalServicesCount}
                </span>
              </button>
            </div>

            {/* Quick Context Indicator */}
            <div className="text-xs font-medium text-muted-foreground hidden sm:block">
              {activeMode === "products" ? (
                <span>
                  {ar
                    ? "تصفح السلع والكتالوجات القابلة للتوريد المباشر"
                    : "Viewing tangible goods available for quotation & supply"}
                </span>
              ) : (
                <span>
                  {ar
                    ? "تصفح القدرات التنفيذية والتعاقدات والمشروعات الهندسية"
                    : "Viewing engineering capabilities, EPC solutions & executed projects"}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* =========================================================================
            VIEW 1: PRODUCTS EXPLORER (STRICTLY PHYSICAL GOODS)
           ========================================================================= */}
        {activeMode === "products" && (
          <section className="site-container pb-24">
            {/* Division Selector Tabs (Apparel, Food, Industrial) */}
            <div className="flex flex-col gap-6 rounded-3xl border border-white/25 bg-background/85 p-6 sm:p-8 shadow-xl backdrop-blur-xl mb-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/60 pb-6">
                <div>
                  <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block mb-1">
                    {ar ? "كتالوج المنتجات المادية" : "PHYSICAL PRODUCT CATALOGUE"}
                  </span>
                  <h3 className="font-head text-2xl font-black text-foreground">
                    {ar ? "اختر تصنيف المنتجات للتصفح والتوريد" : "Select Product Category"}
                  </h3>
                  <div className="mt-2 flex items-center gap-2">
                    <Button asChild size="sm" className="rounded-full !bg-brand-green !text-white hover:!bg-brand-orange text-xs font-bold shadow-xs cursor-pointer">
                      <a href="/downloads/SBA_Complete_Products_Portfolio_EN.pdf" download="SBA_Complete_Products_Portfolio_EN.pdf" target="_blank" rel="noopener noreferrer">
                        <Download className="size-3.5 me-1.5" />
                        <span>{ar ? "تحميل كتالوج المنتجات المجمع (PDF)" : "Download Product Portfolio (PDF)"}</span>
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Search Bar for Products */}
                <div className="relative w-full md:w-80">
                  <Search className="absolute start-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder={ar ? "ابحث برقم الكود أو اسم المنتج أو الخامة..." : "Search product name, code, or material..."}
                    value={productSearchQuery}
                    onChange={(e) => setProductSearchQuery(e.target.value)}
                    className="w-full rounded-full border border-border bg-secondary/50 py-2.5 ps-10 pe-4 text-xs font-medium text-foreground placeholder:text-muted-foreground focus:border-brand-orange focus:bg-background focus:outline-none focus:ring-1 focus:ring-brand-orange transition-all"
                  />
                  {productSearchQuery && (
                    <button
                      type="button"
                      onClick={() => setProductSearchQuery("")}
                      className="absolute end-3.5 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground cursor-pointer"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>

              {/* 3 Major Product Divisions */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {productCategoriesConfig.map((cfg) => {
                  const isSelected = selectedProductDivision === cfg.division;
                  return (
                    <button
                      key={cfg.division}
                      type="button"
                      onClick={() => {
                        setSelectedProductDivision(cfg.division);
                        setSelectedProductCategory("all");
                      }}
                      className={cn(
                        "rounded-2xl p-4 text-start transition-all cursor-pointer border flex flex-col justify-between",
                        isSelected
                          ? "border-brand-orange bg-brand-orange/10 shadow-md ring-1 ring-brand-orange"
                          : "border-border/80 bg-background hover:bg-secondary/50 hover:border-brand-orange/40"
                      )}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div
                          className={cn(
                            "p-2 rounded-xl",
                            isSelected ? "bg-brand-orange text-white" : "bg-secondary text-foreground"
                          )}
                        >
                          {cfg.division === "apparel" && <Shirt className="size-4" />}
                          {cfg.division === "food" && <Utensils className="size-4" />}
                        </div>
                        <span className="text-[11px] font-mono font-bold text-muted-foreground">
                          {physicalProducts.filter((p) => p.sector === cfg.division).length}{" "}
                          {ar ? "منتج" : "items"}
                        </span>
                      </div>
                      <h4 className="font-head text-sm font-bold text-foreground">
                        {ar ? cfg.labelAr : cfg.labelEn}
                      </h4>
                      <p className="text-[11px] text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                        {ar ? cfg.descAr : cfg.descEn}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Category Pills inside current Division */}
              {currentProductDivisionConfig && (
                <div className="pt-2">
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Filter className="size-3 text-brand-orange" />
                    <span>{ar ? "الفئات الفرعية للمنتجات:" : "Subcategories:"}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {currentProductDivisionConfig.categories.map((cat) => {
                      const isActive = selectedProductCategory === cat.key;
                      return (
                        <button
                          key={cat.key}
                          type="button"
                          onClick={() => setSelectedProductCategory(cat.key)}
                          className={cn(
                            "rounded-full px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer",
                            isActive
                              ? "bg-brand-orange text-white shadow-sm"
                              : "border border-border/80 bg-background text-foreground hover:bg-secondary hover:border-brand-orange/40"
                          )}
                        >
                          {ar ? cat.labelAr : cat.labelEn}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Special Garment Catalogue Launcher (When in Apparel Division) */}
            {selectedProductDivision === "apparel" && (
              <div className="mb-10 overflow-hidden rounded-3xl border border-brand-orange/40 bg-gradient-to-r from-brand-orange/15 via-background to-brand-green/10 p-6 sm:p-8 shadow-xl backdrop-blur-xl">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="rounded-full bg-brand-orange px-3 py-0.5 text-xs font-bold text-white">
                        {ar ? "مكتبة الموديلات المصنعة" : "Garment Catalogue"}
                      </span>
                      <span className="text-xs font-bold text-foreground">
                        {ar ? "+2,700 موديل جاهز للإنتاج" : "2,700+ Production-Ready Models"}
                      </span>
                    </div>
                    <h3 className="font-head text-xl sm:text-2xl font-black text-foreground">
                      {ar
                        ? "تصفح كتالوج موديلات الملابس الكامل واستفسر عن تصنيع أي موديل"
                        : "Browse Full Production Garment Models & Request Custom Manufacturing"}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {ar
                        ? "تحتفظ مجموعة سامي بن عياد بمكتبة شاملة تضم آلاف الموديلات المصنعة للأطفال والناشئين والنساء والرجال، شاملة كود كل موديل وصوره ومقاساته وخاماته مع إمكانية تصنيعه للعلامات الخاصة."
                        : "Browse our comprehensive ready-to-manufacture catalogue containing thousands of designs across children, youth, women, and men, with full photos, codes, and private-label customization options."}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 shrink-0">
                    <Button
                      asChild
                      className="rounded-full bg-brand-green hover:bg-brand-orange text-white font-bold text-xs shadow-lg transition-all duration-300"
                    >
                      <Link to="/models">
                        <span>{ar ? "فتح كتالوج الموديلات المصنعة" : "Open Garment Models Library"}</span>
                        <ArrowRight className="size-3.5 ms-2 rtl:rotate-180" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Products Grid */}
            <div className="mb-6 flex items-center justify-between">
              <span className="text-xs font-mono text-muted-foreground font-semibold">
                {ar
                  ? `عرض ${filteredProducts.length} من أصل ${physicalProducts.filter((p) => p.sector === selectedProductDivision).length} منتج مادي`
                  : `Showing ${filteredProducts.length} of ${physicalProducts.filter((p) => p.sector === selectedProductDivision).length} physical items`}
              </span>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/20 bg-background/85 shadow-md backdrop-blur-xl transition-all duration-300 hover:scale-[1.015] hover:border-brand-orange/60 hover:shadow-2xl"
                  >
                    <div>
                      {/* Product Image */}
                      <div className="relative aspect-[16/11] w-full overflow-hidden bg-secondary">
                        <img
                          src={product.image}
                          alt={ar ? product.nameAr : product.nameEn}
                          loading="lazy"
                          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                        {/* Code & Origin Flags */}
                        <div className="absolute top-3 start-3 flex items-center gap-1.5">
                          <span className="rounded-full bg-black/70 px-2.5 py-0.5 text-[10px] font-mono font-bold text-white backdrop-blur-md border border-white/20">
                            {product.code}
                          </span>
                        </div>

                        <div className="absolute top-3 end-3">
                          <span className="rounded-full bg-black/60 px-2.5 py-0.5 text-xs text-white backdrop-blur-md border border-white/20 flex items-center gap-1 font-medium">
                            <span>{product.originFlag}</span>
                            <span className="text-[10px]">{ar ? product.originAr : product.originEn}</span>
                          </span>
                        </div>

                        {/* Category Tag */}
                        <div className="absolute bottom-3 start-3">
                          <span className="rounded-full bg-brand-orange px-2.5 py-0.5 text-[10px] font-bold text-white shadow-sm">
                            {ar ? product.categoryAr : product.categoryEn}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h4 className="text-center font-head text-base sm:text-lg font-bold text-foreground group-hover:text-brand-orange transition-colors leading-snug">
                          {ar ? product.nameAr : product.nameEn}
                        </h4>

                        <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2 text-center">
                          {ar ? product.taglineAr : product.taglineEn}
                        </p>

                        {/* Key Specifications Preview */}
                        <div className="mt-4 pt-3 border-t border-border/50 space-y-1.5">
                          {product.specifications.slice(0, 2).map((sp, sIdx) => (
                            <div key={sIdx} className="flex items-center justify-between text-[11px]">
                              <span className="text-muted-foreground font-medium">
                                {ar ? sp.labelAr : sp.labelEn}:
                              </span>
                              <span className="text-foreground font-semibold truncate max-w-[160px]">
                                {ar ? sp.valueAr : sp.valueEn}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* MOQ & Packaging */}
                        <div className="mt-3 rounded-xl bg-secondary/50 p-2.5 text-[11px] space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">{ar ? "الحد الأدنى للطلب:" : "MOQ:"}</span>
                            <span className="font-bold text-brand-orange">{ar ? product.moqAr : product.moqEn}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="p-6 pt-0 border-t border-border/40 mt-2 flex items-center gap-2">
                      <Button
                        type="button"
                        size="sm"
                        onClick={() => setActiveProductDetail(product)}
                        className="flex-1 rounded-full text-xs font-bold bg-brand-green text-white hover:bg-brand-orange transition-all duration-300"
                      >
                        <ZoomIn className="size-3.5 me-1.5" />
                        <span>{ar ? "استعراض المواصفات" : "View Product"}</span>
                      </Button>

                      <Button
                        type="button"
                        size="sm"
                        onClick={() => {
                          setRfqTargetProduct(product);
                          setIsRfqSubmitted(false);
                          setGeneratedRfqCode(`RFQ-SBA-${Math.floor(1000 + Math.random() * 9000)}`);
                        }}
                        className="rounded-full bg-brand-green text-white hover:bg-brand-orange transition-all duration-300 text-xs font-bold px-3.5"
                      >
                        <Send className="size-3.5 me-1.5" />
                        <span>{ar ? "طلب عرض سعر" : "Quote"}</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-20 text-center rounded-3xl border border-dashed border-border bg-secondary/30">
                <Package className="mx-auto size-12 text-muted-foreground/50 mb-3" />
                <h4 className="font-head text-base font-bold text-foreground">
                  {ar ? "لا توجد منتجات مطابقة للبحث" : "No products found"}
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  {ar ? "جرّب تغيير كلمات البحث أو اختيار فئة أخرى." : "Try adjusting your search query or selecting another category."}
                </p>
              </div>
            )}
          </section>
        )}

        {/* =========================================================================
            VIEW 2: SERVICES & SOLUTIONS EXPLORER (STRICTLY ENGINEERING & EPC)
           ========================================================================= */}
        {activeMode === "services" && (
          <section className="site-container pb-24">
            {/* Division Selector Tabs (Construction, Environmental, Apparel Manufacturing, Industrial Solutions) */}
            <div className="flex flex-col gap-6 rounded-3xl border border-white/25 bg-background/85 p-6 sm:p-8 shadow-xl backdrop-blur-xl mb-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/60 pb-6">
                <div>
                  <span className="text-xs font-bold text-brand-green uppercase tracking-wider block mb-1">
                    {ar ? "كتالوج الخدمات الهندسية والحلول" : "ENGINEERING & SERVICES DIRECTORY"}
                  </span>
                  <h3 className="font-head text-2xl font-black text-foreground">
                    {ar ? "اختر قطاع الأعمال للاطلاع على القدرات والحلول" : "Select Engineering & Service Sector"}
                  </h3>
                  <div className="mt-2 flex items-center gap-2">
                    <Button asChild size="sm" className="rounded-full !bg-brand-green !text-white hover:!bg-brand-orange text-xs font-bold shadow-xs cursor-pointer">
                      <a href="/downloads/SBA_Services_And_Solutions_Portfolio_EN.pdf" download="SBA_Services_And_Solutions_Portfolio_EN.pdf" target="_blank" rel="noopener noreferrer">
                        <Download className="size-3.5 me-1.5" />
                        <span>{ar ? "تحميل دليل الخدمات والحلول (39 تخصصًا)" : "Download Services Portfolio (PDF)"}</span>
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Search Bar for Services */}
                <div className="relative w-full md:w-80">
                  <Search className="absolute start-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder={ar ? "ابحث في الخدمات ونطاق الأعمال والحلول..." : "Search services, scope of work, solutions..."}
                    value={serviceSearchQuery}
                    onChange={(e) => setServiceSearchQuery(e.target.value)}
                    className="w-full rounded-full border border-border bg-secondary/50 py-2.5 ps-10 pe-4 text-xs font-medium text-foreground placeholder:text-muted-foreground focus:border-brand-green focus:bg-background focus:outline-none focus:ring-1 focus:ring-brand-green transition-all"
                  />
                  {serviceSearchQuery && (
                    <button
                      type="button"
                      onClick={() => setServiceSearchQuery("")}
                      className="absolute end-3.5 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground cursor-pointer"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>

              {/* 4 Major Service Divisions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {serviceDivisionsConfig.map((cfg) => {
                  const isSelected = selectedServiceSector === cfg.division;
                  return (
                    <button
                      key={cfg.division}
                      type="button"
                      onClick={() => {
                        setSelectedServiceSector(cfg.division);
                        setSelectedServiceCategory("all");
                        if (cfg.division === "construction") {
                          setConstructionTab("services");
                        }
                      }}
                      className={cn(
                        "rounded-2xl p-4 text-start transition-all cursor-pointer border flex flex-col justify-between",
                        isSelected
                          ? "border-brand-green bg-brand-green/10 shadow-md ring-1 ring-brand-green"
                          : "border-border/80 bg-background hover:bg-secondary/50 hover:border-brand-green/40"
                      )}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div
                          className={cn(
                            "p-2 rounded-xl",
                            isSelected ? "bg-brand-green text-white" : "bg-secondary text-foreground"
                          )}
                        >
                          {cfg.division === "construction" && <Building2 className="size-4" />}
                          {cfg.division === "environmental" && <Leaf className="size-4" />}
                          {cfg.division === "apparel-services" && <Factory className="size-4" />}
                        </div>
                        <span className="text-[11px] font-mono font-bold text-muted-foreground">
                          {professionalServices.filter((s) => s.sector === cfg.division).length}{" "}
                          {ar ? "حل" : "services"}
                        </span>
                      </div>
                      <h4 className="font-head text-sm font-bold text-foreground">
                        {ar ? cfg.labelAr : cfg.labelEn}
                      </h4>
                      <p className="text-[11px] text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                        {ar ? cfg.descAr : cfg.descEn}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Construction Special Switch: Services vs Our Projects */}
              {selectedServiceSector === "construction" && (
                <div className="pt-2 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setConstructionTab("services")}
                    className={cn(
                      "rounded-full px-4 py-1.5 text-xs font-bold transition-all cursor-pointer",
                      constructionTab === "services"
                        ? "bg-brand-green text-white shadow-sm"
                        : "border border-border bg-secondary/50 text-foreground"
                    )}
                  >
                    {ar ? "خدمات وقدرات المقاولات (9 خدمات)" : "Contracting Services & Capabilities"}
                  </button>

                  <button
                    type="button"
                    onClick={() => setConstructionTab("projects")}
                    className={cn(
                      "rounded-full px-4 py-1.5 text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5",
                      constructionTab === "projects"
                        ? "!bg-brand-orange text-white shadow-sm"
                        : "border border-border bg-secondary/50 text-foreground hover:border-brand-orange/40"
                    )}
                  >
                    <Building2 className="size-3.5" />
                    <span>{ar ? "مشروعاتنا المنفذة (Our Projects)" : "Our Executed Projects"}</span>
                    <span className="text-[10px] bg-white/20 px-1.5 py-0.2 rounded-full font-mono">
                      {executedConstructionProjects.length}
                    </span>
                  </button>
                </div>
              )}

              {/* Category Pills inside current Service Division (Only when viewing services) */}
              {currentServiceDivisionConfig && (selectedServiceSector !== "construction" || constructionTab === "services") && (
                <div className="pt-2">
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Filter className="size-3 text-brand-green" />
                    <span>{ar ? "التخصصات ومجالات العمل:" : "Service Disciplines:"}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {currentServiceDivisionConfig.categories.map((cat) => {
                      const isActive = selectedServiceCategory === cat.key;
                      return (
                        <button
                          key={cat.key}
                          type="button"
                          onClick={() => setSelectedServiceCategory(cat.key)}
                          className={cn(
                            "rounded-full px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer",
                            isActive
                              ? "bg-brand-green text-white shadow-sm"
                              : "border border-border/80 bg-background text-foreground hover:bg-secondary hover:border-brand-green/40"
                          )}
                        >
                          {ar ? cat.labelAr : cat.labelEn}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* A. If viewing Construction -> Our Projects */}
            {selectedServiceSector === "construction" && constructionTab === "projects" ? (
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="font-head text-xl font-bold text-foreground">
                    {ar ? "مشروعات المقاولات المنفذة والمعتمدة" : "Executed Construction Projects Portfolio"}
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground">
                    {ar ? `${executedConstructionProjects.length} مشروعات موثقة` : `${executedConstructionProjects.length} Verified Projects`}
                  </span>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  {executedConstructionProjects.map((proj) => (
                    <div
                      key={proj.id}
                      className="group overflow-hidden rounded-3xl border border-white/20 bg-background/85 shadow-md backdrop-blur-xl transition-all duration-300 hover:border-brand-green/60 hover:shadow-2xl"
                    >
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary">
                        <img
                          src={proj.image}
                          alt={ar ? proj.nameAr : proj.nameEn}
                          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                        <div className="absolute top-3 start-3">
                          <span className="rounded-full bg-brand-green px-3 py-1 text-xs font-bold text-white shadow-sm">
                            {ar ? proj.statusAr : proj.statusEn}
                          </span>
                        </div>
                        <div className="absolute bottom-3 start-3 end-3 flex items-center gap-1.5 text-white/90 text-xs font-medium">
                          <MapPin className="size-3.5 text-brand-orange shrink-0" />
                          <span className="truncate">{ar ? proj.locationAr : proj.locationEn}</span>
                        </div>
                      </div>

                      <div className="p-6">
                        <h4 className="text-center font-head text-lg font-bold text-foreground group-hover:text-brand-green transition-colors">
                          {ar ? proj.nameAr : proj.nameEn}
                        </h4>
                        <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed text-center">
                          {ar ? proj.scopeAr : proj.scopeEn}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* B. Standard Service Cards Grid */
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-xs font-mono text-muted-foreground font-semibold">
                    {ar
                      ? `عرض ${filteredServices.length} من أصل ${professionalServices.filter((s) => s.sector === selectedServiceSector).length} خدمة وحل هندسي`
                      : `Showing ${filteredServices.length} of ${professionalServices.filter((s) => s.sector === selectedServiceSector).length} engineering solutions`}
                  </span>
                </div>

                {filteredServices.length > 0 ? (
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredServices.map((service) => (
                      <div
                        key={service.id}
                        className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/20 bg-background/85 shadow-md backdrop-blur-xl transition-all duration-300 hover:scale-[1.015] hover:border-brand-green/60 hover:shadow-2xl"
                      >
                        <div>
                          {/* Service Image Banner */}
                          <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary">
                            <img
                              src={service.image}
                              alt={ar ? service.nameAr : service.nameEn}
                              loading="lazy"
                              className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                            <div className="absolute top-3 start-3">
                              <span className="rounded-full bg-black/70 px-2.5 py-0.5 text-[10px] font-mono font-bold text-white backdrop-blur-md border border-white/20">
                                {service.code}
                              </span>
                            </div>

                            <div className="absolute bottom-3 start-3">
                              <span className="rounded-full bg-brand-green px-2.5 py-0.5 text-[10px] font-bold text-white shadow-sm">
                                {ar ? service.categoryAr : service.categoryEn}
                              </span>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-6">
                            <h4 className="text-center font-head text-base sm:text-lg font-bold text-foreground group-hover:text-brand-green transition-colors leading-snug">
                              {ar ? service.nameAr : service.nameEn}
                            </h4>

                            <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3 text-center">
                              {ar ? service.descriptionAr : service.descriptionEn}
                            </p>

                            {/* Scope of Work Preview */}
                            <div className="mt-4 pt-3 border-t border-border/50">
                              <span className="text-[11px] font-bold text-foreground block mb-2">
                                {ar ? "نطاق الأعمال الرئيسي:" : "Core Scope of Work:"}
                              </span>
                              <ul className="space-y-1.5 text-[11px] text-muted-foreground">
                                {(ar ? service.scopeOfWorkAr : service.scopeOfWorkEn).slice(0, 2).map((item, iIdx) => (
                                  <li key={iIdx} className="flex items-start gap-1.5">
                                    <span className="size-1 rounded-full bg-brand-green mt-1.5 shrink-0" />
                                    <span className="line-clamp-1">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Applications Chips */}
                            <div className="mt-3 pt-2 flex flex-wrap gap-1">
                              {(ar ? service.applicationsAr : service.applicationsEn).slice(0, 3).map((app, aIdx) => (
                                <span
                                  key={aIdx}
                                  className="rounded-md bg-secondary/80 px-2 py-0.5 text-[10px] text-muted-foreground font-medium"
                                >
                                  {app}
                                </span>
                              ))}
                            </div>

                            {/* Mutual Product Link if applicable */}
                            {service.linkedProductId && (
                              <div className="mt-3 p-2 rounded-xl bg-brand-orange/10 border border-brand-orange/20 text-[11px] flex items-center justify-between">
                                <span className="text-brand-orange font-medium">
                                  {ar ? "مرتبط بمعدات وتجهيزات مادية" : "Linked with physical equipment"}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setActiveMode("products");
                                    setSelectedProductDivision("apparel");
                                  }}
                                  className="text-brand-orange font-bold hover:underline inline-flex items-center gap-1 cursor-pointer"
                                >
                                  <span>{ar ? "عرض المنتجات" : "View Products"}</span>
                                  <ArrowUpRight className="size-3" />
                                </button>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Card Actions */}
                        <div className="p-6 pt-0 border-t border-border/40 mt-2 flex items-center gap-2">
                          <Button
                            type="button"
                            size="sm"
                            onClick={() => setActiveServiceDetail(service)}
                            className="flex-1 rounded-full text-xs font-bold bg-brand-green text-white hover:bg-brand-orange transition-all duration-300"
                          >
                            <FileText className="size-3.5 me-1.5" />
                            <span>{ar ? "تفاصيل الحل ونطاق العمل" : "Scope Details"}</span>
                          </Button>

                          <Button
                            type="button"
                            size="sm"
                            onClick={() => {
                              setConsultationTargetService(service);
                              setIsConsultSubmitted(false);
                              setGeneratedConsultCode(`SRV-REQ-${Math.floor(1000 + Math.random() * 9000)}`);
                            }}
                            className="rounded-full bg-brand-green hover:bg-brand-orange text-white text-xs font-bold px-3.5 transition-all duration-300"
                          >
                            <Briefcase className="size-3.5 me-1.5" />
                            <span>{ar ? "طلب استشارة" : "Consult"}</span>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-20 text-center rounded-3xl border border-dashed border-border bg-secondary/30">
                    <Wrench className="mx-auto size-12 text-muted-foreground/50 mb-3" />
                    <h4 className="font-head text-base font-bold text-foreground">
                      {ar ? "لا توجد خدمات مطابقة للبحث" : "No services found"}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      {ar ? "جرّب تغيير كلمات البحث أو اختيار قطاع آخر." : "Try adjusting your search query or choosing another service sector."}
                    </p>
                  </div>
                )}
              </div>
            )}
          </section>
        )}
      </div>

      {/* =========================================================================
          DIALOG 1: PRODUCT SPECIFICATION DETAILS MODAL
         ========================================================================= */}
      <Dialog open={!!activeProductDetail} onOpenChange={() => setActiveProductDetail(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/20 bg-background/95 backdrop-blur-2xl p-6 sm:p-8">
          {activeProductDetail && (
            <div>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <span className="rounded-full bg-brand-orange px-3 py-0.5 text-xs font-bold text-white font-mono">
                    {activeProductDetail.code}
                  </span>
                  <span className="text-xs font-semibold text-muted-foreground">
                    {activeProductDetail.originFlag} {ar ? activeProductDetail.originAr : activeProductDetail.originEn}
                  </span>
                </div>
                <DialogTitle className="font-head text-xl sm:text-2xl font-black text-foreground">
                  {ar ? activeProductDetail.nameAr : activeProductDetail.nameEn}
                </DialogTitle>
                <DialogDescription className="text-xs sm:text-sm text-muted-foreground mt-1">
                  {ar ? activeProductDetail.taglineAr : activeProductDetail.taglineEn}
                </DialogDescription>
              </DialogHeader>

              {/* Product Image */}
              <div className="mt-4 relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-secondary">
                <img
                  src={activeProductDetail.image}
                  alt={ar ? activeProductDetail.nameAr : activeProductDetail.nameEn}
                  className="size-full object-cover"
                />
              </div>

              {/* Full Description */}
              <div className="mt-6">
                <h5 className="text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                  {ar ? "الوصف التفصيلي للمنتج:" : "Product Overview:"}
                </h5>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {ar ? activeProductDetail.descriptionAr : activeProductDetail.descriptionEn}
                </p>
              </div>

              {/* Technical Specifications Table */}
              <div className="mt-6">
                <h5 className="text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                  {ar ? "المواصفات الفنية المعتمدة:" : "Technical Specifications:"}
                </h5>
                <div className="rounded-2xl border border-border overflow-hidden divide-y divide-border">
                  {activeProductDetail.specifications.map((spec, sIdx) => (
                    <div key={sIdx} className="grid grid-cols-3 p-3 text-xs">
                      <span className="font-semibold text-muted-foreground">
                        {ar ? spec.labelAr : spec.labelEn}
                      </span>
                      <span className="col-span-2 text-foreground font-medium">
                        {ar ? spec.valueAr : spec.valueEn}
                      </span>
                    </div>
                  ))}
                  <div className="grid grid-cols-3 p-3 text-xs bg-secondary/30">
                    <span className="font-semibold text-muted-foreground">
                      {ar ? "الحد الأدنى للطلب (MOQ)" : "Minimum Order"}
                    </span>
                    <span className="col-span-2 font-bold text-brand-orange">
                      {ar ? activeProductDetail.moqAr : activeProductDetail.moqEn}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 p-3 text-xs bg-secondary/30">
                    <span className="font-semibold text-muted-foreground">
                      {ar ? "طريقة التعبئة والشحن" : "Packaging"}
                    </span>
                    <span className="col-span-2 text-foreground">
                      {ar ? activeProductDetail.packagingAr : activeProductDetail.packagingEn}
                    </span>
                  </div>
                </div>
              </div>

              {/* Dialog Actions */}
              <div className="mt-8 pt-4 border-t border-border flex items-center justify-between gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setActiveProductDetail(null)}
                  className="rounded-full text-xs font-bold"
                >
                  {ar ? "إغلاق" : "Close"}
                </Button>

                <Button
                  type="button"
                  onClick={() => {
                    const prod = activeProductDetail;
                    setActiveProductDetail(null);
                    setRfqTargetProduct(prod);
                    setIsRfqSubmitted(false);
                    setGeneratedRfqCode(`RFQ-SBA-${Math.floor(1000 + Math.random() * 9000)}`);
                  }}
                  className="rounded-full bg-brand-green text-white hover:bg-brand-orange font-bold text-xs transition-all duration-300"
                >
                  <Send className="size-3.5 me-1.5" />
                  <span>{ar ? "طلب عرض سعر رسمي (RFQ)" : "Request Formal Quotation"}</span>
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* =========================================================================
          DIALOG 2: SERVICE & SOLUTION SCOPE DETAILS MODAL
         ========================================================================= */}
      <Dialog open={!!activeServiceDetail} onOpenChange={() => setActiveServiceDetail(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/20 bg-background/95 backdrop-blur-2xl p-6 sm:p-8">
          {activeServiceDetail && (
            <div>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <span className="rounded-full bg-brand-green px-3 py-0.5 text-xs font-bold text-white font-mono">
                    {activeServiceDetail.code}
                  </span>
                  <span className="text-xs font-semibold text-muted-foreground">
                    {ar ? activeServiceDetail.categoryAr : activeServiceDetail.categoryEn}
                  </span>
                </div>
                <DialogTitle className="font-head text-xl sm:text-2xl font-black text-foreground">
                  {ar ? activeServiceDetail.nameAr : activeServiceDetail.nameEn}
                </DialogTitle>
                <DialogDescription className="text-xs sm:text-sm text-muted-foreground mt-1">
                  {ar ? activeServiceDetail.descriptionAr : activeServiceDetail.descriptionEn}
                </DialogDescription>
              </DialogHeader>

              {/* Scope of Work */}
              <div className="mt-6">
                <h5 className="text-xs font-bold uppercase tracking-wider text-foreground mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-brand-green" />
                  <span>{ar ? "نطاق الأعمال والمهام التنفيذية الكاملة:" : "Full Scope of Work:"}</span>
                </h5>
                <div className="space-y-2 rounded-2xl border border-border p-4 bg-secondary/20">
                  {(ar ? activeServiceDetail.scopeOfWorkAr : activeServiceDetail.scopeOfWorkEn).map((item, iIdx) => (
                    <div key={iIdx} className="flex items-start gap-2 text-xs">
                      <span className="size-1.5 rounded-full bg-brand-green mt-1.5 shrink-0" />
                      <span className="text-foreground leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications & Facilities */}
              <div className="mt-6">
                <h5 className="text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                  {ar ? "مجالات التطبيق والمنشآت المستهدفة:" : "Target Applications & Sectors:"}
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {(ar ? activeServiceDetail.applicationsAr : activeServiceDetail.applicationsEn).map((app, aIdx) => (
                    <span key={aIdx} className="rounded-lg bg-secondary px-3 py-1 text-xs text-foreground font-medium">
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Capabilities & Standards */}
              <div className="mt-6">
                <h5 className="text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                  {ar ? "القدرات الهندسية والمعايير المعتمدة:" : "Engineering Capabilities & Accreditations:"}
                </h5>
                <div className="space-y-1.5 text-xs text-muted-foreground">
                  {(ar ? activeServiceDetail.capabilitiesAr : activeServiceDetail.capabilitiesEn).map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-2">
                      <ShieldCheck className="size-3.5 text-brand-green shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dialog Actions */}
              <div className="mt-8 pt-4 border-t border-border flex items-center justify-between gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setActiveServiceDetail(null)}
                  className="rounded-full text-xs font-bold"
                >
                  {ar ? "إغلاق" : "Close"}
                </Button>

                <Button
                  type="button"
                  onClick={() => {
                    const srv = activeServiceDetail;
                    setActiveServiceDetail(null);
                    setConsultationTargetService(srv);
                    setIsConsultSubmitted(false);
                    setGeneratedConsultCode(`SRV-REQ-${Math.floor(1000 + Math.random() * 9000)}`);
                  }}
                  className="rounded-full !bg-brand-green text-white hover:!bg-brand-orange font-bold text-xs"
                >
                  <Briefcase className="size-3.5 me-1.5" />
                  <span>{ar ? "طلب استشارة هندسية وتعاقد" : "Request Engineering Consultation"}</span>
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* =========================================================================
          DIALOG 3: PRODUCT QUOTE (RFQ) FORM MODAL
         ========================================================================= */}
      <Dialog open={!!rfqTargetProduct} onOpenChange={() => setRfqTargetProduct(null)}>
        <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/20 bg-background/95 backdrop-blur-2xl p-6 sm:p-8">
          {rfqTargetProduct && (
            <div>
              <DialogHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="rounded-full bg-brand-orange px-3 py-0.5 text-xs font-bold text-white font-mono">
                    {rfqTargetProduct.code}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    Ref: {generatedRfqCode}
                  </span>
                </div>
                <DialogTitle className="font-head text-xl font-black text-foreground">
                  {ar ? "طلب عرض سعر رسمي (RFQ)" : "Request Product Quotation (RFQ)"}
                </DialogTitle>
                <DialogDescription className="text-xs text-muted-foreground mt-1">
                  {ar ? rfqTargetProduct.nameAr : rfqTargetProduct.nameEn}
                </DialogDescription>
              </DialogHeader>

              {isRfqSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="size-12 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center mx-auto">
                    <Check className="size-6" />
                  </div>
                  <h4 className="font-head text-lg font-bold text-foreground">
                    {ar ? "تم إرسال طلب عرض السعر بنجاح!" : "Quotation Request Submitted Successfully!"}
                  </h4>
                  <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                    {ar
                      ? `تم تسجيل طلبك برقم مرجعي: ${generatedRfqCode}. سيتواصل معك فريق المبيعات والتصدير خلال 24 ساعة بمواصفات التسعير والفترة الزمنية.`
                      : `Your request has been logged under reference code: ${generatedRfqCode}. Our commercial team will contact you within 24 hours.`}
                  </p>
                  <Button
                    type="button"
                    onClick={() => setRfqTargetProduct(null)}
                    className="mt-4 rounded-full bg-brand-green text-white text-xs font-bold"
                  >
                    {ar ? "إغلاق النافذة" : "Close"}
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsRfqSubmitted(true);
                  }}
                  className="mt-6 space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-foreground block mb-1">
                        {ar ? "الاسم الكامل *" : "Full Name *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={rfqForm.name}
                        onChange={(e) => setRfqForm({ ...rfqForm, name: e.target.value })}
                        className="w-full rounded-xl border border-border bg-secondary/50 px-3 py-2 text-xs text-foreground focus:border-brand-orange focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-foreground block mb-1">
                        {ar ? "اسم الشركة / المؤسسة *" : "Company Name *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={rfqForm.company}
                        onChange={(e) => setRfqForm({ ...rfqForm, company: e.target.value })}
                        className="w-full rounded-xl border border-border bg-secondary/50 px-3 py-2 text-xs text-foreground focus:border-brand-orange focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-foreground block mb-1">
                        {ar ? "البريد الإلكتروني المهني *" : "Business Email *"}
                      </label>
                      <input
                        type="email"
                        required
                        value={rfqForm.email}
                        onChange={(e) => setRfqForm({ ...rfqForm, email: e.target.value })}
                        className="w-full rounded-xl border border-border bg-secondary/50 px-3 py-2 text-xs text-foreground focus:border-brand-orange focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-foreground block mb-1">
                        {ar ? "رقم الهاتف / واتساب *" : "Phone / WhatsApp *"}
                      </label>
                      <input
                        type="tel"
                        required
                        value={rfqForm.phone}
                        onChange={(e) => setRfqForm({ ...rfqForm, phone: e.target.value })}
                        className="w-full rounded-xl border border-border bg-secondary/50 px-3 py-2 text-xs text-foreground focus:border-brand-orange focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-foreground block mb-1">
                        {ar ? "الكمية التقديرية المطلوبة *" : "Estimated Quantity *"}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={ar ? `الحد الأدنى: ${rfqTargetProduct.moqAr}` : `MOQ: ${rfqTargetProduct.moqEn}`}
                        value={rfqForm.quantity}
                        onChange={(e) => setRfqForm({ ...rfqForm, quantity: e.target.value })}
                        className="w-full rounded-xl border border-border bg-secondary/50 px-3 py-2 text-xs text-foreground focus:border-brand-orange focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-foreground block mb-1">
                        {ar ? "دولة وجهة الشحن *" : "Destination Country *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={rfqForm.country}
                        onChange={(e) => setRfqForm({ ...rfqForm, country: e.target.value })}
                        className="w-full rounded-xl border border-border bg-secondary/50 px-3 py-2 text-xs text-foreground focus:border-brand-orange focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-foreground block mb-1">
                      {ar ? "ملاحظات أو مواصفات خاصة للتخصيص والتعبئة:" : "Custom Specifications & Packaging Requirements:"}
                    </label>
                    <textarea
                      rows={3}
                      value={rfqForm.notes}
                      onChange={(e) => setRfqForm({ ...rfqForm, notes: e.target.value })}
                      className="w-full rounded-xl border border-border bg-secondary/50 p-3 text-xs text-foreground focus:border-brand-orange focus:outline-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setRfqTargetProduct(null)}
                      className="rounded-full text-xs"
                    >
                      {ar ? "إلغاء" : "Cancel"}
                    </Button>

                    <Button
                      type="submit"
                      className="rounded-full bg-brand-green text-white hover:bg-brand-orange font-bold text-xs transition-all duration-300"
                    >
                      <Send className="size-3.5 me-1.5" />
                      <span>{ar ? "إرسال طلب التسعير" : "Submit Quotation Request"}</span>
                    </Button>
                  </div>
                </form>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* =========================================================================
          DIALOG 4: SERVICE CONSULTATION REQUEST MODAL
         ========================================================================= */}
      <Dialog open={!!consultationTargetService} onOpenChange={() => setConsultationTargetService(null)}>
        <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/20 bg-background/95 backdrop-blur-2xl p-6 sm:p-8">
          {consultationTargetService && (
            <div>
              <DialogHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="rounded-full bg-brand-green px-3 py-0.5 text-xs font-bold text-white font-mono">
                    {consultationTargetService.code}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    Ref: {generatedConsultCode}
                  </span>
                </div>
                <DialogTitle className="font-head text-xl font-black text-foreground">
                  {ar ? "طلب استشارة هندسية وتعاقد" : "Request Engineering Consultation"}
                </DialogTitle>
                <DialogDescription className="text-xs text-muted-foreground mt-1">
                  {ar ? consultationTargetService.nameAr : consultationTargetService.nameEn}
                </DialogDescription>
              </DialogHeader>

              {isConsultSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="size-12 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center mx-auto">
                    <Check className="size-6" />
                  </div>
                  <h4 className="font-head text-lg font-bold text-foreground">
                    {ar ? "تم إرسال طلب الاستشارة بنجاح!" : "Consultation Request Submitted!"}
                  </h4>
                  <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                    {ar
                      ? `تم قيد طلبك بالرقم: ${generatedConsultCode}. سيتواصل معك أحد كبار مهندسينا خلال يوم عمل لتنسيق جلسة استشارية فنية.`
                      : `Your consultation inquiry has been logged under: ${generatedConsultCode}. A senior engineering specialist will follow up shortly.`}
                  </p>
                  <Button
                    type="button"
                    onClick={() => setConsultationTargetService(null)}
                    className="mt-4 rounded-full bg-brand-green text-white text-xs font-bold"
                  >
                    {ar ? "إغلاق النافذة" : "Close"}
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsConsultSubmitted(true);
                  }}
                  className="mt-6 space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-foreground block mb-1">
                        {ar ? "الاسم الكامل *" : "Full Name *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={consultForm.name}
                        onChange={(e) => setConsultForm({ ...consultForm, name: e.target.value })}
                        className="w-full rounded-xl border border-border bg-secondary/50 px-3 py-2 text-xs text-foreground focus:border-brand-green focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-foreground block mb-1">
                        {ar ? "الجهة / المؤسسة *" : "Organization / Company *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={consultForm.company}
                        onChange={(e) => setConsultForm({ ...consultForm, company: e.target.value })}
                        className="w-full rounded-xl border border-border bg-secondary/50 px-3 py-2 text-xs text-foreground focus:border-brand-green focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-foreground block mb-1">
                        {ar ? "البريد الإلكتروني *" : "Email Address *"}
                      </label>
                      <input
                        type="email"
                        required
                        value={consultForm.email}
                        onChange={(e) => setConsultForm({ ...consultForm, email: e.target.value })}
                        className="w-full rounded-xl border border-border bg-secondary/50 px-3 py-2 text-xs text-foreground focus:border-brand-green focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-foreground block mb-1">
                        {ar ? "رقم الهاتف / الاتصال *" : "Phone Number *"}
                      </label>
                      <input
                        type="tel"
                        required
                        value={consultForm.phone}
                        onChange={(e) => setConsultForm({ ...consultForm, phone: e.target.value })}
                        className="w-full rounded-xl border border-border bg-secondary/50 px-3 py-2 text-xs text-foreground focus:border-brand-green focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-foreground block mb-1">
                        {ar ? "موقع المشروع أو المنشأة:" : "Project Location:"}
                      </label>
                      <input
                        type="text"
                        value={consultForm.location}
                        onChange={(e) => setConsultForm({ ...consultForm, location: e.target.value })}
                        className="w-full rounded-xl border border-border bg-secondary/50 px-3 py-2 text-xs text-foreground focus:border-brand-green focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-foreground block mb-1">
                        {ar ? "المدى الزمني المستهدف للتنفيذ:" : "Target Timeline:"}
                      </label>
                      <input
                        type="text"
                        placeholder={ar ? "مثال: الربع القادم / عاجل" : "e.g. Q1 2027 / Immediate"}
                        value={consultForm.timeline}
                        onChange={(e) => setConsultForm({ ...consultForm, timeline: e.target.value })}
                        className="w-full rounded-xl border border-border bg-secondary/50 px-3 py-2 text-xs text-foreground focus:border-brand-green focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-foreground block mb-1">
                      {ar ? "شرح موجز لمتطلبات المشروع ونطاق العمل المطلوب:" : "Brief Scope & Project Requirements:"}
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={consultForm.message}
                      onChange={(e) => setConsultForm({ ...consultForm, message: e.target.value })}
                      className="w-full rounded-xl border border-border bg-secondary/50 p-3 text-xs text-foreground focus:border-brand-green focus:outline-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setConsultationTargetService(null)}
                      className="rounded-full text-xs"
                    >
                      {ar ? "إلغاء" : "Cancel"}
                    </Button>

                    <Button
                      type="submit"
                      className="rounded-full !bg-brand-green text-white hover:!bg-brand-orange font-bold text-xs"
                    >
                      <Send className="size-3.5 me-1.5" />
                      <span>{ar ? "إرسال طلب الاستشارة" : "Submit Consultation Request"}</span>
                    </Button>
                  </div>
                </form>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
