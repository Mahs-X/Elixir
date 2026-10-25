"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, Send, Sparkles } from "lucide-react";

export default function TypewriterGradientDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pillBarRef = useRef<HTMLDivElement>(null);
  const textMaskRef = useRef<HTMLDivElement>(null);
  const lightStreakRef = useRef<HTMLDivElement>(null);
  const sendButtonRef = useRef<HTMLButtonElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  const fullPrompt = "Tell it what your live system requires...";

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!containerRef.current || !textMaskRef.current || !pillBarRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=2800",
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
        },
      });

      // 1. Pill container scales up and settles
      tl.fromTo(
        pillBarRef.current,
        { scale: 0.88, opacity: 0, y: 30 },
        { scale: 1.0, opacity: 1, y: 0, duration: 0.3, ease: "power3.out" },
        0
      );

      // 2. Light streak behind expands across full width
      if (lightStreakRef.current) {
        tl.fromTo(
          lightStreakRef.current,
          { width: "0%", opacity: 0 },
          { width: "100%", opacity: 1, duration: 0.6, ease: "power2.out" },
          0.1
        );
      }

      // 3. Typewriter clip-path reveal (revealing text left-to-right)
      tl.fromTo(
        textMaskRef.current,
        { clipPath: "inset(0 100% 0 0)" },
        { clipPath: "inset(0 0% 0 0)", duration: 0.7, ease: "none" },
        0.15
      );

      // 4. Send button pops in with snappy spring
      if (sendButtonRef.current) {
        tl.fromTo(
          sendButtonRef.current,
          { scale: 0, opacity: 0, rotate: -45 },
          { scale: 1, opacity: 1, rotate: 0, duration: 0.25, ease: "back.out(2)" },
          0.7
        );
      }

      // 5. Floating badge reveal
      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.2, ease: "power2.out" },
          0.05
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative bg-[#070A10] text-white min-h-[380vh] selection:bg-sky-500/30">
      {/* Top Navigation */}
      <header className="fixed top-6 left-6 z-50 flex items-center gap-4">
        <Link
          href="/demos"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-md transition-all text-sm text-slate-300 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Demos</span>
        </Link>
        <span className="text-xs uppercase tracking-widest text-sky-400 font-mono bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
          Demo 06: Typewriter Gradient Pill Bar (00:15 - 00:18)
        </span>
      </header>

      {/* Pinned Section */}
      <section
        ref={containerRef}
        className="h-screen w-full flex flex-col items-center justify-center overflow-hidden relative"
      >
        {/* Soft background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-sky-500/10 blur-[160px]" />
          <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-cyan-400/10 blur-[130px]" />
        </div>

        {/* Badge */}
        <div ref={badgeRef} className="z-10 mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-300">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>AI Natural Language Prompt Interface</span>
          </div>
        </div>

        {/* Capsule Wrapper with glowing back streak */}
        <div className="relative z-10 w-full max-w-3xl mx-6 flex flex-col items-center">
          {/* Glowing horizontal light streak behind */}
          <div
            ref={lightStreakRef}
            className="absolute top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent blur-md pointer-events-none"
            style={{ width: "0%" }}
          />

          {/* Main Glassmorphic Pill Bar */}
          <div
            ref={pillBarRef}
            className="relative w-full rounded-full bg-black/60 backdrop-blur-2xl border border-white/15 p-3 sm:p-4 pl-8 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(56,189,248,0.18)] flex items-center justify-between gap-4 will-change-transform"
          >
            {/* The Text Field with clip-path mask */}
            <div className="relative flex-1 overflow-hidden py-2">
              {/* Ghost text for layout sizing */}
              <p className="text-xl sm:text-2xl font-mono text-transparent select-none whitespace-nowrap">
                {fullPrompt}
              </p>

              {/* Masked animated gradient text */}
              <div
                ref={textMaskRef}
                className="absolute inset-0 flex items-center whitespace-nowrap will-change-transform"
                style={{ clipPath: "inset(0 100% 0 0)" }}
              >
                <span className="text-xl sm:text-2xl font-mono font-medium bg-gradient-to-r from-white via-sky-200 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.4)]">
                  {fullPrompt}
                </span>
                {/* Blinking cursor at the end of text */}
                <span className="inline-block w-2.5 h-6 ml-1 bg-sky-400 rounded-sm animate-pulse" />
              </div>
            </div>

            {/* Circular Send Action Button */}
            <button
              ref={sendButtonRef}
              className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-tr from-sky-500 to-cyan-400 text-slate-950 flex items-center justify-center shadow-[0_0_25px_rgba(56,189,248,0.5)] hover:scale-105 transition-transform"
            >
              <Send className="w-5 h-5 ml-0.5" />
            </button>
          </div>

          {/* Subtext description below */}
          <div className="mt-8 flex items-center gap-6 text-xs font-mono text-slate-500">
            <span>CLIP-PATH: INSET MASK REVEAL</span>
            <span>•</span>
            <span>GRADIENT CLIP TEXT</span>
            <span>•</span>
            <span>GSAP SCRUB: 1.2</span>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <section className="h-screen bg-[#070A10] flex items-center justify-center border-t border-white/5">
        <p className="text-slate-500 text-sm font-mono">
          Prompt submitted. Scroll up to re-play typewriter sequence.
        </p>
      </section>
    </div>
  );
}
