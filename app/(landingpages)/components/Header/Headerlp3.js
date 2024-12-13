"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { PiLineVertical } from "react-icons/pi";
import { Cinzel_Decorative } from "@next/font/google";
import { MdCall } from "react-icons/md";
import Link from "next/link";

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify font weights
});

const HeaderV2 = ({ center, metanum, }) => {
//   const [timeLeft, setTimeLeft] = useState({
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });
//   const [showModal, setShowModal] = useState(false);

//   const handleCloseModal = () => setShowModal(false);
//   const handleOpenModal = () => setShowModal(true);

  // Calculate remaining time till midnight (12 AM) IST
  const calculateTimeLeft = () => {
    // Get current time in UTC
    const now = new Date();

    // Convert UTC time to IST by adjusting the time zone offset
    const currentISTTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));

    // Get the next midnight time in IST (12 AM next day)
    const nextMidnightIST = new Date(
      currentISTTime.getFullYear(),
      currentISTTime.getMonth(),
      currentISTTime.getDate() + 1,
      0, 0, 0, 0
    );

    // Calculate the difference in milliseconds
    const timeDifference = nextMidnightIST - currentISTTime;

    // Convert milliseconds to hours, minutes, and seconds
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="hidden md:block max-w-screen-4xl mx-auto px-4 lg:px-10 xl:px-14 2xl:px-20 bg-primary">
      <div className=" px-2 lg:px-4 xl:px-4 2xl:px-8 flex justify-between py-3">
           
           {/* LOGO SECTION */}
        <div className="flex items-center">
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
          <div className="">
            <PiLineVertical className="!text-white text-4xl font-thin" />
          </div>

          {/* Text Section */}
          <div className="flex items-center">
            <h1
              className={`${cinzelDecorative.className}  text-5xl font-light leading-none text-white`}
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

        {/* NUMBER SECTION */}
        <div className="number flex items-center gap-2 md:mr-[40px] lg:mr-[60px] xl:mr-[100px]">
               <div className="bg-white p-1 rounded-full">
               <MdCall className="text-[30px] text-primary" />
               </div>
               <div className="text-white ">
               {metanum ? <p>
                            <Link href={`tel:09513736518`} className="hidden md:block text-white font-semibold text-[20px] leading-none" >
                                {/* {center?.phone.replace("tel:", "")} */}
                                9513&nbsp;736&nbsp;518
                                
                            </Link>
                        
                        </p>  : <p>{center?.phone && (
                            <Link href={`tel:0${center?.phone.replace(/\D/g, "").slice(-10)}`} className="hidden md:block text-white font-semibold text-[20px] leading-none" >
                                {/* {center?.phone.replace("tel:", "")} */}
                                9513&nbsp;736&nbsp;432
                                
                            </Link>
                        )}</p>}
                 <p className="text-[12px]">Talk To Our Experts Now</p>
                 
               </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderV2;
