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
            question: "What is a semen analysis test?",
            answer:
                "A semen analysis test evaluates sperm count, motility, and morphology to diagnose male infertility.",
        },
        {
            question: "Where can I get a semen analysis test near me?",
            answer:
                "Visit our male fertility clinic for accurate semen analysis with advanced diagnostic facilities.",
        },
        {
            question: "How much does a semen analysis test cost?",
            answer:
                "Our clinic offers affordable semen analysis tests. Contact us for pricing details.",
        },
        {
            question: "Who is the best andrologist in Hyderabad?",
            answer:
                "Our clinic has experienced andrologists specializing in male fertility treatments.",
        },
        {
            question: "What is Testicular Sperm Aspiration (TESA)?",
            answer:
                "TESA retrieves sperm directly from the testicles for men with azoospermia or sperm retrieval issues.",
        },
        {
            question: "What is the purpose of a DNA Fragmentation Index test?",
            answer:
                "This test checks sperm DNA integrity, useful for recurrent miscarriages or unexplained infertility.",
        },
        {
            question: "Where can I find a semen analysis lab near me?",
            answer:
                "Our clinic provides state-of-the-art semen analysis with accurate results and expert consultation.",
        },
    ];

    return (
        <div className="relative max-w-screen-4xl mx-auto px-4 lg:px-10 xl:px-14 2xl:px-20 mb-10 lg:mb-16">
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
