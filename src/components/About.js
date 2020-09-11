import React from "react";

import aboutPic from "../resource/Fiach1.jpg";
import styles from "./stylesheets/about.module.css";

function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.imageContainer}>
        <img
          src={aboutPic}
          alt="pic of me :)"
        ></img>
      </div>
      <div className={styles.textContainer}>
        <h1>hey, this page is about me!</h1>
        <h2>
          i’m <span className={styles.pHighlight}>Fiach</span>, i like to play
          with computers, and i’m{" "}
          <span className={styles.pHighlight}>looking for a job!</span>
        </h2>
        <h5>education</h5>
        <hr></hr>
        <p>
          i graduated from{" "}
          <span className={styles.pHighlight}>Trinity College Dublin</span> in
          2019, with a Bachelor's degree in{" "}
          <span className={styles.pHighlight}>Computer Science</span>. i spent
          most of my time working with{" "}
          <span className={styles.pHighlight}>Python </span>
          and <span className={styles.pHighlight}>Java</span>, and in my final
          year learned to use{" "}
          <span className={styles.pHighlight}>OpenGL</span>. for my final
          project i worked with{" "}
          <span className={styles.pHighlight}>Unity</span> game engine and the{" "}
          <span className={styles.pHighlight}>Vuforia</span> SDK to create an{" "}
          <span className={styles.pHighlight}>augmented reality</span>{" "}
          application for mobile
        </p>
        <h5>currently</h5>
        <hr></hr>
        <p>
          now i’m teaching myself{" "}
          <span className={styles.pHighlight}>Javascript</span> and{" "}
          <span className={styles.pHighlight}>React</span>, which i used to
          make this site. If i’m not learning, i’m fiddling with something
          instead. whether it’s building computers (made 2 already), modding
          games until they break, or as of recent times, indoor gardening, i
          tend to keep myself occupied
        </p>
        <h5>working</h5>
        <hr></hr>
        <p>
          i’ve always like working on the visual side of things, so i’m
          looking towards <span className={styles.pHighlight}>front-end</span>{" "}
          development, <span className={styles.pHighlight}>graphics</span>{" "}
          work, or{" "}
          <span className={styles.pHighlight}>virtual/augmented reality</span>
          . if you think i might fit in somewhere, drop me a line on{" "}
          <a
            className={styles.pLink}
            href="https://www.linkedin.com/in/fiach-scolard-98350213a/"
          >
            linkedin
          </a>{" "}
          or at{" "}
          <a className={styles.pLink} href="mailto:scolardf@tcd.ie">
            scolardf@tcd.ie
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;
