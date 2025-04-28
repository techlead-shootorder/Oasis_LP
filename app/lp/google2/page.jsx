'use client';

import { useState, useEffect } from 'react';
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
import EggFreezingStep from './components/EggFreezingStep';

// Define the egg freezing step index
const EGG_FREEZING_STEP_INDEX = 100; // Using a large number to distinguish from regular steps

// Regular steps array
const steps = [Step1, Step2, Step3, Step4, Step5, Step6, Step7, Step8, Step9, Step10, Step11, Step12, Step13, Step14, Step15];
const totalSteps = 14; // Total steps excluding thank you slide

export default function GoogleLpPage() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [trackStep, setTrackStep] = useState(0);
  const [showStartScreen, setShowStartScreen] = useState(true);
  const [banner, setBanner] = useState('');

  // Function to detect referrer and set banner for the correct device
  const updateBannerBasedOnReferrerAndDevice = () => {
    const referrer = document.referrer || ''; // Handle empty referrer
    const width = window.innerWidth;

    // Determine the device type based on width
    let deviceType = 'mobile'; // Default to mobile
    if (width >= 1024) {
      deviceType = 'desktop';
    } else if (width >= 768) {
      deviceType = 'tablet';
    }

    // Check referrer and update the banner
    if (referrer.includes('google.com')) {
      if (deviceType === 'desktop') {
        setBanner('/images/google/desktop_banner.webp');
      } else if (deviceType === 'tablet') {
        setBanner('/images/google/tablet_banner.webp');
      } else {
        setBanner('/images/google/mobile_banner.webp');
      }
    } else if (referrer.includes('youtube.com')) {
      if (deviceType === 'desktop') {
        setBanner('/images/youtube/desktop_banner.webp');
      } else if (deviceType === 'tablet') {
        setBanner('/images/youtube/tablet_banner.webp');
      } else {
        setBanner('/images/youtube/mobile_banner.webp');
      }
    } else {
      // Default banners
      if (deviceType === 'desktop') {
        setBanner('/images/google1/desktop_banner.webp');
      } else if (deviceType === 'tablet') {
        setBanner('/images/google1/tablet_banner.webp');
      } else {
        setBanner('/images/google1/mobile_banner.webp');
      }
    }
  };

   // Update the banner when the component mounts and on resize
   useEffect(() => {
    updateBannerBasedOnReferrerAndDevice(); // Set initial banner based on referrer and device

    // Update banner on window resize
    window.addEventListener('resize', updateBannerBasedOnReferrerAndDevice);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('resize', updateBannerBasedOnReferrerAndDevice);
    };
  }, []);

  const handleNext = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));

    // Special case for Step1 - if user selects "No" for planning a baby
    if (step === 0 && key === 'planningABaby' && value === 'no') {
      // first store the previous step before going to egg freezing step
      const tempStep = step;
      setTrackStep(tempStep);
      // Redirect to egg freezing step
      setStep(EGG_FREEZING_STEP_INDEX);
      return;
    }

    // Special case for Step3 - if user selects "No" for marriage status
    if (step === 2 && key === 'married' && value === 'no') {
      // first store the previous step before going to egg freezing step
      const tempStep = step;
      setTrackStep(tempStep);
      // Redirect to egg freezing step
      setStep(EGG_FREEZING_STEP_INDEX);
      return;
    }

    if(step == 8 && value == 'no'){
      // first store the previous step before going to egg freezing step
      const tempStep = step;
      setTrackStep(tempStep);
      // Redirect to egg freezing step
      setStep(EGG_FREEZING_STEP_INDEX);
      return;
    }

    if(step == 4 && formData?.gender == 'Female' && value == '18-24'){
      // first store the previous step before going to egg freezing step
      const tempStep = step;
      setTrackStep(tempStep);
      // Redirect to egg freezing step
      setStep(EGG_FREEZING_STEP_INDEX);
      return;
    }

    // Special case for Egg Freezing Step - proceed to appropriate next step
    if (step === EGG_FREEZING_STEP_INDEX) {
      // Can route to specific step based on your flow requirements
      // For now, going to Step2
      setStep(1);
      return;
    }



    // Check if we're on Step13 (index 12) and user has checked the WhatsApp checkbox
    if (step === 12 && key === 'contact' && value.isWhatsApp) {
      // Skip Step14 by setting the step to Step15 (index 14)
      setStep(14);
    } else {
      // Normal progression
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    // If on egg freezing step, go back to Step1
    if (step === EGG_FREEZING_STEP_INDEX) {
      setStep(trackStep);
      return;
    }

    // If coming back from Step15 after skipping Step14, go back to Step13
    if (step === 14 && formData.contact && formData.contact.isWhatsApp) {
      setStep(12);
    } else {
      setStep((prev) => Math.max(prev - 1, 0));
    }
  };

  // Calculate progress based on current step
  // If on step 13 with checkbox checked or step 14, progress should be 100%
  // Otherwise, calculate progress based on current step out of 14 steps
  const calculateProgress = () => {
    // Always show 100% progress on egg freezing step
    if (step === EGG_FREEZING_STEP_INDEX) {
      return ((trackStep + 1) / totalSteps) * 100; // Show same progress as step 1
    }

    if ((step === 12 && formData.contact && formData.contact.isWhatsApp) || step >= 13) {
      return 100;
    }
    return ((step + 1) / totalSteps) * 100;
  };

  const progress = calculateProgress();

  // Determine which component to render based on step
  const getCurrentComponent = () => {
    if (step === EGG_FREEZING_STEP_INDEX) {
      return EggFreezingStep;
    }
    return steps[step];
  };

  const CurrentStep = getCurrentComponent();

  return (
    <>
      {/* ✅ Start Screen */}
      {showStartScreen ? (
        <div className="flex flex-col h-[100vh] bg-white px-4 font-helvetica bg-cover bg-center"
        style={{
          backgroundImage: `url(${banner})`, // Dynamically set the background image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        >
          {/* Header with minimal padding */}
          {/* <div className="flex justify-end w-full p-1">
            <img
              src="/images/google1/oasis-purple-logo.png"
              alt="Oasis IVF & Fertility"
              className="h-10 sm:h-12 3xl:h-16"
            />
          </div> */}

          {/* Main content area */}
          {/* <div className="flex-1 flex flex-col justify-between max-w-md mx-auto w-full overflow-hidden">
            
            <div className="text-center mt-2 ">
              <h1 className="text-[20px] md:text-2xl font-semibold">
                Your journey to parenthood <br /> starts here
              </h1>

              
              <img
                src="/images/google1/letsbegin.png" // Replace with your image path
                alt="Parenthood Illustration"
                className="mx-auto my-4 w-auto h-80" // Adjust `w-48` as needed
              />
            </div>

            
            <div className="text-center mb-4">
              <p className="text-md md:text-sm mb-4 text-gray-800">
                This will take <strong>two minutes,</strong><br />
                because the more we understand,<br />
                the better we can help
              </p>

              <button
                className="bg-[#9C4A97] hover:bg-[#803a7f] text-white font-bold py-[12px] px-4 rounded-md w-full text-sm"
                onClick={() => setShowStartScreen(false)}
              >
                Let&apos;s begin!
              </button>

              <p className="mt-2 text-xs text-gray-500">
                We respect your privacy. By Continuing, you consent to our{' '}
                <a href="https://oasisindia.in/privacy-policy/" className="underline">Privacy Policy</a>
              </p>
            </div>
          </div> */}
        </div>

      ) : (
        // ✅ Questionnaire Wrapper
        <div className="h-screen overflow-hidden flex flex-col font-helvetica">
          {/* ✅ Fixed Header */}
          {step != 14 && <div className="w-full z-10 py-2 px-6 flex-shrink-0">
            <div className="flex justify-between items-center">
              {/* Show back button only from step 2 onwards (step >= 1) and for egg freezing step */}
              <div>
                {(step >= 0 || step === EGG_FREEZING_STEP_INDEX) && (
                  <span
                  onClick={step === 0 ? () => setShowStartScreen(true) : handleBack}
                    className="text-[#9C4A97] font-medium text-20px md:text-[30px] material-icons cursor-pointer"
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
                  className="h-10 sm:h-12 3xl:h-16"
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
          </div>}

          {/* ✅ Step Content */}
          <div className="flex-grow overflow-y-auto">
            <div className={`max-w-3xl mx-auto ${step == 14 ? 'mt-0' : 'mt-4'} px-4`}>
              <AnimatePresence mode="wait">
                {step < steps.length || step === EGG_FREEZING_STEP_INDEX ? (
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
                      setFormData={setFormData}
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