"use client";

import React from "react";
import { ArrowUp, Mail, MessageCircle } from "lucide-react";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function Footer() {
  const WHATSAPP_LINK = "https://wa.me/8801342132792";
  const EMAIL_LINK = "mailto:pch.cosmo1@gmail.com";
  const GITHUB_LINK = "https://github.com/Mahs-X";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-[#070A12] border-t border-slate-800/80 text-xs text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 via-sky-500 to-indigo-500 flex items-center justify-center font-black text-sm text-white">
              R
            </div>
            <div>
              <span className="font-bold text-white text-sm">ROBIN</span>
              <span className="block text-[11px] text-slate-400">
                Solo Builder, Bangladesh 🇧🇩
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-[#25D366] hover:border-slate-700 transition-colors"
              title="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <a
              href={EMAIL_LINK}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-sky-400 hover:border-slate-700 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={GITHUB_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-slate-700 transition-colors cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-900 text-[11px] text-slate-500 space-y-3">
          <p className="text-slate-400 font-medium">
            Built and designed by one person — using modern AI-assisted workflows to move fast without cutting corners.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Robin. All rights reserved.</p>
            <p>Built with Next.js, React 19, and Tailwind CSS v4.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
