"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SUBTITLE = "CREATIVE COPILOT";

export default function BrandResolveGlowPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<SVGSVGElement>(null);
  const brandRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ── initial states ── */
      gsap.set(iconRef.current, {
        scale: 0,
        opacity: 0,
        rotation: -180,
      });
      gsap.set(brandRef.current, {
        opacity: 0,
        filter: "blur(20px)",
      });

      const charEls = subtitleRef.current?.querySelectorAll(".char");
      if (charEls) {
        gsap.set(charEls, { y: 30, opacity: 0 });
      }

      /* ── pulsing glow — runs independently ── */
      gsap.set(glowRef.current, { scale: 0.8, opacity: 0.4 });
      gsap.to(glowRef.current, {
        scale: 1.2,
        opacity: 0.7,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* ── scroll-scrubbed timeline ── */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=3000",
          pin: true,
          scrub: 1.5,
        },
      });

      /* Phase 1: icon resolves with elastic spring */
      tl.to(
        iconRef.current,
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.4,
          ease: "elastic.out(1, 0.5)",
        },
        0
      );

      /* Phase 2: brand name deblurs */
      tl.to(
        brandRef.current,
        {
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.3,
          ease: "power3.out",
        },
        0.3
      );

      /* Phase 3: subtitle chars stagger in */
      if (charEls) {
        tl.to(
          charEls,
          {
            y: 0,
            opacity: 1,
            duration: 0.25,
            stagger: 0.03,
            ease: "power3.out",
          },
          0.5
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ── back link ── */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/demos"
          className="flex items-center gap-2 text-sm text-slate-400 hover:text-sky-400 transition-colors backdrop-blur-md bg-white/5 px-4 py-2 rounded-full border border-white/10"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          All Demos
        </Link>
      </div>

      <div className="h-[20vh]" />

      {/* ── pinned section ── */}
      <section
        ref={sectionRef}
        className="relative h-screen w-full overflow-hidden flex items-center justify-center"
        style={{
          background:
            "radial-gradient(ellipse at center, #0c1220 0%, #070A10 70%)",
        }}
      >
        {/* ── pulsing neon glow ── */}
        <div
          ref={glowRef}
          className="absolute pointer-events-none"
          style={{
            width: "min(80vw, 700px)",
            height: "min(80vw, 700px)",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(56,189,248,0.16) 0%, rgba(56,189,248,0.05) 45%, transparent 70%)",
            filter: "blur(80px)",
            willChange: "transform, opacity",
          }}
        />

        {/* ── brand container ── */}
        <div className="relative z-10 flex flex-col items-center gap-6">
          {/* ── icon + brand name row ── */}
          <div className="flex items-center gap-5">
            {/* ── SVG icon: rounded square with inner circle ── */}
            <svg
              ref={iconRef}
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ willChange: "transform, opacity" }}
            >
              <rect
                x="4"
                y="4"
                width="64"
                height="64"
                rx="16"
                stroke="#38bdf8"
                strokeWidth="3"
                fill="rgba(56,189,248,0.08)"
              />
              <circle
                cx="36"
                cy="36"
                r="16"
                stroke="#38bdf8"
                strokeWidth="2.5"
                fill="rgba(56,189,248,0.12)"
              />
              <circle cx="36" cy="36" r="6" fill="#38bdf8" />
            </svg>

            {/* ── brand name ── */}
            <span
              ref={brandRef}
              className="font-bold text-white"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                fontFamily:
                  'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
                letterSpacing: "-0.02em",
                lineHeight: 1,
                willChange: "filter, opacity",
              }}
            >
              Lucihub
            </span>
          </div>

          {/* ── subtitle: split into chars ── */}
          <div
            ref={subtitleRef}
            className="flex items-center justify-center gap-[0.15em]"
            style={{
              fontSize: "clamp(0.7rem, 1.5vw, 0.9rem)",
              fontWeight: 500,
              color: "#94a3b8",
              letterSpacing: "0.25em",
              fontFamily:
                'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
            }}
          >
            {SUBTITLE.split("").map((char, i) => (
              <span
                key={i}
                className="char inline-block"
                style={{
                  willChange: "transform, opacity",
                  minWidth: char === " " ? "0.4em" : undefined,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="h-[40vh]" />
    </>
  );
}
