"use client"
import React, { useState } from 'react';

const Timings = () => {
  const [selectedTime, setSelectedTime] = useState('');
  
  const timings = {
    Monday: "09:30 AM - 06:00 PM",
    Tuesday: "09:30 AM - 06:00 PM"
  };

  const handleTimeSelect = (day, time) => {
    setSelectedTime(`${day}: ${time}`);
  };

  return (
    <div className=" py-10">
      <h2 className='text-[22px] mb-[1rem] md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-[52px] !leading-[1.2] font-bold text-primary text-center tracking-wide'>
      Doctors Available Timings
          </h2>
      <div className='px-4 py-6 bg-red-100'>
      <div className="flex justify-center gap-4 ">
        {Object.entries(timings).map(([day, time]) => (
          <div key={day} className="flex flex-col gap-2">
            <span className="text-center w-full text-primary">{day}</span>
            <button
              onClick={() => handleTimeSelect(day, time)}
              className="bg-transparent text-primary px-4 py-2 rounded-lg hover:bg-purple-200 transition-colors border border-primary"
            >
              {time}
            </button>
          </div>
        ))}


      </div>
      <div className='flex justify-center'>
      <button className="w-[250px] sm:w-[300px] mt-6 bg-orange-500 text-white py-2 px-2 sm:px-4 rounded-lg hover:bg-orange-600 transition-colors">
        BOOK A FREE CONSULTATION
      </button>
      </div>
      </div>
      

   

      {selectedTime && (
        <p className="mt-4 text-gray-700">
          Selected time: {selectedTime}
        </p>
      )}
    </div>
  );
};

export default Timings;