"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import FadeInView from "@/components/animations/FadeInView";
import { useTranslation } from "@/lib/i18n";

interface CTAProps {
  onCtaClick: () => void;
}

export default function CTA({ onCtaClick }: CTAProps) {
  const t = useTranslation();

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="glass rounded-3xl p-8 sm:p-12 text-center glow-purple-sm"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              {t.cta.badge}
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              {t.cta.titlePart1}{" "}
              <span className="gradient-text">{t.cta.titleHighlight}</span>
            </h2>

            <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
              {t.cta.subtitle}
            </p>

            <Button size="lg" onClick={onCtaClick} className="group">
              {t.cta.button}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <p className="text-text-muted text-sm mt-6">{t.cta.note}</p>
          </motion.div>
        </FadeInView>
      </div>
    </section>
  );
}
