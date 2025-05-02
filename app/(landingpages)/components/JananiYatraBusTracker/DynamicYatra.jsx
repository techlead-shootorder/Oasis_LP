"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const JananiYatraBusTracker = () => {
  const [currentTab, setCurrentTab] = useState(null);
  
  // Schedule data (date, day, and stops)
  const scheduleData = [
    {
      date: "31-May-25",
      day: "Saturday",
      stops: ["Medak", "Nizambad", "Sangareddy", "Vikarabad"]
    },
    {
      date: "1-June-25",
      day: "Sunday",
      stops: ["Nizambad", "Sangareddy", "Vikarabad", "Parigi"]
    },
    {
      date: "2-June-25",
      day: "Monday",
      stops: ["Sangareddy", "Vikarabad", "Parigi", "Shamshabad"]
    },
    {
      date: "3-June-25",
      day: "Tuesday",
      stops: ["Vikarabad", "Parigi", "Shamshabad", "Mahabubnagar"]
    },
    {
      date: "4-June-25",
      day: "Wednesday",
      stops: ["Parigi", "Shamshabad", "Mahabubnagar", "Adoni"]
    },
    {
      date: "5-July-25", // Note: This appears to be July instead of June in your data
      day: "Thursday",
      stops: ["Shamshabad", "Mahabubnagar", "Adoni", ""]
    },
    {
      date: "6-June-25",
      day: "Friday",
      stops: ["Mahabubnagar", "Adoni", "", ""]
    }
  ];

  // Function to get bus location based on current date
  const getBusLocation = () => {
    // For demo purposes, you would use the actual current date
    // const today = new Date().toLocaleDateString("en-GB", {
    //   day: "2-digit",
    //   month: "short",
    //   year: "2-digit"
    // }).replace(/ /g, "-");
    
    // For testing, let's hardcode a specific date
    const today = "1-June-25"; // Change this to test different dates
    
    // Find the schedule for today
    const todaySchedule = scheduleData.find(item => item.date === today);
    
    if (todaySchedule) {
      // Current location is the second item (index 1) which is marked with ** in your example
      const currentLocation = todaySchedule.stops[1];
      setCurrentTab(currentLocation);
      return todaySchedule;
    } else {
      // If no schedule found for today, use the first schedule as default
      setCurrentTab(scheduleData[0].stops[1]);
      return scheduleData[0];
    }
  };

  useEffect(() => {
    getBusLocation();
  }, []);

  const currentSchedule = getBusLocation();
  
  // Prepare tabs data with previous, current, and next stops
  const tabsData = currentSchedule ? currentSchedule.stops.map((stop, index) => {
    // Label the tabs as previous, current, or upcoming based on their position
    let status = "";
    if (index === 0) status = "Previous";
    else if (index === 1) status = "Current";
    else status = "Next";
    
    return {
      name: stop || "---", // If stop is empty, display ---
      status
    };
  }) : [];

  return (
    <div className="max-w-screen-xl mx-auto px-4 lg:px-10 py-10 bg-purple-50 rounded-3xl">
      <div className="text-center">
        <h2 className="text-[22px] md:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary mb-6">
          Where is the Janani Yatra Bus Now?
        </h2>
        
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="flex items-center">
            <span className="inline-flex items-center text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-1">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              Live: Bus Currently in {currentTab || "Loading..."}
            </span>
          </div>
          <div className="flex items-center ml-4">
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Track Location on Google Maps
            </a>
          </div>
        </div>

        {/* Tabs */}
        <div className="relative">
          <div className="flex justify-center space-x-2 sm:space-x-4 mb-8">
            {tabsData.map((tab, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm sm:text-base border ${
                  tab.status === "Current" 
                    ? "bg-primary text-white border-primary" 
                    : "bg-white text-primary border-primary hover:bg-primary hover:text-white transition-colors"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
          
          {/* Bus Image and Timeline */}
          <div className="relative flex justify-center items-center">
            <div className="w-3/4 h-1 bg-primary"></div>
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2">
              <div className="relative">
                <svg width="60" height="40" viewBox="0 0 60 40" className="text-primary">
                  <path 
                    d="M5,16 L5,24 L10,24 L10,30 L15,30 L15,24 L45,24 L45,30 L50,30 L50,24 L55,24 L55,16 C55,8 50,8 50,8 L10,8 C10,8 5,8 5,16 Z" 
                    fill="currentColor"
                  />
                  <circle cx="15" cy="32" r="5" fill="black" />
                  <circle cx="45" cy="32" r="5" fill="black" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Date information */}
        <div className="mt-6 text-primary">
          <p>
            {currentSchedule ? `${currentSchedule.date} (${currentSchedule.day})` : "Loading schedule..."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JananiYatraBusTracker;