import React from "react";
import style from "./SectionOne.module.css";

function SectionOne() {
  return (
    <div className={style.sectionOneContainer}>
      <div className={style.sectionOneHeading}>
        <h1>
          Tools to express your{" "}
          <span className={style.highLight}>creativity</span> in 3D
        </h1>
        <p>
          3D opens a new door for creativity. A solid set of features that will
          help you create your best 3d designs.
        </p>
      </div>
      <div className={style.videoContainer}>
        <video
          src="https://ctruht0.blob.core.windows.net/ctruh-test/Waitlist_Thanks_Reel.mp4"
          autoPlay
          loop
          muted
          width={"70%"}
        ></video>
      </div>
    </div>
  );
}

export default SectionOne;
