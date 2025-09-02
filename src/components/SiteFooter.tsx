import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container container-xl py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg overflow-hidden">
                <Image
                  src="/neuraldriveLogo.jpeg"
                  alt="Neural Drive Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-semibold text-xl text-gray-900">Neural Drive</span>
            </div>
            <p className="body-small text-gray-600 mb-6 leading-relaxed max-w-[30ch]">
              Singapore&apos;s breakthrough brain-computer interface giving voice to the paralyzed in just 10 seconds.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 border border-green-200 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs font-medium text-green-700">HSA Class B Pathway</span>
            </div>
          </div>

          {/* Clinical Excellence */}
          <div>
            <h3 className="heading-4 text-gray-900 mb-6">Clinical Excellence</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="body-small text-gray-600">ISO 13485 Medical Device Compliant</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="body-small text-gray-600">HSA Class B Regulatory Pathway</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="body-small text-gray-600">Singapore Innovation Award Finalist</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="body-small text-gray-600">600M+ patients across Singapore and ASEAN</span>
              </li>
            </ul>
          </div>


          {/* Get in Touch */}
          <div>
            <h3 className="heading-4 text-gray-900 mb-6">Get in Touch</h3>
                    <div className="space-y-4">
          <div className="flex items-start gap-3">
            <svg className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
            <a href="mailto:mo@neuraldrive.tech" className="body-small text-gray-600 hover:text-green-600 transition-colors">
              mo@neuraldrive.tech
            </a>
          </div>
          <div className="flex items-start gap-3">
            <svg className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd"/>
            </svg>
            <a href="tel:+6581133532" className="body-small text-gray-600 hover:text-green-600 transition-colors">
              +65 8113 3532
            </a>
          </div>
              <div className="pt-4">
                <a href="#pilot" className="btn btn-primary text-sm">
                  Join Pilot Program
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="body-small text-gray-500">
            © {new Date().getFullYear()} Neural Drive. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="body-small text-gray-500 hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="body-small text-gray-500 hover:text-gray-900 transition-colors">Terms of Service</a>
            <a href="#" className="body-small text-gray-500 hover:text-gray-900 transition-colors">Medical Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
