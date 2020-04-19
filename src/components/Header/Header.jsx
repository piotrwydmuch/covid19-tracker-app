import React from "react";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div>
            <h1>
              Najnowsze statystyki dotyczące epidemii koronawirusa na świecie.
            </h1>
            <p>
              Ta strona zawiera aktualne, oficjalne i wiarygodne informacje o
              nowym koronaawirusie SARS-CoV-2 powodującym chorobę COVID-19.
            </p>
            <p>
              Według WHO do objawów infekcji należą: gorączka, kaszel, duszność
              i trudności w oddychaniu.
            </p>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
