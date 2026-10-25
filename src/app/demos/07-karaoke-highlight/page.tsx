"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, Highlighter, ArrowRight } from "lucide-react";

const scriptLines = [
  {
    label: "Opening",
    text: "Every business has a story worth telling.",
    highlight: "story worth telling",
  },
  {
    label: "The Challenge",
    text: "Finding the right words can be the hardest part.",
    highlight: "hardest part",
  },
  {
    label: "The People",
    text: "Behind every idea are people who make it happen.",
    highlight: "make it happen",
  },
  {
    label: "The Difference",
    text: "Their passion turns everyday moments into something meaningful.",
    highlight: "meaningful",
  },
  {
    label: "The Invitation",
    text: "Meet the people behind our story.",
    highlight: "our story",
  },
];

export default function KaraokeHighlightDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const ctaButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!containerRef.current || !textContainerRef.current) return;

      const words = textContainerRef.current.querySelectorAll<HTMLSpanElement>(".karaoke-word");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=3200",
          pin: true,
          scrub: 1.1,
          anticipatePin: 1,
        },
      });

      // 1. Scrub through words one-by-one
      tl.to(
        words,
        {
          color: "#0F172A", // Dark charcoal active
          opacity: 1,
          stagger: 0.04,
          ease: "none",
        },
        0
      );

      // 2. Highlight special phrases in sky-blue
      const highlights = textContainerRef.current.querySelectorAll<HTMLSpanElement>(".special-highlight");
      tl.to(
        highlights,
        {
          backgroundColor: "rgba(56, 189, 248, 0.22)",
          color: "#0284C7",
          stagger: 0.08,
          ease: "none",
        },
        0.15
      );

      // 3. CTA button at bottom slides in and pulses
      if (ctaButtonRef.current) {
        tl.fromTo(
          ctaButtonRef.current,
          { y: 30, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, ease: "back.out(1.5)" },
          0.8
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative bg-[#F8FAFC] text-slate-900 min-h-[400vh] selection:bg-sky-200">
      {/* Top Navigation */}
      <header className="fixed top-6 left-6 z-50 flex items-center gap-4">
        <Link
          href="/demos"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 hover:bg-slate-100 shadow-sm transition-all text-sm text-slate-700"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Demos</span>
        </Link>
        <span className="text-xs uppercase tracking-widest text-sky-700 font-mono bg-sky-100 px-3 py-1 rounded-full border border-sky-300">
          Demo 07: Karaoke Word Scrubbing (00:18 - 00:23)
        </span>
      </header>

      {/* Pinned Section (LIGHT MODE AS IN VIDEO) */}
      <section
        ref={containerRef}
        className="h-screen w-full flex flex-col items-center justify-center overflow-hidden relative px-6"
      >
        {/* Soft subtle mint / sky blue ambient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-[600px] h-[500px] rounded-full bg-sky-200/40 blur-[130px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-200/30 blur-[140px]" />
        </div>

        {/* Header Indicator */}
        <div className="z-10 mb-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-slate-200 shadow-sm text-xs font-mono text-slate-600 mb-2">
            <Highlighter className="w-3.5 h-3.5 text-sky-600" />
            <span>Interactive Script Reader • Scroll Scrubbing</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
            Brand Story - Video Script · First Draft
          </h2>
        </div>

        {/* Text Container */}
        <div
          ref={textContainerRef}
          className="relative z-10 w-full max-w-3xl bg-white/70 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl space-y-6"
        >
          {scriptLines.map((line, lineIdx) => {
            const allWords = line.text.split(" ");
            const highlightWords = line.highlight.split(" ");

            return (
              <div key={lineIdx} className="text-lg sm:text-2xl leading-relaxed">
                <span className="font-semibold text-slate-400 mr-2">
                  {line.label} :
                </span>
                {allWords.map((word, wIdx) => {
                  const isHighlight = line.highlight.includes(word);

                  return (
                    <span
                      key={wIdx}
                      className={`karaoke-word inline-block mr-2 text-slate-300 opacity-40 transition-colors font-medium ${
                        isHighlight
                          ? "special-highlight px-1 rounded-md"
                          : ""
                      }`}
                    >
                      {word}
                    </span>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Button: Convert to Storyboard */}
        <div ref={ctaButtonRef} className="z-10 mt-8">
          <button className="flex items-center gap-3 px-8 py-3.5 rounded-full bg-sky-500 hover:bg-sky-600 text-white font-medium text-sm shadow-[0_10px_30px_rgba(56,189,248,0.4)] transition-all">
            <span>Convert to Storyboard</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Footer */}
        <div className="absolute bottom-6 font-mono text-xs text-slate-400">
          STAGGERED COLOR SHIFT + TEXT-HIGHLIGHT MASK • SCRUB: 1.1
        </div>
      </section>

      {/* Spacer */}
      <section className="h-screen bg-slate-100 flex items-center justify-center border-t border-slate-200">
        <p className="text-slate-500 text-sm font-mono">
          Script scrub completed. Scroll up to re-scrub words.
        </p>
      </section>
    </div>
  );
}
