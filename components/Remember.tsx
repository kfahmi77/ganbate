"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";

export default function Remember() {
  return (
    <section className="relative min-h-[65vh] flex flex-col justify-center px-6 sm:px-12 py-28 sm:py-36 max-w-3xl mx-auto select-none">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-8"
      >
        <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-ink-light/60 block">
          Interlude
        </span>

        <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-ink/75 font-light leading-relaxed">
          {siteConfig.remember.mainQuote}
          <br />
          {siteConfig.remember.subQuote}
        </p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.6, delay: 0.3 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl text-terracotta font-normal italic tracking-tight"
        >
          {siteConfig.remember.highlight}
        </motion.p>

        <div className="pt-4">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-ink-light/60">
            {siteConfig.remember.closure}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
