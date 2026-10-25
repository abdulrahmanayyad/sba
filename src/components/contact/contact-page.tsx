import { useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { Upload } from "lucide-react";

import { Reveal } from "@/components/home/reveal";
import { fieldClass, labelClass } from "@/components/site/section";
import { Button } from "@/components/ui/button";
import copy from "@/i18n/pages-en.json";
import { supabase } from "@/integrations/supabase/client";
import { modelsQueryOptions } from "@/lib/models";
import { CONTACT_EMAIL, WHATSAPP_URL } from "@/lib/process-steps";

const MAX_FILE_BYTES = 25 * 1024 * 1024;

const emptyForm = {
  company: "",
  contactName: "",
  email: "",
  phone: "",
  country: "",
  productType: "",
  quantity: "",
  timeline: "",
  message: "",
};

type ContactModel = { code: string; name: string; fabric: string; colour: string } | undefined;

export function ContactPage({ modelCode = "" }: { modelCode?: string }) {
  const { data: models } = useSuspenseQuery(modelsQueryOptions);
  const [form, setForm] = useState(emptyForm);
  const [files, setFiles] = useState<File[]>([]);
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState("");
  const [uploadWarning, setUploadWarning] = useState(false);

  const model = models.find((item) => item.code.toLowerCase() === modelCode.toLowerCase());
  const update = (key: keyof typeof emptyForm) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((current) => ({ ...current, [key]: event.target.value }));

  const addFiles = (selected: FileList | null) => {
    if (!selected) return;
    const accepted = [...selected].filter((file) => file.size <= MAX_FILE_BYTES && !files.some((existing) => existing.name === file.name && existing.size === file.size));
    setFiles((current) => [...current, ...accepted]);
  };

  const submit = async () => {
    if (!form.company.trim() || !form.contactName.trim() || !form.email.trim()) {
      setError(copy.contact.errorRequired);
      return;
    }
    if (!consent) {
      setError(copy.contact.errorConsent);
      return;
    }

    setError("");
    setStatus("sending");

    const paths: string[] = [];
    let uploadFailed = false;
    for (const file of files) {
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]+/g, "-");
      const path = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}/${safeName}`;
      const { error: uploadError } = await supabase.storage.from("inquiries").upload(path, file);
      if (uploadError) uploadFailed = true;
      else paths.push(path);
    }

    const { error: insertError } = await supabase.from("inquiries").insert({
      company: form.company,
      contact_name: form.contactName,
      email: form.email,
      phone: form.phone,
      country: form.country,
      model_code: model?.code ?? "",
      product_type: form.productType,
      quantity: form.quantity,
      timeline: form.timeline,
      message: form.message,
      file_paths: paths,
    });

    if (insertError) {
      setStatus("idle");
      setError(copy.contact.errorSend);
      return;
    }

    setUploadWarning(uploadFailed);
    setStatus("done");
  };

  const summary = [
    [copy.contact.requestingModel, model ? `${model.code} · ${model.name}` : copy.contact.noModel],
    [copy.contact.productType, form.productType],
    [copy.contact.quantity, form.quantity],
    [copy.contact.timeline, form.timeline],
  ].filter(([, value]) => value);

  return (
    <div className="w-full">
      <section className="section-band bg-background">
        <div className="site-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <aside className="self-start lg:sticky lg:top-28">
            <Reveal>
              <p className="eyebrow">{copy.contact.eyebrow}</p>
              <h1 className="mt-4 text-[clamp(1.85rem,6vw,3.75rem)] font-medium leading-[1.08]">{copy.contact.title}</h1>
              <p className="mt-5 text-muted-foreground">{copy.contact.intro}</p>
            </Reveal>

            {/* On small screens these notes sit under the form so the fields come first. */}
            <div className="hidden lg:block">
              <AsideDetails model={model} />
            </div>

            {status === "done" && summary.length > 0 && (
              <Reveal className="mt-8 border-t border-border pt-7">
                <p className={labelClass}>{copy.contact.summary}</p>
                <div className="mt-4 grid gap-2.5 text-sm">
                  {summary.map(([label, value]) => (
                    <div key={label} className="flex flex-wrap justify-between gap-x-4 gap-y-1 border-t border-border pt-2.5">
                      <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">{label}</span>
                      <span className="text-end">{value}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}
          </aside>

          <div>
            {status === "done" ? (
              <div className="rounded-3xl border border-border bg-page-alt p-6 sm:p-10 md:p-14">
                <p className="eyebrow">{copy.contact.eyebrow}</p>
                <h2 className="mt-4 text-[clamp(1.7rem,4vw,3.25rem)] font-medium leading-[1.08]">{copy.contact.thankYou}</h2>
                <p className="mt-5 max-w-xl text-muted-foreground">{copy.contact.thankYouBody}</p>
                {uploadWarning && <p className="mt-5 border-l-2 border-brand-orange pl-4 text-sm text-muted-foreground">{copy.contact.uploadFailed}</p>}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild variant="primary" size="lg" className="w-full sm:w-auto"><a href={WHATSAPP_URL} target="_blank" rel="noreferrer">{copy.contact.continueWhatsApp}</a></Button>
                  <Button asChild variant="outline" size="lg" className="w-full sm:w-auto"><Link to="/models">{copy.contact.browseModels}</Link></Button>
                </div>
              </div>
            ) : (
              <form
                className="grid gap-9 sm:gap-12"
                onSubmit={(event) => {
                  event.preventDefault();
                  void submit();
                }}
              >
                <fieldset className="grid gap-5 sm:gap-6">
                  <legend className="eyebrow">{copy.contact.sectionCompany}</legend>
                  <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
                    <Field label={copy.contact.company} required>
                      <input className={fieldClass} value={form.company} onChange={update("company")} autoComplete="organization" />
                    </Field>
                    <Field label={copy.contact.contactName} required>
                      <input className={fieldClass} value={form.contactName} onChange={update("contactName")} autoComplete="name" />
                    </Field>
                    <Field label={copy.contact.email} required>
                      <input className={fieldClass} type="email" value={form.email} onChange={update("email")} autoComplete="email" />
                    </Field>
                    <Field label={copy.contact.phone}>
                      <input className={fieldClass} type="tel" value={form.phone} onChange={update("phone")} autoComplete="tel" />
                    </Field>
                    <Field label={copy.contact.country}>
                      <input className={fieldClass} value={form.country} onChange={update("country")} autoComplete="country-name" />
                    </Field>
                    <Field label={copy.contact.productType}>
                      <input className={fieldClass} value={form.productType} onChange={update("productType")} />
                    </Field>
                  </div>
                </fieldset>

                <fieldset className="grid gap-5 sm:gap-6">
                  <legend className="eyebrow">{copy.contact.sectionProduct}</legend>
                  <Field label={copy.contact.message}>
                    <textarea className={`${fieldClass} min-h-36 sm:min-h-40`} value={form.message} onChange={update("message")} placeholder={copy.contact.messagePlaceholder} />
                  </Field>
                </fieldset>

                <fieldset className="grid gap-5 sm:gap-6">
                  <legend className="eyebrow">{copy.contact.sectionQuantities}</legend>
                  <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
                    <Field label={copy.contact.quantity}>
                      <input className={fieldClass} value={form.quantity} onChange={update("quantity")} />
                    </Field>
                    <Field label={copy.contact.timeline}>
                      <input className={fieldClass} value={form.timeline} onChange={update("timeline")} />
                    </Field>
                  </div>
                </fieldset>

                <fieldset className="grid gap-5 sm:gap-6">
                  <legend className="eyebrow">{copy.contact.sectionFiles}</legend>
                  <label className="flex cursor-pointer flex-col items-center gap-3 rounded-3xl border border-dashed border-input bg-background px-5 py-8 text-center transition-colors hover:border-brand-green">
                    <Upload aria-hidden="true" className="size-6 text-muted-foreground" />
                    <span className="rounded-full bg-secondary px-5 py-2 font-body text-sm font-semibold text-secondary-foreground">{copy.contact.upload}</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">{copy.contact.uploadHint}</span>
                    <input
                      type="file"
                      multiple
                      accept=".pdf,.ai,.xlsx,.jpg,.jpeg,.png"
                      onChange={(event) => addFiles(event.target.files)}
                      className="sr-only"
                    />
                  </label>
                  {files.length > 0 && (
                    <ul className="grid gap-2">
                      {files.map((file, index) => (
                        <li key={`${file.name}-${index}`} className="flex items-center justify-between gap-4 border-t border-border pt-2 text-sm">
                          <span className="truncate">{file.name}</span>
                          <span className="flex shrink-0 items-center gap-2">
                            <span className="font-mono text-[10px] text-muted-foreground">{Math.round(file.size / 1024)} KB</span>
                            <button type="button" aria-label={`Remove ${file.name}`} className="grid size-9 place-items-center rounded-full text-lg text-muted-foreground hover:bg-secondary hover:text-foreground" onClick={() => setFiles((current) => current.filter((_, position) => position !== index))}>
                              ×
                            </button>
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </fieldset>

                <label className="flex items-start gap-3 text-sm text-muted-foreground">
                  <input type="checkbox" className="mt-0.5 size-5 shrink-0 accent-brand-green" checked={consent} onChange={(event) => setConsent(event.target.checked)} />
                  <span>
                    {copy.contact.consent}{" "}
                    <a href={`mailto:${CONTACT_EMAIL}?subject=privacy%20policy`} className="text-brand-green-text underline underline-offset-4">{copy.contact.privacyPolicy}</a>.
                  </span>
                </label>

                {error && <p className="border-l-2 border-brand-orange pl-4 text-sm text-brand-orange-text">{error}</p>}

                <div className="flex flex-col gap-4 border-t border-border pt-7 sm:flex-row sm:items-center sm:gap-4">
                  <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto" disabled={status === "sending"}>{status === "sending" ? copy.contact.sending : copy.contact.send}</Button>
                  <Button asChild variant="outline" size="lg" className="w-full sm:w-auto"><a href={WHATSAPP_URL} target="_blank" rel="noreferrer">{copy.contact.continueWhatsApp}</a></Button>
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">{copy.contact.required}</p>
                </div>
              </form>
            )}

            {status !== "done" && (
              <div className="mt-12 lg:hidden">
                <AsideDetails model={model} />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function AsideDetails({ model }: { model: ContactModel }) {
  return (
    <>
      <Reveal delay={0.08} className="mt-10 border-t border-border pt-7">
        <p className={labelClass}>{copy.contact.requestingModel}</p>
        {model ? (
          <div className="mt-4 rounded-2xl border border-border p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-brand-green-text">{model.code}</p>
            <p className="mt-2 text-lg">{model.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">{model.fabric} · {model.colour}</p>
            <Link to="/models" className="mt-4 inline-block font-mono text-[10px] uppercase tracking-[0.18em] text-brand-green-text underline underline-offset-4">
              {copy.contact.changeModel}
            </Link>
          </div>
        ) : (
          <div className="mt-3 text-sm text-muted-foreground">
            <p>{copy.contact.noModel}</p>
            <Link to="/models" className="mt-2 inline-block font-mono text-[10px] uppercase tracking-[0.18em] text-brand-green-text underline underline-offset-4">{copy.contact.browseModels}</Link>
          </div>
        )}
        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{copy.contact.moq}</p>
        <p className="mt-2 text-sm text-muted-foreground">{copy.contact.moqNote}</p>
      </Reveal>

      <Reveal delay={0.16} className="mt-8 border-t border-border pt-7">
        <p className={labelClass}>{copy.contact.preferToTalk}</p>
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-3 inline-block font-head text-xl text-brand-green-text hover:text-brand-green sm:text-2xl">
          {copy.contact.whatsapp}
        </a>
      </Reveal>

      <Reveal delay={0.24} className="mt-8 border-t border-border pt-7">
        <p className={labelClass}>{copy.contact.whatHappensNext}</p>
        <ol className="mt-4 grid gap-3 text-sm text-muted-foreground">
          {[copy.contact.nextOne, copy.contact.nextTwo, copy.contact.nextThree].map((item, index) => (
            <li key={item} className="border-t border-border pt-3">
              <span className="me-3 font-mono text-[10px] text-brand-green-text">{String(index + 1).padStart(2, "0")}</span>
              {item}
            </li>
          ))}
        </ol>
      </Reveal>
    </>
  );
}

function Field({ label, required = false, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="grid gap-2">
      <span className={labelClass}>
        {label}
        {required && <span className="text-brand-orange-text"> *</span>}
        {!required && <span className="ms-2 normal-case tracking-normal opacity-60">({copy.contact.optional})</span>}
      </span>
      {children}
    </label>
  );
}
