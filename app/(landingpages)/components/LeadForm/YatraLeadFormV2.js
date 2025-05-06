"use client"
import React, { useState, useEffect } from "react";
import { LeadController } from "@/app/(general)/component/LeadController"
import { ToastComponent } from "@/app/(general)/widgets/components/client/toast/toast";
import { AppConstant } from "@/lib/constant/AppConstant";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Cookies from "js-cookie";
import Image from "next/image";



const LeadFormV2 = ({ internal = false }) => {

    const [userDetails, setUserDetails] = useState({
        firstName: "",
        mobileNo: "+91",
        gender: "",
        age: "",
        city: "", // Add this line
        notes: "",
        consent: true,
    });
    const [isFocusedCity, setIsFocusedCity] = useState(false);
    const [errMsg, setErrorMessage] = useState("");
    const [ageOptions, setAgeOptions] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [formValid, setFormValid] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();

    // astrix
    const [isFocusedFullName, setIsFocusedFullName] = useState(false);
    const [isFocusedMobileNo, setIsFocusedMobileNo] = useState(false);
    const [isFocusedGender, setIsFocusedGender] = useState(false);
    const [isFocusedAge, setIsFocusedAge] = useState(false);

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

    // const isFormValid = () => {
    //     let allInputField = false;
    //     allInputField = userDetails.firstName !== "" && userDetails.mobileNo !== "+91" && userDetails.gender !== "" && userDetails.age !== "" && userDetails.city !== "" && userDetails.consent;

    //     return allInputField;
    // };

    useEffect(() => {
        // setFormValid(isFormValid());
    }, [userDetails])

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

        const { firstName, mobileNo, consent, city } = userDetails;

        console.log("user detials", userDetails);

        if (!firstName) {
            setErrorMessage("Please enter your name");
            return;
        }
        if (!mobileNo || mobileNo.length < 10) {
            setErrorMessage("Please enter a valid Mobile Number");
            return;
        }
        if(!city){
            setErrorMessage("Please Select City");
            return;
        }


        if (!consent) {
            setErrorMessage("Please give your consent to contact");
            return;
        }
        setLoading(true);
        try {
            const utmParameters = localStorage.getItem("utmParams");
            const utmParams = utmParameters ? JSON.parse(utmParameters) : {};
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
                setUserDetails({
                    firstName: "",
                    mobileNo: "",
                    gender: "",
                    age: "",
                    city: "",
                    notes: "",
                    consent: false,
                });
                if (typeof window !== "undefined") {
                    localStorage.removeItem("utmParams");
                    localStorage.removeItem("referrer");
                }
                router.push('/thank-you');
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

            <div className="rounded-[27px] bg-cover bg-center bg-[#f3c1d7] overflow-hidden relative ">
                <p className="text-primary pt-2 pb-2 bg-[#f3c1d7] mb-4 text-center text-[16px] sm:text-[20px] font-bold">First 50 Consultations Free Per City</p>

                <form onSubmit={handleSubmit} className="">
                    <div className="px-4 lg:px-5 xl:px-6">
                        {/* FORM HEADING */}
                        <div>
                            {/* <p className="text-center text-primary font-semibold">Fill Up The Form To Get a</p> */}

                        </div>

                        {/* INPUTS */}
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
                                    aria-label="age"
                                    id="age"
                                    name="age"
                                    className="w-full p-3 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                    value={userDetails.age}
                                    onChange={handleInputChange}
                                    disabled={!userDetails.gender} // Disable if no gender is selected
                                    onFocus={() => setIsFocusedAge(true)}
                                    onBlur={() => setIsFocusedAge(false)}
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
                            <select
                                id="city"
                                name="city"
                                className="w-full p-3 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                value={userDetails.city}
                                onChange={handleInputChange}
                                onFocus={() => setIsFocusedCity(true)}
                                onBlur={() => setIsFocusedCity(false)}
                            >
                                <option value="">City/Town</option>
                                <option value="Hanamkonda">Jangaon</option>
                                <option value="Karimnagar">Jagityal</option>
                                <option value="Tirupati">Gudur</option>
                                <option value="Ongole">Markapuram</option>
                                <option value="Guntur">Amaravathi</option>
                                <option value="Vijaywada">Tiruvuru</option>
                                <option value="Suryaraopet">Jaggaiahpet</option>
                                <option value="Kakinada">Jaggampeta</option>
                                <option value="Madhurawada">Thagarapuvalasa</option>
                                <option value="Vizag">Narasipatnam</option>
                                <option value="Madhurawada">Vizianagaram</option>
                                <option value="Vizag">Gajuwaka</option>
                                <option value="Hanamkonda">Khammam</option>
                                <option value="Dilsukhnagar">Nalgonda</option>
                                <option value="Uppal">Bhongir</option>
                                <option value="Secunderabad">Siddipet</option>
                                <option value="Kompally">Medak</option>
                                <option value="Secunderabad">Nizambad</option>
                                <option value="Miyapur">Sangareddy</option>
                                <option value="Gachibowli">Vikarabad</option>
                                <option value="Gachibowli">Parigi</option>
                                <option value="Tolichowki">Shamshabad</option>
                                <option value="Banjara Hills">Mahabubnagar</option>
                                <option value="Kurnool">Adoni</option>

                            </select>
                            {!isFocusedCity && !userDetails.city && (
                                <span className="absolute left-[88px] top-2 text-red-500 text-2xl">*</span>
                            )}
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
                            {!isFocusedMobileNo && (userDetails.mobileNo === "+91" || userDetails.mobileNo.length <= 3) && (
                                <span className="absolute left-[40px] top-2 text-red-500 text-2xl">*</span>
                            )}
                        </div>

                        {internal && <div className="relative mb-3 xl:mb-4">
                            <input
                                type="text"
                                id="notes"
                                name="notes"
                                placeholder="Notes"
                                className="w-full p-3 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                value={userDetails.notes}
                                onChange={handleInputChange}

                            />

                        </div>
                        }

                        <div className="flex items-center justify-center mb-3 xl:mb-4 text-center">
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
                    {/* ERROR MESSAGE */}
                    {errMsg && <p className="text-red-500 text-sm">{errMsg}</p>}

                    <div className="bg-[#DEDEDE] py-4 px-4">
                        <button
                            type="submit"
                            id="form-submit"
                            // className={`w-full py-1 text-white text-[22px] rounded-lg leading-none font-medium 
                            //     ${loading || !formValid ? "bg-red-400 cursor-not-allowed" : "bg-[#D7052B] animate-pulseHighlight"}
                            // `}
                            className={`w-full py-2 text-white text-[22px] rounded-lg leading-none font-medium bg-[#D7052B] animate-pulseHighlight`}
                        // disabled={loading || !formValid}
                        >
                            {loading ? "Submitting..." : "Secure My Free Spot"}

                            {/* {!loading && <p className="text-[12px] p-0 leading-none font-normal">Limited Slots Per Location</p>} */}
                        </button>

                        <div className="flex items-center justify-center mt-2">
                            {/* <AiFillSafetyCertificate className="text-green-500 mr-2"/> */}
                            <Image
                                className="mr-2"
                                src='/images/lp/lp3/shield_icon.svg'
                                width={16}
                                height={16}
                                priority
                                alt="shield_icon"
                            />
                            <span className="text-primary text-sm">Your data is 100% safe with us.</span>
                        </div>
                    </div>
                </form>

                <div className="bg-[#DEDEDE] text-center pb-3 px-3 text-black">
                    <p className="text-sm md:text-[18px] leading-[1.4]">
                        Book Before It&apos;s Full!

                    </p>
                </div>
            </div>
        </>
    );
};

export default LeadFormV2;
