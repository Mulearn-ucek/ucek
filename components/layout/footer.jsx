'use client';

import React from 'react';
import logo from '@/public/img/logo.png'
const Footer = () => {
  return (
    <footer className="bg-white border-t ">
      <div className="container mx-auto py-8 px-6 flex flex-col md:flex-row justify- items-center">
        <div className="flex items-center gap-3  md:items-start space-y-1  md:space-y-0 md:space-x-6">
          <img src={logo.src} alt="University of Kerala Logo" className="h-12" />
          <div className="text-center md:text-left">
            <h1 className="text-lg font-bold">University College Of Engineering</h1>
            <p className="text-sm">Kariavattom, Thiruvananthapuram</p>
          </div>
        </div>

      </div>
      <div className="bg-white border-t mt-4">
        <div className="container mx-auto py-4 flex flex-col md:flex-row justify-between items-center text-gray-600">
          <p className="text-sm ml-6">&copy; 2024 University College Of Engineering. All rights reserved.</p>
          <div className="mr-6">
             <p>Designed and Developed by <a href="https://mulearn-ucek.netlify.app/"><u>MuLearn Ucek</u></a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
