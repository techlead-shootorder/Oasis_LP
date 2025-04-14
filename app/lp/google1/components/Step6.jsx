import { useState, useEffect } from 'react';

export default function Step6({ onNext, onBack, formData }) {
  const [selection, setSelection] = useState('');

  // Pre-fill selection if returning to this step
  useEffect(() => {
    if (formData?.fertilityTreatment) {
      setSelection(formData.fertilityTreatment);
    }
  }, [formData]);

  const handleNext = () => {
    if (selection) {
      onNext('fertilityTreatment', selection);
    } else {
      alert('Please select Yes or No');
    }
  };

  return (
    <div className=" p-6 rounded-lg ">
      <label className="block mb-4 text-lg font-medium flex items-center">
        6 <span className="material-icons mr-2">arrow_forward</span> Have you undergone any fertility treatment before?*
      </label>

      {/* Yes / No Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          type="button"
          onClick={() => setSelection('yes')}
          className={`px-4 py-2 rounded text-white transition 
            ${selection === 'yes' ? 'bg-green-700' : 'bg-green-500 hover:bg-green-600'}`}
        >
          Yes
        </button>

        <button
          type="button"
          onClick={() => setSelection('no')}
          className={`px-4 py-2 rounded text-white transition 
            ${selection === 'no' ? 'bg-red-700' : 'bg-red-500 hover:bg-red-600'}`}
        >
          No
        </button>
      </div>

      {/* Back and Next Buttons */}
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
