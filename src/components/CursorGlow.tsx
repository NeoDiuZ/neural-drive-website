"use client";

import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    function onMove(e: MouseEvent) {
      document.documentElement.style.setProperty("--cursor-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${e.clientY}px`);
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return <div className="cursor-glow" aria-hidden />;
}
