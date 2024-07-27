'use client'
import React, { useState } from 'react';
import Logo from '@/components/image/logo.png';

const Nav = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <header className="bg-white border-b">
      <div className="container mx-auto py-4 px-4 md:px-6 flex flex-wrap items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src={Logo.src}
            alt="University of Kerala Logo"
            className="h-12"
          />
          <div>
            <h1 className="text-lg font-bold">University College Of Engineering</h1>
            <p className="text-sm">Kariavattom, Thiruvananthapuram</p>
          </div>
        </div>
        <nav className="flex-wrap justify-evenly gap-3 flex md:space-x-10 mt-4 md:mt-0">
          <a href="#" className="text-gray-600 hover:text-gray-800 ">Home</a>
          <div className="relative">
            <button
              onClick={() => handleDropdownToggle('academics')}
              className="text-gray-600 hover:text-gray-800 flex items-center"
            >
              Academics
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`absolute left-0 mt-2 w-40 bg-white border z-10 shadow-lg ${openDropdown === 'academics' ? 'block' : 'hidden'}`}
            >
              <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Submenu 1</a>
              <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Submenu 2</a>
            </div>
          </div>
          <div className="relative">
            <button
              onClick={() => handleDropdownToggle('departments')}
              className="text-gray-600 hover:text-gray-800 flex items-center"
            >
              Departments
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`absolute left-0 mt-2 w-40 bg-white border z-10 shadow-lg ${openDropdown === 'departments' ? 'block' : 'hidden'}`}
            >
              <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Submenu 1</a>
              <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Submenu 2</a>
            </div>
          </div>
          <div className="relative">
            <button
              onClick={() => handleDropdownToggle('facilities')}
              className="text-gray-600 hover:text-gray-800 flex items-center"
            >
              Facilities
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`absolute left-0 mt-2 w-40 bg-white border z-10 shadow-lg ${openDropdown === 'facilities' ? 'block' : 'hidden'}`}
            >
              <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Submenu 1</a>
              <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Submenu 2</a>
            </div>
          </div>
          <a href="#" className="text-gray-600 hover:text-gray-800">About Us</a>
        </nav>
      </div>
      <div className="bg-white border-t flex justify-center">
      <div className="container mx-auto  md:px-16 py-2 flex flex-wrap space-x-3 gap-y-2 justify-center  ">
          <a href="#" className="text-gray-600 hover:text-gray-800 border-r border-gray-300 pr-2 md:pr-0 md:border-none md:pr-4 md:last:border-none">Associations</a>
          <a href="#" className="text-gray-600 hover:text-gray-800 border-r border-gray-300 pr-2 md:pr-0 md:border-none md:pr-4 md:last:border-none">Admissions</a>
          <a href="#" className="text-gray-600 hover:text-gray-800 border-r border-gray-300 pr-2 md:pr-0 md:border-none md:pr-4 md:last:border-none">PTA</a>
          <a href="#" className="text-gray-600 hover:text-gray-800 border-r border-gray-300 pr-2 md:pr-0 md:border-none md:pr-4 md:last:border-none">Placements</a>
          <a href="#" className="text-gray-600 hover:text-gray-800 border-r border-gray-300 pr-2 md:pr-0 md:border-none md:pr-4 md:last:border-none">Students Portal</a>
          <a href="#" className="text-gray-600 hover:text-gray-800 border-r border-gray-300 pr-2 md:pr-0 md:border-none md:pr-4 md:last:border-none">Cells & Committees</a>
          <span className="text-gray-400 hidden md:inline">Yet to be filled</span>
          <span className="text-gray-400 hidden md:inline">Yet to be filled</span>
          <span className="text-gray-400 hidden md:inline">Yet to be filled</span>
        </div>
      </div>
    </header>
  );
};

export default Nav;
