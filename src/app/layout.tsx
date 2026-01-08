import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
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
      <body className={`${inter.variable} antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
