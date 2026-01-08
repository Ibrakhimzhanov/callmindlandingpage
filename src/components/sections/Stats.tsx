"use client";

import FadeInView from "@/components/animations/FadeInView";
import Counter from "@/components/animations/Counter";
import { STATS } from "@/lib/constants";

export default function Stats() {
  return (
    <section className="py-24 relative bg-gradient-to-r from-primary/50 via-accent/10 to-primary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STATS.map((stat, index) => (
            <FadeInView key={index} delay={index * 0.1}>
              <div className="text-center">
                <div className="text-5xl sm:text-6xl font-bold text-white mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-text-secondary text-lg">{stat.label}</p>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
