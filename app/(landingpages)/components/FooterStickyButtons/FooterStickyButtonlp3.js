"use client";
import React, { useState, useEffect } from "react";
import ModalV2 from "../Modal/ModalV2";

const FooterStickyButtonsLang = ({ center, service, refferal = false, meta = false }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 650) { // Adjust scroll threshold as needed
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToForm = () => {
        const formElement = document.getElementById("heroBannerHeading");
        formElement.scrollIntoView({ behavior: "smooth" });
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={`fixed bottom-0 left-0 w-full z-50 md:hidden transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {/* <NotificationBarlp3 hide={false} /> */}
            <div className="flex flex-col justify-center items-center text-white">
                <button
                    onClick={scrollToForm}
                    className={`w-full py-[10px] text-white text-[22px] leading-none font-medium bg-red-600`}
                >
                    Get A Call Back
                    <p className="text-[12px] p-0 leading-none font-normal">within 1 minute</p>
                </button>
                {/* <button            
                    onClick={scrollToForm}
                    className={`border-2 border-r-black w-full py-[10px] text-white text-[18px] leading-none font-medium bg-red-600`}           
                >
                  Book Now
                </button>
                 <button            
                    onClick={scrollToForm}
                    className={`w-full py-[10px] text-white text-[18px] leading-none font-medium bg-red-600`}           
                >
                  Whatsapp Us
                </button>  */}

            </div>
            <ModalV2 isOpen={isModalOpen} onClose={handleCloseModal} center={center} service={service} refferal={refferal} meta={meta} />

            {/* CALL US AND BOOK AN APPOINTMENT BUTTON */}
            {/* <div className="flex justify-evenly bg-white">
                <button
                    className="w-1/2 text-center py-3 bg-[#f58941] text-white font-medium border border-white"
                    onClick={handleOpenModal}
                >
                    <b> BOOK
                        <br /> APPOINTMENT</b>
                </button>
                <a
                    href={refferal ? 'tel:+919513736432' : `tel:0${center?.phone.replace(/\D/g, "").slice(-10)}`}
                    className="w-1/2 text-center py-3 bg-[#672658] text-white font-medium border border-white flex items-center justify-center"
                >
                    <div>
                        <b>CALL US</b>

                        <br />  <b className="text-md">NOW +91 9513736432</b>

                    </div>
                </a>
            </div> */}

        </div>
    );
};

export default FooterStickyButtonsLang;
