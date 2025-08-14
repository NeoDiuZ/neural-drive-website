"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  { 
    title: "10-Second Setup", 
    desc: "While others take 30+ minutes, Neural Drive activates in just 10 seconds through simple forehead placement.",
    icon: "⚡",
    gradient: "from-amber-500 to-orange-500"
  },
  { 
    title: "Blink-to-Speak", 
    desc: "Two deliberate blinks trigger immediate communication. No complex calibration required.",
    icon: "👁️",
    gradient: "from-blue-500 to-cyan-500"
  },
  { 
    title: "Life-Critical Messages", 
    desc: "Instant access to 'Call Nurse', 'I'm in Pain', 'I'm Hungry' and custom family messages.",
    icon: "💬",
    gradient: "from-emerald-500 to-teal-500"
  },
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
    <section ref={rootRef} className="section-y" id="features">
      <div className="container-w">
        <div className="text-center mb-16">
          <h2 className="h2 mb-4 dark:text-white">Breakthrough Speed. Life-Saving Simplicity.</h2>
          <p className="body-lg max-w-[50ch] mx-auto dark:text-slate-300">
            While traditional BCIs require extensive setup, Neural Drive gives voice back in seconds.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, index) => (
            <div key={f.title} className="feat-card card group text-center">
              <div className="mb-6">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${f.gradient} flex items-center justify-center text-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {f.icon}
                </div>
              </div>
              
              <h3 className="h3 mb-4 dark:text-white">{f.title}</h3>
              <p className="body text-left leading-relaxed dark:text-slate-300">{f.desc}</p>
              
              {/* Subtle number indicator */}
              <div className="absolute top-4 right-4 w-6 h-6 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center text-xs font-semibold text-slate-600 dark:text-slate-300">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
        
        {/* Supporting stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "10s", label: "Setup Time" },
            { value: "2", label: "Blinks to Speak" },
            { value: "15k+", label: "Patients in Need" },
            { value: "24/7", label: "Always Ready" }
          ].map((stat) => (
            <div key={stat.label} className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="body-sm dark:text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
