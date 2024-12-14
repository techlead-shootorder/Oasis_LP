import type { Metadata } from "next";
import { Cormorant_Garamond, Lato, Questrial,Pattaya } from "next/font/google";
import "./globals.css";

const questrial = Questrial({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-questrial",
});

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-lato",
});

const lato_light = Lato({
  subsets: ["latin"],
  display: "swap",
  weight: "300",
  variable: "--font-lato_light",
});

const cormorant_garamond = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-cormorant_garamond",
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
    <html lang="en" className={`${questrial.variable} ${lato.variable} ${lato_light.variable} ${cormorant_garamond.variable} ${pattaya.variable}`}>
      <body
        className="text-neutral bg-white font-questrial"
      >
        {children}
      </body>
    </html>
  );
}
