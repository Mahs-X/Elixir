"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, Activity, ShieldCheck, Cpu, Terminal, Zap } from "lucide-react";

export default function DepthMaskingDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const floatingBadgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!containerRef.current || !bgTextRef.current || !cardRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=3000",
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
        },
      });

      // 1. Background typography slides up from behind the foreground card
      tl.fromTo(
        bgTextRef.current,
        {
          y: "35vh",
          scale: 0.9,
          opacity: 0.2,
        },
        {
          y: "-20vh",
          scale: 1.15,
          opacity: 0.9,
          ease: "none",
        },
        0
      );

      // 2. Foreground 3D card tilts and floats with counter-parallax
      tl.fromTo(
        cardRef.current,
        {
          y: "60px",
          rotateX: 12,
          rotateY: -8,
          scale: 0.95,
        },
        {
          y: "-30px",
          rotateX: -4,
          rotateY: 4,
          scale: 1.02,
          ease: "none",
        },
        0
      );

      // 3. Floating micro badge enters with snappy spring
      if (floatingBadgeRef.current) {
        tl.fromTo(
          floatingBadgeRef.current,
          {
            scale: 0,
            opacity: 0,
            x: -40,
          },
          {
            scale: 1,
            opacity: 1,
            x: 0,
            duration: 0.3,
            ease: "back.out(1.7)",
          },
          0.3
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
          Demo 10: Rotoscoped Depth Masking (00:30 - 00:34)
        </span>
      </header>

      {/* Pinned Section */}
      <section
        ref={containerRef}
        className="h-screen w-full flex items-center justify-center overflow-hidden relative"
        style={{ perspective: "1200px" }}
      >
        {/* Ambient atmospheric glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-sky-500/15 blur-[160px]" />
          <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
        </div>

        {/* ======================================================== */}
        {/* LAYER 1 (BEHIND): Massive 3D Depth Typography             */}
        {/* ======================================================== */}
        <div
          ref={bgTextRef}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0 will-change-transform"
        >
          <div className="text-center font-black tracking-tighter leading-none">
            <span
              className="block text-transparent bg-clip-text bg-gradient-to-b from-sky-300 via-sky-500 to-cyan-600 drop-shadow-[0_0_90px_rgba(56,189,248,0.4)]"
              style={{ fontSize: "clamp(6rem, 18vw, 20rem)" }}
            >
              LIVE
            </span>
            <span
              className="block text-white/30 text-[0.6em] tracking-widest font-mono"
              style={{ letterSpacing: "0.2em" }}
            >
              SYSTEMS 24/7
            </span>
          </div>
        </div>

        {/* ======================================================== */}
        {/* LAYER 2 (FOREGROUND): Floating Glassmorphic Production UI */}
        {/* ======================================================== */}
        <div
          ref={cardRef}
          className="relative z-20 w-full max-w-2xl mx-6 rounded-3xl p-8 bg-slate-900/80 backdrop-blur-2xl border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7),0_0_50px_rgba(56,189,248,0.15)] will-change-transform"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Card Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-base">
                  Core Architecture Node
                </h3>
                <p className="text-xs text-slate-400">
                  Global Low-Latency Edge Cluster
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>LIVE 99.99%</span>
            </div>
          </div>

          {/* Metric Grid */}
          <div className="grid grid-cols-3 gap-4 my-6">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
              <p className="text-xs text-slate-400 mb-1 flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-sky-400" />
                Response Time
              </p>
              <p className="text-2xl font-bold font-mono text-white">12.4ms</p>
              <p className="text-[11px] text-emerald-400 mt-1">↑ 98% faster</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
              <p className="text-xs text-slate-400 mb-1 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                Throughput
              </p>
              <p className="text-2xl font-bold font-mono text-white">48.2k</p>
              <p className="text-[11px] text-slate-400 mt-1">req/sec handled</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
              <p className="text-xs text-slate-400 mb-1 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                Security Layer
              </p>
              <p className="text-2xl font-bold font-mono text-white">mTLS v3</p>
              <p className="text-[11px] text-cyan-400 mt-1">Zero-Trust Active</p>
            </div>
          </div>

          {/* Terminal stream preview */}
          <div className="rounded-xl bg-black/60 border border-white/5 p-4 font-mono text-xs text-slate-400 flex items-center gap-3">
            <Terminal className="w-4 h-4 text-sky-400 flex-shrink-0" />
            <div className="truncate">
              <span className="text-sky-400">cluster.auth()</span> → verified 1,024 shards across 8 regions in 4ms
            </div>
          </div>
        </div>

        {/* Floating Accent Badge (Parallax Depth Layer 3) */}
        <div
          ref={floatingBadgeRef}
          className="absolute right-[12%] bottom-[20%] z-30 px-5 py-3 rounded-2xl bg-sky-500/20 backdrop-blur-xl border border-sky-400/40 text-white shadow-2xl flex items-center gap-3 select-none"
        >
          <div className="w-3 h-3 rounded-full bg-sky-400 animate-pulse" />
          <div className="text-xs">
            <p className="font-bold">Real-Time Sync</p>
            <p className="text-[11px] text-sky-200">Zero Framerate Jitter</p>
          </div>
        </div>

        {/* Bottom Help Text */}
        <div className="absolute bottom-8 text-center text-xs text-slate-500 font-mono">
          DEPTH STACK: LAYER 0 (BG TEXT) ⇄ LAYER 1 (UI GLASS) ⇄ LAYER 2 (CHIP)
        </div>
      </section>

      {/* Spacer */}
      <section className="h-screen bg-[#070A10] flex items-center justify-center border-t border-white/5">
        <p className="text-slate-400 text-sm font-mono">
          End of Depth Masking sequence — Scroll up to re-scrub.
        </p>
      </section>
    </div>
  );
}
