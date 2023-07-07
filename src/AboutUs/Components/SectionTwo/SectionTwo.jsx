import React from "react";
import style from "./SectionTwo.module.css";
import Marquee from "react-fast-marquee";

function SectionTwo() {
  return (
    <div className={style.sectionTwoMainContainer}>
      <div className={style.sectionTwoInner}>
        <div className={style.sectionTwoInnerPartOne}>
          <h1>Hard work and a passion for quality</h1>
          <div className={style.sectionInnerPartOnePara}>
            <p>
              These are the values that unite the three of us. At our core,
              we're a team of passionate designers who share a deep commitment
              to our craft. Our journey began with a shared dream of creating
              designs that truly resonated with people, and we knew that could
              only be achieved through hard work and uncompromising quality.
            </p>
            <p>
              Today, we're proud to be known as a trusted partner for businesses
              and individuals looking for solutions that are both beautiful and
              functional. We believe that the work we do has the power to change
              and shape this wonderful community. And we're grateful for the
              opportunity to do what we love every day.
            </p>
          </div>
        </div>
        <div className={style.sectionInnerPartTwo}>
          <div>
            <h1>Our Vision</h1>
            <p>
              Our commitment to customer service and custom code sets us apart
              from other Webflow agencies. Every project we take on will be
              delivered with an exceptional design system while adhering to the
              client's branding guidelines.
            </p>
          </div>
          <video
            src="355456516_283497744037690_1966878121001125489_n.mp4"
            loop
            autoPlay
            muted
            width={350}
          ></video>
        </div>

        <Marquee
          className={style.marquee}
          gradient={true}
          gradientWidth={400}
          speed={100}
        >
          CTRUH REALITY <img src="squigly-line.png" alt="" width={50} />
          CTRUH REALITY <img src="squigly-line.png" alt="" width={50} />
          CTRUH REALITY <img src="squigly-line.png" alt="" width={50} />
        </Marquee>
      </div>
    </div>
  );
}

export default SectionTwo;
