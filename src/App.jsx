import style from "./App.module.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./3dElements/Experience";
import Overlay from "./2dElements/Overlay";
import { ScrollControls } from "@react-three/drei";
import { Html } from "@react-three/drei";
import Banner from "./2dElements/Banner/Banner";
import { useControls } from "leva";

function App() {
  const { color } = useControls({ color: "#0079ff" });
  return (
    <div className={style.mainWebsiteContainer}>
      <Canvas
        shadows
        className={style.canvasContainer}
        style={{ background: color }}
      >
        {/* <ScrollControls pages={5} damping={0.15}> */}
        <Experience />
        <Html center style={{ width: "100vw", height: "100vh" }}>
          <Banner />
        </Html>
        {/* </ScrollControls> */}
      </Canvas>

      {/* <Overlay /> */}
    </div>
  );
}

export default App;
