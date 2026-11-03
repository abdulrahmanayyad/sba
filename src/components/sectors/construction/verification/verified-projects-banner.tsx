import React from "react";
import {
  Building2,
  CheckCircle2,
  FileCheck,
  FileSearch,
  Lock,
  Shield,
  ShieldCheck,
} from "lucide-react";
import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";

interface VerifiedProjectsBannerProps {
  ar: boolean;
  onRequestOpen?: () => void;
}

export function VerifiedProjectsBanner({ ar, onRequestOpen }: VerifiedProjectsBannerProps) {
  return (
    <Reveal>
      <div className="relative overflow-hidden rounded-3xl border border-brand-green/20 bg-gradient-to-br from-brand-green/10 via-background to-brand-orange/5 p-6 sm:p-8 md:p-10 shadow-lg backdrop-blur-xl mb-12">
        {/* Glow Effects */}
        <div className="pointer-events-none absolute -end-24 -top-24 size-72 rounded-full bg-brand-green/10 blur-3xl" />
        <div className="pointer-events-none absolute -start-24 -bottom-24 size-72 rounded-full bg-brand-orange/10 blur-3xl" />

        <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-green/15 px-3.5 py-1 text-xs font-bold text-brand-green-text border border-brand-green/30">
              <ShieldCheck className="size-4" />
              <span>{ar ? "المشروعات الموثقة · Verified Projects" : "Verified Projects & Transparency"}</span>
            </div>

            <h3 className="font-head text-xl sm:text-2xl md:text-3xl font-bold text-foreground leading-snug">
              {ar
                ? "منظومة التحقق المؤسسي من المشروعات وسابقة الأعمال"
                : "Institutional Project Verification & Due Diligence"}
            </h3>

            <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
              {ar
                ? "نؤمن بأن المصداقية لا تُبنى على عرض المشروعات فحسب، بل على إمكانية التحقق من حقيقتها. لذلك تتيح شركة سامي بن عياد للشركات والجهات المؤهلة إمكانية طلب الاطلاع على المستندات الداعمة لمشروعاتها وسابقة أعمالها، وفق إجراءات تحقق مهنية تضمن جدية الطلب وتحافظ على سرية المعلومات والحقوق التعاقدية للأطراف المعنية."
                : "We believe credibility is built not only on showcasing projects, but on the ability to independently verify their authenticity. Sami Bin Ayyad Group allows qualified corporate clients and awarding authorities to request access to official supporting documents under strict professional verification protocols."}
            </p>

            {/* Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-foreground/90 bg-background/60 p-2.5 rounded-xl border border-border/60">
                <FileCheck className="size-4 text-brand-green shrink-0" />
                <span>{ar ? "عقود ومحاضر استلام موثقة" : "Official Contracts & Handovers"}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-foreground/90 bg-background/60 p-2.5 rounded-xl border border-border/60">
                <Lock className="size-4 text-brand-orange shrink-0" />
                <span>{ar ? "حماية البيانات وسرية التعاقد" : "Strict NDA & Data Redaction"}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-foreground/90 bg-background/60 p-2.5 rounded-xl border border-border/60">
                <Shield className="size-4 text-brand-green shrink-0" />
                <span>{ar ? "مراجعة نظامية للهوية المهنية" : "Corporate Identity Vetting"}</span>
              </div>
            </div>
          </div>

          {/* Action Box */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center gap-3 border-t lg:border-t-0 lg:border-s border-border/60 pt-6 lg:pt-0 lg:ps-8">
            <span className="text-xs font-medium text-muted-foreground text-start lg:text-end">
              {ar
                ? "يمكنك طلب التحقق مباشرة من داخل بطاقة أي مشروع من مشروعاتنا الـ 57 المعتمدة."
                : "Request direct verification from any of our 57 verified project dossiers."}
            </span>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 w-full">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const el = document.getElementById("projects-grid-anchor");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="rounded-full border-brand-green text-brand-green-text hover:bg-brand-green hover:text-white text-xs font-head font-bold w-full justify-center"
              >
                <FileSearch className="size-3.5 me-1.5" />
                {ar ? "استعراض المشروعات الموثقة" : "Explore Verified Projects"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
