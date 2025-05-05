"use client";

import React, { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdCall } from "react-icons/md";


// Constants
// const COMPANY_YEARS = "15";
// const PHONE_NUMBERS = {
//   default: "9513736432",
//   meta: "9513736518"
// };

// Memoized Components
// const LogoSection = memo(() => (
//   <a className="flex-shrink-0 logow" href="#">
//     <Image
//       src="https://images.oasisindia.in/website/lp/logo.png"
//       width={120}
//       height={41}
//       alt="Logo"
//       priority={true}
      
//     />
//   </a>
// ));

// LogoSection.displayName = 'LogoSection';

// const YearsSection = memo(() => (
//   <div className="flex items-center">
//     <h1 className={`${cinzelDecorative.className} text-5xl font-light leading-none text-white`}>
//       {COMPANY_YEARS}
//     </h1>
//     <p className="text-white text-xs mt-0.5 font-thin leading-tight">
//       YEARS<br />OF CLINICAL<br />EXCELLENCE
//     </p>
//   </div>
// ));

// YearsSection.displayName = 'YearsSection';

const PhoneSection = memo(() => {
//   const phoneNumber = metanum ? PHONE_NUMBERS.meta : PHONE_NUMBERS.default;
  const phoneNumber = '9513736397'
  const formattedPhone = phoneNumber;

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
        <p className="text-[12px]">Need Help? Let&apos;s Talk</p>
      </div>
    </div>
  );
});

PhoneSection.displayName = 'PhoneSection';

// Desktop Header
const DesktopHeader = memo(({ center, metanum, googel1num }) => (
  <nav className="hidden md:block max-w-screen-4xl mx-auto px-4 lg:px-10 xl:px-14 2xl:px-20 bg-primary">
    <div className="px-2 lg:px-4 xl:px-4 2xl:px-8 flex justify-between ">
      <div className="flex items-center">
        
         <Image
      src='/images/lp/lp3/yatra-header.webp'
      alt='logo'
      width={375}
      height={100}
      className='object-cover'
      // loading="eager"
      priority={true}
      />
      </div>
      {!googel1num && <PhoneSection center={center} metanum={metanum} />}
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
      src='/images/lp/lp3/yatra-header.webp'
      alt='logo'
      width={375}
      height={100}
      className='object-cover'
      // loading="eager"
      priority={true}
      />
    </div>
  </nav>
));

MobileHeader.displayName = 'MobileHeader';

// Main Header Component
const HeaderTesting = ({ center, metanum, googel1num}) => {

// console.log("is google", googel1num)
 

  return (
    <>
      <DesktopHeader center={center} metanum={metanum} googel1num={googel1num}/>
      <MobileHeader />
    </>
  );
};

export default memo(HeaderTesting);