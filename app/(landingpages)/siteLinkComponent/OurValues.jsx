import Image from "next/image";
import React from "react";

const values = [
  {
    title: "Compassionate",
    imgSrc: "https://images.oasisindia.in/website/lp/pledge-compassion.webp",
  },
  {
    title: "Competent",
    imgSrc: "https://images.oasisindia.in/website/lp/pledge-competence.webp",
  },
  {
    title: "Customized",
    imgSrc: "https://images.oasisindia.in/website/lp/pledge-competencyy.webp",
  },
  {
    title: "Confidential",
    imgSrc: "https://images.oasisindia.in/website/lp/pledge-control.webp",
  },
  {
    title: "Careful",
    imgSrc: "https://images.oasisindia.in/website/lp/pledge-careful.webp",
  },
];

const OurValues = () => {
  return (
    <div className="container mx-auto my-6 px-4">
      <h2 className="text-[22px] md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-[52px] font-bold text-center text-black mb-6">
        Our Values
      </h2>
      <div className="flex flex-wrap justify-center gap-20 mb-20">
        {values.map((value, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-32 h-32 bg-white shadow-lg rounded-full p-4"
          >
            <Image
              src={value.imgSrc}
              alt={value.title}
              height={100}
              width={100}
              className="w-full h-full rounded-full object-cover"
            />
            <h5 className="mt-5 text-lg font-semibold text-black">
              {value.title}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurValues;
