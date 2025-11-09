"use client";

import Image from "next/image";

export default function EachService({header , paragraph , image}) {
    return  <div className="2xl:w[27%] xl:w-[30%] lg:w-2/5 md:w-[60%] [@media(min-width:2000px)]:w-1/4 w-full h-96 flex flex-col items-center text-center p-5 border-2 border-sky-400 rounded-4xl shadow-lg hover:shadow-sky-400/30 transition-all duration-500 hover:-translate-y-5 mb-7">
                    <div className="relative w-[100px] h-[100px]">
                        <Image src={image} alt={header} fill unoptimized className="object-contain"/>
                    </div>
                <h3 className="font-bold xl:text-2xl text-xl text-sky-400 mb-5">{header}</h3>
                <p className="xl:text-xl lg:text-lg sm:text-xl font-semibold tracking-wide leading-8 opacity-80">{paragraph}</p>
            </div>
}