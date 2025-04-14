import { useState, useEffect } from 'react';

export default function Step7({ onNext, onBack, formData }) {
  const [phone, setPhone] = useState('');

  // Pre-fill phone if returning to this step
  useEffect(() => {
    if (formData?.phone) {
      setPhone(formData.phone);
    }
  }, [formData]);

  const handleNext = () => {
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
      alert('Please enter a valid 10-digit phone number');
      return;
    }

    onNext('phone', phone);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setPhone(value);
    }
  };

  return (
    <div className=" p-6 rounded-lg ">
      <label className="block mb-4 text-lg font-medium flex items-center">
        7 <span className="material-icons mr-2">arrow_forward</span> Enter your number to get a free doctor consultation call within 24 hours!*
      </label>

      <input
        type="tel"
        value={phone}
        onChange={handleInputChange}
        placeholder="Enter 10-digit number"
        className="w-full border border-gray-300 px-4 py-2 rounded mb-6"
        maxLength={10}
        required
      />

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
        >
          Back
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </div>
  );
}
