import React from "react";
import style from "./Header.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);
  return (
    <div
      className={
        scrollPosition > 82 ? style.bannerHeaderActive : style.bannerHeader
      }
    >
      <Link className={style.headerLeft} to={"/"}>
        Ctruh
      </Link>
      <div className={style.headerMiddle}>
        <Link className={style.headerContent} to={"/about_us"}>
          About
        </Link>
        <Link className={style.headerContent} to={"/blogs"}>
          Blogs
        </Link>
        <div className={style.headerContent}>Contact</div>
        <div className={style.headerContent}>What do we Offer</div>
      </div>
      <div className={style.headerRight}>EN</div>
    </div>
  );
}

export default Header;
