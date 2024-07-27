import React from 'react';
import Image from 'next/image';
import Images from './image/example.png';

const data = {
  administrationPanel: [
    { id: 1, src: Images },
    { id: 2, src: Images },
    { id: 3, src: Images },
    { id: 4, src: Images },
    { id: 5, src: Images }
  ]
};

const AdministrationPanel = () => {
  return (
    <div className="py-10 bg-white">
      <h2 className="text-2xl md:text-[2.6rem] ml-4 md:ml-20 font-bold mb-6 flex items-center">
        <span className="w-2 h-6 bg-blue-500 mr-2"></span> Administration Panel
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-10 px-4 md:px-20">
        {data.administrationPanel.map((member) => (
          <div key={member.id} className="flex justify-center">
            <Image
              src={member.src}
              alt={`Member ${member.id}`}
              className="rounded-lg object-cover"
              width={250}
              height={250}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdministrationPanel;
