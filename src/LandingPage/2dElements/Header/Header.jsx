import React from "react";
import style from "./Header.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import store from "../../../store";

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { navDark, setNavDark } = store();

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

  console.log(navDark);
  return (
    <div
      className={
        scrollPosition > 82
          ? style.bannerHeaderActive
          : navDark === "contact"
          ? style.bannerHeaderBlack
          : style.bannerHeader
      }
    >
      <Link
        onClick={() => setNavDark("")}
        className={style.headerLeft}
        to={"/"}
      >
        Ctruh
      </Link>
      <div className={style.headerMiddle}>
        <Link
          onClick={() => setNavDark("")}
          className={style.headerContent}
          to={"/about_us"}
        >
          About
        </Link>
        <Link
          onClick={() => setNavDark("")}
          className={style.headerContent}
          to={"/blogs"}
        >
          Blogs
        </Link>
        <Link
          onClick={() => setNavDark("contact")}
          className={style.headerContent}
          to={"/contact_us"}
        >
          Contact
        </Link>
        <Link to={"/application"} className={style.headerContent}>
          Applications
        </Link>
      </div>
      <div className={style.headerRight}>EN</div>
    </div>
  );
}

export default Header;
