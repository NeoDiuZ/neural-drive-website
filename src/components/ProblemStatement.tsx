"use client";

import { useEffect, useRef } from "react";

export default function ProblemStatement() {
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

  const stats = [
    { number: "9,679", label: "Stroke cases yearly", color: "#FB923C" },
    { number: "26", label: "New cases daily", color: "#89CFF0" },
    { number: "60%", label: "With permanent disability", color: "#6B7280" },
  ];

  return (
    <section ref={ref} className="reveal max-w-screen-xl mx-auto px-6 py-20" aria-label="Problem statement">
      <h2 className="h2 text-slate-900 animate-fade-up">The Silent Crisis in Our Hospitals</h2>
      <div className="mt-8 grid sm:grid-cols-3 gap-6">
        {stats.map((s, i) => (
          <div key={s.label} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm animate-fade-up" style={{ animationDelay: `${i * 0.06}s` as unknown as string }}>
            <div className="text-3xl font-extrabold" style={{ color: s.color }}>{s.number}</div>
            <div className="mt-2 text-slate-600">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="mt-10 rounded-2xl bg-[var(--color-supporting-warmGray)] p-6 sm:p-8 animate-fade-up" style={{ animationDelay: ".12s" as unknown as string }}>
        <div className="grid md:grid-cols-[160px_1fr] gap-6 items-center">
          <div className="w-full h-36 rounded-lg bg-slate-300/40 flex items-center justify-center text-slate-600 text-sm">
            blurred patient photo
          </div>
          <div>
            <blockquote className="text-slate-700 italic">
              “Imagine being fully aware but unable to tell anyone you&apos;re in pain...”
            </blockquote>
            <p className="mt-3 text-slate-600">This is reality for thousands of Singaporeans every day.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
