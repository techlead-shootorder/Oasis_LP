"use client";
import { useState, useEffect } from "react";

const JananiYatraBusTracker = () => {
  const [currentTab, setCurrentTab] = useState(null);
  const [currentSchedule, setCurrentSchedule] = useState(null);
  const [tabsData, setTabsData] = useState([]);
  
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
      date: "5-June-25", // Fixed to June instead of July
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
    // For testing, hardcode a specific date
    const today = "1-June-25"; // Change this to test different dates
    
    // For real use, uncomment this:
    // const now = new Date();
    // const today = `${now.getDate()}-${['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'][now.getMonth()]}-${now.getFullYear().toString().substr(2)}`;
    
    // Find the schedule for today
    const todaySchedule = scheduleData.find(item => item.date === today);
    
    if (todaySchedule) {
      // Current location is the second item (index 1) which is marked with ** in example
      const currentLocation = todaySchedule.stops[1];
      return { schedule: todaySchedule, location: currentLocation };
    } else {
      // If no schedule found for today, use the first schedule as default
      return { schedule: scheduleData[0], location: scheduleData[0].stops[1] };
    }
  };

  useEffect(() => {
    // Get location data once when component mounts
    const { schedule, location } = getBusLocation();
    setCurrentTab(location);
    setCurrentSchedule(schedule);
    
    // Prepare tabs data
    const tabs = schedule.stops.map((stop, index) => {
      let status = "";
      if (index === 0) status = "Previous";
      else if (index === 1) status = "Current";
      else status = "Next";
      
      return {
        name: stop || "---", // If stop is empty, display ---
        status
      };
    });
    
    setTabsData(tabs);
  }, []);

  return (
    <div className="bg-pink-50">
    <div className="max-w-screen-xl mx-auto px-4 lg:px-10 py-10 ">
      <div className="text-center">
        <h2 className="text-[22px] md:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary mb-6">
          Where is the Janani Yatra Bus Now?
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-6">
          <div className="flex items-center">
            <span className="inline-flex items-center text-primary">
              <span className="mr-1">📍</span>
              Live: Bus Currently in {currentTab || "Loading..."}
            </span>
          </div>
          <div className="flex items-center sm:ml-4">
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center">
              <span className="mr-1">🗺️</span>
              Track Location on Google Maps
            </a>
          </div>
        </div>

        {/* Tabs */}
        <div className="relative">
          <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 mb-8">
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
          
          {/* Bus Timeline */}
          <div className="relative flex justify-center items-center">
            <div className="w-3/4 h-1 bg-primary"></div>
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1 text-2xl">
              🚌
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
    </div>
  );
};

export default JananiYatraBusTracker;