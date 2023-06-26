import { Scroll } from "@react-three/drei";
import React from "react";
import Banner from "./Banner/Banner";

function Overlay() {
  return (
    <Scroll html>
      <Banner />
    </Scroll>
  );
}

export default Overlay;
