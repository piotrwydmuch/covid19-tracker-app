import React from "react";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import logoImage from "../../images/logo.png";

const Nav = () => {
  return (
    <div className={styles.navContainer}>
      <NavLink to="/">
        <img src={logoImage} className={styles.logoImage} alt="COVID-19 logo" />
      </NavLink>
      <ul className={styles.nav}>
        <NavLink to="/">
          <li>Statystyki</li>
        </NavLink>
        <NavLink to="/o-wirusie">
          <li>Wirus</li>
        </NavLink>
        <NavLink to="/o-stronie">
          <li>O stronie</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Nav;
