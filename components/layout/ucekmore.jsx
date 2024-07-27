import React from 'react';

const MoreUCEK = () => {
  return (
    <div className=' bg-white'>
    <div className="bg-[#2D3E50] py-10 text-center ">
      <h2 className="text-3xl font-bold text-white mb-4">More About UCEK</h2>
      <div className="flex justify-center items-center ">
        <span className="block w-20 h-1 bg-blue-500 "></span>
      </div>
      <p className="text-gray-300  mt-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      </p>
      <div className="flex flex-col md:flex-row px-10 py-5 md:py-0 justify-center gap-4 mt-8">
        <button className="text-white border border-white rounded-lg px-6 py-3 flex items-center justify-between hover:bg-white hover:text-blue-900 transition duration-300">
          Accreditation Report <span className="ml-2">&rarr;</span>
        </button>
        <button className="text-white border border-white rounded-lg px-6 py-3 flex items-center justify-between hover:bg-white hover:text-blue-900 transition duration-300">
          AICTE Approval <span className="ml-2">&rarr;</span>
        </button>
        <button className="text-white border border-white rounded-lg px-6 py-3 flex items-center justify-between hover:bg-white hover:text-blue-900 transition duration-300">
          Our Principal <span className="ml-2">&rarr;</span>
        </button>
      </div>
    </div>
    </div>
  );
};

export default MoreUCEK;
