"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  { title: "Double Blink Activation", desc: "2 rapid blinks. Haptic confirm.", icon: "👁️" },
  { title: "EEG Focus Detection", desc: "Forehead sensor reads intent.", icon: "〰️" },
  { title: "Instant Communication", desc: "Preset phrases. Critical needs.", icon: "💬" },
];

export default function FeatureHighlights() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".feat-card").forEach((el, i) => {
        gsap.from(el, { opacity: 0, y: 10, duration: 0.28, ease: "power2.out", delay: 0.05 * i, scrollTrigger: { trigger: el, start: "top 85%" } });
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="section-y">
      <div className="container-w">
        <div className="grid md:grid-cols-3 gap-4">
          {features.map((f) => (
            <div key={f.title} className="feat-card glass p-4">
              <div className="text-2xl" aria-hidden>
                <span className="inline-block animate-bounce [animation-duration:1.6s]">{f.icon}</span>
              </div>
              <div className="mt-2 font-semibold" style={{ fontFamily: "var(--font-heading)" }}>{f.title}</div>
              <div className="mt-1 text-slate-600">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
