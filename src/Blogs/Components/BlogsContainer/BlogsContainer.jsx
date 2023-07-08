import React from "react";
import style from "./BlogsContainer.module.css";

function BlogsContainer() {
  const blogsData = [
    {
      time: "Jul 4, 2023",
      read: "6 min read",
      author: "Pragati Gupta",
      title: "How to Make a Shopping Bot in Three Steps?",
      desc: "You can create your own shopping bot using Botsonic a no-code AI chatbot builder that is ChatGPT-trained that will help and guide your customers on your data.",
      img: "3d-design.png",
      type: [
        {
          name: "Al Chatbot",
        },
        {
          name: "e-Commerce",
        },
      ],
    },
    {
      time: "Jun 28, 2023",
      read: "15 min read",
      author: "Aishwarya Gindham",
      title: "Exploring 9 Types of Brand Voice: Real-World Examples",
      desc: "Explore 5 shopping bots that can help you transform the shopping experience and boost sales - Botsonic, Yellow.ai, Ada, Chatfuel, and Verloop.ai.",
      img: "abstract-shape.png",
      type: [
        {
          name: "Al Chatbot",
        },
      ],
    },
    {
      time: "Jun 30, 2023",
      read: "10 min read",
      author: "Pragati Gupta",
      title:
        "Revolutionize Ecommerce: 5 Shopping Bots for eCommerce to Transform Customer Experience",
      desc: "Explore 5 shopping bots that can help you transform the shopping experience and boost sales - Botsonic, Yellow.ai, Ada, Chatfuel, and Verloop.ai.",
      img: "boom.png",
      type: [
        {
          name: "Brand Voice",
        },
      ],
    },
  ];

  return (
    <div className={style.BlogsMainContainer}>
      <div className={style.BlogsActive}>
        <div className={style.imgContainer}>
          <img src="abstract-shape (2).png" alt="" />
        </div>
        <div className={style.blogsDesc}>
          <div className={style.blogsInfo}>
            <div className={style.AvatarimgContainer}>
              <img
                src="https://cliply.co/wp-content/uploads/2020/08/442008112_GLANCING_AVATAR_3D_400px.gif"
                width={50}
                alt=""
              />
              <h5>Preethi Anchan</h5>
            </div>
            <h6>Jul 5, 2023</h6>
            <h6>23 min read</h6>
          </div>
          <h1>Get inspired, gain new skills and see what’s trending</h1>
          <p>
            Immersive Technologies: Exploring Popular Use-Cases of Extended
            Reality, Virtual Reality, and Augmented Reality and Their Impact on
            the Business Landscape. Impact on the Business Landscape
          </p>
          <a href="">Learn More</a>
        </div>
      </div>
      <div className={style.blogsCardContainer}>
        {blogsData.map((data) => (
          <div className={style.blogsCard}>
            <div className={style.blogsCardImgContainer}>
              <img src={data.img} alt="" />
              <div className={style.blogsTypeContainer}>
                {data.type.map((type) => (
                  <h5>{type.name}</h5>
                ))}
              </div>
            </div>
            <div className={style.blogsCardDescContaier}>
              <div className={style.blogsTimeDetails}>
                <h6>{data.time}</h6>
                <h6>{data.read}</h6>
              </div>
              <h1>{data.title}</h1>
              <p>{data.desc}</p>
              <div className={style.blogsAvatarContainer}>
                <img
                  src="https://cliply.co/wp-content/uploads/2020/08/442008112_GLANCING_AVATAR_3D_400px.gif"
                  alt=""
                />
                <h6>{data.author}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogsContainer;
