"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MobileReview from "./MobileReview";
import { FaRegStar, FaStar, FaStarHalfStroke } from "react-icons/fa6";
import fertilityReview from "@/util/lp/fertilityReview";
import iuiReview from "@/util/lp/iuiReview";
import ivfReview from "@/util/lp/ivfReview";

const ReviewV2 = ({ center, service }) => {
  const totalStars = 5;
  const [reviews, setReviews] = useState([]);
  const [activeButton, setActiveButton] = useState("next");

  const filterReviews = (reviewList) =>
    reviewList.filter(
      (item) => item?.center_name?.toLowerCase() === center?.center_name?.toLowerCase()
    );

  useEffect(() => {
    switch (service) {
      case "ivf":
        setReviews(filterReviews(ivfReview));
        break;
      case "iui":
        setReviews(filterReviews(iuiReview));
        break;
      case "fertility":
      default:
        setReviews(filterReviews(fertilityReview));
        break;
    }
  }, [service, center]);

  console.log("deskktop review", reviews);

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1, partialVisibilityGutter: 50 },
  };

  const hasHalfStar = (rating) => rating % 1 >= 0.5;

  const capitalizeName = (name) =>
    name?.trim()?.replace(/\s+/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

  const ButtonGroup = ({ next, previous }) => (
    <div className="carousel-button-group absolute left-1/2 -translate-x-1/2 bottom-0 flex gap-2 lg:gap-3 xl:gap-5">
      {[{ type: "prev", action: previous }, { type: "next", action: next }].map(({ type, action }) => (
        <button key={type} onClick={() => { action(); setActiveButton(type); }} className="relative group">
          <Image
            className={`w-10 2xl:w-[60px] h-10 2xl:h-[60px] transition-opacity duration-300 ${activeButton === (type === "prev" ? "next" : "prev") ? "opacity-100" : "opacity-0"}`}
            src={`/images/ic-${type}2.png`}
            width={60}
            height={60}
            alt={type}
          />
          <Image
            className={`w-10 2xl:w-[60px] h-10 2xl:h-[60px] absolute top-0 left-0 transition-opacity duration-300 ${activeButton === type ? "opacity-100" : "group-hover:opacity-100 opacity-0"}`}
            src={`/images/ic-${type}2-hover.png`}
            width={60}
            height={60}
            alt={`${type} hover`}
          />
        </button>
      ))}
    </div>
  );

  return (
    <div className="max-w-screen-4xl mx-auto px-4 lg:px-10 xl:px-14 2xl:px-20 py-10 xl:py-16 rounded-3xl bg-[url(/images/lp/campaign/treatment_bg_img_cropped.png)] bg-repeat">
      <h2 className="text-[22px] md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-[52px] font-bold text-primary text-center tracking-wide">
        Best Reviewed {service !== "fertility" ? service?.toUpperCase() : service} Clinic in {capitalizeName(center?.center_name.replace("-", " "))}
      </h2>

      <div className="sm:hidden">
        <MobileReview center={center} review={reviews} />
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
          {reviews.map(({ id, rating, reviews, name, clinic_location }) => (
            <div key={id} className="border bg-white border-primary p-5 rounded-xl lg:rounded-[20px] text-center font-lato h-full">
              <div className="flex items-center justify-center gap-2">
                <Image className="w-auto h-[27px] lg:h-[39px]" src="/images/lp/review/google_img.png" alt="google review" width={39} height={40} loading="lazy" />
                <div className="flex items-center justify-center xl:justify-start gap-2">
                  {Array.from({ length: rating }, (_, index) => <FaStar key={index} className="text-xs xl:text-base text-accent" />)}
                  {hasHalfStar(rating) && <FaStarHalfStroke className="text-xs xl:text-base text-accent" />}
                  {Array.from({ length: totalStars - Math.ceil(rating) }, (_, index) => <FaRegStar key={index} className="text-xs xl:text-base text-accent" />)}
                  <span className="text-black">{rating}</span>
                </div>
              </div>
              <p className="font-lato mt-4 text-black">{reviews}</p>
              <h3 className="text-xl lg:text-[28px] mt-3 text-black">{capitalizeName(name)}</h3>
              <p className="text-black">{capitalizeName(clinic_location)}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ReviewV2;