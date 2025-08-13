import Image from "next/image";

export default function CompetitionWins() {
  const wins = [
    { name: "Hack&Roll", img: "/hacknroll-site.jpeg" },
    { name: "Hackomania", img: "/Hackomania.jpeg" },
    { name: "HealthHack", img: "/HealthHack.jpeg" },
    { name: "SWITCH", img: "/Switch.jpeg" },
  ];

  return (
    <section className="section-y" id="wins">
      <div className="container-w">
        <h2 className="h2">Competition Wins</h2>
        <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {wins.map((w, i) => (
            <figure key={w.name} className="glass p-3 animate-fade-up hover-elevate" style={{ animationDelay: `${i * 0.06}s` as unknown as string }}>
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg border border-white/70 bg-white">
                <Image src={w.img} alt={`${w.name} win`} fill className="object-cover" />
              </div>
              <figcaption className="mt-2 text-center text-sm font-medium text-slate-700">{w.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}


