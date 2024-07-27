"use client"; 

import React from "react";
import bg from '@/public/img/ucek.jpeg'; 
import { HeroSlider } from "./hero-slider";

const Landing = () => {
  return (
    <div className="relative w-full h-[60vh]">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50">
          <h1 className="text-white text-[35px] md:text-5xl lg:text-5xl font-bold text-center mb-4 px-4 md:px-8">
            University College Of Engineering
          </h1>
          <p className="text-white text-base md:text-lg lg:text-xl text-center px-4 md:px-8">
          Kariavattom
          </p>
        </div>
      </div>
    </div>
  );
};



export default HeroSlider;
