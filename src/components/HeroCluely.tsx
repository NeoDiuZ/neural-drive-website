"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HeroCluely() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const illustrationRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof gsap !== 'undefined') {
        const ctx = gsap.context(() => {
          // Clean entrance animations
          gsap.fromTo(".hero-badge", 
            { y: 20, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
          );
          gsap.fromTo(".hero-title", 
            { y: 30, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.1 }
          );
          gsap.fromTo(".hero-subtitle", 
            { y: 20, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", delay: 0.2 }
          );
          gsap.fromTo(".hero-cta", 
            { y: 20, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", delay: 0.3 }
          );
          gsap.fromTo(".hero-visual", 
            { opacity: 0, scale: 0.95 }, 
            { opacity: 1, scale: 1, duration: 1, ease: "power2.out", delay: 0.4 }
          );

          // Subtle floating animation for illustration
          if (illustrationRef.current) {
            gsap.to(illustrationRef.current, {
              y: "+=8",
              duration: 4,
              ease: "sine.inOut",
              yoyo: true,
              repeat: -1
            });
          }
        }, rootRef);
        return () => ctx.revert();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={rootRef} className="section bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="60" height="60" viewBox="0 0 60 60" className="absolute inset-0 w-full h-full">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container container-xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center min-h-[90vh] lg:min-h-[80vh]">
          
          {/* Content */}
          <div className="space-y-8 lg:space-y-10">
            
            {/* Badge */}
            <div className="hero-badge">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="caption text-blue-700">Medical Device Innovation</span>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-6">
              <h1 className="hero-title display-1 max-w-[12ch]">
                Restoring voices in 
                <span className="text-blue-600"> 10 seconds</span>
              </h1>
              
              <p className="hero-subtitle subheading max-w-[50ch]">
                Neural Drive enables paralyzed patients to communicate instantly through breakthrough brain-computer interface technology.
              </p>
            </div>

            {/* CTA */}
            <div className="hero-cta flex flex-col sm:flex-row gap-4">
              <Link href="#pilot" className="btn btn-primary">
                Join Pilot Program
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="#demo" className="btn btn-secondary">
                Watch Demo
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8" />
                </svg>
              </Link>
            </div>

            {/* Key metrics */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100">
              <div>
                <div className="heading-4 text-blue-600">10s</div>
                <div className="body-small text-gray-600">Setup time</div>
              </div>
              <div>
                <div className="heading-4 text-blue-600">15k+</div>
                <div className="body-small text-gray-600">Patients in need</div>
              </div>
              <div>
                <div className="heading-4 text-blue-600">HSA</div>
                <div className="body-small text-gray-600">Class B pathway</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="hero-visual relative">
            <div className="relative">
              
              {/* Main illustration container */}
              <div ref={illustrationRef} className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 lg:p-12 border border-blue-100">
                
                {/* Interface mockup */}
                <div className="aspect-[4/3] bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden relative">
                  
                  {/* Header */}
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                      <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                      <div className="w-3 h-3 bg-white/60 rounded-full"></div>
                      <div className="ml-auto text-white text-sm font-medium">Neural Drive</div>
                    </div>
                  </div>
                  
                  {/* Content area */}
                  <div className="p-6 space-y-4">
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 bg-blue-100 rounded-2xl mx-auto flex items-center justify-center">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10m0 0V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2m10 0v10a2 2 0 01-2 2H9a2 2 0 01-2-2V8m8 0V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2" />
                        </svg>
                      </div>
                      <div className="text-sm font-medium text-gray-900">Ready to communicate</div>
                    </div>
                    
                    {/* Message options */}
                    <div className="grid grid-cols-2 gap-3">
                      <button className="p-3 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 text-xs font-medium text-blue-700 transition-colors">
                        Call Nurse
                      </button>
                      <button className="p-3 bg-green-50 hover:bg-green-100 rounded-lg border border-green-200 text-xs font-medium text-green-700 transition-colors">
                        I'm Hungry
                      </button>
                      <button className="p-3 bg-purple-50 hover:bg-purple-100 rounded-lg border border-purple-200 text-xs font-medium text-purple-700 transition-colors">
                        Thank You
                      </button>
                      <button className="p-3 bg-red-50 hover:bg-red-100 rounded-lg border border-red-200 text-xs font-medium text-red-700 transition-colors">
                        I Love You
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
                
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
