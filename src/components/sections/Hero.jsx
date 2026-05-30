import { Eyebrow } from "../primitives.jsx";
import { useTyped } from "../../lib/useTyped.js";
import { TYPED_WORDS, HERO_STATS, PROFILE } from "../../data/content.js";

export function Hero() {
  const typed = useTyped(TYPED_WORDS);

  return (
    <section id="hero" className="pt-28 pb-24 md:pt-36">
      <Eyebrow>{PROFILE.role}</Eyebrow>
      <h1 className="h-display font-display font-medium mt-5 mb-7 text-[clamp(46px,7.4vw,96px)] leading-[0.98] -tracking-[0.035em] text-balance">
        I build the{" "}
        <em className="accent-italic font-serif italic font-normal text-accent">
          thin layer
        </em>{" "}
        between people and software.
      </h1>
      <p className="text-[clamp(17px,1.6vw,19px)] text-ink-soft dark:text-chalk-soft max-w-[56ch] mb-10 text-pretty">
        Front-end developer with over 5 years of experience building modern web
        interfaces with React and JavaScript. Focused on translating design into
        fast, responsive, and scalable frontend experiences across enterprise
        platforms, websites, and WordPress ecosystems.
      </p>

      <div className="inline-flex items-center gap-2 font-mono text-[13px] text-ink-soft dark:text-chalk-soft py-2 px-3.5 rounded-full border border-ink/20 dark:border-chalk/20 bg-paper-soft dark:bg-night-soft">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        <span>specialising in</span>
        <span>
          {typed}
          <span className="caret">&nbsp;</span>
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-9 border-t border-ink/10 dark:border-chalk/10">
        {HERO_STATS.map((s) => (
          <div key={s.l}>
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
