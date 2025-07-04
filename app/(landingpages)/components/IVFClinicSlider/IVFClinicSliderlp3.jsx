'use client'
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useVideoStore } from "@/app/(general)/home/components/client/YoutubePlayer";
import { useInViewport } from 'react-in-viewport';
import { useEffect, useRef, useState } from "react";
import { UAParser } from 'ua-parser-js';

// Video Reel Skeleton Component Comment
const VideoReelSkeleton = () => {
  const getSkeletonCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 4;
      if (window.innerWidth >= 768) return 3;
      return 2;
    }
    return 4;
  };

//   Below is video skeleton

  return (
    <div className="max-w-screen-4xl mx-auto px-4 lg:px-10 xl:px-14 2xl:px-20 mb-10 lg:mb-16">
      <div className="flex justify-center mb-6 lg:mb-12">
        <div className="w-3/4 h-8 md:h-10 lg:h-12 xl:h-14 bg-gray-200 animate-pulse rounded-lg" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {[...Array(getSkeletonCount())].map((_, index) => (
          <div key={index} className="relative rounded-xl overflow-hidden">
            <div className="aspect-[9/16] bg-gray-200 animate-pulse rounded-xl relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-10 sm:w-[64px] h-10 sm:h-[64px] bg-gray-300 animate-pulse rounded-full" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-5 lg:py-8 bg-gradient-to-t from-gray-900/50 to-transparent">
                <div className="h-4 sm:h-5 lg:h-6 bg-gray-300 animate-pulse rounded w-3/4 mx-auto" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <div className="w-10 2xl:w-[60px] h-10 2xl:h-[60px] bg-gray-200 animate-pulse rounded-full" />
        <div className="w-10 2xl:w-[60px] h-10 2xl:h-[60px] bg-gray-200 animate-pulse rounded-full" />
      </div>
    </div>
  );
};

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
        slidesToSlide: 3
    },
    mobile: {
        breakpoint: { max: 767, min: 0 },
        items: 2,
        slidesToSlide: 2
    }
};

function IVFClinicSliderV2({ center, userAgentString, cityVideos, service }) {
    const [isLoading, setIsLoading] = useState(true);
    let parser = new UAParser(userAgentString);
    const result = parser.getResult();
    const deviceType = (result.device && result.device.type) || 'desktop';

    // const ivfClinicVideos = [
    //     { videoId: 'TSUFeOgscYM', VideoTitleText: "Everything about pregnancy planning", videoImage: '/images/home/pregnancyplan1.png', youTubeVideoUrl: 'https://youtube.com/shorts/TSUFeOgscYM', isSelected: false },
    //     { videoId: 'KDz_mfG1AEo', VideoTitleText: "What are the factors that affect the success rate of egg freezing?", videoImage: '/images/home/pregnancyplan2.png', youTubeVideoUrl: 'https://youtu.be/KDz_mfG1AEo', isSelected: false },
    //     { videoId: 'HARgKEK7ihA', VideoTitleText: "Kids Planning", videoImage: '/images/home/pregnancyplan3.png', youTubeVideoUrl: 'https://youtube.com/shorts/HARgKEK7ihA', isSelected: false },
    //     { videoId: 'p6W3t5FcIyQ', VideoTitleText: "Does the use of cosmetics, perfume, and deo affect fertility in women?", videoImage: '/images/home/pregnancyplan5.png', youTubeVideoUrl: 'https://youtube.com/shorts/p6W3t5FcIyQ', isSelected: false },
    //     { videoId: '9qT8zaJV56U', VideoTitleText: "Get Ready for Parenthood with Advanced Infertility Treatments in 2024 With Oasis Fertility", videoImage: '/images/home/Rohit_Marina.png', youTubeVideoUrl: 'https://youtube.com/shorts/9qT8zaJV56U', isSelected: false }
    // ];

    const startVideoPlayer = useVideoStore(state => state?.startVideoPlayer);
    const currentVideoRef = useRef();
    const [currentVideo, setCurrentVideo] = useState();
    const stopVideoPlayer = useVideoStore(state => state?.stopVideoPlayer);
    const [ivfClinicsList, setIvfClinicsList] = useState(cityVideos);
    const displayVideoPlayer = useVideoStore(state => state?.displayVideoPlayer);
    const [youTubeEvent, setYoutubeEvent] = useState();

    const { inViewport } = useInViewport(
        currentVideoRef,
        {},
        { disconnectOnLeave: true }
    );

    // const opts = {
    //     playerVars: {
    //         autoplay: 1,
    //     },
    // };

    useEffect(() => {
        if (cityVideos?.length) {
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [cityVideos]);

    useEffect(() => {
        displayVideoPlayer(inViewport);
        if (!inViewport && currentVideo) {
            startVideoPlayer(currentVideo, youTubeEvent?.getCurrentTime());
            let ivfClinicsListTemp = [...ivfClinicsList];
            ivfClinicsListTemp?.forEach((videoEle, index) => {
                if (videoEle?.videoId == currentVideo) {
                    ivfClinicsListTemp[index].isSelected = false;
                }
                setIvfClinicsList(ivfClinicsListTemp);
                setCurrentVideo(null);
            });
        }
    }, [inViewport]);

    const ButtonGroup = ({ next, previous }) => {
        return (
            <div className="py-10">
                <div className="carousel-button-group absolute left-[50%] translate-x-[-50%] bottom-0 flex 2xl:gap-8 gap-4">
                    <button onClick={previous}>
                        <Image className="w-10 2xl:w-[60px] h-10 2xl:h-[60px]" src="/images/ic-prev2.png" width={60} height={60} alt="prev" />
                    </button>
                    <button onClick={next}>
                        <Image className="w-10 2xl:w-[60px] h-10 2xl:h-[60px]" src="/images/ic-next2.png" width={60} height={60} alt="next" />
                    </button>
                </div>
            </div>
        );
    };

    if (isLoading) return <VideoReelSkeleton />;

    return (
        <div className="max-w-screen-4xl mx-auto px-4 lg:px-10 xl:px-14 2xl:px-20  py-8 xl:py-10 rounded-3xl bg-[url(/images/lp/campaign/treatment_bg_img_cropped.png)] bg-repeat">
            <div className="pb-16 lg:pb-16 mb-6 relative">
                <div className="flex justify-center">
                    <h2 className='text-[22px] mb-[1rem] md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-[52px] !leading-[1.2] font-bold text-primary text-center tracking-wide'>
                        Most Trusted <span className={service != 'fertility' ? 'uppercase' : ''}>{service ? service : "IVF"}</span> Clinic in{" "}
                        {center?.center_name
                            .split("-")
                            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                            .join(" ") == 'Hsr' ? center?.center_name
                                .split("-")
                                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                .join(" ").toUpperCase() + ' Layout' : center?.center_name
                                    .split("-")
                                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                    .join(" ")}
                    </h2>
                </div>

                <Carousel 
                    responsive={responsive} 
                    className="my-6 lg:my-12 font-lato position-unset" 
                    partialVisbile 
                    itemClass="px-2"
                    customButtonGroup={<ButtonGroup />}
                    arrows={false}
                    swipeable={true}
                    ssr={true}
                    deviceType={deviceType}
                    autoPlay={false}
                >
                    {ivfClinicsList?.map((video, index) => {
                        return (
                            <div ref={currentVideoRef} key={video?.VideoTitleText}>
                                {video.isSelected == false ? 
                                    <div className="relative rounded-xl overflow-hidden">
                                        <Image 
                                            className="absolute top-0 left-0 h-full w-full object-cover" 
                                            src={video?.videoImage} 
                                            width={359} 
                                            height={0} 
                                            alt={`pregnancyplan${index + 1}`} 
                                        />
                                        <button 
                                            onClick={() => {
                                                let ivfClinicsListTemp = [...ivfClinicsList];
                                                ivfClinicsListTemp?.forEach((videoEle, index) => {
                                                    if (videoEle?.videoId == video?.videoId) {
                                                        ivfClinicsListTemp[index].isSelected = true;
                                                    } else {
                                                        ivfClinicsListTemp[index].isSelected = false;
                                                    }
                                                    setIvfClinicsList(ivfClinicsListTemp);
                                                    setCurrentVideo(video?.videoId);
                                                    stopVideoPlayer();
                                                });
                                            }}
                                            className="p-0 m-0 border-none outline-none absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-20"
                                        >
                                            <Image 
                                                src="/images/home/ic-playbtn.png" 
                                                width={114} 
                                                height={0} 
                                                alt="ic playbtn" 
                                                className="w-10 sm:w-[114px]" 
                                            />
                                        </button>
                                        <div className="relative z-10 aspect-[9/16] flex flex-col justify-end px-2 pb-2 bg-custom-gradient">
                                            <div>
                                                <h4 className="mb-2 text-xs lg:text-xl text-white text-center">
                                                    {video?.VideoTitleText}
                                                </h4>
                                                <h4 className="text-xs  lg:text-lg font-extrabold text-white text-center">
                                                    {video?.language}
                                                </h4>
                                            </div>
                                        </div>
                                    </div> 
                                    : 
                                    <div className="aspect-[9/16]">
                                        <iframe 
                                            onClick={(event) => {
                                                console.log('youEmbedVideoref', setYoutubeEvent(event?.target));
                                            }}
                                            id="player"
                                            style={{ width: "100%", height: "100%" }}
                                            src={`https://www.youtube.com/embed/${video?.videoId}?autoplay=${inViewport ? '1' : '1'}`}
                                            allow="autoplay"
                                            className="aspect-[9/16] w-full h-full rounded-xl"
                                        />
                                    </div>
                                }
                            </div>
                        );
                    })}
                </Carousel>
            </div>
        </div>
    );
}

export default IVFClinicSliderV2;