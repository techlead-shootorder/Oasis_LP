// components/Step1.jsx
'use client';

import { useState, useEffect } from 'react';

export default function Step1({ onNext, formData }) {
  const [selection, setSelection] = useState('');
  
  // Pre-fill selection if returning to this step
  useEffect(() => {
    if (formData?.planningABaby) {
      setSelection(formData.planningABaby);
    }
  }, [formData]);
  
  // Handle selection and move to next step
  const handleSelection = (value) => {
    setSelection(value);
    onNext('planningABaby', value);
  };
  
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="max-w-md w-full">
        <h2 className="text-xl font-semibold text-center mb-8">
          Are You Planning For A Baby?
        </h2>
        
        {/* Baby Image */}
        <div className="flex-1 flex items-center justify-center">
          <img 
            src="/images/google1/babyAnime.png" 
            alt="Baby" 
            className="object-contain "
          />
        </div>
        
        {/* Yes / No Buttons */}
        <div className="flex flex-col gap-4 mt-6">
          <button
            onClick={() => handleSelection('yes')}
            className={`px-4 py-3 rounded-md text-white font-medium transition shadow-md
              ${selection === 'yes' ? 'bg-[#7A3977]' : 'bg-[#9C4A97] hover:bg-[#803a7f]'}`}
          >
            Yes
          </button>
          
          <button
            onClick={() => handleSelection('no')}
            className={`px-4 py-3 rounded-md text-black font-medium transition shadow-md
              ${selection === 'no' ? 'bg-gray-200' : 'bg-white hover:bg-gray-100 border border-gray-300'}`}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}