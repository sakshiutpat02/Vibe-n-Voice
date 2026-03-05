"use client";

import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    const storedTheme = window.localStorage.getItem("vibenvoice-theme");
    if (storedTheme) {
      return storedTheme === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const toggleTheme = () => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("vibenvoice-theme", next ? "dark" : "light");
    setIsDark(next);
  };

  return (
    <div className="fixed right-6 top-6 z-50">
      <button
        type="button"
        onClick={toggleTheme}
        className="rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-xs shadow-sm backdrop-blur transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/80 dark:hover:bg-slate-800"
        aria-label="Toggle theme"
      >
        {isDark ? "Light" : "Dark"}
      </button>
    </div>
  );
};
