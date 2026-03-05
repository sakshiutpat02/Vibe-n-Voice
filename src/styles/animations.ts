export const revealInitial = { opacity: 0, y: 20 } as const;
export const revealWhileInView = { opacity: 1, y: 0 } as const;
export const revealTransition = { duration: 0.55, ease: "easeOut" } as const;

export const heroIntroTransition = { duration: 0.6, ease: "easeOut" } as const;
export const floatTransition = {
  duration: 1.8,
  repeat: Number.POSITIVE_INFINITY,
  ease: "easeInOut",
} as const;

export const cardHoverTransition = { duration: 0.2, ease: "easeOut" } as const;
