import { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  CheckCircle2,
  ChevronRight,
  Download,
  Factory,
  FileCheck,
  FileText,
  Filter,
  Globe2,
  Layers,
  Leaf,
  Mail,
  MessageCircle,
  Package,
  RotateCcw,
  Search,
  Send,
  ShieldCheck,
  Shirt,
  Sparkles,
  TrendingUp,
  Truck,
  Utensils,
  Wrench,
  X,
  ZoomIn,
} from "lucide-react";

import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/i18n/language-context";
import { WHATSAPP_URL, CONTACT_EMAIL } from "@/lib/process-steps";
import { cn } from "@/lib/utils";
import {
  catalogueProducts,
  type CatalogueProduct,
  type ProductSector,
} from "./products-catalogue-data";

export function ProductsCataloguePage() {
  const { language } = useLanguage();
  const ar = language === "AR";

  // Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSector, setSelectedSector] = useState<ProductSector | "all">("all");
  const [selectedMarket, setSelectedMarket] = useState<string>("all");
  const [selectedOrigin, setSelectedOrigin] = useState<string>("all");

  // Dialog States
  const [selectedProduct, setSelectedProduct] = useState<CatalogueProduct | null>(null);
  const [rfqProduct, setRfqProduct] = useState<CatalogueProduct | null>(null);

  // RFQ Form State
  const [rfqForm, setRfqForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    quantity: "",
    country: "",
    notes: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sector metadata config
  const sectorConfigs = useMemo(
    () => [
      {
        id: "all" as const,
        labelEn: "All Products & Solutions",
        labelAr: "كافة المنتجات والحلول",
        icon: Layers,
        count: catalogueProducts.length,
      },
      {
        id: "apparel" as const,
        labelEn: "Apparel & Garments",
        labelAr: "الملابس والمنسوجات الجاهزة",
        icon: Shirt,
        count: catalogueProducts.filter((p) => p.sector === "apparel").length,
        extraEn: "2,700+ Models Available",
        extraAr: "+2,700 موديل متاح",
      },
      {
        id: "environmental" as const,
        labelEn: "Environmental Products",
        labelAr: "المنتجات والحلول البيئية",
        icon: Leaf,
        count: catalogueProducts.filter((p) => p.sector === "environmental").length,
      },
      {
        id: "food" as const,
        labelEn: "Food & Natural Products",
        labelAr: "الأغذية والمنتجات الطبيعية",
        icon: Utensils,
        count: catalogueProducts.filter((p) => p.sector === "food").length,
      },
      {
        id: "industrial" as const,
        labelEn: "Industrial & Technical Solutions",
        labelAr: "الحلول الصناعية والتقنية",
        icon: Wrench,
        count: catalogueProducts.filter((p) => p.sector === "industrial").length,
      },
    ],
    []
  );

  // Extract unique origins and markets for dropdown filters
  const uniqueOrigins = useMemo(() => {
    const set = new Set<string>();
    catalogueProducts.forEach((p) => set.add(ar ? p.originAr : p.originEn));
    return Array.from(set);
  }, [ar]);

  const uniqueMarkets = useMemo(() => {
    const set = new Set<string>();
    catalogueProducts.forEach((p) => {
      const markets = ar ? p.targetMarketsAr : p.targetMarketsEn;
      markets.forEach((m) => set.add(m));
    });
    return Array.from(set);
  }, [ar]);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return catalogueProducts.filter((product) => {
      // Sector filter
      if (selectedSector !== "all" && product.sector !== selectedSector) {
        return false;
      }
      // Origin filter
      if (selectedOrigin !== "all") {
        const originVal = ar ? product.originAr : product.originEn;
        if (originVal !== selectedOrigin) return false;
      }
      // Target market filter
      if (selectedMarket !== "all") {
        const markets = ar ? product.targetMarketsAr : product.targetMarketsEn;
        if (!markets.includes(selectedMarket)) return false;
      }
      // Search query filter
      if (q) {
        const matchName =
          product.nameEn.toLowerCase().includes(q) ||
          product.nameAr.toLowerCase().includes(q);
        const matchCode = product.code.toLowerCase().includes(q);
        const matchCategory =
          product.categoryEn.toLowerCase().includes(q) ||
          product.categoryAr.toLowerCase().includes(q);
        const matchDesc =
          product.descriptionEn.toLowerCase().includes(q) ||
          product.descriptionAr.toLowerCase().includes(q) ||
          product.taglineEn.toLowerCase().includes(q) ||
          product.taglineAr.toLowerCase().includes(q);
        const matchSpec = product.specifications.some(
          (s) =>
            s.valueEn.toLowerCase().includes(q) ||
            s.valueAr.toLowerCase().includes(q) ||
            s.labelEn.toLowerCase().includes(q) ||
            s.labelAr.toLowerCase().includes(q)
        );

        return matchName || matchCode || matchCategory || matchDesc || matchSpec;
      }
      return true;
    });
  }, [searchQuery, selectedSector, selectedOrigin, selectedMarket, ar]);

  // Download Technical Spec Sheet handler
  const handleDownloadSpec = (product: CatalogueProduct) => {
    const specLines = product.specifications
      .map((s) => `${s.labelEn} (${s.labelAr}): ${s.valueEn} / ${s.valueAr}`)
      .join("\n");
    const certs = product.certifications.join(", ");
    const fileContent = `===============================================================
SAMI BIN AYYAD GROUP — OFFICIAL TECHNICAL PRODUCT SPECIFICATION
===============================================================
Product: ${product.nameEn}
اسم المنتج: ${product.nameAr}
Product Code (SKU): ${product.code}
Sector: ${product.sector.toUpperCase()}
Category: ${product.categoryEn} / ${product.categoryAr}
Country of Origin: ${product.originEn} / ${product.originAr}
Minimum Order Quantity (MOQ): ${product.moqEn}
Packaging: ${product.packagingEn}
Customization / OEM: ${product.customizationEn}
Production Lead Time: ${product.leadTimeEn}

TECHNICAL SPECIFICATIONS:
---------------------------------------------------------------
${specLines}

CERTIFICATIONS & ACCREDITATIONS:
---------------------------------------------------------------
${certs}

OFFICIAL CONTACT & INQUIRIES:
Sami Bin Ayyad Group — Corporate Sourcing & Contracts
Email: ${CONTACT_EMAIL}
Portal: https://www.sami-trade.com/products
Generated: ${new Date().toLocaleDateString()}
===============================================================`;

    const blob = new Blob([fileContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = product.technicalFileName || `${product.code}_Technical_Specification.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // RFQ Submission
  const handleRfqSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setRfqProduct(null);
      setRfqForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        quantity: "",
        country: "",
        notes: "",
      });
    }, 3500);
  };

  // Generate WhatsApp RFQ URL
  const getWhatsappUrl = (product: CatalogueProduct) => {
    const message = ar
      ? `مرحباً مجموعة سامي بن عياد، أود الاستفسار وطلب عرض سعر للمنتج:\n- الاسم: ${product.nameAr}\n- الكود: ${product.code}\n- القطاع: ${product.categoryAr}`
      : `Hello Sami Bin Ayyad Group, I would like to request an official quotation for:\n- Product: ${product.nameEn}\n- Code: ${product.code}\n- Sector: ${product.categoryEn}`;
    return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedSector("all");
    setSelectedMarket("all");
    setSelectedOrigin("all");
  };

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background pt-16 pb-12">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.08),rgba(255,255,255,0))]" />
        <div className="site-container">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md mb-4">
              <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span>{ar ? "الكتالوج المؤسسي الموحد" : "Unified Corporate Catalogue"}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground font-head">
              {ar
                ? "كتالوج المنتجات والحلول الصناعية والتقنية"
                : "Products Catalogue & Technical Solutions"}
            </h1>
            <p className="mt-4 max-w-3xl text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground">
              {ar
                ? "استكشف محفظة المنتجات والحلول المعتمدة لمجموعة سامي بن عياد عبر قطاعات تصنيع الملابس، الحلول والتكنولوجيات البيئية، الأغذية والمنتجات الطبيعية، والتقنيات والمعدات الصناعية المتقدمة."
                : "Explore the verified portfolio of products and engineered solutions by Sami Bin Ayyad Group across Garment Manufacturing, Sustainable Environmental Technologies, Authentic Agri-Food, and Advanced Industrial Solutions."}
            </p>

            {/* Quick Metrics Bar */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
              <div className="rounded-2xl border border-white/20 bg-background/80 p-4 shadow-sm backdrop-blur-md">
                <div className="flex items-center gap-2 text-brand-green">
                  <Layers className="size-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    {ar ? "4 قطاعات إنتاجية" : "4 Core Sectors"}
                  </span>
                </div>
                <div className="mt-1 text-xl sm:text-2xl font-black text-foreground">
                  {ar ? "حلول متكاملة" : "Integrated Scope"}
                </div>
              </div>

              <div className="rounded-2xl border border-white/20 bg-background/80 p-4 shadow-sm backdrop-blur-md">
                <div className="flex items-center gap-2 text-brand-orange">
                  <Shirt className="size-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    {ar ? "مكتبة الموديلات" : "Apparel Library"}
                  </span>
                </div>
                <div className="mt-1 text-xl sm:text-2xl font-black text-foreground">
                  +2,700 {ar ? "موديل موثق" : "Styles"}
                </div>
              </div>

              <div className="rounded-2xl border border-white/20 bg-background/80 p-4 shadow-sm backdrop-blur-md">
                <div className="flex items-center gap-2 text-brand-green">
                  <ShieldCheck className="size-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    {ar ? "معايير الجودة" : "Accreditation"}
                  </span>
                </div>
                <div className="mt-1 text-xl sm:text-2xl font-black text-foreground">
                  ISO & CE & OEKO
                </div>
              </div>

              <div className="rounded-2xl border border-white/20 bg-background/80 p-4 shadow-sm backdrop-blur-md">
                <div className="flex items-center gap-2 text-brand-orange">
                  <Globe2 className="size-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    {ar ? "الأسواق المستهدفة" : "Global Reach"}
                  </span>
                </div>
                <div className="mt-1 text-xl sm:text-2xl font-black text-foreground">
                  {ar ? "تصدير وتوريد دولي" : "Export & OEM"}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. GARMENT MODEL LIBRARY DEDICATED BANNER */}
      <section className="site-container py-4">
        <div className="rounded-3xl border border-brand-orange/30 bg-gradient-to-r from-brand-orange/10 via-background to-brand-green/10 p-6 sm:p-8 backdrop-blur-xl shadow-lg">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-orange/20 px-3 py-1 text-xs font-bold text-brand-orange mb-2">
                <Sparkles className="size-3.5" />
                <span>{ar ? "مكتبة موديلات وتصاميم الملابس الجاهزة" : "Garment Ready-Made Model Archive"}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-head text-foreground">
                {ar
                  ? "تصفح أكثر من 2,700 تصميم وموديل تصنيعي جاهز للتنفيذ الفوري"
                  : "Explore Over 2,700 Production-Ready Garment Designs & Model Codes"}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {ar
                  ? "تحتفظ مجموعة سامي بن عياد بكافة أكواد وتصميمات الموديلات الصيفية والشتوية، ملابس المنزل، الأطفال، واللانجيري والسواريه بكامل صورها الحقيقية وجداول قياساتها للتصنيع الخاص والتجاري."
                  : "Browse our active library of production models with exact SKU codes, photographic views, grading sizes, and fabric specifications for private label and FOB export manufacturing."}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <Button asChild variant="primary" size="lg" className="rounded-full shadow-md w-full sm:w-auto">
                <Link to="/models">
                  <span>{ar ? "دخول مكتبة الموديلات بالكامل" : "Open 2,700+ Models Library"}</span>
                  <ArrowRight className="size-4 rtl:rotate-180" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FILTERS & SEARCH CONTROLS */}
      <section className="site-container py-8 scroll-mt-20" id="catalogue-browser">
        <Reveal>
          {/* Sector Tabs Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none">
            {sectorConfigs.map((sector) => {
              const Icon = sector.icon;
              const isActive = selectedSector === sector.id;
              return (
                <button
                  key={sector.id}
                  onClick={() => setSelectedSector(sector.id)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 whitespace-nowrap shrink-0 border cursor-pointer",
                    isActive
                      ? "bg-brand-green text-white border-brand-green shadow-md scale-[1.02]"
                      : "bg-background/80 text-foreground border-border hover:bg-secondary/60 hover:border-brand-green/40"
                  )}
                >
                  <Icon className={cn("size-4", isActive ? "text-white" : "text-brand-orange")} />
                  <span>{ar ? sector.labelAr : sector.labelEn}</span>
                  <span
                    className={cn(
                      "rounded-full px-2 py-0.5 text-[11px] font-mono",
                      isActive ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
                    )}
                  >
                    {sector.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search & Dropdown Filters Bar */}
          <div className="mt-4 rounded-3xl border border-white/20 bg-background/85 p-4 sm:p-5 shadow-lg backdrop-blur-xl">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {/* Keyword Search */}
              <div className="relative">
                <Search className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    ar
                      ? "ابحث باسم المنتج، الكود، المواصفات..."
                      : "Search by name, code, specs..."
                  }
                  className="w-full rounded-2xl border border-border bg-secondary/50 py-2.5 pl-9 pr-4 rtl:pl-4 rtl:pr-9 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="size-3.5" />
                  </button>
                )}
              </div>

              {/* Target Market Filter */}
              <div>
                <Select value={selectedMarket} onValueChange={setSelectedMarket}>
                  <SelectTrigger className="rounded-2xl border-border bg-secondary/50 text-xs sm:text-sm">
                    <SelectValue placeholder={ar ? "القطاع / السوق المستهدف" : "Target Market"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{ar ? "كافة الأسواق المستهدفة" : "All Target Markets"}</SelectItem>
                    {uniqueMarkets.map((m) => (
                      <SelectItem key={m} value={m}>
                        {m}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Country of Origin Filter */}
              <div>
                <Select value={selectedOrigin} onValueChange={setSelectedOrigin}>
                  <SelectTrigger className="rounded-2xl border-border bg-secondary/50 text-xs sm:text-sm">
                    <SelectValue placeholder={ar ? "بلد المنشأ" : "Country of Origin"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{ar ? "كافة بلدان المنشأ" : "All Countries of Origin"}</SelectItem>
                    {uniqueOrigins.map((origin) => (
                      <SelectItem key={origin} value={origin}>
                        {origin}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Reset Filters / Counter */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-medium text-muted-foreground">
                  {ar ? `عرض ${filteredProducts.length} منتج` : `Showing ${filteredProducts.length} items`}
                </span>
                {(searchQuery || selectedSector !== "all" || selectedMarket !== "all" || selectedOrigin !== "all") && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearAllFilters}
                    className="h-8 gap-1.5 rounded-xl text-xs text-brand-orange hover:bg-brand-orange/10"
                  >
                    <RotateCcw className="size-3" />
                    <span>{ar ? "إعادة تعيين" : "Reset Filters"}</span>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 4. PRODUCTS GRID */}
      <section className="site-container pb-20">
        {filteredProducts.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-border p-12 text-center">
            <Layers className="mx-auto size-10 text-muted-foreground" />
            <h3 className="mt-4 text-lg font-bold text-foreground">
              {ar ? "لم يتم العثور على منتجات مطابقة للبحث" : "No matching products found"}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
              {ar
                ? "يرجى تجربة كلمات بحث أخرى أو إزالة الفلاتر المحددة لعرض كافة المنتجات."
                : "Please try adjusting your search terms or clearing the selected filters to view all products."}
            </p>
            <Button onClick={clearAllFilters} variant="outline" size="sm" className="mt-6 rounded-full">
              {ar ? "عرض كافة المنتجات" : "View All Products"}
            </Button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product, idx) => (
              <Reveal key={product.id} delay={(idx % 6) * 0.05}>
                <div className="glass-card group flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/30 bg-background/85 shadow-md backdrop-blur-xl transition-all duration-300 hover:scale-[1.01] hover:border-brand-green/60 hover:shadow-2xl">
                  <div>
                    {/* Product Image Container */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                      <img
                        src={product.image}
                        alt={ar ? product.nameAr : product.nameEn}
                        loading="lazy"
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1 rounded-full bg-background/90 px-2.5 py-1 text-[11px] font-mono font-bold text-foreground backdrop-blur-md shadow-sm border border-white/20">
                          {product.code}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-background/90 px-2.5 py-1 text-[11px] font-bold text-foreground backdrop-blur-md shadow-sm border border-white/20">
                          <span>{product.originFlag}</span>
                          <span className="hidden sm:inline">{ar ? product.originAr : product.originEn}</span>
                        </span>
                      </div>

                      {/* Bottom Category Badge */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 rounded-full bg-brand-green/90 px-3 py-0.5 text-[11px] font-bold text-white shadow-sm backdrop-blur-sm">
                          {ar ? product.categoryAr : product.categoryEn}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-5 sm:p-6">
                      <h3 className="font-head text-base sm:text-lg font-bold text-foreground line-clamp-1 group-hover:text-brand-orange transition-colors duration-200">
                        {ar ? product.nameAr : product.nameEn}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-brand-green font-semibold line-clamp-2 leading-relaxed">
                        {ar ? product.taglineAr : product.taglineEn}
                      </p>
                      <p className="mt-3 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                        {ar ? product.descriptionAr : product.descriptionEn}
                      </p>

                      {/* MOQ and Highlights */}
                      <div className="mt-4 pt-3 border-t border-border/60 flex flex-wrap items-center justify-between gap-2 text-[11px]">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Package className="size-3.5 text-brand-orange" />
                          <span className="font-medium">{ar ? "الحد الأدنى:" : "MOQ:"}</span>
                          <span className="font-semibold text-foreground">{ar ? product.moqAr : product.moqEn}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <ShieldCheck className="size-3.5 text-brand-green" />
                          <span className="font-semibold text-foreground">
                            {product.certifications[0]}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="p-5 sm:p-6 pt-0 flex items-center gap-2">
                    <Button
                      onClick={() => setSelectedProduct(product)}
                      variant="outline"
                      size="sm"
                      className="flex-1 rounded-2xl text-xs font-bold hover:border-brand-green hover:bg-brand-green/5"
                    >
                      <FileText className="size-3.5" />
                      <span>{ar ? "المواصفات الفنية" : "View Specs"}</span>
                    </Button>

                    <Button
                      onClick={() => setRfqProduct(product)}
                      variant="primary"
                      size="sm"
                      className="flex-1 rounded-2xl text-xs font-bold"
                    >
                      <Send className="size-3.5" />
                      <span>{ar ? "طلب عرض سعر" : "Request RFQ"}</span>
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </section>

      {/* =========================================================================
          5. PRODUCT DETAIL & TECHNICAL SPECS DIALOG
          ========================================================================= */}
      <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8">
          {selectedProduct && (
            <div>
              <DialogHeader>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-brand-green/10 px-3 py-1 text-xs font-mono font-bold text-brand-green border border-brand-green/20">
                      {selectedProduct.code}
                    </span>
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold text-foreground">
                      {ar ? selectedProduct.categoryAr : selectedProduct.categoryEn}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-muted-foreground">
                    <span>{selectedProduct.originFlag}</span>
                    <span>{ar ? selectedProduct.originAr : selectedProduct.originEn}</span>
                  </span>
                </div>
                <DialogTitle className="text-xl sm:text-2xl font-bold font-head text-foreground">
                  {ar ? selectedProduct.nameAr : selectedProduct.nameEn}
                </DialogTitle>
                <DialogDescription className="text-xs sm:text-sm text-brand-orange font-semibold mt-1">
                  {ar ? selectedProduct.taglineAr : selectedProduct.taglineEn}
                </DialogDescription>
              </DialogHeader>

              {/* Image Preview */}
              <div className="mt-4 relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-muted border border-border">
                <img
                  src={selectedProduct.image}
                  alt={ar ? selectedProduct.nameAr : selectedProduct.nameEn}
                  className="size-full object-cover"
                />
              </div>

              {/* Full Description */}
              <div className="mt-5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                {ar ? selectedProduct.descriptionAr : selectedProduct.descriptionEn}
              </div>

              {/* Commercial Terms Grid */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="rounded-2xl border border-border bg-secondary/40 p-3.5">
                  <span className="font-bold text-foreground flex items-center gap-1.5 mb-1">
                    <Package className="size-3.5 text-brand-orange" />
                    {ar ? "الحد الأدنى للطلب (MOQ)" : "Minimum Order Quantity"}
                  </span>
                  <p className="text-muted-foreground">{ar ? selectedProduct.moqAr : selectedProduct.moqEn}</p>
                </div>

                <div className="rounded-2xl border border-border bg-secondary/40 p-3.5">
                  <span className="font-bold text-foreground flex items-center gap-1.5 mb-1">
                    <Truck className="size-3.5 text-brand-green" />
                    {ar ? "مدة الإنتاج والتوريد" : "Production Lead Time"}
                  </span>
                  <p className="text-muted-foreground">{ar ? selectedProduct.leadTimeAr : selectedProduct.leadTimeEn}</p>
                </div>

                <div className="rounded-2xl border border-border bg-secondary/40 p-3.5">
                  <span className="font-bold text-foreground flex items-center gap-1.5 mb-1">
                    <Layers className="size-3.5 text-brand-orange" />
                    {ar ? "خيارات التعبئة والشحن" : "Packaging & Export"}
                  </span>
                  <p className="text-muted-foreground">{ar ? selectedProduct.packagingAr : selectedProduct.packagingEn}</p>
                </div>

                <div className="rounded-2xl border border-border bg-secondary/40 p-3.5">
                  <span className="font-bold text-foreground flex items-center gap-1.5 mb-1">
                    <Wrench className="size-3.5 text-brand-green" />
                    {ar ? "التخصيص والتصنيع الخاص" : "Customization & OEM"}
                  </span>
                  <p className="text-muted-foreground">{ar ? selectedProduct.customizationAr : selectedProduct.customizationEn}</p>
                </div>
              </div>

              {/* Technical Specifications Table */}
              <div className="mt-6">
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-foreground mb-3 flex items-center gap-2">
                  <FileCheck className="size-4 text-brand-green" />
                  <span>{ar ? "جدول المواصفات والخصائص الفنية" : "Technical Specifications Table"}</span>
                </h4>
                <div className="overflow-hidden rounded-2xl border border-border">
                  <table className="w-full text-xs">
                    <tbody className="divide-y divide-border">
                      {selectedProduct.specifications.map((spec, sIdx) => (
                        <tr key={sIdx} className={sIdx % 2 === 0 ? "bg-background" : "bg-secondary/30"}>
                          <td className="p-3 font-semibold text-foreground w-1/3">
                            {ar ? spec.labelAr : spec.labelEn}
                          </td>
                          <td className="p-3 text-muted-foreground">
                            {ar ? spec.valueAr : spec.valueEn}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Certifications Tags */}
              <div className="mt-5">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 block">
                  {ar ? "شهادات الجودة والاعتمادات الرسمية:" : "Quality Accreditations & Standards:"}
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.certifications.map((cert, cIdx) => (
                    <span
                      key={cIdx}
                      className="inline-flex items-center gap-1 rounded-full border border-brand-green/30 bg-brand-green/10 px-3 py-1 text-xs font-semibold text-brand-green"
                    >
                      <Award className="size-3" />
                      <span>{cert}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-4 border-t border-border flex flex-wrap items-center justify-between gap-3">
                <Button
                  onClick={() => handleDownloadSpec(selectedProduct)}
                  variant="outline"
                  size="sm"
                  className="rounded-2xl gap-2 text-xs font-bold hover:border-brand-green"
                >
                  <Download className="size-4" />
                  <span>{ar ? "تحميل المواصفة الفنية (.txt/PDF)" : "Download Tech Datasheet"}</span>
                </Button>

                <div className="flex items-center gap-2">
                  {selectedProduct.modelsLink && (
                    <Button asChild variant="outline" size="sm" className="rounded-2xl text-xs font-bold">
                      <Link to={selectedProduct.modelsLink}>
                        <span>{ar ? "تصفح الموديلات" : "Browse Models"}</span>
                        <ArrowRight className="size-3.5 rtl:rotate-180" />
                      </Link>
                    </Button>
                  )}

                  <Button
                    onClick={() => {
                      const prod = selectedProduct;
                      setSelectedProduct(null);
                      setRfqProduct(prod);
                    }}
                    variant="primary"
                    size="sm"
                    className="rounded-2xl gap-2 text-xs font-bold"
                  >
                    <Send className="size-3.5" />
                    <span>{ar ? "طلب عرض سعر رسمي" : "Request RFQ Quote"}</span>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* =========================================================================
          6. REQUEST FOR QUOTATION (RFQ) MODAL
          ========================================================================= */}
      <Dialog open={!!rfqProduct} onOpenChange={(open) => !open && setRfqProduct(null)}>
        <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8">
          {rfqProduct && (
            <div>
              <DialogHeader>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-bold text-brand-orange mb-1">
                  <Send className="size-3.5" />
                  <span>{ar ? "طلب عرض أسعار وتوريد رسمي" : "Official Request for Quotation (RFQ)"}</span>
                </div>
                <DialogTitle className="text-lg sm:text-xl font-bold font-head text-foreground">
                  {ar ? rfqProduct.nameAr : rfqProduct.nameEn}
                </DialogTitle>
                <DialogDescription className="text-xs text-muted-foreground">
                  {ar ? `كود المنتج: ${rfqProduct.code} · ${rfqProduct.categoryAr}` : `SKU Code: ${rfqProduct.code} · ${rfqProduct.categoryEn}`}
                </DialogDescription>
              </DialogHeader>

              {isSubmitted ? (
                <div className="mt-6 rounded-2xl bg-brand-green/10 border border-brand-green/30 p-8 text-center">
                  <CheckCircle2 className="mx-auto size-12 text-brand-green animate-bounce" />
                  <h4 className="mt-4 text-base font-bold text-foreground">
                    {ar ? "تم استلام طلبك بنجاح!" : "Quotation Request Received!"}
                  </h4>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {ar
                      ? "شكراً لاهتمامكم. سيقوم فريق المبيعات والتعاقدات المختص بمراجعة مواصفاتكم والتواصل معكم عبر البريد أو الهاتف خلال 24 ساعة عمل."
                      : "Thank you for reaching out. Our dedicated commercial team will review your specifications and contact you via email or phone within 24 business hours."}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleRfqSubmit} className="mt-5 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-muted-foreground mb-1 block">
                        {ar ? "الاسم الكامل *" : "Full Name *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={rfqForm.name}
                        onChange={(e) => setRfqForm({ ...rfqForm, name: e.target.value })}
                        placeholder={ar ? "محمد أحمد" : "John Doe"}
                        className="w-full rounded-xl border border-border bg-secondary/50 px-3 py-2 text-xs text-foreground focus:border-brand-green focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-muted-foreground mb-1 block">
                        {ar ? "اسم الشركة / المؤسسة *" : "Company / Organization *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={rfqForm.company}
                        onChange={(e) => setRfqForm({ ...rfqForm, company: e.target.value })}
                        placeholder={ar ? "شركة التجارة الدولية" : "Acme Corp Ltd."}
                        className="w-full rounded-xl border border-border bg-secondary/50 px-3 py-2 text-xs text-foreground focus:border-brand-green focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-muted-foreground mb-1 block">
                        {ar ? "البريد الإلكتروني المؤسسي *" : "Corporate Email *"}
                      </label>
                      <input
                        type="email"
                        required
                        value={rfqForm.email}
                        onChange={(e) => setRfqForm({ ...rfqForm, email: e.target.value })}
                        placeholder="procurement@company.com"
                        className="w-full rounded-xl border border-border bg-secondary/50 px-3 py-2 text-xs text-foreground focus:border-brand-green focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-muted-foreground mb-1 block">
                        {ar ? "رقم الهاتف / واتساب *" : "Phone / WhatsApp *"}
                      </label>
                      <input
                        type="tel"
                        required
                        value={rfqForm.phone}
                        onChange={(e) => setRfqForm({ ...rfqForm, phone: e.target.value })}
                        placeholder="+20 100 000 0000"
                        className="w-full rounded-xl border border-border bg-secondary/50 px-3 py-2 text-xs text-foreground focus:border-brand-green focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-muted-foreground mb-1 block">
                        {ar ? "الكمية المطلوبة التقديرية" : "Estimated Target Quantity"}
                      </label>
                      <input
                        type="text"
                        value={rfqForm.quantity}
                        onChange={(e) => setRfqForm({ ...rfqForm, quantity: e.target.value })}
                        placeholder={ar ? "مثال: 5,000 قطعة أو حاوية 20 قدم" : "e.g., 5,000 pcs or 1x20ft container"}
                        className="w-full rounded-xl border border-border bg-secondary/50 px-3 py-2 text-xs text-foreground focus:border-brand-green focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-muted-foreground mb-1 block">
                        {ar ? "دولة وجهة الشحن" : "Destination Country"}
                      </label>
                      <input
                        type="text"
                        value={rfqForm.country}
                        onChange={(e) => setRfqForm({ ...rfqForm, country: e.target.value })}
                        placeholder={ar ? "مصر، السعودية، الإمارات، ألمانيا..." : "Egypt, KSA, UAE, Germany..."}
                        className="w-full rounded-xl border border-border bg-secondary/50 px-3 py-2 text-xs text-foreground focus:border-brand-green focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-muted-foreground mb-1 block">
                      {ar ? "المتطلبات والمواصفات الخاصة (اختياري)" : "Specific Requirements / Private Label Notes"}
                    </label>
                    <textarea
                      rows={3}
                      value={rfqForm.notes}
                      onChange={(e) => setRfqForm({ ...rfqForm, notes: e.target.value })}
                      placeholder={
                        ar
                          ? "أدخل أي تفاصيل خاصة بالتعبئة، المقاسات، شعار العلامة الخاصة أو الشروط التعاقدية..."
                          : "Enter any packaging preferences, branding details, custom specifications or contractual terms..."
                      }
                      className="w-full rounded-xl border border-border bg-secondary/50 px-3 py-2 text-xs text-foreground focus:border-brand-green focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-3">
                    <Button type="submit" variant="primary" size="default" className="w-full sm:flex-1 rounded-2xl text-xs font-bold">
                      <Send className="size-3.5" />
                      <span>{ar ? "إرسال الطلب إلى إدارة المبيعات" : "Submit Request to Procurement"}</span>
                    </Button>

                    <Button
                      type="button"
                      asChild
                      variant="outline"
                      size="default"
                      className="w-full sm:w-auto rounded-2xl text-xs font-bold gap-2 text-emerald-600 border-emerald-500/30 hover:bg-emerald-500/10"
                    >
                      <a href={getWhatsappUrl(rfqProduct)} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="size-3.5" />
                        <span>{ar ? "طلب فوري عبر واتساب" : "Instant WhatsApp"}</span>
                      </a>
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
