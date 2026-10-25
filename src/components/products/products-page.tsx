import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight, RotateCcw, Snowflake, Sun } from "lucide-react";
import { useState } from "react";

import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import productCopy from "@/i18n/products.json";
import { wholesaleCopy, wholesaleModels } from "@/lib/wholesale";
import { filterJzraPhotos, jzraCatalogue, jzraAgeRanges, type JzraAge, type JzraAudience, type JzraPhoto } from "@/lib/jzra-catalogue";
import { useLanguage } from "@/i18n/language-context";
import { cn } from "@/lib/utils";

export type ProductLine = "jzra" | "tijari" | "azra";
type Season = "summer" | "winter";

const lineInfo: Record<ProductLine, { name: string; en: string; ar: string }> = {
  jzra: { name: "JZRA FASHION", en: "Our own fashion label for children", ar: "علامتنا الخاصة لأزياء الأطفال" },
  tijari: { name: "TIJARI", en: "Commercial & wholesale garment line", ar: "خط الملابس التجارية والجملة" },
  azra: { name: "AZRA", en: "Product line profile coming soon", ar: "ملف الخط قيد الإعداد" },
};

const lineOrder: ProductLine[] = ["jzra", "tijari", "azra"];

const subcategoryLabels: Record<string, { en: string; ar: string }> = {
  "Cotton Sets": { en: "Cotton Sets", ar: "أطقم قطنية" },
  "Jeans Sets": { en: "Jeans Sets", ar: "أطقم جينز" },
  "Jumpsuite": { en: "Jumpsuit", ar: "جمبسوت" },
  "Long Suites": { en: "Long Suits", ar: "أطقم طويلة" },
  "Short Suites": { en: "Short Suits", ar: "أطقم قصيرة" },
  "Shirts & Blouses": { en: "Shirts & Blouses", ar: "قمصان وبلوزات" },
  "Blouses": { en: "Blouses", ar: "بلوزات" },
  "Suites": { en: "Suits", ar: "أطقم" },
  "T-Shirts": { en: "T-Shirts", ar: "تي شيرت" },
};

const PAGE_SIZE = 24;

type SeasonData = {
  titleEn: string; titleAr: string; bodyEn: string; bodyAr: string;
  categories: Array<{ key: string; en: string; ar: string; fitEn: string; fitAr: string; bodyEn: string; bodyAr: string; }>;
};

const seasons: Record<Season, SeasonData> = {
  summer: {
    titleEn: "Summer Collection", titleAr: "مجموعة الصيف",
    bodyEn: "Breathable cotton and linen pieces, cut for play and built to last through warm days.",
    bodyAr: "قطع قطنية وكتانية خفيفة، مصممة للراحة ومتحمّلة لأيام الصيف.",
    categories: [
      {
        key: "casual", en: "Casual", ar: "كاجوال", fitEn: "Boys & Girls", fitAr: "أولاد وبنات",
        bodyEn: "Everyday sets: tees, shirts, shorts and lightweight layers.",
        bodyAr: "أطقم يومية: تي شيرتات وقمصان وشورتات وطبقات خفيفة.",
      },
      {
        key: "dresses", en: "Dresses", ar: "فساتين", fitEn: "Girls", fitAr: "بنات",
        bodyEn: "Sundresses and day dresses in soft, breathable fabrics.",
        bodyAr: "فساتين صيفية ونهارية بأقمشة ناعمة وقابلة للتهوية.",
      },
    ],
  },
  winter: {
    titleEn: "Winter Collection", titleAr: "مجموعة الشتاء",
    bodyEn: "Knits, corduroy and warm layering pieces in deep, grounded colours.",
    bodyAr: "تريكو وكوردروي وطبقات دافئة بألوان عميقة وهادئة.",
    categories: [
      {
        key: "casual", en: "Casual", ar: "كاجوال", fitEn: "Boys & Girls", fitAr: "أولاد وبنات",
        bodyEn: "Sweaters, jeans, jackets and everyday winter staples.",
        bodyAr: "كنزات وجينزات وجاكيتات وأساسيات الشتاء اليومية.",
      },
      {
        key: "dresses", en: "Dresses", ar: "فساتين", fitEn: "Girls", fitAr: "بنات",
        bodyEn: "Long-sleeve and knit dresses made for cooler days.",
        bodyAr: "فساتين بأكمام طويلة وتريكو مصممة للأيام الباردة.",
      },
    ],
  },
};

function PhotoGrid({ photos, ar }: { photos: JzraPhoto[]; ar: boolean }) {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(photos.length / PAGE_SIZE);
  const visible = photos.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
  const [prevLen, setPrevLen] = useState(photos.length);
  if (photos.length !== prevLen) { setPrevLen(photos.length); setPage(0); }

  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {visible.map((photo) => (
          <div key={photo.id} className="group relative overflow-hidden rounded-xl border border-border bg-secondary">
            <img
              src={photo.image}
              alt=""
              loading="lazy"
              className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {photo.subcategory && (
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent px-3 py-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/90">
                  {subcategoryLabels[photo.subcategory]
                    ? (ar ? subcategoryLabels[photo.subcategory]!.ar : subcategoryLabels[photo.subcategory]!.en)
                    : photo.subcategory}
                </span>
              </div>
            )}
            <div className="absolute top-2 end-2 flex flex-wrap gap-1">
              {photo.ages.map((a) => (
                <span key={a} dir="ltr" className="rounded bg-black/50 px-1.5 py-0.5 font-mono text-[9px] text-white/90">{a}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {totalPages > 1 && (
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <Button variant="ghost" size="sm" disabled={page === 0} onClick={() => setPage((p) => Math.max(0, p - 1))}>
            <ChevronLeft className="size-4" />{ar ? "السابق" : "Prev"}
          </Button>
          {Array.from({ length: Math.min(totalPages, 10) }, (_, i) => (
            <Button key={i} variant={page === i ? "default" : "ghost"} size="sm" className="h-8 w-8 p-0" onClick={() => setPage(i)}>
              {i + 1}
            </Button>
          ))}
          {totalPages > 10 && <span className="px-1 text-sm text-muted-foreground">…</span>}
          <Button variant="ghost" size="sm" disabled={page === totalPages - 1} onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}>
            {ar ? "التالي" : "Next"}<ChevronRight className="size-4" />
          </Button>
        </div>
      )}
    </div>
  );
}

function WholesaleShowcase({ ar }: { ar: boolean }) {
  return (
    <div className="mt-10 sm:mt-14">
      <Reveal>
        <p className="eyebrow">{ar ? wholesaleCopy.eyebrow.ar : wholesaleCopy.eyebrow.en}</p>
        <h2 className="section-title mt-3">{ar ? wholesaleCopy.title.ar : wholesaleCopy.title.en}</h2>
      </Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {wholesaleModels.map(([code, name, spec, price]) => (
          <div key={code} className="glass-card group flex flex-col p-5 transition-transform duration-300 hover:-translate-y-1">
            <div className="grid aspect-[3/4] place-items-center border border-border bg-secondary font-mono text-xs text-muted-foreground">{code}</div>
            <h3 className="mt-4 font-head font-semibold leading-snug">{name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{spec}</p>
            <div className="mt-4 flex items-center justify-between gap-3">
              <span className="bg-brand-orange px-3 py-1 font-mono text-sm text-foreground">{price}</span>
              <Link to="/contact" search={{ model: code }} className="text-sm text-brand-green-text underline-offset-4 hover:underline">
                {ar ? wholesaleCopy.request.ar : wholesaleCopy.request.en}
              </Link>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-xs text-muted-foreground">{ar ? wholesaleCopy.note.ar : wholesaleCopy.note.en}</p>
    </div>
  );
}

export function ProductsPage({ line }: { line: ProductLine }) {
  const { language } = useLanguage();
  const ar = language === "AR";
  const [season, setSeason] = useState<Season>("summer");
  const [age, setAge] = useState<JzraAge | "all">("all");
  const [audience, setAudience] = useState<JzraAudience | "all">("all");
  const [activeCategory, setActiveCategory] = useState<"casual" | "dresses">("casual");
  const [subcategory, setSubcategory] = useState<string>("all");

  const copy = ar ? productCopy.AR : productCopy.EN;
  const s = seasons[season];
  const active = lineInfo[line];

  const photos = filterJzraPhotos(jzraCatalogue, { season, age, audience, subcategory }).filter(
    (p) => p.category === activeCategory,
  );

  const allForCategory = filterJzraPhotos(jzraCatalogue, { season, age, audience }).filter(
    (p) => p.category === activeCategory,
  );
  const availableSubcategories = Array.from(
    new Set(allForCategory.map((p) => p.subcategory).filter(Boolean) as string[]),
  );

  const resetFilters = () => {
    setSeason("summer"); setAge("all"); setAudience("all");
    setActiveCategory("casual"); setSubcategory("all");
  };

  return (
    <div className="w-full">
      <section className="site-container section-band">
        <Reveal>
          <p className="eyebrow">{ar ? "منتجاتنا" : "Our Products"}</p>
          <h1 className="section-title mt-3">{active.name}</h1>
          <p className="mt-3 max-w-xl text-muted-foreground">{ar ? active.ar : active.en}</p>
        </Reveal>

        <div role="tablist" className="mt-8 grid grid-cols-3 gap-px border border-border bg-border">
          {lineOrder.map((key) => {
            const info = lineInfo[key];
            const selected = key === line;
            return (
              <Link key={key} to="/products" search={{ line: key }} role="tab" aria-selected={selected}
                className={cn("bg-background p-3 text-start transition-colors hover:bg-secondary sm:p-5", selected && "bg-secondary")}>
                <span className={cn("font-mono text-sm uppercase tracking-[0.2em]", selected ? "text-brand-orange-text" : "text-foreground")}>{key}</span>
                <span className="mt-1 hidden text-sm text-muted-foreground sm:block">{ar ? info.ar : info.en}</span>
                <span className={cn("mt-3 block h-0.5 w-full transition-colors sm:mt-4 sm:w-10", selected ? "bg-primary" : "bg-transparent")} />
              </Link>
            );
          })}
        </div>

        {line === "jzra" ? (
          <div className="mt-10 sm:mt-14">
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div className="max-w-xl">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">JZRA</p>
                <h2 className="mt-2 font-head text-2xl font-semibold sm:text-3xl">{ar ? s.titleAr : s.titleEn}</h2>
                <p className="mt-3 text-sm text-muted-foreground sm:text-base">{ar ? s.bodyAr : s.bodyEn}</p>
              </div>
              <div className="inline-flex w-full rounded-full border border-border p-1 sm:w-auto" role="group" aria-label={ar ? "الموسم" : "Season"}>
                {(["summer", "winter"] as Season[]).map((key) => (
                  <Button key={key} variant={season === key ? "default" : "ghost"} type="button" aria-pressed={season === key}
                    onClick={() => { setSeason(key); setSubcategory("all"); }}
                    className={cn("inline-flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm transition-colors sm:flex-none sm:px-5",
                      season === key ? "bg-primary text-primary-foreground" : "hover:bg-secondary")}>
                    {key === "summer" ? <Sun className="size-4" /> : <Snowflake className="size-4" />}
                    {key === "summer" ? (ar ? "صيف" : "Summer") : (ar ? "شتاء" : "Winter")}
                  </Button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex gap-2" role="tablist">
              {s.categories.map((cat) => (
                <button key={cat.key} role="tab" aria-selected={activeCategory === cat.key}
                  onClick={() => { setActiveCategory(cat.key as "casual" | "dresses"); setSubcategory("all"); }}
                  className={cn("rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                    activeCategory === cat.key
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background hover:bg-secondary")}>
                  {ar ? cat.ar : cat.en}
                  <span className="ms-1.5 text-[10px] font-normal opacity-70">{ar ? cat.fitAr : cat.fitEn}</span>
                </button>
              ))}
            </div>

            <div className={cn("mt-4 grid items-end gap-4 rounded-3xl border border-border bg-page-alt/60 p-4 sm:p-5",
              availableSubcategories.length > 0 ? "sm:grid-cols-[1fr_1fr_1fr_auto]" : "sm:grid-cols-[1fr_1fr_auto]")}>
              <div>
                <label id="jzra-age-label" className="mb-2 block text-sm font-semibold">{copy.age}</label>
                <Select value={age} onValueChange={(v) => { if (v === "all" || jzraAgeRanges.some((r) => r === v)) setAge(v as JzraAge | "all"); }} dir={ar ? "rtl" : "ltr"}>
                  <SelectTrigger aria-labelledby="jzra-age-label" className="h-11 rounded-full px-4 shadow-none"><SelectValue /></SelectTrigger>
                  <SelectContent className="rounded-none">
                    <SelectItem value="all">{copy.allAges}</SelectItem>
                    {jzraAgeRanges.map((r) => <SelectItem key={r} value={r}><span dir="ltr">{r}</span> {copy.years}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label id="jzra-audience-label" className="mb-2 block text-sm font-semibold">{copy.audience}</label>
                <Select value={audience} onValueChange={(v) => { if (v === "all" || v === "boys" || v === "girls") setAudience(v as JzraAudience | "all"); }} dir={ar ? "rtl" : "ltr"}>
                  <SelectTrigger aria-labelledby="jzra-audience-label" className="h-11 rounded-full px-4 shadow-none"><SelectValue /></SelectTrigger>
                  <SelectContent className="rounded-none">
                    <SelectItem value="all">{copy.allAudiences}</SelectItem>
                    <SelectItem value="boys">{copy.boys}</SelectItem>
                    <SelectItem value="girls">{copy.girls}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {availableSubcategories.length > 0 && (
                <div>
                  <label id="jzra-sub-label" className="mb-2 block text-sm font-semibold">{ar ? "النوع" : "Type"}</label>
                  <Select value={subcategory} onValueChange={setSubcategory} dir={ar ? "rtl" : "ltr"}>
                    <SelectTrigger aria-labelledby="jzra-sub-label" className="h-11 rounded-full px-4 shadow-none"><SelectValue /></SelectTrigger>
                    <SelectContent className="rounded-none">
                      <SelectItem value="all">{ar ? "الكل" : "All types"}</SelectItem>
                      {availableSubcategories.map((sub) => (
                        <SelectItem key={sub} value={sub}>
                          {subcategoryLabels[sub] ? (ar ? subcategoryLabels[sub].ar : subcategoryLabels[sub].en) : sub}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
              <Button variant="ghost" className="h-11 w-full justify-center sm:w-auto" onClick={resetFilters}
                disabled={season === "summer" && age === "all" && audience === "all" && activeCategory === "casual" && subcategory === "all"}>
                <RotateCcw />{copy.reset}
              </Button>
            </div>

            <div aria-live="polite" className="mt-5 text-sm text-muted-foreground">{photos.length} {copy.photos}</div>

            {photos.length > 0 ? (
              <div className="mt-5"><PhotoGrid photos={photos} ar={ar} /></div>
            ) : (
              <div className="mt-5 flex min-h-64 flex-col items-center justify-center rounded-3xl border border-border bg-secondary px-6 py-12 text-center">
                <h3 className="font-head text-xl font-semibold">{copy.empty}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{copy.emptyBody}</p>
                <Button variant="ghost" className="mt-5" onClick={resetFilters}><RotateCcw />{copy.reset}</Button>
              </div>
            )}

            <Button asChild className="mt-8 w-full sm:mt-10 sm:w-auto">
              <Link to="/models">{ar ? "استعرض كل الموديلات" : "Browse all models"} <ArrowRight className="size-4 rtl:rotate-180" /></Link>
            </Button>
          </div>
        ) : line === "tijari" ? (
          <WholesaleShowcase ar={ar} />
        ) : (
          <div className="mt-10 grid min-h-72 place-items-center rounded-3xl border border-border p-6 text-center sm:mt-14 sm:p-10">
            <div>
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-brand-orange-text">{line}</p>
              <h2 className="mt-3 font-head text-2xl font-semibold">{ar ? "المحتوى قيد الإعداد" : "Collection coming soon"}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{ar ? "سيتم نشر الصور والتفاصيل فور اعتمادها." : "Photos and details will be published here once approved."}</p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
