import { createContext, useContext } from "react";
import type { Language } from "./index";

export interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const LanguageContext = createContext<LanguageContextValue>({ language: "EN", setLanguage: () => undefined });

export const LanguageProvider = LanguageContext.Provider;

export function useLanguage() {
  return useContext(LanguageContext);
}


