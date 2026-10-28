import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import apparel from "@/assets/sector-apparel.jpg";
import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/language-context";

export function BrandsPage() {
  const { language } = useLanguage();
  const ar = language === "AR";

  return (
    <div className="w-full">
      <section className="site-container section-band">
        <Reveal>
          <p className="eyebrow">{ar ? "علاماتنا" : "Our Brands"}</p>
          <h1 className="section-title mt-3">{ar ? "علامة نخرجها إلى الأسواق" : "A brand we take to market"}</h1>
          <p className="section-intro mt-4 max-w-2xl">
            {ar
              ? "علامة JZRA هي علامتنا التجارية الخاصة في ملابس النساء والأطفال، وتُباع في مصر وتركيا والمملكة العربية السعودية. ستُضاف ملفات العلامات الأخرى هنا عند اعتمادها."
              : "JZRA is our own garment brand for women's and children's wear, sold in Egypt, Türkiye and Saudi Arabia. Additional brand profiles will be added here as they are approved."}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="glass-card group overflow-hidden">
              <div className="overflow-hidden"><img src={apparel} alt="JZRA fashion" loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div>
              <div className="p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-orange-text">JZRA FASHION</p>
                <h2 className="mt-2 font-head text-2xl font-semibold">{ar ? "ملابس نسائية وأطفال" : "Women's & children's wear"}</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  {ar ? "تصاميم موسمية بعلامتنا الخاصة، من إنتاج مصانع المجموعة." : "Seasonal designs under our own label, produced in the group's factories."}
                </p>
                <Button asChild variant="outline" className="mt-5"><Link to="/models">{ar ? "استعرض الموديلات" : "Browse models"} <ArrowRight className="size-4 rtl:rotate-180" /></Link></Button>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass-card grid h-full min-h-72 place-items-center p-6 text-center">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{ar ? "قريبًا" : "Coming soon"}</p>
                <h2 className="mt-3 font-head text-xl font-semibold">{ar ? "ملفات علامات إضافية" : "Additional brand profiles"}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{ar ? "سيُنشر هنا بعد اعتماد المحتوى." : "Will be published here once content is approved."}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}


