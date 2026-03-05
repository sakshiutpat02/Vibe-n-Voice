"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { NAV_ITEMS } from "@/constants/navigation";

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
    setIsDark(next);

    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("vibenvoice-theme", next ? "dark" : "light");
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-200/70 bg-background-light/80 py-5 backdrop-blur-md dark:border-slate-800 dark:bg-background-dark/80">
      <div className="container-core flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-secondary" />
          <span className="heading-display text-xl font-bold lowercase">vibe & voice</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm uppercase tracking-[0.2em] text-slate-600 transition-colors hover:text-primary dark:text-slate-300"
            >
              {item.label}
            </Link>
          ))}

          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-slate-200 p-2 text-xs transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
            aria-label="Toggle theme"
          >
            {isDark ? "Light" : "Dark"}
          </button>

          <Link
            href="/book-strategy-call"
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </nav>
  );
};
