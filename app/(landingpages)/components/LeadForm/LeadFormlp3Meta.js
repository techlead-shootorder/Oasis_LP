"use client"
import React, { useState, useRef, useEffect } from "react";
import { LeadController } from "@/app/(general)/component/LeadController";
import { ToastComponent } from "@/app/(general)/widgets/components/client/toast/toast";
import { AppConstant } from "@/lib/constant/AppConstant";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Cookies from "js-cookie";
import { HiThumbUp } from "react-icons/hi";
import { HiThumbDown } from "react-icons/hi";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";

const LeadFormV2 = () => {
    const [userDetails, setUserDetails] = useState({
        firstName: "",
        mobileNo: "+91",
        gender: "",
        age: "",
        consent: true,
        otp: "",
    });

    // Ref to hold all input boxes
    const inputRefs = useRef([]);

    const [errMsg, setErrorMessage] = useState("");
    const [ageOptions, setAgeOptions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [formValid, setFormValid] = useState(false);

    const [otpSent, setOtpSent] = useState(false);
    const [otpButtonText, setOtpButtonText] = useState("SEND OTP");
    const [otpVerified, setOtpVerified] = useState(false); // NEW STATE
    const [randomOtp, setRandomOtp] = useState(null);
    const [showThumbsUp, setThumbsUp] = useState(false);
    const [showThumbsDown, setThumbsDown] = useState(false);
    const [showOtpInput, setOtpInput] = useState(false);
    // const [isCallBackDisable, setIsCallBackDisable] = useState(true);
    const [showRecaptcha, setShowRecaptcha] = useState(false);
    const [recaptchaVerified, setRecaptchaVerified] = useState(false); // NEW STATE

    // astrix
    const [isFocusedFullName, setIsFocusedFullName] = useState(false);
    const [isFocusedMobileNo, setIsFocusedMobileNo] = useState(false);
    const [isFocusedGender, setIsFocusedGender] = useState(false);
    const [isFocusedAge, setIsFocusedAge] = useState(false);

    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();

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

    const handleOtpChange = (value, index) => {
        // Ensure only digits are accepted
        if (/^\d$/.test(value)) {
            const otpArray = userDetails.otp.split("");

            // Update the specific digit in the OTP array
            otpArray[index] = value;

            // Join and set the updated OTP
            setUserDetails((prevDetails) => ({
                ...prevDetails,
                otp: otpArray.join(""),
            }));

            // Automatically focus on the next input if it exists
            if (value && inputRefs.current[index + 1]) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace") {
            const otpArray = userDetails.otp.split("");

            if (otpArray[index]) {
                // If the current box has a number, clear it and stay in the same box
                otpArray[index] = "";
                setUserDetails((prevDetails) => ({
                    ...prevDetails,
                    otp: otpArray.join(""),
                }));
            } else if (inputRefs.current[index - 1]) {
                // If the current box is empty, move to the previous box
                otpArray[index - 1] = ""; // Clear the previous box
                setUserDetails((prevDetails) => ({
                    ...prevDetails,
                    otp: otpArray.join(""),
                }));
                inputRefs.current[index - 1].focus(); // Focus on the previous box
            }
        }
    };

    const handleSendOtp = () => {
        const { firstName, mobileNo, gender, age, consent } = userDetails;

        if (!firstName) {
            setErrorMessage("Please enter your name");
            return;
        }

        if (!mobileNo || mobileNo.length < 10) {
            setErrorMessage("Please enter a valid Mobile Number");
            return;
        }

        if (!gender) {
            setErrorMessage("Select gender");
            return
        }

        if (!age) {
            setErrorMessage("Select age");
            return;
        }

        if (!consent) {
            setErrorMessage("Please give your consent to contact");
            return;
        }

        if (userDetails.mobileNo.length !== 13) {
            setErrorMessage('Please enter a valid number');
            return;
        }

        // I want make userdetails.otp empty
        setUserDetails({ ...userDetails, otp: '' });

        const otp = Math.floor(1000 + Math.random() * 9000); // Generates a number between 1000 and 9999
        setRandomOtp(otp);
        const leadFormRequestBody = {
            mobile: userDetails.mobileNo,
            otp_val: otp
        };

        setOtpSent(true); // disable the button and change color

        new LeadController().submitOtpForm(leadFormRequestBody).then(() => {
            ToastComponent.success("Hello");
            setErrorMessage("");
        }).catch(error => {
            console.error(error);
            setErrorMessage("There was an error submitting the form. Please try again.");
        })
            .finally(() => {
                setOtpInput(true); //enable otp input box
                setLoading(false);
                setTimeout(() => {
                    setOtpSent(false);
                    setOtpButtonText('RESEND OTP');
                }, 3000) // enable button after 3 sec and change text to RESEND OTP
            });
    };

    const onRecaptchaSuccess = (token) => {
        console.log("reCAPTCHA token:", token);
        // Proceed with your button action here, e.g., send OTP
        setRecaptchaVerified(true); // UPDATED
        // setIsCallBackDisable(false);
    };

    const onRecaptchaError = () => {
        alert("Please complete the reCAPTCHA!");
        setRecaptchaVerified(false); // UPDATED
        // setIsCallBackDisable(true);
    };

    const handleSubmitOtp = () => {
        if (randomOtp == userDetails.otp) {
            setOtpVerified(true); // UPDATED
            setThumbsUp(true);
            setThumbsDown(false);
            setShowRecaptcha(true);
        } else {
            setOtpVerified(false); // UPDATED
            setThumbsDown(true);
            setThumbsUp(false);
            // setIsCallBackDisable(true);
        }
    };

    // UPDATED VALIDATION FUNCTION
    const isFormValid = () => {
        const basicFieldsValid = userDetails.firstName !== "" && 
                                userDetails.mobileNo !== "+91" && 
                                userDetails.gender !== "" && 
                                userDetails.age !== "" && 
                                userDetails.consent;
        
        // All basic fields + OTP verified + reCAPTCHA verified
        return basicFieldsValid && otpVerified && recaptchaVerified;
    };

    useEffect(() => {
        setFormValid(isFormValid());
    }, [userDetails, otpVerified, recaptchaVerified]) // UPDATED DEPENDENCIES

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name === "mobileNo") {
            let formattedValue = value;

            if (!formattedValue.startsWith("+91")) {
                formattedValue = "+91";
            }

            const numberPart = formattedValue
                .slice(3)
                .replace(/\D/g, "")
                .slice(0, 10);

            setUserDetails({
                ...userDetails,
                mobileNo: "+91" + numberPart,
            });

            return;
        }

        // Update user details based on input type
        setUserDetails({
            ...userDetails,
            [name]: type === "checkbox" ? checked : value,
        });

        // If gender is changed, update the age options accordingly
        if (name === "gender") {
            if (value === "Male") {
                setAgeOptions([...Array(21).keys()].map((i) => 25 + i)); // Age range from 25 to 45
            } else if (value === "Female") {
                setAgeOptions([...Array(26).keys()].map((i) => 20 + i)); // Age range from 20 to 45
            } else {
                setAgeOptions([]); // Reset options if no gender is selected
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // UPDATED VALIDATION - Check all requirements before submitting
        if (!isFormValid()) {
            if (!userDetails.firstName) {
                setErrorMessage("Please enter your name");
                return;
            }
            if (!userDetails.mobileNo || userDetails.mobileNo.length < 13) {
                setErrorMessage("Please enter a valid Mobile Number");
                return;
            }
            if (!userDetails.gender) {
                setErrorMessage("Please select gender");
                return;
            }
            if (!userDetails.age) {
                setErrorMessage("Please select age");
                return;
            }
            if (!userDetails.consent) {
                setErrorMessage("Please give your consent to contact");
                return;
            }
            if (!otpVerified) {
                setErrorMessage("Please verify your OTP");
                return;
            }
            if (!recaptchaVerified) {
                setErrorMessage("Please complete the reCAPTCHA verification");
                return;
            }
        }

        setLoading(true);
        try {
            const utmParameters = localStorage.getItem("utmParams");
            const utmParams = utmParameters ? JSON.parse(utmParameters) : {};

            
            //ensure utmContent is not empty ""
            if(utmParams?.utmContent == "" || utmParams?.utmContent == "-" || utmParams?.utmContent == "_"){
                utmParams.utmContent = "English";
            }
            
            const leadFormRequestBody = {
                ...userDetails,
                ...utmParams,
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
                ToastComponent.success("Thank you for showing interest. Our executive will get back to you shortly.");
                router.push('/thank-you');
                setUserDetails({
                    firstName: "",
                    mobileNo: "",
                    gender: "",
                    age: "",
                    consent: false,
                    otp: "",
                });
                setOtpSent(false);
                setRandomOtp(false);
                setThumbsUp(false);
                setOtpInput(false);
                // setIsCallBackDisable(true);
                setOtpVerified(false); // RESET
                setRecaptchaVerified(false); // RESET
                if (typeof window !== "undefined") {
                    localStorage.removeItem("utmParams");
                    localStorage.removeItem("referrer");
                }
            }).catch(error => {
                console.error(error);
                setErrorMessage("There was an error submitting the form. Please try again.");
            })
                .finally(() => {
                    setLoading(false);
                });

        } catch (error) {
            console.error(error);
            setErrorMessage(
                "There was an error submitting the form. Please try again."
            );
            setLoading(false);
        }
    };

    return (
        <>
            <div className="rounded-[27px] bg-cover bg-center bg-[#f3c1d7] overflow-hidden relative">
                <p className="text-white mb-4 p bg-primary text-center py-2 text-[18px]  sm:text-[22px] font-bold">FREE CONSULTATION</p>

                <form onSubmit={handleSubmit} className="">
                    <div className="px-4 lg:px-5 xl:px-6">

                        <div className="relative mb-3 xl:mb-4">
                            <input
                                type="text"
                                id="fullName"
                                name="firstName"
                                placeholder="Full Name"
                                className="w-full p-3 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                value={userDetails.firstName}
                                onChange={handleInputChange}
                                onFocus={() => setIsFocusedFullName(true)}
                                onBlur={() => setIsFocusedFullName(false)}
                            />
                            {!isFocusedFullName && !userDetails.firstName && (
                                <span className="absolute left-[88px] top-2 text-red-500 text-2xl">*</span>
                            )}
                        </div>

                        <div className="flex space-x-4 mb-3 xl:mb-4">
                            <div className="relative w-1/2">
                                <select
                                    aria-label="gender"
                                    id="gender"
                                    name="gender"
                                    className="w-full p-3 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                    value={userDetails.gender}
                                    onChange={handleInputChange}
                                    onFocus={() => setIsFocusedGender(true)}
                                    onBlur={() => setIsFocusedGender(false)}
                                >
                                    <option value="">Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                                {!isFocusedGender && !userDetails.gender && (
                                    <span className="absolute left-[72px] top-2 text-red-500 text-2xl">*</span>
                                )}
                            </div>

                            <div className="relative w-1/2">
                                <select
                                    id="age"
                                    name="age"
                                    className="w-full p-3 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                    value={userDetails.age}
                                    onChange={handleInputChange}
                                    disabled={!userDetails.gender}
                                    onFocus={() => setIsFocusedAge(true)}
                                    onBlur={() => setIsFocusedAge(false)}
                                    aria-label="Age"
                                >
                                    <option value="">Age</option>
                                    {ageOptions.map((age) => (
                                        <option key={age} value={age}>
                                            {age}
                                        </option>
                                    ))}
                                </select>
                                {!isFocusedAge && !userDetails.age && (
                                    <span className="absolute left-[48px] top-2 text-red-500 text-2xl">*</span>
                                )}
                            </div>
                        </div>

                        <div className="relative mb-3 xl:mb-4">
                            <input
                                type="text"
                                id="phone"
                                name="mobileNo"
                                placeholder="+91"
                                className="w-full p-3 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                value={userDetails.mobileNo}
                                maxLength={13}
                                minLength={13}
                                onChange={handleInputChange}
                                onFocus={() => setIsFocusedMobileNo(true)}
                                onBlur={() => setIsFocusedMobileNo(false)}
                            />
                            {!isFocusedMobileNo &&
                                (userDetails.mobileNo.length <= 3 || userDetails.mobileNo === "+91") && (
                                    <span className="absolute left-[40px] top-2 text-red-500 text-2xl">*</span>
                                )}
                            <button
                                type="button"
                                onClick={handleSendOtp}
                                className={`absolute top-0 right-0 text-[16px] w-[100px] sm:w-[111px] h-full ${otpSent ? 'bg-purple-300 cursor-not-allowed' : 'bg-primary'} text-white text-sm rounded-lg focus:outline-none`}
                                disabled={otpSent}
                            >
                                {otpButtonText}
                            </button>
                        </div>

                        {showOtpInput && (
                            <>
                                <div className={`flex xs:flex-col items-center justify-center gap-3 mb-3 xl:mb-4`}>
                                    <div className="flex gap-3 items-center">
                                        {Array(4)
                                            .fill(0)
                                            .map((_, index) => (
                                                <input
                                                    key={index}
                                                    ref={(el) => (inputRefs.current[index] = el)}
                                                    type="text"
                                                    maxLength={1}
                                                    inputMode="numeric"
                                                    className=" w-10 h-10 sm:w-12 sm:h-12 text-center text-lg border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                                                    value={userDetails.otp[index] || ""}
                                                    onChange={(e) => handleOtpChange(e.target.value, index)}
                                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                                />
                                            ))}
                                    </div>

                                    <button
                                        type="button"
                                        className="w-[111px] px-1 sm:px-0 h-10 sm:h-12 text-[16px] bg-primary text-white text-sm rounded-lg focus:outline-none"
                                        onClick={handleSubmitOtp}
                                    >
                                        SUBMIT OTP
                                    </button>
                                </div>
                            </>
                        )}

                        {showThumbsUp && (
                            <div className="flex items-center justify-center mb-3">
                                <HiThumbUp className="text-green-500 text-2xl mr-2" />
                                <p className="text-primary text-xs">
                                    Thank you for the verification.<br /> Please click the button below.
                                </p>
                            </div>
                        )}
                        {showThumbsDown && (
                            <div className="flex items-center justify-center mb-3">
                                <HiThumbDown className="text-red-500 text-2xl mr-2" />
                                <p className="text-primary text-xs">
                                    Invalid input.<br />Please enter the correct phone number & OTP.
                                </p>
                            </div>
                        )}

                        {showRecaptcha && (
                            <div className="mb-3">
                                <ReCAPTCHA
                                    sitekey="6Ld-zaMqAAAAAGu_oVb0S8fB5naUyFWNK7mb3MkE"
                                    onChange={onRecaptchaSuccess}
                                    onErrored={onRecaptchaError}
                                />
                            </div>
                        )}

                        <div className="flex items-center justify-center mb-2 xl:mb-2 text-center">
                            <input
                                type="checkbox"
                                name="consent"
                                id="consent"
                                className="mr-2"
                                checked={userDetails.consent}
                                onChange={handleInputChange}
                            />
                            <label htmlFor="consent" className="text-sm lg:text-lg text-center">
                                I consent Oasis Fertility to contact me
                            </label>
                        </div>

                    </div>

                    <div className="bg-primary py-4 px-4">
                        {errMsg && <p className="text-red-500 text-sm">{errMsg}</p>}

                        <button
                            type="submit"
                            id="form-submit"
                            className={`${loading && 'py-2'} w-full py-1 text-white text-[22px] rounded-lg leading-none font-medium ${loading || !formValid ? "bg-red-400 cursor-not-allowed" : "bg-[#D7052B]"}`}
                            disabled={loading || !formValid} // UPDATED CONDITION
                        >
                            {loading ? "Submitting..." : "Get A Call Back"}
                            {!loading && <p className="text-[12px] p-0 leading-none font-normal">within 1 minute</p>}
                        </button>

                        <div className="flex items-center justify-center mt-2">
                            <Image
                                className="mr-2"
                                src='/images/lp/lp3/shield_icon.svg'
                                width={16}
                                height={16}
                                priority
                                alt="shield_icon"
                            />
                            <span className="text-white text-sm">Your data is 100% safe with us.</span>
                        </div>
                    </div>
                </form>

                <div className="bg-[#DEDEDE] text-center py-2 px-3 text-black">
                    <p className="text-sm md:text-[18px] leading-[1.4]">
                        Get 0% interest on <strong>EMI</strong> | Starting ₹4,999* p/m
                    </p>
                </div>
            </div>
        </>
    );
};

export default LeadFormV2;