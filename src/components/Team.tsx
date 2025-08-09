export default function Team() {
  const members = [
    {
      name: "Mohammed HK",
      role: "CEO",
      credentials: "35 National Awards, HealthTech Exit",
    },
    {
      name: "Dr. Dehan Hong",
      role: "Medical Advisor",
      credentials: "Ex-CMO SCDF, 20+ Years Experience",
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto px-6 py-20" aria-label="Team">
      <h2 className="h2 text-slate-900 animate-fade-up">Trusted by Singapore&apos;s Medical Community</h2>
      <p className="mt-2 text-slate-600 animate-fade-up" style={{ animationDelay: ".05s" as unknown as string }}>Award-winning team with 100+ national competitions won</p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((m, i) => (
          <div key={m.name} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm animate-fade-up hover-elevate" style={{ animationDelay: `${i * 0.06}s` as unknown as string }}>
            <div className="w-20 h-20 rounded-full bg-slate-200" aria-hidden />
            <div className="mt-4 text-lg font-semibold text-slate-900">{m.name}</div>
            <div className="text-sm text-[var(--color-supporting-trustNavy)] font-medium">{m.role}</div>
            <div className="mt-1 text-sm text-slate-600">{m.credentials}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
