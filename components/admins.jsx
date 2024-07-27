import React from 'react';
import Image from 'next/image';
import Images from './image/example.png';

const data = {
  administrationPanel: [
    { id: 1, src: Images },
    { id: 2, src : Images },
    { id: 3, src: Images },
    { id: 4, src: Images },
    { id: 5, src: Images }
  ]
};

const AdministrationPanel = () => {
  return (
    <div className="py-10 bg-white">
      <h2 className="text-[2.6rem] ml-20 font-bold mb-6 flex items-center">
        <span className="w-2 h-6 bg-blue-500 mr-2"></span> Administration Panel
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3  py-10 px-20">
        {data.administrationPanel.slice(0, 3).map((member) => (
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
      <div className="grid grid-cols-1 md:grid-cols-2 px-28  mt-8">
        {data.administrationPanel.slice(3).map((member) => (
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
