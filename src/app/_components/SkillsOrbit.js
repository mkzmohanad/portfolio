"use client";
import { motion, useAnimationFrame } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function SkillsOrbit() {
  const skills = [
        { name: "React", icon: "/icons/react.svg" },
        { name: "Next.js", icon: "/icons/nextjs.svg" },
        { name: "Node.js", icon: "/icons/nodejs.svg" },
        { name: "Express", icon: "/icons/expressjs.svg" },
        { name: "MongoDB", icon: "/icons/mongodb.svg" },
        { name: "Tailwind", icon: "/icons/tailwindcss.svg" },
        { name: "TypeScript", icon: "/icons/typescript.svg" },
        { name: "Git", icon: "/icons/git.svg" },
        { name: "AWS S3", icon: "/icons/AWS-S3.svg" },
  ];

  const containerRef = useRef(null);
  return (
    <div ref={containerRef} className="relative flex items-center justify-center [@media(min-width:450px)]:h-[500px] [@media(min-width:380px)]:h-[350px] h-[300px] md:h-[800px]! from-gray-950 to-gray-900 overflow-hidden ">

      <motion.div className="absolute flex flex-col md:gap-3 items-center justify-center sm:w-[230px]! [@media(min-width:450px)]:w-[180px] w-[150px] md:w-[360px]! sm:h-[230px]! md:h-[360px]! [@media(min-width:450)]:h-[180px] h-[150px] rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-xl shadow-lg" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity }}>
        <p className="text-center text-white font-semibold md:text-4xl! sm:text-2xl! [@media(min-width:450px)]:text-xl text-base">MERN Stack Developer</p>
        <p className="md:text-lg! sm:text-base! [@media(min-width:450px)]:text-sm text-xs text-purple-300 mt-1 text-center">Building scalable web applications</p>
      </motion.div>

      {skills.map((skill, index) => (
        <OrbitingSkill key={skill.name} skill={skill} index={index} total={skills.length}/>))}
    </div>
  );
}
function OrbitingSkill({ skill, index, total }) {
  const [radius, setRadius] = useState(300);
  const ref = useRef(null);

  const speed = 0.5; 
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 400) setRadius(120);
      else if (window.innerWidth < 450) setRadius(140);
      else if (window.innerWidth < 768) setRadius(180);
      else setRadius(300);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useAnimationFrame((t) => {
    const angle = (t / 1000) * speed + (index * (2 * Math.PI)) / total;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  });

  return (
        <div ref={ref} className="absolute flex items-center justify-center md:w-30! sm:w-20! [@media(min-width:450px)]:w-18 w-10 md:h-30! sm:h-20! [@media(min-width:450px)]:h-18 h-10 rounded-full bg-gray-900/80 text-white shadow-md border border-gray-700 backdrop-blur-md hover:scale-110 duration-300"
        title={skill.name}>
      <Image src={skill.icon} alt={skill.name} width={120} height={120} className="drop-shadow-[0_0_10px_rgba(124,58,237,0.7)]" />
    </div>
  );
}