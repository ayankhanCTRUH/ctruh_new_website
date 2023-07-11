import React from "react";
import style from "./ContactUs.module.css";
import {
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandTwitter,
  TbBrandFacebook,
} from "react-icons/tb";

function ContactUs() {
  return (
    <div className={style.contactMainContainer}>
      <div className={style.leftSection}>
        <h1>
          Got a question? <br />
          <span>Get in Touch </span>
        </h1>
        <div className={style.contactInfoContainer}>
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
        </div>
      </div>

      <div className={style.rightSection}>
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
      </div>
    </div>
  );
}

export default ContactUs;
