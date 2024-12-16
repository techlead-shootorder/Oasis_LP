"use client";

import React, { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { PiLineVertical } from "react-icons/pi";
import { MdCall } from "react-icons/md";
import { Cinzel_Decorative } from "@next/font/google";
// import dynamic from 'next/dynamic';


// Font configuration
const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700"]
});

// Constants
const COMPANY_YEARS = "15";
const PHONE_NUMBERS = {
  default: "9513736432",
  meta: "9513736518"
};

// Memoized Components
const LogoSection = memo(() => (
  <a className="flex-shrink-0 logow" href="#">
    <Image
      src="https://images.oasisindia.in/website/lp/logo.png"
      width={120}
      height={41}
      alt="Logo"
      priority={true}
      
    />
  </a>
));

LogoSection.displayName = 'LogoSection';

const YearsSection = memo(() => (
  <div className="flex items-center">
    <h1 className={`${cinzelDecorative.className} text-5xl font-light leading-none text-white`}>
      {COMPANY_YEARS}
    </h1>
    <p className="text-white text-xs mt-0.5 font-thin leading-tight">
      YEARS<br />OF CLINICAL<br />EXCELLENCE
    </p>
  </div>
));

YearsSection.displayName = 'YearsSection';

const PhoneSection = memo(({ center, metanum }) => {
  const phoneNumber = metanum ? PHONE_NUMBERS.meta : PHONE_NUMBERS.default;
  const formattedPhone = center?.phone ? `0${center.phone.replace(/\D/g, "").slice(-10)}` : phoneNumber;

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
const DesktopHeader = memo(({ center, metanum }) => (
  <nav className="hidden md:block max-w-screen-4xl mx-auto px-4 lg:px-10 xl:px-14 2xl:px-20 bg-primary">
    <div className="px-2 lg:px-4 xl:px-4 2xl:px-8 flex justify-between py-3">
      <div className="flex items-center">
        <LogoSection />
        <PiLineVertical className="!text-white text-4xl font-thin" />
        <YearsSection />
      </div>
      <PhoneSection center={center} metanum={metanum} />
    </div>
  </nav>
));

DesktopHeader.displayName = 'DesktopHeader';
// Mobile Header
const MobileHeader = memo(() => (
  <nav className="block md:hidden fixed w-full top-[0px] z-[999999]">
    <div className="bg-primary flex justify-center items-center py-2 text-white">
      <LogoSection />
      <PiLineVertical className="text-white text-4xl font-thin" />
      <YearsSection />
      {/* <Image
      src='/images/lp/lp3/mobile header images.jpeg'
      alt='logo'
      width={375}
      height={100}
      className='object-cover'
      loading="eager"
      priority={true}
      /> */}
    </div>
  </nav>
));

MobileHeader.displayName = 'MobileHeader';

// Main Header Component
const HeaderTesting = ({ center, metanum,}) => {


 

  return (
    <>
      <DesktopHeader center={center} metanum={metanum} />
      <MobileHeader />
     
    </>
  );
};

export default memo(HeaderTesting);