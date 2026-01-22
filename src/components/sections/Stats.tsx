"use client";

import { motion } from "framer-motion";
import { Phone, TrendingUp, Clock, Activity } from "lucide-react";
import FadeInView from "@/components/animations/FadeInView";
import Counter from "@/components/animations/Counter";
import { useTranslation } from "@/lib/i18n";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Phone,
  TrendingUp,
  Clock,
  Activity,
};

export default function Stats() {
  const t = useTranslation();

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {t.stats.items.map((stat, index) => {
            const Icon = iconMap[stat.icon || "Activity"];
            return (
              <FadeInView key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="relative group"
                >
                  {/* Card */}
                  <div className="glass rounded-2xl p-6 md:p-8 text-center h-full border border-white/5 hover:border-accent/30 transition-all duration-300">
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Icon */}
                    <div className="relative z-10 w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center group-hover:from-accent/30 group-hover:to-primary/30 transition-all duration-300">
                      {Icon && (
                        <Icon className="w-7 h-7 md:w-8 md:h-8 text-accent" />
                      )}
                    </div>

                    {/* Number */}
                    <div className="relative z-10 text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                      {stat.isStatic ? (
                        <span>{stat.suffix}</span>
                      ) : (
                        <Counter value={stat.value} suffix={stat.suffix} />
                      )}
                    </div>

                    {/* Label */}
                    <p className="relative z-10 text-text-secondary text-sm md:text-base">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              </FadeInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
