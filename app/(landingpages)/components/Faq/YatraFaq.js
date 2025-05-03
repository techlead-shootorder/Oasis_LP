"use client"
import { useState } from 'react';
import { FaAngleRight, FaAngleDown } from "react-icons/fa6";

const FAQV2 = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    const faqData = [
        {
            question: "What is the Oasis Janani Yatra campaign?",
            answer:
                "Janani Yatra is a 30-day \"Fertility on Wheels\" campaign by Oasis Fertility. Our fully equipped mobile clinic is visiting 10 cities across Andhra Pradesh and Telangana, offering free fertility scans and consultations to help you take the first step towards parenthood.",
        },
        {
            question: "Who should visit the Janani Yatra Bus?",
            answer:
                "If you're planning to have a baby, facing fertility issues, or simply want to check your reproductive health — this is for you. We welcome couples, individuals, and women of reproductive age.",
        },
        {
            question: "What services are provided?",
            answer:
                "You'll get: Free fertility and ultrasound scans One-on-one consultation with expert fertility doctors Basic counselling about treatment options All in one visit — at zero cost.",
        },
        {
            question: "Is it really free?",
            answer:
                "Yes! 100% free. There are no hidden charges for scans or consultations. This is our way of making fertility care more accessible.",
        },
        {
            question: "Do I need to book in advance?",
            answer:
                "Yes, we recommend it. Booking your free slot will help you avoid wait times and guarantee your consultation. You can reserve your spot right here on this page.",
        },
        {
            question: "What happens after my consultation?",
            answer:
                "Our doctors will explain your scan results and give you initial advice. If you need further tests or treatment, we'll connect you to a nearby Oasis Fertility centre for follow-up.",
        },
    ];

    return (
        <div className="max-w-screen-4xl mx-auto px-4 lg:px-10 xl:px-14 2xl:px-20 py-10 xl:py-16 rounded-3xl bg-[url(/images/lp/campaign/treatment_bg_img_cropped.png)] bg-repeat">
            <h2 className='text-[22px] md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-[52px] !leading-[1.2] font-bold text-primary text-center tracking-wide'>Frequently Asked Questions</h2>
            <div className="mx-auto mt-5 lg:mt-6 max-w-full grid divide-y divide-primary divide-y-2">
                {faqData.map((faq, index) => (
                    <div key={'faq-lp-' + index} className="py-4 xl:py-8 last:pb-0">
                        <div
                            className="flex justify-between items-center cursor-pointer gap-5"
                            onClick={() => toggleDropdown(index)}
                        >
                            <h3 className="text-base lg:text-xl xl:text-2xl 2xl:text-3xl text-black">{faq.question}</h3>
                            <span className="text-xl 2xl:text-[26px] text-primary">{openDropdown === index ? <FaAngleDown /> : <FaAngleRight />}</span>
                        </div>
                        {openDropdown === index ? <div className="mt-4 text-sm lg:text-base">
                            <p>{faq.answer}</p>
                        </div> : ''}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQV2;