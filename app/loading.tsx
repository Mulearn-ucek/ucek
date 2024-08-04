import Image from "next/image";

export default function Loading() {
  return <div className="w-full h-full items-center justify-center bg-white">
    <div className="w-[100dvw] h-[100dvh] flex items-center justify-center">
      <Image src="/img/logo.png" alt="Loading..." width={100} height={100} className="animate-pulse"/>      
    </div>   
  </div>;
}
