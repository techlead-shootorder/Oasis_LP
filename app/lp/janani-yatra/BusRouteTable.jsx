'use client'
import { useState } from 'react';
import { Bell } from 'lucide-react';

export default function BusRouteMap() {
  const [notifications, setNotifications] = useState({
    'Warangal': false,
    'Karimnagar': false,
    'Nalgonda': false
  });

  const toggleNotification = (city) => {
    setNotifications(prev => ({
      ...prev,
      [city]: !prev[city]
    }));
  };

  const routes = [
    { city: 'Warangal', date: 'April 25', location: 'Hanumakonda Bus Stop', time: '9AM-5PM' },
    { city: 'Karimnagar', date: 'April 26', location: 'Gandhi Chowk', time: '10AM-6PM' },
    { city: 'Nalgonda', date: 'April 27', location: 'Clock Tower', time: '9AM-4PM' }
  ];

  return (
    <div className="w-full bg-pink-200 rounded-lg shadow-sm py-10 bg-[url(/images/lp/campaign/treatment_bg_img_cropped.png)] bg-repeat">
      <h1 className="text-primary text-center font-extrabold text-3xl mb-4">BUS ROUTE MAP</h1>
      
      <div className="overflow-x-auto bg-white max-w-7xl mx-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-purple-200 text-center">
              <th className="py-2 px-3 text-md font-bold text-primary-50 uppercase tracking-wider whitespace-nowrap text-center">CITY</th>
              <th className="py-2 px-3 text-md font-bold text-primary-50 uppercase tracking-wider whitespace-nowrap text-center">DATE</th>
              <th className="py-2 px-3 text-md font-bold text-primary-50 uppercase tracking-wider whitespace-nowrap text-center">LOCATION LANDMARK</th>
              <th className="py-2 px-3 text-md font-bold text-primary-50 uppercase tracking-wider whitespace-nowrap text-center">TIME</th>
            </tr>
          </thead>
          <tbody>
            {routes.map((route) => (
              <tr key={route.city} className="border-b border-purple-100">
                <td className="py-3 px-3 text-sm text-gray-800 font-bold text-center">{route.city}</td>
                <td className="py-3 px-3 text-sm text-gray-800 font-bold text-center">{route.date}</td>
                <td className="py-3 px-3 text-sm text-gray-800 font-bold text-center">{route.location}</td>
                <td className="py-3 px-3 text-sm text-gray-800 font-bold text-center">{route.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 flex items-center justify-center">
        <button
          className="flex items-center gap-2 bg-primary-50 text-white px-4 py-2 rounded-md text-sm hover:bg-primary transition-colors"
        >
          <Bell size={16} />
          <span>NOTIFY ME WHEN BUS ARRIVES</span>
        </button>
      </div>
    </div>
  );
}