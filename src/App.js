import React, { Component } from "react";
import { Cards, Chart, CountryPicker, Header, Footer } from "./components";
import { fetchData } from "./api";

import styles from "./App.module.css";

class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({
      data: fetchedData,
    });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({
      data: fetchedData,
      country: country,
    });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <Header />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Cards data={data} />
        <Chart data={data} country={country} />
        <Footer />
      </div>
    );
  }
}

export default App;
