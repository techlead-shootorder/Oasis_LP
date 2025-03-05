'use client'
import { useState } from "react";

const images = [
  "/images/home/gallery/1.webp",
  "/images/home/gallery/2.webp",
  "/images/home/gallery/3.webp",
  "/images/home/gallery/4.webp",
  "/images/home/gallery/5.webp",
  "/images/home/gallery/6.webp",
  "/images/home/gallery/7.webp",
  "/images/home/gallery/8.webp",
  "/images/home/gallery/9.webp",
  "/images/home/gallery/10.webp",
  "/images/home/gallery/11.webp",
  "/images/home/gallery/12.webp",
  "/images/home/gallery/13.webp",
 
];

export default function Gallery() {
  const [visibleImages, setVisibleImages] = useState(6);

  const loadMore = () => {
    const isMobile = window.innerWidth < 768;
    setVisibleImages((prev) => prev + (isMobile ? 2 : 3));
  };

  return (
    <div className="max-w-screen-4xl mx-auto px-4 lg:px-10 xl:px-14 2xl:px-20 mb-10 lg:mb-16">
      <h2 className="text-[22px] md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-[52px] font-bold leading-tight sm:leading-snug text-primary text-center tracking-wide mb-4 lg:mb-8">See the Smiles We&apos;ve Helped Create</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.slice(0, visibleImages).map((src, index) => (
          <img key={index} src={`/images/home/gallery/${index+1}.webp`} alt={`Gallery ${index + 1}`} className="w-full h-auto rounded-lg" />
        ))}
      </div>
      {visibleImages < images.length && (
        <div className="flex justify-center">
        <button
          onClick={loadMore}
          className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-50"
        >
          Load More
        </button>
        </div>
      )}
    </div>
  );
}
