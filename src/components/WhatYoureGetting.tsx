"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Home,
  Plane,
  ChevronLeft,
  MoreVertical,
  Bell,
  Lock,
  Clock,
  ShoppingCart,
  Plus,
  Sparkles,
  Mic,
  Camera,
  ExternalLink,
  Check,
} from "lucide-react";

// Title Case Letters
const UNFAIR_LETTERS = ["U", "n", "f", "a", "i", "r"];
const ADVANTAGE_LETTERS = ["A", "d", "v", "a", "n", "t", "a", "g", "e"];
const WEBSITE_LETTERS = ["W", "e", "b", "s", "i", "t", "e"];

// Delicate Sparkling & Moving Stars with Twinkle and Drift
const BACKGROUND_STARS = [
  { top: "12%", left: "12%", size: 14, opacity: 0.55, delay: 0, anim: "starTwinkle", dur: "3.2s" },
  { top: "18%", left: "84%", size: 16, opacity: 0.45, delay: 1.1, anim: "starDriftSpin", dur: "8s" },
  { top: "25%", left: "48%", size: 12, opacity: 0.52, delay: 0.5, anim: "starTwinkle", dur: "2.8s" },
  { top: "32%", left: "8%", size: 15, opacity: 0.42, delay: 1.8, anim: "starPulseFloat", dur: "4.2s" },
  { top: "38%", left: "92%", size: 17, opacity: 0.50, delay: 2.2, anim: "starTwinkle", dur: "3.5s" },
  { top: "64%", left: "15%", size: 13, opacity: 0.52, delay: 0.8, anim: "starDriftSpin", dur: "9s" },
  { top: "72%", left: "82%", size: 18, opacity: 0.45, delay: 1.6, anim: "starTwinkle", dur: "3.0s" },
  { top: "82%", left: "28%", size: 14, opacity: 0.50, delay: 1.4, anim: "starPulseFloat", dur: "4.8s" },
  { top: "86%", left: "88%", size: 16, opacity: 0.46, delay: 0.3, anim: "starTwinkle", dur: "2.6s" },
  { top: "15%", left: "62%", size: 12, opacity: 0.48, delay: 1.9, anim: "starDriftSpin", dur: "7.5s" },
  { top: "56%", left: "6%", size: 14, opacity: 0.40, delay: 2.5, anim: "starPulseFloat", dur: "5.0s" },
  { top: "78%", left: "52%", size: 15, opacity: 0.55, delay: 1.2, anim: "starTwinkle", dur: "3.4s" },
  { top: "22%", left: "30%", size: 13, opacity: 0.42, delay: 0.9, anim: "starTwinkle", dur: "3.8s" },
  { top: "68%", left: "40%", size: 11, opacity: 0.46, delay: 2.0, anim: "starDriftSpin", dur: "8.2s" },
  { top: "45%", left: "86%", size: 13, opacity: 0.44, delay: 0.7, anim: "starPulseFloat", dur: "4.4s" },
];

export default function WhatYoureGetting() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Typography Rig Refs
  const phraseContainerRef = useRef<HTMLDivElement>(null);
  const wordYourRef = useRef<HTMLSpanElement>(null);
  const wordUnfairRef = useRef<HTMLSpanElement>(null);
  const wordAdvantageRef = useRef<HTMLSpanElement>(null);
  const unfairLetterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const advantageLetterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const subtextRef = useRef<HTMLDivElement>(null);

  // 3D Globe & Interactive Website Rig Refs
  const globeStageRef = useRef<HTMLDivElement>(null);
  const globeWrapperRef = useRef<HTMLDivElement>(null);
  const interactiveTextContainerRef = useRef<HTMLDivElement>(null);
  const wordInteractiveRef = useRef<HTMLSpanElement>(null);
  const websiteContainerRef = useRef<HTMLSpanElement>(null);
  const websiteLetterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  // Scene 2: Attention Badge & Static Sites Sunset Arc Refs
  const attentionBadgeRef = useRef<HTMLDivElement>(null);
  const staticSitesStageRef = useRef<HTMLDivElement>(null);
  const staticSitesHeadlineRef = useRef<HTMLDivElement>(null);
  const redCirclePathRef = useRef<SVGPathElement>(null);
  const cardsArcWrapperRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scene 3: E-Commerce & Tech Blast Refs (Cart, Cloth, Mobile)
  const blastStageRef = useRef<HTMLDivElement>(null);
  const blastCartRef = useRef<HTMLDivElement>(null);
  const blastClothRef = useRef<HTMLDivElement>(null);
  const blastMobileRef = useRef<HTMLDivElement>(null);

  // Scene 4: "Interactive Storytelling" Kinetic Typography & Green Pencil Underline Refs
  const storyStageRef = useRef<HTMLDivElement>(null);
  const storyInteractiveRef = useRef<HTMLSpanElement>(null);
  const storyStorytellingRef = useRef<HTMLSpanElement>(null);
  const storyUnderlinePathRef = useRef<SVGPathElement>(null);

  // Scene 5: Black Dot & Realistic Stylized Eye Rig Refs
  const eyeStageRef = useRef<HTMLDivElement>(null);
  const eyeCenterWrapperRef = useRef<HTMLDivElement>(null);
  const eyeDotRef = useRef<HTMLDivElement>(null);
  const eyeSvgRef = useRef<SVGSVGElement>(null);
  const eyeEyelidsGroupRef = useRef<SVGGElement>(null);
  const eyePupilGroupRef = useRef<SVGGElement>(null);

  // Scene 6: "Hooks your" Top Header & "Visitor instantly" Hero Stage Refs
  const heroStageRef = useRef<HTMLDivElement>(null);
  const heroHooksYourRef = useRef<HTMLDivElement>(null);
  const heroVisitorTitleRef = useRef<HTMLHeadingElement>(null);
  const chalkHighlighterRef = useRef<SVGSVGElement>(null);
  const heroPhoneLeftRef = useRef<HTMLDivElement>(null);
  const heroPhoneRightRef = useRef<HTMLDivElement>(null);

  // Scene 7: "Guiding them smoothly to Checkout" Right Kinetic Typography Stage Refs
  const checkoutStageRef = useRef<HTMLDivElement>(null);
  const checkoutLine1Ref = useRef<HTMLDivElement>(null);
  const checkoutLine2Ref = useRef<HTMLDivElement>(null);
  const checkoutLine3Ref = useRef<HTMLDivElement>(null);
  const checkoutHighlighterRef = useRef<SVGSVGElement>(null);

  // Scene 8: "Responsive For All Device" Stage Refs (Pure-Code 3D Device Morphing + Fast 3D Cylinder + Typing Climax)
  const responsiveStageRef = useRef<HTMLDivElement>(null);
  const responsiveBgTintRef = useRef<HTMLDivElement>(null);
  const deviceStageWrapperRef = useRef<HTMLDivElement>(null);
  const screenFrameRef = useRef<HTMLDivElement>(null);
  const monitorStandRef = useRef<HTMLDivElement>(null);
  const laptopBaseRef = useRef<HTMLDivElement>(null);
  const deskKeyboardRef = useRef<HTMLDivElement>(null);
  const deskPencilRef = useRef<HTMLDivElement>(null);
  const desktopScreenUIRef = useRef<HTMLDivElement>(null);
  const phoneScreenUIRef = useRef<HTMLDivElement>(null);
  const responsiveFloatingRef = useRef<HTMLDivElement>(null);

  // Right Side Text Refs
  const responsiveTextSideRef = useRef<HTMLDivElement>(null);
  const responsiveTitleRef = useRef<HTMLHeadingElement>(null);
  const responsiveSubheadlineRef = useRef<HTMLParagraphElement>(null);
  const deviceWordDesktopRef = useRef<HTMLSpanElement>(null);
  const deviceWordLaptopRef = useRef<HTMLSpanElement>(null);
  const deviceWordPhoneRef = useRef<HTMLSpanElement>(null);
  const cylinderContainerRef = useRef<HTMLDivElement>(null);
  const cylinderZeroLostRef = useRef<HTMLDivElement>(null);
  const cylinderMobileSalesRef = useRef<HTMLDivElement>(null);
  const responsiveChalkRef = useRef<SVGSVGElement>(null);

  // Climax Typewriter & Blinking Cursor Refs
  const climaxContainerRef = useRef<HTMLDivElement>(null);
  const climaxDotRef = useRef<HTMLDivElement>(null);
  const climaxTextLeadRef = useRef<HTMLSpanElement>(null);
  const climaxWordPayingRef = useRef<HTMLSpanElement>(null);
  const climaxPayingHighlightRef = useRef<SVGSVGElement>(null);
  const climaxTextMidRef = useRef<HTMLSpanElement>(null);
  const climaxWordBrokenRef = useRef<HTMLSpanElement>(null);
  const climaxPencilCircleRef = useRef<SVGPathElement>(null);
  const climaxPencilRef = useRef<HTMLDivElement>(null);

  // Scene 9: "SEO Top In Google Search" Stage Refs
  const seoStageRef = useRef<HTMLDivElement>(null);
  const seoBgWashRef = useRef<HTMLDivElement>(null);
  const seoSocKetRef = useRef<HTMLDivElement>(null);
  const seoGoogleTileRef = useRef<HTMLDivElement>(null);
  const seoShockwaveRef = useRef<HTMLDivElement>(null);
  const seoLeftTextRef = useRef<HTMLDivElement>(null);
  const seoRightTextRef = useRef<HTMLDivElement>(null);

  // Scene 10: "24/7 Organic Traffic on Autopilot" Stage Refs
  const autopilotStageRef = useRef<HTMLDivElement>(null);
  const autopilotBgWashRef = useRef<HTMLDivElement>(null);
  const autopilotTopHeaderRef = useRef<HTMLDivElement>(null);
  const autopilotRobotRef = useRef<HTMLDivElement>(null);
  const autopilotBadgeRef = useRef<HTMLDivElement>(null);
  const autopilotLeftColRef = useRef<HTMLDivElement>(null);
  const autopilotSearchBarContainerRef = useRef<HTMLDivElement>(null);
  const autopilotTypedQueryRef = useRef<HTMLSpanElement>(null);
  const autopilotCursorRef = useRef<HTMLSpanElement>(null);
  const autopilotAiOverviewRef = useRef<HTMLDivElement>(null);
  const autopilotOrganicResultRef = useRef<HTMLDivElement>(null);
  const autopilotRightCopyRef = useRef<HTMLDivElement>(null);
  const autopilotKeywordPillsRef = useRef<HTMLDivElement>(null);

  // Scene 11: "Visible in AI" Stage Refs
  const aiStageRef = useRef<HTMLDivElement>(null);
  const aiBgWashRef = useRef<HTMLDivElement>(null);
  const aiHeaderContainerRef = useRef<HTMLDivElement>(null);
  const aiVisibleTitleRef = useRef<HTMLHeadingElement>(null);
  const aiSubtitleGeminiRef = useRef<HTMLParagraphElement>(null);
  const aiSubtitleGptRef = useRef<HTMLParagraphElement>(null);
  const aiSubtitleClaudeRef = useRef<HTMLParagraphElement>(null);
  const aiCardsCarouselRef = useRef<HTMLDivElement>(null);
  const aiCardGeminiRef = useRef<HTMLDivElement>(null);
  const aiCardGptRef = useRef<HTMLDivElement>(null);
  const aiCardClaudeRef = useRef<HTMLDivElement>(null);
  const aiPresentationGridRef = useRef<HTMLDivElement>(null);
  const aiChatCanvasRef = useRef<HTMLDivElement>(null);
  const aiChatInputPlaceholderRef = useRef<HTMLSpanElement>(null);
  const aiChatInputTypedTextRef = useRef<HTMLSpanElement>(null);
  const aiChatCursorRef = useRef<HTMLSpanElement>(null);
  const aiChatSendBtnRef = useRef<HTMLButtonElement>(null);
  const aiChatUserBubbleRef = useRef<HTMLDivElement>(null);
  const aiChatStreamResponseRef = useRef<HTMLDivElement>(null);
  const aiRightCopyRef = useRef<HTMLDivElement>(null);

  // Fluid Smoke Shockwave & Deflection state
  const smokeStateRef = useRef({
    intensity: 0,
    targetIntensity: 0,
    shiftX: 0,
    time: 0,
    scrollSpeed: 0,
    lastScrollY: 0,
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const canvas = canvasRef.current;
    if (!section || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // ─────────────────────────────────────────────────────────────────────────
    // 1. ORGANIC LIVING VOLUMETRIC SMOKE CHAMBER (Canvas 2D)
    // Soft Snow White Base (#FAFBFD) + Pastel Rose + Pastel Sky Cyan
    // Continuous 60fps organic fluid drift like gas trapped in glass
    // ─────────────────────────────────────────────────────────────────────────
    let animFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // 12 Volumetric Fluid Smoke/Gas Vortices: Soft Sky Blue + Snow White mix
    // Slightly denser, foggy celestial gas with multi-frequency billowing motion
    const smokeClouds = [
      // Core soft Sky Blue & Cyan clouds (luminous, soft, foggy)
      {
        baseX: 0.35,
        baseY: 0.42,
        radius: 0.42,
        color: "rgba(125, 211, 252, 0.42)", // pastel sky blue
        freqX: 1.1,
        freqY: 0.95,
        ampX: 85,
        ampY: 65,
        phase: 0.4,
      },
      {
        baseX: 0.65,
        baseY: 0.46,
        radius: 0.44,
        color: "rgba(186, 230, 253, 0.48)", // luminous soft cyan/sky
        freqX: 0.85,
        freqY: 1.15,
        ampX: 90,
        ampY: 70,
        phase: 2.3,
      },
      {
        baseX: 0.26,
        baseY: 0.62,
        radius: 0.38,
        color: "rgba(147, 197, 253, 0.36)", // soft azure mist
        freqX: 1.25,
        freqY: 0.8,
        ampX: 75,
        ampY: 60,
        phase: 1.8,
      },
      {
        baseX: 0.74,
        baseY: 0.58,
        radius: 0.40,
        color: "rgba(56, 189, 248, 0.32)", // clear sky cyan
        freqX: 0.95,
        freqY: 1.05,
        ampX: 80,
        ampY: 65,
        phase: 4.6,
      },

      // Center & Core Pearlescent Snow White Vapor Clouds (creates soft foggy mixing depth)
      {
        baseX: 0.50,
        baseY: 0.48,
        radius: 0.48,
        color: "rgba(255, 255, 255, 0.88)", // luminous pure snow white vapor
        freqX: 0.75,
        freqY: 0.85,
        ampX: 65,
        ampY: 55,
        phase: 1.2,
      },
      {
        baseX: 0.46,
        baseY: 0.38,
        radius: 0.40,
        color: "rgba(240, 249, 255, 0.70)", // snow white haze
        freqX: 1.05,
        freqY: 0.9,
        ampX: 70,
        ampY: 50,
        phase: 3.1,
      },
      {
        baseX: 0.54,
        baseY: 0.58,
        radius: 0.44,
        color: "rgba(255, 255, 255, 0.82)", // billowing white fog
        freqX: 0.9,
        freqY: 1.1,
        ampX: 75,
        ampY: 55,
        phase: 2.7,
      },

      // Outer atmospheric sky blue / snow fog
      {
        baseX: 0.16,
        baseY: 0.28,
        radius: 0.36,
        color: "rgba(224, 242, 254, 0.45)", // soft morning mist
        freqX: 0.8,
        freqY: 0.95,
        ampX: 65,
        ampY: 55,
        phase: 3.8,
      },
      {
        baseX: 0.84,
        baseY: 0.32,
        radius: 0.38,
        color: "rgba(186, 230, 253, 0.40)", // gentle sky blue
        freqX: 1.15,
        freqY: 0.85,
        ampX: 70,
        ampY: 50,
        phase: 5.1,
      },
      {
        baseX: 0.38,
        baseY: 0.74,
        radius: 0.38,
        color: "rgba(199, 210, 254, 0.30)", // soft periwinkle blue
        freqX: 0.95,
        freqY: 1.2,
        ampX: 80,
        ampY: 60,
        phase: 0.9,
      },
    ];

    // Scroll speed listener for organic dynamic fluid drag
    const onScroll = () => {
      const currentY = window.scrollY;
      const dy = currentY - smokeStateRef.current.lastScrollY;
      smokeStateRef.current.scrollSpeed = Math.min(Math.abs(dy) * 0.004, 0.8);
      smokeStateRef.current.lastScrollY = currentY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Render loop for living organic smoke
    const renderSmoke = () => {
      smokeStateRef.current.time += 0.016; // Organic lively billowing drift
      const t = smokeStateRef.current.time;

      // Smooth decay of shockwave intensity and scroll momentum
      smokeStateRef.current.intensity +=
        (smokeStateRef.current.targetIntensity - smokeStateRef.current.intensity) *
        0.07;
      smokeStateRef.current.scrollSpeed *= 0.94;

      const shock = smokeStateRef.current.intensity;
      const shiftX = smokeStateRef.current.shiftX;
      const scrollExtra = smokeStateRef.current.scrollSpeed;

      // 1. Pristine Snow White Base
      ctx.fillStyle = "#FAFBFD";
      ctx.fillRect(0, 0, width, height);

      // 2. Subtle Micro-Dot Cybernetic Grid (low opacity matching Image 4)
      ctx.save();
      ctx.fillStyle = "rgba(148, 163, 184, 0.14)";
      const dotSpacing = 38;
      for (let x = 0; x < width; x += dotSpacing) {
        for (let y = 0; y < height; y += dotSpacing) {
          ctx.beginPath();
          ctx.arc(x, y, 0.85, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.restore();

      // 3. Volumetric Smoke/Gas Vortices Rendering (Soft Foggy Sky-Blue + Snow White)
      smokeClouds.forEach((cloud) => {
        // Continuous multi-harmonic fluid drift (living swirling gas)
        const ox =
          Math.sin(t * cloud.freqX + cloud.phase) * (cloud.ampX + scrollExtra * 35) +
          Math.cos(t * 0.8 + cloud.phase * 1.4) * 20;
        const oy =
          Math.cos(t * cloud.freqY + cloud.phase) * (cloud.ampY + scrollExtra * 30) +
          Math.sin(t * 0.7 + cloud.phase * 1.2) * 18;

        // Fluid displacement from shockwave & "Your" lateral glide
        const dx = cloud.baseX * width + ox - width / 2;
        const dy = cloud.baseY * height + oy - height / 2;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const pushX = (dx / dist) * (shock * 110) + shiftX * 35;
        const pushY = (dy / dist) * (shock * 85);

        const cx = cloud.baseX * width + ox + pushX;
        const cy = cloud.baseY * height + oy + pushY;
        const rad = Math.max(width, height) * (cloud.radius + shock * 0.08);

        // Multi-stop radial gradient creating soft, visible, foggy volumetric gas
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, rad);
        grad.addColorStop(0, cloud.color);
        grad.addColorStop(
          0.38,
          cloud.color.replace(/[\d\.]+\)$/, (val) => `${parseFloat(val) * 0.82})`)
        );
        grad.addColorStop(
          0.68,
          cloud.color.replace(/[\d\.]+\)$/, (val) => `${parseFloat(val) * 0.42})`)
        );
        grad.addColorStop(
          0.88,
          cloud.color.replace(/[\d\.]+\)$/, (val) => `${parseFloat(val) * 0.14})`)
        );
        grad.addColorStop(1, "rgba(250, 251, 253, 0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, rad, 0, Math.PI * 2);
        ctx.fill();
      });

      animFrameId = requestAnimationFrame(renderSmoke);
    };

    // Performance Optimization: Only run canvas RAF when section is actively in viewport
    let isCanvasActive = true;
    const canvasObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isCanvasActive = entry.isIntersecting;
          if (isCanvasActive) {
            cancelAnimationFrame(animFrameId);
            animFrameId = requestAnimationFrame(renderSmoke);
          } else {
            cancelAnimationFrame(animFrameId);
          }
        });
      },
      { threshold: 0.05 }
    );
    canvasObserver.observe(section);

    renderSmoke();

    // ─────────────────────────────────────────────────────────────────────────
    // 2. KINETIC TYPOGRAPHY SCROLLTRIGGER TIMELINE
    // Optical Pin-and-Slide Reveal Orchestration:
    // • "Your" zooms into DEAD OPTICAL CENTER first (scale 3.2 -> 1.0, blur 16px -> 0px)
    // • Holds center for comprehension pause
    // • Glides smoothly left to phrase resting position
    // • "Unfair" & "Advantage" emerge letter-by-letter from the left (staggered typing slide)
    // • Harmonious cadence & subtle subtitle settle
    // ─────────────────────────────────────────────────────────────────────────

    // Dynamic horizontal center-offset calculation:
    // Calculates exact pixel distance to place 'Your' dead center of the viewport
    const calculateCenterShift = () => {
      if (!phraseContainerRef.current || !wordYourRef.current) return 0;
      const containerRect = phraseContainerRef.current.getBoundingClientRect();
      const yourRect = wordYourRef.current.getBoundingClientRect();
      // Distance from center of wordYour to center of container (which is centered on screen)
      const containerCenterX = containerRect.left + containerRect.width / 2;
      const yourCenterX = yourRect.left + yourRect.width / 2;
      return containerCenterX - yourCenterX;
    };

    const initialCenterShift = calculateCenterShift();

    // ─────────────────────────────────────────────────────────────────────────
    // 2. KINETIC SCROLLTRIGGER MASTER TIMELINE (+=16000 scrub)
    // • Act 1: Headline Kinetic Entrance & Hero Hold (0.00 -> 0.44)
    // • Act 2: 3D Pitch Tumble Recede Exit into Deep Fog (0.44 -> 0.50)
    // • Act 3: worldweb.png Globe Flies In to Center (0.50 -> 0.62)
    // • Act 4: Center Pause & Kinetic Impulse Strike to Left (0.62 -> 0.74)
    // • Act 5: "Interactive Website" Bursts Out from Impact (0.70 -> 0.82)
    // • Act 6: Interactive Website Hold (0.82 -> 0.88)
    // • Act 7: Globe to Top-Left & Attention Badge Entrance (0.88 -> 0.96)
    // • Act 8: Static Sites & Mobile UI Cards Sunset Arc Entrance (0.96 -> 1.08)
    // • Act 9: Red Pencil Circle on "ignored." (1.08 -> 1.16)
    // • Act 10: Sunset Arc Spiral Exit to Right (1.22 -> 1.34)
    // • Act 11: E-Commerce Blast (Cart, Cloth, Mobile) (1.34 -> 1.48)
    // • Act 12: Interactive & Storytelling (Italic Green + Bold Underline) (1.46 -> 1.66)
    // • Act 13: Implosion to Dot & Morph to Stylized Eye (1.68 -> 1.82)
    // • Act 14: Realistic Eye Saccades & Natural Blink (1.82 -> 1.98)
    // • Act 15: Eye to Top Header "Hooks your" + "Visitor instantly," + 3D Phones (1.98 -> 2.22)
    // • Act 16: Majestic Climax Reading Hold (2.22 -> 2.45)
    // ─────────────────────────────────────────────────────────────────────────
    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => {
          if (typeof window === "undefined") return "+=58000";
          const w = window.innerWidth;
          if (w < 640) return "+=28000"; // Mobile: calibrated comfortable swipe speed
          if (w < 1024) return "+=38000"; // Tablet
          return "+=65000"; // Desktop
        },
        pin: true,
        scrub: typeof window !== "undefined" && window.innerWidth < 768 ? 0.6 : 0.95,
        anticipatePin: 1,
        onRefresh: () => {
          calculateCenterShift();
        },
        onUpdate: (self) => {
          const prog = self.progress;
          // Dynamic gas physics: shockwaves on arrivals & strikes
          if (prog > 0.05 && prog < 0.20) {
            smokeStateRef.current.targetIntensity = (prog - 0.05) * 1.8;
          } else if (prog >= 0.20 && prog < 0.44) {
            smokeStateRef.current.targetIntensity = 0.12;
          } else if (prog >= 0.44 && prog < 0.52) {
            smokeStateRef.current.targetIntensity = 0.15 + (prog - 0.44) * 2.5;
          } else if (prog >= 0.52 && prog < 0.66) {
            smokeStateRef.current.targetIntensity = 0.18;
          } else if (prog >= 0.66 && prog < 0.82) {
            smokeStateRef.current.targetIntensity = 0.2 + (prog - 0.66) * 1.8;
          } else if (prog >= 0.82) {
            // Scene 9: Google SEO deep luminous atmospheric fog
            smokeStateRef.current.targetIntensity = 0.42;
          } else {
            smokeStateRef.current.targetIntensity = 0.16;
          }
        },
      },
    });

    // Initial Setup:
    // 1. "Your" starts in DEAD CENTER of the screen
    if (wordYourRef.current) {
      gsap.set(wordYourRef.current, {
        x: initialCenterShift,
        y: 0,
        z: 0,
        rotateX: 0,
        rotateZ: 0,
        scale: 3.2,
        opacity: 0,
        filter: "blur(18px)",
        transformOrigin: "center center",
      });
    }

    if (unfairLetterRefs.current) {
      unfairLetterRefs.current.forEach((letter) => {
        if (letter) {
          gsap.set(letter, {
            x: -26,
            opacity: 0,
            scale: 0.92,
            filter: "blur(8px)",
          });
        }
      });
    }

    if (advantageLetterRefs.current) {
      advantageLetterRefs.current.forEach((letter) => {
        if (letter) {
          gsap.set(letter, {
            x: -26,
            opacity: 0,
            scale: 0.92,
            filter: "blur(8px)",
          });
        }
      });
    }

    if (subtextRef.current) {
      gsap.set(subtextRef.current, {
        opacity: 0,
        y: 16,
        filter: "blur(6px)",
      });
    }

    // 2. Globe & Interactive Website Staged Initial State
    if (globeStageRef.current) {
      gsap.set(globeStageRef.current, {
        opacity: 0,
      });
    }

    if (globeWrapperRef.current) {
      gsap.set(globeWrapperRef.current, {
        y: 260,
        x: 0,
        scale: 0.15,
        rotate: -20,
        opacity: 0,
        filter: "blur(14px)",
      });
    }

    if (interactiveTextContainerRef.current) {
      gsap.set(interactiveTextContainerRef.current, {
        opacity: 0,
      });
    }

    if (wordInteractiveRef.current) {
      gsap.set(wordInteractiveRef.current, {
        x: -45,
        opacity: 0,
        filter: "blur(12px)",
      });
    }

    if (websiteLetterRefs.current) {
      websiteLetterRefs.current.forEach((charEl) => {
        if (charEl) {
          gsap.set(charEl, {
            rotateX: -88,
            y: 30,
            z: -25,
            opacity: 0,
            filter: "blur(6px)",
          });
        }
      });
    }

    // 3. Top Attention Badge Initial State
    if (attentionBadgeRef.current) {
      gsap.set(attentionBadgeRef.current, {
        opacity: 0,
        y: -18,
      });
    }

    // 4. Static Sites & Radial Sunset Arc Initial State
    if (staticSitesStageRef.current) {
      gsap.set(staticSitesStageRef.current, {
        opacity: 0,
      });
    }

    if (staticSitesHeadlineRef.current) {
      gsap.set(staticSitesHeadlineRef.current, {
        opacity: 0,
        y: 28,
        filter: "blur(10px)",
      });
    }

    if (redCirclePathRef.current) {
      const len = redCirclePathRef.current.getTotalLength() || 680;
      gsap.set(redCirclePathRef.current, {
        strokeDasharray: len,
        strokeDashoffset: len,
      });
    }

    cardRefs.current.forEach((card, idx) => {
      if (!card) return;
      const k = idx - 2;
      gsap.set(card, {
        x: k * 70 + 160,
        y: 420,
        rotateZ: k * 12 + 22,
        scale: 0.65,
        opacity: 0,
      });
    });

    // 5. Blast Stage Initial State
    if (blastStageRef.current) gsap.set(blastStageRef.current, { opacity: 0 });
    if (blastCartRef.current)
      gsap.set(blastCartRef.current, {
        x: 0,
        y: 0,
        scale: 0.15,
        opacity: 0,
        rotate: -35,
        filter: "blur(10px)",
      });
    if (blastClothRef.current)
      gsap.set(blastClothRef.current, {
        x: 0,
        y: 0,
        scale: 0.15,
        opacity: 0,
        rotate: 30,
        filter: "blur(10px)",
      });
    if (blastMobileRef.current)
      gsap.set(blastMobileRef.current, {
        x: 0,
        y: 0,
        scale: 0.15,
        opacity: 0,
        rotate: -20,
        filter: "blur(10px)",
      });

    // 6. Interactive Storytelling Initial State
    if (storyStageRef.current) gsap.set(storyStageRef.current, { opacity: 0 });
    if (storyInteractiveRef.current)
      gsap.set(storyInteractiveRef.current, {
        y: 25,
        opacity: 0,
        filter: "blur(8px)",
      });
    if (storyStorytellingRef.current)
      gsap.set(storyStorytellingRef.current, {
        y: 30,
        opacity: 0,
        filter: "blur(10px)",
      });
    if (storyUnderlinePathRef.current) {
      const ulen = storyUnderlinePathRef.current.getTotalLength() || 260;
      gsap.set(storyUnderlinePathRef.current, {
        strokeDasharray: ulen,
        strokeDashoffset: ulen,
      });
    }

    // 7. Eye Rig Initial State
    if (eyeStageRef.current) gsap.set(eyeStageRef.current, { opacity: 0 });
    if (eyeCenterWrapperRef.current) gsap.set(eyeCenterWrapperRef.current, { x: 0, y: 0 });
    if (eyeDotRef.current) gsap.set(eyeDotRef.current, { scale: 0, opacity: 0 });
    if (eyeSvgRef.current) gsap.set(eyeSvgRef.current, { scale: 0, opacity: 0 });
    if (eyeEyelidsGroupRef.current)
      gsap.set(eyeEyelidsGroupRef.current, {
        scaleY: 1,
        transformOrigin: "100px 60px",
      });
    if (eyePupilGroupRef.current) gsap.set(eyePupilGroupRef.current, { x: 0, y: 0 });

    // 8. Final Hero Stage Initial State
    if (heroStageRef.current) gsap.set(heroStageRef.current, { opacity: 0 });
    if (heroHooksYourRef.current)
      gsap.set(heroHooksYourRef.current, {
        opacity: 0,
        x: 0,
        y: 20,
        filter: "blur(6px)",
      });
    if (heroVisitorTitleRef.current)
      gsap.set(heroVisitorTitleRef.current, {
        y: 35,
        opacity: 0,
        filter: "blur(10px)",
        scale: 0.95,
      });
    if (chalkHighlighterRef.current)
      gsap.set(chalkHighlighterRef.current, {
        scaleX: 0,
        opacity: 0,
        transformOrigin: "left center",
      });
    if (heroPhoneLeftRef.current)
      gsap.set(heroPhoneLeftRef.current, {
        x: -260,
        y: 220,
        rotate: -14,
        opacity: 0,
        filter: "blur(8px)",
      });
    if (heroPhoneRightRef.current)
      gsap.set(heroPhoneRightRef.current, {
        x: 260,
        y: 220,
        rotate: 14,
        opacity: 0,
        filter: "blur(8px)",
      });

    // 9. Scene 7: "Guiding them smoothly to Checkout" Initial State
    if (checkoutStageRef.current) gsap.set(checkoutStageRef.current, { opacity: 0 });
    if (checkoutLine1Ref.current)
      gsap.set(checkoutLine1Ref.current, { y: 45, opacity: 0, filter: "blur(6px)" });
    if (checkoutLine2Ref.current)
      gsap.set(checkoutLine2Ref.current, { y: 45, opacity: 0, filter: "blur(6px)" });
    if (checkoutLine3Ref.current)
      gsap.set(checkoutLine3Ref.current, { y: 45, opacity: 0, filter: "blur(6px)" });
    if (checkoutHighlighterRef.current)
      gsap.set(checkoutHighlighterRef.current, {
        scaleX: 0,
        opacity: 0,
        transformOrigin: "left center",
      });

    // 10. Scene 8: Initial States (Pure Code Device Morphing + Fast 3D Cylinder + Typing Climax)
    if (responsiveStageRef.current) gsap.set(responsiveStageRef.current, { opacity: 0 });
    if (responsiveBgTintRef.current) gsap.set(responsiveBgTintRef.current, { opacity: 0 });
    if (deviceStageWrapperRef.current)
      gsap.set(deviceStageWrapperRef.current, {
        y: 60,
        scale: 0.92,
        opacity: 0,
        x: 0,
        filter: "blur(8px)",
      });
    if (screenFrameRef.current)
      gsap.set(screenFrameRef.current, {
        width: 500,
        height: 310,
        borderRadius: "36px",
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        y: 0,
      });
    if (monitorStandRef.current) gsap.set(monitorStandRef.current, { scaleY: 1, opacity: 1, y: 0 });
    if (laptopBaseRef.current)
      gsap.set(laptopBaseRef.current, {
        scaleY: 0,
        opacity: 0,
        rotateX: 85,
        transformOrigin: "50% 0%",
      });
    if (deskKeyboardRef.current) gsap.set(deskKeyboardRef.current, { y: 0, opacity: 1 });
    if (deskPencilRef.current) gsap.set(deskPencilRef.current, { y: 0, opacity: 1, rotate: 0 });
    if (desktopScreenUIRef.current) gsap.set(desktopScreenUIRef.current, { opacity: 1, scale: 1 });
    if (phoneScreenUIRef.current) gsap.set(phoneScreenUIRef.current, { opacity: 0, scale: 0.9 });
    if (responsiveFloatingRef.current)
      gsap.set(responsiveFloatingRef.current, {
        scale: 0.6,
        opacity: 0,
      });

    // Right Side Text
    if (responsiveTextSideRef.current)
      gsap.set(responsiveTextSideRef.current, { opacity: 1, scale: 1, x: 0, y: 0 });
    if (responsiveTitleRef.current)
      gsap.set(responsiveTitleRef.current, {
        y: 45,
        opacity: 0,
        filter: "blur(6px)",
      });
    if (responsiveSubheadlineRef.current)
      gsap.set(responsiveSubheadlineRef.current, {
        y: 30,
        scale: 1,
        opacity: 0,
        filter: "blur(4px)",
      });
    if (deviceWordDesktopRef.current)
      gsap.set(deviceWordDesktopRef.current, {
        rotateX: 0,
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
      });
    if (deviceWordLaptopRef.current)
      gsap.set(deviceWordLaptopRef.current, {
        rotateX: -85,
        y: 25,
        opacity: 0,
        filter: "blur(4px)",
      });
    if (deviceWordPhoneRef.current)
      gsap.set(deviceWordPhoneRef.current, {
        rotateX: -85,
        y: 25,
        opacity: 0,
        filter: "blur(4px)",
      });

    // Cylinder Drum
    if (cylinderContainerRef.current) gsap.set(cylinderContainerRef.current, { opacity: 1 });
    if (cylinderZeroLostRef.current)
      gsap.set(cylinderZeroLostRef.current, {
        rotateX: -70,
        z: -80,
        y: 45,
        opacity: 0,
        filter: "blur(6px)",
      });
    if (cylinderMobileSalesRef.current)
      gsap.set(cylinderMobileSalesRef.current, {
        rotateX: -70,
        z: -80,
        y: 45,
        opacity: 0,
        filter: "blur(6px)",
      });
    if (responsiveChalkRef.current)
      gsap.set(responsiveChalkRef.current, {
        scaleX: 0,
        opacity: 0,
        transformOrigin: "left center",
      });

    // Climax Typewriter & Cursor initial states
    if (climaxContainerRef.current) gsap.set(climaxContainerRef.current, { opacity: 0 });
    if (climaxDotRef.current)
      gsap.set(climaxDotRef.current, {
        scale: 0,
        opacity: 0,
        x: 0,
        y: 0,
        width: 14,
        height: 14,
        borderRadius: 999,
      });
    if (climaxTextLeadRef.current)
      gsap.set(climaxTextLeadRef.current, {
        clipPath: "inset(0 100% 0 0)",
        opacity: 0,
      });
    if (climaxWordPayingRef.current)
      gsap.set(climaxWordPayingRef.current, {
        clipPath: "inset(0 100% 0 0)",
        opacity: 0,
      });
    if (climaxPayingHighlightRef.current)
      gsap.set(climaxPayingHighlightRef.current, {
        scaleX: 0,
        opacity: 0,
        transformOrigin: "left center",
      });
    if (climaxTextMidRef.current)
      gsap.set(climaxTextMidRef.current, {
        clipPath: "inset(0 100% 0 0)",
        opacity: 0,
      });
    if (climaxWordBrokenRef.current)
      gsap.set(climaxWordBrokenRef.current, {
        clipPath: "inset(0 100% 0 0)",
        opacity: 0,
      });
    if (climaxPencilCircleRef.current)
      gsap.set(climaxPencilCircleRef.current, {
        strokeDashoffset: 600,
        opacity: 0,
      });
    if (climaxPencilRef.current)
      gsap.set(climaxPencilRef.current, {
        scale: 0,
        opacity: 0,
        x: 20,
        y: 20,
        rotate: 35,
      });

    // 11. Scene 9: "SEO Top In Google Search" Initial State
    if (seoStageRef.current) gsap.set(seoStageRef.current, { opacity: 0 });
    if (seoBgWashRef.current) gsap.set(seoBgWashRef.current, { opacity: 0 });
    if (seoSocKetRef.current) gsap.set(seoSocKetRef.current, { opacity: 1 });
    if (seoGoogleTileRef.current)
      gsap.set(seoGoogleTileRef.current, {
        y: 440,
        x: 0,
        scale: 0.6,
        rotate: -18,
        opacity: 0,
        filter: "blur(8px)",
      });
    if (seoShockwaveRef.current)
      gsap.set(seoShockwaveRef.current, {
        scale: 0.8,
        opacity: 0,
      });
    if (seoLeftTextRef.current)
      gsap.set(seoLeftTextRef.current, {
        x: 100,
        opacity: 0,
        filter: "blur(10px)",
      });
    if (seoRightTextRef.current)
      gsap.set(seoRightTextRef.current, {
        x: -100,
        opacity: 0,
        filter: "blur(10px)",
      });

    // 12. Scene 10: "24/7 Organic Traffic on Autopilot" Initial State
    if (autopilotStageRef.current) gsap.set(autopilotStageRef.current, { opacity: 0 });
    if (autopilotBgWashRef.current) gsap.set(autopilotBgWashRef.current, { opacity: 0 });
    if (autopilotTopHeaderRef.current)
      gsap.set(autopilotTopHeaderRef.current, {
        y: -30,
        opacity: 0,
        filter: "blur(8px)",
      });
    if (autopilotRobotRef.current)
      gsap.set(autopilotRobotRef.current, {
        scale: 0,
        y: 30,
        rotate: -15,
        opacity: 0,
      });
    if (autopilotLeftColRef.current)
      gsap.set(autopilotLeftColRef.current, {
        scale: 0.9,
        y: 30,
        opacity: 0,
      });
    if (autopilotTypedQueryRef.current)
      gsap.set(autopilotTypedQueryRef.current, {
        width: "0%",
      });
    if (autopilotAiOverviewRef.current)
      gsap.set(autopilotAiOverviewRef.current, {
        y: 15,
        opacity: 0,
      });
    if (autopilotOrganicResultRef.current)
      gsap.set(autopilotOrganicResultRef.current, {
        y: 15,
        opacity: 0,
      });
    if (autopilotRightCopyRef.current)
      gsap.set(autopilotRightCopyRef.current, {
        x: 40,
        opacity: 0,
        filter: "blur(6px)",
      });

    // 13. Scene 11: "Visible in AI" Initial State
    if (aiStageRef.current) gsap.set(aiStageRef.current, { opacity: 0 });
    if (aiBgWashRef.current) gsap.set(aiBgWashRef.current, { opacity: 0 });
    if (aiHeaderContainerRef.current)
      gsap.set(aiHeaderContainerRef.current, {
        y: 0,
        opacity: 1,
      });
    if (aiVisibleTitleRef.current)
      gsap.set(aiVisibleTitleRef.current, {
        scale: 1.35,
        y: 80,
        opacity: 0,
        filter: "blur(14px)",
      });
    if (aiSubtitleGeminiRef.current)
      gsap.set(aiSubtitleGeminiRef.current, {
        opacity: 0,
        y: 10,
      });
    if (aiSubtitleGptRef.current)
      gsap.set(aiSubtitleGptRef.current, {
        opacity: 0,
        y: 10,
      });
    if (aiSubtitleClaudeRef.current)
      gsap.set(aiSubtitleClaudeRef.current, {
        opacity: 0,
        y: 10,
      });
    if (aiCardsCarouselRef.current)
      gsap.set(aiCardsCarouselRef.current, {
        y: 80,
        opacity: 0,
      });
    if (aiCardGeminiRef.current)
      gsap.set(aiCardGeminiRef.current, {
        x: 0,
        rotateY: 0,
        scale: 1.05,
        opacity: 1,
        z: 60,
      });
    if (aiCardGptRef.current)
      gsap.set(aiCardGptRef.current, {
        x: -240,
        rotateY: 26,
        scale: 0.9,
        opacity: 0.9,
        z: -40,
      });
    if (aiCardClaudeRef.current)
      gsap.set(aiCardClaudeRef.current, {
        x: 240,
        rotateY: -26,
        scale: 0.9,
        opacity: 0.9,
        z: -40,
      });
    if (aiPresentationGridRef.current)
      gsap.set(aiPresentationGridRef.current, {
        opacity: 0,
        pointerEvents: "none",
      });
    if (aiChatCanvasRef.current)
      gsap.set(aiChatCanvasRef.current, {
        scale: 0.92,
        opacity: 0,
        filter: "blur(8px)",
      });
    if (aiChatInputTypedTextRef.current)
      gsap.set(aiChatInputTypedTextRef.current, {
        width: "0%",
        opacity: 1,
      });
    if (aiChatUserBubbleRef.current)
      gsap.set(aiChatUserBubbleRef.current, {
        y: 15,
        opacity: 0,
        scale: 0.9,
      });
    if (aiChatStreamResponseRef.current)
      gsap.set(aiChatStreamResponseRef.current, {
        y: 15,
        opacity: 0,
        filter: "blur(6px)",
      });
    if (aiRightCopyRef.current)
      gsap.set(aiRightCopyRef.current, {
        x: 35,
        opacity: 0,
        filter: "blur(8px)",
      });

    // ── STAGE 0: Calming Entrance & Smoke Chamber Flow (0.00 -> 0.05) ────────
    masterTl.to({}, { duration: 0.05 });

    // ── STAGE 1: "Your" Zooms from Camera into DEAD CENTER (0.05 -> 0.16) ────
    masterTl.to(
      wordYourRef.current,
      {
        scale: 1.0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.11,
        ease: "power2.out",
      },
      0.05
    );

    // ── STAGE 2: Center Comprehension Hold (0.16 -> 0.20) ───────────────────
    masterTl.to({}, { duration: 0.04 });

    // ── STAGE 3: "Your" Glides Smoothly to the Left (0.20 -> 0.28) ───────────
    masterTl.to(
      wordYourRef.current,
      {
        x: 0,
        duration: 0.08,
        ease: "power3.inOut",
        onUpdate: function () {
          smokeStateRef.current.shiftX = -this.progress() * 1.0;
        },
      },
      0.20
    );

    // ── STAGE 4: "Unfair" Emerges Letter-by-Letter from Left (0.23 -> 0.32) ──
    unfairLetterRefs.current.forEach((letter, i) => {
      if (!letter) return;
      const startTime = 0.23 + i * 0.015;

      masterTl.to(
        letter,
        {
          x: 0,
          opacity: 1,
          scale: 1.0,
          filter: "blur(0px)",
          duration: 0.06,
          ease: "power2.out",
        },
        startTime
      );
    });

    // ── STAGE 5: "Advantage" Emerges Letter-by-Letter from Left (0.28 -> 0.36) ─
    advantageLetterRefs.current.forEach((letter, i) => {
      if (!letter) return;
      const startTime = 0.28 + i * 0.009;

      masterTl.to(
        letter,
        {
          x: 0,
          opacity: 1,
          scale: 1.0,
          filter: "blur(0px)",
          duration: 0.05,
          ease: "power2.out",
        },
        startTime
      );
    });

    // ── STAGE 6: Subtext Reveal (0.32 -> 0.38) ──────────────────────────────
    if (subtextRef.current) {
      masterTl.to(
        subtextRef.current,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.06,
          ease: "power2.out",
        },
        0.32
      );
    }

    // ── STAGE 7: HERO COMPREHENSION HOLD (0.38 -> 0.44) ─────────────────────
    // Complete headline and message rests rock-solid for maximum reading impact
    masterTl.to({}, { duration: 0.06 });

    // ── STAGE 8: 3D PITCH TUMBLE RECEDE EXIT (0.44 -> 0.50) ─────────────────
    if (subtextRef.current) {
      masterTl.to(
        subtextRef.current,
        {
          opacity: 0,
          y: 28,
          filter: "blur(10px)",
          duration: 0.05,
          ease: "power2.in",
        },
        0.44
      );
    }

    if (phraseContainerRef.current) {
      masterTl.to(
        phraseContainerRef.current,
        {
          rotateX: 18,
          z: -180,
          y: -24,
          duration: 0.06,
          ease: "power2.in",
        },
        0.44
      );
    }

    if (wordYourRef.current) {
      masterTl.to(
        wordYourRef.current,
        {
          rotateX: 72,
          rotateZ: -5,
          y: -95,
          z: -520,
          scale: 0.45,
          opacity: 0,
          filter: "blur(16px)",
          duration: 0.06,
          ease: "power2.in",
        },
        0.44
      );
    }

    if (wordUnfairRef.current) {
      masterTl.to(
        wordUnfairRef.current,
        {
          rotateX: 75,
          rotateZ: -3,
          y: -90,
          z: -540,
          scale: 0.45,
          opacity: 0,
          filter: "blur(16px)",
          duration: 0.06,
          ease: "power2.in",
        },
        0.45
      );
    }

    if (wordAdvantageRef.current) {
      masterTl.to(
        wordAdvantageRef.current,
        {
          rotateX: 78,
          rotateZ: -1,
          y: -85,
          z: -560,
          scale: 0.45,
          opacity: 0,
          filter: "blur(16px)",
          duration: 0.06,
          ease: "power2.in",
        },
        0.46
      );
    }

    // ── STAGE 9: worldweb.png GLOBE FLIES IN TO CENTER (0.50 -> 0.62) ────────
    if (globeStageRef.current) {
      masterTl.to(
        globeStageRef.current,
        {
          opacity: 1,
          duration: 0.02,
        },
        0.50
      );
    }

    if (globeWrapperRef.current) {
      masterTl.to(
        globeWrapperRef.current,
        {
          y: 0,
          scale: 1.04,
          rotate: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.12,
          ease: "power2.out",
        },
        0.50
      );
    }

    // ── STAGE 10: CENTER COMPREHENSION PAUSE (0.62 -> 0.66) ──────────────────
    masterTl.to({}, { duration: 0.04 });

    // ── STAGE 11: SMOOTH NUDGE TO LEFT (0.66 -> 0.74) ────────────────────────
    // Globe smoothly nudges to the left, initiating text ejection from inside it
    if (globeWrapperRef.current) {
      masterTl.to(
        globeWrapperRef.current,
        {
          x: 14,
          rotate: 3,
          duration: 0.03,
          ease: "power1.in",
        },
        0.66
      );

      masterTl.to(
        globeWrapperRef.current,
        {
          x: -55,
          rotate: -4,
          duration: 0.07,
          ease: "power2.out",
        },
        0.69
      );
    }

    // ── STAGE 12: "Interactive" EJECTS WITH OVERSHOOT + "Website" 3D CYLINDER ROLL (0.70 -> 0.82) ─
    if (interactiveTextContainerRef.current) {
      masterTl.to(
        interactiveTextContainerRef.current,
        {
          opacity: 1,
          duration: 0.02,
        },
        0.70
      );
    }

    // "Interactive" shoots out from behind the globe with anticipation overshoot to the right
    if (wordInteractiveRef.current) {
      masterTl.to(
        wordInteractiveRef.current,
        {
          x: 16,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.07,
          ease: "power2.out",
        },
        0.70
      );

      // Recoils and settles back to the left, tightening the gap cleanly
      masterTl.to(
        wordInteractiveRef.current,
        {
          x: 0,
          duration: 0.06,
          ease: "power2.out",
        },
        0.77
      );
    }

    // "Website" rolls up letter-by-letter in 3D perspective around a cylindrical drum
    websiteLetterRefs.current.forEach((charEl, idx) => {
      if (!charEl) return;
      const startTime = 0.72 + idx * 0.012;
      masterTl.to(
        charEl,
        {
          rotateX: 0,
          y: 0,
          z: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.06,
          ease: "back.out(1.3)",
        },
        startTime
      );
    });

    // ── STAGE 13: INTERACTIVE WEBSITE COMPREHENSION HOLD (0.82 -> 0.88) ───────
    masterTl.to({}, { duration: 0.06 });

    // ── STAGE 14: TRANSITION GLOBE TO TOP-LEFT & ATTENTION BADGE ENTRANCE (0.88 -> 0.96) ──
    // Interactive Website text recedes and glides away into depth
    if (interactiveTextContainerRef.current) {
      masterTl.to(
        interactiveTextContainerRef.current,
        {
          opacity: 0,
          y: -24,
          filter: "blur(8px)",
          duration: 0.06,
          ease: "power2.in",
        },
        0.88
      );
    }

    // Globe smoothly glides to the top-left corner as an anchor icon
    if (globeWrapperRef.current) {
      const targetGlobeX = -Math.min(width * 0.38, 480);
      const targetGlobeY = -Math.min(height * 0.36, 320);

      masterTl.to(
        globeWrapperRef.current,
        {
          x: targetGlobeX,
          y: targetGlobeY,
          scale: 0.36,
          duration: 0.08,
          ease: "power2.inOut",
        },
        0.88
      );
    }

    // Top Pinned Badge "Unbreakable Visitor Attention" enters
    if (attentionBadgeRef.current) {
      masterTl.to(
        attentionBadgeRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.06,
          ease: "power2.out",
        },
        0.90
      );
    }

    // ── STAGE 15: "STATIC SITES" & MOBILE CARDS SUNSET ARC ENTRANCE (0.96 -> 1.08) ──
    if (staticSitesStageRef.current) {
      masterTl.to(
        staticSitesStageRef.current,
        {
          opacity: 1,
          duration: 0.02,
        },
        0.96
      );
    }

    if (staticSitesHeadlineRef.current) {
      masterTl.to(
        staticSitesHeadlineRef.current,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.08,
          ease: "power2.out",
        },
        0.96
      );
    }

    // 5 Mobile cards spiral up from below into a radial sunset arc
    cardRefs.current.forEach((card, idx) => {
      if (!card) return;
      const k = idx - 2; // -2, -1, 0, 1, 2
      const targetX = k * 215;
      const targetY = k * k * 14;
      const targetRot = k * 7.5;

      masterTl.to(
        card,
        {
          x: targetX,
          y: targetY,
          rotateZ: targetRot,
          scale: 1.0,
          opacity: 1,
          duration: 0.10,
          ease: "power2.out",
        },
        0.98 + idx * 0.012
      );
    });

    // ── STAGE 16: RED PENCIL CIRCLE ON "GET IGNORED." (1.08 -> 1.16) ─────────
    if (redCirclePathRef.current) {
      masterTl.to(
        redCirclePathRef.current,
        {
          strokeDashoffset: 0,
          duration: 0.08,
          ease: "power1.inOut",
        },
        1.08
      );
    }

    // ── STAGE 17: PROBLEM STATEMENT COMPREHENSION HOLD (1.16 -> 1.22) ────────
    masterTl.to({}, { duration: 0.06 });

    // ── STAGE 18: SUNSET ARC SPIRAL EXIT TO THE RIGHT (1.22 -> 1.34) ─────────
    // Cards sweep away along the radial sunset arc to the right and down
    cardRefs.current.forEach((card, idx) => {
      if (!card) return;
      const k = idx - 2;
      const exitX = k * 215 + 720;
      const exitY = k * k * 14 + 320;
      const exitRot = k * 7.5 + 34;

      masterTl.to(
        card,
        {
          x: exitX,
          y: exitY,
          rotateZ: exitRot,
          scale: 0.75,
          opacity: 0,
          duration: 0.11,
          ease: "power2.in",
        },
        1.22 + (4 - idx) * 0.014
      );
    });

    // Headline clears away upwards
    if (staticSitesHeadlineRef.current) {
      masterTl.to(
        staticSitesHeadlineRef.current,
        {
          y: -30,
          opacity: 0,
          filter: "blur(8px)",
          duration: 0.08,
          ease: "power2.in",
        },
        1.24
      );
    }

    // ── STAGE 19: THE 3D E-COMMERCE & TECH BLAST (Cart, Cloth, Mobile) (1.34 -> 1.48) ──
    // The three assets blast out from center into zero-gravity float
    if (blastStageRef.current) {
      masterTl.to(
        blastStageRef.current,
        {
          opacity: 1,
          duration: 0.02,
        },
        1.34
      );
    }

    if (blastCartRef.current) {
      masterTl.to(
        blastCartRef.current,
        {
          x: -Math.min(width * 0.28, 380),
          y: -Math.min(height * 0.26, 210),
          rotate: -14,
          scale: 1.0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.12,
          ease: "back.out(1.4)",
        },
        1.34
      );
    }

    if (blastClothRef.current) {
      masterTl.to(
        blastClothRef.current,
        {
          x: Math.min(width * 0.29, 390),
          y: -Math.min(height * 0.24, 190),
          rotate: 12,
          scale: 1.0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.12,
          ease: "back.out(1.4)",
        },
        1.35
      );
    }

    if (blastMobileRef.current) {
      masterTl.to(
        blastMobileRef.current,
        {
          x: 20,
          y: Math.min(height * 0.26, 210),
          rotate: -4,
          scale: 1.0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.12,
          ease: "back.out(1.4)",
        },
        1.36
      );
    }

    // ── STAGE 20: "INTERACTIVE" & "STORYTELLING" KINETIC REVEAL (1.46 -> 1.66) ──
    if (storyStageRef.current) {
      masterTl.to(
        storyStageRef.current,
        {
          opacity: 1,
          duration: 0.02,
        },
        1.46
      );
    }

    if (storyInteractiveRef.current) {
      masterTl.to(
        storyInteractiveRef.current,
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.08,
          ease: "power2.out",
        },
        1.46
      );
    }

    if (storyStorytellingRef.current) {
      masterTl.to(
        storyStorytellingRef.current,
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.09,
          ease: "power2.out",
        },
        1.52
      );
    }

    // Dynamic hand-drawn green pencil bold underline sketches under "Storytelling"
    if (storyUnderlinePathRef.current) {
      masterTl.to(
        storyUnderlinePathRef.current,
        {
          strokeDashoffset: 0,
          duration: 0.08,
          ease: "power2.inOut",
        },
        1.56
      );
    }

    // Comprehension hold on Interactive Storytelling & zero-g floating items
    masterTl.to({}, { duration: 0.06 });

    // ── STAGE 21: IMPLOSION INTO BLACK DOT & EYE EXPANSION (1.68 -> 1.82) ────
    // Blast objects and text suck inward into a single central focal point
    if (blastCartRef.current) {
      masterTl.to(
        blastCartRef.current,
        {
          x: 0,
          y: 0,
          scale: 0,
          opacity: 0,
          duration: 0.08,
          ease: "power2.in",
        },
        1.68
      );
    }

    if (blastClothRef.current) {
      masterTl.to(
        blastClothRef.current,
        {
          x: 0,
          y: 0,
          scale: 0,
          opacity: 0,
          duration: 0.08,
          ease: "power2.in",
        },
        1.68
      );
    }

    if (blastMobileRef.current) {
      masterTl.to(
        blastMobileRef.current,
        {
          x: 0,
          y: 0,
          scale: 0,
          opacity: 0,
          duration: 0.08,
          ease: "power2.in",
        },
        1.68
      );
    }

    if (storyStageRef.current) {
      masterTl.to(
        storyStageRef.current,
        {
          scale: 0.1,
          opacity: 0,
          filter: "blur(10px)",
          duration: 0.08,
          ease: "power2.in",
        },
        1.68
      );
    }

    // Black dot emerges at center
    if (eyeStageRef.current) {
      masterTl.to(
        eyeStageRef.current,
        {
          opacity: 1,
          duration: 0.02,
        },
        1.74
      );
    }

    if (eyeDotRef.current) {
      masterTl.to(
        eyeDotRef.current,
        {
          scale: 1.0,
          opacity: 1,
          duration: 0.04,
          ease: "power2.out",
        },
        1.74
      );
    }

    // Stylized Eye frame blooms around the dot, dot seamlessly transitions to pupil
    if (eyeSvgRef.current) {
      masterTl.to(
        eyeSvgRef.current,
        {
          scale: 1.0,
          opacity: 1,
          duration: 0.08,
          ease: "back.out(1.4)",
        },
        1.76
      );
    }

    if (eyeDotRef.current) {
      masterTl.to(
        eyeDotRef.current,
        {
          opacity: 0,
          duration: 0.02,
        },
        1.78
      );
    }

    // ── STAGE 22: REALISTIC EYE MOVEMENT (CURVED SACCADES & NATURAL BLINK) (1.82 -> 1.98) ──
    // Realistic eye kinematics: glances left with subtle upward arc
    if (eyePupilGroupRef.current) {
      masterTl.to(
        eyePupilGroupRef.current,
        {
          x: -28,
          y: -5,
          duration: 0.05,
          ease: "power2.out",
        },
        1.82
      );

      // Sweeps right along natural downward curved saccadic trajectory
      masterTl.to(
        eyePupilGroupRef.current,
        {
          x: 26,
          y: 4,
          duration: 0.06,
          ease: "power2.inOut",
        },
        1.87
      );
    }

    // Natural realistic blink: eyelids pinch closed and snap open
    if (eyeEyelidsGroupRef.current) {
      masterTl.to(
        eyeEyelidsGroupRef.current,
        {
          scaleY: 0.06,
          duration: 0.025,
          ease: "power2.in",
        },
        1.92
      );

      masterTl.to(
        eyeEyelidsGroupRef.current,
        {
          scaleY: 1.0,
          duration: 0.03,
          ease: "back.out(1.6)",
        },
        1.945
      );
    }

    // Pupil returns to dead center
    if (eyePupilGroupRef.current) {
      masterTl.to(
        eyePupilGroupRef.current,
        {
          x: 0,
          y: 0,
          duration: 0.04,
          ease: "power2.out",
        },
        1.95
      );
    }

    // ── STAGE 23: EYE & "HOOKS YOUR" GLIDE UP TOGETHER + HERO "VISITOR INSTANTLY," + 3D PARALLAX PHONES (1.98 -> 2.22) ──
    // The Eye glides from dead-center up and left to align with the "V" of "Visitor"
    if (eyeCenterWrapperRef.current) {
      const topTargetY = -Math.min(height * 0.15, 105);
      const targetEyeX = -Math.min(width * 0.16, 210);

      masterTl.to(
        eyeCenterWrapperRef.current,
        {
          x: targetEyeX,
          y: topTargetY,
          duration: 0.10,
          ease: "power2.inOut",
        },
        1.98
      );
    }

    if (eyeSvgRef.current) {
      masterTl.to(
        eyeSvgRef.current,
        {
          scale: 0.52, // Crisp proportional size
          duration: 0.10,
          ease: "power2.inOut",
        },
        1.98
      );
    }

    if (heroStageRef.current) {
      masterTl.to(
        heroStageRef.current,
        {
          opacity: 1,
          duration: 0.02,
        },
        1.98
      );
    }

    // "Hooks your" emerges cleanly beside the Eye with comfortable, non-overlapping spacing
    if (heroHooksYourRef.current) {
      const topTargetY = -Math.min(height * 0.15, 105);
      const targetEyeX = -Math.min(width * 0.16, 210);
      const targetHooksX = targetEyeX + 215; // Clean, non-overlapping spacing beside the Eye

      masterTl.to(
        heroHooksYourRef.current,
        {
          x: targetHooksX,
          y: topTargetY,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.08,
          ease: "power2.out",
        },
        2.02
      );
    }

    // Hero headline "Visitor instantly," enters in center (moved up slightly closer to Hooks your)
    if (heroVisitorTitleRef.current) {
      masterTl.to(
        heroVisitorTitleRef.current,
        {
          y: -15,
          opacity: 1,
          scale: 1.0,
          filter: "blur(0px)",
          duration: 0.11,
          ease: "power2.out",
        },
        2.05
      );
    }

    // Half-height textured rough chalk highlighter wipes across "instantly,"
    if (chalkHighlighterRef.current) {
      masterTl.to(
        chalkHighlighterRef.current,
        {
          scaleX: 1,
          opacity: 1,
          duration: 0.10,
          ease: "power2.out",
        },
        2.08
      );
    }

    // Left Phone (phone1.png) rises - pushed comfortably left so it doesn't touch "Visitor"
    if (heroPhoneLeftRef.current) {
      const phoneLeftX = -Math.min(width * 0.38, 540);
      const phoneLeftY = Math.min(height * 0.10, 80);

      masterTl.to(
        heroPhoneLeftRef.current,
        {
          x: phoneLeftX,
          y: phoneLeftY,
          rotate: -4,
          scale: 1.0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.12,
          ease: "power2.out",
        },
        2.06
      );
    }

    // Right Phone/Girl (phone2.webp) moved further right with deep 3D parallax depth
    if (heroPhoneRightRef.current) {
      const phoneRightX = Math.min(width * 0.36, 490);
      const phoneRightY = Math.min(height * 0.08, 65);

      masterTl.to(
        heroPhoneRightRef.current,
        {
          x: phoneRightX,
          y: phoneRightY,
          rotate: 3,
          scale: 0.82, // smaller scale for far 3D depth
          opacity: 0.88,
          filter: "blur(0.5px)",
          duration: 0.12,
          ease: "power2.out",
        },
        2.07
      );
    }

    // ── STAGE 24: MAJESTIC CLIMAX READING HOLD (2.22 -> 2.34) ─────────────────
    masterTl.to({}, { duration: 0.12 });

    // ── STAGE 25: THE GIRL SWEEPS LEFT & GRAVITATIONAL VORTEX SUCTION (2.34 -> 2.50) ──
    const targetGirlLeftX = -Math.min(width * 0.28, 380);
    const targetGirlLeftY = 10;

    // The Laptop Girl (phone2.webp) sweeps across from right to left
    if (heroPhoneRightRef.current) {
      masterTl.to(
        heroPhoneRightRef.current,
        {
          x: targetGirlLeftX,
          y: targetGirlLeftY,
          rotate: -2,
          scale: 1.0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.16,
          ease: "power2.inOut",
        },
        2.34
      );
    }

    // Suction Vortex: Left phone gets sucked into the girl
    if (heroPhoneLeftRef.current) {
      masterTl.to(
        heroPhoneLeftRef.current,
        {
          x: targetGirlLeftX + 35,
          y: targetGirlLeftY,
          scale: 0.1,
          rotate: 30,
          opacity: 0,
          filter: "blur(12px)",
          duration: 0.12,
          ease: "power2.in",
        },
        2.36
      );
    }

    // Suction Vortex: "Visitor instantly," gets sucked into the girl
    if (heroVisitorTitleRef.current) {
      masterTl.to(
        heroVisitorTitleRef.current,
        {
          x: targetGirlLeftX,
          y: targetGirlLeftY - 15,
          scale: 0.12,
          opacity: 0,
          filter: "blur(14px)",
          duration: 0.13,
          ease: "power2.in",
        },
        2.37
      );
    }

    if (chalkHighlighterRef.current) {
      masterTl.to(
        chalkHighlighterRef.current,
        {
          opacity: 0,
          duration: 0.06,
          ease: "power1.in",
        },
        2.36
      );
    }

    // Suction Vortex: "Hooks your" gets sucked into the girl
    if (heroHooksYourRef.current) {
      masterTl.to(
        heroHooksYourRef.current,
        {
          x: targetGirlLeftX - 25,
          y: targetGirlLeftY - 35,
          scale: 0.1,
          opacity: 0,
          filter: "blur(10px)",
          duration: 0.12,
          ease: "power2.in",
        },
        2.38
      );
    }

    // Suction Vortex: Eye icon gets sucked into the girl
    if (eyeCenterWrapperRef.current) {
      masterTl.to(
        eyeCenterWrapperRef.current,
        {
          x: targetGirlLeftX,
          y: targetGirlLeftY,
          scale: 0.05,
          opacity: 0,
          filter: "blur(10px)",
          duration: 0.12,
          ease: "power2.in",
        },
        2.38
      );
    }

    // The 3D worldweb.png Globe glides diagonally down from top-left to float in zero gravity above the girl's right side
    if (globeWrapperRef.current) {
      const targetGlobeFloatX = targetGirlLeftX + Math.min(width * 0.16, 210);
      const targetGlobeFloatY = -Math.min(height * 0.22, 170);

      masterTl.to(
        globeWrapperRef.current,
        {
          x: targetGlobeFloatX,
          y: targetGlobeFloatY,
          scale: 0.58,
          rotate: 12,
          opacity: 1,
          duration: 0.15,
          ease: "power2.out",
        },
        2.38
      );
    }

    // ── STAGE 26: KINETIC TYPOGRAPHY ENTRANCE ON THE RIGHT ("Ultralic") (2.50 -> 2.68) ──
    if (checkoutStageRef.current) {
      masterTl.to(
        checkoutStageRef.current,
        {
          opacity: 1,
          duration: 0.02,
        },
        2.50
      );
    }

    // Line 1: "Guiding them smoothly" rises from bottom
    if (checkoutLine1Ref.current) {
      masterTl.to(
        checkoutLine1Ref.current,
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.09,
          ease: "power2.out",
        },
        2.50
      );
    }

    // Line 2: "from their first scroll" rises from bottom
    if (checkoutLine2Ref.current) {
      masterTl.to(
        checkoutLine2Ref.current,
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.09,
          ease: "power2.out",
        },
        2.54
      );
    }

    // Line 3: "straight to Checkout" + Icon rises from bottom
    if (checkoutLine3Ref.current) {
      masterTl.to(
        checkoutLine3Ref.current,
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.10,
          ease: "power2.out",
        },
        2.58
      );
    }

    // Yellow Chalk Highlighter wipes across "Checkout"
    if (checkoutHighlighterRef.current) {
      masterTl.to(
        checkoutHighlighterRef.current,
        {
          scaleX: 1,
          opacity: 1,
          duration: 0.09,
          ease: "power2.out",
        },
        2.62
      );
    }

    // ── STAGE 27: SCENE 7 READING HOLD (2.68 -> 2.88) ─────────────────
    masterTl.to({}, { duration: 0.20 });

    // ── STAGE 28: SCENE 7 EXITS INTO DEPTH (2.88 -> 3.02) ─────────────
    if (checkoutStageRef.current) {
      masterTl.to(
        checkoutStageRef.current,
        {
          y: -35,
          opacity: 0,
          filter: "blur(8px)",
          duration: 0.10,
          ease: "power2.in",
        },
        2.88
      );
    }

    if (heroPhoneRightRef.current) {
      masterTl.to(
        heroPhoneRightRef.current,
        {
          x: -Math.min(width * 0.45, 620),
          opacity: 0,
          filter: "blur(10px)",
          duration: 0.12,
          ease: "power2.in",
        },
        2.88
      );
    }

    if (globeWrapperRef.current) {
      masterTl.to(
        globeWrapperRef.current,
        {
          scale: 0.3,
          opacity: 0,
          filter: "blur(8px)",
          duration: 0.10,
          ease: "power2.in",
        },
        2.88
      );
    }

    // ── STAGE 29A: SCENE 8 "RESPONSIVE FOR ALL DEVICES" DESKTOP ENTERS (3.00 -> 3.20) ──
    if (responsiveStageRef.current) {
      masterTl.to(
        responsiveStageRef.current,
        {
          opacity: 1,
          duration: 0.02,
        },
        3.00
      );
    }

    // Soft Pastel Green Ambient Background Wash
    if (responsiveBgTintRef.current) {
      masterTl.to(
        responsiveBgTintRef.current,
        {
          opacity: 1,
          duration: 0.16,
          ease: "power2.out",
        },
        3.00
      );
    }

    // Left Side: 3D Claymorphic Desktop Chassis Setup Rises
    if (deviceStageWrapperRef.current) {
      masterTl.to(
        deviceStageWrapperRef.current,
        {
          y: 0,
          scale: 1.0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.18,
          ease: "back.out(1.2)",
        },
        3.00
      );
    }

    // Floating 3D Satellites Pop In
    if (responsiveFloatingRef.current) {
      masterTl.to(
        responsiveFloatingRef.current,
        {
          scale: 1.0,
          opacity: 1,
          duration: 0.15,
          ease: "back.out(1.4)",
        },
        3.06
      );
    }

    // Right Side: Headline "Responsive for All Devices" Rises
    if (responsiveTitleRef.current) {
      masterTl.to(
        responsiveTitleRef.current,
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.14,
          ease: "power2.out",
        },
        3.04
      );
    }

    // Subheadline with "across every desktop"
    if (responsiveSubheadlineRef.current) {
      masterTl.to(
        responsiveSubheadlineRef.current,
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.14,
          ease: "power2.out",
        },
        3.08
      );
    }

    // ── STAGE 29B: 3D MORPH DESKTOP -> LAPTOP & SUBHEADLINE ELEVATES TO HEADLINE (3.18 -> 3.36) ──
    // 1. Pure-Code Chassis Morphing to Laptop
    if (monitorStandRef.current) {
      masterTl.to(
        monitorStandRef.current,
        {
          scaleY: 0,
          opacity: 0,
          y: 10,
          duration: 0.12,
          ease: "power2.inOut",
        },
        3.18
      );
    }

    if (screenFrameRef.current) {
      masterTl.to(
        screenFrameRef.current,
        {
          rotateX: 18,
          scale: 0.94,
          y: -26,
          duration: 0.16,
          ease: "power2.inOut",
        },
        3.18
      );
    }

    if (laptopBaseRef.current) {
      masterTl.to(
        laptopBaseRef.current,
        {
          scaleY: 1,
          opacity: 1,
          rotateX: 62,
          duration: 0.18,
          ease: "back.out(1.2)",
        },
        3.20
      );
    }

    if (deskKeyboardRef.current) {
      masterTl.to(
        deskKeyboardRef.current,
        {
          y: -22,
          opacity: 0,
          duration: 0.10,
          ease: "power2.in",
        },
        3.18
      );
    }

    // 2. Right Side: Headline departs upwards smoothly
    if (responsiveTitleRef.current) {
      masterTl.to(
        responsiveTitleRef.current,
        {
          y: -36,
          opacity: 0,
          filter: "blur(8px)",
          duration: 0.14,
          ease: "power2.in",
        },
        3.18
      );
    }

    // Subheadline smoothly glides up into primary headline position and expands into headline stature!
    if (responsiveSubheadlineRef.current) {
      masterTl.to(
        responsiveSubheadlineRef.current,
        {
          y: -60,
          scale: 1.25,
          duration: 0.16,
          ease: "power2.out",
        },
        3.20
      );
    }

    // 3D Split-Flap Rotary Tumbler: desktop flips up into depth -> laptop flips down into view
    if (deviceWordDesktopRef.current) {
      masterTl.to(
        deviceWordDesktopRef.current,
        {
          rotateX: 85,
          y: -25,
          opacity: 0,
          filter: "blur(4px)",
          duration: 0.09,
          ease: "power2.in",
        },
        3.20
      );
    }
    if (deviceWordLaptopRef.current) {
      masterTl.to(
        deviceWordLaptopRef.current,
        {
          rotateX: 0,
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.12,
          ease: "back.out(1.4)",
        },
        3.22
      );
    }

    // ── STAGE 29C: SCROLL TO REVEAL "ZERO LOST" ON 3D CYLINDER (3.36 -> 3.52) ──
    if (cylinderZeroLostRef.current) {
      masterTl.to(
        cylinderZeroLostRef.current,
        {
          rotateX: 0,
          z: 0,
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.12,
          ease: "power2.out",
        },
        3.36
      );
    }

    // ── STAGE 29D: 3D MORPH LAPTOP -> SOFT PHONE & SCROLL TO REVEAL "MOBILE SALES" (3.52 -> 3.76) ──
    // 1. Laptop folds closed and chassis morphs to sleek phone
    if (laptopBaseRef.current) {
      masterTl.to(
        laptopBaseRef.current,
        {
          scaleY: 0,
          opacity: 0,
          rotateX: 85,
          duration: 0.10,
          ease: "power2.in",
        },
        3.52
      );
    }

    if (screenFrameRef.current) {
      masterTl.to(
        screenFrameRef.current,
        {
          rotateX: 0,
          rotateY: -10,
          rotateZ: -1,
          width: 230,
          height: 420,
          borderRadius: 42,
          y: 0,
          scale: 1.0,
          duration: 0.16,
          ease: "power3.inOut",
        },
        3.52
      );
    }

    // Inner UI Morph: Desktop dashboard shrinks out -> Soft Clay Phone blooms in
    if (desktopScreenUIRef.current) {
      masterTl.to(
        desktopScreenUIRef.current,
        {
          opacity: 0,
          scale: 0.85,
          duration: 0.08,
          ease: "power2.in",
        },
        3.52
      );
    }
    if (phoneScreenUIRef.current) {
      masterTl.to(
        phoneScreenUIRef.current,
        {
          opacity: 1,
          scale: 1.0,
          duration: 0.12,
          ease: "back.out(1.2)",
        },
        3.56
      );
    }

    // 2. Right Side: 3D Tumbler flips laptop -> phone
    if (deviceWordLaptopRef.current) {
      masterTl.to(
        deviceWordLaptopRef.current,
        {
          rotateX: 85,
          y: -25,
          opacity: 0,
          filter: "blur(4px)",
          duration: 0.09,
          ease: "power2.in",
        },
        3.52
      );
    }
    if (deviceWordPhoneRef.current) {
      masterTl.to(
        deviceWordPhoneRef.current,
        {
          rotateX: 0,
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.12,
          ease: "back.out(1.4)",
        },
        3.54
      );
    }

    // 3. Scroll to reveal "Mobile Sales" with mini icon on 3D cylinder
    if (cylinderMobileSalesRef.current) {
      masterTl.to(
        cylinderMobileSalesRef.current,
        {
          rotateX: 0,
          z: 0,
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.12,
          ease: "power2.out",
        },
        3.58
      );
    }

    // Signature Yellow Chalk Highlighter wipes across "Mobile Sales"
    if (responsiveChalkRef.current) {
      masterTl.to(
        responsiveChalkRef.current,
        {
          scaleX: 1,
          opacity: 1,
          duration: 0.09,
          ease: "power2.out",
        },
        3.66
      );
    }

    // ── STAGE 29E: IMPLOSION TO DOT & TRANSFORMATION TO BLINKING CURSOR (3.76 -> 3.96) ──
    // Elements compress towards center
    if (deviceStageWrapperRef.current) {
      masterTl.to(
        deviceStageWrapperRef.current,
        {
          scale: 0.06,
          x: 260,
          opacity: 0,
          filter: "blur(8px)",
          duration: 0.13,
          ease: "power2.in",
        },
        3.76
      );
    }

    if (responsiveTextSideRef.current) {
      masterTl.to(
        responsiveTextSideRef.current,
        {
          scale: 0.06,
          x: -260,
          opacity: 0,
          filter: "blur(8px)",
          duration: 0.13,
          ease: "power2.in",
        },
        3.76
      );
    }

    if (responsiveFloatingRef.current) {
      masterTl.to(
        responsiveFloatingRef.current,
        {
          scale: 0,
          opacity: 0,
          duration: 0.08,
          ease: "power2.in",
        },
        3.76
      );
    }

    if (responsiveBgTintRef.current) {
      masterTl.to(
        responsiveBgTintRef.current,
        {
          opacity: 0.35,
          duration: 0.12,
        },
        3.76
      );
    }

    // Dot pops into existence at center
    if (climaxContainerRef.current) {
      masterTl.to(
        climaxContainerRef.current,
        {
          opacity: 1,
          duration: 0.02,
        },
        3.84
      );
    }

    if (climaxDotRef.current) {
      masterTl.to(
        climaxDotRef.current,
        {
          scale: 1,
          opacity: 1,
          duration: 0.06,
          ease: "back.out(1.8)",
        },
        3.84
      );

      // Dot glides to left and stretches into typing cursor
      masterTl.to(
        climaxDotRef.current,
        {
          x: -240,
          width: 3.5,
          height: 46,
          borderRadius: 2,
          opacity: 0,
          duration: 0.10,
          ease: "power2.out",
        },
        3.89
      );
    }

    // ── STAGE 29F: TYPEWRITER STREAM & PENCIL LOOP AROUND BROKEN SCREEN (3.96 -> 4.34) ──
    // "So you never lose a "
    if (climaxTextLeadRef.current) {
      masterTl.to(
        climaxTextLeadRef.current,
        {
          clipPath: "inset(0 0% 0 0)",
          opacity: 1,
          duration: 0.08,
          ease: "none",
        },
        3.96
      );
    }

    // "paying"
    if (climaxWordPayingRef.current) {
      masterTl.to(
        climaxWordPayingRef.current,
        {
          clipPath: "inset(0 0% 0 0)",
          opacity: 1,
          duration: 0.05,
          ease: "none",
        },
        4.04
      );
    }

    // Glow underline sweeps under "paying"
    if (climaxPayingHighlightRef.current) {
      masterTl.to(
        climaxPayingHighlightRef.current,
        {
          scaleX: 1,
          opacity: 1,
          duration: 0.08,
          ease: "power2.out",
        },
        4.09
      );
    }

    // " customer to a "
    if (climaxTextMidRef.current) {
      masterTl.to(
        climaxTextMidRef.current,
        {
          clipPath: "inset(0 0% 0 0)",
          opacity: 1,
          duration: 0.06,
          ease: "none",
        },
        4.11
      );
    }

    // "broken screen"
    if (climaxWordBrokenRef.current) {
      masterTl.to(
        climaxWordBrokenRef.current,
        {
          clipPath: "inset(0 0% 0 0)",
          opacity: 1,
          duration: 0.07,
          ease: "none",
        },
        4.17
      );
    }

    // Orange Pencil flies in and sketches circle around "broken screen"
    if (climaxPencilRef.current) {
      masterTl.to(
        climaxPencilRef.current,
        {
          scale: 1,
          opacity: 1,
          duration: 0.06,
          ease: "back.out(1.4)",
        },
        4.22
      );

      masterTl.to(
        climaxPencilRef.current,
        {
          x: 0,
          y: -8,
          rotate: 15,
          duration: 0.14,
          ease: "power1.inOut",
        },
        4.22
      );
    }

    if (climaxPencilCircleRef.current) {
      masterTl.to(
        climaxPencilCircleRef.current,
        {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 0.14,
          ease: "power1.inOut",
        },
        4.22
      );
    }

    // ── STAGE 30: RESPONSIVE MAJESTIC READING HOLD (4.34 -> 4.55) ──────────────
    masterTl.to({}, { duration: 0.21 });

    // ── STAGE 31A: SCENE 8 EXITS & SCENE 9 ENTERS (4.55 -> 4.75) ──────────────
    // Scene 8 Climax smoothly recedes
    if (climaxContainerRef.current) {
      masterTl.to(
        climaxContainerRef.current,
        {
          y: -40,
          scale: 0.92,
          opacity: 0,
          filter: "blur(10px)",
          duration: 0.14,
          ease: "power2.in",
        },
        4.55
      );
    }

    if (responsiveStageRef.current) {
      masterTl.to(
        responsiveStageRef.current,
        {
          opacity: 0,
          duration: 0.08,
        },
        4.55
      );
    }

    if (responsiveBgTintRef.current) {
      masterTl.to(
        responsiveBgTintRef.current,
        {
          opacity: 0,
          duration: 0.14,
        },
        4.55
      );
    }

    // Scene 9: "SEO Top In Google Search" Stage Rises
    if (seoStageRef.current) {
      masterTl.to(
        seoStageRef.current,
        {
          opacity: 1,
          duration: 0.02,
        },
        4.66
      );
    }

    // Google Tri-Color Green/Blue/Yellow Deep Ambient Wash Blooms
    if (seoBgWashRef.current) {
      masterTl.to(
        seoBgWashRef.current,
        {
          opacity: 1,
          duration: 0.20,
          ease: "power2.out",
        },
        4.66
      );
    }

    // ── STAGE 31B: GOOGLE TILE FLIGHT & DOCKING INTO CAVITY (4.68 -> 4.90) ────
    if (seoGoogleTileRef.current) {
      masterTl.to(
        seoGoogleTileRef.current,
        {
          y: 0,
          scale: 1.0,
          rotate: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.18,
          ease: "back.out(1.2)",
        },
        4.68
      );
    }

    // Shockwave ripple upon docking
    if (seoShockwaveRef.current) {
      masterTl.to(
        seoShockwaveRef.current,
        {
          scale: 2.2,
          opacity: 0.75,
          duration: 0.04,
          ease: "power2.out",
        },
        4.82
      );
      masterTl.to(
        seoShockwaveRef.current,
        {
          opacity: 0,
          duration: 0.10,
          ease: "power2.in",
        },
        4.86
      );
    }

    // ── STAGE 31C: PHYSICAL KICK LEFT & "SEO Top" SLIDES OUT (4.90 -> 5.10) ────
    // 1. Google Tile Wind-up & Kick Left
    if (seoGoogleTileRef.current) {
      masterTl.to(
        seoGoogleTileRef.current,
        {
          rotate: 4,
          x: 6,
          duration: 0.03,
          ease: "power1.in",
        },
        4.90
      );
      masterTl.to(
        seoGoogleTileRef.current,
        {
          rotate: -15,
          x: -24,
          duration: 0.05,
          ease: "power3.out",
        },
        4.93
      );
      masterTl.to(
        seoGoogleTileRef.current,
        {
          rotate: 0,
          x: 0,
          duration: 0.10,
          ease: "elastic.out(1, 0.45)",
        },
        4.98
      );
    }

    // 2. "SEO Top" slides out completely to the left
    if (seoLeftTextRef.current) {
      masterTl.to(
        seoLeftTextRef.current,
        {
          x: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.16,
          ease: "power2.out",
        },
        4.92
      );
    }

    // ── STAGE 31D: PHYSICAL KICK RIGHT & "In Google Search" SLIDES OUT (5.10 -> 5.30) ──
    // 1. Google Tile Wind-up & Kick Right
    if (seoGoogleTileRef.current) {
      masterTl.to(
        seoGoogleTileRef.current,
        {
          rotate: -4,
          x: -6,
          duration: 0.03,
          ease: "power1.in",
        },
        5.10
      );
      masterTl.to(
        seoGoogleTileRef.current,
        {
          rotate: 15,
          x: 24,
          duration: 0.05,
          ease: "power3.out",
        },
        5.13
      );
      masterTl.to(
        seoGoogleTileRef.current,
        {
          rotate: 0,
          x: 0,
          duration: 0.10,
          ease: "elastic.out(1, 0.45)",
        },
        5.18
      );
    }

    // 2. "In Google Search" slides out completely to the right
    if (seoRightTextRef.current) {
      masterTl.to(
        seoRightTextRef.current,
        {
          x: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.16,
          ease: "power2.out",
        },
        5.12
      );
    }

    // ── STAGE 32: MAJESTIC REST & HERO READING HOLD (5.30 -> 5.65) ────────────
    masterTl.to({}, { duration: 0.35 });

    // ── STAGE 33A: SCENE 9 EXITS & SCENE 10 ENTERS (5.65 -> 5.85) ─────────────
    // Scene 9 left and right text fade and ascend smoothly
    if (seoLeftTextRef.current) {
      masterTl.to(
        seoLeftTextRef.current,
        {
          y: -24,
          scale: 0.92,
          opacity: 0,
          filter: "blur(8px)",
          duration: 0.12,
          ease: "power2.in",
        },
        5.65
      );
    }
    if (seoRightTextRef.current) {
      masterTl.to(
        seoRightTextRef.current,
        {
          y: -24,
          scale: 0.92,
          opacity: 0,
          filter: "blur(8px)",
          duration: 0.12,
          ease: "power2.in",
        },
        5.65
      );
    }
    if (seoBgWashRef.current) {
      masterTl.to(
        seoBgWashRef.current,
        {
          opacity: 0,
          duration: 0.15,
        },
        5.65
      );
    }
    if (seoGoogleTileRef.current) {
      masterTl.to(
        seoGoogleTileRef.current,
        {
          scale: 0.75,
          opacity: 0,
          duration: 0.10,
        },
        5.68
      );
    }
    if (seoSocKetRef.current) {
      masterTl.to(
        seoSocKetRef.current,
        {
          scale: 0.75,
          opacity: 0,
          duration: 0.10,
        },
        5.68
      );
    }
    if (seoStageRef.current) {
      masterTl.to(
        seoStageRef.current,
        {
          opacity: 0,
          duration: 0.05,
        },
        5.76
      );
    }

    // Scene 10 Stage & Luminous Green/Yellow/Blue Water-Wave Wash Blooms
    if (autopilotStageRef.current) {
      masterTl.to(
        autopilotStageRef.current,
        {
          opacity: 1,
          duration: 0.04,
        },
        5.68
      );
    }
    if (autopilotBgWashRef.current) {
      masterTl.to(
        autopilotBgWashRef.current,
        {
          opacity: 1,
          duration: 0.22,
          ease: "power2.out",
        },
        5.68
      );
    }

    // Tablet device frame scales and enters with sleek perspective
    if (autopilotLeftColRef.current) {
      masterTl.to(
        autopilotLeftColRef.current,
        {
          scale: 1,
          y: 0,
          opacity: 1,
          duration: 0.20,
          ease: "back.out(1.15)",
        },
        5.70
      );
    }

    // ── STAGE 33B: TOP HEADLINE & 3D ROBOT "autoPilot" EMERGE (5.85 -> 6.06) ───
    if (autopilotTopHeaderRef.current) {
      masterTl.to(
        autopilotTopHeaderRef.current,
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.16,
          ease: "power2.out",
        },
        5.85
      );
    }
    if (autopilotRobotRef.current) {
      masterTl.to(
        autopilotRobotRef.current,
        {
          scale: 1,
          y: 0,
          rotate: 0,
          opacity: 1,
          duration: 0.20,
          ease: "back.out(1.4)",
        },
        5.88
      );
    }

    // ── STAGE 33C: GOOGLE SEARCH AUTO-TYPES "Best Software in UK" (6.06 -> 6.28) ─
    if (autopilotTypedQueryRef.current) {
      masterTl.to(
        autopilotTypedQueryRef.current,
        {
          width: "100%",
          duration: 0.22,
          ease: "steps(22)",
        },
        6.06
      );
    }

    // ── STAGE 33D: REAL GOOGLE AI OVERVIEW & ORGANIC RESULT UNFOLD (6.28 -> 6.55) ──
    if (autopilotAiOverviewRef.current) {
      masterTl.to(
        autopilotAiOverviewRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.20,
          ease: "power2.out",
        },
        6.28
      );
    }
    if (autopilotOrganicResultRef.current) {
      masterTl.to(
        autopilotOrganicResultRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.18,
          ease: "power2.out",
        },
        6.38
      );
    }

    // ── STAGE 33E: RIGHT SIDE KINETIC COPY UNVEILS (6.45 -> 6.75) ─────────────
    if (autopilotRightCopyRef.current) {
      masterTl.to(
        autopilotRightCopyRef.current,
        {
          x: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.24,
          ease: "power3.out",
        },
        6.45
      );
    }

    // ── STAGE 34: 24/7 AUTOPILOT MAJESTIC CLIMAX READING HOLD (6.75 -> 7.20) ──
    masterTl.to({}, { duration: 0.45 });

    // ═════════════════════════════════════════════════════════════════════════
    // ── STAGE 35A: SCENE 11 - "VISIBLE IN AI" ENTRANCE & SOFT WHITE/BLUE AMBIENCE (7.20 -> 7.45) ─
    // ═════════════════════════════════════════════════════════════════════════
    // Scene 10 smoothly fades out
    if (autopilotStageRef.current) {
      masterTl.to(
        autopilotStageRef.current,
        {
          opacity: 0,
          y: -25,
          duration: 0.20,
          ease: "power2.inOut",
        },
        7.20
      );
    }

    // Scene 11 Stage activates & Soft White/Blue Ambience blooms
    if (aiStageRef.current) {
      masterTl.to(
        aiStageRef.current,
        {
          opacity: 1,
          duration: 0.04,
        },
        7.20
      );
    }
    if (aiBgWashRef.current) {
      masterTl.to(
        aiBgWashRef.current,
        {
          opacity: 1,
          duration: 0.26,
          ease: "power2.out",
        },
        7.20
      );
    }

    // "Visible in AI" enters cleanly from bottom with blur to top header position
    if (aiVisibleTitleRef.current) {
      masterTl.to(
        aiVisibleTitleRef.current,
        {
          scale: 1.0,
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.24,
          ease: "power3.out",
        },
        7.22
      );
    }

    // Dynamic Subtitle 1: "Recommended First By Gemini" reveals under headline
    if (aiSubtitleGeminiRef.current) {
      masterTl.to(
        aiSubtitleGeminiRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.18,
          ease: "power2.out",
        },
        7.42
      );
    }

    // ── STAGE 35B: BOTTOM HALF-SUBMERGED 3D CARDS CAROUSEL RISES (7.42 -> 7.72) ─
    if (aiCardsCarouselRef.current) {
      masterTl.to(
        aiCardsCarouselRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.24,
          ease: "back.out(1.1)",
        },
        7.42
      );
    }

    // ── STAGE 35C: 3D ROLLING DRUM ROLL 1 (GEMINI ROLLS BACK, CHATGPT ROLLS FRONT) (7.74 -> 8.04) ─
    // Subtitle transitions to ChatGPT
    if (aiSubtitleGeminiRef.current) {
      masterTl.to(
        aiSubtitleGeminiRef.current,
        {
          opacity: 0,
          y: -8,
          duration: 0.12,
        },
        7.74
      );
    }
    if (aiSubtitleGptRef.current) {
      masterTl.to(
        aiSubtitleGptRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.15,
        },
        7.82
      );
    }

    // Gemini rolls along circle to left
    if (aiCardGeminiRef.current) {
      masterTl.to(
        aiCardGeminiRef.current,
        {
          x: -240,
          rotateY: 26,
          scale: 0.9,
          z: -40,
          opacity: 0.9,
          duration: 0.24,
          ease: "power2.inOut",
        },
        7.74
      );
    }
    // ChatGPT rolls from left into FRONT CENTER
    if (aiCardGptRef.current) {
      masterTl.to(
        aiCardGptRef.current,
        {
          x: 0,
          rotateY: 0,
          scale: 1.05,
          z: 60,
          opacity: 1,
          duration: 0.24,
          ease: "power2.inOut",
        },
        7.74
      );
    }
    // Claude maintains clear right visibility
    if (aiCardClaudeRef.current) {
      masterTl.to(
        aiCardClaudeRef.current,
        {
          x: 240,
          rotateY: -26,
          scale: 0.9,
          z: -40,
          opacity: 0.9,
          duration: 0.24,
          ease: "power2.inOut",
        },
        7.74
      );
    }

    // ── STAGE 35D: 3D ROLLING DRUM ROLL 2 (CHATGPT ROLLS BACK, CLAUDE ROLLS FRONT) (8.08 -> 8.38) ─
    // Subtitle transitions to Claude
    if (aiSubtitleGptRef.current) {
      masterTl.to(
        aiSubtitleGptRef.current,
        {
          opacity: 0,
          y: -8,
          duration: 0.12,
        },
        8.08
      );
    }
    if (aiSubtitleClaudeRef.current) {
      masterTl.to(
        aiSubtitleClaudeRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.15,
        },
        8.16
      );
    }

    // ChatGPT rolls to left
    if (aiCardGptRef.current) {
      masterTl.to(
        aiCardGptRef.current,
        {
          x: -240,
          rotateY: 26,
          scale: 0.9,
          z: -40,
          opacity: 0.9,
          duration: 0.24,
          ease: "power2.inOut",
        },
        8.08
      );
    }
    // Claude rolls from right into FRONT CENTER
    if (aiCardClaudeRef.current) {
      masterTl.to(
        aiCardClaudeRef.current,
        {
          x: 0,
          rotateY: 0,
          scale: 1.05,
          z: 60,
          opacity: 1,
          duration: 0.24,
          ease: "power2.inOut",
        },
        8.08
      );
    }
    // Gemini shifts to right
    if (aiCardGeminiRef.current) {
      masterTl.to(
        aiCardGeminiRef.current,
        {
          x: 240,
          rotateY: -26,
          scale: 0.9,
          z: -40,
          opacity: 0.9,
          duration: 0.24,
          ease: "power2.inOut",
        },
        8.08
      );
    }

    // ── STAGE 35E: CARDS STACK & TRANSITION TO SPLIT PRESENTATION GRID (8.42 -> 8.76) ─
    // Uno card stack
    if (aiCardGptRef.current) {
      masterTl.to(
        aiCardGptRef.current,
        {
          x: 0,
          rotateY: 0,
          scale: 1.0,
          opacity: 0,
          duration: 0.18,
          ease: "power2.inOut",
        },
        8.42
      );
    }
    if (aiCardGeminiRef.current) {
      masterTl.to(
        aiCardGeminiRef.current,
        {
          x: 0,
          rotateY: 0,
          scale: 1.0,
          opacity: 0,
          duration: 0.18,
          ease: "power2.inOut",
        },
        8.42
      );
    }
    if (aiCardClaudeRef.current) {
      masterTl.to(
        aiCardClaudeRef.current,
        {
          scale: 1.0,
          duration: 0.18,
          ease: "power2.inOut",
        },
        8.42
      );
    }

    // Bottom carousel & top header sink/fade out cleanly
    if (aiCardsCarouselRef.current) {
      masterTl.to(
        aiCardsCarouselRef.current,
        {
          y: 200,
          opacity: 0,
          duration: 0.20,
          ease: "power2.in",
        },
        8.52
      );
    }
    if (aiHeaderContainerRef.current) {
      masterTl.to(
        aiHeaderContainerRef.current,
        {
          y: -40,
          opacity: 0,
          duration: 0.18,
          ease: "power2.in",
        },
        8.52
      );
    }

    // Split Presentation Grid reveals (Left: Chat Canvas, Right: Kinetic Copy)
    if (aiPresentationGridRef.current) {
      masterTl.to(
        aiPresentationGridRef.current,
        {
          opacity: 1,
          duration: 0.12,
        },
        8.58
      );
    }
    if (aiChatCanvasRef.current) {
      masterTl.to(
        aiChatCanvasRef.current,
        {
          scale: 1.0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.24,
          ease: "back.out(1.12)",
        },
        8.58
      );
    }
    if (aiRightCopyRef.current) {
      masterTl.to(
        aiRightCopyRef.current,
        {
          x: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.26,
          ease: "power3.out",
        },
        8.64
      );
    }

    // ── STAGE 35F: INPUT BAR AUTO-TYPES "Best Software in UK" (8.80 -> 9.04) ─
    if (aiChatInputTypedTextRef.current) {
      masterTl.to(
        aiChatInputTypedTextRef.current,
        {
          width: "100%",
          duration: 0.22,
          ease: "steps(19)",
        },
        8.80
      );
    }

    // ── STAGE 35G: SEND BUTTON CLICKS & DISPATCHES USER BUBBLE (9.04 -> 9.18) ──
    if (aiChatSendBtnRef.current) {
      masterTl.to(
        aiChatSendBtnRef.current,
        {
          scale: 0.85,
          duration: 0.06,
          yoyo: true,
          repeat: 1,
        },
        9.04
      );
    }
    if (aiChatInputTypedTextRef.current) {
      masterTl.to(
        aiChatInputTypedTextRef.current,
        {
          opacity: 0,
          duration: 0.06,
        },
        9.08
      );
    }
    if (aiChatUserBubbleRef.current) {
      masterTl.to(
        aiChatUserBubbleRef.current,
        {
          y: 0,
          opacity: 1,
          scale: 1.0,
          duration: 0.14,
          ease: "back.out(1.3)",
        },
        9.10
      );
    }

    // ── STAGE 35H: REAL-TIME AI BULLET-POINT RESPONSE STREAMS IN (9.20 -> 9.45) ─
    if (aiChatStreamResponseRef.current) {
      masterTl.to(
        aiChatStreamResponseRef.current,
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.25,
          ease: "power2.out",
        },
        9.20
      );
    }

    // ── STAGE 36: SCENE 11 VISIBLE IN AI CLIMAX READING HOLD (9.45 -> 9.85) ────
    masterTl.to({}, { duration: 0.40 });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", onScroll);
      canvasObserver.disconnect();
      cancelAnimationFrame(animFrameId);
      masterTl.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === section) t.kill();
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="whatyoure-getting"
      className="relative w-full h-screen h-[100dvh] overflow-hidden bg-[#FAFBFD] text-slate-900 select-none"
    >
      {/* 1. Living Volumetric Fluid Smoke Chamber Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* 2. Delicate 4-Point Living & Sparkling Stars (Twinkle, scale pulse, and subtle drift) */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <style>{`
          @keyframes starTwinkle {
            0%, 100% {
              transform: scale(0.65) rotate(0deg);
              opacity: 0.22;
            }
            50% {
              transform: scale(1.35) rotate(14deg);
              opacity: 0.85;
            }
          }
          @keyframes starDriftSpin {
            0% {
              transform: scale(0.8) rotate(0deg) translate(0px, 0px);
              opacity: 0.3;
            }
            50% {
              transform: scale(1.22) rotate(180deg) translate(5px, -6px);
              opacity: 0.85;
            }
            100% {
              transform: scale(0.8) rotate(360deg) translate(0px, 0px);
              opacity: 0.3;
            }
          }
          @keyframes starPulseFloat {
            0%, 100% {
              transform: scale(0.7) translateY(0px);
              opacity: 0.22;
            }
            50% {
              transform: scale(1.25) translateY(-7px);
              opacity: 0.8;
            }
          }
          @keyframes globeFloat {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-8px) rotate(2deg);
            }
          }
          @keyframes spaceFloat1 {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-15px) rotate(3deg);
            }
          }
          @keyframes spaceFloat2 {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-18px) rotate(-3deg);
            }
          }
          @keyframes spaceFloat3 {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-12px) rotate(2.5deg);
            }
          }
          @keyframes phoneFloatLeft {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-14px) rotate(-2deg);
            }
          }
          @keyframes phoneFloatRight {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-16px) rotate(2deg);
            }
          }
          @keyframes clayFloatSlow {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-8px) rotate(1.5deg);
            }
          }
          @keyframes clayGearPulse {
            0%, 100% {
              transform: rotate(0deg) scale(1);
            }
            50% {
              transform: rotate(180deg) scale(1.05);
            }
          }
          @keyframes laptopFloat {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-10px) rotate(1deg);
            }
          }
          @keyframes mobileFloat {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-12px) rotate(-1.5deg);
            }
          }
          @keyframes cursorBlink {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0;
            }
          }
          @keyframes brokenJitter {
            0%, 100% {
              transform: translate(0, 0) skew(0deg);
            }
            20% {
              transform: translate(-1px, 1px) skew(-2deg);
            }
            40% {
              transform: translate(1.5px, -0.5px) skew(1.5deg);
            }
            60% {
              transform: translate(-1px, -1px) skew(-1deg);
            }
            80% {
              transform: translate(1px, 1px) skew(2deg);
            }
          }
        `}</style>
        {BACKGROUND_STARS.map((star, idx) => (
          <div
            key={idx}
            className="absolute will-change-transform"
            style={{
              top: star.top,
              left: star.left,
              animation: `${star.anim} ${star.dur} ease-in-out infinite`,
              animationDelay: `${star.delay}s`,
            }}
          >
            <svg
              width={star.size}
              height={star.size}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-sky-400 drop-shadow-[0_0_6px_rgba(56,189,248,0.75)]"
            >
              <path
                d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z"
                fill="currentColor"
              />
            </svg>
          </div>
        ))}
      </div>

      {/* 3. Subtle Frost Glass Vignette Border */}
      <div
        className="absolute inset-0 pointer-events-none z-15"
        style={{
          boxShadow: "inset 0 0 110px rgba(250, 251, 253, 0.85)",
        }}
      />

      {/* 4. Cinematic Kinetic Typography Stage (3D Camera Viewport Stage) */}
      <div 
        className="relative z-20 w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8"
        style={{
          perspective: "1400px",
          perspectiveOrigin: "50% 45%",
        }}
      >
        {/* The Core Headline: 'Your Unfair Advantage' in Ubuntu Medium */}
        <div
          ref={phraseContainerRef}
          className="inline-flex items-baseline justify-center flex-wrap md:flex-nowrap gap-x-3 sm:gap-x-4 md:gap-x-5 lg:gap-x-6 tracking-tight text-center will-change-transform"
          style={{
            fontFamily: "'Ubuntu', sans-serif",
            fontSize: "clamp(2.2rem, 5.2vw, 4.4rem)",
            lineHeight: 1.15,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Word 1: 'Your' (Zooms to center, glides left, then tumbles backwards into depth) */}
          <span
            ref={wordYourRef}
            className="inline-block ubuntu-medium text-slate-800 will-change-transform shrink-0"
            style={{
              color: "#1E293B",
              letterSpacing: "-0.02em",
              textShadow: "0 2px 20px rgba(30, 41, 59, 0.08)",
              transformStyle: "preserve-3d",
              transformOrigin: "50% 100% -40px",
            }}
          >
            Your
          </span>

          {/* Word 2: 'Unfair' (Emerges letter-by-letter, then tumbles backwards with momentum) */}
          <span
            ref={wordUnfairRef}
            className="inline-flex items-baseline overflow-visible py-1 px-0.5 will-change-transform shrink-0"
            style={{
              transformStyle: "preserve-3d",
              transformOrigin: "50% 100% -40px",
            }}
          >
            {UNFAIR_LETTERS.map((char, index) => (
              <span
                key={index}
                ref={(el) => {
                  unfairLetterRefs.current[index] = el;
                }}
                className="inline-block ubuntu-medium will-change-transform"
                style={{
                  color: "#1E293B",
                  background:
                    "linear-gradient(135deg, #1E293B 0%, #334155 38%, #0284C7 72%, #BE123C 92%, #1E293B 100%)",
                  backgroundSize: "220% 220%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: "-0.02em",
                }}
              >
                {char}
              </span>
            ))}
          </span>

          {/* Word 3: 'Advantage' (Emerges letter-by-letter, then completes the 3D tumble cascade) */}
          <span
            ref={wordAdvantageRef}
            className="inline-flex items-baseline overflow-visible py-1 px-0.5 will-change-transform shrink-0"
            style={{
              transformStyle: "preserve-3d",
              transformOrigin: "50% 100% -40px",
            }}
          >
            {ADVANTAGE_LETTERS.map((char, index) => (
              <span
                key={index}
                ref={(el) => {
                  advantageLetterRefs.current[index] = el;
                }}
                className="inline-block ubuntu-medium will-change-transform"
                style={{
                  color: "#1E293B",
                  background:
                    "linear-gradient(135deg, #1E293B 0%, #334155 35%, #BE123C 68%, #0284C7 88%, #1E293B 100%)",
                  backgroundSize: "220% 220%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: "-0.02em",
                }}
              >
                {char}
              </span>
            ))}
          </span>
        </div>

        {/* Sophisticated Editorial Subtitle (Hidden per user request) */}
        <div ref={subtextRef} className="hidden" />

        {/* 5. The 3D Globe & Struck Interactive Website Stage */}
        <div
          ref={globeStageRef}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-30 px-4 sm:px-6 md:px-8"
        >
          <div className="relative flex items-center justify-center gap-3 sm:gap-4 md:gap-6 max-w-5xl">
            {/* The Floating 3D worldweb.png Globe */}
            <div
              ref={globeWrapperRef}
              className="relative flex items-center justify-center shrink-0 will-change-transform z-20"
            >
              {/* Soft Luminous Atmosphere Cyan/Sky Halo */}
              <div
                className="absolute w-[300px] h-[300px] rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(56, 189, 248, 0.28) 0%, rgba(186, 230, 253, 0.12) 55%, transparent 75%)",
                  filter: "blur(26px)",
                }}
              />

              {/* Asset: worldweb.png with independent gentle levitation */}
              <div className="animate-[globeFloat_4s_ease-in-out_infinite]">
                <img
                  src="/worldweb.png"
                  alt="Interactive Web 3D Globe"
                  className="relative w-[180px] sm:w-[220px] md:w-[260px] h-auto object-contain drop-shadow-[0_20px_40px_rgba(14,165,233,0.22)]"
                />
              </div>
            </div>

            {/* The Single-Line Title-Case Headline: 'Interactive Website' */}
            <div
              ref={interactiveTextContainerRef}
              className="flex items-center gap-2 sm:gap-2.5 md:gap-3 flex-nowrap whitespace-nowrap will-change-transform z-10"
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Word 1: Interactive (Emerge, overshoot, settle) */}
              <span
                ref={wordInteractiveRef}
                className="inline-block ubuntu-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 tracking-tight will-change-transform"
                style={{
                  fontFamily: "'Ubuntu', sans-serif",
                  letterSpacing: "-0.02em",
                  textShadow: "0 2px 20px rgba(30, 41, 59, 0.08)",
                }}
              >
                Interactive
              </span>

              {/* Word 2: Website (3D Cylindrical Drum Roll-Up Letter-by-Letter) */}
              <span
                ref={websiteContainerRef}
                className="inline-flex items-baseline will-change-transform"
                style={{
                  perspective: "1000px",
                  transformStyle: "preserve-3d",
                }}
              >
                {WEBSITE_LETTERS.map((char, index) => (
                  <span
                    key={index}
                    ref={(el) => {
                      websiteLetterRefs.current[index] = el;
                    }}
                    className="inline-block ubuntu-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl will-change-transform bg-gradient-to-r from-sky-500 via-sky-600 to-indigo-600 bg-clip-text text-transparent"
                    style={{
                      fontFamily: "'Ubuntu', sans-serif",
                      letterSpacing: "-0.02em",
                      transformStyle: "preserve-3d",
                      transformOrigin: "50% 100% -25px",
                    }}
                  >
                    {char}
                  </span>
                ))}
              </span>
            </div>
          </div>
        </div>

        {/* Top Pinned Badge: 'Unbreakable Visitor Attention' */}
        <div
          ref={attentionBadgeRef}
          className="fixed top-8 sm:top-10 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-slate-200/80 shadow-[0_4px_20px_rgba(15,23,42,0.06)] pointer-events-none will-change-transform"
          style={{ opacity: 0 }}
        >
          <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
          <span
            className="text-xs sm:text-sm font-medium tracking-wide text-slate-700 select-none"
            style={{ fontFamily: "'Ubuntu', sans-serif" }}
          >
            Unbreakable Visitor Attention
          </span>
        </div>

        {/* 6. Static Sites & Radial Sunset Arc Mobile Cards Stage */}
        <div
          ref={staticSitesStageRef}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-25 px-4 overflow-visible"
          style={{ opacity: 0 }}
        >
          {/* Headline: Static sites get ignored. */}
          <div
            ref={staticSitesHeadlineRef}
            className="text-center will-change-transform z-30 mb-6 sm:mb-10"
          >
            <h2
              className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900"
              style={{ fontFamily: "'Ubuntu', sans-serif", letterSpacing: "-0.02em" }}
            >
              <span>Static sites get</span>
              <span className="relative inline-block ml-2 sm:ml-3.5 px-1.5 text-slate-900">
                <span className="relative z-10">ignored.</span>
                {/* Red Hand-Drawn Pencil Sketched Circle Overlay tightly encircling ONLY 'ignored.' */}
                <svg
                  className="absolute -inset-x-2.5 sm:-inset-x-3.5 -inset-y-1 sm:-inset-y-2 w-[calc(100%+20px)] sm:w-[calc(100%+28px)] h-[calc(100%+8px)] sm:h-[calc(100%+16px)] pointer-events-none overflow-visible z-20"
                  viewBox="0 0 160 56"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <path
                    ref={redCirclePathRef}
                    d="M 12,28 C 10,13 40,5 82,6 C 124,7 154,13 151,28 C 148,43 118,51 78,50 C 32,49 8,39 15,22 C 20,13 52,8 92,8"
                    stroke="#EF4444"
                    strokeWidth="3.2"
                    vectorEffect="non-scaling-stroke"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </span>
            </h2>
          </div>

          {/* Radial Sunset Arc Mobile UI Cards Container (Beliv8 Style) */}
          <div
            ref={cardsArcWrapperRef}
            className="relative w-full max-w-5xl h-[340px] flex items-center justify-center will-change-transform z-20"
          >
            {/* Card 0: Balance & Portfolio Card */}
            <div
              ref={(el) => {
                cardRefs.current[0] = el;
              }}
              className="absolute w-[210px] sm:w-[225px] h-[305px] sm:h-[325px] rounded-3xl bg-white/95 backdrop-blur-xl border border-slate-100 shadow-[0_20px_45px_rgba(15,23,42,0.1)] p-4 flex flex-col justify-between overflow-hidden select-none will-change-transform"
            >
              <div className="rounded-2xl bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-400 p-3.5 text-white shadow-md">
                <div className="flex items-center justify-between text-[11px] text-white/80 font-medium">
                  <span>My Portfolio</span>
                  <span className="px-1.5 py-0.5 rounded-full bg-white/20 text-[10px] font-semibold text-white">
                    +14.8%
                  </span>
                </div>
                <div className="text-xl sm:text-2xl font-bold mt-1 tracking-tight">
                  $827,462
                </div>
                <div className="text-[10px] text-white/90 mt-1 flex items-center gap-1">
                  <span>Profit</span>
                  <span className="font-semibold text-emerald-200">$34,928.00</span>
                </div>
              </div>
              <div className="space-y-2 mt-2">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-sky-100 flex items-center justify-center text-sky-600">
                      <Home className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-800">
                        Dream House
                      </div>
                      <div className="text-[10px] text-slate-400">Target 2026</div>
                    </div>
                  </div>
                  <div className="text-xs font-bold text-slate-700">$872,422</div>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600">
                      <Plane className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-800">
                        My Travel
                      </div>
                      <div className="text-[10px] text-slate-400">Vacation fund</div>
                    </div>
                  </div>
                  <div className="text-xs font-bold text-slate-700">$24,422</div>
                </div>
              </div>
            </div>

            {/* Card 1: Statistics Bar Chart Card */}
            <div
              ref={(el) => {
                cardRefs.current[1] = el;
              }}
              className="absolute w-[210px] sm:w-[225px] h-[305px] sm:h-[325px] rounded-3xl bg-white/95 backdrop-blur-xl border border-slate-100 shadow-[0_20px_45px_rgba(15,23,42,0.1)] p-4 flex flex-col justify-between overflow-hidden select-none will-change-transform"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-slate-600">
                  <ChevronLeft className="w-4 h-4 text-slate-400" />
                  <span className="text-xs font-bold text-slate-800 tracking-wide">
                    Statistic
                  </span>
                  <MoreVertical className="w-4 h-4 text-slate-400" />
                </div>
                <div className="text-[11px] text-slate-400 mb-2 font-medium">
                  Monthly Velocity
                </div>
                <div className="h-28 flex items-end justify-between gap-1.5 px-1 py-2 bg-slate-50/80 rounded-xl border border-slate-100">
                  {[42, 68, 88, 52, 92, 70, 96, 60].map((h, idx) => (
                    <div
                      key={idx}
                      className="flex-1 flex flex-col items-center gap-1 h-full justify-end"
                    >
                      <div
                        className="w-full rounded-t-md bg-gradient-to-t from-sky-500 to-sky-400"
                        style={{ height: `${h}%` }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-[8px] text-slate-400 mt-1 px-1 font-mono">
                  <span>Jan</span>
                  <span>Mar</span>
                  <span>May</span>
                  <span>Jul</span>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[10px]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-sky-500" />
                  <span className="text-slate-500 font-medium">
                    Income <b className="text-slate-800">$14.8k</b>
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-400" />
                  <span className="text-slate-500 font-medium">
                    Exp <b className="text-slate-800">$4.2k</b>
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: Performance Line Chart Card (Center Anchor) */}
            <div
              ref={(el) => {
                cardRefs.current[2] = el;
              }}
              className="absolute w-[210px] sm:w-[225px] h-[305px] sm:h-[325px] rounded-3xl bg-white/95 backdrop-blur-xl border border-slate-100 shadow-[0_20px_45px_rgba(15,23,42,0.1)] p-4 flex flex-col justify-between overflow-hidden select-none will-change-transform z-10"
            >
              <div>
                <div className="flex items-center justify-between p-1 bg-slate-100/80 rounded-lg text-[10px] font-semibold text-slate-500 mb-2">
                  <span className="px-2 py-0.5 rounded">1D</span>
                  <span className="px-2 py-0.5 rounded">1W</span>
                  <span className="px-2 py-0.5 rounded bg-white text-sky-600 shadow-sm">
                    1M
                  </span>
                  <span className="px-2 py-0.5 rounded">ALL</span>
                </div>
                <div className="flex items-baseline justify-between mt-1">
                  <span className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
                    $3,842.64
                  </span>
                  <span className="px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">
                    +2.4%
                  </span>
                </div>
                {/* SVG Sparkline Curve */}
                <div className="mt-2 relative h-22 w-full">
                  <svg
                    className="w-full h-full overflow-visible"
                    viewBox="0 0 100 50"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10B981" stopOpacity="0.28" />
                        <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0,38 Q 15,15 30,30 T 60,12 T 85,22 T 100,8 L 100,50 L 0,50 Z"
                      fill="url(#sparkGrad)"
                    />
                    <path
                      d="M 0,38 Q 15,15 30,30 T 60,12 T 85,22 T 100,8"
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <circle cx="60" cy="12" r="3" fill="#10B981" />
                    <circle
                      cx="60"
                      cy="12"
                      r="2"
                      fill="#FFFFFF"
                      stroke="#10B981"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[10px]">
                <span className="text-slate-400 font-medium">Market Share</span>
                <span className="text-slate-800 font-bold">42.8%</span>
              </div>
            </div>

            {/* Card 3: User Profile Card (Ingridia Nutrisha) */}
            <div
              ref={(el) => {
                cardRefs.current[3] = el;
              }}
              className="absolute w-[210px] sm:w-[225px] h-[305px] sm:h-[325px] rounded-3xl bg-white/95 backdrop-blur-xl border border-slate-100 shadow-[0_20px_45px_rgba(15,23,42,0.1)] p-4 flex flex-col justify-between overflow-hidden select-none will-change-transform"
            >
              <div className="relative -m-4 mb-3 p-3 bg-gradient-to-b from-sky-400 to-sky-500 text-white flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border-2 border-white/90 shadow-md bg-white/25 backdrop-blur-md flex items-center justify-center text-white font-bold text-lg select-none">
                  I
                </div>
                <div className="text-xs font-bold mt-1 text-white tracking-wide">
                  Ingridia Nutrisha
                </div>
                <div className="text-[9px] text-sky-100 font-medium">UI/UX DESIGNER</div>
                <button className="mt-1.5 px-3 py-0.5 rounded-full bg-white text-sky-600 text-[9px] font-bold shadow-sm">
                  EDIT PROFILE
                </button>
              </div>
              <div className="space-y-1 text-[10px] text-slate-600 font-medium">
                <div className="flex items-center justify-between p-1 rounded-lg hover:bg-slate-50">
                  <div className="flex items-center gap-2">
                    <Bell className="w-3.5 h-3.5 text-slate-400" />
                    <span>Notifications</span>
                  </div>
                  <span className="text-[9px] text-slate-400">On</span>
                </div>
                <div className="flex items-center justify-between p-1 rounded-lg hover:bg-slate-50">
                  <div className="flex items-center gap-2">
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Password</span>
                  </div>
                  <span className="text-[9px] text-slate-400">••••</span>
                </div>
                <div className="flex items-center justify-between p-1 rounded-lg hover:bg-slate-50">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Session Time</span>
                  </div>
                  <span className="text-[9px] text-slate-400">Auto</span>
                </div>
              </div>
            </div>

            {/* Card 4: Category Donut Chart Card (Aimal Naseem) */}
            <div
              ref={(el) => {
                cardRefs.current[4] = el;
              }}
              className="absolute w-[210px] sm:w-[225px] h-[305px] sm:h-[325px] rounded-3xl bg-white/95 backdrop-blur-xl border border-slate-100 shadow-[0_20px_45px_rgba(15,23,42,0.1)] p-4 flex flex-col justify-between overflow-hidden select-none will-change-transform"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-500 flex items-center justify-center text-white font-bold text-[11px] shadow-sm select-none">
                    A
                  </div>
                  <div>
                    <div className="text-[9px] text-slate-400">Welcome back,</div>
                    <div className="text-xs font-bold text-slate-800">Aimal Naseem</div>
                  </div>
                </div>
                <div className="text-xs font-bold text-slate-800 mb-1">
                  Category Chart
                </div>
                {/* Circular Donut Ring */}
                <div className="relative w-24 h-24 mx-auto flex items-center justify-center my-1">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      stroke="#F1F5F9"
                      strokeWidth="9"
                      fill="none"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      stroke="url(#donutGrad)"
                      strokeWidth="9"
                      strokeDasharray="238.7"
                      strokeDashoffset="107"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <defs>
                      <linearGradient id="donutGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#EC4899" />
                        <stop offset="50%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#06B6D4" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-lg font-bold text-slate-800">55%</span>
                    <span className="text-[8px] text-slate-400 font-medium">
                      Transaction
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-around text-[9px] text-slate-500 font-medium pt-2 border-t border-slate-100">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500" /> Shopping
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> Bills
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 7. Scene 3: The 3D E-Commerce & Tech Blast Stage (Cart, Cloth, Mobile) */}
        <div
          ref={blastStageRef}
          className="absolute inset-0 pointer-events-none z-25 flex items-center justify-center overflow-visible"
          style={{ opacity: 0 }}
        >
          {/* Cart Asset */}
          <div
            ref={blastCartRef}
            className="absolute will-change-transform"
          >
            <div className="animate-[spaceFloat1_5s_ease-in-out_infinite]">
              <img
                src="/Cart.png"
                alt="Cart"
                className="w-44 sm:w-60 md:w-72 h-auto object-contain drop-shadow-[0_24px_45px_rgba(34,197,94,0.22)]"
              />
            </div>
          </div>

          {/* Cloth Asset */}
          <div
            ref={blastClothRef}
            className="absolute will-change-transform"
          >
            <div className="animate-[spaceFloat2_6s_ease-in-out_infinite]">
              <img
                src="/cloth.png"
                alt="Fashion"
                className="w-48 sm:w-64 md:w-80 h-auto object-contain drop-shadow-[0_24px_45px_rgba(244,114,182,0.25)]"
              />
            </div>
          </div>

          {/* Mobile Asset */}
          <div
            ref={blastMobileRef}
            className="absolute will-change-transform"
          >
            <div className="animate-[spaceFloat3_5.5s_ease-in-out_infinite]">
              <img
                src="/mobile.png"
                alt="Tech"
                className="w-44 sm:w-56 md:w-68 h-auto object-contain drop-shadow-[0_24px_45px_rgba(14,165,233,0.25)]"
              />
            </div>
          </div>
        </div>

        {/* 8. Scene 4: "Interactive Storytelling" (Italic Green Mix & Bold Hand-Drawn Underline) */}
        <div
          ref={storyStageRef}
          className="absolute inset-0 pointer-events-none z-30 flex items-center justify-center text-center px-4"
          style={{ opacity: 0 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 max-w-4xl tracking-tight leading-tight select-none">
            {/* Styled Ampersand tag before Interactive */}
            <span
              className="inline-flex items-center justify-center px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg bg-white/95 border border-slate-200 shadow-xs text-xl sm:text-2xl md:text-3xl font-bold text-slate-700 mr-1.5 sm:mr-2 select-none"
              style={{ fontFamily: "'Ubuntu', sans-serif" }}
            >
              &
            </span>

            {/* Word 1: Interactive */}
            <span
              ref={storyInteractiveRef}
              className="inline-block text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-900 will-change-transform"
              style={{
                fontFamily: "'Ubuntu', sans-serif",
                letterSpacing: "-0.02em",
                textShadow: "0 2px 20px rgba(15,23,42,0.08)",
              }}
            >
              Interactive
            </span>

            {/* Word 2: Storytelling (Italic, Emerald Mix & Bold Hand-Drawn Underline) */}
            <span
              ref={storyStorytellingRef}
              className="relative inline-block text-4xl sm:text-6xl md:text-7xl italic font-serif font-extrabold tracking-tight will-change-transform"
              style={{
                background:
                  "linear-gradient(135deg, #059669 0%, #10B981 45%, #14B8A6 80%, #047857 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Storytelling
              {/* Bold Hand-Drawn Pencil Underline */}
              <svg
                className="absolute -bottom-2 sm:-bottom-3.5 left-0 w-[calc(100%+12px)] h-4 sm:h-5 pointer-events-none overflow-visible"
                viewBox="0 0 240 24"
                fill="none"
              >
                <path
                  ref={storyUnderlinePathRef}
                  d="M 6,14 C 55,6 130,5 234,16"
                  stroke="#10B981"
                  strokeWidth="5.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </div>
        </div>

        {/* 9. Scene 5: Black Dot & Stylized Eye Rig Stage (Image 2 Archetype) */}
        <div
          ref={eyeStageRef}
          className="absolute inset-0 pointer-events-none z-35 flex items-center justify-center overflow-visible"
          style={{ opacity: 0 }}
        >
          <div
            ref={eyeCenterWrapperRef}
            className="relative flex items-center justify-center will-change-transform"
          >
            {/* Central Black Dot (Morph Origin) */}
            <div
              ref={eyeDotRef}
              className="absolute w-12 h-12 rounded-full bg-slate-900 will-change-transform"
            />

            {/* Stylized Bold Eye (Image 2 Archetype) */}
            <div className="flex items-center justify-center">
              <svg
                ref={eyeSvgRef}
                className="w-36 sm:w-44 md:w-52 h-22 sm:h-28 md:h-32 overflow-visible will-change-transform drop-shadow-[0_12px_28px_rgba(15,23,42,0.12)]"
                viewBox="0 0 200 120"
                fill="none"
              >
                <defs>
                  <clipPath id="eyeScleraClip">
                    <path d="M 12,60 C 48,16 152,16 188,60 C 152,104 48,104 12,60 Z" />
                  </clipPath>
                </defs>

                {/* White Sclera Fill */}
                <path
                  d="M 12,60 C 48,16 152,16 188,60 C 152,104 48,104 12,60 Z"
                  fill="#FFFFFF"
                />

                {/* Dynamic Pupil & Iris with Curved Saccades */}
                <g clipPath="url(#eyeScleraClip)">
                  <g ref={eyePupilGroupRef} className="will-change-transform">
                    <circle cx="100" cy="60" r="34" fill="#0F172A" />
                    <circle cx="112" cy="48" r="6" fill="#FFFFFF" opacity="0.9" />
                  </g>
                </g>

                {/* Thick Black Eyelid Outline with Eyelid Pinch Blink */}
                <g ref={eyeEyelidsGroupRef} className="will-change-transform">
                  <path
                    d="M 12,60 C 48,16 152,16 188,60 C 152,104 48,104 12,60 Z"
                    stroke="#0F172A"
                    strokeWidth="13"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* 10. Scene 6: "Hooks your", "Visitor instantly," Hero Stage & 3D Parallax Visuals */}
        <div
          ref={heroStageRef}
          className="absolute inset-0 pointer-events-none z-30 flex flex-col items-center justify-center text-center px-4 overflow-visible"
          style={{ opacity: 0 }}
        >
          {/* "Hooks your" Header Text (Positioned beside the Eye with comfortable non-overlapping spacing) */}
          <div
            ref={heroHooksYourRef}
            className="absolute text-3xl sm:text-4xl md:text-5xl tracking-tight will-change-transform select-none whitespace-nowrap z-30 flex items-baseline gap-2.5 sm:gap-3"
          >
            {/* 'Hooks': Distinct Italic Serif Font with differentiated vibrant luxury gradient */}
            <span
              className="font-serif italic font-bold tracking-tight inline-block"
              style={{
                fontFamily: "Georgia, 'Playfair Display', 'Times New Roman', serif",
                background: "linear-gradient(135deg, #4338CA 0%, #6366F1 50%, #818CF8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Hooks
            </span>
            {/* 'your': Ubuntu Font, Soft Semi-Black Gradient (Never pure black) */}
            <span
              className="ubuntu-medium font-medium tracking-tight inline-block"
              style={{
                fontFamily: "'Ubuntu', sans-serif",
                background: "linear-gradient(180deg, #1E293B 0%, #475569 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "-0.02em",
              }}
            >
              your
            </span>
          </div>

          {/* Hero Centerpiece: "Visitor instantly," with Clean Textured Chalk Highlighter */}
          <div className="relative z-20 max-w-5xl px-2 mt-4 sm:mt-6">
            <h1
              ref={heroVisitorTitleRef}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.035em] will-change-transform leading-[1.08] select-none flex items-center justify-center flex-wrap gap-x-3 sm:gap-x-4"
              style={{
                textShadow: "0 4px 30px rgba(15,23,42,0.06)",
              }}
            >
              {/* 'Visitor': Google Font Ubuntu, Soft Semi-Black (Never pure black) */}
              <span
                className="ubuntu-bold inline-block"
                style={{
                  fontFamily: "'Ubuntu', sans-serif",
                  background: "linear-gradient(180deg, #0F172A 0%, #334155 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: "-0.03em",
                }}
              >
                Visitor
              </span>

              {/* 'instantly,': Italic Serif Font with distinct vibrant indigo gradient matching 'Hooks' */}
              <span className="relative inline-block ml-1 sm:ml-2">
                <span
                  className="relative z-10 font-serif italic font-bold tracking-tight inline-block"
                  style={{
                    fontFamily: "Georgia, 'Playfair Display', 'Times New Roman', serif",
                    background: "linear-gradient(135deg, #4338CA 0%, #6366F1 50%, #818CF8 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  instantly,
                </span>

                {/* Half-Height Clean Textured Chalk Highlighter Marker (Pure clean fill, no stick lines) */}
                <svg
                  ref={chalkHighlighterRef}
                  className="absolute -left-1 sm:-left-2 bottom-1.5 sm:bottom-2.5 w-[calc(100%+8px)] sm:w-[calc(100%+16px)] h-[46%] pointer-events-none z-0 overflow-visible origin-left will-change-transform"
                  viewBox="0 0 200 24"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="chalkYellow" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.75" />
                      <stop offset="35%" stopColor="#FDE047" stopOpacity="0.88" />
                      <stop offset="70%" stopColor="#FACC15" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#FEF08A" stopOpacity="0.75" />
                    </linearGradient>
                    <filter id="chalkFilter" x="-10%" y="-10%" width="120%" height="120%">
                      <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.65"
                        numOctaves="3"
                        result="noise"
                      />
                      <feDisplacementMap
                        in="SourceGraphic"
                        in2="noise"
                        scale="2.5"
                        xChannelSelector="R"
                        yChannelSelector="G"
                      />
                    </filter>
                  </defs>
                  <rect
                    x="1"
                    y="2"
                    width="198"
                    height="20"
                    rx="3"
                    fill="url(#chalkYellow)"
                    filter="url(#chalkFilter)"
                  />
                </svg>
              </span>
            </h1>
          </div>

          {/* 3D Visual Floating Assets with Layered Parallax Depth */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible">
            {/* Left 3D Character Phone (phone1.png) - moved comfortably away from Visitor */}
            <div
              ref={heroPhoneLeftRef}
              className="absolute z-20 will-change-transform"
            >
              <div className="animate-[phoneFloatLeft_6s_ease-in-out_infinite]">
                <img
                  src="/phone1.png"
                  alt="Social Messaging Interactive UI"
                  className="w-32 sm:w-44 md:w-52 lg:w-60 h-auto object-contain drop-shadow-[0_20px_45px_rgba(14,165,233,0.20)]"
                />
              </div>
            </div>

            {/* Right 3D Character Girl (phone2.webp) - Hero Character sweeping left */}
            <div
              ref={heroPhoneRightRef}
              className="absolute z-30 will-change-transform"
            >
              <div className="animate-[phoneFloatRight_6.5s_ease-in-out_infinite]">
                <img
                  src="/phone2.webp"
                  alt="Creative Interactive Experience"
                  className="w-40 sm:w-54 md:w-64 lg:w-74 h-auto object-contain drop-shadow-[0_20px_45px_rgba(249,115,22,0.20)] opacity-95"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 11. Scene 7: "Guiding them smoothly... straight to Checkout" Right Kinetic Typography Stage */}
        <div
          ref={checkoutStageRef}
          className="absolute inset-y-0 right-4 sm:right-8 md:right-12 lg:right-20 flex flex-col justify-center items-start text-left max-w-lg sm:max-w-xl lg:max-w-2xl pointer-events-none z-30 overflow-visible"
          style={{ opacity: 0 }}
        >
          {/* Kinetic Headline with EE (Josefin Sans) Typography & Semi-Dark Text */}
          <div className="flex flex-col tracking-tight leading-[1.16] select-none">
            {/* Line 1: "Guiding them smoothly" */}
            <div className="overflow-hidden py-1">
              <div
                ref={checkoutLine1Ref}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold will-change-transform"
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  letterSpacing: "-0.02em",
                  color: "#1E293B",
                  textShadow: "0 2px 20px rgba(15,23,42,0.04)",
                }}
              >
                Guiding them smoothly
              </div>
            </div>

            {/* Line 2: "from their first scroll" */}
            <div className="overflow-hidden py-1 mt-1 sm:mt-2">
              <div
                ref={checkoutLine2Ref}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold will-change-transform"
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  letterSpacing: "-0.02em",
                  color: "#334155",
                  textShadow: "0 2px 20px rgba(15,23,42,0.04)",
                }}
              >
                from their first scroll
              </div>
            </div>

            {/* Line 3: "straight to" + Highlighted Italic "Checkout" + Icon */}
            <div className="overflow-hidden py-1.5 mt-1 sm:mt-2">
              <div
                ref={checkoutLine3Ref}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold will-change-transform flex items-center flex-wrap gap-x-3 sm:gap-x-4"
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  letterSpacing: "-0.02em",
                  color: "#1E293B",
                }}
              >
                <span>straight to</span>

                {/* Highlighted Checkout Badge: Italic Serif Storytelling Font, Larger Size, Luminous Golden-Amber Gradient */}
                <span className="relative inline-flex items-center gap-2 sm:gap-3">
                  <span
                    className="relative z-10 font-serif italic font-bold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-[4.1rem]"
                    style={{
                      fontFamily: "Georgia, 'Playfair Display', 'Times New Roman', serif",
                      background:
                        "linear-gradient(135deg, #B45309 0%, #D97706 40%, #F59E0B 80%, #D97706 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      textShadow: "0 2px 20px rgba(217, 119, 6, 0.15)",
                    }}
                  >
                    Checkout
                  </span>

                  {/* Sleek Dynamic Checkout Cart / Bag Icon in Warm Golden Amber */}
                  <span className="relative z-10 inline-flex items-center justify-center p-1.5 sm:p-2 rounded-xl bg-amber-500/10 border border-amber-500/25 shadow-xs">
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-amber-600 drop-shadow-xs"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                      <polyline points="9 16 12 19 15 16" />
                    </svg>
                  </span>

                  {/* Half-Height Clean Textured Chalk Highlighter Marker */}
                  <svg
                    ref={checkoutHighlighterRef}
                    className="absolute -left-1.5 sm:-left-2.5 bottom-1.5 sm:bottom-2.5 w-[calc(100%+12px)] sm:w-[calc(100%+20px)] h-[46%] pointer-events-none z-0 overflow-visible origin-left will-change-transform"
                    viewBox="0 0 200 24"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient
                        id="checkoutChalkYellow"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.75" />
                        <stop offset="35%" stopColor="#FDE047" stopOpacity="0.88" />
                        <stop offset="70%" stopColor="#FACC15" stopOpacity="0.85" />
                        <stop offset="100%" stopColor="#FEF08A" stopOpacity="0.75" />
                      </linearGradient>
                      <filter
                        id="checkoutChalkFilter"
                        x="-10%"
                        y="-10%"
                        width="120%"
                        height="120%"
                      >
                        <feTurbulence
                          type="fractalNoise"
                          baseFrequency="0.65"
                          numOctaves="3"
                          result="noise"
                        />
                        <feDisplacementMap
                          in="SourceGraphic"
                          in2="noise"
                          scale="2.5"
                          xChannelSelector="R"
                          yChannelSelector="G"
                        />
                      </filter>
                    </defs>
                    <rect
                      x="1"
                      y="2"
                      width="198"
                      height="20"
                      rx="3"
                      fill="url(#checkoutChalkYellow)"
                      filter="url(#checkoutChalkFilter)"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Soft Mint/Green Ambient Wash Overlay */}
        <div
          ref={responsiveBgTintRef}
          className="absolute inset-0 pointer-events-none z-0 will-change-opacity"
          style={{
            background:
              "radial-gradient(ellipse at 35% 50%, rgba(16, 185, 129, 0.09) 0%, rgba(52, 211, 153, 0.05) 45%, transparent 75%)",
            opacity: 0,
          }}
        />

        {/* 12. Scene 8: "Responsive for All Devices" - Pure-Code 3D Morphing Device Stage */}
        <div
          ref={responsiveStageRef}
          className="absolute inset-0 max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-12 pointer-events-none z-30 overflow-visible"
          style={{ opacity: 0 }}
        >
          {/* Left Side: Pure-Code 3D Clay Morphing Device (Desktop -> Laptop -> Smartphone) */}
          <div
            ref={deviceStageWrapperRef}
            className="relative w-full max-w-[500px] sm:max-w-[540px] lg:max-w-[580px] h-[460px] flex items-center justify-center shrink-0 will-change-transform"
            style={{ perspective: "1400px", transformStyle: "preserve-3d" }}
          >
            {/* The Transforming Claymorphic Chassis */}
            <div className="relative flex flex-col items-center justify-center will-change-transform" style={{ transformStyle: "preserve-3d" }}>
              {/* Screen Frame (Morphs from 500x310 to 230x420) */}
              <div
                ref={screenFrameRef}
                className="relative will-change-transform p-3 sm:p-4 bg-gradient-to-b from-[#FFFFFF] to-[#F1F5F9] border-2 border-white/90 overflow-hidden flex flex-col justify-between"
                style={{
                  width: "500px",
                  height: "310px",
                  borderRadius: "36px",
                  boxShadow:
                    "0 26px 60px -15px rgba(244,114,182,0.18), 0 16px 36px -10px rgba(148,163,184,0.22), inset 0 3px 6px rgba(255,255,255,0.95), inset 0 -4px 8px rgba(0,0,0,0.06)",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* 1. Desktop & Laptop Inner Screen UI */}
                <div
                  ref={desktopScreenUIRef}
                  className="relative w-full h-full rounded-[22px] sm:rounded-[24px] bg-[#EAF0F8] p-2.5 sm:p-3 border border-[#D5E1F2] overflow-hidden will-change-transform"
                  style={{
                    boxShadow: "inset 0 3px 8px rgba(15,23,42,0.08)",
                  }}
                >
                  <div className="grid grid-cols-12 gap-2 sm:gap-2.5 h-full">
                    {/* Left Column (Span 7): Video Player Card */}
                    <div className="col-span-7 bg-white rounded-xl sm:rounded-2xl p-2 sm:p-2.5 shadow-sm border border-slate-100 flex flex-col gap-1.5 sm:gap-2 justify-between">
                      {/* Royal Blue Video Canvas with Play Button */}
                      <div className="w-full aspect-[16/10] rounded-lg sm:rounded-xl bg-gradient-to-br from-[#3B82F6] via-[#2563EB] to-[#1D4ED8] flex items-center justify-center relative overflow-hidden shadow-inner">
                        <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/50 flex items-center justify-center shadow-lg">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>

                      {/* Video Seek / Progress Bar (Orange / Coral) */}
                      <div className="w-full h-1.5 sm:h-2 bg-slate-100 rounded-full relative overflow-visible mt-0.5">
                        <div className="w-[68%] h-full bg-gradient-to-r from-[#F97316] to-[#FB923C] rounded-full" />
                        <div className="absolute top-1/2 -translate-y-1/2 left-[68%] w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#F97316] border-2 border-white shadow-md -translate-x-1/2" />
                      </div>

                      {/* Skeleton Lines & Status Dots */}
                      <div className="flex items-center justify-between pt-0.5">
                        <div className="flex flex-col gap-1 w-20 sm:w-28">
                          <div className="h-1.5 bg-slate-200 rounded-full w-full" />
                          <div className="h-1.5 bg-slate-200/70 rounded-full w-2/3" />
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F43F5E]" />
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FBBF24]" />
                          <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]" />
                        </div>
                      </div>
                    </div>

                    {/* Right Column (Span 5): Top Landscape Card + Bottom Article Card */}
                    <div className="col-span-5 flex flex-col gap-2 h-full justify-between">
                      {/* Top Landscape Image Card */}
                      <div className="bg-white rounded-xl sm:rounded-2xl p-1.5 sm:p-2 shadow-sm border border-slate-100 flex items-center gap-1.5">
                        <div className="flex flex-col gap-1 flex-1">
                          <div className="h-1 bg-slate-200 rounded-full w-full" />
                          <div className="h-1 bg-slate-200/70 rounded-full w-3/4" />
                          <div className="h-1 bg-slate-200/50 rounded-full w-1/2" />
                        </div>
                        <div className="w-10 h-8 sm:w-12 sm:h-10 rounded-lg bg-gradient-to-tr from-[#38BDF8] to-[#BAE6FD] relative overflow-hidden shrink-0 shadow-inner">
                          <div className="absolute top-1 right-1.5 w-2.5 h-2.5 rounded-full bg-[#F43F5E] shadow-xs" />
                          <svg className="absolute bottom-0 w-full h-5 text-[#10B981]" viewBox="0 0 50 25" fill="currentColor" preserveAspectRatio="none">
                            <path d="M0,25 Q15,5 30,25 Z M20,25 Q35,8 50,25 Z" />
                          </svg>
                        </div>
                      </div>

                      {/* Bottom Article Skeleton Card */}
                      <div className="bg-white/90 backdrop-blur-xs rounded-xl sm:rounded-2xl p-2 shadow-sm border border-slate-100 flex flex-col gap-1.5 flex-1 justify-center">
                        <div className="h-1 bg-slate-200 rounded-full w-full" />
                        <div className="h-1 bg-slate-200/80 rounded-full w-5/6" />
                        <div className="h-1 bg-slate-200/60 rounded-full w-4/6" />
                        <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden mt-0.5">
                          <div className="w-2/5 h-full bg-[#06B6D4] rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Vertical Smartphone Inner Screen UI (Soft Clay Theme Matching Desktop & Laptop) */}
                <div
                  ref={phoneScreenUIRef}
                  className="absolute inset-2 sm:inset-2.5 rounded-[30px] bg-[#EAF0F8] p-2.5 sm:p-3 border border-[#D5E1F2] flex flex-col justify-between overflow-hidden will-change-transform"
                  style={{
                    boxShadow: "inset 0 3px 8px rgba(15,23,42,0.08)",
                    opacity: 0,
                  }}
                >
                  {/* Dynamic Island / Speaker Pill */}
                  <div className="w-16 h-3.5 bg-slate-800/90 rounded-full mx-auto flex items-center justify-between px-2 shadow-xs border border-white/40">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                  </div>

                  {/* Mobile App Header / Status Bar */}
                  <div className="flex items-center justify-between px-1 text-[11px] font-semibold text-slate-500">
                    <span>9:41</span>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span className="text-[10px] font-mono text-slate-400">5G</span>
                      <div className="w-4 h-2 border border-slate-400 rounded-xs p-[0.5px] flex items-center">
                        <div className="w-2.5 h-full bg-slate-600 rounded-xs" />
                      </div>
                    </div>
                  </div>

                  {/* Mobile Main Card: Clean White Card with Video Canvas & Seek Bar (Matches Desktop) */}
                  <div className="w-full bg-white rounded-2xl p-2 shadow-sm border border-slate-100 flex flex-col gap-1.5">
                    {/* Royal Blue Video Canvas with Play Button */}
                    <div className="w-full aspect-[16/11] rounded-xl bg-gradient-to-br from-[#3B82F6] via-[#2563EB] to-[#1D4ED8] flex items-center justify-center relative overflow-hidden shadow-inner">
                      <div className="w-8 h-8 rounded-full bg-white/25 backdrop-blur-md border border-white/60 flex items-center justify-center shadow-md">
                        <svg className="w-3.5 h-3.5 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      {/* Live Badge */}
                      <span className="absolute top-1.5 left-2 text-[8px] font-bold px-1.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30">
                        LIVE
                      </span>
                    </div>

                    {/* Video Progress Bar (Orange / Coral) */}
                    <div className="w-full h-1.5 bg-slate-100 rounded-full relative overflow-visible mt-0.5">
                      <div className="w-[72%] h-full bg-gradient-to-r from-[#F97316] to-[#FB923C] rounded-full" />
                      <div className="absolute top-1/2 -translate-y-1/2 left-[72%] w-2.5 h-2.5 rounded-full bg-[#F97316] border border-white shadow-xs -translate-x-1/2" />
                    </div>

                    {/* Skeleton Lines & Status Dots */}
                    <div className="flex items-center justify-between pt-0.5">
                      <div className="flex flex-col gap-1 w-20">
                        <div className="h-1 bg-slate-200 rounded-full w-full" />
                        <div className="h-1 bg-slate-200/70 rounded-full w-2/3" />
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F43F5E]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FBBF24]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Card: Soft White Checkout Pill (Matches Landscape/Article Cards) */}
                  <div className="w-full bg-white rounded-xl p-2 shadow-sm border border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold shadow-xs">
                        ✓
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-slate-800">Order Confirmed</span>
                        <span className="text-[8px] text-slate-400">Fluid 1-Tap Checkout</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-600 font-mono">$420</span>
                  </div>

                  {/* Home gesture bar */}
                  <div className="w-16 h-1 bg-slate-300 rounded-full mx-auto" />
                </div>
              </div>

              {/* Desktop Stand (Neck & Base) - folds down in Laptop & Phone */}
              <div ref={monitorStandRef} className="flex flex-col items-center will-change-transform origin-top">
                <div className="w-9 sm:w-12 h-6 sm:h-8 bg-gradient-to-b from-[#E2E8F0] to-[#CBD5E1] shadow-inner" />
                <div className="w-24 sm:w-32 h-3 bg-gradient-to-r from-[#CBD5E1] via-[#F1F5F9] to-[#CBD5E1] rounded-t-xl shadow-md" />
              </div>

              {/* Laptop Lower Chassis & Keyboard Deck - Unfolds in 3D during Laptop Mode */}
              <div
                ref={laptopBaseRef}
                className="w-[480px] sm:w-[510px] h-24 sm:h-28 rounded-b-2xl bg-gradient-to-b from-white via-slate-100 to-slate-200 border-x-2 border-b-2 border-white/90 shadow-2xl flex flex-col items-center justify-between p-2 will-change-transform"
                style={{
                  transformOrigin: "50% 0%",
                  transformStyle: "preserve-3d",
                  transform: "scaleY(0)",
                  opacity: 0,
                }}
              >
                {/* Laptop Keyboard Grid */}
                <div className="w-full h-12 bg-slate-200/90 rounded-lg p-1.5 flex flex-col justify-between shadow-inner border border-slate-300/60">
                  {[...Array(3)].map((_, r) => (
                    <div key={r} className="w-full h-2.5 flex gap-1 justify-center">
                      {[...Array(12)].map((_, c) => (
                        <span key={c} className="flex-1 h-full bg-white rounded-xs shadow-xs" />
                      ))}
                    </div>
                  ))}
                </div>

                {/* Laptop Glass Trackpad */}
                <div className="w-20 sm:w-24 h-8 rounded-lg bg-white/80 border border-slate-300 shadow-inner" />
              </div>

              {/* Desk Accessories: External Keyboard */}
              <div
                ref={deskKeyboardRef}
                className="w-44 sm:w-56 h-3.5 sm:h-4 bg-white rounded-lg shadow-md border border-slate-200/80 mt-1.5 flex items-center justify-center px-2 will-change-transform"
              >
                <div className="w-full h-1 bg-slate-100 rounded-xs flex gap-1 justify-center">
                  {[...Array(9)].map((_, i) => (
                    <span key={i} className="w-3 sm:w-4 h-full bg-slate-200/80 rounded-xs" />
                  ))}
                </div>
              </div>

              {/* Orange Clay Pencil */}
              <div
                ref={deskPencilRef}
                className="w-28 sm:w-36 h-2 sm:h-2.5 bg-gradient-to-r from-[#F97316] via-[#FB923C] to-[#F97316] rounded-full shadow-sm mt-1.5 flex items-center overflow-hidden will-change-transform"
              >
                <span className="w-2 h-full bg-[#475569] rounded-l-full" />
                <span className="flex-1" />
                <span className="w-1 h-full bg-slate-300" />
                <span className="w-2.5 h-full bg-[#F472B6] rounded-r-full" />
              </div>
            </div>

            {/* Floating 3D Satellites */}
            <div
              ref={responsiveFloatingRef}
              className="absolute inset-0 pointer-events-none overflow-visible will-change-transform z-22"
            >
              {/* Top Blue Speech Bubble */}
              <div className="absolute -top-5 sm:-top-7 right-10 sm:right-16 animate-[clayFloatSlow_4.5s_ease-in-out_infinite] z-20">
                <div className="relative bg-[#38BDF8] text-white rounded-2xl p-2 sm:p-2.5 shadow-[0_12px_24px_rgba(56,189,248,0.35)] border-2 border-white/60 flex flex-col gap-1 w-14 sm:w-18">
                  <div className="h-1 bg-white/90 rounded-full w-full" />
                  <div className="h-1 bg-white/70 rounded-full w-4/5" />
                  <div className="h-1 bg-white/50 rounded-full w-3/5" />
                  <div className="absolute -bottom-1.5 right-3 w-2.5 h-2.5 bg-[#38BDF8] rotate-45 border-r border-b border-white/50" />
                </div>
              </div>

              {/* Top-Left Fluffy White Cloud */}
              <div className="absolute -top-7 sm:-top-9 left-1 sm:left-3 animate-[clayFloatSlow_5.5s_ease-in-out_infinite] z-10">
                <div className="relative flex items-end">
                  <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white shadow-md" />
                  <span className="w-9 h-9 sm:w-11 sm:h-11 -ml-2.5 rounded-full bg-white shadow-md" />
                  <span className="w-6 h-6 sm:w-8 sm:h-8 -ml-2.5 rounded-full bg-white shadow-md" />
                </div>
              </div>

              {/* Top-Right Pink 3D Gear */}
              <div className="absolute -top-3 sm:-top-5 -right-2 sm:right-0 animate-[clayGearPulse_6s_ease-in-out_infinite] z-10">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-[#EC4899] to-[#F472B6] p-1.5 shadow-[0_8px_20px_rgba(236,72,153,0.35)] border-2 border-white/50 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white shadow-inner" />
                </div>
              </div>

              {/* Left Wall Analog Clock */}
              <div className="absolute top-14 sm:top-18 -left-5 sm:-left-7 animate-[clayFloatSlow_5s_ease-in-out_infinite] z-10">
                <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white border-[3.5px] border-[#FB923C] shadow-lg flex items-center justify-center relative">
                  <div className="w-0.5 h-3 bg-slate-700 rounded-full absolute bottom-1/2 left-1/2 -translate-x-1/2 origin-bottom rotate-[45deg]" />
                  <div className="w-0.5 h-4 bg-slate-700 rounded-full absolute bottom-1/2 left-1/2 -translate-x-1/2 origin-bottom rotate-[-50deg]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F97316] z-10" />
                </div>
              </div>

              {/* Bottom-Left Potted Plant & Clay Ball */}
              <div className="absolute bottom-3 sm:bottom-5 -left-3 sm:-left-5 flex items-end gap-1.5 z-20">
                <div className="flex flex-col items-center">
                  <svg className="w-9 sm:w-11 h-14 sm:h-16 text-[#F43F5E] drop-shadow-md" viewBox="0 0 40 70" fill="currentColor">
                    <path d="M20,70 Q10,40 5,20 Q12,18 20,45 Z" fill="#F43F5E" />
                    <path d="M20,70 Q30,40 35,20 Q28,18 20,45 Z" fill="#FB7185" />
                    <path d="M20,70 Q20,30 20,5 Q26,10 20,45 Z" fill="#E11D48" />
                  </svg>
                  <div className="w-7 h-7 rounded-b-xl bg-white border border-slate-200 shadow-md flex items-center justify-center overflow-hidden">
                    <div className="w-full h-1 bg-sky-400" />
                  </div>
                </div>
                <div className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 rounded-full bg-gradient-to-tr from-[#EA580C] to-[#FB923C] shadow-md mb-1" />
              </div>

              {/* Right Floating Desk Lamp */}
              <div className="absolute top-18 sm:top-22 -right-3 sm:-right-5 animate-[clayFloatSlow_6s_ease-in-out_infinite] z-10">
                <div className="relative flex flex-col items-center">
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center rotate-[-30deg]">
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-200 shadow-inner" />
                  </div>
                  <div className="w-8 h-12 bg-gradient-to-b from-amber-200/25 to-transparent blur-xs -rotate-[-30deg] pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Headline, Dynamic Subheadline & 3D Rolling Cylinder */}
          <div
            ref={responsiveTextSideRef}
            className="w-full max-w-md lg:max-w-lg xl:max-w-xl pl-2 sm:pl-6 md:pl-8 pr-2 sm:pr-4 flex flex-col items-start text-left select-none z-30 will-change-transform"
          >
            {/* Step 1 Headline: 'Responsive for All Devices' */}
            <h2
              ref={responsiveTitleRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.8rem] font-bold tracking-tight leading-[1.14] will-change-transform"
              style={{
                fontFamily: "'Josefin Sans', sans-serif",
                color: "#1E293B",
                textShadow: "0 2px 20px rgba(15,23,42,0.06)",
              }}
            >
              <span>Responsive for </span>
              <span
                className="font-serif italic font-bold tracking-tight inline-block"
                style={{
                  fontFamily: "Georgia, 'Playfair Display', 'Times New Roman', serif",
                  background:
                    "linear-gradient(135deg, #1D4ED8 0%, #2563EB 40%, #0284C7 80%, #1D4ED8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 4px 25px rgba(37,99,235,0.22)",
                }}
              >
                All Devices
              </span>
            </h2>

            {/* Subheadline that smoothly transforms into primary Headline */}
            <div
              ref={responsiveSubheadlineRef}
              className="mt-3 text-xl sm:text-2xl md:text-3xl lg:text-[2.25rem] font-bold text-slate-800 leading-[1.2] will-change-transform flex items-center flex-wrap gap-x-2"
              style={{
                fontFamily: "'Josefin Sans', sans-serif",
                transformOrigin: "left top",
              }}
            >
              <span className="inline-block">Flawless, buttery-smooth</span>
              <span className="inline-block">performance across every</span>
              <span
                className="relative inline-flex items-center min-w-[125px] h-11 overflow-visible"
                style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
              >
                {/* Keyword 1: desktop */}
                <span
                  ref={deviceWordDesktopRef}
                  className="absolute left-0 text-2xl sm:text-3xl md:text-4xl font-serif italic font-bold tracking-tight inline-block will-change-transform"
                  style={{
                    fontFamily: "Georgia, 'Playfair Display', serif",
                    background: "linear-gradient(135deg, #1D4ED8 0%, #2563EB 50%, #0284C7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    transformOrigin: "50% 50% -25px",
                    transformStyle: "preserve-3d",
                  }}
                >
                  desktop
                </span>

                {/* Keyword 2: laptop */}
                <span
                  ref={deviceWordLaptopRef}
                  className="absolute left-0 text-2xl sm:text-3xl md:text-4xl font-serif italic font-bold tracking-tight inline-block will-change-transform"
                  style={{
                    fontFamily: "Georgia, 'Playfair Display', serif",
                    background: "linear-gradient(135deg, #059669 0%, #10B981 50%, #047857 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    transformOrigin: "50% 50% -25px",
                    transformStyle: "preserve-3d",
                    opacity: 0,
                  }}
                >
                  laptop
                </span>

                {/* Keyword 3: phone */}
                <span
                  ref={deviceWordPhoneRef}
                  className="absolute left-0 text-2xl sm:text-3xl md:text-4xl font-serif italic font-bold tracking-tight inline-block will-change-transform"
                  style={{
                    fontFamily: "Georgia, 'Playfair Display', serif",
                    background: "linear-gradient(135deg, #7C3AED 0%, #A855F7 50%, #EC4899 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    transformOrigin: "50% 50% -25px",
                    transformStyle: "preserve-3d",
                    opacity: 0,
                  }}
                >
                  phone
                </span>
              </span>
            </div>

            {/* 3D Cylinder Drum Viewport Container */}
            <div
              ref={cylinderContainerRef}
              className="mt-6 sm:mt-8 will-change-transform flex items-center flex-wrap gap-x-3 sm:gap-x-4 gap-y-2"
              style={{
                perspective: "1400px",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Cylinder Item 1: 'Zero Lost' */}
              <div
                ref={cylinderZeroLostRef}
                className="will-change-transform text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold tracking-tight text-slate-800 shrink-0"
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  transformStyle: "preserve-3d",
                  transformOrigin: "50% 100% -40px",
                }}
              >
                Zero Lost
              </div>

              {/* Cylinder Item 2: 'Mobile Sales' + Responsive Icon + Chalk */}
              <div
                ref={cylinderMobileSalesRef}
                className="relative inline-flex items-center will-change-transform shrink-0"
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "50% 100% -40px",
                }}
              >
                {/* Mini Responsive Icon right in front of Mobile Sales */}
                <img
                  src="/responsive.png"
                  alt="Responsive icon"
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain inline-block mr-2.5 drop-shadow-md align-middle"
                />

                <span
                  className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-[3.6rem] font-serif italic font-bold tracking-tight"
                  style={{
                    fontFamily: "Georgia, 'Playfair Display', 'Times New Roman', serif",
                    background:
                      "linear-gradient(135deg, #059669 0%, #10B981 40%, #047857 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textShadow: "0 2px 20px rgba(16,185,129,0.18)",
                  }}
                >
                  Mobile Sales
                </span>

                {/* Signature Yellow Chalk Highlighter Marker */}
                <svg
                  ref={responsiveChalkRef}
                  className="absolute -left-2 bottom-1 w-[calc(100%+16px)] h-[46%] pointer-events-none z-0 overflow-visible origin-left will-change-transform"
                  viewBox="0 0 200 24"
                  preserveAspectRatio="none"
                >
                  <rect
                    x="1"
                    y="2"
                    width="198"
                    height="20"
                    rx="3"
                    fill="url(#checkoutChalkYellow)"
                    filter="url(#checkoutChalkFilter)"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* 13. Scene 8 Climax: The Dot -> Blinking Cursor -> Typewriter Punchline */}
        <div
          ref={climaxContainerRef}
          className="absolute inset-0 flex items-center justify-center px-4 sm:px-8 md:px-12 pointer-events-none z-40 overflow-visible"
          style={{ opacity: 0 }}
        >
          {/* The Morphing Black Bead / Dot */}
          <div
            ref={climaxDotRef}
            className="absolute will-change-transform bg-slate-900 shadow-lg pointer-events-none z-50"
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "999px",
              opacity: 0,
            }}
          />

          {/* Typewriter Text Layout Wrapper */}
          <div className="relative max-w-4xl w-full flex items-center justify-center text-center select-none">
            <div
              className="relative inline-flex items-center flex-wrap justify-center gap-x-2.5 sm:gap-x-3.5 gap-y-2 text-2xl sm:text-3xl md:text-4xl lg:text-[2.85rem] font-bold tracking-tight text-slate-800 will-change-transform"
              style={{
                fontFamily: "'Josefin Sans', sans-serif",
                lineHeight: 1.25,
              }}
            >
              {/* 1. Lead text */}
              <span
                ref={climaxTextLeadRef}
                className="inline-block will-change-transform"
                style={{
                  color: "#1E293B",
                  clipPath: "inset(0 100% 0 0)",
                  opacity: 0,
                }}
              >
                So you never lose a
              </span>

              {/* 2. Word "paying" with Underline Highlight */}
              <span className="relative inline-block">
                <span
                  ref={climaxWordPayingRef}
                  className="relative z-10 font-serif italic font-bold inline-block"
                  style={{
                    fontFamily: "Georgia, 'Playfair Display', serif",
                    background: "linear-gradient(135deg, #059669 0%, #10B981 50%, #047857 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    clipPath: "inset(0 100% 0 0)",
                    opacity: 0,
                  }}
                >
                  paying
                </span>

                {/* Glow Underline under "paying" */}
                <svg
                  ref={climaxPayingHighlightRef}
                  className="absolute -left-1 bottom-0.5 w-[calc(100%+8px)] h-2.5 pointer-events-none z-0 origin-left will-change-transform"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                  style={{ transform: "scaleX(0)", opacity: 0 }}
                >
                  <path
                    d="M2,8 Q50,2 98,6"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>

              {/* 3. Mid text */}
              <span
                ref={climaxTextMidRef}
                className="inline-block will-change-transform"
                style={{
                  color: "#1E293B",
                  clipPath: "inset(0 100% 0 0)",
                  opacity: 0,
                }}
              >
                customer to a
              </span>

              {/* 4. "broken screen" with Broken styling + Hand-drawn Pencil Oval */}
              <span className="relative inline-block ml-1">
                <span
                  ref={climaxWordBrokenRef}
                  className="relative z-10 inline-block font-black tracking-wider animate-[brokenJitter_3s_ease-in-out_infinite]"
                  style={{
                    color: "#DC2626",
                    textShadow: "1px 1px 0px rgba(0,0,0,0.15), -1px -1px 0px rgba(220,38,38,0.2)",
                    clipPath: "inset(0 100% 0 0)",
                    opacity: 0,
                  }}
                >
                  broken screen
                </span>

                {/* Hand-drawn pencil sketch oval loop */}
                <svg
                  className="absolute -left-5 -top-3 w-[calc(100%+40px)] h-[calc(100%+24px)] pointer-events-none z-20 overflow-visible"
                  viewBox="0 0 280 80"
                  preserveAspectRatio="none"
                >
                  <path
                    ref={climaxPencilCircleRef}
                    d="M 15,40 C 15,14 65,8 140,8 C 215,8 265,16 265,40 C 265,64 210,72 140,72 C 60,72 10,64 12,38 C 13,24 45,12 85,10"
                    fill="none"
                    stroke="#F97316"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      strokeDasharray: 600,
                      strokeDashoffset: 600,
                      opacity: 0,
                    }}
                  />
                </svg>

                {/* 3D Orange Pencil Drawing the Loop */}
                <div
                  ref={climaxPencilRef}
                  className="absolute -right-12 -top-6 w-20 sm:w-24 h-5 pointer-events-none z-30 will-change-transform"
                  style={{
                    transformOrigin: "0% 50%",
                    scale: 0,
                    opacity: 0,
                  }}
                >
                  {/* Pencil Body: Graphite Tip at left (pointing to line), Orange Hex Body, Metal Ferrule, Pink Eraser at right */}
                  <div className="relative w-full h-full flex items-center">
                    {/* Graphite tip */}
                    <div
                      className="w-0 h-0 border-y-[6px] border-y-transparent border-r-[12px] border-r-[#FBBF24]"
                      style={{ filter: "drop-shadow(-1px 0 1px rgba(0,0,0,0.3))" }}
                    >
                      <div className="w-0 h-0 border-y-[2px] border-y-transparent border-r-[5px] border-r-slate-800 -mt-[2px] -ml-[1px]" />
                    </div>
                    {/* Orange wooden body */}
                    <div className="flex-1 h-3 bg-gradient-to-r from-[#F97316] via-[#FB923C] to-[#EA580C] shadow-sm flex flex-col justify-between py-0.5">
                      <div className="w-full h-[1px] bg-amber-200/50" />
                      <div className="w-full h-[1px] bg-amber-800/40" />
                    </div>
                    {/* Silver metal ferrule */}
                    <div className="w-2.5 h-3 bg-gradient-to-r from-slate-300 via-slate-100 to-slate-400" />
                    {/* Pink rubber eraser */}
                    <div className="w-3.5 h-3 bg-[#F472B6] rounded-r-md shadow-inner" />
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>

        {/* 14. Scene 9: "SEO Top In Google Search" - Central Google Socket Cavity & Kinetic Kicks */}
        <div
          ref={seoStageRef}
          className="absolute inset-0 flex items-center justify-center px-4 sm:px-8 md:px-12 pointer-events-none z-30 overflow-visible"
          style={{ opacity: 0 }}
        >
          {/* Google Tri-Color Green/Blue/Yellow Deep Ambient Wash */}
          <div
            ref={seoBgWashRef}
            className="absolute inset-0 pointer-events-none z-0 will-change-opacity"
            style={{
              background:
                "radial-gradient(circle at 25% 45%, rgba(52, 168, 83, 0.16) 0%, transparent 50%), radial-gradient(circle at 75% 55%, rgba(66, 133, 244, 0.16) 0%, transparent 52%), radial-gradient(circle at 50% 30%, rgba(251, 188, 5, 0.14) 0%, transparent 48%)",
              opacity: 0,
            }}
          />

          {/* Symmetrical 3-Column Center Stage: [SEO Top] [Google Socket Cavity] [In Google Search] */}
          <div
            className="w-full max-w-6xl mx-auto flex items-center justify-center relative select-none z-30 px-2 sm:px-4 scale-[0.68] xs:scale-[0.80] sm:scale-90 md:scale-100 origin-center"
            style={{ perspective: "1400px", transformStyle: "preserve-3d" }}
          >
            {/* Left Column: "SEO Top" (Unmasks and slides out when Google kicks left) */}
            <div className="flex-1 flex justify-end items-center pr-2 sm:pr-4 md:pr-6 overflow-visible">
              <div
                ref={seoLeftTextRef}
                className="inline-flex items-baseline font-black tracking-tight uppercase leading-none select-none whitespace-nowrap will-change-transform text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  opacity: 0,
                  filter: "blur(10px)",
                }}
              >
                {/* SEO in authentic Google Colors */}
                <span style={{ color: "#4285F4" }}>S</span>
                <span style={{ color: "#EA4335" }}>E</span>
                <span style={{ color: "#FBBC05" }}>O</span>
                <span className="ml-2.5 sm:ml-3 md:ml-4 text-slate-800">Top</span>
              </div>
            </div>

            {/* Center Column: Socket Cavity & Google Emblem Tile */}
            <div
              className="shrink-0 flex items-center justify-center relative z-20 mx-2 sm:mx-4"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Shockwave Energy Ripple upon docking */}
              <div
                ref={seoShockwaveRef}
                className="absolute w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border-2 border-emerald-400/60 pointer-events-none -z-10 shadow-[0_0_40px_rgba(52,168,83,0.35)]"
                style={{ opacity: 0, transform: "scale(0.8)" }}
              />

              {/* The Socket Cavity Hole */}
              <div
                ref={seoSocKetRef}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-2xl sm:rounded-3xl md:rounded-[30px] flex items-center justify-center relative select-none"
                style={{
                  backgroundColor: "#ECF0F3",
                  border: "1.5px solid #D1D9E6",
                  boxShadow:
                    "inset 6px 6px 16px #B8C4D6, inset -6px -6px 16px #FFFFFF",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Universal Neumorphic/Clay Google Tile */}
                <div
                  ref={seoGoogleTileRef}
                  className="w-full h-full rounded-2xl sm:rounded-3xl md:rounded-[30px] flex items-center justify-center relative select-none will-change-transform z-50 bg-white border border-slate-200/90 p-2.5 sm:p-3 md:p-3.5"
                  style={{
                    boxShadow:
                      "10px 10px 28px rgba(163,177,198,0.65), -10px -10px 28px #FFFFFF",
                    transformOrigin: "center center",
                    transformStyle: "preserve-3d",
                    opacity: 0,
                  }}
                >
                  <img
                    src="/google.png"
                    alt="Google"
                    className="w-full h-full object-contain drop-shadow-md select-none pointer-events-none"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: "In Google Search" (Unmasks and slides out when Google kicks right) */}
            <div className="flex-1 flex justify-start items-center pl-2 sm:pl-4 md:pl-6 overflow-visible">
              <div
                ref={seoRightTextRef}
                className="inline-flex items-baseline font-black tracking-tight leading-none select-none whitespace-nowrap will-change-transform text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  opacity: 0,
                  filter: "blur(10px)",
                }}
              >
                <span className="text-slate-700 mr-2 sm:mr-3 font-bold">In</span>
                {/* Google Multi-Color Brand Letters */}
                <span className="inline-flex tracking-tight mr-2 sm:mr-3">
                  <span style={{ color: "#4285F4" }}>G</span>
                  <span style={{ color: "#EA4335" }}>o</span>
                  <span style={{ color: "#FBBC05" }}>o</span>
                  <span style={{ color: "#4285F4" }}>g</span>
                  <span style={{ color: "#34A853" }}>l</span>
                  <span style={{ color: "#EA4335" }}>e</span>
                </span>
                <span
                  className="font-serif italic font-bold text-slate-800"
                  style={{ fontFamily: "Georgia, 'Playfair Display', serif" }}
                >
                  Search
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* SCENE 10: "24/7 ORGANIC TRAFFIC ON AUTOPILOT" + GOOGLE SEARCH & AI MODE */}
        <div
          ref={autopilotStageRef}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-30 select-none px-4 sm:px-6 md:px-8 py-3 sm:py-5"
          style={{ opacity: 0 }}
        >
          {/* Luminous Green / Yellow / Blue Ambient Wash with Fluid Water-Current Waves */}
          <div
            ref={autopilotBgWashRef}
            className="absolute inset-0 pointer-events-none z-0 will-change-opacity overflow-hidden"
            style={{ opacity: 0 }}
          >
            {/* Soft Ambient Radiance Blooms: Green, Yellow, Soft Blue */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 18% 35%, rgba(52, 211, 153, 0.20) 0%, transparent 55%), radial-gradient(circle at 82% 40%, rgba(251, 191, 36, 0.18) 0%, transparent 55%), radial-gradient(circle at 50% 85%, rgba(56, 189, 248, 0.18) 0%, transparent 60%)",
              }}
            />

            {/* Hypnotic Water-Current Undulating Waves */}
            <svg
              className="absolute inset-0 w-full h-full opacity-35 mix-blend-multiply pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 900"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="waterGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#34D399" stopOpacity="0.35" />
                  <stop offset="50%" stopColor="#FBBF24" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.30" />
                </linearGradient>
                <linearGradient id="waterGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.30" />
                  <stop offset="60%" stopColor="#34D399" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.20" />
                </linearGradient>
              </defs>
              <path
                d="M 0,380 C 280,340 440,430 720,390 C 1000,350 1180,440 1440,400 L 1440,900 L 0,900 Z"
                fill="url(#waterGrad1)"
                className="animate-pulse"
                style={{ animationDuration: "8s" }}
              />
              <path
                d="M 0,460 C 320,490 540,410 820,470 C 1100,530 1260,430 1440,480 L 1440,900 L 0,900 Z"
                fill="url(#waterGrad2)"
                className="animate-pulse"
                style={{ animationDuration: "12s" }}
              />
            </svg>
          </div>

          {/* Top Headline: "24/7 Organic Traffic on Autopilot" in Semi-dark (#1E293B) */}
          <div
            ref={autopilotTopHeaderRef}
            className="relative z-30 mb-4 sm:mb-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5 will-change-transform"
            style={{ opacity: 0, transform: "translateY(-30px)" }}
          >
            <h2
              className="font-heading font-black text-2xl sm:text-3xl md:text-5xl text-[#1E293B] tracking-tight select-none"
              style={{ fontFamily: "'Josefin Sans', sans-serif" }}
            >
              24/7 Organic Traffic
            </h2>

            {/* Floating 3D Robot Mascot (autoPilot.png) */}
            <div
              ref={autopilotRobotRef}
              className="relative flex items-center justify-center shrink-0 will-change-transform"
              style={{
                opacity: 0,
                transform: "scale(0) translateY(30px) rotate(-15deg)",
              }}
            >
              <div className="absolute -bottom-1.5 w-10 sm:w-14 h-2.5 rounded-full bg-slate-400/25 blur-xs -z-10" />
              <img
                src="/autoPilot.png"
                alt="Autopilot Robot"
                className="w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 object-contain drop-shadow-[0_10px_20px_rgba(99,102,241,0.30)] select-none pointer-events-none animate-bounce"
                style={{ animationDuration: "3.2s" }}
              />
            </div>

            {/* "on Autopilot" Pure Typography (NO PILL, NO TAG!) */}
            <span
              className="font-serif italic font-bold text-2xl sm:text-3xl md:text-5xl text-emerald-600 tracking-tight"
              style={{ fontFamily: "Georgia, 'Playfair Display', serif" }}
            >
              on Autopilot
            </span>
          </div>

          {/* Main Stage Grid: Left = Tablet Frame with Google Search & AI Overview, Right = Conversion Copy */}
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center relative z-30">
            {/* Left Column (Span 7): Sleek Tablet Device Shell */}
            <div
              ref={autopilotLeftColRef}
              className="lg:col-span-7 w-full max-w-[500px] lg:max-w-[540px] mx-auto rounded-[26px] sm:rounded-[30px] border-[7px] sm:border-[9px] border-slate-800/95 bg-white shadow-[0_20px_50px_-10px_rgba(0,0,0,0.18)] overflow-hidden relative will-change-transform"
              style={{ opacity: 0, transform: "scale(0.9) translateY(30px)" }}
            >
              {/* Tablet Camera Pinhole */}
              <div className="w-full flex items-center justify-center pt-1.5 pb-1 bg-slate-800/95">
                <div className="w-2 h-2 rounded-full bg-slate-900 border border-slate-700/60" />
              </div>

              {/* Inside Tablet Screen Content */}
              <div className="bg-white p-3.5 sm:p-4.5 flex flex-col gap-3 select-none text-left">
                {/* Google Brand Header & Search Bar inside Tablet */}
                <div className="flex flex-col gap-2 pb-2 border-b border-slate-100">
                  <div className="flex items-center justify-between">
                    {/* Authentic Multi-color Google Logo */}
                    <div className="font-heading font-bold text-lg sm:text-xl tracking-tight select-none">
                      <span style={{ color: "#4285F4" }}>G</span>
                      <span style={{ color: "#EA4335" }}>o</span>
                      <span style={{ color: "#FBBC05" }}>o</span>
                      <span style={{ color: "#4285F4" }}>g</span>
                      <span style={{ color: "#34A853" }}>l</span>
                      <span style={{ color: "#EA4335" }}>e</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                      <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-[10px]">UK</span>
                    </div>
                  </div>

                  {/* Google Search Bar */}
                  <div
                    ref={autopilotSearchBarContainerRef}
                    className="w-full h-10 sm:h-11 rounded-full bg-white border border-slate-200 shadow-2xs flex items-center px-3 sm:px-3.5 gap-2"
                  >
                    <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 shrink-0">
                      <Plus className="w-3 h-3 stroke-[2.5]" />
                    </div>

                    <div className="flex-1 flex items-center overflow-hidden h-full">
                      <span
                        ref={autopilotTypedQueryRef}
                        className="inline-block overflow-hidden whitespace-nowrap text-xs sm:text-[13px] font-semibold text-slate-800 tracking-tight"
                        style={{ width: "0%" }}
                      >
                        Best Software in UK
                      </span>
                      <span
                        ref={autopilotCursorRef}
                        className="inline-block w-[2px] h-3.5 bg-blue-600 animate-pulse ml-0.5 shrink-0"
                      />
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <Mic className="w-3.5 h-3.5 text-blue-500 stroke-[2.2]" />
                      <Camera className="w-3.5 h-3.5 text-amber-500 stroke-[2.2]" />
                      <div className="px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-semibold text-[10px] flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5 text-indigo-600 fill-indigo-600/40" />
                        <span>AI Mode</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Real Google AI Overview (Identical to Image 1: media_1792908150158_3441e70f.png) */}
                <div
                  ref={autopilotAiOverviewRef}
                  className="w-full flex flex-col will-change-transform pt-0.5"
                  style={{ opacity: 0, transform: "translateY(15px)" }}
                >
                  {/* Blue 4-Point Gemini Sparkle + AI Overview */}
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
                    <span className="font-semibold text-xs sm:text-sm text-slate-800 tracking-tight">
                      AI Overview
                    </span>
                  </div>

                  {/* Synthesis Paragraph with link and 🔗 icon */}
                  <p className="text-[11px] sm:text-xs text-slate-700 leading-relaxed mb-2.5">
                    <span className="text-blue-700 underline font-semibold cursor-pointer">ApexFlow UK</span> is a premier growth software in the UK designed to acquire 24/7 organic search rankings and convert high-intent buyers on complete autopilot without ad spend. <span className="inline-block text-slate-400 text-[10px] ml-0.5">🔗</span>
                  </p>

                  {/* Key Features heading */}
                  <h4 className="text-xs font-bold text-slate-800 mb-1.5">
                    Key Features
                  </h4>

                  {/* Bullet List */}
                  <ul className="space-y-1 text-[11px] text-slate-700 mb-2.5">
                    <li className="flex items-start gap-1">
                      <span className="text-slate-400">•</span>
                      <span><strong className="text-slate-900 font-semibold">Autopilot Reach:</strong> Target of capturing high-intent UK keyword traffic 24/7 without recurring ad bills. <span className="text-slate-400 text-[9px] ml-0.5">🔗</span></span>
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-slate-400">•</span>
                      <span><strong className="text-slate-900 font-semibold">Buyer Conversion:</strong> Delivers 4.2x higher conversion from organic search than standard paid ads. <span className="text-slate-400 text-[9px] ml-0.5">🔗</span></span>
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-slate-400">•</span>
                      <span><strong className="text-slate-900 font-semibold">Zero Ad Budget:</strong> Compounding organic search presence with $0 monthly paid advertisement costs. <span className="text-slate-400 text-[9px] ml-0.5">🔗</span></span>
                    </li>
                  </ul>

                  {/* Show More Pill Button */}
                  <div className="pt-1.5 flex items-center justify-center">
                    <button className="px-4 py-0.5 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-medium text-[10px] sm:text-[11px] flex items-center gap-1 shadow-2xs">
                      <span>Show more</span>
                      <span className="text-[8px]">∨</span>
                    </button>
                  </div>
                </div>

                {/* Rank #1 Organic Google Search Result Card */}
                <div
                  ref={autopilotOrganicResultRef}
                  className="w-full pt-2.5 border-t border-slate-200/80 flex flex-col will-change-transform"
                  style={{ opacity: 0, transform: "translateY(15px)" }}
                >
                  <div className="flex items-center gap-1.5 mb-0.5 text-[10px] text-slate-500">
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[7px]">
                      AF
                    </div>
                    <span className="truncate">https://www.apexflow.co.uk › software › best-uk</span>
                  </div>

                  <h5 className="text-xs sm:text-[13px] font-bold text-[#1a0dab] hover:underline cursor-pointer flex items-center gap-1 leading-snug">
                    Best Software in UK 2026 - Ranked #1 Autopilot Platform
                    <ExternalLink className="w-3 h-3 inline text-blue-500 shrink-0" />
                  </h5>

                  <div className="flex items-center gap-1.5 my-0.5 text-[10px] text-amber-500 font-bold">
                    <span>★★★★★</span>
                    <span className="text-slate-700 font-medium text-[10px]">4.9 (1,420 reviews)</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-1.5 py-0.2 rounded-full text-[8px] font-bold">
                      #1 Organic Rank
                    </span>
                  </div>

                  <p className="text-[10px] sm:text-[11px] text-slate-600 leading-relaxed line-clamp-2">
                    Ranked top of Google UK for highest intent commercial searches. Autopilot customer growth engine that compounds daily with zero ad budget.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column (Span 5): Clean Kinetic Typography & Value Points */}
            <div
              ref={autopilotRightCopyRef}
              className="lg:col-span-5 flex flex-col justify-center px-2 lg:pl-6 will-change-transform text-left"
              style={{ opacity: 0, transform: "translateX(40px)" }}
            >
              {/* Main Headline: "Rank At the top of Google" in Semi-dark (#1E293B) */}
              <h3
                className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-[#1E293B] leading-[1.15] tracking-tight mb-4 select-none"
                style={{ fontFamily: "'Josefin Sans', sans-serif" }}
              >
                Rank{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600">
                  At the top of
                </span>{" "}
                <span className="inline-flex tracking-tight">
                  <span style={{ color: "#4285F4" }}>G</span>
                  <span style={{ color: "#EA4335" }}>o</span>
                  <span style={{ color: "#FBBC05" }}>o</span>
                  <span style={{ color: "#4285F4" }}>g</span>
                  <span style={{ color: "#34A853" }}>l</span>
                  <span style={{ color: "#EA4335" }}>e</span>
                </span>
              </h3>

              {/* Sub-headline / Copy */}
              <p className="text-sm sm:text-base md:text-lg text-[#334155] leading-relaxed mb-6 font-medium">
                for the exact keywords your buyers search, bringing you{" "}
                <strong className="text-[#1E293B] font-bold">high-intent customers</strong>{" "}
                <span
                  className="font-serif italic font-bold text-emerald-600 underline decoration-emerald-300 decoration-wavy"
                  style={{ fontFamily: "Georgia, 'Playfair Display', serif" }}
                >
                  without paying for ads.
                </span>
              </p>

              {/* Pure Clean Typography Value Checklist (NO BOXES, NO PILLS!) */}
              <div className="space-y-3 pt-4 border-t border-slate-200/80">
                <div className="flex items-center gap-3 text-sm sm:text-base text-[#334155] font-semibold">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Exact-match buyer intent keyword dominance</span>
                </div>
                <div className="flex items-center gap-3 text-sm sm:text-base text-[#334155] font-semibold">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>24/7 autopilot organic reach on Google UK</span>
                </div>
                <div className="flex items-center gap-3 text-sm sm:text-base text-[#334155] font-semibold">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>High conversion rate without paying for ads</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════════ */}
        {/* 13. SCENE 11: "VISIBLE IN AI" - SOFT WHITE/BLUE 3D CAROUSEL & CHAT CANVAS */}
        {/* ═══════════════════════════════════════════════════════════════════════ */}
        <div
          ref={aiStageRef}
          className="absolute inset-0 pointer-events-none z-20 flex flex-col items-center justify-between overflow-hidden"
          style={{ opacity: 0 }}
        >
          {/* A. Soft White & Soft Blue Atmosphere (NO PURE BLACK!) */}
          <div
            ref={aiBgWashRef}
            className="absolute inset-0 pointer-events-none"
            style={{
              opacity: 0,
              background:
                "radial-gradient(ellipse 95% 85% at 50% 25%, #F0F9FF 0%, #F8FAFC 55%, #FAFBFD 100%)",
            }}
          >
            {/* Luminous Soft Blue & Sky Blooms */}
            <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] rounded-full bg-sky-200/40 blur-[130px] pointer-events-none" />
            <div className="absolute top-[25%] right-[15%] w-[480px] h-[480px] rounded-full bg-blue-100/60 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[5%] left-[35%] w-[420px] h-[420px] rounded-full bg-indigo-100/50 blur-[110px] pointer-events-none" />
          </div>

          {/* B. Top Kinetic Header Container (Headline & Dynamic Carousel Subtitle) */}
          <div
            ref={aiHeaderContainerRef}
            className="absolute top-12 sm:top-16 md:top-20 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center text-center w-full px-4 max-w-4xl will-change-transform"
          >
            {/* Headline: "Visible in AI" */}
            <h2
              ref={aiVisibleTitleRef}
              className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-slate-900 tracking-tight select-none will-change-transform"
              style={{
                fontFamily: "'Josefin Sans', sans-serif",
                textShadow: "0 4px 20px rgba(14,165,233,0.12)",
              }}
            >
              Visible in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600">
                AI
              </span>
            </h2>

            {/* Dynamic Sub-headline: Changes based on which card is in center! */}
            <div className="relative mt-3 h-8 w-full flex items-center justify-center">
              {/* 1. Gemini Active */}
              <p
                ref={aiSubtitleGeminiRef}
                className="absolute text-base sm:text-lg md:text-xl font-semibold tracking-wide text-slate-600 select-none will-change-transform"
                style={{ opacity: 0 }}
              >
                Recommended First By{" "}
                <span className="font-bold text-sky-600">
                  Gemini
                </span>
              </p>

              {/* 2. ChatGPT Active */}
              <p
                ref={aiSubtitleGptRef}
                className="absolute text-base sm:text-lg md:text-xl font-semibold tracking-wide text-slate-600 select-none will-change-transform"
                style={{ opacity: 0 }}
              >
                Recommended First By{" "}
                <span className="font-bold text-emerald-600">
                  ChatGPT
                </span>
              </p>

              {/* 3. Claude Active */}
              <p
                ref={aiSubtitleClaudeRef}
                className="absolute text-base sm:text-lg md:text-xl font-semibold tracking-wide text-slate-600 select-none will-change-transform"
                style={{ opacity: 0 }}
              >
                Recommended First By{" "}
                <span className="font-bold text-amber-600">
                  Claude
                </span>
              </p>
            </div>
          </div>

          {/* C. 3D AI Model Cards Rotary Drum Carousel (Clearly Elevated in Lower Half) */}
          <div
            ref={aiCardsCarouselRef}
            className="absolute bottom-6 sm:bottom-10 md:bottom-12 left-1/2 -translate-x-1/2 z-25 flex items-center justify-center will-change-transform"
            style={{
              perspective: "1500px",
              transformStyle: "preserve-3d",
              opacity: 0,
            }}
          >
            {/* Card 1: Google Gemini (Initially Front Center) */}
            <div
              ref={aiCardGeminiRef}
              className="absolute w-[260px] sm:w-[300px] h-[330px] sm:h-[360px] rounded-[32px] p-6 flex flex-col justify-start items-center select-none backdrop-blur-2xl will-change-transform"
              style={{
                background: "linear-gradient(155deg, rgba(255, 255, 255, 0.98), rgba(240, 249, 255, 0.95))",
                border: "2px solid rgba(56, 189, 248, 0.6)",
                boxShadow: "0 20px 50px rgba(14, 165, 233, 0.16), 0 0 30px rgba(56, 189, 248, 0.15)",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="w-20 h-20 rounded-2xl bg-sky-50 border border-sky-200/90 flex items-center justify-center p-3 shadow-md mt-2">
                <img
                  src="/logo-google-gemini.webp"
                  alt="Google Gemini"
                  className="w-14 h-14 object-contain"
                />
              </div>
              <h4 className="text-xl font-black text-slate-800 tracking-tight mt-4">
                Google Gemini
              </h4>
              <span className="text-xs font-semibold text-sky-600 tracking-wider uppercase mt-1">
                DeepMind AI
              </span>
            </div>

            {/* Card 2: ChatGPT */}
            <div
              ref={aiCardGptRef}
              className="absolute w-[260px] sm:w-[300px] h-[330px] sm:h-[360px] rounded-[32px] p-6 flex flex-col justify-start items-center select-none backdrop-blur-2xl will-change-transform"
              style={{
                background: "linear-gradient(155deg, rgba(255, 255, 255, 0.98), rgba(236, 253, 245, 0.95))",
                border: "2px solid rgba(16, 185, 129, 0.6)",
                boxShadow: "0 20px 50px rgba(16, 185, 129, 0.16), 0 0 30px rgba(16, 185, 129, 0.15)",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="w-20 h-20 rounded-2xl bg-emerald-50 border border-emerald-200/90 flex items-center justify-center p-3 shadow-md mt-2">
                <img
                  src="/chatgpt-logo-png_seeklogo-465219.png"
                  alt="ChatGPT"
                  className="w-14 h-14 object-contain"
                />
              </div>
              <h4 className="text-xl font-black text-slate-800 tracking-tight mt-4">
                OpenAI ChatGPT
              </h4>
              <span className="text-xs font-semibold text-emerald-600 tracking-wider uppercase mt-1">
                GPT-4o Engine
              </span>
            </div>

            {/* Card 3: Claude */}
            <div
              ref={aiCardClaudeRef}
              className="absolute w-[260px] sm:w-[300px] h-[330px] sm:h-[360px] rounded-[32px] p-6 flex flex-col justify-start items-center select-none backdrop-blur-2xl will-change-transform"
              style={{
                background: "linear-gradient(155deg, rgba(255, 255, 255, 0.98), rgba(254, 243, 199, 0.95))",
                border: "2px solid rgba(245, 158, 11, 0.6)",
                boxShadow: "0 20px 50px rgba(245, 158, 11, 0.16), 0 0 30px rgba(245, 158, 11, 0.15)",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="w-20 h-20 rounded-2xl bg-amber-50 border border-amber-200/90 flex items-center justify-center p-3 shadow-md mt-2">
                <img
                  src="/claude-ai.svg"
                  alt="Claude"
                  className="w-14 h-14 object-contain"
                />
              </div>
              <h4 className="text-xl font-black text-slate-800 tracking-tight mt-4">
                Anthropic Claude
              </h4>
              <span className="text-xs font-semibold text-amber-600 tracking-wider uppercase mt-1">
                Sonnet 3.5
              </span>
            </div>
          </div>

          {/* D. Main Presentation Container: Split Grid (Left: Chat Canvas, Right: Clean Copy) */}
          <div
            ref={aiPresentationGridRef}
            className="absolute inset-0 z-30 flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-12 will-change-transform"
            style={{ opacity: 0 }}
          >
            <div className="max-w-6xl w-full mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-6 lg:gap-12 items-center">
                {/* Left Column (Span 7): Authentic Clean Gemini Chat Canvas (Soft White) */}
                <div className="lg:col-span-7 flex justify-center">
                  <div
                    ref={aiChatCanvasRef}
                    className="w-full max-w-xl h-[260px] xs:h-[290px] sm:h-[350px] lg:h-[480px] rounded-2xl sm:rounded-[32px] p-3.5 sm:p-6 lg:p-7 flex flex-col justify-between backdrop-blur-2xl shadow-xl relative overflow-hidden select-none will-change-transform"
                    style={{
                      background: "linear-gradient(165deg, rgba(255, 255, 255, 0.96), rgba(248, 250, 252, 0.98))",
                      border: "1.5px solid rgba(224, 242, 254, 0.9)",
                      boxShadow: "0 20px 50px rgba(15, 23, 42, 0.08), 0 0 35px rgba(56, 189, 248, 0.12)",
                    }}
                  >
                    {/* Minimal Top Bar: Only Gemini Logo + Name */}
                    <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 relative z-10">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-sky-50 border border-sky-200/80 p-1 flex items-center justify-center shadow-xs">
                          <img
                            src="/logo-google-gemini.webp"
                            alt="Gemini"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span className="text-base font-bold text-slate-800 tracking-tight">Gemini</span>
                      </div>
                    </div>

                    {/* Chat Feed: User Bubble + Authentic AI Bullet-Point Answer */}
                    <div className="flex-1 py-4 flex flex-col justify-start overflow-hidden relative z-10">
                      {/* User Sent Message Bubble */}
                      <div
                        ref={aiChatUserBubbleRef}
                        className="flex justify-end mb-4 will-change-transform"
                        style={{ opacity: 0 }}
                      >
                        <div className="bg-sky-50 border border-sky-200/80 text-slate-800 text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-2xl rounded-tr-sm shadow-xs">
                          Best Software in UK
                        </div>
                      </div>

                      {/* Gemini Real-Time Response: Clean Text & Bullet Points (NO CLUMS BUBBLES/TAGS!) */}
                      <div
                        ref={aiChatStreamResponseRef}
                        className="space-y-3 will-change-transform text-left"
                        style={{ opacity: 0, transform: "translateY(15px)" }}
                      >
                        <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
                          Based on verified UK business performance data, commercial client ratings, and enterprise software benchmarks, here is the top-ranked software:
                        </p>

                        <div className="space-y-2.5 pt-1 text-xs sm:text-[13px] text-slate-700 leading-relaxed">
                          <div className="flex items-start gap-2">
                            <span className="text-sky-600 font-bold">•</span>
                            <span>
                              <strong className="text-slate-900 font-bold">ApexFlow Platform</strong> — Ranked #1 overall for automated organic pipeline acquisition. Delivers continuous high-intent customer reach with zero ad spend and an average 4.9/5 rating across 1,400+ UK reviews.
                            </span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-sky-600 font-bold">•</span>
                            <span>
                              <strong className="text-slate-900 font-bold">Autonomous Reliability</strong> — Engineered for 24/7 continuous search indexing, seamless integration, and 99.98% verified enterprise uptime.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Input Field: Typing happens HERE! */}
                    <div className="pt-2 relative z-10">
                      <div className="w-full px-4 py-2.5 rounded-full bg-slate-50 border border-slate-200/90 flex items-center justify-between text-xs shadow-inner">
                        <div className="flex items-center gap-2.5 text-slate-400 flex-1 overflow-hidden">
                          <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center shrink-0">
                            <Plus className="w-3.5 h-3.5" />
                          </div>

                          <div className="relative flex items-center flex-1 overflow-hidden">
                            {/* Auto-typing text */}
                            <span
                              ref={aiChatInputTypedTextRef}
                              className="inline-block overflow-hidden whitespace-nowrap font-medium text-slate-800 border-r-2 border-sky-500 pr-0.5 text-xs sm:text-sm"
                              style={{ width: "0%" }}
                            >
                              Best Software in UK
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-slate-400 shrink-0 ml-2">
                          <Mic className="w-4 h-4 text-slate-400" />
                          <button
                            ref={aiChatSendBtnRef}
                            className="w-7 h-7 rounded-full bg-sky-500 text-white flex items-center justify-center shadow-md will-change-transform"
                          >
                            <Sparkles className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column (Span 5): Clean Kinetic Typography & Value Points */}
                <div
                  ref={aiRightCopyRef}
                  className="lg:col-span-5 flex flex-col justify-center px-2 lg:pl-4 will-change-transform text-left"
                  style={{ opacity: 0, transform: "translateX(35px)" }}
                >
                  {/* Eyebrow Tag */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold uppercase tracking-wider mb-3 w-fit">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>AI Search Dominance</span>
                  </div>

                  {/* Main Headline */}
                  <h3
                    className="font-heading font-black text-lg sm:text-2xl md:text-4xl text-slate-900 leading-[1.18] tracking-tight mb-2 sm:mb-4 select-none"
                    style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                  >
                    When Buyers Ask AI{" "}
                    <span className="block text-slate-600 font-medium text-sm sm:text-lg md:text-2xl mt-0.5 sm:mt-1">
                      for the best in your industry,
                    </span>
                  </h3>

                  {/* Sub-headline / Punchline */}
                  <p className="text-xs sm:text-base md:text-xl text-slate-700 leading-relaxed mb-2 sm:mb-6 font-medium">
                    your Brand Shows up as{" "}
                    <strong className="font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-emerald-600 text-xl sm:text-2xl">
                      #1 trusted answer
                    </strong>
                  </p>

                  {/* Pure Clean Typography Value Checklist */}
                  <div className="space-y-3.5 pt-4 border-t border-slate-200/80">
                    <div className="flex items-center gap-3 text-sm sm:text-base text-slate-700 font-semibold">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>First recommended choice in ChatGPT & Gemini</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm sm:text-base text-slate-700 font-semibold">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>Zero hallucination: accurate pricing & features</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm sm:text-base text-slate-700 font-semibold">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>Captures high-intent buyers replacing Google with AI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Scroll Orchestration Cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 pointer-events-none opacity-50">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-ping" />
          <span className="text-[10px] sm:text-xs font-mono font-medium tracking-[0.22em] uppercase text-slate-400">
            Scroll to orchestrate
          </span>
        </div>
      </div>
    </section>
  );
}