import { Icon } from "../components/Icon";
import type { NavItem, Social, HeroStat, Project, Job } from "../types";

export const PROFILE = {
  name: "Sakar Shrestha",
  firstName: "Sakar",
  handle: "",
  email: "ctha.sakar@gmail.com",
  role: "Frontend Engineer · Kathmandu, Nepal",
  get availability() {
    const d = new Date(
      new Date().toLocaleString("en-US", { timeZone: "Asia/Kathmandu" }),
    );
    const day = d.getDate();
    const suffix =
      day === 1 || day === 21 || day === 31
        ? "st"
        : day === 2 || day === 22
          ? "nd"
          : day === 3 || day === 23
            ? "rd"
            : "th";
    const month = d.toLocaleDateString("en-US", { month: "short" });
    const year = d.getFullYear();
    const time = d.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    return `नमस्ते · ${day}${suffix} ${month} ${year} · ${time}`;
  },
  get copyright() {
    return `© ${new Date().getFullYear()}`;
  },
};

export const NAV: NavItem[] = [
  { id: "hero", num: "01", label: "Index" },
  { id: "about", num: "02", label: "About" },
  { id: "skills", num: "03", label: "Stack" },
  { id: "projects", num: "04", label: "Works" },
  { id: "experience", num: "05", label: "Experience" },
  { id: "contact", num: "06", label: "Contact" },
];

export const SOCIALS: Social[] = [
  {
    k: "gh",
    label: "GitHub",
    href: "https://github.com/Sakarrr",
    icon: Icon.Github,
  },
  {
    k: "li",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sakarshrestha97/",
    icon: Icon.LinkedIn,
  },
  { k: "x", label: "X", href: "https://x.com/sakarrstha", icon: Icon.X },
  {
    k: "ml",
    label: "Email",
    href: "mailto:ctha.sakar@gmail.com",
    icon: Icon.Mail,
  },
];

export const TYPED_WORDS: string[] = [
  "JavaScript, React & WordPress.",
  "design systems at scale.",
  "interfaces that feel like tools.",
  "the boring stuff, done well.",
];

export const HERO_STATS: HeroStat[] = [
  { v: "5y", l: "Shipping" },
  { v: "10+", l: "Projects" },
];

// Each item is a [label, value] pair (called a "tuple").
export const ABOUT_META: [string, string][] = [
  ["Based", "Kathmandu, Nepal"],
  ["Languages", "NP, EN"],
];

export const SKILLS: string[] = [
  "CSS / Sass",
  "D3",
  "HTML",
  "JavaScript",
  "PHP",
  "React",
  "Slim / ERB",
  "Stimulus JS",
  "Supabase",
  "Tailwind",
  "TypeScript",
  "WordPress",
];

// `Omit<Project, "n">` = a Project without the "n" key (we add it below with .map).
const PROJECT_LIST: Omit<Project, "n">[] = [
  {
    title: "Nepal Med",
    sub: "Pharmacy landing page & patients result database management system",
    tech: ["Tailwind", "JavaScript", "TypeScript", "React", "Supabase"],
    color: "#B45309",
  },
  {
    title: "Enterprise Client",
    sub: "Dashboard and reporting tool for enterprise operations",
    tech: ["Slim / ERB", "JavaScript", "Tailwind", "Stimulus JS", "D3"],
    color: "#3B5BDB",
  },
  {
    title: "Pragyan Docs",
    sub: "Single-page landing site for a document management platform.",
    tech: ["React", "Tailwind", "Yjs"],
    color: "#E0521E",
  },
  {
    title: "Things Cyber",
    sub: "Multi-page website for cybersecurity and IT solutions.",
    tech: ["React", "Sass"],
    color: "#0F766E",
  },
  {
    title: "Magazine Blocks",
    sub: "Gutenberg blocks plugin for the WordPress ecosystem",
    tech: ["React", "PHP", "WordPress"],
    color: "#7C3AED",
  },
  {
    title: "ColorMag",
    sub: "Classic magazine-style theme built for WordPress.",
    tech: ["Sass", "JavaScript", "jQuery", "PHP", "WordPress"],
    color: "#1F2937",
  },
];

export const PROJECTS: Project[] = PROJECT_LIST.map((p, i) => ({
  ...p,
  n: String(i + 1).padStart(2, "0"),
}));

export const EXPERIENCE: Job[] = [
  {
    time: "2024 — Now",
    role: "Frontend Developer",
    co: "Danphe Software Labs",
    desc: "Building and scaling web application frontends, implementing dynamic functionalities and delivering responsive, user-centric interfaces.",
    now: true,
  },
  {
    time: "2020 — 2024",
    role: "WordPress Developer",
    co: "ThemeGrill Pvt. Ltd.",
    desc: "Developed custom WordPress themes and a blocks plugin using PHP, JavaScript, React and WordPress, taking ownership of 2 themes and a plugin, and contributing to reusable CMS components.",
  },
  {
    time: "2019 — 2019",
    role: "Intern Developer",
    co: "Official Future Tech",
    desc: "Built and maintained Flutter mobile applications during an early-stage internship, contributing to new app development and supporting internal company products.",
  },
];

// Each item is [label, display text, url].
export const CONTACT_LINKS: [string, string, string][] = [
  [
    "Linkedin",
    "in/sakarshrestha97/",
    "https://www.linkedin.com/in/sakarshrestha97/",
  ],
  ["Github", "@Sakarrr", "https://github.com/Sakarrr"],
  ["X / Twitter", "@sakarrstha", "https://x.com/sakarrstha"],
];
