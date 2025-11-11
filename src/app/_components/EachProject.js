import Image from "next/image";

export default function EachProject({projectName , projectDescription , projectImage , projectURL , projectTools , projectPublishingDate}) {
    const limitedProjectDescription = projectDescription.split("").length <= 125 ? projectDescription : projectDescription.split("", 125).join("") + ".....";

    return  <a href={projectURL} target="_blank" className="2xl:w[27%] [@media(min-width:1024px)]:w-[45%] md:w-[60%] [@media(min-width:1440px)]:w-[31%] [@media(min-width:2000px)]:w-1/4 w-full h-[700px] 2xl:h-[670px] flex flex-col items-center text-center p-2 sm:p-4 border-2 border-sky-400 rounded-4xl shadow-lg hover:shadow-sky-400/30 transition-all duration-500 hover:-translate-y-3 group relative overflow-hidden">
        <div className="absolute top-0 right-0 m-2 rounded-full px-2 py-1 bg-sky-800 opacity-60 capitalize">published at: {projectPublishingDate}</div>
        <Image src = {projectImage} alt = {`an image for website ${projectName}`} width={0} height={0} className="w-full h-3/5 rounded-3xl" unoptimized/>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-4xl z-10"/>
        <h2 className="text-sky-400 font-bold text-3xl mt-2 sm:mb-3 mb-5">{projectName}</h2>
        <p className="opacity-80 italic sm:px-7 px-2 leading-7 uppercase text-xs sm:text-sm w-full wrap-break-word">{limitedProjectDescription}</p>
        <ul className="w-full flex flex-wrap my-5 items-center justify-center">{projectTools.map((eachProjectTool , index) => <li key={index} className="sm:w-1/3 w-1/2 capitalize font-bold mb-3">{`⚙️ ${eachProjectTool}`}</li>)}</ul>
    </a>
}