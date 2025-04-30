"use client";

import React, { Suspense, memo } from "react";
import Image from "next/image";
import YatraLeadFormV2 from "../../(landingpages)/components/LeadForm/YatraLeadFormV2";

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

// Dynamic Banner Configuration
const LOCATION_BANNERS = {
  // Default banner
  default: {
    desktop: {
      src: "/images/lp/lp3/desktop_banner_paidlp.webp",
      width: 1728,
      height: 787,
      className: "w-full object-cover absolute left-0 top-0 hidden md:block h-full",
      style: { objectPosition: "25% 0" },
      sizes: "(min-width: 768px) 100vw, 0vw"
    },
    mobile: {
      src: "/images/lp/lp3/mobile_banner_paidlp.webp",
      width: 428,
      height: 452,
      className: "w-full object-cover absolute left-0 -top-[40px] md:hidden h-full",
      sizes: "(max-width: 767px) 100vw, 0vw"
    }
  },
 
};


// Below female banner
const FEMALE = {
  desktop: {
    src: "/images/Yatra/desktop_banner.webp",
    width: 1728,
    height: 787,
    className: "w-full object-cover absolute left-0 top-0 hidden md:block h-full",
    style: { objectPosition: "25% 0" },
    sizes: "(min-width: 768px) 100vw, 0vw"
  },
  mobile: {
    src: "/images/Yatra/mobile-banner.webp",
    width: 428,
    height: 452,
    className: "w-full object-cover absolute left-0 -top-[40px] md:hidden h-full",
    sizes: "(max-width: 767px) 100vw, 0vw"
  }
};

// Memoized Image Component
const HeroBanner = memo(({ type }) => {
 
    return (
      <Image
        {...FEMALE[type]}
        alt="Banner"
        priority={true}
        quality={85}
        fetchPriority="high"
        decoding="async"
      />
    );
  

});
HeroBanner.displayName = "HeroBanner"

const InvisibleArticle = memo(() => (
  <article className="invisible h-80">

  </article>
));
InvisibleArticle.displayName = "InvisibleArticle";

const LeadFormWrapper = memo(({ }) => (
  <>   
      <YatraLeadFormV2 />
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




// Main Component
const HeroV2 = ({ center, service, isMeta, internal, isfemaleAssessment }) => {
  


  return (
    <Suspense fallback={
      <div className="animate-pulse bg-[#fde9f2] h-screen">
        <BannerSkeleton />
      </div>
    }>
      <section id="herolp3" className="bg-[#fde9f2] lg:h-screen relative max-w-screen-4xl mx-auto px-4 lg:px-10 xl:px-14 2xl:px-20 md:mb-6 lg:mb-10">
        <div>
          
          <div>
            <HeroBanner type="desktop" isfemaleAssessment={isfemaleAssessment} />
            <HeroBanner type="mobile" isfemaleAssessment={isfemaleAssessment} />
          </div>
        </div>

        <div className="relative pt-24 pb-14 sm:py-14 lg:py-16 xl:py-18 2xl:py-24 flex items-end justify-between h-full lg:flex">
          <InvisibleArticle />
          <div className="hidden md:block md:mr-[0px] lg:mr-[50px] xl:mr-[100px] relative z-50">
            <LeadFormWrapper isMeta={isMeta} center={center} service={service} internal={internal} />
          </div>
        </div>
      </section>

      <MobileLeadForm center={center} service={service} isMeta={isMeta} internal={internal} />
    </Suspense>
  );
};

export default memo(HeroV2);