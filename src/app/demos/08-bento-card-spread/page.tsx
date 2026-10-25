"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, LayoutGrid, Sparkles } from "lucide-react";

const bentoCards = [
  {
    title: "Concept Sketching",
    tag: "Phase 01",
    desc: "Rapid ideation and creative script breakdown into visual beats.",
    gradient: "from-sky-500/20 via-cyan-400/10 to-transparent",
    border: "border-sky-500/20",
    glow: "rgba(56,189,248,0.25)",
    colSpan: "col-span-12 md:col-span-7",
  },
  {
    title: "AI Storyboarding",
    tag: "Phase 02",
    desc: "Generative frame synthesis with instant camera angle staging.",
    gradient: "from-emerald-500/20 via-teal-400/10 to-transparent",
    border: "border-emerald-500/20",
    glow: "rgba(16,185,129,0.25)",
    colSpan: "col-span-12 md:col-span-5",
  },
  {
    title: "Live Production Systems",
    tag: "Phase 03",
    desc: "Real-time edge compute cluster syncing frame buffers.",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    border: "border-cyan-500/20",
    glow: "rgba(6,182,212,0.25)",
    colSpan: "col-span-12 md:col-span-4",
  },
  {
    title: "Automated Motion Polish",
    tag: "Phase 04",
    desc: "Sub-pixel easing curves and 60fps kinetic typography rendering.",
    gradient: "from-blue-500/20 via-sky-400/10 to-transparent",
    border: "border-blue-500/20",
    glow: "rgba(59,130,246,0.25)",
    colSpan: "col-span-12 md:col-span-4",
  },
  {
    title: "Global CDN Export",
    tag: "Phase 05",
    desc: "Sub-second delivery across 28 global edge points of presence.",
    gradient: "from-teal-500/20 via-emerald-400/10 to-transparent",
    border: "border-teal-500/20",
    glow: "rgba(20,184,166,0.25)",
    colSpan: "col-span-12 md:col-span-4",
  },
];

export default function BentoCardSpreadDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!containerRef.current || !gridRef.current) return;

      const cards = gridRef.current.querySelectorAll<HTMLDivElement>(".bento-card");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=3200",
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
        },
      });

      // 2.5D Staggered Spring Spread
      tl.fromTo(
        cards,
        {
          scale: 0.65,
          opacity: 0,
          y: 120,
          rotateX: 25,
          rotateY: (i) => (i % 2 === 0 ? -12 : 12),
          translateZ: -200,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          rotateX: 0,
          rotateY: 0,
          translateZ: 0,
          stagger: {
            each: 0.12,
            from: "center",
          },
          ease: "back.out(1.4)",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative bg-[#070A10] text-white min-h-[400vh] selection:bg-sky-500/30">
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
          Demo 08: 2.5D Bento Card Spread (00:23 - 00:26)
        </span>
      </header>

      {/* Pinned Section */}
      <section
        ref={containerRef}
        className="h-screen w-full flex flex-col items-center justify-center overflow-hidden relative px-6"
        style={{ perspective: "1400px" }}
      >
        {/* Soft emerald/cyan ambient background glow like the video */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full bg-sky-500/10 blur-[170px]" />
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[150px]" />
        </div>

        {/* Section Header */}
        <div className="z-10 mb-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-400 mb-2">
            <LayoutGrid className="w-3.5 h-3.5 text-sky-400" />
            <span>Interactive Production Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Storyboard & Bento Expansion
          </h2>
          <p className="text-xs font-mono text-slate-400 mt-1">
            Cards expand into 3D space with staggered back-easing physics
          </p>
        </div>

        {/* Bento Grid (3D preserve-3d) */}
        <div
          ref={gridRef}
          className="relative z-10 w-full max-w-5xl grid grid-cols-12 gap-4 will-change-transform"
          style={{ transformStyle: "preserve-3d" }}
        >
          {bentoCards.map((card, idx) => (
            <div
              key={idx}
              className={`bento-card ${card.colSpan} relative rounded-3xl p-6 bg-slate-900/80 backdrop-blur-xl border ${card.border} shadow-2xl flex flex-col justify-between overflow-hidden will-change-transform group`}
              style={{
                boxShadow: `0 20px 40px -15px rgba(0,0,0,0.7), 0 0 40px ${card.glow}`,
              }}
            >
              {/* Card ambient gradient wash */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-50 group-hover:opacity-80 transition-opacity`}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-sky-400 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/5">
                    {card.tag}
                  </span>
                  <Sparkles className="w-4 h-4 text-slate-500" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                  {card.title}
                </h3>
              </div>

              <div className="relative z-10 mt-6">
                <p className="text-xs text-slate-400 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="absolute bottom-6 font-mono text-xs text-slate-500">
          PERSPECTIVE: 1400PX • EASE: BACK.OUT(1.4) • 2.5D ISOMETRIC STAGGER
        </div>
      </section>

      {/* Spacer */}
      <section className="h-screen bg-[#070A10] flex items-center justify-center border-t border-white/5">
        <p className="text-slate-500 text-sm font-mono">
          Bento layout landed. Scroll up to re-trigger card spread.
        </p>
      </section>
    </div>
  );
}
