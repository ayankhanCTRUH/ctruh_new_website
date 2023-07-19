import React from "react";
import style from "./LandingPage.module.css";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import Banner from "./2dElements/Banner/Banner";
import Slider from "./2dElements/Slider/Slider";
import Experience1 from "./3dElements/Experience1";
import { Suspense } from "react";
import SectionOne from "./2dElements/SectionOne/SectionOne";
import SectionTwo from "./2dElements/SectionTwo/SectionTwo";
import SectionFour from "./2dElements/SectionFour/SectionFour";
import Footer from "./2dElements/Footer/Footer";
import SectionThree from "./2dElements/SectionThree/SectionThree";

function LandingPage() {
  return (
    <>
      <div className={style.canvasContainerMain}>
        <Canvas
          camera={{ position: [0, 0, -7] }}
          className={style.canvasContainer}
        >
          <Suspense fallback={null}>
            <Experience1 />
          </Suspense>
        </Canvas>
        <Banner />
      </div>
      <SectionOne />
      <SectionThree />
      <SectionFour />
      {/* <Slider /> */}
    </>
  );
}

export default LandingPage;
