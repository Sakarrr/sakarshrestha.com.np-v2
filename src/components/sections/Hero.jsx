import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { Eyebrow } from "../primitives.jsx";
import { useTyped } from "../../lib/useTyped.js";
import { TYPED_WORDS, HERO_STATS, PROFILE } from "../../data/content.js";

export function Hero() {
  const typed = useTyped(TYPED_WORDS);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.15,
      });

      tl.fromTo(
        ".hero-eyebrow",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.45 },
      )
        .fromTo(
          ".hero-headline",
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.65 },
          "-=0.15",
        )
        .fromTo(
          ".hero-bio",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.55 },
          "-=0.3",
        )
        .fromTo(
          ".hero-badge",
          { opacity: 0, y: 10, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 0.4 },
          "-=0.2",
        )
        .fromTo(
          ".hero-stat",
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.08 },
          "-=0.1",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="hero" className="pt-28 pb-24 md:pt-36">
      <div className="hero-eyebrow">
        <Eyebrow>{PROFILE.role}</Eyebrow>
      </div>
      <h1 className="hero-headline h-display font-display font-medium mt-5 mb-7 text-[clamp(46px,7.4vw,96px)] leading-[0.98] -tracking-[0.035em] text-balance">
        Frontend developer building things with{" "}
        <em className="accent-italic font-serif italic font-normal text-accent">
          React, WordPress,
        </em>{" "}
        and a lot of{" "}
        <em className="accent-italic font-serif italic font-normal text-accent">
          {" "}
          curiosity
        </em>
        .
      </h1>
      <p className="hero-bio text-[clamp(17px,1.6vw,19px)] text-ink-soft dark:text-chalk-soft max-w-[56ch] mb-10 text-pretty">
        I build responsive web applications with a focus on React and modern
        frontend development. I also have a background in WordPress, building
        themes and Gutenberg plugins along the way.
      </p>
      <p className="hero-bio text-[clamp(17px,1.6vw,19px)] text-ink-soft dark:text-chalk-soft max-w-[56ch] mb-10 text-pretty">
        {" "}
        Currently, I'm going deeper into React and TypeScript, learning how to
        build frontend applications that are not just visually accurate, but
        also clean, reusable, and easy to maintain.
      </p>

      <div className="hero-badge inline-flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[13px] text-ink-soft dark:text-chalk-soft py-2 px-3.5 rounded-2xl border border-ink/20 dark:border-chalk/20 bg-paper-soft dark:bg-night-soft">
        <span className="inline-flex items-center gap-2 whitespace-nowrap">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span>specialising in</span>
        </span>
        <span className="whitespace-nowrap">
          {typed}
          <span className="caret">&nbsp;</span>
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-9 border-t border-ink/10 dark:border-chalk/10">
        {HERO_STATS.map((s) => (
          <div key={s.l} className="hero-stat">
            <div className="font-display font-medium text-[30px] -tracking-[0.025em]">
              {s.v}
            </div>
            <div className="font-mono text-xs text-ink-mute dark:text-chalk-mute mt-1.5">
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
