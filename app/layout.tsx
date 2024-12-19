// import type { Metadata } from "next";
// import { Suspense } from "react";
// import { Cormorant_Garamond, Lato, Questrial, Pattaya } from "next/font/google";
// import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
// import { AppConstant } from "@/lib/constant/AppConstant";
// import Script from "next/script";


// import "./globals.css";

// const questrial = Questrial({
//   subsets: ["latin"],
//   display: "swap",
//   weight: "400",
//   variable: "--font-questrial",
// });

// const lato = Lato({
//   subsets: ["latin"],
//   display: "swap",
//   weight: "400",
//   variable: "--font-lato",
// });

// const lato_light = Lato({
//   subsets: ["latin"],
//   display: "swap",
//   weight: "300",
//   variable: "--font-lato_light",
// });

// const cormorant_garamond = Cormorant_Garamond({
//   subsets: ["latin"],
//   display: "swap",
//   weight: "400",
//   variable: "--font-cormorant_garamond",
// });

// const pattaya = Pattaya({
//   subsets: ['latin'],
//   display: 'swap',
//   weight: '400',
//   variable: '--font-pattaya',
// })

// export const metadata: Metadata = {
//   title: "Fertility Clinic | Top IVF Centres in India | Oasis Fertility",
//   description: "Oasis Fertility Clinic is the trusted #1 choice for male and female infertility problems, offering treatments like IVF, IVM, IUI, Preservation, etc. across India. Explore Now.",
//   alternates: {
//     canonical: `https://oasisindia.in/`,
//   },
//   robots: {
//     index: false,
//     follow: false,
//     googleBot: {
//       index: false,
//       follow: false
//     }
//   }
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className={`${questrial.variable} ${lato.variable} ${lato_light.variable} ${cormorant_garamond.variable} ${pattaya.variable}`}>
//           <html lang="en" className={`${questrial.variable}`}>

//       <head>
//         <noscript>
//           <img
//             height="1"
//             width="1"
//             style={{ display: "none" }}
//             src={`https://www.facebook.com/tr?id=454040158968223&ev=PageView&noscript=1`}
//           />
//         </noscript>
//       </head>
//       <>
//         <Suspense>
//           {AppConstant.GTM_ID && (
//             <GoogleTagManager gtmId={AppConstant.GTM_ID} />
//           )}
//           {AppConstant.GA4_ID && <GoogleAnalytics gaId={AppConstant.GA4_ID} />}
//         </Suspense>
//         <Suspense>
//           <Script
//             id="facebook-pixel"
//             strategy="afterInteractive">
//             {`
//                 !function(f,b,e,v,n,t,s)
//                 {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
//                 n.callMethod.apply(n,arguments):n.queue.push(arguments)};
//                 if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
//                 n.queue=[];t=b.createElement(e);t.async=!0;
//                 t.src=v;s=b.getElementsByTagName(e)[0];
//                 s.parentNode.insertBefore(t,s)}(window, document,'script',
//                 'https://connect.facebook.net/en_US/fbevents.js');
//                 fbq('init', '454040158968223');
//                 fbq('track', 'PageView');
//             `}
//           </Script>
//         </Suspense>
//       </>
//       <body
//         className="text-neutral bg-white font-questrial"
//       >
//         {children}
//       </body>
//     </html>
//   );
// }



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
