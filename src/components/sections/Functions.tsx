"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Headphones,
  CheckSquare,
  MessageSquare,
  PieChart,
  Bell,
  Database,
  GraduationCap,
  FileBarChart,
  ChevronRight,
  Clock,
} from "lucide-react";
import FadeInView from "@/components/animations/FadeInView";
import { FUNCTIONS } from "@/lib/constants";

const iconMap: Record<string, any> = {
  Headphones,
  CheckSquare,
  MessageSquare,
  PieChart,
  Bell,
  Database,
  GraduationCap,
  FileBarChart,
};

export default function Functions() {
  const [activeTab, setActiveTab] = useState(FUNCTIONS[0].id);
  const activeFunction = FUNCTIONS.find((f) => f.id === activeTab);

  return (
    <section id="functions" className="py-24 relative bg-gradient-to-b from-background via-primary/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Imkoniyatlar <span className="gradient-text">ishni osonlashtiradi</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              CallMind barcha kerakli vositalarni bir joyda taqdim etadi
            </p>
          </div>
        </FadeInView>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Tabs sidebar */}
          <div className="lg:col-span-4">
            <div className="space-y-2">
              {FUNCTIONS.map((func) => {
                const Icon = iconMap[func.icon];
                const isActive = activeTab === func.id;

                return (
                  <motion.button
                    key={func.id}
                    onClick={() => setActiveTab(func.id)}
                    className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl text-left transition-all ${
                      isActive
                        ? "bg-accent text-white shadow-lg shadow-accent/30"
                        : "bg-white/5 hover:bg-white/10 text-text-secondary hover:text-white"
                    }`}
                    whileHover={{ x: isActive ? 0 : 5 }}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      isActive ? "bg-white/20" : "bg-accent/10"
                    }`}>
                      <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-accent"}`} />
                    </div>
                    <span className="font-medium flex-grow">{func.title}</span>
                    {func.coming && (
                      <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 text-xs font-medium flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        Tez kunda
                      </span>
                    )}
                    {isActive && <ChevronRight className="w-5 h-5" />}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Content area */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {activeFunction && (
                <motion.div
                  key={activeFunction.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="glass rounded-2xl p-8"
                >
                  {/* Header */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {activeFunction.title}
                    </h3>
                    <p className="text-text-secondary">
                      {activeFunction.description}
                    </p>
                  </div>

                  {/* Features list */}
                  <div className="space-y-6">
                    {activeFunction.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex gap-4 ${feature.coming ? "opacity-70" : ""}`}
                      >
                        <div className={`font-bold text-lg ${feature.coming ? "text-amber-400" : "text-accent"}`}>
                          {feature.number}
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="text-white font-medium">
                              {feature.title}
                            </h4>
                            {feature.coming && (
                              <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 text-xs font-medium flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                Tez kunda
                              </span>
                            )}
                          </div>
                          <p className="text-text-secondary text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Coming soon badge */}
                  {activeFunction.coming && (
                    <div className="mt-8 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-amber-400" />
                        <div>
                          <p className="text-amber-400 font-medium">Tez kunda qo'shiladi</p>
                          <p className="text-amber-400/70 text-sm">Bu imkoniyat ustida ishlamoqdamiz</p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
