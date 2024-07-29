/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/pij1SqGygBQ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import { getCarouselImages } from "@/lib/data";
import { getImgLink } from "@/lib/data";
import Image from "next/image";
import ucekImage from "@/public/img/ucek.jpeg";

export function HeroSlider() {
  const [images, setImages] = useState([]);
  const [api, setApi] = useState();

  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  console.log(current, count);
  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    getCarouselImages().then((data) => {
      setImages(data);
    });
  }, []);

  return (
    <section className="w-full mt-[6rem] sm:mt-3 md:mt-0">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <div className="flex absolute z-50 bottom-14 w-full items-center justify-center gap-2">
            <span className={`w-3 h-3 block rounded-full ${current == 1 ? 'bg-white' :'bg-[#ffffff48]'}`}></span>
            <span className={`w-3 h-3 block rounded-full ${current == 2 ? 'bg-white' :'bg-[#ffffff48]'}`}></span>
            <span className={`w-3 h-3 block rounded-full ${current == 3 ? 'bg-white' :'bg-[#ffffff48]'}`}></span>
            <span className={`w-3 h-3 block rounded-full ${current == 4 ? 'bg-white' :'bg-[#ffffff48]'}`}></span>
            
            </div>
        <CarouselContent>
          
          <CarouselItem>
            <div className="relative">
              <Image
                src={ucekImage}
                width={1920}
                height={1080}
                alt="University College of Engineering Kariavattom"
                className="h-[656px] w-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.1)]">
                <div className="space-y-2 text-center text-primary-foreground">
                  <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                    {"University College of Engineering"}
                  </h2>
                  <p className="text-lg md:text-xl text-white">Kariavattom</p>
                </div>
              </div>
            </div>
          </CarouselItem>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative">
                <Image
                  src={getImgLink(image[0])}
                  width={1920}
                  height={1080}
                  alt={image[1]}
                  className="h-[656px] w-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.1)]">
                  <div className="space-y-2 text-center text-primary-foreground">
                    <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                      {image[1]}
                    </h2>
                    <p className="text-lg md:text-xl text-white">{image[2]}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
          
        </CarouselContent>
      </Carousel>
    </section>
  );
}