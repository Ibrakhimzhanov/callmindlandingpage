"use client";

import { HTMLAttributes, forwardRef } from "react";
import { motion } from "framer-motion";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glow?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", hover = true, glow = false, children, ...props }, ref) => {
    const hoverClass = hover ? "glass-hover cursor-pointer" : "";
    const glowClass = glow ? "animate-pulse-glow" : "";
    
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        whileHover={hover ? { y: -5, transition: { duration: 0.2 } } : undefined}
        className={`glass rounded-2xl p-6 ${hoverClass} ${glowClass} ${className}`}
        {...(props as any)}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";

export default Card;
