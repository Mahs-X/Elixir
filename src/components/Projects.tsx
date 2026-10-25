"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

export interface Project {
  id: string;
  title: string;
  tagline?: string;
  description: string;
  live_url: string;
  github_url?: string | null;
  tags?: string[];
  screenshot_url?: string;
  category?: string;
  metrics?: string;
  order_index?: number;
}

const FALLBACK_PROJECTS: Project[] = [
  {
    id: "c2b137b2-8f69-44d0-b4d0-1cf9e81ccbdb",
    title: "PatientCare",
    tagline: "3D interactive website",
    description:
      "Saas Animations loads within 1s second motion animations mobile responsive",
    live_url: "https://patient-care-orcin.vercel.app/",
    github_url: null,
    tags: ["Next.js", "Tailwind css", "Gsap"],
    screenshot_url:
      "https://res.cloudinary.com/dpv4ufsra/image/upload/v1792645131/Screenshot_2026-10-22_105841_ogbgpu.png",
    category: "Interactive website",
    order_index: 0,
    metrics: "Modern SaaS Animation + Responsive For All device",
  },
  {
    id: "44656c6e-5f34-427d-9ca5-26fcb89fe037",
    title: "Doctors Hero",
    tagline: "Modern SEO & Visible in Ai Models",
    description:
      "Top in google search & Ai overviews, Recommended By ChatGPT Gemini Ai models",
    live_url: "https://doctorshero.com/",
    github_url: null,
    tags: ["SEO", "SGE", "GEO", "NextJS"],
    screenshot_url:
      "https://res.cloudinary.com/dpv4ufsra/image/upload/v1792646469/Screenshot_2026-10-22_112149_vz11r8.png",
    category: "SEO & SGE",
    order_index: 1,
    metrics: "Top in google Search within 4 Days",
  },
  {
    id: "56b17519-299f-441d-92ae-0dcf79a2bb75",
    title: "Pathfinder Peko",
    tagline: "Gamified SSC EdTech & Realtime 1v1 Battle Platform",
    description:
      "A full-stack gamified e-learning web platform with real-time multiplayer 1v1 quiz battles, offline-first PWA caching, and Duolingo 3D aesthetics. Built to handle 10,000+ active learners with sub-50ms Supabase Realtime broadcast sync.",
    live_url: "https://pathfinderpeko.com",
    github_url: "https://github.com/Mahs-X/peko-pathfinder-platform",
    tags: ["Next.js 16", "React", "Tailwind CSS", "Supabase", "Firebase", "PWA"],
    screenshot_url:
      "https://res.cloudinary.com/dpv4ufsra/image/upload/v1789061306/PATHFINDER_oq0o2c.png",
    category: "Full-Stack Web",
    order_index: 2,
    metrics: "10k+ Learners Capacity • <50ms Realtime Sync",
  },
  {
    id: "4bceff45-9c26-4f6b-a332-6b3227bd339d",
    title: "Luxuary Glance",
    tagline: "Real Estate WebFolio",
    description:
      "LuxuryEstates is a premium real estate platform showcasing high-end properties like modern villas, luxury lofts, and elegant townhouses. It features detailed property listings, expert agent profiles, client testimonials, and seamless contact options for home buyers and investors.",
    live_url: "https://luxury-estate-pi.vercel.app/",
    github_url: "https://github.com/Mahs-X",
    tags: ["Next.js", "Tailwind CSS"],
    screenshot_url:
      "https://res.cloudinary.com/dpv4ufsra/image/upload/v1789060375/luxury_ue2cps.png",
    category: "Website",
    order_index: 3,
    metrics: "Responsive • Modern Look (Clean & Calm)",
  },
  {
    id: "cc345729-e045-4349-bf7b-d98e35435694",
    title: "Classy Bro",
    tagline: "Online Apparel & E-Commerce Web Platform",
    description:
      "Interactive chapter reader with note-taking, rich latex rendering, instant search, dynamic pricing packages, and real-time wallet recharge integration.",
    live_url: "https://classy-bro.vercel.app/",
    github_url: "https://github.com/Mahs-X",
    tags: ["Next.js", "Tailwind CSS"],
    screenshot_url:
      "https://res.cloudinary.com/dpv4ufsra/image/upload/v1789060375/classyBro_vcazxr.png",
    category: "SaaS & E-Commerce",
    order_index: 4,
    metrics: "99.9% Uptime • Sub-second Page Loads",
  },
];

function getProjectBullets(project: Project): string[] {
  const titleLower = (project.title || "").toLowerCase();
  if (titleLower.includes("patientcare")) {
    return [
      "Modern SaaS Animation + Responsive For All device",
      "Built with Next.js, Tailwind CSS, GSAP",
      "SaaS Animations loads within 1s motion flow",
    ];
  }
  if (titleLower.includes("doctors hero")) {
    return [
      "Top in Google Search within 4 Days",
      "Built with SEO, SGE, GEO & Next.js",
      "Recommended by ChatGPT & Gemini AI models",
    ];
  }
  if (titleLower.includes("pathfinder")) {
    return [
      "10k+ active learners capacity (<50ms realtime sync)",
      "Gamified 1v1 quiz battles & PWA offline caching",
      "Next.js 16, Supabase, Firebase & Tailwind CSS",
    ];
  }
  if (titleLower.includes("luxuary") || titleLower.includes("luxury")) {
    return [
      "Modern luxury villas & lofts property showcase",
      "Agent profiles, client testimonials & enquiry flow",
      "Clean responsive design with Next.js & Tailwind",
    ];
  }
  if (titleLower.includes("classy")) {
    return [
      "E-commerce apparel store & dynamic product catalog",
      "Sub-second page loads with 99.9% uptime",
      "Interactive reader & instant checkout flow",
    ];
  }

  const bullets: string[] = [];
  if (project.metrics) bullets.push(project.metrics);
  if (project.tags && project.tags.length > 0) {
    bullets.push(`Built with ${project.tags.slice(0, 3).join(", ")}`);
  }
  if (project.description) {
    const firstSentence = project.description.split(".")[0];
    if (firstSentence) bullets.push(firstSentence.trim());
  }
  return bullets.slice(0, 3);
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>(FALLBACK_PROJECTS);
  const [activeProjectIdx, setActiveProjectIdx] = useState<number>(0);

  const stageRef = useRef<HTMLDivElement>(null);
  const cameraViewportRef = useRef<HTMLDivElement>(null);
  const textTrackRef = useRef<HTMLDivElement>(null);

  // Living Water Background Waves & Parallax Shapes
  const wave1Ref = useRef<SVGPathElement>(null);
  const wave2Ref = useRef<SVGPathElement>(null);
  const shapeRingRef = useRef<HTMLDivElement>(null);
  const shapePillRef = useRef<HTMLDivElement>(null);
  const shapeOrbRef = useRef<HTMLDivElement>(null);

  // Screen 1: Beyond Code
  const screen1Ref = useRef<HTMLDivElement>(null);

  // Screen 2: Pure Impact
  const screen2Ref = useRef<HTMLDivElement>(null);
  const wordPureRef = useRef<HTMLSpanElement>(null);
  const wordImpactRef = useRef<HTMLSpanElement>(null);
  const badgeShowcaseRef = useRef<HTMLDivElement>(null);

  // Morphing Droplet to 3D Isometric Card to Fullscreen Canvas
  const morphCanvasRef = useRef<HTMLDivElement>(null);
  const dropletAuraRef = useRef<HTMLDivElement>(null);

  // Cards Container, Slider Track & Dynamic Wrappers
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardWrappersRef = useRef<(HTMLDivElement | null)[]>([]);
  const activeProjectIdxRef = useRef<number>(0);
  const currentDrumProgressRef = useRef<number>(0);

  // Fetch real-time project details from Supabase table
  useEffect(() => {
    async function loadProjects() {
      try {
        const { data, error } = await supabase
          .from("portfolio_projects")
          .select("*")
          .order("order_index", { ascending: true });

        if (data && data.length > 0 && !error) {
          setProjects(data);
        }
      } catch (err) {
        console.warn("Supabase fetch failed, continuing with fallback:", err);
      }
    }
    loadProjects();
  }, []);

  // GSAP ScrollTrigger Master Timeline
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!stageRef.current) return;

      const screen1Chars =
        screen1Ref.current?.querySelectorAll<HTMLSpanElement>(".type-char");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stageRef.current,
          start: "top top",
          end: () => {
            if (typeof window === "undefined") return "+=7200";
            return window.innerWidth < 768 ? "+=3800" : "+=7200";
          },
          pin: true,
          scrub: typeof window !== "undefined" && window.innerWidth < 768 ? 0.4 : 1.2,
          anticipatePin: 1,
        },
      });

      // ─────────────────────────────────────────────────────────────
      // 0. LIVING BACKGROUND: Flowing Water Waves & Parallax Shapes
      //    Active and moving during typography phase
      // ─────────────────────────────────────────────────────────────
      if (wave1Ref.current) {
        tl.to(
          wave1Ref.current,
          { x: "-80px", y: "35px", ease: "none" },
          0
        );
      }
      if (wave2Ref.current) {
        tl.to(
          wave2Ref.current,
          { x: "100px", y: "-40px", ease: "none" },
          0
        );
      }
      if (shapeRingRef.current) {
        tl.to(
          shapeRingRef.current,
          { rotate: 160, y: "90px", x: "50px", ease: "none" },
          0
        );
      }
      if (shapePillRef.current) {
        tl.to(
          shapePillRef.current,
          { rotate: -80, y: "-70px", x: "-45px", ease: "none" },
          0
        );
      }
      if (shapeOrbRef.current) {
        tl.to(
          shapeOrbRef.current,
          { scale: 1.35, y: "50px", ease: "none" },
          0
        );
      }

      // ─────────────────────────────────────────────────────────────
      // 1. SCREEN 1: "Beyond Code" (Kinetic Typewriter Reveal)
      //    (0.00 -> 0.16)
      // ─────────────────────────────────────────────────────────────
      tl.fromTo(
        screen1Ref.current,
        {
          x: "22vw",
          scale: 1.6,
          filter: "blur(14px)",
          opacity: 0,
        },
        {
          x: "0vw",
          scale: 1.0,
          filter: "blur(0px)",
          opacity: 1,
          duration: 0.15,
          ease: "power2.out",
        },
        0
      );

      if (screen1Chars && screen1Chars.length > 0) {
        tl.fromTo(
          screen1Chars,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.015,
            duration: 0.14,
            ease: "power2.out",
          },
          0.02
        );
      }

      // ─────────────────────────────────────────────────────────────
      // 2. SCREEN 1 DISSOLVE & SLIDE LEFT
      //    (0.18 -> 0.25)
      // ─────────────────────────────────────────────────────────────
      if (screen1Chars && screen1Chars.length > 0) {
        tl.to(
          screen1Chars,
          {
            x: -75,
            opacity: 0,
            filter: "blur(12px)",
            stagger: { amount: 0.06, from: "start" },
            duration: 0.07,
            ease: "power2.in",
          },
          0.18
        );
      }

      tl.to(
        screen1Ref.current,
        {
          x: "-22vw",
          opacity: 0,
          duration: 0.07,
          ease: "power2.in",
        },
        0.20
      );

      // ─────────────────────────────────────────────────────────────
      // 3. SCREEN 2: "Pure Impact" (ONE BY ONE, BUTTER-SMOOTH)
      //    (0.25 -> 0.44)
      // ─────────────────────────────────────────────────────────────
      if (cameraViewportRef.current) {
        tl.fromTo(
          cameraViewportRef.current,
          { scale: 1.0 },
          { scale: 1.02, duration: 0.1, yoyo: true, repeat: 1, ease: "power2.out" },
          0.25
        );
      }

      // Word 1: "Pure" slides in butter-smooth from left
      if (wordPureRef.current) {
        tl.fromTo(
          wordPureRef.current,
          {
            x: -80,
            opacity: 0,
            filter: "blur(12px)",
          },
          {
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.09,
            ease: "power3.out",
          },
          0.25
        );
      }

      // Word 2: "Impact" follows smoothly right after
      if (wordImpactRef.current) {
        tl.fromTo(
          wordImpactRef.current,
          {
            x: -60,
            opacity: 0,
            filter: "blur(12px)",
          },
          {
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.09,
            ease: "power3.out",
          },
          0.28
        );
      }

      // Badge: "Portfolio Showcase" emerges with a crisp spin
      if (badgeShowcaseRef.current) {
        tl.fromTo(
          badgeShowcaseRef.current,
          {
            scale: 0.7,
            opacity: 0,
            filter: "blur(8px)",
          },
          {
            scale: 1.0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.08,
            ease: "power2.out",
          },
          0.32
        );
      }

      // ─────────────────────────────────────────────────────────────
      // 4. SCREEN 2 SMOKE EVAPORATION
      //    (0.44 -> 0.52)
      // ─────────────────────────────────────────────────────────────
      tl.to(
        screen2Ref.current,
        {
          y: -110,
          scale: 0.94,
          filter: "blur(24px)",
          opacity: 0,
          duration: 0.08,
          ease: "power2.in",
        },
        0.44
      );

      // ─────────────────────────────────────────────────────────────
      // 5. PHASE 2: 3D ISOMETRIC MORPHING CANVAS
      //    Starts as droplet, morphs into 3D isometric card
      //    (rotateX: 15deg, rotateY: 28deg, rotateZ: -5deg)
      //    Then expands and straightens to 0deg full-screen canvas
      //    (0.50 -> 0.68)
      // ─────────────────────────────────────────────────────────────
      if (dropletAuraRef.current) {
        tl.fromTo(
          dropletAuraRef.current,
          { scale: 0.2, opacity: 0 },
          { scale: 1.6, opacity: 0.8, duration: 0.06, ease: "power2.out" },
          0.50
        ).to(
          dropletAuraRef.current,
          { scale: 2.4, opacity: 0, duration: 0.08, ease: "power2.in" },
          0.56
        );
      }

      if (morphCanvasRef.current) {
        // Step A: Birth as a tiny droplet
        tl.fromTo(
          morphCanvasRef.current,
          {
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            x: "24vw",
            y: "22vh",
            rotateX: 10,
            rotateY: 20,
            rotateZ: -10,
            scale: 0.2,
            opacity: 0,
          },
          {
            width: "120px",
            height: "120px",
            borderRadius: "32px",
            scale: 1.0,
            opacity: 1,
            duration: 0.06,
            ease: "power2.out",
          },
          0.50
        );

        // Step B: Expands into 3D Isometric Card
        tl.to(
          morphCanvasRef.current,
          {
            width: "78vw",
            height: "82vh",
            borderRadius: "20px",
            x: "-6vw",
            y: "-3vh",
            rotateX: 15,
            rotateY: 28,
            rotateZ: -5,
            duration: 0.10,
            ease: "power2.out",
          },
          0.55
        );

        // Step C: Straightens to 0deg and expands to FULLSCREEN CANVAS
        tl.to(
          morphCanvasRef.current,
          {
            width: "100vw",
            height: "100vh",
            borderRadius: "0px",
            x: "0vw",
            y: "0vh",
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            pointerEvents: "auto",
            duration: 0.10,
            ease: "power2.inOut",
          },
          0.64
        );
      }

      // ─────────────────────────────────────────────────────────────
      // 6. SCENE 3: 3D CYLINDER ROTARY DRUM SHOWCASE (PATIENTCARE STYLE)
      //    Center card elevated: scale 1.08, rotateY 0deg, pure white & crisp.
      //    Side cards curve into 3D cylinder depth: rotateY, translateZ,
      //    depth-of-field blur, and scale-down.
      //    (0.70 -> 1.00)
      // ─────────────────────────────────────────────────────────────
      const drum = { progress: 0 };
      const wrappers = cardWrappersRef.current.filter(Boolean);
      const totalCards = wrappers.length;

      const updateCylinder = (prog: number) => {
        const cards = cardWrappersRef.current.filter(Boolean);
        if (!cards.length) return;

        currentDrumProgressRef.current = prog;
        const total = cards.length;
        const closestIdx = Math.min(total - 1, Math.max(0, Math.round(prog)));
        if (closestIdx !== activeProjectIdxRef.current) {
          activeProjectIdxRef.current = closestIdx;
          setActiveProjectIdx(closestIdx);
        }

        const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
        // Responsive card spacing for mobile, tablet, and desktop
        const spacing  = isMobile ? 305 : 560;

        cards.forEach((card, i) => {
          if (!card) return;
          const diff    = i - prog;
          const absDiff = Math.abs(diff);

          // Pure 3D cylinder rotation — patientCare style with responsive center scale
          const rotateY    = diff * (isMobile ? 22 : 30);
          const translateX = diff * spacing;
          const translateZ = -absDiff * (isMobile ? 90 : 160);

          // Center card scale: 1.0 on mobile (no overflow!), 1.18 on desktop
          const scale = isMobile
            ? Math.max(0.84, 1.0 - absDiff * 0.16)
            : Math.max(0.88, 1.18 - absDiff * 0.28);

          // Opacity: center=1.0, adjacent dims gracefully
          const opacity    = Math.max(0, 1 - absDiff * 0.46);

          // DOF blur: center is 0px (crystal clear), side cards get slight blur
          const blur       = absDiff > 0.4 ? Math.min(4, (absDiff - 0.4) * 2.5) : 0;

          // Brightness: center pops, sides recede
          const brightness = Math.max(0.78, 1 - absDiff * 0.22);

          const zIndex    = Math.round(50 - absDiff * 10);
          const isVisible = absDiff < 2.2;

          gsap.set(card, {
            x: translateX,
            z: translateZ,
            rotationY: rotateY,
            scale: scale,
            opacity: opacity,
            filter: `blur(${blur}px) brightness(${brightness})`,
            zIndex: zIndex,
            pointerEvents: "auto",
            transformOrigin: "50% 50%",
            visibility: isVisible ? "visible" : "hidden",
          });
        });
      };

      // Initial frame setup
      updateCylinder(0);

      // Handle window resize dynamically
      const handleResize = () => {
        updateCylinder(currentDrumProgressRef.current);
      };
      window.addEventListener("resize", handleResize);

      if (cardsContainerRef.current) {
        tl.fromTo(
          cardsContainerRef.current,
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 0.05, ease: "power2.out" },
          0.72
        );
      }

      // Initial frame setup at 0.72
      tl.call(() => {
        updateCylinder(0);
      }, undefined, 0.72);

      // Continuous 3D Cylinder rotation scrubbed across 0.78 -> 0.98
      // Giving 0.72 -> 0.78 as a rest buffer so user can inspect first card before sliding!
      if (totalCards > 1) {
        tl.to(
          drum,
          {
            progress: totalCards - 1,
            duration: 0.20,
            ease: "none",
            onUpdate: () => {
              updateCylinder(drum.progress);
            },
          },
          0.78
        );
      }
    }, stageRef);

    return () => ctx.revert();
  }, [projects]);

  // Clickable Navigation Handler (Arrow buttons)
  const scrollToCard = (targetIdx: number) => {
    if (!stageRef.current) return;
    const clampedIdx = Math.max(0, Math.min(projects.length - 1, targetIdx));
    setActiveProjectIdx(clampedIdx);
    activeProjectIdxRef.current = clampedIdx;

    const st = ScrollTrigger.getById(stageRef.current as unknown as string) || ScrollTrigger.getAll().find(s => s.trigger === stageRef.current);
    if (st) {
      const startProgress = 0.78;
      const progressRange = 0.20;
      const targetProgress =
        projects.length > 1
          ? startProgress + (clampedIdx / (projects.length - 1)) * progressRange
          : startProgress;
      
      const targetScroll = st.start + targetProgress * (st.end - st.start);
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  return (
    <section
      id="work"
      ref={stageRef}
      className="relative w-full h-screen bg-[#F8FAFC] text-slate-900 overflow-hidden select-none"
      style={{ perspective: "1500px" }}
    >
      {/* ─────────────────────────────────────────────────────────── */}
      {/* LIVING WATER BACKGROUND & PARALLAX GEOMETRY (Snow White/Blue)*/}
      {/* Retreived 100% - Active interactive backdrop for typography */}
      {/* ─────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        {/* Base radial wash */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 35%, #FFFFFF 0%, #F1F5F9 55%, #E2E8F0 100%)",
          }}
        />

        {/* LAYER 1: Deep Living Fluid Wave */}
        <svg
          className="absolute -bottom-8 -left-20 w-[140%] h-[60%] opacity-45 will-change-transform"
          viewBox="0 0 1440 400"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            ref={wave1Ref}
            d="M0,180 C280,290 480,90 760,190 C1040,290 1240,110 1440,180 L1440,400 L0,400 Z"
            fill="url(#deepSnowWave4)"
          />
          <defs>
            <linearGradient id="deepSnowWave4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#E0F2FE" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>

        {/* LAYER 2: Foreground Gentle Undulating Wave */}
        <svg
          className="absolute -bottom-2 -left-10 w-[130%] h-[48%] opacity-55 will-change-transform"
          viewBox="0 0 1440 400"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            ref={wave2Ref}
            d="M0,210 C360,110 540,280 900,160 C1200,80 1360,240 1440,200 L1440,400 L0,400 Z"
            fill="url(#foreSnowWave4)"
          />
          <defs>
            <linearGradient id="foreSnowWave4" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.6" />
              <stop offset="60%" stopColor="#BAE6FD" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#F8FAFC" stopOpacity="0.05" />
            </linearGradient>
          </defs>
        </svg>

        {/* Parallax Shape 1: Top-Right Frosted Glass Ring */}
        <div
          ref={shapeRingRef}
          className="absolute -top-16 -right-16 w-88 h-88 rounded-full border-2 border-sky-200/50 bg-gradient-to-br from-white/75 via-sky-100/30 to-transparent backdrop-blur-2xl shadow-[0_20px_50px_rgba(186,230,253,0.35)] will-change-transform"
        />

        {/* Parallax Shape 2: Bottom-Left Frosted Pill */}
        <div
          ref={shapePillRef}
          className="absolute top-1/2 -left-16 w-64 h-32 rounded-full border border-sky-100/80 bg-gradient-to-tr from-sky-200/30 via-white/60 to-transparent backdrop-blur-xl shadow-[0_15px_40px_rgba(224,242,254,0.4)] will-change-transform"
        />

        {/* Parallax Shape 3: Center Soft Luminous Snow-Blue Orb */}
        <div
          ref={shapeOrbRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-gradient-to-tr from-sky-200/30 via-cyan-100/20 to-transparent blur-[130px] will-change-transform"
        />
      </div>

      {/* 3D Camera Container */}
      <div
        ref={cameraViewportRef}
        className="relative w-full h-full flex items-center justify-center will-change-transform z-10"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* ─────────────────────────────────────────────────────────── */}
        {/* PHASE 1: KINETIC TYPOGRAPHY TRACK                           */}
        {/* ─────────────────────────────────────────────────────────── */}
        <div
          ref={textTrackRef}
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-10"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* ══════════════════════════════════════════════════════════ */}
            {/* SCREEN 1: "Beyond Code" (Kinetic Typewriter Reveal)        */}
            {/* ══════════════════════════════════════════════════════════ */}
            <div
              ref={screen1Ref}
              className="absolute inset-0 flex items-center justify-center pointer-events-none select-none whitespace-nowrap will-change-transform opacity-0"
            >
              <div
                className="font-black tracking-tighter inline-flex items-baseline gap-4 sm:gap-6"
                style={{ fontSize: "clamp(3.5rem, 8vw, 7.8rem)" }}
              >
                <span className="text-slate-950 inline-block drop-shadow-sm">
                  {"Beyond".split("").map((c, i) => (
                    <span
                      key={`b-${i}`}
                      className="type-char inline-block will-change-transform"
                    >
                      {c}
                    </span>
                  ))}
                </span>
                <span className="text-sky-600 inline-block drop-shadow-[0_4px_25px_rgba(2,132,199,0.22)]">
                  {"Code".split("").map((c, i) => (
                    <span
                      key={`c-${i}`}
                      className="type-char inline-block will-change-transform"
                    >
                      {c}
                    </span>
                  ))}
                </span>
              </div>
            </div>

            {/* ══════════════════════════════════════════════════════════ */}
            {/* SCREEN 2: "Pure Impact" (ONE BY ONE, BUTTER-SMOOTH)        */}
            {/* ══════════════════════════════════════════════════════════ */}
            <div
              ref={screen2Ref}
              className="absolute inset-0 flex items-center justify-center pointer-events-none select-none px-4 will-change-transform"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-6 pointer-events-auto max-w-[95vw]">
                <div
                  className="inline-flex items-baseline gap-3 sm:gap-4 font-black tracking-tight whitespace-nowrap"
                  style={{ fontSize: "clamp(2.2rem, 6.2vw, 7.2rem)" }}
                >
                  <span
                    ref={wordPureRef}
                    className="inline-block text-slate-900 drop-shadow-sm whitespace-nowrap will-change-transform"
                  >
                    Pure
                  </span>
                  <span
                    ref={wordImpactRef}
                    className="inline-block text-transparent bg-clip-text whitespace-nowrap will-change-transform drop-shadow-[0_4px_25px_rgba(56,189,248,0.25)]"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, #0284C7 0%, #38BDF8 50%, #06B6D4 100%)",
                      backgroundSize: "200% 200%",
                    }}
                  >
                    Impact
                  </span>
                </div>

                <div
                  ref={badgeShowcaseRef}
                  className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full bg-white/90 border border-sky-200/80 shadow-[0_4px_15px_rgba(186,230,253,0.35)] backdrop-blur-md text-xs sm:text-sm font-mono font-semibold text-sky-700 whitespace-nowrap shrink-0 will-change-transform"
                >
                  <Sparkles
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-500 animate-spin"
                    style={{ animationDuration: "8s" }}
                  />
                  <span>Portfolio Showcase</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────── */}
        {/* PHASE 2: 3D ISOMETRIC MORPHING CANVAS                      */}
        {/* Soft architectural drafting surface (#ECEEF2)               */}
        {/* ─────────────────────────────────────────────────────────── */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none [&>*]:pointer-events-auto z-25"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Ambient Caustic Water Drop Halo */}
          <div
            ref={dropletAuraRef}
            className="absolute right-[28vw] bottom-[26vh] w-28 h-28 rounded-full bg-gradient-to-tr from-sky-400/50 via-cyan-300/40 to-transparent blur-2xl pointer-events-none opacity-0"
          />

          {/* Morphing Canvas */}
          <div
            ref={morphCanvasRef}
            className="relative flex flex-col items-center justify-between overflow-hidden pointer-events-none will-change-transform select-none opacity-0"
            style={{
              transformOrigin: "bottom left",
              transformStyle: "preserve-3d",
              backgroundColor: "#ECEEF2",
              boxShadow:
                "0 40px 100px -20px rgba(15, 23, 42, 0.12), 0 20px 40px -15px rgba(0, 0, 0, 0.05)",
            }}
          >
            {/* ══════════════════════════════════════════════════════════ */}
            {/* ARCHITECTURAL DOTTED BLUEPRINT GRID (4 rows x 4 columns)   */}
            {/* ══════════════════════════════════════════════════════════ */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
              <svg
                className="w-full h-full opacity-45"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* 4 Horizontal Dotted Lines */}
                <line
                  x1="0"
                  y1="20%"
                  x2="100%"
                  y2="20%"
                  stroke="#94A3B8"
                  strokeWidth="1"
                  strokeDasharray="3 5"
                />
                <line
                  x1="0"
                  y1="40%"
                  x2="100%"
                  y2="40%"
                  stroke="#94A3B8"
                  strokeWidth="1"
                  strokeDasharray="3 5"
                />
                <line
                  x1="0"
                  y1="60%"
                  x2="100%"
                  y2="60%"
                  stroke="#94A3B8"
                  strokeWidth="1"
                  strokeDasharray="3 5"
                />
                <line
                  x1="0"
                  y1="80%"
                  x2="100%"
                  y2="80%"
                  stroke="#94A3B8"
                  strokeWidth="1"
                  strokeDasharray="3 5"
                />

                {/* 4 Vertical Dotted Lines */}
                <line
                  x1="20%"
                  y1="0"
                  x2="20%"
                  y2="100%"
                  stroke="#94A3B8"
                  strokeWidth="1"
                  strokeDasharray="3 5"
                />
                <line
                  x1="40%"
                  y1="0"
                  x2="40%"
                  y2="100%"
                  stroke="#94A3B8"
                  strokeWidth="1"
                  strokeDasharray="3 5"
                />
                <line
                  x1="60%"
                  y1="0"
                  x2="60%"
                  y2="100%"
                  stroke="#94A3B8"
                  strokeWidth="1"
                  strokeDasharray="3 5"
                />
                <line
                  x1="80%"
                  y1="0"
                  x2="80%"
                  y2="100%"
                  stroke="#94A3B8"
                  strokeWidth="1"
                  strokeDasharray="3 5"
                />
              </svg>

              {/* Dotted Crosshair Markers (+) at Grid Intersections */}
              {[20, 40, 60, 80].map((y) =>
                [20, 40, 60, 80].map((x) => (
                  <span
                    key={`${x}-${y}`}
                    className="absolute text-slate-500 font-mono text-[10px] select-none -translate-x-1/2 -translate-y-1/2 opacity-60 font-semibold"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    +
                  </span>
                ))
              )}
            </div>

            {/* Studio Top Bar with Card Index & Interactive Prev / Next Arrows */}
            <div className="relative z-30 w-full flex items-center justify-between px-6 sm:px-12 pt-6 sm:pt-7 pointer-events-auto">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-semibold tracking-wider text-slate-700 uppercase">
                  Verified Works ({projects.length})
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-200/80 text-slate-600 font-semibold hidden sm:inline">
                  3D Perspective Cylinder
                </span>
              </div>

              {/* Prev / Next Clickable Navigation */}
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-medium text-slate-500 hidden md:inline">
                  Scroll or Click:
                </span>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => scrollToCard(activeProjectIdx - 1)}
                    disabled={activeProjectIdx === 0}
                    className="w-7 h-7 rounded-full bg-white/90 hover:bg-white disabled:opacity-40 text-slate-700 hover:text-slate-950 flex items-center justify-center shadow-2xs border border-slate-200/80 transition-all hover:scale-105 active:scale-95 cursor-pointer disabled:cursor-not-allowed"
                    aria-label="Previous Project"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-[11px] font-mono font-bold text-slate-700 px-1">
                    0{activeProjectIdx + 1} / 0{projects.length}
                  </span>
                  <button
                    onClick={() => scrollToCard(activeProjectIdx + 1)}
                    disabled={activeProjectIdx === projects.length - 1}
                    className="w-7 h-7 rounded-full bg-white/90 hover:bg-white disabled:opacity-40 text-slate-700 hover:text-slate-950 flex items-center justify-center shadow-2xs border border-slate-200/80 transition-all hover:scale-105 active:scale-95 cursor-pointer disabled:cursor-not-allowed"
                    aria-label="Next Project"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* ══════════════════════════════════════════════════════════ */}
            {/* SCENE 3: 3D CYLINDER ROTARY DRUM SHOWCASE (PATIENTCARE STYLE) */}
            {/* Center card elevated & larger with 0deg focus               */}
            {/* Side cards curve into 3D cylinder depth with blur & tilt    */}
            {/* ══════════════════════════════════════════════════════════ */}
            <div
              ref={cardsContainerRef}
              className="relative z-20 flex-1 w-full h-[470px] sm:h-[510px] md:h-[560px] flex items-center justify-center overflow-visible py-2 opacity-0 select-none pointer-events-auto"
              style={{
                perspective: "1400px",
                transformStyle: "preserve-3d",
              }}
            >
              {projects.map((project, idx) => {
                const isCurrentActive = activeProjectIdx === idx;
                return (
                  <div
                    key={project.id || idx}
                    ref={(el) => {
                      cardWrappersRef.current[idx] = el;
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform pointer-events-auto ubuntu-regular w-[285px] sm:w-[325px] md:w-[350px] h-[430px] sm:h-[455px] md:h-[475px]"
                    style={{
                      transformStyle: "preserve-3d",
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                  >
                    {/* THE PHYSICAL 3D CARD */}
                    <div
                      className={`relative z-10 w-full h-full flex flex-col justify-between select-none transition-all duration-300 rounded-[24px] ${
                        isCurrentActive
                          ? "bg-white shadow-[0_25px_60px_-15px_rgba(15,23,42,0.12)] border border-slate-200/90"
                          : "bg-white/95 border border-slate-200/70 shadow-md shadow-slate-200/40"
                      }`}
                      style={{
                        transformStyle: "flat",
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        WebkitFontSmoothing: "antialiased",
                        MozOsxFontSmoothing: "grayscale",
                      }}
                    >

                      {/* ───────────────────────────────────────────── */}
                      {/* UPPER PORTION: SCREENSHOT IMAGE WITH WHITESPACE*/}
                      {/* ───────────────────────────────────────────── */}
                      <div className="p-3.5 pb-2">
                        <div
                          className="relative w-full h-[180px] rounded-[12px] overflow-hidden border border-slate-200/90 bg-slate-100 shadow-sm group"
                        >
                          {project.screenshot_url ? (
                            <img
                              src={project.screenshot_url}
                              alt={project.title}
                              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                              loading="eager"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-400 font-mono text-xs">
                              No Preview
                            </div>
                          )}

                          {/* Category Pill Tag */}
                          <div
                            className="absolute top-2.5 left-2.5 px-3 py-1 rounded-full text-[11px] ubuntu-medium-italic bg-white/95 backdrop-blur-md text-sky-800 shadow-xs border border-sky-100"
                          >
                            {project.category || "Full-Stack"}
                          </div>
                        </div>
                      </div>

                      {/* ───────────────────────────────────────────── */}
                      {/* LOWER PORTION: TITLE, BULLETS & LIVE BUTTON   */}
                      {/* ───────────────────────────────────────────── */}
                      <div className="px-5 pb-5 pt-1.5 flex flex-col justify-between flex-1">
                        {/* Title & Tagline */}
                        <div className="mb-2.5">
                          <h4
                            className="text-[19px] sm:text-[20px] ubuntu-bold text-slate-900 tracking-tight leading-tight line-clamp-1 hover:text-sky-600 transition-colors"
                          >
                            {project.title}
                          </h4>
                          <p
                            className="text-[13px] text-sky-600 ubuntu-medium-italic mt-1 line-clamp-1"
                          >
                            {project.tagline || project.category}
                          </p>
                        </div>

                        {/* 2-3 Short Bullet Points */}
                        <ul className="space-y-2 mb-3.5">
                          {getProjectBullets(project).map((bullet, bIdx) => {
                            return (
                              <li
                                key={bIdx}
                                className="flex items-start gap-2 text-[12.5px] sm:text-[13px] text-slate-700 leading-snug ubuntu-regular"
                              >
                                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 mt-1 shrink-0 shadow-xs" />
                                <span className="line-clamp-1">
                                  {bullet}
                                </span>
                              </li>
                            );
                          })}
                        </ul>

                        {/* Clickable Website Action Button (Guaranteed Click on All Devices) */}
                        <a
                          href={project.live_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (project.live_url) {
                              window.open(project.live_url, "_blank", "noopener,noreferrer");
                            }
                          }}
                          className="mt-auto w-full inline-flex items-center justify-center gap-2 py-2 sm:py-2.5 px-4 rounded-[12px] bg-slate-900 hover:bg-sky-600 text-white ubuntu-bold text-xs sm:text-[13px] transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.01] active:scale-[0.99] group/btn cursor-pointer pointer-events-auto relative z-30"
                        >
                          <span className="tracking-wide">Visit Website</span>
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 text-sky-400 group-hover:text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Progress Rail Dots */}
            <div className="relative z-30 w-full flex items-center justify-center gap-2 pb-5 pointer-events-auto">
              {projects.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => scrollToCard(dotIdx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeProjectIdx === dotIdx
                      ? "w-6 bg-slate-900"
                      : "w-1.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Jump to project ${dotIdx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
