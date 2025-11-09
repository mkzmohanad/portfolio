import Image from "next/image";

import myMainImage from "../../../public/myPic.png"
import ContactButton from "./ContactButton";

export default function Home(){
    return  <section id="home" className="h-[600px] 2xl:h-auto flex items-center 2xl:justify-between justify-center xl:px-10 2xl:px-0">
        <div className="w-full xl:w-1/2 flex flex-col gap-6 text-center xl:text-left">
          <h1 className="sm:text-7xl text-5xl font-bold">Hello👋, I&apos;m <span className="text-sky-400">Mohanad</span></h1>
          <h3 className="font-semibold sm:text-4xl text-3xl ">I&apos;m a <span className="text-sky-400 capitalize">full-stack web developer</span></h3>
          <p className="italic tracking-wide opacity-80 sm:text-xl text-lg leading-8">I&apos;m a web developer (MERN-stack developer) have experience with dealing with full-stack web applications that&apos;s powered by MERN-stack tools and able to make fully functioned websites,I enjoy turning ideas into real-world products and constantly learning new technologies to improve my craft.</p>
          <div className="xl:w-[152px]  md:w-[225px] w-[300px] mx-auto xl:mx-0">
            <ContactButton />
          </div>
        </div>
        <div className="w-1/2 xl:flex hidden items-center justify-center">
            <Image className="w-2/3 2xl:w-2/3" src={myMainImage} alt="An identification photo" />
        </div>
    </section>
}