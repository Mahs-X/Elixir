"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import {
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Layers,
  Code2,
  CheckCircle2,
  Clock,
  Sliders,
  ChevronRight,
  Maximize2,
  Bell,
  MessageSquare,
  AlertTriangle,
  Mail,
  Zap,
  TrendingUp,
  ShieldCheck,
  Send,
  Eye,
} from "lucide-react";

interface AnimationScene {
  id: number;
  text_content: string;
  display_title: string;
  timestamp_range: string;
  start_sec: number;
  end_sec: number;
  animation_category: string;
  visual_style: {
    color_desc: string;
    bg_style: string;
    font_weight: string;
    details: string;
  };
  motion_mechanics: {
    entrance_effect: string;
    environment_effect: string;
    easing: string;
    director_upgrade: string;
  };
  code_snippet: {
    gsap: string;
    css: string;
  };
}

const ANIMATIONS: AnimationScene[] = [
  {
    id: 1,
    text_content: "Can't keep up?",
    display_title: "Can't keep up?",
    timestamp_range: "00:04.000 - 00:06.800",
    start_sec: 4.0,
    end_sec: 6.8,
    animation_category: "Static Reveal with Background Burst Wipe",
    visual_style: {
      color_desc: "#000000 (Solid Black) to High-Contrast White Invert",
      bg_style: "Crisp Pure White → Explosive Royal Cobalt Blue (#0066FF)",
      font_weight: "Font Black (900), Extreme Tight Tracking (-0.04em)",
      details: "বোল্ড মিনিম্যালিস্টিক টাইপোগ্রাফি যা দর্শকদের দৃষ্টি সেন্টারে আটকে রাখে।",
    },
    motion_mechanics: {
      entrance_effect: "Hard Cut: টেক্সটটি কোনো ফেড ছাড়াই 0.0s-এ অপাসিটি ১ হয়ে স্ক্রিনে লক হয়।",
      environment_effect: "00:05.000-এ সেন্ট্রাল ব্লু সার্কেল স্কেল ০ থেকে ৬০-এ ব্লাস্ট করে পুরো ক্যানভাস কভার করে, টেক্সট স্থির থেকে গতির চরম বিভ্রম তৈরি করে।",
      easing: "expo.inOut (Aggressive snap with zero bounce)",
      director_upgrade: "সার্কেলের এজটিতে একটি আল্ট্রা-সফট গ্লো অ্যাড করলে ট্রানজিশনটি আরও প্রিমিয়াম দেখায়।",
    },
    code_snippet: {
      gsap: `// 1. Text Hard Cut Snap
gsap.set('.text-burst', { autoAlpha: 1, scale: 1 });

// 2. Center Circle Explosive Expansion Wipe (00:05.000)
gsap.to('.circle-burst', {
  scale: 60,
  duration: 0.65,
  ease: 'expo.inOut',
  onStart: () => {
    gsap.to('.text-burst', { color: '#ffffff', duration: 0.2 });
  }
});`,
      css: `.circle-burst {
  width: 48px;
  height: 48px;
  border-radius: 9999px;
  background: #0066FF;
  transform: scale(0);
  pointer-events: none;
}`,
    },
  },
  {
    id: 2,
    text_content: "Meet your new AI workspace",
    display_title: "Meet your new AI workspace",
    timestamp_range: "00:07.000 - 00:10.000",
    start_sec: 7.0,
    end_sec: 10.0,
    animation_category: "Staggered Masked Slide-Up (Word by Word)",
    visual_style: {
      color_desc: "'Meet your new' সলিড চারকোল ব্ল্যাক | 'AI workspace' উজ্জ্বল সিয়ান-ব্লু গ্রেডিয়েন্ট",
      bg_style: "Clean Minimal Light Gray (#F8FAFC) with 1px Micro Grid",
      font_weight: "SemiBold & ExtraBold Display",
      details: "background: linear-gradient(135deg, #0070F3 0%, #00C6FF 100%) টেক্সট ক্লিপিং।",
    },
    motion_mechanics: {
      entrance_effect: "প্রতিটি শব্দের প্যারেন্ট কন্টেইনারে overflow: hidden মাস্ক বসানো।",
      environment_effect: "প্রতিটি শব্দ নিচ থেকে y: 110% থেকে y: 0% এ উঠে আসে এবং সামান্য রোটেশন (rotateX: 15deg) থেকে সোজা হয়।",
      easing: "cubic-bezier(0.16, 1, 0.3, 1) — Apple/Framer Spring Feel",
      director_upgrade: "শব্দগুলোর মাঝে 0.06s স্ট্যাগার গ্যাপ টাইপিং ও রিভিলের নিখুঁত ব্যালেন্স দেয়। সাথে ফ্লোটিং '✦ AI 2.0' ব্যাজ দিলে ভ্যালু বাড়ে।",
    },
    code_snippet: {
      gsap: `// Word-by-word masked reveal
gsap.fromTo('.word-mask span', 
  { y: '115%', rotateX: 18, opacity: 0 },
  { 
    y: '0%', 
    rotateX: 0, 
    opacity: 1, 
    stagger: 0.065, 
    duration: 0.75, 
    ease: 'power3.out' 
  }
);`,
      css: `.word-mask {
  display: inline-block;
  overflow: hidden;
  vertical-align: bottom;
  perspective: 600px;
}
.word-mask span {
  display: inline-block;
  will-change: transform, opacity;
}`,
    },
  },
  {
    id: 3,
    text_content: "Built-in",
    display_title: "Built-in",
    timestamp_range: "00:13.400 - 00:14.000",
    start_sec: 13.4,
    end_sec: 14.0,
    animation_category: "Soft Fade-in & Scale-up (Zoom-in)",
    visual_style: {
      color_desc: "হালকা নীল থেকে গাঢ় নীলের সফট গ্রেডিয়েন্ট (#38BDF8 → #0284C7 → #1D4ED8)",
      bg_style: "Blended Glassmorphic SaaS Dashboard Mockup with Blurred Charts",
      font_weight: "Bold Display (800)",
      details: "পেছনে ব্লার হওয়া ড্যাশবোর্ড ইন্টারফেসের উপর সেন্ট্রাল হিরো টেক্সট ফ্লোট করে।",
    },
    motion_mechanics: {
      entrance_effect: "Scale 0.82 থেকে 1.00-এ স্মুথ ম্যাক্রো পুশ-ইন।",
      environment_effect: "স্কেলিংয়ের সাথে সাথে অপাসিটি ০ থেকে ১ এবং একটি আল্ট্রা-সফট ব্লার ফিল্টার (8px থেকে 0px) শার্প ফোকাসে আসে।",
      easing: "back.out(1.15) — অত্যন্ত নরম এবং লাক্সারিয়াস কুশনিং স্টপ।",
      director_upgrade: "ব্যাকগ্রাউন্ডের ড্যাশবোর্ড কার্ডটি সামান্য জুম-আউট (1.02 থেকে 1.0) হলে টেক্সট ও ইন্টারফেসের গভীরতা দ্বিগুণ স্পষ্ট হয়।",
    },
    code_snippet: {
      gsap: `// Soft macro zoom-in with blur resolve
gsap.fromTo('.builtin-text',
  { scale: 0.82, opacity: 0, filter: 'blur(8px)' },
  { 
    scale: 1, 
    opacity: 1, 
    filter: 'blur(0px)', 
    duration: 0.65, 
    ease: 'power2.out' 
  }
);`,
      css: `.builtin-text {
  background: linear-gradient(135deg, #38BDF8 0%, #0284C7 50%, #1D4ED8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 4px 16px rgba(2, 132, 199, 0.25));
}`,
    },
  },
  {
    id: 4,
    text_content: "Business analytics",
    display_title: "Business analytics",
    timestamp_range: "00:14.200 - 00:15.000",
    start_sec: 14.2,
    end_sec: 15.0,
    animation_category: "Left-to-Right Clip Path Wipe",
    visual_style: {
      color_desc: "#000000 (Solid Black) / Modern Minimal Dark Charcoal",
      bg_style: "Glassmorphic Metric Card with Active Chart Highlights",
      font_weight: "ExtraBold (800) with Clean Modern Geometry",
      details: "আগের 'Built-in' টেক্সটের অবস্থানে বাম থেকে ডানে চকচকে লেজার ওয়াইপ হয়ে প্রতিস্থাপিত হয়।",
    },
    motion_mechanics: {
      entrance_effect: "CSS clip-path দিয়ে হরিজন্টাল স্লাইস মাস্ক। শুরুতে ডান দিক 0%, অ্যানিমেশনে 100% প্রশস্ত হয়।",
      environment_effect: "একটি উল্লম্ব আলোকিত নিয়ন স্ক্যানিং বার (Laser Guide Line) মাস্কের ফ্রন্ট-এজে ট্রাভেল করে।",
      easing: "power2.inOut (Linear/Raycast Precision Speed Curve)",
      director_upgrade: "লেজার গাইডের সাথে সাথে সামান্য লেটার-স্পেসিং এক্সপ্যানশন দিলে টেক্সটটি নিখুঁত প্রফেশনাল অথরিটি পায়।",
    },
    code_snippet: {
      gsap: `// Left-to-Right Clip Path Wipe with Laser Bar
const tl = gsap.timeline();
tl.fromTo('.analytics-text',
  { clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' },
  { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: 0.75, ease: 'power2.inOut' }
);
tl.fromTo('.laser-guide',
  { left: '0%', opacity: 1 },
  { left: '100%', opacity: 0, duration: 0.75, ease: 'power2.inOut' },
  0
);`,
      css: `.analytics-text {
  clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
  position: relative;
}
.laser-guide {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 3px;
  background: #0070F3;
  box-shadow: 0 0 12px #00C6FF;
}`,
    },
  },
  {
    id: 5,
    text_content: "Chat With our AI Bot",
    display_title: "Chat With our AI Bot",
    timestamp_range: "00:19.500 - 00:21.200",
    start_sec: 19.5,
    end_sec: 21.2,
    animation_category: "Staggered Line-by-Line Slide-up",
    visual_style: {
      color_desc: "Line 1: #1E293B (গাঢ় ধূসর) | Line 2: #64748B (মিডিয়াম ধূসর) | Line 3: #000000 + ব্লু ব্যাজ",
      bg_style: "Dual Tone Studio Background with AI Chat Prompt Card",
      font_weight: "Line 1: Bold | Line 2: Medium | Line 3: Black 900",
      details: "৩টি স্বতন্ত্র লাইন যা চোখের রিডিং ফ্লো ওপর থেকে নিচে সুশৃঙ্খলভাবে নামিয়ে আনে।",
    },
    motion_mechanics: {
      entrance_effect: "প্রতিটি লাইন আলাদা মাস্কড ডিভে y: 35px এবং opacity: 0 থেকে উপরে স্লাইড করে।",
      environment_effect: "লাইন ১ ওঠার ঠিক ০.১ সেকেন্ড পর লাইন ২, এবং তার ০.১ সেকেন্ড পর লাইন ৩ সম্পূর্ণ ওঠে।",
      easing: "power3.out (বাস্তবসম্মত গ্র্যাভিটি-ফ্রি ইনার্শিয়া)",
      director_upgrade: "লাইন ৩ ওঠার সাথে সাথে পাশে একটি ইন্টারঅ্যাক্টিভ AI বাবল '⚡ Instant responses ready' ফুটে উঠলে কনভার্সন বাড়ে।",
    },
    code_snippet: {
      gsap: `// Staggered 3-tier Line Translation
gsap.fromTo('.chat-line',
  { y: 35, opacity: 0 },
  { 
    y: 0, 
    opacity: 1, 
    stagger: 0.12, 
    duration: 0.65, 
    ease: 'power3.out' 
  }
);`,
      css: `.chat-line-wrap {
  overflow: hidden;
  padding: 4px 0;
}`,
    },
  },
  {
    id: 6,
    text_content: "No more chaos.",
    display_title: "No more chaos.",
    timestamp_range: "00:21.400 - 00:23.000",
    start_sec: 21.4,
    end_sec: 23.0,
    animation_category: "Z-Depth Push Back (Zoom-out Parallax)",
    visual_style: {
      color_desc: "'No more' ব্লু গ্রেডিয়েন্ট (#0066FF → #00C6FF) | 'chaos.' সলিড ব্ল্যাক",
      bg_style: "Dynamic Viewport with Floating Chaos Notifications (Slack, Jira, Mail)",
      font_weight: "Heavy Impact Display (900)",
      details: "টেক্সটের পেছনে গভীরতা তৈরি করতে 3D পার্সপেক্টিভ ক্যামেরা পুশ-ব্যাক ব্যবহৃত।",
    },
    motion_mechanics: {
      entrance_effect: "প্রথমে লেখাটি সেন্টারে বড় আকারে (scale: 1.05) প্রভাবশালীভাবে আসে।",
      environment_effect: "00:22.200-এ চারটি বিশৃঙ্খল নোটিফিকেশন কার্ড চার কোণা থেকে সামনে এসে পড়ে, টেক্সটটি পেছনের দিকে সরে যায় (scale: 0.65, opacity: 0.38, blur: 2px)।",
      easing: "power3.inOut (সিনেমাটিক ক্যামেরা জুম-আউট ডলি ফিল)",
      director_upgrade: "এরপর একটি 'AI Auto-Resolve' পালস এসে নোটিফিকেশনগুলোকে এক ক্লিকে ক্লিন গ্রিন টিকে রূপান্তরিত করে শান্তি ফিরিয়ে আনে।",
    },
    code_snippet: {
      gsap: `const tl = gsap.timeline();
// 1. Text initially bold & centered
tl.set('.chaos-text', { scale: 1.05, opacity: 1 });

// 2. Notifications swarm in (00:22.200)
tl.from('.chaos-card', {
  scale: 0.3,
  opacity: 0,
  y: 60,
  stagger: 0.08,
  duration: 0.6,
  ease: 'back.out(1.4)'
}, '+=0.4');

// 3. Text pushes back into Z-depth
tl.to('.chaos-text', {
  scale: 0.65,
  opacity: 0.35,
  y: -25,
  filter: 'blur(2px)',
  duration: 0.85,
  ease: 'power3.inOut'
}, '<');`,
      css: `.chaos-stage {
  perspective: 1200px;
}
.chaos-text {
  transform-style: preserve-3d;
  will-change: transform, opacity, filter;
}`,
    },
  },
  {
    id: 7,
    text_content: "Workly \n Turn messages into action.",
    display_title: "Workly — Turn messages into action.",
    timestamp_range: "00:24.800 - 00:27.200",
    start_sec: 24.8,
    end_sec: 27.2,
    animation_category: "Title Zoom-in & Subtitle Word Stagger",
    visual_style: {
      color_desc: "Title: বোল্ড ডিপ কোবাল্ট ব্লু (#0052FF) | Subtitle: পরিচ্ছন্ন শার্প চারকোল (#1E293B)",
      bg_style: "Radiant Light Studio with Ambient Cyan Radial Halo",
      font_weight: "Title: 900 Ultra-Bold | Subtitle: 600 SemiBold",
      details: "ব্র্যান্ড রেজলভেশন ও কল-টু-অ্যাকশন যেখানে টাইটেল গ্লো করে এবং সাবটাইটেল ক্রমান্বয়ে উদিত হয়।",
    },
    motion_mechanics: {
      entrance_effect: "Workly টাইটেলটি স্কেল 0.94 থেকে 1.00-এ স্মুথ স্কেল-আপ এবং সফট গ্লো সহ রিভিল হয়।",
      environment_effect: "সাবটাইটেলের প্রতিটি শব্দ ('Turn', 'messages', 'into', 'action.') নিচ থেকে y: 12px উঠে ক্রমান্বয়ে ফেড-ইন হয় (stagger: 0.06s)।",
      easing: "power2.out (Elegant Brand Resolving Curve)",
      director_upgrade: "সাবটাইটেল রিভিলের পর 'Get Started Free' ট্যাকটাইল বাটন এবং রেটিং ব্যাজ সহ চূড়ান্ত কনভার্সন পে-অফ তৈরি করা।",
    },
    code_snippet: {
      gsap: `const tl = gsap.timeline();
// 1. Brand Title Zoom-in with Ambient Glow
tl.fromTo('.brand-title',
  { scale: 0.93, opacity: 0, filter: 'blur(6px)' },
  { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 0.75, ease: 'power2.out' }
);
// 2. Subtitle Word-by-Word Stagger
tl.fromTo('.sub-word',
  { y: 12, opacity: 0 },
  { y: 0, opacity: 1, stagger: 0.06, duration: 0.5, ease: 'power1.out' },
  '-=0.3'
);
// 3. CTA Button Bounce Reveal
tl.fromTo('.cta-button',
  { scale: 0.9, opacity: 0 },
  { scale: 1, opacity: 1, duration: 0.45, ease: 'back.out(1.5)' },
  '-=0.1'
);`,
      css: `.brand-glow {
  background: radial-gradient(circle, rgba(0, 82, 255, 0.18) 0%, transparent 70%);
}`,
    },
  },
];

export default function TextAnimationsPage() {
  const [activeSceneId, setActiveSceneId] = useState<number>(1);
  const [isPlayingFullSequence, setIsPlayingFullSequence] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [currentTimestamp, setCurrentTimestamp] = useState<string>("00:04.000");
  const [copiedCodeId, setCopiedCodeId] = useState<number | null>(null);
  const [expandedCodeId, setExpandedCodeId] = useState<number | null>(null);

  // Master Cinema stage refs
  const cinemaContainerRef = useRef<HTMLDivElement>(null);
  const fullSeqTlRef = useRef<gsap.core.Timeline | null>(null);

  // Individual interactive lab animation refs
  const labStageRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const activeScene = ANIMATIONS.find((a) => a.id === activeSceneId) || ANIMATIONS[0];

  // Helper to trigger specific scene animation inside cinema screen
  const triggerSceneInCinema = (sceneId: number) => {
    setActiveSceneId(sceneId);
    const scene = ANIMATIONS.find((a) => a.id === sceneId);
    if (!scene || !cinemaContainerRef.current) return;

    setCurrentTimestamp(scene.timestamp_range.split(" - ")[0]);

    const container = cinemaContainerRef.current;
    gsap.killTweensOf(container.querySelectorAll("*"));

    // Reset common elements
    const burstCircle = container.querySelector(".cinema-circle-burst") as HTMLElement;
    const burstText = container.querySelector(".cinema-text-burst") as HTMLElement;
    const words = container.querySelectorAll(".cinema-word-span");
    const builtinText = container.querySelector(".cinema-builtin-text") as HTMLElement;
    const analyticsText = container.querySelector(".cinema-analytics-text") as HTMLElement;
    const laserGuide = container.querySelector(".cinema-laser-guide") as HTMLElement;
    const chatLines = container.querySelectorAll(".cinema-chat-line");
    const chaosText = container.querySelector(".cinema-chaos-text") as HTMLElement;
    const chaosCards = container.querySelectorAll(".cinema-chaos-card");
    const brandTitle = container.querySelector(".cinema-brand-title") as HTMLElement;
    const subWords = container.querySelectorAll(".cinema-sub-word");
    const ctaPill = container.querySelector(".cinema-cta-pill") as HTMLElement;

    if (sceneId === 1) {
      if (burstCircle && burstText) {
        gsap.set(burstCircle, { scale: 0, opacity: 1 });
        gsap.set(burstText, { autoAlpha: 1, color: "#000000" });

        const tl = gsap.timeline();
        tl.to(burstCircle, {
          scale: 65,
          duration: 0.65 / playbackSpeed,
          ease: "expo.inOut",
          delay: 0.4 / playbackSpeed,
          onStart: () => {
            gsap.to(burstText, { color: "#FFFFFF", duration: 0.2 / playbackSpeed });
          },
        });
      }
    } else if (sceneId === 2) {
      if (words.length > 0) {
        gsap.fromTo(
          words,
          { y: "120%", rotateX: 20, opacity: 0 },
          {
            y: "0%",
            rotateX: 0,
            opacity: 1,
            stagger: 0.07 / playbackSpeed,
            duration: 0.75 / playbackSpeed,
            ease: "power3.out",
          }
        );
      }
    } else if (sceneId === 3) {
      if (builtinText) {
        gsap.fromTo(
          builtinText,
          { scale: 0.78, opacity: 0, filter: "blur(10px)" },
          {
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.65 / playbackSpeed,
            ease: "back.out(1.2)",
          }
        );
      }
    } else if (sceneId === 4) {
      if (analyticsText && laserGuide) {
        const tl = gsap.timeline();
        tl.fromTo(
          analyticsText,
          { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 0.75 / playbackSpeed,
            ease: "power2.inOut",
          }
        );
        tl.fromTo(
          laserGuide,
          { left: "0%", opacity: 1 },
          { left: "100%", opacity: 0, duration: 0.75 / playbackSpeed, ease: "power2.inOut" },
          0
        );
      }
    } else if (sceneId === 5) {
      if (chatLines.length > 0) {
        gsap.fromTo(
          chatLines,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.12 / playbackSpeed,
            duration: 0.65 / playbackSpeed,
            ease: "power3.out",
          }
        );
      }
    } else if (sceneId === 6) {
      if (chaosText && chaosCards.length > 0) {
        const tl = gsap.timeline();
        tl.set(chaosText, { scale: 1.05, opacity: 1, y: 0, filter: "blur(0px)" });
        tl.set(chaosCards, { opacity: 0, scale: 0.4 });

        tl.to(
          chaosCards,
          {
            scale: 1,
            opacity: 1,
            stagger: 0.1 / playbackSpeed,
            duration: 0.55 / playbackSpeed,
            ease: "back.out(1.4)",
          },
          0.3 / playbackSpeed
        );

        tl.to(
          chaosText,
          {
            scale: 0.65,
            opacity: 0.35,
            y: -28,
            filter: "blur(2px)",
            duration: 0.85 / playbackSpeed,
            ease: "power3.inOut",
          },
          0.4 / playbackSpeed
        );
      }
    } else if (sceneId === 7) {
      if (brandTitle && subWords.length > 0) {
        const tl = gsap.timeline();
        tl.fromTo(
          brandTitle,
          { scale: 0.92, opacity: 0, filter: "blur(6px)" },
          {
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.75 / playbackSpeed,
            ease: "power2.out",
          }
        );
        tl.fromTo(
          subWords,
          { y: 12, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.06 / playbackSpeed,
            duration: 0.5 / playbackSpeed,
            ease: "power1.out",
          },
          "-=0.2"
        );
        if (ctaPill) {
          tl.fromTo(
            ctaPill,
            { scale: 0.85, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.4 / playbackSpeed,
              ease: "back.out(1.5)",
            },
            "-=0.1"
          );
        }
      }
    }
  };

  // Full Sequence Auto-Play Orchestration
  useEffect(() => {
    if (!isPlayingFullSequence) {
      if (fullSeqTlRef.current) {
        fullSeqTlRef.current.kill();
        fullSeqTlRef.current = null;
      }
      return;
    }

    let currentIdx = 0;
    const playNext = () => {
      if (!isPlayingFullSequence) return;
      const scene = ANIMATIONS[currentIdx];
      triggerSceneInCinema(scene.id);

      const sceneDuration = (scene.end_sec - scene.start_sec) * 1000 * (1 / playbackSpeed);

      const timer = setTimeout(() => {
        if (currentIdx < ANIMATIONS.length - 1) {
          currentIdx += 1;
          playNext();
        } else {
          setIsPlayingFullSequence(false);
        }
      }, sceneDuration);

      return () => clearTimeout(timer);
    };

    const cleanup = playNext();
    return () => {
      if (cleanup) cleanup();
    };
  }, [isPlayingFullSequence, playbackSpeed]);

  // Initial trigger
  useEffect(() => {
    triggerSceneInCinema(1);
  }, []);

  // Individual Lab Card Replayer
  const replayLabAnimation = (id: number) => {
    const stage = labStageRefs.current[id];
    if (!stage) return;

    gsap.killTweensOf(stage.querySelectorAll("*"));

    if (id === 1) {
      const circle = stage.querySelector(".lab-circle-1") as HTMLElement;
      const text = stage.querySelector(".lab-text-1") as HTMLElement;
      if (circle && text) {
        gsap.set(circle, { scale: 0 });
        gsap.set(text, { autoAlpha: 1, color: "#000000" });
        gsap.to(circle, {
          scale: 55,
          duration: 0.65,
          ease: "expo.inOut",
          delay: 0.35,
          onStart: () => gsap.to(text, { color: "#FFFFFF", duration: 0.2 }),
        });
      }
    } else if (id === 2) {
      const words = stage.querySelectorAll(".lab-word-2");
      gsap.fromTo(
        words,
        { y: "115%", rotateX: 20, opacity: 0 },
        { y: "0%", rotateX: 0, opacity: 1, stagger: 0.065, duration: 0.75, ease: "power3.out" }
      );
    } else if (id === 3) {
      const text = stage.querySelector(".lab-text-3");
      gsap.fromTo(
        text,
        { scale: 0.8, opacity: 0, filter: "blur(8px)" },
        { scale: 1, opacity: 1, filter: "blur(0px)", duration: 0.65, ease: "back.out(1.2)" }
      );
    } else if (id === 4) {
      const text = stage.querySelector(".lab-text-4");
      const laser = stage.querySelector(".lab-laser-4");
      const tl = gsap.timeline();
      tl.fromTo(
        text,
        { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" },
        { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 0.75, ease: "power2.inOut" }
      );
      tl.fromTo(
        laser,
        { left: "0%", opacity: 1 },
        { left: "100%", opacity: 0, duration: 0.75, ease: "power2.inOut" },
        0
      );
    } else if (id === 5) {
      const lines = stage.querySelectorAll(".lab-line-5");
      gsap.fromTo(
        lines,
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.12, duration: 0.65, ease: "power3.out" }
      );
    } else if (id === 6) {
      const text = stage.querySelector(".lab-text-6");
      const cards = stage.querySelectorAll(".lab-card-6");
      const tl = gsap.timeline();
      tl.set(text, { scale: 1.05, opacity: 1, y: 0, filter: "blur(0px)" });
      tl.set(cards, { opacity: 0, scale: 0.4 });
      tl.to(cards, { scale: 1, opacity: 1, stagger: 0.1, duration: 0.55, ease: "back.out(1.4)" }, 0.25);
      tl.to(text, { scale: 0.65, opacity: 0.35, y: -22, filter: "blur(2px)", duration: 0.8, ease: "power3.inOut" }, 0.35);
    } else if (id === 7) {
      const title = stage.querySelector(".lab-title-7");
      const words = stage.querySelectorAll(".lab-sub-7");
      const cta = stage.querySelector(".lab-cta-7");
      const tl = gsap.timeline();
      tl.fromTo(title, { scale: 0.92, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.75, ease: "power2.out" });
      tl.fromTo(words, { y: 12, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.06, duration: 0.5, ease: "power1.out" }, "-=0.2");
      if (cta) tl.fromTo(cta, { scale: 0.85, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.5)" }, "-=0.1");
    }
  };

  const copyCode = (id: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#070A12] text-slate-100 antialiased selection:bg-sky-500/30 selection:text-sky-300 pb-24">
      {/* ── Top Navigation Bar ── */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#070A12]/80 border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/demos"
              className="text-xs uppercase tracking-wider text-slate-400 hover:text-white px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 transition-all flex items-center gap-1.5"
            >
              <span>←</span> Demos
            </Link>
            <div className="h-4 w-px bg-white/10 hidden sm:block" />
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <h1 className="text-sm font-semibold tracking-wide text-white">
                  SaaS Kinetic Motion Studio
                </h1>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30">
                  Workly 7-Scene
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-400 hidden md:inline-flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-lg border border-white/5">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              <span>TIMECODE:</span>
              <strong className="text-sky-300 font-bold">{currentTimestamp}</strong>
            </span>
            <Link
              href="/"
              className="text-xs text-slate-300 hover:text-white px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            >
              Home
            </Link>
          </div>
        </div>
      </header>

      {/* ── Hero Director Banner ── */}
      <section className="pt-10 pb-6 px-6 max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-sky-500/20 bg-gradient-to-b from-sky-950/20 via-[#0C1222] to-[#070A12] p-8 md:p-12">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SaaS Motion Director Breakdown</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Workly Product Video:{" "}
              <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                ৭টি কিন্ডারগার্টেন-গ্রেড টেক্সট অ্যানিমেশন
              </span>
            </h2>
            <p className="mt-4 text-slate-300 text-base md:text-lg leading-relaxed">
              সরাসরি ভিডিও টাইমলাইন (00:04.000 – 00:27.200) ধরে রিক্রিয়েট করা হয়েছে। প্রতিটি দৃশ্য
              কখন আসবে, টেক্সটের কালার স্প্লিট, মাস্কিং মেকানিক্স, জেড-ডেপ্থ পুশ-ব্যাক এবং GSAP
              ইজিং কার্ভ নিচে ইন্টারেক্টিভভাবে টেস্ট করুন।
            </p>
          </div>
        </div>
      </section>

      {/* ── Main Master Cinema Screen (Video Simulation) ── */}
      <section className="px-6 max-w-7xl mx-auto mb-16">
        <div className="rounded-3xl border border-white/10 bg-[#0B0F1D] shadow-2xl overflow-hidden">
          {/* Cinema Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-b border-white/10 bg-black/40">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono text-slate-400">
                Master Cinema Canvas (1920 × 1080 Viewport)
              </span>
            </div>

            {/* Playback Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlayingFullSequence(!isPlayingFullSequence)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  isPlayingFullSequence
                    ? "bg-amber-500 text-black hover:bg-amber-400"
                    : "bg-sky-500 text-white hover:bg-sky-400 shadow-lg shadow-sky-500/25"
                }`}
              >
                {isPlayingFullSequence ? (
                  <>
                    <Pause className="w-4 h-4 fill-current" /> Pause Full Video
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" /> Play Full Sequence (00:04 - 00:27)
                  </>
                )}
              </button>

              <button
                onClick={() => triggerSceneInCinema(activeSceneId)}
                title="Replay Current Scene"
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              {/* Speed Switcher */}
              <div className="flex items-center rounded-xl bg-black/40 border border-white/10 p-0.5 text-xs font-mono">
                <button
                  onClick={() => setPlaybackSpeed(1)}
                  className={`px-2.5 py-1 rounded-lg transition-colors ${
                    playbackSpeed === 1 ? "bg-white/20 text-white font-bold" : "text-slate-400"
                  }`}
                >
                  1x
                </button>
                <button
                  onClick={() => setPlaybackSpeed(0.5)}
                  className={`px-2.5 py-1 rounded-lg transition-colors ${
                    playbackSpeed === 0.5 ? "bg-sky-500/30 text-sky-300 font-bold" : "text-slate-400"
                  }`}
                >
                  0.5x Slow
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Cinema Viewport */}
          <div
            ref={cinemaContainerRef}
            className="relative w-full h-[440px] md:h-[540px] bg-white overflow-hidden flex items-center justify-center transition-colors duration-500"
          >
            {/* Subtle SaaS Dot Grid Background */}
            <div
              className="absolute inset-0 opacity-[0.4] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(#94A3B8 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />

            {/* Scene 1: Static Reveal with Background Burst Wipe */}
            {activeSceneId === 1 && (
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                <div
                  className="cinema-circle-burst absolute w-16 h-16 rounded-full bg-[#0066FF] pointer-events-none"
                  style={{ transform: "scale(0)" }}
                />
                <div className="relative z-10 text-center px-6">
                  <h2
                    className="cinema-text-burst text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-black select-none"
                    style={{ willChange: "color" }}
                  >
                    Can&apos;t keep up?
                  </h2>
                  <p className="mt-4 text-xs font-mono uppercase tracking-widest text-slate-400/80">
                    Hard Cut Reveal • 00:05.000 Circle Burst Wipe
                  </p>
                </div>
              </div>
            )}

            {/* Scene 2: Staggered Masked Slide-Up (Word by Word) */}
            {activeSceneId === 2 && (
              <div className="relative z-10 text-center px-6 max-w-4xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-semibold mb-6">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>The All-In-One Solution</span>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
                  {/* First part: Solid Black */}
                  <span className="overflow-hidden py-1">
                    <span className="cinema-word-span inline-block text-slate-900">Meet</span>
                  </span>
                  <span className="overflow-hidden py-1">
                    <span className="cinema-word-span inline-block text-slate-900">your</span>
                  </span>
                  <span className="overflow-hidden py-1">
                    <span className="cinema-word-span inline-block text-slate-900">new</span>
                  </span>
                  {/* Second part: Vibrant Linear Blue Gradient */}
                  <span className="overflow-hidden py-1">
                    <span
                      className="cinema-word-span inline-block font-black"
                      style={{
                        background: "linear-gradient(90deg, #0070F3 0%, #00C6FF 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      AI
                    </span>
                  </span>
                  <span className="overflow-hidden py-1">
                    <span
                      className="cinema-word-span inline-block font-black"
                      style={{
                        background: "linear-gradient(90deg, #0070F3 0%, #00C6FF 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      workspace
                    </span>
                  </span>
                </div>
              </div>
            )}

            {/* Scene 3: Soft Fade-in & Scale-up (Zoom-in) */}
            {activeSceneId === 3 && (
              <div className="relative w-full h-full flex items-center justify-center px-6">
                {/* Frosted Mockup Dashboard in Background */}
                <div className="absolute inset-x-8 inset-y-12 rounded-3xl bg-slate-100/90 border border-slate-200/80 p-6 flex flex-col justify-between filter blur-[2px] opacity-60">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                        W
                      </div>
                      <span className="text-sm font-semibold text-slate-700">Workly Dashboard</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-20 h-5 rounded-full bg-slate-200" />
                      <div className="w-12 h-5 rounded-full bg-emerald-100" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-28 rounded-2xl bg-white border border-slate-200/60 p-4">
                      <span className="text-xs text-slate-400">Total Workflows</span>
                      <div className="text-2xl font-bold text-slate-800 mt-2">1,280+</div>
                    </div>
                    <div className="h-28 rounded-2xl bg-white border border-slate-200/60 p-4">
                      <span className="text-xs text-slate-400">Time Saved</span>
                      <div className="text-2xl font-bold text-emerald-600 mt-2">42 hrs/wk</div>
                    </div>
                    <div className="h-28 rounded-2xl bg-white border border-slate-200/60 p-4">
                      <span className="text-xs text-slate-400">Automation Rate</span>
                      <div className="text-2xl font-bold text-blue-600 mt-2">99.4%</div>
                    </div>
                  </div>
                </div>

                {/* Floating Centered Hero Text */}
                <div className="relative z-20 text-center">
                  <div className="cinema-builtin-text">
                    <h2
                      className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tight"
                      style={{
                        background: "linear-gradient(135deg, #38BDF8 0%, #0284C7 50%, #1D4ED8 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        filter: "drop-shadow(0 8px 30px rgba(2, 132, 199, 0.3))",
                      }}
                    >
                      Built-in
                    </h2>
                  </div>
                  <span className="inline-block mt-4 text-xs font-mono font-bold tracking-widest uppercase text-blue-700 bg-blue-100/80 px-4 py-1.5 rounded-full border border-blue-200">
                    Macro Scale Zoom-In (0.8 → 1.0)
                  </span>
                </div>
              </div>
            )}

            {/* Scene 4: Left-to-Right Clip Path Wipe */}
            {activeSceneId === 4 && (
              <div className="relative w-full h-full flex items-center justify-center px-6">
                <div className="relative inline-block">
                  {/* The Scanning Laser Bar */}
                  <div
                    className="cinema-laser-guide absolute top-0 bottom-0 w-1 bg-blue-600 z-20"
                    style={{
                      boxShadow: "0 0 16px #00C6FF, 0 0 30px #0070F3",
                    }}
                  />

                  {/* The Text with Clip Path Mask */}
                  <h2 className="cinema-analytics-text text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-black select-none">
                    Business analytics
                  </h2>
                </div>
              </div>
            )}

            {/* Scene 5: Staggered Line-by-Line Slide-up */}
            {activeSceneId === 5 && (
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 px-6 max-w-5xl">
                {/* 3-Line Stacked Kinetic Text */}
                <div className="flex flex-col space-y-2 text-left">
                  <div className="overflow-hidden py-1">
                    <div className="cinema-chat-line text-4xl sm:text-6xl font-bold text-slate-800 tracking-tight">
                      Chat
                    </div>
                  </div>
                  <div className="overflow-hidden py-1">
                    <div className="cinema-chat-line text-4xl sm:text-6xl font-medium text-slate-400 tracking-tight">
                      With our
                    </div>
                  </div>
                  <div className="overflow-hidden py-1">
                    <div className="cinema-chat-line text-5xl sm:text-7xl font-black text-black tracking-tighter flex items-center gap-3">
                      <span>AI Bot</span>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-100 px-3 py-1 rounded-full border border-blue-200">
                        24/7 Live
                      </span>
                    </div>
                  </div>
                </div>

                {/* Simulated Floating Chat Bubble */}
                <div className="w-80 rounded-2xl bg-white border border-slate-200 p-5 shadow-xl flex flex-col gap-3">
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                    <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                      <Zap className="w-4 h-4 fill-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Workly Co-Pilot</div>
                      <div className="text-[10px] text-emerald-600 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                        Online & Thinking
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3 text-xs text-slate-700 leading-relaxed border border-slate-100">
                    &quot;I reviewed yesterday&apos;s 14 client messages. 3 action items require your signature.&quot;
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono pl-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce delay-100" />
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce delay-200" />
                    <span className="ml-1 text-[11px]">Generating workflow...</span>
                  </div>
                </div>
              </div>
            )}

            {/* Scene 6: Z-Depth Push Back (Zoom-out Parallax) */}
            {activeSceneId === 6 && (
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden px-6" style={{ perspective: "1200px" }}>
                {/* Centered Main Text that pushes into Z-depth */}
                <div className="cinema-chaos-text text-center z-10 transition-transform">
                  <h2 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight select-none">
                    <span
                      style={{
                        background: "linear-gradient(90deg, #0066FF 0%, #00C6FF 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      No more{" "}
                    </span>
                    <span className="text-black">chaos.</span>
                  </h2>
                  <p className="mt-3 text-xs font-mono uppercase tracking-widest text-slate-400">
                    Z-Depth Camera Push Back (Scale 1.0 → 0.65)
                  </p>
                </div>

                {/* Floating Chaos Notification Cards Swarming Into Foreground */}
                <div className="cinema-chaos-card absolute top-10 left-12 w-64 rounded-2xl bg-white border border-rose-200 p-4 shadow-2xl z-20">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-rose-500 flex items-center justify-center text-white">
                      <AlertTriangle className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-slate-900 truncate">Prod Incident #409</div>
                      <div className="text-[10px] text-rose-500">Urgent • 99+ unread pings</div>
                    </div>
                  </div>
                </div>

                <div className="cinema-chaos-card absolute top-12 right-14 w-60 rounded-2xl bg-white border border-amber-200 p-4 shadow-2xl z-20">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-white">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-slate-900 truncate">Inbox Overload</div>
                      <div className="text-[10px] text-amber-600">324 Client Requests</div>
                    </div>
                  </div>
                </div>

                <div className="cinema-chaos-card absolute bottom-12 left-16 w-60 rounded-2xl bg-white border border-blue-200 p-4 shadow-2xl z-20">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-slate-900 truncate">Slack Thread Overflow</div>
                      <div className="text-[10px] text-blue-600">18 mentions in #general</div>
                    </div>
                  </div>
                </div>

                <div className="cinema-chaos-card absolute bottom-10 right-16 w-64 rounded-2xl bg-white border border-emerald-200 p-4 shadow-2xl z-20">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-slate-900 truncate">AI Auto-Triage</div>
                      <div className="text-[10px] text-emerald-600">Organized in 0.4s</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Scene 7: Title Zoom-in & Subtitle Word Stagger */}
            {activeSceneId === 7 && (
              <div className="relative z-10 text-center px-6 max-w-4xl">
                {/* Brand Title Zoom-in with Ambient Radial Glow */}
                <div className="relative inline-block">
                  <div className="absolute -inset-8 bg-blue-500/15 rounded-full blur-2xl pointer-events-none" />
                  <h1 className="cinema-brand-title relative text-6xl sm:text-8xl md:text-9xl font-black tracking-tight text-[#0052FF] select-none">
                    Workly
                  </h1>
                </div>

                {/* Subtitle Word Stagger */}
                <div className="mt-4 flex flex-wrap items-center justify-center gap-x-2.5 text-xl sm:text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
                  {["Turn", "messages", "into", "action."].map((word, i) => (
                    <span key={i} className="cinema-sub-word inline-block">
                      {word}
                    </span>
                  ))}
                </div>

                {/* Interactive CTA Pill Resolve */}
                <div className="cinema-cta-pill mt-8 flex flex-wrap items-center justify-center gap-4">
                  <button className="px-6 py-3 rounded-2xl bg-[#0052FF] hover:bg-blue-600 text-white font-bold text-sm shadow-xl shadow-blue-500/25 transition-all flex items-center gap-2 group">
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-6 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm border border-slate-200 transition-colors">
                    Watch 2-Min Demo
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Interactive Timeline Scrubber & Scene Jump Pills */}
          <div className="p-4 md:p-6 bg-[#090D18] border-t border-white/10">
            <div className="text-xs uppercase font-mono text-slate-400 mb-3 flex items-center justify-between">
              <span>Timeline Navigator (Click any scene to scrub):</span>
              <span className="text-sky-400 font-bold">Scene {activeScene.id} of 7</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
              {ANIMATIONS.map((scene) => {
                const isCurrent = scene.id === activeSceneId;
                return (
                  <button
                    key={scene.id}
                    onClick={() => {
                      setIsPlayingFullSequence(false);
                      triggerSceneInCinema(scene.id);
                    }}
                    className={`p-3 rounded-2xl text-left transition-all border ${
                      isCurrent
                        ? "bg-sky-500/15 border-sky-400 text-white shadow-lg shadow-sky-500/20"
                        : "bg-white/[0.02] border-white/5 hover:border-white/20 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                      <span className={isCurrent ? "text-sky-300 font-bold" : "text-slate-500"}>
                        #{scene.id}
                      </span>
                      <span>{scene.timestamp_range.split(" - ")[0]}</span>
                    </div>
                    <div className="text-xs font-bold truncate text-slate-100">
                      {scene.text_content.replace("\n", " ")}
                    </div>
                    <div className="text-[10px] text-slate-400 truncate mt-0.5">
                      {scene.animation_category.split(" ")[0]}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Active Scene Director Deep-Dive Panel ── */}
      <section className="px-6 max-w-7xl mx-auto mb-20">
        <div className="rounded-3xl border border-white/10 bg-[#0C1222] p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center font-mono font-bold text-sm">
                  0{activeScene.id}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {activeScene.animation_category}
                </h3>
              </div>
              <p className="text-sm font-mono text-slate-400 mt-1">
                Timeline Reference: {activeScene.timestamp_range} • Text: &quot;{activeScene.text_content.replace("\n", " ")}&quot;
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => triggerSceneInCinema(activeScene.id)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-500/30 text-xs font-bold transition-all"
              >
                <RotateCcw className="w-4 h-4" /> Replay Active Scene
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl bg-black/40 border border-white/5 p-4">
              <div className="text-xs font-mono text-sky-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" /> Visual & Color Style
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {activeScene.visual_style.color_desc}
              </p>
              <div className="mt-3 pt-3 border-t border-white/5 text-[11px] text-slate-400">
                <strong>Background:</strong> {activeScene.visual_style.bg_style}
              </div>
            </div>

            <div className="rounded-2xl bg-black/40 border border-white/5 p-4">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5" /> Motion Mechanics
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {activeScene.motion_mechanics.entrance_effect}
              </p>
              <div className="mt-3 pt-3 border-t border-white/5 text-[11px] text-slate-400">
                {activeScene.motion_mechanics.environment_effect}
              </div>
            </div>

            <div className="rounded-2xl bg-black/40 border border-white/5 p-4">
              <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" /> Easing Curve
              </div>
              <p className="text-xs font-mono text-amber-300">
                {activeScene.motion_mechanics.easing}
              </p>
              <p className="text-xs text-slate-400 mt-2">
                সঠিক ইজিং কার্ভ টেক্সটের ওয়েট ও ডায়নামিক্সে প্রফেশনাল ফিজিক্স আনে।
              </p>
            </div>

            <div className="rounded-2xl bg-black/40 border border-sky-500/20 p-4">
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Creative Director Upgrade
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                {activeScene.motion_mechanics.director_upgrade}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section Header for All 7 Individual Motion Labs ── */}
      <section className="px-6 max-w-7xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="text-xs uppercase font-mono tracking-widest text-sky-400 font-bold mb-1">
              Component Deep-Dive & Lab
            </div>
            <h3 className="text-2xl md:text-4xl font-extrabold text-white">
              ৭টি অ্যানিমেশনের স্বতন্ত্র ল্যাব ও সোর্স কোড
            </h3>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            প্রতিটি কার্ডে আলাদাভাবে অ্যানিমেশন প্লে করে দেখুন এবং যেকোনো প্রোজেক্ট বা রিমোশনে
            ব্যবহারের জন্য রেডিমেড GSAP কোড কপি করে নিন।
          </p>
        </div>
      </section>

      {/* ── 7 Individual Motion Lab Cards ── */}
      <section className="px-6 max-w-7xl mx-auto grid gap-8">
        {ANIMATIONS.map((scene) => {
          const isCodeExpanded = expandedCodeId === scene.id;
          const isCopied = copiedCodeId === scene.id;

          return (
            <div
              key={scene.id}
              className="rounded-3xl border border-white/10 bg-[#0A0E1A] overflow-hidden hover:border-sky-500/30 transition-all duration-300"
            >
              {/* Card Header */}
              <div className="px-6 py-4 bg-white/[0.02] border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-sky-500/10 text-sky-400 font-mono font-bold text-xs flex items-center justify-center">
                    0{scene.id}
                  </span>
                  <div>
                    <h4 className="text-base font-bold text-white flex items-center gap-2">
                      <span>{scene.animation_category}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-400 border border-white/10">
                        {scene.timestamp_range}
                      </span>
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => replayLabAnimation(scene.id)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 text-xs font-bold transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Replay
                  </button>

                  <button
                    onClick={() => setExpandedCodeId(isCodeExpanded ? null : scene.id)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold border border-white/10 transition-colors"
                  >
                    <Code2 className="w-3.5 h-3.5 text-sky-400" />
                    <span>{isCodeExpanded ? "Hide Code" : "Inspect Code"}</span>
                  </button>
                </div>
              </div>

              {/* Lab Interactive Preview Canvas */}
              <div
                ref={(el) => {
                  labStageRefs.current[scene.id] = el;
                }}
                className="relative w-full h-64 sm:h-72 bg-white flex items-center justify-center overflow-hidden"
              >
                {/* Dot background */}
                <div
                  className="absolute inset-0 opacity-30 pointer-events-none"
                  style={{
                    backgroundImage: "radial-gradient(#94A3B8 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                  }}
                />

                {/* Specific Card Previews */}
                {scene.id === 1 && (
                  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                    <div
                      className="lab-circle-1 absolute w-16 h-16 rounded-full bg-[#0066FF] pointer-events-none"
                      style={{ transform: "scale(0)" }}
                    />
                    <div className="relative z-10 text-center px-4">
                      <h3 className="lab-text-1 text-4xl sm:text-6xl font-black tracking-tight text-black">
                        Can&apos;t keep up?
                      </h3>
                      <p className="mt-2 text-xs font-mono text-slate-400">
                        Click Replay to watch 00:05.000 Circle Burst
                      </p>
                    </div>
                  </div>
                )}

                {scene.id === 2 && (
                  <div className="relative z-10 text-center px-4">
                    <div className="flex flex-wrap items-center justify-center gap-x-3 text-3xl sm:text-5xl font-extrabold tracking-tight">
                      <span className="overflow-hidden py-1">
                        <span className="lab-word-2 inline-block text-slate-900">Meet</span>
                      </span>
                      <span className="overflow-hidden py-1">
                        <span className="lab-word-2 inline-block text-slate-900">your</span>
                      </span>
                      <span className="overflow-hidden py-1">
                        <span className="lab-word-2 inline-block text-slate-900">new</span>
                      </span>
                      <span className="overflow-hidden py-1">
                        <span
                          className="lab-word-2 inline-block font-black"
                          style={{
                            background: "linear-gradient(90deg, #0070F3 0%, #00C6FF 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                        >
                          AI
                        </span>
                      </span>
                      <span className="overflow-hidden py-1">
                        <span
                          className="lab-word-2 inline-block font-black"
                          style={{
                            background: "linear-gradient(90deg, #0070F3 0%, #00C6FF 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                        >
                          workspace
                        </span>
                      </span>
                    </div>
                  </div>
                )}

                {scene.id === 3 && (
                  <div className="relative w-full h-full flex items-center justify-center px-6">
                    <div className="absolute inset-8 rounded-2xl bg-slate-100/80 border border-slate-200/80 filter blur-[1px] opacity-50 flex items-center justify-around p-4">
                      <div className="w-20 h-10 bg-white rounded-lg border border-slate-200" />
                      <div className="w-28 h-10 bg-white rounded-lg border border-slate-200" />
                      <div className="w-24 h-10 bg-white rounded-lg border border-slate-200" />
                    </div>
                    <div className="relative z-10 text-center">
                      <h3
                        className="lab-text-3 text-5xl sm:text-7xl font-black tracking-tight"
                        style={{
                          background: "linear-gradient(135deg, #38BDF8 0%, #0284C7 50%, #1D4ED8 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          filter: "drop-shadow(0 6px 20px rgba(2, 132, 199, 0.3))",
                        }}
                      >
                        Built-in
                      </h3>
                      <p className="mt-2 text-xs font-mono text-slate-400">
                        Soft Zoom-in (scale: 0.8 → 1.0) with back.out
                      </p>
                    </div>
                  </div>
                )}

                {scene.id === 4 && (
                  <div className="relative inline-block">
                    <div
                      className="lab-laser-4 absolute top-0 bottom-0 w-1 bg-blue-600 z-20"
                      style={{ boxShadow: "0 0 14px #00C6FF" }}
                    />
                    <h3 className="lab-text-4 text-4xl sm:text-6xl font-black tracking-tight text-black select-none">
                      Business analytics
                    </h3>
                  </div>
                )}

                {scene.id === 5 && (
                  <div className="flex flex-col space-y-1 text-center">
                    <div className="overflow-hidden py-0.5">
                      <div className="lab-line-5 text-3xl sm:text-5xl font-bold text-slate-800">
                        Chat
                      </div>
                    </div>
                    <div className="overflow-hidden py-0.5">
                      <div className="lab-line-5 text-3xl sm:text-5xl font-medium text-slate-400">
                        With our
                      </div>
                    </div>
                    <div className="overflow-hidden py-0.5">
                      <div className="lab-line-5 text-4xl sm:text-6xl font-black text-black">
                        AI Bot
                      </div>
                    </div>
                  </div>
                )}

                {scene.id === 6 && (
                  <div className="relative w-full h-full flex items-center justify-center overflow-hidden px-4" style={{ perspective: "1000px" }}>
                    <div className="lab-text-6 text-center z-10">
                      <h3 className="text-4xl sm:text-6xl font-black tracking-tight select-none">
                        <span
                          style={{
                            background: "linear-gradient(90deg, #0066FF 0%, #00C6FF 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                        >
                          No more{" "}
                        </span>
                        <span className="text-black">chaos.</span>
                      </h3>
                    </div>

                    <div className="lab-card-6 absolute top-4 left-6 rounded-xl bg-white border border-rose-200 px-3 py-2 shadow-lg z-20 text-[10px] text-rose-600 font-bold flex items-center gap-1.5">
                      <AlertTriangle className="w-3 h-3 text-rose-500" /> 14 Unread Alerts
                    </div>
                    <div className="lab-card-6 absolute bottom-4 right-6 rounded-xl bg-white border border-blue-200 px-3 py-2 shadow-lg z-20 text-[10px] text-blue-600 font-bold flex items-center gap-1.5">
                      <MessageSquare className="w-3 h-3 text-blue-500" /> Slack Thread #42
                    </div>
                  </div>
                )}

                {scene.id === 7 && (
                  <div className="relative z-10 text-center px-4">
                    <h2 className="lab-title-7 text-5xl sm:text-7xl font-black tracking-tight text-[#0052FF]">
                      Workly
                    </h2>
                    <div className="mt-2 flex items-center justify-center gap-2 text-lg sm:text-2xl font-semibold text-slate-900">
                      {["Turn", "messages", "into", "action."].map((w, idx) => (
                        <span key={idx} className="lab-sub-7 inline-block">
                          {w}
                        </span>
                      ))}
                    </div>
                    <div className="lab-cta-7 mt-4">
                      <span className="inline-block px-4 py-1.5 rounded-xl bg-[#0052FF] text-white text-xs font-bold shadow-md shadow-blue-500/20">
                        Get Started Free →
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Motion Specs Row */}
              <div className="p-6 grid sm:grid-cols-3 gap-4 border-t border-white/5 bg-white/[0.01]">
                <div>
                  <span className="text-[10px] uppercase font-mono text-slate-500 block">
                    Visual Style
                  </span>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {scene.visual_style.color_desc}
                  </p>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-slate-500 block">
                    Motion Mechanics
                  </span>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {scene.motion_mechanics.entrance_effect}
                  </p>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-slate-500 block">
                    Easing & Polish
                  </span>
                  <p className="text-xs font-mono text-amber-300 mt-1">
                    {scene.motion_mechanics.easing}
                  </p>
                </div>
              </div>

              {/* Expandable Code Drawer */}
              {isCodeExpanded && (
                <div className="border-t border-white/10 bg-black/60 p-6 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-sky-400 flex items-center gap-2">
                      <Code2 className="w-4 h-4" /> Production GSAP Implementation
                    </span>
                    <button
                      onClick={() => copyCode(scene.id, scene.code_snippet.gsap)}
                      className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-mono text-slate-200 transition-colors"
                    >
                      {isCopied ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Copied!
                        </>
                      ) : (
                        <>Copy Snippet</>
                      )}
                    </button>
                  </div>
                  <pre className="p-4 rounded-xl bg-[#060810] border border-white/5 font-mono text-xs text-slate-300 overflow-x-auto leading-relaxed">
                    {scene.code_snippet.gsap}
                  </pre>
                  <div className="mt-4">
                    <span className="text-[11px] font-mono text-slate-400 block mb-1">
                      Required CSS / Masking:
                    </span>
                    <pre className="p-3 rounded-xl bg-[#060810] border border-white/5 font-mono text-xs text-slate-400 overflow-x-auto leading-relaxed">
                      {scene.code_snippet.css}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* ── Creative Director Master Blueprint & Summary ── */}
      <section className="mt-20 px-6 max-w-7xl mx-auto">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0B1020] via-[#090D18] to-[#05070D] p-8 md:p-12">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold block mb-2">
              SaaS Motion Director Executive Takeaway
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              কেন এই ৭টি অ্যানিমেশনের সংমিশ্রণ সর্বোচ্চ কনভার্সন দেয়?
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-sm text-slate-300 leading-relaxed">
            <div className="p-5 rounded-2xl bg-black/40 border border-white/5">
              <div className="w-8 h-8 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center font-bold text-sm mb-3">
                1
              </div>
              <h4 className="font-bold text-white mb-2">The Retention Hook (00:04)</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                শুরুতেই কোনো ফেড ছাড়া Hard Cut এবং Circle Burst Wipe ব্যবহারের কারণে দর্শকের
                অ্যাটেনশন ১০০% ক্যাপচার হয়। কোনো অলস ফ্রেম না রেখে সরাসরি পয়েন্টে আঘাত করা হয়েছে।
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black/40 border border-white/5">
              <div className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold text-sm mb-3">
                2
              </div>
              <h4 className="font-bold text-white mb-2">Kinetic Hierarchy & Masking (00:07 - 00:20)</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Word-by-word মাস্কিং এবং ৩-টায়ার স্লাইড-আপ দিয়ে পড়ার গতি নিয়ন্ত্রণ করা হয়েছে।
                গ্রেডিয়েন্ট টেক্সট ব্যবহার করে মূল ভ্যালু প্রপোজিশন &quot;AI workspace&quot; কে হাইলাইট করা হয়েছে।
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black/40 border border-white/5">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-sm mb-3">
                3
              </div>
              <h4 className="font-bold text-white mb-2">The Z-Depth Relief & Brand CTA (00:21 - 00:27)</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                &quot;No more chaos&quot; টেক্সটটি ব্যাকগ্রাউন্ডে ঠেলে দিয়ে নোটিফিকেশন ঝড়ের মধ্য দিয়ে প্রোডাক্টের
                সমাধান দৃশ্যমান করা হয়। এরপর শান্ত ব্লু গ্লো সহ ব্র্যান্ড রেজলভেশন ও স্পষ্ট CTA দেওয়া হয়েছে।
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-mono text-slate-400">
              SaaS Motion Director Blueprint • Next.js 15 + GSAP + Tailwind CSS
            </div>
            <Link
              href="/demos"
              className="inline-flex items-center gap-2 text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors"
            >
              <span>Explore All 11 Other Kinetic Demos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
