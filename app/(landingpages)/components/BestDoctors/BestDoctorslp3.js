"use client";

import React, { useState, memo, useCallback, useEffect } from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaCheckCircle } from "react-icons/fa";
import dynamic from 'next/dynamic';

// Dynamic imports
const Modallp3 = dynamic(() => import("../Modal/Modallp3"), {
  loading: () => (
    <div className="animate-pulse bg-gray-200 rounded-lg h-96"></div>
  ),
  ssr: false, // Modal should only load client-side
});

// Constants
const CAROUSEL_CONFIG = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 2,
  },
};

// Skeleton Component
const CarouselSkeleton = () => {
  // Helper function to determine number of items based on screen width
  const getSkeletonCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 4; // desktop
      if (window.innerWidth >= 768) return 3; // tablet
      return 2; // mobile
    }
    return 4; // default to desktop for SSR
  };

  return (
    <section className="max-w-screen-4xl mx-auto px-4 lg:px-10 xl:px-14 2xl:px-20 mb-10 lg:mb-16">
      {/* Title Skeleton */}
      <div className="w-3/4 h-8 md:h-10 lg:h-12 xl:h-14 bg-gray-200 animate-pulse rounded-lg mx-auto mb-8" />
      
      {/* Cards Container */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[...Array(getSkeletonCount())].map((_, index) => (
          <div 
            key={index} 
            className="flex flex-col p-2 pb-4"
          >
            {/* Image Skeleton */}
            <div className="aspect-[691/775] w-full bg-gray-200 animate-pulse rounded-lg mb-4" />
            
            {/* Rating/Experience Row */}
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-4 lg:h-5 w-6 bg-gray-200 animate-pulse rounded" />
              <div className="h-4 lg:h-5 w-16 bg-gray-200 animate-pulse rounded" />
            </div>
            
            {/* Name Skeleton */}
            <div className="h-5 sm:h-6 md:h-7 w-3/4 bg-gray-200 animate-pulse rounded mx-auto mb-2" />
            
            {/* Qualification Skeleton */}
            <div className="h-4 sm:h-5 w-2/3 bg-gray-200 animate-pulse rounded mx-auto mb-2" />
            
            {/* Designation Skeleton */}
            <div className="h-3 sm:h-4 w-1/2 bg-gray-200 animate-pulse rounded mx-auto mb-4" />
            
            {/* Button Skeleton */}
            <div className="h-8 sm:h-10 w-full bg-gray-200 animate-pulse rounded-lg mt-auto" />
          </div>
        ))}
      </div>
      
      {/* Navigation Buttons Skeleton */}
      <div className="flex justify-center gap-4 mt-6">
        <div className="w-10 h-10 2xl:w-[60px] 2xl:h-[60px] bg-gray-200 animate-pulse rounded-full" />
        <div className="w-10 h-10 2xl:w-[60px] 2xl:h-[60px] bg-gray-200 animate-pulse rounded-full" />
      </div>
    </section>
  );
};

// Memoized Components
const CarouselButton = memo(({ onClick, type, isActive }) => (
  <button onClick={onClick} className="relative group">
    <Image
      className={`w-10 2xl:w-[60px] h-10 2xl:h-[60px] transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100'}`}
      src={`https://images.oasisindia.in/website/ic-${type}2.png`}
      width={60}
      height={60}
      alt={type}
      loading="lazy"
    />
    <Image
      className={`w-10 2xl:w-[60px] h-10 2xl:h-[60px] absolute top-0 left-0 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'group-hover:opacity-100 opacity-0'}`}
      src={`https://images.oasisindia.in/website/ic-${type}2-hover.png`}
      width={60}
      height={60}
      alt={`${type} hover`}
      loading="lazy"
    />
  </button>
));

CarouselButton.displayName = 'CarouselButton';

const DoctorCard = memo(({ data, onBookClick }) => {
  const experience = data.experience?.match(/\d+/)?.[0] || '';

  return (
    <div className="font-lato relative group p-2 pb-4 h-full flex flex-col">
      <div className="hidden lg:block absolute z-[-1] inset-0 transform scale-0 border border-solid border-primary rounded-3xl transition-transform duration-700 origin-center bg-[#FFE9F3] group-hover:scale-100" />

      <div className="text-center relative flex-grow">
        <div className="relative">
          <Image
            src={`https://images.oasisindia.in/website/doctor/newDoctors/${data.docterImage}`}
            alt={data?.fullName}
            width={691}
            height={775}
            className="w-auto mx-auto mb-2 lg:mb-4"
            loading="lazy"
          />
        </div>

        <div className="inline-flex items-center gap-2 min-h-6">
          {data.practoRating && (
            <>
              <Image
                className="h-4 lg:h-5 w-auto"
                src="/images/lp/lp3/Practo_Health_Logo.png"
                alt="practo logo"
                width={26}
                height={26}
                loading="lazy"
              />
              <h3 className="text-xs sm:text-base lg:text-lg text-black">
                {data.practoRating}
              </h3>
            </>
          )}
          {experience && (
            <>
              <FaCheckCircle className="text-[14px] lg:text-[20px] text-green-600" />
              <h3 className="text-xs sm:text-base text-black lg:text-lg">
                {experience} yrs exp
              </h3>
            </>
          )}
        </div>

        <h2 className="mb-2 text-primary text-sm sm:text-base md:text-lg xl:text-[22px] 2xl:text-[26px] xs:min-h-[31px] md:min-h-[40px] lg:min-h-0 xl:min-h-[49px] !leading-[1.1]">
          {data?.fullname}
        </h2>
        <h4 className="font-medium text-[10px] sm:text-base 2xl:text-xl text-black">
          {data?.qualification}
        </h4>
        <p className="text-[10px] sm:text-sm md:text-base text-black">
          {data?.designation}
        </p>
      </div>

      <div className="mt-3 lg:mt-6 text-center lg:transition lg:ease-in-out lg:duration-500 lg:opacity-0 lg:group-hover:opacity-100">
        <button
          onClick={onBookClick}
          className="p-2 sm:px-4 2xl:px-8 sm:py-3 leading-none rounded-lg sm:rounded-[10px] bg-accent text-[8px] sm:text-xs lg:text-sm xl:text-base whitespace-nowrap font-semibold text-white uppercase w-full"
        >
          Book Consultation
        </button>
      </div>
    </div>
  );
});

DoctorCard.displayName = "DoctorCard";


const ButtonGroup = memo(({ next, previous, activeButton, setActiveButton }) => (
  <div className="carousel-button-group absolute left-[50%] translate-x-[-50%] bottom-0 flex gap-2 lg:gap-3 xl:gap-5">
    <CarouselButton
      onClick={() => {
        previous();
        setActiveButton("prev");
      }}
      type="prev"
      isActive={activeButton === "prev"}
    />
    <CarouselButton
      onClick={() => {
        next();
        setActiveButton("next");
      }}
      type="next"
      isActive={activeButton === "next"}
    />
  </div>
));

ButtonGroup.displayName = "ButtonGroup";

const BestDoctors = ({ center, service, filteredDoctors, isMeta }) => {
  const [showModal, setShowModal] = useState(false);
  const [activeButton, setActiveButton] = useState("next");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [filteredDoctors]);

  const handleOpenModal = useCallback(() => setShowModal(true), []);
  const handleCloseModal = useCallback(() => setShowModal(false), []);

  const centerName = center?.center_name
    ?.split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const displayName = centerName === 'Hsr'
    ? `${centerName.toUpperCase()} Layout`
    : centerName;

  if (!filteredDoctors?.length) return null;
  if (isLoading) return <CarouselSkeleton />;

  return (
    <>
      <section className="max-w-screen-4xl mx-auto px-4 lg:px-10 xl:px-14 2xl:px-20 mb-10 lg:mb-16">
        <h2 className="text-[22px] md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-[52px] font-bold leading-tight sm:leading-snug text-primary text-center tracking-wide mb-4 lg:mb-5">
          Best Fertility Doctors in {displayName}
        </h2>

        <Carousel
          className="pb-8 lg:pb-12 xl:pb-14 2xl:pb-16"
          itemClass="px-1 sm:px-2 overflow-hidden"
          responsive={CAROUSEL_CONFIG}
          arrows={false}
          swipeable={true}
          ssr={true}
          customButtonGroup={
            <ButtonGroup activeButton={activeButton} setActiveButton={setActiveButton} />
          }
        >
          {filteredDoctors.map(doctor =>
            doctor.docterImage && (
              <DoctorCard
                key={doctor.id}
                data={doctor}
                onBookClick={handleOpenModal}
              />
            )
          )}
        </Carousel>
      </section>

      {showModal && (
        <Modallp3
          isOpen={showModal}
          onClose={handleCloseModal}
          service={service}
          isMeta={isMeta}
        />
      )}
    </>
  );
};

export default memo(BestDoctors);