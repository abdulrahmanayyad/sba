import { Reveal } from "@/components/home/reveal";
import { useLanguage } from "@/i18n/language-context";

const placeholderTiles = Array.from({ length: 6 });

export function PartnersPage() {
  const { language } = useLanguage();
  const ar = language === "AR";

  return (
    <div className="w-full">
      <section className="site-container section-band">
        <Reveal>
          <p className="eyebrow">{ar ? "شركاؤنا" : "Our Partners"}</p>
          <h1 className="section-title mt-3">{ar ? "شركاء يبنون معنا" : "Partners who build with us"}</h1>
          <p className="section-intro mt-4 max-w-2xl">
            {ar
              ? "لا يُعلن عن أي شراكة أو عميلة إلا بعد التحقق الرسمي والموافقة. ستُنشر قوائم الشركاء والعملاء مع التخصصات هنا عند اكتمال الموافقات."
              : "No partnership or client is announced without formal verification and approval. The partner and client lists with specialisations will be published here once approvals are complete."}
          </p>
        </Reveal>
      </section>

      {[
        { id: "partners", title: ar ? "شركاؤنا" : "Our Partners", note: ar ? "شعارات الشركاء ستُنشر بعد الموافقات." : "Partner logos will be published once approvals are received." },
        { id: "clients", title: ar ? "العملاء والمشروعات" : "Our Clients & Projects", note: ar ? "شعارات العملاء ستُنشر بعد الموافقات." : "Client logos will be published once approvals are received." },
      ].map((group, groupIndex) => (
        <section key={group.id} id={group.id} className={`scroll-mt-24 section-band ${groupIndex % 2 === 1 ? "bg-page-alt" : ""}`}>
          <div className="site-container">
            <Reveal>
              <h2 className="section-title">{group.title}</h2>
              <p className="section-intro mt-3">{group.note}</p>
            </Reveal>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {placeholderTiles.map((_, index) => (
                <Reveal key={index} delay={index * 0.04}>
                  <div className="glass-card grid aspect-[4/3] place-items-center p-4 text-center">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{ar ? "الشعار قريبًا" : "Logo coming soon"}</p>
                      <p className="mt-2 text-xs text-muted-foreground">{ar ? "التخصص عند النشر" : "Specialisation on publish"}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}


