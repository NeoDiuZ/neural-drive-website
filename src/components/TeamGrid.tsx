import Image from "next/image";

export default function TeamGrid() {
  // Top 3 row - main leadership
  const topRow = [
    { name: "Mohammed HK", role: "Chief Executive Officer", creds: "Expert in Computer Engineering; Successful HealthTech Exit; 35 National & Regional Tech Competitions; Ex SCDF NSF", img: "/Mo.png" },
    { name: "Angela Ng", role: "Chief Science Officer", creds: "Doctoral Candidate in Neuroscience & Social Brain Science (ETH Zürich, Neuroscience Centre Zürich); A*STAR Collaborator; Ex-SNU Researcher", img: "/Angela_Ng.png" },
    { name: "Raymond Loong Ng", role: "Chief AI Officer", creds: "Director of Singapore Youth AI; Successful HealthTech Exit; 27 National & Regional Tech Competitions", img: "/Raymond.jpg" },
  ];

  // Bottom 3 row - core team
  const bottomRow = [
    { name: "Kaushik Manian", role: "Chief Tech Officer", creds: "Hardware Engineering & IoT Systems; Ex-Apple Engineer; 18 National Tech Competitions", img: "/Kaushik.png" },
    { name: "Nyan Lin Htun", role: "Chief Operations Officer", creds: "Software Engineering & Design; 18 National Tech Competitions", img: "/Nyan.jpg" },
    { name: "Ng ToonLee", role: "Commercialisation Advisor", creds: "Angel Investor; Former Global BioTech/Agri Corporate Leader; Prestige Women of Power 2025", img: "/Ng_Toon_Lee.png" },
  ];

  // Separate mentor
  const mentor = { name: "Dr Dehan Hong", role: "Industry Mentor", creds: "Ex Chief Medical Officer in SCDF; Decades of experience in medical sector", img: "/Dehan.png" };

  return (
    <section className="section-y" id="team">
      <div className="container-w">
        <div className="text-center mb-16">
          <h2 className="h2 mb-4 dark:text-white">World-Class Expertise</h2>
          <p className="body-lg max-w-[50ch] mx-auto dark:text-slate-300">
            Our team combines neuroscience, AI, and medical expertise to break barriers in assistive technology.
          </p>
        </div>
        
        {/* Top row - 3 main leaders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {topRow.map((m, i) => (
            <article 
              key={m.name} 
              className="card group text-center fade-up delay-100 border-2 border-emerald-200 dark:border-emerald-600 bg-emerald-50/50 dark:bg-emerald-900/20" 
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="relative w-20 h-20 mx-auto rounded-2xl overflow-hidden border-2 border-emerald-300 shadow-lg group-hover:scale-102 transition-transform duration-200">
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
                <h3 className="h3 text-lg mb-1 dark:text-white">{m.name}</h3>
                <div className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-3">{m.role}</div>
              </div>
              
              <p className="body-sm text-left leading-relaxed dark:text-slate-300">{m.creds}</p>
            </article>
          ))}
        </div>

        {/* Bottom row - 3 core team members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {bottomRow.map((m, i) => (
            <article 
              key={m.name} 
              className="card group text-center fade-up delay-100 border-2 border-emerald-200 dark:border-emerald-600 bg-emerald-50/50 dark:bg-emerald-900/20" 
              style={{ animationDelay: `${(i + 3) * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="relative w-20 h-20 mx-auto rounded-2xl overflow-hidden border-2 border-emerald-300 shadow-lg group-hover:scale-102 transition-transform duration-200">
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
                <h3 className="h3 text-lg mb-1 dark:text-white">{m.name}</h3>
                <div className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-3">{m.role}</div>
              </div>
              
              <p className="body-sm text-left leading-relaxed dark:text-slate-300">{m.creds}</p>
            </article>
          ))}
        </div>

        {/* Mentor - positioned separately on the left */}
        <div className="flex justify-start mb-12">
          <article 
            className="card group text-center fade-up delay-100 border-2 border-red-200 dark:border-red-600 bg-red-50/50 dark:bg-red-900/20 max-w-sm" 
            style={{ animationDelay: `0.6s` }}
          >
            <div className="mb-6">
              <div className="relative w-20 h-20 mx-auto rounded-2xl overflow-hidden border-2 border-red-300 shadow-lg group-hover:scale-102 transition-transform duration-200">
                <Image 
                  src={mentor.img} 
                  alt={`${mentor.name} — ${mentor.role}`} 
                  width={80} 
                  height={80} 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="h3 text-lg mb-1 dark:text-white">{mentor.name}</h3>
              <div className="text-sm font-medium text-red-600 dark:text-red-400 mb-3">{mentor.role}</div>
            </div>
            
            <p className="body-sm text-left leading-relaxed dark:text-slate-300">{mentor.creds}</p>
          </article>
        </div>

        {/* Team stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "7", label: "Expert Team Members" },
            { value: "100+", label: "Combined Tech Competitions" },
            { value: "1", label: "Successful HealthTech Exits" },
            { value: "15+", label: "Years Combined Experience" }
          ].map((stat) => (
            <div key={stat.label} className="space-y-2">
              <div className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
              <div className="body-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
