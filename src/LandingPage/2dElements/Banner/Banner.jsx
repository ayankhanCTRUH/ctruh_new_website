import React from "react";
import style from "./Banner.module.css";
import { useControls } from "leva";

function Banner() {
  return (
    <div className={style.bannerContainer}>
      <div className={style.mainBanner}>
        <div className={style.bannerLeft}>
          <h1>
            We Are Ctruh Reality
            {/* <span className={style.companyName}>Ctruh</span> Reality */}
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
            corporis, quis nobis mollitia pariatur deserunt animi placeat odio
            dolorum tempora expedita aliquid error alias
          </p>
          <div className={style.bannerButton}>
            <button>Contact Us</button>
            <button>See Our Service</button>
          </div>
        </div>
        {/* <div className={style.bannerRight}></div> */}
      </div>
    </div>
  );
}

export default Banner;
