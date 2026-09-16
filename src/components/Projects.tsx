"use client";

import React, { useState, useEffect, useRef } from "react";
import { Sparkles, ExternalLink, Zap, Radio } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export interface Project {
  id: string;
  title: string;
  tagline?: string;
  description: string;
  live_url: string;
  github_url: string;
  tags: string[];
  category: string;
  is_featured?: boolean;
  metrics?: string;
  screenshot_url?: string;
  order_index?: number;
}

const FALLBACK_PROJECTS: Project[] = [
  {
    id: "56b17519-299f-441d-92ae-0dcf79a2bb75",
    title: "Pathfinder Peko",
    tagline: "Gamified SSC EdTech & Realtime 1v1 Battle Platform",
    description:
      "A full-stack gamified e-learning web platform with real-time multiplayer 1v1 quiz battles, offline-first PWA caching, and Duolingo 3D aesthetics. Built to handle 10,000+ active learners with sub-50ms Supabase Realtime broadcast sync.",
    live_url: "https://pathfinderpeko.com",
    github_url: "https://github.com/Mahs-X/peko-pathfinder-platform",
    tags: ["Next.js 16", "React", "Tailwind CSS", "Supabase", "Firebase", "PWA"],
    category: "Full-Stack Web",
    is_featured: true,
    metrics: "10k+ Learners Capacity • <50ms Realtime Sync",
    order_index: 1,
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
    screenshot_url: "https://res.cloudinary.com/dpv4ufsra/image/upload/v1789060375/luxury_ue2cps.png",
    category: "Website",
    is_featured: true,
    metrics: "Responsive • Modern Look (clean and calm)",
    order_index: 2,
  },
  {
    id: "cc345729-e045-4349-bf7b-d98e35435694",
    title: "Peko E-Reader & Interactive Store",
    tagline: "Digital Book Reader & Audio-Visual Learning Hub",
    description:
      "Interactive chapter reader with note-taking, rich LaTeX formula rendering, instant keyword search, dynamic pricing packages, and real-time wallet recharge integration.",
    live_url: "https://pathfinderpeko.com/books",
    github_url: "https://github.com/Mahs-X",
    tags: ["Next.js", "PostgreSQL", "Tailwind CSS", "KaTeX", "Zustand"],
    category: "SaaS & E-Commerce",
    is_featured: false,
    metrics: "99.9% Uptime • Sub-second Page Loads",
    order_index: 3,
  },
];

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>(FALLBACK_PROJECTS);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [isLiveConnected, setIsLiveConnected] = useState<boolean>(false);

  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // 1. Fetch data from Supabase + Realtime subscription
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase
          .from("portfolio_projects")
          .select("*")
          .order("order_index", { ascending: true });

        if (!error && Array.isArray(data) && data.length > 0) {
          setProjects(data);
          setIsLiveConnected(true);
        }
      } catch (err) {
        console.warn("[Projects] Supabase fetch error, using fallback:", err);
      }
    };

    fetchProjects();

    const channel = supabase
      .channel("portfolio_projects_realtime_changes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "portfolio_projects" },
        (payload) => {
          console.log("[Projects] Realtime Supabase change received:", payload);
          fetchProjects();
        }
      )
      .subscribe((status) => {
        if (status === "SUBSCRIBED") {
          setIsLiveConnected(true);
        }
      });

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === "all") return true;
    const cat = (p.category || "").toLowerCase();
    if (activeCategory === "web")
      return cat.includes("web") || cat.includes("site") || cat.includes("saas");
    if (activeCategory === "app")
      return cat.includes("app") || cat.includes("mobile");
    return true;
  });

  // 2. Cinematic GSAP ScrollTrigger Parallax Animation (1-by-1 Entry from Bottom)
  useEffect(() => {
    let ctx: any;

    async function initParallax() {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // Animate section header
        gsap.fromTo(
          ".projects-header",
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Animate each card 1 by 1 from the bottom with distinct parallax depth
        const isMobile = window.innerWidth < 768;
        cardsRef.current.forEach((card, index) => {
          if (!card) return;

          // Staggered initial vertical offset (gentler on mobile for silky touch scrolling)
          const yStart = (isMobile ? 70 : 140) + (index % 3) * (isMobile ? 25 : 50);

          // Card rise & perspective parallax
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: yStart,
              rotateX: isMobile ? -5 : -10,
              scale: isMobile ? 0.96 : 0.92,
            },
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              scale: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: isMobile ? "top 98%" : "top 95%",
                end: isMobile ? "top 65%" : "top 55%",
                scrub: isMobile ? 0.4 : 0.7, // Silky smooth scrub synced with Lenis
              },
            }
          );

          // Inner image floating parallax (creates physical depth behind the card bezel)
          const imgWrapper = card.querySelector(".parallax-img-wrapper");
          if (imgWrapper) {
            gsap.fromTo(
              imgWrapper,
              { yPercent: isMobile ? -6 : -12 },
              {
                yPercent: isMobile ? 6 : 12,
                ease: "none",
                scrollTrigger: {
                  trigger: card,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
                },
              }
            );
          }
        });
      }, sectionRef);
    }

    initParallax();

    return () => {
      if (ctx) ctx.revert();
    };
  }, [filteredProjects]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-full bg-[#F5F5F7] text-slate-900 selection:bg-emerald-500/20 selection:text-emerald-900 border-t border-slate-200/80 py-20 sm:py-32 overflow-hidden"
    >
      {/* Subtle Ambient Apple-Style Radial Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, rgba(255,255,255,0.95) 0%, rgba(245,245,247,1) 85%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 space-y-12 sm:space-y-16">
        
        {/* Header & Filter */}
        <div className="projects-header flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-slate-200/80">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-emerald-700">
                Production Showcase
              </span>
              {isLiveConnected && (
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-100/80 border border-emerald-300/80 text-[10px] text-emerald-800 font-semibold ml-2">
                  <Radio className="w-3 h-3 animate-pulse text-emerald-600" />
                  Live Sync
                </span>
              )}
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-[-0.03em] leading-[1.08]">
              Featured Products & <br className="hidden sm:block" />
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-sky-600">
                Live Systems.
              </span>
            </h2>

            <p className="text-xs sm:text-base font-serif italic text-slate-600 leading-relaxed max-w-xl border-l-2 border-emerald-300 pl-3 sm:pl-4 mt-2">
              &ldquo;High-converting web and mobile applications handling live users, complex realtime data, and sub-second rendering.&rdquo;
            </p>
          </div>

          {/* Apple-Style Filter Pills (Scrollable on small mobile screens) */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-200/70 border border-slate-300/60 backdrop-blur-md self-start lg:self-end shadow-inner max-w-full overflow-x-auto scrollbar-none">
            {[
              { id: "all", label: "All Projects" },
              { id: "web", label: "Websites & SaaS" },
              { id: "app", label: "Mobile Apps" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 whitespace-nowrap ${
                  activeCategory === cat.id
                    ? "bg-white text-slate-950 shadow-md border border-slate-200/90"
                    : "text-slate-600 hover:text-slate-950 hover:bg-white/50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Parallax Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 perspective-[1200px]">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              ref={(el) => {
                cardsRef.current[idx] = el;
              }}
              className="project-card flex flex-col justify-between rounded-3xl bg-white border border-slate-200/90 hover:border-emerald-300/80 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 overflow-hidden group transform-gpu"
            >
              {/* Card Image Banner with Parallax Viewport */}
              <div className="relative aspect-[16/10] w-full bg-slate-100 border-b border-slate-200/80 overflow-hidden">
                <div className="parallax-img-wrapper absolute inset-[-15%] w-[130%] h-[130%] will-change-transform">
                  {project.screenshot_url ? (
                    <img
                      src={project.screenshot_url}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-emerald-100 via-teal-50 to-sky-100 flex items-center justify-center p-8">
                      <div className="text-center space-y-1">
                        <span className="text-xl sm:text-3xl font-black text-slate-400/80 tracking-tight block">
                          {project.title}
                        </span>
                        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-emerald-600/70">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Floating Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                  <span className="px-2.5 sm:px-3 py-1 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/80 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-emerald-700 shadow-sm">
                    {project.category}
                  </span>
                  {project.is_featured && (
                    <span className="px-2.5 sm:px-3 py-1 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-[9px] sm:text-[10px] uppercase tracking-wider shadow-sm">
                      Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between space-y-4 sm:space-y-5 bg-white">
                <div className="space-y-2.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight group-hover:text-emerald-600 transition-colors">
                    {project.title}
                  </h3>
                  {project.tagline && (
                    <p className="text-xs font-bold font-serif italic text-emerald-600 line-clamp-1">
                      {project.tagline}
                    </p>
                  )}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  {/* Metrics */}
                  {project.metrics && (
                    <div className="py-2.5 px-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] font-semibold text-slate-700 flex items-center gap-2 shadow-xs">
                      <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span className="truncate">{project.metrics}</span>
                    </div>
                  )}

                  {/* Tech Tags */}
                  {Array.isArray(project.tags) && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-slate-100/80 border border-slate-200/60 text-[10px] font-medium text-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Action Links */}
                  <div className="pt-4 flex items-center gap-3 border-t border-slate-200/80">
                    {project.live_url && (
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-3d flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-slate-950 text-white hover:bg-emerald-600 transition-all cursor-pointer shadow-md hover:shadow-lg"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-3d inline-flex items-center justify-center p-3 rounded-xl bg-slate-100 border border-slate-200/80 text-slate-700 hover:text-slate-950 hover:bg-slate-200 transition-all cursor-pointer shadow-xs"
                        title="View Source Code"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Smooth Editorial Gradient Transition into following section */}
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-b from-transparent to-[#0B0F19] pointer-events-none" />
    </section>
  );
}
