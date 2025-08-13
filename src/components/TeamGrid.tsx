import Image from "next/image";

export default function TeamGrid() {
  const members = [
    { name: "Mohammed HK", role: "Chief Executive Officer", creds: "Expert in Computer Engineering; Successful HealthTech Exit; 35 National & Regional Tech Competitions; Ex SCDF NSF", img: "/Mo.png" },
    { name: "Angela Ng", role: "Chief Science Officer", creds: "Doctoral Candidate in Neuroscience & Social Brain Science (ETH Zürich, Neuroscience Centre Zürich); A*STAR Collaborator; Ex-SNU Researcher", img: "/Angela_Ng.png" },
    { name: "Raymond Loong Ng", role: "Chief AI Officer", creds: "Director of Singapore Youth AI; Successful HealthTech Exit; 27 National & Regional Tech Competitions", img: "/Raymond.jpg" },
    { name: "Kaushik Manian", role: "Chief Tech Officer", creds: "Hardware Engineering & IoT Systems; Ex-Apple Engineer; 18 National Tech Competitions", img: "/Kaushik.png" },
    { name: "Nyan Lin Htun", role: "Chief Operations Officer", creds: "Software Engineering & Design; 18 National Tech Competitions", img: "/Nyan.jpg" },
    { name: "Ng ToonLee", role: "Commercialisation Advisor", creds: "Angel Investor; Former Global BioTech/Agri Corporate Leader; Prestige Women of Power 2025", img: "/Ng_Toon_Lee.png" },
    { name: "Dr Dehan Hong", role: "Industry Mentor", creds: "Ex Chief Medical Officer in SCDF; Decades of experience in medical sector", img: "/Dehan.png" },
  ];

  return (
    <section className="section-y" id="team">
      <div className="container-w">
        <div className="text-center mb-16">
          <h2 className="h2 mb-4">World-Class Expertise</h2>
          <p className="body-lg max-w-[50ch] mx-auto">
            Our team combines neuroscience, AI, and medical expertise to break barriers in assistive technology.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((m, i) => (
            <article 
              key={m.name} 
              className="card group text-center fade-up delay-100" 
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="relative w-20 h-20 mx-auto rounded-2xl overflow-hidden border-2 border-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <Image 
                    src={m.img} 
                    alt={`${m.name} — ${m.role}`} 
                    width={80} 
                    height={80} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="h3 text-lg mb-1">{m.name}</h3>
                <div className="text-sm font-medium text-teal-600 mb-3">{m.role}</div>
              </div>
              
              <p className="body-sm text-left leading-relaxed">{m.creds}</p>
            </article>
          ))}
        </div>

        {/* Team stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "7", label: "Expert Team Members" },
            { value: "100+", label: "Combined Tech Competitions" },
            { value: "2", label: "Successful HealthTech Exits" },
            { value: "15+", label: "Years Combined Experience" }
          ].map((stat) => (
            <div key={stat.label} className="space-y-2">
              <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
              <div className="body-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
