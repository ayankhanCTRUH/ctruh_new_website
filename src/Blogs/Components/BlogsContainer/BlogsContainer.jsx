import React from "react";
import style from "./BlogsContainer.module.css";
import blogsData from "../BlogsData/data.json";
import { Link } from "react-router-dom";

function BlogsContainer() {
  return (
    <div className={style.BlogsMainContainer}>
      <Link to={`/blogs/${blogsData[0]?.url}`} className={style.BlogsActive}>
        <div className={style.imgContainer}>
          <img src={blogsData[0].thumbnail} alt="" />
        </div>
        <div className={style.blogsDesc}>
          <div className={style.blogsInfo}>
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
          </div>
          <h1>{blogsData[0].seo.title}</h1>
          <p>{blogsData[0].seo.desc}</p>
          <a href="">Learn More</a>
        </div>
      </Link>
      <div className={style.blogsCardContainer}>
        {blogsData.slice(1, -1).map((data) => (
          <Link to={`/blogs/${data?.url}`} className={style.blogsCard}>
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
