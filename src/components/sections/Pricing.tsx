"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import Button from "@/components/ui/Button";
import FadeInView from "@/components/animations/FadeInView";
import { PRICING_PLANS } from "@/lib/constants";

interface PricingProps {
  onCtaClick: () => void;
}

export default function Pricing({ onCtaClick }: PricingProps) {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Shaffof <span className="gradient-text">narxlar</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Har bir qo'ng'iroq uchun to'lang, yashirin to'lovlarsiz
            </p>
          </div>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PRICING_PLANS.map((plan, index) => (
            <FadeInView key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className={`relative bg-white rounded-3xl p-8 h-full flex flex-col ${
                  plan.highlighted ? "ring-2 ring-accent shadow-xl shadow-accent/20" : ""
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-3 right-6 px-4 py-1 bg-accent text-white text-sm font-medium rounded-full">
                    {plan.badge}
                  </div>
                )}

                {/* Plan name & subtitle */}
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                <p className="text-gray-500 text-sm mb-6">{plan.subtitle}</p>

                {/* Price */}
                <div className="mb-6">
                  {plan.oldPrice && (
                    <span className="text-gray-400 line-through text-lg mr-2">
                      {plan.oldPrice} so'm
                    </span>
                  )}
                  {plan.isEnterprise ? (
                    <div className="text-4xl font-bold text-gray-900">{plan.name}</div>
                  ) : (
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-900 text-xl ml-1">so'm</span>
                      <span className="text-gray-500 ml-1">{plan.unit}</span>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <Button
                  variant={plan.highlighted ? "primary" : "secondary"}
                  className={`w-full mb-8 ${!plan.highlighted ? "!border-gray-300 !text-gray-700 hover:!bg-gray-100 hover:!text-gray-900" : ""}`}
                  onClick={onCtaClick}
                >
                  {plan.cta}
                </Button>

                {/* Features header */}
                <div className="border-t border-gray-200 pt-6 mb-4">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    NIMALARNI O'Z ICHIGA OLADI
                  </p>
                </div>

                {/* Features list */}
                <ul className="space-y-4 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      {feature.included ? (
                        <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-accent" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                          <X className="w-3 h-3 text-red-400" />
                        </div>
                      )}
                      <span className={feature.included ? "text-gray-700" : "text-gray-400"}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </FadeInView>
          ))}
        </div>

        {/* Bottom note */}
        <FadeInView delay={0.3}>
          <div className="text-center mt-12">
            <p className="text-text-secondary">
              Yangi hamkorlar uchun <span className="text-accent font-semibold">7 kunlik bepul sinov davri</span>
            </p>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
