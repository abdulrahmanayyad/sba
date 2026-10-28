import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ChevronRight, Layers, Sparkles, Workflow } from "lucide-react";

import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/language-context";
import { garmentServicesDetailed } from "../garment-data";

import apparelImg from "@/assets/sector-apparel.jpg";
import homeTextile from "@/assets/home-textile.jpg";
import jzraCasual from "@/assets/jzra-summer-casual.jpg";
import jzraDresses from "@/assets/jzra-summer-dresses.jpg";

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
  const serviceImages = [apparelImg, homeTextile, jzraCasual, jzraDresses];

  return (
    <div className="py-6 space-y-12">
      <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
        <Reveal>
          <div className="max-w-3xl">
            <SectionBadge title={ar ? "خدماتنا وتخصصاتنا" : "Our Services & Capabilities"} />
            <h2 className="section-title mt-3">
              {ar ? "حلول تصنيع متكاملة تناسب كل نموذج عمل" : "Tailored Manufacturing Solutions for Every Business Model"}
            </h2>
            <p className="section-intro mt-4">
              {ar
                ? "سواء كنت بحاجة إلى تصنيع متكامل بنظام Private Label أو برامج FOB شاملة من الأقمشة وحتى الميناء، أو تصنيع تعاقدي دقيق، نوفر لك المنظومة الصناعية المتكاملة التي تدعم نجاح علامتك التجارية."
                : "Whether you need full Private Label execution, turnkey FOB management from raw fabric to export port, or precision OEM production, we offer the complete manufacturing ecosystem to scale your brand."}
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {garmentServicesDetailed.map((service, index) => {
              const cardImg = serviceImages[index % serviceImages.length];
              return (
                <div
                  key={service.id}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card/60 backdrop-blur-md shadow-sm transition duration-300 hover:border-brand-orange/40 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-secondary">
                    <img
                      src={cardImg}
                      alt={ar ? service.titleAr : service.titleEn}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 start-3">
                      <span className="rounded-full bg-black/60 px-3 py-1 font-mono text-xs font-bold text-white backdrop-blur-md">
                        SERVICE // 0{index + 1}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-semibold text-brand-orange">
                          {ar ? "معتمد ومتاح للإنتاج" : "Full Scope"}
                        </span>
                      </div>

                      <h3 className="mt-3 font-head text-2xl font-bold text-foreground">
                        {ar ? service.titleAr : service.titleEn}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-brand-orange">
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
                      <Button asChild size="sm" className="bg-brand-green text-white hover:bg-brand-orange transition-colors">
                        <Link to="/sectors/$sector" params={{ sector: "garment" }} search={{ tab: "join" }}>
                          {ar ? "اطلب عرض سعر لهذه الخدمة" : "Request Quote for This"}
                          <ArrowRight className="size-3.5 ms-2 rtl:rotate-180" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </div>
  );
}


