"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/config";

export default function LastThing() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative py-28 px-6 sm:px-12 max-w-3xl mx-auto">
      {/* Closed State in the Letter Flow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="border-t border-hairline/80 pt-16 space-y-6"
      >
        <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-ink-light/70 block">
          Chapter IV — Catatan Terakhir
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink font-normal">
          {siteConfig.oneLastThing.prompt}
        </h2>

        <p className="font-serif italic text-lg sm:text-xl text-ink-light max-w-lg leading-relaxed">
          Ada satu kalimat kecil yang hanya ingin disampaikan saat malam sudah benar-benar hening.
        </p>

        <div className="pt-2">
          <button
            onClick={() => setIsOpen(true)}
            type="button"
            className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.25em] text-terracotta border-b border-terracotta/40 hover:border-terracotta pb-1 transition-all duration-200 cursor-pointer"
          >
            <span>Buka catatan rahasia</span>
            <span>→</span>
          </button>
        </div>
      </motion.div>

      {/* Intimate Deep Night Fullscreen Canvas */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-night flex flex-col justify-between p-8 sm:p-14 select-none overflow-hidden"
          >
            {/* Top Bar in Night Mode */}
            <div className="flex items-center justify-between text-[11px] font-sans uppercase tracking-[0.25em] text-cream/50 border-b border-white/10 pb-4 max-w-4xl mx-auto w-full">
              <span>A personal note for Ica</span>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:text-cream transition-colors cursor-pointer"
              >
                [ Tutup ]
              </button>
            </div>

            {/* Quiet Whispered Lines in the Center */}
            <div className="my-auto max-w-2xl mx-auto text-center space-y-10 sm:space-y-14 px-4">
              {/* Line 1: I'm rooting for you. */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.6, delay: 0.8, ease: "easeOut" }}
              >
                <p className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cream font-light tracking-wide leading-tight">
                  {siteConfig.oneLastThing.line1}
                </p>
              </motion.div>

              {/* Pause & Line 2: Maybe a little more than I should. :) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.8, delay: 2.8, ease: "easeOut" }}
              >
                <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-terracotta-soft font-normal leading-relaxed">
                  {siteConfig.oneLastThing.line2}
                </p>
              </motion.div>

              {/* Footnote and Continue */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.4, delay: 4.8 }}
                className="pt-8 space-y-4"
              >
                <p className="text-xs font-sans tracking-widest uppercase text-cream/40">
                  {siteConfig.oneLastThing.footnote}
                </p>
                <div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.25em] text-cream/70 hover:text-cream border-b border-white/20 hover:border-white/60 pb-1 transition-all duration-200 cursor-pointer"
                  >
                    <span>Lanjutkan membaca surat</span>
                    <span>↓</span>
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Bottom Colophon in Night Mode */}
            <div className="text-center text-[10px] font-sans uppercase tracking-[0.3em] text-cream/30 max-w-4xl mx-auto w-full">
              Before tomorrow · 14.10.2026
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
