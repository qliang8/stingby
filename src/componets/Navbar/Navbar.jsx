import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils.js";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Home
      </a>
      <div className={styles.menu}>
        <ul className={styles.menuItems}>
          {/* <img 
                  className={styles.menuBtn} 
                  src={getImageUrl("nav/menu-icon.png")}
                  alt="Menu Icon" 
                /> */}
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#profile">Profile</a>
          </li>
          <li>
            <a href="#kart">My Kart</a>
          </li>
          <li>
            <a href="#naming">Naming</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
