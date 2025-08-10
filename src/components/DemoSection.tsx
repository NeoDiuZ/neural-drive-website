export default function DemoSection() {
  const testimonials = [
    { text: "The first time my mother could tell us she loved us after her stroke... we all cried.", author: "Sarah Tan", relation: "Daughter of stroke patient", credential: false },
    { text: "Setup was faster than putting on her reading glasses. Incredible technology.", author: "Dr. Michael Lim", relation: "Neurologist, SGH", credential: true },
  ];

  return (
    <section className="section-y" id="demo">
      <div className="container-w">
        <h2 className="h2">See the Moment Everything Changes</h2>
        <div className="mt-4 glass overflow-hidden">
          <div className="aspect-video w-full bg-slate-100 grid place-items-center text-slate-600">Video: 2:30 with captions (placeholder)</div>
          <div className="px-4 sm:px-5 py-2 text-xs text-slate-500">Captions available • Autoplay off</div>
        </div>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="glass p-4 text-slate-700">
              <p>“{t.text}”</p>
              <footer className="mt-2 text-sm text-slate-600">— {t.author}, {t.relation} {t.credential ? "• Credential verified" : ""}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
