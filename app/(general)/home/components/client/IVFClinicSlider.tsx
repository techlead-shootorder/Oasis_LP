'use client'
import Image from "next/image";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { useVideoStore } from "./YoutubePlayer";
import { useInViewport } from 'react-in-viewport';
import { useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";
import { UAParser } from 'ua-parser-js';
import StructuredSchemaData, { SchemaDataProps } from "../../../../util/structuredschemadata";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 3000, min: 1280 },
        items: 4,
        slidesToSlide: 4
    },
    desktop: {
        breakpoint: { max: 1279, min: 1024 },
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
        partialVisibilityGutter: 100
    }
};

export default function IVFClinicSlider({ userAgentString }: any) {

    let parser = new UAParser(userAgentString);
    const result = parser.getResult()
    const deviceType = (result.device && result.device.type) || 'desktop';

    const ivfClinicVideos = [
        {
            videoId: 'TSUFeOgscYM',
            videoTitle: "Everything about pregnancy planning",
            videoImage: 'https://images.oasisindia.in/website/home/pregnancyplan1.png',
            videoUrl: 'https://youtube.com/shorts/TSUFeOgscYM',
            isSelected: false,
            thumbnailUrl: '',
            uploadDate: '',
            duration: '',
            schemaDesc: ''
        },
        {
            videoId: 'KDz_mfG1AEo',
            videoTitle: "What are the factors that affect the success rate of egg freezing?",
            videoImage: 'https://images.oasisindia.in/website/home/pregnancyplan2.png',
            videoUrl: 'https://youtu.be/KDz_mfG1AEo',
            isSelected: false,
            thumbnailUrl: '',
            uploadDate: '',
            duration: '',
            schemaDesc: ''
        },
        {
            videoId: 'HARgKEK7ihA',
            videoTitle: "Kids Planning",
            videoImage: 'https://images.oasisindia.in/website/home/pregnancyplan3.png',
            videoUrl: 'https://youtube.com/shorts/HARgKEK7ihA',
            isSelected: false,
            thumbnailUrl: '',
            uploadDate: '',
            duration: '',
            schemaDesc: ''
        },
        {
            videoId: 'p6W3t5FcIyQ',
            videoTitle: "Does the use of cosmetics, perfume, and deo affect fertility in women?",
            videoImage: 'https://images.oasisindia.in/website/home/pregnancyplan5.png',
            videoUrl: 'https://youtube.com/shorts/p6W3t5FcIyQ',
            isSelected: false,
            thumbnailUrl: '',
            uploadDate: '',
            duration: '',
            schemaDesc: ''
        },
        {
            videoId: '9qT8zaJV56U',
            videoTitle: "Get Ready for Parenthood with Advanced Infertility Treatments in 2024 With Oasis Fertility",
            videoImage: 'https://images.oasisindia.in/website/home/Rohit_Marina.png',
            videoUrl: 'https://youtube.com/shorts/9qT8zaJV56U',
            isSelected: false,
            thumbnailUrl: '',
            uploadDate: '',
            duration: '',
            schemaDesc: ''
        }
    ]

    const startVideoPlayer = useVideoStore(state => state?.startVideoPlayer);
    const currentVideoRef = useRef<any>();
    const [currentVideo, setCurrentVideo] = useState<any>();
    const stopVideoPlayer = useVideoStore(state => state?.stopVideoPlayer);
    const [ivfClinicsList, setIvfClinicsList] = useState<any>(ivfClinicVideos);
    const displayVideoPlayer = useVideoStore(state => state?.displayVideoPlayer);
    const [youTubeEvent, setYoutubeEvent] = useState<any>();


    const {
        inViewport,

    } = useInViewport(
        currentVideoRef,
        {},
        { disconnectOnLeave: true }
    );


    const opts = {

        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };


    useEffect(() => {

        displayVideoPlayer(inViewport)
        if (!inViewport && currentVideo) {

            startVideoPlayer(currentVideo, youTubeEvent?.getCurrentTime())
            let ivfClinicsListTemp = [...ivfClinicsList];
            ivfClinicsListTemp?.forEach((videoEle: any, index: number) => {
                if (videoEle?.videoId == currentVideo) {
                    ivfClinicsListTemp[index].isSelected = false;
                }
                setIvfClinicsList(ivfClinicsListTemp);
                setCurrentVideo(null)

            })
        }
    }, [inViewport])


    const ButtonGroup = ({ next, previous }: any) => {
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


    let schemaData: SchemaDataProps = {
        keyValue: "HomeComponentIvfVideos",
        videosList: ivfClinicVideos,
    }

    return (
        <>
            <StructuredSchemaData {...schemaData} />
            <div className="pb-16 lg:pb-16 mb-6 relative">
                <div className="flex items-center">
                    <h2
                        className="text-primary text-[22px] md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-[52px] !leading-[1.2] text-center pr-3">
                        Most Trusted IVF Clinic in India</h2>
                    <hr className="flex-1 border-primary-50" />
                </div>

                <Carousel responsive={responsive} className="my-6 lg:my-12 font-lato position-unset" partialVisbile itemClass="px-2"
                    customButtonGroup={<ButtonGroup />}
                    arrows={false}
                    swipeable={true}
                    ssr={true}
                    deviceType={deviceType}
                    autoPlay>
                    {ivfClinicsList?.map((video: any, index: number) => {
                        return <div ref={currentVideoRef} key={video?.videoTitle} >

                            {((video.isSelected == false)) ? <div className="relative rounded-xl overflow-hidden">
                                <Image className="absolute top-0 left-0 h-full w-full object-cover" src={video?.videoImage} width={359} height={0} alt={`pregnancyplan${index + 1}`} />
                                <button onClick={() => {

                                    let ivfClinicsListTemp = [...ivfClinicsList];
                                    ivfClinicsListTemp?.forEach((videoEle: any, index: number) => {
                                        if (videoEle?.videoId == video?.videoId) {
                                            ivfClinicsListTemp[index].isSelected = true;
                                        } else {
                                            ivfClinicsListTemp[index].isSelected = false;
                                        }
                                        setIvfClinicsList(ivfClinicsListTemp);
                                        setCurrentVideo(video?.videoId);
                                        stopVideoPlayer();
                                    })
                                }}
                                    className="p-0 m-0 border-none outline-none absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-20">
                                    <Image src="https://images.oasisindia.in/website/home/ic-playbtn.png" width={114} height={0} alt="ic playbtn" className="w-10 sm:w-[114px]" />

                                </button>
                                <div className="relative z-10 aspect-[9/16] flex flex-col justify-end p-5 lg:py-8 bg-custom-gradient">
                                   <h4 className="lg:text-xl text-white text-center">
                                            {video?.videoTitle}</h4>
                                </div>
                            </div> : <div className="aspect-[9/16] ">
                                {/* <iframe ref={youEmbedVideoref} onClick={(event:any)=>{console.log('youEmbedVideoref',setYoutubeEvent(event?.target))}}
                                id="player"
                                style={{ width: "100%", height: "100%" }}
                                src={`https://www.youtube.com/embed/${video?.videoId}?autoplay=${inViewport ? '1' : '0'}`}
                                allow="autoplay"
                                className="min-h-[380px] lg:min-h-[580px]"
                            ></iframe> */}
                                <YouTube id="player" videoId={video?.videoId} opts={opts} iframeClassName="aspect-[9/16] w-full h-full rounded-xl" onPlay={(event: any) => { setYoutubeEvent(event?.target) }} onPause={(event: any) => { event?.target?.pauseVideo() }} />
                            </div>
                            }

                        </div>
                    })}

                </Carousel>
            </div>
        </>

    )
}