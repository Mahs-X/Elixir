"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LINES = [
  { text: "Featured Products", weight: 800, color: "#ffffff" },
  { text: "and Live Systems", weight: 400, color: "#94a3b8" },
];

export default function EditorialMaskTrackingPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ── initial states ── */
      textRefs.current.forEach((el) => {
        if (el) {
          gsap.set(el, { yPercent: 110, letterSpacing: "0.3em" });
        }
      });
      gsap.set(containerRef.current, { scale: 1.05 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2800",
          pin: true,
          scrub: 1.2,
        },
      });

      /* ── mask reveal each line with stagger ── */
      textRefs.current.forEach((el, i) => {
        if (!el) return;

        tl.to(
          el,
          {
            yPercent: 0,
            letterSpacing: "0em",
            duration: 0.5,
            ease: "power4.out",
          },
          i * 0.15
        );
      });

      /* ── camera dolly-out ── */
      tl.to(
        containerRef.current,
        {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        },
        0.35
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
        style={{ background: "#070A10" }}
      >
        {/* ── ambient mesh blobs ── */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute rounded-full"
            style={{
              width: "45vw",
              height: "45vw",
              top: "15%",
              left: "10%",
              background:
                "radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 70%)",
              filter: "blur(90px)",
              animation: "drift-a 12s ease-in-out infinite alternate",
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: "35vw",
              height: "35vw",
              bottom: "10%",
              right: "15%",
              background:
                "radial-gradient(circle, rgba(6,182,212,0.10) 0%, transparent 70%)",
              filter: "blur(80px)",
              animation: "drift-b 14s ease-in-out infinite alternate",
            }}
          />
        </div>

        {/* ── text container ── */}
        <div
          ref={containerRef}
          className="relative z-10 flex flex-col items-center gap-2"
          style={{ willChange: "transform" }}
        >
          {LINES.map((line, i) => (
            <div
              key={i}
              ref={(el) => {
                lineRefs.current[i] = el;
              }}
              className="overflow-hidden"
            >
              <div
                ref={(el) => {
                  textRefs.current[i] = el;
                }}
                className="text-center"
                style={{
                  fontSize: "clamp(3rem, 7vw, 8rem)",
                  fontWeight: line.weight,
                  color: line.color,
                  fontFamily:
                    'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
                  lineHeight: 1.1,
                  willChange: "transform, letter-spacing",
                }}
              >
                {line.text}
              </div>
            </div>
          ))}
        </div>

        {/* ── CSS keyframe animations for ambient blobs ── */}
        <style jsx>{`
          @keyframes drift-a {
            0% {
              transform: translate(0, 0);
            }
            100% {
              transform: translate(60px, -40px);
            }
          }
          @keyframes drift-b {
            0% {
              transform: translate(0, 0);
            }
            100% {
              transform: translate(-50px, 30px);
            }
          }
        `}</style>
      </section>

      <div className="h-[40vh]" />
    </>
  );
}
