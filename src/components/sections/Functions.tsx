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

const contentVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1] as const,
    },
  },
};

const imageVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
    x: 30,
  },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
      delay: 0.1,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    x: -30,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1] as const,
    },
  },
};

const arrowVariants = {
  initial: {
    opacity: 0,
    x: -10,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    x: 10,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1] as const,
    },
  },
};

export default function Functions() {
  const t = useTranslation();
  const functions = t.functions.items;
  const [activeTab, setActiveTab] = useState(functions[0].id);
  const activeFunction = functions.find((f) => f.id === activeTab);

  return (
    <section
      id="functions"
      className="py-24 relative bg-gradient-to-b from-background via-primary/10 to-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              {t.functions.title}{" "}
              <span className="gradient-text">
                {t.functions.titleHighlight || "ishni osonlashtiradi"}
              </span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              {t.functions.subtitle}
            </p>
          </div>
        </FadeInView>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Tabs sidebar */}
          <div className="lg:col-span-4">
            <div className="space-y-2">
              {functions.map((func) => {
                const Icon = iconMap[func.icon];
                const isActive = activeTab === func.id;

                return (
                  <motion.button
                    key={func.id}
                    onClick={() => setActiveTab(func.id)}
                    className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl text-left transition-all duration-300 relative overflow-hidden ${
                      isActive
                        ? "bg-accent text-white shadow-lg shadow-accent/30"
                        : "bg-white/5 text-text-secondary"
                    }`}
                    whileHover={
                      !isActive
                        ? {
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            x: 5,
                            transition: { duration: 0.2 },
                          }
                        : {}
                    }
                    whileTap={{ scale: 0.98 }}
                  >
                    {!isActive && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent"
                        initial={{ opacity: 0, x: -100 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}

                    <div
                      className={`relative z-10 w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                        isActive ? "bg-white/20" : "bg-accent/10"
                      }`}
                    >
                      {Icon && (
                        <Icon
                          className={`w-5 h-5 transition-colors duration-300 ${
                            isActive ? "text-white" : "text-accent"
                          }`}
                        />
                      )}
                    </div>

                    <span
                      className={`relative z-10 font-medium flex-grow transition-colors duration-300 ${
                        isActive ? "text-white" : "hover:text-white"
                      }`}
                    >
                      {func.title}
                    </span>

                    {func.coming && (
                      <span className="relative z-10 px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 text-xs font-medium flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {t.functions.coming}
                      </span>
                    )}

                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.div
                          variants={arrowVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          className="relative z-10"
                        >
                          <ChevronRight className="w-5 h-5 text-white" />
                        </motion.div>
                      )}
                    </AnimatePresence>
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
                  variants={contentVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="glass rounded-2xl p-8 overflow-hidden"
                >
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                    <div>
                      <div className="mb-8">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {activeFunction.title}
                        </h3>
                        <p className="text-text-secondary">
                          {activeFunction.description}
                        </p>
                      </div>

                      <div className="space-y-6">
                        {activeFunction.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                            className={`flex gap-4 ${
                              feature.coming ? "opacity-70" : ""
                            }`}
                          >
                            <div
                              className={`font-bold text-lg ${
                                feature.coming ? "text-amber-400" : "text-accent"
                              }`}
                            >
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
                          transition={{ delay: 0.5 }}
                          className="mt-8 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20"
                        >
                          <div className="flex items-center gap-3">
                            <Clock className="w-5 h-5 text-amber-400" />
                            <div>
                              <p className="text-amber-400 font-medium">
                                {t.functions.comingSoonTitle ||
                                  "Tez kunda qo'shiladi"}
                              </p>
                              <p className="text-amber-400/70 text-sm">
                                {t.functions.comingSoonDesc ||
                                  "Bu imkoniyat ustida ishlamoqdamiz"}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeFunction.id + "-image"}
                        variants={imageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="relative hidden xl:flex items-center justify-center"
                      >
                        <div className="relative w-full aspect-square max-w-md">
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 via-primary/10 to-transparent border border-white/10 shadow-xl shadow-accent/10 overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="relative">
                                <div className="absolute inset-0 blur-3xl bg-accent/30 rounded-full scale-150" />
                                {(() => {
                                  const Icon = iconMap[activeFunction.icon];
                                  return (
                                    Icon && (
                                      <Icon className="relative w-24 h-24 text-accent/60" />
                                    )
                                  );
                                })()}
                              </div>
                            </div>
                            <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-accent/10 blur-xl" />
                            <div className="absolute bottom-4 left-4 w-32 h-32 rounded-full bg-primary/20 blur-xl" />
                            <div
                              className="absolute inset-0 opacity-10"
                              style={{
                                backgroundImage: `linear-gradient(to right, white 1px, transparent 1px),
                                                  linear-gradient(to bottom, white 1px, transparent 1px)`,
                                backgroundSize: "40px 40px",
                              }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
