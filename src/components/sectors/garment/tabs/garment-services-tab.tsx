import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ChevronRight, Layers, Sparkles, Workflow, ShieldCheck, Factory } from "lucide-react";

import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/language-context";
import { garmentServicesExpanded } from "../garment-data";

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

  return (
    <div className="py-6 space-y-12">
      <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
        <Reveal>
          <div className="max-w-3xl">
            <SectionBadge title={ar ? "خدمات التصنيع والتوريد B2B" : "Manufacturing Services"} />
            <h2 className="section-title mt-3">
              {ar ? "8 برامج تصنيع وتوريد متكاملة تلبي احتياجات العلامات التجارية" : "8 Turnkey B2B Manufacturing & Sourcing Programs"}
            </h2>
            <p className="section-intro mt-4">
              {ar
                ? "سواء كنت تبحث عن تصنيع بعلامتك الخاصة (Private Label)، أو برامج توريد شاملة (FOB)، أو تصنيع تعاقدي (OEM)، نوفر لك المرونة الصناعية والانضباط الزمني والجودة القياسية."
                : "From complete Private Label execution and turnkey FOB programs to high-volume OEM contract production, our manufacturing ecosystem scales with your brand requirements."}
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.id}
                id={`service-${service.id}`}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card/60 backdrop-blur-md shadow-sm transition-all duration-300 hover:border-brand-green/60 hover:shadow-xl hover:scale-[1.01]"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-secondary">
                  <img
                    src={service.image}
                    alt={ar ? service.titleAr : service.titleEn}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 start-3 bg-black/70 text-white font-mono text-xs font-bold px-2.5 py-1 rounded-lg backdrop-blur-md">
                    {service.number}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-brand-orange">{service.badgeEn}</span>
                    </div>
                    <h3 className="font-head text-xl sm:text-2xl font-bold text-foreground">
                      {ar ? service.titleAr : service.titleEn}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm font-semibold text-brand-green-text">
                      {ar ? service.leadAr : service.leadEn}
                    </p>

                    <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {ar ? service.descAr : service.descEn}
                    </p>

                    <div className="mt-6 border-t border-border/70 pt-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                        {ar ? "أبرز القدرات والمميزات:" : "Key Technical Capabilities:"}
                      </h4>
                      <ul className="mt-3 space-y-1.5">
                        {(ar ? service.capabilitiesAr : service.capabilitiesEn).map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/90">
                            <CheckCircle2 className="size-3.5 shrink-0 text-brand-green mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4 pt-3 border-t border-border/40">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-brand-orange-text">
                        {ar ? "المخرجات والتسليمات:" : "Expected Deliverables:"}
                      </h4>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {(ar ? service.deliverablesAr : service.deliverablesEn).map((del, dIdx) => (
                          <span key={dIdx} className="bg-secondary/70 border border-border/60 text-[11px] font-medium px-2.5 py-1 rounded-lg text-foreground">
                            {del}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-border/70 flex items-center justify-between">
                    <Button asChild size="sm" className="rounded-full bg-brand-green text-white hover:bg-brand-orange transition-colors">
                      <Link to="/sectors/$sector" params={{ sector: "garment" }} search={{ tab: "start-project", service: service.id }}>
                        <span>{ar ? "اطلب عرض سعر لهذه الخدمة" : "Request Proposal for Service"}</span>
                        <ArrowRight className="size-3.5 ms-2 rtl:rotate-180" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
