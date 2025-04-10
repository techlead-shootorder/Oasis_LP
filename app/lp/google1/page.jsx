'use client';
import { useState } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';

export default function QuizPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    ageGroup: '',
    helpNeeded: '',
  });

  const handleNext = (data) => {
    setFormData(prev => ({ ...prev, ...data }));
    setStep(prev => prev + 1);
  };

  const handleBack = (data) => {
    // setFormData(prev => ({ ...prev, ...data }));
    setStep(prev => prev - 1);
  };
  return (
    <div className=" bg-white ">
        {/* Head */}
        <div className='px-4 py-4'>
        {step != 1 && <span className="text-black material-icons" onClick={handleBack}>
                    arrow_back_ios
                </span>}
        </div>
        {/* Steps */}
      <div className="w-full max-w-3xl mx-auto">
        {step === 1 && <Step1 onNext={handleNext} />}
        {step === 2 && <Step2 onNext={handleNext} onBack={handleBack} />}
        {step === 3 && <Step3 data={formData} onBack={handleBack} /> }
      </div>
    </div>
  );
}
