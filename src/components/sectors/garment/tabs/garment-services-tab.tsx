import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ChevronRight, Layers, Sparkles, Workflow } from "lucide-react";

import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/language-context";
import { garmentServicesDetailed } from "../garment-data";

export function GarmentServicesTab() {
  const { language } = useLanguage();
  const ar = language === "AR";

  return (
    <div className="space-y-16 py-8">
      <Reveal>
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
            {ar ? "خدماتنا وتخصصاتنا" : "Our Services & Capabilities"}
          </span>
          <h2 className="mt-2 font-head text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {ar ? "حلول تصنيع متكاملة تناسب كل نموذج عمل" : "Tailored Manufacturing Solutions for Every Business Model"}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {ar
              ? "سواء كنت بحاجة إلى تصنيع متكامل بنظام Private Label أو برامج FOB شاملة من الأقمشة وحتى الميناء، أو تصنيع تعاقدي دقيق، نوفر لك المنظومة الصناعية المتكاملة التي تدعم نجاح علامتك التجارية."
              : "Whether you need full Private Label execution, turnkey FOB management from raw fabric to export port, or precision OEM production, we offer the complete manufacturing ecosystem to scale your brand."}
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {garmentServicesDetailed.map((service, index) => (
            <div
              key={service.id}
              className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm transition duration-300 hover:border-brand-orange/40 hover:shadow-lg sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-brand-orange">
                    SERVICE // 0{index + 1}
                  </span>
                  <span className="rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-semibold text-brand-orange">
                    {ar ? "معتمد ومتاح" : "Full Scope"}
                  </span>
                </div>

                <h3 className="mt-4 font-head text-2xl font-bold text-foreground">
                  {ar ? service.titleAr : service.titleEn}
                </h3>
                <p className="mt-1 text-sm font-medium text-brand-orange">
                  {ar ? service.taglineAr : service.taglineEn}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {ar ? service.descriptionAr : service.descriptionEn}
                </p>

                <div className="mt-6 border-t border-border/70 pt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                    {ar ? "نطاق العمل والتسليمات:" : "Scope & Key Deliverables:"}
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {(ar ? service.scopeAr : service.scopeEn).map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/90">
                        <CheckCircle2 className="size-4 shrink-0 text-brand-orange mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-border/70 flex items-center justify-between">
                <Button asChild variant="outline" size="sm">
                  <Link to="/sectors/$sector" params={{ sector: "garment" }} search={{ tab: "join" }}>
                    {ar ? "اطلب عرض سعر لهذه الخدمة" : "Request Quote for This"}
                    <ArrowRight className="size-3.5 ms-2 rtl:rotate-180" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
