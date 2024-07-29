"use client";
import React, { use, useEffect, useState } from "react";
import Logo from "@/public/img/logo.png";
import { NotebookPen, SwatchBook } from "lucide-react";

const Nav = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const menu = [
    {
      id: 1,
      title: "Associations",
      link: "",
    },
    {
      id: 2,
      title: "Admissions",
      link: "",
    },
    {
      id: 3,
      title: "PTA",
      link: "",
    },
    {
      id: 4,
      title: "Placements",
      link: "",
    },
    {
      id: 5,
      title: "Students Portal",
      link: "",
    },
    {
      id: 6,
      title: "Cells & Committes",
      link: "",
    },
    {
      id: 7,
      title: "Achievements",
      link: "",
    },
    {
      id: 8,
      title: "Image Gallery",
      link: "",
    },
    {
      id: 9,
      title: "Histroy",
      link: "",
    },
  ];
  const handleDropdownToggle = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <header className="bg-white border-b z-30 h-[205px] flex items-center flex-col">
      <div className="w-full py-4 px-2 md:px-16 h-[155px] flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src={Logo.src}
            alt="University of Kerala Logo"
            className="h-[93px] w-[93px]"
          />
          <div>
            <h1 className="text-lg font-bold text-[31.99px]">
              University College Of Engineering
            </h1>
            <p className="text-sm text-[16px]">
              Kariavattom, Thiruvananthapuram
            </p>
          </div>
        </div>
        <nav className="flex-wrap justify-evenly gap-3 flex md:space-x-10 mt-4 md:mt-0 text-[17.62px] font-[500]">
          {location && location.pathname != "/" && (
            <a href="/" className="text-gray-600 hover:text-gray-800">
              Home
            </a>
          )}
          <div className="relative">
            <button
              onClick={() => handleDropdownToggle("academics")}
              className="text-gray-600 hover:text-gray-800 flex items-center"
            >
              Academics
              <svg
                className="w-3 h-3 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`absolute left-0 mt-2 w-40 bg-white border rounded-xl text-[16px] z-10 shadow-lg ${
                openDropdown === "academics" ? "block" : "hidden"
              }`}
            >
              <a
                href="#"
                className="flex px-4 text-gray-600 hover:bg-gray-100 gap-2 items-center py-3"
              >
                <SwatchBook />
                Syllabus
              </a>
              <a
                href="#"
                className="flex px-4 text-gray-600 hover:bg-gray-100 gap-2 items-center py-3"
              >
                <NotebookPen />
                Notes
              </a>
            </div>
          </div>
          <div className="relative">
            <button
              onClick={() => handleDropdownToggle("departments")}
              className="text-gray-600 hover:text-gray-800 flex items-center"
            >
              Departments
              <svg
                className="w-3 h-3 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`absolute left-0 mt-2 w-40 bg-white border z-10 shadow-lg ${
                openDropdown === "departments" ? "block" : "hidden"
              }`}
            >
              <a
                href="/dept/cse"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Computer Science &amp; Engineering
              </a>
              <a
                href="/dept/ece"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Electronics &amp; Communication Engineering
              </a>
              <a
                href="/dept/it"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Information Technolog
              </a>
              <a
                href="/dept/gen"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                General Departments
              </a>
            </div>
          </div>
          <div className="relative">
            <button
              onClick={() => handleDropdownToggle("facilities")}
              className="text-gray-600 hover:text-gray-800 flex items-center"
            >
              Facilities
              <svg
                className="w-3 h-3 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`absolute left-0 mt-2 w-40 bg-white border z-10 shadow-lg ${
                openDropdown === "facilities" ? "block" : "hidden"
              }`}
            >
              <a
                href="#"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Submenu 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Submenu 2
              </a>
            </div>
          </div>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            About Us
          </a>
        </nav>
      </div>
      <div className="h-[50px] bg-white border-t-[1.8px] border-[#2D3E50] w-full flex items-center ">
        <div className="w-full md:px-4 py-2 flex flex-wrap gap-y-2 justify-center md:justify-evenly ">
          {menu.map((item) => (
            <a
              href={item.link}
              className="text-[#2D3E50] hover:text-gray-800 border-r font-[600] border-gray-300 md:border-none md:last:border-none"
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Nav;
