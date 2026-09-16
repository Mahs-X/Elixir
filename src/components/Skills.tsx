"use client";

import React, { useState } from "react";
import { Code2, CheckCheck } from "lucide-react";

interface Skill {
  name: string;
  cat: "frontend" | "backend" | "mobile";
  role: string;
  exp: string;
  icon: string;
  badge: string;
  benefit: string;
  meter: number;
}

const ALL_SKILLS: Skill[] = [
  {
    name: "Next.js 16 / 15",
    cat: "frontend",
    role: "App Router, SSR, ISR, Server Actions",
    exp: "4+ Years",
    icon: "?",
    badge: "Core Specialty",
    benefit: "Sub-second page loads & SEO dominance for business conversions.",
    meter: 98,
  },
  {
    name: "Flutter & Dart",
    cat: "mobile",
    role: "Cross-Platform iOS & Android, Hive",
    exp: "3+ Years",
    icon: "??",
    badge: "iOS & Android",
    benefit: "Single codebase, 60fps native feel, zero duplicate team overhead.",
    meter: 92,
  },
  {
    name: "React 19",
    cat: "frontend",
    role: "Modern Hooks, Suspense, State Management",
    exp: "4+ Years",
    icon: "??",
    badge: "Production Master",
    benefit: "Modular, maintainable architectures that scale cleanly as traffic grows.",
    meter: 96,
  },
  {
    name: "Tailwind CSS v4",
    cat: "frontend",
    role: "Modern Ergonomics, 3D Tactile Systems",
    exp: "4+ Years",
    icon: "??",
    badge: "Design Systems",
    benefit: "Pixel-perfect, zero-runtime CSS with modern tactile 3D interactions.",
    meter: 99,
  },
  {
    name: "Node.js",
    cat: "backend",
    role: "REST APIs, Microservices, Async I/O",
    exp: "4+ Years",
    icon: "??",
    badge: "High Throughput",
    benefit: "High-throughput event-driven servers capable of handling peak user spikes.",
    meter: 90,
  },
  {
    name: "Supabase & SQL",
    cat: "backend",
    role: "PostgreSQL, Row Level Security, Realtime",
    exp: "3+ Years",
    icon: "???",
    badge: "Cloud Database",
    benefit: "Enterprise relational safety, instant sync, and bulletproof security rules.",
    meter: 94,
  },
  {
    name: "Firebase & Cloud",
    cat: "backend",
    role: "Firestore, Auth, FCM Push, RTDB",
    exp: "4+ Years",
    icon: "??",
    badge: "Cost Optimized",
    benefit: "Cost-optimized atomic batching keeping monthly cloud bills under $20.",
    meter: 95,
  },
  {
    name: "MongoDB",
    cat: "backend",
    role: "Mongoose, Aggregations, NoSQL Schemas",
    exp: "3+ Years",
    icon: "??",
    badge: "Document Store",
    benefit: "Flexible, high-velocity data modeling for rapidly evolving MVPs.",
    meter: 88,
  },
  {
    name: "JavaScript (ES6+)",
    cat: "frontend",
    role: "Async/Await, TypeScript, Memory Profiling",
    exp: "4+ Years",
    icon: "??",
    badge: "Foundational Mastery",
    benefit: "Clean, bug-free, zero-memory-leak execution across all modern browsers.",
    meter: 98,
  },
  {
    name: "HTML5 & Semantic Web",
    cat: "frontend",
    role: "a11y Standards, Schema.org, Core Web Vitals",
    exp: "4+ Years",
    icon: "??",
    badge: "SEO & Speed",
    benefit: "Flawless search indexing so your target customers find you automatically.",
    meter: 99,
  },
  {
    name: "CSS3 & Motion",
    cat: "frontend",
    role: "CSS Grid, Flexbox, Keyframes, 3D Physics",
    exp: "4+ Years",
    icon: "?",
    badge: "Hardware Accelerated",
    benefit: "Hardware-accelerated animations that don’t stutter or drain mobile batteries.",
    meter: 95,
  },
  {
    name: "Bootstrap 5",
    cat: "frontend",
    role: "Enterprise Dashboards, Rapid UI Kits",
    exp: "4+ Years",
    icon: "???",
    badge: "Rapid Prototyping",
    benefit: "Battle-tested component suites for enterprise internal backoffices.",
    meter: 92,
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const skillCategories = [
    { id: "all", label: "All Technologies" },
    { id: "frontend", label: "Frontend & UI" },
    { id: "backend", label: "Backend & Cloud" },
    { id: "mobile", label: "Mobile Apps" },
  ];

  const filteredSkills = ALL_SKILLS.filter((s) => {
    if (activeCategory === "all") return true;
    return s.cat === activeCategory;
  });

  return (
    <section id="skills" className="py-16 sm:py-24 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Header & Filter */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
              <Code2 className="w-4 h-4" />
              <span>Technical Mastery</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              4+ Years Senior Technical Stack
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-xl">
              Hardened production experience across modern frontend frameworks, native mobile, and cloud architectures.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-900 border border-slate-800 self-start sm:self-auto">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-5 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 hover:shadow-xl transition-all flex flex-col justify-between space-y-4"
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl p-2 rounded-2xl bg-slate-950/80 border border-slate-800">
                    {skill.icon}
                  </span>
                  <div>
                    <div className="font-bold text-base text-white">{skill.name}</div>
                    <div className="text-[11px] font-medium text-slate-400">{skill.role}</div>
                  </div>
                </div>

                <span className="px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 font-bold text-[10px]">
                  {skill.exp}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[10px] font-semibold text-slate-400">
                  <span>Production Readiness</span>
                  <span className="text-emerald-400 font-bold">{skill.meter}%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-sky-400"
                    style={{ width: `${skill.meter}%` }}
                  />
                </div>
              </div>

              {/* Benefit */}
              <p className="text-xs text-slate-300 leading-relaxed pt-1 border-t border-slate-800/80 font-normal">
                {skill.benefit}
              </p>

              {/* Badge Footer */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-md border border-emerald-500/20">
                  {skill.badge}
                </span>
                <CheckCheck className="w-4 h-4 text-emerald-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
