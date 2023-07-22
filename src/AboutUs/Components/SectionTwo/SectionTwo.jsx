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
              Presenting Ctruh, a no-code platform that makes it dead-simple for
              anyone to design and create 3D experiences without any prior
              technical knowledge. We believe that creativity should be
              accessible to everyone, and our platform removes the barriers of
              entry that have traditionally kept people from entering the 3D
              world. With Ctruh, you don't need to know how to code or have a
              background in 3D design. All you need is an idea and the
              willingness to bring it to life. Our platform is intuitive and
              user-friendly, making it easy for anyone to create and publish
              their own 3D experiences.
            </motion.p>
            <motion.p
              ref={ref}
              style={{
                transform: isInView ? "none" : "translateX(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              3D technology is driving innovation and revolutionising multiple
              industries, including gaming, e-commerce, education, and
              entertainment amongst others. With the growing demand for 3D
              content, the market for 3D design and creation is expected to
              reach billions of dollars in the coming years. However, despite
              the enormous potential, 3D design and creation can be a complex
              and challenging process, requiring specialised skills and
              expertise. This presents a significant barrier to entry for many
              individuals and businesses who wish to participate in the 3D
              world.
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
              Our vision is to empower everyone to unleash their creativity and
              bring their ideas to life in the 3D world. We believe that the
              future of design and creativity lies in the Metaverse, and we are
              dedicated to making this world accessible to everyone, regardless
              of their technical background.
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
