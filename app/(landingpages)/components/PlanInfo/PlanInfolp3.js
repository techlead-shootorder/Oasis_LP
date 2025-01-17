'use client'
import { useState } from 'react';
// import dynamic from 'next/dynamic';
import Image from 'next/image';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
// import ModalV2 from '../Modal/ModalV2';
import Modallp3 from '../Modal/Modallp3';

// const ModalV2 = dynamic(() => import('../Modal/ModalV2'), {
//     ssr: true,
//   });

const PlanInfo = ({ isMeta, internal }) => {
    const [hoverIndex, setHoverIndex] = useState(null);
    const [isSection1Expanded, setIsSection1Expanded] = useState(false);
    const [isSection2Expanded, setIsSection2Expanded] = useState(false);
    const [isSection3Expanded, setIsSection3Expanded] = useState(false);
    const [isSection4Expanded, setIsSection4Expanded] = useState(false);

    const [isStarterBlur, setIsStarterBlur] = useState(true);
    // const [showChoosPlanButton, setShowChoosePlanButton] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
    const handleOpenModal = () => setShowModal(true);
    return (<>
        <section className="max-w-screen-4xl mx-auto px-4 lg:px-10 xl:px-14 2xl:px-20 mt-6 sm:mt-0 mb-10 lg:mb-16">
            <h2 className='text-[22px] mb-[1rem] md:mb-[2rem] md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-[52px] !leading-[1.2] font-bold text-primary text-center tracking-wide'>
                Oasis Fertility Treatment Cost
            </h2>
            <div className="flex flex-col lg:flex-row w-full gap-3 overflow-hidden">

                {/* STARTER PLAN */}
                <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap ${hoverIndex === null ? 'lg:flex-[2]' : hoverIndex === 0 ? 'lg:flex-[2]' : 'lg:flex-[1]'
                        }`}
                    onMouseEnter={() => setHoverIndex(0)}
                    onMouseLeave={() => setHoverIndex(null)}
                >
                    <div
                        // bg-[url(/images/lp/campaign/s4_bg_img_01.png)]
                        className="bg-[#f3c7da]  bg-cover bg-center rounded-[20px] lg:rounded-[25px] py-[8px] px-[16px] lg:p-8 lg:min-h-[670px]">
                        <div className="flex justify-between">
                            <div className="">
                                <h3 className="text-[28px] lg:text-3xl font-pattaya text-black">Starter</h3>
                                <button
                                    onClick={() => {
                                        setIsSection1Expanded(!isSection1Expanded)
                                        setIsStarterBlur(!isStarterBlur);
                                    }}
                                    className="lg:hidden flex items-center gap-1"
                                >
                                    {isSection1Expanded ? 'Show Less' : 'Show More'}
                                    {isSection1Expanded ? <FaAngleUp /> : <FaAngleDown />}
                                </button>
                                {/* <Image src="/images/lp/campaign/star_img.png" width={32} height={27} loading='lazy' alt="star image" /> */}
                            </div>
                            <div className={`block lg:hidden ${isStarterBlur ? 'blur-[5px] ' : ''}`}>
                                <h3 className="text-lg lg:text-[25px] font-lato font-medium text-[#623162] line-through mt-2">
                                    ₹1,15,000
                                </h3>
                                <div className="flex flex-col mb-1">
                                    <h3 className="text-[30px] lg:text-[50px] text-primary leading-none">₹94,999</h3>
                                    {/* <Image src="/images/lp/campaign/star2.gif" width={138} height={137} alt="star gif" className='w-auto h-[50px]' /> */}
                                    <sub className='hidden lg:block text-xs lg:text-sm text-primary'>(excl. medications)</sub>
                                </div>
                            </div>
                        </div>

                        <div className={`hidden lg:block`}>
                            <h3 className="text-xl lg:text-[25px] font-lato font-medium text-[#623162] line-through mt-2">
                                ₹1,15,000
                            </h3>
                            <div className="flex flex-col mb-1">
                                <h3 className="text-[40px] lg:text-[50px] text-primary leading-none">₹94,999</h3>
                                {/* <Image src="/images/lp/campaign/star2.gif" width={138} height={137} alt="star gif" className='w-auto h-[50px]' /> */}
                                <sub className='hidden lg:block text-xs lg:text-sm text-primary'>(excl. medications)</sub>
                            </div>
                        </div>

                        {/* <button
                            onClick={() => setIsSection1Expanded(!isSection1Expanded)}
                            className="lg:hidden flex items-center gap-1"
                        >
                            {isSection1Expanded ? 'Show Less' : 'Show More'}
                            {isSection1Expanded ? <FaAngleUp /> : <FaAngleDown />}
                        </button> */}

                        <button onClick={handleOpenModal} className="hidden lg:block mt-2 bg-accent px-8 py-3 rounded-lg text-base lg:text-xl font-semibold text-white">
                            CHOOSE PLAN
                        </button>

                        <div className={`lg:mt-5 ${isSection1Expanded ? 'block' : 'hidden'} lg:block`}>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="/images/lp/campaign/right_img.png" loading='lazy' width={24} height={17} alt="Right" />
                                <h3 className="text-base font-lato lg:whitespace-nowrap">Consultation + Scans + Investigation</h3>
                            </div>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="/images/lp/campaign/right_img.png" loading='lazy' width={24} height={17} alt="Right" />
                                <h3 className="text-base font-lato">IVF + ICSI</h3>
                            </div>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="/images/lp/campaign/wrong_img.png" loading='lazy' width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">Stimulations & Medications</h3>
                                    <h4
                                        className="aspect-[74/20] bg-contain min-h-[24px] leading-none inline-flex justify-center items-center bg-center bg-[url(/images/lp/campaign/bg_arrow_img.png)] text-[13px] gap-1 text-white bg-no-repeat">
                                        ₹95,000 <div
                                            className="w-[5px] h-[5px] border border-white bg-[#F3C7DA] rounded-full">
                                        </div>
                                    </h4>
                                </div>
                            </div>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="/images/lp/campaign/wrong_img.png" loading='lazy' width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">GH (If Needed)</h3>
                                    <h4
                                        className="aspect-[74/20] bg-contain min-h-[24px] leading-none inline-flex justify-center items-center bg-center bg-[url(/images/lp/campaign/bg_arrow_img.png)] text-[13px] gap-1 text-white bg-no-repeat">
                                        ₹35,000 <div
                                            className="w-[5px] h-[5px] border border-white bg-[#F3C7DA] rounded-full">
                                        </div>
                                    </h4>
                                </div>
                            </div>
                            {/* <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="/images/lp/campaign/wrong_img.png" loading='lazy' width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">Fresh embryo transfer</h3>
                                    <h4
                                        className="aspect-[74/20] bg-contain min-h-[24px] leading-none inline-flex justify-center items-center bg-center bg-[url(/images/lp/campaign/bg_arrow_img.png)] text-[13px] gap-1 text-white bg-no-repeat">
                                        ₹15,000 <div
                                            className="w-[5px] h-[5px] border border-white bg-[#F3C7DA] rounded-full">
                                        </div>
                                    </h4>
                                </div>
                            </div> */}
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="/images/lp/campaign/wrong_img.png" loading='lazy' width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">Embryo freezing</h3>
                                    <h4
                                        className="aspect-[74/20] bg-contain min-h-[24px] leading-none inline-flex justify-center items-center bg-center bg-[url(/images/lp/campaign/bg_arrow_img.png)] text-[13px] gap-1 text-white bg-no-repeat">
                                        ₹25,000 <div
                                            className="w-[5px] h-[5px] border border-white bg-[#F3C7DA] rounded-full">
                                        </div>
                                    </h4>
                                </div>
                            </div>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="/images/lp/campaign/wrong_img.png" loading='lazy' width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">Frozen Embryo transfer </h3>
                                    <h4
                                        className="aspect-[74/20] bg-contain min-h-[24px] leading-none inline-flex justify-center items-center bg-center bg-[url(/images/lp/campaign/bg_arrow_img.png)] text-[13px] gap-1 text-white bg-no-repeat">
                                        ₹65,000 <div
                                            className="w-[5px] h-[5px] border border-white bg-[#F3C7DA] rounded-full">
                                        </div>
                                    </h4>
                                </div>
                            </div>
                            <div className="max-w-[345px] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="/images/lp/campaign/wrong_img.png" loading='lazy' width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">Second Embryo transfer</h3>
                                    <h4
                                        className="aspect-[74/20] bg-contain min-h-[24px] leading-none inline-flex justify-center items-center bg-center bg-[url(/images/lp/campaign/bg_arrow_img.png)] text-[13px] gap-1 text-white bg-no-repeat">
                                        ₹55,000 <div
                                            className="w-[5px] h-[5px] border border-white bg-[#F3C7DA] rounded-full">
                                        </div>
                                    </h4>
                                </div>
                            </div>
                            <button onClick={handleOpenModal} className="block lg:hidden mt-2 bg-accent px-8 py-3 rounded-lg text-base lg:text-xl font-semibold text-white w-full">
                                CHOOSE PLAN
                            </button>
                        </div>

                        <button onClick={handleOpenModal} className="hidden bg-accent px-8 py-3 w-full text-center rounded-xl lg:hidden mt-2 text-base lg:text-xl font-semibold text-white">
                            CHOOSE PLAN
                        </button>
                    </div>
                </div>

                {/* VALUE PLAN */}
                <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap ${hoverIndex === 1 ? 'lg:flex-[2] lg:ml-auto' : 'lg:flex-[1]'
                        }`}
                    onMouseEnter={() => setHoverIndex(1)}
                    onMouseLeave={() => setHoverIndex(null)}
                >
                    <div
                        // bg-[url(/images/lp/campaign/s4_bg_img_01.png)]
                        className="bg-[#c893c2]  bg-cover bg-center rounded-[20px] lg:rounded-[25px] py-[8px] px-[16px] lg:p-8 lg:min-h-[670px]">
                        <div className="flex justify-between">
                            <div className="">
                                <h3 className="text-[28px] lg:text-3xl font-pattaya text-black">Comprehensive </h3>
                                <button
                                    onClick={() => setIsSection2Expanded(!isSection2Expanded)}
                                    className="lg:hidden flex items-center gap-1"
                                >
                                    {isSection2Expanded ? 'Show Less' : 'Show More'}
                                    {isSection2Expanded ? <FaAngleUp /> : <FaAngleDown />}
                                </button>
                                {/* <Image src="/images/lp/campaign/star_img.png" width={32} height={27} loading='lazy' alt="star image" /> */}
                            </div>
                            <div className='block lg:hidden blur-[5px]'>
                                <h3 className="text-lg lg:text-[25px] font-lato font-medium text-[#623162] line-through mt-2">
                                    ₹1,55,000
                                </h3>
                                <div className="flex flex-col mb-1">
                                    <h3 className="text-[30px] lg:text-[50px] text-white leading-none">₹1,44,999</h3>
                                    {/* <Image src="/images/lp/campaign/star2.gif" width={138} height={137} alt="star gif" className='w-auto h-[50px]' /> */}
                                    <sub className='hidden lg:block text-xs lg:text-sm text-primary'>(excl. medications)</sub>
                                </div>
                            </div>
                        </div>

                        <div className='hidden lg:block blur-[8px]'>
                            <h3 className="text-xl lg:text-[25px] font-lato font-medium text-[#623162] line-through mt-2">
                                ₹1,55,000
                            </h3>
                            <div className="flex flex-col mb-1">
                                <h3 className="text-[40px] lg:text-[50px] text-white leading-none">₹1,44,999</h3>
                                {/* <Image src="/images/lp/campaign/star2.gif" width={138} height={137} alt="star gif" className='w-auto h-[50px]' /> */}
                                <sub className='hidden lg:block text-xs lg:text-sm text-white'>(excl. medications)</sub>
                            </div>
                        </div>

                        {/* <button
                            onClick={() => setIsSection1Expanded(!isSection1Expanded)}
                            className="lg:hidden flex items-center gap-1"
                        >
                            {isSection1Expanded ? 'Show Less' : 'Show More'}
                            {isSection1Expanded ? <FaAngleUp /> : <FaAngleDown />}
                        </button> */}

                        <button onClick={handleOpenModal} className="hidden lg:block mt-2 bg-accent px-8 py-3 rounded-lg text-base lg:text-xl font-semibold text-white">
                            UNLOCK OFFER
                        </button>

                        <div className={`lg:mt-5 ${isSection2Expanded ? 'block' : 'hidden'} lg:block lg:group`}>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="/images/lp/campaign/right_img.png" loading='lazy' width={24} height={17} alt="Right" />
                                <h3 className="text-base font-lato">Consultation + Scans + Investigation</h3>
                            </div>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="/images/lp/campaign/right_img.png" loading='lazy' width={24} height={17} alt="Right" />
                                <h3 className="text-base font-latolg:whitespace-nowrap lg:overflow-hidden">IVF + ICSI</h3>
                            </div>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="/images/lp/campaign/wrong_img.png" loading='lazy' width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">Stimulations & Medications</h3>
                                    <h4
                                        className="blur-[3px] aspect-[74/20] bg-contain min-h-[24px] leading-none inline-flex justify-center items-center bg-center bg-[url(/images/lp/campaign/bg_arrow_img.png)] text-[13px] gap-1 text-white bg-no-repeat">
                                        ₹95,000 <div
                                            className="w-[5px] h-[5px] border border-white bg-[#F3C7DA] rounded-full">
                                        </div>
                                    </h4>
                                </div>
                            </div>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="/images/lp/campaign/wrong_img.png" loading='lazy' width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">GH (If Needed)</h3>
                                    <h4
                                        className="blur-[3px] aspect-[74/20] bg-contain min-h-[24px] leading-none inline-flex justify-center items-center bg-center bg-[url(/images/lp/campaign/bg_arrow_img.png)] text-[13px] gap-1 text-white bg-no-repeat">
                                        ₹35,000 <div
                                            className="w-[5px] h-[5px] border border-white bg-[#F3C7DA] rounded-full">
                                        </div>
                                    </h4>
                                </div>
                            </div>
                            {/* <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="/images/lp/campaign/wrong_img.png" loading='lazy' width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">Fresh embryo transfer</h3>
                                    <h4
                                        className="blur-[3px] aspect-[74/20] bg-contain min-h-[24px] leading-none inline-flex justify-center items-center bg-center bg-[url(/images/lp/campaign/bg_arrow_img.png)] text-[13px] gap-1 text-white bg-no-repeat">
                                        ₹15,000 <div
                                            className="w-[5px] h-[5px] border border-white bg-[#F3C7DA] rounded-full">
                                        </div>
                                    </h4>
                                </div>
                            </div> */}
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="/images/lp/campaign/right_img.png" loading='lazy' width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">Embryo freezing</h3>
                                </div>
                            </div>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="/images/lp/campaign/right_img.png" loading='lazy' width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">Frozen Embryo transfer </h3>
                                </div>
                            </div>
                            <div className="max-w-[345px] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="/images/lp/campaign/wrong_img.png" loading='lazy' width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">Second Embryo transfer</h3>
                                    <h4
                                        className="blur-[3px] aspect-[74/20] bg-contain min-h-[24px] leading-none inline-flex justify-center items-center bg-center bg-[url(/images/lp/campaign/bg_arrow_img.png)] text-[13px] gap-1 text-white bg-no-repeat">
                                        ₹55,000 <div
                                            className="w-[5px] h-[5px] border border-white bg-[#F3C7DA] rounded-full">
                                        </div>
                                    </h4>
                                </div>
                            </div>
                            <button onClick={handleOpenModal} className="block lg:hidden mt-2 bg-accent px-8 py-3 rounded-lg text-base lg:text-xl font-semibold text-white w-full">
                                UNLOCK OFFER
                            </button>
                        </div>

                        <button onClick={handleOpenModal} className="hidden bg-accent px-8 py-3 w-full text-center rounded-xl lg:hidden mt-2 text-base lg:text-xl font-semibold text-white">
                            UNLOCK OFFER
                        </button>
                    </div>
                </div>

                {/* COMPREHENSIVE PLAN */}
                <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap ${hoverIndex === 2 ? 'lg:flex-[2] lg:ml-auto' : 'lg:flex-[1]'
                        }`}
                    onMouseEnter={() => setHoverIndex(2)}
                    onMouseLeave={() => setHoverIndex(null)}
                >
                    <div
                        // bg-[url(/images/lp/campaign/s4_bg_img_01.png)]
                        className="bg-[#c880b0]  bg-cover bg-center rounded-[20px] lg:rounded-[25px] py-[8px] px-[16px] lg:p-8 lg:min-h-[670px]">
                        <div className="flex justify-between">
                            <div className="">
                                <h3 className="text-[28px] lg:text-3xl font-pattaya text-black">Comprehensive Rx</h3>
                                <button
                                    onClick={() => setIsSection3Expanded(!isSection3Expanded)}
                                    className="lg:hidden flex items-center gap-1 text-white"
                                >
                                    {isSection3Expanded ? 'Show Less' : 'Show More'}
                                    {isSection3Expanded ? <FaAngleUp /> : <FaAngleDown />}
                                </button>
                                {/* <Image src="/images/lp/campaign/star_img.png" width={32} height={27} loading='lazy' alt="star image" /> */}
                            </div>
                            <div className='block lg:hidden blur-[5px]'>
                                <h3 className="text-lg lg:text-[25px] font-lato font-medium text-[#623162] line-through mt-2">
                                    ₹1,95,000
                                </h3>
                                <div className="flex flex-col mb-1">
                                    <h3 className="text-[30px] lg:text-[50px] text-white leading-none">₹1,84,999</h3>
                                    {/* <Image src="/images/lp/campaign/star2.gif" width={138} height={137} alt="star gif" className='w-auto h-[50px]' /> */}
                                    <sub className='hidden lg:block text-xs lg:text-sm text-primary'>(incl. medications)</sub>
                                </div>
                            </div>
                        </div>

                        <div className='hidden lg:block blur-[8px]'>
                            <h3 className="text-xl lg:text-[25px] font-lato font-medium text-[#623162] line-through mt-2">
                                ₹1,95,000
                            </h3>
                            <div className="flex flex-col mb-1">
                                <h3 className="text-[40px] lg:text-[50px] text-white leading-none">₹1,84,999</h3>
                                {/* <Image src="/images/lp/campaign/star2.gif" width={138} height={137} alt="star gif" className='w-auto h-[50px]' /> */}
                                <sub className='hidden lg:block text-xs lg:text-sm text-white'>(incl. medications)</sub>
                            </div>
                        </div>

                        {/* <button
                            onClick={() => setIsSection1Expanded(!isSection1Expanded)}
                            className="lg:hidden flex items-center gap-1"
                        >
                            {isSection1Expanded ? 'Show Less' : 'Show More'}
                            {isSection1Expanded ? <FaAngleUp /> : <FaAngleDown />}
                        </button> */}

                        <button onClick={handleOpenModal} className="hidden lg:block mt-2 bg-accent px-8 py-3 rounded-lg text-base lg:text-xl font-semibold text-white">
                            UNLOCK OFFER
                        </button>

                        <div className={`lg:mt-5 ${isSection3Expanded ? 'block' : 'hidden'} lg:block text-gray-200 lg:group`}>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="/images/lp/campaign/right_img.png" loading='lazy' width={24} height={17} alt="Right" />
                                <h3 className="text-base font-lato">Consultation + Scans + Investigation</h3>
                            </div>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="/images/lp/campaign/right_img.png" loading='lazy' width={24} height={17} alt="Right" />
                                <h3 className="text-base font-lato">IVF + ICSI</h3>
                            </div>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="/images/lp/campaign/right_img.png" loading='lazy' width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">Stimulations & Medications</h3>
                                </div>
                            </div>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="/images/lp/campaign/wrong_img.png" loading='lazy' width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">GH (If Needed)</h3>
                                    <h4
                                        className="blur-[3px] aspect-[74/20] bg-contain min-h-[24px] leading-none inline-flex justify-center items-center bg-center bg-[url(/images/lp/campaign/bg_arrow_img.png)] text-[13px] gap-1 text-white bg-no-repeat">
                                        ₹35,000 <div
                                            className="w-[5px] h-[5px] border border-white bg-[#F3C7DA] rounded-full">
                                        </div>
                                    </h4>
                                </div>
                            </div>
                            {/* <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="/images/lp/campaign/right_img.png" loading='lazy' width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">Fresh embryo transfer</h3>
                                </div>
                            </div> */}
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="/images/lp/campaign/right_img.png" loading='lazy' width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">Embryo freezing</h3>
                                </div>
                            </div>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="/images/lp/campaign/right_img.png" loading='lazy' width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">Frozen Embryo transfer </h3>
                                </div>
                            </div>
                            <div className="max-w-[345px] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="/images/lp/campaign/wrong_img.png" loading='lazy' width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">Second Embryo transfer</h3>
                                    <h4
                                        className="blur-[3px] aspect-[74/20] bg-contain min-h-[24px] leading-none inline-flex justify-center items-center bg-center bg-[url(/images/lp/campaign/bg_arrow_img.png)] text-[13px] gap-1 text-white bg-no-repeat">
                                        ₹55,000 <div
                                            className="w-[5px] h-[5px] border border-white bg-[#F3C7DA] rounded-full">
                                        </div>
                                    </h4>
                                </div>
                            </div>
                            <button onClick={handleOpenModal} className="block lg:hidden mt-2 bg-accent px-8 py-3 rounded-lg text-base lg:text-xl font-semibold text-white w-full">
                            UNLOCK OFFER
                            </button>
                        </div>

                        <button onClick={handleOpenModal} className="hidden bg-accent px-8 py-3 w-full text-center rounded-xl lg:hidden mt-2 text-base lg:text-xl font-semibold text-white">
                        UNLOCK OFFER
                        </button>
                    </div>
                </div>

                {/*  ULTIMATE PLAN */}
                <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap ${hoverIndex === 3 ? 'lg:flex-[2] lg:ml-auto' : 'lg:flex-[1]'
                        }`}
                    onMouseEnter={() => setHoverIndex(3)}
                    onMouseLeave={() => setHoverIndex(null)}
                >
                    <div
                        // bg-[url(/images/lp/campaign/s4_bg_img_01.png)]
                        className="bg-[#905580]  bg-cover bg-center rounded-[20px] lg:rounded-[25px] py-[8px] px-[16px] lg:p-8 lg:min-h-[670px]">
                        <div className="flex justify-between">
                            <div className="">
                                <h3 className="text-[28px] lg:text-3xl font-pattaya text-black">Ultimate Rx </h3>
                                <button
                                    onClick={() => setIsSection4Expanded(!isSection4Expanded)}
                                    className="lg:hidden flex items-center gap-1 text-white "
                                >
                                    {isSection4Expanded ? 'Show Less' : 'Show More'}
                                    {isSection4Expanded ? <FaAngleUp /> : <FaAngleDown />}
                                </button>
                                {/* <Image src="/images/lp/campaign/star_img.png" width={32} height={27} loading='lazy' alt="star image" /> */}
                            </div>
                            <div className='block lg:hidden blur-[5px]'>
                                <h3 className="text-lg lg:text-[25px] font-lato font-medium text-[#623162] line-through mt-2">
                                ₹3,15,000
                                </h3>
                                <div className="flex flex-col mb-1">
                                    <h3 className="text-[30px] lg:text-[50px] text-white leading-none">₹2,94,999</h3>
                                    {/* <Image src="/images/lp/campaign/star2.gif" width={138} height={137} alt="star gif" className='w-auto h-[50px]' /> */}
                                    <sub className='hidden lg:block text-xs lg:text-sm text-primary'>(incl. medications)</sub>
                                </div>
                            </div>
                        </div>

                        <div className='hidden lg:block blur-[8px]'>
                            <h3 className="text-xl lg:text-[25px] font-lato font-medium text-[#623162] line-through mt-2">
                            ₹3,15,000
                            </h3>
                            <div className="flex flex-col mb-1">
                                <h3 className="text-[40px] lg:text-[50px] text-white leading-none">₹2,49,999</h3>
                                {/* <Image src="/images/lp/campaign/star2.gif" width={138} height={137} alt="star gif" className='w-auto h-[50px]' /> */}
                                <sub className='hidden lg:block text-xs lg:text-sm text-white'>(incl. medications)</sub>
                            </div>
                        </div>

                        {/* <button
                            onClick={() => setIsSection1Expanded(!isSection1Expanded)}
                            className="lg:hidden flex items-center gap-1"
                        >
                            {isSection1Expanded ? 'Show Less' : 'Show More'}
                            {isSection1Expanded ? <FaAngleUp /> : <FaAngleDown />}
                        </button> */}

                        <button onClick={handleOpenModal} className="hidden lg:block mt-2 bg-accent px-8 py-3 rounded-lg text-base lg:text-xl font-semibold text-white">
                        UNLOCK OFFER
                        </button>

                        <div className={`lg:mt-5 ${isSection4Expanded ? 'block' : 'hidden'} lg:block text-white lg:group`}>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="/images/lp/campaign/right_img.png" loading='lazy' width={24} height={17} alt="Right" />
                                <h3 className="text-base font-lato">Consultation + Scans + Investigation</h3>
                            </div>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="/images/lp/campaign/right_img.png" loading='lazy' width={24} height={17} alt="Right" />
                                <h3 className="text-base font-lato">IVF + ICSI</h3>
                            </div>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="/images/lp/campaign/right_img.png" loading='lazy' width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">GH (If Needed)</h3>
                                </div>
                            </div>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="/images/lp/campaign/right_img.png" loading='lazy' width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">Stimulations & Medications</h3>
                                </div>
                            </div>
                            {/* <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="/images/lp/campaign/right_img.png" loading='lazy' width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">Fresh embryo transfer</h3>
                                </div>
                            </div> */}
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="/images/lp/campaign/right_img.png" loading='lazy' width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">Embryo freezing</h3>
                                </div>
                            </div>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="/images/lp/campaign/right_img.png" loading='lazy' width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">Frozen Embryo transfer </h3>
                                </div>
                            </div>
                            <div className="max-w-[345px] pt-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="/images/lp/campaign/right_img.png" loading='lazy' width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">Second Embryo transfer</h3>
                                </div>
                            </div>
                            <button onClick={handleOpenModal} className="block lg:hidden mt-2 bg-accent px-8 py-3 rounded-lg text-base lg:text-xl font-semibold text-white w-full">
                            UNLOCK OFFER
                            </button>
                        </div>

                        <button onClick={handleOpenModal} className="hidden bg-accent px-8 py-3 w-full text-center rounded-xl lg:hidden mt-2 text-base lg:text-xl font-semibold text-white">
                        UNLOCK OFFER
                        </button>
                    </div>
                </div>
            </div>
        </section >

        {showModal && (
            <Modallp3
                isOpen={showModal}
                onClose={handleCloseModal}
                isMeta={isMeta}
                internal={internal}
            />
        )
        }
    </>
    )
}

export default PlanInfo;