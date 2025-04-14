import { useState, useEffect } from 'react';

export default function Step8({ onNext, onBack, formData }) {
  const [whatsapp, setWhatsapp] = useState('');

  useEffect(() => {
    if (formData?.whatsapp) {
      setWhatsapp(formData.whatsapp);
    }
  }, [formData]);

  const handleNext = () => {
    const pattern = /^[0-9]{10}$/;
    if (!pattern.test(whatsapp)) {
      alert('Please enter a valid 10-digit WhatsApp number');
      return;
    }
    onNext('whatsapp', whatsapp);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setWhatsapp(value);
    }
  };

  return (
    <div className=" p-6 rounded-lg ">
      <label className="block mb-2 text-lg font-medium flex items-center">
        8 <span className="material-icons mr-2">arrow_forward</span> Your WhatsApp Number *
      </label>
      <p className="text-sm text-gray-600 mb-2">
        to get <br />
        <span className="block ml-2">• Expert Tips</span>
        <span className="block ml-2">• Appointment Reminders</span>
        <span className="block ml-2">• Success Stories</span>
      </p>

      {/* Input with Country Code */}
      <div className="flex items-center gap-2 mb-6">
        <span className="flex items-center bg-gray-100 px-3 py-2 rounded text-sm border border-gray-300">
          🇮🇳 +91
        </span>
        <input
          type="tel"
          value={whatsapp}
          onChange={handleChange}
          placeholder="Enter 10-digit number"
          className="flex-1 border border-gray-300 px-4 py-2 rounded"
          maxLength={10}
          required
        />
      </div>

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
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
