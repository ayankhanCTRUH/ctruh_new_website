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
import { Helmet } from "react-helmet";

const ORG_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ctruh",
  image: "https://www.ctruh.com/src/assets/Ctruh_Logo.webp",
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
  logo: "https://www.ctruh.com/src/assets/Ctruh_Logo.webp",
  sameAs: [
    "https://www.instagram.com/hello_ctruh/",
    "https://www.facebook.com/people/Ctruh/100090491642974/",
    "https://twitter.com/HelloCtruh",
    "https://www.linkedin.com/company/ctruh/",
  ],
});
function LandingPage() {
  return (
    <>
      <Helmet>
        <title>
          Ctruh - Leading Web based No Code Platform to democratise the 3D world
        </title>
        <meta
          name="description"
          content="Ctruh offers a user-friendly web No Code Platform, enabling anyone to create 3D experiences without coding. Enter Ctruh-verse to design immersive VR/AR/XR effortlessly."
        />
        <link href="https://www.ctruh.com/" rel="canonical" />
        <link rel="alternate" href="https://www.ctruh.com/" hreflang="en-in" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ORG_SCHEMA }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ORG_SCHEMA1 }}
        />
        <meta
          name="google-site-verification"
          content="diKqYKwDcICPoZvx13xqZr-b0tBuWjY4fXGXaxI1Jb4"
        />
      </Helmet>
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
