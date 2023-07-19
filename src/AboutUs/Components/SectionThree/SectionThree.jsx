import { useRef, useEffect } from "react";
import style from "./SectionThree.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function SectionThree() {
  const canvasref = useRef();
  const pageEnd = useRef();

  const canvas = (canvas, context) => {
    const html = document.documentElement;

    const frameCount = 118;
    // const currentFrame = (index) =>
    //   `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index
    //     .toString()
    //     .padStart(4, "0")}.jpg`;
    function currentFrame(index) {
      var data = `
      https://zelt.app/assets/img/home/hero/sequence/1.webp
      https://zelt.app/assets/img/home/hero/sequence/2.webp
      https://zelt.app/assets/img/home/hero/sequence/3.webp
      https://zelt.app/assets/img/home/hero/sequence/4.webp
      https://zelt.app/assets/img/home/hero/sequence/5.webp
      https://zelt.app/assets/img/home/hero/sequence/6.webp
      https://zelt.app/assets/img/home/hero/sequence/7.webp
      https://zelt.app/assets/img/home/hero/sequence/8.webp
      https://zelt.app/assets/img/home/hero/sequence/9.webp
      https://zelt.app/assets/img/home/hero/sequence/10.webp
      https://zelt.app/assets/img/home/hero/sequence/11.webp
      https://zelt.app/assets/img/home/hero/sequence/12.webp
      https://zelt.app/assets/img/home/hero/sequence/13.webp
      https://zelt.app/assets/img/home/hero/sequence/14.webp
      https://zelt.app/assets/img/home/hero/sequence/15.webp
      https://zelt.app/assets/img/home/hero/sequence/16.webp
      https://zelt.app/assets/img/home/hero/sequence/17.webp
      https://zelt.app/assets/img/home/hero/sequence/18.webp
      https://zelt.app/assets/img/home/hero/sequence/19.webp
      https://zelt.app/assets/img/home/hero/sequence/20.webp
      https://zelt.app/assets/img/home/hero/sequence/21.webp
      https://zelt.app/assets/img/home/hero/sequence/22.webp
      https://zelt.app/assets/img/home/hero/sequence/23.webp
      https://zelt.app/assets/img/home/hero/sequence/24.webp
      https://zelt.app/assets/img/home/hero/sequence/25.webp
      https://zelt.app/assets/img/home/hero/sequence/26.webp
      https://zelt.app/assets/img/home/hero/sequence/27.webp
      https://zelt.app/assets/img/home/hero/sequence/28.webp
      https://zelt.app/assets/img/home/hero/sequence/29.webp
      https://zelt.app/assets/img/home/hero/sequence/30.webp
      https://zelt.app/assets/img/home/hero/sequence/31.webp
      https://zelt.app/assets/img/home/hero/sequence/32.webp
      https://zelt.app/assets/img/home/hero/sequence/33.webp
      https://zelt.app/assets/img/home/hero/sequence/34.webp
      https://zelt.app/assets/img/home/hero/sequence/35.webp
      https://zelt.app/assets/img/home/hero/sequence/36.webp
      https://zelt.app/assets/img/home/hero/sequence/37.webp
      https://zelt.app/assets/img/home/hero/sequence/38.webp
      https://zelt.app/assets/img/home/hero/sequence/39.webp
      https://zelt.app/assets/img/home/hero/sequence/40.webp
      https://zelt.app/assets/img/home/hero/sequence/41.webp
      https://zelt.app/assets/img/home/hero/sequence/42.webp
      https://zelt.app/assets/img/home/hero/sequence/43.webp
      https://zelt.app/assets/img/home/hero/sequence/44.webp
      https://zelt.app/assets/img/home/hero/sequence/45.webp
      https://zelt.app/assets/img/home/hero/sequence/46.webp
      https://zelt.app/assets/img/home/hero/sequence/47.webp
      https://zelt.app/assets/img/home/hero/sequence/48.webp
      https://zelt.app/assets/img/home/hero/sequence/49.webp
      https://zelt.app/assets/img/home/hero/sequence/50.webp
      https://zelt.app/assets/img/home/hero/sequence/51.webp
      https://zelt.app/assets/img/home/hero/sequence/52.webp
      https://zelt.app/assets/img/home/hero/sequence/53.webp
      https://zelt.app/assets/img/home/hero/sequence/54.webp
      https://zelt.app/assets/img/home/hero/sequence/55.webp
      https://zelt.app/assets/img/home/hero/sequence/56.webp
      https://zelt.app/assets/img/home/hero/sequence/57.webp
      https://zelt.app/assets/img/home/hero/sequence/58.webp
      https://zelt.app/assets/img/home/hero/sequence/59.webp
      https://zelt.app/assets/img/home/hero/sequence/60.webp
      https://zelt.app/assets/img/home/hero/sequence/61.webp
      https://zelt.app/assets/img/home/hero/sequence/62.webp
      https://zelt.app/assets/img/home/hero/sequence/63.webp
      https://zelt.app/assets/img/home/hero/sequence/64.webp
      https://zelt.app/assets/img/home/hero/sequence/65.webp
      https://zelt.app/assets/img/home/hero/sequence/66.webp
      https://zelt.app/assets/img/home/hero/sequence/67.webp
      https://zelt.app/assets/img/home/hero/sequence/68.webp
      https://zelt.app/assets/img/home/hero/sequence/69.webp
      https://zelt.app/assets/img/home/hero/sequence/70.webp
      https://zelt.app/assets/img/home/hero/sequence/71.webp
      https://zelt.app/assets/img/home/hero/sequence/72.webp
      https://zelt.app/assets/img/home/hero/sequence/73.webp
      https://zelt.app/assets/img/home/hero/sequence/74.webp
      https://zelt.app/assets/img/home/hero/sequence/75.webp
      https://zelt.app/assets/img/home/hero/sequence/76.webp
      https://zelt.app/assets/img/home/hero/sequence/77.webp
      https://zelt.app/assets/img/home/hero/sequence/78.webp
      https://zelt.app/assets/img/home/hero/sequence/79.webp
      https://zelt.app/assets/img/home/hero/sequence/80.webp
      https://zelt.app/assets/img/home/hero/sequence/81.webp
      https://zelt.app/assets/img/home/hero/sequence/82.webp
      https://zelt.app/assets/img/home/hero/sequence/83.webp
      https://zelt.app/assets/img/home/hero/sequence/84.webp
      https://zelt.app/assets/img/home/hero/sequence/85.webp
      https://zelt.app/assets/img/home/hero/sequence/86.webp
      https://zelt.app/assets/img/home/hero/sequence/87.webp
      https://zelt.app/assets/img/home/hero/sequence/88.webp
      https://zelt.app/assets/img/home/hero/sequence/89.webp
      https://zelt.app/assets/img/home/hero/sequence/90.webp
      https://zelt.app/assets/img/home/hero/sequence/91.webp
      https://zelt.app/assets/img/home/hero/sequence/92.webp
      https://zelt.app/assets/img/home/hero/sequence/93.webp
      https://zelt.app/assets/img/home/hero/sequence/94.webp
      https://zelt.app/assets/img/home/hero/sequence/95.webp
      https://zelt.app/assets/img/home/hero/sequence/96.webp
      https://zelt.app/assets/img/home/hero/sequence/97.webp
      https://zelt.app/assets/img/home/hero/sequence/98.webp
      https://zelt.app/assets/img/home/hero/sequence/99.webp
      https://zelt.app/assets/img/home/hero/sequence/100.webp
      https://zelt.app/assets/img/home/hero/sequence/101.webp
      https://zelt.app/assets/img/home/hero/sequence/102.webp
      https://zelt.app/assets/img/home/hero/sequence/103.webp
      https://zelt.app/assets/img/home/hero/sequence/104.webp
      https://zelt.app/assets/img/home/hero/sequence/105.webp
      https://zelt.app/assets/img/home/hero/sequence/106.webp
      https://zelt.app/assets/img/home/hero/sequence/107.webp
      https://zelt.app/assets/img/home/hero/sequence/108.webp
      https://zelt.app/assets/img/home/hero/sequence/109.webp
      https://zelt.app/assets/img/home/hero/sequence/110.webp
      https://zelt.app/assets/img/home/hero/sequence/111.webp
      https://zelt.app/assets/img/home/hero/sequence/112.webp
      https://zelt.app/assets/img/home/hero/sequence/113.webp
      https://zelt.app/assets/img/home/hero/sequence/114.webp
      https://zelt.app/assets/img/home/hero/sequence/115.webp
      https://zelt.app/assets/img/home/hero/sequence/116.webp
      https://zelt.app/assets/img/home/hero/sequence/117.webp
      https://zelt.app/assets/img/home/hero/sequence/118.webp
   `;
      return data.split("\n")[index];
    }

    const preloadImages = () => {
      for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
      }
    };

    const img = new Image();
    img.src = currentFrame(1);
    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
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
    if (canvasref.current) {
      const canvas1 = canvasref.current.getContext("2d");
      canvas(canvasref.current, canvas1);
      // do something here with the canvas
    }
    gsap.to(canvasref.current, {
      scrollTrigger: {
        trigger: canvasref.current,
        start: "top top",
        end: "bottom bottom",
        endTrigger: pageEnd.current,
        markers: true,
        scrub: 1,
        pin: canvasref.current,
      },
    });
  }, []);

  return (
    <div className={style.sectionThreeContainer}>
      <canvas ref={canvasref}></canvas>
      <div className={style.page}></div>
      <div className={style.page}></div>
      <div className={style.page}></div>
      <div className={style.page}></div>
      <div className={style.page8} ref={pageEnd}></div>
      {/* <div className={style.leftPart}>
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

      </div> */}
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
