'use client'
import { useState } from 'react';

export default function BusRouteMap() {
  const [visibleRows, setVisibleRows] = useState(10);

  const routes = [
    { date: '10-May-25', day: 'Saturday', location: 'Jangaon - Preston College Grounds', time: '12:00 PM - 4:00 PM' },
    { date: '11-May-25', day: 'Sunday', location: 'Jagityal - Gvt High School OLD Pochammawada', time: '9:00 AM - 2:00 PM' },
    { date: '13-May-25', day: 'Tuesday', location: 'Gudur - Alluri Adhi Shesha Reddy Stadium (Military Ground)', time: '9:00 AM - 2:00 PM' },
    { date: '14-May-25', day: 'Wednesday', location: 'Markapuram - Zillaparshad High School Ground', time: '9:00 AM - 2:00 PM' },
    { date: '15-May-25', day: 'Thursday', location: 'Amaravathi - Budha Statue ground', time: '9:00 AM - 2:00 PM' },
    { date: '17-May-25', day: 'Saturday', location: 'Tiruvuru - Kalyani Nursing Home', time: '9:00 AM - 2:00 PM' },
    { date: '18-May-25', day: 'Sunday', location: 'Jaggaiahpet - Venkatasunnee multispeciality hospital', time: '9:00 AM - 2:00 PM' },
    { date: '19-May-25', day: 'Monday', location: 'Jaggampeta - Dr Neeraja Hospital', time: '9:00 AM - 2:00 PM' },
    { date: '21-May-25', day: 'Wednesday', location: 'Thagarapuvalasa - Raja Clinic, Adarshanagar', time: '9:00 AM - 2:00 PM' },
    { date: '22-May-25', day: 'Thursday', location: 'Narasipatnam - Government land, 5 Raod Junction, Near Uma Narayana childeren hospital', time: '9:00 AM - 2:00 PM' },
    { date: '23-May-25', day: 'Friday', location: 'Vizianagaram - MR College stadium', time: '9:00 AM - 2:00 PM' },
    { date: '24-May-25', day: 'Saturday', location: 'Gajuwaka - Amaravathi Park', time: '9:00 AM - 2:00 PM' },
    { date: '25-May-25', day: 'Sunday', location: 'Khammam - Pavilion grounds', time: '9:00 AM - 2:00 PM' },
    { date: '26-May-25', day: 'Monday', location: 'Nalgonda - Nagarjuna junior college', time: '9:00 AM - 2:00 PM' },
    { date: '27-May-25', day: 'Tuesday', location: 'Bhongir - Chimula Shiva Rajani Narayanreddy government boys junior college', time: '9:00 AM - 2:00 PM' },
    { date: '28-May-25', day: 'Wednesday', location: 'Siddipet - IMA Maitrivanam', time: '9:00 AM - 2:00 PM' },
    { date: '30-May-25', day: 'Friday', location: 'Medak - Dr Dayal Hospital', time: '9:00 AM - 2:00 PM' },
    { date: '31-May-25', day: 'Saturday', location: 'Nizambad - Open space near Kallilwadi-Secbad Team', time: '9:00 AM - 2:00 PM' },
    { date: '1-June-25', day: 'Sunday', location: 'Sangareddy - MNR Medical College', time: '9:00 AM - 2:00 PM' },
    { date: '2-June-25', day: 'Monday', location: 'Vikarabad - Chigulapalli ground', time: '9:00 AM - 2:00 PM' },
    { date: '3-June-25', day: 'Tuesday', location: 'Parigi - Parigi Mini stadium', time: '9:00 AM - 2:00 PM' },
    { date: '4-June-25', day: 'Wednesday', location: 'Shamshabad - Government Boys High School Ground', time: '9:00 AM - 2:00 PM' },
    { date: '5-July-25', day: 'Thursday', location: 'Mahabubnagar - Govt boys junior college', time: '9:00 AM - 2:00 PM' },
    { date: '6-June-25', day: 'Friday', location: 'Adoni - Arts and science college auditorium', time: '9:00 AM - 2:00 PM' }
  ];

  const handleShowMore = () => {
    if (visibleRows + 10 >= routes.length) {
      setVisibleRows(routes.length); // Show all rows
    } else {
      setVisibleRows(visibleRows + 10); // Show 10 more rows
    }
  };

  return (
    <div className="w-full rounded-lg shadow-lg py-16 px-4">
      <h1 className="text-center font-extrabold text-[22px] md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-[52px] mb-6" style={{ color: "#874487" }}>
        Janani Yatra Route Map
      </h1>

      <div className="overflow-x-auto bg-white max-w-6xl mx-auto rounded-lg shadow-md">
        <table className="w-full">
          <thead>
            <tr style={{ backgroundColor: "#874487" }}>
              <th className="py-3 px-4 text-white font-bold text-left">DATE</th>
              <th className="py-3 px-4 text-white font-bold text-left">DAY</th>
              <th className="py-3 px-4 text-white font-bold text-left">CITY-LOCATION</th>
              <th className="py-3 px-4 text-white font-bold text-left">SCHEDULE</th>
            </tr>
          </thead>
          <tbody>
            {routes.slice(0, visibleRows).map((route, index) => (
              <tr
                key={index}
                className="border-b hover:bg-purple-50 transition-colors cursor-pointer"
                style={{ borderColor: "#e6d6e6" }}
              >
                <td className="py-3 px-4 text-sm font-medium text-left">{route.date}</td>
                <td className="py-3 px-4 text-sm font-medium text-left">{route.day}</td>
                <td className="py-3 px-4 text-sm font-medium text-left">{route.location}</td>
                <td className="py-3 px-4 text-sm font-medium text-left">{route.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {visibleRows < routes.length && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleShowMore}
            className="px-6 py-2 rounded-md font-medium text-white shadow-md hover:shadow-lg transition-all"
            style={{ backgroundColor: "#874487" }}
          >
            {visibleRows + 10 >= routes.length ? "Show All" : "Show More"}
          </button>
        </div>
      )}
     
     <div className='flex justify-center mt-6'>
      <button
        className="px-6 py-2 rounded-md font-medium text-white shadow-md hover:shadow-lg transition-all"
        style={{ backgroundColor: "#874487" }}
      >
        Notify Me When the Bus Is in My City
      </button>
    </div>
    </div>
  );
}