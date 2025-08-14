import Image from "next/image";

export default function Partnerships() {
  const partners: { name: string; img?: string }[] = [
    { name: "National Health Group", img: "/nhg_logo.png" },
    { name: "Tan Tock Seng Hospital", img: "/tantockseng.png" },
    { name: "Khoo Teck Puat Hospital", img: "/khooteckpuat.png" },
    { name: "Lions Befrienders", img: "/lionbefrienders.png" },
  ];
  
  return (
    <section className="section-y bg-slate-50" id="partnerships">
      <div className="container-w">
        <div className="text-center mb-12">
          <h2 className="h2 mb-4">Trusted by Singapore&apos;s Leading Healthcare Institutions</h2>
          <p className="body-lg max-w-[50ch] mx-auto">
            Neural Drive meets the highest medical standards, trusted by institutions that serve thousands of patients daily.
          </p>
        </div>

        {/* Regulatory badges */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span className="font-medium text-emerald-700">HSA Class B Pathway</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="font-medium text-blue-700">ISO 13485 Compliant</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-200 rounded-full">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="font-medium text-purple-700">Procurement Ready</span>
            </div>
          </div>
        </div>
        
        {/* Partner logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {partners.map((p, index) => (
            <div 
              key={p.name} 
              className="group relative fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="partner-card h-20 lg:h-24 flex items-center justify-center bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
                {p.img ? (
                  <Image 
                    src={p.img} 
                    alt={p.name} 
                    width={160} 
                    height={48} 
                    className="h-8 lg:h-10 w-auto object-contain opacity-90 dark:opacity-95 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105" 
                  />
                ) : (
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors text-center">{p.name}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Trust statement */}
        <div className="mt-12 text-center fade-up" style={{ animationDelay: "0.5s" }}>
          <p className="body-sm text-slate-600 dark:text-slate-400 italic max-w-[60ch] mx-auto">
            &quot;Neural Drive represents the cutting edge of assistive communication technology, 
            meeting our strict standards for patient safety and clinical efficacy.&quot;
          </p>
          <p className="mt-3 text-sm font-medium text-slate-700 dark:text-slate-300">
            — Clinical Advisory Board
          </p>
        </div>
      </div>
    </section>
  );
}
