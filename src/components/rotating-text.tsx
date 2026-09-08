"use client";

import { useEffect, useState } from "react";

type RotatingTextProps = {
  words: string[];
  className?: string;
};

/** Typewriter-style rotating word for the hero tagline. */
export function RotatingText({ words, className = "" }: RotatingTextProps) {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setSub(words[index].length);
      return;
    }

    const current = words[index];
    if (!deleting && sub === current.length) {
      const hold = setTimeout(() => setDeleting(true), 1600);
      return () => clearTimeout(hold);
    }
    if (deleting && sub === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }
    const speed = deleting ? 45 : 85;
    const t = setTimeout(() => setSub((s) => s + (deleting ? -1 : 1)), speed);
    return () => clearTimeout(t);
  }, [sub, deleting, index, words]);

  return (
    <span className={`caret text-gradient font-display font-semibold ${className}`}>
      {words[index].slice(0, sub)}
    </span>
  );
}
