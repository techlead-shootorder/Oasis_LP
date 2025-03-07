"use client";

import React, { useState, useEffect, useRef, memo, Suspense } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import IVFTreatmentlp3 from './IVFTreatmentlp3';

// Responsive configuration
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 3000, min: 1280 },
        items: 4,
        slidesToSlide: 4
    },
    desktop: {
        breakpoint: { max: 1219, min: 768 },
        items: 3,
        slidesToSlide: 3
    },
    tablet: {
        breakpoint: { max: 767, min: 640 },
        items: 2,
        slidesToSlide: 2
    },
    mobile: {
        breakpoint: { max: 639, min: 0 },
        items: 2,
        slidesToSlide: 2,
        // partialVisibilityGutter: 80
    }
};

// Loading Skeleton Component
const CardSkeleton = memo(() => (
    <div className="bg-gray-200 rounded-[25px] h-[400px] animate-pulse">
        <div className="h-[200px] bg-gray-300 rounded-t-[25px]" />
        <div className="p-4 space-y-4">
            <div className="h-6 bg-gray-300 rounded w-3/4" />
            <div className="h-20 bg-gray-300 rounded" />
        </div>
    </div>
));

CardSkeleton.displayName = 'CardSkeleton';

const ResponsiveSkeleton = memo(() => (
    <div className="w-full">
        <div className="hidden 2xl:grid grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
                <CardSkeleton key={i} />
            ))}
        </div>
        <div className="hidden md:grid 2xl:hidden grid-cols-3 gap-4">
            {[...Array(3)].map((_, i) => (
                <CardSkeleton key={i} />
            ))}
        </div>
        <div className="hidden sm:grid md:hidden grid-cols-2 gap-4">
            {[...Array(2)].map((_, i) => (
                <CardSkeleton key={i} />
            ))}
        </div>
        <div className="grid sm:hidden grid-cols-1 gap-4">
            <CardSkeleton />
        </div>
    </div>
));

ResponsiveSkeleton.displayName = 'ResponsiveSkeleton';
// Dynamic carousel import with responsive loading
const Carousel = dynamic(
    () => import("react-multi-carousel").then(mod => mod.default),
    {
        ssr: false,
        loading: () => <ResponsiveSkeleton />
    }
);

// Optimized Image Component
const OptimizedImage = memo(({ src, alt, ...props }) => (
    <Image
        src={src}
        alt={alt}
        {...props}
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRsdHR8fIR0hISEdISEhISEhISEiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        onError={(e) => {
            e.currentTarget.src = '/images/lp/fallback.jpg';
        }}
    />
));

OptimizedImage.displayName = 'OptimizedImage';

// Button Group Component
const ButtonGroup = memo(({ next, previous, activeButton, setActiveButton }) => (
    <div className="carousel-button-group absolute left-[50%] translate-x-[-50%] bottom-0 flex gap-2 lg:gap-3 xl:gap-5">
        {['prev', 'next'].map((type) => (
            <button
                key={type}
                onClick={() => {
                    if (type === 'prev') {
                        previous();
                    } else {
                        next();
                    }
                    setActiveButton(type);
                }}
                className="relative group transform transition hover:scale-105"
                aria-label={type === 'prev' ? 'Previous' : 'Next'}
            >
                <OptimizedImage
                    className={`w-10 2xl:w-[60px] h-10 2xl:h-[60px] transition-opacity duration-300 ${activeButton === (type === 'prev' ? 'next' : 'prev') ? 'opacity-100' : 'opacity-0'
                        }`}
                    src={`/images/ic-${type}2.png`}
                    width={60}
                    height={60}
                    alt={type}
                />
                <OptimizedImage
                    className={`w-10 2xl:w-[60px] h-10 2xl:h-[60px] absolute top-0 left-0 transition-opacity duration-300 ${activeButton === type ? 'opacity-100' : 'group-hover:opacity-100 opacity-0'
                        }`}
                    src={`/images/ic-${type}2-hover.png`}
                    width={60}
                    height={60}
                    alt={`${type} hover`}
                />
            </button>
        ))}
    </div>
));

ButtonGroup.displayName = 'ButtonGroup';

// Carousel Item Component
const CarouselItem = memo(({ item }) => (
    <div className=" flex flex-col p-4 bg-white rounded-[25px] mx-2 lg:mx-3 h-full transform hover:shadow-lg transition-all">
        <OptimizedImage
            src={item.image}
            alt={item.title}
            width={316}
            height={199}
            className="rounded-lg mx-auto w-full h-auto object-cover"
        />
        <h3 className="mt-3 lg:text-[26px] text-[18px] leading-[1.1]">
            {item.title}
        </h3>
        <p className="mt-2 lg:text-base text-xs font-lato">
            {item.description}
        </p>
    </div>
));

CarouselItem.displayName = 'CarouselItem';

// Main Component
const TreatmentsV2 = memo(({ center, service }) => {
    const [activeTab, setActiveTab] = useState(0);
    const [activeButton, setActiveButton] = useState('next');
    const [treatmentData, setTreatmentData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [showOtherTreatments, setShowOtherTreatments] = useState(false);

    const [selectedTreatment, setSelectedTreatment] = useState('Other Advanced Treatments');
    const [showModal, setShowModal] = useState(false);

    const modalRef = useRef(null);

    const tabs = [
        "Infertility Treatments",
        "Infertility Testing",
        "Advanced Treatments",
        // "Fertility Preservations"
    ];

    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);
            const dataMap = {
                0: 'infertilityTreatments',
                1: 'infertilityTesting',
                2: 'advancedTreatments',
                3: 'fertilityPreservations'
            };

            try {
                const data = await import(`@/util/lp/${dataMap[activeTab]}Data`);
                setTreatmentData(data.default);
            } catch (error) {
                console.error('Error loading treatment data:', error);
                setTreatmentData([]);
            } finally {
                setIsLoading(false);
            }
        };

        loadData();
    }, [activeTab]);

    // Update the useEffect for click outside handling
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Check if click is on the button itself
            const button = event.target.closest('button');
            if (button && button.contains(event.target)) {
                return; // Don't do anything if clicking the button
            }

            // Close modal if clicking outside
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setShowModal(false);
            }
        };

        if (showModal) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showModal]);

    // const handleClickOutside = (event) => {
    //     if (modalRef.current && !modalRef.current.contains(event.target)) {
    //         setShowModal(false); // Close the modal if clicked outside
    //     }
    // };

    const handleOptionClick = (e, index) => {
        setSelectedTreatment(e.target.innerText);
        setShowModal(false);
        setActiveTab(index);
        setShowOtherTreatments(true);

    }

    const handleButtonClick = (event) => {
    
        setShowModal((prev) => !prev);
        event.stopPropagation(); // Prevent the event from bubbling up
    };

    return (
        <section className="max-w-screen-4xl mx-auto px-4 lg:px-10 xl:px-14 2xl:px-20 py-10 xl:py-16 rounded-3xl ">
            <h2 className="text-[22px] md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-[52px] font-bold leading-tight text-primary text-center tracking-wide">
                <span className={service !== 'fertility' ? 'uppercase' : ''}>
                    {service ? service === 'fertility' ? 'Fertility' : service : "IVF"}
                </span>{" "}
                Treatment in{" "}
                {center?.center_name
                    ?.split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
            </h2>

            <IVFTreatmentlp3 />

            {/* TESTING */}

            <div className="flex justify-center mt-6">
                <div className="relative">
                
                    <button
                        className="flex items-center justify-center gap-4 text-white bg-primary w-[280px] h-[40px] text-[16px] rounded-lg font-medium"
                        onClick={handleButtonClick}
                    >
                        {selectedTreatment}
                        <span>
                            {showModal ? <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 7.92896L7.67713 1.25183C7.8947 1.03426 8.24744 1.03426 8.46501 1.25183L15.1421 7.92896" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                        </svg> : <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.1426 1.07104L8.46545 7.74817C8.24788 7.96574 7.89514 7.96574 7.67757 7.74817L1.00044 1.07104" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                        </svg>}
                        </span>
                    </button>

                    {showModal &&
                        <div
                            className="bg-white shadow-md rounded-lg absolute top-12 p-4  flex flex-col gap-4 w-full z-50"
                            ref={modalRef}
                        >
                            {tabs.map((tab, index) => (
                                <button
                                    key={index}
                                    className={`inline-block w-full py-2 xl:px-6 2xl:px-6 3xl:px-12 rounded-lg lg:rounded-xl border border-primary transition-all duration-300 
                                ${selectedTreatment == tab ? 'bg-primary text-white' : 'text-primary hover:bg-primary/10'} `}
                                    onClick={(e) => handleOptionClick(e, index)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>}


                </div>
            </div>







            {showOtherTreatments && <>

                {/* Treaments Buttons */}

                {/* <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2.5 lg:gap-4 mt-6 justify-center justify-items-center">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            className={`inline-block w-full py-2 xl:px-6 2xl:px-6 3xl:px-12 rounded-lg lg:rounded-xl border border-primary transition-all duration-300 ${activeTab === index
                                ? "bg-[#874487] text-white"
                                : "text-primary hover:bg-primary/10"
                                }`}
                            onClick={() => setActiveTab(index)}
                        >
                            {tab}
                        </button>
                    ))}
                </div> */}

                {/* Treatments Carousel */}
                <div className="w-full mt-8 lg:mt-10">
                      <div className="">
                    <Suspense fallback={<ResponsiveSkeleton />}>
                        {isLoading ? (
                            <ResponsiveSkeleton />
                        ) : (
                            <Carousel
                                responsive={responsive}
                                partialVisbile
                                className="pb-16 lg:pb-20 md:flex md:justify-center"
                                infinite={true}
                                showDots={false}
                                ssr={false}
                                arrows={false}
                                swipeable={true}
                                customButtonGroup={
                                    <ButtonGroup
                                        activeButton={activeButton}
                                        setActiveButton={setActiveButton}
                                    />
                                }
                            >
                                {Array.isArray(treatmentData) && treatmentData.map((item, index) => (
                                    <CarouselItem
                                        key={`${activeTab}-item-${index}`}
                                        item={item}
                                    />
                                ))}
                            </Carousel>
                        )}
                    </Suspense>
                    </div>
                </div>
            </>}
        </section>
    );
});

TreatmentsV2.displayName = 'TreatmentsV2';

export default TreatmentsV2;