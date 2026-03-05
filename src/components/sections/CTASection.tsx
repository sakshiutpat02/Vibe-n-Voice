"use client";

import { motion } from "framer-motion";
import Script from "next/script";
import { useState } from "react";

import { Reveal } from "@/components/ui/Reveal";

export const CTASection = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="contact" className="container-core section-pad text-center">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 p-12 lg:p-24 dark:bg-primary/10">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-secondary/20 blur-[110px]" />
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-primary/20 blur-[110px]" />

          <div className="relative z-10">
            <h2 className="heading-display mb-8 text-4xl font-bold text-white md:text-6xl">
              Ready to build your brand&apos;s voice?
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-lg text-slate-300">
              Let&apos;s collaborate to build something that resonates and amplifies your message across the digital landscape.
            </p>
            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              onClick={() => setShowForm((prev) => !prev)}
              className="inline-flex rounded-full bg-primary px-10 py-4 text-sm font-bold text-white transition-colors hover:bg-indigo-700"
            >
              Contact Us
            </motion.button>

            {showForm && (
              <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md md:p-8">
                <div className="typeform-container pt-0">
                  <div data-tf-live="01KJYV378A6YNAM8EAR3W63T2X" />
                </div>
                <Script src="//embed.typeform.com/next/embed.js" strategy="lazyOnload" />
              </div>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
};
