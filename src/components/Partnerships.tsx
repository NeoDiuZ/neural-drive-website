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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((p) => (
            <div key={p.name} className="card group h-24 flex items-center justify-center bg-white hover:bg-slate-50 transition-colors">
              {p.img ? (
                <Image 
                  src={p.img} 
                  alt={p.name} 
                  width={160} 
                  height={48} 
                  className="h-10 w-auto object-contain opacity-60 group-hover:opacity-80 transition-opacity" 
                />
              ) : (
                <span className="text-sm font-medium text-slate-600">{p.name}</span>
              )}
            </div>
          ))}
        </div>

        {/* Trust statement */}
        <div className="mt-12 text-center">
          <p className="body-sm text-slate-600 italic max-w-[60ch] mx-auto">
            &quot;Neural Drive represents the cutting edge of assistive communication technology, 
            meeting our strict standards for patient safety and clinical efficacy.&quot;
          </p>
          <p className="mt-3 text-sm font-medium text-slate-700">
            — Clinical Advisory Board
          </p>
        </div>
      </div>
    </section>
  );
}
