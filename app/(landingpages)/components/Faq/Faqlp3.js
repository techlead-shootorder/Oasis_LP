"use client"
import { useState } from 'react';
import { FaAngleRight, FaAngleDown } from "react-icons/fa6";

const FAQV2 = ({service}) => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    const faqData = [
        {
            question: "Why choose Oasis Fertility as your IVF clinic?",
            answer:
                "Oasis offers advanced technology, expert specialists, personalized care, and high IVF success rates.",
        },
        {
            question: "What IVF treatments are available at Oasis?",
            answer:
                "Oasis provides IVF, ICSI, donor programs, fertility preservation, and tailored treatment plans for every patient.",
        },
        {
            question: "How much does IVF cost at Oasis Fertility?",
            answer:
                "IVF costs at Oasis depend on individual needs. Transparent pricing ensures affordable, high-quality care.",
        },
        {
            question: "What factors affect the cost of IVF at Oasis?",
            answer:
                "Costs depend on treatment type, tests, medications, and procedures. Transparent pricing helps you plan better.",
        },
        {
            question: "What is the success rate of IVF at Oasis Fertility?",
            answer:
                "Oasis Fertility has a high success rate of up to 70%, thanks to skilled specialists, advanced techniques, and personalized care.",
        },
    ];

    const iuiFaqData = [
        {
            question: "Why choose Oasis Fertility as your IUI clinic?",
            answer: "Oasis offers advanced technology, expert specialists, personalized care, and high success rates for IUI treatments.",
        },
        {
            question: "What is the process of IUI treatment at Oasis?",
            answer: "IUI involves sperm preparation and insertion into the uterus, guided by advanced techniques for better success rates.",
        },
        {
            question: "Who are the IUI specialists at Oasis Fertility?",
            answer: "Oasis specialists are highly skilled in fertility care, offering compassionate and personalized IUI treatment options.",
        },
        {
            question: "What factors influence the cost of IUI at Oasis?",
            answer: "Costs vary based on the number of cycles, medications, and diagnostic tests. Oasis ensures transparent pricing.",
        },
        {
            question: "What is the success rate of IUI treatments at Oasis?",
            answer: "Oasis Fertility’s IUI success rates are high, supported by experienced specialists and cutting-edge medical techniques.",
        },
        
    ]

    return (
        <div className="relative max-w-screen-4xl mx-auto px-4 lg:px-10 xl:px-14 2xl:px-20 mb-10 lg:mb-16">
            <h2 className='text-[22px] md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-[52px] !leading-[1.2] font-bold text-primary text-center tracking-wide'>Frequently Asked Questions</h2>
            <div className="mx-auto mt-5 lg:mt-6 max-w-full grid divide-y divide-primary divide-y-2">
              {service == 'iui' ?  iuiFaqData.map((faq, index) => (
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
                )) :   faqData.map((faq, index) => (
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
                ))
                }
            </div>
        </div>
    );
};

export default FAQV2;
