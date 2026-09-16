"use client";

import React, { useState } from "react";
import {
  MessageCircle,
  Mail,
  Award,
  Zap,
  Check,
  Copy,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const WHATSAPP_NUMBER = "01342132792";
  const WHATSAPP_LINK =
    "https://wa.me/8801342132792?text=Hi%20Robin!%20I%20saw%20your%20portfolio%20and%20I%20have%20a%20project%20I%20want%20to%20discuss.";
  const EMAIL_ADDRESS = "pch.cosmo1@gmail.com";
  const EMAIL_LINK =
    "mailto:pch.cosmo1@gmail.com?subject=High-Impact%20Project%20Inquiry&body=Hi%20Robin%2C%0A%0AI%20am%20interested%20in%20partnering%20with%20you%20on%20a%20project.%0A%0AProject%20Overview%3A%0AEstimated%20Budget%3A%0ATarget%20Timeline%3A";

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(WHATSAPP_NUMBER);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden border-b border-slate-800/80">
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[250px] bg-sky-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Pitch */}
          <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-300 backdrop-blur-md">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for Projects • $50 to $2,500+
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-xs font-semibold text-sky-300 backdrop-blur-md">
                <Award className="w-3.5 h-3.5 text-sky-400" />
                Solo Builder — No Agency, No Middlemen, Direct Access to Me
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
              Websites Built Like a Story —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-400">
                Not a Template
              </span>
            </h1>

            {/* Sub-headline (1 line, low cognitive load, dual-process reassurance) */}
            <p className="text-base sm:text-xl text-slate-300 font-medium max-w-2xl leading-relaxed">
              Fast delivery, clean code, and a design your visitors won&apos;t forget.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl font-bold text-sm uppercase tracking-wider bg-[#25D366] text-slate-950 border border-[#1DA851] shadow-[0_4px_0_0_#15803d] hover:brightness-105 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Discuss on WhatsApp</span>
              </a>

              <a
                href={EMAIL_LINK}
                className="btn-3d inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl font-bold text-sm uppercase tracking-wider bg-slate-900/90 text-slate-200 border border-slate-700 shadow-[0_4px_0_0_#1e293b] hover:bg-slate-800 hover:text-white cursor-pointer"
              >
                <Mail className="w-5 h-5 text-sky-400" />
                <span>Send RFP / Email</span>
              </a>

              {/* 1-Click Copy Phone */}
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-2xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-800 transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>{WHATSAPP_NUMBER}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Side: Key High-Impact Metrics Grid */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-3.5">
            <div className="p-4 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-slate-800 shadow-sm hover:border-emerald-500/50 transition-all text-left">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">&lt; 1.5s</div>
              <div className="text-xs font-bold text-slate-200 mt-1">Load Speed Target</div>
              <div className="text-[11px] text-slate-400 font-medium">Instant user experience</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-slate-800 shadow-sm hover:border-sky-500/50 transition-all text-left">
              <div className="text-2xl sm:text-3xl font-black text-sky-400">2–3 Day</div>
              <div className="text-xs font-bold text-slate-200 mt-1">Delivery</div>
              <div className="text-[11px] text-slate-400 font-medium">For Starter packages</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-slate-800 shadow-sm hover:border-amber-500/50 transition-all text-left">
              <div className="text-2xl sm:text-3xl font-black text-amber-400">&lt; $20/mo</div>
              <div className="text-xs font-bold text-slate-200 mt-1">Cloud Database Cost</div>
              <div className="text-[11px] text-slate-400 font-medium">Zero-waste architecture</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-slate-800 shadow-sm hover:border-indigo-500/50 transition-all text-left">
              <div className="text-2xl sm:text-3xl font-black text-indigo-400">100%</div>
              <div className="text-xs font-bold text-slate-200 mt-1">Money-Back Guarantee</div>
              <div className="text-[11px] text-slate-400 font-medium">Zero risk for your project</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
