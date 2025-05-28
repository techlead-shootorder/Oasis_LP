'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";
import { AppConstant } from "@/lib/constant/AppConstant";
import { LeadController } from "@/app/(general)/component/LeadController";

// Create a separate client component for handling search params
const IVFPopup = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        gender: '',
        age: '',
        mobileNo: '',
    });

    const [errMsg, setErrorMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const pathname = usePathname();

    // Remove useSearchParams from this component
    useEffect(() => {
        // Get UTM params from localStorage instead
        if (typeof window !== 'undefined') {
            // const storedUtmParams = localStorage.getItem('utmParams');
            const referrer = Cookies.get('referrer');
            if (referrer) {
                localStorage.setItem('referrer', referrer);
            }
        }
    }, []);

    useEffect(() => {
        // Show popup after 10 seconds
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 15000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setShowPopup(false);
    };

    // Validation function to check if all fields are filled and valid
    const isFormValid = () => {
        const { firstName, gender, age, mobileNo } = formData;
        
        // Check if all fields are filled
        if (!firstName.trim() || !gender || !age || !mobileNo) {
            return false;
        }
        
        // Check if mobile number is exactly 10 digits
        if (mobileNo.length !== 10) {
            return false;
        }
        
        // Check if mobile number doesn't start with invalid patterns
        if (mobileNo.startsWith('01234') || mobileNo.startsWith('1234')) {
            return false;
        }
        
        return true;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setErrorMessage('');
        
        if (name === 'mobileNo') {
            // Only allow digits and limit to 10 characters
            const numericValue = value.replace(/\D/g, '').slice(0, 10);
            
            // Check for invalid number patterns
            if (numericValue.startsWith('01234') || numericValue.startsWith('1234')) {
                setErrorMessage('Please enter a valid mobile number');
            }
            
            setFormData((prev) => ({
                ...prev,
                [name]: numericValue,
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form before submission
        if (!isFormValid()) {
            if (formData.mobileNo.startsWith('01234') || formData.mobileNo.startsWith('1234')) {
                setErrorMessage('Please enter a valid mobile number');
            } else {
                setErrorMessage('Please fill all fields correctly');
            }
            return;
        }

        setIsSubmitting(true);

        const userDetails = { ...formData, mobileNo: "+91" + formData.mobileNo }
        console.log('Form submitted:', userDetails);

        try {
            const utmParameters = localStorage.getItem("utmParams");
            const utmParams = utmParameters ? JSON.parse(utmParameters) : {};
            const leadFormRequestBody = {
                ...userDetails,
                ...utmParams,
                 utmContent: (utmParams.utmContent || "English|") + "_IVF_POPUP",
                referralUrl:
                    document.referrer ||
                    localStorage.getItem("referrer") ||
                    window.location.href,
                pageUrl: window.location.href || AppConstant.websiteUrl + pathname,
            };

            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: 'userProvidedData',
                phone_number: userDetails.mobileNo,
            });

            new LeadController().submitLeadForm(leadFormRequestBody).then(() => {
                // Clear form data
                setFormData({
                    firstName: "",
                    mobileNo: "",
                    gender: "",
                    age: "",
                });
                
                if (typeof window !== "undefined") {
                    localStorage.removeItem("utmParams");
                    localStorage.removeItem("referrer");
                }
                
                // Download ebook
                const link = document.createElement('a');
                link.download = 'e-book.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                window.open('https://paid.oasisindia.in/ebooks/e-book.pdf', '_blank');
                setShowPopup(false);
                
                // Re-enable button after 3 seconds
                setTimeout(() => {
                    setIsSubmitting(false);
                }, 3000);
            }).catch(error => {
                console.error(error);
                setErrorMessage("There was an error submitting the form. Please try again.");
                setTimeout(() => {
                    setIsSubmitting(false);
                }, 3000);
            });

        } catch (error) {
            console.error(error);
            setErrorMessage(
                "There was an error submitting the form. Please try again."
            );
            setTimeout(() => {
                setIsSubmitting(false);
            }, 3000);
        }
    };

    if (!showPopup) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[9999999] flex items-center justify-center p-4">
            <div className="relative bg-pink-100 rounded-lg max-w-md md:max-w-2xl w-full overflow-hidden">
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 text-3xl"
                >
                    ×
                </button>

                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 p-0 sm:p-4 flex justify-center items-center">
                        <div className="relative w-48 h-64 md:w-64 md:h-80">
                            <Image
                                src="/images/ebook/desktop.png"
                                alt="IVF E-Book Cover"
                                layout="fill"
                                objectFit="contain"
                                className="drop-shadow-lg"
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
                        <h2 className="text-primary text-xl md:text-3xl font-bold mb-1">
                            Download E-Book
                        </h2>
                        <p className="text-primary-50 mb-4">
                            Please fill out the form below to receive your e-book.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="Full Name *"
                                    required
                                    className="w-full p-3 border rounded-md"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="flex space-x-2">
                                <select
                                    name="gender"
                                    required
                                    className="w-1/2 p-3 border rounded-md appearance-none"
                                    value={formData.gender}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>Gender *</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    {/* <option value="other">Other</option> */}
                                </select>

                                <select
                                    name="age"
                                    required
                                    className="w-1/2 p-3 border rounded-md appearance-none"
                                    value={formData.age}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>Age *</option>
                                    {[...Array(60)].map((_, i) => (
                                        <option key={i} value={i + 18}>
                                            {i + 18}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex">
                                <div className="bg-gray-100 p-3 border rounded-l-md flex items-center justify-center">
                                    +91
                                </div>
                                <input
                                    type="tel"
                                    name="mobileNo"
                                    placeholder="Phone Number *"
                                    required
                                    className="w-full p-3 border border-l-0 rounded-r-md"
                                    value={formData.mobileNo}
                                    onChange={handleChange}
                                    maxLength="10"
                                />
                            </div>

                            {errMsg && <p className='text-sm text-red-500'>{errMsg}</p>}

                            <button
                                type="submit"
                                disabled={!isFormValid() || isSubmitting}
                                className={`w-full py-3 rounded-md font-bold text-lg transition-colors ${
                                    isFormValid() && !isSubmitting
                                        ? 'bg-[#874487] hover:bg-primary-50 text-white cursor-pointer'
                                        : 'bg-gray-400 text-gray-600 cursor-not-allowed'
                                }`}
                            >
                                {isSubmitting ? 'Processing...' : 'Download'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IVFPopup;