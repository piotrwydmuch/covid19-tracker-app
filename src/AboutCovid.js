import React from "react";
import imageVirus from "./images/covid-4948866_640.png";

const AboutCovid = () => {
  return (
    <div style={{ margin: "50px 4%", maxWidth: "1170px" }}>
      <h1>O wirusie</h1>
      <div
        style={{
          width: "100%",
          height: "200px",
          backgroundImage: `url(${imageVirus})`,
          backgroundSize: "contain",
        }}
      ></div>
      <div>
        <h2>Przyczyna</h2>
        <p>
          Choroba COVID-2019 jest powodowana przez wirus SARS-CoV-2, który jest
          spokrewniony z wirusem SARS i wcześniej był nazywany roboczo
          „2019-nCoV” (z ang. 2019 novel coronavirus). W grudniu 2019 po raz
          pierwszy zdiagnozowano chorobę w chińskiej prowincji Hubei, której
          stolicą jest Wuhan. Chińscy naukowcy wskazali, że źródłem nowego
          koronawirusa są zwierzęta i potencjalnym nosicielem pośrednim mogą być
          łuskowce.
        </p>
        <p>
          W marcu 2020 roku naukowcy z Toronto, w tym mikrobiolog kliniczny z
          Uniwersytetu Toronto dr Robert Kozak, wyizolowali koronawirusa
          SARS-CoV-2, co stanowi istotny etap w opracowaniu leku i szczepionek.
        </p>
      </div>
      <div>
        <h2>Objawy</h2>
        <p>
          Większość pacjentów ma łagodne objawy i dobre rokowania, do typowych
          objawów choroby zaliczają się gorączka, suchy kaszel, zmęczenie i
          płytki oddech. Do mniej częstych objawów należą m.in. biegunka, ból
          gardła, katar oraz kichanie. Większość przypadków choroby ma łagodny
          przebieg, jednak część może prowadzić do zapalenia płuc lub
          niewydolności wielonarządowej.
        </p>
        <p>
          Rozwijające się zakażenie wirusem może prowadzić do zapalenia płuc,
          zespołu ostrej niewydolności oddechowej, posocznicy i wstrząsu
          septycznego oraz do śmierci. Najczęstszy okres wylęgania wirusa wynosi
          od 1 do 14 dni, a jego mediana wynosi 5–6 dni.
        </p>
        <p style={{ fontSize: "10px" }}>
          Źródło:
          <a href="https://pl.wikipedia.org/wiki/COVID-19">
            https://pl.wikipedia.org/wiki/COVID-19
          </a>
        </p>
      </div>
    </div>
  );
};

export default AboutCovid;
