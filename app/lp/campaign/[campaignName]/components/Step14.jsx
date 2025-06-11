import { useState, useEffect } from 'react';
import { LeadController } from "@/app/(general)/component/LeadController"
import { AppConstant } from "@/lib/constant/AppConstant";


export default function Step14({ onNext, formData, setFormData }) {
  const [whatsAppNumber, setWhatsAppNumber] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Add this state for error message
  const [errorMessage, setErrorMessage] = useState('');





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

  // Add this helper function
  const hasSequentialDigits = (number) => {
    const sequences = ['1234', '01234', '12345', '23456', '34567', '45678', '56789'];
    return sequences.some(seq => number.startsWith(seq));
  };

  // Update your validateNumber function:
  const validateNumber = (number) => {
    const digitsOnly = number.replace(/\D/g, '');
    const isValidLength = digitsOnly.length === 10;
    const hasNoSequential = !hasSequentialDigits(digitsOnly);

    // Set error message if sequential digits found
    if (digitsOnly.length > 0 && hasSequentialDigits(digitsOnly)) {
      setErrorMessage('Please enter a valid phone number');
    } else {
      setErrorMessage('');
    }

    setIsValid(isValidLength && hasNoSequential);
    return isValidLength && hasNoSequential;
  };

  // Replace your existing handleNumberChange function with this:
  const handleNumberChange = (e) => {
    const input = e.target.value;
    // Allow only numbers and remove any non-digit characters
    const digitsOnly = input.replace(/\D/g, '');

    // Limit to 10 digits maximum
    if (digitsOnly.length <= 10) {
      setWhatsAppNumber(digitsOnly);
      validateNumber(digitsOnly);
    }
  };

  // Handle continue button click
  const handleContinue = () => {
    if (isValid) {
      setIsLoading(true);
      setIsValid(false);
      const digitsOnly = whatsAppNumber.replace(/\D/g, '');
      console.log("formdata in whatsapp", formData);
      setFormData((prev) => {
        return {
          ...prev,
          whatsAppNumber: digitsOnly
        }
      })

      try {
        const utmParameters = localStorage.getItem("utmParams");
        const utmParams = utmParameters ? JSON.parse(utmParameters) : {};
        const userDetails = { ...formData, whatsAppNumber: digitsOnly }

        //ensure utmContent is not empty ""
        if (utmParams?.utmContent == "" || utmParams?.utmContent == "-" || utmParams?.utmContent == "_") {
          utmParams.utmContent = "English";
        }

        const leadFormRequestBody = {
          ...userDetails,
          ...utmParams,
          referralUrl:
            document.referrer ||
            localStorage.getItem("referrer") ||
            window.location.href,
          pageUrl: window.location.href || AppConstant.websiteUrl + pathname,
        };

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'userProvidedData',
          phone_number: userDetails?.contact?.phoneNumber,
        });

        new LeadController().submitFemiaForm(leadFormRequestBody).then(() => {

          setFormData({});

          if (typeof window !== "undefined") {
            localStorage.removeItem("utmParams");
            localStorage.removeItem("referrer");
          }
          setIsValid(true);
          setIsLoading(false);
          onNext('whatsAppNumber', digitsOnly)

        }).catch(error => {
          setIsValid(true);
          setIsLoading(false);
          console.error(error);
          alert('Something went Wrong Try Again Later');
        })
          .finally(() => {
            setIsValid(true);
            setIsLoading(false);
          });

      } catch (error) {
        console.error(error);
        setIsValid(true);
        setIsLoading(false);
      }

      // onNext('whatsAppNumber', digitsOnly);
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
            <path d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4-.1-.1-.6-1.3-.8-1.8-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3-.6.6-.9 1.3-.9 2.1.1.9.4 1.8 1 2.6 1.1 1.6 2.5 2.9 4.2 3.7.5.2.9.4 1.4.5.5.2 1 .2 1.6.1.7-.1 1.3-.6 1.7-1.2.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2 5.5 0 9.9-4.4 9.9-9.9.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3-1.5 0-2.9-.4-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4" />
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
            maxLength="10"
            className="w-full p-2 bg-transparent border-none focus:outline-none text-center text-gray-600"
          />

        </div>

        {/* Add this JSX below your input field: */}
        {errorMessage && (
          <div className="text-red-500 text-sm text-center mt-1">
            {errorMessage}
          </div>
        )}

        <button
          onClick={handleContinue}
          disabled={!isValid || isLoading}
          className={`w-full py-[8px] rounded-md font-medium text-white flex justify-center items-center ${isValid && !isLoading ? 'bg-primary cursor-pointer' : 'bg-purple-300 cursor-not-allowed'
            }`}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : (
            'Continue'
          )}
        </button>
      </div>
    </div>
  );
}