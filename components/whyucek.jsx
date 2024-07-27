import React from "react";
import whybg from  '@/components/image/whybg.png'
const WhyUcek = () => {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${whybg.src})` }}>
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4">
      <h2 className="text-4xl font-bold mb-4">Why UCEK?</h2>
      <p className="mb-8 max-w-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
      </p>
      <div className="flex justify-around w-full max-w-4xl">
        <div className="text-center">
          <p className="text-4xl font-bold">A++</p>
          <p className="text-blue-400">NAAC Accreditation</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold">120+</p>
          <p className="text-blue-400">Current Students</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold">50+</p>
          <p className="text-blue-400">Faculty Members</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold">60%</p>
          <p className="text-blue-400">Placement Rate</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold">60%</p>
          <p className="text-blue-400">Yet to be filled</p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default WhyUcek;