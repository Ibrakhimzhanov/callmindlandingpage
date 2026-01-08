"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import FadeInView from "@/components/animations/FadeInView";

interface CTAProps {
  onCtaClick: () => void;
}

export default function CTA({ onCtaClick }: CTAProps) {
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
              Birinchi 50 ta qo'ng'iroq bepul
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Har kuni yo'qotilayotgan{" "}
              <span className="gradient-text">sotuvlarni to'xtating</span>
            </h2>

            <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
              5 daqiqada ro'yxatdan o'ting va qo'ng'iroqlaringizni professional tahlil qilishni boshlang
            </p>

            <Button size="lg" onClick={onCtaClick} className="group">
              Hoziroq boshlash
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <p className="text-text-muted text-sm mt-6">
              Kredit karta talab qilinmaydi • Cheksiz sinov muddati
            </p>
          </motion.div>
        </FadeInView>
      </div>
    </section>
  );
}
