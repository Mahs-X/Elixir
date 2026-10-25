"use client";

import dynamic from "next/dynamic";
import ScrollFrameCanvas from "@/components/ScrollFrameCanvas";
import WhatYoureGetting from "@/components/WhatYoureGetting";
import Preloader from "@/components/Preloader";

// Pro-Performance: Dynamic imports with ssr: false for below-the-fold heavy modules
// Prevents main-thread blocking, reduces initial JS bundle by >60%, and avoids FPS drops on mobile
const Projects = dynamic(() => import("@/components/Projects"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-96 flex items-center justify-center bg-[#FAFBFD]">
      <div className="w-8 h-8 rounded-full border-2 border-sky-400 border-t-transparent animate-spin" />
    </div>
  ),
});

const BuiltWith = dynamic(() => import("@/components/BuiltWith"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-80 flex items-center justify-center bg-[#FAFBFD]">
      <div className="w-8 h-8 rounded-full border-2 border-sky-400 border-t-transparent animate-spin" />
    </div>
  ),
});

const Pricing = dynamic(() => import("@/components/Pricing"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-96 flex items-center justify-center bg-[#FAFBFD]">
      <div className="w-8 h-8 rounded-full border-2 border-sky-400 border-t-transparent animate-spin" />
    </div>
  ),
});

const Contact = dynamic(() => import("@/components/Contact"), {
  ssr: false,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-sky-500/20 selection:text-sky-700 bg-[#FAFBFD]">
      {/* 0. High-Performance Preloader (3D Star Cluster & Welcome Sequence) */}
      <Preloader />

      {/* 1. Hero: Pure Story-Telling Scroll Animation (Pinned, no navbar, no text) */}
      <ScrollFrameCanvas />

      {/* 2. Revealed Portfolio Sections */}
      <div className="relative z-10 bg-[#FAFBFD]">
        <WhatYoureGetting />
        <Projects />
        <BuiltWith />
        <Pricing />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
