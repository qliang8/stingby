import React from "react";
import styles from "./Hero.module.css";
// import heroImage from "../../assets/hero/heroimage.png";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Stingby!</h1>
        <p className={styles.description}>I'm a hard-working little bee</p>
        <a className={styles.profileBtn} href="#profile">
          My Profile
        </a>
      </div>
      <img
        src={getImageUrl("heroimage.png")}
        alt="Hero Image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
