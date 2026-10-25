"use client";
import Link from "next/link";

const demos = [
  { slug: "01-staccato-kinetic",       title: "Rapid Staccato Kinetic Typography",          sec: "00:00 – 00:03" },
  { slug: "02-spring-scale-glow",      title: "Spring Scale Morph + Radial Glow",           sec: "00:03 – 00:05" },
  { slug: "03-editorial-mask-tracking", title: "Editorial Mask Reveal & Tracking Expansion", sec: "00:05 – 00:08" },
  { slug: "04-brand-resolve-glow",     title: "Brand Mark Resolve with Soft Glow",          sec: "00:08 – 00:11" },
  { slug: "05-cylinder-drum",          title: "3D Vertical Cylinder Rotary Drum",            sec: "00:11 – 00:15" },
  { slug: "06-typewriter-gradient",    title: "Typewriter Gradient Mask Reveal",             sec: "00:15 – 00:18" },
  { slug: "07-karaoke-highlight",      title: "Scroll-driven Karaoke Text Highlighter",     sec: "00:18 – 00:23" },
  { slug: "08-bento-card-spread",      title: "Staggered Bento Card Spread 2.5D",           sec: "00:23 – 00:26" },
  { slug: "09-cinemascope-pan",        title: "Macro CinemaScope Typography Pan",            sec: "00:26 – 00:30" },
  { slug: "10-depth-masking",          title: "Rotoscoped Depth Masking (Text Behind)",      sec: "00:30 – 00:34" },
  { slug: "11-ambient-mesh",           title: "Ambient Light Mesh Background",               sec: "Throughout" },
];

export default function DemosIndex() {
  return (
    <div className="min-h-screen bg-[#070A10] text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
          SaaS Motion Demos
        </h1>
        <p className="text-slate-400 text-lg mb-8 max-w-2xl">
          ১১টি প্রোডাকশন-লেভেল SaaS টেক্সট অ্যানিমেশন — GSAP, Lenis, এবং CSS GPU কম্পোজিটিং দিয়ে তৈরি।
          প্রতিটি পেজে একটি করে নির্দিষ্ট অ্যানিমেশন টেকনিক প্রদর্শিত হয়েছে।
        </p>

        {/* Featured /text Workly 7-Scene Studio Banner */}
        <Link
          href="/text"
          className="group relative block mb-8 p-6 rounded-3xl border border-sky-500/40 bg-gradient-to-r from-sky-950/40 via-blue-900/20 to-sky-900/10 hover:border-sky-400 transition-all duration-300 shadow-xl shadow-sky-500/10 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 flex items-center justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-mono font-bold mb-2">
                ✨ NEW: /text STUDIO
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors">
                Workly Product Video: 7 Kinetic Text Animations Showcase
              </h2>
              <p className="text-sm text-slate-300 mt-1 max-w-xl">
                Master Cinema Player (00:04 – 00:27), Interactive Timeline Scrubber, এবং ৭টি আলাদা লাইভ ল্যাব ও GSAP কোডভিউয়ার।
              </p>
            </div>
            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-300 flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white transition-all">
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </Link>

        <div className="grid gap-4">
          {demos.map((d, i) => (
            <Link
              key={d.slug}
              href={`/demos/${d.slug}`}
              className="group flex items-center gap-6 p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-sky-500/30 transition-all duration-300"
            >
              <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 font-mono text-sm font-bold flex items-center justify-center group-hover:bg-sky-500/20 transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-white group-hover:text-sky-300 transition-colors truncate">
                  {d.title}
                </p>
                <p className="text-sm text-slate-500 mt-0.5">Video Reference: {d.sec}</p>
              </div>
              <svg className="w-5 h-5 text-slate-600 group-hover:text-sky-400 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
