import React from "react";
import style from "./BottomSection.module.css";
import { Canvas } from "@react-three/fiber";
import { Center, MeshReflectorMaterial } from "@react-three/drei";
import { Physics, usePlane } from "@react-three/cannon";
import { Cursor } from "../helpers/Drag";
import { Guy } from "../components/Guy";
import { Mug, Chair, Table, Lamp } from "../components/Furniture";
import { useThree } from "@react-three/fiber";

function BottomSection() {
  return (
    <div className={style.sectionMainContainer}>
      <div className={style.bottomSectionInner}>
        <div className={style.rightPart}>
          <Canvas
            dpr={[1, 2]}
            shadows
            camera={
              window.innerWidth < 800
                ? {
                    position: [-40, 10, 40],
                    fov: 25,
                    near: 1,
                    far: 100,
                  }
                : {
                    position: [-40, 10, 10],
                    fov: 25,
                    near: 1,
                    far: 100,
                  }
            }
          >
            <color attach="background" args={["#000"]} />
            <fog attach="fog" args={["#000", 60, 90]} />
            <ambientLight intensity={0.2} />
            <pointLight
              position={[-20, -5, -20]}
              color="#9600ff"
              intensity={3}
            />
            <group
              position={window.innerWidth < 800 ? [0, 0, 0] : [10, -3, 10]}
              rotation={[0, -8, 0]}
            >
              <Physics
                allowSleep={false}
                iterations={15}
                gravity={[0, -200, 0]}
              >
                <Cursor />
                <Guy />
                <Floor position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]} />
                <Chair position={[0, 0, -2.52]} />
                <Table position={[8, 0, 0]} />
                <Mug position={[8, 3, 0]} />
                <Lamp position={[0, 13, 0]} />
              </Physics>
            </group>
          </Canvas>
        </div>
        <div className={style.leftPart}>
          <h1>Ready to use Ctruh?</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            impedit doloremque ad modi eaque tempora atque id amet, sequi
            provident fugit, corporis odit corrupti dolore a vitae dignissimos
            ea. Eligendi!
          </p>
        </div>
      </div>
    </div>
  );
}
function Floor(props) {
  const [ref] = usePlane(() => ({ type: "Static", ...props }));
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[150, 150]} />
      <MeshReflectorMaterial
        color="#878790"
        blur={[400, 400]}
        resolution={1024}
        mixBlur={1}
        mixStrength={3}
        depthScale={1}
        minDepthThreshold={0.85}
        metalness={0}
        roughness={1}
      />
    </mesh>
  );
}

export default BottomSection;
