import React from "react";
import style from "./Footer.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={style.mainFooterContainer}>
      <div className={style.footerSectionContainer}>
        <section>
          <img
            src="./ctruh logo - white.png"
            alt=""
            width={50}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          />
          <p>Engineering a metaverse moonshot</p>
        </section>
        <section>
          <h5 className={style.sectionHeading}>Company</h5>
          <ul>
            <li>About us</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li>
              <a href="https://in.linkedin.com/company/ctruh">Careers</a>
            </li>
          </ul>
        </section>
        <section>
          <h5 className={style.sectionHeading}>Community</h5>
          <ul>
            <li>
              <a href="https://www.instagram.com/hello_ctruh/">Instagram</a>
            </li>
            <li>
              <a href="https://www.facebook.com/people/Ctruh/100090491642974/">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com/HelloCtruh">Twitter</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/ctruh/">LinkedIn</a>
            </li>
          </ul>
        </section>
        <section>
          <h5 className={style.sectionHeading}>Legal</h5>
          <ul>
            <li>Terms of service</li>
            <li>Privacy policy</li>
          </ul>
        </section>
      </div>
      <div className={style.allRightsContainer}>
        © 2023 Ctruh Technologies Pvt Ltd. | All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
