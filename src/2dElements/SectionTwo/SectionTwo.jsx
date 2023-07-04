import style from "./SectionTwo.module.css";
import { useState, useRef } from "react";
import { useEffect } from "react";

function SectionTwo() {
  useEffect(() => {
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.current.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.current.classList.add("active");
      startX = e.pageX - slider.current.offsetLeft;
      scrollLeft = slider.current.scrollLeft;
    });

    slider.current.addEventListener("mouseleave", () => {
      isDown = false;
      slider.current.classList.remove("active");
    });

    slider.current.addEventListener("mouseup", () => {
      isDown = false;
      slider.current.classList.remove("active");
    });

    slider.current.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.current.offsetLeft;
      const walk = (x - startX) * 3;
      slider.current.scrollLeft = scrollLeft - walk;
    });
  });

  const slider = useRef();

  return (
    <div className={style.sectionTwoContainer}>
      <div className={`${style.items}`} ref={slider}>
        <div className={`${style.item} ${style.item1}`}>02</div>
        <div className={`${style.item} ${style.item2}`}>03</div>
        <div className={`${style.item} ${style.item3}`}>04</div>
        <div className={`${style.item} ${style.item4}`}>05</div>
        <div className={`${style.item} ${style.item5}`}>06</div>
        <div className={`${style.item} ${style.item6}`}>07</div>
        <div className={`${style.item} ${style.item7}`}>08</div>
        <div className={`${style.item} ${style.item8}`}>09</div>
        <div className={`${style.item} ${style.item9}`}>10</div>
        <div className={`${style.item} ${style.item10}`}>11</div>
      </div>
      {/* <div className={style.items ${style.item}vgContainer}>
        <svg
          id="emozewHK63k1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1000 800"
          shape-rendering="geometricPrecision"
          text-rendering="geometricPrecision"
        >
          <g
            style={{ isolation: "isolate" }}
            transform="matrix(1.420829 0 0-1.088432-578.600039 988.060527)"
            filter="url(#emozewHK63k2-filter)"
          >
            <path
              d="M426.11324,540c0-194.88667,40.25928-352.87354,89.92162-352.87354c16.37864,0,31.73454,17.18393,44.96081,47.2082c13.22627-30.02426,28.58216-47.2082,44.96081-47.2082c17.96591,0,34.70123,20.67594,48.7451,56.29505c14.04387-35.61911,30.77919-56.29505,48.74511-56.29505c16.37865,0,31.73454,17.18393,44.96081,47.2082c13.22627-30.02426,28.58216-47.20819,44.96081-47.20819c19.53714,0,37.61903,24.45054,52.36703,65.97939c14.748-41.52885,32.82989-65.97939,52.36703-65.97939c19.40427,0,37.37303,24.11912,52.06568,65.13451c14.69266-41.0154,32.66141-65.13452,52.06569-65.13452c49.66234,0,89.92162,157.98687,89.92162,352.87354s-40.25928,352.87354-89.92162,352.87354c-19.40427,0-37.37303-24.11912-52.06568-65.13451-14.69266,41.0154-32.66141,65.13452-52.06569,65.13452-19.53714,0-37.61903-24.45054-52.36703-65.97939-14.748,41.52885-32.82989,65.97939-52.36703,65.97939-16.37865,0-31.73454-17.18393-44.96081-47.2082-13.22627,30.02426-28.58216,47.20819-44.96081,47.20819-17.96591,0-34.70123-20.67594-48.7451-56.29505-14.04387,35.61911-30.77919,56.29505-48.74511,56.29505-16.37864,0-31.73454-17.18393-44.96081-47.2082-13.22627,30.02426-28.58216,47.2082-44.96081,47.2082-49.66234,0-89.92162-157.98687-89.92162-352.87354Z"
              transform="matrix(1 0 0 0.95625 0 23.625)"
              fill="#fff"
              strokeWidth="10"
              stroke="#000"
            />
          </g>
        </svg>

        <svg
          id="ehMJaQjk4Te1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 900 800"
          shape-rendering="geometricPrecision"
          text-rendering="geometricPrecision"
        >
          <g transform="matrix(1.406918 0 0 1.356744-124.319004-156.462105)">
            <path
              d="M114.01709,230.60052c0-51.04153,50.01265-92.41887,111.70638-92.41887c30.61515,0,58.35373,10.18951,78.53148,26.69304c16.41461-17.62727,43.18277-29.10395,73.41718-29.10395c30.1919,0,56.92729,11.44443,73.34788,29.02964c15.55188-12.91613,37.73024-20.99394,62.34747-20.99394c33.62516,0,62.70005,15.07108,76.55272,36.95756c12.62838-9.92923,30.00619-16.06191,49.1892-16.06191c38.59654,0,69.88522,24.82637,69.88522,55.45125c0,15.78507-8.3125,30.02964-21.65366,40.12813c13.32548,20.09188,21.65366,48.68749,21.65366,80.41824c0,40.07163-13.28201,75.14328-33.13745,94.40228-.37187,2.03929-.78093,4.06843-1.22659,6.08694c20.37744,11.08819,34.36403,33.9613,34.36403,60.37857c0,25.35383-12.88319,47.44311-31.9347,58.98274c19.74321,12.19562,31.9347,28.96776,31.9347,47.48039c0,37.28254-49.44604,67.50602-110.44083,67.50602-28.42628,0-54.34421-6.56446-73.91767-17.3486-16.02909,9.35195-35.39245,15.59604-56.55281,17.3486-44.41043,3.67819-84.26813-13.46048-103.45112-41.13684-11.38296,15.91064-29.18047,26.14983-49.18228,26.14983-20.9906,0-39.55357-11.27657-50.82289-28.55048-16.63067,23.0587-39.92261,37.39033-65.70537,37.39033-50.53121,0-91.49485-55.04987-91.49485-122.95732c0-39.34206,13.74921-74.36854,35.14251-96.87495-11.95131-19.8275-19.31032-46.88458-19.31032-76.71195c0-31.07309,7.98654-59.13966,20.83157-79.15804-18.65511-16.51608-30.07346-38.69818-30.07346-63.0867v-.00001Z"
              fill="#fff"
              stroke-width="10"
              stroke="#000"
            />
          </g>
        </svg>
      </div> */}
    </div>
  );
}

export default SectionTwo;
