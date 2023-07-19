import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

function AnimatedText({ title, desc, style, descStyle }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const letters = Array.from(title);

  // Variants for Container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.04 * i,
        duration: 2,
      },
    }),
  };

  // Variants for each letter
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 2,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 2,
      },
    },
  };

  return (
    <section ref={ref}>
      {isInView && (
        <>
          <motion.div
            style={style}
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {letters &&
              letters.map((letter, index) => (
                <motion.span variants={child} key={index}>
                  {letter}
                </motion.span>
              ))}
          </motion.div>
          {desc && (
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={descStyle}
              className="appDesc"
            >
              {desc}
            </motion.p>
          )}
        </>
      )}
    </section>
  );
}

export default AnimatedText;
