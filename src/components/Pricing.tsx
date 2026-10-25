"use client";

import React, { useState } from "react";
import { DollarSign, CheckCircle2, MessageCircle, Gift, Sparkles, ArrowRight, ShieldCheck, Clock } from "lucide-react";

export default function Pricing() {
  const WHATSAPP_LINK = "https://wa.me/8801342132792";
  const [activeTier, setActiveTier] = useState<"starter" | "popular" | "premium">("popular");

  const pricingTiers = {
    starter: {
      id: "starter",
      name: "Starter",
      tabLabel: "Starter",
      price: "$200",
      period: "flat rate investment",
      badge: "⚡ Fast Launch",
      badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
      desc: "Perfect for personal brands, creators or single offers wanting a clean, high-impact presence that converts.",
      delivery: "2–3 Days Fast Delivery",
      revisions: "3 Rounds of Precise Revisions",
      features: [
        "Complete 2-page responsive modern web experience",
        "Story-driven fluid scroll motion & micro-interactions",
        "100% Mobile, tablet & desktop cross-device optimized",
        "Clean, semantic TypeScript & Tailwind architecture",
        "Sub-second load speed with zero bloated plugins",
        "WhatsApp / lead capture integration ready to sell",
      ],
      bonus: null,
      ctaText: "Get Starter Package ($200)",
      ctaHref: `${WHATSAPP_LINK}?text=Hi%20Robin%2C%20I%20am%20interested%20in%20the%20%24200%20Starter%20package!`,
    },
    popular: {
      id: "popular",
      name: "Most Popular",
      tabLabel: "Most Popular ⭐",
      price: "$500",
      period: "complete production platform",
      badge: "🔥 Best Value Choice",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      desc: "The sweet spot for growing SaaS & businesses wanting deep engagement, cinematic scroll story, and maximum conversion power.",
      delivery: "3–4 Days Fast Delivery",
      revisions: "7 Rounds of Precise Revisions",
      features: [
        "Up to 4 custom pages & 6 high-converting dynamic sections",
        "Custom cinema-grade 3D scroll animation & GSAP choreography",
        "Sub-second load times with Google AI Overview & SEO dominance",
        "Interactive conversion micro-hooks (calculators, interactive demos)",
        "Fully responsive 9:16 mobile up to 4K ultra-wide screens",
        "7 Days of dedicated post-launch support & performance tuning",
      ],
      bonus: "🎁 Free installable app version (PWA) — works like an app on any phone with offline capabilities!",
      ctaText: "Claim Most Popular ($500) + Free PWA Bonus",
      ctaHref: `${WHATSAPP_LINK}?text=Hi%20Robin%2C%20I%20want%20to%20get%20the%20%24500%20Most%20Popular%20package%20with%20PWA%20bonus!`,
    },
    premium: {
      id: "premium",
      name: "Premium",
      tabLabel: "Premium Ecosystem",
      price: "$900",
      period: "enterprise-grade scale",
      badge: "💎 Full Scale Ecosystem",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      desc: "Comprehensive end-to-end digital powerhouse for established brands needing deep multi-page architecture and priority speed.",
      delivery: "48–72h Priority Fast-Track Delivery",
      revisions: "Unlimited Revisions During Build",
      features: [
        "Massive 10–12 page custom ecosystem (up to 9 dynamic sections/page)",
        "Advanced WebGL / 3D camera transforms & bespoke motion design",
        "Zero design risk: Unlimited revisions until you are 100% satisfied",
        "Complete domain, cloud hosting, DNS & enterprise SSL setup",
        "Full analytics, Google Tag Manager & conversion tracking",
        "30 Days of comprehensive priority support & bug-free guarantee",
      ],
      bonus: "🎁 Includes both Free PWA App & Custom Dark/Light theme switcher with instant cache edge delivery!",
      ctaText: "Deploy Premium Package ($900)",
      ctaHref: `${WHATSAPP_LINK}?text=Hi%20Robin%2C%20I%20am%20ready%20for%20the%20%24900%20Premium%20ecosystem!`,
    },
  };

  const current = pricingTiers[activeTier];

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#FAFBFD] border-b border-slate-200/80 relative overflow-hidden">
      {/* Soft Luminous Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[380px] bg-gradient-to-tr from-sky-200/30 via-emerald-100/25 to-transparent blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-wider shadow-xs">
            <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
            <span>Transparent Investment</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight"
            style={{ fontFamily: "'Josefin Sans', sans-serif" }}
          >
            Simple Pricing,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600">
              Zero Surprises
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            No hidden hourly fees. Switch between tiers below to choose what fits your brand, and launch in record time.
          </p>
        </div>

        {/* Master Interactive Pricing Card */}
        <div className="bg-white/90 backdrop-blur-xl border-2 border-slate-200/90 rounded-3xl p-5 sm:p-8 md:p-10 shadow-xl shadow-slate-200/50 transition-all duration-300">
          {/* Top Switcher Tabs */}
          <div className="flex items-center justify-center p-1.5 rounded-2xl bg-slate-100/90 border border-slate-200/80 max-w-md mx-auto mb-8 sm:mb-10">
            {(["starter", "popular", "premium"] as const).map((key) => {
              const tier = pricingTiers[key];
              const isActive = activeTier === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveTier(key)}
                  className={`flex-1 py-2 sm:py-2.5 px-2.5 sm:px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-white text-slate-900 shadow-sm shadow-slate-300/60 font-bold scale-[1.02]"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {tier.tabLabel}
                </button>
              );
            })}
          </div>

          {/* Card Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left Column: Price & Overview */}
            <div className="md:col-span-5 space-y-6 text-left border-b md:border-b-0 md:border-r border-slate-100 pb-6 md:pb-0 md:pr-6">
              <div className="space-y-2">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${current.badgeColor}`}>
                  <Sparkles className="w-3.5 h-3.5" />
                  {current.badge}
                </span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                  {current.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {current.desc}
                </p>
              </div>

              {/* Price display */}
              <div className="pt-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    {current.price}
                  </span>
                  <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                    / {current.period}
                  </span>
                </div>
              </div>

              {/* Delivery & Revisions chips */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-2">
                  <Clock className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span>{current.delivery}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{current.revisions}</span>
                </div>
              </div>

              {/* Primary WhatsApp CTA */}
              <div className="pt-2">
                <a
                  href={current.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{current.ctaText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Column: Features List */}
            <div className="md:col-span-7 space-y-4 text-left">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                What’s Included In This Package
              </span>

              <ul className="space-y-3">
                {current.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-snug">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {current.bonus && (
                <div className="mt-4 p-3.5 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50/80 border border-emerald-200/80 text-emerald-900 text-xs sm:text-sm font-medium flex items-start gap-2.5 shadow-xs">
                  <Gift className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-snug">{current.bonus}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Confidence Assurance Footer */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-500 font-medium pt-2">
          <div className="inline-flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Fixed Price Guaranteed</span>
          </div>
          <div className="inline-flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Direct WhatsApp Access</span>
          </div>
          <div className="inline-flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Fast Launch In 2–4 Days</span>
          </div>
        </div>
      </div>
    </section>
  );
}
