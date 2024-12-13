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

const PlanInfo = ({ isMeta }) => {
    const [hoverIndex, setHoverIndex] = useState(null);
    const [isSection1Expanded, setIsSection1Expanded] = useState(false);
    const [isSection2Expanded, setIsSection2Expanded] = useState(false);
    const [isSection3Expanded, setIsSection3Expanded] = useState(false);
    const [isSection4Expanded, setIsSection4Expanded] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
    const handleOpenModal = () => setShowModal(true);
    return (<>
        <section className="max-w-screen-4xl mx-auto px-4 lg:px-10 xl:px-14 2xl:px-20 mb-10 lg:mb-16">
            <h2 className='text-[22px] mb-[1rem] md:mb-[2rem] md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-[52px] !leading-[1.2] font-bold text-primary text-center tracking-wide'>
            Oasis Fertility Treatment Cost
            </h2>
            <div className="flex flex-col lg:flex-row w-full gap-3 overflow-hidden">
                <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap ${hoverIndex === null ? 'lg:flex-[2]' : hoverIndex === 0 ? 'lg:flex-[2]' : 'lg:flex-[1]'
                        }`}
                    onMouseEnter={() => setHoverIndex(0)}
                    onMouseLeave={() => setHoverIndex(null)}
                >
                    <div
                        // bg-[url(https://images.oasisindia.in/website/lp/campaign/s4_bg_img_01.png)]
                        className="bg-[#f3c7da]  bg-cover bg-center rounded-[20px] lg:rounded-[25px] p-6 lg:p-8 lg:min-h-[670px]">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-1">
                                <h3 className="text-[40px] lg:text-3xl font-pattaya text-black">Value Plan</h3>
                                <Image src="https://images.oasisindia.in/website/lp/campaign/star_img.png" width={32} height={27} alt="star image" />
                            </div>
                        </div>
                        <h3 className="text-xl lg:text-[25px] font-lato font-medium text-[#623162] line-through mt-2">
                            ₹1,15,000
                        </h3>
                        <div className="flex flex-col mb-1">
                            <h3 className="text-[40px] lg:text-[50px] text-primary leading-none">₹94,999</h3>
                            {/* <Image src="https://images.oasisindia.in/website/lp/campaign/star2.gif" width={138} height={137} alt="star gif" className='w-auto h-[50px]' /> */}
                            <sub className='text-xs lg:text-sm text-primary'>(excl. medications)</sub>
                        </div>

                        <button
                            onClick={() => setIsSection1Expanded(!isSection1Expanded)}
                            className="lg:hidden flex items-center gap-1"
                        >
                            {isSection1Expanded ? 'Show Less' : 'Show More'}
                            {isSection1Expanded ? <FaAngleUp /> : <FaAngleDown />}
                        </button>

                        <button onClick={handleOpenModal} className="hidden lg:block mt-2 bg-accent px-8 py-3 rounded-lg text-base lg:text-xl font-semibold text-white">
                            CHOOSE PLAN
                        </button>

                        <div className={`lg:mt-5 ${isSection1Expanded ? 'block' : 'hidden'} lg:block`}>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="https://images.oasisindia.in/website/lp/campaign/right_img.png" width={24} height={17} alt="Right" />
                                <h3 className="text-base font-lato lg:whitespace-nowrap">Consultation + Scans + Investigation</h3>
                            </div>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="https://images.oasisindia.in/website/lp/campaign/right_img.png" width={24} height={17} alt="Right" />
                                <h3 className="text-base font-lato">IVF + ICSI</h3>
                            </div>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="https://images.oasisindia.in/website/lp/campaign/wrong_img.png" width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">Stimulations & Medications</h3>
                                    <h4
                                        className="aspect-[74/20] bg-contain min-h-[24px] leading-none inline-flex justify-center items-center bg-center bg-[url(https://images.oasisindia.in/website/lp/campaign/bg_arrow_img.png)] text-[13px] gap-1 text-white bg-no-repeat">
                                        ₹95,000 <div
                                            className="w-[5px] h-[5px] border border-white bg-[#F3C7DA] rounded-full">
                                        </div>
                                    </h4>
                                </div>
                            </div>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="https://images.oasisindia.in/website/lp/campaign/wrong_img.png" width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">FSH</h3>
                                    <h4
                                        className="aspect-[74/20] bg-contain min-h-[24px] leading-none inline-flex justify-center items-center bg-center bg-[url(https://images.oasisindia.in/website/lp/campaign/bg_arrow_img.png)] text-[13px] gap-1 text-white bg-no-repeat">
                                        ₹35,000 <div
                                            className="w-[5px] h-[5px] border border-white bg-[#F3C7DA] rounded-full">
                                        </div>
                                    </h4>
                                </div>
                            </div>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="https://images.oasisindia.in/website/lp/campaign/wrong_img.png" width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">Fresh embryo transfer</h3>
                                    <h4
                                        className="aspect-[74/20] bg-contain min-h-[24px] leading-none inline-flex justify-center items-center bg-center bg-[url(https://images.oasisindia.in/website/lp/campaign/bg_arrow_img.png)] text-[13px] gap-1 text-white bg-no-repeat">
                                        ₹15,000 <div
                                            className="w-[5px] h-[5px] border border-white bg-[#F3C7DA] rounded-full">
                                        </div>
                                    </h4>
                                </div>
                            </div>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="https://images.oasisindia.in/website/lp/campaign/wrong_img.png" width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">Embryo freezing</h3>
                                    <h4
                                        className="aspect-[74/20] bg-contain min-h-[24px] leading-none inline-flex justify-center items-center bg-center bg-[url(https://images.oasisindia.in/website/lp/campaign/bg_arrow_img.png)] text-[13px] gap-1 text-white bg-no-repeat">
                                        ₹25,000 <div
                                            className="w-[5px] h-[5px] border border-white bg-[#F3C7DA] rounded-full">
                                        </div>
                                    </h4>
                                </div>
                            </div>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="https://images.oasisindia.in/website/lp/campaign/wrong_img.png" width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">Frozen Embryo transfer </h3>
                                    <h4
                                        className="aspect-[74/20] bg-contain min-h-[24px] leading-none inline-flex justify-center items-center bg-center bg-[url(https://images.oasisindia.in/website/lp/campaign/bg_arrow_img.png)] text-[13px] gap-1 text-white bg-no-repeat">
                                        ₹65,000 <div
                                            className="w-[5px] h-[5px] border border-white bg-[#F3C7DA] rounded-full">
                                        </div>
                                    </h4>
                                </div>
                            </div>
                            <div className="max-w-[345px] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="https://images.oasisindia.in/website/lp/campaign/wrong_img.png" width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">Second Embryo transfer</h3>
                                    <h4
                                        className="aspect-[74/20] bg-contain min-h-[24px] leading-none inline-flex justify-center items-center bg-center bg-[url(https://images.oasisindia.in/website/lp/campaign/bg_arrow_img.png)] text-[13px] gap-1 text-white bg-no-repeat">
                                        ₹55,000 <div
                                            className="w-[5px] h-[5px] border border-white bg-[#F3C7DA] rounded-full">
                                        </div>
                                    </h4>
                                </div>
                            </div>
                        </div>

                        <button onClick={handleOpenModal} className="bg-accent px-8 py-3 w-full text-center rounded-xl lg:hidden mt-2 text-base lg:text-xl font-semibold text-white">
                            CHOOSE PLAN
                        </button>
                    </div>
                </div>
                <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap ${hoverIndex === 1 ? 'lg:flex-[2] lg:ml-auto' : 'lg:flex-[1]'
                        }`}
                    onMouseEnter={() => setHoverIndex(1)}
                    onMouseLeave={() => setHoverIndex(null)}
                >


                    <div
                        // bg-[url(https://images.oasisindia.in/website/lp/campaign/s4_bg_img_02.png)]
                        className="bg-[#c893c2] bg-cover bg-center rounded-[20px] lg:rounded-[25px] p-6 lg:p-8 lg:min-h-[670px]">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-1">
                                <h3 className="text-[40px] lg:text-3xl font-pattaya text-black">Service plan</h3>
                                <Image src="https://images.oasisindia.in/website/lp/campaign/star_img.png" width={32} height={27} alt="star image" />
                            </div>
                        </div>
                        <h3 className="text-xl lg:text-[25px] font-lato font-medium text-[#623162] line-through mt-2">
                            ₹1,55,000
                        </h3>
                        <div className="flex flex-col mb-1">
                            <h3 className="text-[40px] lg:text-[50px] text-white leading-none">₹1,44,999</h3>
                            <sub className='text-xs lg:text-sm text-white'>(excl. medications)</sub>
                        </div>

                        <button
                            onClick={() => setIsSection2Expanded(!isSection2Expanded)}
                            className="lg:hidden flex items-center gap-1"
                        >
                            {isSection2Expanded ? 'Show Less' : 'Show More'}
                            {isSection2Expanded ? <FaAngleUp /> : <FaAngleDown />}
                        </button>

                        <button onClick={handleOpenModal} className="hidden lg:block mt-2 bg-accent px-8 py-3 rounded-lg text-base lg:text-xl font-semibold text-white">
                            CHOOSE PLAN
                        </button>

                        <div className={`lg:mt-5 ${isSection2Expanded ? 'block' : 'hidden'} lg:block lg:group`}>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="https://images.oasisindia.in/website/lp/campaign/right_img.png" width={24} height={17} alt="Right" />
                                <h3 className="text-base font-lato">Consultation + Scans + Investigation</h3>
                            </div>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="https://images.oasisindia.in/website/lp/campaign/right_img.png" width={24} height={17} alt="Right" />
                                <h3 className="text-base font-latolg:whitespace-nowrap lg:overflow-hidden">IVF + ICSI</h3>
                            </div>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="https://images.oasisindia.in/website/lp/campaign/wrong_img.png" width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">Stimulations & Medications</h3>
                                    <h4
                                        className="aspect-[74/20] bg-contain min-h-[24px] leading-none inline-flex justify-center items-center bg-center bg-[url(https://images.oasisindia.in/website/lp/campaign/bg_arrow_img.png)] text-[13px] gap-1 text-white bg-no-repeat">
                                        ₹95,000 <div
                                            className="w-[5px] h-[5px] border border-white bg-[#F3C7DA] rounded-full">
                                        </div>
                                    </h4>
                                </div>
                            </div>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="https://images.oasisindia.in/website/lp/campaign/wrong_img.png" width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">FSH</h3>
                                    <h4
                                        className="aspect-[74/20] bg-contain min-h-[24px] leading-none inline-flex justify-center items-center bg-center bg-[url(https://images.oasisindia.in/website/lp/campaign/bg_arrow_img.png)] text-[13px] gap-1 text-white bg-no-repeat">
                                        ₹35,000 <div
                                            className="w-[5px] h-[5px] border border-white bg-[#F3C7DA] rounded-full">
                                        </div>
                                    </h4>
                                </div>
                            </div>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="https://images.oasisindia.in/website/lp/campaign/wrong_img.png" width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">Fresh embryo transfer</h3>
                                    <h4
                                        className="aspect-[74/20] bg-contain min-h-[24px] leading-none inline-flex justify-center items-center bg-center bg-[url(https://images.oasisindia.in/website/lp/campaign/bg_arrow_img.png)] text-[13px] gap-1 text-white bg-no-repeat">
                                        ₹15,000 <div
                                            className="w-[5px] h-[5px] border border-white bg-[#F3C7DA] rounded-full">
                                        </div>
                                    </h4>
                                </div>
                            </div>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="https://images.oasisindia.in/website/lp/campaign/right_img.png" width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">Embryo freezing</h3>
                                </div>
                            </div>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="https://images.oasisindia.in/website/lp/campaign/right_img.png" width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">Frozen Embryo transfer </h3>
                                </div>
                            </div>
                            <div className="max-w-[345px] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="https://images.oasisindia.in/website/lp/campaign/wrong_img.png" width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">Second Embryo transfer</h3>
                                    <h4
                                        className="aspect-[74/20] bg-contain min-h-[24px] leading-none inline-flex justify-center items-center bg-center bg-[url(https://images.oasisindia.in/website/lp/campaign/bg_arrow_img.png)] text-[13px] gap-1 text-white bg-no-repeat">
                                        ₹55,000 <div
                                            className="w-[5px] h-[5px] border border-white bg-[#F3C7DA] rounded-full">
                                        </div>
                                    </h4>
                                </div>
                            </div>
                        </div>

                        <button onClick={handleOpenModal} className="bg-accent px-8 py-3 w-full text-center rounded-xl lg:hidden mt-2 text-base lg:text-xl font-semibold text-white">
                            CHOOSE PLAN
                        </button>
                    </div>
                </div>
                <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap ${hoverIndex === 2 ? 'lg:flex-[2] lg:ml-auto' : 'lg:flex-[1]'
                        }`}
                    onMouseEnter={() => setHoverIndex(2)}
                    onMouseLeave={() => setHoverIndex(null)}
                >
                    <div
                        // bg-[url(https://images.oasisindia.in/website/lp/campaign/s4_bg_img_03.png)]
                        className="bg-[#c880b0] rounded-[20px] lg:rounded-[25px] p-6 lg:p-8 lg:min-h-[670px]">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-1">
                                <h3 className="text-[40px] lg:text-3xl font-pattaya text-black">Flexible Plan</h3>
                                <Image src="https://images.oasisindia.in/website/lp/campaign/star_img.png" width={32} height={27} alt="star image" />
                            </div>
                        </div>
                        <h3 className="text-xl lg:text-[25px] font-lato font-medium text-[#623162] line-through mt-2">
                            ₹1,95,000
                        </h3>
                        <div className="flex flex-col mb-1">
                            <h3 className="text-[40px] lg:text-[50px] text-white leading-none">₹1,79,999</h3>
                            <sub className='text-xs lg:text-sm text-white'>(incl. medications)</sub>

                        </div>

                        <button
                            onClick={() => setIsSection3Expanded(!isSection3Expanded)}
                            className="lg:hidden flex items-center gap-1 text-white"
                        >
                            {isSection3Expanded ? 'Show Less' : 'Show More'}
                            {isSection3Expanded ? <FaAngleUp /> : <FaAngleDown />}
                        </button>

                        <button onClick={handleOpenModal} className="hidden lg:block mt-2 bg-accent px-8 py-3 rounded-lg text-base lg:text-xl font-semibold text-white">
                            CHOOSE PLAN
                        </button>

                        <div className={`lg:mt-5 ${isSection3Expanded ? 'block' : 'hidden'} lg:block text-gray-200 lg:group`}>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="https://images.oasisindia.in/website/lp/campaign/right_img.png" width={24} height={17} alt="Right" />
                                <h3 className="text-base font-lato">Consultation + Scans + Investigation</h3>
                            </div>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="https://images.oasisindia.in/website/lp/campaign/right_img.png" width={24} height={17} alt="Right" />
                                <h3 className="text-base font-lato">IVF + ICSI</h3>
                            </div>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="https://images.oasisindia.in/website/lp/campaign/right_img.png" width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">Stimulations & Medications</h3>
                                </div>
                            </div>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="https://images.oasisindia.in/website/lp/campaign/wrong_img.png" width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">FSH</h3>
                                    <h4
                                        className="aspect-[74/20] bg-contain min-h-[24px] leading-none inline-flex justify-center items-center bg-center bg-[url(https://images.oasisindia.in/website/lp/campaign/bg_arrow_img.png)] text-[13px] gap-1 text-white bg-no-repeat">
                                        ₹35,000 <div
                                            className="w-[5px] h-[5px] border border-white bg-[#F3C7DA] rounded-full">
                                        </div>
                                    </h4>
                                </div>
                            </div>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="https://images.oasisindia.in/website/lp/campaign/right_img.png" width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">Fresh embryo transfer</h3>
                                </div>
                            </div>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="https://images.oasisindia.in/website/lp/campaign/right_img.png" width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">Embryo freezing</h3>
                                </div>
                            </div>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="https://images.oasisindia.in/website/lp/campaign/right_img.png" width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">Frozen Embryo transfer </h3>
                                </div>
                            </div>
                            <div className="max-w-[345px] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="https://images.oasisindia.in/website/lp/campaign/wrong_img.png" width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">Second Embryo transfer</h3>
                                    <h4
                                        className="aspect-[74/20] bg-contain min-h-[24px] leading-none inline-flex justify-center items-center bg-center bg-[url(https://images.oasisindia.in/website/lp/campaign/bg_arrow_img.png)] text-[13px] gap-1 text-white bg-no-repeat">
                                        ₹55,000 <div
                                            className="w-[5px] h-[5px] border border-white bg-[#F3C7DA] rounded-full">
                                        </div>
                                    </h4>
                                </div>
                            </div>
                        </div>

                        <button onClick={handleOpenModal} className="bg-accent px-8 py-3 w-full text-center rounded-xl lg:hidden mt-2 text-base lg:text-xl font-semibold text-white">
                            CHOOSE PLAN
                        </button>
                    </div>
                </div>
                <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap ${hoverIndex === 3 ? 'lg:flex-[2] lg:ml-auto' : 'lg:flex-[1]'
                        }`}
                    onMouseEnter={() => setHoverIndex(3)}
                    onMouseLeave={() => setHoverIndex(null)}
                >
                    <div
                        // bg-[url(https://images.oasisindia.in/website/lp/campaign/s4_bg_img_04.png)]
                        className="bg-[#905580] bg-cover bg-center rounded-[20px] lg:rounded-[25px] p-6 lg:p-8 lg:min-h-[670px]">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-1">
                                <h3 className="text-[38px] lg:text-3xl font-pattaya text-black">Ultimate Plan</h3>
                                <Image src="https://images.oasisindia.in/website/lp/campaign/star_img.png" width={32} height={27} alt="star image" />
                            </div>
                        </div>
                        <h3 className="text-xl lg:text-[25px] font-lato font-medium text-[#623162] line-through mt-2">
                            ₹3,15,000
                        </h3>
                        <div>
                            <h3 className="text-[40px] lg:text-[50px] text-white leading-none">₹2,49,999</h3>
                            <sub className='text-xs lg:text-sm text-white'>(incl. medications)</sub>
                        </div>

                        <button
                            onClick={() => setIsSection4Expanded(!isSection4Expanded)}
                            className="lg:hidden flex items-center gap-1 text-white"
                        >
                            {isSection4Expanded ? 'Show Less' : 'Show More'}
                            {isSection4Expanded ? <FaAngleUp /> : <FaAngleDown />}
                        </button>

                        <button onClick={handleOpenModal} className="hidden lg:block mt-2 bg-accent px-8 py-3 rounded-lg text-base lg:text-xl font-semibold text-white">
                            CHOOSE PLAN
                        </button>

                        <div className={`lg:mt-5 ${isSection4Expanded ? 'block' : 'hidden'} lg:block text-white lg:group`}>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="https://images.oasisindia.in/website/lp/campaign/right_img.png" width={24} height={17} alt="Right" />
                                <h3 className="text-base font-lato">Consultation + Scans + Investigation</h3>
                            </div>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="https://images.oasisindia.in/website/lp/campaign/right_img.png" width={24} height={17} alt="Right" />
                                <h3 className="text-base font-lato">IVF + ICSI</h3>
                            </div>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="https://images.oasisindia.in/website/lp/campaign/right_img.png" width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">FSH</h3>
                                </div>
                            </div>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="https://images.oasisindia.in/website/lp/campaign/right_img.png" width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">Stimulations & Medications</h3>
                                </div>
                            </div>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="https://images.oasisindia.in/website/lp/campaign/right_img.png" width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">Fresh embryo transfer</h3>
                                </div>
                            </div>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="https://images.oasisindia.in/website/lp/campaign/right_img.png" width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">Embryo freezing</h3>
                                </div>
                            </div>
                            <div className="max-w-[345px] border-b border-[#4E204E] py-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="https://images.oasisindia.in/website/lp/campaign/right_img.png" width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">Frozen Embryo transfer </h3>
                                </div>
                            </div>
                            <div className="max-w-[345px] pt-3 flex items-center gap-5">
                                <Image className="w-auto h-[13px]" src="https://images.oasisindia.in/website/lp/campaign/right_img.png" width={24} height={17} alt="Wrong" />
                                <div className="inline-flex items-center gap-2">
                                    <h3 className="text-base font-lato">Second Embryo transfer</h3>
                                </div>
                            </div>
                        </div>

                        <button onClick={handleOpenModal} className="bg-accent px-8 py-3 w-full text-center rounded-xl lg:hidden mt-2 text-base lg:text-xl font-semibold text-white">
                            CHOOSE PLAN
                        </button>
                    </div>
                </div>
            </div>
        </section>

        {showModal && (
            <Modallp3
                isOpen={showModal}
                onClose={handleCloseModal}
                isMeta={isMeta}
            />
        )}
    </>
    )
}

export default PlanInfo;