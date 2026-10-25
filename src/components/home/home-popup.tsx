import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MediaFrame } from "@/components/site/section";
import copy from "@/i18n/home-en.json";

export function HomePopup({ trigger, title, description, code }: { trigger: ReactNode; title: string; description: string; code?: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="home-popup w-[calc(100%-2rem)] max-w-3xl max-h-[85dvh] overflow-y-auto p-0">
        <div className="border-b border-border px-6 py-5 pe-14"><p className="eyebrow">{code ?? copy.capabilities.eyebrow}</p></div>
        <div className={code ? "grid md:grid-cols-2" : "block"}>
          {code && <MediaFrame label={`${code} · FRONT`} className="aspect-[4/5] border-0 border-b md:border-b-0 md:border-e" />}
          <div className="flex flex-col justify-center p-6 md:p-8">
            <DialogTitle className="font-head text-3xl font-medium leading-tight">{title}</DialogTitle>
            <DialogDescription className="mt-5 text-base leading-7">{description}</DialogDescription>
            <div className="mt-8 flex flex-wrap gap-3">
              {code ? <><Button asChild variant="outline"><Link to="/models/$code" params={{ code }}>{copy.popup.viewModel}</Link></Button><Button asChild variant="primary"><Link to="/contact" search={{ model: code }}>{copy.popup.requestModel}</Link></Button></> : <Button asChild variant="primary"><Link to="/contact">{copy.hero.contact}</Link></Button>}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}