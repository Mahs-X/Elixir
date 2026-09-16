"use client";

import React from "react";
import { Code2, CheckCheck } from "lucide-react";

export default function BuiltWith() {
  const corePillars = [
    {
      name: "React & Next.js",
      headline: "Lightning-fast pages that load instantly and rank higher on Google",
      role: "Core Web Architecture",
      icon: "⚡",
      badge: "Speed & SEO",
      accent: "border-sky-500/40 hover:border-sky-400 bg-gradient-to-b from-sky-950/20 via-slate-900/90 to-slate-900/90",
      pill: "text-sky-400 border-sky-500/30 bg-sky-500/10",
      highlights: ["App Router & Server Components", "Instant Sub-Second Loading", "Search Engine Dominance"],
    },
    {
      name: "Tailwind CSS",
      headline: "Pixel-perfect design that looks flawless on every screen size",
      role: "Design Systems & Motion",
      icon: "🎨",
      badge: "Adaptive UX",
      accent: "border-teal-500/40 hover:border-teal-400 bg-gradient-to-b from-teal-950/20 via-slate-900/90 to-slate-900/90",
      pill: "text-teal-400 border-teal-500/30 bg-teal-500/10",
      highlights: ["Tailwind v4 Ergonomics", "Zero-Runtime Performance", "Touch-Friendly Mobile First"],
    },
    {
      name: "Flutter & React Native",
      headline: "Need a mobile app later? I can turn your website into one — no second developer needed",
      role: "Cross-Platform Mobile",
      icon: "📱",
      badge: "Mobile Ready",
      accent: "border-indigo-500/40 hover:border-indigo-400 bg-gradient-to-b from-indigo-950/20 via-slate-900/90 to-slate-900/90",
      pill: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
      highlights: ["Single Codebase for iOS & Android", "60 FPS Native Performance", "Shared Cloud API Schemas"],
    },
  ];

  return (
    <section id="built-with" className="py-16 sm:py-24 border-b border-slate-800/80 bg-slate-950/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
            <Code2 className="w-4 h-4" />
            <span>Tech Stack & Outcome</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Built With
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
            Proven technologies chosen for one reason: they load fast, look flawless, and scale as your business grows.
          </p>
        </div>

        {/* 3 Core Pillars (Responsive Grid: 1 col on mobile, 2 col on tablet, 3 col on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {corePillars.map((item, idx) => (
            <div
              key={idx}
              className={`p-5 sm:p-7 rounded-3xl border ${item.accent} flex flex-col justify-between space-y-5 sm:space-y-6 hover:shadow-2xl transition-all group ${
                idx === 2 ? "md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none w-full" : ""
              }`}
            >
              <div className="space-y-3.5 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-xl sm:text-2xl">
                    {item.icon}
                  </div>
                  <span className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2.5 sm:px-3 py-1 rounded-full border ${item.pill}`}>
                    {item.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-black text-white group-hover:text-sky-300 transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 block mt-0.5">
                    {item.role}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal pt-1 border-t border-slate-800/80">
                  {item.headline}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-800/60">
                {item.highlights.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-400">
                    <CheckCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}