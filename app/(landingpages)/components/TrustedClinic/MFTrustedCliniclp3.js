import React from "react";
import Image from "next/image";
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";

// Helper Functions
const formatCenterName = (name) => {
  return name
    ?.split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};


const TrustedCliniclp3 = ({center}) => {
    const centerName = React.useMemo(() => formatCenterName(center?.center_name_heading), [center?.center_name_heading]);
  
  return (
    <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
      <div className="w-full lg:w-[30%] text-center lg:text-left">
        <h2 className="text-[18px] md:text-xl lg:text-2xl xl:text-4xl 2xl:text-[42px] font-bold leading-tight text-primary text-center tracking-wide">
          Most Trusted Male Fertility Clinic in {centerName}
         
        </h2>
      </div>

      <div className="grid grid-cols-3 items-center w-full lg:w-[66%] gap-5 lg:gap-10">
        <div className="">
          <Image className="w-auto mx-auto"
            src="/images/lp/campaign/ic-practo.webp" alt="practo" loading="lazy" width={288} height={67} />
          <div className="flex justify-center items-center gap-2 mt-2 lg:mt-5">
            <Image className="h-[18px] lg:h-[26px] object-cover"
              src="/images/lp/campaign/Practo_Health_Logo.png" alt="practo logo" loading="lazy" width={26} height={26} objectFit="cover" />
            <h3 className="text-xs lg:text-[21px] text-black font-semibold">98%</h3>
            {/* <Image className="h-6 lg:h-10 w-auto" src="/images/lp/campaign/thumb.gif" alt="thumb" width={512} height={512} /> */}
          </div>
        </div>

        <div className="">
          <Image className="w-auto mx-auto"
            src="/images/lp/campaign/ic-google.webp" alt="google" loading="lazy" width={248} height={84} />
          <div className="flex items-center justify-center gap-2 mt-1">
            <div className="flex items-center justify-center xl:justify-start lg:gap-2">
              <FaStar className="text-xs xl:text-base text-accent" />
              <FaStar className="text-xs xl:text-base text-accent" />
              <FaStar className="text-xs xl:text-base text-accent" />
              <FaStar className="text-xs xl:text-base text-accent" />
              <FaStarHalfStroke className=" text-xs xl:text-base text-accent" />
            </div>
            <h3 className="text-xs lg:text-2xl font-medium mt-1 text-black font-semibold">4.9</h3>
          </div>
        </div>
        <div className="">
          <Image className="w-auto lg:max-w-[197px] h-auto mx-auto"
            src="/images/lp/campaign/ic-pulse.webp" loading="lazy" alt="pulse" width={198} height={88} />
          <div className="flex items-center justify-center gap-2 mt-1">
            <div className="flex items-center justify-center xl:justify-start lg:gap-2">
              <FaStar className="text-xs xl:text-base text-accent" />
              <FaStar className="text-xs xl:text-base text-accent" />
              <FaStar className="text-xs xl:text-base text-accent" />
              <FaStar className="text-xs xl:text-base text-accent" />
              <FaStarHalfStroke className=" text-xs xl:text-base text-accent" />
            </div>
            <h3 className="text-xs lg:text-2xl font-medium mt-1 text-black font-semibold">4.8</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedCliniclp3;