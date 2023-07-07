import React from "react";
import style from "./SectionOne.module.css";

function SectionOne() {
  return (
    <div className={style.sectionOneMainContainer}>
      <div className={style.sectionOneInner}>
        <p>Get to know us</p>
        <h1>About Ctruh</h1>
        <p>
          By sharing our expertise and resources, we're able to help others
          create exceptional websites.
        </p>
      </div>
      <img src="ring-abstract-shape.png" alt="" className={style.img1} />
      <img src="spiral-abstract-shape.png" alt="" className={style.img2} />
      <img src="star-mixer.png" alt="" className={style.img3} />
      <img src="ball-abstract-shape.png" alt="" className={style.img4} />
    </div>
  );
}

export default SectionOne;
