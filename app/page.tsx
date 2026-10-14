"use client";

import React, { useState } from "react";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Reminders from "@/components/Reminders";
import Countdown from "@/components/Countdown";
import Remember from "@/components/Remember";
import LastThing from "@/components/LastThing";
import FinalMessage from "@/components/FinalMessage";
import MusicToggle from "@/components/MusicToggle";
import BackgroundParticles from "@/components/BackgroundParticles";
import EasterEggModal from "@/components/EasterEggModal";
import { siteConfig } from "@/lib/config";

export default function Home() {
  const [clickCount, setClickCount] = useState(0);
  const [isEasterEggOpen, setIsEasterEggOpen] = useState(false);

  const handleNameClick = () => {
    const nextCount = clickCount + 1;
    setClickCount(nextCount);

    if (nextCount >= siteConfig.easterEgg.clickCountRequired) {
      setIsEasterEggOpen(true);
      setClickCount(0);
    }
  };

  return (
    <main className="relative min-h-screen bg-paper text-ink overflow-x-hidden selection:bg-[#EAD9C9] selection:text-night">
      {/* Barely visible ambient room dust motes */}
      <BackgroundParticles count={10} />

      {/* Quiet Typographic Audio Controller */}
      <MusicToggle />

      {/* Understated Literary Easter Egg Card */}
      <EasterEggModal
        isOpen={isEasterEggOpen}
        onClose={() => setIsEasterEggOpen(false)}
      />

      {/* Editorial Title / Hero */}
      <Hero onNameClick={handleNameClick} />

      {/* Chapter I: Hey, Ica */}
      <Intro onNameClick={handleNameClick} />

      {/* Chapter II: Three Stanzas (For Tomorrow) */}
      <Reminders />

      {/* Chapter III: Typography Ticker (Countdown) */}
      <Countdown />

      {/* Interlude: Quiet Emotional Pause */}
      <Remember />

      {/* Chapter IV: One Last Thing... (Intimate Dark Canvas Fade) */}
      <LastThing />

      {/* Chapter V: Final Good Luck & Colophon */}
      <FinalMessage onNameClick={handleNameClick} />
    </main>
  );
}
