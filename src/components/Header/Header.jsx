import React from "react";

import logoImage from "../../images/logo.png";

const Header = () => {
  return (
    <header>
      <nav>
        <img src={logoImage} alt="COVID-19 logo" />
      </nav>
    </header>
  );
};

export default Header;
