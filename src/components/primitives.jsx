export function SectionHead({ num, title }) {
  return (
    <header className="flex items-baseline gap-4 mb-10">
      <span className="font-mono text-caps uppercase text-ink-mute dark:text-chalk-mute">
        {num}
      </span>
      <span className="font-display font-medium text-[clamp(20px,2.2vw,24px)] -tracking-[0.01em]">
        {title}
      </span>
      <span className="flex-1 h-px bg-ink/20 dark:bg-chalk/20" />
    </header>
  );
}

export function Eyebrow({ children }) {
  return (
    <div className="inline-flex items-center gap-2.5 font-mono text-caps uppercase text-ink-mute dark:text-chalk-mute">
      <span className="w-6 h-px bg-current opacity-50" />
      {children}
    </div>
  );
}
