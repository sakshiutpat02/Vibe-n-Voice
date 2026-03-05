"use client";

import { motion } from "framer-motion";

import { GradientText } from "@/components/ui/GradientText";
import { heroIntroTransition } from "@/styles/animations";

export const Hero = () => {
  return (
    <header id="home" className="container-core pb-20 pt-24 text-center md:pt-32">
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={heroIntroTransition}>
        <div className="mb-8 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary">
          PR & Marketing Agency - Est. 2026
        </div>
        <h1 className="heading-display mb-8 text-5xl font-extrabold md:text-8xl">
          We give your brand <br />
          <GradientText>its true signature.</GradientText>
        </h1>
        <p className="mx-auto mb-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          &quot;We help brands find their voice and make sure the world actually hears it.&quot;
        </p>
        {/* Optional alternatives:
            "Not louder marketing. Clearer voices."
            "Where culture meets communication."
            "Brands don’t need more noise. They need resonance."
        */}
      </motion.div>
    </header>
  );
};
