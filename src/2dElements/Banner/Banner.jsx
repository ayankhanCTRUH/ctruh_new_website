import React from "react";
import style from "./Banner.module.css";
import { useControls } from "leva";

function Banner() {
  return (
    <div className={style.bannerContainer}>
      <div className={style.bannerHeader}>
        <div className={style.headerLeft}>Ctruh</div>
        <div className={style.headerMiddle}>
          <div className={style.headerContent}>About</div>
          <div className={style.headerContent}>Blogs</div>
          <div className={style.headerContent}>Contact</div>
          <div className={style.headerContent}>What do we Offer</div>
        </div>
        <div className={style.headerRight}>EN</div>
      </div>

      <div className={style.mainBanner}>
        <div className={style.bannerLeft}>
          <h1>
            We Are <br />
            <span className={style.companyName}>Ctruh</span> Reality
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
            corporis, quis nobis mollitia pariatur deserunt animi placeat odio
            dolorum tempora expedita aliquid error alias nihil saepe modi?
          </p>
          <div className={style.bannerButton}>
            <button>Contact Us</button>
            <button>See Our Service</button>
          </div>
        </div>
        <div className={style.bannerRight}></div>
      </div>
    </div>
  );
}

export default Banner;
