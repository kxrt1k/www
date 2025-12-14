import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const lines = ["(Design) Engineer.", "(Digital) Curator."];

export function Tagline() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % lines.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        transition={{ duration: 0.25 }}
        style={{ display: "inline-block" }}
        initial={{ opacity: 0, y: 5, scale: 0.95, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -5, scale: 0.95, filter: "blur(4px)" }}
        key={lines[index]}
      >
        {lines[index]}
      </motion.span>
    </AnimatePresence>
  );
}
