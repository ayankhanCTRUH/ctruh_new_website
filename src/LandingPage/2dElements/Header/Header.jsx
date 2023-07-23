import React from "react";
import style from "./Header.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TbMenu2 } from "react-icons/tb";
import { MdClose } from "react-icons/md";
import store from "../../../store";

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mobileNav, setMobileNav] = useState(false);
  const [menueClicked, setMenuClicked] = useState(false);
  const { navDark, setNavDark } = store();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
      };

      const handleResize = () => {
        if (window.innerWidth < 850) {
          setMobileNav(true);
        } else {
          setMobileNav(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  const [count, setCount] = useState(window.localStorage.getItem("count"));
  useEffect(() => {
    window.localStorage.setItem("count", count);
  }, [count]);
  const dark = () => {
    return setCount("dark");
  };
  const light = () => {
    return setCount("light");
  };

  return (
    <div
      className={
        scrollPosition > 82
          ? style.bannerHeaderActive
          : count === "dark"
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
        <Link onClick={light} className={style.headerContent} to={"/about_us"}>
          About
        </Link>
        <Link onClick={light} className={style.headerContent} to={"/blogs"}>
          Blogs
        </Link>
        <Link onClick={dark} className={style.headerContent} to={"/contact_us"}>
          Contact
        </Link>
        <Link
          onClick={dark}
          className={`${style.headerContent} ${style.headerContentAI}`}
          to={"/ai"}
        >
          AI
        </Link>
      </div>
      <div
        className={
          scrollPosition > 82
            ? style.headerActive
            : count === "dark"
            ? style.headerDark
            : style.headerRight
        }
      >
        <button>Login</button>
        <button>Sign Up</button>
      </div>

      <div className={style.mobileNav}>
        {menueClicked ? (
          <MdClose size={30} onClick={() => setMenuClicked(!menueClicked)} />
        ) : (
          <TbMenu2 size={30} onClick={() => setMenuClicked(!menueClicked)} />
        )}

        {menueClicked && (
          <div className={style.mobileNavContainer}>
            <Link
              onClick={light}
              className={style.headerContent}
              to={"/about_us"}
            >
              About
            </Link>
            <Link onClick={light} className={style.headerContent} to={"/blogs"}>
              Blogs
            </Link>
            <Link
              onClick={light}
              className={style.headerContent}
              to={"/contact_us"}
            >
              Contact
            </Link>
            <Link onClick={dark} className={style.headerContent} to={"/ai"}>
              AI
            </Link>
            <div className={style.loginContainer}>
              <button>Login</button>
              <button>Sign Up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
