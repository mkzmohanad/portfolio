import Image from "next/image";

import ContactButton from "./ContactButton";
import CvButton from "./CvButton";

import aboutPic from "../../../public/about-pic.png"

export default function About() {
    return  <section id="about" className="flex flex-col items-center gap-5 md:gap-10 mb-90 2xl:mb-90 [@media(min-width:1700px)]:mb-60 [@media(min-width:2000px)]:mb-50 [@media(min-width:2100px)]:mb-70 [@media(min-width:2200px)]:mb-50 [@media(min-width:2300px)]:mb-30 [@media(min-width:2500px)]:mb-10 h-fit">
        <h1 className="capitalize font-bold text-4xl border-b-2 border-sky-400 xl:mb-10">About Me</h1>
        <div className="flex w-full gap-20 justify-center">
            <div className="w-1/2 xl:flex hidden justify-end">
                <Image src = {aboutPic} alt="about-pic" className="w-[85%] [@media(min-width:2100px)]:w-2/3 xl:h-3/4 2xl:h-[85%] [@media(min-width:1700px)]:h-2/3 rounded-4xl" />
            </div>
            <div className="xl:w-1/2 flex flex-col gap-7 items-center text-center xl:items-start xl:text-start">
                <h3 className="font-semibold text-3xl">I&apos;m a professional <span className="text-sky-400">web developer👨‍💻</span></h3>
                    <p className="sm:text-lg text-base tracking-wide opacity-80 leading-8 sm:px-10 xl:pr-7 xl:pl-0">I&apos;m specialized in developing full-stack web applications using the latest MERN-stack technologies to create responsive, dynamic, and user-friendly experiences. I focus on delivering fully functional, production-ready websites with well-integrated frontend and backend systems, using the most essential tools and best practices in the industry.
                    <span><br/></span>
                    I approach every project with a focus on scalability, clean architecture, and user-centered design. I&apos;m passionate about transforming ideas into interactive, real-world solutions that help users and businesses achieve their goals. My ultimate aim is to create digital experiences that are both efficient and enjoyable to use.</p>
                    <span className="w-full h-0.5 bg-gray-500 my-5 sm:my-10"></span>
                    <div className="flex flex-wrap w-full items-start md:text-lg sm:text-base text-lg">
                        <p className="md:w-1/3 sm:w-1/2 w-full mb-7 wrap-break-word "><span className="font-bold">Name:</span><br/>Mohanad Shohdy</p>
                        <p className="md:w-1/3 sm:w-1/2 w-full mb-7 wrap-break-word "><span className="font-bold">Email:</span><br/>mohanadshohdyhussain@gmail.com</p>
                        <p className="md:w-1/3 sm:w-1/2 w-full mb-7 wrap-break-word xl:pl-15"><span className="font-bold">Age:</span><br/>21 Years</p>
                        <p className="md:w-1/3 sm:w-1/2 w-full mb-7 wrap-break-word "><span className="font-bold">Phone:</span><br/>+201004968160</p>
                        <p className="md:w-1/3 sm:w-1/2 w-full mb-7 wrap-break-word "><span className="font-bold">Degree:</span><br/> Bachelor&apos;s degree in Computer Science</p>
                        <p className="md:w-1/3 sm:w-1/2 w-full mb-7 wrap-break-word xl:pl-15"><span className="font-bold">Location:</span><br/>Egypt</p>
                    </div>
                    <div className="flex sm:flex-row flex-col items-center xl:justify-start justify-center gap-5 w-full px-5">
                        <div className="xl:w-48 md:w-1/4 w-full">
                            <ContactButton />
                        </div>
                        <div className="xl:w-48 md:w-1/4 w-full">
                            <CvButton />
                        </div>
                    </div>
            </div>
        </div>
    </section>
}