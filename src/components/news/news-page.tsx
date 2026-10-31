import { useState } from "react";
import { ArrowRight, Calendar, ChevronDown, ChevronUp, FileText, Globe, Layers, Sparkles, Tag } from "lucide-react";
import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/language-context";
import { cn } from "@/lib/utils";

interface NewsItem {
  id: string;
  dateEn: string;
  dateAr: string;
  tagEn: string;
  tagAr: string;
  categoryEn: string;
  categoryAr: string;
  titleEn: string;
  titleAr: string;
  summaryEn: string;
  summaryAr: string;
  contentEn: string;
  contentAr: string;
}

const newsList: NewsItem[] = [
  {
    id: "renergon-partnership",
    dateEn: "Sep 2, 2020",
    dateAr: "2 سبتمبر 2020",
    tagEn: "Strategic Alliance",
    tagAr: "تحالف استراتيجي",
    categoryEn: "Sustainable Environment & Energy",
    categoryAr: "البيئة المستدامة والطاقة المتجددة",
    titleEn: "Partners with Renergon International AG (Switzerland)",
    titleAr: "تحالف استراتيجي مع شركة رينرجون الدولية (سويسرا) لتكنولوجيا التخمير الجاف والغاز الحيوي",
    summaryEn:
      "Signing an exclusive Partnership & Alliance contract with Renergon International AG (Switzerland) to become the licensed company in Egypt for Dry Fermentation Technology, turning organic waste into renewable biogas, electricity, and organic fertilizers.",
    summaryAr:
      "توقيع عقد تحالف وشراكة استراتيجية مع شركة رينرجون الدولية (سويسرا) لتصبح المجموعة والتحالف المرخص الوحيد في مصر لتكنولوجيا التخمير الجاف المتقدمة، لتحويل المخلفات العضوية إلى طاقة متجددة وغاز حيوي وأسمدة عضوية عالية الجودة.",
    contentEn: `We signed a Partnership & Alliance contract with the European company Renergon International AG (Switzerland), to become the only licensed company in Egypt by Renergon for the Technology of Dry Fermentation. The Alliance is aimed to provide “state-of-the-art, turnkey technology solutions” for turning organic waste into renewable energy for producing both biogas and electricity as well as organic fertilizers through the Dry Fermentation Technology.

The partnership sets the tone of cooperation between the two organizations and contains several collaborations that include: Creating and Developing Biogas Plants with various capacity starting from 50 kW and up to 5 MW, Using the advanced dry fermentations technology in Biomass.

Mr. Karl-Heinz Restle, “CEO & Founder of Renergon” said: "The Renergon-We Partnership brings together industry leaders with proven technologies who recognize the need for an integrated solution approach to advancing the deployment of biogas plants in Egypt."

We affirmed: “The importance of energy security for Egypt and the signing of this Partnership reinforces and creates a great competitive opportunity in the field of energy supply from Biomass and Dry Fermentation Technology, which is supporting a various sector in the region. And they add that Weis planning to build & operate several Biogas power plants in Egypt varies in capacity between Small, Medium, and Large Biogas Power Plants that will produce an accumulative of 10 MW electricity for the next five years plan 2020-2025, by 2030 We planning to increase the numbers of Biogas Power Plants to produce 50 MW of electricity that will be produced from Biomass with a total increase in investment levels.

We is delighted to partner Renergon for reaching our common goals together and supporting the different sectors together in Egypt.”`,
    contentAr: `وقّعنا عقد شراكة وتحالف استراتيجي مع الشركة الأوروبية الرائدة «رينرجون الدولية» (RENERGON International AG - سويسرا)، لنصبح الشريك المرخص حصريًا في مصر لتكنولوجيا التخمير الجاف (Dry Fermentation Technology). ويهدف التحالف إلى توفير حلول تكنولوجية متكاملة ومتقدمة بنظام تسليم المفتاح لتحويل المخلفات والكتلة الحيوية العضوية إلى طاقة متجددة، وإنتاج كل من الغاز الحيوي (Biogas) والكهرباء، إلى جانب الأسمدة العضوية القياسية عالية الخصوبة.

ترسي هذه الشراكة أسس تعاون طويل الأمد بين الطرفين، وتشمل مجالات متعددة من بينها: إنشاء وتطوير محطات الغاز الحيوي بقدرات متنوعة تبدأ من 50 كيلوواط وتصل إلى 5 ميجاواط، اعتمادًا على تقنيات التخمير الجاف الأحدث عالميًا في معالجة الكتلة الحيوية.

وصرح السيد/ كارل هاينز ريستل، الرئيس التنفيذي ومؤسس شركة رينرجون الدولية: «تجمع هذه الشراكة بين رواد الصناعة وأصحاب التقنيات المثبتة دوليًا الذين يدركون الحاجة الماسة إلى نهج حلول متكاملة لتسريع نشر وتشغيل محطات الغاز الحيوي في جمهورية مصر العربية».

وأكدت المجموعة: «يمثل أمن الطاقة ركيزة استراتيجية لمصر والمنطقة، وتوقيع هذا التحالف يعزز ويخلق فرصة تنافسية استثنائية في مجال إمدادات الطاقة المستدامة من الكتلة الحيوية وتكنولوجيا التخمير الجاف لدعم مختلف القطاعات الصناعية والتنموية. وتتضمن الخطة الخمسية 2020-2025 بناء وتشغيل محطات متعددة الأحجام (صغيرة ومتوسطة وكبيرة) لإنتاج طاقة تراكمية تبلغ 10 ميجاواط كهرباء، مع استهداف التوسع بحلول 2030 لتوليد 50 ميجاواط كهرباء من الكتلة الحيوية مع رفع معدلات الاستثمار الصناعي».

يسعدنا هذا التعاون الاستراتيجي مع رينرجون لتحقيق أهدافنا المشتركة نحو بيئة مستدامة ومستقبل واعد للطاقة النظيفة.`,
  },
  {
    id: "technoset-mou",
    dateEn: "Apr 12, 2019",
    dateAr: "12 أبريل 2019",
    tagEn: "Digital Transformation & IoT",
    tagAr: "التحول الرقمي وإنترنت الأشياء",
    categoryEn: "QHSE Software & Smart Technology",
    categoryAr: "أنظمة وبرمجيات الجودة والسلامة وإنترنت الأشياء",
    titleEn: "TECHNO SET partners with Us",
    titleAr: "شراكة استراتيجية ومذكرة تفاهم مع شركة تكنوسيت لتطبيقات QHSE وإنترنت الأشياء",
    summaryEn:
      "Signing a comprehensive Memorandum of Understanding (MoU) with TechnoSet Company to develop QHSE softwares, mobile enterprise applications, and advanced IoT technologies across Oil & Gas, Healthcare, and industrial operations.",
    summaryAr:
      "توقيع مذكرة تفاهم استراتيجية (MoU) مع شركة تكنوسيت (TechnoSet) لتطوير برمجيات وحلول إدارة الجودة والصحة والسلامة والبيئة (QHSE) وتطبيقات الهاتف الذكي وأنظمة إنترنت الأشياء (IoT) المتقدمة في مختلف القطاعات الصناعية والحيوية.",
    contentEn: `We signed a Memorandum of Understanding (MoU) with TechnoSet Company, The MoU is aimed at creating and developing QHSE Software’s, Mobile Applications and the services of IoT advanced Technology for the different sectors and activities.

The MoU sets the tone of cooperation between the two organizations and contains several collaborations that include: Creating and Developing QHSE Software’s and Mobile Applications for supporting the different Sectors such Oil and Gas, Healthcare and others. As well as IoT technology and its applications in the different sectors and activities.

We affirmed: “The signing of this MoU reinforces and creates a great competitive opportunity in the region in the field of QHSE software and IoT technology, which is supporting a various organization in the region through the development of Management performance using the latest technology and software in both management and operations to reach the international standards and thus achieve customer satisfaction and sustainability.

We are delighted to partner TechnoSet for reaching our common goals together and supporting the different sectors together in the Middle East, Africa and worldwide.”`,
    contentAr: `وقّعنا مذكرة تفاهم استراتيجية (MoU) مع شركة «تكنوسيت» (TechnoSet Company)، تهدف إلى ابتكار وتطوير برمجيات ومنظومات إدارة الجودة والصحة والسلامة المهنية والبيئة (QHSE Software)، وتطبيقات الهواتف الذكية الميدانية، وحلول تكنولوجيا إنترنت الأشياء المتقدمة (IoT) لمختلف القطاعات والأنشطة الاقتصادية.

تحدد مذكرة التفاهم مسارًا راسخًا للتعاون المشترك، ويشمل ذلك تطوير أنظمة برمجية وتطبيقات متخصصة لدعم قطاعات استراتيجية كالنفط والغاز (Oil & Gas)، والمنشآت الصحية والطبية (Healthcare)، والقطاعات الصناعية، وتوظيف أجهزة واستشعارات IoT لرصد مؤشرات السلامة والبيئة لحظيًا.

وأكدت المجموعة: «إن توقيع مذكرة التفاهم يعزز ويخلق ميزة تنافسية كبرى على مستوى المنطقة في مجالات برمجيات السلامة والبيئة وتقنيات إنترنت الأشياء، بما يدعم المؤسسات والشركات في الارتقاء بمستوى الأداء الإداري والتشغيلي ومطابقة أعلى المعايير الدولية والامتثال التشريعي، وصولًا إلى أعلى درجات رضا العملاء والاستدامة المؤسسية».

نعتز بشراكتنا المثمرة مع تكنوسيت لتحقيق رؤيتنا المشتركة وخدمة عملائنا وقطاعاتنا في الشرق الأوسط وإفريقيا والعالم.`,
  },
];

export function NewsPage() {
  const { language } = useLanguage();
  const ar = language === "AR";
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null);

  const toggleArticle = (id: string) => {
    setExpandedArticle((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full">
      {/* 1. News Hero Section */}
      <section className="site-container pt-16 pb-12 scroll-mt-24">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md mb-4">
            <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
            <span>{ar ? "مركز الأخبار والمستجدات" : "News & Announcements"}</span>
          </div>
          <h1 className="section-title text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
            {ar ? "أخبار المجموعة والشراكات" : "Group News & Strategic Updates"}
          </h1>
          <p className="section-intro mt-4 max-w-3xl leading-relaxed text-muted-foreground sm:text-lg">
            {ar
              ? "تابع أحدث إعلانات مجموعة سامي بن عياد، والاتفاقيات الدولية، والشراكات الاستراتيجية، ومستجدات قطاعاتنا وأعمالنا."
              : "Explore the latest corporate announcements, international partnership agreements, and milestone developments across SAMI BIN AYYAD GROUP."}
          </p>
        </Reveal>
      </section>

      {/* 2. Articles List */}
      <section className="site-container pb-20">
        <div className="space-y-8">
          {newsList.map((item, idx) => {
            const isExpanded = expandedArticle === item.id;
            return (
              <Reveal key={item.id} delay={idx * 0.08}>
                <article
                  className={cn(
                    "glass-card overflow-hidden rounded-3xl border border-white/30 bg-background/85 p-6 sm:p-10 shadow-md backdrop-blur-xl transition-all duration-300",
                    isExpanded ? "border-brand-green/60 shadow-2xl" : "hover:border-brand-orange/40 hover:shadow-xl hover:scale-[1.005]"
                  )}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-brand-orange/10 px-3 py-1 font-bold text-brand-orange border border-brand-orange/20">
                        <Tag className="size-3" />
                        <span>{ar ? item.tagAr : item.tagEn}</span>
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-secondary/80 px-3 py-1 font-semibold text-foreground/80 border border-border">
                        <Layers className="size-3 text-brand-green" />
                        <span>{ar ? item.categoryAr : item.categoryEn}</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 font-mono text-muted-foreground">
                      <Calendar className="size-3.5 text-brand-orange" />
                      <span>{ar ? item.dateAr : item.dateEn}</span>
                    </div>
                  </div>

                  <h2 className="mt-5 font-head text-xl sm:text-2xl lg:text-3xl font-extrabold text-foreground leading-snug">
                    {ar ? item.titleAr : item.titleEn}
                  </h2>

                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground/95">
                    {ar ? item.summaryAr : item.summaryEn}
                  </p>

                  {/* Expandable Full Story */}
                  {isExpanded && (
                    <div className="mt-6 border-t border-border/70 pt-6 animate-in fade-in duration-300">
                      <div className="whitespace-pre-line text-sm sm:text-base leading-relaxed text-foreground/90 space-y-4 font-normal">
                        {ar ? item.contentAr : item.contentEn}
                      </div>
                    </div>
                  )}

                  <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between flex-wrap gap-4">
                    <button
                      type="button"
                      onClick={() => toggleArticle(item.id)}
                      className="inline-flex items-center gap-2 font-head text-xs sm:text-sm font-bold text-brand-green hover:text-brand-orange transition-colors cursor-pointer"
                    >
                      <span>{isExpanded ? (ar ? "إغلاق التفاصيل" : "Show Less") : (ar ? "قراءة البيان الصحفي الكامل" : "Read Full Official Release")}</span>
                      {isExpanded ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
                    </button>

                    <span className="text-[11px] font-mono text-muted-foreground/70 uppercase tracking-wider">
                      {ar ? "بيان صحفي موثق" : "Official Press Release"}
                    </span>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
