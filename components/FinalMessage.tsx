"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";

interface FinalMessageProps {
  onNameClick: () => void;
}

export default function FinalMessage({ onNameClick }: FinalMessageProps) {
  return (
    <section className="relative min-h-[75vh] flex flex-col justify-between px-6 sm:px-12 py-24 sm:py-32 max-w-4xl mx-auto select-none">
      <div className="my-auto text-center space-y-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0 }}
          className="text-xs font-sans uppercase tracking-[0.3em] text-terracotta"
        >
          Tomorrow is yours
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-ink leading-tight tracking-tight"
        >
          Good luck tomorrow,{" "}
          <span
            onClick={onNameClick}
            className="italic text-terracotta cursor-pointer hover:opacity-85 transition-opacity"
          >
            {siteConfig.name}
          </span>
          .
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-ink/80 font-light"
        >
          {siteConfig.final.punchline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="pt-6 font-serif italic text-base sm:text-lg text-ink-light"
        >
          {siteConfig.final.signoff}
        </motion.div>
      </div>

      {/* Editorial Colophon at the bottom */}
      <div className="border-t border-hairline/70 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-sans uppercase tracking-[0.25em] text-ink-light/50 gap-2">
        <span>Written with quiet care · For Ica</span>
        <span>October 14, 2026</span>
      </div>
    </section>
  );
}
