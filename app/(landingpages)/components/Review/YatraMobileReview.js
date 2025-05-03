'use client';
import Image from 'next/image';
import { useState } from 'react';
const yatraReview = [
    {
      id: 1,
      center_name: "Hyderabad",
      clinic_location: "Hyderabad",
      city: "Hyderabad",
      rating: 4.9,
      name: "Navaneeth Rao",
      reviews:
        "After months of unsuccessful attempts, I was unsure about the right fertility treatment in Hyderabad. Visiting Dr. Avanthi Vellala’s care and advanced approach made my journey smooth. Grateful for the support!",
      profile_picture:
        "https://lh3.googleusercontent.com/a/ACg8ocLHQ4AeF9R3sXJ6knv6QVhYF8IXVCm40yodoycGfpWVT_4ZEw=w56-h56-p-rp-mo-br100",
      review_link: "https://maps.app.goo.gl/whdkLHy86bK6XrHV9",
    },
    {
      id: 2,
      center_name: "Karimnagar",
      clinic_location: "Karimnagar",
      city: "Karimnagar",
      rating: 4.9,
      name: "Harish",
      reviews:
        "I found Oasis fertility in karimnagar. then i met Dr. Jigna Tamagond—she explained everything clearly and ensured I was comfortable throughout. The experience was reassuring, and I highly recommend her!",
      profile_picture: "",
      review_link: "",
    },
    {
      id: 3,
      center_name: "Hanamkonda",
      clinic_location: "Hanamkonda",
      city: "Hanamkonda",
      rating: 4.9,
      name: "Sangeetha Rani Yanamanagandla",
      reviews:
        "I was searching for the top fertility consultation, then i met Dr. Jalagam Kavya Rao, kind, and extremely knowledgeable. I feel lucky to have found her for my fertility journey.",
      profile_picture: "",
      review_link: "",
    },
    {
      id: 4,
      center_name: "Vijayawada",
      clinic_location: "Vijayawada",
      city: "Vijayawada",
      rating: 4.9,
      name: "Kotha Mrudula",
      reviews:
        "Infertility was a difficult journey, and I wanted the best fertility centres in vijayawada. Meeting Dr. Venkata Sujatha Vellanki-changing. She patiently explained my options and provided the best treatment. I now feel hopeful and thankful for her support!",
      profile_picture: "",
      review_link: "",
    },
    {
      id: 5,
      center_name: "Ongole",
      clinic_location: "Ongole",
      city: "Ongole",
      rating: 4.9,
      name: "Sulthan Sk",
      reviews:
        "Choosing the right best fertility hospital in ongole was overwhelming, but meeting Dr Deepika Boppana, and the treatment process was smooth. I highly recommend her to anyone facing fertility challenges!",
      profile_picture: "",
      review_link: "",
    },
    {
      id: 6,
      center_name: "Guntur",
      clinic_location: "Guntur",
      city: "Guntur",
      rating: 4.9,
      name: "Nisha Shaikh",
      reviews:
        "I was looking for a reliable best fertility hospital in guntur and came across Dr. Ramya Vicharapu, and I feel much more positive now.",
      profile_picture: "",
      review_link: "",
    },
    {
      id: 7,
      center_name: "Kakinada",
      clinic_location: "Kakinada",
      city: "Kakinada",
      rating: 4.9,
      name: "Madhusudan Naidu Pathipati",
      reviews:
        "I was searching for an experienced fertility centre in kakinada, and Dr. Ramineedi , knowledgeable, and provided a well-planned treatment. The support I received was truly reassuring!",
      profile_picture: "",
      review_link: "",
    },
    {
      id: 8,
      center_name: "Tirupati",
      clinic_location: "Tirupati",
      city: "Tirupati",
      rating: 4.9,
      name: "Sarah",
      reviews:
        "Finding a trustworthy fertility treatments was difficult, but Dr. Vijayalakshmi D, and now I feel hopeful about the future. Highly recommended!",
      profile_picture: "",
      review_link: "",
    },
    {
      id: 9,
      center_name: "Kurnool",
      clinic_location: "Kurnool",
      city: "Kurnool",
      rating: 4.9,
      name: "Gowthami Gowni",
      reviews:
        "The journey to find the best fertility centre in kurnool was tough, but I’m glad I consulted Dr. Vijayalakshmi D, guided me well, and ensured I felt comfortable throughout the treatment.",
      profile_picture: "",
      review_link: "",
    },
  ];

const MobileReview = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    // if(!review) return null;

    // console.log("mobile", review);

    const isValidIndex = activeIndex >= 0 && activeIndex < yatraReview.length;

    function capitalizeName(name) {
        const lower = name.toLowerCase();
        let cleanedName = lower.trim().replace(/\s+/g, ' ');
        return cleanedName
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    }

    function getInitials(name) {
        return name ? name.charAt(0).toUpperCase() : '';
    }

    function getBgColor(index) {
        const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500'];
        return colors[index % colors.length];
    }

    

    return (
        <div className="flex max-w-md mx-auto mt-6">
            {/* PROFILE IMAGES */}
            <div className="flex flex-col gap-4 mb-6">
                {yatraReview.map((review, index) => (
                    <div key={review.id} className={`${activeIndex === index ? 'bg-[url(/images/lp/campaign/treatment_bg_img_cropped.png)] bg-repeat' : ''} w-[70px] h-[48px]`}>
                        <button
                            onClick={() => setActiveIndex(index)}
                            className={`relative rounded-full transition-all duration-300 ${
                                activeIndex === index ? 'ring-2 ring-blue-500 ring-offset-2' : ''
                            }`}
                        >
                            <div
                                className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
                                    activeIndex === index ? 'bg-[url(/images/lp/campaign/treatment_bg_img_cropped.png)] bg-repeat opacity-20' : 'opacity-0'
                                }`}
                            ></div>
                            <div
                                className={`w-12 h-12 flex items-center justify-center rounded-full text-white text-lg font-bold ${getBgColor(index)}`}
                            >
                                {getInitials(review.name)}
                            </div>
                        </button>
                    </div>
                ))}
            </div>

            {/* REVIEWS */}
            <div className={`bg-[url(/images/lp/campaign/treatment_bg_img_cropped.png)] bg-repeat rounded-[14px] ${activeIndex == 0 && 'rounded-tl-none'} px-6 py-4`}>
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
                                            i < Math.floor(yatraReview[activeIndex].rating)
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
                                    {yatraReview[activeIndex].rating}
                                </span>
                            </div>
                        </div>

                        <div className="transition-opacity duration-300 text-center">
                            <p className="text-gray-700 mb-4">
                                {yatraReview[activeIndex].reviews}
                            </p>
                            <div className="text-gray-900 font-medium">
                                {capitalizeName(yatraReview[activeIndex].name)}
                            </div>
                            <div className="text-gray-500 text-sm">
                                {yatraReview[activeIndex].clinic_location}
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
