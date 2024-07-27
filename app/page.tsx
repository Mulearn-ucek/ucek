import Image from "next/image";
import Topnav from '@/components/header/topnav';
import Nav from '@/components/header/nav'
import Landing from '@/components/landing'
import Quick from '@/components/quicklinks'
import Whyucek from '@/components/whyucek'
import NewsEvents from '@/components/events'
import AdministrationPanel from '@/components/admins'
import MoreUcek from '@/components/ucekmore'
import Footer from '@/components/footer'
export default function Home() {
  return (
   <>
   <Topnav /> 
   <Nav/>
   <Landing/>
   <Quick/>
   <Whyucek/>
   <NewsEvents/>
   <AdministrationPanel/>
   <MoreUcek/>
   <Footer/>
   </>
  );
}
