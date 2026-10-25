"use client";

import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Calibrating 60 FPS Viewport...");
  const [isFusing, setIsFusing] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Disable body scroll while loading
    document.body.style.overflow = "hidden";

    const startTime = performance.now();
    const duration = 4000; // Exact 4s smooth loading duration as requested

    const updateLoader = (now: number) => {
      const elapsed = now - startTime;
      const rawProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(rawProgress);

      if (rawProgress < 30) {
        setStatusText("Calibrating 60 FPS Viewport & Scroll Matrices...");
      } else if (rawProgress < 65) {
        setStatusText("Pre-warming 3D Device Transforms & Canvases...");
      } else if (rawProgress < 90) {
        setStatusText("Hydrating Story-Driven Motion Pipelines...");
        if (!isFusing) setIsFusing(true);
      } else {
        setStatusText("System Ready • Welcome!");
      }

      if (elapsed < duration) {
        requestAnimationFrame(updateLoader);
      } else {
        setProgress(100);
        setIsDone(true);
        setTimeout(() => {
          setIsVisible(false);
          document.body.style.overflow = "";
        }, 600);
      }
    };

    const animId = requestAnimationFrame(updateLoader);

    return () => {
      cancelAnimationFrame(animId);
      document.body.style.overflow = "";
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAFBFD] transition-all duration-700 select-none ${
        isDone ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      {/* Soft Sky-Blue Ambient Blobs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-sky-200/40 via-blue-100/30 to-indigo-100/20 blur-[130px] rounded-full pointer-events-none" />

      {/* Orbiting 3-Stars 3D Constellation Cluster */}
      <div className="relative w-36 h-36 flex items-center justify-center mb-8">
        {/* Shockwave ring when stars fuse */}
        {isFusing && (
          <div className="absolute w-32 h-32 rounded-full border-2 border-sky-400/60 animate-ping pointer-events-none" />
        )}

        {/* Central Luminous Core Star */}
        <div
          className={`w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-500 via-blue-600 to-indigo-600 flex items-center justify-center shadow-xl shadow-sky-500/30 transition-all duration-500 ${
            isFusing ? "scale-125 rotate-45" : "scale-100 rotate-0"
          }`}
        >
          <Sparkles className="w-8 h-8 text-white animate-pulse" />
        </div>

        {/* Orbiting Star 1 (Cyan / Sky) */}
        <div
          className={`absolute w-7 h-7 rounded-full bg-sky-400/90 shadow-lg shadow-sky-400/50 flex items-center justify-center transition-all duration-700 ${
            isFusing
              ? "translate-x-0 translate-y-0 opacity-0 scale-50"
              : "animate-[spin_4s_linear_infinite]"
          }`}
          style={{ transformOrigin: "0px 48px" }}
        >
          <div className="w-3 h-3 rounded-full bg-white shadow-xs" />
        </div>

        {/* Orbiting Star 2 (Emerald) */}
        <div
          className={`absolute w-7 h-7 rounded-full bg-emerald-400/90 shadow-lg shadow-emerald-400/50 flex items-center justify-center transition-all duration-700 ${
            isFusing
              ? "translate-x-0 translate-y-0 opacity-0 scale-50"
              : "animate-[spin_4s_linear_infinite_reverse]"
          }`}
          style={{ transformOrigin: "48px 0px" }}
        >
          <div className="w-3 h-3 rounded-full bg-white shadow-xs" />
        </div>

        {/* Orbiting Star 3 (Amber / Coral) */}
        <div
          className={`absolute w-6 h-6 rounded-full bg-amber-400/90 shadow-lg shadow-amber-400/50 flex items-center justify-center transition-all duration-700 ${
            isFusing
              ? "translate-x-0 translate-y-0 opacity-0 scale-50"
              : "animate-[spin_5s_linear_infinite]"
          }`}
          style={{ transformOrigin: "-38px -38px" }}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-white shadow-xs" />
        </div>
      </div>

      {/* Typography: "Welcome to My Portfolio" with Chalk Highlight */}
      <div className="text-center max-w-lg px-4 space-y-2 relative z-10">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight"
          style={{ fontFamily: "'Josefin Sans', sans-serif" }}
        >
          Welcome to{" "}
          <span
            className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 inline-block relative"
            style={{ fontFamily: "Georgia, 'Playfair Display', serif" }}
          >
            My Portfolio
            {/* Chalk style underline svg */}
            <svg
              className="absolute -bottom-1.5 left-0 w-full h-3 text-sky-400/60 pointer-events-none"
              viewBox="0 0 200 12"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M3 9C50 3 150 2 197 8"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        <p className="text-xs sm:text-sm font-semibold text-slate-500 tracking-wider uppercase pt-1">
          Robin • Creative Full-Stack & Motion Developer
        </p>
      </div>

      {/* Modern Progress Bar & Counter */}
      <div className="w-72 sm:w-80 mt-8 space-y-2.5 relative z-10">
        <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-600">
          <span className="truncate max-w-[210px] text-[11px] font-sans font-medium text-slate-500">
            {statusText}
          </span>
          <span className="text-sky-600">{progress}%</span>
        </div>

        {/* Progress Bar Track */}
        <div className="h-2 w-full bg-slate-200/80 rounded-full overflow-hidden p-[1px] shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-sky-500 via-blue-600 to-emerald-500 rounded-full transition-all duration-100 ease-out shadow-xs"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
