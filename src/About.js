import React from "react";
import codeImage from "./images/codeImage.jpg";

const About = () => {
  return (
    <div style={{ margin: "50px 4%", maxWidth: "1170px" }}>
      <h1>O stronie</h1>
      <div
        style={{
          width: "100%",
          height: "200px",
          backgroundImage: `url(${codeImage})`,
          backgroundSize: "contain",
        }}
      ></div>
      <div>
        <h2>Opis</h2>
        <p>
          Aplikacja pozwala śledzić aktualne statystyki zachorowań, spododowane
          wirusem COVID-19.
        </p>
        <p>
          Aplikacja została wykonana w ramach projektu i kursu Politechniki
          Warszawskiej- Architektury i technologie systemów internetowych.
        </p>
      </div>
      <div>
        <h2>Technologie </h2>
        <ul>
          <li>React.js</li>
          <li>React Router</li>
          <li>Material-UI</li>
          <li>JavaScript</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Git</li>
        </ul>
        <p>
          Dane są pobierane z API:<br></br>
          <a href="https://covid19.mathdro.id/api">
            https://covid19.mathdro.id/api
          </a>
        </p>
        <p>
          Strona jest hostowana na platformie Netlify:<br></br>
          <a href="https://www.netlify.com/">https://www.netlify.com/</a>
        </p>
        <p>
          Repozytorium projektu znajduje się na GitHub:<br></br>
          <a href="https://github.com/piotrwydmuch/covid19-tracker-app">
            https://github.com/piotrwydmuch/covid19-tracker-app
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
