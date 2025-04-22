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
import Step9 from './components/Step9';
import Step10 from './components/Step10';
import Step11 from './components/Step11';
import Step12 from './components/Step12';
import Step13 from './components/Step13';
import Step14 from './components/Step14';
import Step15 from './components/Step15';

const steps = [Step1, Step2, Step3, Step4, Step5, Step6, Step7, Step8, Step9, Step10, Step11, Step12, Step13, Step14, Step15];

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
       <div className="flex flex-col h-screen bg-white px-4 overflow-hidden font-helvetica">
       {/* Header with logo */}
       <div className="flex justify-end w-full p-2">
         <img
           src="/images/google1/oasis-purple-logo.png"
           alt="Oasis IVF & Fertility"
           className="h-8"
         />
       </div>
       
       {/* Main content with flexible height */}
       <div className="flex-1 flex flex-col justify-between max-w-md mx-auto w-full">
         {/* Top section */}
         <div className="text-center mt-4">
           <h1 className="text-[18px] md:text-3xl font-semibold">
             Your Parenthood <br /> Journey Starts Here
           </h1>
         </div>
         
         {/* Bottom section */}
         <div className="text-center mb-8">
           <p className="text-sm md:text-base mb-6 text-gray-800">
             This will take two minutes, because the more we understand, the better we can help
           </p>
     
           <button
             className="bg-[#9C4A97] hover:bg-[#803a7f] text-white font-bold py-3 px-6 rounded-xl w-full text-sm md:text-base"
             onClick={() => setShowStartScreen(false)}
           >
             Let's begin!
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
        <div className="h-screen bg-white overflow-hidden flex flex-col font-helvetica">
          {/* ✅ Fixed Header */}
          <div className="w-full z-10 p-2 flex-shrink-0">
            <div className="flex justify-between items-center">
              {/* Show back button only from step 2 onwards (step >= 1) */}
              <div>
                {step >= 1 && (
                  <span
                    onClick={handleBack}
                    className="text-[#9C4A97] font-medium text-md md:text-lg material-icons cursor-pointer"
                  >
                    chevron_left
                  </span>
                )}
              </div>

              {/* Logo */}
              <div className="">
                <img
                  src="/images/google1/oasis-purple-logo.png"
                  alt="Oasis IVF & Fertility"
                  className="h-8"
                />
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
          <div className="flex-grow overflow-y-auto" style={{ height: 'calc(100vh - 80px)' }}>
            <div className="max-w-3xl mx-auto mt-4 px-4">
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
        </div>
      )}
    </>
  );
}