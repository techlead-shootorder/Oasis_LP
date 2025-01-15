"use client"
import React, { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import { useVideoStore } from "@/app/(general)/home/components/client/YoutubePlayer";
import { useInViewport } from 'react-in-viewport';
import YouTube from "react-youtube";
import { UAParser } from 'ua-parser-js';

const VideoReelSkeleton = () => {
  const getSkeletonCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 4;
      if (window.innerWidth >= 768) return 3;
      return 2;
    }
    return 4;
  };

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

export default function IVFClinicSliderV2({ userAgentString}) {
  const [isLoading, setIsLoading] = useState(true);
  let parser = new UAParser(userAgentString);
  const result = parser.getResult();
  const deviceType = (result.device && result.device.type) || 'desktop';

  const ivfClinicVideos = [
    {
        "id": "1",
        "influencer_name": "Shiva Jyothi",
        "videoId": "HARgKEK7ihA",
        "VideoTitleText": "పిల్లల కోసం ప్రయత్నం | Kids Planning | Shiva Jyothi",
        "videoImage": "/images/home/influencers/Shiva Jyothi.webp",
        "youTubeVideoUrl": "https://youtube.com/shorts/HARgKEK7ihA",
        "isSelected": false,
    },
    {
        "id": "2",
        "influencer_name": "Vithika Sheru",
        "videoId": "TSUFeOgscYM",
        "VideoTitleText": "Everything about pregnancy planning | Vithika Sheru",
        "videoImage": "/images/home/influencers/Vrithika.webp",
        "youTubeVideoUrl": "https://youtube.com/shorts/TSUFeOgscYM",
        "isSelected": false,
    },
    {
        "id": "3",
        "influencer_name": "Marina & Rohit",
        "videoId": "9qT8zaJV56U",
        "VideoTitleText": "Everything about pregnancy planning | Vithika Sheru",
        "videoImage": "/images/home/influencers/Marina & Rohith.webp",
        "youTubeVideoUrl": "https://youtube.com/shorts/9qT8zaJV56U",
        "isSelected": false,
    },
    {
        "id": "4",
        "influencer_name": "Rapid Rashmi (Kannada)",
        "videoId": "p6W3t5FcIyQ",
        "VideoTitleText": "Infertility, Busting Myths about IVF | Rapid Rashmi",
        "videoImage": "/images/home/influencers/Rashmi.webp",
        "youTubeVideoUrl": "https://youtube.com/shorts/p6W3t5FcIyQ",
        "isSelected": false,
    } ];

  const startVideoPlayer = useVideoStore(state => state?.startVideoPlayer);
  const currentVideoRef = useRef(null);
  const [currentVideo, setCurrentVideo] = useState();
  const stopVideoPlayer = useVideoStore(state => state?.stopVideoPlayer);
  const [ivfClinicsList, setIvfClinicsList] = useState(ivfClinicVideos);
  const displayVideoPlayer = useVideoStore(state => state?.displayVideoPlayer);
  const [youTubeEvent, setYoutubeEvent] = useState();

  const { inViewport } = useInViewport(
    currentVideoRef,
    {},
    { disconnectOnLeave: true }
  );

  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    if (ivfClinicVideos?.length) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [ivfClinicVideos]);

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
            <Image 
              className="w-10 2xl:w-[60px] h-10 2xl:h-[60px]" 
              src="/images/ic-prev2.png" 
              width={60} 
              height={60} 
              alt="prev" 
              loading='lazy'
            />
          </button>
          <button onClick={next}>
            <Image 
              className="w-10 2xl:w-[60px] h-10 2xl:h-[60px]" 
              src="/images/ic-next2.png" 
              width={60} 
              height={60} 
              alt="next" 
              loading='lazy'
            />
          </button>
        </div>
      </div>
    );
  };

  if (isLoading) return <VideoReelSkeleton />;

  return (
    <div className="max-w-screen-4xl mx-auto px-4 lg:px-10 xl:px-14 2xl:px-20 py-10">
      <div className="pb-16 lg:pb-16 relative">
        <div className="flex justify-center">
          <h2 className='text-[22px] mb-[1rem] md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-[52px] !leading-[1.2] font-bold text-primary text-center tracking-wide'>
            People Stories
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
          {ivfClinicsList?.map((video, index) => (
            <div ref={currentVideoRef} key={video?.VideoTitleText}>
              {!video.isSelected ? (
                <div className="relative rounded-xl overflow-hidden">
                  <Image 
                    className="absolute top-0 left-0 h-full w-full object-cover" 
                    src={video?.videoImage} 
                    width={359} 
                    height={0} 
                    alt={`pregnancyplan${index + 1}`} 
                    loading='lazy'
                  />
                  <button 
                    onClick={() => {
                      let ivfClinicsListTemp = [...ivfClinicsList];
                      ivfClinicsListTemp?.forEach((videoEle, index) => {
                        if (videoEle?.videoId === video?.videoId) {
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
                      loading='lazy'
                    />
                  </button>
                  <div className="relative z-10 aspect-[9/16] flex flex-col justify-end p-5 lg:py-8 bg-custom-gradient">
                    <div className="">
                      <h4 className="text-[12px] lg:text-xl text-white text-center">
                        {video?.VideoTitleText}
                      </h4>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="aspect-[9/16]">
                  <YouTube 
                    id="player" 
                    videoId={video?.videoId} 
                    opts={opts} 
                    iframeClassName="aspect-[9/16] w-full h-full rounded-xl" 
                    onPlay={(event) => { setYoutubeEvent(event?.target); }} 
                    onPause={(event) => { event?.target?.pauseVideo(); }} 
                  />
                </div>
              )}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}