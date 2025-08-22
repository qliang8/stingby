import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils.js";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Home
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("close-icon.png")
              : getImageUrl("menu-icon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
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
            <a href="#stingby">Stingby</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
