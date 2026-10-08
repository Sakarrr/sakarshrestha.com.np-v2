import { SectionHead } from "../primitives";
import { ABOUT_META, PROFILE } from "../../data/content";

export function About() {
  return (
    <section
      id="about"
      className="py-24 border-t border-ink/10 dark:border-chalk/10"
    >
      <SectionHead num="02 / About" title="A little about me" />
      <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 items-start">
        <div className="space-y-4 text-[17px] leading-relaxed text-ink-soft dark:text-chalk-soft text-pretty">
          <p className="font-display text-[22px] leading-snug -tracking-[0.01em] text-ink dark:text-chalk">
            नमस्ते — I’m Sakar, a frontend developer who enjoys turning designs
            into working interfaces.
          </p>
          <p>
            Most of my work has been around frontend applications and WordPress
            products. I enjoy taking a design, figuring out how it should work
            across different screens, and turning it into something that feels
            right in the browser. A lot of the fun is in the details — building
            reusable components, getting interactions right, and figuring out
            the problems that aren't always obvious from the design.
          </p>
          <p>
            I started out working heavily with WordPress, building themes and
            Gutenberg plugins, including a dependent theme and plugin that I
            built from scratch. That experience gave me a solid foundation in
            building and maintaining real web products.
          </p>
          <p>
            These days, I'm putting more of my focus into JavaScript and React.
            I'm also learning TypeScript properly and working toward becoming a
            stronger frontend developer, especially when it comes to writing
            maintainable code and understanding how larger applications should
            be structured.
          </p>
          <p>
            I'm also exploring LLMs and AI agents. Mostly out of curiosity — I
            want to understand how they work and find useful ways to automate
            some of the repetitive parts of development.
          </p>
        </div>

        <aside className="md:sticky md:top-8 rounded-lg border border-ink/15 dark:border-chalk/15 bg-paper-soft dark:bg-night-soft p-6 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-wider text-ink-mute dark:text-chalk-mute">
              Profile
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-wider text-accent">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Learning and Exploring
            </span>
          </div>

          <div>
            <div className="font-display font-semibold text-[26px] -tracking-[0.02em] text-ink dark:text-chalk">
              {PROFILE.name}
            </div>
            <div className="font-mono text-[12.5px] text-ink-mute dark:text-chalk-mute mt-1.5">
              {PROFILE.role}
            </div>
          </div>

          <div className="h-px bg-ink/10 dark:bg-chalk/10" />

          <div className="grid gap-3 text-[13.5px]">
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
