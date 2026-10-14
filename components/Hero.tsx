"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";

interface HeroProps {
  onNameClick: () => void;
}

export default function Hero({ onNameClick }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between px-6 sm:px-12 py-8 sm:py-12 max-w-5xl mx-auto select-none">
      {/* Top Colophon / Header Line */}
      <div className="flex items-center justify-between text-[11px] font-sans uppercase tracking-[0.25em] text-ink-light border-b border-hairline/70 pb-4">
        <span>No. 14-10-2026</span>
        <span className="hidden sm:inline">A letter before tomorrow</span>
      </div>

      {/* Main Center Editorial Display */}
      <div className="my-auto py-20 sm:py-28 text-center flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-xs font-sans uppercase tracking-[0.3em] text-terracotta mb-6"
        >
          {siteConfig.hero.dateLabel}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-normal text-ink tracking-tight leading-none mb-6"
        >
          For{" "}
          <span
            onClick={onNameClick}
            className="italic text-terracotta cursor-pointer hover:opacity-85 transition-opacity"
            title="A personal note"
          >
            {siteConfig.name}
          </span>
          .
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.0 }}
          className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-ink-light font-light tracking-wide max-w-xl"
        >
          {siteConfig.hero.tagline}
        </motion.p>
      </div>

      {/* Subtle Scroll Hint Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.8 }}
        className="flex flex-col items-center gap-3 text-ink-light/60 pb-4"
      >
        <span className="text-[10px] font-sans uppercase tracking-[0.3em]">
          Scroll slowly
        </span>
        <div className="w-[1px] h-8 bg-hairline" />
      </motion.div>
    </section>
  );
}
