"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function StickyCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed inset-x-0 bottom-4 lg:bottom-6 z-40 px-3 lg:px-4">
      <div className="container-w">
        <div className="card px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 backdrop-blur-lg border border-white/20 shadow-strong">
          <div className="text-center sm:text-left">
            <div className="text-sm font-semibold text-slate-900 dark:text-white">Limited Pilot Program</div>
            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">Accepting only 50 families for Q1 2026 launch</div>
          </div>
          <Link href="#cta" className="btn btn-primary btn-sm sm:btn-md whitespace-nowrap w-full sm:w-auto">
            <span className="hidden sm:inline">Join Pilot Program</span>
            <span className="sm:hidden">Join Pilot</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
