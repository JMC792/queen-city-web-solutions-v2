// Shared motion variants for homepage sections.
// Use these when a block should gently appear as the user scrolls.
export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Use this on a parent when child items should enter one after another.
export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// Use this for large screenshots or panels that should feel more dimensional.
export const imageReveal = {
  hidden: {
    opacity: 0,
    x: 48,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Keep viewport settings consistent across animated homepage sections.
export const revealViewport = {
  amount: 0.25,
  once: true,
};
