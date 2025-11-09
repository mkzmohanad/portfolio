import EachService from "./EachService";

const allServices = [
    {
        header : "Authentication & Authorization Systems",
        paragraph : "I implement secure authentication flows that include (login, signup, forgot password, and role-based access control).",
        image : "/services-pics/auth.png",
    },
    {
        header : "Responsive Designs",
        paragraph : "I ensure every project is responsive and accessible across all screen sizes with Tailwind and modern design patterns.",
        image : "/services-pics/responsive.png",
    },
    {
        header : "API Integration & Data Fetching",
        paragraph : "I connect your frontend with RESTful APIs, handling async data fetching and caching for smooth, dynamic experiences.",
        image : "/services-pics/api.png",
    },
    {
        header : "Maintenance & Performance Optimization",
        paragraph : "I offer codebase optimization, bug fixing, and long-term maintenance to ensure your web app runs smoothly.",
        image : "/services-pics/maintenance.png",
    },
    {
        header : "Component-Based Architecture",
        paragraph : "I build modular, reusable, and maintainable UI components that make scaling your app easier and more efficient.",
        image : "/services-pics/components.png",
    },
    {
        header : "Database Design & Integration",
        paragraph : "From schema modeling to query optimization, I work with MongoDB to ensure fast, reliable data handling.",
        image : "/services-pics/database.png",
    },
]

export default function Services(){
    return  <section id="services" className="flex flex-col items-center gap-15">
        <h1 className="capitalize font-bold text-4xl border-b-2 border-sky-400">My Services</h1>
        <div className="flex flex-wrap 2xl:gap-10 gap-2 items-center 2xl:justify-center justify-evenly">
            {allServices.map((eachService) => <EachService key={eachService.header} header={eachService.header} paragraph={eachService.paragraph} image = {eachService.image} />)}
        </div>
    </section>
}