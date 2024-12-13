"use client";

import { useState, memo } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import LOCATIONS_DATA from '@/util/lp/LOCATIONS_DATA';


const LocationCard = memo(({ area, address }) => (
 <div className="bg-pink-50 py-3 px-8 rounded-lg">
   <h2 className="text-primary text-2xl font-semibold">{area}</h2>
   <p className="text-primary text-lg">{address}</p>
 </div>
));

LocationCard.displayName = 'LocationCard';

const LocationsList = memo(({ locations = [] }) => (
 <div className="mt-4 max-w-max mx-auto overflow-x-auto md:overflow-x-hidden w-full">
   <div className="flex gap-8 w-max">
     {Array.from({ length: Math.ceil(locations.length / 2) }, (_, columnIndex) => (
       <div key={columnIndex} className="flex flex-col gap-4">
         {locations.slice(columnIndex * 2, columnIndex * 2 + 2).map((location, index) => (
           <LocationCard 
             key={`${location.area}-${index}`} 
             area={location.area} 
             address={location.address} 
           />
         ))}
       </div>
     ))}
   </div>
 </div>
));

LocationsList.displayName = 'LocationsList';

const Dropdown = memo(({ selectedLocation, locations, onSelect, isOpen, onToggle }) => (
 <div className="relative text-left flex flex-col items-center justify-center">
   <button
     onClick={onToggle}
     className="flex items-center px-4 py-2 bg-primary text-white text-xl sm:text-2xl rounded-md mb-6"
   >
     {selectedLocation}
     <MdKeyboardArrowDown className="ml-2" />
   </button>

   {isOpen && (
     <div className="absolute top-10 mt-2 w-full bg-white border rounded-md shadow-lg z-10 max-h-48 overflow-y-scroll">
       {locations.map(location => (
         <button
           key={location}
           onClick={() => onSelect(location)}
           className="block w-full text-left px-4 py-2 hover:bg-gray-200"
         >
           {location}
         </button>
       ))}
     </div>
   )}
 </div>
));

Dropdown.displayName = 'Dropdown';

const CentersV2 = () => {
 const [selectedLocation, setSelectedLocation] = useState('Hyderabad');
 const [isOpen, setIsOpen] = useState(false);

 const handleLocationSelect = (location) => {
   setSelectedLocation(location);
   setIsOpen(false);
 };

 return (
   <div className="max-w-screen-4xl mx-auto px-4 lg:px-10 xl:px-14 2xl:px-20 mb-10 lg:mb-16">
     <h2 className="text-[22px] md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-[52px] !leading-[1.2] font-bold text-primary text-center tracking-wide mb-8">
       Our Presence Across India
     </h2>

     <Dropdown
       selectedLocation={selectedLocation}
       locations={Object.keys(LOCATIONS_DATA)}
       onSelect={handleLocationSelect}
       isOpen={isOpen}
       onToggle={() => setIsOpen(!isOpen)}
     />

     <LocationsList locations={LOCATIONS_DATA[selectedLocation]} />
   </div>
 );
};

export default memo(CentersV2);