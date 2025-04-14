import { useState, useEffect } from 'react';

export default function Step5({ onNext, onBack, formData }) {
  const [selection, setSelection] = useState('');

  // Pre-fill selection if returning to this step
  useEffect(() => {
    if (formData?.spouseAge) {
      setSelection(formData.spouseAge);
    }
  }, [formData]);

  // Handle Next button click
  const handleNext = () => {
    if (selection) {
      onNext('spouseAge', selection); // Save under 'spouseAge' key
    } else {
      alert(`WPlease select your spouse's age group`);
    }
  };

  return (
    <div className=" p-6 rounded-lg">
      <label className="block mb-4 text-lg font-medium flex items-center">
        5 <span className="material-icons mr-2">arrow_forward</span> Spouse Age?*
      </label>

      {/* Age Range Buttons */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {['18-24', '25-34', '35-44', '45+'].map((ageRange) => (
          <button
            key={ageRange}
            type="button"
            onClick={() => setSelection(ageRange)}
            className={`px-4 py-2 rounded text-white transition 
              ${selection === ageRange ? 'bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'}`}
          >
            {ageRange}
          </button>
        ))}
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
