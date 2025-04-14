import { useState, useEffect } from 'react';

export default function StepGender({ onNext, onBack, formData }) {
  const [selection, setSelection] = useState('');

  // Pre-fill selection if the user is returning to this step
  useEffect(() => {
    if (formData?.gender) {
      setSelection(formData.gender);
    }
  }, [formData]);

  // Handle Next button click
  const handleNext = () => {
    if (selection) {
      onNext('gender', selection); // Save selection with key 'gender'
    } else {
      alert('Please select Male or Female');
    }
  };

  const handleSelection = (value) =>{
    setSelection(value);
    onNext('gender', value);
  }

  return (
    <div className=" p-2 flex flex-col">
      <label className="block mb-4 text-lg font-bold text-center">
        Select Your Gender
      </label>

      {/* Male / Female Buttons */}
      <div className="flex justify-center gap-4 mt-10">

        <div className=''>
            <div className='h-20 bg-pink-200 rounded-t-md'></div>
        <button
          type="button"
          onClick={() => handleSelection('Male')}
          className={`px-4 py-2 w-[120px] text-white transition rounded-b-[20px] 
            ${selection === 'Male' ? 'bg-primary-50' : 'bg-primary hover:bg-blue-600'}`}
        >
          Male
        </button>
        </div>

        <div className=''>
        <div className='h-20 bg-pink-200 rounded-t-md'></div>
        <button
          type="button"
          onClick={() => handleSelection('Female')}
          className={`px-4 py-2 w-[120px]  text-white transition rounded-b-[20px] 
            ${selection === 'Female' ? 'bg-primary-50' : 'bg-primary hover:bg-blue-600'}`}
        >
          Female
        </button>
        </div>
      </div>

     
    </div>
  );
}
