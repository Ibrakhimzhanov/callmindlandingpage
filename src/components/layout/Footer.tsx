"use client";

import { Phone, Mail, Send, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslation();

  const navLinks = [
    { label: t.nav.functions, href: "#functions" },
    { label: t.nav.pricing, href: "#pricing" },
    { label: t.nav.faq, href: "#faq" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="bg-primary border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/logo-white.png"
                alt="CallMind"
                width={150}
                height={50}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-slate-400 mb-6 max-w-sm leading-relaxed">
              {t.site.tagline}. {t.footer.description}
            </p>
            <div className="flex gap-3">
              <a
                href={SITE_CONFIG.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-800 hover:bg-accent flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5 text-slate-300" />
              </a>
              <a
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-800 hover:bg-accent flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-slate-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white font-semibold mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {t.footer.pages}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-accent transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white font-semibold mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {t.footer.contact}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={"mailto:" + SITE_CONFIG.email}
                  className="flex items-center gap-3 text-slate-400 hover:text-accent transition-colors cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={"tel:" + SITE_CONFIG.phone.replace(/\s/g, "")}
                  className="flex items-center gap-3 text-slate-400 hover:text-accent transition-colors cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  {SITE_CONFIG.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} {SITE_CONFIG.name}. {t.footer.rights}.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-slate-500 hover:text-accent text-sm transition-colors cursor-pointer"
            >
              {t.footer.privacy}
            </Link>
            <Link
              href="/terms"
              className="text-slate-500 hover:text-accent text-sm transition-colors cursor-pointer"
            >
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
