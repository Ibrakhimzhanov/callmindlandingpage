"use client";

import { LanguageProvider as Provider } from "@/lib/i18n";

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  return <Provider>{children}</Provider>;
}
