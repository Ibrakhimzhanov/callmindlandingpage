"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, X } from "lucide-react";
import Button from "@/components/ui/Button";
import { useTranslation } from "@/lib/i18n";

interface PricingProps {
  onCtaClick: () => void;
}

export default function Pricing({ onCtaClick }: PricingProps) {
  const t = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" ref={ref} className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t.pricing.title}{" "}
            <span className="text-accent">{t.pricing.titleHighlight}</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            {t.pricing.subtitle}
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {t.pricing.plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 h-full flex flex-col transition-shadow hover:shadow-lg ${
                plan.highlighted
                  ? "bg-primary text-white ring-2 ring-accent shadow-xl"
                  : "bg-white border border-border"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 right-6 px-4 py-1 bg-accent text-white text-sm font-semibold rounded-full shadow-md">
                  {plan.badge}
                </div>
              )}

              {/* Plan name & subtitle */}
              <h3
                className={`text-2xl font-bold mb-1 ${
                  plan.highlighted ? "text-white" : "text-text-primary"
                }`}
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {plan.name}
              </h3>
              <p
                className={`text-sm mb-6 ${
                  plan.highlighted ? "text-slate-300" : "text-text-secondary"
                }`}
              >
                {plan.subtitle}
              </p>

              {/* Price */}
              <div className="mb-6">
                {plan.isEnterprise ? (
                  <div
                    className={`text-3xl font-bold ${
                      plan.highlighted ? "text-white" : "text-text-primary"
                    }`}
                  >
                    {t.pricing.contactUs}
                  </div>
                ) : (
                  <div className="flex items-baseline">
                    <span
                      className={`text-5xl font-bold ${
                        plan.highlighted ? "text-white" : "text-text-primary"
                      }`}
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`text-xl ml-1 ${
                        plan.highlighted ? "text-white" : "text-text-primary"
                      }`}
                    >
                      so'm
                    </span>
                    <span
                      className={`ml-1 ${
                        plan.highlighted ? "text-slate-300" : "text-text-secondary"
                      }`}
                    >
                      {plan.unit}
                    </span>
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <Button
                variant={plan.highlighted ? "primary" : "secondary"}
                className={`w-full mb-8 ${
                  plan.highlighted
                    ? "!bg-accent hover:!bg-accent-hover"
                    : ""
                }`}
                onClick={onCtaClick}
              >
                {plan.cta}
              </Button>

              {/* Features header */}
              <div
                className={`border-t pt-6 mb-4 ${
                  plan.highlighted ? "border-white/20" : "border-border"
                }`}
              >
                <p
                  className={`text-xs font-semibold uppercase tracking-wider ${
                    plan.highlighted ? "text-slate-400" : "text-text-muted"
                  }`}
                >
                  {t.pricing.featuresHeader}
                </p>
              </div>

              {/* Features list */}
              <ul className="space-y-3 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    {feature.included ? (
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          plan.highlighted ? "bg-accent/20" : "bg-accent-light"
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 ${
                            plan.highlighted ? "text-accent" : "text-accent"
                          }`}
                        />
                      </div>
                    ) : (
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          plan.highlighted ? "bg-white/10" : "bg-background-secondary"
                        }`}
                      >
                        <X
                          className={`w-3 h-3 ${
                            plan.highlighted ? "text-slate-500" : "text-text-muted"
                          }`}
                        />
                      </div>
                    )}
                    <span
                      className={
                        feature.included
                          ? plan.highlighted
                            ? "text-white"
                            : "text-text-primary"
                          : plan.highlighted
                          ? "text-slate-500"
                          : "text-text-muted"
                      }
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-text-secondary">
            {t.pricing.trialNote}{" "}
            <span className="text-accent font-semibold">
              {t.pricing.trialHighlight}
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
