import React from "react";
import style from "./Applications.module.css";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect } from "react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Applications() {
  const ref = useRef();
  const canvas = (canvas, context) => {
    const html = document.documentElement;

    const frameCount = 148;
    const currentFrame = (index) =>
      `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index
        .toString()
        .padStart(4, "0")}.jpg`;

    const preloadImages = () => {
      for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
      }
    };

    const img = new Image();
    img.src = currentFrame(1);
    canvas.width = 1158;
    canvas.height = 870;
    img.onload = function () {
      context.drawImage(img, 0, 0);
    };

    const updateImage = (index) => {
      img.src = currentFrame(index);
      context.drawImage(img, 0, 0);
    };

    window.addEventListener("scroll", () => {
      const scrollTop = html.scrollTop;
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
      );

      requestAnimationFrame(() => updateImage(frameIndex + 1));
    });
    preloadImages();
  };

  useEffect(() => {
    if (ref.current) {
      const canvas1 = ref.current.getContext("2d");
      canvas(ref.current, canvas1);
      // do something here with the canvas
    }
  }, []);

  return (
    <div id="main" className={style.applicationMainContainer}>
      <canvas ref={ref} id="page18"></canvas>
    </div>
  );
}

export default Applications;
