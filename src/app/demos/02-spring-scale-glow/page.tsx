"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SpringScaleGlowPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ── initial states ── */
      gsap.set(pillRef.current, { scale: 0.6, opacity: 0.3 });
      gsap.set(glowRef.current, { scale: 0, opacity: 0 });
      gsap.set(containerRef.current, { scale: 1.05 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2500",
          pin: true,
          scrub: 1.2,
        },
      });

      /* ── Phase 1: pill spring-scales in ── */
      tl.to(
        pillRef.current,
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          ease: "elastic.out(1, 0.4)",
        },
        0
      );

      /* ── Phase 2: radial spotlight glow expands ── */
      tl.to(
        glowRef.current,
        {
          scale: 1,
          opacity: 1,
          duration: 0.35,
          ease: "power3.out",
        },
        0.25
      );

      /* ── Phase 3: camera zoom-out ── */
      tl.to(
        containerRef.current,
        {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        },
        0.5
      );
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
        <div
          ref={containerRef}
          className="relative flex items-center justify-center"
          style={{ willChange: "transform" }}
        >
          {/* ── radial spotlight glow ── */}
          <div
            ref={glowRef}
            className="absolute pointer-events-none"
            style={{
              width: "min(70vw, 600px)",
              height: "min(70vw, 600px)",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(56,189,248,0.18) 0%, rgba(56,189,248,0.06) 40%, transparent 70%)",
              filter: "blur(60px)",
              willChange: "transform, opacity",
            }}
          />

          {/* ── glassmorphic pill button ── */}
          <div
            ref={pillRef}
            className="relative z-10 flex items-center gap-3 px-8 py-4 rounded-full border border-white/10"
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.05), 0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)",
              willChange: "transform, opacity",
            }}
          >
            {/* ── pulsing red dot ── */}
            <span className="relative flex items-center justify-center w-3 h-3">
              <span
                className="absolute w-full h-full rounded-full bg-red-500"
                style={{
                  animation: "pulse-dot 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                }}
              />
              <span className="relative w-2 h-2 rounded-full bg-red-400" />
            </span>

            {/* ── "Record" text ── */}
            <span
              className="text-white font-semibold tracking-wide"
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                fontFamily:
                  'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
              }}
            >
              Record
            </span>
          </div>
        </div>

        {/* ── CSS pulse animation ── */}
        <style jsx>{`
          @keyframes pulse-dot {
            0%,
            100% {
              opacity: 1;
              transform: scale(1);
            }
            50% {
              opacity: 0.5;
              transform: scale(1.8);
            }
          }
        `}</style>
      </section>

      <div className="h-[40vh]" />
    </>
  );
}
