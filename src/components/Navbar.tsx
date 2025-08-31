"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

const navItems = [
  { label: "How It Works", href: "#features" },
  { label: "Clinical", href: "#demo" },
  { label: "Team", href: "#team" },
  { label: "Partners", href: "#partnerships" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navRef = useRef<HTMLElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);
  const morphBlobRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
      
      // Detect active section
      const sections = ['features', 'demo', 'team', 'partnerships'];
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const logoElement = logoRef.current;
    if (logoElement) {
      const handleLogoHover = () => {
        gsap.to(logoElement, {
          rotationY: 360,
          duration: 0.8,
          ease: "power2.out"
        });
        
        // Particle burst effect
        gsap.to(".logo-particle", {
          scale: 1.5,
          opacity: 0,
          rotation: 360,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out"
        });
      };
      
      logoElement.addEventListener('mouseenter', handleLogoHover);
      return () => logoElement.removeEventListener('mouseenter', handleLogoHover);
    }
  }, []);

  return (
    <>
      {/* Floating Navigation */}
      <header 
        ref={navRef}
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
          scrolled 
            ? "w-[95%] max-w-6xl scale-95" 
            : "w-[90%] max-w-5xl scale-100"
        }`}
      >
        {/* Dynamic gradient background following mouse */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none rounded-3xl transition-all duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(34, 197, 94, 0.15) 0%, rgba(16, 185, 129, 0.1) 30%, transparent 60%)`
          }}
        />
        
        {/* Glass morphism container */}
        <nav className={`relative backdrop-blur-2xl rounded-3xl border transition-all duration-500 ${
          scrolled 
            ? "bg-white/80 border-white/30 shadow-xl shadow-green-500/10" 
            : "bg-white/70 border-white/20 shadow-lg shadow-green-500/5"
        }`}>
          
          {/* Morphing background blob */}
          <div 
            ref={morphBlobRef}
            className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-emerald-500/5 to-teal-500/5 rounded-3xl transition-all duration-700 animate-pulse"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(34, 197, 94, 0.08) 0%, rgba(16, 185, 129, 0.04) 50%, transparent 100%)`
            }}
          />
          
          <div className="relative z-10 px-8 py-4 flex items-center justify-between">
            {/* Enhanced Logo with 3D effects */}
            <Link 
              href="/" 
              className="group flex items-center gap-3 font-bold text-xl tracking-tight text-gray-900 transition-all duration-300" 
              aria-label="Neural Drive"
            >
              <div 
                ref={logoRef}
                className="relative w-12 h-12 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform-gpu perspective-1000"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <span className="text-white font-black text-lg relative z-10">N</span>
                
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                
                {/* Orbiting particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="logo-particle absolute top-1 left-1 w-1 h-1 bg-white rounded-full" />
                  <div className="logo-particle absolute top-1 right-1 w-1 h-1 bg-white rounded-full" />
                  <div className="logo-particle absolute bottom-1 left-1 w-1 h-1 bg-white rounded-full" />
                  <div className="logo-particle absolute bottom-1 right-1 w-1 h-1 bg-white rounded-full" />
                </div>
                
                {/* 3D depth shadow */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl transform translate-x-0.5 translate-y-0.5 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300" />
              </div>
              <span className="hidden lg:block group-hover:text-green-600 transition-colors font-semibold">
                Neural Drive
              </span>
            </Link>
            
            {/* Desktop Navigation with morphing indicators */}
            <div className="hidden lg:flex items-center">
              <nav className="flex items-center gap-1 mr-8 relative">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.slice(1);
                  return (
                    <a 
                      key={item.label} 
                      href={item.href} 
                      className={`group relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "text-green-600 bg-green-50/80 shadow-lg shadow-green-500/20"
                          : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
                      }`}
                    >
                      <span className="relative z-10">
                        {item.label}
                      </span>
                      
                      {/* Morphing background blob for active state */}
                      <div className={`absolute inset-0 rounded-xl transition-all duration-500 ${
                        isActive
                          ? "bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 scale-100 opacity-100"
                          : "bg-gradient-to-r from-green-500/5 via-emerald-500/5 to-teal-500/5 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                      }`} />
                      
                      {/* Animated border */}
                      <div className={`absolute inset-0 rounded-xl border-2 transition-all duration-300 ${
                        isActive
                          ? "border-green-400/30 shadow-lg shadow-green-400/20"
                          : "border-transparent group-hover:border-green-400/20"
                      }`} />
                      
                      {/* Shimmer effect on hover */}
                      <div className="absolute inset-0 rounded-xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                      </div>
                    </a>
                  );
                })}
              </nav>
              
              {/* Enhanced CTA Button with glass morphism */}
              <Link 
                href="#cta" 
                className="group relative px-8 py-3 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="hidden sm:inline">Join Pilot Program</span>
                  <span className="sm:hidden">Join Pilot</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                
                {/* Animated shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                
                {/* Glass morphism overlay */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>
            
            {/* Mobile menu button with morphing animation */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 text-gray-600 hover:text-gray-900 transition-colors relative group"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute left-0 top-1 w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`absolute left-0 top-3 w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`} />
                <span className={`absolute left-0 top-5 w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-white/20 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-200" />
            </button>
          </div>
        </nav>
      </header>

      {/* Enhanced Mobile Navigation */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
        isMenuOpen 
          ? "opacity-100 pointer-events-auto" 
          : "opacity-0 pointer-events-none"
      }`}>
        <div className="absolute inset-0 bg-gray-900/30 backdrop-blur-lg" onClick={() => setIsMenuOpen(false)} />
        
        <div className={`absolute top-24 left-1/2 transform -translate-x-1/2 w-[90%] max-w-md transition-all duration-500 ${
          isMenuOpen ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 -translate-y-4"
        }`}>
          <nav className="bg-white/90 backdrop-blur-2xl rounded-3xl border border-white/30 shadow-2xl p-8">
            <div className="space-y-6">
              {navItems.map((item, index) => (
                <a 
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-4 p-4 rounded-2xl text-gray-700 hover:text-green-600 hover:bg-green-50/50 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="font-medium">{item.label}</span>
                  <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
              
              <div className="pt-6 border-t border-gray-200/50">
                <Link 
                  href="#cta"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full p-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Join Pilot Program
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
