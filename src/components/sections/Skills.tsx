import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHead } from "../primitives";
import { SKILL_GROUPS } from "../../data/content";

gsap.registerPlugin(ScrollTrigger);

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<HTMLDListElement>(null);

  useLayoutEffect(() => {
    const list = rowsRef.current;
    if (!list) return; // ref is empty until the element is on the page
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });

      tl.fromTo(
        headRef.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.55, ease: "power3.out" },
      ).fromTo(
        Array.from(list.children),
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.45, ease: "power3.out", stagger: 0.08 },
        "-=0.2",
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-24 border-t border-ink/10 dark:border-chalk/10"
    >
      <div ref={headRef}>
        <SectionHead num="03 / Stack" title="What I'm focusing on" />
      </div>

      <dl ref={rowsRef} className="flex flex-col">
        {SKILL_GROUPS.map((g, i) => (
          <div
            key={g.label}
            className={`grid md:grid-cols-[140px_1fr] gap-3 md:gap-7 md:items-baseline py-5 ${i === 0 ? "border-t" : ""} border-b border-ink/10 dark:border-chalk/10`}
          >
            <dt className="font-mono text-caps uppercase text-ink-mute dark:text-chalk-mute">
              {g.label}
            </dt>
            <dd className="flex flex-wrap gap-2 min-w-0">
              {g.items.map((s) => (
                <span
                  key={s}
                  className={`font-mono text-[12.5px] py-1 px-2.5 rounded-full border ${
                    g.label === "Core"
                      ? "border-accent/40 text-accent bg-accent/5"
                      : "border-ink/15 dark:border-chalk/15 bg-paper-soft dark:bg-night-soft text-ink-soft dark:text-chalk-soft"
                  }`}
                >
                  {s}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
