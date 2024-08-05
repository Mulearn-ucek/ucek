// app/[slug]/page.js

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

export async function generateStaticParams() {
  const sections = fs.readdirSync(contentDir);

  const paths = sections.flatMap((section) => {
    return {
      section: section,
    };
  });
  return paths;
}

export async function generateMetadata({
  params,
}: {
  params: { section: string };
}) {
  const fullPath = path.join(contentDir, params.section);
  let title, content;

  try {
    fs.readdirSync(fullPath, "utf8");
    title =
      (params.section == "departments" && "Departments") ||
      (params.section == "about" && "About") ||
      (params.section == "cells" && "Cells & Committees") ||
      (params.section == "facilities" && "Facilities") ||
      (params.section == "academics" && "Academics") ||
      "404";
    content = "University College of Engineering, Kariavattom";
  } catch (e) {
    title = "404";
    content = "Page not found. That's all we know. :-(";
  }

  return {
    title: title,
    description: content,
  };
}

const getArticle = ({ section }: { section: string }) => {
  let title, contents;

  try {
    const files = fs.readdirSync(path.join(contentDir, section));
    title =
      (section == "departments" && "Departments") ||
      (section == "about" && "About") ||
      (section == "cells" && "Cells & Committees") ||
      (section == "facilities" && "Facilities") ||
      (section == "academics" && "Academics") ||
      "404";
    contents = files.map((file) => {
      const filePath = path.join(contentDir, section, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      return {
        link: file.replace(".md", ""),
        title: fileContent.split("\n")[0],
      };
    });
  } catch (e) {
    title = "404";
    contents = "Page not found. That's all we know. :-(";
  }

  return { title, contents } as {
    title: string;
    contents: string | { title: string; link: string }[];
  };
};

export default async function Post({
  params,
}: {
  params: { id: string; section: string };
}) {
  const { title, contents } = getArticle(params);

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
            {title}
          </h1>
          <p className="text-xs md:text-lg text-slate-200">
            University College of Engineering, Kariavattom
          </p>
        </div>
      </div>
      <div className="z-20 w-full p-5 flex justify-center">
        {title != "404" && (
          <div className="mb-3 grid grid-flow-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 row-auto gap-2">
            {typeof contents != "string" &&
              contents.map((content) => (
                <Link
                  key={content.link}
                  href={`/${params.section}/${content.link}`}
                  className="flex border p-5 scale-100 rounded hover:scale-105 transition-transform items-center gap-2"
                >
                  <LinkIcon size={20} /> {content.title}
                </Link>
              ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
