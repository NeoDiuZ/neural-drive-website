"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useCountUp(target: number, triggered: boolean, durationMs = 1000) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    const start = performance.now();
    const raf = (t: number) => {
      const p = Math.min(1, (t - start) / durationMs);
      setVal(Math.floor(target * p));
      if (p < 1) requestAnimationFrame(raf);
    };
    const id = requestAnimationFrame(raf);
    return () => cancelAnimationFrame(id);
  }, [target, triggered, durationMs]);
  return val;
}

export default function Impact() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({ trigger: ref.current, start: "top 80%", onEnter: () => setTriggered(true) });
    }, ref);
    return () => ctx.revert();
  }, []);

  const faster = useCountUp(100, triggered);
  const cheaper = useCountUp(10, triggered);

  return (
    <section className="section-y">
      <div ref={ref} className="container-w grid md:grid-cols-2 gap-6 items-center">
        <div>
          <div className="h2">Impact</div>
          <div className="mt-5 grid grid-cols-2 gap-5">
            <div className="glass p-5 text-center">
              <div className="text-3xl font-bold">{faster}×</div>
              <div className="text-slate-600 mt-1">Faster Setup</div>
            </div>
            <div className="glass p-5 text-center">
              <div className="text-3xl font-bold">{cheaper}×</div>
              <div className="text-slate-600 mt-1">Cheaper</div>
            </div>
          </div>
        </div>
        <div className="glass p-5">
          <div className="aspect-[4/3] rounded-xl bg-white/60 border border-white/70 grid place-items-center text-slate-600">
            Hospital case image
          </div>
        </div>
      </div>
    </section>
  );
}
