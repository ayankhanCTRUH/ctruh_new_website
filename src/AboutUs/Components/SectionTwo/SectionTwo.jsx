import { useRef } from "react";
import style from "./SectionTwo.module.css";
import Marquee from "react-fast-marquee";
import { motion, useInView } from "framer-motion";

function SectionTwo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className={style.sectionTwoMainContainer}>
      <div className={style.sectionTwoInner}>
        <div className={style.sectionTwoInnerPartOne}>
          <motion.h1
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            Hard work and a passion for quality
          </motion.h1>
          <div className={style.sectionInnerPartOnePara}>
            <motion.p
              ref={ref}
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              These are the values that unite the three of us. At our core,
              we're a team of passionate designers who share a deep commitment
              to our craft. Our journey began with a shared dream of creating
              designs that truly resonated with people, and we knew that could
              only be achieved through hard work and uncompromising quality.
            </motion.p>
            <motion.p
              ref={ref}
              style={{
                transform: isInView ? "none" : "translateX(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              Today, we're proud to be known as a trusted partner for businesses
              and individuals looking for solutions that are both beautiful and
              functional. We believe that the work we do has the power to change
              and shape this wonderful community. And we're grateful for the
              opportunity to do what we love every day.
            </motion.p>
          </div>
        </div>
        <motion.div
          className={style.sectionInnerPartTwo}
          ref={ref}
          style={{
            // transform: isInView ? "none" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.5s ease-in-out",
          }}
        >
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
        </motion.div>

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
