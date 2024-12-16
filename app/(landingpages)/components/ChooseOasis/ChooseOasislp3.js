"use client";

import { memo } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const Carousel = dynamic(() => import("react-multi-carousel"), {
 loading: () => <CarouselSkeleton />,
 ssr: false
});
const CAROUSEL_CONFIG = {
  desktop: {
    breakpoint: { max: 3000, min: 768 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 767, min: 640 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 2,
    slidesToSlide: 2,
  },
};



const OASIS_DATA = [
 {
   id: 1,
   title: "Clinical Excellence",
   desc: "Science and evidence-based fertility care by experienced fertility doctors, to help couples have healthy babies.",
   imgUrl: "https://images.oasisindia.in/website/lp/campaign/Clinical_Excellence.webp"
 },
 {
   id: 2,
   title: "Personalized Treatments",
   desc: "Treatments that are tailored to suit your specific needs and ensure the best outcomes.",
   imgUrl: "https://images.oasisindia.in/website/lp/campaign/Personalized_Treatments.webp"
 },
 {
   id: 3,
   title: "Comprehensive Care",
   desc: "Patient-centric nutritional, psychological, and holistic support in every step of the fertility journey.",
   imgUrl: "https://images.oasisindia.in/website/lp/campaign/Comprehensive_Care.webp"
 },
 {
   id: 4,
   title: "Transparent Pricing",
   desc: "No hidden costs. Clear pricing on every test, scan, and procedure.",
   imgUrl: "https://images.oasisindia.in/website/lp/campaign/Transparent_Pricing.webp"
 }
];

const CarouselSkeleton = memo(() => (
 <div className="animate-pulse">
   <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
     {[1,2,3,4].map(i => (
       <div key={i} className="bg-gray-200 h-48 rounded-lg" />
     ))}
   </div>
 </div>
));

CarouselSkeleton.displayName = "CarouselSkeleton";

const CarouselButtons = memo(({ next, previous }) => (
 <div className="carousel-button-group absolute left-[50%] translate-x-[-50%] bottom-0 flex 2xl:gap-8 gap-4">
   {['prev', 'next'].map(type => (
     <button key={type} onClick={type === 'prev' ? previous : next}>
       <Image 
         className="w-10 2xl:w-[60px] h-10 2xl:h-[60px]"
         src={`https://images.oasisindia.in/website/ic-${type}2.png`}
         width={60}
         height={60}
         alt={type}
         loading="lazy"
       />
     </button>
   ))}
 </div>
));

CarouselButtons.displayName = "CarouselButtons";

const InfoCard = memo(({ data }) => (
 <div className="text-center group">
   <Image
     className="w-[66px] 2xl:w-[112px] h-auto mx-auto transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-3 group-hover:opacity-80 group-hover:animate-bounce"
     src={data.imgUrl}
     alt={data.title}
     width={112}
     height={112}
     loading="lazy"
   />
   <h4 className="text-base xl:text-2xl mt-2 leading-[1.3] group-hover:font-semibold group-hover:text-primary transition-colors duration-500">{data.title}</h4>
   <p className="mt-2 font-lato group-hover:font-semibold transition-colors duration-500">{data.desc}</p>
 </div>
));

InfoCard.displayName = "InfoCard";

const formatCenterName = (name) => {
 if (!name) return '';
 const formattedName = name
   .split("-")
   .map(word => word.charAt(0).toUpperCase() + word.slice(1))
   .join(" ");
 return formattedName === 'Hsr' ? `${formattedName.toUpperCase()} Layout` : formattedName;
};

formatCenterName.displayName = "formatCenterName";

const ChooseOasisV2 = memo(({ center }) => (
 <div className="max-w-screen-4xl mx-auto px-4 lg:px-10 xl:px-14 2xl:px-20 mb-10 lg:mb-16 py-10 lg:py-16 bg-[url(https://images.oasisindia.in/website/lp/campaign/treatment_bg_img_cropped.png)] bg-repeat">
   <h2 className="text-[22px] md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-[52px] !leading-[1.2] font-bold text-primary text-center tracking-wide">
     Why Choose Oasis Fertility in {formatCenterName(center?.center_name)}
   </h2>

   <div className="lg:hidden">
     <Carousel 
       responsive={CAROUSEL_CONFIG}
       itemClass="px-2"
       className="pt-5 lg:pt-10 pb-14 lg:pb-20"
       arrows={false}
       swipeable
       ssr
       infinite
       customButtonGroup={<CarouselButtons />}
     >
       {OASIS_DATA.map(data => (
         <InfoCard key={data.id} data={data} />
       ))}
     </Carousel>
   </div>

   <div className="lg:grid grid-cols-4 gap-8 justify-between mx-auto mt-10 hidden">
     {OASIS_DATA.map(data => (
       <InfoCard key={data.id} data={data} />
     ))}
   </div>
 </div>
));

ChooseOasisV2.displayName = "ChooseOasisV2";

export default ChooseOasisV2;