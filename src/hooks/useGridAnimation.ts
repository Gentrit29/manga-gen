import type { Variants } from "framer-motion";

export function useGridAnimation(colums: number = 5): Variants {
  return {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (custom: number) => {
      const row = Math.floor(custom / colums);
      return {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          delay: row * 0.05,
          duration: 0.3,
          ease: "easeOut",
        },
      };
    },
  };
}
