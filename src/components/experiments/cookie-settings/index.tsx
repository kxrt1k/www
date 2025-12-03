import { AnimatePresence, motion, MotionConfig } from "motion/react";
import { useState } from "react";
import styles from "./cookie-settings.module.css";

export function CookieSettings() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MotionConfig
      transition={{
        type: "spring",
        visualDuration: 0.25,
        bounce: 0.1,
      }}
    >
      <AnimatePresence mode="popLayout">
        {!isOpen && (
          <motion.div
            key="button"
            layoutId="background"
            className={styles.cookieBackground}
          >
            <button onClick={() => setIsOpen(true)}>
              <motion.span layoutId="emoji">🍪</motion.span>
            </button>
          </motion.div>
        )}

        {isOpen && (
          <motion.div
            layoutId="background"
            key="modal"
            className={styles.settings}
          >
            <motion.div
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h1>
                <motion.span className={styles.emoji} layoutId="emoji">
                  🍪
                </motion.span>{" "}
                <motion.span
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.15 } }}
                  className={styles.text}
                >
                  Cookie Settings
                </motion.span>
              </h1>

              <motion.div
                className={styles.buttons}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.15 } }}
              >
                <button onClick={() => setIsOpen(false)}>Accept All</button>
                <button onClick={() => setIsOpen(false)}>Reject All</button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}
