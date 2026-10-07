import { useEffect } from "react";
import { Sidebar } from "./components/Sidebar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Experience } from "./components/sections/Experience";
import { Contact } from "./components/sections/Contact";
import { useTheme } from "./lib/useTheme";
import { useGsapReveal } from "./lib/useGsapReveal";

export default function App() {
  const { theme, toggle } = useTheme();
  useGsapReveal();

  // Tell the index.html loader the app has mounted + painted.
  useEffect(() => {
    requestAnimationFrame(() =>
      requestAnimationFrame(() => window.dispatchEvent(new Event("app:ready"))),
    );
  }, []);

  return (
    <>
      <div className="md:grid md:grid-cols-[304px_1fr] xl:grid-cols-[320px_1fr] min-h-screen">
        <Sidebar theme={theme} toggle={toggle} />
        <main className="px-5 md:px-10 lg:px-14 max-w-[calc(100% - 320px)]">
          <Hero />
          <div className="reveal">
            <About />
          </div>
          <Skills />
          <Projects />
          <Experience />
          <div className="reveal">
            <Contact />
          </div>
        </main>
      </div>
    </>
  );
}
