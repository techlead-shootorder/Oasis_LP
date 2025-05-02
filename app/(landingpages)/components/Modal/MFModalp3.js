"use client";
import React, { Suspense } from "react";
// import MFLeadFormV2 from "../LeadForm/MFLeadFormV2";
import MFLeadFormlp3Meta from "../LeadForm/MFLeadFormlp3Meta";


const ModalV2 = ({ isOpen, onClose, center, service }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[99999]">
  
      <div className="md:bg-[#ffe9f3] w-full max-w-lg p-0 md:p-8 rounded-lg shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-white text-2xl z-50"
          onClick={onClose}
        >
          &times;
        </button>
        <Suspense>
       <MFLeadFormlp3Meta center={center} service={service} />
        </Suspense>
      </div>
    </div>
  );
};

export default ModalV2;
