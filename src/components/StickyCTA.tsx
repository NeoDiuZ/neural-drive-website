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
    <div className="fixed inset-x-0 bottom-4 z-40">
      <div className="container-w">
        <div className="glass shadow-soft px-4 py-3 flex items-center justify-between">
          <div className="text-sm text-slate-700">Accepting only 50 pilot families for Q1 2026 launch</div>
          <Link href="#cta" className="btn btn-primary">Request Priority Access</Link>
        </div>
      </div>
    </div>
  );
}
