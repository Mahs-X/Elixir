"use client";

import React, { useRef, useEffect, useState } from "react";
import { ArrowDown, MessageCircle } from "lucide-react";

export default function ScrollFrameCanvas() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Safe catch for autoplay restrictions if any
      });
    }
  }, [isMounted]);

  return (
    <section className="relative w-full h-[100dvh] min-h-[580px] sm:min-h-[700px] overflow-hidden bg-[#BFC3C5] flex items-center justify-center">
      {/* Background Hero Video (rendered client-side to prevent SSR hydration mismatch) */}
      {isMounted && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          suppressHydrationWarning
          className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
        >
          <source src="/HeroFrame/video.mp4" type="video/mp4" />
          <source src="/Herofrmae/vdeo.mp4" type="video/mp4" />
          <source src="/video.mp4" type="video/mp4" />
        </video>
      )}

      {/* Modern Vignette & Seamless Bottom Gradient into Dark Section (#0B0F19) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-black/25 to-black/35 pointer-events-none" />
      <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/40 pointer-events-none" />

      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center pt-4 sm:pt-10 select-none w-full">
        {/* Storytelling Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-black/40 border border-white/20 backdrop-blur-md mb-3 sm:mb-6 shadow-xl">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[9px] sm:text-xs font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-slate-100">
            Websites Built Like A Story
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-2xl min-[380px]:text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white leading-[1.14] sm:leading-[1.06] drop-shadow-xl max-w-4xl">
          A Website That Tells{" "}
          <span className="italic font-serif font-normal bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 block sm:inline mt-1 sm:mt-0">
            Your Brand&apos;s Story
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-2.5 sm:mt-6 text-sm sm:text-2xl md:text-3xl font-light italic font-serif text-slate-200 tracking-wide max-w-xl sm:max-w-2xl drop-shadow-md">
          &mdash; Not Just Your Business Hours.
        </p>

        {/* Interactive Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-10 pointer-events-auto w-full max-w-xs sm:max-w-none">
          <a
            href="#projects"
            className="btn-3d inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-bold text-xs sm:text-sm uppercase tracking-wider bg-emerald-500 text-slate-950 border border-emerald-400 shadow-[0_4px_0_0_#059669] hover:bg-emerald-400 hover:brightness-105 active:translate-y-1 active:shadow-none transition-all cursor-pointer w-full sm:w-auto"
          >
            <span>Explore Work</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>

          <a
            href="https://wa.me/8801342132792?text=Hi%20Robin!%20I%20saw%20your%20portfolio%20and%20I%20have%20a%20project%20I%20want%20to%20discuss."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-3d inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-bold text-xs sm:text-sm uppercase tracking-wider bg-slate-900/80 text-white border border-white/20 backdrop-blur-md shadow-[0_4px_0_0_#1e293b] hover:bg-slate-800 hover:border-emerald-500/40 active:translate-y-1 active:shadow-none transition-all cursor-pointer w-full sm:w-auto"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Discuss on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 sm:gap-2 pointer-events-none select-none z-20">
        <span className="text-[8px] sm:text-[10px] font-bold tracking-widest uppercase text-slate-300 bg-black/50 backdrop-blur-md px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-white/10 shadow-sm">
          Scroll Down
        </span>
        <div className="w-3.5 sm:w-4 h-5 sm:h-7 rounded-full border-2 border-white/40 flex items-start justify-center p-0.5 sm:p-1 bg-black/30">
          <div className="w-1 h-1.5 sm:h-2 bg-emerald-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
