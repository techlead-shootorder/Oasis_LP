// About.js
import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
        <Image
          src="/images/site-link/site-link-about-image.webp"
          alt="About Us"
          height={400}
          width={200}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      
      {/* Right Side - Content */}
      <div className="w-full md:w-2/3 md:pl-6 flex flex-col justify-center">
        <h2 className="text-[22px] md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-[52px] !leading-[1.2] font-bold mb-4">About Us</h2>
        <p className="text-lg mb-4">
          Oasis Fertility is a comprehensive healthcare provider with specific attention to infertility treatments. Oasis is a ‘one-stop’ single-day care clinic where consultation, investigation and treatment are taken care of during the course of a single day.
        </p>
        <p className="text-lg mb-4">
          We also take immense pride in our strict adherence to standards and quality. Oasis is an ISO 2001 certified organization and diligently follows the Indian Council of Medical Research (ICMR) guidelines. Oasis is also a member of The American Society for Reproductive Medicine and The Federation of Obstetric and Gynaecological Societies of India.
        </p>
        <p className="text-lg">
          Oasis is a unit of the entity Sadguru Healthcare Services Pvt Ltd., which aims to offer state of art services in the Indian healthcare industry by leveraging latest technologies coupled with proven, evidence based international medical practices.
        </p>
      </div>
    </section>
  );
};

export default About;
