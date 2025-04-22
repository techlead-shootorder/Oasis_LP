import React from 'react';

export default function ThankYouScreen() {
  return (
    <div className="flex flex-col items-center justify-between h-full bg-white">
      {/* Baby image with purple hands above */}
      <div className="flex-grow flex items-center justify-center w-full">
        <img 
          src="/images/google1/baby-with-purple-hands.png" 
          alt="Baby with protective hands above" 
          className="w-full max-w-md"
        />
      </div>
      
      {/* Thank you message */}
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Thank you for
          <br />
          filling up the form!
        </h2>
        
        <p className="text-gray-700 mb-6">
          With science on your side, your dream
          <br />
          is within reach, and we&apos;re with you all the way.
        </p>
        
        {/* Oasis logo */}
        <div className="mb-4">
          <img 
            src="/images/google1/oasis-purple-logo.png" 
            alt="Oasis IVF & Fertility" 
            className="h-12 mx-auto"
          />
         
        </div>
      </div>
    </div>
  );
}