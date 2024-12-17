'use client'

import Image from "next/image";
import Link from "next/link";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1023, min: 640 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 639, min: 0 },
        items: 1
    }
};

const ButtonGroup = ({ next, previous, ...rest }) => {
    const {
        carouselState: { currentSlide, totalItems, slidesToShow }
    } = rest;

    return (
        <>
           <div className="carousel-button-group absolute top-[38%] w-full sm:hidden">
                {currentSlide === 0 ? "" : <Image src="https://images.oasisindia.in/website/ic-prevsm.png" width={24} height={0} alt="prev" onClick={() => previous()} className="absolute left-0 cursor-pointer" />}
                {currentSlide === totalItems - slidesToShow ? "" : <Image src="https://images.oasisindia.in/website/ic-nextsm.png" width={24} height={0} alt="next" onClick={() => next()} className="absolute right-0 cursor-pointer" />}
            </div>
            <div className="carousel-button-group absolute bottom-0 left-[50%] translate-x-[-50%] hidden sm:flex gap-4 lg:gap-8">
                {currentSlide === 0 ? "" : <Image src="https://images.oasisindia.in/website/ic-prev2.png" width={60} height={60} alt="prev" onClick={() => previous()} className="w-10 2xl:w-[60px] h-10 2xl:h-[60px] cursor-pointer" />}
                {currentSlide === totalItems - slidesToShow ? "" : <Image src="https://images.oasisindia.in/website/ic-next2.png" width={60} height={60} alt="next" onClick={() => next()} className="w-10 2xl:w-[60px] h-10 2xl:h-[60px] cursor-pointer" />}
            </div>
        </>
    );
};

export default function IVFSuccessStories({ headerText = "IVF Success Stories", isDynamicButton = false }) {
    
    return (
        <div className="pb-10 lg:pb-24">
            <div className="flex items-center gap-4">
                <h2 className="text-primary text-[22px] md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-[52px] !leading-[1.2]">{headerText}</h2>
                <hr className="flex-1 border-primary-50" />
            </div>
            <Carousel 
                responsive={responsive} 
                arrows={false} 
                swipeable={true} 
                ssr={true} 
                customButtonGroup={<ButtonGroup />}
                infinite
                autoPlay={false}
                autoPlaySpeed={2000}
                className="sm:pb-10 xl:pb-20 2xl:pb-24"
            >
                <div>
                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-16 mt-10 sm:mt-20">
                        <div className="w-full sm:w-[40%]">
                            <div className="flex items-center px-10 relative">
                                <Image 
                                    className="rounded-[50px] sm:rounded-[200px] mx-auto"
                                    src="https://images.oasisindia.in/website/Rajani.png" 
                                    alt="Rajani" 
                                    width={576} 
                                    height={0} 
                                />
                            </div>
                            <div className="text-center font-lato mt-5 hidden sm:block">
                                <h4 className="text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl">Mrs & Mr Reddy</h4>
                                <h5 className="text-xl xl:text-2xl 3xl:text-[28px]">Hyderabad</h5>
                            </div>
                        </div>

                        <div className="w-full sm:w-[60%]">
                            <div className="flex items-start">
                                <FaQuoteLeft className="text-lg md:text-xl lg:text-2xl xl:text-4xl text-accent mr-2" />
                                <h2
                                    className="text-[22px] md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[54px] 3xl:text-[65px] text-accent !leading-[1.2]">
                                    We are happy to be <br />
                                    blessed with a beautiful <br /> baby girl
                                    <FaQuoteRight className="inline-block text-lg md:text-xl lg:text-2xl xl:text-4xl text-accent mr-2 text-accent ml-2 align-text-top" />
                                </h2>
                            </div>

                            <p
                                className="font-lato_light md:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-[45px] font-light !leading-[1.2] mt-4 pl-6 lg:pl-8 xl:pl-12">
                                A couple who were struggling with their journey to parenthood shares their happiness and gratitude towards Oasis Fertility.
                            </p>
                            <div className="sm:text-center font-lato mt-5 sm:hidden pl-6">
                                <h4 className="sm:text-xl">Mrs & Mr Reddy</h4>
                                <h5 className="sm:text-xl">Hyderabad</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-16 mt-10 sm:mt-20">
                        <div className="w-full sm:w-[40%]">
                            <div className="flex items-center px-10 relative">
                                <Image 
                                    className="rounded-[50px] sm:rounded-[200px] mx-auto"
                                    src="https://images.oasisindia.in/website/Satya.png" 
                                    alt="Satya" 
                                    width={576} 
                                    height={0} 
                                />
                            </div>
                            <div className="text-center font-lato mt-5 hidden sm:block">
                                <h4 className="text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl">Mrs & Mr Kumar</h4>
                                <h5 className="text-xl xl:text-2xl 3xl:text-[28px]">Hyderabad</h5>
                            </div>
                        </div>

                        <div className="w-full sm:w-[60%] xl:w-[45%] 3xl:w-[52%]">
                            <div className="flex items-start">
                                <FaQuoteLeft className="text-lg md:text-xl lg:text-2xl xl:text-4xl text-accent mr-2" />
                                <h2
                                    className="text-[22px] md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-[52px] text-accent !leading-[1.2]">
                                    Helping another couple<br /> achieve the dream of<br /> parenthood
                                    <FaQuoteRight className="inline-block text-lg md:text-xl lg:text-2xl xl:text-4xl text-accent mr-2 text-accent ml-2 align-text-top" />
                                </h2>
                            </div>
                            <p
                                className="font-lato_light md:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-[45px] font-light !leading-[1.2] mt-4 pl-6 lg:pl-8 xl:pl-12">
                                The blessing of having children doesn&apos;t come easy to some. Listen to one such couple as they recount how Oasis Fertility helped them become parents after years of longing.
                            </p>
                            <div className="sm:text-center font-lato mt-5 sm:hidden pl-6">
                                <h4 className="sm:text-xl">Mrs & Mr Kumar</h4>
                                <h5 className="sm:text-xl">Hyderabad</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
            {isDynamicButton && (
                <div className="flex justify-center mt-8">
                    <Link 
                        className="font-lato px-4 py-2 sm:px-6 sm:py-3 rounded-[10px] bg-accent text-sm sm:text-xl font-semibold text-[#FFFFFF] uppercase"
                        href="/why-oasis/our-success-stories/"
                    >
                        SHOW MORE
                    </Link>
                </div>
            )}
        </div>
    )
}