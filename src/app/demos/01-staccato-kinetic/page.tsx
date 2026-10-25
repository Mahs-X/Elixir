"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WORDS = ["Featured", "Products", "and", "Live", "Systems"];

export default function StaccatoKineticPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const blobsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=3000",
          pin: true,
          scrub: 1.5,
        },
      });

      /* ── animate blobs drifting gently throughout ── */
      const blobs = blobsRef.current?.querySelectorAll(".blob");
      if (blobs) {
        blobs.forEach((blob, i) => {
          gsap.to(blob, {
            x: () => (i % 2 === 0 ? 80 : -80),
            y: () => (i % 2 === 0 ? -60 : 60),
            duration: 8 + i * 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });
      }

      /* ── make all words invisible initially ── */
      wordRefs.current.forEach((w) => {
        if (w) gsap.set(w, { opacity: 0, scale: 1.3, y: 30, display: "none" });
      });

      const segmentDuration = 1 / WORDS.length;

      WORDS.forEach((_, i) => {
        const word = wordRefs.current[i];
        if (!word) return;

        const pos = i * segmentDuration;

        /* pop-in */
        tl.set(word, { display: "block" }, pos);
        tl.to(
          word,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: segmentDuration * 0.45,
            ease: "cubic-bezier(0.16, 1, 0.3, 1)",
          },
          pos
        );

        /* hold briefly then fade out (except last word) */
        if (i < WORDS.length - 1) {
          tl.to(
            word,
            {
              opacity: 0,
              scale: 0.85,
              y: -20,
              duration: segmentDuration * 0.35,
              ease: "power2.in",
            },
            pos + segmentDuration * 0.6
          );
          tl.set(word, { display: "none" }, pos + segmentDuration);
        }
      });
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

      {/* ── spacer so the pin starts after a scroll ── */}
      <div className="h-[20vh]" />

      {/* ── pinned section ── */}
      <section
        ref={sectionRef}
        className="relative h-screen w-full overflow-hidden flex items-center justify-center"
        style={{ background: "#070A10" }}
      >
        {/* ── ambient blobs ── */}
        <div ref={blobsRef} className="pointer-events-none absolute inset-0">
          <div
            className="blob absolute rounded-full"
            style={{
              width: "50vw",
              height: "50vw",
              top: "10%",
              left: "15%",
              background:
                "radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
          <div
            className="blob absolute rounded-full"
            style={{
              width: "40vw",
              height: "40vw",
              bottom: "5%",
              right: "10%",
              background:
                "radial-gradient(circle, rgba(14,165,233,0.10) 0%, transparent 70%)",
              filter: "blur(100px)",
            }}
          />
          <div
            className="blob absolute rounded-full"
            style={{
              width: "30vw",
              height: "30vw",
              top: "40%",
              right: "30%",
              background:
                "radial-gradient(circle, rgba(125,211,252,0.08) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
        </div>

        {/* ── words ── */}
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          {WORDS.map((word, i) => (
            <span
              key={word + i}
              ref={(el) => {
                wordRefs.current[i] = el;
              }}
              className="absolute"
              style={{
                fontSize: "clamp(4rem, 10vw, 10rem)",
                fontWeight: 800,
                fontFamily:
                  'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
                color: "#ffffff",
                textShadow:
                  "0 0 40px rgba(56,189,248,0.35), 0 0 80px rgba(56,189,248,0.15), 0 0 120px rgba(56,189,248,0.05)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
                userSelect: "none",
                willChange: "transform, opacity",
                display: "none",
              }}
            >
              {word}
            </span>
          ))}
        </div>
      </section>

      {/* ── spacer after ── */}
      <div className="h-[40vh]" />
    </>
  );
}
