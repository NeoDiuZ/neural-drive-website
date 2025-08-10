"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { t: "Activate", d: "Double blink triggers headset.", k: "activation" },
  { t: "Detect", d: "EEG focuses intent.", k: "detection" },
  { t: "Speak", d: "Speech bubbles appear.", k: "speech" },
];

export default function PatientJourney() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".journey-step").forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 12,
          duration: 0.32,
          ease: "power2.out",
          delay: 0.06 * i,
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="section-y relative overflow-hidden">
      <div className="blob blob-blue w-[220px] h-[220px] top-10 right-10" />
      <div className="container-w">
        <h2 className="h2">Patient Journey</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {steps.map((s) => (
            <div key={s.k} className="journey-step glass p-5">
              <div className="text-xs uppercase tracking-wide text-slate-500">{s.t}</div>
              <div className="mt-1 text-slate-700 text-sm">{s.d}</div>
              <div className="mt-3 rounded-xl bg-white/60 border border-white/70 h-24 grid place-items-center text-slate-500 text-sm">
                Visual placeholder
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
