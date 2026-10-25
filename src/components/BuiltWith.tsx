"use client";

import React from "react";
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFlutter,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
  SiSupabase,
  SiFigma,
} from "react-icons/si";
import { Zap, Code2, Layers, Cpu, Sparkles } from "lucide-react";

// Custom CSS3 Icon since react-icons doesn't have standalone SiCss3
const Css3Icon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17.9 4.3H4.6l.4 4.5h13.9l-.5 5.5-4.4 1.2-4.4-1.2-.3-3.1h3.3l.1 1.2 1.3.4 1.3-.4.2-1.9H5.5l-.8-9.1h15.1l-.4 3.2z" />
  </svg>
);

export default function BuiltWith() {
  const technologies = [
    {
      name: "HTML5",
      category: "Structure & Semantics",
      icon: <SiHtml5 className="w-5 h-5 text-[#E34F26]" />,
      bg: "bg-orange-50 border-orange-200/80",
      desc: "Clean semantic SEO structure",
    },
    {
      name: "CSS3",
      category: "Styling & Responsive",
      icon: <Css3Icon className="w-5 h-5 text-[#1572B6]" />,
      bg: "bg-blue-50 border-blue-200/80",
      desc: "Fluid layouts & modern aesthetics",
    },
    {
      name: "JavaScript",
      category: "Interactive Logic",
      icon: <SiJavascript className="w-5 h-5 text-[#F7DF1E] bg-black/80 rounded-xs p-0.5" />,
      bg: "bg-amber-50 border-amber-200/80",
      desc: "High-performance DOM mechanics",
    },
    {
      name: "React 19",
      category: "Component UI",
      icon: <SiReact className="w-5 h-5 text-[#61DAFB]" />,
      bg: "bg-cyan-50 border-cyan-200/80",
      desc: "Reactive state & modular UI blocks",
    },
    {
      name: "Next.js",
      category: "Fullstack Architecture",
      icon: <SiNextdotjs className="w-5 h-5 text-slate-900" />,
      bg: "bg-slate-100 border-slate-200/80",
      desc: "Server components & sub-second speed",
    },
    {
      name: "TypeScript",
      category: "Type Safety",
      icon: <SiTypescript className="w-5 h-5 text-[#3178C6]" />,
      bg: "bg-blue-50 border-blue-200/80",
      desc: "Zero runtime crashes & enterprise code",
    },
    {
      name: "Tailwind CSS",
      category: "Utility Design",
      icon: <SiTailwindcss className="w-5 h-5 text-[#06B6D4]" />,
      bg: "bg-sky-50 border-sky-200/80",
      desc: "Zero-bloat utility typography & styling",
    },
    {
      name: "GSAP Motion",
      category: "Scroll Choreography",
      icon: <Zap className="w-5 h-5 text-[#88CE02]" />,
      bg: "bg-lime-50 border-lime-200/80",
      desc: "Cinema-grade 60 FPS scroll storytelling",
    },
    {
      name: "Flutter",
      category: "Cross-Platform Mobile",
      icon: <SiFlutter className="w-5 h-5 text-[#02569B]" />,
      bg: "bg-sky-50 border-sky-200/80",
      desc: "Native iOS & Android mobile apps",
    },
    {
      name: "Node.js",
      category: "Server Backends",
      icon: <SiNodedotjs className="w-5 h-5 text-[#5FA04E]" />,
      bg: "bg-emerald-50 border-emerald-200/80",
      desc: "High-throughput APIs & microservices",
    },
    {
      name: "MongoDB",
      category: "NoSQL Database",
      icon: <SiMongodb className="w-5 h-5 text-[#47A248]" />,
      bg: "bg-green-50 border-green-200/80",
      desc: "Flexible, ultra-fast document storage",
    },
    {
      name: "Firebase",
      category: "Cloud Services",
      icon: <SiFirebase className="w-5 h-5 text-[#FFCA28]" />,
      bg: "bg-amber-50 border-amber-200/80",
      desc: "Instant auth, push & realtime sync",
    },
    {
      name: "Supabase",
      category: "Postgres Cloud",
      icon: <SiSupabase className="w-5 h-5 text-[#3FCF8E]" />,
      bg: "bg-teal-50 border-teal-200/80",
      desc: "SQL scalability & edge security",
    },
    {
      name: "Figma",
      category: "UI/UX Prototyping",
      icon: <SiFigma className="w-5 h-5 text-[#F24E1E]" />,
      bg: "bg-rose-50 border-rose-200/80",
      desc: "Pixel-perfect visual tokens & wireframes",
    },
  ];

  // Duplicate for seamless infinite loop
  const marqueeList = [...technologies, ...technologies];

  return (
    <section id="built-with" className="py-20 sm:py-28 bg-[#FAFBFD] border-b border-slate-200/80 relative overflow-hidden">
      {/* Soft Glowing Ambient */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[300px] bg-gradient-to-tr from-sky-200/25 via-blue-100/20 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold uppercase tracking-wider shadow-xs">
            <Cpu className="w-3.5 h-3.5 text-sky-600" />
            <span>Modern Production Stack</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight"
            style={{ fontFamily: "'Josefin Sans', sans-serif" }}
          >
            Built With{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600">
              Industry-Leading Tech
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Every project is engineered with battle-tested frameworks to ensure maximum speed, fluid 60 FPS motion, and zero maintenance friction.
          </p>
        </div>

        {/* Infinite Auto-Scrolling Marquee Slider */}
        <div className="relative w-full overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-4 sm:gap-5 w-max animate-[marquee_38s_linear_infinite] hover:[animation-play-state:paused]">
            {marqueeList.map((tech, idx) => (
              <div
                key={idx}
                className="w-[240px] sm:w-[260px] p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-300 transition-all duration-200 flex flex-col justify-between space-y-3 select-none text-left shrink-0"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl border ${tech.bg} flex items-center justify-center shrink-0 shadow-xs`}>
                    {tech.icon}
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="text-sm font-bold text-slate-900 tracking-tight truncate">
                      {tech.name}
                    </h4>
                    <span className="text-[11px] font-semibold text-slate-400 block truncate">
                      {tech.category}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {tech.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Second Reverse Marquee for Dense High-Impact Showcase */}
        <div className="relative w-full overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-4 sm:gap-5 w-max animate-[marquee-reverse_42s_linear_infinite] hover:[animation-play-state:paused]">
            {[...technologies.slice(7), ...technologies.slice(0, 7), ...technologies].map((tech, idx) => (
              <div
                key={`rev-${idx}`}
                className="w-[220px] sm:w-[250px] p-3.5 sm:p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all duration-200 flex items-center gap-3 select-none text-left shrink-0"
              >
                <div className={`p-2 rounded-xl border ${tech.bg} shrink-0`}>
                  {tech.icon}
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight truncate">
                    {tech.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 truncate">
                    {tech.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="text-center pt-2">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 bg-slate-100/90 px-4 py-1.5 rounded-full border border-slate-200/80">
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            <span>100% Native Code • No Bloated Site Builders • Lightweight & Scalable</span>
          </span>
        </div>
      </div>

      {/* Embedded Keyframes for Infinite Marquee */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </section>
  );
}
