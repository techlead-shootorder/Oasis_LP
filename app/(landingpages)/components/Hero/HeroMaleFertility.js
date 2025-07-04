"use client";

import React, { Suspense, memo } from "react";
import Image from "next/image";
// import MFLeadFormV2 from "../LeadForm/MFLeadFormV2";
import MFLeadFormlp3Meta from "../LeadForm/MFLeadFormlp3Meta";

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

// Constants
const BANNER_IMAGES = {
  desktop: {
    src: "/images/lp/lp3/mf-desktop.webp",
    width: 1728,
    height: 787,
    className: "w-full object-cover absolute left-0 top-0 hidden md:block h-full",
    style: { objectPosition: "25% 0" },
    sizes: "(min-width: 768px) 100vw, 0vw"
  },
  mobile: {
    src: "/images/lp/lp3/mf-mobile.webp",
    width: 428,
    height: 452,
    className: "w-full object-cover absolute left-0 -top-[40px] md:hidden h-full",
    sizes: "(max-width: 767px) 100vw, 0vw"
  }
};

// Preload images for faster LCP
const preloadImages = () => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = window.innerWidth >= 768 ? BANNER_IMAGES.desktop.src : BANNER_IMAGES.mobile.src;
  document.head.appendChild(link);
};

if (typeof window !== 'undefined') {
  preloadImages();
}

// Memoized Image Component
const HeroBanner = memo(({ type, ...props }) => (
  // <div className="relative">
  <Image
    {...BANNER_IMAGES[type]}
    alt="Banner"
    priority={true}
    quality={85}
    fetchPriority="high"
    decoding="async"
    {...props}
  />
  /* <div className="absolute inset-0 bg-black opacity-50 z-10" /> */
  //  </div>
));
HeroBanner.displayName = "HeroBanner";

// Memoized Content Components
const HeroHeading = memo(({ centerName }) => (
  
  <h1 id="heroBannerHeading" className="absolute xs:text-[20px] text-[20px] sm:text-[24px] top-[10px] left-0 md:text-[26px] lg:text-4xl xl:text-5xl md:top-12 md:left-[24px] lg:left-[40px] xl:left-[60px] 2xl:left-[100px] z-20 font-semibold text-primary py-2 text-center md:text-left w-full md:w-auto">
    Best Male Fertility Clinic in{" "}  {centerName}
  </h1>
));
HeroHeading.displayName = "HeroHeading";

const InvisibleArticle = memo(() => (
  <article className="invisible h-80">

  </article>
));
InvisibleArticle.displayName = "InvisibleArticle";

const LeadFormWrapper = memo(({ center, service }) => (
  <>
    {/* {isMeta ?  */}
    <MFLeadFormlp3Meta center={center} service={service} />
    {/* <MFLeadFormV2 center={center} service={service} internal={internal} /> */}
    {/* } */}
  </>
));
LeadFormWrapper.displayName = "LeadFormWrapper";

const MobileLeadForm = memo(({ center, service, isMeta, internal }) => (
  <div id="leadformlp3" className="md:hidden flex items-center -mt-[152px] w-full">
    <div className="flex flex-col items-center w-full">
      <div className="flex justify-center w-full">
        {/* <div className="bg-[#874487] text-white w-[80%] text-center py-0.5 rounded-t-2xl font-semibold z-50">
          IVF @ 94,999* &nbsp; | &nbsp; LIMITED VALIDITY
        </div> */}
      </div>
      <div className="w-[90%]">
        <LeadFormWrapper isMeta={isMeta} center={center} service={service} internal={internal} />
      </div>
    </div>
  </div>
));
MobileLeadForm.displayName = "MobileLeadForm";

// Helper Functions
const formatCenterName = (name) => {
  return name
    ?.split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// Main Component
const HeroV2 = ({ center, service, isMeta, internal }) => {
  const centerName = React.useMemo(() => formatCenterName(center?.center_name_heading), [center?.center_name_heading]);

  return (
    <Suspense fallback={
      <div className="animate-pulse bg-[#fde9f2] h-screen">
        <BannerSkeleton />
        {/* <FormSkeleton /> */}
      </div>
    }>
      <section id="herolp3" className="lg:h-screen relative max-w-screen-4xl mx-auto px-4 lg:px-10 xl:px-14 2xl:px-20 ">
        <div className="">
          <HeroHeading service={service} centerName={centerName} />
          <div>
            <HeroBanner type="desktop" />
            <HeroBanner type="mobile" />
            {/* <div className="absolute inset-0 h-[430px] sm:h-auto bg-black opacity-50 sm:z-10" /> */}
          </div>
        </div>

        <div className=" relative pt-24  flex items-end justify-between h-full lg:flex">
          <InvisibleArticle />
          <div className=" hidden md:block md:mr-[0px] lg:mr-[50px] xl:mr-[100px] relative z-50 mb-6">
            <LeadFormWrapper isMeta={isMeta} center={center} service={service} internal={internal} />
          </div>
        </div>
      </section>

      <MobileLeadForm center={center} service={service} isMeta={isMeta} internal={internal} />
    </Suspense>
  );
};

export default memo(HeroV2);
