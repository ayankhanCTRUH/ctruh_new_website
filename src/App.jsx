import style from "./App.module.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./3dElements/Experience";
import Overlay from "./2dElements/Overlay";
import { ScrollControls } from "@react-three/drei";

function App() {
  return (
    <div className={style.mainWebsiteContainer}>
      <Canvas fov={55} className={style.canvasContainer}>
        <ScrollControls pages={5} damping={0.15}>
          <Experience />
          <Overlay />
        </ScrollControls>
      </Canvas>
    </div>
  );
}

export default App;
