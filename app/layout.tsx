

import type { Metadata } from "next";
import { Questrial, Pattaya } from "next/font/google";
import "./globals.css";
import AnalyticsProvider, { PageViewTracker } from '@/app/(landingpages)/components/Analytics/Analytics';

const questrial = Questrial({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-questrial",
});

const pattaya = Pattaya({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-pattaya',
})

export const metadata: Metadata = {
  title: "Fertility Clinic | Top IVF Centres in India | Oasis Fertility",
  description: "Oasis Fertility Clinic is the trusted #1 choice for male and female infertility problems, offering treatments like IVF, IVM, IUI, Preservation, etc. across India. Explore Now.",
  alternates: {
    canonical: `https://oasisindia.in/`,
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${questrial.variable} ${pattaya.variable}`}>
      <head>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_META_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
      </head>
      <body className="text-neutral bg-white font-questrial">
        <AnalyticsProvider
          gtmId={process.env.NEXT_PUBLIC_GTM_ID}
          metaPixelId={process.env.NEXT_PUBLIC_META_PIXEL_ID}
        >
          <PageViewTracker />
          {children}
        </AnalyticsProvider>
      </body>
    </html>
  );
}
