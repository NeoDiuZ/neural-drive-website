export default function TeamGrid() {
  const members = [
    { name: "Mohammed HK", role: "Chief Executive Officer", creds: "Expert in Computer Engineering; Successful HealthTech Exit; 35 National & Regional Tech Competitions; Ex SCDF NSF" },
    { name: "Angela Ng", role: "Chief Science Officer", creds: "Doctoral Candidate in Neuroscience & Social Brain Science (ETH Zürich, Neuroscience Centre Zürich); A*STAR Collaborator; Ex-SNU Researcher" },
    { name: "Raymond Loong Ng", role: "Chief AI Officer", creds: "Director of Singapore Youth AI; Successful HealthTech Exit; 27 National & Regional Tech Competitions" },
    { name: "Kaushik Manian", role: "Chief Tech Officer", creds: "Hardware Engineering & IoT Systems; Ex-Apple Engineer; 18 National Tech Competitions" },
    { name: "Nyan Lin Htun", role: "Chief Operations Officer", creds: "Software Engineering & Design; 18 National Tech Competitions" },
    { name: "Ng ToonLee", role: "Commercialisation Advisor", creds: "Angel Investor; Former Global BioTech/Agri Corporate Leader; Prestige Women of Power 2025" },
    { name: "Dr Dehan Hong", role: "Industry Mentor", creds: "Ex Chief Medical Officer in SCDF; Decades of experience in medical sector" },
  ];

  return (
    <section className="section-y" id="team">
      <div className="container-w">
        <h2 className="h2">Team</h2>
        <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {members.map((m, i) => (
            <article key={m.name} className="glass p-4 animate-fade-up hover-elevate" style={{ animationDelay: `${i * 0.06}s` as unknown as string }}>
              <div className="flex items-start gap-3.5">
                <div className="w-14 h-14 rounded-xl bg-slate-200/70 border border-white/70" aria-hidden />
                <div>
                  <div className="text-lg font-semibold text-slate-900" style={{ fontFamily: "var(--font-heading)" }}>{m.name}</div>
                  <div className="text-[var(--color-supporting-trustNavy)] text-sm font-medium">{m.role}</div>
                </div>
              </div>
              <p className="mt-2.5 text-sm text-slate-700 leading-relaxed">{m.creds}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
