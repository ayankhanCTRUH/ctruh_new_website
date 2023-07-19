import React from "react";
import style from "./Banner.module.css";
import { motion } from "framer-motion";
import AnimatedText from "../../../components/AnimatedText";

function Banner() {
  return (
    <div className={style.bannerContainer}>
      <div className={style.mainBanner}>
        <div className={style.bannerLeft}>
          <AnimatedText
            title={"We Are Ctruh Reality"}
            style={{
              fontSize: 70,
              fontWeight: 600,
              margin: 0,
              textAlign: "center",
              padding: 0,
            }}
          />
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
            corporis, quis nobis mollitia pariatur deserunt animi placeat odio
            dolorum tempora expedita aliquid error alias
          </motion.p>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className={style.bannerButton}
          >
            <button>Contact Us</button>
            <button>See Our Service</button>
          </motion.div>
        </div>
        {/* <div className={style.bannerRight}></div> */}
      </div>
    </div>
  );
}

export default Banner;
