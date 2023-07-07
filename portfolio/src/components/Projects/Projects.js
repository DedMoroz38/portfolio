import React, { useEffect, useRef } from "react";
import Styles from "./Projects.module.scss";
import { importAll } from "../lib/filesLoader";

const Projects = () => {
  const HeadingRef = useRef(null);
  const files = importAll(
    require.context("../../files/pintogram", false, /\.(png|jpe?g|svg)$/)
  );
  const videos = importAll(
    require.context("../../files/pintogram", false, /\.(mp4)$/)
  );
  const fileKeys = [...Object.keys(files), ...Object.keys(videos)];

  const jumpEffect = () => {
    const windowHeigth = window.innerHeight;
    const pageTop = HeadingRef.current.getBoundingClientRect().top;
    const revealPoint = 50;

    if (pageTop < windowHeigth - revealPoint) {
      HeadingRef.current.classList.add(Styles.active);
    } else {
      HeadingRef.current.classList.remove(Styles.active);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      jumpEffect();
    });
    return () => {
      window.removeEventListener("scroll", jumpEffect);
    };
  }, []);
  console.log(fileKeys);

  return (
    <div className={Styles.main}>
      <h2 ref={HeadingRef} className={Styles.heading}>
        Projects
      </h2>
      <div className={Styles.animation_box}>
        <div className={Styles.box}>
          {fileKeys.map((file, index) => {
            if (file.slice(-3) == "mp4") {
              return (
                <span
                  key={index}
                  style={{
                    transform: `rotateY(calc(${
                      index + 1
                    } * 45deg)) translateZ(400px)`,
                  }}
                >
                  <video autoPlay={true} muted={true} loop={true}>
                    <source src={videos[file]} type="video/mp4" />
                  </video>
                  {/* <video autoPlay muted controls src={videos[file]}></video> */}
                </span>
              );
            } else {
              return (
                <span
                  key={index}
                  style={{
                    transform: `rotateY(calc(${
                      index + 1
                    } * 45deg)) translateZ(400px)`,
                  }}
                >
                  <img src={files[file]} alt="" />
                </span>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
