'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname, useSearchParams } from "next/navigation";
import Cookies from "js-cookie";
import { AppConstant } from "@/lib/constant/AppConstant";
import { LeadController } from "@/app/(general)/component/LeadController"



const IVFPopup = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        gender: '',
        age: '',
        mobileNo: '',
    });

    const [errMsg, setErrorMessage] = useState("");
    // const [ageOptions, setAgeOptions] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [formValid, setFormValid] = useState(false);

    const pathname = usePathname();
    // const router = useRouter();
    const searchParams = useSearchParams();

    // astrix
    // const [isFocusedFullName, setIsFocusedFullName] = useState(false);
    // const [isFocusedMobileNo, setIsFocusedMobileNo] = useState(false);
    // const [isFocusedGender, setIsFocusedGender] = useState(false);
    // const [isFocusedAge, setIsFocusedAge] = useState(false);

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
    }, []);

    // const isFormValid = () => {
    //     let allInputField = false;
    //     allInputField = formData.firstName !== "" && formData.mobileNo !== "+91" && formData.gender !== "" && formData.age !== "";

    //     return allInputField;
    // };


    // useEffect(() => {
    //     // setFormValid(isFormValid());
    // }, [formData])

    useEffect(() => {
        // Show popup after 10 seconds
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setShowPopup(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setErrorMessage('');

        //  if (name === "mobileNo") {
        //   let formattedValue = value;

        //   if (!formattedValue.startsWith("+91")) {
        //     formattedValue = "+91";
        //   }

        //   const numberPart = formattedValue
        //     .slice(3)
        //     .replace(/\D/g, "")
        //     .slice(0, 10);

        //     setFormData({
        //     ...formData,
        //     mobileNo: "+91" + numberPart,
        //   });

        //   return;

        // }

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const userDetails = { ...formData, mobileNo: "+91" + formData.mobileNo }
        // Handle form submission logic here
        console.log('Form submitted:', userDetails);

        // setLoading(true);
        // handle api call
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
                // ToastComponent.success("Thank you for showing interest. Our executive will get back to you shortly.");
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
                // add code to download ebook
                console.log("download ebook");
                // Download the PDF ebook
                // Create a link element
                const link = document.createElement('a');

                // Set the href to the PDF path in public folder
                // link.href = '/ebooks/e-book.pdf';

                // Set the download attribute (filename for the downloaded file)
                link.download = 'e-book.pdf';

                // Append to the document
                document.body.appendChild(link);

                // Trigger the download
                link.click();

                // Clean up
                document.body.removeChild(link);

                // Open a new tab and redirect to the specified URL
                window.open('https://paid.oasisindia.in/ebooks/e-book.pdf', '_blank');

                // close the popup
                setShowPopup(false); // before make the popup false download the ebook
                // router.push('/thank-you');
            }).catch(error => {
                console.error(error);
                setErrorMessage("There was an error submitting the form. Please try again.");
            })
                .finally(() => {
                    // setLoading(false);
                    setShowPopup(false);
                });

        } catch (error) {
            console.error(error);
            setErrorMessage(
                "There was an error submitting the form. Please try again."
            );
            // setLoading(false);
        }

        // api call end
        setShowPopup(false);
        // You can add API call to send data to your backend here


    };

    if (!showPopup) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[9999999] flex items-center justify-center p-4">
            <div className="relative bg-pink-100 rounded-lg max-w-md md:max-w-2xl w-full overflow-hidden">
                {/* Close button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 text-3xl"
                >
                    ×
                </button>

                <div className="flex flex-col md:flex-row">
                    {/* Book image */}
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

                    {/* Form section */}
                    <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
                        <h2 className="text-blue-900 text-xl md:text-3xl font-bold mb-1">
                            Download E-Book
                        </h2>
                        <p className="text-blue-900 mb-4">
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
                                    <option value="other">Other</option>
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
                                    pattern="[0-9]{10}"
                                    required
                                    className="w-full p-3 border border-l-0 rounded-r-md"
                                    value={formData.mobileNo}
                                    onChange={handleChange}
                                />
                            </div>

                            {errMsg && <p className='text-sm text-red-500'>{errMsg}</p>}

                            <button
                                type="submit"
                                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-md font-bold text-lg transition-colors"
                            >
                                Download
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IVFPopup;