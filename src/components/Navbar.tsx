"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "How It Works", href: "#demo" },
  { label: "Clinical", href: "#clinical" },
  { label: "Team", href: "#team" },
  { label: "Partners", href: "#partnerships" }
];

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${solid ? "solid" : ""}`}>      
      <div className="container-w flex items-center justify-between">
        <Link 
          href="/" 
          className="font-bold text-xl tracking-tight text-slate-900 dark:text-white hover:text-accent transition-colors" 
          aria-label="Neural Drive"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            Neural Drive
          </div>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 transition-all duration-200 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="#cta" className="btn btn-primary btn-sm">
            <span className="hidden sm:inline">Join Pilot Program</span>
            <span className="sm:hidden">Join Pilot</span>
          </Link>
          
          {/* Mobile menu button */}
          <button className="lg:hidden p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
