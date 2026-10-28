import React from "react";

export function highlightBrand(text: string | React.ReactNode): React.ReactNode {
  if (typeof text !== "string") return text;
  const regex = /(مجموعة سامي بن عياد|SAMI BIN AYYAD GROUP|Sami Bin Ayyad Group)/gi;
  if (!regex.test(text)) return text;

  const parts = text.split(/(مجموعة سامي بن عياد|SAMI BIN AYYAD GROUP|Sami Bin Ayyad Group)/gi);
  return parts.map((part, i) => {
    if (part === "مجموعة سامي بن عياد" || part.toUpperCase() === "SAMI BIN AYYAD GROUP") {
      return (
        <strong key={i} className="font-bold text-brand-orange">
          {part}
        </strong>
      );
    }
    return part;
  });
}

export function BrandText({ children, className }: { children: React.ReactNode; className?: string }) {
  if (typeof children === "string") {
    return <span className={className}>{highlightBrand(children)}</span>;
  }
  return <span className={className}>{children}</span>;
}
