import React from "react";
import styles from "./About.module.css";
// import aboutImage from "../../assets/about/aboutimage.png";
// import itemImage from "../../assets/about/item.png";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("aboutimage.png")}
          alt="About Stingby"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("item.png")}
              alt="Stingby Item"
              className={styles.aboutItemImage}
            />
            <div className={styles.aboutItemText}>
              <h3>Stingby - The Hardworking Bee</h3>
              <p>
                I am Stingby, a diligent little bee who loves to work hard and
                make a difference in the world.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("item.png")}
              alt="Stingby Item"
              className={styles.aboutItemImage}
            />
            <div className={styles.aboutItemText}>
              <h3>Physical description</h3>
              <p>
                Stingby is an airborne enemy resembling a bipedal bee. It has a
                yellow egg-shaped body with brown stripes all covered in fur. It
                has huge, cartoony eyes with a single stinger on its “nose”. It
                has two small legs, and small wings sitting on the top of its
                body.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("item.png")}
              alt="Stingby Item"
              className={styles.aboutItemImage}
            />
            <div className={styles.aboutItemText}>
              <h3>Behavior</h3>
              <p>
                They chase after Mario and Luigi when they are encountered and
                the Bros may defeat it by jumping on top of it or by any
                power-up. These enemies are located mainly in sky levels and can
                only fly straight unlike other bees which can fly up and/or down
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
