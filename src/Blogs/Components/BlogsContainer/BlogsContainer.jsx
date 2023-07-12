import { useRef } from "react";
import style from "./BlogsContainer.module.css";
import blogsData from "../BlogsData/data.json";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

function BlogsContainer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  console.log(ref, isInView);
  return (
    <div className={style.BlogsMainContainer}>
      <Link to={`/blogs/${blogsData[0]?.url}`} className={style.BlogsActive}>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className={style.imgContainer}
        >
          <img src={blogsData[0].thumbnail} alt="" />
        </motion.div>
        <div className={style.blogsDesc}>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className={style.blogsInfo}
          >
            <div className={style.AvatarimgContainer}>
              <img
                src="https://cliply.co/wp-content/uploads/2020/08/442008112_GLANCING_AVATAR_3D_400px.gif"
                width={50}
                alt=""
              />
              <h5>{blogsData[0].author}</h5>
            </div>
            <h6>{blogsData[0].date}</h6>
            <h6>23 min read</h6>
          </motion.div>
          <motion.h1
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
          >
            {blogsData[0].seo.title}
          </motion.h1>
          <motion.p
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            {blogsData[0].seo.desc}
          </motion.p>
          <motion.p
            className={style.learnMore}
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.3, ease: "easeInOut" }}
            href=""
          >
            Learn More
          </motion.p>
        </div>
      </Link>
      <div className={style.blogsCardContainer}>
        {blogsData.slice(1, -1).map((data, index) => (
          <Link
            ref={ref}
            to={`/blogs/${data?.url}`}
            className={style.blogsCard}
            style={{
              transform: isInView ? "none" : `translateX(-${index * 80}px)`,
              opacity: isInView ? 1 : 0,
              transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <div className={style.blogsCardImgContainer}>
              <img src={data.thumbnail} alt="" />
              <div className={style.blogsTypeContainer}>
                <h5>Al Chatbo</h5>
                <h5>e-Commerce</h5>
              </div>
            </div>
            <div className={style.blogsCardDescContaier}>
              <div className={style.blogsTimeDetails}>
                <h6>{data.date}</h6>
                <h6>20 min</h6>
              </div>
              <h1>{data.seo.title}</h1>
              <p>{data.seo.desc}</p>
              <div className={style.blogsAvatarContainer}>
                <img
                  src="https://cliply.co/wp-content/uploads/2020/08/442008112_GLANCING_AVATAR_3D_400px.gif"
                  alt=""
                />
                <h6>{data.author}</h6>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BlogsContainer;
