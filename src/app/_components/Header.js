"use client";

import { useState } from "react";
import { BsListUl } from "react-icons/bs";
import { IoMdCloseCircleOutline } from "react-icons/io";

const links = [
    {
        name : "home",
    },
    {
        name : "about",
    },
    {
        name : "skills",
    },
    {
        name : "services",
    },
    {
        name : "projects",
    },
    {
        name : "contact me",
    },
]

export default function Header() {
    const [isOpened , setIsOpened] = useState();

    function handleSetIsOpen() {
        setIsOpened((openState) => !openState)
    }

    return <header className="flex items-center justify-center sticky top-4 z-50">
        <ul className="sm:flex hidden items-center justify-center gap-6 px-10 py-3 rounded-full bg-gray-900/60 backdrop-blur-lg border border-gray-700/50 shadow-[0_8px_20px_rgba(0,0,0,0.3)] text-gray-300 capitalize">
            {links.map((eachLink) => <li key={eachLink.name} className="relative transition-all duration-300 hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full cursor-pointer capitalize font-semibold">
                <a href={`#${eachLink.name}`}>{eachLink.name}</a>
        </li>)}</ul>

        {!isOpened && <button className="sm:hidden flex items-center justify-center absolute left-0 top-0 p-3 ml-5 text-3xl rounded-full bg-gray-900/60 backdrop-blur-lg border border-gray-700/50 shadow-[0_8px_20px_rgba(0,0,0,0.3)] text-gray-300 capitalize">
            <BsListUl onClick={handleSetIsOpen}/>
        </button>}
        {isOpened && <div className={`fixed top-0 left-0 w-dvw h-dvh bg-gray-900/90 backdrop-blur-lg z-50 flex flex-col`}>
                <IoMdCloseCircleOutline className="text-5xl absolute right-0 m-5" onClick={handleSetIsOpen}/>
                <ul className="flex flex-col justify-center items-center h-dvh gap-10">
                    {links.map((eachLink) => <li key={eachLink.name} onClick={handleSetIsOpen} className="relative capitalize font-semibold text-2xl">
                        <a href={`#${eachLink.name}`}>{eachLink.name}</a>
                    </li>)}
                </ul>
            </div>
        }
    </header>
}