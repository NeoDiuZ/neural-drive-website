"use client";

export default function Solution() {
  const features = [
    {
      title: "Double Blink Activation",
      description: "2 rapid blinks activate the device with haptic feedback",
      benefit: "No training needed - works immediately",
    },
    {
      title: "EEG Focus Detection",
      description: "Reads brain signals through non-invasive forehead sensor",
      benefit: "Works even with complete paralysis",
    },
    {
      title: "Instant Communication",
      description: "Pre-programmed phrases like 'Call Nurse', 'I'm Hungry'",
      benefit: "Critical needs met in seconds",
    },
  ];

  const rows = [
    ["Setup Time", "10 seconds ✓", "30-120 minutes"],
    ["Price", "$2,500 ✓", "$15,000-$25,000"],
    ["Training Required", "None ✓", "Hours/Days"],
    ["Singapore Support", "Direct ✓", "Via distributor"],
    ["Integration", "Open API ✓", "Locked system"],
  ];

  return (
    <section className="max-w-screen-xl mx-auto px-6 py-20" aria-label="Solution">
      <h2 className="h2 text-slate-900 animate-fade-up">Revolutionary Technology, Compassionate Design</h2>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div key={f.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm animate-fade-up hover-elevate" style={{ animationDelay: `${i * 0.06}s` as unknown as string }}>
            <div className="text-lg font-semibold text-[var(--color-supporting-trustNavy)]">{f.title}</div>
            <p className="mt-2 text-slate-600">{f.description}</p>
            <p className="mt-3 text-sm text-[var(--color-supporting-successGreen)] font-medium">{f.benefit}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl overflow-hidden border border-slate-200 bg-white animate-fade-up" style={{ animationDelay: ".1s" as unknown as string }}>
        <div className="px-4 sm:px-6 py-4 bg-[var(--color-accent-lightCyan)] text-slate-800 font-semibold">
          Why Families Choose Neural Drive
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b border-slate-200">
                <th className="p-4 min-w-[160px]"></th>
                <th className="p-4 min-w-[160px] text-[var(--color-supporting-trustNavy)]">Neural Drive</th>
                <th className="p-4 min-w-[160px]">Competitors</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, ours, theirs]) => (
                <tr key={label} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-medium text-slate-700">{label}</td>
                  <td className="p-4 font-semibold text-slate-900">{ours}</td>
                  <td className="p-4 text-slate-600">{theirs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
