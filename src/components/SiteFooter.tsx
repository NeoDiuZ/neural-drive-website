export default function SiteFooter() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-screen-xl mx-auto px-6 py-10 animate-fade-up">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="font-semibold text-slate-900">Trust</div>
            <ul className="mt-3 text-sm text-slate-600 space-y-1">
              <li>HSA Class B Pathway</li>
              <li>ISO 13485 Compliant</li>
              <li>Partnerships: SingHealth, NUH, A*STAR</li>
              <li>Awards: Singapore Innovation Award Finalist</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900">Contact</div>
            <ul className="mt-3 text-sm text-slate-600 space-y-1">
              <li>Email: families@neuraldrive.sg</li>
              <li>Phone: +65 XXXX XXXX</li>
              <li>Address: Singapore Medical Hub</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900">About</div>
            <p className="mt-3 text-sm text-slate-600 max-w-prose">
              Neural Drive is Singapore&apos;s first brain-computer communication platform, designed to give voice to the voiceless.
            </p>
          </div>
        </div>
        <div className="mt-10 text-xs text-slate-500">© {new Date().getFullYear()} Neural Drive. All rights reserved.</div>
      </div>
    </footer>
  );
}
