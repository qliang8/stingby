import React from "react";
import styles from "./Stingby.module.css";
import { getImageUrl } from "../../utils";

export const Stingby = () => {
  return (
    <footer id="stingby" className={styles.container}>
      <div className={styles.text}>
        <h2>Stingby</h2>
        <p>Yes! I am Stingby</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("email-icon.png")} alt="email icon" />
          <a href="#">stingby@gamil.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("linkedIn-icon.png")} alt="linkedIn icon" />
          <a href="#">linkedIn.com/stingby</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("github-icon.png")} alt="email icon" />
          <a href="https://github.com/qliang8/stingby">
            github.com/qliang8/stingby
          </a>
        </li>
      </ul>
    </footer>
  );
};
