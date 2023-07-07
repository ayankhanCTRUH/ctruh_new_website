import React from "react";
import style from "./SectionThree.module.css";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, useTexture } from "@react-three/drei";
import { Physics, useSphere } from "@react-three/cannon";
import { EffectComposer, N8AO, SMAA } from "@react-three/postprocessing";

const rfs = THREE.MathUtils.randFloatSpread;
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const baubleMaterial = new THREE.MeshStandardMaterial({
  color: "#9600ff",
  roughness: 0,
  envMapIntensity: 1,
});

function SectionThree() {
  return (
    <div className={style.sectionThreeContainer}>
      <div className={style.leftPart}>
        <h1>Our Story</h1>
        <p>
          We are a team of experienced designers, united by our passion for
          learning and growing in our field. Over the years, we have honed our
          skills and developed a deep understanding of what it takes to create
          truly great websites. In particular, we have spent the last five years
          specialising and contributing to Webflow’s beautiful community. A very
          powerful tool that allowed us to bring our ideas to life in a seamless
          and intuitive way.
        </p>
      </div>
      <div className={style.rightPart}>
        <Canvas
          shadows
          gl={{ antialias: false }}
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 30], fov: 35, near: 1, far: 40 }}
        >
          <ambientLight intensity={0.5} />
          <color attach="background" args={["#fff"]} />
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
      position={[8, 0, 0]}
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

export default SectionThree;
