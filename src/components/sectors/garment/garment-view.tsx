import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, useMemo } from "react";
import { 
  Building2, 
  ChevronRight, 
  Download,
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
import { submitCentralForm } from "@/lib/central-form-dispatch";
import { garmentHeroData, garmentServicesDetailed, garmentServicesExpanded } from "./garment-data";

import { GarmentAboutTab } from "./tabs/garment-about-tab";
import { GarmentServicesTab } from "./tabs/garment-services-tab";
import { GarmentClientsTab } from "./tabs/garment-clients-tab";
import { GarmentProjectsTab } from "./tabs/garment-projects-tab";
import { GarmentPartnersTab } from "./tabs/garment-partners-tab";
import { GarmentCapabilitiesTab } from "./tabs/garment-capabilities-tab";
import { GarmentJoinTab } from "./tabs/garment-join-tab";
import { JoinPage } from "@/components/join/join-page";

export type GarmentTab = 
  | "about" 
  | "services" 
  | "clients" 
  | "projects" 
  | "partners" 
  | "capabilities" 
  | "join"
  | "start-project";

interface GarmentViewProps {
  tab?: GarmentTab;
}

export function GarmentSectorView({ tab = "about" }: GarmentViewProps) {
  const { language } = useLanguage();
  const ar = language === "AR";

  const validTabs: GarmentTab[] = ["about", "services", "clients", "projects", "partners", "capabilities", "join", "start-project"];
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
      descAr: "أكثر من 550 تصميمًا موثقًا عبر الأزياء النسائية والرجالية والأطفال والأطقم المتناسقة",
    },
    partners: {
      en: "Our Partners",
      ar: "شركاؤنا",
      descEn: "139 brand partners across casual, classic, kids, loungewear & soirée",
      descAr: "139 شريكًا تجاريًا عبر الكاجوال والكلاسيك والأطفال والسواريه",
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
    "start-project": {
      en: "Start Project",
      ar: "ابدأ مشروعك",
      descEn: "Submit your manufacturing brief and request a proposal",
      descAr: "قدّم متطلبات التصنيع واحصل على عرض سعر",
    },
  };

  return (
    <div className="w-full">
      {/* Sector Hero — Only displayed on About Us tab, full screen matching Construction & Environmental */}
      {(activeTab === "about" || activeTab === "clients" || activeTab === "partners") && (
        <section className="relative w-full overflow-hidden text-footer-foreground min-h-screen flex items-center">
          <img
            data-clip-reveal
            src={garmentHeroData.image}
            alt={ar ? garmentHeroData.titleAr : garmentHeroData.title}
            className="absolute inset-0 size-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-footer via-footer/80 to-footer/65" />
          <div className="site-container relative w-full py-20 sm:py-28 z-10">
            <Reveal>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
                <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                <span>{ar ? garmentHeroData.companyAr : garmentHeroData.company}</span>
              </div>

              <h1 className="mt-2 max-w-4xl font-head text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold leading-tight text-white drop-shadow-md">
                {ar ? garmentHeroData.titleAr : garmentHeroData.title}
              </h1>

              <p className={cn("mt-4 max-w-3xl font-head text-base sm:text-lg font-bold leading-relaxed text-footer-foreground/90", ar && "font-body")}>
                {ar ? garmentHeroData.subtitleAr : garmentHeroData.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild size="default" className="rounded-full bg-brand-green text-white hover:bg-brand-orange transition-all duration-300 shadow-md">
                  <Link to="/sectors/$sector" params={{ sector: "garment" }} search={{ tab: "start-project" }}>
                    <span>{ar ? "ابدأ طلب تصنيع" : "Start Manufacturing Inquiry"}</span>
                  </Link>
                </Button>

                <Button asChild size="default" className="rounded-full bg-brand-green text-white hover:bg-brand-orange transition-all duration-300 shadow-md">
                  <a
                    href={ar ? "/downloads/SBA_Apparel_Manufacturing_Profile_AR.pdf" : "/downloads/SBA_Apparel_Manufacturing_Profile_EN.pdf"}
                    download={ar ? "SBA_Apparel_Manufacturing_Profile_AR.pdf" : "SBA_Apparel_Manufacturing_Profile_EN.pdf"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="size-4 me-1.5" />
                    <span>{ar ? "تحميل الدليل الصناعي (PDF)" : "Download Manufacturing Profile (PDF)"}</span>
                  </a>
                </Button>

                <Button asChild size="default" className="rounded-full bg-brand-green text-white hover:bg-brand-orange transition-all duration-300 shadow-md">
                  <a
                    href="/downloads/SBA_Apparel_Product_Catalogue_EN.pdf"
                    download="SBA_Apparel_Product_Catalogue_EN.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="size-4 me-1.5" />
                    <span>{ar ? "كتالوج الموديلات (11 فئة)" : "Download Apparel Catalogue"}</span>
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      )}


      {/* Main Content */}

      <main className="site-container min-h-[50vh] space-y-12">
        {activeTab === "about" && <GarmentAboutTab />}
        {activeTab === "clients" && <GarmentClientsTab />}
        {activeTab === "partners" && <GarmentPartnersTab />}
        {activeTab === "services" && <GarmentServicesTab />}
        {activeTab === "projects" && <GarmentProjectsTab />}
        {activeTab === "capabilities" && <GarmentCapabilitiesTab />}
        {activeTab === "join" && <JoinPage trackId="garment" />}
        {activeTab === "start-project" && <GarmentStartProjectView />}
      </main>
    </div>
  );
}

function GarmentStartProjectView() {
  const { language } = useLanguage();
  const ar = language === "AR";
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const requestedServiceId = useRouterState({
    select: (s) => (s.location.search as Record<string, string>)["service"],
  });

  const matchedService = useMemo(() => {
    if (!requestedServiceId) return null;
    return garmentServicesExpanded.find((s) => s.id === requestedServiceId);
  }, [requestedServiceId]);

  const [form, setForm] = useState({
    // Stage 1: Product Information
    productCategory: "",
    productType: "",
    referenceImages: "",
    modelDescription: "",

    // Stage 2: Manufacturing Requirements
    fabricType: "",
    gsm: "",
    composition: "",
    sizes: [] as string[],
    colors: "",
    printingEmbroidery: [] as string[],
    labelsPackaging: [] as string[],

    // Stage 3: Order Details
    estimatedQuantity: "",
    targetPrice: "",
    currency: "USD",
    deliveryDate: "",
    destinationCountry: "",
    cooperationType: "FOB",

    // Stage 4: Customer Information
    companyName: "",
    contactPerson: "",
    jobTitle: "",
    email: "",
    phone: "",
    additionalNotes: "",
    consent: false,
    submitted: false,
    refNum: "",
  });

  useEffect(() => {
    if (matchedService) {
      setForm((p) => ({
        ...p,
        modelDescription: p.modelDescription || (ar ? `طلب دراسة وتصنيع لبرنامج: ${matchedService.titleAr}` : `Manufacturing inquiry for: ${matchedService.titleEn}`),
      }));
    }
  }, [matchedService, ar]);

  const up = (k: string, v: unknown) => setForm((p) => ({ ...p, [k]: v }));

  const categories = ar
    ? [
        "ملابس نسائية (Women's Wear)",
        "ملابس رجالية (Men's Wear)",
        "أزياء الأطفال والمواليد (Kids & Baby Wear)",
        "ملابس كاجوال يومية (Casual Wear)",
        "ملابس منزلية وبيجامات (Homewear & Loungewear)",
        "ملابس رسمية وقمصان كلاسيك (Classic & Formal Wear)",
        "ملابس رياضية وأقمشة أداء (Sportswear & Activewear)",
        "ملابس داخلية قطنية (Underwear & Intimates)",
        "أزياء سهرة ومناسبات (Evening & Occasion Wear)",
        "عبايات وأزياء محتشمة (Abayas & Modest Wear)",
        "توريد أقمشة وحلول نسيجية (Fabrics & Textile Sourcing)"
      ]
    : [
        "Women's Wear",
        "Men's Wear",
        "Kids & Baby Wear",
        "Casual Wear",
        "Homewear & Loungewear",
        "Classic Wear (Formal & Business)",
        "Sportswear & Activewear",
        "Underwear & Intimates",
        "Evening & Occasion Wear",
        "Abayas & Modest Wear",
        "Fabrics & Textile Sourcing"
      ];

  const fabricTypes = ar
    ? ["قطن مصري 100% (Single Jersey)", "قطن ليكرا (Cotton Spandex)", "بيكيه (Pique)", "إنترلوك (Interlock)", "ريب (Rib)", "ميلتون (French Terry)", "تويل (Twill Woven)", "بوبلين (Poplin Woven)", "أكسفورد (Oxford Woven)", "بوليستر رياضي (Dry-Fit)", "كتان مخلوط (Linen Blend)"]
    : ["100% Combed Cotton (Single Jersey)", "Cotton-Lycra (Cotton Spandex)", "Pique", "Interlock", "Rib Knit", "French Terry (Fleece)", "Twill Woven", "Poplin Woven", "Oxford Woven", "Performance Polyester (Dry-Fit)", "Linen-Cotton Blend"];

  const sizesList = ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "Kids Sizes (2–14Y)"];

  const embellishmentOptions = ar
    ? ["طباعة سلك سكرين بلاستيزول", "طباعة أحبار مائية صديقة للبيئة", "تطريز كمبيوتر عادي", "تطريز ثلاثي الأبعاد 3D Puff", "طباعة حرارية ديجيتال DTG", "سبلميشن رياضي", "سادة بدون طباعة"]
    : ["Plastisol Screen Print", "Water-Based Eco Print", "Flat Computer Embroidery", "3D Puff High-Density Embroidery", "DTG Digital Print", "Dye-Sublimation", "Plain / No Embellishment"];

  const packagingOptions = ar
    ? ["ليبل رقبة منسوج (Woven Label)", "طباعة حرارية داخلية (Heat Transfer)", "كارت أسعار وتعليق (Hangtag)", "ملصقات باركود مخصصة", "تكييس فردي بأكياس بولي قابلة للتحلل", "كراتين تصدير خماسية معتمدة"]
    : ["Custom Woven Neck Label", "Inner Heat-Transfer Tag", "Branded Hangtag", "Custom Barcode / SKU Stickers", "Individual Bio-Polybags", "5-Ply Master Export Cartons"];

  const cooperationTypes = [
    { id: "FOB", titleEn: "FOB Manufacturing (Full Package from yarn to export port)", titleAr: "تصنيع شامل FOB (من القماش حتى ميناء التصدير)" },
    { id: "CM", titleEn: "CM Manufacturing (Cut & Make – Client-supplied fabrics)", titleAr: "تصنيع بنظام CM (قص وتشغيل بخامات العميل)" },
    { id: "Private-Label", titleEn: "Private Label (Custom collection with your full branding)", titleAr: "علامة تجارية خاصة Private Label (هوية وتغليف مخصص)" },
    { id: "OEM", titleEn: "OEM Contract Manufacturing (Strict client specs execution)", titleAr: "تصنيع تعاقدي OEM (تنفيذ مواصفات العميل الدقيقة)" },
    { id: "ODM", titleEn: "ODM Development (Select & customize from our 2,700+ catalog)", titleAr: "تصميم مشترك ODM (اختيار وتعديل من كتالوج المجموعة)" },
  ];

  const toggleSize = (s: string) => {
    setForm((p) => ({
      ...p,
      sizes: p.sizes.includes(s) ? p.sizes.filter((x) => x !== s) : [...p.sizes, s]
    }));
  };

  const toggleEmbellishment = (e: string) => {
    setForm((p) => ({
      ...p,
      printingEmbroidery: p.printingEmbroidery.includes(e)
        ? p.printingEmbroidery.filter((x) => x !== e)
        : [...p.printingEmbroidery, e]
    }));
  };

  const togglePackaging = (pkg: string) => {
    setForm((p) => ({
      ...p,
      labelsPackaging: p.labelsPackaging.includes(pkg)
        ? p.labelsPackaging.filter((x) => x !== pkg)
        : [...p.labelsPackaging, pkg]
    }));
  };

  const handleSubmit = () => {
    const ref = "GAR-" + new Date().getFullYear() + "-" + Math.floor(1000 + Math.random() * 9000);

    submitCentralForm({
      formType: "garment_b2b",
      name: form.contactPerson,
      company: form.companyName || undefined,
      email: form.email,
      phone: form.phone,
      country: form.destinationCountry,
      sector: "garment",
      serviceOrProduct: form.productCategory || form.productType,
      message: `[Garment OEM/B2B Manufacturing Brief]\n\nProduct Category: ${form.productCategory}\nProduct Type: ${form.productType}\nEstimated Qty: ${form.estimatedQuantity}\nTarget Price: ${form.targetPrice} ${form.currency}\nCooperation: ${form.cooperationType}\nDelivery Date: ${form.deliveryDate}\nDestination: ${form.destinationCountry}\nFabric: ${form.fabricType} (${form.gsm} GSM, ${form.composition})\nSizes: ${form.sizes.join(", ")}\nEmbellishment: ${form.printingEmbroidery.join(", ")}\nPackaging: ${form.labelsPackaging.join(", ")}\nJob Title: ${form.jobTitle}\n\nModel Description / Notes:\n${form.modelDescription}\n${form.additionalNotes}`,
      metadata: {
        productCategory: form.productCategory,
        productType: form.productType,
        estimatedQuantity: form.estimatedQuantity,
        cooperationType: form.cooperationType,
        fabricType: form.fabricType,
        destinationCountry: form.destinationCountry,
        sizes: form.sizes,
      },
    }).catch(console.error);

    setForm((p) => ({ ...p, submitted: true, refNum: ref }));
  };

  if (form.submitted) {
    return (
      <div className="py-16">
        <div className="mx-auto max-w-2xl rounded-3xl border border-brand-green/40 bg-background/90 p-10 text-center backdrop-blur-2xl shadow-xl">
          <div className="mb-4 flex justify-center">
            <span className="flex size-16 items-center justify-center rounded-full bg-brand-green/10">
              <CheckCircle2 className="size-8 text-brand-green-text" />
            </span>
          </div>
          <h2 className="font-head text-2xl font-extrabold text-foreground">
            {ar ? "تم استلام طلب التصنيع والتوريد بنجاح!" : "Manufacturing Brief Successfully Received!"}
          </h2>
          <div className="my-4 inline-block rounded-xl border border-brand-green/30 bg-brand-green/10 px-4 py-2 font-mono text-sm font-bold text-brand-green-text">
            {ar ? `رقم الطلب المرجعي: ${form.refNum}` : `Reference Code: ${form.refNum}`}
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-lg mx-auto">
            {ar
              ? "تم تحويل مواصفات طلبكم إلى المكتب الفني وإدارة الإنتاج لتقييم المقايسات واستهلاك الأقمشة. سيتواصل معكم مدير حسابات التصدير بعرض سعر مبدئي وتفاصيل العينات خلال 48 ساعة عمل."
              : "Your production brief has been routed to our technical engineering office for costing and yield calculation. An export account manager will contact you with costing and sampling timelines within 48 business hours."}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`mailto:info@sami-trade.com?subject=Garment Manufacturing Brief [${form.refNum}] - ${form.companyName}&body=Reference: ${form.refNum}%0ACompany: ${form.companyName}%0ACategory: ${form.productCategory}%0AQuantity: ${form.estimatedQuantity}%0AContact: ${form.contactPerson} (${form.phone})`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3 text-xs font-bold text-white transition hover:bg-brand-orange shadow-md"
            >
              <span>{ar ? "مراسلة الإدارة التجارية بالبريد" : "Email Commercial Team"}</span>
            </a>
            <Button
              variant="outline"
              onClick={() => setForm((p) => ({ ...p, submitted: false }))}
              className="rounded-full text-xs"
            >
              {ar ? "تقديم طلب تصنيع آخر" : "Submit Another Brief"}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="mx-auto max-w-3xl mb-10 text-center">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
          <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
          <span>{ar ? "ابدأ مشروع التصنيع التعاقدي" : "Start Your Manufacturing Project"}</span>
        </div>
        <h2 className="font-head text-2xl sm:text-3xl font-extrabold text-foreground mt-2">
          {ar ? "نموذج دراسة وتكلفة طلبيات الملابس الجاهزة (B2B)" : "International Apparel Manufacturing Proposal Builder"}
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto">
          {ar
            ? "أكمل المراحل الأربعة التالية لتحديد فئات الملابس، والخامات، والكميات، ومتطلبات التعبئة والشحن للحصول على عرض سعر فني وتجاري مفصل."
            : "Complete the 4 stages below covering product specs, fabric requirements, order volume, and packaging for a comprehensive FOB/OEM quotation."}
        </p>

        {/* Progress Bar */}
        <div className="mt-6 flex items-center justify-center gap-1.5">
          {Array.from({ length: totalSteps }, (_, i) => (
            <div
              key={i}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i + 1 === step ? "w-8 bg-brand-orange" : i + 1 < step ? "w-6 bg-brand-green" : "w-4 bg-border"
              )}
            />
          ))}
        </div>
        <p className="mt-2 text-xs text-muted-foreground font-medium">
          {ar ? `المرحلة ${step} من ${totalSteps}` : `Stage ${step} of ${totalSteps}`}
        </p>
      </div>

      <div className="mx-auto max-w-3xl rounded-3xl border border-white/30 bg-background/80 p-6 sm:p-10 backdrop-blur-2xl shadow-xl">
        {matchedService && (
          <div className="mb-6 rounded-2xl border border-brand-green/40 bg-brand-green/10 p-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold text-foreground">
                {ar ? `البرنامج المختار: ${matchedService.titleAr}` : `Selected Program: ${matchedService.titleEn}`}
              </p>
              <p className="text-[11px] text-muted-foreground mt-0.5">{ar ? matchedService.leadAr : matchedService.leadEn}</p>
            </div>
            <span className="font-mono text-xs font-bold text-brand-orange shrink-0">{matchedService.number}</span>
          </div>
        )}

        {/* STAGE 1 – PRODUCT INFORMATION */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h3 className="font-head text-lg font-bold text-foreground">
                {ar ? "المرحلة 1: معلومات المنتج والتصنيف *" : "Stage 1: Product Information *"}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                {ar ? "حدد فئة ونوع الملابس والموديل المطلوب تصنيعه:" : "Select the category and describe the product to be manufactured:"}
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold text-foreground mb-2">
                {ar ? "فئة المنتج الرئيسية (Product Category) *" : "Product Category *"}
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => up("productCategory", c)}
                    className={cn(
                      "rounded-xl border px-3.5 py-1.5 text-xs transition",
                      form.productCategory === c
                        ? "border-brand-green bg-brand-green/10 text-brand-green-text font-bold"
                        : "border-border text-foreground hover:border-brand-green/60"
                    )}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-foreground mb-1">
                  {ar ? "نوع المنتج بالتحديد (Product Type) *" : "Product Type / Style Name *"}
                </label>
                <input
                  type="text"
                  value={form.productType}
                  onChange={(e) => up("productType", e.target.value)}
                  placeholder={ar ? "مثال: قميص كلاسيك سليم فت / فستان كاجوال" : "e.g. Slim-fit Formal Shirt / Oversized Tee"}
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-xs text-foreground focus:border-brand-green focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground mb-1">
                  {ar ? "روابط صور أو تصميمات مرجعية (Reference Images)" : "Reference Image Links or Model Code"}
                </label>
                <input
                  type="text"
                  value={form.referenceImages}
                  onChange={(e) => up("referenceImages", e.target.value)}
                  placeholder={ar ? "مثال: موديل JZ-2024-W01 أو رابط صورة/درايف" : "e.g. Model JZ-2024-W01 or Google Drive link"}
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-xs text-foreground focus:border-brand-green focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-foreground mb-1">
                {ar ? "وصف الموديل والتفاصيل الفنية (Model Description) *" : "Model Description & Fit Details *"}
              </label>
              <textarea
                rows={3}
                value={form.modelDescription}
                onChange={(e) => up("modelDescription", e.target.value)}
                placeholder={ar ? "صف تفاصيل القصة، الياقة، الجيوب، الأكمام، أي متطلبات فنية خاصة..." : "Describe the silhouette, collar style, pockets, stitching details, and any fit notes..."}
                className="w-full rounded-xl border border-border bg-background/60 p-3.5 text-xs text-foreground focus:border-brand-green focus:outline-none resize-none leading-relaxed"
              />
            </div>
          </div>
        )}

        {/* STAGE 2 – MANUFACTURING REQUIREMENTS */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h3 className="font-head text-lg font-bold text-foreground">
                {ar ? "المرحلة 2: متطلبات التصنيع والخامات" : "Stage 2: Manufacturing Requirements"}
              </h3>
            </div>

            <div>
              <label className="block text-xs font-bold text-foreground mb-1.5">
                {ar ? "نوع القماش المفضل (Fabric Type) *" : "Fabric Type *"}
              </label>
              <div className="flex flex-wrap gap-2">
                {fabricTypes.map((ft) => (
                  <button
                    key={ft}
                    type="button"
                    onClick={() => up("fabricType", ft)}
                    className={cn(
                      "rounded-lg border px-3 py-1.5 text-xs transition",
                      form.fabricType === ft
                        ? "border-brand-orange bg-brand-orange/10 text-brand-orange font-bold"
                        : "border-border text-foreground hover:border-brand-orange/60"
                    )}
                  >
                    {ft}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-foreground mb-1">
                  {ar ? "وزن القماش (GSM)" : "Fabric Weight (GSM)"}
                </label>
                <input
                  type="text"
                  value={form.gsm}
                  onChange={(e) => up("gsm", e.target.value)}
                  placeholder={ar ? "مثال: 180 GSM / 240 GSM" : "e.g. 180 GSM / 220 GSM"}
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-xs text-foreground focus:border-brand-green focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground mb-1">
                  {ar ? "التركيب النسيجي (Composition)" : "Composition (e.g. 95% Cotton 5% Elastane)"}
                </label>
                <input
                  type="text"
                  value={form.composition}
                  onChange={(e) => up("composition", e.target.value)}
                  placeholder={ar ? "مثال: 95% قطن 5% ليكرا أو 100% قطن ممشط" : "e.g. 100% Combed Cotton / 60% Cotton 40% Poly"}
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-xs text-foreground focus:border-brand-green focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-foreground mb-1.5">
                {ar ? "المقاسات المطلوبة (Sizes) - اختر ما ينطبق:" : "Required Sizes (select all applicable):"}
              </label>
              <div className="flex flex-wrap gap-2">
                {sizesList.map((sz) => (
                  <button
                    key={sz}
                    type="button"
                    onClick={() => toggleSize(sz)}
                    className={cn(
                      "rounded-lg border px-3 py-1.5 text-xs font-mono font-bold transition",
                      form.sizes.includes(sz)
                        ? "border-brand-green bg-brand-green/10 text-brand-green-text"
                        : "border-border text-foreground hover:border-brand-green"
                    )}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-foreground mb-1">
                {ar ? "الألوان المستهدفة (Colors)" : "Target Colors (Pantone or basic shades)"}
              </label>
              <input
                type="text"
                value={form.colors}
                onChange={(e) => up("colors", e.target.value)}
                placeholder={ar ? "مثال: أسود، أبيض، كحلي، أو أكواد Pantone TCX" : "e.g. Black, White, Navy Blue, or Pantone TCX codes"}
                className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-xs text-foreground focus:border-brand-green focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-foreground mb-1.5">
                {ar ? "الطباعة والتطريز (Printing & Embroidery):" : "Printing & Embroidery Options:"}
              </label>
              <div className="flex flex-wrap gap-2">
                {embellishmentOptions.map((emb) => (
                  <button
                    key={emb}
                    type="button"
                    onClick={() => toggleEmbellishment(emb)}
                    className={cn(
                      "rounded-lg border px-3 py-1.5 text-xs transition",
                      form.printingEmbroidery.includes(emb)
                        ? "border-brand-orange bg-brand-orange/10 text-brand-orange font-bold"
                        : "border-border text-foreground hover:border-brand-orange/60"
                    )}
                  >
                    {emb}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-foreground mb-1.5">
                {ar ? "الليبل والتغليف (Labels & Packaging):" : "Labels & Packaging Requirements:"}
              </label>
              <div className="flex flex-wrap gap-2">
                {packagingOptions.map((pkg) => (
                  <button
                    key={pkg}
                    type="button"
                    onClick={() => togglePackaging(pkg)}
                    className={cn(
                      "rounded-lg border px-3 py-1.5 text-xs transition",
                      form.labelsPackaging.includes(pkg)
                        ? "border-brand-green bg-brand-green/10 text-brand-green-text font-bold"
                        : "border-border text-foreground hover:border-brand-green/60"
                    )}
                  >
                    {pkg}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STAGE 3 – ORDER DETAILS */}
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <h3 className="font-head text-lg font-bold text-foreground">
                {ar ? "المرحلة 3: تفاصيل وحجم الطلبية" : "Stage 3: Order Details & Commercial Terms"}
              </h3>
            </div>

            <div>
              <label className="block text-xs font-bold text-foreground mb-1.5">
                {ar ? "نموذج التعاون الصناعي (Cooperation Type) *" : "Cooperation Model *"}
              </label>
              <div className="grid gap-2 sm:grid-cols-2">
                {cooperationTypes.map((cp) => (
                  <button
                    key={cp.id}
                    type="button"
                    onClick={() => up("cooperationType", cp.id)}
                    className={cn(
                      "rounded-xl border p-3 text-xs text-start transition",
                      form.cooperationType === cp.id
                        ? "border-brand-green bg-brand-green/10 text-brand-green-text font-bold shadow-sm"
                        : "border-border text-foreground hover:border-brand-green/60"
                    )}
                  >
                    <span className="font-bold block">{cp.id}</span>
                    <span className="text-muted-foreground text-[11px] block mt-0.5">{ar ? cp.titleAr : cp.titleEn}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-foreground mb-1">
                  {ar ? "الكمية التقديرية الإجمالية (Estimated Quantity) *" : "Estimated Total Quantity *"}
                </label>
                <input
                  type="text"
                  required
                  value={form.estimatedQuantity}
                  onChange={(e) => up("estimatedQuantity", e.target.value)}
                  placeholder={ar ? "مثال: 1,500 قطعة (أو 500 قطعة لكل لون)" : "e.g. 1,500 pcs (500 pcs/color)"}
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-xs text-foreground focus:border-brand-green focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground mb-1">
                  {ar ? "السعر المستهدف للقطعة (Target Price)" : "Target Unit Price (Optional)"}
                </label>
                <input
                  type="text"
                  value={form.targetPrice}
                  onChange={(e) => up("targetPrice", e.target.value)}
                  placeholder={ar ? "مثال: $8.50 - $12.00 FOB" : "e.g. $8.50 – $11.00 USD FOB"}
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-xs text-foreground focus:border-brand-green focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground mb-1">
                  {ar ? "تاريخ التسليم المستهدف (Delivery Date) *" : "Target Delivery Date *"}
                </label>
                <input
                  type="date"
                  value={form.deliveryDate}
                  onChange={(e) => up("deliveryDate", e.target.value)}
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-xs text-foreground focus:border-brand-green focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground mb-1">
                  {ar ? "دولة وجهة التصدير (Destination Country) *" : "Destination Country / Port *"}
                </label>
                <input
                  type="text"
                  value={form.destinationCountry}
                  onChange={(e) => up("destinationCountry", e.target.value)}
                  placeholder={ar ? "مثال: فرنسا، إيطاليا، السعودية، الإمارات، مصر" : "e.g. France, Italy, Saudi Arabia, UAE, USA"}
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-xs text-foreground focus:border-brand-green focus:outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* STAGE 4 – CUSTOMER INFORMATION */}
        {step === 4 && (
          <div className="space-y-6">
            <div>
              <h3 className="font-head text-lg font-bold text-foreground">
                {ar ? "المرحلة 4: بيانات العميل والشركة *" : "Stage 4: Customer & Brand Information *"}
              </h3>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-foreground mb-1">{ar ? "اسم الشركة / العلامة التجارية *" : "Company / Brand Name *"}</label>
                <input
                  type="text"
                  required
                  value={form.companyName}
                  onChange={(e) => up("companyName", e.target.value)}
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-xs text-foreground focus:border-brand-green focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground mb-1">{ar ? "اسم مسؤول المشتريات / التواصل *" : "Contact Person Name *"}</label>
                <input
                  type="text"
                  required
                  value={form.contactPerson}
                  onChange={(e) => up("contactPerson", e.target.value)}
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-xs text-foreground focus:border-brand-green focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground mb-1">{ar ? "المسمى الوظيفي" : "Job Title / Role"}</label>
                <input
                  type="text"
                  value={form.jobTitle}
                  onChange={(e) => up("jobTitle", e.target.value)}
                  placeholder={ar ? "مثال: مدير المشتريات / مؤسس البراند" : "e.g. Head of Sourcing / Brand Founder"}
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-xs text-foreground focus:border-brand-green focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground mb-1">{ar ? "رقم الهاتف / واتساب *" : "Phone / WhatsApp *"}</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => up("phone", e.target.value)}
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-xs text-foreground focus:border-brand-green focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-foreground mb-1">{ar ? "البريد الإلكتروني التجاري *" : "Corporate Email *"}</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => up("email", e.target.value)}
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-xs text-foreground focus:border-brand-green focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-foreground mb-1">{ar ? "ملاحظات إضافية ومرفقات" : "Additional Notes & Tech Pack Attachments"}</label>
              <textarea
                rows={3}
                value={form.additionalNotes}
                onChange={(e) => up("additionalNotes", e.target.value)}
                placeholder={ar ? "أي متطلبات فنية إضافية، شروط اعتماد العينات، أو تفاصيل الشحن والتصدير..." : "Any additional technical requirements, sample approval milestones, or export shipping notes..."}
                className="w-full rounded-xl border border-border bg-background/60 p-3.5 text-xs text-foreground focus:border-brand-green focus:outline-none resize-none"
              />
            </div>

            {/* Tech pack attachment notice */}
            <div className="rounded-xl border border-dashed border-border p-4 text-center bg-secondary/20">
              <p className="text-xs text-muted-foreground">
                {ar
                  ? "ملاحظة: يمكنك إرسال ملفات الـ Tech Pack والباترونات بصيغ DXF أو PDF مباشرة عبر البريد الإلكتروني بعد التواصل الأول وتأكيد كود الطلب."
                  : "Note: Master Tech Packs and DXF pattern files can be delivered directly via email following coordinator contact."}
              </p>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <input
                type="checkbox"
                id="gar-consent"
                checked={form.consent}
                onChange={(e) => up("consent", e.target.checked)}
                className="rounded border-border"
              />
              <label htmlFor="gar-consent" className="text-xs text-muted-foreground cursor-pointer">
                {ar ? "أوافق على معالجة بيانات الطلب والتواصل من قِبل إدارة التصدير بمجموعة سامي بن عياد." : "I consent to the processing of this brief by the export division of Sami Bin Ayyad Group."}
              </label>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="mt-8 flex items-center justify-between border-t border-border/50 pt-5">
          {step > 1 ? (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setStep((s) => s - 1)}
              className="rounded-full text-xs"
            >
              {ar ? "السابق" : "Previous"}
            </Button>
          ) : <div />}

          {step < totalSteps ? (
            <Button
              size="sm"
              onClick={() => setStep((s) => s + 1)}
              className="rounded-full bg-brand-green text-white hover:bg-brand-orange text-xs font-bold px-6"
            >
              <span>{ar ? "التالي" : "Next"}</span>
              <ArrowRight className="size-3.5 ms-1 rtl:rotate-180" />
            </Button>
          ) : (
            <Button
              size="sm"
              onClick={handleSubmit}
              disabled={!form.companyName || !form.email || !form.phone}
              className="rounded-full bg-brand-orange text-white hover:bg-brand-green text-xs font-bold px-8 shadow-md"
            >
              <Send className="size-3.5 me-1.5" />
              <span>{ar ? "إرسال طلب دراسة التصنيع" : "Submit Manufacturing Brief"}</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
