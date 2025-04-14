import { useState, useEffect } from 'react';

export default function Step5({ onNext, formData }) {
  const [selection, setSelection] = useState('');

  // Pre-fill selection if returning to this step
  useEffect(() => {
    if (formData?.spouseAge) {
      setSelection(formData.spouseAge);
    }
  }, [formData]);

  // Handle selection and auto-proceed to next step
  const handleSelection = (ageRange) => {
    setSelection(ageRange);
    // Use setTimeout to allow user to see their selection before moving forward
    setTimeout(() => {
      onNext('spouseAge', ageRange);
    }, 300);
  };

  const ageOptions = [
    { range: '18-24', image: '/images/google1/men-age-18-24.png', position: 'top-left' },
    { range: '25-34', image: '/images/google1/men-age-25-34.png', position: 'top-right' },
    { range: '35-44', image: '/images/google1/men-age-35-44.png', position: 'bottom-left' },
    { range: '45+', image: '/images/google1/men-age-45-plus.png', position: 'bottom-right' }
  ];

  return (
    <div className="flex flex-col items-center justify-center p-4 h-full">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-center mb-6">Your Spouse&apos;s Age?</h2>
      
      {/* Age options grid */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-20 w-full max-w-md mt-10">
        {ageOptions.map((option) => (
          <div 
            key={option.range}
            onClick={() => handleSelection(option.range)}
            className="cursor-pointer transition-transform hover:scale-105"
          >
            <div className="bg-pink-50 rounded-lg relative  -z-[5px] h-[200px] flex flex-col justify-end">
              <div className="flex flex-col items-center ">
                <img 
                  src={option.image} 
                  alt={`Age ${option.range}`} 
                  className="w-[150px] h-[200px] object-contain absolute -top-8 left-6 -z-[2px]"
                />
                <div className="bg-purple-600 rounded-b-lg w-full p-2 text-white text-center relative z-0">
                  <span className="flex items-center justify-center">
                    Age: {option.range} 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}