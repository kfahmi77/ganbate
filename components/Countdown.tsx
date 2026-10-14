"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/config";
import { calculateTimeRemaining, padZero, CountdownTime } from "@/lib/countdown";

export default function Countdown() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPassed: false,
    totalMilliseconds: 1,
  });

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeRemaining(siteConfig.interviewDate));

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeRemaining(siteConfig.interviewDate));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: "DAYS", value: padZero(timeLeft.days) },
    { label: "HOURS", value: padZero(timeLeft.hours) },
    { label: "MINS", value: padZero(timeLeft.minutes) },
    { label: "SECS", value: padZero(timeLeft.seconds) },
  ];

  return (
    <section className="relative py-28 px-6 sm:px-12 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0 }}
        className="space-y-2 mb-12 text-center sm:text-left"
      >
        <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-ink-light/70 block">
          Chapter III — Waktu Tersisa
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-ink">
          {timeLeft.isPassed ? siteConfig.countdown.afterHeading : siteConfig.countdown.beforeHeading}
        </h2>
        {!timeLeft.isPassed && (
          <p className="text-xs font-sans text-ink-light/60 tracking-wider">
            14 Oktober 2026 · Pukul 09:00 WIB (Asia/Jakarta)
          </p>
        )}
      </motion.div>

      <AnimatePresence mode="wait">
        {!timeLeft.isPassed ? (
          /* Pure Editorial Typography Ticker bounded by Hairline Rules */
          <motion.div
            key="ticker-active"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="border-y border-hairline/80 py-10 sm:py-12"
          >
            <div className="grid grid-cols-4 gap-4 sm:gap-8 text-center">
              {timeUnits.map((unit) => (
                <div key={unit.label} className="flex flex-col items-center">
                  <span className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-ink tracking-tight">
                    {mounted ? unit.value : "--"}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.25em] text-ink-light/60 uppercase mt-2">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          /* Post-interview State */
          <motion.div
            key="post-interview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="border-y border-hairline/80 py-10 sm:py-12 space-y-4"
          >
            <p className="font-serif italic text-2xl sm:text-3xl text-terracotta">
              “Whatever the result, you showed up.”
            </p>
            <div className="space-y-2 text-ink/80 font-serif text-lg leading-relaxed max-w-xl">
              {siteConfig.countdown.postInterviewLines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
