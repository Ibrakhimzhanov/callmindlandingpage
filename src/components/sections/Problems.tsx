"use client";

import { AlertTriangle, Clock, DollarSign } from "lucide-react";
import Card from "@/components/ui/Card";
import FadeInView from "@/components/animations/FadeInView";
import { PROBLEMS } from "@/lib/constants";

const iconMap: Record<string, any> = {
  AlertTriangle,
  Clock,
  DollarSign,
};

export default function Problems() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Tanish muammolarmi?
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Ko'pchilik call-centerlar bu muammolarni boshdan kechiradi
            </p>
          </div>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROBLEMS.map((problem, index) => {
            const Icon = iconMap[problem.icon];
            return (
              <FadeInView key={index} delay={index * 0.1}>
                <Card className="h-full">
                  <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-text-secondary">
                    {problem.description}
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
