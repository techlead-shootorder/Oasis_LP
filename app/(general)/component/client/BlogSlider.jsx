'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { AppConstant } from "../../../../lib/constant/AppConstant";
import { UAParser } from 'ua-parser-js';
import { getFormattedDate } from "@/util/DataUtil";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3
    },
    tablet: {
        breakpoint: { max: 1023, min: 640 },
        items: 2,
        slidesToSlide: 2
    },
    mobile: {
        breakpoint: { max: 639, min: 0 },
        items: 1,
        slidesToSlide: 1,
        partialVisibilityGutter: 50
    }
};

const BlogsListData = [
    {
        title: "10 Foods To Improve Female Egg Quality",
        imgUrl: "https://images.oasisindia.in/website/blog/Blog1.png",
        hrefLink: `${AppConstant.websiteUrl}/blog/10-foods-that-will-boost-female-egg-quality/`,
        authorName: "Dr. V Ramya",
        date: "June 5, 2024"
    },
    {
        title: "Understanding Seed Cycling For Periods, PCOS And Fertility",
        imgUrl: "https://images.oasisindia.in/website/blog/Blog2.png",
        hrefLink: `${AppConstant.websiteUrl}/blog/understanding-seed-cycling-for-periods-pcos-and-fertility/`,
        authorName: "Dr. Sai Manasa Darla",
        date: "January 24, 2024"
    },
    {
        title: "21 Exciting Ways Of Pregnancy Announcement To Husband",
        imgUrl: "https://images.oasisindia.in/website/blog/Blog3.png",
        hrefLink: `${AppConstant.websiteUrl}/blog/21-exciting-ways-of-pregnancy-announcement-to-husband/`,
        authorName: "Oasis Fertility",
        date: "June 4, 2024"
    },
    {
        title: "15 Best Foods For Hormonal Balance",
        imgUrl: "https://images.oasisindia.in/website/blog/Blog1.png",
        hrefLink: `${AppConstant.websiteUrl}/blog/best-foods-for-hormonal-balance/`,
        authorName: "Oasis Fertility",
        date: "May 28, 2024"
    },
    {
        title: "Is It Possible To Get Pregnant With High AMH Levels?",
        imgUrl: "https://images.oasisindia.in/website/blog/Blog5.png",
        hrefLink: `${AppConstant.websiteUrl}/blog/is-it-possible-to-get-pregnant-with-high-amh-levels/`,
        authorName: "Oasis Fertility",
        date: "August 24, 2023"
    }
];

export default function BlogSlider({ userAgentString, blogData, isDynamicBlogs = false }) {
    const parser = new UAParser(userAgentString);
    const result = parser.getResult()
    const deviceType = (result.device && result.device.type) || 'desktop';

    const ButtonGroup = ({ next, previous }) => {
        return (
            <div className="carousel-button-group absolute left-[50%] translate-x-[-50%] bottom-0 flex 2xl:gap-8 gap-4">
                <button onClick={previous}>
                    <Image className="w-10 2xl:w-[60px] h-10 2xl:h-[60px]" src="https://images.oasisindia.in/website/ic-prev2.png" width={60} height={60} alt="prev" />
                </button>
                <button onClick={next}>
                    <Image className="w-10 2xl:w-[60px] h-10 2xl:h-[60px]" src="https://images.oasisindia.in/website/ic-next2.png" width={60} height={60} alt="next" />
                </button>
            </div>
        );
    };

    return (
        <div className="pb-16 lg:pb-24 relative">
            <div className="flex items-center md:gap-4 ">
                <h2
                    className="text-primary text-[22px] md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-[52px] !leading-[1.2] w-[80%] lg:w-auto">
                    Blogs on Fertility Treatments, Reproductive Health & More</h2>
                <hr className="flex-1 border-primary-50" />
            </div>
            <Carousel responsive={responsive} partialVisbile className="mt-4 lg:mt-10 position-unset" itemClass="px-2 md:px-4"
                customButtonGroup={<ButtonGroup />}
                arrows={false}
                swipeable={true}
                ssr={true}
                deviceType={deviceType}
                infinite
                autoPlay={false}
                autoPlaySpeed={2000}
            >
                {isDynamicBlogs && blogData && blogData?.map((data, index) => {
                    return (
                        <React.Fragment key={index}>
                            <Link href={data.yoast_head_json?.canonical} className="bg-[#FDF4F7] rounded-xl block h-full">
                                <img className="rounded-md h-auto w-full " src={data?.yoast_head_json?.og_image?.[0]?.url} width={500} height={0} alt={data?.yoast_head_json?.title} />
                                <article className="p-2.5 md:p-3 xl:p-4 flex flex-col justify-between">
                                    <h4 className="font-lato text-sm sm:text-base xl:text-xl 2xl:text-2xl min-h-10 sm:min-h-12 xl:min-h-14 2xl:min-h-16">{data?.yoast_head_json?.title}</h4>
                                    <div className="flex justify-between mt-4 xl:mt-10 text-primary text-[11px] md:text-sm xl:text-base">
                                        <h6 className="flex gap-2">By <span className="underline">{data?.yoast_head_json?.author}</span></h6>
                                        <h6>{getFormattedDate(data?.yoast_head_json?.article_published_time)}</h6>
                                    </div>
                                </article>
                            </Link>
                        </React.Fragment>
                    );
                })}
                {!isDynamicBlogs && BlogsListData.map((data, index) => {
                    return (
                        <React.Fragment key={index}>
                            <Link href={data.hrefLink} className="bg-[#FDF4F7] rounded-xl block">
                                <Image className="rounded-md w-full" src={data.imgUrl} width={500} height={0} alt={data.title} />
                                <article className="p-2.5 md:p-3 xl:p-4 flex flex-col justify-between">
                                    <h4 className="font-lato text-sm sm:text-base xl:text-xl 2xl:text-2xl min-h-10 sm:min-h-12 xl:min-h-14 2xl:min-h-16">{data.title}</h4>
                                    <div className="flex justify-between mt-4 xl:mt-10 text-primary text-[11px] md:text-sm xl:text-base">
                                        <h6 className="flex gap-2">By <span className="underline">{data.authorName}</span></h6>
                                        <h6>{data.date}</h6>
                                    </div>
                                </article>
                            </Link>
                        </React.Fragment>
                    );
                })}
            </Carousel>
        </div>
    )
}