"use client";

import React from "react";
import Image from "next/image";
import { PiLineVertical } from "react-icons/pi";
import { Cinzel_Decorative } from "@next/font/google";

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify font weights
});

const HeaderMobileLang = () => {
  return (
    <nav className="block md:hidden fixed w-full top-[0px] z-[999999]">
      <div className="bg-primary flex justify-center items-center py-2 text-white">
        {/* Logo Section */}
        <a className="flex-shrink-0" href="#">
          <Image
            src="https://images.oasisindia.in/website/lp/logo.png"
            width={120}
            height={0}
            alt="Logo"
            className="w-[120px]"
          />
        </a>

        {/* Divider */}
        <div>
          <PiLineVertical className="text-white text-4xl font-thin" />
        </div>

        {/* Text Section */}
        <div className="flex items-center">
          <h1
            className={`${cinzelDecorative.className}  text-5xl font-light leading-none`}
          >
            15
          </h1>
          <p className="text-white text-xs mt-0.5 font-thin leading-tight">
            YEARS
            <br />
            OF CLINICAL
            <br />
            EXCELLENCE
          </p>
        </div>
      </div>
    </nav>
  );
};

export default HeaderMobileLang;
