"use client";

import React from "react";
import { motion } from "motion/react";

interface ShimmerButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  shimmerColor?: string;
  variant?: "primary" | "secondary";
}

export const ShimmerButton: React.FC<ShimmerButtonProps> = ({
  children,
  onClick,
  className = "",
  variant = "primary",
}) => {
  const isPrimary = variant === "primary";

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-xl font-medium transition-all duration-300 shadow-md group ${
        isPrimary
          ? "bg-black text-white dark:bg-white dark:text-black border border-zinc-800 dark:border-zinc-200"
          : "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600"
      } ${className}`}
    >
      {/* 21st.dev Shimmer Sweep */}
      <span className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-400/20 dark:via-sky-400/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
      </span>

      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
};
