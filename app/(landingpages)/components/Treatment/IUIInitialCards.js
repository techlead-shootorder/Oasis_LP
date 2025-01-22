import React, { memo, useState } from 'react';
import Image from 'next/image';
import dynamic from "next/dynamic";

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
    <div className="carousel-button-group absolute left-1/2 -translate-x-1/2 bottom-0 flex gap-2 lg:gap-3 xl:gap-5">
        {['prev', 'next'].map((type) => (
            <button
                key={type}
                onClick={() => {
                    if(type === 'prev'){
                        previous();
                    }else{
                        next();
                    }
                    
                    setActiveButton(type);
                }}
                className="relative group transform transition hover:scale-105"
                aria-label={type === 'prev' ? 'Previous' : 'Next'}
            >
                <OptimizedImage
                    className={`w-10 2xl:w-[60px] h-10 2xl:h-[60px] transition-opacity duration-300 ${
                        activeButton === (type === 'prev' ? 'next' : 'prev') ? 'opacity-100' : 'opacity-0'
                    }`}
                    src={`/images/ic-${type}2.png`}
                    width={60}
                    height={60}
                    alt={type}
                />
                <OptimizedImage
                    className={`w-10 2xl:w-[60px] h-10 2xl:h-[60px] absolute top-0 left-0 transition-opacity duration-300 ${
                        activeButton === type ? 'opacity-100' : 'group-hover:opacity-100 opacity-0'
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
    <div className="flex flex-col p-4 bg-white rounded-[25px] mx-2 lg:mx-3 h-full transform transition-all hover:shadow-lg">
        <div className="relative w-full pt-[63%]">
            <OptimizedImage
                src={item.image}
                alt={item.title}
                fill
                className="absolute top-0 left-0 rounded-lg object-cover"
            />
        </div>
        <h3 className="mt-3 text-lg lg:text-2xl leading-tight">
            {item.title}
        </h3>
        <p className="mt-2 text-sm lg:text-base font-lato">
            {item.description}
        </p>
    </div>
));

CarouselItem.displayName = 'CarouselItem';

// Load Carousel dynamically
const Carousel = dynamic(
    () => import("react-multi-carousel").then(mod => mod.default),
    { ssr: false }
);

// Responsive configuration
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1280 },
        items: 4,
        slidesToSlide: 1
    },
    desktop: {
        breakpoint: { max: 1279, min: 768 },
        items: 3,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 767, min: 640 },
        items: 2,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 639, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};

const data = [
    {
        id: 1,
        title: "Ovarian stimulation",
        description: "Ovarian stimulation in IUI uses medications to develop multiple eggs, boosting chances of conception during insemination.",
        image: "/images/lp/treatments/updated/iui/iuiOvarium.webp",
    },
    
    {
        id: 2,
        title: "Follicular monitoring",
        description: "Follicular monitoring in IUI tracks follicle growth via ultrasounds to time ovulation and insemination for optimal success.",
        image: "/images/lp/treatments/updated/iui/iuiFollicular.webp",
    },
    {
        id: 3,
        title: "Sperm preparation",
        description: "Sperm preparation in IUI involves washing and concentrating healthy sperm to improve motility and chances of fertilization.",
        image: "/images/lp/treatments/updated/iui/sperm-preparation.webp",
    },
    {
        id: 2,
        title: "Insemination",
        description: "Insemination in IUI involves placing prepared sperm directly into the uterus to enhance the chances of fertilization.",
        image: "/images/lp/treatments/updated/iui/insemination.webp",
    }
];

const IVFTreatmentlp3 = () => {
    const [activeButton, setActiveButton] = useState('next');

    return (
        <div className="relative w-full mt-6 lg:mt-8">
            <Carousel
                responsive={responsive}
                infinite={true}
                showDots={false}
                arrows={false}
                swipeable={true}
                className="pb-16 lg:pb-20"
                renderButtonGroupOutside={true}
                customButtonGroup={
                    <ButtonGroup
                        activeButton={activeButton}
                        setActiveButton={setActiveButton}
                    />
                }
            >
                {data.map((item) => (
                    <CarouselItem key={item.id} item={item} />
                ))}
            </Carousel>
        </div>
    );
};

export default IVFTreatmentlp3;