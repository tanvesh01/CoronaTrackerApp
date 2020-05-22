import React, { Component } from "react";
import Grid from "../../Components/HomeGrid/Grid_cases";
class Home extends Component {
  state = {
    confirmed: null,
    deaths: null,
    recovered: null,
  };

  componentDidMount() {
    fetch("https://covid19.mathdro.id/api/countries/IN")
      .then((response) => response.json())
      .then((data) => {
        const confirmed = data.confirmed.value;
        const recovered = data.recovered.value;
        const deaths = data.deaths.value;
        this.setState({
          confirmed: confirmed,
          deaths: deaths,
          recovered: recovered,
        });
        console.log(data);
      });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Grid
            confirmed={this.state.confirmed}
            deaths={this.state.deaths}
            recovered={this.state.recovered}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
