"use client";

import { useEffect, useState } from "react";

export default function ExitIntentModal() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    function onLeave(e: MouseEvent) {
      if (e.clientY <= 0) setOpen(true);
    }
    window.addEventListener("mouseout", onLeave);
    return () => window.removeEventListener("mouseout", onLeave);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
      <div className="relative z-10 max-w-md w-full mx-4 rounded-2xl bg-white p-6 shadow-xl">
        <div className="text-lg font-semibold text-slate-900">Don&apos;t leave your loved one waiting</div>
        <p className="mt-2 text-slate-600">Get a free consultation guide to help you decide if Neural Drive is right for your family.</p>
        <div className="mt-4 flex gap-2">
          <a href="#cta" className="btn-primary">Get the guide</a>
          <button onClick={() => setOpen(false)} className="btn-secondary">No thanks</button>
        </div>
      </div>
    </div>
  );
}
