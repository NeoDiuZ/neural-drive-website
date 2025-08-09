"use client";

import { useState } from "react";

type QA = { q: string; a: string };

const items: QA[] = [
  { q: "Will insurance cover this?", a: "We're working with major insurers and offer flexible payment plans." },
  { q: "How quickly can we get it?", a: "Pilot program starts Q1 2026, with priority for early registrants." },
  { q: "Does it work for all conditions?", a: "Designed for stroke, ALS, cerebral palsy, and severe motor impairments." },
];

export default function FAQ() {
  return (
    <section className="max-w-screen-xl mx-auto px-6 py-20" aria-label="FAQ">
      <h2 className="h2 text-slate-900 animate-fade-up">Common Questions from Families</h2>
      <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white animate-fade-up">
        {items.map((qa, idx) => (
          <Item key={idx} idx={idx} qa={qa} />)
        )}
      </div>
    </section>
  );
}

function Item({ qa, idx }: { qa: QA; idx: number }) {
  const [open, setOpen] = useState(false);
  const id = `faq-${idx}`;
  return (
    <div className="animate-fade-up" style={{ animationDelay: `${idx * 0.04}s` as unknown as string }}>
      <button
        className="w-full text-left px-5 py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-supporting-trustNavy)]"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
      >
        <div className="flex items-center justify-between">
          <span className="font-medium text-slate-900">{qa.q}</span>
          <span className="text-slate-500">{open ? "–" : "+"}</span>
        </div>
      </button>
      <div id={id} hidden={!open} className="px-5 pb-4 text-slate-600">
        {qa.a}
      </div>
    </div>
  );
}
