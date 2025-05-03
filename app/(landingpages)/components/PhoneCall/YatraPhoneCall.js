'use client';
import { MdCall } from "react-icons/md";

const PhoneCall = ({ metanum }) => {
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
       
       <a
            href={
                
                    `tel:09513736397`
            }
            aria-label="Read more about Seminole tax hike"
            className="relative text-white bg-blue-500 p-3 rounded-full cursor-pointer shadow-xl transition-transform transform hover:scale-110 active:scale-95"
            onClick={handleClick}
        >
            {/* Call Icon */}
            <MdCall className="text-4xl relative z-10" />
           
                {/* Glow Animation */}
                <div className="absolute inset-0 w-full h-full rounded-full bg-blue-400 opacity-50 blur-lg animate-pulse"></div>

                {/* Rotating Sparkles */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-300 rounded-full blur-md animate-spin-slow"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-300 rounded-full blur-md animate-spin-reverse"></div>

                {/* Ripple Effect */}
                <div className="absolute inset-0 rounded-full border-4 border-blue-400 opacity-30 animate-ripple"></div>
               
           
        </a> 
    </div>


        
    );
};

export default PhoneCall;
