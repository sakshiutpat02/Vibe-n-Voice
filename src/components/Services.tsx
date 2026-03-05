import { motion } from "framer-motion";

const services = [
  {
    title: "Digital Marketing",
    description: "Growth driven by smart SEO, paid media, and conversion-focused funnels.",
    accent: "group-hover:text-primary"
  },
  {
    title: "Social Strategy",
    description: "We build social ecosystems - not just posts.",
    accent: "group-hover:text-secondary"
  },
  {
    title: "Public Relations",
    description: "Strategic visibility where credibility matters.",
    accent: "group-hover:text-primary"
  },
  {
    title: "Personal Brand",
    description: "Helping founders and leaders build voices people follow.",
    accent: "group-hover:text-secondary"
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 px-6 py-24 dark:bg-slate-900/30 lg:px-12">
      <motion.div
        className="mx-auto max-w-7xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.25em] text-primary">Expertise</span>
            <h2 className="font-display text-4xl font-bold md:text-5xl">Comprehensive Creative Solutions</h2>
          </div>
          <p className="max-w-md text-slate-600 dark:text-slate-300">
            A modern blend of digital strategy, storytelling, and reputation building.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <motion.article
              key={service.title}
              className="group rounded-2xl border border-slate-100 bg-white p-10 shadow-vibe transition-all duration-300 dark:border-slate-700 dark:bg-slate-800"
              whileHover={{ y: -6 }}
            >
              <h3 className={`mb-4 font-display text-2xl font-bold transition-colors ${service.accent}`}>{service.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
