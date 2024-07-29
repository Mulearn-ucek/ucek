// app/[slug]/page.js

import fs from 'fs'
import path from 'path'
import Topnav from '@/components/header/topnav'
import Nav from '@/components/header/nav'
import Footer from '@/components/layout/footer'

import Image from 'next/image'
import ucekImage from "@/public/img/ucek.jpeg";

const postsDirectory = path.join(process.cwd(), 'contents', 'dept')

export async function generateStaticParams() {
  const fileNames = fs.readdirSync(postsDirectory)

  console.log(fileNames)
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

  content = content.replaceAll('* ', '● ')

  return (<>
   <Topnav /> 
    <Nav/>
   <div className='h-[30%]'>
    <Image
      src={ucekImage}
      width={1920}
      height={1080}
      alt="Slider Image 1"
      className="h-[300px] w-full object-cover brightness-50"
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 px-4 text-center text-white">
          <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl md:text-6xl">
          {title}
          </h1>
          <p className="max-w-[600px] text-lg text-primary-foreground">
            University College of Engineering, Kariavattom
          </p>
    </div>
   </div>
    <div className='p-5 ml-[10%] mt-[3%]'>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>

    <Footer/>
  </>
  )
}
