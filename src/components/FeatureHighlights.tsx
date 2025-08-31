"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  { 
    title: "10-Second Setup", 
    desc: "While traditional BCIs take 30+ minutes to calibrate, Neural Drive activates instantly through simple forehead placement.",
    illustration: (
      <div className="relative w-full h-48 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center">
        <div className="relative">
          <div className="w-24 h-24 bg-blue-600 rounded-2xl flex items-center justify-center">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">✓</span>
          </div>
        </div>
      </div>
    )
  },
  { 
    title: "Blink-to-Speak", 
    desc: "Two deliberate blinks trigger immediate communication. No complex training or calibration required.",
    illustration: (
      <div className="relative w-full h-48 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl flex items-center justify-center">
        <div className="space-y-4">
          <div className="flex justify-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-full animate-pulse"></div>
            <div className="w-8 h-8 bg-green-600 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
          <div className="bg-white px-4 py-2 rounded-lg shadow-sm border">
            <span className="text-sm font-medium text-gray-900">&ldquo;Call Nurse&rdquo;</span>
          </div>
        </div>
      </div>
    )
  },
  { 
    title: "Life-Critical Messages", 
    desc: "Instant access to essential communications like 'Call Nurse', 'I'm in Pain', and custom family messages.",
    illustration: (
      <div className="relative w-full h-48 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
        <div className="grid grid-cols-2 gap-3 h-full">
          <div className="bg-white rounded-lg shadow-sm border p-3 flex items-center justify-center">
            <span className="text-xs font-medium text-gray-700">Call Nurse</span>
          </div>
          <div className="bg-white rounded-lg shadow-sm border p-3 flex items-center justify-center">
            <span className="text-xs font-medium text-gray-700">I&apos;m Hungry</span>
          </div>
          <div className="bg-white rounded-lg shadow-sm border p-3 flex items-center justify-center">
            <span className="text-xs font-medium text-gray-700">Thank You</span>
          </div>
          <div className="bg-white rounded-lg shadow-sm border p-3 flex items-center justify-center">
            <span className="text-xs font-medium text-gray-700">I Love You</span>
          </div>
        </div>
      </div>
    )
  },
];

export default function FeatureHighlights() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section header animation
      gsap.fromTo(".features-header", 
        { y: 30, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power2.out", 
          scrollTrigger: { trigger: ".features-header", start: "top 80%" } 
        }
      );

      // Staggered feature card animations
      gsap.utils.toArray<HTMLElement>(".feature-card").forEach((el, i) => {
        gsap.fromTo(el, 
          { opacity: 0, y: 40 }, 
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.6, 
            ease: "power2.out", 
            delay: i * 0.2, 
            scrollTrigger: { 
              trigger: el, 
              start: "top 85%"
            } 
          }
        );
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="section bg-white" id="features">
      <div className="container container-xl">
        
        {/* Section Header */}
        <div className="features-header text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="caption text-blue-700">How It Works</span>
          </div>
          
          <h2 className="heading-1 mb-6 max-w-[20ch] mx-auto">
            Communication restored in three simple steps
          </h2>
          
          <p className="subheading max-w-[60ch] mx-auto text-gray-600">
            Our breakthrough technology eliminates the complexity of traditional brain-computer interfaces, 
            delivering instant communication when it matters most.
          </p>
        </div>

        {/* Asymmetrical Feature Grid */}
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`feature-card grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-row-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-2xl">
                  <span className="heading-4 text-blue-600">{index + 1}</span>
                </div>
                
                <h3 className="heading-2">{feature.title}</h3>
                
                <p className="body-large text-gray-600 max-w-[50ch]">
                  {feature.desc}
                </p>
                
                <div className="pt-4">
                  <div className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all duration-200 cursor-pointer group">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Illustration */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="card-elevated hover:shadow-xl transition-all duration-300">
                  {feature.illustration}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-24 pt-16 border-t border-gray-100">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "10", unit: "s", label: "Setup time" },
              { value: "2", unit: "", label: "Blinks needed" },
              { value: "15", unit: "k+", label: "Patients in need" },
              { value: "100", unit: "%", label: "Success rate" }
            ].map((stat) => (
              <div key={stat.label} className="space-y-2">
                <div className="heading-1 text-blue-600">
                  {stat.value}<span className="text-gray-400">{stat.unit}</span>
                </div>
                <div className="body-small text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
