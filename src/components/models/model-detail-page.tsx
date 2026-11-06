import { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  Download, 
  Mail, 
  MessageCircle, 
  Package, 
  Send, 
  ShieldCheck, 
  Shirt, 
  Sparkles, 
  ZoomIn 
} from "lucide-react";

import { Reveal } from "@/components/home/reveal";
import { SectionBadge } from "@/components/site/section-badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/language-context";
import { allProducts, type ProductItem } from "@/lib/all-products-data";
import { submitCentralForm } from "@/lib/central-form-dispatch";
import { WHATSAPP_URL } from "@/lib/process-steps";
import { cn } from "@/lib/utils";
import { getSubcategoryLabel } from "./models-page";

interface ModelDetailPageProps {
  code: string;
}

export function ModelDetailPage({ code }: ModelDetailPageProps) {
  const { language } = useLanguage();
  const ar = language === "AR";

  // Find model from production library
  const modelItem = useMemo<ProductItem | null>(() => {
    const found = allProducts.find((p) => p.code.toLowerCase() === code.toLowerCase());
    if (found) return found;
    return null;
  }, [code]);

  // Form states
  const [buyerName, setBuyerName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState(ar ? "المملكة العربية السعودية" : "Saudi Arabia");
  const [quantity, setQuantity] = useState("500");
  const [targetDate, setTargetDate] = useState("");
  const [fabricPreference, setFabricPreference] = useState(
    ar ? "100% قطن مصري ممشط (Single Jersey)" : "100% Combed Egyptian Cotton"
  );
  const [customizationType, setCustomizationType] = useState<string[]>(["woven_labels"]);
  const [notes, setNotes] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedResult, setSubmittedResult] = useState<{
    referenceCode: string;
    mailtoUrl: string;
    whatsappUrl: string;
  } | null>(null);

  const fallbackModel: ProductItem = {
    id: `custom-${code}`,
    code: code.toUpperCase(),
    image: "/BG/Apparel Manufacturing/Apparel Manufacturing Home Page.jpg",
    category: "summer",
    subcategory: "Casual",
    age: "All-Age",
  };

  const currentModel = modelItem || fallbackModel;
  const subcategoryAr = getSubcategoryLabel(currentModel.subcategory, true);
  const subcategoryDisplay = ar ? subcategoryAr : currentModel.subcategory;

  const toggleCustomization = (item: string) => {
    setCustomizationType((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await submitCentralForm({
        formType: "quote_request_model",
        formTitleEn: `B2B Manufacturing Quotation: Model ${currentModel.code}`,
        formTitleAr: `طلب عرض أسعار تصنيع: موديل ${currentModel.code}`,
        sector: "garment",
        applicant: {
          fullName: buyerName,
          company,
          email,
          phone,
          country,
        },
        modelMeta: {
          code: currentModel.code,
          image: currentModel.image,
          category: currentModel.category,
          subcategory: currentModel.subcategory,
          age: currentModel.age,
          fabric: fabricPreference,
          moq: 300,
        },
        details: {
          targetQuantity: quantity,
          targetDeliveryDate: targetDate || "Flexible",
          preferredFabric: fabricPreference,
          customizationOptions: customizationType,
          additionalNotes: notes,
          cooperationModel: "FOB / Private Label",
        },
      });

      setSubmittedResult({
        referenceCode: res.referenceCode,
        mailtoUrl: res.emailNotification.mailtoUrl,
        whatsappUrl: res.whatsappUrl,
      });
    } catch (err) {
      console.error("Quote submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full pb-20">
      {/* 1. Header Navigation Breadcrumb */}
      <section className="site-container pt-8 pb-4">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs font-semibold text-muted-foreground"
        >
          <Link to="/models" className="hover:text-brand-orange transition-colors">
            {ar ? "كتالوج الموديلات (+2,700)" : "Apparel Model Library"}
          </Link>
          <ChevronRight className="size-3.5 rtl:rotate-180" />
          <span className="text-foreground font-mono font-bold">{currentModel.code}</span>
        </nav>
      </section>

      {/* 2. Main Model Showcase & Quotation Section */}
      <main className="site-container py-6">
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          {/* Left Column: Model Image Showcase (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            <Reveal>
              <div className="glass-card overflow-hidden rounded-3xl border border-white/50 bg-background/80 p-4 shadow-xl backdrop-blur-2xl">
                {/* Image Container with 3:4 High-Fashion Ratio */}
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-secondary/40 flex items-center justify-center">
                  <img
                    src={currentModel.image}
                    alt={currentModel.code}
                    className="size-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-3 start-3">
                    <span className="rounded-full bg-black/75 px-3 py-1 font-mono text-xs font-bold text-white shadow-md backdrop-blur-md border border-white/20">
                      {currentModel.code}
                    </span>
                  </div>
                  <div className="absolute bottom-3 end-3 rounded-full bg-black/60 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-md">
                    <span>{subcategoryDisplay}</span>
                    {currentModel.age && <span> • {currentModel.age} {ar ? "سنوات" : "yrs"}</span>}
                  </div>
                </div>

                {/* Production Guarantee Badges */}
                <div className="mt-4 grid grid-cols-2 gap-2 text-center text-xs">
                  <div className="rounded-xl border border-border/60 bg-secondary/40 p-2.5">
                    <span className="block font-mono font-bold text-brand-orange">MOQ: 300 {ar ? "قطعة" : "Pcs"}</span>
                    <span className="text-[10px] text-muted-foreground">{ar ? "حد أدنى مرن للطلب" : "Flexible Minimum"}</span>
                  </div>
                  <div className="rounded-xl border border-border/60 bg-secondary/40 p-2.5">
                    <span className="block font-mono font-bold text-brand-green">AQL 2.5</span>
                    <span className="text-[10px] text-muted-foreground">{ar ? "فحص جودة تصدير" : "Inspection Standard"}</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Technical Manufacturing Dossier Snippet */}
            <div className="glass-card rounded-3xl border border-white/40 bg-background/70 p-6 backdrop-blur-xl space-y-3 text-xs">
              <h4 className="font-head text-xs font-bold uppercase tracking-wider text-brand-green-text">
                {ar ? "المواصفات الفنية المعتمدة للموديل:" : "Certified Production Specifications:"}
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex justify-between border-b border-border/40 pb-1.5">
                  <span>{ar ? "كود التصميم المرجعي:" : "Model Reference:"}</span>
                  <span className="font-mono font-bold text-foreground">{currentModel.code}</span>
                </li>
                <li className="flex justify-between border-b border-border/40 pb-1.5">
                  <span>{ar ? "الفئة والتصنيف:" : "Garment Category:"}</span>
                  <span className="font-semibold text-foreground">{subcategoryDisplay}</span>
                </li>
                <li className="flex justify-between border-b border-border/40 pb-1.5">
                  <span>{ar ? "الموسم الموصى به:" : "Recommended Season:"}</span>
                  <span className="font-semibold text-foreground">
                    {currentModel.category === "winter" ? (ar ? "خريف وشتاء" : "Autumn/Winter") : (ar ? "ربيع وصيف" : "Spring/Summer")}
                  </span>
                </li>
                <li className="flex justify-between border-b border-border/40 pb-1.5">
                  <span>{ar ? "تطابق ألوان بانتون:" : "Color Customization:"}</span>
                  <span className="font-semibold text-foreground">{ar ? "مطابقة مختبرية (Lab-Dips)" : "Pantone Lab-Dips"}</span>
                </li>
                <li className="flex justify-between">
                  <span>{ar ? "نمط التوريد:" : "Export Terms:"}</span>
                  <span className="font-semibold text-foreground">FOB Alexandria / CIF Worldwide</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Dedicated B2B Quote Request Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl border border-white/50 bg-background/85 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl">
              <div className="mb-6">
                <SectionBadge title={ar ? "طلب تسعير ومقايسة تصنيع" : "B2B Price Quotation Request"} />
                <h1 className="mt-2 font-head text-2xl sm:text-3xl font-extrabold text-foreground">
                  {ar
                    ? `طلب عرض سعر مخصص: موديل ${currentModel.code}`
                    : `Request Manufacturing Quote: Style ${currentModel.code}`}
                </h1>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {ar
                    ? "أدخل بيانات شركتك والكميات والمواصفات المستهدفة لهذا الموديل، وسيتواصل معك مدير حسابات التصدير بعرض سعر مبدئي وتفاصيل عينات الـ PP خلال 24–48 ساعة عمل."
                    : "Submit your brand details, required volumes, and target specifications for this design. Our export account manager will provide official FOB costing and PP sample timelines within 24–48 business hours."}
                </p>
              </div>

              {submittedResult ? (
                /* Success State with Reference Code and Direct Channels */
                <div className="rounded-3xl border border-brand-green/40 bg-brand-green/10 p-8 text-center space-y-4">
                  <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-brand-green/20">
                    <CheckCircle2 className="size-8 text-brand-green" />
                  </div>
                  <h3 className="font-head text-xl sm:text-2xl font-extrabold text-foreground">
                    {ar ? "تم تسجيل طلب عرض السعر بنجاح!" : "Quotation Request Registered Successfully!"}
                  </h3>
                  <div className="inline-block rounded-xl border border-brand-green/40 bg-brand-green/20 px-4 py-2 font-mono text-sm font-bold text-brand-green-text">
                    {ar ? `الرقم المرجعي: ${submittedResult.referenceCode}` : `Reference: ${submittedResult.referenceCode}`}
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                    {ar
                      ? `تم تحويل طلبك الخاص بالموديل (${currentModel.code}) إلى إدارة الإنتاج والمكتب الفني. تم إرسال إشعار فوري لفريق التصدير.`
                      : `Your quotation brief for style (${currentModel.code}) has been routed to the technical costing desk. Management has been notified.`}
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={submittedResult.mailtoUrl}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-2.5 text-xs font-bold text-white transition hover:bg-brand-orange shadow-md"
                    >
                      <Mail className="size-4" />
                      <span>{ar ? "إرسال نسخة للإدارة بالبريد" : "Send Copy via Email"}</span>
                    </a>
                    <a
                      href={submittedResult.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-green/40 bg-background/80 px-6 py-2.5 text-xs font-bold text-foreground transition hover:bg-brand-green/10"
                    >
                      <MessageCircle className="size-4 text-brand-green" />
                      <span>WhatsApp Direct</span>
                    </a>
                  </div>

                  <div className="pt-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSubmittedResult(null)}
                      className="text-xs text-muted-foreground hover:text-foreground"
                    >
                      {ar ? "تقديم طلب تسعير لموديل آخر" : "Submit Another Model Request"}
                    </Button>
                  </div>
                </div>
              ) : (
                /* RFQ Form */
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-foreground mb-1.5">
                        {ar ? "الاسم الكريم / مسؤول المشتريات *" : "Contact Full Name *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={buyerName}
                        onChange={(e) => setBuyerName(e.target.value)}
                        placeholder={ar ? "مثال: م. أحمد عبد العزيز" : "e.g. John Smith"}
                        className="w-full rounded-2xl border border-border bg-background/70 px-4 py-2.5 text-xs sm:text-sm text-foreground focus:border-brand-green focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-foreground mb-1.5">
                        {ar ? "اسم الشركة / العلامة التجارية (Brand) *" : "Company / Brand Name *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder={ar ? "مثال: متجر أو براند للأزياء" : "e.g. Acme Fashion Label"}
                        className="w-full rounded-2xl border border-border bg-background/70 px-4 py-2.5 text-xs sm:text-sm text-foreground focus:border-brand-green focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-foreground mb-1.5">
                        {ar ? "البريد الإلكتروني للعمل *" : "Work Email *"}
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="buyer@brand.com"
                        className="w-full rounded-2xl border border-border bg-background/70 px-4 py-2.5 text-xs sm:text-sm text-foreground focus:border-brand-green focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-foreground mb-1.5">
                        {ar ? "رقم الهاتف / واتساب للتواصل *" : "Phone / WhatsApp Direct *"}
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+966 50 123 4567"
                        className="w-full rounded-2xl border border-border bg-background/70 px-4 py-2.5 text-xs sm:text-sm text-foreground focus:border-brand-green focus:outline-none font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-foreground mb-1.5">
                        {ar ? "الدولة / ميناء الوصول *" : "Destination Country *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full rounded-2xl border border-border bg-background/70 px-4 py-2.5 text-xs sm:text-sm text-foreground focus:border-brand-green focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-foreground mb-1.5">
                        {ar ? "الكمية التقديرية (قطعة) *" : "Target Quantity (Pcs) *"}
                      </label>
                      <input
                        type="number"
                        min="300"
                        step="50"
                        required
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="w-full rounded-2xl border border-border bg-background/70 px-4 py-2.5 text-xs sm:text-sm text-foreground focus:border-brand-green focus:outline-none font-mono"
                      />
                      <span className="text-[10px] text-muted-foreground mt-0.5 block">
                        {ar ? "الحد الأدنى 300 قطعة" : "MOQ: 300 Pcs"}
                      </span>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-foreground mb-1.5">
                        {ar ? "تاريخ التسليم المستهدف" : "Target Delivery Date"}
                      </label>
                      <input
                        type="date"
                        value={targetDate}
                        onChange={(e) => setTargetDate(e.target.value)}
                        className="w-full rounded-2xl border border-border bg-background/70 px-3 py-2 text-xs sm:text-sm text-foreground focus:border-brand-green focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">
                      {ar ? "نوع وتركيب القماش المفضل" : "Preferred Fabric Composition"}
                    </label>
                    <select
                      value={fabricPreference}
                      onChange={(e) => setFabricPreference(e.target.value)}
                      className="w-full rounded-2xl border border-border bg-background/70 px-4 py-2.5 text-xs sm:text-sm text-foreground focus:border-brand-green focus:outline-none"
                    >
                      <option value="100% Combed Egyptian Cotton">{ar ? "قطن مصري ممشط 100% (Single Jersey)" : "100% Combed Egyptian Cotton"}</option>
                      <option value="Cotton Lycra (95% Cotton / 5% Spandex)">{ar ? "قطن ليكرا (95% قطن / 5% سباندكس)" : "Cotton Lycra (95% Cotton / 5% Spandex)"}</option>
                      <option value="Pique Knit (Polo Grade)">{ar ? "بيكيه بولو فاخر (Pique Knit)" : "Pique Knit (Polo Grade)"}</option>
                      <option value="French Terry / Fleece">{ar ? "ميلتون قطني شتوي (French Terry)" : "French Terry / Fleece"}</option>
                      <option value="100% Poplin / Twill Woven">{ar ? "أقمشة قمصان بوبلين وتويل منسوجة" : "100% Poplin / Twill Woven"}</option>
                      <option value="Custom Sourcing">{ar ? "توفير خامة خاصة بمواصفات العميل" : "Custom Client Sourcing"}</option>
                    </select>
                  </div>

                  {/* Customization checkboxes */}
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-2">
                      {ar ? "الخدمات الإضافية وتجهيز العلامة الخاصة (Private Label):" : "Private Label & Finishing Options:"}
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[
                        { id: "woven_labels", ar: "ليبل منسوج بالهوية", en: "Custom Woven Labels" },
                        { id: "hangtags", ar: "كارت أسعار وهانغ تاج", en: "Branded Hangtags" },
                        { id: "embroidery_print", ar: "طباعة أو تطريز مخصص", en: "Screen Print / Embroidery" },
                        { id: "polybags", ar: "تكييس فردي مطبوع", en: "Custom Polybags" },
                        { id: "barcodes", ar: "باركود وترميز المنتجات", en: "UPC / Barcode Stickers" },
                        { id: "master_cartons", ar: "كراتين تصدير معتمدة", en: "Export Master Cartons" },
                      ].map((item) => (
                        <label
                          key={item.id}
                          className={cn(
                            "flex items-center gap-2 rounded-xl border p-2.5 text-xs font-medium cursor-pointer transition-all",
                            customizationType.includes(item.id)
                              ? "border-brand-green bg-brand-green/10 text-foreground font-bold"
                              : "border-border bg-secondary/30 text-muted-foreground hover:bg-secondary/60"
                          )}
                        >
                          <input
                            type="checkbox"
                            checked={customizationType.includes(item.id)}
                            onChange={() => toggleCustomization(item.id)}
                            className="size-3.5 accent-brand-green"
                          />
                          <span>{ar ? item.ar : item.en}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">
                      {ar ? "ملاحظات إضافية ومواصفات تفصيلية" : "Additional Notes & Sizing Distribution"}
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder={
                        ar
                          ? "اكتب هنا تفاصيل المقاسات، الألوان المطلوبة، أو أي متطلبات خاصة للتصنيع والتغليف..."
                          : "Specify sizes breakdown (e.g. S-M-L-XL), color pantones, or specific packaging instructions..."
                      }
                      className="w-full rounded-2xl border border-border bg-background/70 p-4 text-xs sm:text-sm text-foreground focus:border-brand-green focus:outline-none leading-relaxed"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="w-full rounded-full bg-brand-green hover:bg-brand-orange text-white font-head font-bold shadow-lg transition-all duration-300 py-3.5"
                    >
                      <Send className="size-4 me-2" />
                      <span>
                        {isSubmitting
                          ? (ar ? "جاري تسجيل الطلب وإرسال الإشعار..." : "Routing Quotation Request...")
                          : (ar ? `إرسال طلب تسعير موديل (${currentModel.code})` : `Submit Quotation Request for (${currentModel.code})`)}
                      </span>
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
