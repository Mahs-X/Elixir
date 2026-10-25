"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, Sparkles, Layers, ArrowUpRight } from "lucide-react";

export default function AmbientMeshDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Mesh color orbs
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!containerRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=2800",
          pin: true,
          scrub: 1.4,
          anticipatePin: 1,
        },
      });

      // 1. Moving ambient mesh gradient orbs reacting to scroll
      if (orb1Ref.current && orb2Ref.current && orb3Ref.current) {
        tl.to(
          orb1Ref.current,
          {
            x: "15vw",
            y: "10vh",
            scale: 1.35,
            ease: "none",
          },
          0
        );

        tl.to(
          orb2Ref.current,
          {
            x: "-18vw",
            y: "-12vh",
            scale: 1.25,
            ease: "none",
          },
          0
        );

        tl.to(
          orb3Ref.current,
          {
            x: "10vw",
            y: "-15vh",
            scale: 1.4,
            ease: "none",
          },
          0
        );
      }

      // 2. Headline subtle scale-in and letter-spacing expansion
      if (headlineRef.current) {
        tl.fromTo(
          headlineRef.current,
          {
            scale: 0.94,
            letterSpacing: "-0.04em",
            y: 30,
            opacity: 0.2,
          },
          {
            scale: 1.0,
            letterSpacing: "-0.01em",
            y: 0,
            opacity: 1,
            ease: "power3.out",
          },
          0.1
        );
      }

      // 3. Subtitle fade and slide
      if (subtextRef.current) {
        tl.fromTo(
          subtextRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, ease: "power2.out" },
          0.35
        );
      }

      // 4. CTA pill button reveal
      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, ease: "back.out(1.5)" },
          0.55
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative bg-[#FAFBFC] text-slate-900 min-h-[380vh] selection:bg-sky-200">
      {/* Top Navigation */}
      <header className="fixed top-6 left-6 z-50 flex items-center gap-4">
        <Link
          href="/demos"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/5 hover:bg-slate-900/10 border border-slate-900/10 backdrop-blur-md transition-all text-sm text-slate-700 hover:text-slate-900"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Demos</span>
        </Link>
        <span className="text-xs uppercase tracking-widest text-sky-700 font-mono bg-sky-100 px-3 py-1 rounded-full border border-sky-300">
          Demo 11: Ambient Light Mesh (Snow White & Sky Blue)
        </span>
      </header>

      {/* Pinned Section */}
      <section
        ref={containerRef}
        className="h-screen w-full flex items-center justify-center overflow-hidden relative"
      >
        {/* ========================================================== */}
        {/* LIVING MESH GRADIENT BACKDROP (Snow White + Sky Blue/Cyan) */}
        {/* ========================================================== */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Base soft snow white wash */}
          <div className="absolute inset-0 bg-[#F8FAFC]" />

          {/* Living Orb 1: Soft Sky Blue (#38BDF8) */}
          <div
            ref={orb1Ref}
            className="absolute -top-[10%] -left-[10%] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-sky-300/40 via-sky-400/25 to-transparent blur-[120px] will-change-transform"
          />

          {/* Living Orb 2: Soft Ice Cyan (#A5F3FC) */}
          <div
            ref={orb2Ref}
            className="absolute top-[40%] -right-[10%] w-[650px] h-[650px] rounded-full bg-gradient-to-bl from-cyan-200/50 via-sky-200/30 to-transparent blur-[130px] will-change-transform"
          />

          {/* Living Orb 3: Radiant Royal Azure glow (#0284C7) */}
          <div
            ref={orb3Ref}
            className="absolute -bottom-[15%] left-[25%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-sky-500/20 via-cyan-300/20 to-transparent blur-[140px] will-change-transform"
          />

          {/* Subtle noise grain for tactile organic depth */}
          <div
            className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(rgba(0,0,0,0.8) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        {/* Content Box */}
        <div className="relative z-10 max-w-5xl mx-6 text-center">
          {/* Subtle Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-slate-200 shadow-sm mb-6 text-xs font-medium text-slate-700">
            <Sparkles className="w-3.5 h-3.5 text-sky-500 animate-spin" style={{ animationDuration: "6s" }} />
            <span>Curated Showcase • 2026 Production Systems</span>
          </div>

          {/* Master Headline */}
          <h1
            ref={headlineRef}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[1.04] will-change-transform drop-shadow-[0_4px_30px_rgba(56,189,248,0.12)]"
          >
            Featured Products{" "}
            <span className="block mt-2 font-extralight text-slate-400 text-[0.85em]">
              and{" "}
              <span className="font-black bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
                Live Systems
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtextRef}
            className="mt-8 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed will-change-transform"
          >
            Architected for enterprise velocity. Seamlessly connecting high-frequency API clusters, native mobile micro-frontends, and automated cloud infrastructure.
          </p>

          {/* Floating Pill CTA */}
          <div ref={ctaRef} className="mt-10 will-change-transform">
            <button className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-900 text-white font-medium text-sm shadow-[0_15px_35px_-10px_rgba(15,23,42,0.3)] hover:shadow-[0_20px_45px_-10px_rgba(2,132,199,0.4)] hover:bg-sky-600 transition-all duration-300">
              <Layers className="w-4 h-4 text-sky-400 group-hover:text-white transition-colors" />
              <span>Explore The Live Nodes</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Floating live indicator at bottom */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs font-mono text-slate-400">
          <span className="w-2 h-2 rounded-full bg-sky-500 animate-ping" />
          <span>SCROLL DOWN TO ENGAGE LIVE FEED</span>
        </div>
      </section>

      {/* Showcase Grid Section */}
      <section className="min-h-screen bg-white px-6 py-24 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs uppercase tracking-widest text-sky-600 font-mono">Live Deployments</p>
              <h2 className="text-3xl font-bold text-slate-900 mt-2">Active Production Platforms</h2>
            </div>
            <p className="text-sm text-slate-500">4 Systems Online</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Pathfinder EdTech Engine",
                desc: "Real-time AI cognitive learning platform handling adaptive quiz pipelines and sub-100ms response cycles.",
                tag: "Next.js 15 • Supabase",
              },
              {
                title: "PulseFlow Financial API",
                desc: "High-throughput microservices handling real-time multi-currency settlement with zero ledger lag.",
                tag: "Rust • Edge Gateway",
              },
              {
                title: "Aura Mobile Architect",
                desc: "Cross-platform mobile application system with 60fps gesture physics and localized offline caching.",
                tag: "Flutter • GraphQL",
              },
              {
                title: "Zenith Cloud Observability",
                desc: "Real-time telemetry and error monitoring stack visualizing distributed container health.",
                tag: "Go • Prometheus",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-100/50 transition-all group"
              >
                <span className="text-xs font-mono text-sky-600 bg-sky-100/60 px-3 py-1 rounded-full">
                  {p.tag}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-4 group-hover:text-sky-600 transition-colors">
                  {p.title}
                </h3>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
