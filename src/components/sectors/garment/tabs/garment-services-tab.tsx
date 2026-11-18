import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, FileText, Sparkles } from "lucide-react";

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
import { garmentServicesExpanded, GarmentManufacturingService } from "../garment-data";

function SectionBadge({ title }: { title: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
      <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
      {title}
    </span>
  );
}

export function GarmentServicesTab() {
  const { language } = useLanguage();
  const ar = language === "AR";
  const services = garmentServicesExpanded;
  const [selectedService, setSelectedService] = useState<GarmentManufacturingService | null>(null);

  return (
    <div className="py-6 space-y-12">
      <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <SectionBadge title={ar ? "حلول تصنيع وتطوير الأزياء" : "Manufacturing & Product Solutions"} />
            <h2 className="section-title mt-3 text-center">
              {ar
                ? "حلول تصنيع الملابس وتطوير المنتجات"
                : "Apparel Manufacturing & Product Development Solutions"}
            </h2>
            <p className="section-intro mt-4 text-center leading-relaxed">
              {ar
                ? "نقدم منظومة تصنيع متكاملة تضم جميع الخدمات الصناعية والاستشارية المتخصصة وتبدأ من تطوير الغزول والأقمشة والتصميم الفني، مرورًا بالعينات والتشغيل الصناعي الكمي، وصولًا إلى استشارات إطلاق وتوسع العلامات التجارية"
                : "An integrated manufacturing ecosystem offering comprehensive industrial and advisory services—from yarn & fabric engineering and technical design, through sampling and bulk factory production, to fashion brand strategy and expansion advisory."}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const isStrategy = service.id === "brand-strategy";
              return (
                <div
                  key={service.id}
                  id={`service-${service.id}`}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card/60 backdrop-blur-md shadow-sm transition-all duration-300 hover:border-brand-green/60 hover:shadow-xl hover:scale-[1.01]"
                >
                  <div>
                    {/* Image Banner */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary">
                      <img
                        src={service.image}
                        alt={ar ? service.titleAr : service.titleEn}
                        loading="lazy"
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 start-3 bg-black/75 text-white font-mono text-xs font-bold px-2.5 py-1 rounded-lg backdrop-blur-md shadow-sm">
                        {service.number}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      {!ar && (
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-brand-orange">
                            {service.subtitleEn}
                          </span>
                        </div>
                      )}

                      <h3 className="font-head text-lg sm:text-xl font-bold text-foreground mt-1">
                        {ar ? service.titleAr : service.titleEn}
                      </h3>

                      {isStrategy && (
                        <div className="mt-3 flex items-center gap-2 rounded-xl border border-brand-green/30 bg-brand-green/10 px-3 py-2 text-xs font-bold text-brand-green">
                          <Sparkles className="size-3.5 shrink-0 text-brand-orange" />
                          <span>
                            {ar
                              ? "مؤشر رئيسي: تقديم أكثر من 400 استشارة للعلامات التجارية"
                              : "Key Metric: 400+ Consultations Delivered"}
                          </span>
                        </div>
                      )}

                      <p className="mt-2.5 text-xs font-semibold text-brand-green-text leading-snug">
                        {ar ? service.leadAr : service.leadEn}
                      </p>

                      <p className="mt-3 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                        {ar ? service.descAr : service.descEn}
                      </p>

                      {/* Capabilities Highlights */}
                      <div className="mt-5 border-t border-border/70 pt-4">
                        <h4 className="text-[11px] font-bold uppercase tracking-wider text-foreground">
                          {ar ? "أبرز القدرات والمميزات:" : "Key Highlights:"}
                        </h4>
                        <ul className="mt-2.5 space-y-1.5">
                          {(ar ? service.capabilitiesAr : service.capabilitiesEn)
                            .slice(0, 4)
                            .map((point, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-xs text-foreground/90 leading-tight"
                              >
                                <CheckCircle2 className="size-3.5 shrink-0 text-brand-green mt-0.5" />
                                <span className="line-clamp-2">{point}</span>
                              </li>
                            ))}
                        </ul>
                      </div>

                      {/* Deliverables Preview Tags */}
                      <div className="mt-4 pt-3 border-t border-border/40">
                        <h4 className="text-[11px] font-bold uppercase tracking-wider text-brand-orange-text">
                          {ar ? "المخرجات والتسليمات:" : "Deliverables:"}
                        </h4>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {(ar ? service.deliverablesAr : service.deliverablesEn)
                            .slice(0, 3)
                            .map((del, dIdx) => (
                              <span
                                key={dIdx}
                                className="bg-secondary/70 border border-border/60 text-[10px] font-medium px-2 py-0.5 rounded-md text-foreground"
                              >
                                {del}
                              </span>
                            ))}
                          {(ar ? service.deliverablesAr : service.deliverablesEn).length > 3 && (
                            <span className="text-[10px] text-muted-foreground px-1 self-center">
                              +{((ar ? service.deliverablesAr : service.deliverablesEn).length - 3)}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions Row */}
                  <div className="p-6 pt-0 space-y-2.5">
                    <button
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className="w-full text-center text-xs font-bold text-foreground hover:text-brand-orange border border-border/80 hover:border-brand-orange/60 rounded-xl py-2 px-3 transition-colors flex items-center justify-center gap-1.5 bg-background/40"
                    >
                      <FileText className="size-3.5 text-brand-orange" />
                      <span>{ar ? "التفاصيل والمخرجات الكاملة" : "Full Scope & Deliverables"}</span>
                    </button>

                    {isStrategy ? (
                      <Button
                        asChild
                        size="sm"
                        className="w-full rounded-xl bg-brand-green text-white hover:bg-brand-orange transition-colors font-bold shadow-xs text-xs"
                      >
                        <Link to="/contact">
                          <span>{ar ? "طلب استشارة مجانية" : "Request a Free Consultation"}</span>
                          <ArrowRight className="size-3.5 ms-1.5 rtl:rotate-180" />
                        </Link>
                      </Button>
                    ) : (
                      <Button
                        asChild
                        size="sm"
                        className="w-full rounded-xl bg-brand-green text-white hover:bg-brand-orange transition-colors font-bold shadow-xs text-xs"
                      >
                        <Link
                          to="/sectors/$sector"
                          params={{ sector: "garment" }}
                          search={{ tab: "start-project", service: service.id }}
                        >
                          <span>{ar ? "اطلب عرض سعر لهذه الخدمة" : "Request a Quote"}</span>
                          <ArrowRight className="size-3.5 ms-1.5 rtl:rotate-180" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>

      {/* SERVICE DETAIL MODAL (DIALOG) */}
      <Dialog
        open={Boolean(selectedService)}
        onOpenChange={(open) => !open && setSelectedService(null)}
      >
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8">
          {selectedService && (
            <div className="space-y-6">
              <DialogHeader className="text-start space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-md bg-brand-orange/15 text-brand-orange">
                    {selectedService.number}
                  </span>
                  {!ar && (
                    <span className="text-xs font-semibold text-muted-foreground">
                      {selectedService.subtitleEn}
                    </span>
                  )}
                </div>
                <DialogTitle className="font-head text-2xl font-bold text-foreground">
                  {ar ? selectedService.titleAr : selectedService.titleEn}
                </DialogTitle>
                <DialogDescription className="text-xs sm:text-sm font-semibold text-brand-green-text">
                  {ar ? selectedService.leadAr : selectedService.leadEn}
                </DialogDescription>
              </DialogHeader>

              {/* Metric Badge if Service 09 */}
              {selectedService.id === "brand-strategy" && (
                <div className="flex items-center gap-2 rounded-2xl border border-brand-green/30 bg-brand-green/10 p-3 text-xs sm:text-sm font-bold text-brand-green">
                  <Sparkles className="size-4 shrink-0 text-brand-orange" />
                  <span>
                    {ar
                      ? "مؤشر رئيسي: تقديم أكثر من 400 استشارة للعلامات التجارية الناشئة والقائمة"
                      : "Key Metric: Over 400+ Consultations Delivered for Emerging & Established Fashion Labels"}
                  </span>
                </div>
              )}

              {/* Full Description */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                  {ar ? "الوصف ونطاق العمل الفني:" : "Full Technical Scope & Description:"}
                </h4>
                <div className="text-xs sm:text-sm text-foreground/80 leading-relaxed whitespace-pre-line bg-secondary/30 p-4 rounded-2xl border border-border/50">
                  {ar ? selectedService.descAr : selectedService.descEn}
                </div>
              </div>

              {/* All Capabilities */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                  {ar ? "أبرز القدرات والمميزات الفنية:" : "All Key Technical Capabilities:"}
                </h4>
                <ul className="space-y-2">
                  {(ar ? selectedService.capabilitiesAr : selectedService.capabilitiesEn).map(
                    (cap, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90 leading-relaxed"
                      >
                        <CheckCircle2 className="size-4 shrink-0 text-brand-green mt-0.5" />
                        <span>{cap}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              {/* All Deliverables */}
              <div className="space-y-3 border-t border-border/60 pt-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-orange-text">
                  {ar ? "المخرجات والتسليمات المتوقعة:" : "Expected Deliverables & Outputs:"}
                </h4>
                <div className="grid gap-2 sm:grid-cols-2">
                  {(ar ? selectedService.deliverablesAr : selectedService.deliverablesEn).map(
                    (del, dIdx) => (
                      <div
                        key={dIdx}
                        className="bg-card/80 border border-border/70 text-xs p-3 rounded-xl flex items-center gap-2 text-foreground font-medium"
                      >
                        <span className="size-1.5 rounded-full bg-brand-orange shrink-0" />
                        <span>{del}</span>
                      </div>
                    ),
                  )}
                </div>
              </div>

              {/* Modal CTA */}
              <div className="border-t border-border/70 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-muted-foreground">
                  {ar
                    ? "جاهزون للبدء في تنفيذ متطلباتكم الصناعية والتجارية."
                    : "Ready to fulfill your industrial and commercial requirements."}
                </span>

                {selectedService.id === "brand-strategy" ? (
                  <Button
                    asChild
                    size="default"
                    className="w-full sm:w-auto rounded-full bg-brand-green text-white hover:bg-brand-orange transition-colors font-bold shadow-md"
                    onClick={() => setSelectedService(null)}
                  >
                    <Link to="/contact">
                      <span>{ar ? "طلب استشارة مجانية" : "Request a Free Consultation"}</span>
                      <ArrowRight className="size-4 ms-2 rtl:rotate-180" />
                    </Link>
                  </Button>
                ) : (
                  <Button
                    asChild
                    size="default"
                    className="w-full sm:w-auto rounded-full bg-brand-green text-white hover:bg-brand-orange transition-colors font-bold shadow-md"
                    onClick={() => setSelectedService(null)}
                  >
                    <Link
                      to="/sectors/$sector"
                      params={{ sector: "garment" }}
                      search={{ tab: "start-project", service: selectedService.id }}
                    >
                      <span>{ar ? "اطلب عرض سعر لهذه الخدمة" : "Request a Quote"}</span>
                      <ArrowRight className="size-4 ms-2 rtl:rotate-180" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
