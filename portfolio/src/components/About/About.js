import React from "react";
import Styles from "../About/About.module.scss";
import { importAll } from "../lib/filesLoader";

const About = () => {
  const images = importAll(
    require.context("../../files/about", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <div className={Styles.main}>
      <div>
        <div className={Styles.about_block}>
          <p>Hi. I'm Egor.</p>
          <p>A Web Developer.</p>
        </div>
        <p className={Styles.sub_about_block}>
          I'm a passionate, persistent and hard-working dude ready to develop
          complex but beautiful projects!
        </p>
        <div className={Styles.techStackBox}>
          <p className={Styles.name}>Tech Stack</p>
          <div className={Styles.icons_box}>
            <img src={images["css3.svg"]} alt="html5" />
            <img src={images["html5.svg"]} alt="css" />
            <img src={images["js.svg"]} alt="scss" />
            <img src={images["node-js.svg"]} alt="js" />
            <img src={images["react.svg"]} alt="react" />
            <img src={images["scss.svg"]} alt="nodeJS" />
          </div>
        </div>
      </div>
      <img className={Styles.my_image} src={images["myImage.png"]} alt="" />
    </div>
  );
};

export default About;
