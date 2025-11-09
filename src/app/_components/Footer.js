import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";

const contactLinks = [
    {
        linkBody : <FaLinkedin />,
        linkURL : "https://www.linkedin.com/in/mohanad-shohdy/",
        linkContactType : "linkedin",
        linkColorStyle : "hover:text-blue-400 hover:-translate-y-1",
    },
    {
        linkBody : <FaGithub />,
        linkURL : "https://github.com/mkzmohanad?tab=repositories",
        linkContactType : "github",
        linkColorStyle : "hover:text-black hover:-translate-y-1",
    },
    {
        linkBody : <FaWhatsapp />,
        linkURL : "https://wa.me/201004968160?text=Hi%20Mohanad!%20I%20just%20saw%20your%20portfolio%20and%20I'm%20interested%20in%20getting%20in%20touch%20with%20you.",
        linkContactType : "whatsapp",
        linkColorStyle : "hover:text-green-400 hover:-translate-y-1",
    },
    {
        linkBody : <TbFileCv />,
        linkURL : "/Mohanad-Shohdy-CV.pdf",
        linkContactType : "cv",
        linkColorStyle : "hover:text-gray-500 hover:-translate-y-1",
    },
]

export default function Footer() {
    return  <footer id="contact me" className="w-full mt-40 flex sm:flex-row flex-col gap-5 sm:gap-0 items-center lg:justify-around justify-between md:px-15 sm:px-5 px-2 border-t-2 border-sky-400 py-10">
        <div className="text-xl font-semibold underline italic text-center">Portfolio © 2025 Mohanad Shohdy</div>
        <ul className="flex items-center gap-5 text-2xl">
            {contactLinks.map((eachContactLink) => <li key={eachContactLink.linkContactType} className={`${eachContactLink.linkColorStyle} duration-300`}>
                <a href={eachContactLink.linkURL} target="_black">{eachContactLink.linkBody}</a>
            </li>)}
        </ul>
    </footer>
}