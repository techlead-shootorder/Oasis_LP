"use client";
import React, { Suspense } from "react";
import LeadFormV2 from "../LeadForm/LeadFormV2";

const ModalV2 = ({ isOpen, onClose, center, service, }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      {/* bg-[url(https://images.oasisindia.in/website/lp/campaign/treatment_bg_img_cropped.png)] bg-repeat  */}
      <div className="md:bg-[#ffe9f3] w-full max-w-lg p-0 md:p-8 rounded-lg shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-white"
          onClick={onClose}
        >
          &times;
        </button>
        <Suspense>
          <LeadFormV2 center={center} service={service} />
        </Suspense>
      </div>
    </div>
  );
};

export default ModalV2;
