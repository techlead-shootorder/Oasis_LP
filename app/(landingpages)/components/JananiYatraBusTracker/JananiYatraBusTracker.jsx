"use client";
import { useState, useEffect } from "react";

const JananiYatraBusTracker = () => {
  const [currentTab, setCurrentTab] = useState(null);
  const [currentSchedule, setCurrentSchedule] = useState(null);
  const [tabsData, setTabsData] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  
  // Schedule data from the table provided
  const scheduleData = [
    {
      date: "4-May-25",
      day: "",
      stops: ["........", "Hyderabad", "Jangaon", "Jagityal"]
    },
    {
      date: "5-May-25",
      day: "",
      stops: ["........", "Hyderabad", "Jangaon", "Jagityal"]
    },
    {
      date: "6-May-25",
      day: "",
      stops: ["........", "Hyderabad", "Jangaon", "Jagityal"]
    },
    {
      date: "7-May-25",
      day: "Wednesday",
      stops: ["........", "Hyderabad", "Jangaon", "Jagityal"]
    },
    {
      date: "8-May-25",
      day: "Thursday",
      stops: ["........", "Hyderabad", "Jangaon", "Jagityal"]
    },
    {
      date: "9-May-25",
      day: "Friday",
      stops: ["........", "Hyderabad", "Jangaon", "Jagityal"]
    },
    {
      date: "10-May-25",
      day: "Saturday",
      stops: ["Hyderabad", "Jangaon", "Jagityal", "Gudur"]
    },
    {
      date: "11-May-25",
      day: "Sunday",
      stops: ["Jangaon", "Jagityal", "Gudur", "Markapuram"]
    },
    {
      date: "12-May-25",
      day: "Monday",
      stops: ["Jangaon", "Jagityal", "Gudur", "Markapuram"]
    },
    {
      date: "13-May-25",
      day: "Tuesday",
      stops: ["Jagityal", "Gudur", "Markapuram", "Amaravathi"]
    },
    {
      date: "14-May-25",
      day: "Wednesday",
      stops: ["Gudur", "Markapuram", "Amaravathi", "Tiruvuru"]
    },
    {
      date: "15-May-25",
      day: "Thursday",
      stops: ["Markapuram", "Amaravathi", "Tiruvuru", "Jaggaiahpet"]
    },
    {
      date: "16-May-25",
      day: "Friday",
      stops: ["Markapuram", "Amaravathi", "Tiruvuru", "Jaggaiahpet"]
    },
    {
      date: "17-May-25",
      day: "Saturday",
      stops: ["Amaravathi", "Tiruvuru", "Jaggaiahpet", "Jaggampeta"]
    },
    {
      date: "18-May-25",
      day: "Sunday",
      stops: ["Tiruvuru", "Jaggaiahpet", "Jaggampeta", "Thagarapuvalasa"]
    },
    {
      date: "19-May-25",
      day: "Monday",
      stops: ["Jaggaiahpet", "Jaggampeta", "Thagarapuvalasa", "Narasipatnam"]
    },
    {
      date: "20-May-25",
      day: "Tuesday",
      stops: ["Jaggaiahpet", "Jaggampeta", "Thagarapuvalasa", "Narasipatnam"]
    },
    {
      date: "21-May-25",
      day: "Wednesday",
      stops: ["Jaggampeta", "Thagarapuvalasa", "Narasipatnam", "Vizianagaram"]
    },
    {
      date: "22-May-25",
      day: "Thursday",
      stops: ["Thagarapuvalasa", "Narasipatnam", "Vizianagaram", "Gajuwaka"]
    },
    {
      date: "23-May-25",
      day: "Friday",
      stops: ["Narasipatnam", "Vizianagaram", "Gajuwaka", "Khammam"]
    },
    {
      date: "24-May-25",
      day: "Saturday",
      stops: ["Vizianagaram", "Gajuwaka", "Khammam", "Nalgonda"]
    },
    {
      date: "25-May-25",
      day: "Sunday",
      stops: ["Gajuwaka", "Khammam", "Nalgonda", "Bhongir"]
    },
    {
      date: "26-May-25",
      day: "Monday",
      stops: ["Khammam", "Nalgonda", "Bhongir", "Siddipet"]
    },
    {
      date: "27-May-25",
      day: "Tuesday",
      stops: ["Nalgonda", "Bhongir", "Siddipet", "Medak"]
    },
    {
      date: "28-May-25",
      day: "Wednesday",
      stops: ["Bhongir", "Siddipet", "Medak", "Nizambad"]
    },
    {
      date: "29-May-25",
      day: "Thursday",
      stops: ["Bhongir", "Siddipet", "Medak", "Nizambad"]
    },
    {
      date: "30-May-25",
      day: "Friday",
      stops: ["Siddipet", "Medak", "Nizambad", "Sangareddy"]
    },
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
      date: "5-June-25",
      day: "Thursday",
      stops: ["Shamshabad", "Mahabubnagar", "Adoni", "Mahububabad"]
    },
    {
      date: "6-June-25",
      day: "Friday",
      stops: ["Mahabubnagar", "Adoni", "Mahububabad", "Narasampet "]
    },
     {
      date: "8-June-25",
      day: "Sunday",
      stops: ["Adoni", "Mahububabad", "Narasampet", "Mancherial"]
    },
     {
      date: "9-June-25",
      day: "Monday",
      stops: ["Mahububabad", "Narasampet", "Mancherial", "........"]
    },
     {
      date: "10-June-25",
      day: "Tuesday",
      stops: ["Narasampet", "Mancherial", "........", "........"]
    }
  ];

  // Function to get bus location based on current date
  const getBusLocation = () => {
    // Get the current date in the format "DD-MMM-YY"
    const now = new Date();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const today = `${now.getDate()}-${months[now.getMonth()]}-${now.getFullYear().toString().substr(2)}`;
    
    // For testing, uncomment this line and comment the above code to test specific dates
    // const today = "7-June-25"; // Change this to test different dates
    
    // Find the schedule for today
    const todaySchedule = scheduleData.find(item => item.date === today);
    
    if (todaySchedule) {
      // Current location is the second item (index 1) which is the current location in the table
      const currentLocation = todaySchedule.stops[1];
      return { schedule: todaySchedule, location: currentLocation, found: true };
    } else {
      // If no schedule found for today, return null
      return { schedule: null, location: null, found: false };
    }
  };

  // Handle responsive design for tabs
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // Consider < 768px as mobile
    };

    // Check on initial load
    checkIfMobile();

    // Add resize listener
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    // Get location data once when component mounts
    const { schedule, location, found } = getBusLocation();
    
    // Only render the component if a matching date is found
    if (found && schedule) {
      setShouldRender(true);
      setCurrentTab(location);
      setCurrentSchedule(schedule);
      
      // Prepare tabs data
      const tabs = schedule.stops.map((stop, index) => {
        let status = "";
        if (index === 0) status = "Previous";
        else if (index === 1) status = "Current";
        else status = "Next";
        
        return {
          name: stop, // Display the stop name as is
          status
        };
      });
      
      setTabsData(tabs);
    } else {
      setShouldRender(false);
    }
  }, []);

  // Function to get tabs based on device type
  const getDisplayTabs = () => {
    if (!tabsData.length) return [];
    
    if (isMobile) {
      // For mobile, show only 3 tabs
      return tabsData.slice(0, 3);
    } else {
      // For desktop, show all 4 tabs
      return tabsData;
    }
  };

  // Don't render the component if no matching date is found
  if (!shouldRender) {
    return null;
  }

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
            {/* <div className="flex items-center sm:ml-4">
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center">
                <span className="mr-1">🗺️</span>
                Track Location on Google Maps
              </a>
            </div> */}
          </div>

          {/* Tabs */}
          <div className="relative">
            <div className="flex flex-wrap justify-center space-x-2 sm:space-x-8 md:space-x-16 lg:space-x-20 mb-8">
              {getDisplayTabs().map((tab, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm sm:text-base border ${
                    tab.status === "Current" 
                      ? "bg-primary text-white border-primary" 
                      : "bg-white text-primary border-primary hover:bg-primary hover:text-white transition-colors"
                  } ${tab.name === "........" ? "opacity-50 cursor-not-allowed" : ""}`}
                  disabled={tab.name === "........"}
                >
                  {tab.name}
                </button>
              ))}
            </div>
            
            {/* Bus Timeline */}
            <div className="relative flex justify-center items-center">
              <div className="w-3/4 h-1 bg-primary mt-12"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1 text-2xl ">
                <img src="/images/Yatra/bus.webp" className="mt-0 w-[180px] h-[80px] object-contain" alt="Bus" />
              </div>
            </div>
          </div>

          {/* Date information */}
          <div className="mt-20 text-primary">
            <p>
              {currentSchedule ? `${currentSchedule.date} ${currentSchedule.day ? `(${currentSchedule.day})` : ""}` : "Loading schedule..."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JananiYatraBusTracker;