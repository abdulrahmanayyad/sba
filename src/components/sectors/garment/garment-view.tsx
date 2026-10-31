import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { 
  Building2, 
  ChevronRight, 
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
import { garmentHeroData } from "./garment-data";

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
      descAr: "أكثر من 550 تصميمًا موثقًا عبر الحريمي والرجالي والأطفال والكابلز",
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
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-1.5 text-xs font-bold tracking-wide text-white backdrop-blur-md">
                <span className="size-2 rounded-full bg-brand-orange animate-pulse" />
                <span>{ar ? garmentHeroData.companyAr : garmentHeroData.company}</span>
              </div>

              <h1 className="mt-2 max-w-4xl font-head text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold leading-tight text-white drop-shadow-md">
                {ar ? garmentHeroData.titleAr : garmentHeroData.title}
              </h1>

              <p className={cn("mt-4 max-w-3xl font-head text-base sm:text-lg font-bold leading-relaxed text-footer-foreground/90", ar && "font-body")}>
                {ar ? garmentHeroData.subtitleAr : garmentHeroData.subtitle}
              </p>
            </Reveal>
          </div>
        </section>
      )}


      {/* Main Content */}

      <main className="site-container min-h-[50vh] space-y-12">
        {(activeTab === "about" || activeTab === "clients" || activeTab === "partners") && (
          <div className="space-y-16">
            <GarmentAboutTab />
            <div className="border-t border-border/60 pt-12">
              <GarmentClientsTab />
            </div>
            <div className="border-t border-border/60 pt-12">
              <GarmentPartnersTab />
            </div>
          </div>
        )}
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
  const [form, setForm] = useState({
    productType: [] as string[],
    cooperationType: "",
    quantity: "",
    fabricNotes: "",
    company: "",
    contact: "",
    email: "",
    phone: "",
    country: "",
    notes: "",
    consent: false,
    submitted: false,
    refNum: "",
  });
  const up = (k: string, v: unknown) => setForm((p) => ({ ...p, [k]: v }));

  const productTypes = ar
    ? ["ملابس حريمي", "ملابس رجالي", "ملابس أطفال", "قمصان", "بدل سواريه", "أقمشة", "أخرى"]
    : ["Women's Wear", "Men's Wear", "Kids Wear", "Shirts", "Soirée", "Fabrics", "Other"];
  const cooperationTypes = ar
    ? ["CM (تصنيع بخامات العميل)", "FOB (تصنيع شامل الخامات)", "Private Label", "OEM"]
    : ["CM (Cut & Make)", "FOB (Full Package)", "Private Label", "OEM"];

  const toggleProduct = (t: string) =>
    setForm((p) => ({ ...p, productType: p.productType.includes(t) ? p.productType.filter((x) => x !== t) : [...p.productType, t] }));

  const handleSubmit = () => {
    const ref = "GAR-" + Date.now().toString(36).toUpperCase();
    setForm((p) => ({ ...p, submitted: true, refNum: ref }));
  };

  if (form.submitted) {
    return (
      <div className="py-16">
        <div className="mx-auto max-w-2xl rounded-3xl border border-brand-green/40 bg-background/80 p-10 text-center backdrop-blur-2xl shadow-xl">
          <div className="mb-4 flex justify-center">
            <span className="flex size-16 items-center justify-center rounded-full bg-brand-green/10">
              <Send className="size-8 text-brand-green-text" />
            </span>
          </div>
          <h2 className="font-head text-2xl font-extrabold text-foreground">
            {ar ? "تم استلام طلبك!" : "Request Received!"}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            {ar
              ? `رقم المرجع: ${form.refNum} — سيتواصل معك فريقنا خلال 48 ساعة عمل.`
              : `Reference: ${form.refNum} — Our team will contact you within 48 business hours.`}
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`mailto:info@sami-trade.com?subject=Garment Inquiry ${form.refNum}&body=Product: ${form.productType.join(", ")}%0AContact: ${form.contact} — ${form.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-orange"
            >
              {ar ? "راسلنا مباشرة" : "Email Us"}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-6 py-3 text-sm font-bold text-foreground transition hover:border-brand-green"
            >
              <MessageCircle className="size-4" />
              <span>WhatsApp</span>
            </a>
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
          <span>{ar ? "ابدأ مشروعك" : "Start Your Project"}</span>
        </div>
        <h2 className="font-head text-2xl sm:text-3xl font-extrabold text-foreground mt-2">
          {ar ? "أخبرنا بما تريد تصنيعه" : "Tell Us What You Want to Manufacture"}
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          {ar
            ? "أكمل النموذج وسيتواصل معك فريقنا خلال 48 ساعة بعرض سعر مفصّل."
            : "Complete the form and our team will reach out within 48 hours with a detailed quote."}
        </p>
        <div className="mt-6 flex items-center justify-center gap-1">
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
        <p className="mt-2 text-xs text-muted-foreground">{ar ? `الخطوة ${step} من ${totalSteps}` : `Step ${step} of ${totalSteps}`}</p>
      </div>

      <div className="mx-auto max-w-3xl rounded-3xl border border-white/30 bg-background/80 p-8 sm:p-10 backdrop-blur-2xl shadow-xl">
        {step === 1 && (
          <div className="space-y-5">
            <h3 className="font-head text-lg font-bold text-foreground">{ar ? "نوع المنتج" : "Product Type"}</h3>
            <div className="flex flex-wrap gap-2">
              {productTypes.map((t) => (
                <button key={t} type="button" onClick={() => toggleProduct(t)}
                  className={cn("rounded-full border px-4 py-1.5 text-xs font-semibold transition",
                    form.productType.includes(t) ? "border-brand-orange bg-brand-orange/10 text-brand-orange" : "border-border text-foreground hover:border-brand-green")}>
                  {t}
                </button>
              ))}
            </div>
            <div>
              <label className="block text-xs font-bold text-foreground mb-1">{ar ? "نوع التعاون" : "Cooperation Type"}</label>
              <div className="flex flex-wrap gap-2">
                {cooperationTypes.map((c) => (
                  <button key={c} type="button" onClick={() => up("cooperationType", c)}
                    className={cn("rounded-full border px-4 py-1.5 text-xs font-semibold transition",
                      form.cooperationType === c ? "border-brand-green bg-brand-green/10 text-brand-green-text" : "border-border text-foreground hover:border-brand-green")}>
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="space-y-5">
            <h3 className="font-head text-lg font-bold text-foreground">{ar ? "تفاصيل الطلب" : "Order Details"}</h3>
            <div>
              <label className="block text-xs font-bold text-foreground mb-1">{ar ? "الكمية المتوقعة" : "Expected Quantity"}</label>
              <input className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-sm text-foreground focus:border-brand-green focus:outline-none"
                value={form.quantity} onChange={(e) => up("quantity", e.target.value)}
                placeholder={ar ? "مثال: 500 قطعة شهريًا" : "e.g. 500 pieces/month"} />
            </div>
            <div>
              <label className="block text-xs font-bold text-foreground mb-1">{ar ? "تفاصيل الخامات والمواصفات" : "Fabric & Specifications"}</label>
              <textarea rows={4} className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-sm text-foreground focus:border-brand-green focus:outline-none resize-none"
                value={form.fabricNotes} onChange={(e) => up("fabricNotes", e.target.value)}
                placeholder={ar ? "نوع القماش، المقاسات، الألوان، المواصفات الخاصة..." : "Fabric type, sizes, colors, special requirements..."} />
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="space-y-5">
            <h3 className="font-head text-lg font-bold text-foreground">{ar ? "بيانات التواصل" : "Contact Information"}</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { k: "company", labelAr: "الشركة / العلامة التجارية *", labelEn: "Company / Brand *", ph: ar ? "اسم الشركة" : "Company name", span: true },
                { k: "contact", labelAr: "اسم التواصل *", labelEn: "Contact Name *", ph: ar ? "الاسم الكامل" : "Full name", span: false },
                { k: "email", labelAr: "البريد الإلكتروني *", labelEn: "Business Email *", ph: "name@company.com", span: false },
                { k: "phone", labelAr: "رقم الجوال", labelEn: "Phone Number", ph: "+20 10x xxx xxxx", span: false },
                { k: "country", labelAr: "الدولة", labelEn: "Country", ph: ar ? "مصر" : "Egypt", span: false },
              ].map(({ k, labelAr, labelEn, ph, span }) => (
                <div key={k} className={span ? "sm:col-span-2" : ""}>
                  <label className="block text-xs font-bold text-foreground mb-1">{ar ? labelAr : labelEn}</label>
                  <input className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-sm text-foreground focus:border-brand-green focus:outline-none"
                    value={(form as unknown as Record<string, string>)[k]} onChange={(e) => up(k, e.target.value)} placeholder={ph}
                    type={k === "email" ? "email" : "text"} />
                </div>
              ))}
            </div>
          </div>
        )}
        {step === 4 && (
          <div className="space-y-5">
            <h3 className="font-head text-lg font-bold text-foreground">{ar ? "المراجعة والإرسال" : "Review & Submit"}</h3>
            <div className="rounded-2xl border border-border/60 bg-secondary/30 p-5 space-y-3 text-sm">
              <div className="flex justify-between gap-2">
                <span className="text-muted-foreground">{ar ? "نوع المنتج:" : "Product:"}</span>
                <span className="font-semibold text-foreground text-end">{form.productType.join(", ") || "—"}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-muted-foreground">{ar ? "التعاون:" : "Cooperation:"}</span>
                <span className="font-semibold text-foreground">{form.cooperationType || "—"}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-muted-foreground">{ar ? "الكمية:" : "Quantity:"}</span>
                <span className="font-semibold text-foreground">{form.quantity || "—"}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-muted-foreground">{ar ? "جهة التواصل:" : "Contact:"}</span>
                <span className="font-semibold text-foreground">{form.contact || "—"} — {form.email || "—"}</span>
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-foreground mb-1">{ar ? "ملاحظات إضافية" : "Additional Notes"}</label>
              <textarea rows={3} className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-sm text-foreground focus:border-brand-green focus:outline-none resize-none"
                value={form.notes} onChange={(e) => up("notes", e.target.value)}
                placeholder={ar ? "أي ملاحظات أو متطلبات إضافية..." : "Any additional notes or requirements..."} />
            </div>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" checked={form.consent} onChange={(e) => up("consent", e.target.checked)} className="mt-1 size-4 accent-brand-green" />
              <span className="text-xs text-muted-foreground leading-relaxed">
                {ar ? "أوافق على مشاركة بياناتي مع فريق مجموعة سامي بن عياد للتواصل بشأن هذا الطلب." : "I agree to share my information with Sami Bin Ayyad Group for communication regarding this request."}
              </span>
            </label>
            <div className="rounded-xl border border-border/60 bg-secondary/20 p-4 text-xs text-muted-foreground">
              <p>{ar ? "📧 ساعات العمل: السبت - الخميس: 9:00 ص - 7:00 م (توقيت القاهرة)" : "📧 Working Hours: Sat – Thu: 9:00 AM – 7:00 PM (Cairo Time)"}</p>
              <p className="mt-1">{ar ? "info@sami-trade.com" : "📧 info@sami-trade.com"}</p>
            </div>
          </div>
        )}

        <div className="mt-8 flex items-center justify-between gap-4">
          <Button variant="outline" size="sm" onClick={() => setStep((p) => Math.max(1, p - 1))} disabled={step === 1} className="rounded-full px-6">
            {ar ? "السابق" : "Back"}
          </Button>
          {step < totalSteps ? (
            <Button size="sm" onClick={() => setStep((p) => Math.min(totalSteps, p + 1))} className="rounded-full bg-brand-green hover:bg-brand-orange text-white px-8">
              {ar ? "التالي" : "Next"}
            </Button>
          ) : (
            <Button size="sm" onClick={handleSubmit} disabled={!form.consent || !form.productType.length || !form.contact || !form.email}
              className="rounded-full bg-brand-orange hover:bg-brand-green text-white px-8">
              {ar ? "إرسال الطلب" : "Submit Request"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}


