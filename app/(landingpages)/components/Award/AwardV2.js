'use client'

import { memo } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const Carousel = dynamic(() => import("react-multi-carousel"), {
 loading: () => <CarouselSkeleton />,
 ssr: false
});

const CAROUSEL_CONFIG = {
  desktop: {
    breakpoint: { max: 3000, min: 768 },
    items: 2,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 767, min: 640 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const AWARDS_DATA = [
 {
   id: 1,
   desc: "Recognized as The IVF Chain of the Year (South) 2023 by ET Healthworld National Fertility Awards.",
   awardImage: {
     src: "/images/lp/campaign/award1.webp",
     alt: "award1"
   },
   brandImage: {
     src: "/images/lp/campaign/ic-healthworld.webp", 
     alt: "healthworld"
   }
 },
 {
   id: 2,
   desc: "Oasis Fertility awarded as one of the Best Healthcare Brands 2023 by The Economic Times.",
   awardImage: {
     src: "/images/lp/campaign/award2.webp",
     alt: "award2"
   },
   brandImage: {
     src: "/images/lp/campaign/ic-economic-times.webp",
     alt: "economic times" 
   }
 }
];

const CarouselSkeleton = memo(() => (
 <div className="animate-pulse space-y-4">
   <div className="h-64 bg-gray-200 rounded" />
   <div className="h-32 bg-gray-200 rounded" />
 </div>
));

CarouselSkeleton.displayName = "CarouselSkeleton";

const AwardCard = memo(({ data, isLast }) => (
 <div className={`lg:flex px-8 items-center text-center lg:text-start font-lato text-2xl gap-8 ${!isLast && 'border-[#9678B6] sm:border-r'}`}>
   <div className="lg:w-1/2">
     <Image
       src={data.awardImage.src}
       alt={data.awardImage.alt}
       width={358}
       height={384}
       className="w-[70%] mx-auto lg:w-full"
       loading="lazy"
       quality={75}
     />
   </div>
   <div className="lg:w-1/2 pt-4 pb-4 pl-4 mt-2 lg:mt-0">
     <Image
       src={data.brandImage.src}
       alt={data.brandImage.alt}
       width={336}
       height={38}
       className="mx-auto"
       loading="lazy"
     />
     <p className="mt-4 text-sm lg:text-lg">{data.desc}</p>
   </div>
 </div>
));

AwardCard.displayName = "AwardCard";

const CarouselButtons = memo(({ next, previous }) => (
 <div className="carousel-button-group absolute left-[50%] translate-x-[-50%] bottom-0 flex 2xl:gap-8 gap-4">
   {['prev', 'next'].map(type => (
     <button key={type} onClick={type === 'prev' ? previous : next}>
       <Image
         className="w-10 2xl:w-[60px] h-10 2xl:h-[60px]"
         src={`/images/ic-${type}2.png`}
         width={60}
         height={60}
         alt={type}
         loading='lazy'
       />
     </button>
   ))}
 </div>
));

CarouselButtons.displayName = "CarouselButtons";

const AwardSectionV2 = memo(({ service }) => {
 const serviceTitle = service?.toUpperCase() || 'IVF';

 return (
   <div className='max-w-screen-4xl mx-auto px-4 lg:px-10 xl:px-14 2xl:px-20 mb-10 lg:mb-16'>
     <h2 className='text-[22px] md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-[52px] !leading-[1.2] font-bold text-primary text-center tracking-wide'>
       Highly Awarded {serviceTitle} Healthcare Clinic Chain in India
     </h2>

     <div className='sm:hidden'>
       <Carousel
         responsive={CAROUSEL_CONFIG}
         className="pb-12 mt-5"
         infinite
         autoPlay={false}
         autoPlaySpeed={2000}
         showDots={false}
         ssr
         arrows={false}
         swipeable
         customButtonGroup={<CarouselButtons />}
       >
         {AWARDS_DATA.map((data) => (
           <AwardCard key={data.id} data={data} />
         ))}
       </Carousel>
     </div>

     <div className="sm:grid grid-cols-2 mt-5 sm:mt-10 hidden">
       {AWARDS_DATA.map((data, index) => (
         <AwardCard 
           key={data.id} 
           data={data} 
           isLast={index === AWARDS_DATA.length - 1} 
         />
       ))}
     </div>
   </div>
 );
});

AwardSectionV2.displayName = 'AwardSectionV2';

export default AwardSectionV2;