import { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Download,
  Eye,
  Package,
  Search,
  Send,
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
  const [expandedFoodCategories, setExpandedFoodCategories] = useState<Record<string, boolean>>({});

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

      // Category filter (supports primary categoryKey and categoryKeys array)
      if (selectedProductCategory !== "all") {
        const matchesCat =
          p.categoryKey === selectedProductCategory ||
          (p.categoryKeys && p.categoryKeys.includes(selectedProductCategory));
        if (!matchesCat) return false;
      }

      // Search Query
      if (productSearchQuery.trim()) {
        const q = productSearchQuery.toLowerCase().trim();
        const inName = (p.nameAr + " " + p.nameEn).toLowerCase().includes(q);
        const inCode = p.code.toLowerCase().includes(q);
        const inDesc = (p.descriptionAr + " " + p.descriptionEn).toLowerCase().includes(q);
        const inTag = (p.taglineAr + " " + p.taglineEn).toLowerCase().includes(q);
        const inOrigin = (p.originAr + " " + p.originEn).toLowerCase().includes(q);
        const inCat = (p.categoryAr + " " + p.categoryEn).toLowerCase().includes(q);
        const inSpecs = p.specifications?.some((s) =>
          (s.labelAr + " " + s.labelEn + " " + s.valueAr + " " + s.valueEn).toLowerCase().includes(q)
        );
        if (!inName && !inCode && !inDesc && !inTag && !inOrigin && !inCat && !inSpecs) return false;
      }

      return true;
    });
  }, [selectedProductDivision, selectedProductCategory, productSearchQuery]);

  // Current Product Division Config
  const currentProductDivisionConfig = useMemo(() => {
    return productCategoriesConfig.find((c) => c.division === selectedProductDivision);
  }, [selectedProductDivision]);

  // Apparel Sections (Strictly ordered: Kids -> Women -> Men)
  const apparelSections = useMemo(() => {
    return [
      {
        key: "kids",
        titleAr: "القسم الأول: ملابس الأطفال وحديثي الولادة",
        titleEn: "Section 1: Kids & Newborn Wear",
        subtitleAr: "5 تصنيفات معتمدة للتصنيع والتوريد (ملابس الخروج، الملابس الداخلية، الملابس المنزلية، الملابس الرياضية، ملابس حديثي الولادة)",
        subtitleEn: "5 certified manufacturing lines (Casual & Outdoor Wear, Underwear, Homewear, Sportswear, Newborn Wear)",
        badgeAr: "أزياء أطفالي",
        badgeEn: "Kids' Wear",
        products: filteredProducts.filter((p) => p.mainDepartmentEn === "Kids & Baby Wear"),
      },
      {
        key: "women",
        titleAr: "القسم الثاني: الملابس النسائية",
        titleEn: "Section 2: Women’s Wear",
        subtitleAr: "3 تصنيفات معتمدة ومخصصة (الملابس الداخلية، الملابس المنزلية، ملابس النوم)",
        subtitleEn: "3 certified lines (Underwear, Homewear, Nightwear)",
        badgeAr: "أزياء نسائية",
        badgeEn: "Women's Wear",
        products: filteredProducts.filter((p) => p.mainDepartmentEn === "Women's Wear"),
      },
      {
        key: "men",
        titleAr: "القسم الثالث: الملابس الرجالية",
        titleEn: "Section 3: Men’s Wear",
        subtitleAr: "4 تصنيفات متكاملة (ملابس الخروج، الملابس الكلاسيك، الملابس المنزلية، الملابس الرياضية)",
        subtitleEn: "4 comprehensive categories (Casual & Outdoor Wear, Classic Wear, Homewear, Sportswear)",
        badgeAr: "أزياء رجالية",
        badgeEn: "Men's Wear",
        products: filteredProducts.filter((p) => p.mainDepartmentEn === "Men's Wear"),
      },
    ];
  }, [filteredProducts]);

  // 9 Food Categories, each with ONE representative image & expandable varieties list
  const foodCategories = useMemo(() => {
    const all = [
      {
        key: "dates",
        titleAr: "التمور ومشتقاتها",
        titleEn: "Dates & Palm Products",
        subtitleAr: "أجود أنواع التمور",
        subtitleEn: "Egyptian Oasis Siwi dates, luxury Medjool, and pure natural date paste & molasses.",
        badgeAr: "التمور",
        badgeEn: "Dates",
        image: "/BG/Natural & Agri-Food Products/Dates & Palm Products.jpg",
        products: physicalProducts.filter((p) => p.sector === "food" && (p.categoryKey === "dates" || p.categoryKeys?.includes("dates"))),
      },
      {
        key: "honey",
        titleAr: "عسل النحل الطبيعي ومشتقاته",
        titleEn: "Natural Honey & Bee Products",
        subtitleAr: "عسل نحل خام طبيعي",
        subtitleEn: "Pure unpasteurized honey (Mountain Sidr, Citrus, Black Seed, Clover, Wildflower).",
        badgeAr: "عسل النحل",
        badgeEn: "Honey",
        image: "/BG/Natural & Agri-Food Products/Natural Honey & Bee Products.jpg",
        products: physicalProducts.filter((p) => p.sector === "food" && (p.categoryKey === "honey" || p.categoryKeys?.includes("honey"))),
      },
      {
        key: "olive-oil",
        titleAr: "زيت الزيتون البكر الممتاز",
        titleEn: "Virgin Olive Oil",
        subtitleAr: "عصر ميكانيكي أول على البارد",
        subtitleEn: "First cold-pressed extra virgin olive oil with acidity < 0.5% meeting IOC standards.",
        badgeAr: "زيت الزيتون",
        badgeEn: "Olive Oil",
        image: "/BG/Natural & Agri-Food Products/Olive Oil Grades.jpg",
        products: physicalProducts.filter((p) => p.sector === "food" && (p.categoryKey === "olive-oil" || p.categoryKeys?.includes("olive-oil"))),
      },
      {
        key: "olives",
        titleAr: "الزيتون المصري",
        titleEn: "Egyptian Table Olives",
        subtitleAr: "زيتون مائدة كامل ومخلي وشرائح ومحشو مخلل",
        subtitleEn: "Natural brine cured table olives: Kalamata, Manzanilla, Picual in various cuts.",
        badgeAr: "الزيتون",
        badgeEn: "Olives",
        image: "/BG/Natural & Agri-Food Products/Table Olives.jpg",
        products: physicalProducts.filter((p) => p.sector === "food" && (p.categoryKey === "olives" || p.categoryKeys?.includes("olives"))),
      },
      {
        key: "spices",
        titleAr: "البهارات والتوابل",
        titleEn: "Essential Spices & Seasonings",
        subtitleAr: "حبوب ومطحون التوابل المميزة",
        subtitleEn: "Whole seeds and ground culinary spices with high volatile oils and optical sorting.",
        badgeAr: "البهارات والتوابل",
        badgeEn: "Spices",
        image: "/BG/Natural & Agri-Food Products/Spices & Seasonings.jpg",
        products: physicalProducts.filter((p) => p.sector === "food" && (p.categoryKey === "spices" || p.categoryKeys?.includes("spices"))),
      },
      {
        key: "blends",
        titleAr: "الخلطات والتتبيلات",
        titleEn: "Culinary Blends & Seasonings",
        subtitleAr: "تتبيلات الشواء والمشاوي",
        subtitleEn: "Grill marinades, Kabsa & Biryani rice seasonings, and heritage Egyptian staples.",
        badgeAr: "الخلطات والتتبيلات",
        badgeEn: "Blends & Mixes",
        image: "/BG/Natural & Agri-Food Products/Spices and Seasonings.jpg",
        products: physicalProducts.filter((p) => p.sector === "food" && (p.categoryKey === "blends" || p.categoryKeys?.includes("blends"))),
      },
      {
        key: "soups",
        titleAr: "المرقة والشوربات",
        titleEn: "Soups & Seasoning Broths",
        subtitleAr: "شوربات كريمة الدجاج والمشروم ومرقة الدجاج واللحم",
        subtitleEn: "Instant gourmet cream soups and rich dehydrated bouillons for retail and food service.",
        badgeAr: "المرقة والشوربات",
        badgeEn: "Soups & Broths",
        image: "/products/food/chicken-cream-soup.jpg",
        products: physicalProducts.filter((p) => p.sector === "food" && (p.categoryKey === "soups" || p.categoryKeys?.includes("soups"))),
      },
      {
        key: "herbs",
        titleAr: "الأعشاب والنباتات الطبية",
        titleEn: "Herbs & Medicinal Botanicals",
        subtitleAr: "أعشاب طبيعية ومعقمة",
        subtitleEn: "Dried chamomile flowers, bay leaves, wild thyme, and Egyptian export-grade molokhia.",
        badgeAr: "الأعشاب الطبية",
        badgeEn: "Medicinal Herbs",
        image: "/BG/Natural & Agri-Food Products/Aromatic Herbs & Natural Botanicals.jpg",
        products: physicalProducts.filter((p) => p.sector === "food" && (p.categoryKey === "herbs" || p.categoryKeys?.includes("herbs"))),
      },
      {
        key: "juices",
        titleAr: "بودرة العصائر الطبيعية",
        titleEn: "Natural Juice Powders",
        subtitleAr: "عصائر حمضيات وفواكه طبيعية مجففة سريعة الذوبان",
        subtitleEn: "Instant cold-soluble spray-dried fruit & citrus powders for beverages and processing.",
        badgeAr: "بودرة العصائر",
        badgeEn: "Juice Powders",
        image: "/BG/Natural & Agri-Food Products/Natural Powdered Fruit & Vegetable Juices.jpg",
        products: physicalProducts.filter((p) => p.sector === "food" && (p.categoryKey === "juices" || p.categoryKeys?.includes("juices"))),
      },
    ];

    if (selectedProductCategory !== "all") {
      return all.filter((cat) => cat.key === selectedProductCategory);
    }
    return all;
  }, [selectedProductCategory]);

  const searchedFoodCategories = useMemo(() => {
    if (!productSearchQuery.trim()) return foodCategories;
    const q = productSearchQuery.toLowerCase().trim();

    return foodCategories
      .map((cat) => ({
        ...cat,
        products: cat.products.filter((p) => {
          const inName = (p.nameAr + " " + p.nameEn).toLowerCase().includes(q);
          const inCode = p.code.toLowerCase().includes(q);
          const inDesc = (p.descriptionAr + " " + p.descriptionEn).toLowerCase().includes(q);
          const inTag = (p.taglineAr + " " + p.taglineEn).toLowerCase().includes(q);
          return inName || inCode || inDesc || inTag;
        }),
      }))
      .filter((cat) => cat.products.length > 0);
  }, [foodCategories, productSearchQuery]);

  const toggleCategory = (key: string) => {
    setExpandedFoodCategories((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const isCategoryExpanded = (key: string) => {
    if (productSearchQuery.trim() || selectedProductCategory !== "all") return true;
    return !!expandedFoodCategories[key];
  };

  const areAllFoodExpanded = useMemo(() => {
    if (searchedFoodCategories.length === 0) return false;
    return searchedFoodCategories.every((cat) => isCategoryExpanded(cat.key));
  }, [searchedFoodCategories, expandedFoodCategories, productSearchQuery, selectedProductCategory]);

  const toggleAllFoodCategories = (expand: boolean) => {
    const newState: Record<string, boolean> = {};
    foodCategories.forEach((cat) => {
      newState[cat.key] = expand;
    });
    setExpandedFoodCategories(newState);
  };

  const totalProductsCount = physicalProducts.length;

  const renderProductCard = (product: PhysicalProduct) => {
    const isApparel = product.sector === "apparel";

    return (
      <div
        key={product.id}
        className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/20 bg-background/85 shadow-md backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_-8px_rgba(22,135,108,0.22)]"
      >
        <div>
          {/* Product Image — rendered across all categories */}
          <div className="relative aspect-[16/11] w-full overflow-hidden bg-secondary">
            <img
              src={product.image}
              alt={ar ? product.nameAr : product.nameEn}
              loading="lazy"
              onError={(e) => {
                // Graceful fallback if image file is not yet added
                (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
              }}
              className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="p-6">
            {isApparel && (
              <div className="flex items-center justify-center mb-3 pb-2 border-b border-border/40">
                <span className="font-mono text-xs font-bold text-brand-orange bg-brand-orange/10 px-2.5 py-0.5 rounded-full">
                  {product.code}
                </span>
              </div>
            )}

            <h4 className="text-center font-head text-base sm:text-lg font-bold text-foreground group-hover:text-brand-green transition-colors leading-snug">
              {ar ? product.nameAr : product.nameEn}
            </h4>

            <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2 text-center">
              {ar ? product.taglineAr : product.taglineEn}
            </p>

            {/* Key Specifications Preview */}
            <div className="mt-4 pt-3 border-t border-border/50 space-y-1.5">
              {product.specifications.slice(0, 3).map((sp, sIdx) => (
                <div key={sIdx} className="flex items-center justify-between text-[11px]">
                  <span className="text-muted-foreground font-medium shrink-0">
                    {ar ? sp.labelAr : sp.labelEn}:
                  </span>
                  <span className="text-foreground font-semibold truncate max-w-[170px] text-end">
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
            className="flex-1 rounded-full text-xs font-bold bg-brand-green text-white hover:bg-brand-orange transition-all duration-300 cursor-pointer"
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
            className="rounded-full bg-brand-green text-white hover:bg-brand-orange transition-all duration-300 text-xs font-bold px-3.5 cursor-pointer"
          >
            <Send className="size-3.5 me-1.5" />
            <span>{ar ? "طلب عرض سعر" : "Quote"}</span>
          </Button>
        </div>
      </div>
    );
  };

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

            <h1 className="font-head text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-black dark:text-white leading-tight tracking-tight text-center mx-auto">
              {ar
                ? "محفظة المنتجات المعتمدة للتوريد والتصدير"
                : "Verified Products Portfolio for Supply & Export"}
            </h1>

            <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed">
              {ar ? (
                <>
                  تصفح السلع والمنتجات المادية المعتمدة من <span className="text-brand-orange font-bold">مجموعة سامي بن عياد</span> عبر قطاعي الملابس والمنسوجات والمنتجات الغذائية الطبيعية، مع إمكانية استعراض المواصفات الفنية المعتمدة وطلب عروض أسعار التوريد والتصدير الرسمية.
                </>
              ) : (
                <>
                  Explore <span className="text-brand-orange font-bold">Sami Bin Ayyad Group</span>'s verified tangible product lines across Apparel & Textiles and Natural Agri-Food, complete with detailed technical datasheets and official export quotation capabilities.
                </>
              )}
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
                {ar ? "كتالوج المنتجات" : "PRODUCTS CATALOGUE"}
              </span>
              <h3 className="font-head text-2xl font-black text-foreground">
                {ar ? "اختر تصنيف المنتجات" : "Select Product Category"}
              </h3>
              <div className="mt-3 flex flex-wrap items-center gap-2.5">
                <Button
                  asChild
                  size="sm"
                  className={cn(
                    "rounded-full text-xs font-bold shadow-xs cursor-pointer transition-all duration-300",
                    selectedProductDivision === "apparel"
                      ? "!bg-brand-green !text-white hover:!bg-brand-orange"
                      : "border border-brand-green/40 bg-brand-green/5 text-brand-green-text hover:!bg-brand-orange hover:!text-white hover:border-brand-orange"
                  )}
                >
                  <a
                    href={ar ? "/downloads/SBA_Apparel_Product_Catalogue_AR.pdf" : "/downloads/SBA_Apparel_Product_Catalogue_EN.pdf"}
                    download={ar ? "SBA_Apparel_Product_Catalogue_AR.pdf" : "SBA_Apparel_Product_Catalogue_EN.pdf"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="size-3.5 me-1.5 shrink-0" />
                    <span>{ar ? "كتالوج الملابس الجاهزة" : "Ready-Made Garments Catalogue"}</span>
                  </a>
                </Button>

                <Button
                  asChild
                  size="sm"
                  className={cn(
                    "rounded-full text-xs font-bold shadow-xs cursor-pointer transition-all duration-300",
                    selectedProductDivision === "food"
                      ? "!bg-brand-green !text-white hover:!bg-brand-orange"
                      : "border border-brand-green/40 bg-brand-green/5 text-brand-green-text hover:!bg-brand-orange hover:!text-white hover:border-brand-orange"
                  )}
                >
                  <a
                    href={ar ? "/downloads/SBA_Natural_Products_Catalogue_AR.pdf" : "/downloads/SBA_Natural_Products_Catalogue_EN.pdf"}
                    download={ar ? "SBA_Natural_Products_Catalogue_AR.pdf" : "SBA_Natural_Products_Catalogue_EN.pdf"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="size-3.5 me-1.5 shrink-0" />
                    <span>{ar ? "كتالوج المنتجات الطبيعية والأغذية" : "Natural & Food Products Catalogue"}</span>
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
                    "rounded-2xl p-6 text-start transition-all duration-500 cursor-pointer border flex flex-col justify-center backdrop-blur-xl",
                    isSelected
                      ? "border-brand-green/60 bg-background/80 shadow-[0_12px_28px_-6px_rgba(22,135,108,0.25)] ring-1 ring-brand-green/50"
                      : "border-border/80 bg-background/50 hover:bg-background/80 hover:-translate-y-1 hover:shadow-[0_12px_28px_-6px_rgba(22,135,108,0.22)]"
                  )}
                >
                  <h4 className={cn("font-head text-base sm:text-lg font-bold transition-colors", isSelected ? "text-brand-green-text" : "text-foreground")}>
                    {ar ? cfg.labelAr : cfg.labelEn}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2 leading-relaxed">
                    {ar ? cfg.descAr : cfg.descEn}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Category Pills inside current Division */}
          {currentProductDivisionConfig && (
            <div className="pt-2">
              <div className="mb-3">
                <span className="inline-flex items-center rounded-xl bg-brand-green px-3.5 py-1.5 text-xs font-bold text-white border border-brand-green transition-all duration-300 hover:bg-brand-orange hover:border-brand-orange shadow-xs cursor-default">
                  {ar ? "فئات المنتجات" : "Product Categories"}
                </span>
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
                    <span>{ar ? "مكتبة الموديلات الجاهزة" : "Ready Models Library"}</span>
                  </span>
                </div>
                <h3 className="font-head text-xl sm:text-2xl font-black text-foreground">
                  {ar ? "تصفح الموديلات الجاهزة" : "Browse Ready Models"}
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Button
                  asChild
                  className="rounded-full bg-brand-green hover:bg-brand-orange text-white font-bold text-xs shadow-lg transition-all duration-300"
                >
                  <Link to="/models">
                    <span>{ar ? "كتالوج الموديلات الجاهزة" : "Ready Models Catalogue"}</span>
                    <ArrowRight className="size-3.5 ms-2 rtl:rotate-180" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Products Grid Controls */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <span className="text-xs font-body font-semibold text-muted-foreground">
            {selectedProductDivision === "food"
              ? ar
                ? `عرض ${searchedFoodCategories.reduce((acc, c) => acc + c.products.length, 0)} صنف`
                : `Showing ${searchedFoodCategories.reduce((acc, c) => acc + c.products.length, 0)} products`
              : ar
                ? `عرض ${filteredProducts.length} من أصل ${physicalProducts.filter((p) => p.sector === selectedProductDivision).length} منتج`
                : `Showing ${filteredProducts.length} of ${physicalProducts.filter((p) => p.sector === selectedProductDivision).length} products`}
          </span>

          {selectedProductDivision === "food" && searchedFoodCategories.length > 0 && (
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <Button
                size="sm"
                variant="outline"
                onClick={() => toggleAllFoodCategories(!areAllFoodExpanded)}
                className="h-8 text-xs font-bold text-brand-green border-brand-green/30 hover:bg-brand-green/10 rounded-xl"
              >
                {areAllFoodExpanded
                  ? ar
                    ? "إخفاء كافة المنتجات"
                    : "Hide All Products"
                  : ar
                    ? "إظهار كافة المنتجات"
                    : "Show All Products"}
              </Button>
            </div>
          )}
        </div>

        {/* Content Section: Apparel vs Food */}
        {selectedProductDivision === "apparel" ? (
          selectedProductCategory === "all" && !productSearchQuery.trim() ? (
            <div className="space-y-12">
              {apparelSections.map((sec, secIdx) => (
                <div key={sec.key} className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl border border-white/20 bg-background/70 p-4 sm:p-5 backdrop-blur-xl shadow-xs">
                    <div className="flex items-center gap-3">
                      <span className="flex size-8 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green border border-brand-green/25 font-bold text-xs shrink-0">
                        {secIdx + 1}
                      </span>
                      <div>
                        <h3 className="font-head text-base sm:text-lg md:text-xl font-bold text-foreground">
                          {ar ? sec.titleAr : sec.titleEn}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                          {ar ? sec.subtitleAr : sec.subtitleEn}
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center self-start sm:self-auto rounded-xl bg-brand-green px-3.5 py-1.5 text-xs font-bold text-white shadow-xs shrink-0">
                      {ar ? sec.badgeAr : sec.badgeEn}
                    </span>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {sec.products.map(renderProductCard)}
                  </div>
                </div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map(renderProductCard)}
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
          )
        ) : (
          /* Food Division: Render Category Cards with Dropdown Varieties List (NO individual images) */
          searchedFoodCategories.length > 0 ? (
            <div className="space-y-10">
              {searchedFoodCategories.map((cat, catIdx) => {
                const expanded = isCategoryExpanded(cat.key);
                return (
                  <div
                    key={cat.key}
                    id={`food-cat-${cat.key}`}
                    className="overflow-hidden rounded-3xl border border-white/20 bg-background/85 shadow-md backdrop-blur-xl transition-all duration-300 hover:shadow-[0_14px_32px_-8px_rgba(22,135,108,0.18)]"
                  >
                    {/* Category Header with ONE Representative Image — CLICKABLE ANYWHERE */}
                    <div
                      onClick={() => toggleCategory(cat.key)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          toggleCategory(cat.key);
                        }
                      }}
                      className="relative aspect-[16/7] sm:aspect-[21/8] w-full overflow-hidden bg-secondary cursor-pointer group select-none"
                    >
                      <img
                        src={cat.image}
                        alt={ar ? cat.titleAr : cat.titleEn}
                        loading="lazy"
                        className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/15 group-hover:from-black/95 transition-colors" />

                      {/* Overlay Content */}
                      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
                        <div className="max-w-3xl">
                          {/* Number & Name combined in ONE unified circle/pill */}
                          <div className="flex items-center gap-2 mb-2.5 flex-wrap">
                            <span className="inline-flex items-center gap-2 rounded-full bg-brand-green px-3.5 py-1 text-xs font-bold text-white backdrop-blur-md shadow-xs border border-white/20">
                              <span className="flex size-5 items-center justify-center rounded-full bg-white text-brand-green font-black text-[11px] shrink-0">
                                {catIdx + 1}
                              </span>
                              <span>{ar ? cat.badgeAr : cat.badgeEn}</span>
                            </span>
                          </div>

                          <h3 className="font-head text-xl sm:text-2xl md:text-3xl font-black text-white drop-shadow-sm leading-tight group-hover:text-brand-orange transition-colors">
                            {ar ? cat.titleAr : cat.titleEn}
                          </h3>

                          <p className="mt-1.5 text-xs sm:text-sm text-white/85 leading-relaxed drop-shadow-xs line-clamp-2">
                            {ar ? cat.subtitleAr : cat.subtitleEn}
                          </p>
                        </div>

                        {/* Dropdown Toggle Button */}
                        <Button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleCategory(cat.key);
                          }}
                          className={cn(
                            "shrink-0 rounded-2xl px-5 py-2.5 font-head text-xs sm:text-sm font-bold shadow-md transition-all gap-2 self-start sm:self-auto cursor-pointer",
                            expanded
                              ? "bg-white text-foreground hover:bg-white/90"
                              : "bg-brand-orange text-white hover:bg-brand-orange/90"
                          )}
                        >
                          <span>
                            {expanded
                              ? ar
                                ? "إخفاء كافة الأصناف"
                                : "Hide Varieties"
                              : ar
                                ? "استعراض كافة الأصناف"
                                : "View All Varieties"}
                          </span>
                          <ChevronDown
                            className={cn(
                              "size-4 transition-transform duration-300",
                              expanded && "rotate-180"
                            )}
                          />
                        </Button>
                      </div>
                    </div>

                    {/* Expandable Dropdown List of Varieties (WITHOUT IMAGES) */}
                    {expanded && (
                      <div className="p-5 sm:p-7 bg-background/50 border-t border-border/40 space-y-4">
                        <div className="flex items-center justify-between border-b border-border/30 pb-3">
                          <span className="text-xs font-bold text-foreground flex items-center gap-2">
                            <span className="size-2 rounded-full bg-brand-green animate-pulse" />
                            {ar
                              ? `قائمة أصناف ${cat.titleAr}`
                              : `Available ${cat.titleEn} Varieties`}
                          </span>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                          {cat.products.map((item) => (
                            <div
                              key={item.id}
                              className="group/item flex flex-col justify-between rounded-2xl border border-border/60 bg-card/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-green/40 hover:bg-card hover:shadow-md"
                            >
                              <div>
                                <div className="flex items-center justify-between gap-2 mb-2">
                                  <span className="font-mono text-[11px] font-bold text-brand-orange bg-brand-orange/10 px-2.5 py-0.5 rounded-full">
                                    {item.code}
                                  </span>
                                  <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                                    <span>{item.originFlag}</span>
                                    <span>{ar ? item.originAr : item.originEn}</span>
                                  </span>
                                </div>

                                <h4 className="font-head text-sm sm:text-base font-bold text-foreground group-hover/item:text-brand-green transition-colors leading-snug">
                                  {ar ? item.nameAr : item.nameEn}
                                </h4>

                                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                                  {ar ? item.taglineAr : item.taglineEn}
                                </p>

                                {item.moqAr && (
                                  <div className="mt-3 rounded-xl bg-secondary/50 px-2.5 py-1.5 text-[11px] flex items-center justify-between">
                                    <span className="text-muted-foreground">{ar ? "الحد الأدنى:" : "MOQ:"}</span>
                                    <span className="font-bold text-brand-orange truncate max-w-[170px] text-end">
                                      {ar ? item.moqAr : item.moqEn}
                                    </span>
                                  </div>
                                )}
                              </div>

                              <div className="mt-4 pt-3 border-t border-border/40 flex items-center gap-2">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => setActiveProductDetail(item)}
                                  className="h-8 flex-1 rounded-xl text-xs font-bold border-brand-green/30 text-brand-green hover:bg-brand-green hover:text-white transition-colors"
                                >
                                  <Eye className="size-3.5 me-1.5" />
                                  {ar ? "المواصفات" : "Specs"}
                                </Button>

                                <Button
                                  size="sm"
                                  onClick={() => {
                                    setRfqTargetProduct(item);
                                    setIsRfqSubmitted(false);
                                  }}
                                  className="h-8 flex-1 rounded-xl text-xs font-bold bg-brand-orange text-white hover:bg-brand-orange/90 transition-colors"
                                >
                                  <Send className="size-3.5 me-1.5 rtl:rotate-180" />
                                  {ar ? "طلب تسعير" : "RFQ"}
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
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
          )
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
                  {activeProductDetail.sector !== "apparel" && (
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <span>{activeProductDetail.originFlag}</span>
                      <span>{ar ? activeProductDetail.originAr : activeProductDetail.originEn}</span>
                    </span>
                  )}
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
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                  }}
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

                {/* Customization Guarantee Note */}
                <div className="rounded-xl border border-brand-green/30 bg-brand-green/5 p-3 text-[11px] text-muted-foreground leading-relaxed">
                  <span className="font-bold text-brand-green block mb-0.5">
                    {ar ? "إمكانية التخصيص الكامل للعلامات التجارية والمستوردين:" : "Full Private Label & Bespoke Customization:"}
                  </span>
                  {ar
                    ? "الأوزان والخامات ونسب الخلط والمقاسات والألوان قابلة للتخصيص الكامل وفقًا لمتطلبات العميل عند الاتفاق والتعاقد."
                    : "Fabric compositions, GSM weights, size charts, and colours can be fully customized according to client and brand requirements upon agreement."}
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
