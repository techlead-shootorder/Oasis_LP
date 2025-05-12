import { useState, useEffect } from 'react';

export default function Step9({ onNext, formData }) {
  const [selection, setSelection] = useState('');

  // Pre-fill selection if returning to this step
  useEffect(() => {
    if (formData?.fertilityTreatment) {
      setSelection(formData.fertilityTreatment);
    }
  }, [formData]);

  // Handle selection and move to next step
  const handleSelection = (value) => {
    setSelection(value);
    onNext('fertilityTreatment', value);
  };

  return (
    <div className="p-2 flex flex-col">
      <label className="block mb-4 text-2xl font-bold text-center">
      Have you taken any 
      <br/>
      fertility treatment before?
      </label>

      {/* Baby Image */}
      <div>
      <img className='mx-auto my-2 w-auto h-80' src='/images/google1/fertilityTreatmentAnime.png'/>
      </div>

      {/* Yes / No Buttons */}
      <div className="flex flex-col gap-4 mt-8">
        <button
          type="button"
          onClick={() => handleSelection('yes')}
          className={`px-4 py-2 rounded text-white transition shadow-md
            ${selection === 'yes' ? 'bg-primary-50' : 'bg-primary'}`}
        >
          Yes
        </button>

        <button
          type="button"
          onClick={() => handleSelection('no')}
          className={`px-4 py-2 rounded text-black transition shadow-md 
            ${selection === 'no' ? 'bg-white' : 'bg-white hover:bg-white'}`}
        >
          No
        </button>
      </div>
    </div>
  );
}
