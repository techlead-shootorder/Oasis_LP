"use client"
import React, { useRef, useState, useEffect } from "react";
import { getGalleryImages } from "@/util/lp/galleryImages";

const Gallery = ({center}) => {
  // Get images based on center, fallback to default
  const imagePairs = getGalleryImages(center?.center_name);

  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        const scrollLeft = sliderRef.current.scrollLeft;
        const totalWidth = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        const index = Math.round((scrollLeft / totalWidth) * (imagePairs.length - 1));
        setActiveIndex(index);
      }
    };

    if (sliderRef.current) {
      sliderRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (sliderRef.current) {
        sliderRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [imagePairs]);

  return (
    <section className="max-w-screen-4xl mx-auto px-4 lg:px-10 xl:px-14 2xl:px-20 py-10 xl:py-16 rounded-3xl">
      <h2 className="text-[22px] md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-[52px] font-bold leading-tight sm:leading-snug text-primary text-center tracking-wide mb-4 lg:mb-12">
        See the Smiles We&apos;ve Helped Create
      </h2>
      <div className="w-full max-w-6xl mx-auto px-4 relative">
        <div ref={sliderRef} className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-none no-scrollbar">
          {imagePairs.map((pair, index) => (
            <div key={index} className="flex flex-col gap-2 min-w-[45%] md:min-w-[22%]">
              <img 
                src={pair[0]} 
                alt={`${center?.center_name || 'City'} Gallery Image ${index * 2 + 1}`} 
                className="w-full h-50 object-cover rounded-lg shadow-md" 
              />
              <img 
                src={pair[1]} 
                alt={`${center?.center_name || 'City'} Gallery Image ${index * 2 + 2}`} 
                className="w-full h-50 object-cover rounded-lg shadow-md" 
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          {imagePairs.map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 mx-1 rounded-full transition-all duration-300 ${
                activeIndex === index ? "bg-primary scale-110" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;