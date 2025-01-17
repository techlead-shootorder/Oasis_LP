"use client";
import Image from "next/image";
import React, {useState} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MobileReview from "./MobileReview";
import { FaRegStar, FaStar, FaStarHalfStroke } from "react-icons/fa6";
import review from '@/util/lp/reviewlp3';

const ReviewV2 = ({ center, service }) => {
  const totalStars = 5;
  const [activeButton, setActiveButton] = useState('next');
  const filterReview = review.filter((item) => item?.center_name?.toLowerCase() === center?.center_name.toLowerCase());
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 50,
    },
  };

  const hasHalfStar = rating => {
    return rating % 1 >= 0.5;
  };

  function capitalizeName(name) {
    // Trim leading and trailing spaces and ensure there's only one space between words
    const lower = name.toLowerCase();
    let cleanedName = lower.trim().replace(/\s+/g, ' ');

    // Capitalize the first letter of each word
    return cleanedName
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

  const ButtonGroup = ({ next, previous }) => {
    return (
      <div className="carousel-button-group absolute left-[50%] translate-x-[-50%] bottom-0 flex gap-2 lg:gap-3 xl:gap-5">
        <button
          onClick={() => {
            previous();
            setActiveButton('prev');
          }}
          className="relative group"
        >
          <Image
            className={`w-10 2xl:w-[60px] h-10 2xl:h-[60px] transition-opacity duration-300 ${activeButton === 'next' ? 'opacity-100' : 'opacity-0'}`}
            src="/images/ic-prev2.png"
            width={60}
            height={60}
            alt="prev"
          />
          <Image
            className={`w-10 2xl:w-[60px] h-10 2xl:h-[60px] absolute top-0 left-0 transition-opacity duration-300 ${activeButton === 'prev' ? 'opacity-100' : 'group-hover:opacity-100 opacity-0'}`}
            src="/images/ic-prev2-hover.png"
            width={60}
            height={60}
            alt="prev hover"
          />
        </button>
        <button
          onClick={() => {
            next();
            setActiveButton('next');
          }}
          className="relative group"
        >
          <Image
            className={`w-10 2xl:w-[60px] h-10 2xl:h-[60px] transition-opacity duration-300 ${activeButton === 'prev' ? 'opacity-100' : 'opacity-0'}`}
            src="/images/ic-next2.png"
            width={60}
            height={60}
            alt="prev"
          />
          <Image
            className={`w-10 2xl:w-[60px] h-10 2xl:h-[60px] absolute top-0 left-0 transition-opacity duration-300 ${activeButton === 'next' ? 'opacity-100' : 'group-hover:opacity-100 opacity-0'}`}
            src="/images/ic-next2-hover.png"
            width={60}
            height={60}
            alt="prev hover"
          />
        </button>
      </div>
    );
  };

  return (
    <div className="pb-10 lg:pb-16">

      <h2 className="text-[22px] md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-[52px] !leading-[1.2] font-bold text-primary text-center tracking-wide">
        Best Reviewed <span className={service != 'fertility' ? 'uppercase' : '' }>{service ? service : "IVF"}</span> Clinic in{" "}
        {center?.center_name
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ") == 'Hsr' ? center?.center_name
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ").toUpperCase() + ' Layout'  :  center?.center_name
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
      </h2>
      

      <div className="sm:hidden">
      <MobileReview center={center} />
      </div>

      <div className="hidden sm:block">
      <Carousel
        responsive={responsive}
        partialVisbile
        itemClass="px-1 lg:px-2 mt-6 lg:mt-10 pb-20"
        arrows={false}
        swipeable={true}
        ssr={true}
        infinite
        autoPlay={false}
        customButtonGroup={<ButtonGroup />}
      >
        {filterReview?.map(testimonial => (
          <div
            key={testimonial.id}
            className="border bg-white border-primary p-5 rounded-xl lg:rounded-[20px] text-center font-lato h-full"
          >
            <div className="flex items-center justify-center gap-2">
              <Image
                className="w-auto h-[27px] lg:h-[39px]"
                src="/images/lp/review/google_img.png"
                alt=""
                width={39}
                height={40}
                loading="lazy"
              />
              <div className="flex items-center justify-center xl:justify-start gap-2">
                {Array.from({ length: testimonial.rating }, (_, index) => (
                  <FaStar
                    key={index}
                    className="text-xs xl:text-base text-accent"
                  />
                ))}
                {hasHalfStar(testimonial.rating) && (
                  <FaStarHalfStroke className="text-xs xl:text-base text-accent" />
                )}
                {Array.from(
                  { length: totalStars - testimonial.rating },
                  (_, index) => (
                    <FaRegStar
                      key={index + testimonial.rating}
                      className="text-xs xl:text-base text-accent"
                    />
                  )
                )}
                <span className="text-black">{testimonial.rating}</span>
              </div>
              {/* <h3 className="text-lg lg:text-2xl font-medium ">4.5</h3> */}
            </div>
            <p className="font-lato mt-4 text-black">{testimonial.review}</p>
            <h3 className="text-xl lg:text-[28px] mt-3 text-black">
              {capitalizeName(testimonial.name)}
            </h3>
            <p className="text-black">
              {testimonial.clinic_location
                .split(" ")
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </p>
          </div>
        ))}
      </Carousel>
      </div>

    </div>
  );
};

export default ReviewV2;