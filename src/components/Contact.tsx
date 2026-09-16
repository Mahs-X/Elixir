"use client";

import React, { useState } from "react";
import {
  MessageCircle,
  Mail,
  Clock,
  ShieldCheck,
  Lock,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ||
  "13a86ba8-052f-4aaa-91e6-6130bb542d21";

export default function Contact() {
  const WHATSAPP_NUMBER = "01342132792";
  const WHATSAPP_LINK =
    "https://wa.me/8801342132792?text=Hi%20Robin!%20I%20saw%20your%20portfolio%20and%20I%20have%20a%20project%20I%20want%20to%20discuss.";
  const EMAIL_ADDRESS = "pch.cosmo1@gmail.com";
  const EMAIL_LINK = "mailto:pch.cosmo1@gmail.com";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "$250 - $500",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          budget: formData.budget,
          message: formData.message,
          subject: `New Portfolio Inquiry from ${formData.name} (${formData.budget})`,
          from_name: "Portfolio Client Brief",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(
          data.message || "Failed to send message. Please try again or WhatsApp directly."
        );
      }
    } catch (err) {
      console.error("Web3Forms submission error:", err);
      setStatus("error");
      setErrorMessage(
        "Network connection issue. You can message directly on WhatsApp!"
      );
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-b border-slate-800/80 bg-[#0B0F19]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Direct Pitch */}
          <div className="lg:col-span-6 space-y-6">
            <span className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-xs font-bold uppercase tracking-wider text-sky-400">
              Direct Engineering Partnership
            </span>

            <h2 className="text-2xl min-[380px]:text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Ready to Launch Your Next Product?
            </h2>

            <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
              Message me directly on WhatsApp with your project requirements or send an email inquiry.
              I review scopes and provide honest engineering estimates within hours.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3.5 rounded-2xl font-bold text-xs sm:text-sm uppercase tracking-wider bg-[#25D366] text-slate-950 border border-[#1DA851] shadow-[0_4px_0_0_#15803d] hover:brightness-105 cursor-pointer w-full sm:w-auto"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                <span>WhatsApp ({WHATSAPP_NUMBER})</span>
              </a>

              <a
                href={EMAIL_LINK}
                className="btn-3d inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3.5 rounded-2xl font-bold text-xs sm:text-sm uppercase tracking-wider bg-slate-900 border border-slate-700 text-slate-200 shadow-[0_4px_0_0_#1e293b] hover:bg-slate-800 hover:text-white cursor-pointer w-full sm:w-auto"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400" />
                <span>{EMAIL_ADDRESS}</span>
              </a>
            </div>

            <div className="pt-2 sm:pt-4 space-y-2.5 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Fast turnaround: Replies within 2 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                <span>100% Money-Back Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Full Source Code & IP Handover with clean Git history</span>
              </div>
            </div>
          </div>

          {/* Right Interactive Form */}
          <div className="lg:col-span-6">
            <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-4 sm:space-y-5">
              <div className="border-b border-slate-800 pb-3 sm:pb-4">
                <h3 className="text-lg sm:text-xl font-bold text-white">Send a Project Brief</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Fill in your idea and timeline to get a direct proposal.
                </p>
              </div>

              {status === "success" ? (
                <div className="p-6 sm:p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-4 shadow-xl">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center mx-auto text-emerald-400 animate-pulse">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  
                  <div className="space-y-1">
                    <h4 className="text-xl font-black text-white">Inquiry Sent Successfully!</h4>
                    <p className="text-xs text-emerald-300 font-medium">
                      Directly delivered to <strong className="text-white">{EMAIL_ADDRESS}</strong>
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
                    Thank you, <strong className="text-white">{formData.name}</strong>. I review scopes rapidly and will reply to <span className="text-sky-300 font-semibold">{formData.email}</span> within 2 hours.
                  </p>

                  <div className="pt-3 space-y-2.5">
                    <a
                      href={`https://wa.me/8801342132792?text=${encodeURIComponent(
                        `Hi Robin! I just submitted an inquiry on your portfolio.\nName: ${formData.name}\nEmail: ${formData.email}\nBudget: ${formData.budget}\nBrief: ${formData.message}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-3d w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#25D366] text-slate-950 border border-[#1DA851] shadow-[0_4px_0_0_#15803d] hover:brightness-105 transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Chat on WhatsApp Now (Instant Reply)</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setStatus("idle");
                        setFormData({ name: "", email: "", budget: "$250 - $500", message: "" });
                      }}
                      className="text-xs text-slate-400 hover:text-slate-200 transition-colors pt-2 cursor-pointer inline-block"
                    >
                      ← Send another project inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Name / Company
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Connor / TechLabs"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Estimated Project Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white focus:outline-none focus:border-sky-500 transition-colors"
                    >
                      <option value="$50 - $100">$50 - $100 (Sprint / Single Feature / Fix)</option>
                      <option value="$250 - $500">$250 - $500 (Business Launchpad / MVP)</option>
                      <option value="$500 - $1,000">$500 - $1,000 (Full-Stack SaaS / Flutter App)</option>
                      <option value="$1,000 - $2,500+">$1,000 - $2,500+ (Enterprise Digital Ecosystem)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Project Overview
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me what you are building, timeline goals, or features..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-2 text-xs text-rose-300">
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-3d w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-sky-500 text-slate-950 border border-sky-400 shadow-[0_3px_0_0_#0284c7] hover:brightness-105 disabled:opacity-70 disabled:cursor-not-allowed transition-all cursor-pointer"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                        <span>Transmitting Brief...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Project Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
