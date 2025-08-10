export default function Manifesto() {
  const paras = [
    "If a patient can express a need in seconds, that’s dignity restored.",
    "Neural Drive reads focus and blinks with a forehead sensor—no training, no fuss.",
    "In critical care, seconds matter. So we optimized for setup time, reliability, and Singapore’s regulatory reality.",
  ];
  return (
    <section className="section-y">
      <div className="container-w max-w-3xl">
        <h2 className="h2">Technology with empathy. Speed with safety.</h2>
        <div className="mt-6 space-y-4 text-slate-700">
          {paras.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
