import EachProject from "./EachProject"

const allProjects = [
    {
        projectName : "MKZ-Quiz",
        projectDescription : "A quiz platform that challenges your knowledge across many topics and lets you compete with others to climb the leaderboard.",
        projectImage : "/projects-pics/MKZQuiz-project-pic.png",
        projectURL : "https://mkz-quiz-frontend.vercel.app/login",
        projectTools : ["react" , "tailwind" , "Node.js" , "mongoDB" , "Express" , "AWS-S3"],
        projectPublishingDate: "2025-05-30",
    },
    {
        projectName : "Coffee MKZ",
        projectDescription : "A responsive coffee shop landing page that introduces the brand and highlights what the coffee shop provides to its customers",
        projectImage : "/projects-pics/coffeeMKZ-project-pic.png",
        projectURL : "https://mkz-coffee-shop.vercel.app/",
        projectTools : ["HTML" , "CSS" , "JavaScript" , "Bootstrap"],
        projectPublishingDate: "2023-07-08",
    },
]

export default function Projects(){
    return  <section id="projects" className="flex flex-col items-center gap-15">
        <h1 className="capitalize font-bold text-4xl border-b-2 border-sky-400">My Projects</h1>
        <div className="flex flex-wrap gap-10 items-center  2xl:justify-center justify-center w-full">
            {allProjects.map((eachProject) => <EachProject key={eachProject.projectName} projectName={eachProject.projectName} projectDescription={eachProject.projectDescription} projectImage={eachProject.projectImage} projectURL={eachProject.projectURL} projectTools={eachProject.projectTools} projectPublishingDate = {eachProject.projectPublishingDate} />)}
        </div>
    </section>
}