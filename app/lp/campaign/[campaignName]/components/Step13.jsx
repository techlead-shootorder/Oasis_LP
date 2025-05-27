import { useState, useEffect } from 'react';
import { LeadController } from "@/app/(general)/component/LeadController"
import { AppConstant } from "@/lib/constant/AppConstant";

export default function Step13({ onNext, formData, setFormData }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [isWhatsApp, setIsWhatsApp] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Pre-fill data if returning to this step
  useEffect(() => {
    if (formData?.phoneNumber) {
      setPhoneNumber(formData.phoneNumber);
      validatePhoneNumber(formData.phoneNumber);
    }
    if (formData?.isWhatsApp !== undefined) {
      setIsWhatsApp(formData.isWhatsApp);
    }
  }, [formData]);

  // Check if number has sequential digits at the start
  const hasSequentialDigits = (number) => {
    const sequences = ['1234', '01234', '12345', '23456', '34567', '45678', '56789'];
    return sequences.some(seq => number.startsWith(seq));
  };

  // Update your validatePhoneNumber function:
  const validatePhoneNumber = (number) => {
    const digitsOnly = number.replace(/\D/g, '');
    const isValidLength = digitsOnly.length === 10;
    const hasNoSequential = !hasSequentialDigits(digitsOnly);

    // Set error message if sequential digits found
    if (digitsOnly.length > 0 && hasSequentialDigits(digitsOnly)) {
      setErrorMessage('Please enter a valid phone number');
    } else {
      setErrorMessage('');
    }

    setIsValid(isValidLength && hasNoSequential && name);
    return isValidLength && hasNoSequential;
  };

  // Update your handleName function to also check for sequential digits:
  const handleName = (value) => {
    const digitsOnly = phoneNumber.replace(/\D/g, '');
    const hasNoSequential = !hasSequentialDigits(digitsOnly);
    setIsValid(phoneNumber.length == 10 && hasNoSequential && value);
    setName(value);
  }

  // Handle phone number input change with 10-digit limit
  const handlePhoneChange = (e) => {
    const input = e.target.value;
    // Allow only numbers and remove any non-digit characters
    const digitsOnly = input.replace(/\D/g, '');

    // Limit to 10 digits maximum
    if (digitsOnly.length <= 10) {
      setPhoneNumber(digitsOnly);
      validatePhoneNumber(digitsOnly);
    }
  };

  // Handle checkbox toggle
  const handleWhatsAppToggle = () => {
    setIsWhatsApp(!isWhatsApp);
  };

  // Handle continue button click
  const handleContinue = () => {

    if (isValid && isWhatsApp) {
      // call the sale force api
      setIsLoading(true);
      setIsValid(false);
      const digitsOnly = phoneNumber.replace(/\D/g, '');
      setFormData((prev) => {
        return {
          ...prev,
          contact: { phoneNumber: digitsOnly, isWhatsApp },
          name: name
        }
      })

      try {
        const utmParameters = localStorage.getItem("utmParams");
        const utmParams = utmParameters ? JSON.parse(utmParameters) : {};
        const userDetails = { ...formData, contact: { phoneNumber: digitsOnly, isWhatsApp }, name: name }

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
          onNext(onNext('contact', { phoneNumber: digitsOnly, isWhatsApp }))

        }).catch(error => {
          console.error(error);
          alert('Something went Wrong Try Again Later');
          setIsValid(true);
          setIsLoading(false);
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
    }
    else {
      // to  whatsapp number step
      if (isValid) {
        const digitsOnly = phoneNumber.replace(/\D/g, '');
        setFormData((prev) => {
          return { ...prev, name: name }
        }
        )
        onNext('contact', { phoneNumber: digitsOnly, isWhatsApp })
      }
    }

  };

  return (
    <div className="flex flex-col items-center justify-between h-full p-4 bg-white">
      {/* Heading */}
      <div className="w-full text-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">
          Please share your details
          <br />
          to help you further

        </h2>
      </div>

      {/* Doctor consultation illustration */}
      <div className="flex-grow flex items-center justify-center w-full mb-6">
        <img
          src="/images/google1/updated-doctor-consultation.png"
          alt="Doctor consultation illustration"
          className="h-72 object-contain"
        />
      </div>

      {/* Phone number input, WhatsApp option, and continue button */}
      <div className="w-full space-y-4">

        <div className="rounded-md bg-gray-100 p-2">
          <input
            type="text"
            value={name}
            onChange={(e) => handleName(e.target.value)}
            placeholder="Enter Your Name"
            className="w-full p-2 bg-transparent border-none focus:outline-none text-center text-gray-600"
          />
        </div>

        <div className="rounded-md bg-gray-100 p-2">
          <input
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneChange}
            placeholder="Enter Your Mobile Number"
            maxLength="10"
            className="w-full p-2 bg-transparent border-none focus:outline-none text-center text-gray-600"
          />
        </div>
        {errorMessage && (
          <div className="text-red-500 text-sm text-center mt-1">
            {errorMessage}
          </div>
        )}

        <div className="flex items-center px-2">
          <div className="flex items-center justify-center w-full">
            <div className="bg-green-500 rounded-md p-1 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <input
              type="checkbox"
              id="whatsappCheck"
              checked={isWhatsApp}
              onChange={handleWhatsAppToggle}
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <label htmlFor="whatsappCheck" className="ml-2 text-md text-gray-700">
              This is my WhatsApp too
            </label>
          </div>
        </div>

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