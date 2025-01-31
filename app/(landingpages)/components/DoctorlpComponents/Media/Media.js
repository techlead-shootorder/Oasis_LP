"use client";
import Image from "next/image";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { FaRegStar, FaStar, FaStarHalfStroke } from "react-icons/fa6";

const stories = [
  { videoId: 'TSUFeOgscYM', text: "Everything about pregnancy planning", image: '/images/lp/doctors/updated/gallery_image_dr.jpg', },
  { videoId: 'KDz_mfG1AEo', text: "What are the factors that affect the success rate of egg freezing?", image: '/images/home/pregnancyplan2.png', },
  { videoId: 'HARgKEK7ihA', text: "Kids Planning", image: '/images/home/pregnancyplan3.png' },
  { videoId: '9qT8zaJV56U', text: "Get Ready for Parenthood with Advanced Infertility Treatments in 2024 With Oasis Fertility", image: '/images/home/Rohit_Marina.png' }
];

const Media = () => {
  const [activeButton, setActiveButton] = useState('next');

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
    <section className="max-w-screen-4xl mx-auto px-4 lg:px-10 xl:px-14 2xl:px-20 py-10 lg:py-16 bg-[url(/images/lp/campaign/treatment_bg_img_cropped.png)] bg-repeat mb-10 lg:mb-16 relative">
      <div className="">
        <h2 className="text-[22px] md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-[52px] !leading-[1.2] font-bold text-primary text-center tracking-wide">
          Media
        </h2>




        <div className="block">
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
            {stories?.map((story, index) => (
              <div
                key={index}
                className="border overflow-hidden rounded-xl lg:rounded-[20px]"
              >
                <div className="">
                  <Image
                    className="w-auto"
                    // className=" rounded-lg"
                    src='/images/lp/doctors/updated/gallery_image_dr.jpg'
                    alt="story"
                    width={210}
                    height={252}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>

      </div>
    </section>
  );
};

export default Media;