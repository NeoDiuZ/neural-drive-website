export default function Partnerships() {
  const logos = [
    "National Health Group",
    "Tan Tock Seng Hospital",
    "Khoo Tech Phuat Hospital",
    "Lions Befrienders",
  ];
  return (
    <section className="section-y">
      <div className="container-w">
        <div className="flex items-center gap-3 text-xs">
          <span className="glass px-3 py-1">HSA Class B</span>
          <span className="glass px-3 py-1">Procurement Ready</span>
        </div>
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 text-slate-500">
          {logos.map((l) => (
            <div key={l} className="glass p-3 text-center">{l}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
