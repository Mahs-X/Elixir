"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft } from "lucide-react";

export default function CinemaScopePanDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textTrackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!containerRef.current || !textTrackRef.current) return;

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

      // Camera pan: sweeping the massive typography horizontally across the frame
      tl.fromTo(
        textTrackRef.current,
        {
          x: "15vw",
          scale: 1.08,
          filter: "blur(0px)",
        },
        {
          x: "-65vw",
          scale: 1.0,
          ease: "none",
        }
      );

      // Track progress bar
      if (progressBarRef.current) {
        tl.fromTo(
          progressBarRef.current,
          { scaleX: 0 },
          { scaleX: 1, ease: "none" },
          0
        );
      }
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
          Demo 09: CinemaScope Typography Pan (00:26 - 00:30)
        </span>
      </header>

      {/* Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-white/5 z-50">
        <div
          ref={progressBarRef}
          className="h-full bg-gradient-to-r from-sky-500 to-cyan-300 origin-left"
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      {/* Pinned Section */}
      <section
        ref={containerRef}
        className="h-screen w-full flex items-center overflow-hidden relative"
      >
        {/* Ambient background glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-sky-500/10 blur-[140px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-400/10 blur-[130px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.06),transparent_60%)]" />
        </div>

        {/* Floating cinematic guidelines */}
        <div className="absolute top-16 left-12 right-12 flex justify-between text-xs font-mono text-slate-600 border-b border-white/5 pb-2">
          <span>CINEMATIC CAMERA PAN // 2.39:1 ASPECT SIMULATION</span>
          <span>SCROLL TO GLIDE CAMERA</span>
        </div>

        {/* The Massive Panoramic Text Track */}
        <div
          ref={textTrackRef}
          className="whitespace-nowrap flex items-baseline gap-12 font-black tracking-tighter select-none will-change-transform"
          style={{ fontSize: "clamp(8rem, 20vw, 22rem)" }}
        >
          <span className="text-white drop-shadow-[0_0_80px_rgba(56,189,248,0.35)]">
            FEATURED
          </span>
          <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent drop-shadow-[0_0_100px_rgba(56,189,248,0.5)]">
            PRODUCTS
          </span>
          <span className="text-slate-600 font-extralight text-[0.6em] tracking-normal px-4">
            &
          </span>
          <span className="text-white/90 drop-shadow-[0_0_80px_rgba(14,165,233,0.3)]">
            LIVE
          </span>
          <span className="bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent">
            SYSTEMS
          </span>
        </div>

        {/* Bottom Metadata Overlay */}
        <div className="absolute bottom-12 left-12 right-12 flex items-end justify-between text-xs text-slate-500 border-t border-white/5 pt-4">
          <div>
            <p className="font-semibold text-slate-300">Macro Typography Sweep</p>
            <p className="text-[11px] text-slate-500">
              Simulating video footage close-up camera track (ScrollTrigger Scrub 1.2)
            </p>
          </div>
          <div className="font-mono text-right text-slate-400">
            SPEED: 1:1 VELOCITY // RESOLUTION: ULTRA-WIDE
          </div>
        </div>
      </section>

      {/* Spacer for natural scroll exit */}
      <section className="h-screen bg-[#0A0F1D] flex items-center justify-center border-t border-white/5">
        <div className="text-center">
          <p className="text-sky-400 font-mono text-sm uppercase tracking-wider mb-2">Section Passed</p>
          <h2 className="text-3xl font-bold text-white">Project Showcase Grid Unlocked</h2>
          <p className="text-slate-400 text-sm mt-2 max-w-md mx-auto">
            User has completed the cinematic title sweep and enters the live interactive showcase.
          </p>
        </div>
      </section>
    </div>
  );
}
