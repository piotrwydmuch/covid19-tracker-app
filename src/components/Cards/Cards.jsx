import React, { Component } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  StylesProvider,
} from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  //Waiting for load API
  if (!confirmed) {
    return "Ładowanie...";
  }

  const lastUpdateDate = new Date(lastUpdate);
  const lastUpdateTime = [
    lastUpdateDate.getHours(),
    lastUpdateDate.getMinutes(),
    lastUpdateDate.getSeconds(),
  ];

  console.log(lastUpdate);

  return (
    <div className={styles.container}>
      <Grid container spacing={1} justify="center">
        <Grid
          xs={12}
          md={3}
          item
          component={Card}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography
              className={styles.cardTitle}
              color="textSecondary"
              gutterBottom
              align="center"
            >
              Zainfekowani
            </Typography>
            <Typography variant="h5" align="center" gutterBottom>
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {lastUpdateDate.toLocaleDateString()} {lastUpdateTime[0]}:
              {lastUpdateTime[1]}:{lastUpdateTime[2]}
            </Typography>
            <Typography variant="body2">
              Liczba zainfekowanych wirusem COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          xs={12}
          md={3}
          item
          component={Card}
          className={cx(styles.card, styles.recovered)}
        >
          {" "}
          <CardContent>
            <Typography
              className={styles.cardTitle}
              color="textSecondary"
              gutterBottom
              align="center"
            >
              Wyleczeni
            </Typography>
            <Typography variant="h5" align="center" gutterBottom>
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {lastUpdateDate.toLocaleDateString()} {lastUpdateTime[0]}:
              {lastUpdateTime[1]}:{lastUpdateTime[2]}
            </Typography>
            <Typography variant="body2">
              Liczba ludzi, którzy wyzdrowieli z COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          xs={12}
          md={3}
          item
          component={Card}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography
              className={styles.cardTitle}
              color="textSecondary"
              gutterBottom
              align="center"
            >
              Zmarli
            </Typography>
            <Typography variant="h5" align="center" gutterBottom>
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              />
            </Typography>{" "}
            <Typography color="textSecondary">
              {lastUpdateDate.toLocaleDateString()} {lastUpdateTime[0]}:
              {lastUpdateTime[1]}:{lastUpdateTime[2]}
            </Typography>
            <Typography variant="body2">
              Liczba zgonów, spowodowana wirusem COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
