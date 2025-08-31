"use client";

import { useEffect, useState, useRef } from "react";

export default function CursorGlow() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [trails, setTrails] = useState<Array<{x: number, y: number, id: number}>>([]);
  const trailCounter = useRef(0);

  useEffect(() => {
    function onMove(e: MouseEvent) {
      setIsVisible(true);
      document.documentElement.style.setProperty("--cursor-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${e.clientY}px`);
      
      // Add trail effect
      trailCounter.current += 1;
      const newTrail = { x: e.clientX, y: e.clientY, id: trailCounter.current };
      setTrails(prev => [...prev.slice(-8), newTrail]); // Keep last 9 points
    }

    function onMouseDown() {
      setIsClicking(true);
    }

    function onMouseUp() {
      setIsClicking(false);
    }

    function onMouseLeave() {
      setIsVisible(false);
      setTrails([]);
    }

    function onMouseEnter() {
      setIsVisible(true);
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  return (
    <>
      {/* Main cursor glow */}
      <div 
        className={`cursor-glow transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
        aria-hidden 
      />
      
      {/* Enhanced cursor effects */}
      <div className="fixed inset-0 pointer-events-none z-50" aria-hidden>
        {/* Main cursor dot */}
        <div 
          className={`absolute w-4 h-4 rounded-full transition-all duration-150 mix-blend-difference ${
            isClicking 
              ? 'bg-white scale-75' 
              : 'bg-gradient-to-r from-teal-400 to-cyan-400 scale-100'
          }`}
          style={{
            left: 'var(--cursor-x, -9999px)',
            top: 'var(--cursor-y, -9999px)',
            transform: 'translate(-50%, -50%)',
          }}
        />
        
        {/* Outer ring */}
        <div 
          className={`absolute w-8 h-8 rounded-full border-2 transition-all duration-300 ${
            isClicking 
              ? 'border-white scale-50 opacity-100' 
              : 'border-teal-400/50 scale-100 opacity-70'
          }`}
          style={{
            left: 'var(--cursor-x, -9999px)',
            top: 'var(--cursor-y, -9999px)',
            transform: 'translate(-50%, -50%)',
          }}
        />
        
        {/* Pulse ring */}
        <div 
          className="absolute w-12 h-12 rounded-full border border-cyan-300/30 animate-ping"
          style={{
            left: 'var(--cursor-x, -9999px)',
            top: 'var(--cursor-y, -9999px)',
            transform: 'translate(-50%, -50%)',
          }}
        />
        
        {/* Trail effects */}
        {trails.map((trail, index) => (
          <div
            key={trail.id}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-teal-300 to-cyan-300 pointer-events-none"
            style={{
              left: `${trail.x}px`,
              top: `${trail.y}px`,
              transform: 'translate(-50%, -50%)',
              opacity: (index + 1) / trails.length * 0.5,
              animation: `fade-out 0.5s ease-out forwards`,
              animationDelay: `${index * 0.05}s`
            }}
          />
        ))}
      </div>
      
      {/* Neural network particles following cursor */}
      <div className="fixed inset-0 pointer-events-none z-40" aria-hidden>
        <svg 
          className="absolute inset-0 w-full h-full"
          style={{
            filter: 'url(#glow)'
          }}
        >
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Animated connections to cursor */}
          {trails.slice(-3).map((trail, index) => (
            <g key={trail.id}>
              <circle
                cx={trail.x}
                cy={trail.y}
                r={2 - index * 0.5}
                fill="url(#cursorGradient)"
                opacity={0.6 - index * 0.2}
              />
            </g>
          ))}
          
          <defs>
            <linearGradient id="cursorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#14b8a6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <style jsx>{`
        @keyframes fade-out {
          to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
          }
        }
      `}</style>
    </>
  );
}
