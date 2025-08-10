"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = ["How It Works", "Clinical", "Pricing", "Team", "FAQ"];

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${solid ? "solid" : ""}`}>      
      <div className="container-w py-2 flex items-center justify-between">
        <Link href="/" className="font-bold tracking-wide" aria-label="Neural Drive">
          Neural Drive
        </Link>
        <nav className="hidden md:flex items-center gap-4 text-sm text-slate-600">
          {navItems.map((n) => (
            <a key={n} href={`#${n.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-slate-900 transition-colors">
              {n}
            </a>
          ))}
        </nav>
        <div className="hidden sm:flex items-center gap-2.5">
          <Link href="#cta" className="btn btn-primary">Get Priority Access</Link>
        </div>
      </div>
    </header>
  );
}
