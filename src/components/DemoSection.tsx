"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  { 
    text: "The first time my mother could tell us she loved us after her stroke... we all cried.", 
    author: "Sarah Tan", 
    relation: "Daughter of stroke patient"
  },
  { 
    text: "Setup was faster than putting on her reading glasses. Incredible technology.", 
    author: "Michael Lim", 
    relation: "Father of stroke patient"
  },
];

export default function DemoSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(".demo-header", 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".demo-header",
            start: "top 85%"
          }
        }
      );

      // Video animation
      gsap.fromTo(".demo-video", 
        { opacity: 0, scale: 0.95 },
        { 
          opacity: 1, 
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".demo-video",
            start: "top 80%"
          }
        }
      );

      // Testimonials animation
      gsap.utils.toArray<HTMLElement>(".testimonial-card").forEach((card, i) => {
        gsap.fromTo(card, 
          { opacity: 0, y: 40 },
          { 
            opacity: 1, 
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            delay: i * 0.2,
            scrollTrigger: {
              trigger: card,
              start: "top 85%"
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section bg-gray-50" id="demo">
      <div className="container container-xl">
        
        {/* Section Header */}
        <div className="demo-header text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="caption text-red-700">Live Demo</span>
          </div>
          
          <h2 className="heading-1 mb-6 max-w-[16ch] mx-auto">
            See the transformation in real time
          </h2>
          
          <p className="subheading max-w-[60ch] mx-auto text-gray-600">
            Watch how Neural Drive gives voice back to those who need it most, in just seconds.
          </p>
        </div>
        
        {/* Video Section */}
        <div className="demo-video mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="card-elevated overflow-hidden">
              <div className="aspect-video bg-gray-100 rounded-t-xl overflow-hidden relative">
                <iframe
                  src="https://www.youtube.com/embed/CLR19Y1oNJ4"
                  title="Neural Drive Demo - Breakthrough Communication Technology"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ border: 'none' }}
                />
                
                {/* Live indicator */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  LIVE
                </div>
              </div>
              
              {/* Video info */}
              <div className="p-6 bg-white">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h3.763l7.79 3.894A1 1 0 0018 15V3zM3.5 9.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clipRule="evenodd" />
                      </svg>
                      <span>Captions available</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                      <span>HD Quality</span>
                    </div>
                  </div>
                  
                  <a 
                    href="https://youtu.be/CLR19Y1oNJ4?feature=shared" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline hover:bg-blue-50"
                  >
                    Watch on YouTube
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <blockquote className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg hover:border-gray-300 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
                
                <p className="body-large mb-6 italic text-gray-700">
                  "{testimonial.text}"
                </p>
                
                <footer className="space-y-1">
                  <div className="heading-4 text-sm text-gray-900">{testimonial.author}</div>
                  <div className="body-small text-gray-500">{testimonial.relation}</div>
                  
                  <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-green-50 border border-green-100 rounded-full">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="caption text-green-700">Verified Patient Family</span>
                  </div>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
