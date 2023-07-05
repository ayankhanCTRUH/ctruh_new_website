import style from "./App.module.css";
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

function App() {
  // const { color } = useControls({ color: "#9600ff" });

  return (
    <div className={style.mainWebsiteContainer}>
      <Canvas
        camera={{ position: [0, 0, -7] }}
        className={style.canvasContainer}
        // style={{ background: color }}
      >
        <Suspense fallback={null}>
          <Experience1 />
          <Html center style={{ width: "100vw", height: "100vh" }}>
            <Banner />
          </Html>
        </Suspense>
      </Canvas>
      <SectionOne />
      <SectionThree />
      <SectionFour />
      {/* <SectionTwo /> */}
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
