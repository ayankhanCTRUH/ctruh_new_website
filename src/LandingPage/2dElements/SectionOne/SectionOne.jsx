import React from "react";
import style from "./SectionOne.module.css";

import AnimatedText from "../../../components/AnimatedText";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

function SectionOne() {
  return (
    <div className={style.sectionOneContainer}>
      <div className={style.sectionOneHeading}>
        <AnimatedText
          title={"Tools to express your creativity in 3D"}
          style={{
            fontSize: 32,
            color: "#fff",
            fontWeight: 400,
            textAlign: "center",
          }}
          desc={
            "3D opens a new door for creativity. A solid set of features that will.help you create your best 3d designs."
          }
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className={style.videoContainer}
      >
        <video
          src="https://ctruht0.blob.core.windows.net/ctruh-test/Waitlist_Thanks_Reel.mp4"
          autoPlay
          loop
          muted
          width={"70%"}
        ></video>
      </motion.div>
    </div>
  );
}

export default SectionOne;
