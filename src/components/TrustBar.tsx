"use client";

export default function TrustBar() {
  const items = [
    "SGH Partnership",
    "NUH Clinical Trials",
    "HSA Class B Pathway",
    "23 Early Adopters",
    "6 Months Testing",
  ];
  const logos = ["SingHealth", "NUH", "A*STAR", "LionsGroup"];

  return (
    <section aria-label="Trust bar" className="bg-white">
      <div className="max-w-screen-xl mx-auto px-6 py-5">
        <div className="hidden sm:flex items-center justify-between text-slate-600 animate-fade-up">
          {items.map((it) => (
            <div key={it} className="text-sm font-medium hover-elevate px-2 py-1 rounded-lg">{it}</div>
          ))}
        </div>
        <div className="sm:hidden -mx-6 px-6 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] animate-fade-up">
          <div className="flex items-center gap-6 py-2">
            {items.map((it) => (
              <div key={it} className="whitespace-nowrap text-sm font-medium text-slate-600 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full hover-elevate">
                {it}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3 text-slate-500 animate-fade-up" style={{ animationDelay: ".05s" as unknown as string }}>
          {logos.map((l) => (
            <span key={l} className="text-xs uppercase tracking-wider opacity-80 hover:opacity-100 transition-opacity">{l}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
