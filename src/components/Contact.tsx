import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
      <motion.div
        className="relative overflow-hidden rounded-3xl bg-slate-900 p-10 text-center lg:p-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        {/* Glow Effects */}
        <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/20 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 -translate-x-1/2 translate-y-1/2 rounded-full bg-primary/20 blur-[100px]" />

        <div className="relative z-10">
          {/* Heading */}
          <h1 className="mx-auto mb-6 max-w-3xl font-display text-4xl font-bold leading-tight text-white md:text-5xl">
            Let's build something people notice.
          </h1>

          {/* Description */}
          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            Tell us about your brand, your challenge, or your ambition.
            We'll help you shape the story.
          </p>

          {/* CTA Button */}
          <a
            href="https://form.typeform.com/to/SSCuRegz"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:opacity-90"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </section>
  );
}