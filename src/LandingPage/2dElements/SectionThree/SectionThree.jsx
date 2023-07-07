import React from "react";
import style from "./SectionThree.module.css";

function SectionThree() {
  return (
    <div className={style.sectionThreeContainer}>
      <img src="diamond.png" alt="" width={350} className={style.img1} />
      <img src="squigly-globe.png" alt="" width={350} className={style.img2} />
      {/* <img
        src="poly-twist-knots.png"
        alt=""
        width={350}
        className={style.img3}
      /> */}
      <div className={style.sectionThreeHeading}>
        <h5>What we offer</h5>
        <h1>
          We assist brands, bring forth ambitious ideas, all while keeping it
          simple, aesthetic and practical.
        </h1>
      </div>
      <div className={style.cardsContainer}>
        <div className={style.card}>
          <h1>Copywriting</h1>
          <h5>
            We entice with words that steal one’s attention Let us WOO your
            customers!
          </h5>
          <ul>
            <li>Copywriting</li>
            <li>Media Content Marketing</li>
            <li>Content Reaserch</li>
            <li>Storytelling</li>
          </ul>
        </div>
        <div className={style.card}>
          <h1>Digital Design</h1>
          <h5>
            We entice with words that steal one’s attention Let us WOO your
            customers!
          </h5>
          <ul>
            <li>Copywriting</li>
            <li>Media Content Marketing</li>
            <li>Content Reaserch</li>
            <li>Storytelling</li>
          </ul>
        </div>
        <div className={style.card}>
          <h1>Development</h1>
          <h5>
            We entice with words that steal one’s attention Let us WOO your
            customers!
          </h5>
          <ul>
            <li>Copywriting</li>
            <li>Media Content Marketing</li>
            <li>Content Reaserch</li>
            <li>Storytelling</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
