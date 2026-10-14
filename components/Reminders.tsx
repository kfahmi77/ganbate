"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";

const romanNumerals = ["I", "II", "III"];

export default function Reminders() {
  return (
    <section className="relative py-28 px-6 sm:px-12 max-w-3xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0 }}
        className="mb-16 space-y-2"
      >
        <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-ink-light/70 block">
          Chapter II — Tiga Pengingat
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-ink">
          For Tomorrow
        </h2>
      </motion.div>

      {/* Vertical Editorial Stanzas with Hairline Dividers */}
      <div className="space-y-16">
        {siteConfig.reminders.map((reminder, idx) => (
          <motion.div
            key={reminder.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 1.1,
              delay: idx * 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="border-t border-hairline/70 pt-8"
          >
            <div className="flex items-baseline justify-between mb-4">
              <span className="font-serif italic text-sm tracking-wider text-terracotta">
                {romanNumerals[idx] || reminder.number}.
              </span>
              <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-ink-light/50">
                Reminder {idx + 1} of 3
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-ink mb-3">
              {reminder.title}
            </h3>

            <p className="font-serif italic text-lg sm:text-xl text-ink/80 leading-relaxed mb-3">
              “{reminder.subtitle}”
            </p>

            {reminder.detail && (
              <p className="font-sans text-xs sm:text-sm text-ink-light leading-relaxed max-w-xl">
                {reminder.detail}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
