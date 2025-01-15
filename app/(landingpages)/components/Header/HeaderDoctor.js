"use client";

import React, { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdCall } from "react-icons/md";


// Constants
// const COMPANY_YEARS = "15";
const PHONE_NUMBERS = {
  default: "9513736432",
//   meta: "9513736518"
};


const PhoneSection = memo(() => {
  const phoneNumber = PHONE_NUMBERS.default;
  const formattedPhone = `0${phoneNumber}`;

  return (
    <div className="number flex items-center gap-2 md:mr-[40px] lg:mr-[60px] xl:mr-[100px]">
      <div className="bg-white p-1 rounded-full">
        <MdCall className="text-[30px] text-primary" />
      </div>
      <div className="text-white">
        <p>
          <Link 
            href={`tel:${formattedPhone}`} 
            className="hidden md:block text-white font-semibold text-[20px] leading-none"
          >
            {phoneNumber.replace(/(\d{4})(\d{3})(\d{3})/, '$1\u00A0$2\u00A0$3')}
          </Link>
        </p>
        <p className="text-[12px]">Talk To Our Experts Now</p>
      </div>
    </div>
  );
});

PhoneSection.displayName = 'PhoneSection';

// Desktop Header
const DesktopHeader = memo(() => (
  <nav className="hidden md:block max-w-screen-4xl mx-auto px-4 lg:px-10 xl:px-14 2xl:px-20 bg-primary">
    <div className="px-2 lg:px-4 xl:px-4 2xl:px-8 flex justify-between ">
      <div className="flex items-center">
        
         <Image
      src='/images/lp/lp3/mobile header image.webp'
      alt='logo'
      width={375}
      height={100}
      className='object-cover'
      loading="eager"
      priority={true}
      />
      </div>
      <PhoneSection  />
    </div>
  </nav>
));

DesktopHeader.displayName = 'DesktopHeader';
// Mobile Header
const MobileHeader = memo(() => (
  <nav className="block md:hidden fixed w-full top-[0px] z-[999999]">
    <div className="bg-primary flex justify-center items-center py-2 text-white">
      {/* <LogoSection />
      <PiLineVertical className="text-white text-4xl font-thin" />
      <YearsSection /> */}
  <Image
      src='/images/lp/lp3/mobile header image.webp'
      alt='logo'
      width={375}
      height={100}
      className='object-cover'
      loading="eager"
      priority={true}
      />
    </div>
  </nav>
));

MobileHeader.displayName = 'MobileHeader';

// Main Header Component
const HeaderTesting = () => {


 

  return (
    <>
      <DesktopHeader  />
      <MobileHeader />
     
    </>
  );
};

export default memo(HeaderTesting);