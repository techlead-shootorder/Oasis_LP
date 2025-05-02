"use client";
import React, { Suspense } from "react";
// import LeadFormV2 from "../LeadForm/LeadFormV2";
// import LeadFormlp3Meta from "../LeadForm/LeadFormlp3Meta";
import YatraLeadFormV2 from "../LeadForm/YatraLeadFormV2";



const ModalV2 = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
  
      <div className="md:bg-[#ffe9f3] w-full max-w-lg p-0 md:p-8 rounded-lg shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-white text-2xl z-50"
          onClick={onClose}
        >
          &times;
        </button>
        <Suspense>
        <YatraLeadFormV2/>
        </Suspense>
      </div>
    </div>
  );
};

export default ModalV2;
