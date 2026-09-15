import { SectionHead } from "../primitives.jsx";
import { ABOUT_META, PROFILE } from "../../data/content.js";

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

        <aside className="rounded-lg border border-ink/15 dark:border-chalk/15 bg-paper-soft dark:bg-night-soft p-6 flex flex-col gap-6">
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
