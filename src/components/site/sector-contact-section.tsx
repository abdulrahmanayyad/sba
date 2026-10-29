import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/process-steps";

export function SectorContactSection({ ar }: { ar: boolean }) {
  return (
    <section id="contact" className="site-container scroll-mt-24 pt-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/20 bg-background/75 p-8 sm:p-12 shadow-[0_8px_40px_rgba(0,0,0,0.18)] backdrop-blur-2xl grid gap-8 lg:grid-cols-[1.2fr_1fr] items-center">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
            <span>{ar ? "تواصل معنا" : "Contact Us"}</span>
          </div>
          <h2 className="section-title mt-2 text-foreground">{ar ? "لنبن ما هو قادم" : "Let's Build What's Next"}</h2>
          <p className="section-intro mt-4 text-muted-foreground">
            {ar
              ? "استكشف فرص التعاون مع مجموعة سامي عياد في التصنيع والإنشاءات والحلول البيئية والمنتجات الطبيعية."
              : "Explore opportunities to collaborate with SAMI BIN AYYAD GROUP across manufacturing, construction, environmental solutions, and natural products."}
          </p>
        </div>
        <div className="min-w-0 flex flex-col gap-4">
          <Button asChild variant="ghost" className="group relative h-auto w-full justify-start gap-4 overflow-hidden rounded-2xl border border-border bg-background/60 p-5 text-start whitespace-normal hover:border-brand-green hover:shadow-lg sm:p-6 backdrop-blur-md">
            <a data-email-contact href="mailto:info@sami-trade.com">
              <span data-email-icon className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green"><Mail aria-hidden="true" className="size-5" /></span>
              <span data-email-copy className="min-w-0 flex-1">
                <span className="block font-head text-sm font-bold text-foreground/80">{ar ? "البريد الإلكتروني" : "Email"}</span>
                <span dir="ltr" className="mt-1 block break-all font-head text-base font-bold text-foreground sm:text-lg">info@sami-trade.com</span>
              </span>
              <span data-email-arrow className="shrink-0 text-brand-green"><ArrowRight aria-hidden="true" className="size-5 rtl:rotate-180" /></span>
            </a>
          </Button>

          <Button asChild variant="ghost" className="group relative h-auto w-full justify-start gap-4 overflow-hidden rounded-2xl border border-border bg-background/60 p-5 text-start whitespace-normal hover:border-brand-green hover:shadow-lg sm:p-6 backdrop-blur-md">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green"><MessageCircle aria-hidden="true" className="size-5" /></span>
              <span className="min-w-0 flex-1">
                <span className="block font-head text-sm font-bold text-foreground/80">WhatsApp</span>
                <span dir="ltr" className="mt-1 block font-head text-base font-bold text-foreground sm:text-lg">+20 12 222 380 72</span>
              </span>
              <span className="shrink-0 text-brand-green"><ArrowRight aria-hidden="true" className="size-5 rtl:rotate-180" /></span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

