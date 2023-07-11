import React, { lazy } from "react";
import styles from "./BlogsPage.module.css";
import blogData from "../BlogsData/data.json";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const getData = (id) => {
  const data = blogData.filter((item) => item?.url === id);
  if (data) return data[0];
  return false;
};

const BlogsPage = () => {
  const { blogTitle } = useParams();
  const blogPost = getData(blogTitle);
  if (blogPost !== false) {
    return (
      <>
        <Helmet>
          <title>{blogPost?.title}</title>
          <meta name="description" content={blogPost?.seo?.desc} />
        </Helmet>
        <div className={styles.mainContainer}>
          <div className={styles.titleContainer}>
            <br />
            {blogPost?.title && (
              <h1 className={styles.title}>{blogPost?.title}</h1>
            )}
            {blogPost?.subtitle && (
              <h2 className={styles.subTitle}>{blogPost.subtitle}</h2>
            )}
          </div>
          <div className={styles.contentContainer}>
            {blogPost?.content?.map((contentElement, index) => {
              if (contentElement.type === "heading") {
                return <h5 key={index}>{contentElement?.text}</h5>;
              }
              if (contentElement.type === "paragraph") {
                return (
                  <p key={index} className={styles.paragraph}>
                    {contentElement.text}
                  </p>
                );
              }
              if (contentElement.type === "image") {
                return (
                  <div className={styles.contentImage}>
                    <img
                      src={contentElement.src}
                      alt={contentElement.src}
                      loading="lazy"
                    />
                  </div>
                );
              }
              if (contentElement.type === "list") {
                return (
                  <ol
                    key={index}
                    style={{ listStyleType: "decimal", start: "1" }}
                  >
                    {contentElement.items.map((item, itemIndex) => (
                      <li
                        className={styles.listItem}
                        style={{ listStyleType: "decimal" }}
                        key={itemIndex}
                      >
                        <p className={styles.paragraph}>
                          <b>{item?.bold} </b>
                          {item?.paragraph}
                        </p>
                      </li>
                    ))}
                  </ol>
                );
              }
              return null;
            })}
            <div className={styles.backButton}>
              <Link to="/blogs?data=hide">
                <button className={styles.blackButton}>Back</button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default BlogsPage;
