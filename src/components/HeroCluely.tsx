"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface FloatingCard {
  id: number;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "left-middle" | "right-middle";
  text: string;
}

const floatingCards: FloatingCard[] = [
  {
    id: 0,
    position: "top-left",
    text: "I want to be able to speak again",
  },
  {
    id: 1,
    position: "top-right",
    text: "I need to tell my family I love them",
  },
  {
    id: 2,
    position: "bottom-left",
    text: "I'm in pain, please help me",
  },
  {
    id: 3,
    position: "bottom-right",
    text: "Thank you for understanding",
  },
  {
    id: 4,
    position: "left-middle",
    text: "I want to communicate my needs",
  },
  {
    id: 5,
    position: "right-middle",
    text: "I have an idea I want to share",
  },
  {
    id: 6,
    position: "top-left",
    text: "This changes everything for me",
  },
  {
    id: 7,
    position: "top-right",
    text: "Finally, a voice again",
  },
  {
    id: 8,
    position: "bottom-left",
    text: "Communication is a basic right",
  },
  {
    id: 9,
    position: "bottom-right",
    text: "My needs matter now",
  },
];

export default function HeroCluely() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const illustrationRef = useRef<HTMLDivElement | null>(null);
  const cardsContainerRef = useRef<HTMLDivElement | null>(null);
  const currentCardRef = useRef<number | null>(null);
  const usedIndicesRef = useRef<number[]>([]);
  const [visibleCardId, setVisibleCardId] = useState<number | null>(null);

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

  // Show cards randomly with fade in/out
  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;
    let fadeOutTimer: NodeJS.Timeout | undefined;
    let currentAnimation: gsap.core.Tween | null = null;
    
    const showNextCard = () => {
      // Kill any existing animation
      if (currentAnimation) {
        currentAnimation.kill();
        currentAnimation = null;
      }
      
      // Get available indices that haven't been used recently
      const availableIndices = floatingCards
        .map((_, idx) => idx)
        .filter(idx => !usedIndicesRef.current.slice(-3).includes(idx));
      
      const indices = availableIndices.length > 0 ? availableIndices : floatingCards.map((_, idx) => idx);
      const randomIndex = indices[Math.floor(Math.random() * indices.length)];
      
      // Clear any existing timers
      if (fadeOutTimer) {
        clearTimeout(fadeOutTimer);
        fadeOutTimer = undefined;
      }
      
      // Hide previous card if any
      if (currentCardRef.current !== null && cardsContainerRef.current) {
        const prevCardElement = cardsContainerRef.current.querySelector(`.floating-card-${currentCardRef.current}`);
        if (prevCardElement) {
          gsap.to(prevCardElement, {
            opacity: 0,
            y: -20,
            scale: 0.9,
            duration: 0.3,
            ease: "power2.in"
          });
        }
      }
      
      // Small delay before showing next card
      setTimeout(() => {
        // Set visible card
        setVisibleCardId(randomIndex);
        currentCardRef.current = randomIndex;
        usedIndicesRef.current = [...usedIndicesRef.current, randomIndex];

        // Animate in the new card
        requestAnimationFrame(() => {
          const cardElement = cardsContainerRef.current?.querySelector(`.floating-card-${randomIndex}`);
          if (cardElement) {
            // Reset and animate in
            gsap.set(cardElement, { opacity: 0, y: 20, scale: 0.9 });
            currentAnimation = gsap.to(cardElement, { 
              opacity: 1, 
              y: 0, 
              scale: 1, 
              duration: 0.6, 
              ease: "power2.out" 
            });
          }

          // Fade out after 3-4 seconds
          const fadeOutDelay = 3000 + Math.random() * 1000;
          fadeOutTimer = setTimeout(() => {
            const cardElement = cardsContainerRef.current?.querySelector(`.floating-card-${randomIndex}`);
            if (cardElement) {
              currentAnimation = gsap.to(cardElement, { 
                opacity: 0, 
                y: -20, 
                scale: 0.9, 
                duration: 0.5, 
                ease: "power2.in",
                onComplete: () => {
                  setVisibleCardId(null);
                  currentCardRef.current = null;
                  currentAnimation = null;
                }
              });
            }
          }, fadeOutDelay);
        });
      }, 500);
    };

    // Start showing cards after initial animation
    const startTimer = setTimeout(() => {
      showNextCard();
      intervalId = setInterval(showNextCard, 4500);
    }, 2000);

    return () => {
      clearTimeout(startTimer);
      if (intervalId) clearInterval(intervalId);
      if (fadeOutTimer) clearTimeout(fadeOutTimer);
      if (currentAnimation) currentAnimation.kill();
    };
  }, []);

  return (
    <section ref={rootRef} className="section bg-white relative overflow-hidden pt-20 sm:pt-24 lg:pt-8">
      <div className="container container-xl relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center min-h-[85vh] sm:min-h-[90vh] lg:min-h-[80vh]">
          
          {/* Content */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10 text-center lg:text-left">

            {/* Headline */}
            <div className="space-y-6">
              <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-[12ch] mx-auto lg:mx-0">
                Restoring voices in 
                <span className="text-green-600"> 10 seconds</span>
              </h1>
              
              <p className="hero-subtitle text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-[50ch] mx-auto lg:mx-0">
                Neural Drive enables paralyzed patients to communicate instantly through breakthrough brain-computer interface technology.
              </p>
            </div>

            {/* CTA */}
            <div className="hero-cta flex flex-col sm:flex-row gap-3 sm:gap-4 items-center lg:items-start">
              <Link href="#cta" className="btn btn-primary w-full sm:w-auto text-center">
                Join Pilot Program
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="#demo" className="btn btn-secondary w-full sm:w-auto text-center">
                Watch Demo
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8" />
                </svg>
              </Link>
            </div>

            {/* Key metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-gray-100">
              <div className="text-center lg:text-left">
                <div className="stat-value">10s</div>
                <div className="stat-label">Setup time</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="stat-value">$200K</div>
                <div className="stat-label">Funding Secured</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="stat-value">HSA</div>
                <div className="stat-label">Class B pathway (Q1 2026) Projection</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="hero-visual relative mt-8 lg:mt-0">
            <div className="relative" ref={cardsContainerRef}>
              
              {/* Interface Image */}
              <div ref={illustrationRef} className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl z-0">
                <Image 
                  src="/Interface.png" 
                  alt="Neural Drive Communication Interface"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Floating Cards - positioned around the visual */}
              {floatingCards.map((card) => {
                const isVisible = visibleCardId === card.id;
                
                // Position classes based on card position - cards overlay the visual slightly
                let positionClass = "";
                switch (card.position) {
                  case "top-left":
                    positionClass = "top-0 left-0";
                    break;
                  case "top-right":
                    positionClass = "top-0 right-0";
                    break;
                  case "bottom-left":
                    positionClass = "bottom-0 left-0";
                    break;
                  case "bottom-right":
                    positionClass = "bottom-0 right-0";
                    break;
                  case "left-middle":
                    positionClass = "top-1/2 left-0 -translate-y-1/2";
                    break;
                  case "right-middle":
                    positionClass = "top-1/2 right-0 -translate-y-1/2";
                    break;
                }

                return (
                  <div
                    key={card.id}
                    className={`absolute floating-card-${card.id} ${positionClass} z-20`}
                    style={{ 
                      opacity: 0,
                      pointerEvents: 'none',
                      willChange: 'opacity, transform'
                    }}
                  >
                    <div className={`backdrop-blur-xl bg-green-50/95 border border-green-200/40 rounded-2xl p-4 shadow-2xl max-w-xs ${
                      card.position === 'top-left' || card.position === 'top-right' ? 'mt-4' :
                      card.position === 'bottom-left' || card.position === 'bottom-right' ? 'mb-4' : ''
                    } ${
                      card.position === 'top-left' || card.position === 'bottom-left' ? 'ml-4' : 
                      card.position === 'top-right' || card.position === 'bottom-right' ? 'mr-4' : 
                      card.position === 'left-middle' ? 'ml-4' : 'mr-4'
                    }`}>
                      <p className="text-sm text-green-900 font-light leading-relaxed whitespace-nowrap">
                        {card.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Partners Marquee */}
        <div className="mt-16 sm:mt-20">
          <div className="marquee">
            <div className="marquee-track flex items-center gap-12">
              {/* First set of partners */}
              {[
                { name: "National Healthcare Group", img: "/nhg_logo.png" },
                { name: "Tan Tock Seng Hospital", img: "/tantockseng.png" },
                { name: "Khoo Teck Puat Hospital", img: "/khooteckpuat.png" },
                { name: "Lions Befrienders", img: "/lionbefrienders.png" },
              ].map((partner, idx) => (
                <div key={`first-${idx}`} className="flex-shrink-0 px-10 py-4">
                  <Image 
                    src={partner.img} 
                    alt={partner.name} 
                    width={360} 
                    height={120} 
                    className="h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-300" 
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {[
                { name: "National Healthcare Group", img: "/nhg_logo.png" },
                { name: "Tan Tock Seng Hospital", img: "/tantockseng.png" },
                { name: "Khoo Teck Puat Hospital", img: "/khooteckpuat.png" },
                { name: "Lions Befrienders", img: "/lionbefrienders.png" },
              ].map((partner, idx) => (
                <div key={`second-${idx}`} className="flex-shrink-0 px-10 py-4">
                  <Image 
                    src={partner.img} 
                    alt={partner.name} 
                    width={360} 
                    height={120} 
                    className="h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-300" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
