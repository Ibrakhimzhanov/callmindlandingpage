"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Upload, Brain, BarChart3, ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Upload,
  Brain,
  BarChart3,
};

export default function Solution() {
  const t = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            CallMind{" "}
            <span className="text-accent">
              {t.solution.titleHighlight || "qanday ishlaydi"}?
            </span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            {t.solution.subtitle}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-24 left-[16.67%] right-[16.67%] h-0.5 bg-border" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {t.solution.steps.map((step, index) => {
              const Icon = iconMap[step.icon];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative text-center"
                >
                  {/* Step icon */}
                  <div className="relative z-10 w-20 h-20 mx-auto mb-6">
                    <div className="w-full h-full rounded-2xl bg-accent flex items-center justify-center shadow-lg shadow-accent/20">
                      {Icon && <Icon className="w-10 h-10 text-white" />}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white border-2 border-accent flex items-center justify-center text-accent font-bold text-sm shadow-sm">
                      {step.step}
                    </div>
                  </div>

                  <h3
                    className="text-xl font-bold text-text-primary mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-text-secondary max-w-xs mx-auto">
                    {step.description}
                  </p>

                  {/* Arrow between steps */}
                  {index < t.solution.steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 -right-6 z-20">
                      <ArrowRight className="w-6 h-6 text-accent" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
