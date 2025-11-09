import About from "./_components/About";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Home from "./_components/Home";
import Projects from "./_components/Projects";
import Services from "./_components/Services";
import Skills from "./_components/Skills";

export default function MainPage() {
    return <main>
      <Header />
      <div className="h-auto px-2 sm:px-5 lg:px-5 2xl:px-20 [@media(min-width:2200px)]:px-45 [@media(min-width:2000px)]:px-30 xl:py-20 sm:py-0 [@media(min-width:300px)]:pt-25 [@media(min-width:350px)]:pt-20 [@media(min-width:400px)]:pt-10 flex flex-col justify-center gap-20 overflow-hidden">
        <Home />
        <About />
        <Skills />
        <Services />
        <Projects />
      </div>
      <Footer />
    </main>
}