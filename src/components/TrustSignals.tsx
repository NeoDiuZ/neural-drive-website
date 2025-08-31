"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const partners = [
  {
    name: "Khoo Teck Puat Hospital",
    logo: "/khooteckpuat.png",
    type: "hospital"
  },
  {
    name: "Tan Tock Seng Hospital",
    logo: "/tantockseng.png", 
    type: "hospital"
  },
  {
    name: "National Healthcare Group",
    logo: "/nhg_logo.png",
    type: "healthcare"
  }
];

const certifications = [
  {
    name: "HSA Class B",
    description: "Medical Device Pathway",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    name: "ISO 13485",
    description: "Quality Management",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    name: "Singapore Made",
    description: "Local Innovation",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    )
  }
];

export default function TrustSignals() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in trust signals on scroll
      gsap.fromTo(".trust-item", 
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 85%"
          }
        }
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="py-16 bg-gray-50 border-y border-gray-100">
      <div className="container container-xl">
        
        {/* Partners Section */}
        <div className="text-center mb-12">
          <div className="caption text-gray-500 mb-4">Trusted by Leading Healthcare Institutions</div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {partners.map((partner, index) => (
              <div 
                key={partner.name}
                className="trust-item flex items-center justify-center"
              >
                <div className="relative w-full h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="border-t border-gray-200 pt-12">
          <div className="text-center mb-8">
            <div className="caption text-gray-500 mb-6">Regulatory Compliance & Quality Standards</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {certifications.map((cert, index) => (
              <div 
                key={cert.name}
                className="trust-item group"
              >
                <div className="card-minimal text-center hover:shadow-md transition-all duration-300">
                  <div className="text-blue-600 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {cert.icon}
                  </div>
                  <div className="heading-4 text-sm mb-1">{cert.name}</div>
                  <div className="body-small text-gray-500">{cert.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
