"use client";

import { useRef, useEffect } from "react";

export default function Demo() {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && el.classList.add("visible"));
    }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const testimonials = [
    {
      text: "The first time my mother could tell us she loved us after her stroke... we all cried.",
      author: "Sarah Tan",
      relation: "Daughter of stroke patient",
      rating: 5,
    },
    {
      text: "Setup was faster than putting on her reading glasses. Incredible technology.",
      author: "Dr. Michael Lim",
      relation: "Neurologist, SGH",
      credential: true,
    },
  ];

  return (
    <section id="demo" ref={ref} className="reveal max-w-screen-xl mx-auto px-6 py-20" aria-label="Demonstration">
      <h2 className="h2 text-slate-900 animate-fade-up">See the Moment Everything Changes</h2>
      <div className="mt-6 rounded-2xl overflow-hidden border border-slate-200 bg-white animate-fade-up">
        <div className="aspect-video w-full bg-slate-100 flex items-center justify-center text-slate-600">
          Video: 2:30 with captions (placeholder)
        </div>
        <div className="px-4 sm:px-6 py-3 text-xs text-slate-500">Captions available • Autoplay off</div>
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <blockquote key={i} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm animate-fade-up hover-elevate" style={{ animationDelay: `${i * 0.06}s` as unknown as string }}>
            <p className="text-slate-700">“{t.text}”</p>
            <footer className="mt-4 text-sm text-slate-600">
              — {t.author}, {t.relation} {t.credential ? "• Credential verified" : ""}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
