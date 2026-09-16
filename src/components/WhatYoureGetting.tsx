"use client";

import React, { useRef, useEffect } from "react";
import { ArrowRight, Check, Search, Layout, Zap, Smartphone } from "lucide-react";

const FRAME_COUNT = 72;

interface DeliverableItem {
  num: string;
  label: string;
  tagline: string;
  icon: React.ElementType;
  title: React.ReactNode;
  italicHook: React.ReactNode;
  description: React.ReactNode;
  isBonus?: boolean;
}

const DELIVERABLES: DeliverableItem[] = [
  {
    num: "01",
    label: "Built-In Discovery",
    tagline: "Search Architecture",
    icon: Search,
    title: (
      <>
        Built to Be Found on{" "}
        <span className="font-black drop-shadow-sm">
          <span className="text-[#4285F4]">G</span>
          <span className="text-[#EA4335]">o</span>
          <span className="text-[#FBBC05]">o</span>
          <span className="text-[#4285F4]">g</span>
          <span className="text-[#34A853]">l</span>
          <span className="text-[#EA4335]">e</span>
        </span>
      </>
    ),
    italicHook: "Visibility without paid ad dependency.",
    description: (
      <>
        Semantic Next.js App Router structure with pre-rendered OpenGraph metadata and clean indexing — ensuring when buyers look for your expertise, <strong className="text-slate-900 font-bold">your brand shows up first</strong>.
      </>
    ),
  },
  {
    num: "02",
    label: "Engagement & Flow",
    tagline: "Tactile Storytelling",
    icon: Layout,
    title: "A Story, Not Just a Template",
    italicHook: "Every scroll deepens buyer conviction.",
    description: (
      <>
        Generic template websites lose <strong className="text-rose-500 font-bold">70% of visitors in 5 seconds</strong>. Your platform is choreographed with intentional pacing and scrollytelling that guides visitors to choose you.
      </>
    ),
  },
  {
    num: "03",
    label: "Execution Speed",
    tagline: "Rapid Turnaround",
    icon: Zap,
    title: "Live Production in 2 to 3 Days",
    italicHook: "Launch while market demand is active.",
    description: (
      <>
        No agency bureaucracy or months in development limbo. Using modern AI-assisted engineering workflows, your custom site is <strong className="text-emerald-600 font-bold">built, refined, and live before the week ends</strong>.
      </>
    ),
  },
  {
    num: "04",
    label: "Exclusive Bonus",
    tagline: "Progressive Web App",
    icon: Smartphone,
    title: "Mobile App & Website Included",
    italicHook: "Native app speed with zero store friction.",
    description: (
      <>
        A valuable inclusion: your website installs directly onto client smartphones as a <strong className="text-sky-600 font-bold">Progressive Web App (PWA)</strong> with instant tap access and offline caching.
      </>
    ),
    isBonus: true,
  },
];

export default function WhatYoureGetting() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);
  const cueRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const trustBarRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let isCancelled = false;
    let cleanupAnim: (() => void) | undefined;

    async function initSectionAnimation() {
      const container = containerRef.current;
      const canvas = canvasRef.current;
      if (!container || !canvas) return;
      const context = canvas.getContext("2d");
      if (!context) return;

      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      if (isCancelled) return;

      gsap.registerPlugin(ScrollTrigger);

      // High-performance canvas dimensions (capped DPR to avoid massive 4K fill-rate drag)
      const setDimensions = () => {
        if (!canvas) return;
        const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = "medium";
      };
      setDimensions();

      // Path to SectonTwo 72-frame sequence
      const currentFrame = (index: number) =>
        `/SectonTwo/frame_${index.toString().padStart(3, "0")}.jpg`;

      const images: HTMLImageElement[] = [];
      const playhead = { frame: 0 };
      let lastDrawnFrame = -1;

      // Preload and asynchronously decode all 72 frames in background threads
      for (let i = 0; i < FRAME_COUNT; i++) {
        const img = new Image();
        img.src = currentFrame(i + 1);
        if ("decode" in img) {
          img.decode().catch(() => {});
        }
        img.onload = () => {
          if (Math.round(playhead.frame) === i) {
            render(true);
          }
        };
        images.push(img);
      }

      function render(force = false) {
        if (!canvas || !context) return;
        const currentIdx = Math.min(Math.max(Math.round(playhead.frame), 0), FRAME_COUNT - 1);

        // Deduplicate: skip expensive clearRect/drawImage if frame hasn't changed
        if (!force && currentIdx === lastDrawnFrame) return;
        lastDrawnFrame = currentIdx;

        let targetImg = images[currentIdx];

        // Safe fallback to nearest loaded frame during rapid scrolling
        if (!targetImg || !targetImg.complete || targetImg.naturalWidth === 0) {
          for (let offset = 1; offset < FRAME_COUNT; offset++) {
            const prev = images[currentIdx - offset];
            if (prev && prev.complete && prev.naturalWidth > 0) {
              targetImg = prev;
              break;
            }
            const next = images[currentIdx + offset];
            if (next && next.complete && next.naturalWidth > 0) {
              targetImg = next;
              break;
            }
          }
        }
        if (!targetImg || !targetImg.complete || targetImg.naturalWidth === 0) return;

        // Centered cover scaling to keep the monitor perfectly framed
        const isPortrait = canvas.height > canvas.width;
        // In portrait mode, bias shift slightly to the left (where monitor is) instead of center
        const xBias = isPortrait ? 0.36 : 0.5;

        const hRatio = canvas.width / targetImg.width;
        const vRatio = canvas.height / targetImg.height;
        const ratio = Math.max(hRatio, vRatio);

        const centerShift_x = (canvas.width - targetImg.width * ratio) * xBias;
        const centerShift_y = (canvas.height - targetImg.height * ratio) / 2;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(
          targetImg,
          0,
          0,
          targetImg.width,
          targetImg.height,
          centerShift_x,
          centerShift_y,
          targetImg.width * ratio,
          targetImg.height * ratio
        );
      }

      // Initial frame render
      if (images[0]) {
        images[0].onload = () => render(true);
        if (images[0].complete) render(true);
      }

      const handleResize = () => {
        setDimensions();
        render(true);
      };
      window.addEventListener("resize", handleResize);

      // Master GSAP Timeline synchronized with smooth scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.55, // Responsive, silky smooth scrub synced with Lenis
        },
        onUpdate: () => render(), // Guaranteed render at every scroll tick
      });

      // ----------------------------------------------------------------------
      // PHASE 1: Initial Scroll Cue Fade-Out (0.0 to 0.8)
      // ----------------------------------------------------------------------
      if (cueRef.current) {
        tl.to(
          cueRef.current,
          { opacity: 0, y: 15, ease: "power1.out", duration: 0.8 },
          0
        );
      }

      // ----------------------------------------------------------------------
      // PHASE 2: Precise Multi-Segment Frame Scrubbing (0.0 to 6.3)
      // ----------------------------------------------------------------------

      // 2A: Frames 0 -> 55 (Character typing, sunglasses wink, hands settling)
      tl.to(
        playhead,
        {
          frame: 55,
          ease: "none",
          duration: 3.5,
        },
        0
      );

      // 2B: Frames 55 -> 64 (Hand rests on keyboard, character smiles, camera begins slow forward creep)
      tl.to(
        playhead,
        {
          frame: 64,
          ease: "power1.in",
          duration: 1.3,
        },
        3.5
      );

      // 2C: Frames 64 -> 71 (THE CINEMATIC DOLLY-IN PUSH!)
      tl.to(
        playhead,
        {
          frame: FRAME_COUNT - 1, // frame 71
          ease: "power2.out",
          duration: 1.5,
        },
        4.8
      );

      // ----------------------------------------------------------------------
      // PHASE 3: THE INFINITE ZOOM MATCH-CUT (5.7 to 6.8)
      // Portrait-aware transform origin for mobile and tablet devices
      // ----------------------------------------------------------------------
      if (canvasRef.current) {
        const isSmallScreen = window.innerWidth < 1024;
        tl.to(
          canvasRef.current,
          {
            scale: isSmallScreen ? 1.52 : 1.42,
            transformOrigin: isSmallScreen ? "37% 48%" : "43% 48%",
            ease: "power2.in",
            duration: 0.9,
          },
          5.7
        );

        tl.to(
          canvasRef.current,
          {
            opacity: 0,
            ease: "power2.inOut",
            duration: 0.5,
          },
          6.2
        );
      }

      // Optical White Screen Bloom / Flash
      if (flashRef.current) {
        tl.fromTo(
          flashRef.current,
          { opacity: 0 },
          { opacity: 0.45, ease: "power2.in", duration: 0.2 },
          6.2
        );
        tl.to(
          flashRef.current,
          { opacity: 0, ease: "power2.out", duration: 0.35 },
          6.4
        );
      }

      // ----------------------------------------------------------------------
      // PHASE 4: Live Section 2 HTML Content Emerges (6.25 to 7.0)
      // ----------------------------------------------------------------------
      if (contentRef.current) {
        tl.fromTo(
          contentRef.current,
          { opacity: 0, scale: 0.95, pointerEvents: "none" },
          {
            opacity: 1,
            scale: 1,
            pointerEvents: "auto",
            ease: "power2.out",
            duration: 0.75,
          },
          6.25
        );
      }

      // ----------------------------------------------------------------------
      // PHASE 5: Discrete, Non-Overlapping Deliverables Cards (Zero Ghosting)
      // ----------------------------------------------------------------------
      const totalItems = itemsRef.current.length;
      let cardTime = 7.1;

      itemsRef.current.forEach((item, index) => {
        if (!item) return;

        // 1. Enter: Slide up smoothly into center position
        tl.fromTo(
          item,
          {
            autoAlpha: 0,
            y: 40,
            scale: 0.96,
            rotateX: -8,
            pointerEvents: "none",
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            pointerEvents: "auto",
            ease: "power2.out",
            duration: 0.35,
          },
          cardTime
        );

        // Advance timeline past enter duration + reading pause
        cardTime += 0.35 + 0.55;

        // 2. Exit: If not the final card, glide out and hide COMPLETELY
        if (index < totalItems - 1) {
          tl.to(
            item,
            {
              autoAlpha: 0,
              y: -40,
              scale: 0.96,
              rotateX: 8,
              pointerEvents: "none",
              ease: "power2.in",
              duration: 0.3,
            },
            cardTime
          );
          cardTime += 0.35;
        }
      });

      // ----------------------------------------------------------------------
      // PHASE 6: Trust Bar Reveal
      // ----------------------------------------------------------------------
      if (trustBarRef.current) {
        tl.fromTo(
          trustBarRef.current,
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, ease: "power2.out", duration: 0.45 },
          cardTime + 0.05
        );
      }

      cleanupAnim = () => {
        window.removeEventListener("resize", handleResize);
        tl.kill();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    }

    initSectionAnimation();

    return () => {
      isCancelled = true;
      if (cleanupAnim) cleanupAnim();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="whatyoure-getting"
      className="relative w-full h-[850vh] sm:h-[950vh] bg-[#F5F5F7] text-slate-900 selection:bg-emerald-500/20 selection:text-emerald-900"
    >
      {/* Pinned Sticky Viewport */}
      <div className="sticky top-0 w-full h-screen h-[100dvh] overflow-hidden bg-[#F5F5F7] flex flex-col justify-between py-3 sm:py-6 lg:py-8">
        
        {/* 1. Cinematic Dolly-In Screen Push Canvas (Plays 72 frames) */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover z-20 pointer-events-none"
        />

        {/* 2. Optical Match-Cut Lens Bloom Flash */}
        <div
          ref={flashRef}
          className="absolute inset-0 bg-white pointer-events-none z-30 opacity-0"
        />

        {/* 3. Subtle Ambient Apple-Style Background (Behind HTML content) */}
        <div 
          className="absolute inset-0 pointer-events-none z-0" 
          style={{ 
            background: "radial-gradient(circle at 50% 40%, rgba(255,255,255,0.9) 0%, rgba(245,245,247,1) 75%)",
          }} 
        />

        {/* 4. Live Interactive Section 2 Container (Emerges from the Monitor Screen) */}
        <div
          ref={contentRef}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center opacity-0 transform-gpu"
        >
          <div className="flex flex-col lg:flex-row w-full gap-4 sm:gap-6 lg:gap-16 items-center justify-center pt-2 sm:pt-4 lg:pt-0">
            
            {/* Left Side: Editorial Typography */}
            <div className="lg:w-5/12 flex flex-col space-y-1.5 sm:space-y-3 lg:space-y-4 text-center lg:text-left shrink-0">
              <div className="inline-flex items-center justify-center lg:justify-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] sm:text-[10px] lg:text-[11px] font-bold tracking-[0.25em] uppercase text-emerald-700">
                  Precision Specification
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-950 tracking-[-0.03em] leading-[1.08]">
                What You <br className="hidden lg:block"/>
                <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-sky-600">
                  Will Receive.
                </span>
              </h2>

              <p className="hidden sm:block text-xs sm:text-sm lg:text-base font-serif italic text-slate-600 leading-relaxed max-w-sm mx-auto lg:mx-0 border-l-2 border-emerald-300 pl-3 sm:pl-4 mt-1 sm:mt-2">
                &ldquo;A website engineered to make choosing your brand feel obvious, not transactional.&rdquo;
              </p>
            </div>

            {/* Right Side: Cylinder List (4D Vibe) */}
            <div className="w-full lg:w-7/12 relative h-[38vh] sm:h-[42vh] md:h-[46vh] lg:h-[56vh] perspective-[1200px]">
              {DELIVERABLES.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    ref={(el) => { itemsRef.current[idx] = el; }}
                    style={{ zIndex: 20 + idx }}
                    className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col sm:flex-row gap-3 sm:gap-5 lg:gap-6 group items-start invisible opacity-0 transform-style-3d pointer-events-auto"
                  >
                    <div className="shrink-0 pt-1 hidden md:flex flex-col items-center gap-3">
                      <span className="text-2xl md:text-3xl lg:text-4xl font-serif italic font-light text-slate-400 transition-colors duration-500">
                        {item.num}
                      </span>
                      <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-500">
                        <Icon className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                      </div>
                    </div>

                    <div className="w-full flex flex-col space-y-2 sm:space-y-3 bg-white border border-slate-200/90 p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-2xl shadow-slate-900/10">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-50 border border-emerald-200/80 shadow-xs flex md:hidden items-center justify-center text-emerald-600 shrink-0">
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <h3 className="text-base sm:text-xl lg:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                            {item.title}
                          </h3>
                        </div>
                        {item.isBonus && (
                          <span className="shrink-0 px-2 py-0.5 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 border border-emerald-200 text-[8px] sm:text-[9px] uppercase tracking-widest font-bold shadow-xs">
                            Bonus
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                          {item.label}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm font-serif italic text-slate-500 line-clamp-1 sm:line-clamp-none">
                        {item.italicHook}
                      </p>
                      
                      <p className="text-xs sm:text-sm lg:text-base text-slate-700 leading-relaxed max-w-xl line-clamp-3 sm:line-clamp-4 lg:line-clamp-none">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 5. Bottom Editorial Trust Bar */}
        <div ref={trustBarRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-2 sm:pt-3 opacity-0">
          <div className="p-2.5 sm:p-3.5 lg:p-4 rounded-xl sm:rounded-2xl bg-white/80 border border-slate-200/80 shadow-sm backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
                <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </div>
              <p className="text-[11px] sm:text-xs text-slate-700 font-medium line-clamp-1 sm:line-clamp-none">
                <strong className="text-slate-900 font-bold">Zero Vanishing Risk:</strong> Daily WhatsApp milestone screen recordings so you inspect progress every single step.
              </p>
            </div>

            <a
              href="https://wa.me/8801342132792?text=Hi%20Robin!%20I%20reviewed%20What%20You%27ll%20Receive%20and%20want%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 w-full sm:w-auto justify-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl font-bold text-[10px] sm:text-[11px] uppercase tracking-wider bg-slate-900 text-white hover:bg-slate-800 transition-all cursor-pointer inline-flex items-center gap-1.5 shadow-sm"
            >
              <span>Discuss Scope</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 6. Initial Scroll Cue */}
        <div
          ref={cueRef}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none z-25 select-none transition-all"
        >
          <span className="text-[10px] font-bold tracking-widest uppercase text-slate-600 bg-white/80 backdrop-blur-sm px-3.5 py-1 rounded-full border border-slate-300 shadow-xs">
            Scroll to Enter
          </span>
          <div className="w-3.5 h-6 rounded-full border-2 border-slate-500/80 flex items-start justify-center p-0.5 bg-white/40">
            <div className="w-1 h-2 bg-slate-700 rounded-full animate-bounce" />
          </div>
        </div>

      </div>
    </section>
  );
}