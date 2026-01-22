"use client";

import { useLanguage, Language } from "./context";
import { translations, Translations } from "./translations";

export { LanguageProvider, useLanguage } from "./context";
export type { Language } from "./context";
export { translations } from "./translations";
export type { Translations } from "./translations";

export function useTranslation(): Translations {
  const { language } = useLanguage();
  return translations[language];
}
