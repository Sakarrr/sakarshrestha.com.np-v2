import { SectionHead } from "../primitives.jsx";
import { ABOUT_META } from "../../data/content.js";
import portrait from "../../assets/images/potrait.png";

export function About() {
  return (
    <section
      id="about"
      className="py-24 border-t border-ink/10 dark:border-chalk/10"
    >
      <SectionHead num="02 / About" title="A short version" />
      <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 items-start">
        <div className="space-y-4 text-[17px] leading-relaxed text-ink-soft dark:text-chalk-soft text-pretty">
          <p className="font-display text-[22px] leading-snug -tracking-[0.01em] text-ink dark:text-chalk">
            नमस्ते - I’m Sakar, a frontend developer focused on turning design
            into polished, responsive interfaces. I care about the details —
            layout rhythm, smooth interactions, clean component architecture,
            and experiences that feel effortless to use.
          </p>
          <p>
            Most of my work sits between design and frontend engineering —
            building enterprise platforms, websites, WordPress products, and
            React applications that stay polished beyond the mockup stage. I
            enjoy translating design systems and UI concepts into responsive,
            maintainable interfaces that work seamlessly with real users and
            real-world content.
          </p>
          <p>
            Away from the screen, I’m usually found watching football, playing
            PC games, or catching up on anime. Lately, I’ve been fascinated by
            AI and the way it’s reshaping how we create, build, and solve
            problems — constantly discovering new things it can help us do
            better.
          </p>
        </div>

        <aside className="rounded-lg border border-ink/15 dark:border-chalk/15 bg-paper-soft dark:bg-night-soft p-5">
          <img
            src={portrait}
            alt="Sakar Shrestha"
            className="aspect-[1/1.1] rounded w-full object-cover object-top mb-4.5"
          />
          <div className="grid gap-3 text-[13.5px] mt-5">
            {ABOUT_META.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[90px_1fr] gap-3">
                <span className="font-mono text-[11px] uppercase tracking-wider text-ink-mute dark:text-chalk-mute pt-0.5">
                  {k}
                </span>
                <span className={k === "Status" ? "text-accent" : undefined}>
                  {v}
                </span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
