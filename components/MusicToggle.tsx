"use client";

import React, { useState, useEffect, useRef } from "react";
import { siteConfig } from "@/lib/config";

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const synthTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Procedural soft ambient synthesizer as an ultra-reliable fallback
  const startProceduralAmbient = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;

      const ctx = audioContextRef.current || new AudioCtx();
      audioContextRef.current = ctx;

      if (ctx.state === "suspended") {
        ctx.resume();
      }

      // Warm piano / chime chord progressions
      const chordProgressions = [
        [196.0, 246.94, 293.66, 369.99], // Gmaj7
        [164.81, 196.0, 246.94, 293.66, 369.99], // Em9
        [130.81, 164.81, 196.0, 246.94, 293.66], // Cmaj9
        [146.83, 196.0, 220.0, 293.66], // Dsus4
      ];

      let chordIndex = 0;

      const playChord = () => {
        if (!isPlaying && hasInteracted) return;
        const currentChord = chordProgressions[chordIndex % chordProgressions.length];
        chordIndex++;

        currentChord.forEach((freq, i) => {
          setTimeout(() => {
            if (!audioContextRef.current || audioContextRef.current.state !== "running") return;
            const now = audioContextRef.current.currentTime;

            const osc = audioContextRef.current.createOscillator();
            const gain = audioContextRef.current.createGain();
            const filter = audioContextRef.current.createBiquadFilter();

            osc.type = "sine";
            osc.frequency.setValueAtTime(freq, now);

            // Warm lowpass filter mimicking felt piano
            filter.type = "lowpass";
            filter.frequency.setValueAtTime(700, now);
            filter.frequency.exponentialRampToValueAtTime(260, now + 3.8);

            gain.gain.setValueAtTime(0, now);
            gain.gain.linearRampToValueAtTime(0.035, now + 0.35);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + 5.2);

            osc.connect(filter);
            filter.connect(gain);
            gain.connect(audioContextRef.current.destination);

            osc.start(now);
            osc.stop(now + 5.5);
          }, i * 320);
        });

        synthTimerRef.current = setTimeout(playChord, 5600);
      };

      playChord();
    } catch {
      // AudioContext blocked
    }
  };

  const stopProceduralAmbient = () => {
    if (synthTimerRef.current) {
      clearTimeout(synthTimerRef.current);
      synthTimerRef.current = null;
    }
    if (audioContextRef.current && audioContextRef.current.state === "running") {
      audioContextRef.current.suspend();
    }
  };

  const toggleMusic = () => {
    setHasInteracted(true);

    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      stopProceduralAmbient();
      setIsPlaying(false);
    } else {
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            startProceduralAmbient();
            setIsPlaying(true);
          });
      } else {
        startProceduralAmbient();
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (synthTimerRef.current) clearTimeout(synthTimerRef.current);
      if (audioContextRef.current) {
        audioContextRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div className="fixed top-6 right-6 sm:top-8 sm:right-8 z-40">
      <audio
        ref={audioRef}
        src={siteConfig.audio.src}
        loop
        preload="auto"
      />

      <button
        onClick={toggleMusic}
        type="button"
        aria-label={isPlaying ? "Mute background audio" : "Play ambient music"}
        className="text-[11px] font-sans uppercase tracking-[0.2em] text-ink-light hover:text-ink transition-colors duration-200 cursor-pointer select-none py-1 px-2 border-b border-transparent hover:border-ink/30"
      >
        <span>♫ sound: {isPlaying ? "on" : "off"}</span>
      </button>
    </div>
  );
}
