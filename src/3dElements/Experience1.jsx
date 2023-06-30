import { Suspense } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Box, Torus } from "@react-three/drei";
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier";
import { useState } from "react";
import { ContactShadows } from "@react-three/drei";
import { Environment, Lightformer, Preload } from "@react-three/drei";
import { useRef, useEffect } from "react";

function Experience1() {
  const [hovered, setHovered] = useState(false);
  const allGlbs = useGLTF([
    "0 (15).glb",
    "0 (15).glb",
    "0 (16).glb",
    "0 (17).glb",
    "0 (18).glb",
    "0 (19).glb",
    "0 (20).glb",
    "0 (21).glb",
    "0 (22).glb",
    "0 (15).glb",
    "0 (15).glb",
    "0 (16).glb",
    "0 (17).glb",
    "0 (18).glb",
    "0 (19).glb",
    "0 (20).glb",
    "0 (21).glb",
    "0 (22).glb",
    "0 (23).glb",
    "1 (3).glb",
    "0 (23).glb",
    "1 (3).glb",
    "0 (22).glb",
    "0 (23).glb",
    "1 (3).glb",
    "0 (23).glb",
    "1 (3).glb",
  ]);
  const body = useRef([]);
  //   useEffect(() => {
  //     console.log(body);
  //   });
  const jump = (jump, hover) => {
    // jump.current.applyImpulse({ x: 0, y: 5, z: 0 });

    hover && jump.applyImpulse({ x: 0, y: 4, z: 0 }, true);

    // // A continuous force
    // jump.addForce({ x: 0, y: 0, z: 0 }, true);

    // // A one-off torque rotation
    // jump.applyTorqueImpulse({ x: 0, y: 0, z: 0 }, true);

    // // A continuous torque
    // jump.addTorque({ x: 0, y: 0, z: 0 }, true);
  };

  return (
    <>
      <Physics>
        {allGlbs.map((data, i) => (
          <RigidBody
            key={i}
            colliders="hull"
            position={[
              Math.floor(Math.random() * (8 - -8)) + -8,
              4,
              Math.floor(Math.random() * (3 - -3)) + -3,
            ]}
            rotation={[Math.random(), Math.random(), Math.random()]}
            restitution={0.2}
            friction={1}
            ref={(el) => (body.current[i] = el)}
            castShadow
            linearDamping={0.2}
            angularDamping={0.2}
            onPointerEnter={(e) => jump(body.current[i], true)}
            onPointerLeave={(e) => jump(body.current[i], false)}
            // onClick={(e) => jump(body.current[i])}
          >
            <primitive object={data.scene} scale={0.2} />
          </RigidBody>
        ))}

        {/** Invisible walls */}
        <CuboidCollider position={[0, -3, 0]} args={[100, 1, 100]} />
      </Physics>
      {/** Environment (for reflections) */}
      <Environment
        files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/dancing_hall_1k.hdr"
        resolution={1024}
      >
        {/** On top of the HDRI we add some rectangular and circular shapes for nicer reflections */}
        <group rotation={[-Math.PI / 3, 0, 0]}>
          <Lightformer
            intensity={1}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={[10, 10, 1]}
          />
          {[2, 0, 2, 0, 2, 0, 2, 0].map((x, i) => (
            <Lightformer
              key={i}
              form="circle"
              intensity={2}
              rotation={[Math.PI / 2, 0, 0]}
              position={[x, 4, i * 4]}
              scale={[4, 1, 1]}
            />
          ))}
          <Lightformer
            intensity={1}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={[50, 2, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={[50, 2, 1]}
          />
        </group>
      </Environment>
      {/** Contact shadows for naive soft shadows */}
      <ContactShadows
        smooth={false}
        scale={100}
        position={[0, -2.1, 0]}
        blur={0.5}
        opacity={0.75}
      />
      {/** Yomotsu/camera-controls, a better replacement for OrbitControls */}

      {/** Makes sure everything is processed and GPU uploaded before Threejs "sees" it */}
      <Preload all />
      {/* <ContactShadows position={[0, -4.5, 0]} scale={20} blur={5} far={4.5} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <Suspense>
        <Physics>
          {allGlbs.map((data) => (
            <RigidBody
              colliders="hull"
              position={[
                Math.floor(Math.random() * (6 - -6 + 1)) + -6,
                Math.floor(Math.random() * (5 - 2 + 1)) + 2,
                -2,
              ]}
              restitution={0.2}
              friction={1}
              // ref={body}
              castShadow
              linearDamping={0.2}
              angularDamping={0.2}
            >
              <primitive object={data.scene} castShadow scale={0.3} />
            </RigidBody>
          ))}

          <CuboidCollider position={[0, -2, 0]} args={[100, 0.2, 100]}>
            <Box
              receiveShadow
              args={[20, 0.2, 20]}
              material={
                new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 })
              }
            />
          </CuboidCollider>
        </Physics>
        <Environment preset="city" />
      </Suspense> */}
    </>
  );
}

export default Experience1;
