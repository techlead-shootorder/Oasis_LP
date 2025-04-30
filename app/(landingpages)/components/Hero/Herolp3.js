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
  // Chennai specific banner
  chennai: {
    desktop: {
      src: "/images/lp/lp3/chenn-desk.webp",
      width: 1728,
      height: 787,
      className: "w-full object-cover absolute left-0 top-0 hidden md:block h-full",
      style: { objectPosition: "25% 0" },
      sizes: "(min-width: 768px) 100vw, 0vw"
    },
    mobile: {
      src: "/images/lp/lp3/chenn-mob.webp",
      width: 428,
      height: 452,
      className: "w-full object-cover absolute left-0 -top-[40px] md:hidden h-full",
      sizes: "(max-width: 767px) 100vw, 0vw"
    }
  },
  // Pune specific banner
  pune: {
    desktop: {
      src: "/images/lp/lp3/pune-nashik-desk.webp",
      width: 1728,
      height: 787,
      className: "w-full object-cover absolute left-0 top-0 hidden md:block h-full",
      style: { objectPosition: "25% 0" },
      sizes: "(min-width: 768px) 100vw, 0vw"
    },
    mobile: {
      src: "/images/lp/lp3/pune-nashik-mob.webp",
      width: 428,
      height: 452,
      className: "w-full object-cover absolute left-0 -top-[40px] md:hidden h-full",
      sizes: "(max-width: 767px) 100vw, 0vw"
    }
  },
  // Nashik specific banner
  nashik: {
    desktop: {
      src: "/images/lp/lp3/pune-nashik-desk.webp",
      width: 1728,
      height: 787,
      className: "w-full object-cover absolute left-0 top-0 hidden md:block h-full",
      style: { objectPosition: "25% 0" },
      sizes: "(min-width: 768px) 100vw, 0vw"
    },
    mobile: {
      src: "/images/lp/lp3/pune-nashik-mob.webp",
      width: 428,
      height: 452,
      className: "w-full object-cover absolute left-0 -top-[40px] md:hidden h-full",
      sizes: "(max-width: 767px) 100vw, 0vw"
    }
  }
};

// Female assessment banners (remain unchanged)
// below female banner
const FEMALE = {
  desktop: {
    src: "/images/lp/lp3/female-desktop.webp",
    width: 1728,
    height: 787,
    className: "w-full object-cover absolute left-0 top-0 hidden md:block h-full",
    style: { objectPosition: "25% 0" },
    sizes: "(min-width: 768px) 100vw, 0vw"
  },
  mobile: {
    src: "/images/lp/lp3/female-mobile.webp",
    width: 428,
    height: 452,
    className: "w-full object-cover absolute left-0 -top-[40px] md:hidden h-full",
    sizes: "(max-width: 767px) 100vw, 0vw"
  }
};

// Preload images for faster LCP
const preloadImages = (centerName, isFemaleAssessment) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  
  if (isFemaleAssessment) {
    link.href = window.innerWidth >= 768 ? FEMALE.desktop.src : FEMALE.mobile.src;
  } else {
    const location = centerName?.toLowerCase() || 'default';
    const bannerConfig = LOCATION_BANNERS[location] || LOCATION_BANNERS.default;
    link.href = window.innerWidth >= 768 ? bannerConfig.desktop.src : bannerConfig.mobile.src;
  }
  
  document.head.appendChild(link);
};

if (typeof window !== 'undefined') {
  // Initial preload will use default, actual preload happens in component
  preloadImages();
}

// Memoized Image Component
const HeroBanner = memo(({ type, isfemaleAssessment }) => {
  
  if (isfemaleAssessment) {
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
  }

  // Normalize center name and get corresponding banner config
  const normalizedCenterName = centerName?.toLowerCase() || '';
  const locationKey = Object.keys(LOCATION_BANNERS).find(key => 
    normalizedCenterName.includes(key)
  ) || 'default';
  
  const bannerConfig = LOCATION_BANNERS[locationKey];

  return (
    <Image
      {...bannerConfig[type]}
      alt={`${centerName} Banner`}
      priority={true}
      quality={85}
      fetchPriority="high"
      decoding="async"
    />
  );
});
HeroBanner.displayName = "HeroBanner";

// Memoized Content Components
const HeroHeading = memo(({ service, centerName, isfemaleAssessment }) => (
  !isfemaleAssessment && <h1 id="heroBannerHeading" className="absolute text-[26px] top-[10px] left-0 md:text-[26px] lg:text-4xl xl:text-5xl md:top-12 md:left-[24px] lg:left-[40px] xl:left-[60px] 2xl:left-[100px] z-10 font-semibold text-primary py-2 text-center md:text-left w-full md:w-auto">
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

const LeadFormWrapper = memo(({ isMeta, center, service, internal }) => (
  <>
    {isMeta ?
      <LeadFormlp3Meta center={center} service={service} /> :
      <LeadFormV2 center={center} service={service} internal={internal} />
    }
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
  if (!name) return '';
  
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// Main Component
const HeroV2 = ({ center, service, isMeta, internal, isfemaleAssessment }) => {
  const centerName = React.useMemo(() => formatCenterName(center?.center_name_heading), [center?.center_name_heading]);
  
  // Preload correct banner after component mounts
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      preloadImages(centerName, isfemaleAssessment);
    }
  }, [centerName, isfemaleAssessment]);

  return (
    <Suspense fallback={
      <div className="animate-pulse bg-[#fde9f2] h-screen">
        <BannerSkeleton />
      </div>
    }>
      <section id="herolp3" className="bg-[#fde9f2] lg:h-screen relative max-w-screen-4xl mx-auto px-4 lg:px-10 xl:px-14 2xl:px-20 md:mb-6 lg:mb-10">
        <div>
          <HeroHeading service={service} centerName={centerName} isfemaleAssessment={isfemaleAssessment} />
          <div>
            <HeroBanner type="desktop" centerName={centerName} isfemaleAssessment={isfemaleAssessment} />
            <HeroBanner type="mobile" centerName={centerName} isfemaleAssessment={isfemaleAssessment} />
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