'use client'
import React, { useState } from 'react'

const ExploreCenterslp3 = ({ nearByCenters }) => {

    

    const scrollToForm = () => {
        const formElement = document.getElementById("heroBannerHeading");
        formElement.scrollIntoView({ behavior: "smooth" });
    };

    const [showCentre, setShowCentre] = useState(false);
    return (
        <div className='py-8'>
            <div className='flex justify-center'>
                <button className='bg-[#9678B6] font-medium py-2 px-6 text-white flex items-center gap-6 rounded-[7px]' onClick={() => setShowCentre(!showCentre)}>
                    Explore IVF Centre Near You
                    <span>
                        {showCentre ? <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 7.92896L7.67713 1.25183C7.8947 1.03426 8.24744 1.03426 8.46501 1.25183L15.1421 7.92896" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                        </svg> : <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.1426 1.07104L8.46545 7.74817C8.24788 7.96574 7.89514 7.96574 7.67757 7.74817L1.00044 1.07104" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                        }
                    </span>
                </button>


            </div>

            {showCentre && (
                <ul className='mt-8 grid gap-y-2 sm:gap-x-20 lg:gap-x-40 items-center 
                grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                px-4 max-w-fit mx-auto
                justify-items-start justify-center'>
    {nearByCenters &&
      nearByCenters.near_by_areas.length > 0 &&
      nearByCenters.near_by_areas.map((item, index) => (
        <li
          className='text-primary mb-2 cursor-pointer w-fit'
          key={index}
          onClick={scrollToForm}
        >
          Best IVF Centre in {item}
        </li>
      ))}
</ul>
)}

        </div>
    )
}

export default ExploreCenterslp3