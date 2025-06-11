"use client";

import React, { Suspense, memo } from "react";
import Image from "next/image";
import LeadFormV2 from "../components/LeadForm/LeadFormV2";

// Skeleton Components
const FormSkeleton = memo(() => (
  <div className="animate-pulse bg-white rounded-lg p-4 w-full max-w-md">
    <div className="h-8 bg-gray-200 rounded mb-4" />
    <div className="space-y-3">
      {[1, 2, 3].map(i => (
        <div key={i} className="h-10 bg-gray-200 rounded" />
      ))}
    </div>
    <div className="h-12 bg-gray-200 rounded mt-4" />
  </div>
));
FormSkeleton.displayName = "FormSkeleton";

const BannerSkeleton = memo(() => (
  <div className="animate-pulse">
    <div className="hidden md:block h-[787px] w-full bg-gray-200" />
    <div className="md:hidden h-[452px] w-full bg-gray-200" />
  </div>
));
BannerSkeleton.displayName = "BannerSkeleton";

// Static Banner Configuration
const BANNER_CONFIG = {
  desktop: {
    src: "/images/lp/lp3/Updated Desktop Banner.webp",
    width: 1728,
    height: 787,
    className: "w-full object-cover absolute left-0 top-0 hidden md:block h-full",
    style: { objectPosition: "25% 0" },
    sizes: "(min-width: 768px) 100vw, 0vw"
  },
  mobile: {
    src: "/images/lp/lp3/Mobile Banner.webp",
    width: 428,
    height: 452,
    className: "w-full object-cover absolute left-0 -top-[40px] md:hidden h-full",
    sizes: "(max-width: 767px) 100vw, 0vw"
  }
};

// Preload images for faster LCP
if (typeof window !== 'undefined') {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = window.innerWidth >= 768 ? BANNER_CONFIG.desktop.src : BANNER_CONFIG.mobile.src;
  document.head.appendChild(link);
}

// Memoized Image Component
const HeroBanner = memo(({ type }) => {
  return (
    <Image
      {...BANNER_CONFIG[type]}
      alt="IVF Clinic Banner"
      priority={true}
      quality={85}
      fetchPriority="high"
      decoding="async"
    />
  );
});
HeroBanner.displayName = "HeroBanner";

// Static Heading Component
const HeroHeading = memo(() => (
  <h1 
    id="heroBannerHeading" 
    className="absolute text-[26px] top-[10px] left-0 md:text-[26px] lg:text-4xl xl:text-5xl md:top-12 md:left-[24px] lg:left-[40px] xl:left-[60px] 2xl:left-[100px] z-10 font-semibold text-primary py-2 text-center md:text-left w-full md:w-auto"
  >
    Best IVF Clinic in India
  </h1>
));
HeroHeading.displayName = "HeroHeading";

const InvisibleArticle = memo(() => (
  <article className="invisible h-80">
  </article>
));
InvisibleArticle.displayName = "InvisibleArticle";

// Static Lead Form Component
const LeadFormWrapper = memo(() => (
  <LeadFormV2 />
));
LeadFormWrapper.displayName = "LeadFormWrapper";

// Mobile Lead Form Component
const MobileLeadForm = memo(() => (
  <div id="leadformlp3" className="md:hidden flex items-center -mt-[152px] w-full">
    <div className="flex flex-col items-center w-full">
      <div className="flex justify-center w-full">
        {/* <div className="bg-[#874487] text-white w-[80%] text-center py-0.5 rounded-t-2xl font-semibold z-50">
          IVF @ 94,999* &nbsp; | &nbsp; LIMITED VALIDITY
        </div> */}
      </div>
      <div className="w-[90%]">
        <LeadFormWrapper />
      </div>
    </div>
  </div>
));
MobileLeadForm.displayName = "MobileLeadForm";

// Main Static Component
const Hero = () => {
  return (
    <Suspense fallback={
      <div className="animate-pulse bg-[#fde9f2] h-screen">
        <BannerSkeleton />
      </div>
    }>
      <section id="herolp3" className="bg-[#fde9f2] lg:h-screen relative max-w-screen-4xl mx-auto px-4 lg:px-10 xl:px-14 2xl:px-20 md:mb-6 lg:mb-10">
        <div>
          <HeroHeading />
          <div>
            <HeroBanner type="desktop" />
            <HeroBanner type="mobile" />
          </div>
        </div>

        <div className="relative pt-24 pb-14 sm:py-14 lg:py-16 xl:py-18 2xl:py-24 flex items-end justify-between h-full lg:flex">
          <InvisibleArticle />
          <div className="hidden md:block md:mr-[0px] lg:mr-[50px] xl:mr-[100px] relative z-50">
            <LeadFormWrapper />
          </div>
        </div>
      </section>

      <MobileLeadForm />
    </Suspense>
  );
};

export default memo(Hero);