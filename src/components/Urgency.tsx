"use client";

import { useEffect, useState } from "react";

function getTimeRemaining(target: Date) {
  const total = Math.max(0, target.getTime() - Date.now());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
}

export default function Urgency() {
  const [time, setTime] = useState(() => getTimeRemaining(new Date("2026-03-31T23:59:59+08:00")));

  useEffect(() => {
    const target = new Date("2026-03-31T23:59:59+08:00");
    const id = setInterval(() => setTime(getTimeRemaining(target)), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="max-w-screen-xl mx-auto px-6 py-20" aria-label="Urgency">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm animate-fade-up">
        <h2 className="h2 text-slate-900">Every Day of Waiting is a Day of Silence</h2>
        <p className="mt-2 text-slate-700">
          Currently accepting only 50 pilot families for Q1 2026 launch. Priority access and 30% discount for early adopters.
        </p>
        <div className="mt-6 text-slate-800 font-semibold">Applications close in:</div>
        <div className="mt-2 grid grid-cols-4 gap-3 max-w-lg">
          <TimeBox label="Days" value={time.days} />
          <TimeBox label="Hours" value={time.hours} />
          <TimeBox label="Minutes" value={time.minutes} />
          <TimeBox label="Seconds" value={time.seconds} />
        </div>
        <a href="#cta" className="btn-primary inline-block mt-6 hover-elevate">Request Priority Access</a>
      </div>
    </section>
  );
}

function TimeBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-center">
      <div className="text-3xl font-extrabold text-slate-900 tabular-nums">{value.toString().padStart(2, "0")}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-slate-600">{label}</div>
    </div>
  );
}
