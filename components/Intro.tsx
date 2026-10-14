"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";

interface IntroProps {
  onNameClick: () => void;
}

export default function Intro({ onNameClick }: IntroProps) {
  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center px-6 sm:px-12 py-24 sm:py-32 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-8"
      >
        <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-ink-light/70 block">
          Chapter I — Pagi Sebelum Hari Itu
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-ink">
          Hey,{" "}
          <span
            onClick={onNameClick}
            className="italic text-terracotta cursor-pointer hover:opacity-85 transition-opacity"
          >
            {siteConfig.name}
          </span>
          .
        </h2>

        <div className="space-y-6 font-serif text-xl sm:text-2xl md:text-3xl text-ink/90 font-light leading-relaxed">
          {siteConfig.intro.lines.map((line, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 1.2,
                delay: idx * 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {line}
            </motion.p>
          ))}
        </div>

        <div className="pt-6">
          <div className="w-12 h-[1px] bg-hairline" />
        </div>
      </motion.div>
    </section>
  );
}
