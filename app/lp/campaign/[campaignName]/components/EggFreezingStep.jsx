'use client';

// import { useRouter } from 'next/navigation';
// import { useState } from 'react';

// export default function EggFreezingStep({ onNext }) {
  export default function EggFreezingStep() {

  // const router = useRouter();

  const handleNext = () => {
    // Call the callback if needed
    // if (onNext) {
    //   onNext('interestedInEggFreezing', true);
    // }

    // Redirect to external URL
    window.location.href = 'https://oasisindia.in/eggfreezing/';
  };

  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4">
      {/* Main Content */}
      <div className="max-w-md w-full">
        <h2 className="text-lg font-medium mb-4">
          You don&apos;t have to wait!
          <br />
          Preserve your fertility now for
          <br />
          a stress-free future
        </h2>
        
        {/* Egg Freezing Image */}
        <div className="my-8">
          <img 
            src="/images/google1/egg_freezing.png" 
            alt="Egg Freezing" 
            className="w-40 h-40 mx-auto"
          />
        </div>
        
        <p className="mb-2">Here you go! Learn more about</p>
        <h3 className="text-xl font-semibold mb-8">Egg Freezing</h3>
        
        {/* Next Button */}
        <button
          onClick={handleNext}
          className="bg-[#9C4A97] text-white font-medium py-3 px-4 rounded-md w-full mt-8"
        >
          Next
        </button>
      </div>
    </div>
  );
}
