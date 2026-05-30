import { Sidebar } from "./components/Sidebar.jsx";
import { Hero } from "./components/sections/Hero.jsx";
import { About } from "./components/sections/About.jsx";
import { Skills } from "./components/sections/Skills.jsx";
import { Projects } from "./components/sections/Projects.jsx";
import { Experience } from "./components/sections/Experience.jsx";
import { Contact } from "./components/sections/Contact.jsx";
import { useTheme } from "./lib/useTheme.js";
import { useScrollReveal } from "./lib/useScrollReveal.js";

export default function App() {
  const { theme, toggle } = useTheme();
  useScrollReveal();

  return (
    <>
      <div className="md:grid md:grid-cols-[304px_1fr] xl:grid-cols-[320px_1fr] min-h-screen">
        <Sidebar theme={theme} toggle={toggle} />
        <main className="px-5 md:px-10 lg:px-14 max-w-[calc(100% - 320px)]">
          <div className="reveal">
            <Hero />
          </div>
          <div className="reveal">
            <About />
          </div>
          <div className="reveal">
            <Skills />
          </div>
          <div className="reveal">
            <Projects />
          </div>
          <div className="reveal">
            <Experience />
          </div>
          <div className="reveal">
            <Contact />
          </div>
        </main>
      </div>
    </>
  );
}
