import { useLayoutEffect } from "react";

export function useScrollReveal() {
  useLayoutEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal"));
    if (!els.length) return;

    const vh = window.innerHeight || document.documentElement.clientHeight;
    const hidden = [];
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top > vh * 0.85) {
        el.classList.add("pre-reveal");
        hidden.push(el);
      }
    });
    if (!hidden.length) return;

    if (!("IntersectionObserver" in window)) {
      hidden.forEach((el) => el.classList.remove("pre-reveal"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.remove("pre-reveal");
            e.target.classList.add("revealing");
            obs.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );
    hidden.forEach((el) => obs.observe(el));

    const safety = setTimeout(
      () => hidden.forEach((el) => el.classList.remove("pre-reveal")),
      1500
    );
    return () => {
      obs.disconnect();
      clearTimeout(safety);
    };
  }, []);
}
