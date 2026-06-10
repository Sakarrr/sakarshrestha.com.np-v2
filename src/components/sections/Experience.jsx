import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHead } from "../primitives.jsx";
import { EXPERIENCE } from "../../data/content.js";

gsap.registerPlugin(ScrollTrigger);

export function Experience() {
  const sectionRef = useRef(null);
  const headRef = useRef(null);
  const itemsRef = useRef(null);

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
        Array.from(itemsRef.current.children),
        { opacity: 0, x: -14, y: 8 },
        { opacity: 1, x: 0, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.11 },
        "-=0.2"
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-24 border-t border-ink/10 dark:border-chalk/10"
    >
      <div ref={headRef}>
        <SectionHead num="06 / Experience" title="A working résumé" />
      </div>
      <div className="pl-4 relative">
        <span className="absolute left-0 top-2 bottom-2 w-px bg-ink/20 dark:bg-chalk/20" />
        <div ref={itemsRef} className="flex flex-col gap-9">
          {EXPERIENCE.map((e) => (
            <div
              key={e.role}
              className="grid md:grid-cols-[140px_1fr] gap-2 md:gap-7 relative"
            >
              <span
                className={`absolute -left-[18.5px] top-2.5 w-1.5 h-1.5 rounded-full ${e.now ? "bg-accent ring-4 ring-accent/15" : "bg-paper dark:bg-night border border-ink/30 dark:border-chalk/30"}`}
              />
              <div className="font-mono text-[12px] text-ink-mute dark:text-chalk-mute pt-0.5">
                {e.time}
              </div>
              <div>
                <div className="font-display text-[17px] font-medium -tracking-[0.01em]">
                  {e.role}
                </div>
                <div className="text-[13.5px] text-accent mt-0.5">{e.co}</div>
                <div className="text-[14.5px] text-ink-soft dark:text-chalk-soft mt-2.5 max-w-[60ch]">
                  {e.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
