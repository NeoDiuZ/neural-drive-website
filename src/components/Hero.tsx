"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && el.classList.add("visible")),
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="reveal relative overflow-hidden"
      aria-label="Hero"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#E0F4FF_0%,#89CFF0_100%)]" />
      <div className="relative max-w-screen-xl mx-auto px-6 py-24 sm:py-28 lg:py-32">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-up">
            <p className="text-sm font-semibold text-[var(--color-supporting-trustNavy)] tracking-wider uppercase">Give Voice to the Voiceless</p>
            <h1 className="h1 mt-3 text-[var(--color-supporting-trustNavy)]">
              Every Second of Silence is a Lifetime of Isolation
            </h1>
            <p className="lead mt-5 text-slate-700">
              Give Your Loved One Their Voice Back in Just 10 Seconds
            </p>
            <p className="mt-6 text-slate-700 max-w-prose">
              Right now, 15,000+ Singaporeans are trapped in their own bodies, unable to say
              &quot;I love you&quot;, &quot;I&apos;m in pain&quot;, or simply &quot;thank you&quot;. Neural Drive is Singapore&apos;s
              breakthrough brain-computer interface that lets paralyzed patients communicate
              instantly through thought and blinks. While others take 30+ minutes to set up,
              we give voices back in 10 seconds.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="#cta" className="btn-primary text-center text-base font-semibold hover-elevate">
                Schedule a Demo
              </Link>
              <Link href="#demo" className="btn-secondary text-center text-base font-semibold hover-elevate">
                Watch How It Works
              </Link>
            </div>
          </div>
          <div className="relative animate-fade-up" style={{ animationDelay: ".1s" as unknown as string }}>
            <div className="aspect-[4/3] rounded-2xl bg-white/50 backdrop-blur-sm border border-white/60 shadow-xl flex items-center justify-center">
              <div className="p-6 text-center">
                <div className="text-[var(--color-supporting-trustNavy)] font-semibold">10-second setup</div>
                <div className="mt-2 text-slate-600">Split-screen: before (isolated) vs after (communicating)</div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="pointer-events-none select-none absolute -top-6 -right-6 w-28 h-28 rounded-full bg-[var(--color-accent-lightCyan)] blur-2xl opacity-70 animate-float" />
            <div className="pointer-events-none select-none absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-[var(--color-accent-skyBlue)] blur-3xl opacity-50 animate-float" style={{ animationDelay: "1.2s" as unknown as string }} />
          </div>
        </div>
      </div>
    </section>
  );
}
