"use client";
import { getImgLink, getUpcomingEvents } from "@/lib/data";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import moment from "moment";
import { CalendarDays, Clock, SquareArrowOutUpRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

const marqParams = {
  autoFill: true,
  pauseOnHover: true,
  speed: 80,
};

const NewsEvents = () => {
  const [data, setData] = useState();
  const [date, setDate] = useState();

  useEffect(() => {
    getUpcomingEvents()
      .then((response) => {
        setData(response);
        setDate();
      })

      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }, []);

  return (
    <div className="py-10 bg-white">
      <h2 className="text-2xl md:text-[2.6rem] ml-4 md:ml-20 font-bold mb-6 flex items-center">
        <span className="w-2 h-6 bg-blue-500 mr-2"></span>Upcoming Events
      </h2>
      <div>
        <Skeleton className="min-w-[400px] max-w-[300px] rounded-full bg-[#e7e7e7dc]" />
      </div>
      <div className="relative overflow-hidden py-10 ">
        <Marquee {...marqParams} className="w-full">
          {data?.map((item, index) => (
            <div
              key={index}
              className="min-w-[400px] max-w-[300px] h-[16rem] p-4 bg-white rounded-lg shadow-md border mx-10 flex-shrink-0"
            >
              <span
                className={`px-2 py-1 w-24 flex justify-center rounded-full text-white text-sm font-semibold mb-4 ${"bg-red-500"}`}
              ></span>
              <div className="w-full flex justify-between">
                <p className="text-lg font-semibold mb-2">{item[3]}</p>
                <a
                  href={`https://eventsatucek.vercel.app/e/${item[1]}`}
                ><SquareArrowOutUpRight size={15} /></a>
              </div>
              <Image
                width={50}
                height={50}
                referrerPolicy={"no-referrer"}
                src={getImgLink(item[5])}
                alt="Event Poster"
                className="rounded-lg w-[50px] h-[50px]"
              ></Image>
              {item[4] && (
                <p className="text-gray-500 mb-2 text-[15px] line-clamp-2 overflow-hidden pt-2">
                  {item[4]}
                </p>
              )}

              {item[7] && (
                <div className="flex items-center text-gray-500 text-sm mb-1 gap-2">
                  <CalendarDays size={18} />
                  {moment(item[7], "DD/MM/YYYY HH:mm:ss")?.format("MMM Do")}
                </div>
              )}
              {item[7] && (
                <div className="flex items-center text-gray-500 text-sm mb-4 gap-2">
                  <Clock size={18} />
                  {moment(item[7], "DD/MM/YYYY HH:mm:ss")?.format("h:mm a")}
                </div>
              )}
              {date?.format("h:mm a")}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default NewsEvents;
