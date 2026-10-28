import { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { Search, ShieldCheck, Trophy, Users, ArrowRight } from "lucide-react";

import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/language-context";
import { garmentClientLogos } from "../garment-media-data";

export function GarmentClientsTab() {
  const { language } = useLanguage();
  const ar = language === "AR";
  const [searchQuery, setSearchQuery] = useState("");

  const filteredClients = useMemo(() => {
    if (!searchQuery.trim()) return garmentClientLogos;
    const q = searchQuery.toLowerCase().trim();
    return garmentClientLogos.filter((client) => client.name.toLowerCase().includes(q));
  }, [searchQuery]);

  return (
    <div className="space-y-16 py-8">
      <Reveal>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span>{ar ? "عملاؤنا" : "Our Clients"}</span>
            </div>
            <h2 className="mt-2 font-head text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {ar ? "نصنع لكبرى العلامات التجارية والشركات الرائدة" : "Manufacturing for Leading Global & Regional Fashion Labels"}
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              {ar
                ? "نفخر بثقة كبرى العلامات التجارية ومجموعات التجزئة في كفاءتنا وجودة تصنيعنا، حيث نوفر لهم منتجات تتوافق بدقة مع معاييرهم العالمية وهويتهم التجارية الخاصة."
                : "We are proud of the trust placed in our manufacturing precision and reliability by prominent fashion houses, multinational corporations, and major retail chains."}
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute start-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={ar ? "ابحث عن اسم العلامة..." : "Search brand name..."}
              className="w-full rounded-xl border border-border bg-card ps-9 pe-4 py-2.5 text-sm text-foreground focus:border-brand-orange focus:outline-none shadow-sm transition"
            />
          </div>
        </div>

        {/* Clients Slides / Carousel */}
        <div className="relative mt-10">
          <div className="flex gap-4 overflow-x-auto pb-4 pt-1 no-scrollbar scroll-smooth">
            {filteredClients.map((client) => (
              <div
                key={client.id}
                className="group relative flex w-44 sm:w-52 shrink-0 flex-col items-center justify-center rounded-2xl border border-border/80 bg-card p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-orange/50 hover:shadow-md"
              >
                <div className="relative flex h-24 w-full items-center justify-center overflow-hidden rounded-xl bg-white p-3">
                  <img
                    src={client.src}
                    alt={client.name}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain filter transition duration-300 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                    }}
                  />
                </div>
                <span className="mt-3 text-center font-head text-xs font-bold text-foreground transition group-hover:text-brand-orange line-clamp-1">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {filteredClients.length === 0 && (
          <div className="py-16 text-center text-muted-foreground">
            <p className="text-base">{ar ? "لم يتم العثور على علامات تطابق البحث." : "No brands found matching your search."}</p>
          </div>
        )}
      </Reveal>
    </div>
  );
}


