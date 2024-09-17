// app/[slug]/page.js

import fs from 'fs'
import path from 'path'
import Topnav from '@/components/header/topnav'
import Nav from '@/components/header/nav'
import Footer from '@/components/layout/footer'
import Image from 'next/image'
import ucekImage from "@/public/img/ucek.jpeg";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import Link from 'next/link'

const contentDir = path.join(process.cwd(), 'contents')

export default async function Post() {

  const sections = fs.readdirSync(contentDir)

  return (<>
   <Topnav /> 
    <Nav/>
   <div className='h-[30%] relative text-center -z-20'>
    <Image
      src={ucekImage}
      width={1920}
      height={1080}
      alt="Slider Image 1"
      className="h-[300px] w-full object-cover brightness-50"
    />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
          <h1 className="text-2xl font-bold text-primary-foreground sm:text-3xl md:text-4xl lg:text-6xl">
          Development Preview (Contents)
          </h1>
          {/* <p className="max-w-[600px] text-lg text-primary-foreground">
            University College of Engineering, Kariavattom
          </p> */}
    </div>
   </div>
    <div className='z-20 p-5 ml-10 flex justify-center flex-col '>
      {sections.map((section) => {
        if(section == "metadata.json") return
        const articles = fs.readdirSync(path.join(contentDir, section))
          return <div className='' key={section}>
              <h1 className='text-2xl font-bold'>{section}</h1>
            <div className='ml-10 mb-3'>
              {articles.map((article) => <Link key={article} href={`/${section}/${article.replace(".md","")}`} className='list-item'>{article.replace(".md","")}</Link>)}
          </div>

            </div>
        })}

    </div>
    <Footer/>
  </>
  )
}
