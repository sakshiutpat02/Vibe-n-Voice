"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { revealInitial, revealTransition, revealWhileInView } from "@/styles/animations";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export const Reveal = ({ children, className, delay = 0 }: RevealProps) => {
  return (
    <motion.div
      initial={revealInitial}
      whileInView={revealWhileInView}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ ...revealTransition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
