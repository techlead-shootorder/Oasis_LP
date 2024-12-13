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
            question: "Can I conceive with IVF even after 35?",
            answer:
                "Yes, IVF can help you conceive even after 35 with the help of advanced technologies like ERA & PGT-A.",
        },
        {
            question: "What is the duration of an IVF cycle?",
            answer:
                "The duration of an IVF cycle may vary from 6 to 12 weeks.",
        },
        {
            question: "Is the IVF procedure painful?",
            answer:
                "IVF is a painless procedure. You may experience minimal discomfort due to the injections that are used for IVF stimulation and egg pickup is done under anesthesia.",
        },
        {
            question: "How can I ensure a healthy baby with IVF?",
            answer:
                "PGT-A allows screening and selecting the best embryo without chromosomal abnormalities for embryo transfer. This helps you in having a healthy baby.",
        },
        {
            question: "Does IVF always result in twins?",
            answer:
                "No. Through SET (Single Embryo Transfer) an advanced technology, it is possible to have a single healthy baby through IVF.",
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
