import ScrollFrameCanvas from "@/components/ScrollFrameCanvas";
import WhatYoureGetting from "@/components/WhatYoureGetting";
import Projects from "@/components/Projects";
import BuiltWith from "@/components/BuiltWith";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-emerald-500/20 selection:text-emerald-400">
      {/* 1. Hero: Pure Story-Telling Scroll Animation (Pinned, no navbar, no text) */}
      <ScrollFrameCanvas />

      {/* 2. Revealed Portfolio Sections (After full animation completion) */}
      <div className="relative z-10 bg-[#0B0F19]">
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
