'use client';
import Image from 'next/image';
import { useState } from 'react';
import review from '@/util/lp/reviewlp3';

const MobileReview = ({ center }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const filterReview = review.filter((item) => item.center_name === center?.center_name);

    // Ensure activeIndex is within bounds
    const isValidIndex = activeIndex >= 0 && activeIndex < filterReview.length;

    return (
        <div className="flex max-w-md mx-auto mt-6">
            {/* PROFILE IMAGES */}
            <div className="flex flex-col gap-4 mb-6">
                {filterReview.map((review, index) => (
                    <div key={review.id} className={`${activeIndex === index ? 'bg-[#fff]' : ''} w-[70px] h-[48px]`}>
                        <button
                            onClick={() => setActiveIndex(index)}
                            className={`relative rounded-full transition-all duration-300 ${
                                activeIndex === index ? 'ring-2 ring-blue-500 ring-offset-2' : ''
                            }`}
                        >
                            <div
                                className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
                                    activeIndex === index ? 'bg-white opacity-20' : 'opacity-0'
                                }`}
                            ></div>
                            <img
                                src={`/images/lp/review/profiles/profile_image_id_${review.id}.png`}
                                alt={`${review.name}'s profile`}
                                className="w-12 h-12 rounded-full object-cover"
                                width={48}
                                height={48}
                            />
                        </button>
                    </div>
                ))}
            </div>

            {/* REVIEWS */}
            <div className={`bg-white rounded-[14px] ${activeIndex == 0 && 'rounded-tl-none'} px-6 py-4`}>
                {isValidIndex ? (
                    <>
                        <div className="flex items-center justify-center mb-4 gap-2">
                            <Image
                                className="w-auto h-[27px] lg:h-[39px]"
                                src="/images/lp/review/google_img.png"
                                alt="Google logo"
                                width={39}
                                height={40}
                                loading="lazy"
                            />
                            <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className={`w-4 h-4 ${
                                            i < Math.floor(filterReview[activeIndex].rating)
                                                ? 'text-yellow-400'
                                                : 'text-gray-300'
                                        }`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                                <span className="ml-1 text-gray-600">
                                    {filterReview[activeIndex].rating}
                                </span>
                            </div>
                        </div>

                        <div className="transition-opacity duration-300 text-center">
                            <p className="text-gray-700 mb-4">
                                {filterReview[activeIndex].review}
                            </p>
                            <div className="text-gray-900 font-medium">
                                {filterReview[activeIndex].name}
                            </div>
                            <div className="text-gray-500 text-sm">
                                {filterReview[activeIndex].clinic_location}
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="text-center text-gray-500">No reviews available</div>
                )}
            </div>
        </div>
    );
};

export default MobileReview;
