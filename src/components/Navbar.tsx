"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const WHATSAPP_LINK =
    "https://wa.me/8801342132792?text=Hi%20Robin!%20I%20saw%20your%20portfolio%20and%20I%20have%20a%20project%20I%20want%20to%20discuss.";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "What You Get", href: "#whatyoure-getting" },
    { name: "Projects", href: "#projects" },
    { name: "Built With", href: "#built-with" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#090D16]/85 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 via-sky-500 to-indigo-500 p-[2px] shadow-[0_3px_0_0_#059669] transition-transform group-hover:scale-105">
            <div className="w-full h-full bg-[#0D1424] rounded-[10px] flex items-center justify-center font-black text-lg text-white">
              R
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-black text-lg tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                ROBIN
              </span>
              <span className="hidden sm:inline-flex px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-bold text-emerald-400">
                Solo Builder
              </span>
            </div>
            <span className="text-[10px] font-bold text-slate-400 block -mt-1 tracking-widest uppercase">
              No Agency, Direct Access
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-xl transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-3d inline-flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-wide bg-[#25D366] text-slate-950 border border-[#1DA851] shadow-[0_3px_0_0_#15803d] hover:brightness-105 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span className="hidden sm:inline">Hire Me</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-800/60 border border-slate-700/60 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0D1424] border-b border-slate-800 px-4 py-5 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50"
            >
              <span>{link.name}</span>
              <ArrowUpRight className="w-4 h-4 opacity-50" />
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs uppercase tracking-wide bg-[#25D366] text-slate-950"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
}
