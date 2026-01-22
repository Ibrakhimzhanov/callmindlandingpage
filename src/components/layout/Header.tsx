"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { useLanguage, useTranslation, Language } from "@/lib/i18n";

interface HeaderProps {
  onCtaClick?: () => void;
}

function LanguageSwitcher({ isScrolled }: { isScrolled: boolean }) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages: { code: Language; label: string }[] = [
    { code: "uz", label: "O'zbek" },
    { code: "ru", label: "Русский" },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
          isScrolled
            ? "text-text-secondary hover:text-text-primary hover:bg-background-secondary"
            : "text-white/80 hover:text-white hover:bg-white/10"
        }`}
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">{language.toUpperCase()}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 top-full mt-1 bg-white border border-border rounded-xl shadow-lg overflow-hidden z-50 min-w-[140px]"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-2.5 text-left text-sm transition-colors cursor-pointer ${
                    language === lang.code
                      ? "bg-accent-light text-accent font-medium"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Header({ onCtaClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslation();

  const navLinks = [
    { label: t.nav.functions, href: "#functions" },
    { label: t.nav.pricing, href: "#pricing" },
    { label: t.nav.faq, href: "#faq" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-border shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-white.png"
              alt="CallMind"
              width={140}
              height={40}
              className={`h-9 w-auto transition-all ${isScrolled ? "brightness-0" : ""}`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={`/${link.href}`}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isScrolled
                    ? "text-text-secondary hover:text-text-primary hover:bg-background-secondary"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            <LanguageSwitcher isScrolled={isScrolled} />

            <Link
              href="https://panel.callmind.uz/login"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isScrolled
                  ? "text-text-secondary hover:text-text-primary hover:bg-background-secondary"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {t.header.login}
            </Link>

            {onCtaClick ? (
              <Button onClick={onCtaClick} size="md">
                {t.header.cta}
              </Button>
            ) : (
              <Link href="/#contact">
                <Button size="md">{t.header.cta}</Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors cursor-pointer ${
              isScrolled
                ? "text-text-primary hover:bg-background-secondary"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-border mt-2 overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={`/${link.href}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-text-secondary hover:text-text-primary hover:bg-background-secondary transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}

              <div className="flex items-center justify-between py-3 mt-2 border-t border-border">
                <LanguageSwitcher isScrolled={true} />
                <Link
                  href="https://panel.callmind.uz/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-background-secondary transition-colors font-medium"
                >
                  {t.header.login}
                </Link>
              </div>

              {onCtaClick ? (
                <Button onClick={onCtaClick} className="mt-2 w-full">
                  {t.header.cta}
                </Button>
              ) : (
                <Link href="/#contact" className="mt-2">
                  <Button className="w-full">{t.header.cta}</Button>
                </Link>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
