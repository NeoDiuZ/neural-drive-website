"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface FloatingCard {
  top?: string;
  left?: string;
  right?: string;
  text: string;
}

const floatingCards: FloatingCard[] = [
  {
    top: "10%",
    left: "5%",
    text: "I want to be able to speak again",
  },
  {
    top: "25%",
    right: "10%",
    text: "I need to tell my family I love them",
  },
  {
    top: "45%",
    left: "12%",
    text: "I'm in pain, please help me",
  },
  {
    top: "60%",
    right: "8%",
    text: "Thank you for understanding",
  },
  {
    top: "75%",
    left: "7%",
    text: "I want to communicate my needs",
  },
  {
    top: "30%",
    left: "45%",
    text: "I have an idea I want to share",
  },
];

export default function FloatingQuotes({ onAnimationStateChange }: { onAnimationStateChange?: (isAnimating: boolean) => void }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Check if animation has been shown before
    const hasSeenAnimation = sessionStorage.getItem("hasSeenFloatingQuotes");
    
    if (!hasSeenAnimation) {
      setIsVisible(true);
      onAnimationStateChange?.(true);
      
      // Start exit animation after 6 seconds
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
        onAnimationStateChange?.(false);
      }, 6000);
      
      // Fully dismiss after fade out completes
      const dismissTimer = setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem("hasSeenFloatingQuotes", "true");
      }, 7200); // 6000ms + 1200ms fade out
      
      return () => {
        clearTimeout(exitTimer);
        clearTimeout(dismissTimer);
      };
    } else {
      onAnimationStateChange?.(false);
    }
  }, [onAnimationStateChange]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: isExiting ? 0 : 1,
            filter: isExiting ? "blur(20px)" : "blur(0px)"
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: isExiting ? 1.2 : 0.5 }}
          className="fixed inset-0 z-50 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center"
        >
          <div className="relative h-screen w-full overflow-hidden">
            {floatingCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: isExiting ? 0 : 1, 
                  scale: isExiting ? 0.8 : 1,
                  filter: isExiting ? "blur(10px)" : "blur(0px)"
                }}
                transition={{ 
                  delay: isExiting ? 0 : index * 0.3, 
                  duration: isExiting ? 1.2 : 1.0 
                }}
                className="absolute"
                style={{
                  top: card.top,
                  left: card.left,
                  right: card.right,
                }}
              >
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl max-w-xs">
                  <p className="text-sm text-gray-300 font-light leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
