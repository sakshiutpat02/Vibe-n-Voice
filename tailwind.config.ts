import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        secondary: "#d946ef",
        "background-light": "#fafafa",
        "background-dark": "#0f172a"
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["Inter", "sans-serif"]
      },
      borderRadius: {
        DEFAULT: "1rem",
        "2xl": "1.5rem"
      },
      boxShadow: {
        vibe: "0 0 40px -10px rgba(99, 102, 241, 0.2)"
      }
    }
  },
  plugins: []
};

export default config;
