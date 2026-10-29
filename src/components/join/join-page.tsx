import {
  CheckCircle2,
  Mail,
  MessageCircle,
} from "lucide-react";

import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/language-context";
import { CONTACT_EMAIL, WHATSAPP_URL } from "@/lib/process-steps";
import { JoinForm } from "./join-form";
import { joinTracks, type JoinTrackId } from "./join-data";

interface JoinPageProps {
  trackId: JoinTrackId;
}

export function JoinPage({ trackId }: JoinPageProps) {
  const { language } = useLanguage();
  const ar = language === "AR";
  const track = joinTracks[trackId];

  return (
    <div className="w-full">
      {/* 1. SECTOR HERO BANNER */}
      <section className="relative w-full overflow-hidden text-footer-foreground min-h-[50vh] sm:min-h-[58vh] flex items-center">
        <img
          data-clip-reveal
          src={track.heroImage}
          alt={ar ? track.headlineAr : track.headlineEn}
          className="absolute inset-0 size-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-footer via-footer/85 to-footer/70" />

        <div className="site-container relative w-full py-16 sm:py-24 z-10">
          <Reveal>
            {trackId !== "group" && (
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-1.5 text-xs font-bold tracking-wide text-white backdrop-blur-md mb-3">
                <span className="size-2 rounded-full bg-brand-orange animate-pulse" />
                <span>{ar ? track.eyebrowAr : track.eyebrowEn}</span>
              </div>
            )}

            {((ar && track.headlineAr) || (!ar && track.headlineEn)) ? (
              <h1 className="mt-2 max-w-4xl font-head text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-white drop-shadow-md">
                {ar ? track.headlineAr : track.headlineEn}
              </h1>
            ) : null}

            <p className="mt-4 max-w-3xl font-head text-sm sm:text-base font-medium leading-relaxed text-footer-foreground/90">
              {ar ? track.descriptionAr : track.descriptionEn}
            </p>
          </Reveal>
        </div>
      </section>

      {/* MAIN CONTENT & APPLICATION FORM */}
      <section className="site-container py-12 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] items-start">
          {/* SIDEBAR: Track Overview, Target Audiences & Direct Recruitment Contacts */}
          <aside className="space-y-6 lg:sticky lg:top-36">
            {/* Track Info Card */}
            <div className="rounded-3xl border border-white/40 bg-background/80 p-6 sm:p-8 shadow-sm backdrop-blur-2xl space-y-6 transition-all duration-300 hover:shadow-xl hover:border-brand-orange/40 hover:scale-[1.01]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground">
                  <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                  <span>{ar ? "أهداف المسار" : "Track Purpose"}</span>
                </span>
                <h3 className="mt-3 font-head text-lg font-bold text-foreground">
                  {ar ? track.titleAr : track.titleEn}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-6 text-muted-foreground">
                  {ar ? track.purposeAr : track.purposeEn}
                </p>
              </div>

              {/* Target Audiences */}
              <div className="border-t border-border pt-4">
                <h4 className="font-head text-xs font-bold text-foreground mb-3">
                  {ar ? "نرحب بالتواصل والتعاون مع:" : "Target Audiences & Partners:"}
                </h4>
                <ul className="space-y-2">
                  {(ar ? track.targetAudienceAr : track.targetAudienceEn).map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-foreground/90">
                      <CheckCircle2 className="size-3.5 shrink-0 text-brand-orange" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why Join SBA */}
              <div className="border-t border-border pt-4 space-y-3">
                <h4 className="font-head text-xs font-bold text-foreground">
                  {ar ? "مميزات التعاون مع سامي بن عياد:" : "Why Join SBA Group:"}
                </h4>
                {(ar ? track.perksAr : track.perksEn).map((perk, pIdx) => (
                  <div key={pIdx} className="rounded-2xl border border-border/60 bg-secondary/30 p-3 transition-colors hover:bg-secondary/60">
                    <p className="font-head text-xs font-bold text-foreground">{perk.title}</p>
                    <p className="mt-1 text-[11px] text-muted-foreground leading-relaxed">{perk.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="rounded-3xl border border-white/40 bg-gradient-to-br from-background/90 to-secondary/50 p-6 shadow-sm backdrop-blur-xl space-y-4 transition-all duration-300 hover:shadow-xl hover:border-brand-orange/40 hover:scale-[1.01]">
              <h4 className="font-head text-sm font-bold text-foreground">
                {ar ? "التواصل المباشر مع لجنة الاستقطاب:" : "Direct Recruitment Inquiries:"}
              </h4>
              <p className="text-xs text-muted-foreground">
                {ar
                  ? "للاستفسارات العاجلة أو ملفات الشركات الضخمة، يمكنكم التواصل مباشرة:"
                  : "For corporate proposals or urgent inquiries, contact our team directly:"}
              </p>

              <div className="space-y-2 pt-1">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-background/80 p-3 text-xs font-bold text-foreground hover:border-brand-orange hover:text-brand-orange transition"
                >
                  <Mail className="size-4 text-brand-orange shrink-0" />
                  <span className="truncate">{CONTACT_EMAIL}</span>
                </a>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-border bg-background/80 p-3 text-xs font-bold text-foreground hover:border-brand-green hover:text-brand-green transition"
                >
                  <MessageCircle className="size-4 text-brand-green shrink-0" />
                  <span>{ar ? "المحادثة الفورية عبر واتساب" : "Direct WhatsApp Hotline"}</span>
                </a>
              </div>
            </div>
          </aside>

          {/* MAIN FORM COLUMN */}
          <main className="space-y-6">
            <Reveal>
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground">
                  <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                  <span>{ar ? "نموذج التقديم" : "Official Application Form"}</span>
                </span>
                <h2 className="mt-3 font-head text-2xl sm:text-3xl font-extrabold text-foreground">
                  {ar ? "سجل اهتمامك وشاركنا رؤيتك" : "Submit Your Application or Proposal"}
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {ar
                    ? "يرجى تعبئة الحقول المطلوبة بدقة وتحديد صفة التقديم (فرد أو مؤسسة) لتحويل طلبك فورًا إلى القسم المعني."
                    : "Please fill out the form fields accurately and select your applicant type (individual or organization) to route your submission to the designated team."}
                </p>
              </div>
            </Reveal>

            {/* The Form */}
            <JoinForm track={track} />
          </main>
        </div>
      </section>
    </div>
  );
}
