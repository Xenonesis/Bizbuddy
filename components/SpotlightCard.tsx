"use client";

import React, { useRef, useState } from "react";
import { motion } from "motion/react";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  spotlightSize?: number;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  spotlightColor = "rgba(56, 189, 248, 0.12)",
  spotlightSize = 500,
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`relative overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-[#14161b] transition-all duration-300 shadow-xs hover:shadow-xl ${className}`}
    >
      {/* 21st.dev Cursor-Tracking Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10"
        style={{
          opacity,
          background: `radial-gradient(${spotlightSize}px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />

      {/* Border Glow Highlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300 z-10 border border-sky-500/30 dark:border-sky-400/40"
        style={{
          opacity,
          maskImage: `radial-gradient(${spotlightSize / 2}px circle at ${position.x}px ${position.y}px, black, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(${spotlightSize / 2}px circle at ${position.x}px ${position.y}px, black, transparent 100%)`,
        }}
      />

      <div className="relative z-20 h-full">{children}</div>
    </motion.div>
  );
};
