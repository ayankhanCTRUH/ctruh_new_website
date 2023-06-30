import style from "./App.module.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./3dElements/Experience";
import Overlay from "./2dElements/Overlay";
import { ScrollControls } from "@react-three/drei";
import { Html } from "@react-three/drei";
import Banner from "./2dElements/Banner/Banner";
import { useControls } from "leva";
import Experience1 from "./3dElements/Experience1";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

function App() {
  const { color } = useControls({ color: "#9600ff" });

  return (
    <div className={style.mainWebsiteContainer}>
      <Canvas
        camera={{ position: [0, 0, -7] }}
        className={style.canvasContainer}
        style={{ background: color }}
      >
        <Suspense fallback={null}>
          <Experience1 />
          <Html center style={{ width: "100vw", height: "100vh" }}>
            <Banner />
          </Html>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
