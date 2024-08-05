'use client'
import { getUpcomingEvents } from '@/lib/data';
import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';


const marqParams = {
  autoFill: true,
  pauseOnHover: true,
  speed: 80, 
};


const NewsEvents = () => {
  
  const [data, setData] = useState();

  useEffect(() => {
    getUpcomingEvents()
      .then((data) => {
        setData(data);
        // setLoading(false);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
    }, []);
    

  return (
    <div className="py-10 bg-white">
   <h2 className="text-2xl md:text-[2.6rem] ml-4 md:ml-20 font-bold mb-6 flex items-center">
        <span className="w-2 h-6 bg-blue-500 mr-2"></span> News, Events & More
      </h2>
      <div className="relative overflow-hidden py-10 ">
        <Marquee {...marqParams} className="w-full">
          {data?.map((item, index) => (
            <div
              key={index}
              className="min-w-[400px] max-w-[300px] p-4 bg-white rounded-lg shadow-md border mx-10 flex-shrink-0"
            >
              <div
                className={`px-2 py-1 w-24 flex justify-center rounded-full text-white text-sm font-semibold mb-4 ${
                  item[2] === 'Event' ? 'bg-blue-500' : 'bg-red-500'
                }`}
              >
                {item.type}
              </div>
              <p className="text-lg font-semibold mb-2">{item[3]}</p>
              {item[4] && <p className="text-gray-500 mb-2">{item[4]}</p>}
              {item[7] && (
                <div className="flex items-center text-gray-500 text-sm mb-1">
                  <svg className="w-4 h- mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-4 14h.01M12 12h.01M12 8h.01M12 16h.01M5 8h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2z" />
                  </svg>
                  {item[7]}
                </div>
              )}
              {item.time && (
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3M12 19a7 7 0 110-14 7 7 0 010 14z" />
                  </svg>
                  {item[10]}
                </div>
              )}
              <a href={`https://eventsatucek.vercel.app/e/${item[1]}`} className="text-blue-500 font-semibold">
                Know More...
              </a>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default NewsEvents;
