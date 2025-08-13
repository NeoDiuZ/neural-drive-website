export default function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container-w py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="font-bold text-xl">Neural Drive</span>
            </div>
            <p className="body-sm text-slate-300 mb-6 leading-relaxed">
              Singapore&apos;s breakthrough brain-computer interface giving voice to the paralyzed in just 10 seconds.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              HSA Class B Pathway
            </div>
          </div>

          {/* Clinical Trust */}
          <div>
            <h3 className="font-semibold text-white mb-4">Clinical Excellence</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                ISO 13485 Medical Device Compliant
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                HSA Class B Regulatory Pathway
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                Singapore Innovation Award Finalist
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                15,000+ Patients in Need
              </li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="font-semibold text-white mb-4">Trusted Partners</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>National Health Group</li>
              <li>Tan Tock Seng Hospital</li>
              <li>Khoo Teck Puat Hospital</li>
              <li>Lions Befrienders</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Get in Touch</h3>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-teal-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                families@neuraldrive.sg
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-teal-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                Singapore Medical Hub
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-slate-400">
            © {new Date().getFullYear()} Neural Drive. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Medical Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
