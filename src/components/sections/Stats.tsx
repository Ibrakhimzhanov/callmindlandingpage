"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, TrendingUp, Clock, Activity } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Phone,
  TrendingUp,
  Clock,
  Activity,
};

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref}>
      {isInView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {value.toLocaleString()}{suffix}
        </motion.span>
      ) : (
        "0"
      )}
    </span>
  );
}

export default function Stats() {
  const t = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 lg:py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {t.stats.items.map((stat, index) => {
            const Icon = iconMap[stat.icon || "Activity"];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 text-center hover:shadow-lg transition-shadow cursor-default"
              >
                {/* Icon */}
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent-light flex items-center justify-center">
                  {Icon && <Icon className="w-6 h-6 text-accent" />}
                </div>

                {/* Number */}
                <div className="text-3xl lg:text-4xl font-bold text-text-primary mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  {stat.isStatic ? (
                    <span>{stat.suffix}</span>
                  ) : (
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  )}
                </div>

                {/* Label */}
                <p className="text-text-secondary text-sm">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
