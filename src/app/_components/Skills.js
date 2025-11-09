import SkillsOrbit from "./SkillsOrbit";

export default function Skills() {
    return  <section id="skills" className="flex flex-col items-center gap-15 -mt-70">
        <h1 className="capitalize font-bold text-4xl border-b-2 border-sky-400">My Skills</h1>
        <div className="w-full">
            <SkillsOrbit />
        </div>
    </section>
}