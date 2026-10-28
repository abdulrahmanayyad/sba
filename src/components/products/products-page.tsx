import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight, RotateCcw, Snowflake, Sun } from "lucide-react";
import { useState } from "react";

import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import productCopy from "@/i18n/products.json";
import { filterJzraPhotos, jzraCatalogue, jzraAgeRanges, type JzraAge, type JzraAudience, type JzraPhoto } from "@/lib/jzra-catalogue";
import { useLanguage } from "@/i18n/language-context";
import { cn } from "@/lib/utils";

export type ProductLine = "b2c" | "b2b";
type Season = "summer" | "winter";

const lineInfo: Record<ProductLine, { en: string; ar: string }> = {
  b2c: { en: "B2C Brand � Children & youth fashion label", ar: "����� B2C � �� ����� ������� �������" },
  b2b: { en: "B2B Brand � Fashion Categories & Commercial Lines", ar: "����� B2B � ������� ������� ������� ��������" },
};

const subcategoryLabels: Record<string, { en: string; ar: string }> = {
  "Cotton Sets": { en: "Cotton Sets", ar: "���� �����" },
  "Jeans Sets": { en: "Jeans Sets", ar: "���� ����" },
  "Jumpsuite": { en: "Jumpsuit", ar: "������" },
  "Long Suites": { en: "Long Suits", ar: "���� �����" },
  "Short Suites": { en: "Short Suits", ar: "���� �����" },
  "Shirts & Blouses": { en: "Shirts & Blouses", ar: "����� �������" },
  "Blouses": { en: "Blouses", ar: "������" },
  "Suites": { en: "Suits", ar: "����" },
  "T-Shirts": { en: "T-Shirts", ar: "�� ����" },
};

const PAGE_SIZE = 24;

type SeasonData = {
  titleEn: string; titleAr: string; bodyEn: string; bodyAr: string;
  categories: Array<{ key: string; en: string; ar: string; fitEn: string; fitAr: string; bodyEn: string; bodyAr: string; }>;
};

const seasons: Record<Season, SeasonData> = {
  summer: {
    titleEn: "Summer Collection", titleAr: "������ �����",
    bodyEn: "Breathable cotton and linen pieces, cut for play and built to last through warm days.",
    bodyAr: "��� ����� ������� ����ɡ ����� ������ �������� ����� �����.",
    categories: [
      { key: "casual", en: "Casual", ar: "������", fitEn: "Boys & Girls", fitAr: "����� �����",
        bodyEn: "Everyday sets: tees, shirts, shorts and lightweight layers.",
        bodyAr: "���� �����: �� ������ ������ ������� ������ �����." },
      { key: "dresses", en: "Dresses", ar: "������", fitEn: "Girls", fitAr: "����",
        bodyEn: "Sundresses and day dresses in soft, breathable fabrics.",
        bodyAr: "������ ����� ������� ������ ����� ������ �������." },
    ],
  },
  winter: {
    titleEn: "Winter Collection", titleAr: "������ ������",
    bodyEn: "Knits, corduroy and warm layering pieces in deep, grounded colours.",
    bodyAr: "����� �������� ������ ����� ������ ����� ������.",
    categories: [
      { key: "casual", en: "Casual", ar: "������", fitEn: "Boys & Girls", fitAr: "����� �����",
        bodyEn: "Sweaters, jeans, jackets and everyday winter staples.",
        bodyAr: "����� ������� �������� �������� ������ �������." },
      { key: "dresses", en: "Dresses", ar: "������", fitEn: "Girls", fitAr: "����",
        bodyEn: "Long-sleeve and knit dresses made for cooler days.",
        bodyAr: "������ ������ ����� ������ ����� ������ �������." },
    ],
  },
};

/* ---- B2B Categories ---- */
interface B2BCategory { key: string; labelEn: string; labelAr: string; descEn: string; descAr: string; folder: string; images: string[]; }

const b2bCategories: B2BCategory[] = [
  {
    key: "homewear", labelEn: "Home Wear", labelAr: "����� ������",
    descEn: "Comfortable and stylish home wear collections for all ages � loungewear, sets, and relaxed styles.",
    descAr: "������� ����� ������ ������� �������� ����� ������� � ����� ��ѡ ���� ������� �����.",
    folder: "Home Wear",
    images: ["2003 (1).jpg","2009 (3).jpg","2019 (1).jpg","2027 (2).jpg","2028 (1).jpg","2028 (2).jpg","2031 (2).jpg","2031 (3).jpg","2032 (1).jpg","2032 (4).jpg","2033 (1).jpg","2034 (2).jpg","2040 (1).jpg","2040 (3).jpg","2041 (1).jpg","2041 (4).jpg","2045 (1).jpg","2046 (2).jpg","2047 (3).jpg","2049 (2).jpg","2050 (1).jpg","2051 (1).jpg","2053 (3).jpg","2054 (1).jpg","2054 (2).jpg","2056 (2).jpg","2058 (2).jpg","2059 (2).jpg","2060 (1).jpg","2066 (1).jpg","2066 (3).jpg","2070 (1).jpg","2070 (2).jpg","2078 (1).jpg","2079 (1).jpg","2106 (1).jpg"],
  },
  {
    key: "kids", labelEn: "Kids", labelAr: "����� �������",
    descEn: "Children's fashion across all ages � sets, dresses, casual wear, and occasion outfits.",
    descAr: "����� ������� ����� ������� � ���� ������� ������ ������ ������ �������.",
    folder: "Kids",
    images: ["001.jpg","001 (2).jpg","001 (3).jpg","002.jpg","002 (2).jpg","002 (3).jpg","003.jpg","003 (2).jpg","003 (3).jpg","004.jpg","004 (2).jpg","009.jpg","010.jpg","010 (2).jpg","010 (3).jpg","011.jpg","011 (2).jpg","011 (3).jpg","012.jpg","012 (2).jpg","013.jpg","013 (2).jpg","014.jpg","014 (2).jpg","015.jpg","015 (2).jpg","015 (3).jpg","106 (1).jpg","106 (2).jpg","106 (3).jpg","107.jpg","107 (2).jpg","107 (3).jpg","108.jpg","108 (2).jpg","108 (3).jpg"],
  },
  {
    key: "lingerie", labelEn: "Lingerie", labelAr: "������",
    descEn: "Elegant lingerie and intimate wear collections crafted with premium fabrics and delicate finishing.",
    descAr: "������� ������ ����� ������ �� ����� ����� �������� �����.",
    folder: "Lingerie",
    images: ["1001.jpeg","1005.jpeg","1007.jpeg","1010.jpeg","1015.jpeg","1019.jpeg","1022.jpeg","1023.jpeg","1026 (1).jpeg","1026 (2).jpeg","1026 (3).jpeg","1027 (1).jpeg","1027 (2).jpeg","1027 (3).jpeg","1028 (1).jpeg","1028 (2).jpeg","1028 (3).jpeg","1029 (1).jpeg","1029 (2).jpeg","1029 (3).jpeg","1030 (1).jpeg","1030 (2).jpeg","1030 (3).jpeg","1036 (1).jpg","1036 (2).jpg","1036 (3).jpg","1036 (4).jpg","1038.jpg","1039.jpg","1040.jpg","1041 (1).jpg","1041 (2).jpg","1041 (3).jpg","1042 (1).jpg","1042 (2).jpg","1044 (1).jpg"],
  },
  {
    key: "soiree", labelEn: "Soiree", labelAr: "������",
    descEn: "Glamorous evening and occasion wear � evening gowns, formal dresses, and special occasion collections.",
    descAr: "����� ������ ���������� ������� � ������ ���ɡ ����� ����ɡ �������� ��������� ������.",
    folder: "Soiree",
    images: ["001(1).jpg","001(2).jpg","001 (3).jpg","001 (4).jpg","001 (5).jpg","002(1).jpg","002(2).jpg","002(3).jpg","002 (1).jpg","002 (4).jpg","007(1).jpg","007(2).jpg","007(3).jpg","007(4).jpg","007(5).jpg","007(6).jpg","008(1).jpg","008(2).jpg","008(3).jpg","008 (2).jpg","008 (3).jpg","008 (4).jpg","009(1).jpg","009(2).jpg","009(3).jpg","009(4).jpg","009(5).jpg","010(1).jpg","010(2).jpg","010(3).jpg","011(1).jpg","011(2).jpg","011(3).jpg","015(1).jpg","015(2).jpg","015(3).jpg"],
  },
];

const cardVariants = [
  "border-white/20 bg-background/80 backdrop-blur-xl",
  "border-brand-green/30 bg-gradient-to-br from-brand-green/10 via-card to-card",
  "border-white/20 bg-background/80 backdrop-blur-xl",
  "border-brand-orange/20 bg-gradient-to-br from-brand-orange/5 via-card to-card",
  "border-white/20 bg-background/80 backdrop-blur-xl",
  "border-white/20 bg-page-alt/80 backdrop-blur-xl",
  "border-white/20 bg-background/80 backdrop-blur-xl",
];

function B2BShowcase({ ar }: { ar: boolean }) {
  const [activeCategory, setActiveCategory] = useState<string>("homewear");
  const [page, setPage] = useState(0);

  const current = b2bCategories.find((c) => c.key === activeCategory) ?? b2bCategories[0]!;
  const totalPages = Math.ceil(current.images.length / PAGE_SIZE);
  const visible = current.images.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  const handleCategory = (key: string) => { setActiveCategory(key); setPage(0); };

  return (
    <div className="mt-8 space-y-10">
      {/* Category tabs glassmorphic island */}
      <div className="rounded-3xl border border-white/20 bg-background/85 p-3 shadow-xl backdrop-blur-2xl">
        <div className="flex flex-wrap gap-2">
          {b2bCategories.map((cat) => (
            <button key={cat.key} type="button" onClick={() => handleCategory(cat.key)}
              className={cn("flex items-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-semibold transition-all duration-200",
                activeCategory === cat.key
                  ? "bg-brand-green text-white shadow-md shadow-brand-green/20"
                  : "bg-muted/40 text-foreground/80 hover:bg-muted hover:text-foreground")}>
              {ar ? cat.labelAr : cat.labelEn}
              <span className="rounded-full border border-current/20 bg-white/10 px-2 py-0.5 font-mono text-[10px] opacity-70">
                {current.images.length}+
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Description card */}
      <Reveal>
        <div className="rounded-3xl border border-brand-green/20 bg-gradient-to-br from-brand-green/8 via-background to-background p-6 shadow-sm md:p-8">
          <h2 className="font-head text-2xl font-bold text-foreground sm:text-3xl">{ar ? current.labelAr : current.labelEn}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">{ar ? current.descAr : current.descEn}</p>
        </div>
      </Reveal>

      {/* Photo grid � uniform 3:4 */}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {visible.map((filename, idx) => {
          const encodedFolder = encodeURIComponent(current.folder);
          const encodedFile = encodeURIComponent(filename);
          const src = `/Categories/${encodedFolder}/${encodedFile}`;
          const modelCode = `B2B-${current.key.slice(0, 2).toUpperCase()}-${String(page * PAGE_SIZE + idx + 1).padStart(3, "0")}`;
          const variant = cardVariants[idx % cardVariants.length]!;
          return (
            <div key={filename} className={cn("group overflow-hidden rounded-3xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl", variant)}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <img src={src} alt={ar ? current.labelAr : current.labelEn} loading="lazy"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute start-2.5 top-2.5 rounded-full bg-black/60 px-2.5 py-1 font-mono text-[10px] text-white/90 backdrop-blur-md">{modelCode}</span>
              </div>
              <div className="p-4">
                <h3 className="font-head text-sm font-semibold leading-snug text-foreground transition-colors duration-200 group-hover:text-brand-orange">
                  {ar ? current.labelAr : current.labelEn}
                </h3>
                <div className="mt-3 border-t border-border/50 pt-3">
                  <Link to="/contact" search={{ model: modelCode }}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-brand-green-text underline-offset-4 hover:underline">
                    {ar ? "��� �������" : "Request Inquiry"}
                    <ArrowRight className="size-3 rtl:rotate-180" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {totalPages > 1 && (
        <div className="flex flex-wrap items-center justify-center gap-2">
          <Button variant="ghost" size="sm" disabled={page === 0} onClick={() => setPage((p) => Math.max(0, p - 1))}>
            <ChevronLeft className="size-4" />{ar ? "������" : "Prev"}
          </Button>
          {Array.from({ length: Math.min(totalPages, 8) }, (_, i) => (
            <Button key={i} variant={page === i ? "default" : "ghost"} size="sm" className="h-8 w-8 p-0" onClick={() => setPage(i)}>{i + 1}</Button>
          ))}
          {totalPages > 8 && <span className="px-1 text-sm text-muted-foreground">�</span>}
          <Button variant="ghost" size="sm" disabled={page === totalPages - 1} onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}>
            {ar ? "������" : "Next"}<ChevronRight className="size-4" />
          </Button>
        </div>
      )}

      <Reveal>
        <div className="rounded-3xl border border-white/20 bg-background/80 p-6 text-center shadow-lg backdrop-blur-xl">
          <p className="font-head text-lg font-semibold text-foreground">
            {ar ? "�� ���� �� ����� ����� ������ɿ" : "Looking for commercial wholesale production?"}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {ar ? "����� ���� ������� �������� ������ɡ ��������� ������ɡ ������ Private Label."
              : "Contact us to discuss wholesale orders, custom models, and Private Label programs."}
          </p>
          <Button asChild variant="primary" size="lg" className="mt-5">
            <Link to="/contact">{ar ? "����� ����" : "Get in Touch"} <ArrowRight className="size-4 rtl:rotate-180" /></Link>
          </Button>
        </div>
      </Reveal>
    </div>
  );
}

function PhotoGrid({ photos, ar }: { photos: JzraPhoto[]; ar: boolean }) {
  const uniquePhotos = Array.from(new Map(photos.map((p) => [p.image, p])).values());
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(uniquePhotos.length / PAGE_SIZE);
  const visible = uniquePhotos.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
  const [prevLen, setPrevLen] = useState(uniquePhotos.length);
  if (uniquePhotos.length !== prevLen) { setPrevLen(uniquePhotos.length); setPage(0); }
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {visible.map((photo, idx) => {
          const subLabel = photo.subcategory && subcategoryLabels[photo.subcategory]
            ? (ar ? subcategoryLabels[photo.subcategory]!.ar : subcategoryLabels[photo.subcategory]!.en)
            : photo.category === "dresses" ? (ar ? "����� ���� �������" : "Children's Summer Dress") : (ar ? "��� ������ �������" : "Kids Casual Set");
          const audLabel = photo.audiences.map((a) => (a === "boys" ? (ar ? "�����" : "Boys") : (ar ? "����" : "Girls"))).join(ar ? " �" : " & ");
          const ageLabel = photo.ages.join(", ") + (ar ? " ���" : "Y");
          const desc = ar ? `${audLabel} � �������: ${ageLabel} � ����� ����� ����� ����� ������` : `${audLabel} � Ages: ${ageLabel} � Premium breathable cotton fabric`;
          const modelCode = `B2C-${photo.season.slice(0, 1).toUpperCase()}${String(idx + 1).padStart(3, "0")}`;
          const variant = cardVariants[idx % cardVariants.length]!;
          return (
            <div key={photo.id} className={cn("group flex flex-col overflow-hidden rounded-3xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl", variant)}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <img src={photo.image} alt={subLabel} loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute end-2 top-2 flex flex-wrap gap-1">
                  {photo.ages.map((a) => (<span key={a} dir="ltr" className="rounded bg-black/60 px-1.5 py-0.5 font-mono text-[9px] text-white">{a}</span>))}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="font-head font-semibold leading-snug">{subLabel}</h3>
                <p className="mt-1 flex-1 text-sm text-muted-foreground">{desc}</p>
                <div className="mt-4 flex items-center justify-between gap-3 border-t border-border/50 pt-3">
                  <Link to="/contact" search={{ model: modelCode }} className="text-sm font-medium text-brand-green-text underline-offset-4 hover:underline">{ar ? "��� �������" : "Request Inquiry"}</Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {totalPages > 1 && (
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <Button variant="ghost" size="sm" disabled={page === 0} onClick={() => setPage((p) => Math.max(0, p - 1))}><ChevronLeft className="size-4" />{ar ? "������" : "Prev"}</Button>
          {Array.from({ length: Math.min(totalPages, 10) }, (_, i) => (<Button key={i} variant={page === i ? "default" : "ghost"} size="sm" className="h-8 w-8 p-0" onClick={() => setPage(i)}>{i + 1}</Button>))}
          {totalPages > 10 && <span className="px-1 text-sm text-muted-foreground">�</span>}
          <Button variant="ghost" size="sm" disabled={page === totalPages - 1} onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}>{ar ? "������" : "Next"}<ChevronRight className="size-4" /></Button>
        </div>
      )}
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
  const photos = filterJzraPhotos(jzraCatalogue, { season, age, audience, subcategory }).filter((p) => p.category === activeCategory);
  const allForCategory = filterJzraPhotos(jzraCatalogue, { season, age, audience }).filter((p) => p.category === activeCategory);
  const availableSubcategories = Array.from(new Set(allForCategory.map((p) => p.subcategory).filter(Boolean) as string[]));
  const resetFilters = () => { setSeason("summer"); setAge("all"); setAudience("all"); setActiveCategory("casual"); setSubcategory("all"); };
  return (
    <div className="w-full">
      <section className="site-container section-band">
        <Reveal>
          <p className="eyebrow">{ar ? "��������" : "Our Products"}</p>
          <h1 className="section-title mt-3">{ar ? active.ar : active.en}</h1>
        </Reveal>
        {line === "b2c" ? (
          <div className="mt-8">
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div className="max-w-xl">
                <h2 className="font-head text-2xl font-semibold sm:text-3xl">{ar ? s.titleAr : s.titleEn}</h2>
                <p className="mt-2 text-sm text-muted-foreground sm:text-base">{ar ? s.bodyAr : s.bodyEn}</p>
              </div>
              <div className="inline-flex w-full rounded-full border border-border p-1 sm:w-auto" role="group" aria-label={ar ? "������" : "Season"}>
                {(["summer", "winter"] as Season[]).map((key) => (
                  <Button key={key} variant={season === key ? "default" : "ghost"} type="button" aria-pressed={season === key}
                    onClick={() => { setSeason(key); setSubcategory("all"); }}
                    className={cn("inline-flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm transition-colors sm:flex-none sm:px-5", season === key ? "bg-primary text-primary-foreground" : "hover:bg-secondary")}>
                    {key === "summer" ? <Sun className="size-4" /> : <Snowflake className="size-4" />}
                    {key === "summer" ? (ar ? "���" : "Summer") : (ar ? "����" : "Winter")}
                  </Button>
                ))}
              </div>
            </div>
            <div className="mt-6 flex gap-2" role="tablist">
              {s.categories.map((cat) => (
                <button key={cat.key} role="tab" aria-selected={activeCategory === cat.key}
                  onClick={() => { setActiveCategory(cat.key as "casual" | "dresses"); setSubcategory("all"); }}
                  className={cn("rounded-full border px-4 py-2 text-sm font-medium transition-colors", activeCategory === cat.key ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background hover:bg-secondary")}>
                  {ar ? cat.ar : cat.en}
                  <span className="ms-1.5 text-[10px] font-normal opacity-70">{ar ? cat.fitAr : cat.fitEn}</span>
                </button>
              ))}
            </div>
            <div className={cn("mt-4 grid items-end gap-4 rounded-3xl border border-border bg-page-alt/60 p-4 sm:p-5", availableSubcategories.length > 0 ? "sm:grid-cols-[1fr_1fr_1fr_auto]" : "sm:grid-cols-[1fr_1fr_auto]")}>
              <div>
                <label id="b2c-age-label" className="mb-2 block text-sm font-semibold">{copy.age}</label>
                <Select value={age} onValueChange={(v) => { if (v === "all" || jzraAgeRanges.some((r) => r === v)) setAge(v as JzraAge | "all"); }} dir={ar ? "rtl" : "ltr"}>
                  <SelectTrigger aria-labelledby="b2c-age-label" className="h-11 rounded-full px-4 shadow-none"><SelectValue /></SelectTrigger>
                  <SelectContent className="rounded-none">
                    <SelectItem value="all">{copy.allAges}</SelectItem>
                    {jzraAgeRanges.map((r) => <SelectItem key={r} value={r}><span dir="ltr">{r}</span> {copy.years}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label id="b2c-audience-label" className="mb-2 block text-sm font-semibold">{copy.audience}</label>
                <Select value={audience} onValueChange={(v) => { if (v === "all" || v === "boys" || v === "girls") setAudience(v as JzraAudience | "all"); }} dir={ar ? "rtl" : "ltr"}>
                  <SelectTrigger aria-labelledby="b2c-audience-label" className="h-11 rounded-full px-4 shadow-none"><SelectValue /></SelectTrigger>
                  <SelectContent className="rounded-none">
                    <SelectItem value="all">{copy.allAudiences}</SelectItem>
                    <SelectItem value="boys">{copy.boys}</SelectItem>
                    <SelectItem value="girls">{copy.girls}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {availableSubcategories.length > 0 && (
                <div>
                  <label id="b2c-sub-label" className="mb-2 block text-sm font-semibold">{ar ? "�����" : "Type"}</label>
                  <Select value={subcategory} onValueChange={setSubcategory} dir={ar ? "rtl" : "ltr"}>
                    <SelectTrigger aria-labelledby="b2c-sub-label" className="h-11 rounded-full px-4 shadow-none"><SelectValue /></SelectTrigger>
                    <SelectContent className="rounded-none">
                      <SelectItem value="all">{ar ? "����" : "All types"}</SelectItem>
                      {availableSubcategories.map((sub) => (<SelectItem key={sub} value={sub}>{subcategoryLabels[sub] ? (ar ? subcategoryLabels[sub].ar : subcategoryLabels[sub].en) : sub}</SelectItem>))}
                    </SelectContent>
                  </Select>
                </div>
              )}
              <Button variant="ghost" className="h-11 w-full justify-center sm:w-auto" onClick={resetFilters}
                disabled={season === "summer" && age === "all" && audience === "all" && activeCategory === "casual" && subcategory === "all"}>
                <RotateCcw />{copy.reset}
              </Button>
            </div>
            <div aria-live="polite" className="mt-5 text-sm text-muted-foreground">{uniquePhotosCount(photos)} {copy.photos}</div>
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
              <Link to="/models">{ar ? "������ �� ���������" : "Browse all models"} <ArrowRight className="size-4 rtl:rotate-180" /></Link>
            </Button>
          </div>
        ) : (
          <B2BShowcase ar={ar} />
        )}
      </section>
    </div>
  );
}

function uniquePhotosCount(photos: JzraPhoto[]) {
  return new Set(photos.map((p) => p.image)).size;
}

