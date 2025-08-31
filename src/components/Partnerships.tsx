"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const partners = [
  { name: "National Healthcare Group", img: "/nhg_logo.png" },
  { name: "Tan Tock Seng Hospital", img: "/tantockseng.png" },
  { name: "Khoo Teck Puat Hospital", img: "/khooteckpuat.png" },
  { name: "Lions Befrienders", img: "/lionbefrienders.png" },
];

const certifications = [
  {
    name: "HSA Class B",
    description: "Medical Device Pathway",
    color: "green"
  },
  {
    name: "ISO 13485",
    description: "Quality Management",
    color: "blue"
  },
  {
    name: "Procurement Ready",
    description: "Institutional Deployment",
    color: "purple"
  }
];

export default function Partnerships() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(".partnerships-header", 
        { y: 30, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power2.out", 
          scrollTrigger: { trigger: ".partnerships-header", start: "top 80%" } 
        }
      );

      // Certifications animation
      gsap.fromTo(".cert-badge", 
        { opacity: 0, scale: 0.9 }, 
        { 
          opacity: 1, 
          scale: 1, 
          duration: 0.6, 
          ease: "back.out(1.2)", 
          stagger: 0.1,
          scrollTrigger: { trigger: ".certifications", start: "top 85%" } 
        }
      );

      // Partners animation
      gsap.utils.toArray<HTMLElement>(".partner-card").forEach((el, i) => {
        gsap.fromTo(el, 
          { opacity: 0, y: 30 }, 
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.6, 
            ease: "power2.out", 
            delay: i * 0.1, 
            scrollTrigger: { 
              trigger: el, 
              start: "top 85%"
            } 
          }
        );
      });

      // Quote animation
      gsap.fromTo(".partnership-quote", 
        { opacity: 0, y: 30 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          ease: "power2.out", 
          scrollTrigger: { trigger: ".partnership-quote", start: "top 85%" } 
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section bg-gray-50" id="partnerships">
      <div className="container container-xl">
        
        {/* Section Header */}
        <div className="partnerships-header text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="caption text-blue-700">Trusted by Leading Healthcare Institutions</span>
          </div>
          
          <h2 className="heading-1 mb-6 max-w-[20ch] mx-auto">
            Partnerships that transform healthcare
          </h2>
          
          <p className="subheading max-w-[60ch] mx-auto text-gray-600">
            Neural Drive meets the highest medical standards, trusted by institutions that serve thousands of patients daily.
          </p>
        </div>

        {/* Certifications */}
        <div className="certifications mb-16">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="cert-badge inline-flex items-center gap-3 px-6 py-3 bg-green-50 border border-green-200 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div>
                <div className="font-semibold text-green-700 text-sm">HSA Class B</div>
                <div className="text-xs text-gray-500">Medical Device Pathway</div>
              </div>
            </div>
            <div className="cert-badge inline-flex items-center gap-3 px-6 py-3 bg-blue-50 border border-blue-200 rounded-full">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div>
                <div className="font-semibold text-blue-700 text-sm">ISO 13485</div>
                <div className="text-xs text-gray-500">Quality Management</div>
              </div>
            </div>
            <div className="cert-badge inline-flex items-center gap-3 px-6 py-3 bg-purple-50 border border-purple-200 rounded-full">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <div>
                <div className="font-semibold text-purple-700 text-sm">Procurement Ready</div>
                <div className="text-xs text-gray-500">Institutional Deployment</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Partner Logos */}
        <div className="mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <div key={partner.name} className="partner-card group">
                <div className="bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 rounded-xl p-6 h-24 flex items-center justify-center transition-all duration-300 hover:shadow-md">
                  <Image 
                    src={partner.img} 
                    alt={partner.name} 
                    width={160} 
                    height={48} 
                    className="h-10 w-auto object-contain opacity-90 group-hover:opacity-100 transition-all duration-300" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clinical Quote */}
        <div className="partnership-quote">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center max-w-4xl mx-auto hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
            </div>
            
            <blockquote className="body-large mb-6 italic text-gray-700 max-w-[60ch] mx-auto">
              "Neural Drive represents the cutting edge of assistive communication technology, 
              meeting our strict standards for patient safety and clinical efficacy."
            </blockquote>
            
            <footer className="space-y-1">
              <div className="heading-4 text-sm text-gray-900">Clinical Advisory Board</div>
              <div className="body-small text-gray-500">Leading Healthcare Institutions</div>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}
