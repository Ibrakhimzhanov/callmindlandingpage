"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
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
import { useTranslation } from "@/lib/i18n";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
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
  const t = useTranslation();
  const functions = t.functions.items;
  const [activeTab, setActiveTab] = useState(functions[0].id);
  const activeFunction = functions.find((f) => f.id === activeTab);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="functions"
      ref={ref}
      className="py-20 lg:py-28 bg-background-secondary"
    >
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
            {t.functions.title}{" "}
            <span className="text-accent">
              {t.functions.titleHighlight || "ishni osonlashtiradi"}
            </span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            {t.functions.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {/* Tabs sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl border border-border p-2 shadow-sm">
              {functions.map((func) => {
                const Icon = iconMap[func.icon];
                const isActive = activeTab === func.id;

                return (
                  <button
                    key={func.id}
                    onClick={() => setActiveTab(func.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-accent text-white"
                        : "hover:bg-background-secondary text-text-secondary"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                        isActive ? "bg-white/20" : "bg-accent-light"
                      }`}
                    >
                      {Icon && (
                        <Icon
                          className={`w-5 h-5 ${
                            isActive ? "text-white" : "text-accent"
                          }`}
                        />
                      )}
                    </div>

                    <span
                      className={`font-medium flex-grow ${
                        isActive ? "text-white" : "text-text-primary"
                      }`}
                    >
                      {func.title}
                    </span>

                    {func.coming && (
                      <span className="px-2 py-0.5 rounded-full bg-warning/10 text-warning text-xs font-medium flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {t.functions.coming}
                      </span>
                    )}

                    {isActive && (
                      <ChevronRight className="w-5 h-5 text-white" />
                    )}
                  </button>
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
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="card p-6 lg:p-8"
                >
                  <div className="mb-6">
                    <h3
                      className="text-2xl font-bold text-text-primary mb-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {activeFunction.title}
                    </h3>
                    <p className="text-text-secondary">
                      {activeFunction.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {activeFunction.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex gap-4 p-4 rounded-xl bg-background-secondary ${
                          feature.coming ? "opacity-70" : ""
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
                            feature.coming
                              ? "bg-warning/10 text-warning"
                              : "bg-accent-light text-accent"
                          }`}
                        >
                          {feature.number}
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="text-text-primary font-semibold">
                              {feature.title}
                            </h4>
                            {feature.coming && (
                              <span className="px-2 py-0.5 rounded-full bg-warning/10 text-warning text-xs font-medium flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {t.functions.coming}
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

                  {activeFunction.coming && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="mt-6 p-4 rounded-xl bg-warning/5 border border-warning/20"
                    >
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-warning" />
                        <div>
                          <p className="text-warning font-medium">
                            {t.functions.comingSoonTitle || "Tez kunda qo'shiladi"}
                          </p>
                          <p className="text-warning/70 text-sm">
                            {t.functions.comingSoonDesc || "Bu imkoniyat ustida ishlamoqdamiz"}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
