"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const leadership = [
  { 
    name: "Mohammed HK", 
    role: "Chief Executive Officer", 
    creds: "Expert in Computer Engineering; Successful HealthTech Exit; 35 National & Regional Tech Competitions; Ex SCDF NSF", 
    img: "/Mo.png",
    color: "green"
  },
  { 
    name: "Angela Ng", 
    role: "Chief Science Officer", 
    creds: "Doctoral Candidate in Neuroscience & Social Brain Science (ETH Zürich, Neuroscience Centre Zürich); A*STAR Collaborator; Ex-SNU Researcher", 
    img: "/Angela_Ng.png",
    color: "green"
  },
  { 
    name: "Raymond Loong Ng", 
    role: "Chief AI Officer", 
    creds: "Director of Singapore Youth AI; Successful HealthTech Exit; 27 National & Regional Tech Competitions", 
    img: "/Raymond.jpg",
    color: "green"
  },
];

const coreTeam = [
  { 
    name: "Kaushik Manian", 
    role: "Chief Tech Officer", 
    creds: "Hardware Engineering & IoT Systems; 18 National Tech Competitions", 
    img: "/Kaushik.png",
    color: "green"
  },
  { 
    name: "Nyan Lin Htun", 
    role: "Chief Operations Officer", 
    creds: "Software Engineering & Design; 18 National Tech Competitions", 
    img: "/Nyan.jpg",
    color: "green"
  },
];


export default function TeamGrid() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section header animation
      gsap.fromTo(".team-header", 
        { y: 30, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power2.out", 
          scrollTrigger: { trigger: ".team-header", start: "top 80%" } 
        }
      );

      // Team cards animation
      gsap.utils.toArray<HTMLElement>(".team-card").forEach((el, i) => {
        gsap.fromTo(el, 
          { opacity: 0, y: 40 }, 
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.6, 
            ease: "power2.out", 
            delay: i * 0.1, 
            scrollTrigger: { 
              trigger: el, 
              start: "top 85%"
            } 
          }
        );
      });

      // Stats animation
      gsap.fromTo(".team-stats", 
        { opacity: 0, y: 30 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          ease: "power2.out", 
          scrollTrigger: { trigger: ".team-stats", start: "top 85%" } 
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section bg-white" id="team">
      <div className="container container-xl">
        
        {/* Section Header */}
        <div className="team-header text-center mb-16">
          
          <h2 className="heading-1 mb-6 max-w-[20ch] mx-auto">
            Our team combines neuroscience, AI, and medical expertise
          </h2>
          
          <p className="subheading max-w-[60ch] mx-auto text-gray-600">
            Breaking barriers in assistive technology through interdisciplinary innovation and proven track records.
          </p>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-3 gap-8">
            {leadership.map((member) => (
              <div key={member.name} className="team-card">
                <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg hover:border-gray-300 transition-all duration-300">
                  <div className="mb-6">
                    <div className="relative w-20 h-20 mx-auto rounded-2xl overflow-hidden border-2 border-gray-200 shadow-sm">
                      <Image 
                        src={member.img} 
                        alt={`${member.name} — ${member.role}`} 
                        width={80} 
                        height={80} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="heading-4 mb-1 text-gray-900">{member.name}</h3>
                    <div className="body-small text-green-600 font-medium mb-3">{member.role}</div>
                  </div>
                  
                  <p className="body-small text-gray-600 text-center leading-relaxed">{member.creds}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Team */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            {coreTeam.slice(0, 2).map((member) => (
              <div key={member.name} className="team-card">
                <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg hover:border-gray-300 transition-all duration-300">
                  <div className="mb-6">
                    <div className="relative w-20 h-20 mx-auto rounded-2xl overflow-hidden border-2 border-gray-200 shadow-sm">
                      <Image 
                        src={member.img} 
                        alt={`${member.name} — ${member.role}`} 
                        width={80} 
                        height={80} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="heading-4 mb-1 text-gray-900">{member.name}</h3>
                    <div className="body-small text-green-600 font-medium mb-3">{member.role}</div>
                  </div>
                  
                  <p className="body-small text-gray-600 text-center leading-relaxed">{member.creds}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advisors */}
        <div className="mb-16">
          <div className="flex justify-center">
            {/* Ng ToonLee */}
            <div className="team-card max-w-md w-full">
              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg hover:border-gray-300 transition-all duration-300">
                <div className="mb-6">
                  <div className="relative w-20 h-20 mx-auto rounded-2xl overflow-hidden border-2 border-gray-200 shadow-sm">
                    <Image 
                      src={coreTeam[2].img} 
                      alt={`${coreTeam[2].name} — ${coreTeam[2].role}`} 
                      width={80} 
                      height={80} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <h3 className="heading-4 mb-1 text-gray-900">{coreTeam[2].name}</h3>
                  <div className="body-small text-green-600 font-medium mb-3">{coreTeam[2].role}</div>
                </div>
                
                <p className="body-small text-gray-600 text-center leading-relaxed">{coreTeam[2].creds}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Stats */}
        <div className="team-stats pt-16 border-t border-gray-100">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "6", label: "Expert Team Members" },
              { value: "100+", label: "Combined Tech Competitions" },
              { value: "1", label: "Successful HealthTech Exits" },
              { value: "15+", label: "Years Combined Experience" }
            ].map((stat) => (
              <div key={stat.label} className="space-y-2">
                <div className="heading-1 text-blue-600">{stat.value}</div>
                <div className="body-small text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
