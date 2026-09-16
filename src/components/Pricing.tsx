import React from "react";
import { DollarSign, CheckCircle2, MessageCircle, Gift, Sparkles, ArrowRight } from "lucide-react";

export default function Pricing() {
  const WHATSAPP_LINK = "https://wa.me/8801342132792";

  const pricingTiers = [
    {
      name: "Starter",
      price: "$200",
      period: "flat rate",
      popular: false,
      badge: "Fast Launch",
      desc: "Perfect for personal brands or single offers wanting a clean, high-impact presence.",
      features: [
        "Complete 2-page responsive design",
        "Story-driven scroll design",
        "Mobile, tablet & desktop optimized",
        "3 Rounds of design revisions",
        "Delivery in 2–3 days",
      ],
      ctaText: "Start with Starter ($200)",
      ctaHref: `${WHATSAPP_LINK}?text=Hi%20Robin%2C%20I%20am%20interested%20in%20the%20%24200%20Starter%20package!`,
    },
    {
      name: "Most Popular",
      price: "$500",
      period: "complete platform",
      popular: true,
      badge: "Best Value",
      desc: "The sweet spot for growing businesses wanting deep engagement and conversion power.",
      features: [
        "Up to 4 pages & 6 high-converting sections",
        "Custom cinematic scroll animation",
        "Fast-loading, SEO-ready setup",
        "7 Rounds of precise revisions",
        "Delivery in 3–4 days",
        "🎁 Free installable app version (PWA) — works like an app on any phone",
        "7 days of free support after launch",
      ],
      ctaText: "Get Most Popular ($500)",
      ctaHref: `${WHATSAPP_LINK}?text=Hi%20Robin%2C%20I%20want%20to%20get%20the%20%24500%20Most%20Popular%20package%20with%20PWA%20bonus!`,
    },
    {
      name: "Premium",
      price: "$900",
      period: "custom ecosystem",
      popular: false,
      badge: "Full Scale",
      desc: "Comprehensive solution for established brands needing multi-page depth and priority speed.",
      features: [
        "Everything in Most Popular, plus:",
        "Massive 10-12 page ecosystem (9 sections/page)",
        "Advanced animations & interactive elements",
        "Unlimited revisions during build (Zero design risk)",
        "Domain & hosting setup assistance",
        "Priority delivery (48–72 hours fast-track)",
        "30 days of free support & bug fixes",
      ],
      ctaText: "Choose Premium ($900)",
      ctaHref: `${WHATSAPP_LINK}?text=Hi%20Robin%2C%20I%20am%20ready%20for%20the%20%24900%20Premium%20package!`,
    },
  ];

  return (
    <section id="pricing" className="py-16 sm:py-24 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
            <DollarSign className="w-4 h-4" />
            <span>Clear Investment Tiers</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Simple Pricing, No Surprises
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
            No hidden hourly rates or unexpected change fees. Pick the package that fits your timeline and launch with confidence.
          </p>
        </div>

        {/* 3-Tier Grid (Responsive: 1 col on mobile, 2 col on tablet, 3 col on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {pricingTiers.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-5 sm:p-7 lg:p-8 flex flex-col justify-between space-y-6 relative transition-all ${
                tier.popular
                  ? "bg-gradient-to-b from-emerald-950/40 via-slate-900 to-slate-900 border-2 border-emerald-500 shadow-2xl shadow-emerald-500/10 lg:-translate-y-2 md:order-first lg:order-none"
                  : "bg-slate-900/80 border border-slate-800 hover:border-slate-700"
              } ${idx === 2 ? "md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none w-full" : ""}`}
            >
              <span
                className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full font-black text-[10px] uppercase tracking-wider ${
                  tier.popular
                    ? "bg-emerald-500 text-slate-950 shadow-md"
                    : "bg-slate-800 text-slate-300 border border-slate-700"
                }`}
              >
                {tier.badge}
              </span>

              <div className="space-y-4 pt-2">
                <div>
                  <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{tier.desc}</p>
                </div>

                <div className="flex items-baseline gap-1.5 pt-2 border-b border-slate-800 pb-4">
                  <span className="text-3xl sm:text-4xl font-black text-white">{tier.price}</span>
                  <span className="text-xs font-medium text-slate-400">/{tier.period}</span>
                </div>

                <ul className="space-y-3 pt-2">
                  {tier.features.map((feat, fIdx) => {
                    const isPwaBonus = feat.includes("PWA") || feat.includes("🎁");
                    return (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                        {isPwaBonus ? (
                          <Gift className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        ) : (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        )}
                        <span className={isPwaBonus ? "text-purple-300 font-semibold" : ""}>
                          {feat}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <a
                href={tier.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn-3d w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  tier.popular
                    ? "bg-[#25D366] text-slate-950 border border-[#1DA851] shadow-[0_4px_0_0_#15803d] hover:brightness-105"
                    : "bg-slate-800 text-white border border-slate-700 shadow-[0_3px_0_0_#1e293b] hover:bg-slate-700"
                }`}
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{tier.ctaText}</span>
              </a>
            </div>
          ))}
        </div>

        {/* Custom Nudge Line */}
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-slate-300">
            <strong className="text-white font-semibold">Need something different?</strong> Like a full mobile app or a bigger project? Let&apos;s talk and build a custom plan.
          </p>
          <a
            href={`${WHATSAPP_LINK}?text=Hi%20Robin%2C%20I%20have%20a%20custom%20project%20I%20want%20to%20discuss.`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-sky-300 underline underline-offset-4"
          >
            <span>Discuss Custom Scope on WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
