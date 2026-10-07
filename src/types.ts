// Shared types used across the app.
// A `type` describes the "shape" of an object: which keys it has and what kind of value each key holds.
import type { JSX, SVGProps } from "react";

// "dark" or "light" — nothing else is allowed.
export type Theme = "dark" | "light";

// An icon is a component that accepts normal <svg> props (className, etc.).
export type IconComponent = (props: SVGProps<SVGSVGElement>) => JSX.Element;

export type NavItem = {
  id: string;
  num: string;
  label: string;
};

export type Social = {
  k: string;
  label: string;
  href: string;
  icon: IconComponent;
};

export type HeroStat = {
  v: string; // value, e.g. "5y"
  l: string; // label, e.g. "Shipping"
};

export type Project = {
  n: string; // number, e.g. "01"
  title: string;
  sub: string;
  tech: string[];
  color: string;
};

export type Job = {
  time: string;
  role: string;
  co: string;
  desc: string;
  now?: boolean; // the `?` means this key is optional
};
