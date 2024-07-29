'use client';
import React, { useState } from 'react';
import { ExpandableCardDemo } from '../ui/expandable-card';

const Announcement  = () => {
  const cards = [  
    {
      date: "25th Jun 2030",
      title: "1st Allotment on 28th June",
      src: "/image.png",
      content: () => {
        return (
          <p>
            Metallica, an iconic American heavy metal band, is renowned for their
            powerful sound and intense performances that resonate deeply with
            their audience. Formed in Los Angeles, California, they have become a
            cultural icon in the heavy metal music industry. <br /> <br /> Their
            songs often reflect themes of aggression, social issues, and personal
            struggles, capturing the essence of the heavy metal genre. With a
            career spanning over four decades, Metallica has released numerous hit
            albums and singles that have garnered them a massive fan following
            both in the United States and abroad.
          </p>
        );
      },
    },
    {
      date: "25th May 2032",
      title: "S3 Result Published",
      src: "/image.png",
      content: () => {
        return (
          <p>
            Led Zeppelin, a legendary British rock band, is renowned for their
            innovative sound and profound impact on the music industry. Formed in
            London in 1968, they have become a cultural icon in the rock music
            world. <br /> <br /> Their songs often reflect a blend of blues, hard
            rock, and folk music, capturing the essence of the 1970s rock era.
            With a career spanning over a decade, Led Zeppelin has released
            numerous hit albums and singles that have garnered them a massive fan
            following both in the United Kingdom and abroad.
          </p>
        );
      },
    },
    {
      date: "25th Dec 2022",
      title: "NRI Quota Admission",
      src: "/image.png",
      content: () => {
        return (
          <p>
            &quot;Aawarapan&quot;, a Bollywood movie starring Emraan Hashmi, is
            renowned for its intense storyline and powerful performances. Directed
            by Mohit Suri, the film has become a significant work in the Indian
            film industry. <br /> <br /> The movie explores themes of love,
            redemption, and sacrifice, capturing the essence of human emotions and
            relationships. With a gripping narrative and memorable music,
            &quot;Aawarapan&quot; has garnered a massive fan following both in
            India and abroad, solidifying Emraan Hashmi&apos;s status as a
            versatile actor.
          </p>
        );
      },
    },
  ];
  
  const [isOpen, setIsOpen] = useState({
    news: false,
    clubs: false,
    yetToBeFilled: false,
  });

  const toggleDropdown = (section) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="flex flex-col md:flex-row bg-white w-full h-auto md:h-[65vh] justify-center items-center gap-8 md:gap-40 p-8 md:p-20 space-y-8 md:space-y-0">
      <div className="space-y-4 flex-col items-center justify-center">
        <h2 className="text-[2rem] font-bold flex items-center mb-6">
          <span className="w-2 h-6 bg-blue-500 mr-2"></span> Announcements 
        </h2>
        <ExpandableCardDemo cards={cards}/>
      </div>

      <div className="w-full md:w-2/3 mt-4 md:mt-10 rounded md:p-24">
        <p className="text-justify text-sm md:text-base lg:text-lg">
          The college was established in the year 2000 and is functioning in the
          Golden Jubilee Complex of the Kerala University in the Kariavattom
          campus. The institution is fast acquiring a reputation for high
          quality education and fabulous faculty - student rapport. The college
          has already benefited greatly from its location, being adjacent to
          the Technopark, the IT hub of the state. Facilities in the Technopark
          are open to students for learning and University-Industry interaction
          takes place regularly.
        </p>
        <p className="mt-2 text-justify text-sm md:text-base lg:text-lg">
          With the students displaying great aptitude for academic, technical,
          sporting and cultural endeavors along with the active support of the
          University, the College is on the right track to soon becoming one of
          the finest technical institutions in the country.
        </p>
      </div>
    </div>
  );
};

export default Announcement ;
