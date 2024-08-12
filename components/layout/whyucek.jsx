import React from "react";
import whybg from "@/public/img/whybg.png";

const WhyUcek = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen text-white"
      style={{ backgroundImage: `url(${whybg.src})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why UCEK?</h2>
        <div className="text-white text-justify mb-3 text-sm lg:text-xl font-sans md:px-44 md:py-6">
          <p className="">
            University College of Engineering (UCEK) is a premier institution in Trivandrum under the University of Kerala (NAAC A++). 
            It offers a plethora of exciting opportunities to its students. Situated on the expansive 300+ acre Kariavattom campus, UCEK benefits greatly from its close proximity to Technopark, which opens up endless career opportunities for students. 
            The campus boasts excellent amenities, including a vast library, health center, event halls, and more.
          </p>
          <p className="mt-2 lg:mt-3 hidden xs:block">
            UCEK is home to several technical and non-technical clubs, such as GDSC, IEDC, MuLearn, IEEE, and FOSS. These clubs help foster an extraordinary community of students, encouraging networking, upskilling, and industry preparedness. The Kerala University Incubation Centre (KUBIIC) supports students in building innovative startups that address real-world problems.
          </p>
          <p className="mt-2 lg:mt-3 hidden xs:block">
            What truly sets UCEK apart from other colleges is its students and the vibrant ecosystem they&apos;ve built. Students collaborate on extraordinary projects as a team, and are encouraged to do so in addition to their academic pursuits. We’re all a family here, and no one is left unheard. For those who prefer exploring diverse opportunities rather than being confined to a predefined system with limitations, this is the place to be.
          </p>
        </div>
        <div className="flex flex-wrap justify-around w-full max-w-4xl gap-4">
          <div className="text-center flex-1 min-w-[120px]">
            <p className="text-3xl md:text-4xl font-bold">A++</p>
            <p className="text-blue-400">NAAC Accreditation</p>
          </div>
          <div className="text-center flex-1 min-w-[120px]">
            <p className="text-3xl md:text-4xl font-bold">15+</p>
            <p className="text-blue-400">Startups Founded</p>
          </div>
          <div className="text-center flex-1 min-w-[120px]">
            <p className="text-3xl md:text-4xl font-bold">60%</p>
            <p className="text-blue-400">Placement Rate</p>
          </div>
          <div className="text-center flex-1 min-w-[120px]">
            <p className="text-3xl md:text-4xl font-bold">350+</p>
            <p className="text-blue-400">Acre Campus</p>
          </div>
          <div className="text-center flex-1 min-w-[120px]">
            <p className="text-3xl md:text-4xl font-bold">60%</p>
            <p className="text-blue-400">Yet to be filled</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUcek;
