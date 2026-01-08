"use client";

import { motion } from "framer-motion";
import { Upload, Brain, BarChart3, ArrowRight } from "lucide-react";
import FadeInView from "@/components/animations/FadeInView";
import { SOLUTION_STEPS } from "@/lib/constants";

const iconMap: Record<string, any> = {
  Upload,
  Brain,
  BarChart3,
};

export default function Solution() {
  return (
    <section className="py-24 relative bg-gradient-to-b from-background via-primary/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              CallMind <span className="gradient-text">qanday ishlaydi?</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              3 oddiy qadam bilan qo'ng'iroqlaringizni professional tahlil qiling
            </p>
          </div>
        </FadeInView>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SOLUTION_STEPS.map((step, index) => {
              const Icon = iconMap[step.icon];
              return (
                <FadeInView key={index} delay={index * 0.15}>
                  <div className="relative text-center">
                    {/* Step number */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-accent to-indigo-500 flex items-center justify-center glow-purple"
                    >
                      <Icon className="w-10 h-10 text-white" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-surface border-2 border-accent flex items-center justify-center text-white font-bold">
                        {step.step}
                      </div>
                    </motion.div>

                    <h3 className="text-2xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary">
                      {step.description}
                    </p>

                    {/* Arrow between steps */}
                    {index < SOLUTION_STEPS.length - 1 && (
                      <div className="hidden md:flex absolute top-10 -right-4 z-20">
                        <ArrowRight className="w-8 h-8 text-accent/50" />
                      </div>
                    )}
                  </div>
                </FadeInView>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
