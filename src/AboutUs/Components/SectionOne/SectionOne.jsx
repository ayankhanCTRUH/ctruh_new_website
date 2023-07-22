import { useRef } from "react";
import style from "./SectionOne.module.css";
import { motion, useInView } from "framer-motion";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, useTexture } from "@react-three/drei";
import { Physics, useSphere } from "@react-three/cannon";
import { EffectComposer, N8AO, SMAA } from "@react-three/postprocessing";
import * as THREE from "three";

const rfs = THREE.MathUtils.randFloatSpread;
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const baubleMaterial = new THREE.MeshStandardMaterial({
  color: "#9600ff",
  roughness: 0,
  envMapIntensity: 1,
});

function SectionOne() {
  return (
    <div className={style.sectionOneMainContainer}>
      <div className={style.canvasContainer}>
        <Canvas
          shadows
          gl={{ antialias: false }}
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 30], fov: 25, near: 1, far: 40 }}
        >
          <ambientLight intensity={0.5} />
          <color attach="background" args={["#9600ff"]} />
          <spotLight
            intensity={1}
            angle={0.2}
            penumbra={1}
            position={[30, 30, 30]}
            castShadow
            shadow-mapSize={[512, 512]}
          />

          <Physics gravity={[0, 2, 0]} iterations={10} position={[10, 0, 0]}>
            <Pointer />
            <Clump />
          </Physics>

          <Environment files="/adamsbridge.hdr" />
          <EffectComposer disableNormalPass multisampling={0}>
            <N8AO
              halfRes
              color="black"
              aoRadius={2}
              intensity={1}
              aoSamples={6}
              denoiseSamples={4}
            />
            <SMAA />
          </EffectComposer>
        </Canvas>
      </div>
      <div className={style.sectionOneInner}>
        <motion.h1
          initial={{ x: -180, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          About Ctruh
        </motion.h1>
        <motion.p
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        >
          Ctruh is a groundbreaking no-code platform that simplifies 3D design,
          empowering anyone to create immersive experiences for the evolving
          Metaverse. Our user-friendly interface democratizes access to 3D
          content creation, fostering innovation across Realestate, Automobile,
          and beyond
        </motion.p>
      </div>
      {/* <img src="ring-abstract-shape.png" alt="" className={style.img1} />
      <img src="spiral-abstract-shape.png" alt="" className={style.img2} />
      <img src="star-mixer.png" alt="" className={style.img3} />
      <img src="ball-abstract-shape.png" alt="" className={style.img4} /> */}
    </div>
  );
}
function Clump({
  mat = new THREE.Matrix4(),
  vec = new THREE.Vector3(),
  ...props
}) {
  const texture = useTexture("/cross.jpg");
  const [ref, api] = useSphere(() => ({
    args: [1],
    mass: 1,
    angularDamping: 0.1,
    linearDamping: 0.65,
    position: [rfs(20), rfs(20), rfs(20)],
  }));
  useFrame((state) => {
    for (let i = 0; i < 40; i++) {
      // Get current whereabouts of the instanced sphere
      ref.current.getMatrixAt(i, mat);
      // Normalize the position and multiply by a negative force.
      // This is enough to drive it towards the center-point.
      api
        .at(i)
        .applyForce(
          vec
            .setFromMatrixPosition(mat)
            .normalize()
            .multiplyScalar(-40)
            .toArray(),
          [0, 0, 0]
        );
    }
  });
  return (
    <instancedMesh
      ref={ref}
      castShadow
      receiveShadow
      args={[null, null, 40]}
      geometry={sphereGeometry}
      material={baubleMaterial}
      material-map={texture}
      position={[0, 0, 0]}
      scale={1.4}
    />
  );
}

function Pointer() {
  const viewport = useThree((state) => state.viewport);
  const [, api] = useSphere(() => ({
    type: "Kinematic",
    args: [4],
    position: [8, 0, 0],
  }));
  return useFrame((state) =>
    api.position.set(
      (state.mouse.x * viewport.width) / 4,
      (state.mouse.y * viewport.height) / 4,
      0
    )
  );
}

export default SectionOne;
