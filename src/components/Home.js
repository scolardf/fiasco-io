import React from "react";
import { Link } from "react-router-dom";
import styles from "./stylesheets/home.module.css";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.nameH1}>
        my name is <span className={styles.highlight}>Fiach Scolard</span>
      </h1>
      <p>i'm a junior developer</p>
      <div className={styles.navContainer}>
        <Link className="navLink" to="/projects">
          see my work
        </Link>
        <Link className="navLink" to="/about">
          who am i
        </Link>
      </div>
    </div>
  );
}

export default Home;
