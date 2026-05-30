import { useState, useEffect } from "react";

// Cycles through `words`, typing then erasing each one.
export function useTyped(words, { typeMs = 70, eraseMs = 35, holdMs = 1400 } = {}) {
  const [out, setOut] = useState("");
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState("typing"); // typing | erasing

  useEffect(() => {
    let t;
    const target = words[idx % words.length];
    if (phase === "typing") {
      if (out.length < target.length) {
        t = setTimeout(() => setOut(target.slice(0, out.length + 1)), typeMs);
      } else {
        t = setTimeout(() => setPhase("erasing"), holdMs);
      }
    } else {
      if (out.length > 0) {
        t = setTimeout(() => setOut(target.slice(0, out.length - 1)), eraseMs);
      } else {
        setIdx((i) => i + 1);
        setPhase("typing");
      }
    }
    return () => clearTimeout(t);
  }, [out, phase, idx, words, typeMs, eraseMs, holdMs]);

  return out;
}
