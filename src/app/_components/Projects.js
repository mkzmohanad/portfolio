import EachProject from "./EachProject"

const allProjects = [
    {
        projectName : "MKZ-Quiz",
        projectDescription : "A quiz platform that challenges your knowledge across many topics and lets you compete with others to climb the leaderboard.",
        projectImage : "/projects-pics/MKZQuiz-project-pic.png",
        projectURL : "https://mkz-quiz-frontend.vercel.app/login",
        projectTools : ["react" , "tailwind" , "Node.js" , "mongoDB" , "Express"],
    },
]

export default function Projects(){
    return  <section id="projects" className="flex flex-col items-center gap-15">
        <h1 className="capitalize font-bold text-4xl border-b-2 border-sky-400">My Projects</h1>
        <div className="flex flex-wrap gap-10 items-center  2xl:justify-center justify-evenly w-full">
            {allProjects.map((eachProject) => <EachProject key={eachProject.projectName} projectName={eachProject.projectName} projectDescription={eachProject.projectDescription} projectImage={eachProject.projectImage} projectURL={eachProject.projectURL} projectTools={eachProject.projectTools} />)}
        </div>
    </section>
}