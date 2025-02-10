"use client";

import React, { useState, memo, Suspense } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { FaCheckCircle } from "react-icons/fa";

const MFModallp3 = dynamic(() => import("../Modal/MFModallp3"), {
 loading: () => <div className="animate-pulse bg-gray-200 rounded-lg h-96" />,
 ssr: false
});

const SPECIALISTS_DATA = [
  {
    id: 1, 
    name: "Dr. Krishna Chaitanya",
    image: "/images/lp/doctors/updated/Krishna_Chaithanya.webp",
    qualifications: "MS (Clinical Embryology)",
    role: "Scientific Head and Clinical Embryologist",
    rating: "99%",
    experience: "20 yrs exp"
  },
 {
   id: 2,
   name: "Dr. Raghuveer Karne",
   image: "/images/doctor/newDoctors/Dr. Raghuveer Karne.webp",
   qualifications: "MS (General Surgery), \nDNB (Genitourinary Surgery)",
   role: "Consultant",
   rating: "99%",
   experience: "8 yrs exp"
 }
 
];

const DoctorCard = memo(({ doctor, onBookClick }) => (
 <div className="pb-3 md:p-3 2xl:p-6 lg:transition lg:ease-in-out lg:duration-500 lg:flex items-center text-center lg:text-start font-3 text-2xl group hover:bg-[#fee8f1] border rounded-3xl border-transparent hover:border-primary">
   <div className="relative">
     <Image 
       src={doctor.image}
       alt={doctor.name}
       className="w-auto mx-auto h-[270px] lg:h-[190px] xl:h-[290px] 2xl:h-[350px] object-contain"
       width={239}
       height={290}
       loading="lazy"
       quality={90}
       objectFit="cover"

     />
   </div>

   <div className="lg:pl-4 2xl:pl-8">
     <div className="lg:mb-8 inline-flex items-center gap-2 lg:transition lg:ease-in-out lg:duration-500 lg:opacity-0 lg:group-hover:opacity-100 mt-5 lg:mt-0">
       <Image 
         className="h-[26px] w-auto"
         src="/images/lp/lp3/Practo_Health_Logo.png"
         alt="practo logo"
         width={26}
         height={26}
         loading="eager"
       />
       <h3 className="text-[21px]">{doctor.rating}</h3>
       <FaCheckCircle className="text-[28px] text-green-600"/>
       <h3 className="text-[18px] text-black">{doctor.experience}</h3>
     </div>

     <div className="lg:transition lg:ease-in-out lg:duration-500 lg:translate-y-0 lg:group-hover:-translate-y-4">
       <h2 className="mb-2 text-primary text-base xl:text-[22px] 2xl:text-[26px]">
         {doctor.name}
       </h2>
       <h4 className="font-medium text-xs xl:text-lg 2xl:text-xl leading-[1.6]">
         {doctor.qualifications}<br/>{doctor.role}
       </h4>
     </div>

     <div className="mt-2 text-center xl:text-start lg:transition lg:ease-in-out lg:duration-500 lg:opacity-0 group-hover:opacity-100">
       <button 
         onClick={onBookClick}
         className="px-4 2xl:px-8 py-3 leading-none rounded-[10px] bg-accent text-sm xl:text-base whitespace-nowrap font-semibold text-white uppercase"
       >
         BOOK A CONSULTATION
       </button>
     </div>
   </div>
 </div>
));

DoctorCard.displayName = "DoctorCard";

const IVFSpecialistsV2 = ({ service, isMeta }) => {
 const [showModal, setShowModal] = useState(false);

 const handleOpenModal = () => setShowModal(true);
 const handleCloseModal = () => setShowModal(false);

//  const serviceTitle = service 
//    ? service === 'fertility' ? 'Fertility' : service.toUpperCase() 
//    : "IVF";
 return (
   <Suspense fallback={<div className="animate-pulse bg-gray-200 min-h-screen" />}>
     <div className="max-w-screen-4xl mx-auto px-4 lg:px-10 xl:px-14 2xl:px-20 py-10 lg:py-16">
       <h2 className="text-[22px] md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-[52px] !leading-[1.2] font-bold text-primary text-center tracking-wide">
         {/* Best {serviceTitle} Specialists in India */}
         Best Male Fertility Specialists in India
       </h2>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-10 mt-5 md:mt-10">
         {SPECIALISTS_DATA.map(doctor => (
           <DoctorCard 
             key={doctor.id}
             doctor={doctor}
             onBookClick={handleOpenModal}
           />
         ))}
       </div>
     </div>

     {showModal && (
       <MFModallp3 
         isOpen={showModal} 
         onClose={handleCloseModal} 
         service={service}
         isMeta={isMeta}
       />
     )}
   </Suspense>
 );
};

export default memo(IVFSpecialistsV2);