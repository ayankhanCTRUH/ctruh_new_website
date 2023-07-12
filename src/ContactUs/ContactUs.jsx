import React from "react";
import style from "./ContactUs.module.css";
import { motion } from "framer-motion";
import {
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandTwitter,
  TbBrandFacebook,
} from "react-icons/tb";

function ContactUs() {
  return (
    <div className={style.contactMainContainer}>
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className={style.leftSection}
      >
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Got a question? <br />
          <motion.span
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            Get in Touch{" "}
          </motion.span>
        </motion.h1>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className={style.contactInfoContainer}
        >
          <div className={style.contactInfo}>
            <h1>Banglore HQ</h1>
            <p>
              Obeya Gusto, 5th Main Rd, Sector 6, HSR Layout, Bengaluru,
              Karnataka 560102
            </p>
            <div className={style.infoNum}>
              <h5>+91 7619418898</h5>
              <h5>hello@ctruh.com</h5>
            </div>
          </div>

          <div className={style.contactInfo}>
            <h1>Pune HQ</h1>
            <p>
              Obeya Gusto, 5th Main Rd, Sector 6, HSR Layout, Bengaluru,
              Karnataka
            </p>
            <div className={style.infoNum}>
              <h5>+91 7619418898</h5>
              <h5>hello@ctruh.com</h5>
            </div>
          </div>

          <div className={style.contactInfo}>
            <h1>Contact our teams:</h1>
            <div className={style.emails}>
              <h1>Co-founder</h1>
              <p>karma.symington@multitudemedia.co.uk</p>
            </div>
            <div className={style.emails}>
              <h1>Product Manager</h1>
              <p>karma.symington@multitudemedia.co.uk</p>
            </div>
          </div>

          <div className={style.contactInfo}>
            <h1>Follow us on</h1>
            <div className={style.iconsContainer}>
              <TbBrandInstagram />
              <TbBrandLinkedin />
              <TbBrandTwitter />
              <TbBrandFacebook />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className={style.rightSection}
      >
        <div className={`${style.rounded_text} ${style.rotating}`}>
          <svg viewBox="0 0 370 370">
            <path
              id="textPath"
              d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0"
              transform="translate(185,185)"
              fill="none"
              strokeWidth="0"
            ></path>
            <g fontSize={"17px"}>
              <text textAnchor="start">
                <textPath
                  className={style.coloring}
                  xlinkHref="#textPath"
                  startOffset="0%"
                >
                  GET IN TOUCH ✦ CTRUH ✦ GET IN TOUCH ✦ CTRUH VERSE ✦
                </textPath>
              </text>
            </g>
          </svg>
        </div>
        <img src="brainstorm.png" alt="" />
      </motion.div>
    </div>
  );
}

export default ContactUs;
