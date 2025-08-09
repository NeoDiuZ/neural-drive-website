import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Neural Drive | Give Voice to the Voiceless - Singapore's First Brain-Computer Communication Platform",
  description:
    "Revolutionary EEG/EOG assistive device helping paralyzed patients communicate in 10 seconds. 10x cheaper than alternatives. HSA-approved pathway.",
  keywords: [
    "brain computer interface",
    "assistive communication",
    "stroke recovery",
    "paralysis",
    "Singapore medical device",
    "EEG",
    "EOG",
    "cerebral palsy",
    "ALS",
  ],
  metadataBase: new URL("https://neuraldrive.sg"),
  openGraph: {
    title:
      "Neural Drive | Give Voice to the Voiceless - Singapore's First Brain-Computer Communication Platform",
    description:
      "Revolutionary EEG/EOG assistive device helping paralyzed patients communicate in 10 seconds. 10x cheaper than alternatives. HSA-approved pathway.",
    type: "website",
    url: "https://neuraldrive.sg/",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Neural Drive | Give Voice to the Voiceless - Singapore's First Brain-Computer Communication Platform",
    description:
      "Revolutionary EEG/EOG assistive device helping paralyzed patients communicate in 10 seconds. 10x cheaper than alternatives. HSA-approved pathway.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const hotjarId = process.env.NEXT_PUBLIC_HOTJAR_ID;
  const hotjarSv = process.env.NEXT_PUBLIC_HOTJAR_SV;

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${openSans.variable} antialiased bg-[var(--color-secondary-cloudWhite)] text-[var(--color-supporting-softGray-darkText, #111827)]`}
      >
        {children}

        {/* GA4 */}
        {gaId ? (
          <>
            <Script
              id="ga4-src"
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);} 
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        ) : null}

        {/* Hotjar */}
        {hotjarId && hotjarSv ? (
          <Script id="hotjar" strategy="afterInteractive">{`
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:${hotjarId},hjsv:${hotjarSv}};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}</Script>
        ) : null}
      </body>
    </html>
  );
}
