import Image from 'next/image'
import React from 'react'

const data = [
  {
    id: 1,
    title: "Increase Sperm Count",
    description:
      "Focused treatments and lifestyle guidance are provided to naturally or medically enhance sperm count, helping men with low sperm production achieve better fertility outcomes.",
    image: "/images/lp/treatments/updated/Infertility_Treatments/IVF.jpg",
  },
  {
    id: 2,
    title: "Improve Sperm Quality",
    description:
      "Advanced therapies and techniques aim to improve sperm motility, morphology, and DNA integrity, boosting the chances of successful fertilization and healthy pregnancy outcomes.",
    image: "/images/lp/treatments/updated/Infertility_Treatments/IVM.png",
  }
]

// Optimized Image Component
// const OptimizedImage = memo(({ src, alt, ...props }) => (
//   <Image
//     src={src}
//     alt={alt}
//     {...props}
//     loading="lazy"
//     placeholder="blur"
//     blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRsdHR8fIR0hISEdISEhISEhISEiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
//     onError={(e) => {
//       e.currentTarget.src = '/images/lp/fallback.jpg';
//     }}
//   />
// ));

// OptimizedImage.displayName = 'OptimizedImage';

const IVFTreatmentlp3 = () => {
  return (
    <>
     <div className="w-full mt-6 lg:mt-8 flex gap-4 sm:gap-4 justify-center">
      {data.map((item) => (
        <>
          <div className="w-[300px] flex flex-col px-3 py-4 bg-white rounded-[25px] transform hover:shadow-lg transition-all">
           
            <Image
              src={item.image}
              alt={item.title}
              width={316}
              height={199}
              className="rounded-xl mx-auto object-cover"
            />
            <h3 className="mt-3 lg:text-[26px] text-[18px] leading-[1.1]">
              {item.title}
            </h3>
            <p className="mt-2 lg:text-base text-xs font-lato">
              {item.description}
            </p>
          </div>
        </>
      ))}

      </div>
    </>
  )
}

export default IVFTreatmentlp3