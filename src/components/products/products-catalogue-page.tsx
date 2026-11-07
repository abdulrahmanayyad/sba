import { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Download,
  Filter,
  Package,
  Search,
  Send,
  Shirt,
  Utensils,
  Wrench,
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
import { cn } from "@/lib/utils";

import {
  physicalProducts,
  productCategoriesConfig,
  type PhysicalProduct,
  type ProductDivision,
} from "./products-data";

export function ProductsCataloguePage() {
  const { language } = useLanguage();
  const ar = language === "AR";

  // Products State
  const [selectedProductDivision, setSelectedProductDivision] = useState<ProductDivision>("apparel");
  const [selectedProductCategory, setSelectedProductCategory] = useState<string>("all");
  const [productSearchQuery, setProductSearchQuery] = useState("");
  const [activeProductDetail, setActiveProductDetail] = useState<PhysicalProduct | null>(null);
  const [rfqTargetProduct, setRfqTargetProduct] = useState<PhysicalProduct | null>(null);

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
  const [isRfqSubmitted, setIsRfqSubmitted] = useState(false);
  const [generatedRfqCode, setGeneratedRfqCode] = useState("");

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

  const totalProductsCount = physicalProducts.length;

  return (
    <div className="w-full">
      {/* =========================================================================
          HERO SECTION (STRICTLY PRODUCTS)
         ========================================================================= */}
      <section className="site-container pt-20 sm:pt-28 pb-8">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md mb-4">
              <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span>{ar ? "مكتبة الكتالوجات" : "Catalogue Library"}</span>
            </div>

            <h1 className="font-head text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground leading-tight tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">
              {ar ? (
                <>
                  محفظة <span className="text-brand-orange">المنتجات المعتمدة</span> للتوريد والتصدير
                </>
              ) : (
                <>
                  Verified <span className="text-brand-orange">Products Portfolio</span> for Supply & Export
                </>
              )}
            </h1>

            <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed">
              {ar
                ? "تصفح السلع والمنتجات المادية المعتمدة من مجموعة سامي بن عياد عبر قطاعي الملابس والمنسوجات والمنتجات الغذائية الطبيعية، مع إمكانية استعراض المواصفات الفنية المعتمدة وطلب عروض أسعار التوريد والتصدير الرسمية."
                : "Explore Sami Bin Ayyad Group's verified tangible product lines across Apparel & Textiles and Natural Agri-Food, complete with detailed technical datasheets and official export quotation capabilities."}
            </p>
          </div>
        </Reveal>
      </section>

      {/* =========================================================================
          PRODUCTS WORKSPACE
         ========================================================================= */}
      <section className="site-container pb-24">
        {/* Division Selector Tabs (Apparel vs Food) */}
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

          {/* 2 Major Product Divisions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    "rounded-2xl p-5 text-start transition-all cursor-pointer border flex flex-col justify-between",
                    isSelected
                      ? "border-brand-orange bg-brand-orange/10 shadow-md ring-1 ring-brand-orange"
                      : "border-border/80 bg-background hover:bg-secondary/50 hover:border-brand-orange/40"
                  )}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={cn(
                        "p-2.5 rounded-xl",
                        isSelected ? "bg-brand-orange text-white" : "bg-secondary text-foreground"
                      )}
                    >
                      {cfg.division === "apparel" && <Shirt className="size-5" />}
                      {cfg.division === "food" && <Utensils className="size-5" />}
                    </div>
                    <span className="text-xs font-mono font-bold text-muted-foreground">
                      {physicalProducts.filter((p) => p.sector === cfg.division).length}{" "}
                      {ar ? "منتج مادي" : "items"}
                    </span>
                  </div>
                  <h4 className="font-head text-base font-bold text-foreground">
                    {ar ? cfg.labelAr : cfg.labelEn}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
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
          <div className="mb-10 overflow-hidden rounded-3xl border border-border/80 bg-background/80 p-6 sm:p-8 shadow-xl backdrop-blur-2xl transition-all duration-500 hover:-translate-y-0.5 hover:shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3 py-1 text-xs font-bold text-foreground backdrop-blur-md">
                    <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                    <span>{ar ? "مكتبة الموديلات المصنعة" : "Garment Catalogue"}</span>
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

        {/* Products Grid Controls */}
        <div className="mb-6 flex items-center justify-between">
          <span className="text-xs font-mono text-muted-foreground font-semibold">
            {ar
              ? `عرض ${filteredProducts.length} من أصل ${physicalProducts.filter((p) => p.sector === selectedProductDivision).length} منتج مادي`
              : `Showing ${filteredProducts.length} of ${physicalProducts.filter((p) => p.sector === selectedProductDivision).length} physical items`}
          </span>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/20 bg-background/85 shadow-md backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/60 hover:shadow-[0_14px_32px_-8px_rgba(22,135,108,0.22)]"
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
                    <h4 className="text-center font-head text-base sm:text-lg font-bold text-foreground group-hover:text-brand-green transition-colors leading-snug">
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

      {/* =========================================================================
          DIALOG 1: PRODUCT SPECIFICATION & DETAIL MODAL
         ========================================================================= */}
      <Dialog open={!!activeProductDetail} onOpenChange={() => setActiveProductDetail(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/20 bg-background/95 backdrop-blur-2xl p-6 sm:p-8">
          {activeProductDetail && (
            <div>
              <DialogHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="rounded-full bg-brand-orange px-3 py-0.5 text-xs font-bold text-white font-mono">
                    {activeProductDetail.code}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <span>{activeProductDetail.originFlag}</span>
                    <span>{ar ? activeProductDetail.originAr : activeProductDetail.originEn}</span>
                  </span>
                </div>
                <DialogTitle className="font-head text-xl sm:text-2xl font-black text-foreground">
                  {ar ? activeProductDetail.nameAr : activeProductDetail.nameEn}
                </DialogTitle>
                <DialogDescription className="text-xs sm:text-sm text-brand-orange font-medium mt-1">
                  {ar ? activeProductDetail.taglineAr : activeProductDetail.taglineEn}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-6 aspect-video w-full rounded-2xl overflow-hidden bg-secondary">
                <img
                  src={activeProductDetail.image}
                  alt={ar ? activeProductDetail.nameAr : activeProductDetail.nameEn}
                  className="size-full object-cover"
                />
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="font-head text-sm font-bold text-foreground mb-1">
                    {ar ? "الوصف التفصيلي ومعايير الجودة:" : "Detailed Description & Standards:"}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {ar ? activeProductDetail.descriptionAr : activeProductDetail.descriptionEn}
                  </p>
                </div>

                <div>
                  <h4 className="font-head text-sm font-bold text-foreground mb-2">
                    {ar ? "المواصفات الفنية المعتمدة:" : "Technical Specifications:"}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeProductDetail.specifications.map((spec, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl border border-border/60 bg-secondary/40 p-3 text-xs flex flex-col justify-between"
                      >
                        <span className="text-muted-foreground font-medium">
                          {ar ? spec.labelAr : spec.labelEn}
                        </span>
                        <span className="text-foreground font-bold mt-0.5">
                          {ar ? spec.valueAr : spec.valueEn}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-secondary/30 p-4 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">{ar ? "الحد الأدنى للطلب (MOQ):" : "Minimum Order (MOQ):"}</span>
                    <span className="font-bold text-brand-orange font-mono">
                      {ar ? activeProductDetail.moqAr : activeProductDetail.moqEn}
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-4 pt-2 border-t border-border/50">
                    <span className="text-muted-foreground shrink-0">{ar ? "طريقة التعبئة والتغليف:" : "Export Packaging:"}</span>
                    <span className="text-foreground text-end">
                      {ar ? activeProductDetail.packagingAr : activeProductDetail.packagingEn}
                    </span>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setActiveProductDetail(null)}
                    className="rounded-full text-xs"
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
                    <span>{ar ? "طلب تسعير هذا المنتج" : "Request RFQ For This Item"}</span>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* =========================================================================
          DIALOG 2: PRODUCT RFQ MODAL
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
    </div>
  );
}
