'use client';
import React, { useState } from 'react';

const Quick = () => {
  const [isOpen, setIsOpen] = useState({
    news: false,
    clubs: false,
    yetToBeFilled: false,
  });

  const toggleDropdown = (section) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="flex flex-col md:flex-row bg-white w-full h-auto md:h-[65vh] justify-center items-center gap-8 md:gap-40 p-8 md:p-20 space-y-8 md:space-y-0">
      <div className="space-y-4 flex-col items-center justify-center">
        <h2 className="text-[2rem] font-bold flex items-center mb-6">
          <span className="w-2 h-6 bg-blue-500 mr-2"></span> Quick Links
        </h2>
        <div className="bg-blue-100 w-[90vw] md:w-[320px] p-4 rounded">
          <button
            onClick={() => toggleDropdown('news')}
            className="w-full text-left"
          >
            <div className="flex justify-between items-center">
              <span>Latest News</span>
              <svg
                className={`w-4 h-4 transition-transform transform ${
                  isOpen.news ? 'rotate-180' : 'rotate-0'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </button>
          {isOpen.news && (
            <div className="mt-2">
              <p>News content goes here.</p>
            </div>
          )}
        </div>

        <div className="bg-blue-100 w-full md:w-[320px] p-4 rounded">
          <button
            onClick={() => toggleDropdown('clubs')}
            className="w-full text-left"
          >
            <div className="flex justify-between items-center">
              <span>Our Clubs</span>
              <svg
                className={`w-4 h-4 transition-transform transform ${
                  isOpen.clubs ? 'rotate-180' : 'rotate-0'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </button>
          {isOpen.clubs && (
            <div className="mt-2">
              <p>Clubs content goes here.</p>
            </div>
          )}
        </div>

        <div className="bg-blue-100 w-full md:w-[320px] p-4 rounded">
          <button
            onClick={() => toggleDropdown('yetToBeFilled')}
            className="w-full text-left"
          >
            <div className="flex justify-between items-center">
              <span>Yet to be filled</span>
              <svg
                className={`w-4 h-4 transition-transform transform ${
                  isOpen.yetToBeFilled ? 'rotate-180' : 'rotate-0'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </button>
          {isOpen.yetToBeFilled && (
            <div className="mt-2">
              <p>Content to be filled later.</p>
            </div>
          )}
        </div>
      </div>

      <div className="w-full md:w-2/3 mt-4 md:mt-10 rounded">
        <p className="text-justify text-sm md:text-base lg:text-lg">
          The college was established in the year 2000 and is functioning in the
          Golden Jubilee Complex of the Kerala University in the Kariavattom
          campus. The institution is fast acquiring a reputation for high
          quality education and fabulous faculty - student rapport. The college
          has already benefited greatly from its location, being adjacent to
          the Technopark, the IT hub of the state. Facilities in the Technopark
          are open to students for learning and University-Industry interaction
          takes place regularly.
        </p>
        <p className="mt-2 text-justify text-sm md:text-base lg:text-lg">
          With the students displaying great aptitude for academic, technical,
          sporting and cultural endeavors along with the active support of the
          University, the College is on the right track to soon becoming one of
          the finest technical institutions in the country.
        </p>
      </div>
    </div>
  );
};

export default Quick;
