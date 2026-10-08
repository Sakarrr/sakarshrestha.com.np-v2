import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHead } from "../primitives";
import { SKILLS } from "../../data/content";

gsap.registerPlugin(ScrollTrigger);

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const list = chipsRef.current;
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
        { opacity: 0, y: 12, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.38,
          ease: "power2.out",
          stagger: 0.035,
        },
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
        <p className="text-[15px] text-ink-soft dark:text-chalk-soft max-w-[60ch] mb-7 text-pretty">
          <b className="block">Core</b> JavaScript · React · TypeScript
        </p>
        <p className="text-[15px] text-ink-soft dark:text-chalk-soft max-w-[60ch] mb-7 text-pretty">
          <b className="block">Frontend</b> HTML · CSS · SCSS · Tailwind CSS
        </p>
        <p className="text-[15px] text-ink-soft dark:text-chalk-soft max-w-[60ch] mb-7 text-pretty">
          <b className="block">Background</b> WordPress · PHP · Gutenberg ·
          Theme & Plugin Development
        </p>
        <p className="text-[15px] text-ink-soft dark:text-chalk-soft max-w-[60ch] mb-7 text-pretty">
          <b className="block">Exploring</b> LLMs · AI Agents · Developer
          Automation
        </p>
      </div>
    </section>
  );
}
