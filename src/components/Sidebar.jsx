import { useState, useEffect } from "react";
import { Icon } from "./Icon.jsx";
import { useScrollSpy } from "../lib/useScrollSpy.js";
import { NAV, SOCIALS, PROFILE } from "../data/content.js";
import avatarImg from "../assets/images/avatar.png";

function Avatar({ size = "md" }) {
  const sz = size === "sm" ? "h-8 w-8" : "h-11 w-11";
  return (
    <img
      src={avatarImg}
      alt="Avatar"
      className={`${sz} rounded-full object-cover ring-1 ring-white/10 ring-offset-2 ring-offset-night`}
    />
  );
}

function ThemeToggle({ theme, toggle }) {
  const dark = theme === "dark";
  return (
    <div
      role="switch"
      aria-checked={dark}
      aria-label="Toggle dark mode"
      className={`group relative flex items-center gap-2 h-9 w-full rounded-full border border-white/10 bg-white/[0.03] px-1.5 hover:bg-white/[0.06] transition-colors ${dark ? "tt-dark" : "tt-light"}`}
    >
      <span
        className="absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-full bg-white/10 toggle-thumb"
        style={{ transform: dark ? "translateX(100%)" : "translateX(0)" }}
      />

      <button
        onClick={() => dark && toggle()}
        className={`relative z-10 flex-1 flex items-center justify-center gap-1.5 text-[11px] font-mono uppercase tracking-wider ${!dark ? "cursor-default text-white" : "cursor-pointer text-chalk/50"}`}
      >
        <svg
          className="tt-sun h-3.5 w-3.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <line className="tt-ray" x1="12" y1="2" x2="12" y2="5" />
          <line className="tt-ray" x1="12" y1="19" x2="12" y2="22" />
          <line className="tt-ray" x1="2" y1="12" x2="5" y2="12" />
          <line className="tt-ray" x1="19" y1="12" x2="22" y2="12" />
          <line className="tt-ray" x1="5" y1="5" x2="7.1" y2="7.1" />
          <line className="tt-ray" x1="16.9" y1="16.9" x2="19" y2="19" />
          <line className="tt-ray" x1="5" y1="19" x2="7.1" y2="16.9" />
          <line className="tt-ray" x1="16.9" y1="7.1" x2="19" y2="5" />
        </svg>
        Light
      </button>

      <button
        onClick={() => !dark && toggle()}
        className={`relative z-10 flex-1 flex items-center justify-center gap-1.5 text-[11px] font-mono uppercase tracking-wider ${dark ? "cursor-default text-white" : "cursor-pointer text-chalk/50"}`}
      >
        <svg
          className="tt-moon h-3.5 w-3.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
        Dark
      </button>
    </div>
  );
}

function NavList({ active, onNav }) {
  return (
    <nav className="flex flex-col flex-1" aria-label="Sections">
      {NAV.map((item) => {
        const isActive = active === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault();
              onNav?.(item.id);
              document
                .getElementById(item.id)
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className={`nav-item grid grid-cols-[28px_1fr_auto] items-center gap-2.5 py-2.5 border-b border-white/10 font-display text-[13.5px] tracking-tight transition-all duration-300 ease-snap ${isActive ? "text-white pl-1" : "text-chalk/60 hover:text-white"}`}
          >
            <span
              className={`font-mono text-[10.5px] tracking-wider ${isActive ? "text-accent" : "text-chalk/50"}`}
            >
              {item.num}
            </span>
            <span>{item.label}</span>
            <span className="nav-bar" />
          </a>
        );
      })}
    </nav>
  );
}

function SidebarBody({ active, onNav, theme, toggle }) {
  return (
    <>
      <div className="flex items-center gap-3 mb-9">
        <Avatar />
        <div>
          <div className="font-display font-semibold text-[15px] tracking-tight text-white">
            {PROFILE.name}
          </div>
          <div className="font-mono text-[12.5px] text-chalk/60 mt-px">
            {PROFILE.handle}
          </div>
        </div>
      </div>

      <div className="inline-flex items-center gap-2 mb-7 font-mono text-[11.5px] uppercase tracking-wider text-chalk/60">
        {/* <span className="status-dot w-1.5 h-1.5 rounded-full bg-[#36C26F]" /> */}
        {PROFILE.availability}
      </div>

      <NavList active={active} onNav={onNav} />

      <div className="flex flex-col gap-4 mt-6">
        <div className="flex flex-col gap-1.5">
          <a
            href="/sakar-shrestha-cv.pdf"
            download
            className="inline-flex items-center justify-center gap-2 w-full h-9 rounded-full border border-white/15 font-mono text-[11.5px] uppercase tracking-wider text-chalk/60 hover:text-white hover:border-white/30 hover:bg-white/[0.06] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 15V3M8 11l4 4 4-4M3 18h18v3H3z" />
            </svg>
            Download CV
          </a>
          <p className="text-center font-mono text-[10px] text-chalk/30 tracking-wide">
            updated cv uploading soon
          </p>
        </div>
        <ThemeToggle theme={theme} toggle={toggle} />
        <div className="flex flex-wrap gap-1.5">
          {SOCIALS.map((s) => {
            const Glyph = s.icon;
            return (
              <a
                key={s.k}
                target="_blank"
                href={s.href}
                aria-label={s.label}
                title={s.label}
                className="h-[34px] w-[34px] grid place-items-center rounded border border-white/10 text-chalk/60 hover:text-white hover:border-white hover:bg-white/5 transition-colors"
              >
                <Glyph className="h-[15px] w-[15px]" />
              </a>
            );
          })}
        </div>
        <div className="font-mono text-[10.5px] tracking-wider text-chalk/50">
          {PROFILE.copyright}
        </div>
      </div>
    </>
  );
}

export function Sidebar({ theme, toggle }) {
  const active = useScrollSpy(NAV.map((n) => n.id));
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    const onR = () => {
      if (window.innerWidth > 880) setDrawer(false);
    };
    window.addEventListener("resize", onR);
    return () => window.removeEventListener("resize", onR);
  }, []);

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex sticky top-0 self-start h-screen z-20 flex-col px-7 py-8 bg-night text-chalk border-r border-white/10 w-[304px] xl:w-[320px] shrink-0">
        <SidebarBody active={active} theme={theme} toggle={toggle} />
      </aside>

      {/* Mobile top bar */}
      <header className="md:hidden sticky top-0 z-30 flex items-center justify-between px-5 py-3.5 backdrop-blur-md bg-paper/85 dark:bg-night/85 border-b border-ink/10 dark:border-chalk/10">
        <div className="flex items-center gap-2.5">
          <Avatar size="sm" />
          <span className="font-display font-medium text-sm">
            {PROFILE.name}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="h-10 w-10 grid place-items-center rounded-md border border-ink/15 dark:border-chalk/15"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <Icon.Sun className="h-[18px] w-[18px]" />
            ) : (
              <Icon.Moon className="h-[18px] w-[18px]" />
            )}
          </button>
          <button
            onClick={() => setDrawer(true)}
            className="h-10 w-10 grid place-items-center rounded-md border border-ink/15 dark:border-chalk/15"
            aria-label="Open menu"
          >
            <Icon.Menu className="h-[18px] w-[18px]" />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-night text-chalk px-7 pt-16 pb-8 transition-opacity duration-300 ${drawer ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <button
          className="absolute top-4 right-4 h-10 w-10 grid place-items-center text-chalk"
          onClick={() => setDrawer(false)}
          aria-label="Close menu"
        >
          <Icon.Close className="h-[22px] w-[22px]" />
        </button>
        <SidebarBody
          active={active}
          onNav={() => setDrawer(false)}
          theme={theme}
          toggle={toggle}
        />
      </div>
    </>
  );
}
