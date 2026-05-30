import { SectionHead } from "../primitives.jsx";
import { SKILLS } from "../../data/content.js";

export function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-ink/10 dark:border-chalk/10">
      <SectionHead num="03 / Stack" title="Things I reach for" />
      <p className="text-[15px] text-ink-soft dark:text-chalk-soft max-w-[60ch] mb-7 text-pretty">
        Some I love, some I tolerate, all I've shipped to production. Listed alphabetically
        because every other order felt like a personality test.
      </p>
      <div className="flex flex-wrap gap-2">
        {SKILLS.map((s) => (
          <span
            key={s}
            className="chip font-mono text-[12.5px] py-1.5 px-3 rounded-full border border-ink/20 dark:border-chalk/20 bg-paper-soft dark:bg-night-soft text-ink-soft dark:text-chalk-soft"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
