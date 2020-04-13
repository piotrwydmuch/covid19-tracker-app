import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <p className={styles.text}>
        Made with ReactJS and{" "}
        <a href="https://covid19.mathdro.id/api" rel="nofollow">
          covid-19 API
        </a>
        .
      </p>
      <p className={styles.text}>Piotr Wydmuch | 2020</p>
    </footer>
  );
};

export default Footer;
