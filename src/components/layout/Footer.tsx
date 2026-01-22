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
    <footer className="bg-primary/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
            <p className="text-text-secondary mb-4 max-w-sm">
              {t.site.tagline}. {t.footer.description}
            </p>
            <div className="flex gap-4">
              <a
                href={SITE_CONFIG.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-surface hover:bg-accent/20 flex items-center justify-center transition-colors"
              >
                <Send className="w-5 h-5 text-text-secondary" />
              </a>
              <a
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-surface hover:bg-accent/20 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5 text-text-secondary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.pages}</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-text-secondary hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.contact}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={"mailto:" + SITE_CONFIG.email}
                  className="flex items-center gap-2 text-text-secondary hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={"tel:" + SITE_CONFIG.phone.replace(/\s/g, "")}
                  className="flex items-center gap-2 text-text-secondary hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {SITE_CONFIG.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            &copy; {currentYear} {SITE_CONFIG.name}. {t.footer.rights}.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-text-muted hover:text-white text-sm transition-colors"
            >
              {t.footer.privacy}
            </Link>
            <Link
              href="/terms"
              className="text-text-muted hover:text-white text-sm transition-colors"
            >
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
