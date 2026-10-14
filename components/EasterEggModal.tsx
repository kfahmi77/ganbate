"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/config";

interface EasterEggModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EasterEggModal({ isOpen, onClose }: EasterEggModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          {/* Subtle backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink/40 backdrop-blur-[2px]"
          />

          {/* Understated Note Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-sm bg-paper p-8 sm:p-10 text-center shadow-xl border border-hairline z-10 space-y-4"
          >
            <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-terracotta block">
              Catatan Tersembunyi
            </span>

            <blockquote className="font-serif italic text-xl sm:text-2xl text-ink font-normal leading-relaxed my-4">
              “{siteConfig.easterEgg.message}”
            </blockquote>

            <div className="pt-4 border-t border-hairline/60">
              <button
                onClick={onClose}
                className="text-[11px] font-sans uppercase tracking-[0.2em] text-ink-light hover:text-ink transition-colors cursor-pointer"
              >
                [ Tutup ]
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
