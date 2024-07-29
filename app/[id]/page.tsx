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

const postsDirectory = path.resolve('contents', "home")

export async function generateStaticParams() {
  const fileNames = fs.readdirSync(postsDirectory)
  
  return fileNames.map((fileName) => ({
    id: fileName.replace(/\.md$/, ''),
  }))
}

export async function generateMetadata({ params } : { params: { id: string } }) {
  const fullPath = path.join(postsDirectory, `${params.id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Remove the first line of the file and get it
    const title = fileContents.split('\n',1)[0]
    let content = fileContents.split('\n').slice(1).join('\n')

  return {
    title: title,
    description: content[0]
  }
}

export default async function Post({ params } : { params: { id: string } }) {

  const fullPath = path.join(postsDirectory, `${params.id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Remove the first line of the file and get it
  const title = fileContents.split('\n',1)[0]
  let content = fileContents.split('\n').slice(1).join('\n')

  return (<>
   <Topnav /> 
    <Nav/>
   <div className='h-[30%] relative text-center'>
    <Image
      src={ucekImage}
      width={1920}
      height={1080}
      alt="Slider Image 1"
      className="h-[300px] w-full object-cover brightness-50"
    />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
          <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl md:text-6xl">
          {title}
          </h1>
          <p className="max-w-[600px] text-lg text-primary-foreground">
            University College of Engineering, Kariavattom
          </p>
    </div>
   </div>
    <div className='z-20 p-5 ml-[5%]'>
      <Markdown remarkPlugins={[remarkGfm]} className={"prose"}>{content}</Markdown>
    </div>

    <Footer/>
  </>
  )
}
