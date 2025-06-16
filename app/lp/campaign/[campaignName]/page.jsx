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
import IVFPopup from '../../../(landingpages)/components/IVFPopup/IVFPopup';
import { useParams, useSearchParams } from 'next/navigation';
import Cookies from "js-cookie";

// Define the egg freezing step index
const EGG_FREEZING_STEP_INDEX = 100; // Using a large number to distinguish from regular steps

// Regular steps array
const steps = [Step1, Step2, Step3, Step4, Step5, Step6, Step7, Step8, Step9, Step10, Step11, Step12, Step13, Step14, Step15];
const totalSteps = 14; // Total steps excluding thank you slide

// Define content configurations based on referrer and device
const contentConfig = {
  confused: {
    desktop: {
      banner: '/images/google1/Sets/set-1/desktop_banner.webp',
      heading: 'CONFUSED ABOUT IVF?',
      subheading: 'Talk To Our Experts Today',
      ctaText: `Let's Begin`,
      backgroundPosition: 'center'
    },
    tablet: {
      banner: '/images/google1/Sets/set-1/tablet_banner.webp',
      heading: 'CONFUSED ABOUT IVF?',
      subheading: 'Talk To Our Experts Today',
      ctaText: `Let's Begin`,
      backgroundPosition: 'center'
    },
    mobile: {
      banner: '/images/google1/Sets/set-1/mobile_banner.webp',
      heading: 'CONFUSED ABOUT IVF?',
      subheading: 'Talk To Our Experts Today',
      ctaText: `Let's Begin`,
      backgroundPosition: 'center'
    }
  },
  questions: {
    desktop: {
      banner: '/images/google1/Sets/set-2/desktop_banner.webp',
      heading: 'HAVE QUESTIONS ABOUT IVF?',
      subheading: 'Get A Free Consultation For A Limited Time',
      ctaText: "Let's Begin",
      backgroundPosition: 'center'
    },
    tablet: {
      banner: '/images/google1/Sets/set-2/tablet_banner.webp',
      heading: 'HAVE QUESTIONS ABOUT IVF?',
      subheading: 'Get A Free Consultation For A Limited Time',
      ctaText: "Let's Begin",
      backgroundPosition: 'center'
    },
    mobile: {
      banner: '/images/google1/Sets/set-2/mobile_banner.webp',
      heading: 'HAVE QUESTIONS ABOUT IVF?',
      subheading: 'Get A Free Consultation For A Limited Time',
      ctaText: "Let's Begin",
      backgroundPosition: 'center'
    }
  },
  properGuidance: {
    desktop: {
      banner: '/images/google1/Sets/set-3/desktop_banner.webp',
      heading: 'PROPER GUIDANCE FOR SUCCESSFUL IVF',
      subheading: 'Your Dream Of Parenthood Is Now Closer',
      ctaText: "Get Free Guidance",
      backgroundPosition: 'center'
    },
    tablet: {
      banner: '/images/google1/Sets/set-3/tablet_banner.webp',
      heading: 'PROPER GUIDANCE FOR SUCCESSFUL IVF',
      subheading: 'Your Dream Of Parenthood Is Now Closer',
      ctaText: "Get Free Guidance",
      backgroundPosition: 'center'
    },
    mobile: {
      banner: '/images/google1/Sets/set-3/mobile_banner.webp',
      heading: 'PROPER GUIDANCE FOR SUCCESSFUL IVF',
      subheading: 'Your Dream Of Parenthood Is Now Closer',
      ctaText: "Get Free Guidance",
      backgroundPosition: 'center'
    }
  },
  experiencedDoctors: {
    desktop: {
      banner: '/images/google1/Sets/set-4/desktop_banner.webp',
      heading: 'CHOOSE EXPERIENCED IVF DOCTORS FOR YOUR PREGNANCY JOURNEY',
      subheading: 'Free IVF Guidance',
      ctaText: "Consult Today",
      backgroundPosition: 'center'
    },
    tablet: {
      banner: '/images/google1/Sets/set-4/tablet_banner.webp',
      heading: 'CHOOSE EXPERIENCED IVF DOCTORS FOR YOUR PREGNANCY JOURNEY',
      subheading: 'Free IVF Guidance',
      ctaText: "Consult Today",
      backgroundPosition: 'center'
    },
    mobile: {
      banner: '/images/google1/Sets/set-4/mobile_banner.webp',
      heading: 'CHOOSE EXPERIENCED IVF DOCTORS FOR YOUR PREGNANCY JOURNEY',
      subheading: 'Free IVF Guidance',
      ctaText: "Consult Today",
      backgroundPosition: 'center'
    }
  },
  trustedByMany: {
    desktop: {
      banner: '/images/google1/Sets/set-5/desktop_banner.webp',
      heading: '1,00,000+ COUPLES HAVE TRUSTED US',
      subheading: 'Take Your First Step Today',
      ctaText: "Start Now",
      backgroundPosition: 'center'
    },
    tablet: {
      banner: '/images/google1/Sets/set-5/tablet_banner.webp',
      heading: '1,00,000+ COUPLES HAVE TRUSTED US',
      subheading: 'Take Your First Step Today',
      ctaText: "Start Now",
      backgroundPosition: 'center'
    },
    mobile: {
      banner: '/images/google1/Sets/set-5/mobile_banner.webp',
      heading: '1,00,000+ COUPLES HAVE TRUSTED US',
      subheading: 'Take Your First Step Today',
      ctaText: "Start Now",
      backgroundPosition: 'center'
    }
  },
  advancedTechnology: {
    desktop: {
      banner: '/images/google1/Sets/set-6/desktop_banner.webp',
      heading: 'ADVANCED IVF TECHNOLOGY HAS MADE 1,00,000+ FAMILIES HAPPY',
      subheading: 'Get Free IVF Guidance',
      ctaText: "Talk To Experts",
      backgroundPosition: 'center'
    },
    tablet: {
      banner: '/images/google1/Sets/set-6/tablet_banner.webp',
      heading: 'ADVANCED IVF TECHNOLOGY HAS MADE 1,00,000+ FAMILIES HAPPY',
      subheading: 'Get Free IVF Guidance',
      ctaText: "Talk To Experts",
      backgroundPosition: 'center'
    },
    mobile: {
      banner: '/images/google1/Sets/set-6/mobile_banner.webp',
      heading: 'ADVANCED IVF TECHNOLOGY HAS MADE 1,00,000+ FAMILIES HAPPY',
      subheading: 'Get Free IVF Guidance',
      ctaText: "Talk To Experts",
      backgroundPosition: 'center'
    }
  },
  highSuccessRate: {
    desktop: {
      banner: '/images/google1/Sets/set-7/desktop_banner.webp',
      heading: '80% OF COUPLES SUCCEED IN THEIR FIRST IVF ATTEMPT',
      subheading: 'Start Your Successful Journey Now',
      ctaText: "Begin Journey",
      backgroundPosition: 'center'
    },
    tablet: {
      banner: '/images/google1/Sets/set-7/tablet_banner.webp',
      heading: '80% OF COUPLES SUCCEED IN THEIR FIRST IVF ATTEMPT',
      subheading: 'Start Your Successful Journey Now',
      ctaText: "Begin Journey",
      backgroundPosition: 'center'
    },
    mobile: {
      banner: '/images/google1/Sets/set-7/mobile_banner.webp',
      heading: '80% OF COUPLES SUCCEED IN THEIR FIRST IVF ATTEMPT',
      subheading: 'Start Your Successful Journey Now',
      ctaText: "Begin Journey",
      backgroundPosition: 'center'
    }
  },
  perfectBlend: {
    desktop: {
      banner: '/images/google1/Sets/set-8/desktop_banner.webp',
      heading: 'A PERFECT BLEND OF ADVANCED IVF TECHNOLOGY AND EXPERIENCED DOCTORS',
      subheading: 'Make The Right Choice Today',
      ctaText: "Choose Us",
      backgroundPosition: 'center'
    },
    tablet: {
      banner: '/images/google1/Sets/set-8/tablet_banner.webp',
      heading: 'A PERFECT BLEND OF ADVANCED IVF TECHNOLOGY AND EXPERIENCED DOCTORS',
      subheading: 'Make The Right Choice Today',
      ctaText: "Choose Us",
      backgroundPosition: 'center'
    },
    mobile: {
      banner: '/images/google1/Sets/set-8/mobile_banner.webp',
      heading: 'A PERFECT BLEND OF ADVANCED IVF TECHNOLOGY AND EXPERIENCED DOCTORS',
      subheading: 'Make The Right Choice Today',
      ctaText: "Choose Us",
      backgroundPosition: 'center'
    }
  },
  rightDoctor: {
    desktop: {
      banner: '/images/google1/Sets/set-9/desktop_banner.webp',
      heading: 'RIGHT DOCTOR, RIGHT IVF TREATMENT',
      subheading: 'Make The Right Choice Today',
      ctaText: "Find Doctor",
      backgroundPosition: 'center'
    },
    tablet: {
      banner: '/images/google1/Sets/set-9/tablet_banner.webp',
      heading: 'RIGHT DOCTOR, RIGHT IVF TREATMENT',
      subheading: 'Make The Right Choice Today',
      ctaText: "Find Doctor",
      backgroundPosition: 'center'
    },
    mobile: {
      banner: '/images/google1/Sets/set-9/mobile_banner.webp',
      heading: 'RIGHT DOCTOR, RIGHT IVF TREATMENT',
      subheading: 'Make The Right Choice Today',
      ctaText: "Find Doctor",
      backgroundPosition: 'center'
    }
  },
  trusted: {
    desktop: {
      banner: '/images/google1/Sets/set-10/desktop_banner.webp',
      heading: 'TRUSTED IVF FOR YOUR DREAM OF HAVING A BABY',
      subheading: 'Upto 70% Success Rate',
      ctaText: "Get Started",
      backgroundPosition: 'center'
    },
    tablet: {
      banner: '/images/google1/Sets/set-10/tablet_banner.webp',
      heading: 'TRUSTED IVF FOR YOUR DREAM OF HAVING A BABY',
      subheading: 'Upto 70% Success Rate',
      ctaText: "Get Started",
      backgroundPosition: 'center'
    },
    mobile: {
      banner: '/images/google1/Sets/set-10/mobile_banner.webp',
      heading: 'TRUSTED IVF FOR YOUR DREAM OF HAVING A BABY',
      subheading: 'Upto 70% Success Rate',
      ctaText: "Get Started",
      backgroundPosition: 'center'
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

  const params = useParams();
    const searchParams = useSearchParams();

  const campaignMap = {
    'confused-about-ivf': 'confused',
    'have-questions-about-ivf': 'questions',
    'guidance-for-ivf': 'properGuidance',
    // add more custom mappings here if needed
  };

  const defaultSlug = params.campaignName;

  const slug = campaignMap[params.campaignName] || defaultSlug;

  console.log("slug is ", slug);
  // Function to detect referrer and set content for the correct device
  const updateContentBasedOnReferrerAndDevice = () => {
    // Determine referrer source
    const referrer = document.referrer || '';
    let source = slug;


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

    useEffect(() => {
      if (searchParams) {
        let utmSource = searchParams?.has('utm_source') ? searchParams?.get('utm_source') : '';
        let utmMedium = searchParams?.has('utm_medium') ? searchParams?.get('utm_medium') : '';
        let utmCampaign = searchParams?.has('utm_campaign') ? searchParams?.get('utm_campaign') : '';
        let utmTerm = searchParams?.has('utm_term') ? searchParams?.get('utm_term') : '';
        let utmContent = searchParams?.has('utm_content') ? searchParams?.get('utm_content') : '';
        let fbclid = searchParams?.has('fbclid') ? searchParams?.get('fbclid') : '';
        let gclid = searchParams?.has('gclid') ? searchParams?.get('gclid') : '';
        let campaignid = searchParams?.has("campaignid")
          ? searchParams?.get("campaignid")
          : "";
        let adgroupid = searchParams?.has("adgroupid")
          ? searchParams?.get("adgroupid")
          : "";
  
        if (
          (utmSource && utmSource.length > 0) ||
          (utmMedium && utmMedium.length > 0) ||
          (utmCampaign && utmCampaign.length > 0) ||
          (utmTerm && utmTerm.length > 0) ||
          (utmContent && utmContent.length > 0) ||
          (fbclid && fbclid.length > 0) ||
          (gclid && gclid.length > 0) ||
          (campaignid && campaignid.length > 0) ||
          (adgroupid && adgroupid.length > 0)
        ) {
          let UTMParams = {
            utmSource: utmSource,
            utmMedium: utmMedium,
            utmCampaign: utmCampaign,
            utmTerm: utmTerm,
            utmContent: utmContent,
            fbclid: fbclid,
            gclid: gclid,
            campaignid: campaignid,
            adgroupid: adgroupid,
          };
          if (typeof window !== 'undefined') {
            localStorage.setItem('utmParams', JSON.stringify(UTMParams));
          }
        }
        const referrer = Cookies.get('referrer');
        if (typeof window !== 'undefined') {
          localStorage.setItem('referrer', referrer)
        }
      }
    }, [])

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

    if (step == 4 && formData?.gender == 'Female' && value == '45+') {
      const tempStep = step;
      setTrackStep(tempStep);
      setStep(EGG_FREEZING_STEP_INDEX);
      return;
    }

     if (step == 4 && formData?.gender == 'Male' && value == '18-24') {
      const tempStep = step;
      setTrackStep(tempStep);
      setStep(EGG_FREEZING_STEP_INDEX);
      return;
    }

     if (step == 4 && formData?.gender == 'Male' && value == '45+') {
      const tempStep = step;
      setTrackStep(tempStep);
      setStep(EGG_FREEZING_STEP_INDEX);
      return;
    }

    if (step == 6 && value == '18-24') {
      const tempStep = step;
      setTrackStep(tempStep);
      setStep(EGG_FREEZING_STEP_INDEX);
      return;
    }



    if (step === EGG_FREEZING_STEP_INDEX) {
      setStep(1);
      return;
    }

    // if (step === 12 && key === 'contact' && value.isWhatsApp) {
    //   setStep(14);
    // } else {
    //   setStep((prev) => prev + 1);
    // }

    // Updated this condition to check for step 13 instead of 12
    if (step === 13 && key === 'contact' && value.isWhatsApp) {
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
                <IVFPopup/>
          {/* Content Container */}
          <div className="flex flex-col h-[90%] z-10 px-4 relative">
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
                    className="bg-white text-primary font-bold py-3 px-6 rounded-full text-lg shadow-lg transform transition hover:scale-105 w-full md:w-auto"
                    onClick={() => setShowStartScreen(false)}
                  >
                    {ctaText}
                  </button>

                  <p className="mt-4 text-xs text-white drop-shadow text-center sm:text-left">
                    We respect your privacy. By continuing, you consent to our{' '}
                    <a target='_blank' href="https://oasisindia.in/privacy-policy/" className="underline font-bold">
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