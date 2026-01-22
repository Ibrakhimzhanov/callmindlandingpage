import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import LanguageProvider from "@/components/providers/LanguageProvider";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "CallMind - Har bir qo'ng'iroq muhim | AI Call Analytics",
  description: "CallMind AI har bir suhbatni tahlil qilib, sotuv yo'qotishlarini aniqlaydi. O'zbekiston call-centerlari uchun AI-powered qo'ng'iroq tahlili.",
  keywords: ["call center", "AI analytics", "qo'ng'iroq tahlili", "Uzbekistan", "sotuv", "CRM"],
  authors: [{ name: "CallMind" }],
  openGraph: {
    title: "CallMind - Har bir qo'ng'iroq muhim",
    description: "AI-powered qo'ng'iroq tahlili O'zbekiston call-centerlari uchun",
    type: "website",
    locale: "uz_UZ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className="scroll-smooth">
      <body className={`${plusJakarta.variable} ${dmSans.variable} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
