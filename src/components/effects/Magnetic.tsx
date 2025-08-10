"use client";

import { useEffect, useRef } from "react";

export default function Magnetic({ children, strength = 12, className = "" }: { children: React.ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const target = el.firstElementChild as HTMLElement | null;
    if (!target) return;

    function onMove(e: MouseEvent) {
      if (!el || !target) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const dx = (x / rect.width - 0.5) * 2; // -1..1
      const dy = (y / rect.height - 0.5) * 2;
      target.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
    }
    function onLeave() {
      if (!target) return;
      target.style.transform = `translate(0, 0)`;
    }

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);

  return <div ref={ref} className={className} style={{ display: "inline-block" }}>{children}</div>;
}
