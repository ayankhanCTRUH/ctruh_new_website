import React from "react";
import style from "./AboutUs.module.css";
import SectionOne from "./Components/SectionOne/SectionOne";
import SectionThree from "./Components/SectionThree/SectionThree";
import SectionTwo from "./Components/SectionTwo/SectionTwo";
import { Helmet } from "react-helmet";

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

function AboutUs() {
  return (
    <>
      <Helmet>
        <title>About-Us-Ctruh</title>
        <meta
          name="description"
          content="Ctruh, a no-code platform that makes it dead-simple for anyone to design and create 3D experiences without any prior technical knowledge. "
        />
        <link href="https://www.ctruh.com/aboutus" rel="canonical" />
        <link
          rel="alternate"
          href="https://www.ctruh.com/aboutus"
          hreflang="en-in"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ORG_SCHEMA2 }}
        />
      </Helmet>
      <SectionOne />
      <SectionTwo />
      {/* <SectionThree /> */}
    </>
  );
}

export default AboutUs;
