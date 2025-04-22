import { useState, useEffect } from 'react';

export default function Step11({ onNext, formData }) {
  const [city, setCity] = useState('');
  const [isValid, setIsValid] = useState(false);

  // Pre-fill city if returning to this step
  useEffect(() => {
    if (formData?.city) {
      setCity(formData.city);
      validateCity(formData.city);
    }
  }, [formData]);

  // Validate city input - must be at least 2 characters
  const validateCity = (input) => {
    setIsValid(input.trim().length >= 3);
  };

  // Handle input change
  const handleCityChange = (e) => {
    const input = e.target.value;
    setCity(input);
    validateCity(input);
  };

  // Handle continue button click
  const handleContinue = () => {
    if (isValid) {
      onNext('city', city.trim());
    }
  };

  return (
    <div className="flex flex-col items-center justify-between h-full p-4 bg-white">
      {/* Question heading */}
      <div className="w-full text-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Which city do you live in?</h2>
      </div>
      
      {/* India map image */}
      <div className="flex-grow flex items-center justify-center w-full mb-6 mt-6">
        <img 
          src="/images/google1/india-map.png" 
          alt="Map of India" 
          className="w-4/5 max-w-md"
        />
      </div>
      
      {/* City input and continue button */}
      <div className="w-full space-y-4 mb-6">
        <div className="rounded-md bg-gray-100 p-2">
          <input
            type="text"
            value={city}
            onChange={handleCityChange}
            placeholder="Enter Your City"
            className="w-full p-2 bg-transparent border-none focus:outline-none text-center text-gray-600"
          />
        </div>
        
        <button
          onClick={handleContinue}
          disabled={!isValid}
          className={`w-full py-[8px] rounded-md font-medium text-white ${
            isValid ? 'bg-primary cursor-pointer' : 'bg-purple-300 cursor-not-allowed'
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}