'use client'
import React from 'react';
import Marquee from 'react-fast-marquee';


const newsEventsData = [
  {
    type: 'Event',
    title: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt .',
    date: '12-03-2024',
    time: '11:00pm',
  },
  {
    type: 'News',
    title: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt .',
    description: 'Lorem ipsumUt enim ad minim veniam, quis nostrud',
  },
  {
    type: 'Event',
    title: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt .',
    date: '12-03-2024',
    time: '11:00pm',
  },
  {
    type: 'News',
    title: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt .',
    description: 'Lorem ipsumUt enim ad minim veniam, quis nostrud',
  },
];

const marqParams = {
  autoFill: true,
  pauseOnHover: true,
  speed: 80, 
};

const NewsEvents = () => {
  return (
    <div className="py-10 bg-white">
      <h2 className="text-[2.6rem] ml-20 font-bold mb-6 flex items-center">
        <span className="w-2 h-6 bg-blue-500 mr-2"></span> News, Events & More
      </h2>
      <div className="relative overflow-hidden py-10 ">
        <Marquee {...marqParams} className="w-full">
          {newsEventsData.map((item, index) => (
            <div
              key={index}
              className="min-w-[400px] max-w-[300px] p-4 bg-white rounded-lg shadow-md border mx-10 flex-shrink-0"
            >
              <div
                className={`px-2 py-1 w-24 flex justify-center rounded-full text-white text-sm font-semibold mb-4 ${
                  item.type === 'Event' ? 'bg-blue-500' : 'bg-red-500'
                }`}
              >
                {item.type}
              </div>
              <p className="text-lg font-semibold mb-2">{item.title}</p>
              {item.description && <p className="text-gray-500 mb-2">{item.description}</p>}
              {item.date && (
                <div className="flex items-center text-gray-500 text-sm mb-1">
                  <svg className="w-4 h- mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-4 14h.01M12 12h.01M12 8h.01M12 16h.01M5 8h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2z" />
                  </svg>
                  {item.date}
                </div>
              )}
              {item.time && (
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3M12 19a7 7 0 110-14 7 7 0 010 14z" />
                  </svg>
                  {item.time}
                </div>
              )}
              <a href="#" className="text-blue-500 font-semibold">
                Load More...
              </a>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default NewsEvents;
