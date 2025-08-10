"use client";

export default function TrustMarquee() {
  const items = [
    "National Health Group",
    "Tan Tock Seng Hospital",
    "Khoo Tech Phuat Hospital",
    "Lions Befrienders",
  ];
  const duped = [...items, ...items];
  return (
    <section className="section-y bg-white">
      <div className="container-w">
        <div className="marquee">
          <div className="marquee-track">
            {duped.map((it, i) => (
              <span key={`${it}-${i}`} className="px-4 py-2 text-sm text-slate-700 glass">{it}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
