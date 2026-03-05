"use client";

import { motion } from "framer-motion";

import { SERVICE_ITEMS } from "@/constants/services";
import { cardHoverTransition } from "@/styles/animations";
import { Reveal } from "@/components/ui/Reveal";

export const Services = ({ withHeader = true }: { withHeader?: boolean }) => {
  return (
    <section id="services" className="section-pad bg-slate-50 dark:bg-slate-900/30">
      <div className="container-core">
        {withHeader && (
          <Reveal className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="mb-4 block text-xs uppercase tracking-[0.3em] text-primary">Expertise</span>
              <h2 className="heading-display text-4xl font-bold md:text-5xl">
                Comprehensive
                <br />
                Creative Solutions.
              </h2>
            </div>
            <p className="max-w-md text-slate-500 dark:text-slate-400">
              A modern blend of digital strategy, storytelling, and reputation building.
            </p>
          </Reveal>
        )}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:auto-rows-fr lg:grid-cols-4">
          {SERVICE_ITEMS.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.07}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={cardHoverTransition}
                className="group relative flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-10 shadow-sm transition-all duration-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
              >
                <h3 className="heading-display mb-4 text-2xl font-bold">{service.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{service.body}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
