import React from "react";
import style from "./Blogs.module.css";
import BlogsContainer from "./Components/BlogsContainer/BlogsContainer";
import { motion } from "framer-motion";

function Blogs() {
  return (
    <div className={style.blogsMainContainer}>
      <div className={style.blogsBanner}>
        <div className={style.bannerLeft}>
          <motion.video
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            src="https://crypto-static.r-eng.app/rep-note/videos/hevc.mp4"
            loop
            muted
            autoPlay
          ></motion.video>
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
