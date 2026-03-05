import { motion } from "framer-motion";

const values = [
  {
    title: "Cultural Insight",
    description:
      "We read the signals beneath the noise - understanding what audiences feel, not just what they click."
  },
  {
    title: "Authentic Voice",
    description: "Brands don't need louder messaging. They need a voice people trust."
  },
  {
    title: "Strategic Momentum",
    description: "Smart strategy that moves at the pace of culture."
  }
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
      <motion.div
        className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="lg:col-span-4">
          <h2 className="mb-6 font-display text-4xl font-bold leading-tight md:text-5xl">
            Every brand <br />
            has a vibe.
          </h2>
          <div className="mb-8 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-secondary" />
          <p className="leading-relaxed text-slate-600 dark:text-slate-300">
            Marketing isn't just about reach. It's about resonance. We help brands discover their natural voice and
            express it in ways people genuinely connect with.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:col-span-8">
          {values.map((card) => (
            <motion.article
              key={card.title}
              className="glass-card rounded-2xl p-8 transition-all duration-500"
              whileHover={{ y: -6 }}
            >
              <h3 className="mb-4 font-display text-xl font-bold">{card.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{card.description}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
