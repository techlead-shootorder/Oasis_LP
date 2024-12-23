'use client';
import { MdCall } from "react-icons/md";

const PhoneCall = ({ refferal = false, center, metanum }) => {
    let isDragging = false;

    const handleClick = (e) => {
        if (isDragging) {
            e.preventDefault(); // Prevent click if it was a drag
        }
    };
    return (

        <div
        className="md:hidden fixed z-50 bottom-[70px] right-3 md:bottom-3 flex justify-center items-center"
    >
       {metanum ? <a
            href={
                refferal
                    ? "tel:+919513736518"
                    : `tel:09513736518`
            }
            aria-label="Read more about Seminole tax hike"
            className="relative text-white bg-blue-500 p-3 rounded-full cursor-pointer shadow-xl transition-transform transform hover:scale-110 active:scale-95"
            onClick={handleClick}
        >
            {/* Call Icon */}
            <MdCall className="text-4xl relative z-10" />

           
        </a>  : <a
            href={
                refferal
                    ? "tel:+919513736432"
                    : `tel:0${center?.phone.replace(/\D/g, "").slice(-10)}`
            }
            aria-label="Call Oasis"
            className="relative text-white bg-blue-500 p-3 rounded-full cursor-pointer shadow-xl transition-transform transform hover:scale-110 active:scale-95"
            onClick={handleClick}
        >
            {/* Call Icon */}
            <MdCall className="text-4xl relative z-10" />

            
        </a>}
    </div>


        
    );
};

export default PhoneCall;
