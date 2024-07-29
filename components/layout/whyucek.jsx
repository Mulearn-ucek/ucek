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
        <p class="text-white text-sm md:text-xl  font-sans md:px-44 md:py-6">
          University College of Engineering Kariavattom (UCEK), the pride of the
          Kariavattom campus spread across
          <strong> 400 acres </strong>
          UCEK, the center of innovation, neighbors the IT hub{" "}
          <strong>Technopark</strong>, and<strong> UST Global</strong>, and
          features the <strong>Greenfield International Stadium </strong>just a
          peek away, state-of-the-art labs, and seasoned faculty.{" "}
          <strong>
            {" "}
            UCEK stands as a symbol of academic heritage and eminence.{" "}
          </strong>{" "}
          What sets us apart is our success in holistic development,
          demonstrated by our alumni network and notable{" "}
          <strong> National </strong>and{" "}
          <strong>International Communities</strong> such as{" "}
          <strong>IEEE, NSS,</strong>and <strong>FOSS CELL. </strong> Other
          communities such as <strong> IEDC, GDSC, Mulearn </strong>and
          <strong> TinkerHub </strong>have made significant contributions to
          what makes UCEK proud.
        </p>
        <div className="flex flex-wrap justify-around w-full max-w-4xl gap-4">
          <div className="text-center flex-1 min-w-[120px]">
            <p className="text-3xl md:text-4xl font-bold">A++</p>
            <p className="text-blue-400">NAAC Accreditation</p>
          </div>
          <div className="text-center flex-1 min-w-[120px]">
            <p className="text-3xl md:text-4xl font-bold">120+</p>
            <p className="text-blue-400">Current Students</p>
          </div>
          <div className="text-center flex-1 min-w-[120px]">
            <p className="text-3xl md:text-4xl font-bold">50+</p>
            <p className="text-blue-400">Faculty Members</p>
          </div>
          <div className="text-center flex-1 min-w-[120px]">
            <p className="text-3xl md:text-4xl font-bold">60%</p>
            <p className="text-blue-400">Placement Rate</p>
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
