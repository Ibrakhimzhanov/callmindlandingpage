"use client";

import { FileText, Heart, Star, Target, LineChart, Plug } from "lucide-react";
import Card from "@/components/ui/Card";
import FadeInView from "@/components/animations/FadeInView";
import { FEATURES } from "@/lib/constants";

const iconMap: Record<string, any> = {
  FileText,
  Heart,
  Star,
  Target,
  LineChart,
  Plug,
};

export default function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Kuchli <span className="gradient-text">imkoniyatlar</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              CallMind sizning call-centeringiz uchun barcha kerakli vositalarni taqdim etadi
            </p>
          </div>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <FadeInView key={index} delay={index * 0.1}>
                <Card className="h-full group">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center mb-4 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {feature.description}
                  </p>
                </Card>
              </FadeInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
