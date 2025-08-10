export default function ProblemStats() {
  const stats = [
    { number: "9,679", label: "Stroke cases yearly", color: "#FB923C" },
    { number: "26", label: "New cases daily", color: "#89CFF0" },
    { number: "60%", label: "With permanent disability", color: "#6B7280" },
  ];

  return (
    <section className="section-y" id="how-it-works">
      <div className="container-w">
        <div className="grid md:grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <div key={s.label} className="glass p-4 animate-fade-up" style={{ animationDelay: `${i * 0.06}s` as unknown as string }}>
              <div className="text-3xl font-extrabold" style={{ color: s.color }}>{s.number}</div>
              <div className="mt-1 text-slate-600">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 glass p-4">
          <div className="grid md:grid-cols-[150px_1fr] items-center gap-4">
            <div className="w-full h-28 rounded-xl bg-slate-200/70 border border-white/70 grid place-items-center text-slate-500 text-sm">blurred patient photo</div>
            <div>
              <blockquote className="text-slate-700 italic">“Imagine being fully aware but unable to tell anyone you’re in pain...”</blockquote>
              <p className="mt-1 text-slate-600">This is reality for thousands of Singaporeans every day.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
