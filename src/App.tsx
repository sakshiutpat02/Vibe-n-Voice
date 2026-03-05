import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  return (
    <div className="bg-background-light text-slate-800 font-body transition-colors duration-300 dark:bg-background-dark dark:text-slate-100">
      <ThemeToggle />
      <main>
        <Hero />
        <Philosophy />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
