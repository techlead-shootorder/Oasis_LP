'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';
import Step6 from './components/Step6';
import Step7 from './components/Step7';
import Step8 from './components/Step8';

const steps = [Step1, Step2, Step3, Step4, Step5, Step6, Step7, Step8];

export default function GoogleLpPage() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [showStartScreen, setShowStartScreen] = useState(true);

  const handleNext = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const progress = ((step) / steps.length) * 100;
  const CurrentStep = steps[step];

  return (
    <>
      {/* ✅ Start Screen */}
      {showStartScreen ? (
        <div className="flex flex-col items-center text-center h-screen bg-white px-4 relative">
         <div className='flex justify-end w-full text-2xl p-2'> 
           Logo
         </div>

          <div className="max-w-md w-full mx-auto h-full flex flex-col justify-between p-2">
            <h1 className="text-[18px] md:text-3xl font-semibold mb-6">
              Your Parenthood <br /> Journey Starts Here
            </h1>

            <div>
            <p className="text-sm md:text-base mb-6 text-gray-800">
              This will take two minutes, because the more we understand, the better we can help
            </p>

            <button
              className="bg-[#9C4A97] hover:bg-[#803a7f] text-white font-bold py-3 px-6 rounded-xl w-full text-sm md:text-base"
              onClick={() => setShowStartScreen(false)}
            >
              Let’s begin!
            </button>

            <p className="mt-4 text-xs text-gray-500">
              By continuing, you confirm and guarantee that you have read, understood, and agreed to our{' '}
              <a href="#" className="underline">Terms of Use</a>,{' '}
              <a href="#" className="underline">Privacy Notice</a>, and{' '}
              <a href="#" className="underline">Refund Policy</a>.
            </p>
            </div>
          </div>
        </div>
      ) : (
        // ✅ Questionnaire Wrapper
        <div className="h-screen bg-white">
          {/* ✅ Fixed Header */}
          <div className="w-full z-10 p-2">
            <div className="flex justify-between items-center max-w-5xl mx-auto">
              {/* Show back button only from step 2 onwards (step >= 1) */}
              <div>
                {step >= 1 && (
                  <button
                    onClick={handleBack}
                    className="text-[#9C4A97] font-medium text-sm md:text-base"
                  >
                    ← Back
                  </button>
                )}
              </div>

              {/* Logo */}
              <div className="text-2xl">
                Logo
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-[#EBD6E6] mt-4 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#9C4A97] transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* ✅ Step Content */}
          <div className="max-w-3xl mx-auto mt-10">
            <AnimatePresence mode="wait">
              {step < steps.length ? (
                <motion.div
                  key={step}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -100, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <CurrentStep
                    onNext={handleNext}
                    onBack={handleBack}
                    formData={formData}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="complete"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -100, opacity: 0 }}
                  className="bg-white p-6 rounded-lg shadow text-center"
                >
                  <h2 className="text-xl font-bold mb-4">Thanks for submitting!</h2>
                  <pre className="bg-gray-100 p-4 rounded text-sm text-left overflow-x-auto">
                    {JSON.stringify(formData, null, 2)}
                  </pre>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}
    </>
  );
}
