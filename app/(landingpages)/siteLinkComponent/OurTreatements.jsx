"use client";

import React from "react";
import Image from "next/image";
import "./OurTreatments.css"

const OurTreatments = () => {
  const treatments = [
    {
      imgSrc: `https://images.oasisindia.in/website/lp/icons/1_0.svg`,
      title: "In Vitro Fertilization (IVF)",
      description:
        "Getting the best egg and the best sperm together through advanced technologies to make you realise your parenthood dream!",
    },
    {
      imgSrc: `https://images.oasisindia.in/website/lp/icons/2_0.svg`,
      title: "Intrauterine Insemination (IUI)",
      description:
        "Selecting the best sperm through Microfluidics to make you happy parents.",
    },
    {
      imgSrc: `https://images.oasisindia.in/website/lp/icons/3_0.svg`,
      title: "Drug Free IVF (CAPA IVM)",
      description:
        "Harmonious and safe treatment experience with a lesser number of injections to help you conceive despite cancer or PCOS.",
    },
    {
      imgSrc: `https://images.oasisindia.in/website/lp/icons/51_0.svg`,
      title: "ICSI (Intracytoplasmic Sperm Injection)",
      description:
        "A specialized form of IVF where a single sperm is directly injected into an egg using advanced microscopic techniques, significantly enhancing fertilization chances, especially in cases of severe male infertility.",
    },
    {
      imgSrc: `https://images.oasisindia.in/website/lp/icons/4_0.svg`,
      title: "Fertility Preservation",
      description:
        "Cancer or any other medical condition need not put an end to your parenthood dream. Preserve your fertility potential for future pregnancy goals.",
    },
    {
      imgSrc: `https://images.oasisindia.in/website/lp/icons/6_0.svg`,
      title: "Preimplantation genetic testing (PGT)",
      description:
        "Improves your chances of having a healthy child even after your late 30s.",
    },
    {
      imgSrc: `https://images.oasisindia.in/website/lp/icons/7_0.svg`,
      title: "Microfluidics",
      description:
        "Enhance your IUI/ IVF success rate through the best sperm selection by Microfluidics.",
    },
    {
      imgSrc: `https://images.oasisindia.in/website/lp/icons/8_0.svg`,
      title: "1000+ MicroTESE",
      description:
        "Zero sperm count need not put an end to your fatherhood dream!",
    },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-[22px] md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-[52px] !leading-[1.2] font-bold text-center mb-8" data-aos="zoom-in">
        IVF Treatment in India
        </h2>
        {/* Cards Parent Div */}
        <div className="px-5 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 align-middle">
          {treatments.map((treatment, index) => (
            <div key={index} className="flip-card">
              <div className="flip-card-inner">
                {/* Front side */}
                <div className="flip-card-front">
                  <Image
                    loading="lazy"
                    src={treatment.imgSrc}
                    alt="icons"
                    width={100}
                    height={100}
                    className="mx-auto"
                  />
                  <h3 className="text-xl font-semibold mt-4">
                    {treatment.title}
                  </h3>
                </div>

                {/* Back side */}
                <div className="flip-card-back">
                  <p className="text-gray-700">{treatment.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default OurTreatments;

