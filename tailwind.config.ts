import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        secondary: "#d946ef",
        "background-light": "#fafafa",
        "background-dark": "#0f172a",
      },
      fontFamily: {
        heading: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(99, 102, 241, 0.22)",
      },
      borderRadius: {
        DEFAULT: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
