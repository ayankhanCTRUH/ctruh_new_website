import React from "react";
import style from "./Slider.module.css";
function Slider() {
  return (
    <div className={style.sliderContainer}>
      <video
        src="https://crypto-static.r-eng.app/rep-note/videos/hevc.mp4"
        autoPlay
        muted
        loop
      ></video>
      <div className={style.marquee}>
        <div className={style.marquee_group}>
          <p>CTRUH REALITY</p>
          <p aria-hidden="true">CTRUH REALITY</p>
          <p aria-hidden="true">CTRUH REALITY</p>
          <p aria-hidden="true">CTRUH REALITY</p>
          <p aria-hidden="true">CTRUH REALITY</p>
        </div>

        <div aria-hidden="true" className={style.marquee_group}>
          <p>CTRUH REALITY</p>
          <p>CTRUH REALITY</p>
          <p>CTRUH REALITY</p>
          <p>CTRUH REALITY</p>
          <p>CTRUH REALITY</p>
        </div>
      </div>
    </div>
  );
}

export default Slider;
