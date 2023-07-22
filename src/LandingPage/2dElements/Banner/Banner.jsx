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
            title={"Engineering a metaverse moonshot"}
            style={{
              fontSize: 62,
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
            Meet Ctruh, A revolutionary, no-code, web-based 3D editor that turns
            ideas into stunning AR and VR experiences in minutes.
          </motion.p>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className={style.bannerButton}
          >
            <button>Join Now</button>
          </motion.div>
        </div>
        {/* <div className={style.bannerRight}></div> */}
      </div>
    </div>
  );
}

export default Banner;
