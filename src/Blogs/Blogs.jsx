import React from "react";
import style from "./Blogs.module.css";
import BlogsContainer from "./Components/BlogsContainer/BlogsContainer";

function Blogs() {
  return (
    <div className={style.blogsMainContainer}>
      <div className={style.blogsBanner}>
        <div className={style.bannerLeft}>
          <video
            src="SaveInsta.App - 3123634909487427267_46398471443.mp4"
            loop
            muted
            autoPlay
          ></video>
        </div>
        <div className={style.bannerRight}>
          <h1>The Writesonic Blog - Making Content Your Superpower</h1>
          <p>
            On a mission to make you a content pro. Write better, impressive
            content!
          </p>
        </div>
      </div>
      <BlogsContainer />
      <div className={style.seeAllContainer}>
        <button>See All Article</button>
      </div>
    </div>
  );
}

export default Blogs;
