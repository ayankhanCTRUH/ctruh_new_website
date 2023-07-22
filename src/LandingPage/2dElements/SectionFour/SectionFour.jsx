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
      title: "Modeling",
      desc: "Our intuitive tools enable you to build 3D designs from the ground up. Regardless of your experience level, you can effortlessly bring your imagination to life and create design masterpieces with our simple drag-and-drop interface.",
      img: "./squigly-line.png",
      translate: "-30px",
    },
    {
      count: 2,
      title: "Viewpoints",
      desc: "Harness the power of hotspots to guide the narrative and maintain focus on key elements of your 3D design. The ability to strategically place viewpoints enhances user navigation and maximizes engagement with your work.",
      img: "./squigly-globe.png",
      translate: "-30px",
    },
    {
      count: 3,
      title: "Audio",
      desc: " Immerse your users in an engaging multi-sensory experience by incorporating spatial audio. This feature helps to create more realistic environments, mimicking real-world sound perception to enhance the depth and ambience of your 3D spaces.",
      img: "./diamond.png",
      translate: "-30px",
    },
    {
      count: 4,
      title: "Augmented Reality",
      desc: " Ctruh provides the tools needed to create captivating AR experiences. You can bring products, manuals, and even virtual tours to life, creating a sense of presence and interactivity that allows users to explore your creations in the context of their real-world environment.",
      img: "./poly-twist-knots.png",
      translate: "-30px",
    },
    {
      count: 5,
      title: "Immersive experience",
      desc: "Our software is designed to deliver an interactive and immersive browser experience. Users can explore 3D designs directly in their web browsers, eliminating the need for specialized software or hardware. This feature also facilitates the easy sharing and presentation of your work.",
      img: "./burger-shape.png",
      translate: "-30px",
    },
    {
      count: 6,
      title: "Templates",
      desc: " Ctruh offers a variety of templates to help kick-start your design process. These ready-made models cater to a range of industries and can be easily customized to suit your specific needs, helping to save time and ensure a polished end result.",
      img: "./poly-twist-knots.png",
      translate: "-30px",
    },
    {
      count: 7,
      title: "Textures",
      desc: "Our diverse library of textures gives you the freedom to add depth and realism to your designs. From realistic wood grains for interior design to complex metallic surfaces for product visualization, you can create a more immersive and visually interesting 3D design.",
      img: "./squigly-line.png",
      translate: "-30px",
    },
  ];
  return (
    <div className={style.sectionFourContainer}>
      {/* <div className={style.sectionFourHeader}>
        <div>HOME</div>
        <div className={style.offerHeading}>WHAT WE OFFER</div>
        <div>BENIFITS</div>
      </div> */}
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
