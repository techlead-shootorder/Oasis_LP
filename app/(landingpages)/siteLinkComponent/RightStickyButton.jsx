"use client";
import React, { useState, useEffect } from "react";

const RightStickyButton = () => {
    // const [isModalOpen, setIsModalOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    const handleScroll = () => {
        if (window.scrollY > 200) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToForm = () => {
        const possibleSelectors = [
            "#heroBannerHeading",
            "#hero",
            ".hero-section",
            "form",
            "[data-form]"
        ];
        
        let formElement = null;
        for (const selector of possibleSelectors) {
            formElement = document.querySelector(selector);
            if (formElement) break;
        }
        
        if (formElement) {
            formElement.scrollIntoView({ behavior: "smooth" });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <div className={`hidden sm:block fixed right-0 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
            <button
                onClick={scrollToForm}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-3 rounded-l-lg shadow-lg transition-all duration-200 transform hover:scale-105 writing-mode-vertical"
                style={{
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                    minHeight: '120px',
                    fontSize: '14px',
                    letterSpacing: '1px'
                }}
            >
                BOOK APPOINTMENT
            </button>
        </div>
    );
};

export default RightStickyButton;