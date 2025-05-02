'use client';
import { useState } from 'react';

export default function WhoIsThisFor() {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const items = [
    {
      iconSrc: '/images/lp/lp3/first.jpg',
      text: "Couples Planning For A Baby",
      description: "Perfect for couples who are preparing to start or expand their family and want to ensure optimal fertility health."
    },
    {
      iconSrc: '/images/lp/lp3/second.jpg',
      text: "Anyone Who Wants Fertility Health Check Up",
      description: "Ideal for individuals who want to understand their reproductive health status, regardless of their current family planning goals."
    },
    {
      iconSrc: '/images/lp/lp3/third.jpg',
      text: "Couples Facing Infertility",
      description: "Supporting couples who have been trying to conceive and may be experiencing challenges in their fertility journey."
    },
  ];

  const handleCardClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className='max-w-screen-4xl mx-auto px-4 lg:px-10 xl:px-14 2xl:px-20 py-8 lg:pt-8 lg:pb-16'>
      <div className='flex justify-start sm:justify-center mb-10'> 
        <h2 className="text-[22px] md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-[52px] bg-primary px-6 rounded-br-2xl font-bold text-white tracking-wide relative overflow-hidden">
          Who Is This For?
          <span className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 transition-transform duration-500 origin-left group-hover:scale-x-100"></span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {items.map((item, idx) => (
          <div 
            key={idx} 
            className={`flex flex-col items-center p-6 rounded-lg shadow-md cursor-pointer transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${activeIndex === idx ? 'bg-purple-50 border-l-4 border-primary' : 'bg-white'}`}
            onClick={() => handleCardClick(idx)}
          >
            <div className="flex items-center gap-4 w-full">
              <div className=" p-2 rounded-full">
                <img 
                  src={item.iconSrc} 
                  alt={item.text} 
                  className='w-[60px] h-[60px] object-contain transition-transform duration-300 hover:scale-110' 
                />
              </div>
              <p className="text-lg text-gray-800 font-medium">
                {item.text}
              </p>
            </div>
            
            {activeIndex === idx && (
              <div className="mt-4 text-gray-600 animate-fadeIn w-full">
                <p>{item.description}</p>
                <button 
                  className="mt-4 px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-purple-700 transition-colors"
                >
                  Learn More
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
        .bg-primary {
          background-color: #874487;
        }
        .text-primary {
          color: #874487;
        }
        .border-primary {
          border-color: #874487;
        }
      `}</style>
    </section>
  );
}