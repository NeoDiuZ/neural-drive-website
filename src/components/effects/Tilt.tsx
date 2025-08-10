"use client";

import { useEffect, useRef } from "react";

export default function Tilt({ children, max = 8, className = "" }: { children: React.ReactNode; max?: number; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    if (!card) return;

    const isCoarse = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) {
      card.style.animation = "autoTilt 10s ease-in-out infinite";
      return;
    }

    function onMove(e: MouseEvent) {
      if (!el || !card) return;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      const rx = (py * -max).toFixed(2);
      const ry = (px * max).toFixed(2);
      card.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    }
    function onLeave() {
      if (!card) return;
      card.style.transform = `perspective(700px) rotateX(0deg) rotateY(0deg)`;
    }

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [max]);

  return <div ref={ref} className={className} style={{ display: "inline-block" }}>{children}</div>;
}
