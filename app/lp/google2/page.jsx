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

// Define content configurations based on referrer and device
const contentConfig = {
  google: {
    desktop: {
      banner: '/images/google/desktop_banner.webp',
      heading: 'Advanced IVF Technology Has Made 1,00,000+ Families Happy',
      subheading: 'Get FREE IVF Guidance',
      ctaText: 'BOOK YOUR FREE CONSULTATION',
      backgroundPosition: 'center'
    },
    tablet: {
      banner: '/images/google/tablet_banner.webp',
      heading: 'Advanced IVF Technology Has Made 1,00,000+ Families Happy',
      subheading: 'Get FREE IVF Guidance',
      ctaText: 'BOOK YOUR FREE CONSULTATION',
      backgroundPosition: 'center'
    },
    mobile: {
      banner: '/images/google/mobile_banner.webp',
      heading: 'Advanced IVF Technology Has Made 1,00,000+ Families Happy',
      subheading: 'Get FREE IVF Guidance',
      ctaText: 'BOOK YOUR FREE CONSULTATION',
      backgroundPosition: 'top center'
    }
  },
  youtube: {
    desktop: {
      banner: '/images/youtube/desktop_banner.webp',
      heading: 'Start Your Fertility Journey Today',
      subheading: 'Expert Care From Leading Specialists',
      ctaText: 'GET A FREE CONSULTATION',
      backgroundPosition: 'center'
    },
    tablet: {
      banner: '/images/youtube/tablet_banner.webp',
      heading: 'Start Your Fertility Journey Today',
      subheading: 'Expert Care From Leading Specialists',
      ctaText: 'GET A FREE CONSULTATION',
      backgroundPosition: 'center'
    },
    mobile: {
      banner: '/images/youtube/mobile_banner.webp',
      heading: 'Start Your Fertility Journey Today',
      subheading: 'Expert Care From Leading Specialists',
      ctaText: 'GET A FREE CONSULTATION',
      backgroundPosition: 'top center'
    }
  },
  default: {
    desktop: {
      banner: '/images/google1/desktop_banner.webp',
      heading: 'Your Journey To Parenthood Starts Here',
      subheading: 'Take The First Step With Expert Guidance',
      ctaText: "LET'S BEGIN!",
      backgroundPosition: 'center'
    },
    tablet: {
      banner: '/images/google1/tablet_banner.webp',
      heading: 'Your Journey To Parenthood Starts Here',
      subheading: 'Take The First Step With Expert Guidance',
      ctaText: "LET'S BEGIN!",
      backgroundPosition: 'center'
    },
    mobile: {
      banner: '/images/google1/mobile_banner.webp',
      heading: 'Your Journey To Parenthood Starts Here',
      subheading: 'Take The First Step With Expert Guidance',
      ctaText: "LET'S BEGIN!",
      backgroundPosition: 'top center'
    }
  }
};

export default function GoogleLpPage() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [trackStep, setTrackStep] = useState(0);
  const [showStartScreen, setShowStartScreen] = useState(true);
  const [banner, setBanner] = useState('');
  const [heading, setHeading] = useState('');
  const [subheading, setSubheading] = useState('');
  const [ctaText, setCtaText] = useState('');
  const [backgroundPosition, setBackgroundPosition] = useState('center');

  // Function to detect referrer and set content for the correct device
  const updateContentBasedOnReferrerAndDevice = () => {
    // Determine referrer source
    const referrer = document.referrer || '';
    let source = 'default';

    if (referrer.includes('google.com')) {
      source = 'google';
    } else if (referrer.includes('youtube.com')) {
      source = 'youtube';
    }

    // Determine device type based on width
    let deviceType = 'mobile'; // Default to mobile
    const width = window.innerWidth;

    if (width >= 1024) {
      deviceType = 'desktop';
    } else if (width >= 768) {
      deviceType = 'tablet';
    }

    // Set content based on source and device
    const content = contentConfig[source][deviceType];
    setBanner(content.banner);
    setHeading(content.heading);
    setSubheading(content.subheading);
    setCtaText(content.ctaText);
    setBackgroundPosition(content.backgroundPosition);
  };

  // Update the content when the component mounts and on resize
  useEffect(() => {
    updateContentBasedOnReferrerAndDevice();

    // Update content on window resize
    window.addEventListener('resize', updateContentBasedOnReferrerAndDevice);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('resize', updateContentBasedOnReferrerAndDevice);
    };
  }, []);

  // Rest of the functions (handleNext, handleBack, calculateProgress, etc.) remain the same
  const handleNext = (key, value) => {
    // Your existing handleNext logic
    setFormData((prev) => ({ ...prev, [key]: value }));

    // Special case for Step1 - if user selects "No" for planning a baby
    if (step === 0 && key === 'planningABaby' && value === 'no') {
      const tempStep = step;
      setTrackStep(tempStep);
      setStep(EGG_FREEZING_STEP_INDEX);
      return;
    }

    // ... rest of your handleNext function
    // Special case for Step3 - if user selects "No" for marriage status
    if (step === 2 && key === 'married' && value === 'no') {
      const tempStep = step;
      setTrackStep(tempStep);
      setStep(EGG_FREEZING_STEP_INDEX);
      return;
    }

    if (step == 8 && value == 'no') {
      const tempStep = step;
      setTrackStep(tempStep);
      setStep(EGG_FREEZING_STEP_INDEX);
      return;
    }

    if (step == 4 && formData?.gender == 'Female' && value == '18-24') {
      const tempStep = step;
      setTrackStep(tempStep);
      setStep(EGG_FREEZING_STEP_INDEX);
      return;
    }

    if (step === EGG_FREEZING_STEP_INDEX) {
      setStep(1);
      return;
    }

    if (step === 12 && key === 'contact' && value.isWhatsApp) {
      setStep(14);
    } else {
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

  const calculateProgress = () => {
    // Always show 100% progress on egg freezing step
    if (step === EGG_FREEZING_STEP_INDEX) {
      return ((trackStep + 1) / totalSteps) * 100;
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
      {/* Start Screen with Dynamic Content */}
      {showStartScreen ? (
        <div className="flex flex-col h-screen bg-white font-helvetica relative overflow-hidden">
          {/* Dynamic Background Image */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${banner})`,
              backgroundSize: 'cover',
              backgroundPosition: backgroundPosition,
            }}
          />

          {/* Overlay for better text readability if needed */}
          <div className="absolute inset-0 bg-purple-900 opacity-10 z-0"></div>

          {/* Content Container */}
          <div className="flex flex-col h-[90vh] z-10 px-4 relative">
            {/* Header Logo - Kept at top right */}
            <div className="flex justify-end w-full p-3">
              <img
                src="/images/google1/oasis-femia-logo.png"
                alt="Oasis IVF & Fertility"
                className="h-10 sm:h-12 lg:h-16"
              />
            </div>

            {/* Main Content - Modified to align text left */}
            <div className="w-full h-full">
              {/* Heading Section - Now left-aligned with max width */}
              <div className="ml-4 md:ml-16 lg:ml-24 max-w-[600px] h-full flex flex-col justify-between sm:justify-start">

                {/* Headline */}
                <div className='mt-10'>
                  <h1 className="text-white font-bold text-2xl md:text-3xl lg:text-6xl leading-10 drop-shadow-lg text-center  sm:text-left">
                    {heading.toUpperCase()}
                  </h1>
                  <h2 className="text-white font-semibold text-xl md:text-2xl mt-2 drop-shadow-lg text-center sm:text-left">
                    {subheading}
                  </h2>
                </div>

                {/* CTA Button - Now below heading text */}
                <div className="mt-8">
                  <button
                    className="bg-[#9C4A97] hover:bg-[#803a7f] text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg transform transition hover:scale-105 w-full md:w-auto"
                    onClick={() => setShowStartScreen(false)}
                  >
                    {ctaText}
                  </button>

                  <p className="mt-4 text-xs text-white drop-shadow text-center sm:text-left">
                    We respect your privacy. By continuing, you consent to our{' '}
                    <a href="https://oasisindia.in/privacy-policy/" className="underline font-bold">
                      Privacy Policy
                    </a>
                  </p>
                </div>


              </div>
            </div>
          </div>
        </div>
      ) : (
        // Questionnaire Wrapper - Existing code remains the same
        <div className="h-screen overflow-hidden flex flex-col font-helvetica">
          {/* Fixed Header */}
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

          {/* Step Content */}
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