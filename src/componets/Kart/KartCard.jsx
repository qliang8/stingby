import React from "react";
import styles from "./KartCard.module.css";

import { getImageUrl } from "../../utils";

export const KartCard = ({
  kart: { name, imageSrc, description, keys, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img src={getImageUrl(imageSrc)} alt={name} className={styles.image} />
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.karts}>
        {keys.map((key, id) => {
          return (
            <li key={id} className={styles.kart}>
              {" "}
              {key}{" "}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>
          Demo
        </a>
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};
