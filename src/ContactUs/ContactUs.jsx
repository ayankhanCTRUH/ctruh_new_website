import React, { Suspense } from "react";
import style from "./ContactUs.module.css";
import * as THREE from "three";
import { motion } from "framer-motion";
import {
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandTwitter,
  TbBrandFacebook,
} from "react-icons/tb";
import { Canvas } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Stage, useGLTF } from "@react-three/drei";
import { easing } from "maath";
import { Helmet } from "react-helmet";

const ORG_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ctruh",
  image: "https://www.ctruh.com/src/assets/Ctruh_Logo.png",
  "@id": "",
  url: "https://www.ctruh.com/",
  telephone: "+91 7619418898",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Obeya Gusto, 5th Main Rd, Sector 6, HSR Layout",
    addressLocality: "Bengaluru",
    postalCode: "560102",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 12.9158253,
    longitude: 77.6325233,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Wednesday",
      "Monday",
      "Tuesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "10:00",
    closes: "21:00",
  },
});
const ORG_SCHEMA1 = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ctruh",
  url: "https://www.ctruh.com/",
  logo: "https://www.ctruh.com/src/assets/Ctruh_Logo.png",
  sameAs: [
    "https://www.instagram.com/hello_ctruh/",
    "https://www.facebook.com/people/Ctruh/100090491642974/",
    "https://twitter.com/HelloCtruh",
    "https://www.linkedin.com/company/ctruh/",
  ],
});
const ORG_SCHEMA2 = JSON.stringify({
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.ctruh.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact us",
      item: "https://www.ctruh.com/Contact-us",
    },
  ],
});

function Suzanne(props) {
  const { scene } = useGLTF("./explode (1).glb");
  const [dummy] = useState(() => new THREE.Object3D());
  useFrame((state, dt) => {
    dummy.lookAt(state.pointer.x, state.pointer.y, 1);
    easing.dampQ(scene.quaternion, dummy.quaternion, 0.15, dt);
  });

  return (
    <Suspense>
      <group position={[0.8, 0, 0]}>
        <Stage preset={"upfront"} position={[0, 0.7, 0]}>
          <primitive object={scene} scale={0.004} />
        </Stage>
      </group>
    </Suspense>
    // <mesh
    //   ref={mesh}
    //   geometry={nodes.Suzanne.geometry}
    //   {...props}
    //   scale={0.6}
    //   position={[2, 0, 0]}
    // >
    //   <meshNormalMaterial />
    // </mesh>
  );
}

function ContactUs() {
  return (
    <div className={style.contactMainContainer}>
      <Helmet>
        <title>Contact-us-Ctruh</title>
        <meta
          name="description"
          content="Contact us for your questions or concerns on Phone and Email."
        />
        <link href="https://www.ctruh.com/Contact-us-Ctruh" rel="canonical" />
        <link
          rel="alternate"
          href="https://www.ctruh.com/Contact-us-Ctruh"
          hreflang="en-in"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ORG_SCHEMA }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ORG_SCHEMA1 }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ORG_SCHEMA2 }}
        />
      </Helmet>
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className={style.leftSection}
      >
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Got a question? <br />
          <motion.span
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            Get in Touch{" "}
          </motion.span>
        </motion.h1>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className={style.contactInfoContainer}
        >
          <div className={style.contactInfo}>
            <h1>Banglore HQ</h1>
            <p>
              Obeya Gusto, 5th Main Rd, Sector 6, HSR Layout, Bengaluru,
              Karnataka 560102
            </p>
            <div className={style.infoNum}>
              <h5>+91 7619418898</h5>
              <h5>hello@ctruh.com</h5>
            </div>
          </div>

          <div className={style.contactInfo}>
            <h1>Pune HQ</h1>
            <p>
              Obeya Gusto, 5th Main Rd, Sector 6, HSR Layout, Bengaluru,
              Karnataka
            </p>
            <div className={style.infoNum}>
              <h5>+91 7619418898</h5>
              <h5>hello@ctruh.com</h5>
            </div>
          </div>

          <div className={style.contactInfo}>
            <h1>Contact our teams:</h1>
            <div className={style.emails}>
              <h1>Co-founder</h1>
              <p>karma.symington@multitudemedia.co.uk</p>
            </div>
            <div className={style.emails}>
              <h1>Product Manager</h1>
              <p>karma.symington@multitudemedia.co.uk</p>
            </div>
          </div>

          <div className={style.contactInfo}>
            <h1>Follow us on</h1>
            <div className={style.iconsContainer}>
              <TbBrandInstagram />
              <TbBrandLinkedin />
              <TbBrandTwitter />
              <TbBrandFacebook />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className={style.rightSection}
      >
        <div className={`${style.rounded_text} ${style.rotating}`}>
          <svg viewBox="0 0 350 350">
            <path
              id="textPath"
              d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0"
              transform="translate(175,175)"
              fill="none"
              strokeWidth="0"
            ></path>
            <g fontSize={"17px"}>
              <text textAnchor="start">
                <textPath
                  className={style.coloring}
                  xlinkHref="#textPath"
                  startOffset="0%"
                >
                  GET IN TOUCH ✦ CTRUH ✦ GET IN TOUCH ✦ CTRUH VERSE ✦
                </textPath>
              </text>
            </g>
          </svg>
        </div>
      </motion.div>

      <Canvas className={style.canvasMain} camera={{ position: [0, 0.1, 3] }}>
        {/* <ambientLight />
        <directionalLight position={[10, 10, 10]} /> */}
        <Suzanne />
      </Canvas>
    </div>
  );
}

export default ContactUs;
