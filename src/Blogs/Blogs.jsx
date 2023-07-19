import React, { Suspense } from "react";
import style from "./Blogs.module.css";
import BlogsContainer from "./Components/BlogsContainer/BlogsContainer";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import {
  PresentationControls,
  ContactShadows,
  Environment,
  Stage,
} from "@react-three/drei";

function Blogs() {
  const { scene } = useGLTF("./0d331180-0c24-11ed-9842-0d5759ed8de0.glb");
  return (
    <div className={style.blogsMainContainer}>
      <div className={style.blogsBanner}>
        <div className={style.bannerLeft}>
          <Canvas>
            <Stage environment={"city"}>
              <PresentationControls
                config={{ mass: 2, tension: 500 }}
                snap={{ mass: 4, tension: 1500 }}
                rotation={[0, 0.3, 0]}
                polar={[-Math.PI / 3, Math.PI / 3]}
                azimuth={[-Math.PI / 1.4, Math.PI / 2]}
              >
                <primitive
                  object={scene}
                  scale={0.02}
                  // rotation={[0.2, -0.9, 0]}
                />
              </PresentationControls>
              {/* <Environment files={"./brown_photostudio_02_1k.hdr"} /> */}
            </Stage>
          </Canvas>

          {/* <motion.video
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            src="https://crypto-static.r-eng.app/rep-note/videos/hevc.mp4"
            loop
            muted
            autoPlay
          ></motion.video> */}
        </div>
        <div className={style.bannerRight}>
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
          >
            The Writesonic Blog - Making Content Your Superpower
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
          >
            On a mission to make you a content pro. Write better, impressive
            content!
          </motion.p>
          <div className={style.buttonCtn}>
            <form action="">
              <input
                type="email"
                maxlength="50"
                required
                placeholder="Enter your email address"
              />
              <button className={style.bt}>Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <BlogsContainer />
      </motion.div>
      <div className={style.seeAllContainer}>
        <button>See All Article</button>
      </div>
    </div>
  );
}

export default Blogs;
