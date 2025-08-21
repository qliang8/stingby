import React from "react";

import styles from "./Kart.module.css";
import karts from "../../data/kart.json";
import { KartCard } from "./KartCard";

export const Kart = () => {
  return (
    <section id="kart" className={styles.container}>
      <h2 className={styles.title}>Kart</h2>
      <div className={styles.karts}>
        {karts.map((kart, id) => {
          return <KartCard key={id} kart={kart} />;
        })}
      </div>
    </section>
  );
};
