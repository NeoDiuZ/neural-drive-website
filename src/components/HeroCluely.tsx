"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "@/components/effects/Magnetic";
import Tilt from "@/components/effects/Tilt";

gsap.registerPlugin(ScrollTrigger);

export default function HeroCluely() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const mockupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", { y: 16, opacity: 0, duration: 0.3, ease: "power2.out" });
      gsap.from(".hero-sub", { y: 12, opacity: 0, duration: 0.28, ease: "power2.out", delay: 0.06 });
      gsap.from(".hero-cta", { y: 10, opacity: 0, duration: 0.24, ease: "power2.out", stagger: 0.08, delay: 0.12 });
      gsap.from(".hero-mock", { opacity: 0, scale: 0.98, duration: 0.5, ease: "power2.out", delay: 0.18 });

      if (mockupRef.current) {
        gsap.to(mockupRef.current, {
          yPercent: -6,
          ease: "none",
          scrollTrigger: { trigger: rootRef.current, start: "top top", end: "+=60%", scrub: true },
        });
      }
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const marqueeItems = ["Instant Needs", "Blink-to-Speak", "EEG Focus", "HSA Class B Pathway", "Open API"];

  return (
    <section className="section-y relative overflow-hidden hero-bg hero-anim">
      <div className="blob blob-blue w-[300px] h-[300px] -top-10 -left-10 animate-blob" />
      <div className="blob blob-lilac w-[260px] h-[260px] bottom-10 right-20 animate-blob" />
      <div className="blob blob-green w-[220px] h-[220px] top-32 right-1/3 animate-blob" />

      <div ref={rootRef} className="container-w grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h1 className="h1 hero-title">Every second of silence isolates a life.</h1>
          <p className="hero-sub mt-2 text-slate-700">Give Your Loved One Their Voice Back in Just 10 Seconds</p>
          <p className="mt-2 text-slate-600 max-w-prose">Right now, 15,000+ Singaporeans are trapped in their own bodies, unable to say &quot;I love you&quot;, &quot;I&apos;m in pain&quot;, or simply &quot;thank you&quot;. Neural Drive is Singapore&apos;s breakthrough brain-computer interface that lets paralyzed patients communicate instantly through thought and blinks. While others take 30+ minutes to set up, we give voices back in 10 seconds.</p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            <Magnetic>
              <Link href="#cta" className="btn btn-primary hero-cta">Schedule a Demo</Link>
            </Magnetic>
            <Magnetic>
              <Link href="#demo" className="btn btn-secondary hero-cta">Watch How It Works</Link>
            </Magnetic>
          </div>
          <div className="mt-4 marquee">
            <div className="marquee-track">
              {[...marqueeItems, ...marqueeItems].map((it, i) => (
                <span key={`${it}-${i}`} className="px-3 py-1 text-xs glass">{it}</span>
              ))}
            </div>
          </div>
        </div>
        <div ref={mockupRef} className="hero-mock relative breathe">
          <Tilt>
            <div className="relative">
              <div className="glass p-4 md:p-5">
                <div className="aspect-[4/3] rounded-xl bg-white/50 border border-white/60 grid place-items-center overflow-hidden">
                  <div className="text-slate-600">3D Headset / Device Mockup</div>
                  <div className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute -inset-1 [background:linear-gradient(110deg,transparent,rgba(255,255,255,.25),transparent)] [mask:linear-gradient(#fff,transparent_60%)] animate-[shine_1.8s_ease]" />
                  </div>
                </div>
                <div className="mt-2.5 flex gap-2 text-xs">
                  <span className="glass px-3 py-1">“Call Nurse”</span>
                  <span className="glass px-3 py-1">“I’m Hungry”</span>
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
}
