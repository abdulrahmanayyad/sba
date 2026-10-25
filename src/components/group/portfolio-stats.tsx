import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

interface Achievement {
  valueRaw: number;
  suffix: string;
  labelEn: string;
  labelAr: string;
  noteEn: string;
  noteAr: string;
  icon: string;
}

const achievements: Achievement[] = [
  {
    valueRaw: 35,
    suffix: "+",
    labelEn: "Years of Experience",
    labelAr: "سنوات الخبرة",
    noteEn: "Decades of trusted industry presence",
    noteAr: "عقود من الحضور الموثوق في الصناعة",
    icon: "🏆",
  },
  {
    valueRaw: 4500,
    suffix: "+",
    labelEn: "Employees",
    labelAr: "موظف",
    noteEn: "A skilled and dedicated workforce",
    noteAr: "كوادر بشرية ماهرة وملتزمة",
    icon: "👥",
  },
  {
    valueRaw: 1000,
    suffix: "+",
    labelEn: "Completed Projects",
    labelAr: "مشروع مكتمل",
    noteEn: "Delivered across diverse sectors",
    noteAr: "منجزة عبر قطاعات متنوعة",
    icon: "✅",
  },
  {
    valueRaw: 50,
    suffix: "+",
    labelEn: "Client Countries",
    labelAr: "دولة عميلة",
    noteEn: "Global reach and trusted partnerships",
    noteAr: "حضور عالمي وشراكات موثوقة",
    icon: "🌍",
  },
  {
    valueRaw: 10,
    suffix: "",
    labelEn: "Warehouses",
    labelAr: "مستودع",
    noteEn: "Strategically distributed storage network",
    noteAr: "شبكة تخزين موزعة استراتيجيًا",
    icon: "🏭",
  },
  {
    valueRaw: 3,
    suffix: "",
    labelEn: "Factories",
    labelAr: "مصنع",
    noteEn: "State-of-the-art manufacturing facilities",
    noteAr: "منشآت تصنيعية بأحدث التجهيزات",
    icon: "⚙️",
  },
];

interface Ratio {
  percent: number;
  labelEn: string;
  labelAr: string;
  noteEn: string;
  noteAr: string;
  color: string;
}

const ratios: Ratio[] = [
  {
    percent: 98,
    labelEn: "Client Satisfaction",
    labelAr: "رضا العملاء",
    noteEn: "Clients who rate our service as excellent",
    noteAr: "العملاء الذين يصنّفون خدمتنا بممتاز",
    color: "var(--brand-green)",
  },
  {
    percent: 97,
    labelEn: "On-Time Delivery",
    labelAr: "التسليم في الوقت",
    noteEn: "Orders delivered on schedule",
    noteAr: "الطلبات المُسلَّمة في موعدها المحدد",
    color: "var(--brand-orange)",
  },
  {
    percent: 92,
    labelEn: "Worker Satisfaction",
    labelAr: "رضا العمال",
    noteEn: "Workforce engagement and wellbeing score",
    noteAr: "مؤشر انخراط العمال ورفاهيتهم",
    color: "#60a5fa",
  },
  {
    percent: 99,
    labelEn: "Incident-Free Projects",
    labelAr: "مشاريع نظيفة من الحوادث",
    noteEn: "Projects completed with zero safety incidents",
    noteAr: "المشاريع المُنجزة دون أي حوادث سلامة",
    color: "#a78bfa",
  },
];

/* ------------------------------------------------------------------ */
/*  Hook: detect visibility                                             */
/* ------------------------------------------------------------------ */

function useInView(ref: React.RefObject<Element>) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

/* ------------------------------------------------------------------ */
/*  Hook: count-up animation                                            */
/* ------------------------------------------------------------------ */

function useCountUp(target: number, duration = 1700, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let frame: number;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(2, -10 * t);
      setCount(Math.round(eased * target));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration]);
  return count;
}

/* ------------------------------------------------------------------ */
/*  Achievement Card                                                    */
/* ------------------------------------------------------------------ */

function AchievementCard({ item, ar, active }: { item: Achievement; ar: boolean; active: boolean }) {
  const count = useCountUp(item.valueRaw, 1700, active);

  return (
    <div className="group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:-translate-y-1 hover:shadow-2xl">
      {/* Hover glow sweep */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "radial-gradient(ellipse at 50% -10%, rgba(255,255,255,0.06), transparent 65%)" }}
      />

      {/* Icon */}
      <span className="text-3xl leading-none select-none" aria-hidden="true">{item.icon}</span>

      {/* Animated number */}
      <div className="flex items-baseline gap-1">
        <span className="font-head text-4xl font-bold text-white tabular-nums sm:text-5xl">
          {count.toLocaleString()}
        </span>
        <span className="font-head text-2xl font-bold text-white/50">{item.suffix}</span>
      </div>

      {/* Label */}
      <p className="text-sm font-semibold text-white/80 leading-snug">{ar ? item.labelAr : item.labelEn}</p>

      {/* Descriptive note */}
      <p className="text-xs text-white/40 leading-relaxed">{ar ? item.noteAr : item.noteEn}</p>

      {/* Bottom accent bar */}
      <div className="absolute bottom-0 start-0 h-0.5 w-0 rounded-full transition-all duration-500 group-hover:w-full"
        style={{ background: "linear-gradient(90deg, var(--brand-green), var(--brand-orange))" }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Ratio Arc Card (SVG 270° arc)                                       */
/* ------------------------------------------------------------------ */

const ARC_R = 50;
const ARC_STROKE = 7;
const FULL_CIRC = 2 * Math.PI * ARC_R;
const ARC_LEN = FULL_CIRC * 0.75; // 270° arc

function RatioCard({ item, ar, active }: { item: Ratio; ar: boolean; active: boolean }) {
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame: number;
    const duration = 1500;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(2, -10 * t);
      setDisplayed(Math.round(eased * item.percent));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, item.percent]);

  // 270° arc: rotate -225deg so the gap is at the bottom
  const filled = (displayed / 100) * ARC_LEN;

  return (
    <div className="group flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.055] p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:-translate-y-1 hover:shadow-2xl">
      {/* SVG Arc */}
      <div className="relative">
        <svg width={120} height={120} viewBox="0 0 120 120" style={{ transform: "rotate(-225deg)" }}>
          {/* Track arc */}
          <circle
            cx={60} cy={60} r={ARC_R}
            fill="none"
            stroke="rgba(255,255,255,0.09)"
            strokeWidth={ARC_STROKE}
            strokeDasharray={`${ARC_LEN} ${FULL_CIRC - ARC_LEN}`}
            strokeLinecap="round"
          />
          {/* Fill arc */}
          <circle
            cx={60} cy={60} r={ARC_R}
            fill="none"
            stroke={item.color}
            strokeWidth={ARC_STROKE}
            strokeDasharray={`${filled} ${FULL_CIRC - filled}`}
            strokeLinecap="round"
            style={{ filter: `drop-shadow(0 0 5px ${item.color}88)`, transition: "stroke-dasharray 0.04s" }}
          />
        </svg>
        {/* Centre readout */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-head text-2xl font-bold text-white tabular-nums leading-none">
            {displayed}%
          </span>
        </div>
      </div>

      <p className="text-sm font-semibold text-white/85 leading-snug">{ar ? item.labelAr : item.labelEn}</p>
      <p className="text-xs text-white/40 leading-relaxed max-w-[170px]">{ar ? item.noteAr : item.noteEn}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main exported section                                               */
/* ------------------------------------------------------------------ */

export function PortfolioStats({ ar }: { ar: boolean }) {
  const sectionRef = useRef<HTMLElement>(null!);
  const visible = useInView(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="our-portfolio"
      aria-labelledby="portfolio-heading"
      className="relative overflow-hidden section-band"
    >
      {/* Deep rich background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "oklch(0.14 0.032 175)" }}
      />

      {/* Subtle dot-grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Atmospheric glows */}
      <div
        className="pointer-events-none absolute -top-40 start-1/3 -z-10 h-[520px] w-[520px] rounded-full blur-[130px]"
        style={{ background: "var(--brand-green)", opacity: 0.1 }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 end-1/4 -z-10 h-[420px] w-[420px] rounded-full blur-[110px]"
        style={{ background: "var(--brand-orange)", opacity: 0.08 }}
      />

      <div className="site-container">
        {/* ── Portfolio header ── */}
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="text-[0.6875rem] uppercase tracking-[0.18em] text-white/45"
            style={{
              fontFamily: ar ? "var(--font-body)" : "var(--font-mono)",
              letterSpacing: ar ? 0 : undefined,
              textTransform: ar ? "none" : undefined,
            }}
          >
            {ar ? "ملف أعمال المجموعة" : "Our Group Portfolio"}
          </p>
          <h2
            id="portfolio-heading"
            className="mt-4 font-head font-bold leading-tight text-white"
            style={{ fontSize: "clamp(1.4rem, 2.8vw, 2.2rem)" }}
          >
            {ar ? "إنجازاتنا في أرقام" : "Our Achievements in Numbers"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
            {ar
              ? "مسيرة تمتد لأكثر من ثلاثة عقود من الإنجازات الموثقة عبر قطاعات متعددة، تجسد التزامنا بالتميز والنمو المستدام."
              : "A journey spanning over three decades of documented achievements across multiple sectors, reflecting our commitment to excellence and sustainable growth."}
          </p>
        </div>

        {/* ── Achievement counter cards ── */}
        <div
          className={cn(
            "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
            "transition-[opacity,transform] duration-700 ease-out",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
          style={{ transitionDelay: "80ms" }}
        >
          {achievements.map((item) => (
            <AchievementCard key={item.labelEn} item={item} ar={ar} active={visible} />
          ))}
        </div>

        {/* ── Divider ── */}
        <div className="my-16 h-px w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)" }} />

        {/* ── Performance Ratios header ── */}
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="text-[0.6875rem] uppercase tracking-[0.18em] text-white/45"
            style={{
              fontFamily: ar ? "var(--font-body)" : "var(--font-mono)",
              letterSpacing: ar ? 0 : undefined,
              textTransform: ar ? "none" : undefined,
            }}
          >
            {ar ? "مؤشرات الأداء" : "Performance Indicators"}
          </p>
          <h2 className="mt-4 font-head font-bold leading-tight text-white" style={{ fontSize: "clamp(1.3rem, 2.4vw, 2rem)" }}>
            {ar ? "نسب الجودة والرضا" : "Quality & Satisfaction Ratios"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
            {ar
              ? "مؤشرات الأداء الرئيسية التي نقيس بها التزامنا بالجودة والتسليم ورضا العملاء والسلامة المهنية."
              : "Key performance indicators by which we measure our commitment to quality, delivery, client satisfaction, and workplace safety."}
          </p>
        </div>

        {/* ── Ratio arc cards ── */}
        <div
          className={cn(
            "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
            "transition-[opacity,transform] duration-700 ease-out",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
          style={{ transitionDelay: "220ms" }}
        >
          {ratios.map((item) => (
            <RatioCard key={item.labelEn} item={item} ar={ar} active={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
