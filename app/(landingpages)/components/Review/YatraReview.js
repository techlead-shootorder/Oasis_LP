"use client";
import Image from "next/image";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import YatraMobileReview from "./YatraMobileReview";
import { FaRegStar, FaStar, FaStarHalfStroke } from "react-icons/fa6";

const yatraReview = [
    {
      id: 126,
      center_name: "Hyderabad",
      clinic_location: "Hyderabad",
      city: "Hyderabad",
      rating: 4.9,
      name: "Navaneeth Rao",
      reviews:
        "After months of unsuccessful attempts, I was unsure about the right fertility treatment in Hyderabad. Visiting Dr. Avanthi Vellala’s care and advanced approach made my journey smooth. Grateful for the support!",
      profile_picture:
        "https://lh3.googleusercontent.com/a/ACg8ocLHQ4AeF9R3sXJ6knv6QVhYF8IXVCm40yodoycGfpWVT_4ZEw=w56-h56-p-rp-mo-br100",
      review_link: "https://maps.app.goo.gl/whdkLHy86bK6XrHV9",
    },
    {
      id: 127,
      center_name: "Karimnagar",
      clinic_location: "Karimnagar",
      city: "Karimnagar",
      rating: 4.9,
      name: "Harish",
      reviews:
        "I found Oasis fertility in karimnagar. then i met Dr. Jigna Tamagond—she explained everything clearly and ensured I was comfortable throughout. The experience was reassuring, and I highly recommend her!",
      profile_picture: "",
      review_link: "",
    },
    {
      id: 128,
      center_name: "Hanamkonda",
      clinic_location: "Hanamkonda",
      city: "Hanamkonda",
      rating: 4.9,
      name: "Sangeetha Rani Yanamanagandla",
      reviews:
        "I was searching for the top fertility consultation, then i met Dr. Jalagam Kavya Rao, kind, and extremely knowledgeable. I feel lucky to have found her for my fertility journey.",
      profile_picture: "",
      review_link: "",
    },
    {
      id: 129,
      center_name: "Vijayawada",
      clinic_location: "Vijayawada",
      city: "Vijayawada",
      rating: 4.9,
      name: "Kotha Mrudula",
      reviews:
        "Infertility was a difficult journey, and I wanted the best fertility centres in vijayawada. Meeting Dr. Venkata Sujatha Vellanki-changing. She patiently explained my options and provided the best treatment. I now feel hopeful and thankful for her support!",
      profile_picture: "",
      review_link: "",
    },
    {
      id: 130,
      center_name: "Ongole",
      clinic_location: "Ongole",
      city: "Ongole",
      rating: 4.9,
      name: "Sulthan Sk",
      reviews:
        "Choosing the right best fertility hospital in ongole was overwhelming, but meeting Dr Deepika Boppana, and the treatment process was smooth. I highly recommend her to anyone facing fertility challenges!",
      profile_picture: "",
      review_link: "",
    },
    {
      id: 131,
      center_name: "Guntur",
      clinic_location: "Guntur",
      city: "Guntur",
      rating: 4.9,
      name: "Nisha Shaikh",
      reviews:
        "I was looking for a reliable best fertility hospital in guntur and came across Dr. Ramya Vicharapu, and I feel much more positive now.",
      profile_picture: "",
      review_link: "",
    },
    {
      id: 132,
      center_name: "Kakinada",
      clinic_location: "Kakinada",
      city: "Kakinada",
      rating: 4.9,
      name: "Madhusudan Naidu Pathipati",
      reviews:
        "I was searching for an experienced fertility centre in kakinada, and Dr. Ramineedi , knowledgeable, and provided a well-planned treatment. The support I received was truly reassuring!",
      profile_picture: "",
      review_link: "",
    },
    {
      id: 133,
      center_name: "Tirupati",
      clinic_location: "Tirupati",
      city: "Tirupati",
      rating: 4.9,
      name: "Sarah",
      reviews:
        "Finding a trustworthy fertility treatments was difficult, but Dr. Vijayalakshmi D, and now I feel hopeful about the future. Highly recommended!",
      profile_picture: "",
      review_link: "",
    },
    {
      id: 134,
      center_name: "Kurnool",
      clinic_location: "Kurnool",
      city: "Kurnool",
      rating: 4.9,
      name: "Gowthami Gowni",
      reviews:
        "The journey to find the best fertility centre in kurnool was tough, but I’m glad I consulted Dr. Vijayalakshmi D, guided me well, and ensured I felt comfortable throughout the treatment.",
      profile_picture: "",
      review_link: "",
    },
  ];

const ReviewV2 = ({ center, service }) => {
  const totalStars = 5;
  const [activeButton, setActiveButton] = useState("next");

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 50,
    },
  };

  const hasHalfStar = (rating) => rating % 1 >= 0.5;

  const capitalizeName = (name) =>
    name
      ?.trim()
      ?.replace(/\s+/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

  const ButtonGroup = ({ next, previous }) => (
    <div className="carousel-button-group absolute left-1/2 -translate-x-1/2 bottom-0 flex gap-2 lg:gap-3 xl:gap-5">
      {[{ type: "prev", action: previous }, { type: "next", action: next }].map(
        ({ type, action }) => (
          <button
            key={type}
            onClick={() => {
              action();
              setActiveButton(type);
            }}
            className="relative group"
          >
            <Image
              className={`w-10 2xl:w-[60px] h-10 2xl:h-[60px] transition-opacity duration-300 ${
                activeButton === (type === "prev" ? "next" : "prev")
                  ? "opacity-100"
                  : "opacity-0"
              }`}
              src={`/images/ic-${type}2.png`}
              width={60}
              height={60}
              alt={type}
            />
            <Image
              className={`w-10 2xl:w-[60px] h-10 2xl:h-[60px] absolute top-0 left-0 transition-opacity duration-300 ${
                activeButton === type
                  ? "opacity-100"
                  : "group-hover:opacity-100 opacity-0"
              }`}
              src={`/images/ic-${type}2-hover.png`}
              width={60}
              height={60}
              alt={`${type} hover`}
            />
          </button>
        )
      )}
    </div>
  );

  return (
    <div className="max-w-screen-4xl mx-auto px-4 lg:px-10 xl:px-14 2xl:px-20 py-10 xl:py-16 rounded-3xl">
      <h2 className="text-[22px] md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-[52px] font-bold text-primary text-center tracking-wide">
        Best Reviewed{" "}
        {service !== "fertility" ? service?.toUpperCase() : service} Clinic in{" "}
        {capitalizeName(center?.center_name.replace("-", " "))}
      </h2>

      <div className="sm:hidden">
        <YatraMobileReview center={center} />
      </div>

      <div className="hidden sm:block">
        <Carousel
          responsive={responsive}
          partialVisbile
          itemClass="px-1 lg:px-2 mt-6 lg:mt-10 pb-20"
          arrows={false}
          swipeable
          ssr
          infinite
          autoPlay={false}
          customButtonGroup={<ButtonGroup />}
        >
          {yatraReview.map(({ id, rating, reviews, name, center_name }) => (
            <div
              key={id}
              className="border bg-white border-primary p-5 rounded-xl lg:rounded-[20px] text-center font-lato h-full"
            >
              <div className="flex items-center justify-center gap-2">
                <Image
                  className="w-auto h-[27px] lg:h-[39px]"
                  src="/images/lp/review/google_img.png"
                  alt="google review"
                  width={39}
                  height={40}
                  loading="lazy"
                />
                <div className="flex items-center justify-center xl:justify-start gap-2">
                  {Array.from({ length: Math.floor(rating) }, (_, index) => (
                    <FaStar
                      key={index}
                      className="text-xs xl:text-base text-accent"
                    />
                  ))}
                  {hasHalfStar(rating) && (
                    <FaStarHalfStroke className="text-xs xl:text-base text-accent" />
                  )}
                  {Array.from(
                    { length: totalStars - Math.ceil(rating) },
                    (_, index) => (
                      <FaRegStar
                        key={index}
                        className="text-xs xl:text-base text-accent"
                      />
                    )
                  )}
                  <span className="text-black">{rating}</span>
                </div>
              </div>
              <p className="font-lato mt-4 text-black">{reviews}</p>
              <h3 className="text-xl lg:text-[28px] mt-3 text-primary font-semibold">
                {name}
              </h3>
              <p className="font-lato mt-2 text-black">{center_name}</p>
              
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ReviewV2;
