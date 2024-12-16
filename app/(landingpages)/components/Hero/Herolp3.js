"use client";

import React, { Suspense, memo } from "react";
import Image from "next/image";
import LeadFormV2 from "../LeadForm/LeadFormV2";
import LeadFormlp3Meta from "../LeadForm/LeadFormlp3Meta";
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
    src: "/images/lp/lp3/Updated Desktop Banner.webp",
    width: 1728,
    height: 787,
    className: "w-full object-cover absolute left-0 top-0 hidden md:block h-full",
    style: { objectPosition: "25% 0" }
  },
  mobile: {
    src: "/images/lp/lp3/Mobile Banner.webp",
    width: 428,
    height: 452,
    className: "w-full object-cover absolute left-0 -top-12 md:hidden h-full",
    sizes: "(max-width: 768px) 100vw, (min-width: 768px) 50vw"
  }
};

// Memoized Image Component
const HeroBanner = memo(({ type, ...props }) => (
  // <Suspense fallback={<BannerSkeleton />}>
    <Image
      {...BANNER_IMAGES[type]}
      alt="Banner"
      priority
      loading="eager"
      {...props}
    />
  // </Suspense>
));
HeroBanner.displayName = "HeroBanner";

// Memoized Content Components
const HeroHeading = memo(({ service, centerName }) => (
  <h1 id="heroBannerHeading" className="absolute text-[26px] top-[0px] left-0 md:text-[26px] lg:text-4xl xl:text-5xl md:top-12 md:left-[24px] lg:left-[40px] xl:left-[60px] 2xl:left-[100px] z-10 font-semibold text-primary py-2 text-center md:text-left w-full md:w-auto">
    Best <span className={service !== 'fertility' ? 'uppercase' : ''}>{service || "IVF"}</span> Clinic in{" "}
    {centerName}
  </h1>
));
HeroHeading.displayName = "HeroHeading";

const InvisibleArticle = memo(() => (
  <article className="invisible h-80">

  </article>
));
InvisibleArticle.displayName = "InvisibleArticle";

const LeadFormWrapper = memo(({ isMeta, center, service }) => (
  <>
  
  {isMeta ? 
       <LeadFormlp3Meta center={center} service={service} /> : 
       <LeadFormV2 center={center} service={service} />
     }
  </>
));
LeadFormWrapper.displayName = "LeadFormWrapper";

const MobileLeadForm = memo(({ center, service, isMeta }) => (
  <div id="leadformlp3" className="md:hidden flex items-center -mt-[152px] w-full">
    <div className="flex flex-col items-center w-full">
      <div className="flex justify-center w-full">
        <div className="bg-[#bf64bf] text-white w-[80%] text-center py-0.5 rounded-t-2xl font-semibold z-50">
          IVF @ 94,999* &nbsp; | &nbsp; LIMITED VALIDITY
        </div>
      </div>
      <div className="w-[90%]">
        <LeadFormWrapper isMeta={isMeta} center={center} service={service} />
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
const HeroV2 = ({ center, service, isMeta }) => {
  const centerName = formatCenterName(center?.center_name_heading);

  return (
    <Suspense fallback={
      <div className="animate-pulse bg-[#fde9f2] h-screen">
        <BannerSkeleton />
        {/* <FormSkeleton /> */}
      </div>
    }>
      <section id="herolp3" className="bg-[#fde9f2] lg:h-screen relative max-w-screen-4xl mx-auto px-4 lg:px-10 xl:px-14 2xl:px-20 md:mb-6 lg:mb-10">
        <div>
          <HeroHeading service={service} centerName={centerName} />
          <div>
            <HeroBanner type="desktop" />
            <HeroBanner type="mobile" />
          </div>
        </div>

        <div className="relative pt-24 pb-14 sm:py-14 lg:py-16 xl:py-18 2xl:py-24 flex items-end justify-between h-full lg:flex md:hidden ">
          <InvisibleArticle />
          <div className="hidden md:block md:mr-[0px] lg:mr-[50px] xl:mr-[100px] relative z-50">
            <LeadFormWrapper isMeta={isMeta} center={center} service={service} />
          </div>
        </div>
      </section>

      <MobileLeadForm center={center} service={service} isMeta={isMeta} />
    </Suspense>
  );
};

export default memo(HeroV2);