import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-7xl px-6 pb-20 pt-36 text-center lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8 inline-block rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-primary">
          PR &amp; Marketing Aency- EST 2026
        </div>
        <h1 className="mb-8 text-5xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-8xl font-display dark:text-white">
          We give your brand <br />
          <span className="gradient-text">its true signature.</span>
        </h1>
        <p className="mx-auto mb-6 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          We help brands find their voice - and make sure the world actually hears it.
        </p>
        {/* Not louder marketing. Clearer voices. */}
        {/* Where culture meets communication. */}
        {/* Brands don't need more noise. They need resonance. */}
      </motion.div>
    </section>
  );
}
