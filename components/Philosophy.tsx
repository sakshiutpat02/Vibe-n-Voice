"use client";

import { Reveal } from "@/components/Reveal";

const philosophyCards = [
  {
    title: "Cultural Insight",
    description:
      "We read the signals beneath the noise — understanding what audiences feel, not just what they click.",
  },
  {
    title: "Authentic Voice",
    description: "Brands don’t need louder messaging. They need a voice people trust.",
  },
  {
    title: "Strategic Momentum",
    description: "Smart strategy that moves at the pace of culture.",
  },
] as const;

export const Philosophy = () => {
  return (
    <section id="philosophy" className="container-core section-pad">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <h2 className="heading-display mb-6 text-4xl font-bold md:text-5xl">
            Every brand
            <br />
            has a vibe.
          </h2>
          <div className="mb-8 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-secondary" />
          <p className="leading-relaxed text-slate-600 dark:text-slate-400">
            Marketing isn’t just about reach. It’s about resonance. We help brands discover their natural voice and
            express it in ways people genuinely connect with.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:auto-rows-fr lg:col-span-8">
          {philosophyCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.08}>
              <article className="glass-card flex h-full flex-col rounded-2xl p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
                <h3 className="heading-display mb-4 text-xl font-bold">{card.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{card.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
