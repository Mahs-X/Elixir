"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, Clock, CheckCircle2 } from "lucide-react";

const durations = [
  { label: "15 Seconds", sub: "Micro-Teaser Demo" },
  { label: "30 Seconds", sub: "Social Viral Reel" },
  { label: "60 Seconds", sub: "Standard Product Pitch" },
  { label: "120 Seconds", sub: "Deep Technical Walkthrough" },
  { label: "180 Seconds", sub: "Enterprise Live Case Study" },
  { label: "240 Seconds", sub: "Full Architecture Audit" },
];

export default function CylinderDrumDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const drumRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(2);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!containerRef.current || !drumRef.current) return;

      const items = drumRef.current.querySelectorAll<HTMLDivElement>(".drum-item");

      const updateDrum = (progress: number) => {
        // progress goes 0 to 1
        const currentPos = progress * (durations.length - 1);
        const currentActive = Math.round(currentPos);
        setActiveIndex(currentActive);

        items.forEach((item, index) => {
          const diff = index - currentPos; // -2, -1, 0, 1, 2...
          const absDiff = Math.abs(diff);

          // Zero-Degree Focus Rule: Center card is flat, side cards curve along 3D cylinder
          const rotateX = diff * -26; // vertical cylinder curve
          const translateY = diff * 90;
          const translateZ = -absDiff * 120;
          const scale = Math.max(0.75, 1 - absDiff * 0.14);
          const opacity = Math.max(0.15, 1 - absDiff * 0.45);
          const blur = absDiff > 0.4 ? Math.min(8, absDiff * 3) : 0;
          const zIndex = Math.round(50 - absDiff * 10);

          gsap.set(item, {
            y: translateY,
            z: translateZ,
            rotationX: rotateX,
            scale,
            opacity,
            filter: `blur(${blur}px)`,
            zIndex,
            transformOrigin: "50% 50%",
          });
        });
      };

      // Initial layout
      updateDrum(0);

      // ScrollTrigger scrub
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=2600",
        pin: true,
        scrub: 1.2,
        anticipatePin: 1,
        onUpdate: (self) => {
          updateDrum(self.progress);
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative bg-[#070A10] text-white min-h-[360vh] selection:bg-sky-500/30">
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
          Demo 05: 3D Vertical Cylinder Drum (00:11 - 00:15)
        </span>
      </header>

      {/* Pinned Section */}
      <section
        ref={containerRef}
        className="h-screen w-full flex flex-col items-center justify-center overflow-hidden relative"
      >
        {/* Soft emerald/cyan ambient background glow like the video */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-emerald-500/10 blur-[150px]" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-sky-500/10 blur-[130px]" />
        </div>

        {/* Section Header */}
        <div className="text-center z-10 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-400 mb-3">
            <Clock className="w-3.5 h-3.5 text-sky-400" />
            <span>Select Runtime Duration</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Vertical Rotary Drum Wheel
          </h2>
          <p className="text-slate-400 text-sm mt-2 font-mono">
            Scroll down to rotate through calibrated presentation slots
          </p>
        </div>

        {/* 3D Drum Stage Container */}
        <div
          className="relative w-full max-w-xl h-80 flex items-center justify-center"
          style={{ perspective: "1200px" }}
        >
          {/* Active selection bracket indicator */}
          <div className="absolute w-[440px] h-[82px] rounded-2xl border-2 border-sky-400/40 bg-sky-400/[0.04] pointer-events-none z-40 shadow-[0_0_40px_rgba(56,189,248,0.2)] flex items-center justify-between px-6">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
            <span className="text-[10px] font-mono tracking-widest text-sky-300 uppercase">
              ACTIVE SELECTION
            </span>
            <CheckCircle2 className="w-4 h-4 text-sky-400" />
          </div>

          {/* Drum Items Track */}
          <div
            ref={drumRef}
            className="relative w-full h-full flex items-center justify-center"
            style={{ transformStyle: "preserve-3d" }}
          >
            {durations.map((item, i) => (
              <div
                key={i}
                className="drum-item absolute w-[420px] px-8 py-4 rounded-2xl border border-white/10 bg-slate-900/90 backdrop-blur-xl shadow-2xl flex items-center justify-between transition-colors select-none will-change-transform"
              >
                <div>
                  <h3 className="text-2xl font-black font-mono text-white tracking-tight">
                    {item.label}
                  </h3>
                  <p className="text-xs text-slate-400 font-sans mt-0.5">{item.sub}</p>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-slate-300">
                  SLOT {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Navigation Cue */}
        <div className="absolute bottom-10 z-10 text-center font-mono text-xs text-slate-500">
          CYLINDER DEPTH: -120PX • PERSPECTIVE: 1200PX • SMOOTH SCRUB
        </div>
      </section>

      {/* Spacer */}
      <section className="h-screen bg-[#070A10] flex items-center justify-center border-t border-white/5">
        <p className="text-slate-500 text-sm font-mono">
          Drum selection locked. Scroll up to re-test the 3D rotary physics.
        </p>
      </section>
    </div>
  );
}
