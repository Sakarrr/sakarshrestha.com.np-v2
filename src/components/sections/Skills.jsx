import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHead } from "../primitives.jsx";
import { SKILLS } from "../../data/content.js";

gsap.registerPlugin(ScrollTrigger);

export function Skills() {
  const sectionRef = useRef(null);
  const headRef = useRef(null);
  const chipsRef = useRef(null);

  useLayoutEffect(() => {
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
        { opacity: 1, y: 0, duration: 0.55, ease: "power3.out" }
      ).fromTo(
        Array.from(chipsRef.current.children),
        { opacity: 0, y: 12, scale: 0.94 },
        { opacity: 1, y: 0, scale: 1, duration: 0.38, ease: "power2.out", stagger: 0.035 },
        "-=0.2"
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
        <SectionHead num="03 / Stack" title="Things I reach for" />
        <p className="text-[15px] text-ink-soft dark:text-chalk-soft max-w-[60ch] mb-7 text-pretty">
          Some I love, some I tolerate, all I've shipped to production. Listed alphabetically
          because every other order felt like a personality test.
        </p>
      </div>
      <div ref={chipsRef} className="flex flex-wrap gap-2">
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
