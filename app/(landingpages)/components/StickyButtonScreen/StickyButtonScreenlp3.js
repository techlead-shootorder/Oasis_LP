"use client";
import React, { useState, useEffect } from "react";
import ModalV2 from "../../components/LeadForm/LeadFormV2";

const StickyButtonScreenV2 = ({ center, service }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);

//   const handleOpenModal = () => {
//     setIsModalOpen(true);
//   };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleScroll = () => {
    // Get the scroll position and slide height
    const slideHeight = window.innerHeight; // Assuming each slide is 100vh
    const scrollPosition = window.scrollY;

    // Show button only when on or after the second slide
    if (scrollPosition >= slideHeight) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup the event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToHeroSection = () => {
    const heroSection = document.getElementById("headerlp3");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {showButton && (
        <div className="cursor-pointer fixed top-[45%] right-[-4.8rem] md:right-[-7.5rem] 2xl:right-[-10rem] group hidden md:block z-[999]">
          <button
            onClick={scrollToHeroSection}
            className="rounded-tl-[1.25rem] rounded-tr-[1.25rem] rounded-br-none rounded-bl-none rotate-[270deg] font-lato rounded-md bg-red-600 text-white uppercase text-xs md:text-sm 2xl:text-xl px-2 md:px-6 py-2"
          >
            Get a Call Back Within 5 Mins
          </button>
        </div>
      )}
      <ModalV2 isOpen={isModalOpen} onClose={handleCloseModal} center={center} service={service} />
    </>
  );
};

export default StickyButtonScreenV2;
