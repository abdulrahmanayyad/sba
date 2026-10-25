import { Reveal } from "@/components/home/reveal";
import { useLanguage } from "@/i18n/language-context";

const placeholderItems = [
  { date: "—", tag: "Group" },
  { date: "—", tag: "Sectors" },
  { date: "—", tag: "People" },
];

export function NewsPage() {
  const { language } = useLanguage();
  const ar = language === "AR";

  return (
    <div className="w-full">
      <section className="site-container section-band">
        <Reveal>
          <p className="eyebrow">{ar ? "أخبارنا" : "Our News"}</p>
          <h1 className="section-title mt-3">{ar ? "أخبار المجموعة" : "Group news"}</h1>
          <p className="section-intro mt-4 max-w-2xl">
            {ar
              ? "سيُنشر هنا أخبار القطاعات والفعاليات والإصدارات بعد اعتماد المحتوى."
              : "Sector news, events and publications will be published here once content is approved."}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {placeholderItems.map((item, index) => (
            <Reveal key={index} delay={index * 0.06}>
              <article className="glass-card h-full p-6">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  <span>{item.tag}</span>
                  <span>{item.date}</span>
                </div>
                <h2 className="mt-4 font-head text-lg font-semibold">{ar ? "خبر قريبًا" : "News item coming soon"}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{ar ? "سيُنشر الخبر بعد اعتماد المحتوى." : "Will be published once content is approved."}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
