import { useState, useEffect } from 'react';

export default function Step14({ onNext, formData }) {
  const [whatsAppNumber, setWhatsAppNumber] = useState('');
  const [isValid, setIsValid] = useState(false);





  // Pre-fill WhatsApp number if indicated on previous screen
  useEffect(() => {
    // Check if user already indicated this is their WhatsApp
    if (formData?.contact?.isWhatsApp && formData?.contact?.phoneNumber) {
      setWhatsAppNumber(formData?.contact?.phoneNumber);
      setIsValid(true);
    } else if (formData?.whatsAppNumber) {
      // Or if returning to this step with existing data
      setWhatsAppNumber(formData?.whatsAppNumber);
      validateNumber(formData.whatsAppNumber);
    }
  }, [formData]);

  // Validate phone number - basic validation for Indian numbers (10 digits)
  const validateNumber = (number) => {
    const digitsOnly = number.replace(/\D/g, '');
    setIsValid(digitsOnly.length === 10);
    return digitsOnly.length === 10;
  };

  // Handle number input change
  const handleNumberChange = (e) => {
    const input = e.target.value;
    // Allow only numbers and basic formatting
    const formattedInput = input.replace(/[^\d\s()-]/g, '');
    setWhatsAppNumber(formattedInput);
    validateNumber(formattedInput);
  };

  // Handle continue button click
  const handleContinue = () => {
    if (isValid) {
      const digitsOnly = whatsAppNumber.replace(/\D/g, '');
      onNext('whatsAppNumber', digitsOnly);
    }
  };

  return (
    <div className="flex flex-col items-center justify-between h-full p-6 bg-white">
      {/* Header */}
      <div className="w-full text-center mb-4">
        <h2 className="text-xl font-medium text-gray-800 mb-1">Your WhatsApp Number</h2>
        <p className="text-sm text-gray-600">Stay updated!</p>
        
        <div className="mt-4 mb-2">
          <h3 className="text-2xl font-bold text-gray-800">Get</h3>
        </div>
      </div>
      
      {/* Benefits list */}
      <div className="w-full space-y-3 mb-6">
        <div className="bg-blue-100 rounded-full py-2 px-4 flex items-center">
          <span className="text-yellow-500 mr-2">👉</span>
          <span className="text-gray-800">Expert Tips</span>
        </div>
        
        <div className="bg-blue-100 rounded-full py-2 px-4 flex items-center">
          <span className="text-yellow-500 mr-2">👉</span>
          <span className="text-gray-800">Appointment Reminders</span>
        </div>
        
        <div className="bg-blue-100 rounded-full py-2 px-4 flex items-center">
          <span className="text-yellow-500 mr-2">👉</span>
          <span className="text-gray-800">Free Ebooks</span>
        </div>
      </div>
      
      {/* WhatsApp logo */}
      <div className="mb-6">
        <div className="bg-green-500 rounded-full p-4 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4-.1-.1-.6-1.3-.8-1.8-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3-.6.6-.9 1.3-.9 2.1.1.9.4 1.8 1 2.6 1.1 1.6 2.5 2.9 4.2 3.7.5.2.9.4 1.4.5.5.2 1 .2 1.6.1.7-.1 1.3-.6 1.7-1.2.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2 5.5 0 9.9-4.4 9.9-9.9.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3-1.5 0-2.9-.4-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"/>
          </svg>
        </div>
      </div>
      
      {/* WhatsApp number input and continue button */}
      <div className="w-full space-y-4">
        <div className="rounded-md bg-gray-100 p-2">
          <input
            type="tel"
            value={whatsAppNumber}
            onChange={handleNumberChange}
            placeholder="Enter Your WhatsApp Number"
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