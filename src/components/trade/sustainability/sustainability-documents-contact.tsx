// Section 15 & Section 16: Documents Center & Contact Sustainability Sector
// SAMI BIN AYYAD GROUP — Global Sustainability & Environmental Opportunities

import React from "react";
import { FileText, Download, ShieldCheck, Mail, Phone, MapPin, Clock, MessageSquare, ArrowUpRight } from "lucide-react";
import { SUSTAINABILITY_DOCUMENTS } from "@/lib/sustainability-trade-data";

interface SustainabilityDocumentsContactProps {
  ar: boolean;
}

export const SustainabilityDocumentsContact: React.FC<SustainabilityDocumentsContactProps> = ({ ar }) => {
  return (
    <div className="space-y-12">
      {/* ======================================================== */}
      {/* SECTION 15: DOCUMENTS & RESEARCH CENTER (مركز الوثائق والدراسات) */}
      {/* ======================================================== */}
      <section id="sustainability-documents" className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green border border-brand-green/20 text-xs font-semibold mb-2">
              <FileText className="w-3.5 h-3.5" />
              <span>{ar ? "القسم 15: مركز الوثائق والدراسات" : "Section 15: Documents & Research Center"}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              {ar ? "وثائق، أدلة تشريعية، وأوراق عمل قطاع الاستدامة" : "Official Environmental Documents, Guides & Studies"}
            </h2>
            <p className="text-slate-300 text-sm mt-1 max-w-3xl">
              {ar
                ? "مكتبة رقمية تضم وثائق مؤسسية معتمدة، أدلة الامتثال البيئي، ودراسات فنية واقتصادية مفتوحة للشركاء والمستثمرين."
                : "Approved corporate repository offering legal compliance guides, sector briefs, and technical feasibility papers for partners and investors."}
            </p>
          </div>
          <div className="text-xs text-slate-300 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-green" />
            <span>{ar ? "وثائق رسمية محدثة 2025-2026" : "Official Documents Updated 2025-2026"}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SUSTAINABILITY_DOCUMENTS.map((doc) => (
            <div
              key={doc.id}
              className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-brand-green/40 hover:bg-white/[0.07] transition-all duration-300 shadow-xl"
            >
              <div>
                {/* Header tags */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-brand-green/15 text-brand-green border border-brand-green/25">
                    {ar ? doc.categoryAr : doc.categoryEn}
                  </span>
                  <span className="text-[11px] text-slate-300 font-mono bg-white/5 px-2 py-0.5 rounded">
                    {doc.fileFormat} • {doc.fileSize}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white group-hover:text-brand-green transition-colors leading-snug mb-2">
                  {ar ? doc.titleAr : doc.titleEn}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {ar ? doc.descriptionAr : doc.descriptionEn}
                </p>
              </div>

              {/* Download Action */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] text-slate-300 font-mono">{doc.id}</span>
                <a
                  href={doc.downloadUrl}
                  download
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold !bg-brand-green !text-white hover:!bg-brand-orange hover:!text-white transition-all shadow-md"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{ar ? "تحميل الوثيقة" : "Download File"}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Request Specialized Feasibility / Whitepaper Banner */}
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-green/20 text-brand-green flex items-center justify-center shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <span>
              {ar
                ? "هل تبحث عن دراسة جدوى قطاعية أو تقرير امتثال مخصص لمشروعك الصناعي؟ يمكنك طلب دراسة مخصصة عبر نموذج الاستفسارات."
                : "Need a tailored environmental feasibility study or compliance review for your facility? Request a custom brief via our inquiry form."}
            </span>
          </div>
          <a
            href="#sustainability-forms"
            className="shrink-0 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
          >
            {ar ? "طلب دراسة مخصصة" : "Request Custom Brief"}
          </a>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 16: CONTACT SUSTAINABILITY SECTOR (تواصل مع قطاع الاستدامة) */}
      {/* ======================================================== */}
      <section id="sustainability-contact" className="space-y-6 pt-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green border border-brand-green/20 text-xs font-semibold mb-2">
              <Phone className="w-3.5 h-3.5" />
              <span>{ar ? "القسم 16: التواصل المباشر" : "Section 16: Direct Sector Contact"}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              {ar ? "قنوات التواصل مع قطاع الاستدامة والبيئة" : "Contact the Sustainability & Environmental Division"}
            </h2>
            <p className="text-slate-300 text-sm mt-1 max-w-3xl">
              {ar
                ? "قنوات تواصل مهنية ومخصصة للمؤسسات الحكومية، مطوري المشروعات، المستثمرين الصناعيين، والشركاء التكنولوجيين."
                : "Dedicated business communication channels for government entities, project developers, industrial investors, and technology partners."}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Official Corporate Emails */}
          <div className="p-6 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-green/15 text-brand-green flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">
                {ar ? "البريد الإلكتروني المتخصص" : "Specialized Inboxes"}
              </h3>
              <p className="text-xs text-slate-300">
                {ar
                  ? "يتم توجيه المراسلات لفريق الخبراء والاستشاريين المختص مع التزام بالرد خلال 24–48 ساعة عمل."
                  : "Routed to specialized sector directors with guaranteed SLA response within 24–48 business hours."}
              </p>
            </div>
            <div className="space-y-2 pt-2 border-t border-white/10 text-xs">
              <div className="flex flex-col">
                <span className="text-slate-300 text-[10px]">{ar ? "استشارات وتحالفات المشروعات:" : "Projects & Consortia:"}</span>
                <a href="mailto:sustainability@samibinayyad.com" className="text-white hover:text-brand-green font-mono transition-colors">
                  sustainability@samibinayyad.com
                </a>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-300 text-[10px]">{ar ? "المكتب التجاري والفرص الدولية:" : "Global Trade & Opportunities:"}</span>
                <a href="mailto:trade@samibinayyad.com" className="text-white hover:text-brand-green font-mono transition-colors">
                  trade@samibinayyad.com
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Phone & Instant Coordination */}
          <div className="p-6 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-green/15 text-brand-green flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">
                {ar ? "الهاتف والمحادثة المباشرة" : "Phone & Instant Messaging"}
              </h3>
              <p className="text-xs text-slate-300">
                {ar
                  ? "خطوط مباشرة لاستقبال استفسارات المشروعات العاجلة وتنسيق اجتماعات الشراكة الفنية."
                  : "Direct coordinator desk for urgent project queries and high-priority partnership alignments."}
              </p>
            </div>
            <div className="space-y-2 pt-2 border-t border-white/10 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">{ar ? "الهاتف المؤسسي الموحد:" : "Central Phone:"}</span>
                <a href="tel:+201017042079" className="text-white hover:text-brand-green font-mono">
                  +20 101 704 2079
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">{ar ? "واتساب قطاع الاستدامة:" : "Sustainability WhatsApp:"}</span>
                <a
                  href="https://wa.me/201017042079?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%AA%D9%88%D8%A7%D8%B5%D9%84%20%D9%85%D8%B9%20%D9%82%D8%B7%D8%A7%D8%B9%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%AF%D8%A7%D9%85%D8%A9%20%D9%88%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D8%A9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-green hover:underline font-mono inline-flex items-center gap-1"
                >
                  <span>Chat Direct</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: Regional Hub & Working Hours */}
          <div className="p-6 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-green/15 text-brand-green flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">
                {ar ? "المقر وساعات العمل الرسمية" : "Regional Office & Hours"}
              </h3>
              <p className="text-xs text-slate-300">
                {ar
                  ? "مجموعة سامي بن عياد — مصر والمملكة العربية السعودية، ونقاط الارتباط الميداني الإقليمية."
                  : "Sami Bin Ayyad Group — Regional Headquarters (Egypt & KSA) & Project Operations Desk."}
              </p>
            </div>
            <div className="space-y-2 pt-2 border-t border-white/10 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-3.5 h-3.5 text-brand-green shrink-0" />
                <span>{ar ? "الأحد – الخميس: 9:00 ص – 5:00 م" : "Sun – Thu: 9:00 AM – 5:00 PM (GMT+2)"}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-green shrink-0" />
                <span>{ar ? "اتفاقيات سرية البيانات (NDA) متاحة قبل بدء التداول الفني" : "NDA execution available prior to deep technical sharing"}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

