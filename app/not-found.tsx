import fs, { link } from "fs";
import path from "path";
import Topnav from "@/components/header/topnav";
import Nav from "@/components/header/nav";
import Footer from "@/components/layout/footer";

import Image from "next/image";
import ucekImage from "@/public/img/ucek.jpeg";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Link from "next/link";
import { LinkIcon } from "lucide-react";

const contentDir = path.join(process.cwd(), "contents");

export default async function NotFound() {

  return (
    <>
      <Topnav />
      <Nav />
      <div className="h-[30%] relative text-center -z-20">
        <Image
          src={ucekImage}
          width={1920}
          height={1080}
          alt="Slider Image 1"
          className="h-[300px] w-full object-cover brightness-50"
        />
        <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
          <h1 className="text-3xl font-bold text-primary-foreground sm:text-4xl md:text-5xl">
            404: Not Found
          </h1>
          <p className="text-xs md:text-lg text-slate-200">
            The page you are looking for does not exist.<br/>
          </p>
          <p className="text-xs  md:text-lg text-slate-200">
            That&apos;s all we know :/
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
