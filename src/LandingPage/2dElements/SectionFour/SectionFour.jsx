import { useEffect } from "react";
import { useState } from "react";
import style from "./SectionFour.module.css";

function SectionFour() {
  const [hover, setHover] = useState(null);
  useEffect(() => {
    console.log(hover);
  });
  const cardsData = [
    {
      count: 1,
      title: "3D Modeling",
      desc: "Work with your team in real-time and set individual permissions.Parametric objects, polygonal editing, and more.",
      img: "./squigly-line.png",
      translate: "-30px",
    },
    {
      count: 2,
      title: "Animation",
      desc: "Work with your team in real-time and set individual permissions.Parametric objects, polygonal editing, and more.",
      img: "./squigly-globe.png",
      translate: "-30px",
    },
    {
      count: 3,
      title: "Interactive ",
      desc: "Work with your team in real-time and set individual permissions.Parametric objects, polygonal editing, and more.",
      img: "./diamond.png",
      translate: "-30px",
    },
    {
      count: 4,
      title: "Physics",
      desc: "Work with your team in real-time and set individual permissions.Parametric objects, polygonal editing, and more.",
      img: "./poly-twist-knots.png",
      translate: "-30px",
    },
    {
      count: 5,
      title: "Textures",
      desc: "Work with your team in real-time and set individual permissions.Parametric objects, polygonal editing, and more.",
      img: "./burger-shape.png",
      translate: "-30px",
    },
  ];
  return (
    <div className={style.sectionFourContainer}>
      <div className={style.sectionFourHeader}>
        <div>HOME</div>
        <div className={style.offerHeading}>WHAT WE OFFER</div>
        <div>BENIFITS</div>
      </div>
      <div className={style.featureContainer}>
        <img src={hover?.img ? hover?.img : "./squigly-line.png"} alt="" />
        {cardsData.map((data) => (
          <>
            <div
              className={style.feature}
              onMouseOver={() => setHover(data)}
              onMouseDown={() => setHover(null)}
            >
              <div
                className={style.featureInner}
                style={{
                  transform: `translate(${
                    hover?.title === data.title ? hover.translate : 0
                  },0)`,
                }}
              >
                <h1>{data.title}</h1>
                <p
                  className={
                    hover?.title === data.title
                      ? style.featureDescActive
                      : style.featureDesc
                  }
                >
                  {hover?.title === data.title ? data.desc : ""}
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className={style.imgContainer}>
        {cardsData.map((data) => (
          <img
            src={data.img}
            alt=""
            className={
              data.img === hover?.img ? style.imgActive : style.imgInActive
            }
          />
        ))}
      </div>
    </div>
  );
}

export default SectionFour;
