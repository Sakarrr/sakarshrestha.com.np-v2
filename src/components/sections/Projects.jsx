import { SectionHead } from "../primitives.jsx";
import { Icon } from "../Icon.jsx";
import { PROJECTS } from "../../data/content.js";

export function Projects() {
  return (
    <section
      id="projects"
      className="py-24 border-t border-ink/10 dark:border-chalk/10"
    >
      <SectionHead num="04 / Works" title="Six things, recently" />

      <div className="flex flex-col">
        {PROJECTS.map((p, i) => (
          <a
            key={p.n}
            href={`#project-${p.n}`}
            className={`project-row grid grid-cols-[44px_1fr_auto] md:grid-cols-[56px_1fr_220px_28px] gap-4 items-center py-5 ${i === 0 ? "border-t" : ""} border-b border-ink/10 dark:border-chalk/10`}
          >
            <span className="font-mono text-[11px] tracking-wider text-ink-mute dark:text-chalk-mute">
              {p.n}
            </span>
            <div>
              <div className="p-title font-display font-medium text-[22px] -tracking-[0.015em] transition-colors">
                {p.title}
              </div>
              <div className="text-[13px] text-ink-mute dark:text-chalk-mute mt-0.5">
                {p.sub}
              </div>
            </div>
            <div className="hidden md:flex flex-wrap gap-1 justify-end">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10.5px] text-ink-soft dark:text-chalk-soft py-0.5 px-1.5 border border-ink/20 dark:border-chalk/20 rounded-sm"
                >
                  {t}
                </span>
              ))}
            </div>
            <span className="p-arrow hidden md:inline-flex justify-end">
              <Icon.Arrow className="h-[18px] w-[18px]" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
