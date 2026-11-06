import React, { useState } from "react";
import { 
  Briefcase, 
  Send, 
  CheckCircle2, 
  Clock, 
  Package, 
  MapPin, 
  CreditCard, 
  Ship, 
  Sparkles,
  X,
  FileCheck2,
  Check
} from "lucide-react";
import { TRADE_OPPORTUNITIES } from "@/lib/trade-data";
import { submitCentralForm } from "@/lib/central-form-dispatch";
import { Button } from "@/components/ui/button";

interface TradeOpportunitiesSectionProps {
  ar?: boolean;
}

export function TradeOpportunitiesSection({ ar = true }: TradeOpportunitiesSectionProps) {
  const [selectedOpp, setSelectedOpp] = useState<typeof TRADE_OPPORTUNITIES[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form states
  const [supplierName, setSupplierName] = useState("");
  const [supplierCompany, setSupplierCompany] = useState("");
  const [supplierEmail, setSupplierEmail] = useState("");
  const [supplierPhone, setSupplierPhone] = useState("");
  const [supplierPriceQuote, setSupplierPriceQuote] = useState("");
  const [supplierNotes, setSupplierNotes] = useState("");

  const handleOpenProposal = (opp: typeof TRADE_OPPORTUNITIES[0]) => {
    setSelectedOpp(opp);
    setIsSubmitted(false);
    setIsModalOpen(true);
  };

  const handleSubmitProposal = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedOpp) {
      submitCentralForm({
        formType: "trade_supplier_bid",
        name: supplierName,
        company: supplierCompany || undefined,
        email: supplierEmail,
        phone: supplierPhone,
        country: selectedOpp.destinationMarketEn,
        sector: "trade",
        serviceOrProduct: `${selectedOpp.id} - ${selectedOpp.productEn}`,
        message: `[Trade Supply Proposal / Bid]\n\nOpportunity: ${selectedOpp.id} - ${selectedOpp.productEn} (${selectedOpp.productAr})\nDestination Market: ${selectedOpp.destinationMarketEn} / ${selectedOpp.destinationMarketAr}\nQuantity Requested: ${selectedOpp.quantityEn}\nProposed Price Quote: ${supplierPriceQuote}\n\nSupplier Notes:\n${supplierNotes}`,
        metadata: {
          opportunityId: selectedOpp.id,
          productEn: selectedOpp.productEn,
          productAr: selectedOpp.productAr,
          priceQuote: supplierPriceQuote,
        },
      }).catch(console.error);
    }

    setIsSubmitted(true);
  };

  return (
    <div id="trade-opportunities" className="w-full space-y-8">
      {/* Section Header */}
      <div className="rounded-3xl border border-white/15 bg-gradient-to-r from-background/80 via-background/60 to-emerald-950/20 p-6 backdrop-blur-2xl">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <Briefcase className="size-4" />
              {ar ? "بوابة الشراكة والتوريد التجاري" : "Commercial Supply & Partnership Gate"}
            </span>
            <h3 className="text-2xl font-black text-foreground mt-1">
              {ar ? "الفرص التجارية ومتطلبات الشراء الدولية المفتوحة للتوريد" : "International Trade Opportunities & Bidding"}
            </h3>
            <p className="text-xs text-muted-foreground mt-1 max-w-2xl">
              {ar
                ? "فرص تجارية وطلبات شراء موثقة من مشترين ومستوردين دوليين، تتيح المجموعة للمنتجين والمزارعين والموردين المؤهلين تقديم عروض أسعارهم وتوفير الكميات المطلوبة وفق المواصفات الدولية."
                : "Documented commercial buyer requirements. Qualified suppliers and producers can submit competitive supply proposals and capacity quotes."}
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-emerald-300">
            <span className="size-2 rounded-full bg-brand-orange animate-pulse shrink-0" />
            <span className="text-xs font-bold">
              {ar ? "6 فرص تجارية كبرى متاحة للتعاقد" : "6 Major Trade Opportunities"}
            </span>
          </div>
        </div>
      </div>

      {/* Opportunities Cards Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {TRADE_OPPORTUNITIES.map((opp) => (
          <div
            key={opp.id}
            className="group relative flex flex-col justify-between rounded-3xl border border-white/15 bg-background/60 p-6 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-brand-orange hover:bg-background/80 hover:shadow-2xl hover:-translate-y-1"
          >
            <div>
              {/* Top Meta */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs font-bold text-brand-orange">
                  {opp.id}
                </span>
                <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[11px] font-bold text-emerald-400 border border-emerald-500/20">
                  {opp.statusBadge}
                </span>
              </div>

              {/* Product & Destination */}
              <div className="mt-3.5 space-y-1">
                <h4 className="text-lg font-bold text-foreground group-hover:text-brand-orange transition-colors">
                  {ar ? opp.productAr : opp.productEn}
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                  <MapPin className="size-3.5 text-brand-orange shrink-0" />
                  <span>{ar ? opp.destinationMarketAr : opp.destinationMarketEn}</span>
                </div>
              </div>

              {/* Quantity Highlight Box */}
              <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-3.5">
                <span className="text-[11px] font-semibold text-muted-foreground block mb-0.5">
                  {ar ? "الكمية المطلوبة للتوريد:" : "Required Supply Quantity:"}
                </span>
                <p className="text-base font-black text-emerald-400">
                  {ar ? opp.quantityRequested : opp.quantityEn}
                </p>
              </div>

              {/* Specs & Conditions */}
              <div className="mt-3.5 space-y-2 text-xs">
                <div>
                  <span className="font-semibold text-muted-foreground block text-[11px]">
                    {ar ? "المواصفات الفنية:" : "Specifications:"}
                  </span>
                  <p className="text-foreground/90 leading-relaxed font-medium">
                    {ar ? opp.specificationsAr : opp.specificationsEn}
                  </p>
                </div>

                <div>
                  <span className="font-semibold text-muted-foreground block text-[11px]">
                    {ar ? "التعبئة المطلوبة:" : "Packaging:"}
                  </span>
                  <p className="text-foreground/80">
                    {ar ? opp.packagingAr : opp.packagingEn}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
                  <div className="rounded-xl bg-white/5 p-2">
                    <span className="text-muted-foreground block text-[10px]">{ar ? "شروط الشحن:" : "Terms:"}</span>
                    <span className="font-bold text-foreground">{opp.shippingTerms}</span>
                  </div>
                  <div className="rounded-xl bg-white/5 p-2">
                    <span className="text-muted-foreground block text-[10px]">{ar ? "الدفع:" : "Payment:"}</span>
                    <span className="font-bold text-foreground">{opp.paymentTerms}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6 pt-4 border-t border-border/40">
              <Button
                type="button"
                onClick={() => handleOpenProposal(opp)}
                className="w-full rounded-full text-xs font-bold shadow-md cursor-pointer"
              >
                <Send className="size-3.5 me-2" />
                <span>{ar ? "قدّم عرض توريد لهذه الفرصة" : "Submit Supply Proposal"}</span>
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Proposal Submission Modal */}
      {isModalOpen && selectedOpp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl rounded-3xl border border-white/20 bg-background/95 p-6 shadow-2xl backdrop-blur-2xl max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute end-4 top-4 rounded-full p-2 text-muted-foreground hover:bg-white/10 hover:text-foreground"
            >
              <X className="size-5" />
            </button>

            {isSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                  <Check className="size-8" />
                </div>
                <h4 className="text-xl font-bold text-foreground">
                  {ar ? "تم استلام عرض التوريد بنجاح!" : "Supply Proposal Received!"}
                </h4>
                <p className="text-xs text-muted-foreground max-w-md mx-auto leading-relaxed">
                  {ar
                    ? `شكراً لك. تم تسجيل عرضكم الخاص بالفرصة (${selectedOpp.id} - ${selectedOpp.productAr}) وسيتم مراجعته والتواصل معكم من قبل إدارة التجارة والتوريدات الدولية للمجموعة.`
                    : `Your quote for opportunity (${selectedOpp.id}) has been registered and our trade procurement team will review and contact you shortly.`}
                </p>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-full bg-brand-orange px-6 py-2 text-xs font-bold text-white shadow-md"
                >
                  {ar ? "إغلاق النافذة" : "Close"}
                </button>
              </div>
            ) : (
              <div>
                <div className="border-b border-white/10 pb-4 mb-4">
                  <span className="font-mono text-xs font-bold text-brand-orange">
                    {selectedOpp.id}
                  </span>
                  <h4 className="text-lg font-bold text-foreground mt-1">
                    {ar ? `تقديم عرض توريد: ${selectedOpp.productAr}` : `Supply Proposal: ${selectedOpp.productEn}`}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {ar ? `الوجهة: ${selectedOpp.destinationMarketAr} • الكمية المطلوبة: ${selectedOpp.quantityRequested}` : `Market: ${selectedOpp.destinationMarketEn} • Qty: ${selectedOpp.quantityEn}`}
                  </p>
                </div>

                <form onSubmit={handleSubmitProposal} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                      <label className="font-semibold text-foreground block mb-1">
                        {ar ? "اسم المورد / المسؤول *" : "Full Name *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={supplierName}
                        onChange={(e) => setSupplierName(e.target.value)}
                        placeholder={ar ? "الاسم الكامل" : "Your full name"}
                        className="w-full rounded-xl border border-white/20 bg-background/50 px-3 py-2 text-foreground focus:border-brand-orange focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="font-semibold text-foreground block mb-1">
                        {ar ? "اسم الشركة / المزرعة / المصنع *" : "Company / Farm / Facility *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={supplierCompany}
                        onChange={(e) => setSupplierCompany(e.target.value)}
                        placeholder={ar ? "اسم الكيان التجاري" : "Company name"}
                        className="w-full rounded-xl border border-white/20 bg-background/50 px-3 py-2 text-foreground focus:border-brand-orange focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                      <label className="font-semibold text-foreground block mb-1">
                        {ar ? "البريد الإلكتروني التجاري *" : "Business Email *"}
                      </label>
                      <input
                        type="email"
                        required
                        value={supplierEmail}
                        onChange={(e) => setSupplierEmail(e.target.value)}
                        placeholder="email@company.com"
                        className="w-full rounded-xl border border-white/20 bg-background/50 px-3 py-2 text-foreground focus:border-brand-orange focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="font-semibold text-foreground block mb-1">
                        {ar ? "رقم الهاتف / الواتساب *" : "Phone / WhatsApp *"}
                      </label>
                      <input
                        type="tel"
                        required
                        value={supplierPhone}
                        onChange={(e) => setSupplierPhone(e.target.value)}
                        placeholder="+20 1..."
                        className="w-full rounded-xl border border-white/20 bg-background/50 px-3 py-2 text-foreground focus:border-brand-orange focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-semibold text-foreground block mb-1">
                      {ar ? "عرض السعر المقترح والكمية المتاحة للتوريد *" : "Price Quotation & Available Supply Capacity *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={supplierPriceQuote}
                      onChange={(e) => setSupplierPriceQuote(e.target.value)}
                      placeholder={ar ? "مثال: 850 دولار للطن FOB الإسكندرية، طاقة توريد 100 طن شهرياً" : "e.g. $850/MT FOB Alexandria, capacity 100 MT/month"}
                      className="w-full rounded-xl border border-white/20 bg-background/50 px-3 py-2 text-foreground focus:border-brand-orange focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-foreground block mb-1">
                      {ar ? "تفاصيل المواصفات الفنية والشهادات المتوفرة (اختياري)" : "Technical Specs & Available Certifications (Optional)"}
                    </label>
                    <textarea
                      rows={3}
                      value={supplierNotes}
                      onChange={(e) => setSupplierNotes(e.target.value)}
                      placeholder={ar ? "أصناف، شهادات Global GAP، ISO، فحص معملي..." : "Varieties, ISO, Global GAP, testing..."}
                      className="w-full rounded-xl border border-white/20 bg-background/50 px-3 py-2 text-foreground focus:border-brand-orange focus:outline-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 py-3 text-xs font-bold text-white shadow-lg shadow-emerald-950/30 transition-all hover:from-emerald-500 hover:to-teal-600 active:scale-95"
                    >
                      {ar ? "إرسال عرض التوريد رسمياً" : "Submit Supply Proposal"}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

