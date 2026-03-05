import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const shouldDark = saved === "dark";
    document.documentElement.classList.toggle("dark", shouldDark);
    setIsDark(shouldDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
      className="fixed right-6 top-6 z-50 rounded-full border border-slate-300 bg-white/85 p-2 text-slate-700 shadow-sm backdrop-blur transition-colors hover:text-primary dark:border-slate-700 dark:bg-slate-900/85 dark:text-slate-100"
    >
      <span className="material-symbols-outlined">{isDark ? "light_mode" : "dark_mode"}</span>
    </button>
  );
}
