import React from "react";
import { APPAREL_EGYPTIAN_NETWORK } from "@/lib/apparel-trade-data";

interface ApparelFactoriesNetworkProps {
  ar?: boolean;
}

export function ApparelFactoriesNetwork({ ar = true }: ApparelFactoriesNetworkProps) {
  const net = APPAREL_EGYPTIAN_NETWORK;

  return (
    <div id="apparel-factories" className="interactive-card glass-box-interactive w-full rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl backdrop-blur-2xl transition-all duration-300">
      {/* Header */}
      <div>
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
          <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
          <span>{ar ? "القسم التاسع: شبكة المصانع الشريكة" : "Section 9: Partner Manufacturing Network"}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5 leading-snug">
          {ar ? net.headlineAr : net.headlineEn}
        </h2>
        <p className="text-xs sm:text-sm text-foreground/90 mt-3 leading-relaxed max-w-5xl font-medium bg-background/50 p-4 rounded-2xl border border-border/60 whitespace-pre-line">
          {ar ? net.bodyAr : net.bodyEn}
        </p>
      </div>

      {/* Network Stats Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="rounded-2xl border border-border/80 bg-background/70 p-4 text-center">
          <span className="font-head text-2xl sm:text-3xl font-extrabold text-brand-orange">+150</span>
          <p className="text-xs font-bold text-foreground mt-1">
            {ar ? "مصنع شريك معتمد" : "Certified Partner Factories"}
          </p>
        </div>
        <div className="rounded-2xl border border-border/80 bg-background/70 p-4 text-center">
          <span className="font-head text-2xl sm:text-3xl font-extrabold text-brand-green">8</span>
          <p className="text-xs font-bold text-foreground mt-1">
            {ar ? "تخصصات تصنيعية فرعية" : "Manufacturing Specialties"}
          </p>
        </div>
        <div className="rounded-2xl border border-border/80 bg-background/70 p-4 text-center">
          <span className="font-head text-2xl sm:text-3xl font-extrabold text-blue-500">10+</span>
          <p className="text-xs font-bold text-foreground mt-1">
            {ar ? "مدن وقلاع صناعية كبرى" : "Major Industrial Hubs"}
          </p>
        </div>
        <div className="rounded-2xl border border-border/80 bg-background/70 p-4 text-center">
          <span className="font-head text-2xl sm:text-3xl font-extrabold text-amber-500">100%</span>
          <p className="text-xs font-bold text-foreground mt-1">
            {ar ? "مطابقة لمواصفات التصدير" : "Export Compliance Rate"}
          </p>
        </div>
      </div>

      {/* Sub-specialties Grid */}
      <div className="space-y-3 pt-2">
        <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">
          {ar ? "التخصصات الصناعية الفرعية لشبكة المصانع الشريكة:" : "Specialized Manufacturing Clusters:"}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {(net.subSpecialties || []).map((spec) => (
            <div
              key={spec.key}
              className="flex flex-col justify-between rounded-2xl border border-border/80 bg-background/60 p-4.5 backdrop-blur-md shadow-xs transition-all duration-300 hover:border-brand-orange/50 hover:shadow-md"
            >
              <div>
                <div className="mb-2">
                  <h4 className="font-bold text-xs sm:text-sm text-foreground">
                    {ar ? spec.labelAr : spec.labelEn}
                  </h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {ar ? spec.descAr : spec.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
