import React from "react";
import style from "./SectionThree.module.css";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import AnimatedText from "../../../components/AnimatedText";

const Cards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref} className={style.cardsContainer}>
      {isInView && (
        <>
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className={style.card}
          >
            <h1>Real Estate</h1>
            <h5>
              We entice with words that steal one’s attention Let us WOO your
              customers!
            </h5>
            <ul>
              <li>Offer immersive VR walkthroughs</li>
              <li>Place & visualise in AR</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className={style.card}
          >
            <h1>Direct-to-Consumer Brands</h1>
            <h5>
              We entice with words that steal one’s attention Let us WOO your
              customers!
            </h5>
            <ul>
              <li>Build your own virtual store </li>
              <li>Showcase your products in 3D</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ x: -140, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className={style.card}
          >
            <h1>Automobile</h1>
            <h5>
              We entice with words that steal one’s attention Let us WOO your
              customers!
            </h5>
            <ul>
              <li>AR usermanuals</li>
              <li>Immersive automobile experiences</li>
            </ul>
          </motion.div>
        </>
      )}
    </div>
  );
};

function SectionThree() {
  return (
    <div className={style.sectionThreeContainer}>
      <div>
        <motion.img
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          src="diamond.png"
          alt=""
          width={350}
          className={style.img1}
        />
        <motion.img
          src="squigly-globe.png"
          alt=""
          width={350}
          className={style.img2}
        />

        <div className={style.sectionThreeHeading}>
          <AnimatedText
            title={"What we offer"}
            style={{
              fontWeight: 400,
              color: "#fff",
              fontSize: 19,
              borderBottom: "5px solid #ff9600",
              display: "inline",
            }}
            desc={"Tailored Solutions Across Industries"}
            descStyle={{ fontSize: 30, fontWeight: 500, color: "#fff" }}
          />
        </div>
        <Cards />
      </div>
    </div>
  );
}

export default SectionThree;
