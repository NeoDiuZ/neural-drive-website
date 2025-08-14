"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "@/components/effects/Magnetic";

gsap.registerPlugin(ScrollTrigger);

export default function HeroCluely() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const mockupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof gsap !== 'undefined') {
        const ctx = gsap.context(() => {
          // Animate elements from their initial state
          gsap.fromTo(".hero-title", 
            { y: 20, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
          );
          gsap.fromTo(".hero-sub", 
            { y: 16, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", delay: 0.1 }
          );
          gsap.fromTo(".hero-cta", 
            { y: 12, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", stagger: 0.1, delay: 0.2 }
          );
          gsap.fromTo(".hero-mock", 
            { opacity: 0, scale: 0.95 }, 
            { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out", delay: 0.3 }
          );

          if (mockupRef.current) {
            gsap.to(mockupRef.current, {
              yPercent: -6,
              ease: "none",
              scrollTrigger: { trigger: rootRef.current, start: "top top", end: "+=60%", scrub: true },
            });
          }
        }, rootRef);
        return () => ctx.revert();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="section-y relative overflow-hidden hero-bg">
      <div ref={rootRef} className="container-w">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[60vh] lg:min-h-[80vh]">
          {/* Left: Bold Headlines */}
          <div className="lg:pr-8 text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-teal-50 to-cyan-50 text-teal-700 border border-teal-200/50 hero-title">
                🧠 Breakthrough Technology
              </span>
            </div>
            <h1 className="h1 hero-title mb-6 text-slate-900 dark:text-white">
              Every second of silence isolates a life.
            </h1>
            <p className="body-lg hero-sub mb-8 max-w-[50ch] text-slate-700 dark:text-slate-200">
              Give Your Loved One Their Voice Back in Just 10 Seconds
            </p>
            <p className="body mb-8 lg:mb-10 max-w-[55ch] leading-relaxed text-slate-600 dark:text-slate-300 mx-auto lg:mx-0">
              Right now, 15,000+ Singaporeans are trapped in their own bodies, unable to say &quot;I love you&quot;, &quot;I&apos;m in pain&quot;, or simply &quot;thank you&quot;. Neural Drive is Singapore&apos;s breakthrough brain-computer interface that lets paralyzed patients communicate instantly through thought and blinks.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Magnetic>
                <Link href="#cta" className="btn btn-primary btn-lg hero-cta">
                  Join Pilot Program
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </Magnetic>
              <Magnetic>
                <Link href="#demo" className="btn btn-secondary btn-lg hero-cta">
                  Watch Demo
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8" />
                  </svg>
                </Link>
              </Magnetic>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6 items-center text-sm">
              {["10-Second Setup", "HSA Class B", "15,000+ Patients", "Singapore-Made"].map((item, i) => (
                <div key={item} className="flex items-center gap-2 hero-cta delay-300" style={{ animationDelay: `${0.6 + i * 0.1}s` }}>
                  <div className="w-2 h-2 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"></div>
                  <span className="body-sm font-medium text-slate-600 dark:text-slate-400">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Floating Product Mockup */}
          <div ref={mockupRef} className="hero-mock relative">
            <div className="relative">
              {/* Main device card */}
              <div className="glass p-8 lg:p-10 transform perspective-1000 hover:scale-[1.02] transition-transform duration-500">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-white/80 to-white/60 border border-white/60 shadow-inner overflow-hidden relative">
                  {/* Mock device interface */}
                  <div className="absolute inset-4 bg-slate-900 rounded-xl flex flex-col">
                    <div className="flex-1 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 relative overflow-hidden">
                      <div className="text-white/80 text-sm mb-2">Neural Drive Interface</div>
                      <div className="space-y-2">
                        <div className="h-2 bg-gradient-to-r from-teal-400 to-cyan-400 rounded w-3/4"></div>
                        <div className="h-2 bg-white/20 rounded w-1/2"></div>
                        <div className="h-2 bg-white/10 rounded w-2/3"></div>
                      </div>
                      <div className="absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-400/10 to-cyan-400/10 pointer-events-none"></div>
                </div>
                
                {/* Quick action buttons */}
                <div className="mt-6 flex gap-3">
                  <div className="glass px-4 py-2 text-sm font-medium">&quot;Call Nurse&quot;</div>
                  <div className="glass px-4 py-2 text-sm font-medium">&quot;I&apos;m Hungry&quot;</div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-full blur-xl opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full blur-2xl opacity-40 animate-pulse" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
