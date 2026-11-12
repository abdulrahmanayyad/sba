import { Link } from "@tanstack/react-router";
import {
  Clock,
  ExternalLink,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { WHATSAPP_URL } from "@/lib/process-steps";

export interface ContactDirectorySidebarProps {
  ar: boolean;
}

/**
 * Shared corporate entity directory, map, and specialized channel links
 * displayed alongside the contact, consultation, complaints, and opportunity forms.
 */
export function ContactDirectorySidebar({ ar }: ContactDirectorySidebarProps) {
  return (
    <div className="lg:col-span-5 space-y-6">
      {/* Corporate Identification Card */}
      <div className="rounded-3xl border border-white/20 bg-background/80 p-6 sm:p-8 backdrop-blur-2xl shadow-xl space-y-6">
        <div className="border-b border-border/60 pb-5">
          <span className="text-[11px] font-bold uppercase tracking-wider text-brand-orange block">
            {ar ? "الكيان المؤسسي الرسمي" : "Official Corporate Entity"}
          </span>
          <h2 className="font-head text-xl sm:text-2xl font-bold text-foreground mt-1">
            {ar ? "مجموعة سامي بن عياد" : "SAMI BIN AYYAD GROUP"}
          </h2>
        </div>

        {/* Contact Channels */}
        <div className="space-y-4">
          {/* Address */}
          <div className="flex items-start gap-3.5">
            <div className="size-10 rounded-2xl bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0 mt-0.5">
              <MapPin className="size-5" />
            </div>
            <div>
              <h3 className="font-head text-xs font-bold uppercase text-brand-orange">
                {ar ? "المقر الرئيسي" : "Headquarters Address"}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-foreground/90 leading-relaxed mt-0.5">
                {ar
                  ? "المكتب رقم 212، الطابق الثاني، المبنى رقم 7، مجمع العلوم والابتكار بالجامعة البريطانية في مصر، المربع رقم 36، الحي الخامس، مدينة الشروق، القاهرة، مصر 11837"
                  : "Office No. 212, 2nd Floor, Building No.7, The Science & Innovation Park at The British University in Egypt (BUE), Block No.36, Fifth District, El Sherouk City, Cairo, Egypt 11837"}
              </p>
            </div>
          </div>

          {/* Telephone */}
          <div className="flex items-start gap-3.5">
            <div className="size-10 rounded-2xl bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
              <Phone className="size-5" />
            </div>
            <div>
              <h3 className="font-head text-xs font-bold uppercase text-brand-orange">
                {ar ? "أرقام الهاتف المباشرة" : "Telephone Lines"}
              </h3>
              <div className="mt-1 flex flex-col gap-1 text-sm font-bold font-mono">
                <a href="tel:+201222238072" className="hover:text-brand-orange transition-colors" dir="ltr">
                  +20 12 222 380 72
                </a>
                <a href="tel:+201222238073" className="hover:text-brand-orange transition-colors" dir="ltr">
                  +20 12 222 380 73
                </a>
              </div>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex items-start gap-3.5">
            <div className="size-10 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
              <MessageCircle className="size-5" />
            </div>
            <div>
              <h3 className="font-head text-xs font-bold uppercase text-brand-orange">
                {ar ? "واتساب التجاري للأعمال" : "Business WhatsApp"}
              </h3>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-1 text-xs sm:text-sm font-bold text-emerald-600 hover:text-emerald-700"
              >
                <span dir="ltr">+20 12 222 380 72</span>
                <ExternalLink className="size-3.5" />
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3.5">
            <div className="size-10 rounded-2xl bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
              <Mail className="size-5" />
            </div>
            <div>
              <h3 className="font-head text-xs font-bold uppercase text-brand-orange">
                {ar ? "البريد الإلكتروني المعتمد" : "Official Email"}
              </h3>
              <a
                href="mailto:info@sami-trade.com"
                className="mt-1 block text-sm font-bold hover:text-brand-orange transition-colors font-mono"
              >
                info@sami-trade.com
              </a>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex items-start gap-3.5">
            <div className="size-10 rounded-2xl bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
              <Clock className="size-5" />
            </div>
            <div>
              <h3 className="font-head text-xs font-bold uppercase text-brand-orange">
                {ar ? "ساعات العمل الرسمية" : "Official Business Hours"}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-foreground/90 mt-0.5">
                {ar
                  ? "الأحد – الخميس: 9:00 صباحًا – 5:00 مساءً (توقيت القاهرة)"
                  : "Sunday – Thursday: 9:00 AM – 5:00 PM (Cairo Time)"}
              </p>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="pt-4 border-t border-border/60">
          <span className="text-xs font-bold text-muted-foreground block mb-3">
            {ar ? "قنوات التواصل الاجتماعي الرسمية:" : "Official Social Channels:"}
          </span>
          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="size-10 rounded-2xl bg-brand-green/10 text-brand-green flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all shadow-sm"
            >
              <Facebook className="size-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="size-10 rounded-2xl bg-brand-green/10 text-brand-green flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all shadow-sm"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="size-10 rounded-2xl bg-brand-green/10 text-brand-green flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all shadow-sm"
            >
              <Linkedin className="size-4" />
            </a>
          </div>
        </div>

        {/* Google Maps Visual Interactive Locator */}
        <div className="pt-2">
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-border shadow-inner bg-secondary/80">
            <iframe
              title={ar ? "موقع مجموعة سامي بن عياد" : "Sami Bin Ayyad Group Location"}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.6918816654273!2d31.60338787555627!3d30.103023474895692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145817c76899144d%3A0xe54d6faebdf98687!2sThe%20British%20University%20in%20Egypt%20(BUE)!5e0!3m2!1sen!2seg!4v1700000000000!5m2!1sen!2seg"
              className="size-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-2 start-2 bg-background/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-foreground border border-border shadow-sm flex items-center gap-1.5">
              <MapPin className="size-3 text-brand-orange" />
              <span>BUE Science & Innovation Park</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links to Other Contact Channels */}
      <div className="rounded-3xl border border-white/20 bg-background/60 p-6 backdrop-blur-xl shadow-md space-y-3">
        <h3 className="font-head text-sm font-bold text-foreground">
          {ar ? "قنوات اتصال متخصصة ومجانية:" : "Specialized Portals & Consultations:"}
        </h3>
        <div className="grid gap-2">
          <Link
            to="/request-consultation"
            className="flex items-center justify-between p-3.5 rounded-2xl border border-brand-green/40 bg-brand-green/10 hover:bg-brand-green/20 hover:border-brand-green/60 transition-all text-xs font-bold shadow-xs"
          >
            <span className="font-bold text-brand-green">
              {ar ? "طلب استشارة مجانية" : "Request Free Consultation"}
            </span>
            <span className="text-brand-green font-bold">{ar ? "احجز الآن ←" : "Request Free →"}</span>
          </Link>
          <Link
            to="/contact/complaints"
            className="flex items-center justify-between p-3 rounded-2xl border border-border bg-secondary/40 hover:bg-brand-orange/10 hover:border-brand-orange/40 transition-all text-xs font-bold"
          >
            <span className="text-foreground">
              {ar ? "بوابة الشكاوى والمقترحات" : "Complaints & Suggestions Portal"}
            </span>
            <span className="text-brand-orange">{ar ? "فتح البوابة ←" : "Open →"}</span>
          </Link>
          <Link
            to="/contact/opportunities"
            className="flex items-center justify-between p-3 rounded-2xl border border-border bg-secondary/40 hover:bg-secondary/70 transition-all text-xs font-bold"
          >
            <span className="text-foreground">
              {ar ? "اعرض فرصتك الاستثمارية" : "Submit Your Opportunity"}
            </span>
            <span className="text-brand-green">{ar ? "تقديم الفرصة ←" : "Submit →"}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

