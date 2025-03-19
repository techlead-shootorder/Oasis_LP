"use client";

import { useState, memo, useEffect } from 'react';
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

const Dropdown = memo(({ displayTitle, locations, onSelect, isOpen, onToggle }) => (
  <div className="relative text-left flex flex-col items-center justify-center">
    <button
      onClick={onToggle}
      className="flex items-center px-4 py-2 bg-primary text-white text-xl sm:text-2xl rounded-md mb-6"
    >
      {displayTitle}
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

// Function to determine the parent location (city) for a given center name
const findParentLocation = (centerName) => {
  if (!centerName || centerName == 'india') return 'Hyderabad';
  
  // Format the center name for comparison
  let formattedCenterName = centerName.toLowerCase();
  if (formattedCenterName === 'hsr' ) {
    formattedCenterName = 'hsr layout';
  } 
  // else {
  //   formattedCenterName = centerName
  //     .split("-")
  //     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  //     .join(" ")
  //     .toLowerCase();
  // }

  // 
  
  // Check each location and its centers
  for (const [location, centers] of Object.entries(LOCATIONS_DATA)) {
    for (const centerData of centers) {
      // Compare area names case-insensitively
      if (centerData.area.toLowerCase() == formattedCenterName.toLowerCase()) {
        return location;
      }
    }

  }

  return  centerName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ") == 'Hsr' ? centerName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ").toUpperCase() + ' Layout'  :  centerName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  
  // If no match found, check for specific known centers
  // if (formattedCenterName.includes('hebbal')) return 'Bengaluru';
  // if (formattedCenterName.includes('kharadi')) return 'Pune';
  // if (formattedCenterName.includes('wakad')) return 'Pune';
  // if (formattedCenterName.includes('hsr')) return 'Bengaluru';
  // if (formattedCenterName.includes('banashankari')) return 'Bengaluru';
  
  // return 'Hyderabad'; // Default to Hyderabad if no match found
};

const formatCenterName = (centerName) => {
  if (!centerName) return '';
  
  if (centerName.toLowerCase() === 'hsr-layout' || centerName.toLowerCase() === 'hsr layout') {
    return 'HSR Layout';
  }
  
  return centerName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const CentersV2 = ({ center }) => {
  // Extract the center name if center is an object
  const centerName = center?.center_name || '';
  
  // Format the center name for display
  const formattedCenterName = formatCenterName(centerName);
  
  // Find the parent location based on the center name
  const initialLocation = centerName ? findParentLocation(centerName) : 'Hyderabad';
  
  const [selectedLocation, setSelectedLocation] = useState(initialLocation);
  const [isOpen, setIsOpen] = useState(false);
  
  // Update the selected location when the center prop changes
  useEffect(() => {
    if (centerName) {
      const parentLocation = findParentLocation(centerName);
      setSelectedLocation(parentLocation);
    }
  }, [centerName]);

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setIsOpen(false);
  };

  // Set the display title to the formatted center name if provided, otherwise use the selected location
  const displayTitle = selectedLocation || formattedCenterName;

  return (
    <div className="max-w-screen-4xl mx-auto px-4 lg:px-10 xl:px-14 2xl:px-20 py-10 xl:py-16 rounded-3xl">
      <h2 className="text-[22px] md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-[52px] !leading-[1.2] font-bold text-primary text-center tracking-wide mb-8">
        Our Presence Across India
      </h2>

      <Dropdown
        displayTitle={displayTitle}
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