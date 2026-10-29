import { useState } from "react";
import { 
  Building2, 
  CheckCircle2, 
  Clock, 
  FileText, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Phone, 
  Send, 
  Shirt, 
  Sparkles 
} from "lucide-react";

import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/language-context";
import { WHATSAPP_URL } from "@/lib/process-steps";

export function GarmentJoinTab() {
  const { language } = useLanguage();
  const ar = language === "AR";

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    email: "",
    phone: "",
    country: "",
    destination: "",
    category: "women",
    description: "",
    quantity: "",
    fabric: "",
    targetPrice: "",
    deliveryDate: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
    }, 800);
  };

  return (
    <div className="space-y-16 py-8">
      <Reveal>
        <div className="max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
            <span>{ar ? "انضم إلينا واطلب عرض سعر" : "Join Us & Request Quotation"}</span>
          </div>
          <h2 className="mt-2 font-head text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {ar ? "أخبرنا بما تريد تصنيعه" : "Tell Us What You Wish to Manufacture"}
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed sm:text-lg">
            {ar
              ? "سواء كنت تطلق علامة تجارية جديدة، أو تطور مجموعة أزياء، أو تبحث عن شريك للتصنيع بنظام Private Label أو FOB، فإن فريقنا مستعد لمراجعة متطلباتك ومناقشة الحل التصنيعي المناسب."
              : "Whether launching a new label, developing a seasonal capsule, or seeking a reliable Private Label / FOB production partner, our engineering team is ready to analyze your specs."}
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          {/* RFQ Form */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-10 lg:col-span-8">
            {formSubmitted ? (
              <div className="py-16 text-center">
                <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-brand-orange/15 text-brand-orange">
                  <CheckCircle2 className="size-8" />
                </div>
                <h3 className="mt-4 font-head text-2xl font-bold text-foreground">
                  {ar ? "تم إرسال طلبك بنجاح!" : "Quotation Request Sent Successfully!"}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                  {ar
                    ? "شكرًا لتواصلك مع قطاع تصنيع الملابس في مجموعة سامي بن عياد. سيقوم فريقنا التجاري والفني بمراجعة طلبك والتواصل معك خلال 24 ساعة."
                    : "Thank you for contacting SBA Garment Division. Our technical merchandising team will review your specifications and contact you within 24 business hours."}
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="mt-6"
                  onClick={() => setFormSubmitted(false)}
                >
                  {ar ? "إرسال طلب آخر" : "Submit Another Request"}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                      {ar ? "الاسم بالكامل *" : "Full Name *"}
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={ar ? "مثال: أحمد مصطفى" : "e.g. John Doe"}
                      className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-brand-orange focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                      {ar ? "اسم الشركة أو العلامة التجارية *" : "Company / Brand Name *"}
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.brand}
                      onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                      placeholder={ar ? "اسم علامتك التجارية" : "Brand or business name"}
                      className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-brand-orange focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                      {ar ? "البريد الإلكتروني *" : "Email Address *"}
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@brand.com"
                      className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-brand-orange focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                      {ar ? "رقم الهاتف / WhatsApp *" : "Phone / WhatsApp *"}
                    </label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+20 1..."
                      className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-brand-orange focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                      {ar ? "الدولة *" : "Country *"}
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder={ar ? "مصر / السعودية / فرنسا..." : "Country of operation"}
                      className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-brand-orange focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                      {ar ? "دولة أو ميناء التسليم" : "Delivery Destination / Port"}
                    </label>
                    <input
                      type="text"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      placeholder={ar ? "ميناء الوصول أو المدينة" : "Destination port or city"}
                      className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-brand-orange focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                      {ar ? "نوع المنتج *" : "Product Category *"}
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-brand-orange focus:outline-none"
                    >
                      <option value="women">{ar ? "ملابس حريمي ومحتشمة" : "Women's & Modestwear"}</option>
                      <option value="men">{ar ? "ملابس رجالية وكاجوال" : "Men's Apparel"}</option>
                      <option value="shirts">{ar ? "قمصان كلاسيك" : "Classic Shirts"}</option>
                      <option value="kids">{ar ? "ملابس أطفال ومواليد" : "Children's Wear"}</option>
                      <option value="fob">{ar ? "برنامج FOB متكامل" : "Turnkey FOB Program"}</option>
                      <option value="fabrics">{ar ? "أقمشة وصباغة B2B" : "Textile Supply & Dyeing"}</option>
                      <option value="other">{ar ? "أخرى / مخصص" : "Other / Custom"}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                      {ar ? "الكمية المتوقعة *" : "Expected Order Qty *"}
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      placeholder={ar ? "مثال: 1,000 قطعة" : "e.g. 1,000 pcs"}
                      className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-brand-orange focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                      {ar ? "الخامة المطلوبة" : "Required Fabric / Material"}
                    </label>
                    <input
                      type="text"
                      value={formData.fabric}
                      onChange={(e) => setFormData({ ...formData, fabric: e.target.value })}
                      placeholder={ar ? "قطن، كتان، سنجل جيرسيه..." : "Cotton, Poplin, Jersey..."}
                      className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-brand-orange focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                      {ar ? "السعر المستهدف (اختياري)" : "Target Unit Price (Optional)"}
                    </label>
                    <input
                      type="text"
                      value={formData.targetPrice}
                      onChange={(e) => setFormData({ ...formData, targetPrice: e.target.value })}
                      placeholder={ar ? "بالدولار أو الجنيه" : "In USD, EUR, or EGP"}
                      className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-brand-orange focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                      {ar ? "موعد التسليم المطلوب" : "Required Delivery Date"}
                    </label>
                    <input
                      type="date"
                      value={formData.deliveryDate}
                      onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
                      className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-brand-orange focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                    {ar ? "وصف الموديل والمتطلبات الفنية أو رابط الـ Tech Pack" : "Style Description, Tech Pack Link or Details"}
                  </label>
                  <textarea
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder={ar ? "أضف تفاصيل التصميم، المقاسات، نوع التغليف، أو رابط مجلد المواصفات الفنية..." : "Describe silhouette, measurement specs, packing rules, or provide a cloud link to your tech pack..."}
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-brand-orange focus:outline-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="w-full text-base rounded-full bg-brand-green hover:bg-brand-orange text-white font-head font-bold shadow-md transition-all py-3.5 hover:scale-[1.01] active:scale-95"
                >
                  {loading ? (
                    <span>{ar ? "جاري الإرسال..." : "Sending Request..."}</span>
                  ) : (
                    <>
                      <Send className="size-4 me-2 rtl:rotate-180" />
                      <span>{ar ? "إرسال طلب عرض السعر" : "Submit Quotation Request"}</span>
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Direct Contacts & Fast Inquiry */}
          <div className="space-y-6 lg:col-span-4">
            {/* Direct WhatsApp Box */}
            <div className="rounded-3xl border border-white/40 bg-background/80 p-6 md:p-8 shadow-sm backdrop-blur-2xl transition-all duration-300 hover:shadow-xl hover:border-brand-green/50 hover:scale-[1.01]">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-[#25D366]/15 text-[#25D366]">
                <MessageCircle className="size-6" />
              </div>
              <h3 className="mt-4 font-head text-xl font-bold text-foreground">
                {ar ? "تواصل مباشر عبر واتساب" : "Direct WhatsApp Hotline"}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {ar
                  ? "للاستفسارات العاجلة، مناقشة العينات، أو التنسيق السريع مع مدير الحسابات التجارية."
                  : "For immediate assistance, sample dispatching, or quick consultations with our merchandising team."}
              </p>
              <Button asChild size="lg" className="mt-6 w-full rounded-full bg-[#25D366] text-white hover:bg-[#20ba59] font-head font-bold shadow-sm transition-all hover:scale-105 active:scale-95">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4 me-2" />
                  {ar ? "محادثة فورية واتساب" : "Chat on WhatsApp"}
                </a>
              </Button>
            </div>

            {/* Division Coordinates */}
            <div className="rounded-3xl border border-white/40 bg-background/80 p-6 md:p-8 space-y-4 shadow-sm backdrop-blur-xl">
              <h4 className="font-head text-base font-bold text-foreground">
                {ar ? "بيانات قطاع الملابس" : "Garment Division Office"}
              </h4>

              <div className="flex items-start gap-3 text-xs text-muted-foreground">
                <MapPin className="size-4 shrink-0 text-brand-orange mt-0.5" />
                <span>
                  {ar
                    ? "المنطقة الصناعية، جمهورية مصر العربية"
                    : "Industrial Area, Arab Republic of Egypt"}
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <Clock className="size-4 shrink-0 text-brand-orange" />
                <span>{ar ? "الأحد - الخميس: 9:00 ص - 5:00 م" : "Sun - Thu: 9:00 AM - 5:00 PM (Cairo Time)"}</span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}


